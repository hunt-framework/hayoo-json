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
        "word": "indexed-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "Cont",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-Cont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "Cont",
          "package": "indexed-extras",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxCont",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-Cont.html#IxCont",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxCont",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#t:IxCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxContT",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-Cont.html#IxContT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxContT",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#t:IxContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxMonadCont",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-Cont.html#IxMonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxMonadCont",
          "package": "indexed-extras",
          "partial": "Ix Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#t:IxMonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxCont",
          "package": "indexed-extras",
          "signature": "IxCont (IxContT Identity r o a)",
          "source": "src/Control-Monad-Indexed-Cont.html#IxCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxCont",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:IxCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxContT",
          "package": "indexed-extras",
          "signature": "IxContT",
          "source": "src/Control-Monad-Indexed-Cont.html#IxContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "IxContT",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:IxContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "reset",
          "package": "indexed-extras",
          "signature": "m a o o -\u003e m r r a",
          "source": "src/Control-Monad-Indexed-Cont.html#reset",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "reset",
          "normalized": "a b c c-\u003ea d d b",
          "package": "indexed-extras",
          "signature": "m a o o-\u003em r r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxCont",
          "package": "indexed-extras",
          "signature": "IxCont r o a -\u003e (a -\u003e o) -\u003e r",
          "source": "src/Control-Monad-Indexed-Cont.html#runIxCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxCont",
          "normalized": "IxCont a b c-\u003e(c-\u003eb)-\u003ea",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "signature": "IxCont r o a-\u003e(a-\u003eo)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:runIxCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxContT",
          "package": "indexed-extras",
          "signature": "(a -\u003e m o) -\u003e m r",
          "source": "src/Control-Monad-Indexed-Cont.html#IxContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxContT",
          "normalized": "(a-\u003eb c)-\u003eb d",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "signature": "(a-\u003em o)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:runIxContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxContT_",
          "package": "indexed-extras",
          "signature": "IxContT m r a a -\u003e m r",
          "source": "src/Control-Monad-Indexed-Cont.html#runIxContT_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxContT_",
          "normalized": "IxContT a b c c-\u003ea b",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "signature": "IxContT m r a a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:runIxContT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxCont_",
          "package": "indexed-extras",
          "signature": "IxCont r a a -\u003e r",
          "source": "src/Control-Monad-Indexed-Cont.html#runIxCont_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "runIxCont_",
          "normalized": "IxCont a b b-\u003ea",
          "package": "indexed-extras",
          "partial": "Ix Cont",
          "signature": "IxCont r a a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:runIxCont_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Cont",
          "name": "shift",
          "package": "indexed-extras",
          "signature": "(forall i.  (a -\u003e m i i o) -\u003e m r j j) -\u003e m r o a",
          "source": "src/Control-Monad-Indexed-Cont.html#shift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Cont",
          "module": "Control.Monad.Indexed.Cont",
          "name": "shift",
          "normalized": "(a b(c-\u003ed e e f)-\u003ed g h h)-\u003ed g f c",
          "package": "indexed-extras",
          "signature": "(forall i.(a-\u003em i i o)-\u003em r j j)-\u003em r o a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-Cont.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "State",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "State",
          "package": "indexed-extras",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "IxMonadState",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-State.html#IxMonadState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "IxMonadState",
          "package": "indexed-extras",
          "partial": "Ix Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#t:IxMonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "IxState",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-State.html#IxState",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "IxState",
          "package": "indexed-extras",
          "partial": "Ix State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#t:IxState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "IxStateT",
          "package": "indexed-extras",
          "source": "src/Control-Monad-Indexed-State.html#IxStateT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "IxStateT",
          "package": "indexed-extras",
          "partial": "Ix State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#t:IxStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "IxState",
          "package": "indexed-extras",
          "signature": "IxState",
          "source": "src/Control-Monad-Indexed-State.html#IxState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "IxState",
          "package": "indexed-extras",
          "partial": "Ix State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:IxState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "IxStateT",
          "package": "indexed-extras",
          "signature": "IxStateT",
          "source": "src/Control-Monad-Indexed-State.html#IxStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "IxStateT",
          "package": "indexed-extras",
          "partial": "Ix State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:IxStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "iget",
          "package": "indexed-extras",
          "signature": "m i i i",
          "source": "src/Control-Monad-Indexed-State.html#iget",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "iget",
          "package": "indexed-extras",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:iget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "igets",
          "package": "indexed-extras",
          "signature": "(i -\u003e a) -\u003e m i i a",
          "source": "src/Control-Monad-Indexed-State.html#igets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "igets",
          "normalized": "(a-\u003eb)-\u003ec a a b",
          "package": "indexed-extras",
          "signature": "(i-\u003ea)-\u003em i i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:igets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "imodify",
          "package": "indexed-extras",
          "signature": "(i -\u003e j) -\u003e m i j ()",
          "source": "src/Control-Monad-Indexed-State.html#imodify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "imodify",
          "normalized": "(a-\u003eb)-\u003ec a b()",
          "package": "indexed-extras",
          "signature": "(i-\u003ej)-\u003em i j()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:imodify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "iput",
          "package": "indexed-extras",
          "signature": "j -\u003e m i j ()",
          "source": "src/Control-Monad-Indexed-State.html#iput",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "iput",
          "normalized": "a-\u003eb c a()",
          "package": "indexed-extras",
          "signature": "j-\u003em i j()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:iput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "runIxState",
          "package": "indexed-extras",
          "signature": "i -\u003e (a, j)",
          "source": "src/Control-Monad-Indexed-State.html#IxState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "runIxState",
          "normalized": "a-\u003e(b,c)",
          "package": "indexed-extras",
          "partial": "Ix State",
          "signature": "i-\u003e(a,j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:runIxState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.State",
          "name": "runIxStateT",
          "package": "indexed-extras",
          "signature": "i -\u003e m (a, j)",
          "source": "src/Control-Monad-Indexed-State.html#IxStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed State",
          "module": "Control.Monad.Indexed.State",
          "name": "runIxStateT",
          "normalized": "a-\u003eb(c,d)",
          "package": "indexed-extras",
          "partial": "Ix State",
          "signature": "i-\u003em(a,j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-extras/docs/Control-Monad-Indexed-State.html#v:runIxStateT"
      }
    }
  ]
]