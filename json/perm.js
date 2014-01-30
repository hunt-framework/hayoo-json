[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#",
      "description": {
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Perm.html",
        "fct-type": "module",
        "title": "Perm"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "perm",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#t:Perm",
      "description": {
        "fct-descr": "\u003cp\u003eThe permutation applicative\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Perm-Internal.html#Perm",
        "fct-type": "data",
        "title": "Perm"
      },
      "index": {
        "description": "The permutation applicative",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "perm",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:hoistPerm",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e Perm m b -\u003e Perm n b",
        "fct-source": "src/Control-Monad-Perm-Internal.html#hoistPerm",
        "fct-type": "function",
        "title": "hoistPerm"
      },
      "index": {
        "description": "Lift monad homomorphism from to into monad homomorphism from Perm to Perm",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "hoistPerm",
        "normalized": "(a b c d-\u003ee d)-\u003ePerm c f-\u003ePerm e f",
        "package": "perm",
        "partial": "Perm",
        "signature": "(forall a. m a-\u003en a)-\u003ePerm m b-\u003ePerm n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPerm",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e that can be used without a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "m a -\u003e Perm m a",
        "fct-source": "src/Control-Monad-Perm-Internal.html#liftPerm",
        "fct-type": "function",
        "title": "liftPerm"
      },
      "index": {
        "description": "version of lift that can be used without Monad for",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "liftPerm",
        "normalized": "a b-\u003ePerm a b",
        "package": "perm",
        "partial": "Perm",
        "signature": "m a-\u003ePerm m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPlus",
      "description": {
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "(forall a.  m a -\u003e m a -\u003e m a) -\u003e Perm m b -\u003e Perm m b -\u003e Perm m b",
        "fct-source": "src/Control-Monad-Perm-Internal.html#liftPlus",
        "fct-type": "function",
        "title": "liftPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "liftPlus",
        "normalized": "(a b c d-\u003ec d-\u003ec d)-\u003ePerm c e-\u003ePerm c e-\u003ePerm c e",
        "package": "perm",
        "partial": "Plus",
        "signature": "(forall a. m a-\u003em a-\u003em a)-\u003ePerm m b-\u003ePerm m b-\u003ePerm m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:runPerm",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e, combining actions using the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Perm",
        "fct-package": "perm",
        "fct-signature": "Perm m a -\u003e m a",
        "fct-source": "src/Control-Applicative-Perm.html#runPerm",
        "fct-type": "function",
        "title": "runPerm"
      },
      "index": {
        "description": "Unwrap Perm combining actions using the Alternative for",
        "hierarchy": "Control Applicative Perm",
        "module": "Control.Applicative.Perm",
        "name": "runPerm",
        "normalized": "Perm a b-\u003ea b",
        "package": "perm",
        "partial": "Perm",
        "signature": "Perm m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#",
      "description": {
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Perm.html",
        "fct-type": "module",
        "title": "Perm"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "perm",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#t:Perm",
      "description": {
        "fct-descr": "\u003cp\u003eThe permutation applicative\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Perm-Internal.html#Perm",
        "fct-type": "data",
        "title": "Perm"
      },
      "index": {
        "description": "The permutation applicative",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "perm",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:hoistPerm",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e Perm m b -\u003e Perm n b",
        "fct-source": "src/Control-Monad-Perm-Internal.html#hoistPerm",
        "fct-type": "function",
        "title": "hoistPerm"
      },
      "index": {
        "description": "Lift monad homomorphism from to into monad homomorphism from Perm to Perm",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "hoistPerm",
        "normalized": "(a b c d-\u003ee d)-\u003ePerm c f-\u003ePerm e f",
        "package": "perm",
        "partial": "Perm",
        "signature": "(forall a. m a-\u003en a)-\u003ePerm m b-\u003ePerm n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:liftPerm",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e that can be used without a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "m a -\u003e Perm m a",
        "fct-source": "src/Control-Monad-Perm-Internal.html#liftPerm",
        "fct-type": "function",
        "title": "liftPerm"
      },
      "index": {
        "description": "version of lift that can be used without Monad for",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "liftPerm",
        "normalized": "a b-\u003ePerm a b",
        "package": "perm",
        "partial": "Perm",
        "signature": "m a-\u003ePerm m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:liftPlus",
      "description": {
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "(forall a.  m a -\u003e m a -\u003e m a) -\u003e Perm m b -\u003e Perm m b -\u003e Perm m b",
        "fct-source": "src/Control-Monad-Perm-Internal.html#liftPlus",
        "fct-type": "function",
        "title": "liftPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "liftPlus",
        "normalized": "(a b c d-\u003ec d-\u003ec d)-\u003ePerm c e-\u003ePerm c e-\u003ePerm c e",
        "package": "perm",
        "partial": "Plus",
        "signature": "(forall a. m a-\u003em a-\u003em a)-\u003ePerm m b-\u003ePerm m b-\u003ePerm m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:runPerm",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e, combining actions using the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Perm",
        "fct-package": "perm",
        "fct-signature": "Perm m a -\u003e m a",
        "fct-source": "src/Control-Monad-Perm.html#runPerm",
        "fct-type": "function",
        "title": "runPerm"
      },
      "index": {
        "description": "Unwrap Perm combining actions using the MonadPlus for",
        "hierarchy": "Control Monad Perm",
        "module": "Control.Monad.Perm",
        "name": "runPerm",
        "normalized": "Perm a b-\u003ea b",
        "package": "perm",
        "partial": "Perm",
        "signature": "Perm m a-\u003em a"
      }
    }
  }
]