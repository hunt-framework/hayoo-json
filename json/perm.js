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
        "word": "perm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Perm",
          "name": "Perm",
          "package": "perm",
          "source": "src/Control-Applicative-Perm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "Perm",
          "package": "perm",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe permutation applicative\n\u003c/p\u003e",
          "module": "Control.Applicative.Perm",
          "name": "Perm",
          "package": "perm",
          "source": "src/Control-Monad-Perm-Internal.html#Perm",
          "type": "data"
        },
        "index": {
          "description": "The permutation applicative",
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "Perm",
          "package": "perm",
          "partial": "Perm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#t:Perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monad homomorphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad homomorphism from\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Applicative.Perm\",\"Control.Monad.Perm\"]",
          "name": "hoistPerm",
          "package": "perm",
          "signature": "(forall a.  m a -\u003e n a) -\u003e Perm m b -\u003e Perm n b",
          "source": "src/Control-Monad-Perm-Internal.html#hoistPerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:hoistPerm\",\"http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:hoistPerm\"]"
        },
        "index": {
          "description": "Lift monad homomorphism from to into monad homomorphism from Perm to Perm",
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "hoistPerm",
          "normalized": "(a b c d-\u003ee d)-\u003ePerm c f-\u003ePerm e f",
          "package": "perm",
          "partial": "Perm",
          "signature": "(forall a. m a-\u003en a)-\u003ePerm m b-\u003ePerm n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:hoistPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e that can be used without a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Applicative.Perm\",\"Control.Monad.Perm\"]",
          "name": "liftPerm",
          "package": "perm",
          "signature": "m a -\u003e Perm m a",
          "source": "src/Control-Monad-Perm-Internal.html#liftPerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPerm\",\"http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:liftPerm\"]"
        },
        "index": {
          "description": "version of lift that can be used without Monad for",
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "liftPerm",
          "normalized": "a b-\u003ePerm a b",
          "package": "perm",
          "partial": "Perm",
          "signature": "m a-\u003ePerm m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Applicative.Perm\",\"Control.Monad.Perm\"]",
          "name": "liftPlus",
          "package": "perm",
          "signature": "(forall a.  m a -\u003e m a -\u003e m a) -\u003e Perm m b -\u003e Perm m b -\u003e Perm m b",
          "source": "src/Control-Monad-Perm-Internal.html#liftPlus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPlus\",\"http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:liftPlus\"]"
        },
        "index": {
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "liftPlus",
          "normalized": "(a b c d-\u003ec d-\u003ec d)-\u003ePerm c e-\u003ePerm c e-\u003ePerm c e",
          "package": "perm",
          "partial": "Plus",
          "signature": "(forall a. m a-\u003em a-\u003em a)-\u003ePerm m b-\u003ePerm m b-\u003ePerm m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:liftPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e, combining actions using the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Applicative.Perm",
          "name": "runPerm",
          "package": "perm",
          "signature": "Perm m a -\u003e m a",
          "source": "src/Control-Applicative-Perm.html#runPerm",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Perm combining actions using the Alternative for",
          "hierarchy": "Control Applicative Perm",
          "module": "Control.Applicative.Perm",
          "name": "runPerm",
          "normalized": "Perm a b-\u003ea b",
          "package": "perm",
          "partial": "Perm",
          "signature": "Perm m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Applicative-Perm.html#v:runPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Perm",
          "name": "Perm",
          "package": "perm",
          "source": "src/Control-Monad-Perm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Perm",
          "module": "Control.Monad.Perm",
          "name": "Perm",
          "package": "perm",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe permutation applicative\n\u003c/p\u003e",
          "module": "Control.Monad.Perm",
          "name": "Perm",
          "package": "perm",
          "source": "src/Control-Monad-Perm-Internal.html#Perm",
          "type": "data"
        },
        "index": {
          "description": "The permutation applicative",
          "hierarchy": "Control Monad Perm",
          "module": "Control.Monad.Perm",
          "name": "Perm",
          "package": "perm",
          "partial": "Perm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#t:Perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e, combining actions using the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Perm",
          "name": "runPerm",
          "package": "perm",
          "signature": "Perm m a -\u003e m a",
          "source": "src/Control-Monad-Perm.html#runPerm",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Perm combining actions using the MonadPlus for",
          "hierarchy": "Control Monad Perm",
          "module": "Control.Monad.Perm",
          "name": "runPerm",
          "normalized": "Perm a b-\u003ea b",
          "package": "perm",
          "partial": "Perm",
          "signature": "Perm m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perm/docs/Control-Monad-Perm.html#v:runPerm"
      }
    }
  ]
]