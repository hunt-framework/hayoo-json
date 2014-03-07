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
        "word": "indexed-free"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "Class",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Free-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free Class",
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "Class",
          "package": "indexed-free",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "IxMonadFree",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Free-Class.html#IxMonadFree",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free Class",
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "IxMonadFree",
          "package": "indexed-free",
          "partial": "Ix Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free-Class.html#t:IxMonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "iliftFree",
          "package": "indexed-free",
          "signature": "f i j a -\u003e m i j a",
          "source": "src/Control-Monad-Indexed-Free-Class.html#iliftFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free Class",
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "iliftFree",
          "normalized": "a b c d-\u003ee b c d",
          "package": "indexed-free",
          "partial": "Free",
          "signature": "f i j a-\u003em i j a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free-Class.html#v:iliftFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "iwrap",
          "package": "indexed-free",
          "signature": "f i j (m j k a) -\u003e m i k a",
          "source": "src/Control-Monad-Indexed-Free-Class.html#iwrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free Class",
          "module": "Control.Monad.Indexed.Free.Class",
          "name": "iwrap",
          "normalized": "a b c(d c e f)-\u003ed b e f",
          "package": "indexed-free",
          "signature": "f i j(m j k a)-\u003em i k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free-Class.html#v:iwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Free.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free",
          "module": "Control.Monad.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free",
          "name": "IxFree",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Free.html#IxFree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free",
          "module": "Control.Monad.Indexed.Free",
          "name": "IxFree",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free.html#t:IxFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "signature": "f i j (IxFree f j k a) -\u003e IxFree f i k a",
          "source": "src/Control-Monad-Indexed-Free.html#IxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free",
          "module": "Control.Monad.Indexed.Free",
          "name": "Free",
          "normalized": "a b c(IxFree a c d e)-\u003eIxFree a b d e",
          "package": "indexed-free",
          "partial": "Free",
          "signature": "f i j(IxFree f j k a)-\u003eIxFree f i k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free",
          "name": "Pure",
          "package": "indexed-free",
          "signature": "a -\u003e IxFree f i i a",
          "source": "src/Control-Monad-Indexed-Free.html#IxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free",
          "module": "Control.Monad.Indexed.Free",
          "name": "Pure",
          "normalized": "a-\u003eIxFree b c c a",
          "package": "indexed-free",
          "partial": "Pure",
          "signature": "a-\u003eIxFree f i i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Free",
          "name": "hoistIxFree",
          "package": "indexed-free",
          "signature": "(forall i j x.  f i j x -\u003e g i j x) -\u003e IxFree f i j a -\u003e m i j a",
          "source": "src/Control-Monad-Indexed-Free.html#hoistIxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Free",
          "module": "Control.Monad.Indexed.Free",
          "name": "hoistIxFree",
          "normalized": "(a b c d e b c f-\u003eg b c f)-\u003eIxFree e b c h-\u003ei b c h",
          "package": "indexed-free",
          "partial": "Ix Free",
          "signature": "(forall i j x. f i j x-\u003eg i j x)-\u003eIxFree f i j a-\u003em i j a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Free.html#v:hoistIxFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Free",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Trans-Free.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Free",
          "package": "indexed-free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeF",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeF",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#t:IxFreeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeT",
          "package": "indexed-free",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeT",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#t:IxFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Free",
          "package": "indexed-free",
          "signature": "f i j (IxFreeT f m j k a) -\u003e IxFreeF f m i k a",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Free",
          "normalized": "a b c(IxFreeT a d c e f)-\u003eIxFreeF a d b e f",
          "package": "indexed-free",
          "partial": "Free",
          "signature": "f i j(IxFreeT f m j k a)-\u003eIxFreeF f m i k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeT",
          "package": "indexed-free",
          "signature": "IxFreeT",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "IxFreeT",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#v:IxFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Pure",
          "package": "indexed-free",
          "signature": "a -\u003e IxFreeF f m i i a",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "Pure",
          "normalized": "a-\u003eIxFreeF b c d d a",
          "package": "indexed-free",
          "partial": "Pure",
          "signature": "a-\u003eIxFreeF f m i i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "runIxFreeT",
          "package": "indexed-free",
          "signature": "m (IxFreeF f m i j a)",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#IxFreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "runIxFreeT",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#v:runIxFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "transIxFreeT",
          "package": "indexed-free",
          "signature": "(forall i j x.  f i j x -\u003e g i j x) -\u003e IxFreeT f m i j a -\u003e IxFreeT g m i j a",
          "source": "src/Control-Monad-Indexed-Trans-Free.html#transIxFreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans Free",
          "module": "Control.Monad.Indexed.Trans.Free",
          "name": "transIxFreeT",
          "normalized": "(a b c d e b c f-\u003eg b c f)-\u003eIxFreeT e h b c i-\u003eIxFreeT g h b c i",
          "package": "indexed-free",
          "partial": "Ix Free",
          "signature": "(forall i j x. f i j x-\u003eg i j x)-\u003eIxFreeT f m i j a-\u003eIxFreeT g m i j a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-Monad-Indexed-Trans-Free.html#v:transIxFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "source": "src/Control-MonadPlus-Indexed-Free.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control MonadPlus Indexed Free",
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-MonadPlus-Indexed-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "IxFree",
          "package": "indexed-free",
          "source": "src/Control-MonadPlus-Indexed-Free.html#IxFree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control MonadPlus Indexed Free",
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "IxFree",
          "package": "indexed-free",
          "partial": "Ix Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-MonadPlus-Indexed-Free.html#t:IxFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Free",
          "package": "indexed-free",
          "signature": "f i j (IxFree f j k a) -\u003e IxFree f i k a",
          "source": "src/Control-MonadPlus-Indexed-Free.html#IxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Indexed Free",
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Free",
          "normalized": "a b c(IxFree a c d e)-\u003eIxFree a b d e",
          "package": "indexed-free",
          "partial": "Free",
          "signature": "f i j(IxFree f j k a)-\u003eIxFree f i k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-MonadPlus-Indexed-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Plus",
          "package": "indexed-free",
          "signature": "[IxFree f i j a] -\u003e IxFree f i j a",
          "source": "src/Control-MonadPlus-Indexed-Free.html#IxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Indexed Free",
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Plus",
          "normalized": "[IxFree a b c d]-\u003eIxFree a b c d",
          "package": "indexed-free",
          "partial": "Plus",
          "signature": "[IxFree f i j a]-\u003eIxFree f i j a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-MonadPlus-Indexed-Free.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Pure",
          "package": "indexed-free",
          "signature": "a -\u003e IxFree f i i a",
          "source": "src/Control-MonadPlus-Indexed-Free.html#IxFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control MonadPlus Indexed Free",
          "module": "Control.MonadPlus.Indexed.Free",
          "name": "Pure",
          "normalized": "a-\u003eIxFree b c c a",
          "package": "indexed-free",
          "partial": "Pure",
          "signature": "a-\u003eIxFree f i i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed-free/docs/Control-MonadPlus-Indexed-Free.html#v:Pure"
      }
    }
  ]
]