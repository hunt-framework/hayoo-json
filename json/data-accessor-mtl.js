[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in the State monad class \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "module",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "Access helper functions in the State monad class",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "State",
        "normalized": "",
        "package": "data-accessor-mtl",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Infix variant of set",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "(%=) %=",
        "normalized": "T a b-\u003eb-\u003ec()",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Infix variant of modify",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "(%:) %:",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:get",
      "description": {
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e m a",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "get",
        "normalized": "T a b-\u003ec b",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:getAndModify",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#getAndModify",
        "fct-type": "function",
        "title": "getAndModify"
      },
      "index": {
        "description": "Modify record element and return its old value",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "getAndModify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
        "package": "data-accessor-mtl",
        "partial": "And Modify",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:lift",
      "description": {
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r s -\u003e State s a -\u003e mr a",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "lift",
        "normalized": "T a b-\u003eState b c-\u003ed c",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r s-\u003eState s a-\u003emr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:liftT",
      "description": {
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r s -\u003e StateT s m a -\u003e t m a",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "liftT",
        "normalized": "T a b-\u003eStateT b c d-\u003ee c d",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r s-\u003eStateT s m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:modify",
      "description": {
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "modify",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:modifyAndGet",
      "description": {
        "fct-descr": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#modifyAndGet",
        "fct-type": "function",
        "title": "modifyAndGet"
      },
      "index": {
        "description": "Modify record element and return its new value",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "modifyAndGet",
        "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
        "package": "data-accessor-mtl",
        "partial": "And Get",
        "signature": "T r a-\u003e(a-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:set",
      "description": {
        "fct-module": "Data.Accessor.Monad.MTL.State",
        "fct-package": "data-accessor-mtl",
        "fct-signature": "T r a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-Accessor-Monad-MTL-State.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Accessor Monad MTL State",
        "module": "Data.Accessor.Monad.MTL.State",
        "name": "set",
        "normalized": "T a b-\u003eb-\u003ec()",
        "package": "data-accessor-mtl",
        "partial": "",
        "signature": "T r a-\u003ea-\u003em()"
      }
    }
  }
]