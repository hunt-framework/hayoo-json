[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFree monads build syntax trees.  See the example sections for details.\n\u003c/p\u003e\u003cp\u003eA free monad over a functor resembles a list of that functor:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e[]\u003c/code\u003e by not using the functor at all\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e(:)\u003c/code\u003e by prepending another layer of the functor\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eliftF\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003esingleton\u003c/code\u003e by creating a list from a single layer of\n      the functor.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "Free monads build syntax trees See the example sections for details free monad over functor resembles list of that functor return behaves like by not using the functor at all wrap behaves like by prepending another layer of the functor liftF behaves like singleton by creating list from single layer of the functor",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Free",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#t:Free",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFree f a\u003c/code\u003e is a list of nested \u003ccode\u003ef\u003c/code\u003es terminating with a return value of type\n    \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e - The functor that generates the free monad\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - The return value\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Free.html#Free",
        "fct-type": "type",
        "title": "Free"
      },
      "index": {
        "description": "Free is list of nested terminating with return value of type The functor that generates the free monad The return value",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Free",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#t:FreeF",
      "description": {
        "fct-descr": "\u003cp\u003eThe signature for \u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "data",
        "title": "FreeF"
      },
      "index": {
        "description": "The signature for Free",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeF",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#t:FreeT",
      "description": {
        "fct-descr": "\u003cp\u003eA free monad transformer alternates nesting the base monad \u003ccode\u003em\u003c/code\u003e and the base\n    functor \u003ccode\u003ef\u003c/code\u003e, terminating with a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e - The functor that generates the free monad transformer\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The base monad\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e - The return value\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "newtype",
        "title": "FreeT"
      },
      "index": {
        "description": "free monad transformer alternates nesting the base monad and the base functor terminating with value of type The functor that generates the free monad transformer The base monad The return value",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeT",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:Free",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "Free (f x)",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Free",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:FreeT",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "FreeT",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "function",
        "title": "FreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "FreeT",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:Pure",
      "description": {
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeF",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "Pure",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:liftF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert one layer of a functor into an operation in the free monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "f a -\u003e FreeT f m a",
        "fct-source": "src/Control-Monad-Trans-Free.html#liftF",
        "fct-type": "function",
        "title": "liftF"
      },
      "index": {
        "description": "Convert one layer of functor into an operation in the free monad",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "liftF",
        "normalized": "a b-\u003eFreeT a c b",
        "package": "transformers-free",
        "partial": "",
        "signature": "f a-\u003eFreeT f m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:runFree",
      "description": {
        "fct-descr": "\u003cp\u003eObservation function that exposes the next step\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "Free f r -\u003e FreeF f r (Free f r)",
        "fct-source": "src/Control-Monad-Trans-Free.html#runFree",
        "fct-type": "function",
        "title": "runFree"
      },
      "index": {
        "description": "Observation function that exposes the next step",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "runFree",
        "normalized": "Free a b-\u003eFreeF a b(Free a b)",
        "package": "transformers-free",
        "partial": "Free",
        "signature": "Free f r-\u003eFreeF f r(Free f r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:runFreeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "m (FreeF f a (FreeT f m a))",
        "fct-source": "src/Control-Monad-Trans-Free.html#FreeT",
        "fct-type": "function",
        "title": "runFreeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "runFreeT",
        "normalized": "",
        "package": "transformers-free",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers-free/docs/Control-Monad-Trans-Free.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend one layer of the functor to the free monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Free",
        "fct-package": "transformers-free",
        "fct-signature": "f (FreeT f m a) -\u003e FreeT f m a",
        "fct-source": "src/Control-Monad-Trans-Free.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Prepend one layer of the functor to the free monad",
        "hierarchy": "Control Monad Trans Free",
        "module": "Control.Monad.Trans.Free",
        "name": "wrap",
        "normalized": "a(FreeT a b c)-\u003eFreeT a b c",
        "package": "transformers-free",
        "partial": "",
        "signature": "f(FreeT f m a)-\u003eFreeT f m a"
      }
    }
  }
]