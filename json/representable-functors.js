[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized Store comonad, parameterized by a Representable functor.\n The representation of that functor serves as the index of the store.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Representable-Store.html",
        "fct-type": "module",
        "title": "Store"
      },
      "index": {
        "description": "generalized Store comonad parameterized by Representable functor The representation of that functor serves as the index of the store",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "Store",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#t:Store",
      "description": {
        "fct-descr": "\u003cp\u003eA memoized store comonad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eKey g\u003c/code\u003e is the index of the store.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "type",
        "fct-source": "src/Control-Comonad-Representable-Store.html#Store",
        "fct-type": "type",
        "title": "Store"
      },
      "index": {
        "description": "memoized store comonad parameterized by representable functor where the representatation of Key is the index of the store",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "Store",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#t:StoreT",
      "description": {
        "fct-descr": "\u003cp\u003eA store transformer comonad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for an index \u003ccode\u003eKey g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - The inner comonad.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Representable-Store.html#StoreT",
        "fct-type": "data",
        "title": "StoreT"
      },
      "index": {
        "description": "store transformer comonad parameterized by representable functor used to memoize results for an index Key The inner comonad",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "StoreT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:StoreT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "StoreT (w (g a)) (Key g)",
        "fct-source": "src/Control-Comonad-Representable-Store.html#StoreT",
        "fct-type": "function",
        "title": "StoreT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "StoreT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:peek",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  s -\u003e w a -\u003e a",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "peek",
        "normalized": "a b c-\u003ed e-\u003ee",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a. s-\u003ew a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:peeks",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  (s -\u003e s) -\u003e w a -\u003e a",
        "fct-type": "function",
        "title": "peeks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "peeks",
        "normalized": "a b(c-\u003ec)-\u003ed e-\u003ee",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a.(s-\u003es)-\u003ew a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:pos",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  w a -\u003e s",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "pos",
        "normalized": "a b c d-\u003ee",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a. w a-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:runStore",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "Store g a-\u003e (Key g -\u003e a, Key g)",
        "fct-type": "function",
        "title": "runStore"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "runStore",
        "normalized": "Store a b-\u003e(Key a-\u003eb,Key a)",
        "package": "representable-functors",
        "partial": "Store",
        "signature": "Store g a-\u003e(Key g-\u003ea,Key g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:runStoreT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "StoreT g w a -\u003e (w (Key g -\u003e a), Key g)",
        "fct-source": "src/Control-Comonad-Representable-Store.html#runStoreT",
        "fct-type": "function",
        "title": "runStoreT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "runStoreT",
        "normalized": "StoreT a b c-\u003e(b(Key a-\u003ec),Key a)",
        "package": "representable-functors",
        "partial": "Store",
        "signature": "StoreT g w a-\u003e(w(Key g-\u003ea),Key g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:seek",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  s -\u003e w a -\u003e w a",
        "fct-type": "function",
        "title": "seek"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "seek",
        "normalized": "a b c-\u003ed e-\u003ed e",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a. s-\u003ew a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:seeks",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  (s -\u003e s) -\u003e w a -\u003e w a",
        "fct-type": "function",
        "title": "seeks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "seeks",
        "normalized": "a b(c-\u003ec)-\u003ed e-\u003ed e",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a.(s-\u003es)-\u003ew a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:store",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a store comonad computation from a function and a current index.\n (The inverse of \u003ccode\u003e\u003ca\u003erunStore\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "(Key g -\u003e a)-\u003e Key g-\u003e Store g a",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "Construct store comonad computation from function and current index The inverse of runStore",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "store",
        "normalized": "(Key a-\u003eb)-\u003eKey a-\u003eStore a b",
        "package": "representable-functors",
        "partial": "",
        "signature": "(Key g-\u003ea)-\u003eKey g-\u003eStore g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:storeT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "representable-functors",
        "fct-signature": "w (Key g -\u003e a) -\u003e Key g -\u003e StoreT g w a",
        "fct-source": "src/Control-Comonad-Representable-Store.html#storeT",
        "fct-type": "function",
        "title": "storeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "storeT",
        "normalized": "a(Key b-\u003ec)-\u003eKey b-\u003eStoreT b a c",
        "package": "representable-functors",
        "partial": "",
        "signature": "w(Key g-\u003ea)-\u003eKey g-\u003eStoreT g w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable functors on Hask all monads, being isomorphic to\n a reader monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Representable-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "Representable functors on Hask all monads being isomorphic to reader monad",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#t:Reader",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Representable-Reader.html#Reader",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#t:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Representable-Reader.html#ReaderT",
        "fct-type": "newtype",
        "title": "ReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "ReaderT",
        "fct-source": "src/Control-Monad-Representable-Reader.html#ReaderT",
        "fct-type": "function",
        "title": "ReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:ask",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "m r",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "ask",
        "normalized": "",
        "package": "representable-functors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:getReaderT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "f (m b)",
        "fct-source": "src/Control-Monad-Representable-Reader.html#ReaderT",
        "fct-type": "function",
        "title": "getReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "getReaderT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:local",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "forall a.  (r -\u003e r) -\u003e m a -\u003e m a",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "local",
        "normalized": "a b(c-\u003ec)-\u003ed e-\u003ed e",
        "package": "representable-functors",
        "partial": "",
        "signature": "forall a.(r-\u003er)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:readerT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "(Key f -\u003e m b) -\u003e ReaderT f m b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#readerT",
        "fct-type": "function",
        "title": "readerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "readerT",
        "normalized": "(Key a-\u003eb c)-\u003eReaderT a b c",
        "package": "representable-functors",
        "partial": "",
        "signature": "(Key f-\u003em b)-\u003eReaderT f m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:runReader",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "Reader f b -\u003e Key f -\u003e b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "runReader",
        "normalized": "Reader a b-\u003eKey a-\u003eb",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": "Reader f b-\u003eKey f-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:runReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "representable-functors",
        "fct-signature": "ReaderT f m b -\u003e Key f -\u003e m b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#runReaderT",
        "fct-type": "function",
        "title": "runReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "runReaderT",
        "normalized": "ReaderT a b c-\u003eKey a-\u003eb c",
        "package": "representable-functors",
        "partial": "Reader",
        "signature": "ReaderT f m b-\u003eKey f-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized State monad, parameterized by a Representable functor.\n The representation of that functor serves as the state.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Representable-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "generalized State monad parameterized by Representable functor The representation of that functor serves as the state",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "State",
        "normalized": "",
        "package": "representable-functors",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA memoized state monad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eKey g\u003c/code\u003e is the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Representable-State.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "memoized state monad parameterized by representable functor where the representatation of Key is the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "State",
        "normalized": "",
        "package": "representable-functors",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for a state \u003ccode\u003eKey g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Representable-State.html#StateT",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by representable functor used to memoize results for state Key The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "StateT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "StateT",
        "fct-source": "src/Control-Monad-Representable-State.html#StateT",
        "fct-type": "function",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "StateT",
        "normalized": "",
        "package": "representable-functors",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "State g a-\u003e Key g-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "evalState",
        "normalized": "State a b-\u003eKey a-\u003eb",
        "package": "representable-functors",
        "partial": "State",
        "signature": "State g a-\u003eKey g-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "StateT g m a -\u003e Key g -\u003e m a",
        "fct-source": "src/Control-Monad-Representable-State.html#evalStateT",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003eKey a-\u003eb c",
        "package": "representable-functors",
        "partial": "State",
        "signature": "StateT g m a-\u003eKey g-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "State g a-\u003e Key g-\u003e Key g",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "execState",
        "normalized": "State a b-\u003eKey a-\u003eKey a",
        "package": "representable-functors",
        "partial": "State",
        "signature": "State g a-\u003eKey g-\u003eKey g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "StateT g m a -\u003e Key g -\u003e m (Key g)",
        "fct-source": "src/Control-Monad-Representable-State.html#execStateT",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003eKey a-\u003eb(Key a)",
        "package": "representable-functors",
        "partial": "State",
        "signature": "StateT g m a-\u003eKey g-\u003em(Key g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:get",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "m s",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "get",
        "normalized": "",
        "package": "representable-functors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:getStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "g (m (a, Key g))",
        "fct-source": "src/Control-Monad-Representable-State.html#StateT",
        "fct-type": "function",
        "title": "getStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "getStateT",
        "normalized": "a(b(c,Key a))",
        "package": "representable-functors",
        "partial": "State",
        "signature": "g(m(a,Key g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:gets",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "representable-functors",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "((((a, Key g) -\u003e m (b, Key g)) -\u003e m (a, Key g)) -\u003e m (a, Key g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "liftCallCC",
        "normalized": "((((a,Key b)-\u003ec(d,Key b))-\u003ec(a,Key b))-\u003ec(a,Key b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "representable-functors",
        "partial": "Call CC",
        "signature": "((((a,Key g)-\u003em(b,Key g))-\u003em(a,Key g))-\u003em(a,Key g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "((((a, Key g) -\u003e m (b, Key g)) -\u003e m (a, Key g)) -\u003e m (a, Key g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "liftCallCC'",
        "normalized": "((((a,Key b)-\u003ec(d,Key b))-\u003ec(a,Key b))-\u003ec(a,Key b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "representable-functors",
        "partial": "Call CC'",
        "signature": "((((a,Key g)-\u003em(b,Key g))-\u003em(a,Key g))-\u003em(a,Key g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "((a, Key g) -\u003e (b, Key g)) -\u003e State g a -\u003e State g b",
        "fct-source": "src/Control-Monad-Representable-State.html#mapState",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "mapState",
        "normalized": "((a,Key b)-\u003e(c,Key b))-\u003eState b a-\u003eState b c",
        "package": "representable-functors",
        "partial": "State",
        "signature": "((a,Key g)-\u003e(b,Key g))-\u003eState g a-\u003eState g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:mapStateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "(m (a, Key g) -\u003e n (b, Key g)) -\u003e StateT g m a -\u003e StateT g n b",
        "fct-source": "src/Control-Monad-Representable-State.html#mapStateT",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "mapStateT",
        "normalized": "(a(b,Key c)-\u003ed(e,Key c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "representable-functors",
        "partial": "State",
        "signature": "(m(a,Key g)-\u003en(b,Key g))-\u003eStateT g m a-\u003eStateT g n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:modify",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "representable-functors",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:put",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "s -\u003e m ()",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "representable-functors",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "State g a-\u003e Key g-\u003e (a, Key g)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "runState",
        "normalized": "State a b-\u003eKey a-\u003e(b,Key a)",
        "package": "representable-functors",
        "partial": "State",
        "signature": "State g a-\u003eKey g-\u003e(a,Key g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:runStateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "StateT g m a -\u003e Key g -\u003e m (a, Key g)",
        "fct-source": "src/Control-Monad-Representable-State.html#runStateT",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "runStateT",
        "normalized": "StateT a b c-\u003eKey a-\u003eb(c,Key a)",
        "package": "representable-functors",
        "partial": "State",
        "signature": "StateT g m a-\u003eKey g-\u003em(a,Key g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:stateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "representable-functors",
        "fct-signature": "(Key g -\u003e m (a, Key g)) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#stateT",
        "fct-type": "function",
        "title": "stateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "stateT",
        "normalized": "(Key a-\u003eb(c,Key a))-\u003eStateT a b c",
        "package": "representable-functors",
        "partial": "",
        "signature": "(Key g-\u003em(a,Key g))-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable contravariant endofunctors over the category of Haskell\n types are isomorphic to \u003ccode\u003e(_ -\u003e r)\u003c/code\u003e and resemble mappings to a\n fixed range.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html",
        "fct-type": "module",
        "title": "Representable"
      },
      "index": {
        "description": "Representable contravariant endofunctors over the category of Haskell types are isomorphic to and resemble mappings to fixed range",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Coindexed",
      "description": {
        "fct-descr": "\u003cp\u003eDual to \u003ccode\u003eIndexed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#Coindexed",
        "fct-type": "class",
        "title": "Coindexed"
      },
      "index": {
        "description": "Dual to Indexed",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "Coindexed",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Coindexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Representable",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003econtrarep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecoindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(_ -\u003e Value f)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#Representable",
        "fct-type": "class",
        "title": "Representable"
      },
      "index": {
        "description": "Contravariant functor is Representable if contrarep and coindex witness an isomorphism to Value",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Value",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "Value",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Valued",
      "description": {
        "fct-descr": "\u003cp\u003eDual to \u003ccode\u003eKeyed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#Valued",
        "fct-type": "class",
        "title": "Valued"
      },
      "index": {
        "description": "Dual to Keyed",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "Valued",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Valued",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:coindex",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e a -\u003e Value f",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#coindex",
        "fct-type": "method",
        "title": "coindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "coindex",
        "normalized": "a b-\u003eb-\u003eValue a",
        "package": "representable-functors",
        "partial": "",
        "signature": "f a-\u003ea-\u003eValue f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapDefault",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e b) -\u003e f b -\u003e f a",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#contramapDefault",
        "fct-type": "function",
        "title": "contramapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "contramapDefault",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "representable-functors",
        "partial": "Default",
        "signature": "(a-\u003eb)-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapWithValue",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(b -\u003e Either a (Value f)) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#contramapWithValue",
        "fct-type": "method",
        "title": "contramapWithValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "contramapWithValue",
        "normalized": "(a-\u003eEither b(Value c))-\u003ec b-\u003ec a",
        "package": "representable-functors",
        "partial": "With Value",
        "signature": "(b-\u003eEither a(Value f))-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapWithValueDefault",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(b -\u003e Either a (Value f)) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#contramapWithValueDefault",
        "fct-type": "function",
        "title": "contramapWithValueDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "contramapWithValueDefault",
        "normalized": "(a-\u003eEither b(Value c))-\u003ec b-\u003ec a",
        "package": "representable-functors",
        "partial": "With Value Default",
        "signature": "(b-\u003eEither a(Value f))-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contrarep",
      "description": {
        "fct-descr": "\u003cpre\u003e contramap f (contrarep g) = contrarep (g . f)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Contravariant.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e Value f) -\u003e f a",
        "fct-source": "src/Data-Functor-Contravariant-Representable.html#contrarep",
        "fct-type": "method",
        "title": "contrarep"
      },
      "index": {
        "description": "contramap contrarep contrarep",
        "hierarchy": "Data Functor Contravariant Representable",
        "module": "Data.Functor.Contravariant.Representable",
        "name": "contrarep",
        "normalized": "(a-\u003eValue b)-\u003eb a",
        "package": "representable-functors",
        "partial": "",
        "signature": "(a-\u003eValue f)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable endofunctors over the category of Haskell types are\n isomorphic to the reader monad and so inherit a very large number\n of properties for free.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Representable.html",
        "fct-type": "module",
        "title": "Representable"
      },
      "index": {
        "description": "Representable endofunctors over the category of Haskell types are isomorphic to the reader monad and so inherit very large number of properties for free",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#t:Rep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Representable.html#Rep",
        "fct-type": "newtype",
        "title": "Rep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "Rep",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#t:Representable",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(-\u003e) x\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e tabulate . index = id\n index . tabulate = id\n tabulate . return f = return f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Representable.html#Representable",
        "fct-type": "class",
        "title": "Representable"
      },
      "index": {
        "description": "Functor is Representable if tabulate and index witness an isomorphism to tabulate index id index tabulate id tabulate return return",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "Representable",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:Rep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "Rep",
        "fct-source": "src/Data-Functor-Representable.html#Rep",
        "fct-type": "function",
        "title": "Rep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "Rep",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:apRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#apRep",
        "fct-type": "function",
        "title": "apRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "apRep",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:askRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f (Key f)",
        "fct-source": "src/Data-Functor-Representable.html#askRep",
        "fct-type": "function",
        "title": "askRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "askRep",
        "normalized": "",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:bindRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e (a -\u003e f b) -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#bindRep",
        "fct-type": "function",
        "title": "bindRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "bindRep",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "f a-\u003e(a-\u003ef b)-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:bindWithKeyRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e (Key f -\u003e a -\u003e f b) -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#bindWithKeyRep",
        "fct-type": "function",
        "title": "bindWithKeyRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "bindWithKeyRep",
        "normalized": "a b-\u003e(Key a-\u003eb-\u003ea c)-\u003ea c",
        "package": "representable-functors",
        "partial": "With Key Rep",
        "signature": "f a-\u003e(Key f-\u003ea-\u003ef b)-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:distributeRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "w (f a) -\u003e f (w a)",
        "fct-source": "src/Data-Functor-Representable.html#distributeRep",
        "fct-type": "function",
        "title": "distributeRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "distributeRep",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "w(f a)-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:duplicateRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e f (f a)",
        "fct-source": "src/Data-Functor-Representable.html#duplicateRep",
        "fct-type": "function",
        "title": "duplicateRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "duplicateRep",
        "normalized": "a b-\u003ea(a b)",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "f a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:duplicatedRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e f (f a)",
        "fct-source": "src/Data-Functor-Representable.html#duplicatedRep",
        "fct-type": "function",
        "title": "duplicatedRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "duplicatedRep",
        "normalized": "a b-\u003ea(a b)",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "f a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extendRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#extendRep",
        "fct-type": "function",
        "title": "extendRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "extendRep",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "(f a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extendedRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#extendedRep",
        "fct-type": "function",
        "title": "extendedRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "extendedRep",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "(f a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extractRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a -\u003e a",
        "fct-source": "src/Data-Functor-Representable.html#extractRep",
        "fct-type": "function",
        "title": "extractRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "extractRep",
        "normalized": "a b-\u003eb",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:fmapRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#fmapRep",
        "fct-type": "function",
        "title": "fmapRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "fmapRep",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:liftR2",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Functor-Representable.html#liftR2",
        "fct-type": "function",
        "title": "liftR2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "liftR2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "representable-functors",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:liftR3",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
        "fct-source": "src/Data-Functor-Representable.html#liftR3",
        "fct-type": "function",
        "title": "liftR3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "liftR3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "representable-functors",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:localRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(Key f -\u003e Key f) -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Functor-Representable.html#localRep",
        "fct-type": "function",
        "title": "localRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "localRep",
        "normalized": "(Key a-\u003eKey a)-\u003ea b-\u003ea b",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "(Key f-\u003eKey f)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:mapWithKeyRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(Key f -\u003e a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Representable.html#mapWithKeyRep",
        "fct-type": "function",
        "title": "mapWithKeyRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "mapWithKeyRep",
        "normalized": "(Key a-\u003eb-\u003ec)-\u003ea b-\u003ea c",
        "package": "representable-functors",
        "partial": "With Key Rep",
        "signature": "(Key f-\u003ea-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:pureRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Data-Functor-Representable.html#pureRep",
        "fct-type": "function",
        "title": "pureRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "pureRep",
        "normalized": "a-\u003eb a",
        "package": "representable-functors",
        "partial": "Rep",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:tabulate",
      "description": {
        "fct-descr": "\u003cpre\u003e fmap f . tabulate = tabulate . fmap f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(Key f -\u003e a) -\u003e f a",
        "fct-source": "src/Data-Functor-Representable.html#tabulate",
        "fct-type": "method",
        "title": "tabulate"
      },
      "index": {
        "description": "fmap tabulate tabulate fmap",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "tabulate",
        "normalized": "(Key a-\u003eb)-\u003ea b",
        "package": "representable-functors",
        "partial": "",
        "signature": "(Key f-\u003ea)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:unrep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Representable.html#Rep",
        "fct-type": "function",
        "title": "unrep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "unrep",
        "normalized": "",
        "package": "representable-functors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:zipWithKeyRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(Key f -\u003e a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Functor-Representable.html#zipWithKeyRep",
        "fct-type": "function",
        "title": "zipWithKeyRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "zipWithKeyRep",
        "normalized": "(Key a-\u003eb-\u003ec-\u003ed)-\u003ea b-\u003ea c-\u003ea d",
        "package": "representable-functors",
        "partial": "With Key Rep",
        "signature": "(Key f-\u003ea-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:zipWithRep",
      "description": {
        "fct-module": "Data.Functor.Representable",
        "fct-package": "representable-functors",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Functor-Representable.html#zipWithRep",
        "fct-type": "function",
        "title": "zipWithRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Representable",
        "module": "Data.Functor.Representable",
        "name": "zipWithRep",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "representable-functors",
        "partial": "With Rep",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  }
]