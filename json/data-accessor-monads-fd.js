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
        "word": "data-accessor-monads-fd"
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
          "module": "Data.Accessor.Monad.FD.State",
          "name": "State",
          "package": "data-accessor-monads-fd",
          "source": "src/Data-Accessor-Monad-FD-State.html",
          "type": "module"
        },
        "index": {
          "description": "Access helper functions in the State monad class",
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "State",
          "package": "data-accessor-monads-fd",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "(%=)",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-FD-State.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of set",
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "(%=) %=",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-monads-fd",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "(%:)",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-FD-State.html#%25%3A",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of modify",
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "(%:) %:",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-monads-fd",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.FD.State",
          "name": "get",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e m a",
          "source": "src/Data-Accessor-Monad-FD-State.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "get",
          "normalized": "T a b-\u003ec b",
          "package": "data-accessor-monads-fd",
          "signature": "T r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its old value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "getAndModify",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-FD-State.html#getAndModify",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its old value",
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "getAndModify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-monads-fd",
          "partial": "And Modify",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:getAndModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.FD.State",
          "name": "lift",
          "package": "data-accessor-monads-fd",
          "signature": "T r s -\u003e State s a -\u003e mr a",
          "source": "src/Data-Accessor-Monad-FD-State.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "lift",
          "normalized": "T a b-\u003eState b c-\u003ed c",
          "package": "data-accessor-monads-fd",
          "signature": "T r s-\u003eState s a-\u003emr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.FD.State",
          "name": "liftT",
          "package": "data-accessor-monads-fd",
          "signature": "T r s -\u003e StateT s m a -\u003e t m a",
          "source": "src/Data-Accessor-Monad-FD-State.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "liftT",
          "normalized": "T a b-\u003eStateT b c d-\u003ee c d",
          "package": "data-accessor-monads-fd",
          "signature": "T r s-\u003eStateT s m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.FD.State",
          "name": "modify",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Accessor-Monad-FD-State.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "data-accessor-monads-fd",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a record element and return its new value.\n\u003c/p\u003e",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "modifyAndGet",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e (a -\u003e a) -\u003e m a",
          "source": "src/Data-Accessor-Monad-FD-State.html#modifyAndGet",
          "type": "function"
        },
        "index": {
          "description": "Modify record element and return its new value",
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "modifyAndGet",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ec b",
          "package": "data-accessor-monads-fd",
          "partial": "And Get",
          "signature": "T r a-\u003e(a-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:modifyAndGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor.Monad.FD.State",
          "name": "set",
          "package": "data-accessor-monads-fd",
          "signature": "T r a -\u003e a -\u003e m ()",
          "source": "src/Data-Accessor-Monad-FD-State.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor Monad FD State",
          "module": "Data.Accessor.Monad.FD.State",
          "name": "set",
          "normalized": "T a b-\u003eb-\u003ec()",
          "package": "data-accessor-monads-fd",
          "signature": "T r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-accessor-monads-fd/docs/Data-Accessor-Monad-FD-State.html#v:set"
      }
    }
  ]
]