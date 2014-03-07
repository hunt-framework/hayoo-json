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
        "word": "data-accessor-monadLib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in State and Reader monads \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Accessor.MonadLib",
          "name": "MonadLib",
          "package": "data-accessor-monadLib",
          "source": "src/Data-Accessor-MonadLib.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in State and Reader monads",
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "MonadLib",
          "package": "data-accessor-monadLib",
          "partial": "Monad Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.MonadLib",
          "name": "(%=)",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-MonadLib.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "(%=) %=",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.MonadLib",
          "name": "(%:)",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-MonadLib.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "(%:) %:",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "ask",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#ask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "ask",
          "normalized": "T a b-\u003ec b",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "focusingOn",
          "package": "data-accessor-monadLib",
          "signature": "T r s -\u003e Reader s a -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#focusingOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "focusingOn",
          "normalized": "T a b-\u003eReader b c-\u003ed c",
          "package": "data-accessor-monadLib",
          "partial": "On",
          "signature": "T r s-\u003eReader s a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:focusingOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "focusingOnT",
          "package": "data-accessor-monadLib",
          "signature": "T r s -\u003e ReaderT s m a -\u003e ReaderT r m a",
          "source": "src/Data-Accessor-MonadLib.html#focusingOnT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "focusingOnT",
          "normalized": "T a b-\u003eReaderT b c d-\u003eReaderT a c d",
          "package": "data-accessor-monadLib",
          "partial": "On",
          "signature": "T r s-\u003eReaderT s m a-\u003eReaderT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:focusingOnT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "get",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "get",
          "normalized": "T a b-\u003ec b",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.MonadLib",
          "name": "getAndModify",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "getAndModify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-monadLib",
          "partial": "And Modify",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "lift",
          "package": "data-accessor-monadLib",
          "signature": "T r s -\u003e State s a -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "lift",
          "normalized": "T a b-\u003eState b c-\u003ed c",
          "package": "data-accessor-monadLib",
          "signature": "T r s-\u003eState s a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "liftT",
          "package": "data-accessor-monadLib",
          "signature": "T r s -\u003e StateT s m a -\u003e StateT r m a",
          "source": "src/Data-Accessor-MonadLib.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "liftT",
          "normalized": "T a b-\u003eStateT b c d-\u003eStateT a c d",
          "package": "data-accessor-monadLib",
          "signature": "T r s-\u003eStateT s m a-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "modify",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-MonadLib.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.MonadLib",
          "name": "modifyAndGet",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-MonadLib.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "modifyAndGet",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-monadLib",
          "partial": "And Get",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.MonadLib",
          "name": "set",
          "package": "data-accessor-monadLib",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-MonadLib.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor MonadLib",
          "module": "Data.Accessor.MonadLib",
          "name": "set",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-monadLib",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:set"
      }
    }
  ]
]