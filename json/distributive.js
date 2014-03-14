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
        "word": "distributive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Distributive",
          "name": "Distributive",
          "package": "distributive",
          "source": "src/Data-Distributive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "Distributive",
          "package": "distributive",
          "partial": "Distributive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the categorical dual of \u003ccode\u003eTraversable\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDue to the lack of non-trivial comonoids in Haskell, we can restrict\n ourselves to requiring a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e rather than\n some Coapplicative class. Categorically every \u003ccode\u003e\u003ca\u003eDistributive\u003c/a\u003e\u003c/code\u003e\n functor is actually a right adjoint, and so it must be \u003ccode\u003eRepresentable\u003c/code\u003e\n endofunctor and preserve all limits. This is a fancy way of saying it\n isomorphic to `(-\u003e) x` for some x.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo be distributable a container will need to have a way to consistently\n zip a potentially infinite number of copies of itself. This effectively\n means that the holes in all values of that type, must have the same\n cardinality, fixed sized vectors, infinite streams, functions, etc.\n and no extra information to try to merge together.\n\u003c/p\u003e",
          "module": "Data.Distributive",
          "name": "Distributive",
          "package": "distributive",
          "source": "src/Data-Distributive.html#Distributive",
          "type": "class"
        },
        "index": {
          "description": "This is the categorical dual of Traversable Due to the lack of non-trivial comonoids in Haskell we can restrict ourselves to requiring Functor rather than some Coapplicative class Categorically every Distributive functor is actually right adjoint and so it must be Representable endofunctor and preserve all limits This is fancy way of saying it isomorphic to for some Minimal complete definition distribute or collect To be distributable container will need to have way to consistently zip potentially infinite number of copies of itself This effectively means that the holes in all values of that type must have the same cardinality fixed sized vectors infinite streams functions etc and no extra information to try to merge together",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "Distributive",
          "package": "distributive",
          "partial": "Distributive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#t:Distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "collect",
          "package": "distributive",
          "signature": "(a -\u003e g b) -\u003e f a -\u003e g (f b)",
          "source": "src/Data-Distributive.html#collect",
          "type": "method"
        },
        "index": {
          "description": "collect distribute fmap",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "collect",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "distributive",
          "signature": "(a-\u003eg b)-\u003ef a-\u003eg(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecollectM\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "collectM",
          "package": "distributive",
          "signature": "(a -\u003e g b) -\u003e m a -\u003e g (m b)",
          "source": "src/Data-Distributive.html#collectM",
          "type": "method"
        },
        "index": {
          "description": "collectM distributeM liftM",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "collectM",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "distributive",
          "signature": "(a-\u003eg b)-\u003em a-\u003eg(m b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:collectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecomapM\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "comapM",
          "package": "distributive",
          "signature": "(m a -\u003e b) -\u003e m (g a) -\u003e g b",
          "source": "src/Data-Distributive.html#comapM",
          "type": "function"
        },
        "index": {
          "description": "The dual of mapM comapM fmap distributeM",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "comapM",
          "normalized": "(a b-\u003ec)-\u003ea(d b)-\u003ed c",
          "package": "distributive",
          "signature": "(m a-\u003eb)-\u003em(g a)-\u003eg b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:comapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecotraverse\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "cotraverse",
          "package": "distributive",
          "signature": "(f a -\u003e b) -\u003e f (g a) -\u003e g b",
          "source": "src/Data-Distributive.html#cotraverse",
          "type": "function"
        },
        "index": {
          "description": "The dual of traverse cotraverse fmap distribute",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "cotraverse",
          "normalized": "(a b-\u003ec)-\u003ea(d b)-\u003ed c",
          "package": "distributive",
          "signature": "(f a-\u003eb)-\u003ef(g a)-\u003eg b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:cotraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edistribute [(+1),(+2)] 1\n\u003c/code\u003e\u003c/strong\u003e[2,3]\n\u003c/pre\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "distribute",
          "package": "distributive",
          "signature": "f (g a) -\u003e g (f a)",
          "source": "src/Data-Distributive.html#distribute",
          "type": "method"
        },
        "index": {
          "description": "The dual of sequenceA distribute distribute collect id",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "distribute",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "distributive",
          "signature": "f(g a)-\u003eg(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistributeM\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonad\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003edistribute\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eWrapMonad\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Distributive",
          "name": "distributeM",
          "package": "distributive",
          "signature": "m (g a) -\u003e g (m a)",
          "source": "src/Data-Distributive.html#distributeM",
          "type": "method"
        },
        "index": {
          "description": "The dual of sequence distributeM fmap unwrapMonad distribute WrapMonad",
          "hierarchy": "Data Distributive",
          "module": "Data.Distributive",
          "name": "distributeM",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "distributive",
          "signature": "m(g a)-\u003eg(m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/distributive/docs/Data-Distributive.html#v:distributeM"
      }
    }
  ]
]