[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#",
      "description": {
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "module",
        "fct-source": "src/Data-Distributive.html",
        "fct-type": "module",
        "title": "Distributive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "Distributive",
        "normalized": "",
        "package": "distributive",
        "partial": "Distributive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#t:Distributive",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the categorical dual of \u003ccode\u003eTraversable\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDue to the lack of non-trivial comonoids in Haskell, we can restrict\n ourselves to requiring a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e rather than\n some Coapplicative class. Categorically every \u003ccode\u003e\u003ca\u003eDistributive\u003c/a\u003e\u003c/code\u003e\n functor is actually a right adjoint, and so it must be \u003ccode\u003eRepresentable\u003c/code\u003e\n endofunctor and preserve all limits. This is a fancy way of saying it\n isomorphic to `(-\u003e) x` for some x.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo be distributable a container will need to have a way to consistently\n zip a potentially infinite number of copies of itself. This effectively\n means that the holes in all values of that type, must have the same\n cardinality, fixed sized vectors, infinite streams, functions, etc.\n and no extra information to try to merge together.\n\u003c/p\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "class",
        "fct-source": "src/Data-Distributive.html#Distributive",
        "fct-type": "class",
        "title": "Distributive"
      },
      "index": {
        "description": "This is the categorical dual of Traversable Due to the lack of non-trivial comonoids in Haskell we can restrict ourselves to requiring Functor rather than some Coapplicative class Categorically every Distributive functor is actually right adjoint and so it must be Representable endofunctor and preserve all limits This is fancy way of saying it isomorphic to for some Minimal complete definition distribute or collect To be distributable container will need to have way to consistently zip potentially infinite number of copies of itself This effectively means that the holes in all values of that type must have the same cardinality fixed sized vectors infinite streams functions etc and no extra information to try to merge together",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "Distributive",
        "normalized": "",
        "package": "distributive",
        "partial": "Distributive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:collect",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "(a -\u003e g b) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Data-Distributive.html#collect",
        "fct-type": "method",
        "title": "collect"
      },
      "index": {
        "description": "collect distribute fmap",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "collect",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "distributive",
        "partial": "",
        "signature": "(a-\u003eg b)-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:collectM",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecollectM\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "(a -\u003e g b) -\u003e m a -\u003e g (m b)",
        "fct-source": "src/Data-Distributive.html#collectM",
        "fct-type": "method",
        "title": "collectM"
      },
      "index": {
        "description": "collectM distributeM liftM",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "collectM",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "distributive",
        "partial": "",
        "signature": "(a-\u003eg b)-\u003em a-\u003eg(m b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:comapM",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecomapM\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "(m a -\u003e b) -\u003e m (g a) -\u003e g b",
        "fct-source": "src/Data-Distributive.html#comapM",
        "fct-type": "function",
        "title": "comapM"
      },
      "index": {
        "description": "The dual of mapM comapM fmap distributeM",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "comapM",
        "normalized": "(a b-\u003ec)-\u003ea(d b)-\u003ed c",
        "package": "distributive",
        "partial": "",
        "signature": "(m a-\u003eb)-\u003em(g a)-\u003eg b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:cotraverse",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecotraverse\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "(f a -\u003e b) -\u003e f (g a) -\u003e g b",
        "fct-source": "src/Data-Distributive.html#cotraverse",
        "fct-type": "function",
        "title": "cotraverse"
      },
      "index": {
        "description": "The dual of traverse cotraverse fmap distribute",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "cotraverse",
        "normalized": "(a b-\u003ec)-\u003ea(d b)-\u003ed c",
        "package": "distributive",
        "partial": "",
        "signature": "(f a-\u003eb)-\u003ef(g a)-\u003eg b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:distribute",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edistribute [(+1),(+2)] 1\n\u003c/code\u003e\u003c/strong\u003e[2,3]\n\u003c/pre\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "f (g a) -\u003e g (f a)",
        "fct-source": "src/Data-Distributive.html#distribute",
        "fct-type": "method",
        "title": "distribute"
      },
      "index": {
        "description": "The dual of sequenceA distribute distribute collect id",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "distribute",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "distributive",
        "partial": "",
        "signature": "f(g a)-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:distributeM",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonad\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eWrapMonad\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Distributive",
        "fct-package": "distributive",
        "fct-signature": "m (g a) -\u003e g (m a)",
        "fct-source": "src/Data-Distributive.html#distributeM",
        "fct-type": "method",
        "title": "distributeM"
      },
      "index": {
        "description": "The dual of sequence distributeM fmap unwrapMonad distribute WrapMonad",
        "hierarchy": "Data Distributive",
        "module": "Data.Distributive",
        "name": "distributeM",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "distributive",
        "partial": "",
        "signature": "m(g a)-\u003eg(m a)"
      }
    }
  }
]