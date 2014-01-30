[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-IO-Logic.html",
        "fct-type": "module",
        "title": "Logic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#t:LogicIO",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-IO-Logic.html#LogicIO",
        "fct-type": "type",
        "title": "LogicIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "LogicIO",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:liftST",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "ST RealWorld a -\u003e LogicIO s a",
        "fct-source": "src/Control-Monad-IO-Logic.html#liftST",
        "fct-type": "function",
        "title": "liftST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "liftST",
        "normalized": "ST RealWorld a-\u003eLogicIO b a",
        "package": "logicst",
        "partial": "ST",
        "signature": "ST RealWorld a-\u003eLogicIO s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeAllIO",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicIO s a) -\u003e IO [a]",
        "fct-source": "src/Control-Monad-IO-Logic.html#observeAllIO",
        "fct-type": "function",
        "title": "observeAllIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "observeAllIO",
        "normalized": "(a b LogicIO c d)-\u003eIO[d]",
        "package": "logicst",
        "partial": "All IO",
        "signature": "(forall s. LogicIO s a)-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeIO",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicIO s a) -\u003e IO a",
        "fct-source": "src/Control-Monad-IO-Logic.html#observeIO",
        "fct-type": "function",
        "title": "observeIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "observeIO",
        "normalized": "(a b LogicIO c d)-\u003eIO d",
        "package": "logicst",
        "partial": "IO",
        "signature": "(forall s. LogicIO s a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeManyIO",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "Int -\u003e (forall s.  LogicIO s a) -\u003e IO [a]",
        "fct-source": "src/Control-Monad-IO-Logic.html#observeManyIO",
        "fct-type": "function",
        "title": "observeManyIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "observeManyIO",
        "normalized": "Int-\u003e(a b LogicIO c d)-\u003eIO[d]",
        "package": "logicst",
        "partial": "Many IO",
        "signature": "Int-\u003e(forall s. LogicIO s a)-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:runLogicIO",
      "description": {
        "fct-module": "Control.Monad.IO.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicIO s a) -\u003e (a -\u003e IO r -\u003e IO r) -\u003e IO r -\u003e IO r",
        "fct-source": "src/Control-Monad-IO-Logic.html#runLogicIO",
        "fct-type": "function",
        "title": "runLogicIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad IO Logic",
        "module": "Control.Monad.IO.Logic",
        "name": "runLogicIO",
        "normalized": "(a b LogicIO c d)-\u003e(d-\u003eIO e-\u003eIO e)-\u003eIO e-\u003eIO e",
        "package": "logicst",
        "partial": "Logic IO",
        "signature": "(forall s. LogicIO s a)-\u003e(a-\u003eIO r-\u003eIO r)-\u003eIO r-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "logicst",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#t:LogicT",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#LogicT",
        "fct-type": "data",
        "title": "LogicT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "LogicT",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#t:Ref",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "Ref",
        "normalized": "",
        "package": "logicst",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:liftST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "ST (World m) a -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#liftST",
        "fct-type": "function",
        "title": "liftST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "liftST",
        "normalized": "ST(World a)b-\u003ea b",
        "package": "logicst",
        "partial": "ST",
        "signature": "ST(World m)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:modifyRef",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Ref s m a -\u003e (a -\u003e a) -\u003e LogicT s m ()",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#modifyRef",
        "fct-type": "function",
        "title": "modifyRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "modifyRef",
        "normalized": "Ref a b c-\u003e(c-\u003ec)-\u003eLogicT a b()",
        "package": "logicst",
        "partial": "Ref",
        "signature": "Ref s m a-\u003e(a-\u003ea)-\u003eLogicT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:modifyRef-39-",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Ref s m a -\u003e (a -\u003e a) -\u003e LogicT s m ()",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#modifyRef%27",
        "fct-type": "function",
        "title": "modifyRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "modifyRef'",
        "normalized": "Ref a b c-\u003e(c-\u003ec)-\u003eLogicT a b()",
        "package": "logicst",
        "partial": "Ref'",
        "signature": "Ref s m a-\u003e(a-\u003ea)-\u003eLogicT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:newRef",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "a -\u003e LogicT s m (Ref s m a)",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#newRef",
        "fct-type": "function",
        "title": "newRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "newRef",
        "normalized": "a-\u003eLogicT b c(Ref b c a)",
        "package": "logicst",
        "partial": "Ref",
        "signature": "a-\u003eLogicT s m(Ref s m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeAllST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s (ST s) a) -\u003e [a]",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeAllST",
        "fct-type": "function",
        "title": "observeAllST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeAllST",
        "normalized": "(a b LogicT c(ST c)d)-\u003e[d]",
        "package": "logicst",
        "partial": "All ST",
        "signature": "(forall s. LogicT s(ST s)a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeAllT",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s m a) -\u003e m [a]",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeAllT",
        "fct-type": "function",
        "title": "observeAllT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeAllT",
        "normalized": "(a b LogicT c d e)-\u003ed[e]",
        "package": "logicst",
        "partial": "All",
        "signature": "(forall s. LogicT s m a)-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeManyST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Int -\u003e (forall s.  LogicT s (ST s) a) -\u003e [a]",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeManyST",
        "fct-type": "function",
        "title": "observeManyST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeManyST",
        "normalized": "Int-\u003e(a b LogicT c(ST c)d)-\u003e[d]",
        "package": "logicst",
        "partial": "Many ST",
        "signature": "Int-\u003e(forall s. LogicT s(ST s)a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeManyT",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Int -\u003e (forall s.  LogicT s m a) -\u003e m [a]",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeManyT",
        "fct-type": "function",
        "title": "observeManyT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeManyT",
        "normalized": "Int-\u003e(a b LogicT c d e)-\u003ed[e]",
        "package": "logicst",
        "partial": "Many",
        "signature": "Int-\u003e(forall s. LogicT s m a)-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s (ST s) a) -\u003e a",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeST",
        "fct-type": "function",
        "title": "observeST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeST",
        "normalized": "(a b LogicT c(ST c)d)-\u003ed",
        "package": "logicst",
        "partial": "ST",
        "signature": "(forall s. LogicT s(ST s)a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeT",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s m a) -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#observeT",
        "fct-type": "function",
        "title": "observeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "observeT",
        "normalized": "(a b LogicT c d e)-\u003ed e",
        "package": "logicst",
        "partial": "",
        "signature": "(forall s. LogicT s m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:readRef",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Ref s m a -\u003e LogicT s m a",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#readRef",
        "fct-type": "function",
        "title": "readRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "readRef",
        "normalized": "Ref a b c-\u003eLogicT a b c",
        "package": "logicst",
        "partial": "Ref",
        "signature": "Ref s m a-\u003eLogicT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:runLogicST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s (ST s) a) -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#runLogicST",
        "fct-type": "function",
        "title": "runLogicST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "runLogicST",
        "normalized": "(a b LogicT c(ST c)d)-\u003e(d-\u003ee-\u003ee)-\u003ee-\u003ee",
        "package": "logicst",
        "partial": "Logic ST",
        "signature": "(forall s. LogicT s(ST s)a)-\u003e(a-\u003er-\u003er)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:runLogicT",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicT s m a) -\u003e (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#runLogicT",
        "fct-type": "function",
        "title": "runLogicT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "runLogicT",
        "normalized": "(a b LogicT c d e)-\u003e(e-\u003ed f-\u003ed f)-\u003ed f-\u003ed f",
        "package": "logicst",
        "partial": "Logic",
        "signature": "(forall s. LogicT s m a)-\u003e(a-\u003em r-\u003em r)-\u003em r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:writeRef",
      "description": {
        "fct-module": "Control.Monad.ST.Logic.Internal",
        "fct-package": "logicst",
        "fct-signature": "Ref s m a -\u003e a -\u003e LogicT s m ()",
        "fct-source": "src/Control-Monad-ST-Logic-Internal.html#writeRef",
        "fct-type": "function",
        "title": "writeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic Internal",
        "module": "Control.Monad.ST.Logic.Internal",
        "name": "writeRef",
        "normalized": "Ref a b c-\u003ec-\u003eLogicT a b()",
        "package": "logicst",
        "partial": "Ref",
        "signature": "Ref s m a-\u003ea-\u003eLogicT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Logic.html",
        "fct-type": "module",
        "title": "Logic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#t:LogicST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Logic.html#LogicST",
        "fct-type": "type",
        "title": "LogicST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "LogicST",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:liftST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "ST s a -\u003e LogicST s a",
        "fct-source": "src/Control-Monad-ST-Logic.html#liftST",
        "fct-type": "function",
        "title": "liftST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "liftST",
        "normalized": "ST a b-\u003eLogicST a b",
        "package": "logicst",
        "partial": "ST",
        "signature": "ST s a-\u003eLogicST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeAllST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicST s a) -\u003e [a]",
        "fct-source": "src/Control-Monad-ST-Logic.html#observeAllST",
        "fct-type": "function",
        "title": "observeAllST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "observeAllST",
        "normalized": "(a b LogicST c d)-\u003e[d]",
        "package": "logicst",
        "partial": "All ST",
        "signature": "(forall s. LogicST s a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeManyST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "Int -\u003e (forall s.  LogicST s a) -\u003e [a]",
        "fct-source": "src/Control-Monad-ST-Logic.html#observeManyST",
        "fct-type": "function",
        "title": "observeManyST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "observeManyST",
        "normalized": "Int-\u003e(a b LogicST c d)-\u003e[d]",
        "package": "logicst",
        "partial": "Many ST",
        "signature": "Int-\u003e(forall s. LogicST s a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicST s a) -\u003e a",
        "fct-source": "src/Control-Monad-ST-Logic.html#observeST",
        "fct-type": "function",
        "title": "observeST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "observeST",
        "normalized": "(a b LogicST c d)-\u003ed",
        "package": "logicst",
        "partial": "ST",
        "signature": "(forall s. LogicST s a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:runLogicST",
      "description": {
        "fct-module": "Control.Monad.ST.Logic",
        "fct-package": "logicst",
        "fct-signature": "(forall s.  LogicST s a) -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
        "fct-source": "src/Control-Monad-ST-Logic.html#runLogicST",
        "fct-type": "function",
        "title": "runLogicST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Logic",
        "module": "Control.Monad.ST.Logic",
        "name": "runLogicST",
        "normalized": "(a b LogicST c d)-\u003e(d-\u003ee-\u003ee)-\u003ee-\u003ee",
        "package": "logicst",
        "partial": "Logic ST",
        "signature": "(forall s. LogicST s a)-\u003e(a-\u003er-\u003er)-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "module",
        "fct-source": "src/Data-IORef-Logic.html",
        "fct-type": "module",
        "title": "Logic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#t:IORef",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "type",
        "fct-source": "src/Data-IORef-Logic.html#IORef",
        "fct-type": "type",
        "title": "IORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "IORef",
        "normalized": "",
        "package": "logicst",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:modifyIORef",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "IORef s a -\u003e (a -\u003e a) -\u003e LogicIO s ()",
        "fct-source": "src/Data-IORef-Logic.html#modifyIORef",
        "fct-type": "function",
        "title": "modifyIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "modifyIORef",
        "normalized": "IORef a b-\u003e(b-\u003eb)-\u003eLogicIO a()",
        "package": "logicst",
        "partial": "IORef",
        "signature": "IORef s a-\u003e(a-\u003ea)-\u003eLogicIO s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:modifyIORef-39-",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "IORef s a -\u003e (a -\u003e a) -\u003e LogicIO s ()",
        "fct-source": "src/Data-IORef-Logic.html#modifyIORef%27",
        "fct-type": "function",
        "title": "modifyIORef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "modifyIORef'",
        "normalized": "IORef a b-\u003e(b-\u003eb)-\u003eLogicIO a()",
        "package": "logicst",
        "partial": "IORef'",
        "signature": "IORef s a-\u003e(a-\u003ea)-\u003eLogicIO s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:newIORef",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "a -\u003e LogicIO s (IORef s a)",
        "fct-source": "src/Data-IORef-Logic.html#newIORef",
        "fct-type": "function",
        "title": "newIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "newIORef",
        "normalized": "a-\u003eLogicIO b(IORef b a)",
        "package": "logicst",
        "partial": "IORef",
        "signature": "a-\u003eLogicIO s(IORef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:readIORef",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "IORef s a -\u003e LogicIO s a",
        "fct-source": "src/Data-IORef-Logic.html#readIORef",
        "fct-type": "function",
        "title": "readIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "readIORef",
        "normalized": "IORef a b-\u003eLogicIO a b",
        "package": "logicst",
        "partial": "IORef",
        "signature": "IORef s a-\u003eLogicIO s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:writeIORef",
      "description": {
        "fct-module": "Data.IORef.Logic",
        "fct-package": "logicst",
        "fct-signature": "IORef s a -\u003e a -\u003e LogicIO s ()",
        "fct-source": "src/Data-IORef-Logic.html#writeIORef",
        "fct-type": "function",
        "title": "writeIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef Logic",
        "module": "Data.IORef.Logic",
        "name": "writeIORef",
        "normalized": "IORef a b-\u003eb-\u003eLogicIO a()",
        "package": "logicst",
        "partial": "IORef",
        "signature": "IORef s a-\u003ea-\u003eLogicIO s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "module",
        "fct-source": "src/Data-STRef-Logic.html",
        "fct-type": "module",
        "title": "Logic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "Logic",
        "normalized": "",
        "package": "logicst",
        "partial": "Logic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#t:STRef",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "type",
        "fct-source": "src/Data-STRef-Logic.html#STRef",
        "fct-type": "type",
        "title": "STRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "STRef",
        "normalized": "",
        "package": "logicst",
        "partial": "STRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:modifySTRef",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "STRef s a -\u003e (a -\u003e a) -\u003e LogicST s ()",
        "fct-source": "src/Data-STRef-Logic.html#modifySTRef",
        "fct-type": "function",
        "title": "modifySTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "modifySTRef",
        "normalized": "STRef a b-\u003e(b-\u003eb)-\u003eLogicST a()",
        "package": "logicst",
        "partial": "STRef",
        "signature": "STRef s a-\u003e(a-\u003ea)-\u003eLogicST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:modifySTRef-39-",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "STRef s a -\u003e (a -\u003e a) -\u003e LogicST s ()",
        "fct-source": "src/Data-STRef-Logic.html#modifySTRef%27",
        "fct-type": "function",
        "title": "modifySTRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "modifySTRef'",
        "normalized": "STRef a b-\u003e(b-\u003eb)-\u003eLogicST a()",
        "package": "logicst",
        "partial": "STRef'",
        "signature": "STRef s a-\u003e(a-\u003ea)-\u003eLogicST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:newSTRef",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "a -\u003e LogicST s (STRef s a)",
        "fct-source": "src/Data-STRef-Logic.html#newSTRef",
        "fct-type": "function",
        "title": "newSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "newSTRef",
        "normalized": "a-\u003eLogicST b(STRef b a)",
        "package": "logicst",
        "partial": "STRef",
        "signature": "a-\u003eLogicST s(STRef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:readSTRef",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "STRef s a -\u003e LogicST s a",
        "fct-source": "src/Data-STRef-Logic.html#readSTRef",
        "fct-type": "function",
        "title": "readSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "readSTRef",
        "normalized": "STRef a b-\u003eLogicST a b",
        "package": "logicst",
        "partial": "STRef",
        "signature": "STRef s a-\u003eLogicST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:writeSTRef",
      "description": {
        "fct-module": "Data.STRef.Logic",
        "fct-package": "logicst",
        "fct-signature": "STRef s a -\u003e a -\u003e LogicST s ()",
        "fct-source": "src/Data-STRef-Logic.html#writeSTRef",
        "fct-type": "function",
        "title": "writeSTRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Logic",
        "module": "Data.STRef.Logic",
        "name": "writeSTRef",
        "normalized": "STRef a b-\u003eb-\u003eLogicST a()",
        "package": "logicst",
        "partial": "STRef",
        "signature": "STRef s a-\u003ea-\u003eLogicST s()"
      }
    }
  }
]