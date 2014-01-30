[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in a Reader-Writer-State monad \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html",
        "fct-type": "module",
        "title": "RWS"
      },
      "index": {
        "description": "Access helper functions in Reader-Writer-State monad",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "RWS",
        "normalized": "",
        "package": "data-accessor-transformers",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e a -\u003e RWST r w s m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003eRWST c d a e()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s a-\u003ea-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:get",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e RWST r w s m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "get",
        "normalized": "T a b-\u003eRWST c d a e b",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modify record element and return its old value",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "getAndModify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e b",
        "package": "data-accessor-transformers",
        "partial": "And Modify",
        "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:lift",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s1 s0 -\u003e RWS r w s0 a -\u003e RWST r w s1 m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "lift",
        "normalized": "T a a-\u003eRWS b c a d-\u003eRWST b c a e d",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s s-\u003eRWS r w s a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:liftT",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s1 s0 -\u003e RWST r w s0 m a -\u003e RWST r w s1 m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "liftT",
        "normalized": "T a a-\u003eRWST b c a d e-\u003eRWST b c a d e",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s s-\u003eRWST r w s m a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:modify",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e (a -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify record element and return its new value",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "modifyAndGet",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eRWST c d a e b",
        "package": "data-accessor-transformers",
        "partial": "And Get",
        "signature": "T s a-\u003e(a-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-RWS.html#v:set",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.RWS",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T s a -\u003e a -\u003e RWST r w s m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-RWS.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans RWS",
        "module": "Data.Accessor.Monad.Trans.RWS",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003eRWST c d a e()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T s a-\u003ea-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in a State monad \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "Access helper functions in State monad",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "State",
        "normalized": "",
        "package": "data-accessor-transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r a-\u003ea-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:get",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "get",
        "normalized": "T a b-\u003eStateT a c b",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modify record element and return its old value",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "getAndModify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
        "package": "data-accessor-transformers",
        "partial": "And Modify",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:lift",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r s -\u003e State s a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "lift",
        "normalized": "T a b-\u003eState b c-\u003eStateT a d c",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r s-\u003eState s a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:liftT",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r s -\u003e StateT s m a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "liftT",
        "normalized": "T a b-\u003eStateT b c d-\u003eStateT a c d",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r s-\u003eStateT s m a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:modify",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify record element and return its new value",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "modifyAndGet",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003eStateT a c b",
        "package": "data-accessor-transformers",
        "partial": "And Get",
        "signature": "T r a-\u003e(a-\u003ea)-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-transformers/docs/Data-Accessor-Monad-Trans-State.html#v:set",
      "description": {
        "fct-module": "Data.Accessor.Monad.Trans.State",
        "fct-package": "data-accessor-transformers",
        "fct-signature": "T r a -\u003e a -\u003e StateT r m ()",
        "fct-source": "src/Data-Accessor-Monad-Trans-State.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad Trans State",
        "module": "Data.Accessor.Monad.Trans.State",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003eStateT a c()",
        "package": "data-accessor-transformers",
        "partial": "",
        "signature": "T r a-\u003ea-\u003eStateT r m()"
      }
    }
  }
]