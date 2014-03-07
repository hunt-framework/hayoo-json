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
        "word": "persistent-refs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides support for a persistent version of the\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. Internally, references are backed by a\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e, rather than being mutable variables on the\n heap. This decreases performance, but can be useful in certain\n settings, particularly those involving backtracking.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.ST.Persistent",
          "name": "Persistent",
          "package": "persistent-refs",
          "source": "src/Control-Monad-ST-Persistent.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides support for persistent version of the ST monad Internally references are backed by IntMap rather than being mutable variables on the heap This decreases performance but can be useful in certain settings particularly those involving backtracking",
          "hierarchy": "Control Monad ST Persistent",
          "module": "Control.Monad.ST.Persistent",
          "name": "Persistent",
          "package": "persistent-refs",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA persistent version of the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Persistent",
          "name": "ST",
          "package": "persistent-refs",
          "source": "src/Control-Monad-ST-Persistent-Internal.html#ST",
          "type": "type"
        },
        "index": {
          "description": "persistent version of the ST monad",
          "hierarchy": "Control Monad ST Persistent",
          "module": "Control.Monad.ST.Persistent",
          "name": "ST",
          "package": "persistent-refs",
          "partial": "ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#t:ST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ST.Persistent",
          "name": "STT",
          "package": "persistent-refs",
          "source": "src/Control-Monad-ST-Persistent-Internal.html#STT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad ST Persistent",
          "module": "Control.Monad.ST.Persistent",
          "name": "STT",
          "package": "persistent-refs",
          "partial": "STT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#t:STT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation that uses persistent references, and return a\n pure value. The rank-2 type offers similar guarantees to\n \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Persistent",
          "name": "runST",
          "package": "persistent-refs",
          "signature": "(forall s.  ST s a) -\u003e a",
          "source": "src/Control-Monad-ST-Persistent-Internal.html#runST",
          "type": "function"
        },
        "index": {
          "description": "Run computation that uses persistent references and return pure value The rank-2 type offers similar guarantees to runST",
          "hierarchy": "Control Monad ST Persistent",
          "module": "Control.Monad.ST.Persistent",
          "name": "runST",
          "normalized": "(a b ST c d)-\u003ed",
          "package": "persistent-refs",
          "partial": "ST",
          "signature": "(forall s. ST s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#v:runST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation that uses persistent references, and return a\n pure value. The rank-2 type offers similar guarantees to\n \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.ST.Persistent",
          "name": "runSTT",
          "package": "persistent-refs",
          "signature": "(forall s.  STT s m a) -\u003e m a",
          "source": "src/Control-Monad-ST-Persistent-Internal.html#runSTT",
          "type": "function"
        },
        "index": {
          "description": "Run computation that uses persistent references and return pure value The rank-2 type offers similar guarantees to runST",
          "hierarchy": "Control Monad ST Persistent",
          "module": "Control.Monad.ST.Persistent",
          "name": "runSTT",
          "normalized": "(a b STT c d e)-\u003ed e",
          "package": "persistent-refs",
          "partial": "STT",
          "signature": "(forall s. STT s m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#v:runSTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references in the persistent\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.STRef.Persistent",
          "name": "Persistent",
          "package": "persistent-refs",
          "source": "src/Data-STRef-Persistent.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable references in the persistent ST monad",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "Persistent",
          "package": "persistent-refs",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadRef\u003c/a\u003e\u003c/code\u003e type class abstracts over the details of manipulating\n references, allowing one to write code that uses references and can operate\n in any monad that supports reference operations.\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "MonadRef",
          "package": "persistent-refs",
          "type": "class"
        },
        "index": {
          "description": "The MonadRef type class abstracts over the details of manipulating references allowing one to write code that uses references and can operate in any monad that supports reference operations",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "MonadRef",
          "package": "persistent-refs",
          "partial": "Monad Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#t:MonadRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Persistent",
          "name": "STRef",
          "package": "persistent-refs",
          "source": "src/Data-STRef-Persistent.html#STRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "STRef",
          "package": "persistent-refs",
          "partial": "STRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#t:STRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the underlying \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e. Useful for debugging.\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "asInt",
          "package": "persistent-refs",
          "signature": "STRef s a -\u003e Int",
          "source": "src/Data-STRef-Persistent.html#asInt",
          "type": "function"
        },
        "index": {
          "description": "Get the underlying Int from an STRef Useful for debugging",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "asInt",
          "normalized": "STRef a b-\u003eInt",
          "package": "persistent-refs",
          "partial": "Int",
          "signature": "STRef s a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:asInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a reference\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "modifyRef",
          "package": "persistent-refs",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Mutate the contents of reference",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "persistent-refs",
          "partial": "Ref",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.STRef.Persistent",
          "name": "modifyRef'",
          "package": "persistent-refs",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-STRef-Persistent.html#modifyRef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "modifyRef'",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "persistent-refs",
          "partial": "Ref'",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:modifyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "newRef",
          "package": "persistent-refs",
          "signature": "a -\u003e m (r a)",
          "type": "method"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "newRef",
          "normalized": "a-\u003eb(c a)",
          "package": "persistent-refs",
          "partial": "Ref",
          "signature": "a-\u003em(r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a reference\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "readRef",
          "package": "persistent-refs",
          "signature": "r a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Read the value of reference",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "readRef",
          "normalized": "a b-\u003ec b",
          "package": "persistent-refs",
          "partial": "Ref",
          "signature": "r a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value to a reference\n\u003c/p\u003e",
          "module": "Data.STRef.Persistent",
          "name": "writeRef",
          "package": "persistent-refs",
          "signature": "r a -\u003e a -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Write new value to reference",
          "hierarchy": "Data STRef Persistent",
          "module": "Data.STRef.Persistent",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "persistent-refs",
          "partial": "Ref",
          "signature": "r a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:writeRef"
      }
    }
  ]
]