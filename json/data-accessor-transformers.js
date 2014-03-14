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
        "word": "data-accessor-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in a Reader-Writer-State monad \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "RWS",
          "package": "data-accessor-transformers",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in Reader-Writer-State monad",
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "RWS",
          "package": "data-accessor-transformers",
          "partial": "RWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "(%=)",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e a -\u003e RWST r w s m ()",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "(%=) %=",
          "normalized": "T a b-\u003eb-\u003eRWST c d a e()",
          "package": "data-accessor-transformers",
          "signature": "T s a-\u003ea-\u003eRWST r w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "(%:)",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m ()",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "(%:) %:",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e()",
          "package": "data-accessor-transformers",
          "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "get",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e RWST r w s m a",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "get",
          "normalized": "T a b-\u003eRWST c d a e b",
          "package": "data-accessor-transformers",
          "signature": "T s a-\u003eRWST r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "getAndModify",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m a",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "getAndModify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e b",
          "package": "data-accessor-transformers",
          "partial": "And Modify",
          "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "lift",
          "package": "data-accessor-transformers",
          "signature": "T s1 s0 -\u003e RWS r w s0 a -\u003e RWST r w s1 m a",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "lift",
          "normalized": "T a a-\u003eRWS b c a d-\u003eRWST b c a e d",
          "package": "data-accessor-transformers",
          "signature": "T s s-\u003eRWS r w s a-\u003eRWST r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "liftT",
          "package": "data-accessor-transformers",
          "signature": "T s1 s0 -\u003e RWST r w s0 m a -\u003e RWST r w s1 m a",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "liftT",
          "normalized": "T a a-\u003eRWST b c a d e-\u003eRWST b c a d e",
          "package": "data-accessor-transformers",
          "signature": "T s s-\u003eRWST r w s m a-\u003eRWST r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "modify",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m ()",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e()",
          "package": "data-accessor-transformers",
          "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "modifyAndGet",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m a",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "modifyAndGet",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e b",
          "package": "data-accessor-transformers",
          "partial": "And Get",
          "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "set",
          "package": "data-accessor-transformers",
          "signature": "T s a -\u003e a -\u003e RWST r w s m ()",
          "source": "src/Data-Accessor-Monad-Trans-RWS.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans RWS",
          "module": "Data.Accessor.Monad.Trans.RWS",
          "name": "set",
          "normalized": "T a b-\u003eb-\u003eRWST c d a e()",
          "package": "data-accessor-transformers",
          "signature": "T s a-\u003ea-\u003eRWST r w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in a State monad \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "State",
          "package": "data-accessor-transformers",
          "source": "src/Data-Accessor-Monad-Trans-State.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in State monad",
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "State",
          "package": "data-accessor-transformers",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "(%=)",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e a -\u003e StateT r m ()",
          "source": "src/Data-Accessor-Monad-Trans-State.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "(%=) %=",
          "normalized": "T a b-\u003eb-\u003eStateT a c()",
          "package": "data-accessor-transformers",
          "signature": "T r a-\u003ea-\u003eStateT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "(%:)",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
          "source": "src/Data-Accessor-Monad-Trans-State.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "(%:) %:",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
          "package": "data-accessor-transformers",
          "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "get",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e StateT r m a",
          "source": "src/Data-Accessor-Monad-Trans-State.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "get",
          "normalized": "T a b-\u003eStateT a c b",
          "package": "data-accessor-transformers",
          "signature": "T r a-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "getAndModify",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
          "source": "src/Data-Accessor-Monad-Trans-State.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "getAndModify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-accessor-transformers",
          "partial": "And Modify",
          "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "lift",
          "package": "data-accessor-transformers",
          "signature": "T r s -\u003e State s a -\u003e StateT r m a",
          "source": "src/Data-Accessor-Monad-Trans-State.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "lift",
          "normalized": "T a b-\u003eState b c-\u003eStateT a d c",
          "package": "data-accessor-transformers",
          "signature": "T r s-\u003eState s a-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "liftT",
          "package": "data-accessor-transformers",
          "signature": "T r s -\u003e StateT s m a -\u003e StateT r m a",
          "source": "src/Data-Accessor-Monad-Trans-State.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "liftT",
          "normalized": "T a b-\u003eStateT b c d-\u003eStateT a c d",
          "package": "data-accessor-transformers",
          "signature": "T r s-\u003eStateT s m a-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "modify",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
          "source": "src/Data-Accessor-Monad-Trans-State.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
          "package": "data-accessor-transformers",
          "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "modifyAndGet",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
          "source": "src/Data-Accessor-Monad-Trans-State.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "modifyAndGet",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
          "package": "data-accessor-transformers",
          "partial": "And Get",
          "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "set",
          "package": "data-accessor-transformers",
          "signature": "T r a -\u003e a -\u003e StateT r m ()",
          "source": "src/Data-Accessor-Monad-Trans-State.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad Trans State",
          "module": "Data.Accessor.Monad.Trans.State",
          "name": "set",
          "normalized": "T a b-\u003eb-\u003eStateT a c()",
          "package": "data-accessor-transformers",
          "signature": "T r a-\u003ea-\u003eStateT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:set"
      }
    }
  ]
]