[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a generalized \u003ccode\u003e\u003ca\u003eStore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e, parameterized by a \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n The representation of that \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e serves as the index of the store.\n\u003c/p\u003e\u003cp\u003eThis can be useful if the representable functor serves to memoize its\n contents and will be inspected often.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Representable-Store.html",
        "fct-type": "module",
        "title": "Store"
      },
      "index": {
        "description": "This is generalized Store Comonad parameterized by Representable Functor The representation of that Functor serves as the index of the store This can be useful if the representable functor serves to memoize its contents and will be inspected often",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "Store",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:ComonadStore",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ComonadStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "ComonadStore",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Comonad Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:Store",
      "description": {
        "fct-descr": "\u003cp\u003eA memoized store comonad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eRep g\u003c/code\u003e is the index of the store.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Comonad-Representable-Store.html#Store",
        "fct-type": "type",
        "title": "Store"
      },
      "index": {
        "description": "memoized store comonad parameterized by representable functor where the representatation of Rep is the index of the store",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "Store",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#t:StoreT",
      "description": {
        "fct-descr": "\u003cp\u003eA store transformer comonad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for an index \u003ccode\u003eRep g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - The inner comonad.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Representable-Store.html#StoreT",
        "fct-type": "data",
        "title": "StoreT"
      },
      "index": {
        "description": "store transformer comonad parameterized by representable functor used to memoize results for an index Rep The inner comonad",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "StoreT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:StoreT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "StoreT (w (g a)) (Rep g)",
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
        "package": "adjunctions",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:experiment",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "(s -\u003e f s) -\u003e w a -\u003e f a",
        "fct-type": "method",
        "title": "experiment"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "experiment",
        "normalized": "(a-\u003eb a)-\u003ec d-\u003eb d",
        "package": "adjunctions",
        "partial": "",
        "signature": "(s-\u003ef s)-\u003ew a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:peek",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "s -\u003e w a -\u003e a",
        "fct-type": "method",
        "title": "peek"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "peek",
        "normalized": "a-\u003eb c-\u003ec",
        "package": "adjunctions",
        "partial": "",
        "signature": "s-\u003ew a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:peeks",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "(s -\u003e s) -\u003e w a -\u003e a",
        "fct-type": "method",
        "title": "peeks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "peeks",
        "normalized": "(a-\u003ea)-\u003eb c-\u003ec",
        "package": "adjunctions",
        "partial": "",
        "signature": "(s-\u003es)-\u003ew a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:pos",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "w a -\u003e s",
        "fct-type": "method",
        "title": "pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "pos",
        "normalized": "a b-\u003ec",
        "package": "adjunctions",
        "partial": "",
        "signature": "w a-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:runStore",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003estate\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "Store g a-\u003e (Rep g -\u003e a, Rep g)",
        "fct-type": "function",
        "title": "runStore"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "runStore",
        "normalized": "Store a b-\u003e(Rep a-\u003eb,Rep a)",
        "package": "adjunctions",
        "partial": "Store",
        "signature": "Store g a-\u003e(Rep g-\u003ea,Rep g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:runStoreT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "StoreT g w a -\u003e (w (Rep g -\u003e a), Rep g)",
        "fct-source": "src/Control-Comonad-Representable-Store.html#runStoreT",
        "fct-type": "function",
        "title": "runStoreT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "runStoreT",
        "normalized": "StoreT a b c-\u003e(b(Rep a-\u003ec),Rep a)",
        "package": "adjunctions",
        "partial": "Store",
        "signature": "StoreT g w a-\u003e(w(Rep g-\u003ea),Rep g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:seek",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "s -\u003e w a -\u003e w a",
        "fct-type": "method",
        "title": "seek"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "seek",
        "normalized": "a-\u003eb c-\u003eb c",
        "package": "adjunctions",
        "partial": "",
        "signature": "s-\u003ew a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:seeks",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "(s -\u003e s) -\u003e w a -\u003e w a",
        "fct-type": "method",
        "title": "seeks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "seeks",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "adjunctions",
        "partial": "",
        "signature": "(s-\u003es)-\u003ew a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:store",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a store comonad computation from a function and a current index.\n (The inverse of \u003ccode\u003e\u003ca\u003erunStore\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "(Rep g -\u003e a)-\u003e Rep g-\u003e Store g a",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "Construct store comonad computation from function and current index The inverse of runStore",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "store",
        "normalized": "(Rep a-\u003eb)-\u003eRep a-\u003eStore a b",
        "package": "adjunctions",
        "partial": "",
        "signature": "(Rep g-\u003ea)-\u003eRep g-\u003eStore g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Representable-Store.html#v:storeT",
      "description": {
        "fct-module": "Control.Comonad.Representable.Store",
        "fct-package": "adjunctions",
        "fct-signature": "w (Rep g -\u003e a) -\u003e Rep g -\u003e StoreT g w a",
        "fct-source": "src/Control-Comonad-Representable-Store.html#storeT",
        "fct-type": "function",
        "title": "storeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Representable Store",
        "module": "Control.Comonad.Representable.Store",
        "name": "storeT",
        "normalized": "a(Rep b-\u003ec)-\u003eRep b-\u003eStoreT b a c",
        "package": "adjunctions",
        "partial": "",
        "signature": "w(Rep g-\u003ea)-\u003eRep g-\u003eStoreT g w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html",
        "fct-type": "module",
        "title": "Adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#t:Adjoint",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#Adjoint",
        "fct-type": "type",
        "title": "Adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#t:AdjointT",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
        "fct-type": "newtype",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:AdjointT",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "AdjointT",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:adjoint",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "f (g a) -\u003e Adjoint f g a",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#adjoint",
        "fct-type": "function",
        "title": "adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "adjoint",
        "normalized": "a(b c)-\u003eAdjoint a b c",
        "package": "adjunctions",
        "partial": "",
        "signature": "f(g a)-\u003eAdjoint f g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:runAdjoint",
      "description": {
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "Adjoint f g a -\u003e f (g a)",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#runAdjoint",
        "fct-type": "function",
        "title": "runAdjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "runAdjoint",
        "normalized": "Adjoint a b c-\u003ea(b c)",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": "Adjoint f g a-\u003ef(g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Comonad-Trans-Adjoint.html#v:runAdjointT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Comonad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "f (w (g a))",
        "fct-source": "src/Control-Comonad-Trans-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "runAdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Comonad Trans Adjoint",
        "module": "Control.Comonad.Trans.Adjoint",
        "name": "runAdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable functors on Hask are all monads, because they are isomorphic to\n a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Representable-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "Representable functors on Hask are all monads because they are isomorphic to Reader monad",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:MonadReader",
      "description": {
        "fct-descr": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadReader"
      },
      "index": {
        "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "MonadReader",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Monad Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:Reader",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#t:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "m r",
        "fct-type": "method",
        "title": "ask"
      },
      "index": {
        "description": "Retrieves the monad environment",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "ask",
        "normalized": "",
        "package": "adjunctions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:getReaderT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "local",
        "fct-type": "method",
        "title": "local"
      },
      "index": {
        "description": "Executes computation in modified environment",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "local",
        "normalized": "",
        "package": "adjunctions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "reader",
        "fct-type": "method",
        "title": "reader"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "reader",
        "normalized": "",
        "package": "adjunctions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:readerT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "(Rep f -\u003e m b) -\u003e ReaderT f m b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#readerT",
        "fct-type": "function",
        "title": "readerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "readerT",
        "normalized": "(Rep a-\u003eb c)-\u003eReaderT a b c",
        "package": "adjunctions",
        "partial": "",
        "signature": "(Rep f-\u003em b)-\u003eReaderT f m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:runReader",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "Reader f b -\u003e Rep f -\u003e b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "runReader",
        "normalized": "Reader a b-\u003eRep a-\u003eb",
        "package": "adjunctions",
        "partial": "Reader",
        "signature": "Reader f b-\u003eRep f-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-Reader.html#v:runReaderT",
      "description": {
        "fct-module": "Control.Monad.Representable.Reader",
        "fct-package": "adjunctions",
        "fct-signature": "ReaderT f m b -\u003e Rep f -\u003e m b",
        "fct-source": "src/Control-Monad-Representable-Reader.html#runReaderT",
        "fct-type": "function",
        "title": "runReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable Reader",
        "module": "Control.Monad.Representable.Reader",
        "name": "runReaderT",
        "normalized": "ReaderT a b c-\u003eRep a-\u003eb c",
        "package": "adjunctions",
        "partial": "Reader",
        "signature": "ReaderT f m b-\u003eRep f-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized State monad, parameterized by a Representable functor.\n The representation of that functor serves as the state.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:MonadState",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "Minimal definition is either both of get and put or just state",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "MonadState",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA memoized state monad parameterized by a representable functor \u003ccode\u003eg\u003c/code\u003e, where\n the representatation of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eRep g\u003c/code\u003e is the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Representable-State.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "memoized state monad parameterized by representable functor where the representatation of Rep is the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "State",
        "normalized": "",
        "package": "adjunctions",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e - A representable functor used to memoize results for a state \u003ccode\u003eRep g\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Representable-State.html#StateT",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by representable functor used to memoize results for state Rep The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "StateT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
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
        "package": "adjunctions",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "State g a-\u003e Rep g-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "evalState",
        "normalized": "State a b-\u003eRep a-\u003eb",
        "package": "adjunctions",
        "partial": "State",
        "signature": "State g a-\u003eRep g-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "StateT g m a -\u003e Rep g -\u003e m a",
        "fct-source": "src/Control-Monad-Representable-State.html#evalStateT",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003eRep a-\u003eb c",
        "package": "adjunctions",
        "partial": "State",
        "signature": "StateT g m a-\u003eRep g-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "State g a-\u003e Rep g-\u003e Rep g",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "execState",
        "normalized": "State a b-\u003eRep a-\u003eRep a",
        "package": "adjunctions",
        "partial": "State",
        "signature": "State g a-\u003eRep g-\u003eRep g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "StateT g m a -\u003e Rep g -\u003e m (Rep g)",
        "fct-source": "src/Control-Monad-Representable-State.html#execStateT",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003eRep a-\u003eb(Rep a)",
        "package": "adjunctions",
        "partial": "State",
        "signature": "StateT g m a-\u003eRep g-\u003em(Rep g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "m s",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Return the state from the internals of the monad",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "get",
        "normalized": "",
        "package": "adjunctions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:getStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "g (m (a, Rep g))",
        "fct-source": "src/Control-Monad-Representable-State.html#StateT",
        "fct-type": "function",
        "title": "getStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "getStateT",
        "normalized": "a(b(c,Rep a))",
        "package": "adjunctions",
        "partial": "State",
        "signature": "g(m(a,Rep g))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "((((a, Rep g) -\u003e m (b, Rep g)) -\u003e m (a, Rep g)) -\u003e m (a, Rep g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "liftCallCC",
        "normalized": "((((a,Rep b)-\u003ec(d,Rep b))-\u003ec(a,Rep b))-\u003ec(a,Rep b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "adjunctions",
        "partial": "Call CC",
        "signature": "((((a,Rep g)-\u003em(b,Rep g))-\u003em(a,Rep g))-\u003em(a,Rep g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "((((a, Rep g) -\u003e m (b, Rep g)) -\u003e m (a, Rep g)) -\u003e m (a, Rep g)) -\u003e ((a -\u003e StateT g m b) -\u003e StateT g m a) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "liftCallCC'",
        "normalized": "((((a,Rep b)-\u003ec(d,Rep b))-\u003ec(a,Rep b))-\u003ec(a,Rep b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "adjunctions",
        "partial": "Call CC'",
        "signature": "((((a,Rep g)-\u003em(b,Rep g))-\u003em(a,Rep g))-\u003em(a,Rep g))-\u003e((a-\u003eStateT g m b)-\u003eStateT g m a)-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "((a, Rep g) -\u003e (b, Rep g)) -\u003e State g a -\u003e State g b",
        "fct-source": "src/Control-Monad-Representable-State.html#mapState",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "mapState",
        "normalized": "((a,Rep b)-\u003e(c,Rep b))-\u003eState b a-\u003eState b c",
        "package": "adjunctions",
        "partial": "State",
        "signature": "((a,Rep g)-\u003e(b,Rep g))-\u003eState g a-\u003eState g b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:mapStateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "(m (a, Rep g) -\u003e n (b, Rep g)) -\u003e StateT g m a -\u003e StateT g n b",
        "fct-source": "src/Control-Monad-Representable-State.html#mapStateT",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "mapStateT",
        "normalized": "(a(b,Rep c)-\u003ed(e,Rep c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "adjunctions",
        "partial": "State",
        "signature": "(m(a,Rep g)-\u003en(b,Rep g))-\u003eStateT g m a-\u003eStateT g n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "s -\u003e m ()",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Replace the state inside the monad",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "adjunctions",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "State g a-\u003e Rep g-\u003e (a, Rep g)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "runState",
        "normalized": "State a b-\u003eRep a-\u003e(b,Rep a)",
        "package": "adjunctions",
        "partial": "State",
        "signature": "State g a-\u003eRep g-\u003e(a,Rep g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:runStateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "StateT g m a -\u003e Rep g -\u003e m (a, Rep g)",
        "fct-source": "src/Control-Monad-Representable-State.html#runStateT",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "runStateT",
        "normalized": "StateT a b c-\u003eRep a-\u003eb(c,Rep a)",
        "package": "adjunctions",
        "partial": "State",
        "signature": "StateT g m a-\u003eRep g-\u003em(a,Rep g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-type": "method",
        "title": "state"
      },
      "index": {
        "description": "Embed simple state action into the monad",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "adjunctions",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Representable-State.html#v:stateT",
      "description": {
        "fct-module": "Control.Monad.Representable.State",
        "fct-package": "adjunctions",
        "fct-signature": "(Rep g -\u003e m (a, Rep g)) -\u003e StateT g m a",
        "fct-source": "src/Control-Monad-Representable-State.html#stateT",
        "fct-type": "function",
        "title": "stateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Representable State",
        "module": "Control.Monad.Representable.State",
        "name": "stateT",
        "normalized": "(Rep a-\u003eb(c,Rep a))-\u003eStateT a b c",
        "package": "adjunctions",
        "partial": "",
        "signature": "(Rep g-\u003em(a,Rep g))-\u003eStateT g m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html",
        "fct-type": "module",
        "title": "Adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#t:Adjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#Adjoint",
        "fct-type": "type",
        "title": "Adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#t:AdjointT",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
        "fct-type": "newtype",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:AdjointT",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "AdjointT",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:adjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "g (f a) -\u003e Adjoint f g a",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#adjoint",
        "fct-type": "function",
        "title": "adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "adjoint",
        "normalized": "a(b c)-\u003eAdjoint b a c",
        "package": "adjunctions",
        "partial": "",
        "signature": "g(f a)-\u003eAdjoint f g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:runAdjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "Adjoint f g a -\u003e g (f a)",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#runAdjoint",
        "fct-type": "function",
        "title": "runAdjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "runAdjoint",
        "normalized": "Adjoint a b c-\u003eb(a c)",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": "Adjoint f g a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Adjoint.html#v:runAdjointT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "g (m (f a))",
        "fct-source": "src/Control-Monad-Trans-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "runAdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Adjoint",
        "module": "Control.Monad.Trans.Adjoint",
        "name": "runAdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses a contravariant adjunction:\n\u003c/p\u003e\u003cp\u003ef -| g : Hask^op -\u003e Hask\n\u003c/p\u003e\u003cp\u003eto build a \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e transformer. Sadly, the dual construction,\n which builds a \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e out of a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, is uninhabited, because any\n \u003ccode\u003e\u003ca\u003eAdjunction\u003c/a\u003e\u003c/code\u003e of the form\n\u003c/p\u003e\u003cpre\u003e f -| g : Hask -\u003e Hask^op\n\u003c/pre\u003e\u003cp\u003ewould trivially admit unsafePerformIO.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html",
        "fct-type": "module",
        "title": "Adjoint"
      },
      "index": {
        "description": "Uses contravariant adjunction Hask op Hask to build Comonad to Monad transformer Sadly the dual construction which builds Comonad out of Monad is uninhabited because any Adjunction of the form Hask Hask op would trivially admit unsafePerformIO",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#t:Adjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#Adjoint",
        "fct-type": "type",
        "title": "Adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "Adjoint",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#t:AdjointT",
      "description": {
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
        "fct-type": "newtype",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:AdjointT",
      "description": {
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "AdjointT",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "AdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "AdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:adjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "g (f a) -\u003e Adjoint f g a",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#adjoint",
        "fct-type": "function",
        "title": "adjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "adjoint",
        "normalized": "a(b c)-\u003eAdjoint b a c",
        "package": "adjunctions",
        "partial": "",
        "signature": "g(f a)-\u003eAdjoint f g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:runAdjoint",
      "description": {
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "Adjoint f g a -\u003e g (f a)",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#runAdjoint",
        "fct-type": "function",
        "title": "runAdjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "runAdjoint",
        "normalized": "Adjoint a b c-\u003eb(a c)",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": "Adjoint f g a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Contravariant-Adjoint.html#v:runAdjointT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Contravariant.Adjoint",
        "fct-package": "adjunctions",
        "fct-signature": "g (w (f a))",
        "fct-source": "src/Control-Monad-Trans-Contravariant-Adjoint.html#AdjointT",
        "fct-type": "function",
        "title": "runAdjointT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Contravariant Adjoint",
        "module": "Control.Monad.Trans.Contravariant.Adjoint",
        "name": "runAdjointT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e Cont r ~ Contravariant.Adjoint (Op r) (Op r)\n Conts r ~ Contravariant.AdjointT (Op r) (Op r)\n ContsT r w m ~ Contravariant.AdjointT (Op (m r)) (Op (m r)) w\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Conts.html",
        "fct-type": "module",
        "title": "Conts"
      },
      "index": {
        "description": "Cont Contravariant.Adjoint Op Op Conts Contravariant.AdjointT Op Op ContsT Contravariant.AdjointT Op Op",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "Conts",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:Cont",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Conts.html#Cont",
        "fct-type": "type",
        "title": "Cont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "Cont",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:Conts",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Conts.html#Conts",
        "fct-type": "type",
        "title": "Conts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "Conts",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#t:ContsT",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Conts.html#ContsT",
        "fct-type": "newtype",
        "title": "ContsT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "ContsT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:ContsT",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "ContsT",
        "fct-source": "src/Control-Monad-Trans-Conts.html#ContsT",
        "fct-type": "function",
        "title": "ContsT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "ContsT",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:callCC",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "((a -\u003e ContsT r w m b) -\u003e ContsT r w m a) -\u003e ContsT r w m a",
        "fct-source": "src/Control-Monad-Trans-Conts.html#callCC",
        "fct-type": "function",
        "title": "callCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "callCC",
        "normalized": "((a-\u003eContsT b c d e)-\u003eContsT b c d a)-\u003eContsT b c d a",
        "package": "adjunctions",
        "partial": "CC",
        "signature": "((a-\u003eContsT r w m b)-\u003eContsT r w m a)-\u003eContsT r w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:cont",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "((a -\u003e r) -\u003e r) -\u003e Cont r a",
        "fct-source": "src/Control-Monad-Trans-Conts.html#cont",
        "fct-type": "function",
        "title": "cont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "cont",
        "normalized": "((a-\u003eb)-\u003eb)-\u003eCont b a",
        "package": "adjunctions",
        "partial": "",
        "signature": "((a-\u003er)-\u003er)-\u003eCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:conts",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "(w (a -\u003e r) -\u003e r) -\u003e Conts r w a",
        "fct-source": "src/Control-Monad-Trans-Conts.html#conts",
        "fct-type": "function",
        "title": "conts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "conts",
        "normalized": "(a(b-\u003ec)-\u003ec)-\u003eConts c a b",
        "package": "adjunctions",
        "partial": "",
        "signature": "(w(a-\u003er)-\u003er)-\u003eConts r w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runCont",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "Cont r a -\u003e (a -\u003e r) -\u003e r",
        "fct-source": "src/Control-Monad-Trans-Conts.html#runCont",
        "fct-type": "function",
        "title": "runCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "runCont",
        "normalized": "Cont a b-\u003e(b-\u003ea)-\u003ea",
        "package": "adjunctions",
        "partial": "Cont",
        "signature": "Cont r a-\u003e(a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runConts",
      "description": {
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "Conts r w a -\u003e w (a -\u003e r) -\u003e r",
        "fct-source": "src/Control-Monad-Trans-Conts.html#runConts",
        "fct-type": "function",
        "title": "runConts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "runConts",
        "normalized": "Conts a b c-\u003eb(c-\u003ea)-\u003ea",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": "Conts r w a-\u003ew(a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Control-Monad-Trans-Conts.html#v:runContsT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Conts",
        "fct-package": "adjunctions",
        "fct-signature": "w (a -\u003e m r) -\u003e m r",
        "fct-source": "src/Control-Monad-Trans-Conts.html#ContsT",
        "fct-type": "function",
        "title": "runContsT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Conts",
        "module": "Control.Monad.Trans.Conts",
        "name": "runContsT",
        "normalized": "a(b-\u003ec d)-\u003ec d",
        "package": "adjunctions",
        "partial": "Conts",
        "signature": "w(a-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Adjunction.html",
        "fct-type": "module",
        "title": "Adjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "Adjunction",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#t:Adjunction",
      "description": {
        "fct-descr": "\u003cp\u003eAn adjunction between Hask and Hask.\n\u003c/p\u003e\u003cp\u003eMinimal definition: both \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e or both \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e, subject to the constraints imposed by the\n default definitions that the following laws should hold.\n\u003c/p\u003e\u003cpre\u003e unit = leftAdjunct id\n counit = rightAdjunct id\n leftAdjunct f = fmap f . unit\n rightAdjunct f = counit . fmap f\n\u003c/pre\u003e\u003cp\u003eAny implementation is required to ensure that \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e witness an isomorphism from \u003ccode\u003eNat (f a, b)\u003c/code\u003e to\n \u003ccode\u003eNat (a, g b)\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e rightAdjunct unit = id\n leftAdjunct counit = id\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Adjunction.html#Adjunction",
        "fct-type": "class",
        "title": "Adjunction"
      },
      "index": {
        "description": "An adjunction between Hask and Hask Minimal definition both unit and counit or both leftAdjunct and rightAdjunct subject to the constraints imposed by the default definitions that the following laws should hold unit leftAdjunct id counit rightAdjunct id leftAdjunct fmap unit rightAdjunct counit fmap Any implementation is required to ensure that leftAdjunct and rightAdjunct witness an isomorphism from Nat to Nat rightAdjunct unit id leftAdjunct counit id",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "Adjunction",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:absurdL",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "Void -\u003e f Void",
        "fct-source": "src/Data-Functor-Adjunction.html#absurdL",
        "fct-type": "function",
        "title": "absurdL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "absurdL",
        "normalized": "Void-\u003ea Void",
        "package": "adjunctions",
        "partial": "",
        "signature": "Void-\u003ef Void"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:counit",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f (u a) -\u003e a",
        "fct-source": "src/Data-Functor-Adjunction.html#counit",
        "fct-type": "method",
        "title": "counit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "counit",
        "normalized": "a(b c)-\u003ec",
        "package": "adjunctions",
        "partial": "",
        "signature": "f(u a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:cozipL",
      "description": {
        "fct-descr": "\u003cp\u003eAnd a left adjoint must be inhabited by exactly one element\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f (Either a b) -\u003e Either (f a) (f b)",
        "fct-source": "src/Data-Functor-Adjunction.html#cozipL",
        "fct-type": "function",
        "title": "cozipL"
      },
      "index": {
        "description": "And left adjoint must be inhabited by exactly one element",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "cozipL",
        "normalized": "a(Either b c)-\u003eEither(a b)(a c)",
        "package": "adjunctions",
        "partial": "",
        "signature": "f(Either a b)-\u003eEither(f a)(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:duplicateL",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e f (f a)",
        "fct-source": "src/Data-Functor-Adjunction.html#duplicateL",
        "fct-type": "function",
        "title": "duplicateL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "duplicateL",
        "normalized": "a b-\u003ea(a b)",
        "package": "adjunctions",
        "partial": "",
        "signature": "f a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:extractL",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e a",
        "fct-source": "src/Data-Functor-Adjunction.html#extractL",
        "fct-type": "function",
        "title": "extractL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "extractL",
        "normalized": "a b-\u003eb",
        "package": "adjunctions",
        "partial": "",
        "signature": "f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:indexAdjunction",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "u b -\u003e f a -\u003e b",
        "fct-source": "src/Data-Functor-Adjunction.html#indexAdjunction",
        "fct-type": "function",
        "title": "indexAdjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "indexAdjunction",
        "normalized": "a b-\u003ec d-\u003eb",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": "u b-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:leftAdjunct",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(f a -\u003e b) -\u003e a -\u003e u b",
        "fct-source": "src/Data-Functor-Adjunction.html#leftAdjunct",
        "fct-type": "method",
        "title": "leftAdjunct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "leftAdjunct",
        "normalized": "(a b-\u003ec)-\u003eb-\u003ed c",
        "package": "adjunctions",
        "partial": "Adjunct",
        "signature": "(f a-\u003eb)-\u003ea-\u003eu b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:rightAdjunct",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e u b) -\u003e f a -\u003e b",
        "fct-source": "src/Data-Functor-Adjunction.html#rightAdjunct",
        "fct-type": "method",
        "title": "rightAdjunct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "rightAdjunct",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003ec",
        "package": "adjunctions",
        "partial": "Adjunct",
        "signature": "(a-\u003eu b)-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:splitL",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e (a, f ())",
        "fct-source": "src/Data-Functor-Adjunction.html#splitL",
        "fct-type": "function",
        "title": "splitL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "splitL",
        "normalized": "a b-\u003e(b,a())",
        "package": "adjunctions",
        "partial": "",
        "signature": "f a-\u003e(a,f())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:tabulateAdjunction",
      "description": {
        "fct-descr": "\u003cp\u003eEvery right adjoint is representable by its left adjoint\n applied to a unit element\n\u003c/p\u003e\u003cp\u003eUse this definition and the primitives in\n Data.Functor.Representable to meet the requirements of the\n superclasses of Representable.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(f () -\u003e b) -\u003e u b",
        "fct-source": "src/Data-Functor-Adjunction.html#tabulateAdjunction",
        "fct-type": "function",
        "title": "tabulateAdjunction"
      },
      "index": {
        "description": "Every right adjoint is representable by its left adjoint applied to unit element Use this definition and the primitives in Data.Functor.Representable to meet the requirements of the superclasses of Representable",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "tabulateAdjunction",
        "normalized": "(a()-\u003eb)-\u003ec b",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": "(f()-\u003eb)-\u003eu b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unabsurdL",
      "description": {
        "fct-descr": "\u003cp\u003eA left adjoint must be inhabited, or we can derive bottom.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "f Void -\u003e Void",
        "fct-source": "src/Data-Functor-Adjunction.html#unabsurdL",
        "fct-type": "function",
        "title": "unabsurdL"
      },
      "index": {
        "description": "left adjoint must be inhabited or we can derive bottom",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "unabsurdL",
        "normalized": "a Void-\u003eVoid",
        "package": "adjunctions",
        "partial": "",
        "signature": "f Void-\u003eVoid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:uncozipL",
      "description": {
        "fct-descr": "\u003cp\u003eEvery functor in Haskell permits \u003ccode\u003euncozipping\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "Either (f a) (f b) -\u003e f (Either a b)",
        "fct-source": "src/Data-Functor-Adjunction.html#uncozipL",
        "fct-type": "function",
        "title": "uncozipL"
      },
      "index": {
        "description": "Every functor in Haskell permits uncozipping",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "uncozipL",
        "normalized": "Either(a b)(a c)-\u003ea(Either b c)",
        "package": "adjunctions",
        "partial": "",
        "signature": "Either(f a)(f b)-\u003ef(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unit",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "a -\u003e u (f a)",
        "fct-source": "src/Data-Functor-Adjunction.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "unit",
        "normalized": "a-\u003eb(c a)",
        "package": "adjunctions",
        "partial": "",
        "signature": "a-\u003eu(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unsplitL",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "a -\u003e f () -\u003e f a",
        "fct-source": "src/Data-Functor-Adjunction.html#unsplitL",
        "fct-type": "function",
        "title": "unsplitL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "unsplitL",
        "normalized": "a-\u003eb()-\u003eb a",
        "package": "adjunctions",
        "partial": "",
        "signature": "a-\u003ef()-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:unzipR",
      "description": {
        "fct-descr": "\u003cp\u003eEvery functor in Haskell permits unzipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "u (a, b) -\u003e (u a, u b)",
        "fct-source": "src/Data-Functor-Adjunction.html#unzipR",
        "fct-type": "function",
        "title": "unzipR"
      },
      "index": {
        "description": "Every functor in Haskell permits unzipping",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "unzipR",
        "normalized": "a(b,c)-\u003e(a b,a c)",
        "package": "adjunctions",
        "partial": "",
        "signature": "u(a,b)-\u003e(u a,u b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:zapWithAdjunction",
      "description": {
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e u a -\u003e f b -\u003e c",
        "fct-source": "src/Data-Functor-Adjunction.html#zapWithAdjunction",
        "fct-type": "function",
        "title": "zapWithAdjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "zapWithAdjunction",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ec",
        "package": "adjunctions",
        "partial": "With Adjunction",
        "signature": "(a-\u003eb-\u003ec)-\u003eu a-\u003ef b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Adjunction.html#v:zipR",
      "description": {
        "fct-descr": "\u003cp\u003eA right adjoint functor admits an intrinsic\n notion of zipping\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(u a, u b) -\u003e u (a, b)",
        "fct-source": "src/Data-Functor-Adjunction.html#zipR",
        "fct-type": "function",
        "title": "zipR"
      },
      "index": {
        "description": "right adjoint functor admits an intrinsic notion of zipping",
        "hierarchy": "Data Functor Adjunction",
        "module": "Data.Functor.Adjunction",
        "name": "zipR",
        "normalized": "(a b,a c)-\u003ea(b,c)",
        "package": "adjunctions",
        "partial": "",
        "signature": "(u a,u b)-\u003eu(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html",
        "fct-type": "module",
        "title": "Adjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "Adjunction",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#t:Adjunction",
      "description": {
        "fct-descr": "\u003cp\u003eAn adjunction from \u003ccode\u003eHask^op\u003c/code\u003e to \u003ccode\u003eHask\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eOp\u003c/a\u003e\u003c/code\u003e (f a) b ~ \u003ccode\u003eHask\u003c/code\u003e a (g b)\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eleftAdjunct\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eAny adjunction from \u003ccode\u003eHask\u003c/code\u003e to \u003ccode\u003eHask^op\u003c/code\u003e would indirectly\n permit \u003ccode\u003eunsafePerformIO\u003c/code\u003e, and therefore does not exist.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#Adjunction",
        "fct-type": "class",
        "title": "Adjunction"
      },
      "index": {
        "description": "An adjunction from Hask op to Hask Op Hask rightAdjunct unit id leftAdjunct counit id Any adjunction from Hask to Hask op would indirectly permit unsafePerformIO and therefore does not exist",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "Adjunction",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:coindexAdjunction",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "g a -\u003e a -\u003e f ()",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#coindexAdjunction",
        "fct-type": "function",
        "title": "coindexAdjunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "coindexAdjunction",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": "g a-\u003ea-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:contrarepAdjunction",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor that has a left adjoint\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e f ()) -\u003e g a",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#contrarepAdjunction",
        "fct-type": "function",
        "title": "contrarepAdjunction"
      },
      "index": {
        "description": "Represent Contravariant functor that has left adjoint",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "contrarepAdjunction",
        "normalized": "(a-\u003eb())-\u003ec a",
        "package": "adjunctions",
        "partial": "Adjunction",
        "signature": "(a-\u003ef())-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:counit",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "a -\u003e f (g a)",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#counit",
        "fct-type": "method",
        "title": "counit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "counit",
        "normalized": "a-\u003eb(c a)",
        "package": "adjunctions",
        "partial": "",
        "signature": "a-\u003ef(g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:leftAdjunct",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(b -\u003e f a) -\u003e a -\u003e g b",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#leftAdjunct",
        "fct-type": "method",
        "title": "leftAdjunct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "leftAdjunct",
        "normalized": "(a-\u003eb c)-\u003ec-\u003ed a",
        "package": "adjunctions",
        "partial": "Adjunct",
        "signature": "(b-\u003ef a)-\u003ea-\u003eg b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:rightAdjunct",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e g b) -\u003e b -\u003e f a",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#rightAdjunct",
        "fct-type": "method",
        "title": "rightAdjunct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "rightAdjunct",
        "normalized": "(a-\u003eb c)-\u003ec-\u003ed a",
        "package": "adjunctions",
        "partial": "Adjunct",
        "signature": "(a-\u003eg b)-\u003eb-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Adjunction.html#v:unit",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Adjunction",
        "fct-package": "adjunctions",
        "fct-signature": "a -\u003e g (f a)",
        "fct-source": "src/Data-Functor-Contravariant-Adjunction.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Adjunction",
        "module": "Data.Functor.Contravariant.Adjunction",
        "name": "unit",
        "normalized": "a-\u003eb(c a)",
        "package": "adjunctions",
        "partial": "",
        "signature": "a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable contravariant endofunctors over the category of Haskell\n types are isomorphic to \u003ccode\u003e(_ -\u003e r)\u003c/code\u003e and resemble mappings to a\n fixed range.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html",
        "fct-type": "module",
        "title": "Rep"
      },
      "index": {
        "description": "Representable contravariant endofunctors over the category of Haskell types are isomorphic to and resemble mappings to fixed range",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "Rep",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#t:Representable",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eContravariant\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(_ -\u003e Rep f)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e &#8801; id\n \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e &#8801; id\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html#Representable",
        "fct-type": "class",
        "title": "Representable"
      },
      "index": {
        "description": "Contravariant functor is Representable if tabulate and index witness an isomorphism to Rep tabulate index id index tabulate id",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "Representable",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:contramapRep",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e b) -\u003e f b -\u003e f a",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html#contramapRep",
        "fct-type": "function",
        "title": "contramapRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "contramapRep",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "(a-\u003eb)-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:contramapWithRep",
      "description": {
        "fct-descr": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econtramapWithRep\u003c/a\u003e\u003c/code\u003e f p &#8801; \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e p) \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e . f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(b -\u003e Either a (Rep f)) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html#contramapWithRep",
        "fct-type": "method",
        "title": "contramapWithRep"
      },
      "index": {
        "description": "contramapWithRep tabulate either index id",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "contramapWithRep",
        "normalized": "(a-\u003eEither b(Rep c))-\u003ec b-\u003ec a",
        "package": "adjunctions",
        "partial": "With Rep",
        "signature": "(b-\u003eEither a(Rep f))-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:index",
      "description": {
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e a -\u003e Rep f",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html#index",
        "fct-type": "method",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "index",
        "normalized": "a b-\u003eb-\u003eRep a",
        "package": "adjunctions",
        "partial": "",
        "signature": "f a-\u003ea-\u003eRep f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Contravariant-Rep.html#v:tabulate",
      "description": {
        "fct-descr": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econtramap\u003c/a\u003e\u003c/code\u003e f (\u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e g) = \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e (g . f)\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Contravariant.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e Rep f) -\u003e f a",
        "fct-source": "src/Data-Functor-Contravariant-Rep.html#tabulate",
        "fct-type": "method",
        "title": "tabulate"
      },
      "index": {
        "description": "contramap tabulate tabulate",
        "hierarchy": "Data Functor Contravariant Rep",
        "module": "Data.Functor.Contravariant.Rep",
        "name": "tabulate",
        "normalized": "(a-\u003eRep b)-\u003eb a",
        "package": "adjunctions",
        "partial": "",
        "signature": "(a-\u003eRep f)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentable endofunctors over the category of Haskell types are\n isomorphic to the reader monad and so inherit a very large number\n of properties for free.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Rep.html",
        "fct-type": "module",
        "title": "Rep"
      },
      "index": {
        "description": "Representable endofunctors over the category of Haskell types are isomorphic to the reader monad and so inherit very large number of properties for free",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "Rep",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#t:Co",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Rep.html#Co",
        "fct-type": "newtype",
        "title": "Co"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "Co",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Co",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#t:Representable",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e witness an isomorphism to \u003ccode\u003e(-\u003e) x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eDistributive\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eRepresentable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e from Hask to Hask is a right adjoint.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e    &#8801; id\n \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e    &#8801; id\n \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e f &#8801; \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Rep.html#Representable",
        "fct-type": "class",
        "title": "Representable"
      },
      "index": {
        "description": "Functor is Representable if tabulate and index witness an isomorphism to Every Distributive Functor is actually Representable Every Representable Functor from Hask to Hask is right adjoint tabulate index id index tabulate id tabulate return return",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "Representable",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Representable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:Co",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "Co",
        "fct-source": "src/Data-Functor-Rep.html#Co",
        "fct-type": "function",
        "title": "Co"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "Co",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Co",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:apRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Rep.html#apRep",
        "fct-type": "function",
        "title": "apRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "apRep",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:askRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f (Rep f)",
        "fct-source": "src/Data-Functor-Rep.html#askRep",
        "fct-type": "function",
        "title": "askRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "askRep",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:bindRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e (a -\u003e f b) -\u003e f b",
        "fct-source": "src/Data-Functor-Rep.html#bindRep",
        "fct-type": "function",
        "title": "bindRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "bindRep",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "f a-\u003e(a-\u003ef b)-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:distributeRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "w (f a) -\u003e f (w a)",
        "fct-source": "src/Data-Functor-Rep.html#distributeRep",
        "fct-type": "function",
        "title": "distributeRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "distributeRep",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "w(f a)-\u003ef(w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:duplicateRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e f (f a)",
        "fct-source": "src/Data-Functor-Rep.html#duplicateRep",
        "fct-type": "function",
        "title": "duplicateRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "duplicateRep",
        "normalized": "a b-\u003ea(a b)",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "f a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:duplicatedRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e f (f a)",
        "fct-source": "src/Data-Functor-Rep.html#duplicatedRep",
        "fct-type": "function",
        "title": "duplicatedRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "duplicatedRep",
        "normalized": "a b-\u003ea(a b)",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "f a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extendRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Rep.html#extendRep",
        "fct-type": "function",
        "title": "extendRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "extendRep",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "(f a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extendedRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(f a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Rep.html#extendedRep",
        "fct-type": "function",
        "title": "extendedRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "extendedRep",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ea c",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "(f a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:extractRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e a",
        "fct-source": "src/Data-Functor-Rep.html#extractRep",
        "fct-type": "function",
        "title": "extractRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "extractRep",
        "normalized": "a b-\u003eb",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:fmapRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Rep.html#fmapRep",
        "fct-type": "function",
        "title": "fmapRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "fmapRep",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:index",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a -\u003e Rep f -\u003e a",
        "fct-source": "src/Data-Functor-Rep.html#index",
        "fct-type": "method",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "index",
        "normalized": "a b-\u003eRep a-\u003eb",
        "package": "adjunctions",
        "partial": "",
        "signature": "f a-\u003eRep f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:liftR2",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Functor-Rep.html#liftR2",
        "fct-type": "function",
        "title": "liftR2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "liftR2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "adjunctions",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:liftR3",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
        "fct-source": "src/Data-Functor-Rep.html#liftR3",
        "fct-type": "function",
        "title": "liftR3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "liftR3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "adjunctions",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:localRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(Rep f -\u003e Rep f) -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Functor-Rep.html#localRep",
        "fct-type": "function",
        "title": "localRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "localRep",
        "normalized": "(Rep a-\u003eRep a)-\u003ea b-\u003ea b",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "(Rep f-\u003eRep f)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:pureRep",
      "description": {
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Data-Functor-Rep.html#pureRep",
        "fct-type": "function",
        "title": "pureRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "pureRep",
        "normalized": "a-\u003eb a",
        "package": "adjunctions",
        "partial": "Rep",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:tabulate",
      "description": {
        "fct-descr": "\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "(Rep f -\u003e a) -\u003e f a",
        "fct-source": "src/Data-Functor-Rep.html#tabulate",
        "fct-type": "method",
        "title": "tabulate"
      },
      "index": {
        "description": "fmap tabulate tabulate fmap",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "tabulate",
        "normalized": "(Rep a-\u003eb)-\u003ea b",
        "package": "adjunctions",
        "partial": "",
        "signature": "(Rep f-\u003ea)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/adjunctions/docs/Data-Functor-Rep.html#v:unCo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Rep",
        "fct-package": "adjunctions",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Rep.html#Co",
        "fct-type": "function",
        "title": "unCo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Rep",
        "module": "Data.Functor.Rep",
        "name": "unCo",
        "normalized": "",
        "package": "adjunctions",
        "partial": "Co",
        "signature": ""
      }
    }
  }
]