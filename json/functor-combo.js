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
        "word": "functor-combo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilling and extracting derivatives (one-hole contexts)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.DHoley",
          "name": "DHoley",
          "package": "functor-combo",
          "source": "src/FunctorCombo-DHoley.html",
          "type": "module"
        },
        "index": {
          "description": "Filling and extracting derivatives one-hole contexts",
          "hierarchy": "FunctorCombo DHoley",
          "module": "FunctorCombo.DHoley",
          "name": "DHoley",
          "package": "functor-combo",
          "partial": "DHoley",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-DHoley.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.DHoley",
          "name": "Holey",
          "package": "functor-combo",
          "source": "src/FunctorCombo-DHoley.html#Holey",
          "type": "class"
        },
        "index": {
          "hierarchy": "FunctorCombo DHoley",
          "module": "FunctorCombo.DHoley",
          "name": "Holey",
          "package": "functor-combo",
          "partial": "Holey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-DHoley.html#t:Holey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll extractions\n\u003c/p\u003e",
          "module": "FunctorCombo.DHoley",
          "name": "extract",
          "package": "functor-combo",
          "signature": "f a -\u003e f (Loc f a)",
          "source": "src/FunctorCombo-DHoley.html#extract",
          "type": "method"
        },
        "index": {
          "description": "All extractions",
          "hierarchy": "FunctorCombo DHoley",
          "module": "FunctorCombo.DHoley",
          "name": "extract",
          "normalized": "a b-\u003ea(Loc a b)",
          "package": "functor-combo",
          "signature": "f a-\u003ef(Loc f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-DHoley.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative interface for \u003ccode\u003e\u003ca\u003efillC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FunctorCombo.DHoley",
          "name": "fill",
          "package": "functor-combo",
          "signature": "Loc f a -\u003e f a",
          "source": "src/FunctorCombo-DHoley.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Alternative interface for fillC",
          "hierarchy": "FunctorCombo DHoley",
          "module": "FunctorCombo.DHoley",
          "name": "fill",
          "normalized": "Loc a b-\u003ea b",
          "package": "functor-combo",
          "signature": "Loc f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-DHoley.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a hole\n\u003c/p\u003e",
          "module": "FunctorCombo.DHoley",
          "name": "fillC",
          "package": "functor-combo",
          "signature": "Der f a -\u003e a -\u003e f a",
          "source": "src/FunctorCombo-DHoley.html#fillC",
          "type": "method"
        },
        "index": {
          "description": "Fill hole",
          "hierarchy": "FunctorCombo DHoley",
          "module": "FunctorCombo.DHoley",
          "name": "fillC",
          "normalized": "Der a b-\u003eb-\u003ea b",
          "package": "functor-combo",
          "signature": "Der f a-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-DHoley.html#v:fillC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDerivatives (one-hole contexts) for standard Functor combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Derivative",
          "name": "Derivative",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Derivative.html",
          "type": "module"
        },
        "index": {
          "description": "Derivatives one-hole contexts for standard Functor combinators",
          "hierarchy": "FunctorCombo Derivative",
          "module": "FunctorCombo.Derivative",
          "name": "Derivative",
          "package": "functor-combo",
          "partial": "Derivative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Derivative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA derivative, i.e., a one-hole context for a container f (probably a functor).\n\u003c/p\u003e",
          "module": "FunctorCombo.Derivative",
          "name": "Der",
          "package": "functor-combo",
          "signature": "Der",
          "type": "function"
        },
        "index": {
          "description": "derivative i.e one-hole context for container probably functor",
          "hierarchy": "FunctorCombo Derivative",
          "module": "FunctorCombo.Derivative",
          "name": "Der",
          "package": "functor-combo",
          "partial": "Der",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Derivative.html#t:Der"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard building blocks for functors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Functor",
          "name": "Functor",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "Standard building blocks for functors",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Functor",
          "package": "functor-combo",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct on unary type constructors\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": ":*:",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Product on unary type constructors",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":*:",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict product functor\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": ":*:!",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#%3A%2A%3A%21",
          "type": "data"
        },
        "index": {
          "description": "Strict product functor",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":*:!",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t::-42-:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum on unary type constructors\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": ":+:",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Sum on unary type constructors",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":+:",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict sum functor\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": ":+:!",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A%21",
          "type": "data"
        },
        "index": {
          "description": "Strict sum functor",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":+:!",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t::-43-:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of unary type constructors\n\u003c/p\u003e\u003cp\u003eThere are (at least) two useful \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances, so you'll have to\npick one and type-specialize it (filling in all or parts of \u003ccode\u003eg\u003c/code\u003e and/or \u003ccode\u003ef\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e     -- standard Monoid instance for Applicative applied to Monoid\n     instance (Applicative (g :. f), Monoid a) =\u003e Monoid ((g :. f) a) where\n       { mempty = pure mempty; mappend = liftA2 mappend }\n     -- Especially handy when g is a Monoid_f.\n     instance Monoid (g (f a)) =\u003e Monoid ((g :. f) a) where\n       { mempty = O mempty; mappend = inO2 mappend }\n\u003c/pre\u003e\u003cp\u003eCorresponding to the first and second definitions above,\n\u003c/p\u003e\u003cpre\u003e     instance (Applicative g, Monoid_f f) =\u003e Monoid_f (g :. f) where\n       { mempty_f = O (pure mempty_f); mappend_f = inO2 (liftA2 mappend_f) }\n     instance Monoid_f g =\u003e Monoid_f (g :. f) where\n       { mempty_f = O mempty_f; mappend_f = inO2 mappend_f }\n\u003c/pre\u003e\u003cp\u003eSimilarly, there are two useful \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instances and two useful\n\u003ccode\u003e\u003ca\u003eContraFunctor\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cpre\u003e     instance (      Functor g,       Functor f) =\u003e Functor (g :. f) where fmap = fmapFF\n     instance (ContraFunctor g, ContraFunctor f) =\u003e Functor (g :. f) where fmap = fmapCC\n \n     instance (      Functor g, ContraFunctor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapFC\n     instance (ContraFunctor g,       Functor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapCF\n\u003c/pre\u003e\u003cp\u003eHowever, it's such a bother to define the Functor instances per\ncomposition type, I've left the fmapFF case in.  If you want the fmapCC\none, you're out of luck for now.  I'd love to hear a good solution.  Maybe\nsomeday Haskell will do Prolog-style search for instances, subgoaling the\nconstraints, rather than just matching instance heads.\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": ":.",
          "package": "functor-combo",
          "type": "newtype"
        },
        "index": {
          "description": "Composition of unary type constructors There are at least two useful Monoid instances so you ll have to pick one and type-specialize it filling in all or parts of and or standard Monoid instance for Applicative applied to Monoid instance Applicative Monoid Monoid where mempty pure mempty mappend liftA2 mappend Especially handy when is Monoid instance Monoid Monoid where mempty mempty mappend inO2 mappend Corresponding to the first and second definitions above instance Applicative Monoid Monoid where mempty pure mempty mappend inO2 liftA2 mappend instance Monoid Monoid where mempty mempty mappend inO2 mappend Similarly there are two useful Functor instances and two useful ContraFunctor instances instance Functor Functor Functor where fmap fmapFF instance ContraFunctor ContraFunctor Functor where fmap fmapCC instance Functor ContraFunctor ContraFunctor where contraFmap contraFmapFC instance ContraFunctor Functor ContraFunctor where contraFmap contraFmapCF However it such bother to define the Functor instances per composition type ve left the fmapFF case in If you want the fmapCC one you re out of luck for now love to hear good solution Maybe someday Haskell will do Prolog-style search for instances subgoaling the constraints rather than just matching instance heads",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":.",
          "package": "functor-combo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "Const",
          "package": "functor-combo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Const",
          "package": "functor-combo",
          "partial": "Const",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "EncodeF",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#EncodeF",
          "type": "class"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "EncodeF",
          "package": "functor-combo",
          "partial": "Encode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:EncodeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity type constructor.  Until there's a better place to find it.\n I'd use \u003ca\u003eControl.Monad.Identity\u003c/a\u003e, but I don't want to introduce a\n dependency on mtl just for Id.\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "Id",
          "package": "functor-combo",
          "type": "newtype"
        },
        "index": {
          "description": "Identity type constructor Until there better place to find it use Control.Monad.Identity but don want to introduce dependency on mtl just for Id",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Id",
          "package": "functor-combo",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a bottom to a type\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "Lift",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#Lift",
          "type": "data"
        },
        "index": {
          "description": "Add bottom to type",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Lift",
          "package": "functor-combo",
          "partial": "Lift",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit type constructor (one inhabitant)\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "Unit",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#Unit",
          "type": "type"
        },
        "index": {
          "description": "Unit type constructor one inhabitant",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Unit",
          "package": "functor-combo",
          "partial": "Unit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty/zero type constructor (no inhabitants)\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "Void",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Functor.html#Void",
          "type": "data"
        },
        "index": {
          "description": "Empty zero type constructor no inhabitants",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Void",
          "package": "functor-combo",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd pre- and post processing\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "(~\u003e)",
          "package": "functor-combo",
          "signature": "cat a' a -\u003e cat b b' -\u003e cat a b -\u003e cat a' b'",
          "type": "function"
        },
        "index": {
          "description": "Add pre and post processing",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "(~\u003e) ~\u003e",
          "normalized": "a b c-\u003ea d e-\u003ea c d-\u003ea b e",
          "package": "functor-combo",
          "signature": "cat a' a-\u003ecat b b'-\u003ecat a b-\u003ecat a' b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "(\u003c~)",
          "package": "functor-combo",
          "signature": "cat b b' -\u003e cat a' a -\u003e cat a b -\u003e cat a' b'",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "(\u003c~) \u003c~",
          "normalized": "a b c-\u003ea d e-\u003ea e b-\u003ea d c",
          "package": "functor-combo",
          "signature": "cat b b'-\u003ecat a' a-\u003ecat a b-\u003ecat a' b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": ":*:",
          "package": "functor-combo",
          "signature": "(f a) :*: (g a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":*:",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": ":*:!",
          "package": "functor-combo",
          "signature": "(f a) :*:! !(g a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2A%3A%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": ":*:!",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v::-42-:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "Const",
          "package": "functor-combo",
          "signature": "Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Const",
          "package": "functor-combo",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "Id",
          "package": "functor-combo",
          "signature": "Id a",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Id",
          "package": "functor-combo",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "InL",
          "package": "functor-combo",
          "signature": "InL (f a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "InL",
          "package": "functor-combo",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:InL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "InL'",
          "package": "functor-combo",
          "signature": "InL' !(f a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "InL'",
          "package": "functor-combo",
          "partial": "In L'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:InL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "InR",
          "package": "functor-combo",
          "signature": "InR (g a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "InR",
          "package": "functor-combo",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:InR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "InR'",
          "package": "functor-combo",
          "signature": "InR' !(g a)",
          "source": "src/FunctorCombo-Functor.html#%3A%2B%3A%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "InR'",
          "package": "functor-combo",
          "partial": "In R'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:InR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "Lift",
          "package": "functor-combo",
          "signature": "Lift",
          "source": "src/FunctorCombo-Functor.html#Lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "Lift",
          "package": "functor-combo",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "O",
          "package": "functor-combo",
          "signature": "O (g (f a))",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "O",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "asPair",
          "package": "functor-combo",
          "signature": "(f :*: g) a -\u003e (f a, g a)",
          "source": "src/FunctorCombo-Functor.html#asPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "asPair",
          "normalized": "(a*b)c-\u003e(a c,b c)",
          "package": "functor-combo",
          "partial": "Pair",
          "signature": "(f*g)a-\u003e(f a,g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:asPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "asProd",
          "package": "functor-combo",
          "signature": "(f a, g a) -\u003e (f :*: g) a",
          "source": "src/FunctorCombo-Functor.html#asProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "asProd",
          "normalized": "(a b,c b)-\u003e(a*c)b",
          "package": "functor-combo",
          "partial": "Prod",
          "signature": "(f a,g a)-\u003e(f*g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:asProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "decode",
          "package": "functor-combo",
          "signature": "Enc f a -\u003e f a",
          "source": "src/FunctorCombo-Functor.html#decode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "decode",
          "normalized": "Enc a b-\u003ea b",
          "package": "functor-combo",
          "signature": "Enc f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "eitherF",
          "package": "functor-combo",
          "signature": "(f a -\u003e b) -\u003e (g a -\u003e b) -\u003e (f :+: g) a -\u003e b",
          "source": "src/FunctorCombo-Functor.html#eitherF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "eitherF",
          "normalized": "(a b-\u003ec)-\u003e(d b-\u003ec)-\u003e(a d)b-\u003ec",
          "package": "functor-combo",
          "signature": "(f a-\u003eb)-\u003e(g a-\u003eb)-\u003e(f g)a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:eitherF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis on strict sum functor\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "eitherF'",
          "package": "functor-combo",
          "signature": "(f a -\u003e c) -\u003e (g a -\u003e c) -\u003e (f :+:! g) a -\u003e c",
          "source": "src/FunctorCombo-Functor.html#eitherF%27",
          "type": "function"
        },
        "index": {
          "description": "Case analysis on strict sum functor",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "eitherF'",
          "normalized": "(a b-\u003ec)-\u003e(d b-\u003ec)-\u003e(a d)b-\u003ec",
          "package": "functor-combo",
          "partial": "F'",
          "signature": "(f a-\u003ec)-\u003e(g a-\u003ec)-\u003e(f g)a-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:eitherF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "encode",
          "package": "functor-combo",
          "signature": "f a -\u003e Enc f a",
          "source": "src/FunctorCombo-Functor.html#encode",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "encode",
          "normalized": "a b-\u003eEnc a b",
          "package": "functor-combo",
          "signature": "f a-\u003eEnc f a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "fstF",
          "package": "functor-combo",
          "signature": "(f :*: g) a -\u003e f a",
          "source": "src/FunctorCombo-Functor.html#fstF",
          "type": "function"
        },
        "index": {
          "description": "Like fst",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "fstF",
          "normalized": "(a*b)c-\u003ea c",
          "package": "functor-combo",
          "signature": "(f*g)a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:fstF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "getConst",
          "package": "functor-combo",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "getConst",
          "package": "functor-combo",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:getConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "inId",
          "package": "functor-combo",
          "signature": "(a -\u003e b) -\u003e Id a -\u003e Id b",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inId",
          "normalized": "(a-\u003eb)-\u003eId a-\u003eId b",
          "package": "functor-combo",
          "partial": "Id",
          "signature": "(a-\u003eb)-\u003eId a-\u003eId b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "inId2",
          "package": "functor-combo",
          "signature": "(a -\u003e b -\u003e c) -\u003e Id a -\u003e Id b -\u003e Id c",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inId2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c",
          "package": "functor-combo",
          "partial": "Id",
          "signature": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inId2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a unary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "inO",
          "package": "functor-combo",
          "signature": "(g (f a) -\u003e g' (f' a')) -\u003e :. g f a -\u003e :. g' f' a'",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function within the constructor",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inO",
          "normalized": "(a(b c)-\u003ed(e f))-\u003ea b c-\u003ed e f",
          "package": "functor-combo",
          "signature": "(g(f a)-\u003eg'(f' a'))-\u003eg f a-\u003eg' f' a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a binary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "inO2",
          "package": "functor-combo",
          "signature": "(g (f a) -\u003e g' (f' a') -\u003e g'' (f'' a'')) -\u003e :. g f a -\u003e :. g' f' a' -\u003e :. g'' f'' a''",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function within the constructor",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inO2",
          "normalized": "(a(b c)-\u003ed(e f)-\u003eg(h i))-\u003ea b c-\u003ed e f-\u003eg h i",
          "package": "functor-combo",
          "signature": "(g(f a)-\u003eg'(f' a')-\u003eg''(f'' a''))-\u003eg f a-\u003eg' f' a'-\u003eg'' f'' a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inO2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "inProd",
          "package": "functor-combo",
          "signature": "((f a, g a) -\u003e (h b, i b)) -\u003e (f :*: g) a -\u003e (h :*: i) b",
          "source": "src/FunctorCombo-Functor.html#inProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inProd",
          "normalized": "((a b,c b)-\u003e(d e,f e))-\u003e(a*c)b-\u003e(d*f)e",
          "package": "functor-combo",
          "partial": "Prod",
          "signature": "((f a,g a)-\u003e(h b,i b))-\u003e(f*g)a-\u003e(h*i)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "inProd2",
          "package": "functor-combo",
          "signature": "((f a, g a) -\u003e (h b, i b) -\u003e (j c, k c)) -\u003e (f :*: g) a -\u003e (h :*: i) b -\u003e (j :*: k) c",
          "source": "src/FunctorCombo-Functor.html#inProd2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "inProd2",
          "normalized": "((a b,c b)-\u003e(d e,f e)-\u003e(g h,i h))-\u003e(a*c)b-\u003e(d*f)e-\u003e(g*i)h",
          "package": "functor-combo",
          "partial": "Prod",
          "signature": "((f a,g a)-\u003e(h b,i b)-\u003e(j c,k c))-\u003e(f*g)a-\u003e(h*i)b-\u003e(j*k)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:inProd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "pairF",
          "package": "functor-combo",
          "signature": "(f a, g a) -\u003e (f :*: g) a",
          "source": "src/FunctorCombo-Functor.html#pairF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "pairF",
          "normalized": "(a b,c b)-\u003e(a*c)b",
          "package": "functor-combo",
          "signature": "(f a,g a)-\u003e(f*g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:pairF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "sndF",
          "package": "functor-combo",
          "signature": "(f :*: g) a -\u003e g a",
          "source": "src/FunctorCombo-Functor.html#sndF",
          "type": "function"
        },
        "index": {
          "description": "Like snd",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "sndF",
          "normalized": "(a*b)c-\u003eb c",
          "package": "functor-combo",
          "signature": "(f*g)a-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:sndF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "unId",
          "package": "functor-combo",
          "signature": "Id a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "unId",
          "normalized": "Id a-\u003ea",
          "package": "functor-combo",
          "partial": "Id",
          "signature": "Id a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:unId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "unLift",
          "package": "functor-combo",
          "signature": "a",
          "source": "src/FunctorCombo-Functor.html#Lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "unLift",
          "package": "functor-combo",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:unLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a '(:.)'.\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "unO",
          "package": "functor-combo",
          "signature": ":. g f a -\u003e g (f a)",
          "type": "function"
        },
        "index": {
          "description": "Unwrap",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "unO",
          "normalized": "a b c-\u003ea(b c)",
          "package": "functor-combo",
          "signature": "g f a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:unO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "unPairF",
          "package": "functor-combo",
          "signature": "(f :*: g) a -\u003e (f a, g a)",
          "source": "src/FunctorCombo-Functor.html#unPairF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "unPairF",
          "normalized": "(a*b)c-\u003e(a c,b c)",
          "package": "functor-combo",
          "partial": "Pair",
          "signature": "(f*g)a-\u003e(f a,g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:unPairF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit value\n\u003c/p\u003e",
          "module": "FunctorCombo.Functor",
          "name": "unit",
          "package": "functor-combo",
          "signature": "Unit ()",
          "source": "src/FunctorCombo-Functor.html#unit",
          "type": "function"
        },
        "index": {
          "description": "The unit value",
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "unit",
          "normalized": "Unit()",
          "package": "functor-combo",
          "signature": "Unit()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Functor",
          "name": "voidF",
          "package": "functor-combo",
          "signature": "Void a -\u003e b",
          "source": "src/FunctorCombo-Functor.html#voidF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Functor",
          "module": "FunctorCombo.Functor",
          "name": "voidF",
          "normalized": "Void a-\u003eb",
          "package": "functor-combo",
          "signature": "Void a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Functor.html#v:voidF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFilling and extracting derivatives (one-hole contexts)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Holey",
          "name": "Holey",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Holey.html",
          "type": "module"
        },
        "index": {
          "description": "Filling and extracting derivatives one-hole contexts",
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "Holey",
          "package": "functor-combo",
          "partial": "Holey",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilling and creating one-hole contexts\n\u003c/p\u003e",
          "module": "FunctorCombo.Holey",
          "name": "Holey",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Holey.html#Holey",
          "type": "class"
        },
        "index": {
          "description": "Filling and creating one-hole contexts",
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "Holey",
          "package": "functor-combo",
          "partial": "Holey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#t:Holey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation, i.e., one-hole context and a value for the hole.\n\u003c/p\u003e",
          "module": "FunctorCombo.Holey",
          "name": "Loc",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Holey.html#Loc",
          "type": "type"
        },
        "index": {
          "description": "Location i.e one-hole context and value for the hole",
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "Loc",
          "package": "functor-combo",
          "partial": "Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Holey",
          "name": "extract",
          "package": "functor-combo",
          "signature": "extract",
          "source": "src/FunctorCombo-Holey.html#extract",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "extract",
          "package": "functor-combo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative interface for \u003ccode\u003e\u003ca\u003efillC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FunctorCombo.Holey",
          "name": "fill",
          "package": "functor-combo",
          "signature": "Loc f a -\u003e f a",
          "source": "src/FunctorCombo-Holey.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Alternative interface for fillC",
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "fill",
          "normalized": "Loc a b-\u003ea b",
          "package": "functor-combo",
          "signature": "Loc f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Holey",
          "name": "fillC",
          "package": "functor-combo",
          "signature": "fillC",
          "source": "src/FunctorCombo-Holey.html#fillC",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Holey",
          "module": "FunctorCombo.Holey",
          "name": "fillC",
          "package": "functor-combo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Holey.html#v:fillC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeast upper bounds for functor combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.LubF",
          "name": "LubF",
          "package": "functor-combo",
          "source": "src/FunctorCombo-LubF.html",
          "type": "module"
        },
        "index": {
          "description": "Least upper bounds for functor combinators",
          "hierarchy": "FunctorCombo LubF",
          "module": "FunctorCombo.LubF",
          "name": "LubF",
          "package": "functor-combo",
          "partial": "Lub",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-LubF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.LubF",
          "name": "HasLubF",
          "package": "functor-combo",
          "source": "src/FunctorCombo-LubF.html#HasLubF",
          "type": "class"
        },
        "index": {
          "hierarchy": "FunctorCombo LubF",
          "module": "FunctorCombo.LubF",
          "name": "HasLubF",
          "package": "functor-combo",
          "partial": "Has Lub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-LubF.html#t:HasLubF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctor-based memo tries.  See\n \u003ca\u003ehttp://conal.net/blog/posts/details-for-nonstrict-memoization-part-1/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "NonstrictMemo",
          "package": "functor-combo",
          "source": "src/FunctorCombo-NonstrictMemo.html",
          "type": "module"
        },
        "index": {
          "description": "Functor-based memo tries See http conal.net blog posts details-for-nonstrict-memoization-part-1",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "NonstrictMemo",
          "package": "functor-combo",
          "partial": "Nonstrict Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.NonstrictMemo",
          "name": ":-\u003e:",
          "package": "functor-combo",
          "source": "src/FunctorCombo-NonstrictMemo.html#%3A-%3E%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": ":-\u003e:",
          "package": "functor-combo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#t::-45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain types with associated memo tries\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "HasTrie",
          "package": "functor-combo",
          "source": "src/FunctorCombo-NonstrictMemo.html#HasTrie",
          "type": "class"
        },
        "index": {
          "description": "Domain types with associated memo tries",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "HasTrie",
          "package": "functor-combo",
          "partial": "Has Trie",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#t:HasTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrie-based function memoizer\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo",
          "package": "functor-combo",
          "signature": "Unop (k -\u003e v)",
          "source": "src/FunctorCombo-NonstrictMemo.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Trie-based function memoizer",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo",
          "normalized": "Unop(a-\u003eb)",
          "package": "functor-combo",
          "signature": "Unop(k-\u003ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a binary function, on its first argument and then on its\n second.  Take care to exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo2",
          "package": "functor-combo",
          "signature": "Unop (s -\u003e t -\u003e a)",
          "source": "src/FunctorCombo-NonstrictMemo.html#memo2",
          "type": "function"
        },
        "index": {
          "description": "Memoize binary function on its first argument and then on its second Take care to exploit any partial evaluation",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo2",
          "normalized": "Unop(a-\u003eb-\u003ec)",
          "package": "functor-combo",
          "signature": "Unop(s-\u003et-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#v:memo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a ternary function on successive arguments.  Take care to\n exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo3",
          "package": "functor-combo",
          "signature": "Unop (r -\u003e s -\u003e t -\u003e a)",
          "source": "src/FunctorCombo-NonstrictMemo.html#memo3",
          "type": "function"
        },
        "index": {
          "description": "Memoize ternary function on successive arguments Take care to exploit any partial evaluation",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "memo3",
          "normalized": "Unop(a-\u003eb-\u003ec-\u003ed)",
          "package": "functor-combo",
          "signature": "Unop(r-\u003es-\u003et-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#v:memo3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the trie for the entire domain of a function\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "sTrie",
          "package": "functor-combo",
          "signature": "(k -\u003e v) -\u003e k :-\u003e v",
          "source": "src/FunctorCombo-NonstrictMemo.html#sTrie",
          "type": "method"
        },
        "index": {
          "description": "Create the trie for the entire domain of function",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "sTrie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "functor-combo",
          "partial": "Trie",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#v:sTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert k trie to k function, i.e., access k field of the trie\n\u003c/p\u003e",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "sUntrie",
          "package": "functor-combo",
          "signature": "(k :-\u003e v) -\u003e k -\u003e v",
          "source": "src/FunctorCombo-NonstrictMemo.html#sUntrie",
          "type": "method"
        },
        "index": {
          "description": "Convert trie to function i.e access field of the trie",
          "hierarchy": "FunctorCombo NonstrictMemo",
          "module": "FunctorCombo.NonstrictMemo",
          "name": "sUntrie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "functor-combo",
          "partial": "Untrie",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-NonstrictMemo.html#v:sUntrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePair functor\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Pair",
          "name": "Pair",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Pair.html",
          "type": "module"
        },
        "index": {
          "description": "Pair functor",
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "Pair",
          "package": "functor-combo",
          "partial": "Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform pairs\n\u003c/p\u003e",
          "module": "FunctorCombo.Pair",
          "name": "Pair",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Pair.html#Pair",
          "type": "data"
        },
        "index": {
          "description": "Uniform pairs",
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "Pair",
          "package": "functor-combo",
          "partial": "Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": ":#",
          "package": "functor-combo",
          "signature": "a :# a",
          "source": "src/FunctorCombo-Pair.html#Pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": ":#",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v::-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "curryP",
          "package": "functor-combo",
          "signature": "(Pair a -\u003e b) -\u003e a -\u003e a -\u003e b",
          "source": "src/FunctorCombo-Pair.html#curryP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "curryP",
          "normalized": "(Pair a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "functor-combo",
          "signature": "(Pair a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:curryP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "firstP",
          "package": "functor-combo",
          "signature": "Unop a -\u003e Unop (Pair a)",
          "source": "src/FunctorCombo-Pair.html#firstP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "firstP",
          "normalized": "Unop a-\u003eUnop(Pair a)",
          "package": "functor-combo",
          "signature": "Unop a-\u003eUnop(Pair a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:firstP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "fromP",
          "package": "functor-combo",
          "signature": "Pair a -\u003e (a, a)",
          "source": "src/FunctorCombo-Pair.html#fromP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "fromP",
          "normalized": "Pair a-\u003e(a,a)",
          "package": "functor-combo",
          "signature": "Pair a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:fromP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "fstP",
          "package": "functor-combo",
          "signature": "Pair a -\u003e a",
          "source": "src/FunctorCombo-Pair.html#fstP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "fstP",
          "normalized": "Pair a-\u003ea",
          "package": "functor-combo",
          "signature": "Pair a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:fstP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "inP",
          "package": "functor-combo",
          "signature": "Unop (a, a) -\u003e Unop (Pair a)",
          "source": "src/FunctorCombo-Pair.html#inP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "inP",
          "normalized": "Unop(a,a)-\u003eUnop(Pair a)",
          "package": "functor-combo",
          "signature": "Unop(a,a)-\u003eUnop(Pair a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:inP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "inZipA",
          "package": "functor-combo",
          "signature": "Unop (f (Pair a)) -\u003e Unop (Pair (f a))",
          "source": "src/FunctorCombo-Pair.html#inZipA",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "inZipA",
          "normalized": "Unop(a(Pair b))-\u003eUnop(Pair(a b))",
          "package": "functor-combo",
          "partial": "Zip",
          "signature": "Unop(f(Pair a))-\u003eUnop(Pair(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:inZipA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "preScanP",
          "package": "functor-combo",
          "signature": "Pair (f o, o) -\u003e (Pair (f o), o)",
          "source": "src/FunctorCombo-Pair.html#preScanP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "preScanP",
          "normalized": "Pair(a b,b)-\u003e(Pair(a b),b)",
          "package": "functor-combo",
          "partial": "Scan",
          "signature": "Pair(f o,o)-\u003e(Pair(f o),o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:preScanP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "secondP",
          "package": "functor-combo",
          "signature": "Unop a -\u003e Unop (Pair a)",
          "source": "src/FunctorCombo-Pair.html#secondP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "secondP",
          "normalized": "Unop a-\u003eUnop(Pair a)",
          "package": "functor-combo",
          "signature": "Unop a-\u003eUnop(Pair a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:secondP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "sndP",
          "package": "functor-combo",
          "signature": "Pair a -\u003e a",
          "source": "src/FunctorCombo-Pair.html#sndP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "sndP",
          "normalized": "Pair a-\u003ea",
          "package": "functor-combo",
          "signature": "Pair a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:sndP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "sufScanP",
          "package": "functor-combo",
          "signature": "Pair (o, f o) -\u003e (o, Pair (f o))",
          "source": "src/FunctorCombo-Pair.html#sufScanP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "sufScanP",
          "normalized": "Pair(a,b a)-\u003e(a,Pair(b a))",
          "package": "functor-combo",
          "partial": "Scan",
          "signature": "Pair(o,f o)-\u003e(o,Pair(f o))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:sufScanP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "swapP",
          "package": "functor-combo",
          "signature": "Unop (Pair a)",
          "source": "src/FunctorCombo-Pair.html#swapP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "swapP",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:swapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "toP",
          "package": "functor-combo",
          "signature": "(a, a) -\u003e Pair a",
          "source": "src/FunctorCombo-Pair.html#toP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "toP",
          "normalized": "(a,a)-\u003ePair a",
          "package": "functor-combo",
          "signature": "(a,a)-\u003ePair a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:toP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "uncurryP",
          "package": "functor-combo",
          "signature": "(a -\u003e a -\u003e b) -\u003e Pair a -\u003e b",
          "source": "src/FunctorCombo-Pair.html#uncurryP",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "uncurryP",
          "normalized": "(a-\u003ea-\u003eb)-\u003ePair a-\u003eb",
          "package": "functor-combo",
          "signature": "(a-\u003ea-\u003eb)-\u003ePair a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:uncurryP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "unzipA",
          "package": "functor-combo",
          "signature": "f (Pair a) -\u003e Pair (f a)",
          "source": "src/FunctorCombo-Pair.html#unzipA",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "unzipA",
          "normalized": "a(Pair b)-\u003ePair(a b)",
          "package": "functor-combo",
          "signature": "f(Pair a)-\u003ePair(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:unzipA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Pair",
          "name": "zipA",
          "package": "functor-combo",
          "signature": "Pair (f a) -\u003e f (Pair a)",
          "source": "src/FunctorCombo-Pair.html#zipA",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Pair",
          "module": "FunctorCombo.Pair",
          "name": "zipA",
          "normalized": "Pair(a b)-\u003ea(Pair b)",
          "package": "functor-combo",
          "signature": "Pair(f a)-\u003ef(Pair a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Pair.html#v:zipA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposable parallel scanning from\n \u003ca\u003ehttp://conal.net/blog/posts/composable-parallel-scanning/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.ParScan",
          "name": "ParScan",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ParScan.html",
          "type": "module"
        },
        "index": {
          "description": "Composable parallel scanning from http conal.net blog posts composable-parallel-scanning",
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "ParScan",
          "package": "functor-combo",
          "partial": "Par Scan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "PreScanO",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ParScan.html#PreScanO",
          "type": "type"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "PreScanO",
          "package": "functor-combo",
          "partial": "Pre Scan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#t:PreScanO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel scans. \u003ccode\u003e\u003ca\u003eprefixScan\u003c/a\u003e\u003c/code\u003e accumulates moving left-to-right, while\n \u003ccode\u003e\u003ca\u003esuffixScan\u003c/a\u003e\u003c/code\u003e accumulates moving right-to-left.\n\u003c/p\u003e",
          "module": "FunctorCombo.ParScan",
          "name": "Scan",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ParScan.html#Scan",
          "type": "class"
        },
        "index": {
          "description": "Parallel scans prefixScan accumulates moving left-to-right while suffixScan accumulates moving right-to-left",
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "Scan",
          "package": "functor-combo",
          "partial": "Scan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#t:Scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "SufScanO",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ParScan.html#SufScanO",
          "type": "type"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "SufScanO",
          "package": "functor-combo",
          "partial": "Suf Scan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#t:SufScanO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "preScanTweak",
          "package": "functor-combo",
          "signature": "(a -\u003e b) -\u003e PreScanO f a -\u003e PreScanO f b",
          "source": "src/FunctorCombo-ParScan.html#preScanTweak",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "preScanTweak",
          "normalized": "(a-\u003eb)-\u003ePreScanO c a-\u003ePreScanO c b",
          "package": "functor-combo",
          "partial": "Scan Tweak",
          "signature": "(a-\u003eb)-\u003ePreScanO f a-\u003ePreScanO f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:preScanTweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "prefixScan",
          "package": "functor-combo",
          "signature": "f m -\u003e PreScanO f m",
          "source": "src/FunctorCombo-ParScan.html#prefixScan",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "prefixScan",
          "normalized": "a b-\u003ePreScanO a b",
          "package": "functor-combo",
          "partial": "Scan",
          "signature": "f m-\u003ePreScanO f m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:prefixScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "prefixScanEnc",
          "package": "functor-combo",
          "signature": "f m -\u003e PreScanO f m",
          "source": "src/FunctorCombo-ParScan.html#prefixScanEnc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "prefixScanEnc",
          "normalized": "a b-\u003ePreScanO a b",
          "package": "functor-combo",
          "partial": "Scan Enc",
          "signature": "f m-\u003ePreScanO f m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:prefixScanEnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "prefixSums",
          "package": "functor-combo",
          "signature": "f a -\u003e PreScanO f a",
          "source": "src/FunctorCombo-ParScan.html#prefixSums",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "prefixSums",
          "normalized": "a b-\u003ePreScanO a b",
          "package": "functor-combo",
          "partial": "Sums",
          "signature": "f a-\u003ePreScanO f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:prefixSums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "sufScanTweak",
          "package": "functor-combo",
          "signature": "(a -\u003e b) -\u003e SufScanO f a -\u003e SufScanO f b",
          "source": "src/FunctorCombo-ParScan.html#sufScanTweak",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "sufScanTweak",
          "normalized": "(a-\u003eb)-\u003eSufScanO c a-\u003eSufScanO c b",
          "package": "functor-combo",
          "partial": "Scan Tweak",
          "signature": "(a-\u003eb)-\u003eSufScanO f a-\u003eSufScanO f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:sufScanTweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "suffixScan",
          "package": "functor-combo",
          "signature": "f m -\u003e SufScanO f m",
          "source": "src/FunctorCombo-ParScan.html#suffixScan",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "suffixScan",
          "normalized": "a b-\u003eSufScanO a b",
          "package": "functor-combo",
          "partial": "Scan",
          "signature": "f m-\u003eSufScanO f m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:suffixScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "suffixScanEnc",
          "package": "functor-combo",
          "signature": "f m -\u003e SufScanO f m",
          "source": "src/FunctorCombo-ParScan.html#suffixScanEnc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "suffixScanEnc",
          "normalized": "a b-\u003eSufScanO a b",
          "package": "functor-combo",
          "partial": "Scan Enc",
          "signature": "f m-\u003eSufScanO f m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:suffixScanEnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ParScan",
          "name": "suffixSums",
          "package": "functor-combo",
          "signature": "f a -\u003e SufScanO f a",
          "source": "src/FunctorCombo-ParScan.html#suffixSums",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ParScan",
          "module": "FunctorCombo.ParScan",
          "name": "suffixSums",
          "normalized": "a b-\u003eSufScanO a b",
          "package": "functor-combo",
          "partial": "Sums",
          "signature": "f a-\u003eSufScanO f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ParScan.html#v:suffixSums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegular data types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Regular",
          "name": "Regular",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Regular.html",
          "type": "module"
        },
        "index": {
          "description": "Regular data types",
          "hierarchy": "FunctorCombo Regular",
          "module": "FunctorCombo.Regular",
          "name": "Regular",
          "package": "functor-combo",
          "partial": "Regular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Regular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Regular",
          "name": "Regular",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Regular.html#Regular",
          "type": "class"
        },
        "index": {
          "hierarchy": "FunctorCombo Regular",
          "module": "FunctorCombo.Regular",
          "name": "Regular",
          "package": "functor-combo",
          "partial": "Regular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Regular.html#t:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Regular",
          "name": "unwrap",
          "package": "functor-combo",
          "signature": "t -\u003e PF t t",
          "source": "src/FunctorCombo-Regular.html#unwrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Regular",
          "module": "FunctorCombo.Regular",
          "name": "unwrap",
          "normalized": "a-\u003ePF a a",
          "package": "functor-combo",
          "signature": "t-\u003ePF t t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Regular.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Regular",
          "name": "wrap",
          "package": "functor-combo",
          "signature": "PF t t -\u003e t",
          "source": "src/FunctorCombo-Regular.html#wrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "FunctorCombo Regular",
          "module": "FunctorCombo.Regular",
          "name": "wrap",
          "normalized": "PF a a-\u003ea",
          "package": "functor-combo",
          "signature": "PF t t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Regular.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict products and sums.Strict\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.Strict",
          "name": "Strict",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict products and sums.Strict",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "Strict",
          "package": "functor-combo",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict pair\n\u003c/p\u003e",
          "module": "FunctorCombo.Strict",
          "name": ":*!",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Strict.html#%3A%2A%21",
          "type": "data"
        },
        "index": {
          "description": "Strict pair",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": ":*!",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#t::-42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict sum\n\u003c/p\u003e",
          "module": "FunctorCombo.Strict",
          "name": ":+!",
          "package": "functor-combo",
          "source": "src/FunctorCombo-Strict.html#%3A%2B%21",
          "type": "data"
        },
        "index": {
          "description": "Strict sum",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": ":+!",
          "package": "functor-combo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#t::-43--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Strict",
          "name": ":*!",
          "package": "functor-combo",
          "signature": "a :*! !b",
          "source": "src/FunctorCombo-Strict.html#%3A%2A%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": ":*!",
          "package": "functor-combo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v::-42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Strict",
          "name": "Left'",
          "package": "functor-combo",
          "signature": "Left' !a",
          "source": "src/FunctorCombo-Strict.html#%3A%2B%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "Left'",
          "package": "functor-combo",
          "partial": "Left'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v:Left-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.Strict",
          "name": "Right'",
          "package": "functor-combo",
          "signature": "Right' !b",
          "source": "src/FunctorCombo-Strict.html#%3A%2B%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "Right'",
          "package": "functor-combo",
          "partial": "Right'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v:Right-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurry on strict pairs\n\u003c/p\u003e",
          "module": "FunctorCombo.Strict",
          "name": "curry'",
          "package": "functor-combo",
          "signature": "((a :*! b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/FunctorCombo-Strict.html#curry%27",
          "type": "function"
        },
        "index": {
          "description": "Curry on strict pairs",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "curry'",
          "normalized": "((a*b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "functor-combo",
          "signature": "((a*b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v:curry-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for strict sums.  Like \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FunctorCombo.Strict",
          "name": "either'",
          "package": "functor-combo",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e (a :+! b) -\u003e c",
          "source": "src/FunctorCombo-Strict.html#either%27",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for strict sums Like either",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "either'",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a c)-\u003eb",
          "package": "functor-combo",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v:either-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncurry on strict pairs\n\u003c/p\u003e",
          "module": "FunctorCombo.Strict",
          "name": "uncurry'",
          "package": "functor-combo",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a :*! b) -\u003e c",
          "source": "src/FunctorCombo-Strict.html#uncurry%27",
          "type": "function"
        },
        "index": {
          "description": "Uncurry on strict pairs",
          "hierarchy": "FunctorCombo Strict",
          "module": "FunctorCombo.Strict",
          "name": "uncurry'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a*b)-\u003ec",
          "package": "functor-combo",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a*b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-Strict.html#v:uncurry-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctor-based memo tries (strict for now)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "StrictMemo",
          "package": "functor-combo",
          "source": "src/FunctorCombo-StrictMemo.html",
          "type": "module"
        },
        "index": {
          "description": "Functor-based memo tries strict for now",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "StrictMemo",
          "package": "functor-combo",
          "partial": "Strict Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemo trie from k to v\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": ":-\u003e:",
          "package": "functor-combo",
          "source": "src/FunctorCombo-StrictMemo.html#%3A-%3E%3A",
          "type": "type"
        },
        "index": {
          "description": "Memo trie from to",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": ":-\u003e:",
          "package": "functor-combo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#t::-45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain types with associated memo tries\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "HasTrie",
          "package": "functor-combo",
          "source": "src/FunctorCombo-StrictMemo.html#HasTrie",
          "type": "class"
        },
        "index": {
          "description": "Domain types with associated memo tries",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "HasTrie",
          "package": "functor-combo",
          "partial": "Has Trie",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#t:HasTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "TrieTree",
          "package": "functor-combo",
          "source": "src/FunctorCombo-StrictMemo.html#TrieTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "TrieTree",
          "package": "functor-combo",
          "partial": "Trie Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#t:TrieTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexing. Synonym for \u003ccode\u003e\u003ca\u003euntrie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "(!)",
          "package": "functor-combo",
          "signature": "(k :-\u003e: v) -\u003e k -\u003e v",
          "source": "src/FunctorCombo-StrictMemo.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Indexing Synonym for untrie",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "(!) !",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "functor-combo",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "B",
          "package": "functor-combo",
          "signature": "(k :-\u003e: TrieTree n k a) -\u003e TrieTree (S n) k a",
          "source": "src/FunctorCombo-StrictMemo.html#TrieTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "B",
          "normalized": "(a-\u003eTrieTree b a c)-\u003eTrieTree(S b)a c",
          "package": "functor-combo",
          "signature": "(k-\u003eTrieTree n k a)-\u003eTrieTree(S n)k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "L",
          "package": "functor-combo",
          "signature": "a -\u003e TrieTree Z k a",
          "source": "src/FunctorCombo-StrictMemo.html#TrieTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "L",
          "normalized": "a-\u003eTrieTree Z b a",
          "package": "functor-combo",
          "signature": "a-\u003eTrieTree Z k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "idTrie",
          "package": "functor-combo",
          "signature": "k :-\u003e: k",
          "source": "src/FunctorCombo-StrictMemo.html#idTrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "idTrie",
          "normalized": "a-\u003ea",
          "package": "functor-combo",
          "partial": "Trie",
          "signature": "k-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:idTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrie-based function memoizer\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo",
          "package": "functor-combo",
          "signature": "Unop (k -\u003e v)",
          "source": "src/FunctorCombo-StrictMemo.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Trie-based function memoizer",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo",
          "normalized": "Unop(a-\u003eb)",
          "package": "functor-combo",
          "signature": "Unop(k-\u003ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a binary function, on its first argument and then on its\n second.  Take care to exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo2",
          "package": "functor-combo",
          "signature": "Unop (s -\u003e t -\u003e a)",
          "source": "src/FunctorCombo-StrictMemo.html#memo2",
          "type": "function"
        },
        "index": {
          "description": "Memoize binary function on its first argument and then on its second Take care to exploit any partial evaluation",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo2",
          "normalized": "Unop(a-\u003eb-\u003ec)",
          "package": "functor-combo",
          "signature": "Unop(s-\u003et-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:memo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a ternary function on successive arguments.  Take care to\n exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo3",
          "package": "functor-combo",
          "signature": "Unop (r -\u003e s -\u003e t -\u003e a)",
          "source": "src/FunctorCombo-StrictMemo.html#memo3",
          "type": "function"
        },
        "index": {
          "description": "Memoize ternary function on successive arguments Take care to exploit any partial evaluation",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "memo3",
          "normalized": "Unop(a-\u003eb-\u003ec-\u003ed)",
          "package": "functor-combo",
          "signature": "Unop(r-\u003es-\u003et-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:memo3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "onUntrie",
          "package": "functor-combo",
          "signature": "((a -\u003e a') -\u003e b -\u003e b') -\u003e (a :-\u003e: a') -\u003e b :-\u003e: b'",
          "source": "src/FunctorCombo-StrictMemo.html#onUntrie",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "onUntrie",
          "normalized": "((a-\u003eb)-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003ec-\u003ed",
          "package": "functor-combo",
          "partial": "Untrie",
          "signature": "((a-\u003ea')-\u003eb-\u003eb')-\u003e(a-\u003ea')-\u003eb-\u003eb'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:onUntrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.StrictMemo",
          "name": "onUntrie2",
          "package": "functor-combo",
          "signature": "((a -\u003e a') -\u003e (b -\u003e b') -\u003e c -\u003e c') -\u003e (a :-\u003e: a') -\u003e (b :-\u003e: b') -\u003e c :-\u003e: c'",
          "source": "src/FunctorCombo-StrictMemo.html#onUntrie2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "onUntrie2",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef",
          "package": "functor-combo",
          "partial": "Untrie",
          "signature": "((a-\u003ea')-\u003e(b-\u003eb')-\u003ec-\u003ec')-\u003e(a-\u003ea')-\u003e(b-\u003eb')-\u003ec-\u003ec'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:onUntrie2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the trie for the entire domain of a function\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "trie",
          "package": "functor-combo",
          "signature": "(k -\u003e v) -\u003e k :-\u003e: v",
          "source": "src/FunctorCombo-StrictMemo.html#trie",
          "type": "method"
        },
        "index": {
          "description": "Create the trie for the entire domain of function",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "trie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "functor-combo",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:trie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert k trie to k function, i.e., access k field of the trie\n\u003c/p\u003e",
          "module": "FunctorCombo.StrictMemo",
          "name": "untrie",
          "package": "functor-combo",
          "signature": "(k :-\u003e: v) -\u003e k -\u003e v",
          "source": "src/FunctorCombo-StrictMemo.html#untrie",
          "type": "method"
        },
        "index": {
          "description": "Convert trie to function i.e access field of the trie",
          "hierarchy": "FunctorCombo StrictMemo",
          "module": "FunctorCombo.StrictMemo",
          "name": "untrie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "functor-combo",
          "signature": "(k-\u003ev)-\u003ek-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-StrictMemo.html#v:untrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZippers for functor fixpoints\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FunctorCombo.ZipperFix",
          "name": "ZipperFix",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperFix.html",
          "type": "module"
        },
        "index": {
          "description": "Zippers for functor fixpoints",
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "ZipperFix",
          "package": "functor-combo",
          "partial": "Zipper Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for functor fixpoints\n\u003c/p\u003e\u003cp\u003eContext for a regular type\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperFix",
          "name": "Context",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperFix.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Context for functor fixpoints Context for regular type",
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "Context",
          "package": "functor-combo",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipper for a functor tree.  Also called \"location\"\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperFix",
          "name": "Zipper",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperFix.html#Zipper",
          "type": "type"
        },
        "index": {
          "description": "Zipper for functor tree Also called location",
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "Zipper",
          "package": "functor-combo",
          "partial": "Zipper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ZipperFix",
          "name": "down",
          "package": "functor-combo",
          "signature": "Zipper f -\u003e f (Zipper f)",
          "source": "src/FunctorCombo-ZipperFix.html#down",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "down",
          "normalized": "Zipper a-\u003ea(Zipper a)",
          "package": "functor-combo",
          "signature": "Zipper f-\u003ef(Zipper f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove upward.  Error if empty context.\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperFix",
          "name": "up",
          "package": "functor-combo",
          "signature": "Zipper f -\u003e Zipper f",
          "source": "src/FunctorCombo-ZipperFix.html#up",
          "type": "function"
        },
        "index": {
          "description": "Move upward Error if empty context",
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "up",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "functor-combo",
          "signature": "Zipper f-\u003eZipper f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eup\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if empty context.\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperFix",
          "name": "up'",
          "package": "functor-combo",
          "signature": "Zipper f -\u003e Maybe (Zipper f)",
          "source": "src/FunctorCombo-ZipperFix.html#up%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of up Nothing if empty context",
          "hierarchy": "FunctorCombo ZipperFix",
          "module": "FunctorCombo.ZipperFix",
          "name": "up'",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "functor-combo",
          "signature": "Zipper f-\u003eMaybe(Zipper f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperFix.html#v:up-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ZipperReg",
          "name": "ZipperReg",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperReg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "ZipperReg",
          "package": "functor-combo",
          "partial": "Zipper Reg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for a regular type\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperReg",
          "name": "Context",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperReg.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Context for regular type",
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "Context",
          "package": "functor-combo",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipper for a regular type.  Also called \"location\"\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperReg",
          "name": "Zipper",
          "package": "functor-combo",
          "source": "src/FunctorCombo-ZipperReg.html#Zipper",
          "type": "type"
        },
        "index": {
          "description": "Zipper for regular type Also called location",
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "Zipper",
          "package": "functor-combo",
          "partial": "Zipper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FunctorCombo.ZipperReg",
          "name": "down",
          "package": "functor-combo",
          "signature": "Zipper t -\u003e PF t (Zipper t)",
          "source": "src/FunctorCombo-ZipperReg.html#down",
          "type": "function"
        },
        "index": {
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "down",
          "normalized": "Zipper a-\u003ePF a(Zipper a)",
          "package": "functor-combo",
          "signature": "Zipper t-\u003ePF t(Zipper t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove upward.  Error if empty context.\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperReg",
          "name": "up",
          "package": "functor-combo",
          "signature": "Zipper t -\u003e Zipper t",
          "source": "src/FunctorCombo-ZipperReg.html#up",
          "type": "function"
        },
        "index": {
          "description": "Move upward Error if empty context",
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "up",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "functor-combo",
          "signature": "Zipper t-\u003eZipper t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eup\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if empty context.\n\u003c/p\u003e",
          "module": "FunctorCombo.ZipperReg",
          "name": "up'",
          "package": "functor-combo",
          "signature": "Zipper t -\u003e Maybe (Zipper t)",
          "source": "src/FunctorCombo-ZipperReg.html#up%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of up Nothing if empty context",
          "hierarchy": "FunctorCombo ZipperReg",
          "module": "FunctorCombo.ZipperReg",
          "name": "up'",
          "normalized": "Zipper a-\u003eMaybe(Zipper a)",
          "package": "functor-combo",
          "signature": "Zipper t-\u003eMaybe(Zipper t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/functor-combo/docs/FunctorCombo-ZipperReg.html#v:up-39-"
      }
    }
  ]
]