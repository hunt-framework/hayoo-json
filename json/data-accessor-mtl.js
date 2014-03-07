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
        "word": "data-accessor-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in the State monad class \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "State",
          "package": "data-accessor-mtl",
          "source": "src/Data-Accessor-Monad-MTL-State.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in the State monad class",
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "State",
          "package": "data-accessor-mtl",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "(%=)",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-MTL-State.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "(%=) %=",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-mtl",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "(%:)",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-MTL-State.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "(%:) %:",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-mtl",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "get",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e m a",
          "source": "src/Data-Accessor-Monad-MTL-State.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "get",
          "normalized": "T a b-\u003ec b",
          "package": "data-accessor-mtl",
          "signature": "T r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "getAndModify",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-MTL-State.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "getAndModify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-mtl",
          "partial": "And Modify",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "lift",
          "package": "data-accessor-mtl",
          "signature": "T r s -\u003e State s a -\u003e mr a",
          "source": "src/Data-Accessor-Monad-MTL-State.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "lift",
          "normalized": "T a b-\u003eState b c-\u003ed c",
          "package": "data-accessor-mtl",
          "signature": "T r s-\u003eState s a-\u003emr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "liftT",
          "package": "data-accessor-mtl",
          "signature": "T r s -\u003e StateT s m a -\u003e t m a",
          "source": "src/Data-Accessor-Monad-MTL-State.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "liftT",
          "normalized": "T a b-\u003eStateT b c d-\u003ee c d",
          "package": "data-accessor-mtl",
          "signature": "T r s-\u003eStateT s m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "modify",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-MTL-State.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-mtl",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "modifyAndGet",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-MTL-State.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "modifyAndGet",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-mtl",
          "partial": "And Get",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "set",
          "package": "data-accessor-mtl",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-MTL-State.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad MTL State",
          "module": "Data.Accessor.Monad.MTL.State",
          "name": "set",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-mtl",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-mtl/docs/Data-Accessor-Monad-MTL-State.html#v:set"
      }
    }
  ]
]