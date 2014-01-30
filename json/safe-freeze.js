[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn indexed version of the ST monad with support for safely freezing\n multiple arrays. Compare to the usual ST monad, where the only support\n for safely freezing arrays is runSTUArray -- only one array may be frozen.\n\u003c/p\u003e\u003cp\u003eThis version of the ST monad has two distinct stages of processing:\n the \u003cem\u003enormal\u003c/em\u003e stage, and the \u003cem\u003efreeze\u003c/em\u003e stage. Reading and writing are\n permitted in the normal stage; reading and freezing are permitted\n in the freeze stage. This policy ensures that no writes occur after\n the arrays have been frozen.\n\u003c/p\u003e\u003cp\u003eThis ST is an \u003cem\u003eindexed\u003c/em\u003e monad (see \u003ca\u003eControl.Monad.Indexed\u003c/a\u003e) as well\n as a normal monad. That is, each monadic value will have an\n \"ingoing\" state thread as well as an \"outgoing\" state\n thread. These state threads are similar to the ST monad's state\n thread, except that they are now annotated with a stage name:\n either \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFreeze\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Freeze.html",
        "fct-type": "module",
        "title": "Freeze"
      },
      "index": {
        "description": "An indexed version of the ST monad with support for safely freezing multiple arrays Compare to the usual ST monad where the only support for safely freezing arrays is runSTUArray only one array may be frozen This version of the ST monad has two distinct stages of processing the normal stage and the freeze stage Reading and writing are permitted in the normal stage reading and freezing are permitted in the freeze stage This policy ensures that no writes occur after the arrays have been frozen This ST is an indexed monad see Control.Monad.Indexed as well as normal monad That is each monadic value will have an ingoing state thread as well as an outgoing state thread These state threads are similar to the ST monad state thread except that they are now annotated with stage name either Normal or Freeze",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "Freeze",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "Freeze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:Freeze",
      "description": {
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Freeze.html#Freeze",
        "fct-type": "data",
        "title": "Freeze"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "Freeze",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "Freeze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:MonadST",
      "description": {
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ST-Freeze.html#MonadST",
        "fct-type": "class",
        "title": "MonadST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "MonadST",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "Monad ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:Normal",
      "description": {
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Freeze.html#Normal",
        "fct-type": "data",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "Normal",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:ST",
      "description": {
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Freeze.html#ST",
        "fct-type": "type",
        "title": "ST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "ST",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:STFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eA computation containing some freezes but no writes: it starts in\n | any stage, but ends in the Freeze stage.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Freeze.html#STFreeze",
        "fct-type": "type",
        "title": "STFreeze"
      },
      "index": {
        "description": "computation containing some freezes but no writes it starts in any stage but ends in the Freeze stage",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "STFreeze",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STFreeze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:STNormal",
      "description": {
        "fct-descr": "\u003cp\u003eA computation containing some writes but no freezes: it starts\n | and ends in the \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e stage.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Freeze.html#STNormal",
        "fct-type": "type",
        "title": "STNormal"
      },
      "index": {
        "description": "computation containing some writes but no freezes it starts and ends in the Normal stage",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "STNormal",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STNormal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:STRead",
      "description": {
        "fct-descr": "\u003cp\u003eA computation containing only reads: it starts and ends in any\n stage, but does not change stage. (Note that there would be no loss\n of safety in allowing the stage to change, but it may result in\n ambiguous types, or extra type annotations being required.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Freeze.html#STRead",
        "fct-type": "type",
        "title": "STRead"
      },
      "index": {
        "description": "computation containing only reads it starts and ends in any stage but does not change stage Note that there would be no loss of safety in allowing the stage to change but it may result in ambiguous types or extra type annotations being required",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "STRead",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STRead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:STT",
      "description": {
        "fct-descr": "\u003cp\u003eAn ST monad transformer. However, this is not a genuine monad\n transformer, as that would be unsafe (see\n \u003ca\u003ehttp://www.haskell.org/pipermail/glasgow-haskell-users/2009-February/016554.html\u003c/a\u003e). To\n retain safety, it may only act as a monad transformer over the\n \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monads, enforced by the \u003ccode\u003e\u003ca\u003eSTTBase\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eDefining \u003ccode\u003e\u003ca\u003eSTT\u003c/a\u003e\u003c/code\u003e as a monad transformer rather than just a monad\n allows ST arrays to be used in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, bringing safe\n freezing also to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Freeze.html#STT",
        "fct-type": "data",
        "title": "STT"
      },
      "index": {
        "description": "An ST monad transformer However this is not genuine monad transformer as that would be unsafe see http www.haskell.org pipermail glasgow-haskell-users February html To retain safety it may only act as monad transformer over the Identity and IO monads enforced by the STTBase typeclass Defining STT as monad transformer rather than just monad allows ST arrays to be used in the IO monad bringing safe freezing also to the IO monad",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "STT",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#t:STTBase",
      "description": {
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ST-Freeze.html#STTBase",
        "fct-type": "class",
        "title": "STTBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "STTBase",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STTBase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eA restricted analog of Control.Monad.Trans.lift.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "m a -\u003e STT m (stg s) (stg s) a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "restricted analog of Control.Monad.Trans.lift",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "lift",
        "normalized": "a b-\u003eSTT a(c d)(c d)b",
        "package": "safe-freeze",
        "partial": "",
        "signature": "m a-\u003eSTT m(stg s)(stg s)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:liftRead",
      "description": {
        "fct-descr": "\u003cp\u003eFor lifting any operations containing reads but no writes or freezes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "ST s a -\u003e STRead st s a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#liftRead",
        "fct-type": "method",
        "title": "liftRead"
      },
      "index": {
        "description": "For lifting any operations containing reads but no writes or freezes",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "liftRead",
        "normalized": "ST a b-\u003eSTRead c a b",
        "package": "safe-freeze",
        "partial": "Read",
        "signature": "ST s a-\u003eSTRead st s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:liftST",
      "description": {
        "fct-descr": "\u003cp\u003eFor lifting any operations containing writes but no freezes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "ST s a -\u003e STNormal st s a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#liftST",
        "fct-type": "method",
        "title": "liftST"
      },
      "index": {
        "description": "For lifting any operations containing writes but no freezes",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "liftST",
        "normalized": "ST a b-\u003eSTNormal c a b",
        "package": "safe-freeze",
        "partial": "ST",
        "signature": "ST s a-\u003eSTNormal st s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:liftUnsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eFor lifting an \u003ccode\u003eunsafeFreeze\u003c/code\u003e operation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "ST s a -\u003e STFreeze st s a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#liftUnsafeFreeze",
        "fct-type": "method",
        "title": "liftUnsafeFreeze"
      },
      "index": {
        "description": "For lifting an unsafeFreeze operation",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "liftUnsafeFreeze",
        "normalized": "ST a b-\u003eSTFreeze c a b",
        "package": "safe-freeze",
        "partial": "Unsafe Freeze",
        "signature": "ST s a-\u003eSTFreeze st s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:runST",
      "description": {
        "fct-descr": "\u003cpre\u003erunST = \u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003erunSTT\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "(forall s.  STT Identity (stg1 s) (stg2 s) a) -\u003e a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#runST",
        "fct-type": "function",
        "title": "runST"
      },
      "index": {
        "description": "runST runIdentity runSTT",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "runST",
        "normalized": "(a b STT Identity(c d)(c d)e)-\u003ee",
        "package": "safe-freeze",
        "partial": "ST",
        "signature": "(forall s. STT Identity(stg s)(stg s)a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Control-Monad-ST-Freeze.html#v:runSTT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "(forall s.  STT m (stg1 s) (stg2 s) a) -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Freeze.html#runSTT",
        "fct-type": "method",
        "title": "runSTT"
      },
      "index": {
        "description": "Runs the monad",
        "hierarchy": "Control Monad ST Freeze",
        "module": "Control.Monad.ST.Freeze",
        "name": "runSTT",
        "normalized": "(a b STT c(d e)(d e)f)-\u003ec f",
        "package": "safe-freeze",
        "partial": "STT",
        "signature": "(forall s. STT m(stg s)(stg s)a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription of this module goes here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "module",
        "fct-source": "src/Data-STRef-Freeze.html",
        "fct-type": "module",
        "title": "Freeze"
      },
      "index": {
        "description": "Description of this module goes here",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "Freeze",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "Freeze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#t:STRef",
      "description": {
        "fct-descr": "\u003cp\u003ea value of type \u003ccode\u003eSTRef s a\u003c/code\u003e is a mutable variable in state thread \u003ccode\u003es\u003c/code\u003e,\n containing a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "STRef"
      },
      "index": {
        "description": "value of type STRef is mutable variable in state thread containing value of type",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "STRef",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#v:modifySTRef",
      "description": {
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "STRef s a -\u003e (a -\u003e a) -\u003e STNormal st s ()",
        "fct-source": "src/Data-STRef-Freeze.html#modifySTRef",
        "fct-type": "function",
        "title": "modifySTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "modifySTRef",
        "normalized": "STRef a b-\u003e(b-\u003eb)-\u003eSTNormal c a()",
        "package": "safe-freeze",
        "partial": "STRef",
        "signature": "STRef s a-\u003e(a-\u003ea)-\u003eSTNormal st s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#v:newSTRef",
      "description": {
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "a -\u003e STNormal st s (STRef s a)",
        "fct-source": "src/Data-STRef-Freeze.html#newSTRef",
        "fct-type": "function",
        "title": "newSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "newSTRef",
        "normalized": "a-\u003eSTNormal b c(STRef c a)",
        "package": "safe-freeze",
        "partial": "STRef",
        "signature": "a-\u003eSTNormal st s(STRef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#v:readSTRef",
      "description": {
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "STRef s a -\u003e STRead st s a",
        "fct-source": "src/Data-STRef-Freeze.html#readSTRef",
        "fct-type": "function",
        "title": "readSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "readSTRef",
        "normalized": "STRef a b-\u003eSTRead c a b",
        "package": "safe-freeze",
        "partial": "STRef",
        "signature": "STRef s a-\u003eSTRead st s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-STRef-Freeze.html#v:writeSTRef",
      "description": {
        "fct-module": "Data.STRef.Freeze",
        "fct-package": "safe-freeze",
        "fct-signature": "STRef s a -\u003e a -\u003e STNormal st s ()",
        "fct-source": "src/Data-STRef-Freeze.html#writeSTRef",
        "fct-type": "function",
        "title": "writeSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Freeze",
        "module": "Data.STRef.Freeze",
        "name": "writeSTRef",
        "normalized": "STRef a b-\u003eb-\u003eSTNormal c a()",
        "package": "safe-freeze",
        "partial": "STRef",
        "signature": "STRef s a-\u003ea-\u003eSTNormal st s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProof-of-concept support for using vector's \u003ccode\u003eMVector\u003c/code\u003es in the new ST monad. Reexports\n only a minimal API from \u003ca\u003eData.Vector.Generic.Mutable\u003c/a\u003e, with all ST operations\n done in the new ST (indexed) monad.\n\u003c/p\u003e\u003cp\u003eNotable differences in API:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the former \u003ccode\u003eunsafeFreeze\u003c/code\u003e is in fact safe, and is now named \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample demonstration of using the new ST monad:\n\u003c/p\u003e\u003cpre\u003efoo :: forall v. Vector v Int =\u003e (v Int, v Int)\nfoo = \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e go where\n  go :: forall s. \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e s) (\u003ccode\u003e\u003ca\u003eFreeze\u003c/a\u003e\u003c/code\u003e s) (v Int, v Int)\n  go = new 5 \u003e\u003e\u003e= a1 -\u003e\n       new 6 \u003e\u003e\u003e= a2 -\u003e\n       write a1 0 3 \u003e\u003e\u003e= () -\u003e\n       write a2 1 2 \u003e\u003e\u003e= () -\u003e\n       freeze a1 \u003e\u003e\u003e= v1 -\u003e\n       freeze a2 \u003e\u003e\u003e= v2 -\u003e\n       return (v1,v2)\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html",
        "fct-type": "module",
        "title": "STFreeze"
      },
      "index": {
        "description": "Proof-of-concept support for using vector MVector in the new ST monad Reexports only minimal API from Data.Vector.Generic.Mutable with all ST operations done in the new ST indexed monad Notable differences in API the former unsafeFreeze is in fact safe and is now named freeze Example demonstration of using the new ST monad foo forall Vector Int Int Int foo runST go where go forall ST Normal Freeze Int Int go new a1 new a2 write a1 write a2 freeze a1 v1 freeze a2 v2 return v1 v2",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "STFreeze",
        "normalized": "",
        "package": "safe-freeze",
        "partial": "STFreeze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#v:copy",
      "description": {
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "v s a -\u003e v s a -\u003e STNormal st s ()",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "copy",
        "normalized": "a b c-\u003ea b c-\u003eSTNormal d b()",
        "package": "safe-freeze",
        "partial": "",
        "signature": "v s a-\u003ev s a-\u003eSTNormal st s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#v:freeze",
      "description": {
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "Mutable v s a -\u003e STFreeze st s (v a)",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "freeze",
        "normalized": "Mutable a b c-\u003eSTFreeze d b(a c)",
        "package": "safe-freeze",
        "partial": "",
        "signature": "Mutable v s a-\u003eSTFreeze st s(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#v:new",
      "description": {
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "Int -\u003e STNormal st s (v s a)",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "new",
        "normalized": "Int-\u003eSTNormal a b(c b d)",
        "package": "safe-freeze",
        "partial": "",
        "signature": "Int-\u003eSTNormal st s(v s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#v:read",
      "description": {
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "v s a -\u003e Int -\u003e STRead st s a",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "read",
        "normalized": "a b c-\u003eInt-\u003eSTRead d b c",
        "package": "safe-freeze",
        "partial": "",
        "signature": "v s a-\u003eInt-\u003eSTRead st s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-freeze/docs/Data-Vector-Generic-Mutable-STFreeze.html#v:write",
      "description": {
        "fct-module": "Data.Vector.Generic.Mutable.STFreeze",
        "fct-package": "safe-freeze",
        "fct-signature": "v s a -\u003e Int -\u003e a -\u003e STNormal st s ()",
        "fct-source": "src/Data-Vector-Generic-Mutable-STFreeze.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Generic Mutable STFreeze",
        "module": "Data.Vector.Generic.Mutable.STFreeze",
        "name": "write",
        "normalized": "a b c-\u003eInt-\u003ec-\u003eSTNormal d b()",
        "package": "safe-freeze",
        "partial": "",
        "signature": "v s a-\u003eInt-\u003ea-\u003eSTNormal st s()"
      }
    }
  }
]