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
        "word": "representable-functors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized Store comonad, parameterized by a Representable functor.\n The representation of that functor serves as the index of the store.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "representable-functors",
          "source": "src/Control-Comonad-Representable-Store.html",
          "type": "module"
        },
        "index": {
          "description": "generalized Store comonad parameterized by Representable functor The representation of that functor serves as the index of the store",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "representable-functors",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoized store comonad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eKey g\u003c/code\u003e is the index of the store.\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "representable-functors",
          "source": "src/Control-Comonad-Representable-Store.html#Store",
          "type": "type"
        },
        "index": {
          "description": "memoized store comonad parameterized by representable functor where the representatation of Key is the index of the store",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "representable-functors",
          "partial": "Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA store transformer comonad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for an index \u003ccode\u003eKey g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - The inner comonad.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "representable-functors",
          "source": "src/Control-Comonad-Representable-Store.html#StoreT",
          "type": "data"
        },
        "index": {
          "description": "store transformer comonad parameterized by representable functor used to memoize results for an index Key The inner comonad",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "representable-functors",
          "partial": "Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#t:StoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "representable-functors",
          "signature": "StoreT (w (g a)) (Key g)",
          "source": "src/Control-Comonad-Representable-Store.html#StoreT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "representable-functors",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:StoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "peek",
          "package": "representable-functors",
          "signature": "forall a.  s -\u003e w a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "peek",
          "normalized": "a b c-\u003ed e-\u003ee",
          "package": "representable-functors",
          "signature": "forall a. s-\u003ew a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "peeks",
          "package": "representable-functors",
          "signature": "forall a.  (s -\u003e s) -\u003e w a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "peeks",
          "normalized": "a b(c-\u003ec)-\u003ed e-\u003ee",
          "package": "representable-functors",
          "signature": "forall a.(s-\u003es)-\u003ew a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:peeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "pos",
          "package": "representable-functors",
          "signature": "forall a.  w a -\u003e s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "pos",
          "normalized": "a b c d-\u003ee",
          "package": "representable-functors",
          "signature": "forall a. w a-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStore",
          "package": "representable-functors",
          "signature": "Store g a-\u003e (Key g -\u003e a, Key g)",
          "type": "function"
        },
        "index": {
          "description": "Unwrap state monad computation as function The inverse of state",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStore",
          "normalized": "Store a b-\u003e(Key a-\u003eb,Key a)",
          "package": "representable-functors",
          "partial": "Store",
          "signature": "Store g a-\u003e(Key g-\u003ea,Key g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:runStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "runStoreT",
          "package": "representable-functors",
          "signature": "StoreT g w a -\u003e (w (Key g -\u003e a), Key g)",
          "source": "src/Control-Comonad-Representable-Store.html#runStoreT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStoreT",
          "normalized": "StoreT a b c-\u003e(b(Key a-\u003ec),Key a)",
          "package": "representable-functors",
          "partial": "Store",
          "signature": "StoreT g w a-\u003e(w(Key g-\u003ea),Key g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:runStoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "seek",
          "package": "representable-functors",
          "signature": "forall a.  s -\u003e w a -\u003e w a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "seek",
          "normalized": "a b c-\u003ed e-\u003ed e",
          "package": "representable-functors",
          "signature": "forall a. s-\u003ew a-\u003ew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "seeks",
          "package": "representable-functors",
          "signature": "forall a.  (s -\u003e s) -\u003e w a -\u003e w a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "seeks",
          "normalized": "a b(c-\u003ec)-\u003ed e-\u003ed e",
          "package": "representable-functors",
          "signature": "forall a.(s-\u003es)-\u003ew a-\u003ew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:seeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a store comonad computation from a function and a current index.\n (The inverse of \u003ccode\u003e\u003ca\u003erunStore\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "store",
          "package": "representable-functors",
          "signature": "(Key g -\u003e a)-\u003e Key g-\u003e Store g a",
          "type": "function"
        },
        "index": {
          "description": "Construct store comonad computation from function and current index The inverse of runStore",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "store",
          "normalized": "(Key a-\u003eb)-\u003eKey a-\u003eStore a b",
          "package": "representable-functors",
          "signature": "(Key g-\u003ea)-\u003eKey g-\u003eStore g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "storeT",
          "package": "representable-functors",
          "signature": "w (Key g -\u003e a) -\u003e Key g -\u003e StoreT g w a",
          "source": "src/Control-Comonad-Representable-Store.html#storeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "storeT",
          "normalized": "a(Key b-\u003ec)-\u003eKey b-\u003eStoreT b a c",
          "package": "representable-functors",
          "signature": "w(Key g-\u003ea)-\u003eKey g-\u003eStoreT g w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Comonad-Representable-Store.html#v:storeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable functors on Hask all monads, being isomorphic to\n a reader monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-Reader.html",
          "type": "module"
        },
        "index": {
          "description": "Representable functors on Hask all monads being isomorphic to reader monad",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "representable-functors",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-Reader.html#Reader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "representable-functors",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "representable-functors",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "representable-functors",
          "signature": "ReaderT",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "representable-functors",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "ask",
          "package": "representable-functors",
          "signature": "m r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ask",
          "package": "representable-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "getReaderT",
          "package": "representable-functors",
          "signature": "f (m b)",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "getReaderT",
          "package": "representable-functors",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:getReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "local",
          "package": "representable-functors",
          "signature": "forall a.  (r -\u003e r) -\u003e m a -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "local",
          "normalized": "a b(c-\u003ec)-\u003ed e-\u003ed e",
          "package": "representable-functors",
          "signature": "forall a.(r-\u003er)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "readerT",
          "package": "representable-functors",
          "signature": "(Key f -\u003e m b) -\u003e ReaderT f m b",
          "source": "src/Control-Monad-Representable-Reader.html#readerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "readerT",
          "normalized": "(Key a-\u003eb c)-\u003eReaderT a b c",
          "package": "representable-functors",
          "signature": "(Key f-\u003em b)-\u003eReaderT f m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:readerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "runReader",
          "package": "representable-functors",
          "signature": "Reader f b -\u003e Key f -\u003e b",
          "source": "src/Control-Monad-Representable-Reader.html#runReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "runReader",
          "normalized": "Reader a b-\u003eKey a-\u003eb",
          "package": "representable-functors",
          "partial": "Reader",
          "signature": "Reader f b-\u003eKey f-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "runReaderT",
          "package": "representable-functors",
          "signature": "ReaderT f m b -\u003e Key f -\u003e m b",
          "source": "src/Control-Monad-Representable-Reader.html#runReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "runReaderT",
          "normalized": "ReaderT a b c-\u003eKey a-\u003eb c",
          "package": "representable-functors",
          "partial": "Reader",
          "signature": "ReaderT f m b-\u003eKey f-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-Reader.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized State monad, parameterized by a Representable functor.\n The representation of that functor serves as the state.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-State.html",
          "type": "module"
        },
        "index": {
          "description": "generalized State monad parameterized by Representable functor The representation of that functor serves as the state",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "representable-functors",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoized state monad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eKey g\u003c/code\u003e is the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-State.html#State",
          "type": "type"
        },
        "index": {
          "description": "memoized state monad parameterized by representable functor where the representatation of Key is the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "representable-functors",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for a state \u003ccode\u003eKey g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "representable-functors",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "state transformer monad parameterized by representable functor used to memoize results for state Key The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "representable-functors",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "representable-functors",
          "signature": "StateT",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "representable-functors",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "evalState",
          "package": "representable-functors",
          "signature": "State g a-\u003e Key g-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "evalState",
          "normalized": "State a b-\u003eKey a-\u003eb",
          "package": "representable-functors",
          "partial": "State",
          "signature": "State g a-\u003eKey g-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "evalStateT",
          "package": "representable-functors",
          "signature": "StateT g m a -\u003e Key g -\u003e m a",
          "source": "src/Control-Monad-Representable-State.html#evalStateT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003eKey a-\u003eb c",
          "package": "representable-functors",
          "partial": "State",
          "signature": "StateT g m a-\u003eKey g-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "execState",
          "package": "representable-functors",
          "signature": "State g a-\u003e Key g-\u003e Key g",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "execState",
          "normalized": "State a b-\u003eKey a-\u003eKey a",
          "package": "representable-functors",
          "partial": "State",
          "signature": "State g a-\u003eKey g-\u003eKey g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "execStateT",
          "package": "representable-functors",
          "signature": "StateT g m a -\u003e Key g -\u003e m (Key g)",
          "source": "src/Control-Monad-Representable-State.html#execStateT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003eKey a-\u003eb(Key a)",
          "package": "representable-functors",
          "partial": "State",
          "signature": "StateT g m a-\u003eKey g-\u003em(Key g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "get",
          "package": "representable-functors",
          "signature": "m s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "get",
          "package": "representable-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "getStateT",
          "package": "representable-functors",
          "signature": "g (m (a, Key g))",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "getStateT",
          "normalized": "a(b(c,Key a))",
          "package": "representable-functors",
          "partial": "State",
          "signature": "g(m(a,Key g))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:getStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "gets",
          "package": "representable-functors",
          "signature": "(s -\u003e a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "representable-functors",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC",
          "package": "representable-functors",
          "signature": "((((a, Key g) -\u003e m (b, Key g)) -\u003e m (a, Key g)) -\u003e m (a, Key g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC",
          "normalized": "((((a,Key b)-\u003ec(d,Key b))-\u003ec(a,Key b))-\u003ec(a,Key b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
          "package": "representable-functors",
          "partial": "Call CC",
          "signature": "((((a,Key g)-\u003em(b,Key g))-\u003em(a,Key g))-\u003em(a,Key g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC'",
          "package": "representable-functors",
          "signature": "((((a, Key g) -\u003e m (b, Key g)) -\u003e m (a, Key g)) -\u003e m (a, Key g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#liftCallCC%27",
          "type": "function"
        },
        "index": {
          "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC'",
          "normalized": "((((a,Key b)-\u003ec(d,Key b))-\u003ec(a,Key b))-\u003ec(a,Key b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
          "package": "representable-functors",
          "partial": "Call CC'",
          "signature": "((((a,Key g)-\u003em(b,Key g))-\u003em(a,Key g))-\u003em(a,Key g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:liftCallCC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "mapState",
          "package": "representable-functors",
          "signature": "((a, Key g) -\u003e (b, Key g)) -\u003e State g a -\u003e State g b",
          "source": "src/Control-Monad-Representable-State.html#mapState",
          "type": "function"
        },
        "index": {
          "description": "Map both the return value and final state of computation using the given function runState mapState runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "mapState",
          "normalized": "((a,Key b)-\u003e(c,Key b))-\u003eState b a-\u003eState b c",
          "package": "representable-functors",
          "partial": "State",
          "signature": "((a,Key g)-\u003e(b,Key g))-\u003eState g a-\u003eState g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "mapStateT",
          "package": "representable-functors",
          "signature": "(m (a, Key g) -\u003e n (b, Key g)) -\u003e StateT g m a -\u003e StateT g n b",
          "source": "src/Control-Monad-Representable-State.html#mapStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "mapStateT",
          "normalized": "(a(b,Key c)-\u003ed(e,Key c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "representable-functors",
          "partial": "State",
          "signature": "(m(a,Key g)-\u003en(b,Key g))-\u003eStateT g m a-\u003eStateT g n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "modify",
          "package": "representable-functors",
          "signature": "(s -\u003e s) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "representable-functors",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "put",
          "package": "representable-functors",
          "signature": "s -\u003e m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "representable-functors",
          "signature": "s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "runState",
          "package": "representable-functors",
          "signature": "State g a-\u003e Key g-\u003e (a, Key g)",
          "type": "function"
        },
        "index": {
          "description": "Unwrap state monad computation as function The inverse of state",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "runState",
          "normalized": "State a b-\u003eKey a-\u003e(b,Key a)",
          "package": "representable-functors",
          "partial": "State",
          "signature": "State g a-\u003eKey g-\u003e(a,Key g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "runStateT",
          "package": "representable-functors",
          "signature": "StateT g m a -\u003e Key g -\u003e m (a, Key g)",
          "source": "src/Control-Monad-Representable-State.html#runStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "runStateT",
          "normalized": "StateT a b c-\u003eKey a-\u003eb(c,Key a)",
          "package": "representable-functors",
          "partial": "State",
          "signature": "StateT g m a-\u003eKey g-\u003em(a,Key g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "stateT",
          "package": "representable-functors",
          "signature": "(Key g -\u003e m (a, Key g)) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#stateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "stateT",
          "normalized": "(Key a-\u003eb(c,Key a))-\u003eStateT a b c",
          "package": "representable-functors",
          "signature": "(Key g-\u003em(a,Key g))-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Control-Monad-Representable-State.html#v:stateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable contravariant endofunctors over the category of Haskell\n types are isomorphic to \u003ccode\u003e(_ -\u003e r)\u003c/code\u003e and resemble mappings to a\n fixed range.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "source": "src/Data-Functor-Contravariant-Representable.html",
          "type": "module"
        },
        "index": {
          "description": "Representable contravariant endofunctors over the category of Haskell types are isomorphic to and resemble mappings to fixed range",
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "partial": "Representable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual to \u003ccode\u003eIndexed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Coindexed",
          "package": "representable-functors",
          "source": "src/Data-Functor-Contravariant-Representable.html#Coindexed",
          "type": "class"
        },
        "index": {
          "description": "Dual to Indexed",
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Coindexed",
          "package": "representable-functors",
          "partial": "Coindexed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Coindexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003econtrarep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecoindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(_ -\u003e Value f)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "source": "src/Data-Functor-Contravariant-Representable.html#Representable",
          "type": "class"
        },
        "index": {
          "description": "Contravariant functor is Representable if contrarep and coindex witness an isomorphism to Value",
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Value",
          "package": "representable-functors",
          "signature": "Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Value",
          "package": "representable-functors",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual to \u003ccode\u003eKeyed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Valued",
          "package": "representable-functors",
          "source": "src/Data-Functor-Contravariant-Representable.html#Valued",
          "type": "class"
        },
        "index": {
          "description": "Dual to Keyed",
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "Valued",
          "package": "representable-functors",
          "partial": "Valued",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#t:Valued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Representable",
          "name": "coindex",
          "package": "representable-functors",
          "signature": "f a -\u003e a -\u003e Value f",
          "source": "src/Data-Functor-Contravariant-Representable.html#coindex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "coindex",
          "normalized": "a b-\u003eb-\u003eValue a",
          "package": "representable-functors",
          "signature": "f a-\u003ea-\u003eValue f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:coindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapDefault",
          "package": "representable-functors",
          "signature": "(a -\u003e b) -\u003e f b -\u003e f a",
          "source": "src/Data-Functor-Contravariant-Representable.html#contramapDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapDefault",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "representable-functors",
          "partial": "Default",
          "signature": "(a-\u003eb)-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapWithValue",
          "package": "representable-functors",
          "signature": "(b -\u003e Either a (Value f)) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Contravariant-Representable.html#contramapWithValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapWithValue",
          "normalized": "(a-\u003eEither b(Value c))-\u003ec b-\u003ec a",
          "package": "representable-functors",
          "partial": "With Value",
          "signature": "(b-\u003eEither a(Value f))-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapWithValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapWithValueDefault",
          "package": "representable-functors",
          "signature": "(b -\u003e Either a (Value f)) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Contravariant-Representable.html#contramapWithValueDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contramapWithValueDefault",
          "normalized": "(a-\u003eEither b(Value c))-\u003ec b-\u003ec a",
          "package": "representable-functors",
          "partial": "With Value Default",
          "signature": "(b-\u003eEither a(Value f))-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contramapWithValueDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e contramap f (contrarep g) = contrarep (g . f)\n\u003c/pre\u003e",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contrarep",
          "package": "representable-functors",
          "signature": "(a -\u003e Value f) -\u003e f a",
          "source": "src/Data-Functor-Contravariant-Representable.html#contrarep",
          "type": "method"
        },
        "index": {
          "description": "contramap contrarep contrarep",
          "hierarchy": "Data Functor Contravariant Representable",
          "module": "Data.Functor.Contravariant.Representable",
          "name": "contrarep",
          "normalized": "(a-\u003eValue b)-\u003eb a",
          "package": "representable-functors",
          "signature": "(a-\u003eValue f)-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Contravariant-Representable.html#v:contrarep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable endofunctors over the category of Haskell types are\n isomorphic to the reader monad and so inherit a very large number\n of properties for free.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "source": "src/Data-Functor-Representable.html",
          "type": "module"
        },
        "index": {
          "description": "Representable endofunctors over the category of Haskell types are isomorphic to the reader monad and so inherit very large number of properties for free",
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "partial": "Representable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "Rep",
          "package": "representable-functors",
          "source": "src/Data-Functor-Representable.html#Rep",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "Rep",
          "package": "representable-functors",
          "partial": "Rep",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(-\u003e) x\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e tabulate . index = id\n index . tabulate = id\n tabulate . return f = return f\n\u003c/pre\u003e",
          "module": "Data.Functor.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "source": "src/Data-Functor-Representable.html#Representable",
          "type": "class"
        },
        "index": {
          "description": "Functor is Representable if tabulate and index witness an isomorphism to tabulate index id index tabulate id tabulate return return",
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "Representable",
          "package": "representable-functors",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "Rep",
          "package": "representable-functors",
          "signature": "Rep",
          "source": "src/Data-Functor-Representable.html#Rep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "Rep",
          "package": "representable-functors",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "apRep",
          "package": "representable-functors",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Representable.html#apRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "apRep",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:apRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "askRep",
          "package": "representable-functors",
          "signature": "f (Key f)",
          "source": "src/Data-Functor-Representable.html#askRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "askRep",
          "package": "representable-functors",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:askRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "bindRep",
          "package": "representable-functors",
          "signature": "f a -\u003e (a -\u003e f b) -\u003e f b",
          "source": "src/Data-Functor-Representable.html#bindRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "bindRep",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "f a-\u003e(a-\u003ef b)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:bindRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "bindWithKeyRep",
          "package": "representable-functors",
          "signature": "f a -\u003e (Key f -\u003e a -\u003e f b) -\u003e f b",
          "source": "src/Data-Functor-Representable.html#bindWithKeyRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "bindWithKeyRep",
          "normalized": "a b-\u003e(Key a-\u003eb-\u003ea c)-\u003ea c",
          "package": "representable-functors",
          "partial": "With Key Rep",
          "signature": "f a-\u003e(Key f-\u003ea-\u003ef b)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:bindWithKeyRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "distributeRep",
          "package": "representable-functors",
          "signature": "w (f a) -\u003e f (w a)",
          "source": "src/Data-Functor-Representable.html#distributeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "distributeRep",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "w(f a)-\u003ef(w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:distributeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "duplicateRep",
          "package": "representable-functors",
          "signature": "f a -\u003e f (f a)",
          "source": "src/Data-Functor-Representable.html#duplicateRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "duplicateRep",
          "normalized": "a b-\u003ea(a b)",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "f a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:duplicateRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "duplicatedRep",
          "package": "representable-functors",
          "signature": "f a -\u003e f (f a)",
          "source": "src/Data-Functor-Representable.html#duplicatedRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "duplicatedRep",
          "normalized": "a b-\u003ea(a b)",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "f a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:duplicatedRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "extendRep",
          "package": "representable-functors",
          "signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Representable.html#extendRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "extendRep",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "(f a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extendRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "extendedRep",
          "package": "representable-functors",
          "signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Representable.html#extendedRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "extendedRep",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "(f a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extendedRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "extractRep",
          "package": "representable-functors",
          "signature": "f a -\u003e a",
          "source": "src/Data-Functor-Representable.html#extractRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "extractRep",
          "normalized": "a b-\u003eb",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:extractRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "fmapRep",
          "package": "representable-functors",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Representable.html#fmapRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "fmapRep",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:fmapRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "liftR2",
          "package": "representable-functors",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Functor-Representable.html#liftR2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "liftR2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "representable-functors",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:liftR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "liftR3",
          "package": "representable-functors",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Functor-Representable.html#liftR3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "liftR3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "representable-functors",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:liftR3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "localRep",
          "package": "representable-functors",
          "signature": "(Key f -\u003e Key f) -\u003e f a -\u003e f a",
          "source": "src/Data-Functor-Representable.html#localRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "localRep",
          "normalized": "(Key a-\u003eKey a)-\u003ea b-\u003ea b",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "(Key f-\u003eKey f)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:localRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "mapWithKeyRep",
          "package": "representable-functors",
          "signature": "(Key f -\u003e a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Representable.html#mapWithKeyRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "mapWithKeyRep",
          "normalized": "(Key a-\u003eb-\u003ec)-\u003ea b-\u003ea c",
          "package": "representable-functors",
          "partial": "With Key Rep",
          "signature": "(Key f-\u003ea-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:mapWithKeyRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "pureRep",
          "package": "representable-functors",
          "signature": "a -\u003e f a",
          "source": "src/Data-Functor-Representable.html#pureRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "pureRep",
          "normalized": "a-\u003eb a",
          "package": "representable-functors",
          "partial": "Rep",
          "signature": "a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:pureRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e fmap f . tabulate = tabulate . fmap f\n\u003c/pre\u003e",
          "module": "Data.Functor.Representable",
          "name": "tabulate",
          "package": "representable-functors",
          "signature": "(Key f -\u003e a) -\u003e f a",
          "source": "src/Data-Functor-Representable.html#tabulate",
          "type": "method"
        },
        "index": {
          "description": "fmap tabulate tabulate fmap",
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "tabulate",
          "normalized": "(Key a-\u003eb)-\u003ea b",
          "package": "representable-functors",
          "signature": "(Key f-\u003ea)-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "unrep",
          "package": "representable-functors",
          "signature": "f a",
          "source": "src/Data-Functor-Representable.html#Rep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "unrep",
          "package": "representable-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:unrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "zipWithKeyRep",
          "package": "representable-functors",
          "signature": "(Key f -\u003e a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Functor-Representable.html#zipWithKeyRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "zipWithKeyRep",
          "normalized": "(Key a-\u003eb-\u003ec-\u003ed)-\u003ea b-\u003ea c-\u003ea d",
          "package": "representable-functors",
          "partial": "With Key Rep",
          "signature": "(Key f-\u003ea-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:zipWithKeyRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Representable",
          "name": "zipWithRep",
          "package": "representable-functors",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Functor-Representable.html#zipWithRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Representable",
          "module": "Data.Functor.Representable",
          "name": "zipWithRep",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "representable-functors",
          "partial": "With Rep",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/representable-functors/docs/Data-Functor-Representable.html#v:zipWithRep"
      }
    }
  ]
]