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
        "word": "logicst"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "Logic",
          "package": "logicst",
          "source": "src/Control-Monad-IO-Logic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "Logic",
          "package": "logicst",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "LogicIO",
          "package": "logicst",
          "source": "src/Control-Monad-IO-Logic.html#LogicIO",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "LogicIO",
          "package": "logicst",
          "partial": "Logic IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#t:LogicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "liftST",
          "package": "logicst",
          "signature": "ST RealWorld a -\u003e LogicIO s a",
          "source": "src/Control-Monad-IO-Logic.html#liftST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "liftST",
          "normalized": "ST RealWorld a-\u003eLogicIO b a",
          "package": "logicst",
          "partial": "ST",
          "signature": "ST RealWorld a-\u003eLogicIO s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:liftST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "observeAllIO",
          "package": "logicst",
          "signature": "(forall s.  LogicIO s a) -\u003e IO [a]",
          "source": "src/Control-Monad-IO-Logic.html#observeAllIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "observeAllIO",
          "normalized": "(a b LogicIO c d)-\u003eIO[d]",
          "package": "logicst",
          "partial": "All IO",
          "signature": "(forall s. LogicIO s a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeAllIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "observeIO",
          "package": "logicst",
          "signature": "(forall s.  LogicIO s a) -\u003e IO a",
          "source": "src/Control-Monad-IO-Logic.html#observeIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "observeIO",
          "normalized": "(a b LogicIO c d)-\u003eIO d",
          "package": "logicst",
          "partial": "IO",
          "signature": "(forall s. LogicIO s a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "observeManyIO",
          "package": "logicst",
          "signature": "Int -\u003e (forall s.  LogicIO s a) -\u003e IO [a]",
          "source": "src/Control-Monad-IO-Logic.html#observeManyIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "observeManyIO",
          "normalized": "Int-\u003e(a b LogicIO c d)-\u003eIO[d]",
          "package": "logicst",
          "partial": "Many IO",
          "signature": "Int-\u003e(forall s. LogicIO s a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:observeManyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.IO.Logic",
          "name": "runLogicIO",
          "package": "logicst",
          "signature": "(forall s.  LogicIO s a) -\u003e (a -\u003e IO r -\u003e IO r) -\u003e IO r -\u003e IO r",
          "source": "src/Control-Monad-IO-Logic.html#runLogicIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad IO Logic",
          "module": "Control.Monad.IO.Logic",
          "name": "runLogicIO",
          "normalized": "(a b LogicIO c d)-\u003e(d-\u003eIO e-\u003eIO e)-\u003eIO e-\u003eIO e",
          "package": "logicst",
          "partial": "Logic IO",
          "signature": "(forall s. LogicIO s a)-\u003e(a-\u003eIO r-\u003eIO r)-\u003eIO r-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-IO-Logic.html#v:runLogicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "Internal",
          "package": "logicst",
          "source": "src/Control-Monad-ST-Logic-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "Internal",
          "package": "logicst",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "LogicT",
          "package": "logicst",
          "source": "src/Control-Monad-ST-Logic-Internal.html#LogicT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "LogicT",
          "package": "logicst",
          "partial": "Logic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#t:LogicT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "Ref",
          "package": "logicst",
          "source": "src/Control-Monad-ST-Logic-Internal.html#Ref",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "Ref",
          "package": "logicst",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "liftST",
          "package": "logicst",
          "signature": "ST (World m) a -\u003e m a",
          "source": "src/Control-Monad-ST-Logic-Internal.html#liftST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "liftST",
          "normalized": "ST(World a)b-\u003ea b",
          "package": "logicst",
          "partial": "ST",
          "signature": "ST(World m)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:liftST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "modifyRef",
          "package": "logicst",
          "signature": "Ref s m a -\u003e (a -\u003e a) -\u003e LogicT s m ()",
          "source": "src/Control-Monad-ST-Logic-Internal.html#modifyRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "modifyRef",
          "normalized": "Ref a b c-\u003e(c-\u003ec)-\u003eLogicT a b()",
          "package": "logicst",
          "partial": "Ref",
          "signature": "Ref s m a-\u003e(a-\u003ea)-\u003eLogicT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "modifyRef'",
          "package": "logicst",
          "signature": "Ref s m a -\u003e (a -\u003e a) -\u003e LogicT s m ()",
          "source": "src/Control-Monad-ST-Logic-Internal.html#modifyRef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "modifyRef'",
          "normalized": "Ref a b c-\u003e(c-\u003ec)-\u003eLogicT a b()",
          "package": "logicst",
          "partial": "Ref'",
          "signature": "Ref s m a-\u003e(a-\u003ea)-\u003eLogicT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:modifyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "newRef",
          "package": "logicst",
          "signature": "a -\u003e LogicT s m (Ref s m a)",
          "source": "src/Control-Monad-ST-Logic-Internal.html#newRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "newRef",
          "normalized": "a-\u003eLogicT b c(Ref b c a)",
          "package": "logicst",
          "partial": "Ref",
          "signature": "a-\u003eLogicT s m(Ref s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeAllST",
          "package": "logicst",
          "signature": "(forall s.  LogicT s (ST s) a) -\u003e [a]",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeAllST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeAllST",
          "normalized": "(a b LogicT c(ST c)d)-\u003e[d]",
          "package": "logicst",
          "partial": "All ST",
          "signature": "(forall s. LogicT s(ST s)a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeAllST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeAllT",
          "package": "logicst",
          "signature": "(forall s.  LogicT s m a) -\u003e m [a]",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeAllT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeAllT",
          "normalized": "(a b LogicT c d e)-\u003ed[e]",
          "package": "logicst",
          "partial": "All",
          "signature": "(forall s. LogicT s m a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeAllT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeManyST",
          "package": "logicst",
          "signature": "Int -\u003e (forall s.  LogicT s (ST s) a) -\u003e [a]",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeManyST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeManyST",
          "normalized": "Int-\u003e(a b LogicT c(ST c)d)-\u003e[d]",
          "package": "logicst",
          "partial": "Many ST",
          "signature": "Int-\u003e(forall s. LogicT s(ST s)a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeManyST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeManyT",
          "package": "logicst",
          "signature": "Int -\u003e (forall s.  LogicT s m a) -\u003e m [a]",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeManyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeManyT",
          "normalized": "Int-\u003e(a b LogicT c d e)-\u003ed[e]",
          "package": "logicst",
          "partial": "Many",
          "signature": "Int-\u003e(forall s. LogicT s m a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeManyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeST",
          "package": "logicst",
          "signature": "(forall s.  LogicT s (ST s) a) -\u003e a",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeST",
          "normalized": "(a b LogicT c(ST c)d)-\u003ed",
          "package": "logicst",
          "partial": "ST",
          "signature": "(forall s. LogicT s(ST s)a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeT",
          "package": "logicst",
          "signature": "(forall s.  LogicT s m a) -\u003e m a",
          "source": "src/Control-Monad-ST-Logic-Internal.html#observeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "observeT",
          "normalized": "(a b LogicT c d e)-\u003ed e",
          "package": "logicst",
          "signature": "(forall s. LogicT s m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:observeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "readRef",
          "package": "logicst",
          "signature": "Ref s m a -\u003e LogicT s m a",
          "source": "src/Control-Monad-ST-Logic-Internal.html#readRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "readRef",
          "normalized": "Ref a b c-\u003eLogicT a b c",
          "package": "logicst",
          "partial": "Ref",
          "signature": "Ref s m a-\u003eLogicT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "runLogicST",
          "package": "logicst",
          "signature": "(forall s.  LogicT s (ST s) a) -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
          "source": "src/Control-Monad-ST-Logic-Internal.html#runLogicST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "runLogicST",
          "normalized": "(a b LogicT c(ST c)d)-\u003e(d-\u003ee-\u003ee)-\u003ee-\u003ee",
          "package": "logicst",
          "partial": "Logic ST",
          "signature": "(forall s. LogicT s(ST s)a)-\u003e(a-\u003er-\u003er)-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:runLogicST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "runLogicT",
          "package": "logicst",
          "signature": "(forall s.  LogicT s m a) -\u003e (a -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
          "source": "src/Control-Monad-ST-Logic-Internal.html#runLogicT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "runLogicT",
          "normalized": "(a b LogicT c d e)-\u003e(e-\u003ed f-\u003ed f)-\u003ed f-\u003ed f",
          "package": "logicst",
          "partial": "Logic",
          "signature": "(forall s. LogicT s m a)-\u003e(a-\u003em r-\u003em r)-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:runLogicT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "writeRef",
          "package": "logicst",
          "signature": "Ref s m a -\u003e a -\u003e LogicT s m ()",
          "source": "src/Control-Monad-ST-Logic-Internal.html#writeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic Internal",
          "module": "Control.Monad.ST.Logic.Internal",
          "name": "writeRef",
          "normalized": "Ref a b c-\u003ec-\u003eLogicT a b()",
          "package": "logicst",
          "partial": "Ref",
          "signature": "Ref s m a-\u003ea-\u003eLogicT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic-Internal.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "Logic",
          "package": "logicst",
          "source": "src/Control-Monad-ST-Logic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "Logic",
          "package": "logicst",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "LogicST",
          "package": "logicst",
          "source": "src/Control-Monad-ST-Logic.html#LogicST",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "LogicST",
          "package": "logicst",
          "partial": "Logic ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#t:LogicST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "liftST",
          "package": "logicst",
          "signature": "ST s a -\u003e LogicST s a",
          "source": "src/Control-Monad-ST-Logic.html#liftST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "liftST",
          "normalized": "ST a b-\u003eLogicST a b",
          "package": "logicst",
          "partial": "ST",
          "signature": "ST s a-\u003eLogicST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:liftST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "observeAllST",
          "package": "logicst",
          "signature": "(forall s.  LogicST s a) -\u003e [a]",
          "source": "src/Control-Monad-ST-Logic.html#observeAllST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "observeAllST",
          "normalized": "(a b LogicST c d)-\u003e[d]",
          "package": "logicst",
          "partial": "All ST",
          "signature": "(forall s. LogicST s a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeAllST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "observeManyST",
          "package": "logicst",
          "signature": "Int -\u003e (forall s.  LogicST s a) -\u003e [a]",
          "source": "src/Control-Monad-ST-Logic.html#observeManyST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "observeManyST",
          "normalized": "Int-\u003e(a b LogicST c d)-\u003e[d]",
          "package": "logicst",
          "partial": "Many ST",
          "signature": "Int-\u003e(forall s. LogicST s a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeManyST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "observeST",
          "package": "logicst",
          "signature": "(forall s.  LogicST s a) -\u003e a",
          "source": "src/Control-Monad-ST-Logic.html#observeST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "observeST",
          "normalized": "(a b LogicST c d)-\u003ed",
          "package": "logicst",
          "partial": "ST",
          "signature": "(forall s. LogicST s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:observeST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Logic",
          "name": "runLogicST",
          "package": "logicst",
          "signature": "(forall s.  LogicST s a) -\u003e (a -\u003e r -\u003e r) -\u003e r -\u003e r",
          "source": "src/Control-Monad-ST-Logic.html#runLogicST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ST Logic",
          "module": "Control.Monad.ST.Logic",
          "name": "runLogicST",
          "normalized": "(a b LogicST c d)-\u003e(d-\u003ee-\u003ee)-\u003ee-\u003ee",
          "package": "logicst",
          "partial": "Logic ST",
          "signature": "(forall s. LogicST s a)-\u003e(a-\u003er-\u003er)-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Control-Monad-ST-Logic.html#v:runLogicST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "Logic",
          "package": "logicst",
          "source": "src/Data-IORef-Logic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "Logic",
          "package": "logicst",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "IORef",
          "package": "logicst",
          "source": "src/Data-IORef-Logic.html#IORef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "IORef",
          "package": "logicst",
          "partial": "IORef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "modifyIORef",
          "package": "logicst",
          "signature": "IORef s a -\u003e (a -\u003e a) -\u003e LogicIO s ()",
          "source": "src/Data-IORef-Logic.html#modifyIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "modifyIORef",
          "normalized": "IORef a b-\u003e(b-\u003eb)-\u003eLogicIO a()",
          "package": "logicst",
          "partial": "IORef",
          "signature": "IORef s a-\u003e(a-\u003ea)-\u003eLogicIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:modifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "modifyIORef'",
          "package": "logicst",
          "signature": "IORef s a -\u003e (a -\u003e a) -\u003e LogicIO s ()",
          "source": "src/Data-IORef-Logic.html#modifyIORef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "modifyIORef'",
          "normalized": "IORef a b-\u003e(b-\u003eb)-\u003eLogicIO a()",
          "package": "logicst",
          "partial": "IORef'",
          "signature": "IORef s a-\u003e(a-\u003ea)-\u003eLogicIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:modifyIORef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "newIORef",
          "package": "logicst",
          "signature": "a -\u003e LogicIO s (IORef s a)",
          "source": "src/Data-IORef-Logic.html#newIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "newIORef",
          "normalized": "a-\u003eLogicIO b(IORef b a)",
          "package": "logicst",
          "partial": "IORef",
          "signature": "a-\u003eLogicIO s(IORef s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:newIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "readIORef",
          "package": "logicst",
          "signature": "IORef s a -\u003e LogicIO s a",
          "source": "src/Data-IORef-Logic.html#readIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "readIORef",
          "normalized": "IORef a b-\u003eLogicIO a b",
          "package": "logicst",
          "partial": "IORef",
          "signature": "IORef s a-\u003eLogicIO s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:readIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Logic",
          "name": "writeIORef",
          "package": "logicst",
          "signature": "IORef s a -\u003e a -\u003e LogicIO s ()",
          "source": "src/Data-IORef-Logic.html#writeIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Logic",
          "module": "Data.IORef.Logic",
          "name": "writeIORef",
          "normalized": "IORef a b-\u003eb-\u003eLogicIO a()",
          "package": "logicst",
          "partial": "IORef",
          "signature": "IORef s a-\u003ea-\u003eLogicIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-IORef-Logic.html#v:writeIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "Logic",
          "package": "logicst",
          "source": "src/Data-STRef-Logic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "Logic",
          "package": "logicst",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "STRef",
          "package": "logicst",
          "source": "src/Data-STRef-Logic.html#STRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "STRef",
          "package": "logicst",
          "partial": "STRef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#t:STRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "modifySTRef",
          "package": "logicst",
          "signature": "STRef s a -\u003e (a -\u003e a) -\u003e LogicST s ()",
          "source": "src/Data-STRef-Logic.html#modifySTRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "modifySTRef",
          "normalized": "STRef a b-\u003e(b-\u003eb)-\u003eLogicST a()",
          "package": "logicst",
          "partial": "STRef",
          "signature": "STRef s a-\u003e(a-\u003ea)-\u003eLogicST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:modifySTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "modifySTRef'",
          "package": "logicst",
          "signature": "STRef s a -\u003e (a -\u003e a) -\u003e LogicST s ()",
          "source": "src/Data-STRef-Logic.html#modifySTRef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "modifySTRef'",
          "normalized": "STRef a b-\u003e(b-\u003eb)-\u003eLogicST a()",
          "package": "logicst",
          "partial": "STRef'",
          "signature": "STRef s a-\u003e(a-\u003ea)-\u003eLogicST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:modifySTRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "newSTRef",
          "package": "logicst",
          "signature": "a -\u003e LogicST s (STRef s a)",
          "source": "src/Data-STRef-Logic.html#newSTRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "newSTRef",
          "normalized": "a-\u003eLogicST b(STRef b a)",
          "package": "logicst",
          "partial": "STRef",
          "signature": "a-\u003eLogicST s(STRef s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:newSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "readSTRef",
          "package": "logicst",
          "signature": "STRef s a -\u003e LogicST s a",
          "source": "src/Data-STRef-Logic.html#readSTRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "readSTRef",
          "normalized": "STRef a b-\u003eLogicST a b",
          "package": "logicst",
          "partial": "STRef",
          "signature": "STRef s a-\u003eLogicST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:readSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Logic",
          "name": "writeSTRef",
          "package": "logicst",
          "signature": "STRef s a -\u003e a -\u003e LogicST s ()",
          "source": "src/Data-STRef-Logic.html#writeSTRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Logic",
          "module": "Data.STRef.Logic",
          "name": "writeSTRef",
          "normalized": "STRef a b-\u003eb-\u003eLogicST a()",
          "package": "logicst",
          "partial": "STRef",
          "signature": "STRef s a-\u003ea-\u003eLogicST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logicst/docs/Data-STRef-Logic.html#v:writeSTRef"
      }
    }
  ]
]