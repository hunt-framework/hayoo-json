[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides support for a persistent version of the\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. Internally, references are backed by a\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e, rather than being mutable variables on the\n heap. This decreases performance, but can be useful in certain\n settings, particularly those involving backtracking.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.ST.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-ST-Persistent.html",
        "fct-type": "module",
        "title": "Persistent"
      },
      "index": {
        "description": "This library provides support for persistent version of the ST monad Internally references are backed by IntMap rather than being mutable variables on the heap This decreases performance but can be useful in certain settings particularly those involving backtracking",
        "hierarchy": "Control Monad ST Persistent",
        "module": "Control.Monad.ST.Persistent",
        "name": "Persistent",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#t:ST",
      "description": {
        "fct-descr": "\u003cp\u003eA persistent version of the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ST-Persistent-Internal.html#ST",
        "fct-type": "type",
        "title": "ST"
      },
      "index": {
        "description": "persistent version of the ST monad",
        "hierarchy": "Control Monad ST Persistent",
        "module": "Control.Monad.ST.Persistent",
        "name": "ST",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#t:STT",
      "description": {
        "fct-module": "Control.Monad.ST.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ST-Persistent-Internal.html#STT",
        "fct-type": "data",
        "title": "STT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad ST Persistent",
        "module": "Control.Monad.ST.Persistent",
        "name": "STT",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "STT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#v:runST",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation that uses persistent references, and return a\n pure value. The rank-2 type offers similar guarantees to\n \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "(forall s.  ST s a) -\u003e a",
        "fct-source": "src/Control-Monad-ST-Persistent-Internal.html#runST",
        "fct-type": "function",
        "title": "runST"
      },
      "index": {
        "description": "Run computation that uses persistent references and return pure value The rank-2 type offers similar guarantees to runST",
        "hierarchy": "Control Monad ST Persistent",
        "module": "Control.Monad.ST.Persistent",
        "name": "runST",
        "normalized": "(a b ST c d)-\u003ed",
        "package": "persistent-refs",
        "partial": "ST",
        "signature": "(forall s. ST s a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Control-Monad-ST-Persistent.html#v:runSTT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation that uses persistent references, and return a\n pure value. The rank-2 type offers similar guarantees to\n \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.ST.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "(forall s.  STT s m a) -\u003e m a",
        "fct-source": "src/Control-Monad-ST-Persistent-Internal.html#runSTT",
        "fct-type": "function",
        "title": "runSTT"
      },
      "index": {
        "description": "Run computation that uses persistent references and return pure value The rank-2 type offers similar guarantees to runST",
        "hierarchy": "Control Monad ST Persistent",
        "module": "Control.Monad.ST.Persistent",
        "name": "runSTT",
        "normalized": "(a b STT c d e)-\u003ed e",
        "package": "persistent-refs",
        "partial": "STT",
        "signature": "(forall s. STT s m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable references in the persistent\n \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "module",
        "fct-source": "src/Data-STRef-Persistent.html",
        "fct-type": "module",
        "title": "Persistent"
      },
      "index": {
        "description": "Mutable references in the persistent ST monad",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "Persistent",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#t:MonadRef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadRef\u003c/a\u003e\u003c/code\u003e type class abstracts over the details of manipulating\n references, allowing one to write code that uses references and can operate\n in any monad that supports reference operations.\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadRef"
      },
      "index": {
        "description": "The MonadRef type class abstracts over the details of manipulating references allowing one to write code that uses references and can operate in any monad that supports reference operations",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "MonadRef",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "Monad Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#t:STRef",
      "description": {
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "data",
        "fct-source": "src/Data-STRef-Persistent.html#STRef",
        "fct-type": "data",
        "title": "STRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "STRef",
        "normalized": "",
        "package": "persistent-refs",
        "partial": "STRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:asInt",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e. Useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "STRef s a -\u003e Int",
        "fct-source": "src/Data-STRef-Persistent.html#asInt",
        "fct-type": "function",
        "title": "asInt"
      },
      "index": {
        "description": "Get the underlying Int from an STRef Useful for debugging",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "asInt",
        "normalized": "STRef a b-\u003eInt",
        "package": "persistent-refs",
        "partial": "Int",
        "signature": "STRef s a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:modifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eMutate the contents of a reference\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-type": "method",
        "title": "modifyRef"
      },
      "index": {
        "description": "Mutate the contents of reference",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "modifyRef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "persistent-refs",
        "partial": "Ref",
        "signature": "r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:modifyRef-39-",
      "description": {
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-STRef-Persistent.html#modifyRef%27",
        "fct-type": "function",
        "title": "modifyRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "modifyRef'",
        "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "persistent-refs",
        "partial": "Ref'",
        "signature": "r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:newRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new reference\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "a -\u003e m (r a)",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "Create new reference",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "newRef",
        "normalized": "a-\u003eb(c a)",
        "package": "persistent-refs",
        "partial": "Ref",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:readRef",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a reference\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "r a -\u003e m a",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "Read the value of reference",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "readRef",
        "normalized": "a b-\u003ec b",
        "package": "persistent-refs",
        "partial": "Ref",
        "signature": "r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-refs/docs/Data-STRef-Persistent.html#v:writeRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value to a reference\n\u003c/p\u003e",
        "fct-module": "Data.STRef.Persistent",
        "fct-package": "persistent-refs",
        "fct-signature": "r a -\u003e a -\u003e m ()",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "Write new value to reference",
        "hierarchy": "Data STRef Persistent",
        "module": "Data.STRef.Persistent",
        "name": "writeRef",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "persistent-refs",
        "partial": "Ref",
        "signature": "r a-\u003ea-\u003em()"
      }
    }
  }
]