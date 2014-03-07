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
        "word": "adjunctions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a generalized \u003ccode\u003e\u003ca\u003eStore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e, parameterized by a \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n The representation of that \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e serves as the index of the store.\n\u003c/p\u003e\u003cp\u003eThis can be useful if the representable functor serves to memoize its\n contents and will be inspected often.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Representable-Store.html",
          "type": "module"
        },
        "index": {
          "description": "This is generalized Store Comonad parameterized by Representable Functor The representation of that Functor serves as the index of the store This can be useful if the representable functor serves to memoize its contents and will be inspected often",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "adjunctions",
          "partial": "Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "ComonadStore",
          "package": "adjunctions",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "ComonadStore",
          "package": "adjunctions",
          "partial": "Comonad Store",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:ComonadStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoized store comonad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eRep g\u003c/code\u003e is the index of the store.\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Representable-Store.html#Store",
          "type": "type"
        },
        "index": {
          "description": "memoized store comonad parameterized by representable functor where the representatation of Rep is the index of the store",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "Store",
          "package": "adjunctions",
          "partial": "Store",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA store transformer comonad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for an index \u003ccode\u003eRep g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - The inner comonad.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Representable-Store.html#StoreT",
          "type": "data"
        },
        "index": {
          "description": "store transformer comonad parameterized by representable functor used to memoize results for an index Rep The inner comonad",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "adjunctions",
          "partial": "Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:StoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "adjunctions",
          "signature": "StoreT (w (g a)) (Rep g)",
          "source": "src/Control-Comonad-Representable-Store.html#StoreT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "StoreT",
          "package": "adjunctions",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:StoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "experiment",
          "package": "adjunctions",
          "signature": "(s -\u003e f s) -\u003e w a -\u003e f a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "experiment",
          "normalized": "(a-\u003eb a)-\u003ec d-\u003eb d",
          "package": "adjunctions",
          "signature": "(s-\u003ef s)-\u003ew a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:experiment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "peek",
          "package": "adjunctions",
          "signature": "s -\u003e w a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "peek",
          "normalized": "a-\u003eb c-\u003ec",
          "package": "adjunctions",
          "signature": "s-\u003ew a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "peeks",
          "package": "adjunctions",
          "signature": "(s -\u003e s) -\u003e w a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "peeks",
          "normalized": "(a-\u003ea)-\u003eb c-\u003ec",
          "package": "adjunctions",
          "signature": "(s-\u003es)-\u003ew a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:peeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "pos",
          "package": "adjunctions",
          "signature": "w a -\u003e s",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "pos",
          "normalized": "a b-\u003ec",
          "package": "adjunctions",
          "signature": "w a-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStore",
          "package": "adjunctions",
          "signature": "Store g a-\u003e (Rep g -\u003e a, Rep g)",
          "type": "function"
        },
        "index": {
          "description": "Unwrap state monad computation as function The inverse of state",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStore",
          "normalized": "Store a b-\u003e(Rep a-\u003eb,Rep a)",
          "package": "adjunctions",
          "partial": "Store",
          "signature": "Store g a-\u003e(Rep g-\u003ea,Rep g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:runStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "runStoreT",
          "package": "adjunctions",
          "signature": "StoreT g w a -\u003e (w (Rep g -\u003e a), Rep g)",
          "source": "src/Control-Comonad-Representable-Store.html#runStoreT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "runStoreT",
          "normalized": "StoreT a b c-\u003e(b(Rep a-\u003ec),Rep a)",
          "package": "adjunctions",
          "partial": "Store",
          "signature": "StoreT g w a-\u003e(w(Rep g-\u003ea),Rep g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:runStoreT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "seek",
          "package": "adjunctions",
          "signature": "s -\u003e w a -\u003e w a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "seek",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "adjunctions",
          "signature": "s-\u003ew a-\u003ew a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "seeks",
          "package": "adjunctions",
          "signature": "(s -\u003e s) -\u003e w a -\u003e w a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "seeks",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "adjunctions",
          "signature": "(s-\u003es)-\u003ew a-\u003ew a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:seeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a store comonad computation from a function and a current index.\n (The inverse of \u003ccode\u003e\u003ca\u003erunStore\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Comonad.Representable.Store",
          "name": "store",
          "package": "adjunctions",
          "signature": "(Rep g -\u003e a)-\u003e Rep g-\u003e Store g a",
          "type": "function"
        },
        "index": {
          "description": "Construct store comonad computation from function and current index The inverse of runStore",
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "store",
          "normalized": "(Rep a-\u003eb)-\u003eRep a-\u003eStore a b",
          "package": "adjunctions",
          "signature": "(Rep g-\u003ea)-\u003eRep g-\u003eStore g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Representable.Store",
          "name": "storeT",
          "package": "adjunctions",
          "signature": "w (Rep g -\u003e a) -\u003e Rep g -\u003e StoreT g w a",
          "source": "src/Control-Comonad-Representable-Store.html#storeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Representable Store",
          "module": "Control.Comonad.Representable.Store",
          "name": "storeT",
          "normalized": "a(Rep b-\u003ec)-\u003eRep b-\u003eStoreT b a c",
          "package": "adjunctions",
          "signature": "w(Rep g-\u003ea)-\u003eRep g-\u003eStoreT g w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:storeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Trans-Adjoint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Trans-Adjoint.html#Adjoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#t:Adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#t:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "signature": "AdjointT",
          "source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "adjoint",
          "package": "adjunctions",
          "signature": "f (g a) -\u003e Adjoint f g a",
          "source": "src/Control-Comonad-Trans-Adjoint.html#adjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "adjoint",
          "normalized": "a(b c)-\u003eAdjoint a b c",
          "package": "adjunctions",
          "signature": "f(g a)-\u003eAdjoint f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "runAdjoint",
          "package": "adjunctions",
          "signature": "Adjoint f g a -\u003e f (g a)",
          "source": "src/Control-Comonad-Trans-Adjoint.html#runAdjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "runAdjoint",
          "normalized": "Adjoint a b c-\u003ea(b c)",
          "package": "adjunctions",
          "partial": "Adjoint",
          "signature": "Adjoint f g a-\u003ef(g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:runAdjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "signature": "f (w (g a))",
          "source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Trans Adjoint",
          "module": "Control.Comonad.Trans.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:runAdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable functors on Hask are all monads, because they are isomorphic to\n a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-Reader.html",
          "type": "module"
        },
        "index": {
          "description": "Representable functors on Hask are all monads because they are isomorphic to Reader monad",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "adjunctions",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "MonadReader",
          "package": "adjunctions",
          "type": "class"
        },
        "index": {
          "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "MonadReader",
          "package": "adjunctions",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-Reader.html#Reader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "Reader",
          "package": "adjunctions",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "adjunctions",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "adjunctions",
          "signature": "ReaderT",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ReaderT",
          "package": "adjunctions",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "ask",
          "package": "adjunctions",
          "signature": "m r",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "ask",
          "package": "adjunctions",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "getReaderT",
          "package": "adjunctions",
          "signature": "f (m b)",
          "source": "src/Control-Monad-Representable-Reader.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "getReaderT",
          "package": "adjunctions",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:getReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "local",
          "package": "adjunctions",
          "signature": "local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "local",
          "package": "adjunctions",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.Reader",
          "name": "reader",
          "package": "adjunctions",
          "signature": "reader",
          "type": "method"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "reader",
          "package": "adjunctions",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "readerT",
          "package": "adjunctions",
          "signature": "(Rep f -\u003e m b) -\u003e ReaderT f m b",
          "source": "src/Control-Monad-Representable-Reader.html#readerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "readerT",
          "normalized": "(Rep a-\u003eb c)-\u003eReaderT a b c",
          "package": "adjunctions",
          "signature": "(Rep f-\u003em b)-\u003eReaderT f m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:readerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "runReader",
          "package": "adjunctions",
          "signature": "Reader f b -\u003e Rep f -\u003e b",
          "source": "src/Control-Monad-Representable-Reader.html#runReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "runReader",
          "normalized": "Reader a b-\u003eRep a-\u003eb",
          "package": "adjunctions",
          "partial": "Reader",
          "signature": "Reader f b-\u003eRep f-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.Reader",
          "name": "runReaderT",
          "package": "adjunctions",
          "signature": "ReaderT f m b -\u003e Rep f -\u003e m b",
          "source": "src/Control-Monad-Representable-Reader.html#runReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable Reader",
          "module": "Control.Monad.Representable.Reader",
          "name": "runReaderT",
          "normalized": "ReaderT a b c-\u003eRep a-\u003eb c",
          "package": "adjunctions",
          "partial": "Reader",
          "signature": "ReaderT f m b-\u003eRep f-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized State monad, parameterized by a Representable functor.\n The representation of that functor serves as the state.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-State.html",
          "type": "module"
        },
        "index": {
          "description": "generalized State monad parameterized by Representable functor The representation of that functor serves as the state",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "adjunctions",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "MonadState",
          "package": "adjunctions",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition is either both of get and put or just state",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "MonadState",
          "package": "adjunctions",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoized state monad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eRep g\u003c/code\u003e is the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-State.html#State",
          "type": "type"
        },
        "index": {
          "description": "memoized state monad parameterized by representable functor where the representatation of Rep is the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "State",
          "package": "adjunctions",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for a state \u003ccode\u003eRep g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "adjunctions",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "state transformer monad parameterized by representable functor used to memoize results for state Rep The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "adjunctions",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "adjunctions",
          "signature": "StateT",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "StateT",
          "package": "adjunctions",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "evalState",
          "package": "adjunctions",
          "signature": "State g a-\u003e Rep g-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "evalState",
          "normalized": "State a b-\u003eRep a-\u003eb",
          "package": "adjunctions",
          "partial": "State",
          "signature": "State g a-\u003eRep g-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "evalStateT",
          "package": "adjunctions",
          "signature": "StateT g m a -\u003e Rep g -\u003e m a",
          "source": "src/Control-Monad-Representable-State.html#evalStateT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003eRep a-\u003eb c",
          "package": "adjunctions",
          "partial": "State",
          "signature": "StateT g m a-\u003eRep g-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "execState",
          "package": "adjunctions",
          "signature": "State g a-\u003e Rep g-\u003e Rep g",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "execState",
          "normalized": "State a b-\u003eRep a-\u003eRep a",
          "package": "adjunctions",
          "partial": "State",
          "signature": "State g a-\u003eRep g-\u003eRep g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "execStateT",
          "package": "adjunctions",
          "signature": "StateT g m a -\u003e Rep g -\u003e m (Rep g)",
          "source": "src/Control-Monad-Representable-State.html#execStateT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003eRep a-\u003eb(Rep a)",
          "package": "adjunctions",
          "partial": "State",
          "signature": "StateT g m a-\u003eRep g-\u003em(Rep g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "get",
          "package": "adjunctions",
          "signature": "m s",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "get",
          "package": "adjunctions",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "getStateT",
          "package": "adjunctions",
          "signature": "g (m (a, Rep g))",
          "source": "src/Control-Monad-Representable-State.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "getStateT",
          "normalized": "a(b(c,Rep a))",
          "package": "adjunctions",
          "partial": "State",
          "signature": "g(m(a,Rep g))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:getStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC",
          "package": "adjunctions",
          "signature": "((((a, Rep g) -\u003e m (b, Rep g)) -\u003e m (a, Rep g)) -\u003e m (a, Rep g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC",
          "normalized": "((((a,Rep b)-\u003ec(d,Rep b))-\u003ec(a,Rep b))-\u003ec(a,Rep b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
          "package": "adjunctions",
          "partial": "Call CC",
          "signature": "((((a,Rep g)-\u003em(b,Rep g))-\u003em(a,Rep g))-\u003em(a,Rep g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC'",
          "package": "adjunctions",
          "signature": "((((a, Rep g) -\u003e m (b, Rep g)) -\u003e m (a, Rep g)) -\u003e m (a, Rep g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#liftCallCC%27",
          "type": "function"
        },
        "index": {
          "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "liftCallCC'",
          "normalized": "((((a,Rep b)-\u003ec(d,Rep b))-\u003ec(a,Rep b))-\u003ec(a,Rep b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
          "package": "adjunctions",
          "partial": "Call CC'",
          "signature": "((((a,Rep g)-\u003em(b,Rep g))-\u003em(a,Rep g))-\u003em(a,Rep g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:liftCallCC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "mapState",
          "package": "adjunctions",
          "signature": "((a, Rep g) -\u003e (b, Rep g)) -\u003e State g a -\u003e State g b",
          "source": "src/Control-Monad-Representable-State.html#mapState",
          "type": "function"
        },
        "index": {
          "description": "Map both the return value and final state of computation using the given function runState mapState runState",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "mapState",
          "normalized": "((a,Rep b)-\u003e(c,Rep b))-\u003eState b a-\u003eState b c",
          "package": "adjunctions",
          "partial": "State",
          "signature": "((a,Rep g)-\u003e(b,Rep g))-\u003eState g a-\u003eState g b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "mapStateT",
          "package": "adjunctions",
          "signature": "(m (a, Rep g) -\u003e n (b, Rep g)) -\u003e StateT g m a -\u003e StateT g n b",
          "source": "src/Control-Monad-Representable-State.html#mapStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "mapStateT",
          "normalized": "(a(b,Rep c)-\u003ed(e,Rep c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "adjunctions",
          "partial": "State",
          "signature": "(m(a,Rep g)-\u003en(b,Rep g))-\u003eStateT g m a-\u003eStateT g n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "put",
          "package": "adjunctions",
          "signature": "s -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "adjunctions",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "runState",
          "package": "adjunctions",
          "signature": "State g a-\u003e Rep g-\u003e (a, Rep g)",
          "type": "function"
        },
        "index": {
          "description": "Unwrap state monad computation as function The inverse of state",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "runState",
          "normalized": "State a b-\u003eRep a-\u003e(b,Rep a)",
          "package": "adjunctions",
          "partial": "State",
          "signature": "State g a-\u003eRep g-\u003e(a,Rep g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "runStateT",
          "package": "adjunctions",
          "signature": "StateT g m a -\u003e Rep g -\u003e m (a, Rep g)",
          "source": "src/Control-Monad-Representable-State.html#runStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "runStateT",
          "normalized": "StateT a b c-\u003eRep a-\u003eb(c,Rep a)",
          "package": "adjunctions",
          "partial": "State",
          "signature": "StateT g m a-\u003eRep g-\u003em(a,Rep g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Representable.State",
          "name": "state",
          "package": "adjunctions",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "adjunctions",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Representable.State",
          "name": "stateT",
          "package": "adjunctions",
          "signature": "(Rep g -\u003e m (a, Rep g)) -\u003e StateT g m a",
          "source": "src/Control-Monad-Representable-State.html#stateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Representable State",
          "module": "Control.Monad.Representable.State",
          "name": "stateT",
          "normalized": "(Rep a-\u003eb(c,Rep a))-\u003eStateT a b c",
          "package": "adjunctions",
          "signature": "(Rep g-\u003em(a,Rep g))-\u003eStateT g m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:stateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Adjoint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Adjoint.html#Adjoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#t:Adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#t:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "signature": "AdjointT",
          "source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "adjoint",
          "package": "adjunctions",
          "signature": "g (f a) -\u003e Adjoint f g a",
          "source": "src/Control-Monad-Trans-Adjoint.html#adjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "adjoint",
          "normalized": "a(b c)-\u003eAdjoint b a c",
          "package": "adjunctions",
          "signature": "g(f a)-\u003eAdjoint f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "runAdjoint",
          "package": "adjunctions",
          "signature": "Adjoint f g a -\u003e g (f a)",
          "source": "src/Control-Monad-Trans-Adjoint.html#runAdjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "runAdjoint",
          "normalized": "Adjoint a b c-\u003eb(a c)",
          "package": "adjunctions",
          "partial": "Adjoint",
          "signature": "Adjoint f g a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:runAdjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "signature": "g (m (f a))",
          "source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Adjoint",
          "module": "Control.Monad.Trans.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:runAdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses a contravariant adjunction:\n\u003c/p\u003e\u003cp\u003ef -| g : Hask^op -\u003e Hask\n\u003c/p\u003e\u003cp\u003eto build a \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e transformer. Sadly, the dual construction,\n which builds a \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e out of a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, is uninhabited, because any\n \u003ccode\u003e\u003ca\u003eAdjunction\u003c/a\u003e\u003c/code\u003e of the form\n\u003c/p\u003e\u003cpre\u003e f -| g : Hask -\u003e Hask^op\n\u003c/pre\u003e\u003cp\u003ewould trivially admit unsafePerformIO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html",
          "type": "module"
        },
        "index": {
          "description": "Uses contravariant adjunction Hask op Hask to build Comonad to Monad transformer Sadly the dual construction which builds Comonad out of Monad is uninhabited because any Adjunction of the form Hask Hask op would trivially admit unsafePerformIO",
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#Adjoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "Adjoint",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#t:Adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#t:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "signature": "AdjointT",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "AdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:AdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "adjoint",
          "package": "adjunctions",
          "signature": "g (f a) -\u003e Adjoint f g a",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#adjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "adjoint",
          "normalized": "a(b c)-\u003eAdjoint b a c",
          "package": "adjunctions",
          "signature": "g(f a)-\u003eAdjoint f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "runAdjoint",
          "package": "adjunctions",
          "signature": "Adjoint f g a -\u003e g (f a)",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#runAdjoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "runAdjoint",
          "normalized": "Adjoint a b c-\u003eb(a c)",
          "package": "adjunctions",
          "partial": "Adjoint",
          "signature": "Adjoint f g a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:runAdjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "signature": "g (w (f a))",
          "source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Contravariant Adjoint",
          "module": "Control.Monad.Trans.Contravariant.Adjoint",
          "name": "runAdjointT",
          "package": "adjunctions",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:runAdjointT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e Cont r ~ Contravariant.Adjoint (Op r) (Op r)\n Conts r ~ Contravariant.AdjointT (Op r) (Op r)\n ContsT r w m ~ Contravariant.AdjointT (Op (m r)) (Op (m r)) w\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Conts",
          "name": "Conts",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Conts.html",
          "type": "module"
        },
        "index": {
          "description": "Cont Contravariant.Adjoint Op Op Conts Contravariant.AdjointT Op Op ContsT Contravariant.AdjointT Op Op",
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "Conts",
          "package": "adjunctions",
          "partial": "Conts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "Cont",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Conts.html#Cont",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "Cont",
          "package": "adjunctions",
          "partial": "Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "Conts",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Conts.html#Conts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "Conts",
          "package": "adjunctions",
          "partial": "Conts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:Conts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "ContsT",
          "package": "adjunctions",
          "source": "src/Control-Monad-Trans-Conts.html#ContsT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "ContsT",
          "package": "adjunctions",
          "partial": "Conts",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:ContsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "ContsT",
          "package": "adjunctions",
          "signature": "ContsT",
          "source": "src/Control-Monad-Trans-Conts.html#ContsT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "ContsT",
          "package": "adjunctions",
          "partial": "Conts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:ContsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "callCC",
          "package": "adjunctions",
          "signature": "((a -\u003e ContsT r w m b) -\u003e ContsT r w m a) -\u003e ContsT r w m a",
          "source": "src/Control-Monad-Trans-Conts.html#callCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "callCC",
          "normalized": "((a-\u003eContsT b c d e)-\u003eContsT b c d a)-\u003eContsT b c d a",
          "package": "adjunctions",
          "partial": "CC",
          "signature": "((a-\u003eContsT r w m b)-\u003eContsT r w m a)-\u003eContsT r w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "cont",
          "package": "adjunctions",
          "signature": "((a -\u003e r) -\u003e r) -\u003e Cont r a",
          "source": "src/Control-Monad-Trans-Conts.html#cont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "cont",
          "normalized": "((a-\u003eb)-\u003eb)-\u003eCont b a",
          "package": "adjunctions",
          "signature": "((a-\u003er)-\u003er)-\u003eCont r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "conts",
          "package": "adjunctions",
          "signature": "(w (a -\u003e r) -\u003e r) -\u003e Conts r w a",
          "source": "src/Control-Monad-Trans-Conts.html#conts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "conts",
          "normalized": "(a(b-\u003ec)-\u003ec)-\u003eConts c a b",
          "package": "adjunctions",
          "signature": "(w(a-\u003er)-\u003er)-\u003eConts r w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:conts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "runCont",
          "package": "adjunctions",
          "signature": "Cont r a -\u003e (a -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Trans-Conts.html#runCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "runCont",
          "normalized": "Cont a b-\u003e(b-\u003ea)-\u003ea",
          "package": "adjunctions",
          "partial": "Cont",
          "signature": "Cont r a-\u003e(a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "runConts",
          "package": "adjunctions",
          "signature": "Conts r w a -\u003e w (a -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Trans-Conts.html#runConts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "runConts",
          "normalized": "Conts a b c-\u003eb(c-\u003ea)-\u003ea",
          "package": "adjunctions",
          "partial": "Conts",
          "signature": "Conts r w a-\u003ew(a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runConts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Conts",
          "name": "runContsT",
          "package": "adjunctions",
          "signature": "w (a -\u003e m r) -\u003e m r",
          "source": "src/Control-Monad-Trans-Conts.html#ContsT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Conts",
          "module": "Control.Monad.Trans.Conts",
          "name": "runContsT",
          "normalized": "a(b-\u003ec d)-\u003ec d",
          "package": "adjunctions",
          "partial": "Conts",
          "signature": "w(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runContsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "source": "src/Data-Functor-Adjunction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "partial": "Adjunction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn adjunction between Hask and Hask.\n\u003c/p\u003e\u003cp\u003eMinimal definition: both \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e or both \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e, subject to the constraints imposed by the\n default definitions that the following laws should hold.\n\u003c/p\u003e\u003cpre\u003e unit = leftAdjunct id\n counit = rightAdjunct id\n leftAdjunct f = fmap f . unit\n rightAdjunct f = counit . fmap f\n\u003c/pre\u003e\u003cp\u003eAny implementation is required to ensure that \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e witness an isomorphism from \u003ccode\u003eNat (f a, b)\u003c/code\u003e to\n \u003ccode\u003eNat (a, g b)\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e rightAdjunct unit = id\n leftAdjunct counit = id\n\u003c/pre\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "source": "src/Data-Functor-Adjunction.html#Adjunction",
          "type": "class"
        },
        "index": {
          "description": "An adjunction between Hask and Hask Minimal definition both unit and counit or both leftAdjunct and rightAdjunct subject to the constraints imposed by the default definitions that the following laws should hold unit leftAdjunct id counit rightAdjunct id leftAdjunct fmap unit rightAdjunct counit fmap Any implementation is required to ensure that leftAdjunct and rightAdjunct witness an isomorphism from Nat to Nat rightAdjunct unit id leftAdjunct counit id",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "partial": "Adjunction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#t:Adjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "absurdL",
          "package": "adjunctions",
          "signature": "Void -\u003e f Void",
          "source": "src/Data-Functor-Adjunction.html#absurdL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "absurdL",
          "normalized": "Void-\u003ea Void",
          "package": "adjunctions",
          "signature": "Void-\u003ef Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:absurdL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "counit",
          "package": "adjunctions",
          "signature": "f (u a) -\u003e a",
          "source": "src/Data-Functor-Adjunction.html#counit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "counit",
          "normalized": "a(b c)-\u003ec",
          "package": "adjunctions",
          "signature": "f(u a)-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnd a left adjoint must be inhabited by exactly one element\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "cozipL",
          "package": "adjunctions",
          "signature": "f (Either a b) -\u003e Either (f a) (f b)",
          "source": "src/Data-Functor-Adjunction.html#cozipL",
          "type": "function"
        },
        "index": {
          "description": "And left adjoint must be inhabited by exactly one element",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "cozipL",
          "normalized": "a(Either b c)-\u003eEither(a b)(a c)",
          "package": "adjunctions",
          "signature": "f(Either a b)-\u003eEither(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:cozipL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "duplicateL",
          "package": "adjunctions",
          "signature": "f a -\u003e f (f a)",
          "source": "src/Data-Functor-Adjunction.html#duplicateL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "duplicateL",
          "normalized": "a b-\u003ea(a b)",
          "package": "adjunctions",
          "signature": "f a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:duplicateL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "extractL",
          "package": "adjunctions",
          "signature": "f a -\u003e a",
          "source": "src/Data-Functor-Adjunction.html#extractL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "extractL",
          "normalized": "a b-\u003eb",
          "package": "adjunctions",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:extractL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "indexAdjunction",
          "package": "adjunctions",
          "signature": "u b -\u003e f a -\u003e b",
          "source": "src/Data-Functor-Adjunction.html#indexAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "indexAdjunction",
          "normalized": "a b-\u003ec d-\u003eb",
          "package": "adjunctions",
          "partial": "Adjunction",
          "signature": "u b-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:indexAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "leftAdjunct",
          "package": "adjunctions",
          "signature": "(f a -\u003e b) -\u003e a -\u003e u b",
          "source": "src/Data-Functor-Adjunction.html#leftAdjunct",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "leftAdjunct",
          "normalized": "(a b-\u003ec)-\u003eb-\u003ed c",
          "package": "adjunctions",
          "partial": "Adjunct",
          "signature": "(f a-\u003eb)-\u003ea-\u003eu b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "rightAdjunct",
          "package": "adjunctions",
          "signature": "(a -\u003e u b) -\u003e f a -\u003e b",
          "source": "src/Data-Functor-Adjunction.html#rightAdjunct",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "rightAdjunct",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003ec",
          "package": "adjunctions",
          "partial": "Adjunct",
          "signature": "(a-\u003eu b)-\u003ef a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "splitL",
          "package": "adjunctions",
          "signature": "f a -\u003e (a, f ())",
          "source": "src/Data-Functor-Adjunction.html#splitL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "splitL",
          "normalized": "a b-\u003e(b,a())",
          "package": "adjunctions",
          "signature": "f a-\u003e(a,f())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:splitL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery right adjoint is representable by its left adjoint\n applied to a unit element\n\u003c/p\u003e\u003cp\u003eUse this definition and the primitives in\n Data.Functor.Representable to meet the requirements of the\n superclasses of Representable.\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "tabulateAdjunction",
          "package": "adjunctions",
          "signature": "(f () -\u003e b) -\u003e u b",
          "source": "src/Data-Functor-Adjunction.html#tabulateAdjunction",
          "type": "function"
        },
        "index": {
          "description": "Every right adjoint is representable by its left adjoint applied to unit element Use this definition and the primitives in Data.Functor.Representable to meet the requirements of the superclasses of Representable",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "tabulateAdjunction",
          "normalized": "(a()-\u003eb)-\u003ec b",
          "package": "adjunctions",
          "partial": "Adjunction",
          "signature": "(f()-\u003eb)-\u003eu b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:tabulateAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left adjoint must be inhabited, or we can derive bottom.\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "unabsurdL",
          "package": "adjunctions",
          "signature": "f Void -\u003e Void",
          "source": "src/Data-Functor-Adjunction.html#unabsurdL",
          "type": "function"
        },
        "index": {
          "description": "left adjoint must be inhabited or we can derive bottom",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "unabsurdL",
          "normalized": "a Void-\u003eVoid",
          "package": "adjunctions",
          "signature": "f Void-\u003eVoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unabsurdL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery functor in Haskell permits \u003ccode\u003euncozipping\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "uncozipL",
          "package": "adjunctions",
          "signature": "Either (f a) (f b) -\u003e f (Either a b)",
          "source": "src/Data-Functor-Adjunction.html#uncozipL",
          "type": "function"
        },
        "index": {
          "description": "Every functor in Haskell permits uncozipping",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "uncozipL",
          "normalized": "Either(a b)(a c)-\u003ea(Either b c)",
          "package": "adjunctions",
          "signature": "Either(f a)(f b)-\u003ef(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:uncozipL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "unit",
          "package": "adjunctions",
          "signature": "a -\u003e u (f a)",
          "source": "src/Data-Functor-Adjunction.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "unit",
          "normalized": "a-\u003eb(c a)",
          "package": "adjunctions",
          "signature": "a-\u003eu(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "unsplitL",
          "package": "adjunctions",
          "signature": "a -\u003e f () -\u003e f a",
          "source": "src/Data-Functor-Adjunction.html#unsplitL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "unsplitL",
          "normalized": "a-\u003eb()-\u003eb a",
          "package": "adjunctions",
          "signature": "a-\u003ef()-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unsplitL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery functor in Haskell permits unzipping\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "unzipR",
          "package": "adjunctions",
          "signature": "u (a, b) -\u003e (u a, u b)",
          "source": "src/Data-Functor-Adjunction.html#unzipR",
          "type": "function"
        },
        "index": {
          "description": "Every functor in Haskell permits unzipping",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "unzipR",
          "normalized": "a(b,c)-\u003e(a b,a c)",
          "package": "adjunctions",
          "signature": "u(a,b)-\u003e(u a,u b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unzipR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Adjunction",
          "name": "zapWithAdjunction",
          "package": "adjunctions",
          "signature": "(a -\u003e b -\u003e c) -\u003e u a -\u003e f b -\u003e c",
          "source": "src/Data-Functor-Adjunction.html#zapWithAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "zapWithAdjunction",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ec",
          "package": "adjunctions",
          "partial": "With Adjunction",
          "signature": "(a-\u003eb-\u003ec)-\u003eu a-\u003ef b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:zapWithAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right adjoint functor admits an intrinsic\n notion of zipping\n\u003c/p\u003e",
          "module": "Data.Functor.Adjunction",
          "name": "zipR",
          "package": "adjunctions",
          "signature": "(u a, u b) -\u003e u (a, b)",
          "source": "src/Data-Functor-Adjunction.html#zipR",
          "type": "function"
        },
        "index": {
          "description": "right adjoint functor admits an intrinsic notion of zipping",
          "hierarchy": "Data Functor Adjunction",
          "module": "Data.Functor.Adjunction",
          "name": "zipR",
          "normalized": "(a b,a c)-\u003ea(b,c)",
          "package": "adjunctions",
          "signature": "(u a,u b)-\u003eu(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:zipR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "source": "src/Data-Functor-Contravariant-Adjunction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "partial": "Adjunction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn adjunction from \u003ccode\u003eHask^op\u003c/code\u003e to \u003ccode\u003eHask\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eOp\u003c/a\u003e\u003c/code\u003e (f a) b ~ \u003ccode\u003eHask\u003c/code\u003e a (g b)\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eAny adjunction from \u003ccode\u003eHask\u003c/code\u003e to \u003ccode\u003eHask^op\u003c/code\u003e would indirectly\n permit \u003ccode\u003eunsafePerformIO\u003c/code\u003e, and therefore does not exist.\n\u003c/p\u003e",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#Adjunction",
          "type": "class"
        },
        "index": {
          "description": "An adjunction from Hask op to Hask Op Hask rightAdjunct unit id leftAdjunct counit id Any adjunction from Hask to Hask op would indirectly permit unsafePerformIO and therefore does not exist",
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "Adjunction",
          "package": "adjunctions",
          "partial": "Adjunction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#t:Adjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "coindexAdjunction",
          "package": "adjunctions",
          "signature": "g a -\u003e a -\u003e f ()",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#coindexAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "coindexAdjunction",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "adjunctions",
          "partial": "Adjunction",
          "signature": "g a-\u003ea-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:coindexAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor that has a left adjoint\n\u003c/p\u003e",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "contrarepAdjunction",
          "package": "adjunctions",
          "signature": "(a -\u003e f ()) -\u003e g a",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#contrarepAdjunction",
          "type": "function"
        },
        "index": {
          "description": "Represent Contravariant functor that has left adjoint",
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "contrarepAdjunction",
          "normalized": "(a-\u003eb())-\u003ec a",
          "package": "adjunctions",
          "partial": "Adjunction",
          "signature": "(a-\u003ef())-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:contrarepAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "counit",
          "package": "adjunctions",
          "signature": "a -\u003e f (g a)",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#counit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "counit",
          "normalized": "a-\u003eb(c a)",
          "package": "adjunctions",
          "signature": "a-\u003ef(g a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "leftAdjunct",
          "package": "adjunctions",
          "signature": "(b -\u003e f a) -\u003e a -\u003e g b",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#leftAdjunct",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "leftAdjunct",
          "normalized": "(a-\u003eb c)-\u003ec-\u003ed a",
          "package": "adjunctions",
          "partial": "Adjunct",
          "signature": "(b-\u003ef a)-\u003ea-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "rightAdjunct",
          "package": "adjunctions",
          "signature": "(a -\u003e g b) -\u003e b -\u003e f a",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#rightAdjunct",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "rightAdjunct",
          "normalized": "(a-\u003eb c)-\u003ec-\u003ed a",
          "package": "adjunctions",
          "partial": "Adjunct",
          "signature": "(a-\u003eg b)-\u003eb-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "unit",
          "package": "adjunctions",
          "signature": "a -\u003e g (f a)",
          "source": "src/Data-Functor-Contravariant-Adjunction.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Adjunction",
          "module": "Data.Functor.Contravariant.Adjunction",
          "name": "unit",
          "normalized": "a-\u003eb(c a)",
          "package": "adjunctions",
          "signature": "a-\u003eg(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable contravariant endofunctors over the category of Haskell\n types are isomorphic to \u003ccode\u003e(_ -\u003e r)\u003c/code\u003e and resemble mappings to a\n fixed range.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "Rep",
          "package": "adjunctions",
          "source": "src/Data-Functor-Contravariant-Rep.html",
          "type": "module"
        },
        "index": {
          "description": "Representable contravariant endofunctors over the category of Haskell types are isomorphic to and resemble mappings to fixed range",
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "Rep",
          "package": "adjunctions",
          "partial": "Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(_ -\u003e Rep f)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e &#8801; id\n \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e &#8801; id\n\u003c/pre\u003e",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "Representable",
          "package": "adjunctions",
          "source": "src/Data-Functor-Contravariant-Rep.html#Representable",
          "type": "class"
        },
        "index": {
          "description": "Contravariant functor is Representable if tabulate and index witness an isomorphism to Rep tabulate index id index tabulate id",
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "Representable",
          "package": "adjunctions",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Rep",
          "name": "contramapRep",
          "package": "adjunctions",
          "signature": "(a -\u003e b) -\u003e f b -\u003e f a",
          "source": "src/Data-Functor-Contravariant-Rep.html#contramapRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "contramapRep",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "(a-\u003eb)-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:contramapRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econtramapWithRep\u003c/a\u003e\u003c/code\u003e f p &#8801; \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e p) \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e . f\n\u003c/pre\u003e",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "contramapWithRep",
          "package": "adjunctions",
          "signature": "(b -\u003e Either a (Rep f)) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Contravariant-Rep.html#contramapWithRep",
          "type": "method"
        },
        "index": {
          "description": "contramapWithRep tabulate either index id",
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "contramapWithRep",
          "normalized": "(a-\u003eEither b(Rep c))-\u003ec b-\u003ec a",
          "package": "adjunctions",
          "partial": "With Rep",
          "signature": "(b-\u003eEither a(Rep f))-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:contramapWithRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Contravariant.Rep",
          "name": "index",
          "package": "adjunctions",
          "signature": "f a -\u003e a -\u003e Rep f",
          "source": "src/Data-Functor-Contravariant-Rep.html#index",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "index",
          "normalized": "a b-\u003eb-\u003eRep a",
          "package": "adjunctions",
          "signature": "f a-\u003ea-\u003eRep f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e f (\u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e g) = \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e (g . f)\n\u003c/pre\u003e",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "tabulate",
          "package": "adjunctions",
          "signature": "(a -\u003e Rep f) -\u003e f a",
          "source": "src/Data-Functor-Contravariant-Rep.html#tabulate",
          "type": "method"
        },
        "index": {
          "description": "contramap tabulate tabulate",
          "hierarchy": "Data Functor Contravariant Rep",
          "module": "Data.Functor.Contravariant.Rep",
          "name": "tabulate",
          "normalized": "(a-\u003eRep b)-\u003eb a",
          "package": "adjunctions",
          "signature": "(a-\u003eRep f)-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable endofunctors over the category of Haskell types are\n isomorphic to the reader monad and so inherit a very large number\n of properties for free.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Rep",
          "name": "Rep",
          "package": "adjunctions",
          "source": "src/Data-Functor-Rep.html",
          "type": "module"
        },
        "index": {
          "description": "Representable endofunctors over the category of Haskell types are isomorphic to the reader monad and so inherit very large number of properties for free",
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "Rep",
          "package": "adjunctions",
          "partial": "Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "Co",
          "package": "adjunctions",
          "source": "src/Data-Functor-Rep.html#Co",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "Co",
          "package": "adjunctions",
          "partial": "Co",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#t:Co"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(-\u003e) x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eDistributive\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e from Hask to Hask is a right adjoint.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e    &#8801; id\n \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e    &#8801; id\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e f &#8801; \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e f\n\u003c/pre\u003e",
          "module": "Data.Functor.Rep",
          "name": "Representable",
          "package": "adjunctions",
          "source": "src/Data-Functor-Rep.html#Representable",
          "type": "class"
        },
        "index": {
          "description": "Functor is Representable if tabulate and index witness an isomorphism to Every Distributive Functor is actually Representable Every Representable Functor from Hask to Hask is right adjoint tabulate index id index tabulate id tabulate return return",
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "Representable",
          "package": "adjunctions",
          "partial": "Representable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "Co",
          "package": "adjunctions",
          "signature": "Co",
          "source": "src/Data-Functor-Rep.html#Co",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "Co",
          "package": "adjunctions",
          "partial": "Co",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:Co"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "apRep",
          "package": "adjunctions",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Rep.html#apRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "apRep",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:apRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "askRep",
          "package": "adjunctions",
          "signature": "f (Rep f)",
          "source": "src/Data-Functor-Rep.html#askRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "askRep",
          "package": "adjunctions",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:askRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "bindRep",
          "package": "adjunctions",
          "signature": "f a -\u003e (a -\u003e f b) -\u003e f b",
          "source": "src/Data-Functor-Rep.html#bindRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "bindRep",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "f a-\u003e(a-\u003ef b)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:bindRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "distributeRep",
          "package": "adjunctions",
          "signature": "w (f a) -\u003e f (w a)",
          "source": "src/Data-Functor-Rep.html#distributeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "distributeRep",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "w(f a)-\u003ef(w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:distributeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "duplicateRep",
          "package": "adjunctions",
          "signature": "f a -\u003e f (f a)",
          "source": "src/Data-Functor-Rep.html#duplicateRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "duplicateRep",
          "normalized": "a b-\u003ea(a b)",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "f a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:duplicateRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "duplicatedRep",
          "package": "adjunctions",
          "signature": "f a -\u003e f (f a)",
          "source": "src/Data-Functor-Rep.html#duplicatedRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "duplicatedRep",
          "normalized": "a b-\u003ea(a b)",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "f a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:duplicatedRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "extendRep",
          "package": "adjunctions",
          "signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Rep.html#extendRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "extendRep",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "(f a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extendRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "extendedRep",
          "package": "adjunctions",
          "signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Rep.html#extendedRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "extendedRep",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "(f a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extendedRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "extractRep",
          "package": "adjunctions",
          "signature": "f a -\u003e a",
          "source": "src/Data-Functor-Rep.html#extractRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "extractRep",
          "normalized": "a b-\u003eb",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extractRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "fmapRep",
          "package": "adjunctions",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Rep.html#fmapRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "fmapRep",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:fmapRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "index",
          "package": "adjunctions",
          "signature": "f a -\u003e Rep f -\u003e a",
          "source": "src/Data-Functor-Rep.html#index",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "index",
          "normalized": "a b-\u003eRep a-\u003eb",
          "package": "adjunctions",
          "signature": "f a-\u003eRep f-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "liftR2",
          "package": "adjunctions",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Functor-Rep.html#liftR2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "liftR2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "adjunctions",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:liftR2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "liftR3",
          "package": "adjunctions",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Functor-Rep.html#liftR3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "liftR3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "adjunctions",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:liftR3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "localRep",
          "package": "adjunctions",
          "signature": "(Rep f -\u003e Rep f) -\u003e f a -\u003e f a",
          "source": "src/Data-Functor-Rep.html#localRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "localRep",
          "normalized": "(Rep a-\u003eRep a)-\u003ea b-\u003ea b",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "(Rep f-\u003eRep f)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:localRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "pureRep",
          "package": "adjunctions",
          "signature": "a -\u003e f a",
          "source": "src/Data-Functor-Rep.html#pureRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "pureRep",
          "normalized": "a-\u003eb a",
          "package": "adjunctions",
          "partial": "Rep",
          "signature": "a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:pureRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f\n\u003c/pre\u003e",
          "module": "Data.Functor.Rep",
          "name": "tabulate",
          "package": "adjunctions",
          "signature": "(Rep f -\u003e a) -\u003e f a",
          "source": "src/Data-Functor-Rep.html#tabulate",
          "type": "method"
        },
        "index": {
          "description": "fmap tabulate tabulate fmap",
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "tabulate",
          "normalized": "(Rep a-\u003eb)-\u003ea b",
          "package": "adjunctions",
          "signature": "(Rep f-\u003ea)-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Rep",
          "name": "unCo",
          "package": "adjunctions",
          "signature": "f a",
          "source": "src/Data-Functor-Rep.html#Co",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Rep",
          "module": "Data.Functor.Rep",
          "name": "unCo",
          "package": "adjunctions",
          "partial": "Co",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:unCo"
      }
    }
  ]
]