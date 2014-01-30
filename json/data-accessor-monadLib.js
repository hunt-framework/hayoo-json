[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in State and Reader monads \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-MonadLib.html",
        "fct-type": "module",
        "title": "MonadLib"
      },
      "index": {
        "description": "Access helper functions in State and Reader monads",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "MonadLib",
        "normalized": "",
        "package": "data-accessor-monadLib",
        "partial": "Monad Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Accessor-MonadLib.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003ec()",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Accessor-MonadLib.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:ask",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "ask",
        "normalized": "T a b-\u003ec b",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:focusingOn",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r s -\u003e Reader s a -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#focusingOn",
        "fct-type": "function",
        "title": "focusingOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "focusingOn",
        "normalized": "T a b-\u003eReader b c-\u003ed c",
        "package": "data-accessor-monadLib",
        "partial": "On",
        "signature": "T r s-\u003eReader s a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:focusingOnT",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r s -\u003e ReaderT s m a -\u003e ReaderT r m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#focusingOnT",
        "fct-type": "function",
        "title": "focusingOnT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "focusingOnT",
        "normalized": "T a b-\u003eReaderT b c d-\u003eReaderT a c d",
        "package": "data-accessor-monadLib",
        "partial": "On",
        "signature": "T r s-\u003eReaderT s m a-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:get",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "get",
        "normalized": "T a b-\u003ec b",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modify record element and return its old value",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "getAndModify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
        "package": "data-accessor-monadLib",
        "partial": "And Modify",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:lift",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r s -\u003e State s a -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "lift",
        "normalized": "T a b-\u003eState b c-\u003ed c",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r s-\u003eState s a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:liftT",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r s -\u003e StateT s m a -\u003e StateT r m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "liftT",
        "normalized": "T a b-\u003eStateT b c d-\u003eStateT a c d",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r s-\u003eStateT s m a-\u003eStateT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:modify",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Accessor-MonadLib.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
        "fct-source": "src/Data-Accessor-MonadLib.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify record element and return its new value",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "modifyAndGet",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
        "package": "data-accessor-monadLib",
        "partial": "And Get",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-monadLib/docs/Data-Accessor-MonadLib.html#v:set",
      "description": {
        "fct-module": "Data.Accessor.MonadLib",
        "fct-package": "data-accessor-monadLib",
        "fct-signature": "T r a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Accessor-MonadLib.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor MonadLib",
        "module": "Data.Accessor.MonadLib",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003ec()",
        "package": "data-accessor-monadLib",
        "partial": "",
        "signature": "T r a-\u003ea-\u003em()"
      }
    }
  }
]