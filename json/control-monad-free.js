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
        "word": "control-monad-free"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNaive Free monads suffer from a quadratic complexity,\n  as explained in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Janis Voigtlander, \u003cem\u003eAsymptotic Improvement of Computations over Free Monads, MPC'08\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe solution is to redefine the Free datatype in CPS,\n  similar to what is done in difference lists to solve the problem on quadratic append\n  for lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Free.Improve",
          "name": "Improve",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free-Improve.html",
          "type": "module"
        },
        "index": {
          "description": "Naive Free monads suffer from quadratic complexity as explained in Janis Voigtlander Asymptotic Improvement of Computations over Free Monads MPC The solution is to redefine the Free datatype in CPS similar to what is done in difference lists to solve the problem on quadratic append for lists",
          "hierarchy": "Control Monad Free Improve",
          "module": "Control.Monad.Free.Improve",
          "name": "Improve",
          "package": "control-monad-free",
          "partial": "Improve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Improve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Improve",
          "name": "C",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free-Improve.html#C",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Free Improve",
          "module": "Control.Monad.Free.Improve",
          "name": "C",
          "package": "control-monad-free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Improve.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Improve",
          "name": "C",
          "package": "control-monad-free",
          "signature": "C (forall b.  (a -\u003e mu b) -\u003e mu b)",
          "source": "src/Control-Monad-Free-Improve.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Improve",
          "module": "Control.Monad.Free.Improve",
          "name": "C",
          "normalized": "C(a b(c-\u003ed e)-\u003ed e)",
          "package": "control-monad-free",
          "signature": "C(forall b.(a-\u003emu b)-\u003emu b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Improve.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Improve",
          "name": "improve",
          "package": "control-monad-free",
          "signature": "C mu a -\u003e mu a",
          "source": "src/Control-Monad-Free-Improve.html#improve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Improve",
          "module": "Control.Monad.Free.Improve",
          "name": "improve",
          "normalized": "C a b-\u003ea b",
          "package": "control-monad-free",
          "signature": "C mu a-\u003emu a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Improve.html#v:improve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Improve",
          "name": "rep",
          "package": "control-monad-free",
          "signature": "mu a -\u003e C mu a",
          "source": "src/Control-Monad-Free-Improve.html#rep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Improve",
          "module": "Control.Monad.Free.Improve",
          "name": "rep",
          "normalized": "a b-\u003eC a b",
          "package": "control-monad-free",
          "signature": "mu a-\u003eC mu a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Improve.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Zip",
          "name": "Zip",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free-Zip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Free Zip",
          "module": "Control.Monad.Free.Zip",
          "name": "Zip",
          "package": "control-monad-free",
          "partial": "Zip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Zip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Zip",
          "name": "zipFree",
          "package": "control-monad-free",
          "signature": "(Free f a -\u003e Free f b -\u003e m (Free f c)) -\u003e Free f a -\u003e Free f b -\u003e m (Free f c)",
          "source": "src/Control-Monad-Free-Zip.html#zipFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Zip",
          "module": "Control.Monad.Free.Zip",
          "name": "zipFree",
          "normalized": "(Free a b-\u003eFree a c-\u003ed(Free a e))-\u003eFree a b-\u003eFree a c-\u003ed(Free a e)",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(Free f a-\u003eFree f b-\u003em(Free f c))-\u003eFree f a-\u003eFree f b-\u003em(Free f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Zip.html#v:zipFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free.Zip",
          "name": "zipFree_",
          "package": "control-monad-free",
          "signature": "(Free f a -\u003e Free f b -\u003e m ()) -\u003e Free f a -\u003e Free f b -\u003e m ()",
          "source": "src/Control-Monad-Free-Zip.html#zipFree_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free Zip",
          "module": "Control.Monad.Free.Zip",
          "name": "zipFree_",
          "normalized": "(Free a b-\u003eFree a c-\u003ed())-\u003eFree a b-\u003eFree a c-\u003ed()",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(Free f a-\u003eFree f b-\u003em())-\u003eFree f a-\u003eFree f b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free-Zip.html#v:zipFree_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "control-monad-free",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Free",
          "package": "control-monad-free",
          "partial": "Free",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#t:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "FreeT",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free.html#FreeT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "FreeT",
          "package": "control-monad-free",
          "partial": "Free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#t:FreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type class generalizes over encodings of Free Monads.\n\u003c/p\u003e",
          "module": "Control.Monad.Free",
          "name": "MonadFree",
          "package": "control-monad-free",
          "source": "src/Control-Monad-Free.html#MonadFree",
          "type": "class"
        },
        "index": {
          "description": "This type class generalizes over encodings of Free Monads",
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "MonadFree",
          "package": "control-monad-free",
          "partial": "Monad Free",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#t:MonadFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "FreeT",
          "package": "control-monad-free",
          "signature": "FreeT",
          "source": "src/Control-Monad-Free.html#FreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "FreeT",
          "package": "control-monad-free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:FreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Impure",
          "package": "control-monad-free",
          "signature": "Impure (f (Free f a))",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Impure",
          "package": "control-monad-free",
          "partial": "Impure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:Impure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "Pure",
          "package": "control-monad-free",
          "signature": "Pure a",
          "source": "src/Control-Monad-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "Pure",
          "package": "control-monad-free",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "evalFree",
          "package": "control-monad-free",
          "signature": "(a -\u003e b) -\u003e (f (Free f a) -\u003e b) -\u003e Free f a -\u003e b",
          "source": "src/Control-Monad-Free.html#evalFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "evalFree",
          "normalized": "(a-\u003eb)-\u003e(c(Free c a)-\u003eb)-\u003eFree c a-\u003eb",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(a-\u003eb)-\u003e(f(Free f a)-\u003eb)-\u003eFree f a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:evalFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "foldFree",
          "package": "control-monad-free",
          "signature": "(a -\u003e b) -\u003e (f b -\u003e b) -\u003e Free f a -\u003e b",
          "source": "src/Control-Monad-Free.html#foldFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "foldFree",
          "normalized": "(a-\u003eb)-\u003e(c b-\u003eb)-\u003eFree c a-\u003eb",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(a-\u003eb)-\u003e(f b-\u003eb)-\u003eFree f a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:foldFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "foldFreeM",
          "package": "control-monad-free",
          "signature": "(a -\u003e m b) -\u003e (f b -\u003e m b) -\u003e Free f a -\u003e m b",
          "source": "src/Control-Monad-Free.html#foldFreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "foldFreeM",
          "normalized": "(a-\u003eb c)-\u003e(d c-\u003eb c)-\u003eFree d a-\u003eb c",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(a-\u003em b)-\u003e(f b-\u003em b)-\u003eFree f a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:foldFreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "foldFreeT",
          "package": "control-monad-free",
          "signature": "(a -\u003e m b) -\u003e (f b -\u003e m b) -\u003e FreeT f m a -\u003e m b",
          "source": "src/Control-Monad-Free.html#foldFreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "foldFreeT",
          "normalized": "(a-\u003eb c)-\u003e(d c-\u003eb c)-\u003eFreeT d b a-\u003eb c",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(a-\u003em b)-\u003e(f b-\u003em b)-\u003eFreeT f m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:foldFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "foldFreeT'",
          "package": "control-monad-free",
          "signature": "(a -\u003e b) -\u003e (f b -\u003e b) -\u003e FreeT f m a -\u003e m b",
          "source": "src/Control-Monad-Free.html#foldFreeT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "foldFreeT'",
          "normalized": "(a-\u003eb)-\u003e(c b-\u003eb)-\u003eFreeT c d a-\u003ed b",
          "package": "control-monad-free",
          "partial": "Free T'",
          "signature": "(a-\u003eb)-\u003e(f b-\u003eb)-\u003eFreeT f m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:foldFreeT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "free",
          "package": "control-monad-free",
          "signature": "free",
          "source": "src/Control-Monad-Free.html#free",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "free",
          "package": "control-monad-free",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "induce",
          "package": "control-monad-free",
          "signature": "(forall a.  f a -\u003e m a) -\u003e Free f a -\u003e m a",
          "source": "src/Control-Monad-Free.html#induce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "induce",
          "normalized": "(a b c d-\u003ee d)-\u003eFree c d-\u003ee d",
          "package": "control-monad-free",
          "signature": "(forall a. f a-\u003em a)-\u003eFree f a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:induce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "isImpure",
          "package": "control-monad-free",
          "signature": "Free t t1 -\u003e Bool",
          "source": "src/Control-Monad-Free.html#isImpure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "isImpure",
          "normalized": "Free a a-\u003eBool",
          "package": "control-monad-free",
          "partial": "Impure",
          "signature": "Free t t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:isImpure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "isPure",
          "package": "control-monad-free",
          "signature": "Free t t1 -\u003e Bool",
          "source": "src/Control-Monad-Free.html#isPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "isPure",
          "normalized": "Free a a-\u003eBool",
          "package": "control-monad-free",
          "partial": "Pure",
          "signature": "Free t t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:isPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "liftFree",
          "package": "control-monad-free",
          "signature": "(a -\u003e Free f b) -\u003e a -\u003e FreeT f m b",
          "source": "src/Control-Monad-Free.html#liftFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "liftFree",
          "normalized": "(a-\u003eFree b c)-\u003ea-\u003eFreeT b d c",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(a-\u003eFree f b)-\u003ea-\u003eFreeT f m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:liftFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "mapFree",
          "package": "control-monad-free",
          "signature": "(f (Free g a) -\u003e g (Free g a)) -\u003e Free f a -\u003e Free g a",
          "source": "src/Control-Monad-Free.html#mapFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "mapFree",
          "normalized": "(a(Free b c)-\u003eb(Free b c))-\u003eFree a c-\u003eFree b c",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(f(Free g a)-\u003eg(Free g a))-\u003eFree f a-\u003eFree g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:mapFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "mapFreeM",
          "package": "control-monad-free",
          "signature": "(f (Free g a) -\u003e m (g (Free g a))) -\u003e Free f a -\u003e m (Free g a)",
          "source": "src/Control-Monad-Free.html#mapFreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "mapFreeM",
          "normalized": "(a(Free b c)-\u003ed(b(Free b c)))-\u003eFree a c-\u003ed(Free b c)",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(f(Free g a)-\u003em(g(Free g a)))-\u003eFree f a-\u003em(Free g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:mapFreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "mapFreeM'",
          "package": "control-monad-free",
          "signature": "(forall a.  f a -\u003e m (g a)) -\u003e Free f a -\u003e m (Free g a)",
          "source": "src/Control-Monad-Free.html#mapFreeM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "mapFreeM'",
          "normalized": "(a b c d-\u003ee(f d))-\u003eFree c d-\u003ee(Free f d)",
          "package": "control-monad-free",
          "partial": "Free M'",
          "signature": "(forall a. f a-\u003em(g a))-\u003eFree f a-\u003em(Free g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:mapFreeM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "mapFreeT",
          "package": "control-monad-free",
          "signature": "(forall a.  m a -\u003e m' a) -\u003e FreeT f m a -\u003e FreeT f m' a",
          "source": "src/Control-Monad-Free.html#mapFreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "mapFreeT",
          "normalized": "(a b c d-\u003ee d)-\u003eFreeT f c d-\u003eFreeT f e d",
          "package": "control-monad-free",
          "partial": "Free",
          "signature": "(forall a. m a-\u003em' a)-\u003eFreeT f m a-\u003eFreeT f m' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:mapFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "trans",
          "package": "control-monad-free",
          "signature": "Free f a -\u003e FreeT f m a",
          "source": "src/Control-Monad-Free.html#trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "trans",
          "normalized": "Free a b-\u003eFreeT a c b",
          "package": "control-monad-free",
          "signature": "Free f a-\u003eFreeT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "trans'",
          "package": "control-monad-free",
          "signature": "m (Free f a) -\u003e FreeT f m a",
          "source": "src/Control-Monad-Free.html#trans%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "trans'",
          "normalized": "a(Free b c)-\u003eFreeT b a c",
          "package": "control-monad-free",
          "signature": "m(Free f a)-\u003eFreeT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:trans-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "unFreeT",
          "package": "control-monad-free",
          "signature": "m (Either a (f (FreeT f m a)))",
          "source": "src/Control-Monad-Free.html#FreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "unFreeT",
          "package": "control-monad-free",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:unFreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "untrans",
          "package": "control-monad-free",
          "signature": "FreeT f m a -\u003e m (Free f a)",
          "source": "src/Control-Monad-Free.html#untrans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "untrans",
          "normalized": "FreeT a b c-\u003eb(Free a c)",
          "package": "control-monad-free",
          "signature": "FreeT f m a-\u003em(Free f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:untrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Free",
          "name": "wrap",
          "package": "control-monad-free",
          "signature": "wrap",
          "source": "src/Control-Monad-Free.html#wrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Free",
          "module": "Control.Monad.Free",
          "name": "wrap",
          "package": "control-monad-free",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-free/docs/Control-Monad-Free.html#v:wrap"
      }
    }
  ]
]