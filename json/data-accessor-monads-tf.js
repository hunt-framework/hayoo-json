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
        "word": "data-accessor-monads-tf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess helper functions in the State monad type family \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "State",
          "package": "data-accessor-monads-tf",
          "source": "src/Data-Accessor-Monad-TF-State.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in the State monad type family",
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "State",
          "package": "data-accessor-monads-tf",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "(%=)",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-TF-State.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "(%=) %=",
          "normalized": "T(StateType a)b-\u003eb-\u003ea()",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType m)a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "(%:)",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-TF-State.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "(%:) %:",
          "normalized": "T(StateType a)b-\u003e(b-\u003eb)-\u003ea()",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType m)a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.TF.State",
          "name": "get",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e m a",
          "source": "src/Data-Accessor-Monad-TF-State.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "get",
          "normalized": "T(StateType a)b-\u003ea b",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType m)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "getAndModify",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-TF-State.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "getAndModify",
          "normalized": "T(StateType a)b-\u003e(b-\u003eb)-\u003ea b",
          "package": "data-accessor-monads-tf",
          "partial": "And Modify",
          "signature": "T(StateType m)a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.TF.State",
          "name": "lift",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType mr) s -\u003e State s a -\u003e mr a",
          "source": "src/Data-Accessor-Monad-TF-State.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "lift",
          "normalized": "T(StateType a)b-\u003eState b c-\u003ea c",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType mr)s-\u003eState s a-\u003emr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.TF.State",
          "name": "liftT",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType (t m)) s -\u003e StateT s m a -\u003e t m a",
          "source": "src/Data-Accessor-Monad-TF-State.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "liftT",
          "normalized": "T(StateType(a b))c-\u003eStateT c b d-\u003ea b d",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType(t m))s-\u003eStateT s m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.TF.State",
          "name": "modify",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-TF-State.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "modify",
          "normalized": "T(StateType a)b-\u003e(b-\u003eb)-\u003ea()",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType m)a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "modifyAndGet",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-TF-State.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "modifyAndGet",
          "normalized": "T(StateType a)b-\u003e(b-\u003eb)-\u003ea b",
          "package": "data-accessor-monads-tf",
          "partial": "And Get",
          "signature": "T(StateType m)a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.TF.State",
          "name": "set",
          "package": "data-accessor-monads-tf",
          "signature": "T (StateType m) a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-TF-State.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad TF State",
          "module": "Data.Accessor.Monad.TF.State",
          "name": "set",
          "normalized": "T(StateType a)b-\u003eb-\u003ea()",
          "package": "data-accessor-monads-tf",
          "signature": "T(StateType m)a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-tf/docs/Data-Accessor-Monad-TF-State.html#v:set"
      }
    }
  ]
]