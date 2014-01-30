[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious type constructor compositions and instances for them.\n Some come from \n \"Applicative Programming with Effects\"\n \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/Applicative.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Control-Compose.html",
        "fct-type": "module",
        "title": "Compose"
      },
      "index": {
        "description": "Various type constructor compositions and instances for them Some come from Applicative Programming with Effects http www.soi.city.ac.uk ross papers Applicative.html",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Compose",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-36-",
      "description": {
        "fct-descr": "\u003cp\u003eType application\n We can also drop the \u003ccode\u003eApp\u003c/code\u003e constructor, but then we overlap with many\n other instances, like \u003ccode\u003e[a]\u003c/code\u003e.  Here's a template for \u003ccode\u003eApp\u003c/code\u003e-free\n instances.\n\u003c/p\u003e\u003cpre\u003e    instance (Applicative f, Monoid a) =\u003e Monoid (f a) where\n      mempty  = pure mempty\n      mappend = liftA2 mappend\n\u003c/pre\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#%3A%24",
        "fct-type": "newtype",
        "title": ":$"
      },
      "index": {
        "description": "Type application We can also drop the App constructor but then we overlap with many other instances like Here template for App free instances instance Applicative Monoid Monoid where mempty pure mempty mappend liftA2 mappend",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": ":$",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-42-:",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of unary type constructors\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#%3A%2A%3A",
        "fct-type": "newtype",
        "title": ":*:"
      },
      "index": {
        "description": "Pairing of unary type constructors",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": ":*:",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-45--62-:",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#%3A-%3E%3A",
        "fct-type": "type",
        "title": ":-\u003e:"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": ":-\u003e:",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eComposition of unary type constructors\n\u003c/p\u003e\u003cp\u003eThere are (at least) two useful \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances, so you'll have to\npick one and type-specialize it (filling in all or parts of \u003ccode\u003eg\u003c/code\u003e and/or \u003ccode\u003ef\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e     -- standard Monoid instance for Applicative applied to Monoid\n     instance (Applicative (g :. f), Monoid a) =\u003e Monoid ((g :. f) a) where\n       { mempty = pure mempty; mappend = liftA2 mappend }\n     -- Especially handy when g is a Monoid_f.\n     instance Monoid (g (f a)) =\u003e Monoid ((g :. f) a) where\n       { mempty = O mempty; mappend = inO2 mappend }\n\u003c/pre\u003e\u003cp\u003eCorresponding to the first and second definitions above,\n\u003c/p\u003e\u003cpre\u003e     instance (Applicative g, Monoid_f f) =\u003e Monoid_f (g :. f) where\n       { mempty_f = O (pure mempty_f); mappend_f = inO2 (liftA2 mappend_f) }\n     instance Monoid_f g =\u003e Monoid_f (g :. f) where\n       { mempty_f = O mempty_f; mappend_f = inO2 mappend_f }\n\u003c/pre\u003e\u003cp\u003eSimilarly, there are two useful \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instances and two useful\n\u003ccode\u003e\u003ca\u003eContraFunctor\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cpre\u003e     instance (      Functor g,       Functor f) =\u003e Functor (g :. f) where fmap = fmapFF\n     instance (ContraFunctor g, ContraFunctor f) =\u003e Functor (g :. f) where fmap = fmapCC\n \n     instance (      Functor g, ContraFunctor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapFC\n     instance (ContraFunctor g,       Functor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapCF\n\u003c/pre\u003e\u003cp\u003eHowever, it's such a bother to define the Functor instances per\ncomposition type, I've left the fmapFF case in.  If you want the fmapCC\none, you're out of luck for now.  I'd love to hear a good solution.  Maybe\nsomeday Haskell will do Prolog-style search for instances, subgoaling the\nconstraints, rather than just matching instance heads.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#%3A.",
        "fct-type": "newtype",
        "title": ":."
      },
      "index": {
        "description": "Composition of unary type constructors There are at least two useful Monoid instances so you ll have to pick one and type-specialize it filling in all or parts of and or standard Monoid instance for Applicative applied to Monoid instance Applicative Monoid Monoid where mempty pure mempty mappend liftA2 mappend Especially handy when is Monoid instance Monoid Monoid where mempty mempty mappend inO2 mappend Corresponding to the first and second definitions above instance Applicative Monoid Monoid where mempty pure mempty mappend inO2 liftA2 mappend instance Monoid Monoid where mempty mempty mappend inO2 mappend Similarly there are two useful Functor instances and two useful ContraFunctor instances instance Functor Functor Functor where fmap fmapFF instance ContraFunctor ContraFunctor Functor where fmap fmapCC instance Functor ContraFunctor ContraFunctor where contraFmap contraFmapFC instance ContraFunctor Functor ContraFunctor where contraFmap contraFmapCF However it such bother to define the Functor instances per composition type ve left the fmapFF case in If you want the fmapCC one you re out of luck for now love to hear good solution Maybe someday Haskell will do Prolog-style search for instances subgoaling the constraints rather than just matching instance heads",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": ":.",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:::-42-::",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of binary type constructors\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
        "fct-type": "newtype",
        "title": "::*::"
      },
      "index": {
        "description": "Pairing of binary type constructors",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "::*::",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:App",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility synonym for (:$).\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#App",
        "fct-type": "type",
        "title": "App"
      },
      "index": {
        "description": "Compatibility synonym for",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "App",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Arrw",
      "description": {
        "fct-descr": "\u003cp\u003eArrow-like type between type constructors (doesn't enforce \u003ccode\u003eArrow\n (~\u003e)\u003c/code\u003e here).\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#Arrw",
        "fct-type": "newtype",
        "title": "Arrw"
      },
      "index": {
        "description": "Arrow-like type between type constructors doesn enforce Arrow here",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Arrw",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Binop",
      "description": {
        "fct-descr": "\u003cp\u003eBinary functions\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#Binop",
        "fct-type": "type",
        "title": "Binop"
      },
      "index": {
        "description": "Binary functions",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Binop",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Binop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:ContraFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eContravariant functors.  often useful for \u003cem\u003eacceptors\u003c/em\u003e (consumers,\n sinks) of values.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Control-Compose.html#ContraFunctor",
        "fct-type": "class",
        "title": "ContraFunctor"
      },
      "index": {
        "description": "Contravariant functors often useful for acceptors consumers sinks of values",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "ContraFunctor",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Contra Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:DistribM",
      "description": {
        "fct-descr": "\u003cp\u003eMonad distributivity.\n\u003c/p\u003e\u003cp\u003eTODO: what conditions are required so that \u003ccode\u003e(m :. n)\u003c/code\u003e satisfies the monad laws?\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Control-Compose.html#DistribM",
        "fct-type": "class",
        "title": "DistribM"
      },
      "index": {
        "description": "Monad distributivity TODO what conditions are required so that satisfies the monad laws",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "DistribM",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Distrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Flip",
      "description": {
        "fct-descr": "\u003cp\u003eFlip type arguments\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#Flip",
        "fct-type": "newtype",
        "title": "Flip"
      },
      "index": {
        "description": "Flip type arguments",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Flip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:FunA",
      "description": {
        "fct-descr": "\u003cp\u003eCommon pattern for \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#FunA",
        "fct-type": "newtype",
        "title": "FunA"
      },
      "index": {
        "description": "Common pattern for Arrow",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "FunA",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:FunAble",
      "description": {
        "fct-descr": "\u003cp\u003eSupport needed for a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e to be an \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Control-Compose.html#FunAble",
        "fct-type": "class",
        "title": "FunAble"
      },
      "index": {
        "description": "Support needed for FunA to be an Arrow",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "FunAble",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Fun Able",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity type constructor.  Until there's a better place to find it.\n I'd use \u003ca\u003eControl.Monad.Identity\u003c/a\u003e, but I don't want to introduce a\n dependency on mtl just for Id.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#Id",
        "fct-type": "newtype",
        "title": "Id"
      },
      "index": {
        "description": "Identity type constructor Until there better place to find it use Control.Monad.Identity but don want to introduce dependency on mtl just for Id",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Id",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Monoid_f",
      "description": {
        "fct-descr": "\u003cp\u003eSimulates universal constraint \u003ccode\u003eforall a. Monoid (f a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee Simulating Quantified Class Constraints\n (\u003ca\u003ehttp://flint.cs.yale.edu/trifonov/papers/sqcc.pdf\u003c/a\u003e)\n  Instantiate this schema wherever necessary:\n\u003c/p\u003e\u003cpre\u003e    instance Monoid_f f where { mempty_f = mempty ; mappend_f = mappend }\n\u003c/pre\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Control-Compose.html#Monoid_f",
        "fct-type": "class",
        "title": "Monoid_f"
      },
      "index": {
        "description": "Simulates universal constraint forall Monoid See Simulating Quantified Class Constraints http flint.cs.yale.edu trifonov papers sqcc.pdf Instantiate this schema wherever necessary instance Monoid where mempty mempty mappend mappend",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Monoid_f",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:O",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility synonym\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#O",
        "fct-type": "type",
        "title": "O"
      },
      "index": {
        "description": "Compatibility synonym",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "O",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:OI",
      "description": {
        "fct-descr": "\u003cp\u003e(-\u003e IO ()) as a \u003ccode\u003e\u003ca\u003eFlip\u003c/a\u003e\u003c/code\u003e.  A ContraFunctor.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#OI",
        "fct-type": "type",
        "title": "OI"
      },
      "index": {
        "description": "IO as Flip ContraFunctor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "OI",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "OI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:OO",
      "description": {
        "fct-descr": "\u003cp\u003eComposition of type constructors: unary with binary.  Called\n \u003ca\u003eStaticArrow\u003c/a\u003e in [1].\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Compose.html#OO",
        "fct-type": "newtype",
        "title": "OO"
      },
      "index": {
        "description": "Composition of type constructors unary with binary Called StaticArrow in",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "OO",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "OO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:ToOI",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eOI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Control-Compose.html#ToOI",
        "fct-type": "class",
        "title": "ToOI"
      },
      "index": {
        "description": "Convert to an OI",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "ToOI",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "To OI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Unop",
      "description": {
        "fct-descr": "\u003cp\u003eUnary functions\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Control-Compose.html#Unop",
        "fct-type": "type",
        "title": "Unop"
      },
      "index": {
        "description": "Unary functions",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Unop",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd pre- and post processing\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a' `cat` a) -\u003e (b `cat` b') -\u003e (a `cat` b) -\u003e a' `cat` b'",
        "fct-source": "src/Control-Compose.html#~%3E",
        "fct-type": "function",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "Add pre and post processing",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(~\u003e) ~\u003e",
        "normalized": "(a b c)-\u003e(d b e)-\u003e(c b d)-\u003ea b e",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a' cat a)-\u003e(b cat b')-\u003e(a cat b)-\u003ea' cat b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-126--62--42-",
      "description": {
        "fct-descr": "\u003cp\u003eLike '(~\u003e)' but specialized to functors and functions.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a' -\u003e a) -\u003e (b -\u003e b') -\u003e (p a -\u003e q b) -\u003e p a' -\u003e q b'",
        "fct-source": "src/Control-Compose.html#~%3E%2A",
        "fct-type": "function",
        "title": "(~\u003e*)"
      },
      "index": {
        "description": "Like but specialized to functors and functions",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(~\u003e*) ~\u003e*",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e b-\u003ef c)-\u003ee a-\u003ef d",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a'-\u003ea)-\u003e(b-\u003eb')-\u003e(p a-\u003eq b)-\u003ep a'-\u003eq b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-36--42-",
      "description": {
        "fct-descr": "\u003cp\u003eA handy combining form.  See '(***#)' for an sample use.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b, a' -\u003e b') -\u003e (a, a') -\u003e (b, b')",
        "fct-source": "src/Control-Compose.html#%24%2A",
        "fct-type": "function",
        "title": "($*)"
      },
      "index": {
        "description": "handy combining form See for an sample use",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "($*) $*",
        "normalized": "(a-\u003eb,c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a-\u003eb,a'-\u003eb')-\u003e(a,a')-\u003e(b,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-38--38--38--37-",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(h a -\u003e h b) -\u003e (h a -\u003e h b') -\u003e h a -\u003e h (b, b')",
        "fct-source": "src/Control-Compose.html#%26%26%26%25",
        "fct-type": "method",
        "title": "(&&&%)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(&&&%) &&&%",
        "normalized": "(a b-\u003ea c)-\u003e(a b-\u003ea d)-\u003ea b-\u003ea(c,d)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(h a-\u003eh b)-\u003e(h a-\u003eh b')-\u003eh a-\u003eh(b,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--42--42--35-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two binary functions into a binary function on pairs\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (a' -\u003e b' -\u003e c') -\u003e (a, a') -\u003e (b, b') -\u003e (c, c')",
        "fct-source": "src/Control-Compose.html#%2A%2A%2A%23",
        "fct-type": "function",
        "title": "(***#)"
      },
      "index": {
        "description": "Combine two binary functions into binary function on pairs",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(***#) ***#",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ef)-\u003e(a,d)-\u003e(b,e)-\u003e(c,f)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(a'-\u003eb'-\u003ec')-\u003e(a,a')-\u003e(b,b')-\u003e(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--42--42--37-",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(h a -\u003e h b) -\u003e (h a' -\u003e h b') -\u003e h (a, a') -\u003e h (b, b')",
        "fct-source": "src/Control-Compose.html#%2A%2A%2A%25",
        "fct-type": "method",
        "title": "(***%)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(***%) ***%",
        "normalized": "(a b-\u003ea c)-\u003e(a d-\u003ea e)-\u003ea(b,d)-\u003ea(c,e)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(h a-\u003eh b)-\u003e(h a'-\u003eh b')-\u003eh(a,a')-\u003eh(b,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--60--126-",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b -\u003e b') -\u003e (a' -\u003e a) -\u003e (p a -\u003e q b) -\u003e p a' -\u003e q b'",
        "fct-source": "src/Control-Compose.html#%2A%3C~",
        "fct-type": "function",
        "title": "(*\u003c~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(*\u003c~) *\u003c~",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e d-\u003ef a)-\u003ee c-\u003ef b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(b-\u003eb')-\u003e(a'-\u003ea)-\u003e(p a-\u003eq b)-\u003ep a'-\u003eq b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42-:-42-",
      "description": {
        "fct-descr": "\u003cp\u003eHandy infix & curried \u003ccode\u003e\u003ca\u003eProd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f a -\u003e g a -\u003e (f :*: g) a",
        "fct-source": "src/Control-Compose.html#%2A%3A%2A",
        "fct-type": "function",
        "title": "(*:*)"
      },
      "index": {
        "description": "Handy infix curried Prod",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(*:*) *:*",
        "normalized": "a b-\u003ec b-\u003e(a*c)b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "f a-\u003eg a-\u003e(f*g)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42-::-42-",
      "description": {
        "fct-descr": "\u003cp\u003eHandy infix & curried \u003ccode\u003e\u003ca\u003eProdd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "g) a b",
        "fct-source": "src/Control-Compose.html#%2A%3A%3A%2A",
        "fct-type": "function",
        "title": "(*::*)"
      },
      "index": {
        "description": "Handy infix curried Prodd",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(*::*) *::*",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-60--126-",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b `cat` b') -\u003e (a' `cat` a) -\u003e (a `cat` b) -\u003e a' `cat` b'",
        "fct-source": "src/Control-Compose.html#%3C~",
        "fct-type": "function",
        "title": "(\u003c~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "(\u003c~) \u003c~",
        "normalized": "(a b c)-\u003e(d b e)-\u003e(e b a)-\u003ed b c",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(b cat b')-\u003e(a' cat a)-\u003e(a cat b)-\u003ea' cat b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:App",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "App",
        "fct-source": "src/Control-Compose.html#%3A%24",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "App",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Arrw",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Arrw",
        "fct-source": "src/Control-Compose.html#Arrw",
        "fct-type": "function",
        "title": "Arrw"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Arrw",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Flip",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Flip",
        "fct-source": "src/Control-Compose.html#Flip",
        "fct-type": "function",
        "title": "Flip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Flip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:FunA",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "FunA",
        "fct-source": "src/Control-Compose.html#FunA",
        "fct-type": "function",
        "title": "FunA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "FunA",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Id",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Id a",
        "fct-source": "src/Control-Compose.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Id",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:O",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "O (g (f a))",
        "fct-source": "src/Control-Compose.html#%3A.",
        "fct-type": "function",
        "title": "O"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "O",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:OO",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "OO",
        "fct-source": "src/Control-Compose.html#OO",
        "fct-type": "function",
        "title": "OO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "OO",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "OO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Prod",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Prod",
        "fct-source": "src/Control-Compose.html#%3A%2A%3A",
        "fct-type": "function",
        "title": "Prod"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Prod",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Prodd",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Prodd",
        "fct-source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
        "fct-type": "function",
        "title": "Prodd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "Prodd",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Prodd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:argument",
      "description": {
        "fct-descr": "\u003cp\u003eAdd pre-processing\n argument :: (a' -\u003e a) -\u003e ((a -\u003e b) -\u003e (a' -\u003e b))\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a' `cat` a) -\u003e (a `cat` b) -\u003e a' `cat` b",
        "fct-source": "src/Control-Compose.html#argument",
        "fct-type": "function",
        "title": "argument"
      },
      "index": {
        "description": "Add pre-processing argument",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "argument",
        "normalized": "(a b c)-\u003e(c b d)-\u003ea b d",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a' cat a)-\u003e(a cat b)-\u003ea' cat b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:arrFun",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "arrFun",
        "fct-source": "src/Control-Compose.html#arrFun",
        "fct-type": "method",
        "title": "arrFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "arrFun",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biApp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f a :\u003c-\u003e: App f a",
        "fct-source": "src/Control-Compose.html#biApp",
        "fct-type": "function",
        "title": "biApp"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biApp",
        "normalized": "a b-\u003eApp a b",
        "package": "TypeCompose",
        "partial": "App",
        "signature": "f a-\u003eApp f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biConst",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "a :\u003c-\u003e: Const a b",
        "fct-source": "src/Control-Compose.html#biConst",
        "fct-type": "function",
        "title": "biConst"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biConst",
        "normalized": "a-\u003eConst a b",
        "package": "TypeCompose",
        "partial": "Const",
        "signature": "a-\u003eConst a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biEndo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e a) :\u003c-\u003e: Endo a",
        "fct-source": "src/Control-Compose.html#biEndo",
        "fct-type": "function",
        "title": "biEndo"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biEndo",
        "normalized": "(a-\u003ea)-\u003eEndo a",
        "package": "TypeCompose",
        "partial": "Endo",
        "signature": "(a-\u003ea)-\u003eEndo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biFlip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a `j` b) :\u003c-\u003e: Flip j b a",
        "fct-source": "src/Control-Compose.html#biFlip",
        "fct-type": "function",
        "title": "biFlip"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biFlip",
        "normalized": "(a b c)-\u003eFlip b c a",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": "(a j b)-\u003eFlip j b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biFun",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e g a) :\u003c-\u003e: (f :-\u003e: g) a",
        "fct-source": "src/Control-Compose.html#biFun",
        "fct-type": "function",
        "title": "biFun"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biFun",
        "normalized": "(a b-\u003ec b)-\u003e(a-\u003ec)b",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "(f a-\u003eg a)-\u003e(f-\u003eg)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "a :\u003c-\u003e: Id a",
        "fct-source": "src/Control-Compose.html#biId",
        "fct-type": "function",
        "title": "biId"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biId",
        "normalized": "a-\u003eId a",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": "a-\u003eId a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "g (f a) :\u003c-\u003e: (g :. f) a",
        "fct-source": "src/Control-Compose.html#biO",
        "fct-type": "function",
        "title": "biO"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biO",
        "normalized": "a(b c)-\u003e(a b)c",
        "package": "TypeCompose",
        "partial": "",
        "signature": "g(f a)-\u003e(g f)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biProd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a, g a) :\u003c-\u003e: (f :*: g) a",
        "fct-source": "src/Control-Compose.html#biProd",
        "fct-type": "function",
        "title": "biProd"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "biProd",
        "normalized": "(a b,c b)-\u003e(a*c)b",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "(f a,g a)-\u003e(f*g)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:bicomap",
      "description": {
        "fct-descr": "\u003cp\u003eBijections on contravariant functors\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a :\u003c-\u003e: b) -\u003e f a :\u003c-\u003e: f b",
        "fct-source": "src/Control-Compose.html#bicomap",
        "fct-type": "function",
        "title": "bicomap"
      },
      "index": {
        "description": "Bijections on contravariant functors",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "bicomap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:bindDistribM",
      "description": {
        "fct-descr": "\u003cp\u003eA candidate '(\u003e\u003e=)' for \u003ccode\u003e(m :. n)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(m :. n) a -\u003e (a -\u003e (m :. n) b) -\u003e (m :. n) b",
        "fct-source": "src/Control-Compose.html#bindDistribM",
        "fct-type": "function",
        "title": "bindDistribM"
      },
      "index": {
        "description": "candidate for",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "bindDistribM",
        "normalized": "(a b)c-\u003e(c-\u003e(a b)d)-\u003e(a b)d",
        "package": "TypeCompose",
        "partial": "Distrib",
        "signature": "(m n)a-\u003e(a-\u003e(m n)b)-\u003e(m n)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:coconvO",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a bijection, ContraFunctor style\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b :\u003c-\u003e: g c) -\u003e (c :\u003c-\u003e: f a) -\u003e b :\u003c-\u003e: (g :. f) a",
        "fct-source": "src/Control-Compose.html#coconvO",
        "fct-type": "function",
        "title": "coconvO"
      },
      "index": {
        "description": "Compose bijection ContraFunctor style",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "coconvO",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003ed e)-\u003ea-\u003e(b d)e",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(b-\u003eg c)-\u003e(c-\u003ef a)-\u003eb-\u003e(g f)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmap",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b) -\u003e h b -\u003e h a",
        "fct-source": "src/Control-Compose.html#contraFmap",
        "fct-type": "method",
        "title": "contraFmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "contraFmap",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "TypeCompose",
        "partial": "Fmap",
        "signature": "(a-\u003eb)-\u003eh b-\u003eh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmapCF",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for the \u003ccode\u003eContraFunctor :. Functor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b -\u003e a) -\u003e (g :. f) a -\u003e (g :. f) b",
        "fct-source": "src/Control-Compose.html#contraFmapCF",
        "fct-type": "function",
        "title": "contraFmapCF"
      },
      "index": {
        "description": "Used for the ContraFunctor Functor instance of Functor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "contraFmapCF",
        "normalized": "(a-\u003eb)-\u003e(c d)b-\u003e(c d)a",
        "package": "TypeCompose",
        "partial": "Fmap CF",
        "signature": "(b-\u003ea)-\u003e(g f)a-\u003e(g f)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmapFC",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for the \u003ccode\u003eFunctor :. ContraFunctor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b -\u003e a) -\u003e (g :. f) a -\u003e (g :. f) b",
        "fct-source": "src/Control-Compose.html#contraFmapFC",
        "fct-type": "function",
        "title": "contraFmapFC"
      },
      "index": {
        "description": "Used for the Functor ContraFunctor instance of Functor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "contraFmapFC",
        "normalized": "(a-\u003eb)-\u003e(c d)b-\u003e(c d)a",
        "package": "TypeCompose",
        "partial": "Fmap FC",
        "signature": "(b-\u003ea)-\u003e(g f)a-\u003e(g f)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convFun",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b :\u003c-\u003e: f a) -\u003e (c :\u003c-\u003e: g a) -\u003e (b -\u003e c) :\u003c-\u003e: (f :-\u003e: g) a",
        "fct-source": "src/Control-Compose.html#convFun",
        "fct-type": "function",
        "title": "convFun"
      },
      "index": {
        "description": "Compose bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "convFun",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003ee c)-\u003e(a-\u003ed)-\u003e(b-\u003ee)c",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "(b-\u003ef a)-\u003e(c-\u003eg a)-\u003e(b-\u003ec)-\u003e(f-\u003eg)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convO",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a bijection, Functor style\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b :\u003c-\u003e: g c) -\u003e (c :\u003c-\u003e: f a) -\u003e b :\u003c-\u003e: (g :. f) a",
        "fct-source": "src/Control-Compose.html#convO",
        "fct-type": "function",
        "title": "convO"
      },
      "index": {
        "description": "Compose bijection Functor style",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "convO",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003ed e)-\u003ea-\u003e(b d)e",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(b-\u003eg c)-\u003e(c-\u003ef a)-\u003eb-\u003e(g f)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convProd",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a bijection\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b :\u003c-\u003e: f a) -\u003e (c :\u003c-\u003e: g a) -\u003e (b, c) :\u003c-\u003e: (f :*: g) a",
        "fct-source": "src/Control-Compose.html#convProd",
        "fct-type": "function",
        "title": "convProd"
      },
      "index": {
        "description": "Compose bijection",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "convProd",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003ee c)-\u003e(a,d)-\u003e(b*e)c",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "(b-\u003ef a)-\u003e(c-\u003eg a)-\u003e(b,c)-\u003e(f*g)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:distribM",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "n (m a) -\u003e m (n a)",
        "fct-source": "src/Control-Compose.html#distribM",
        "fct-type": "method",
        "title": "distribM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "distribM",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "n(m a)-\u003em(n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:firstFun",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(h a -\u003e h a') -\u003e h (a, b) -\u003e h (a', b)",
        "fct-source": "src/Control-Compose.html#firstFun",
        "fct-type": "method",
        "title": "firstFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "firstFun",
        "normalized": "(a b-\u003ea c)-\u003ea(b,d)-\u003ea(c,d)",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "(h a-\u003eh a')-\u003eh(a,b)-\u003eh(a',b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:fmapCC",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for the \u003ccode\u003eContraFunctor :. ContraFunctor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b) -\u003e (g :. f) a -\u003e (g :. f) b",
        "fct-source": "src/Control-Compose.html#fmapCC",
        "fct-type": "function",
        "title": "fmapCC"
      },
      "index": {
        "description": "Used for the ContraFunctor ContraFunctor instance of Functor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "fmapCC",
        "normalized": "(a-\u003eb)-\u003e(c d)a-\u003e(c d)b",
        "package": "TypeCompose",
        "partial": "CC",
        "signature": "(a-\u003eb)-\u003e(g f)a-\u003e(g f)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:fmapFF",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for the \u003ccode\u003eFunctor :. Functor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b) -\u003e (g :. f) a -\u003e (g :. f) b",
        "fct-source": "src/Control-Compose.html#fmapFF",
        "fct-type": "function",
        "title": "fmapFF"
      },
      "index": {
        "description": "Used for the Functor Functor instance of Functor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "fmapFF",
        "normalized": "(a-\u003eb)-\u003e(c d)a-\u003e(c d)b",
        "package": "TypeCompose",
        "partial": "FF",
        "signature": "(a-\u003eb)-\u003e(g f)a-\u003e(g f)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inApp",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e f' a') -\u003e App f a -\u003e App f' a'",
        "fct-source": "src/Control-Compose.html#inApp",
        "fct-type": "function",
        "title": "inApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inApp",
        "normalized": "(a b-\u003ec d)-\u003eApp a b-\u003eApp c d",
        "package": "TypeCompose",
        "partial": "App",
        "signature": "(f a-\u003ef' a')-\u003eApp f a-\u003eApp f' a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inApp2",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e f' a' -\u003e f'' a'') -\u003e App f a -\u003e App f' a' -\u003e App f'' a''",
        "fct-source": "src/Control-Compose.html#inApp2",
        "fct-type": "function",
        "title": "inApp2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inApp2",
        "normalized": "(a b-\u003ec d-\u003ee f)-\u003eApp a b-\u003eApp c d-\u003eApp e f",
        "package": "TypeCompose",
        "partial": "App",
        "signature": "(f a-\u003ef' a'-\u003ef'' a'')-\u003eApp f a-\u003eApp f' a'-\u003eApp f'' a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw",
      "description": {
        "fct-descr": "\u003cp\u003eApply unary function inside of \u003ccode\u003eArrw\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a `j` g a) -\u003e f' a' `j` g' a') -\u003e Arrw j f g a -\u003e Arrw j f' g' a'",
        "fct-source": "src/Control-Compose.html#inArrw",
        "fct-type": "function",
        "title": "inArrw"
      },
      "index": {
        "description": "Apply unary function inside of Arrw representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inArrw",
        "normalized": "((a b c d b)-\u003ee f c g f)-\u003eArrw c a d b-\u003eArrw c e g f",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": "((f a j g a)-\u003ef' a' j g' a')-\u003eArrw j f g a-\u003eArrw j f' g' a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw2",
      "description": {
        "fct-descr": "\u003cp\u003eApply binary function inside of \u003ccode\u003eArrw j f g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a `j` g a) -\u003e (f' a' `j` g' a') -\u003e f'' a'' `j` g'' a'') -\u003e Arrw j f g a -\u003e Arrw j f' g' a' -\u003e Arrw j f'' g'' a''",
        "fct-source": "src/Control-Compose.html#inArrw2",
        "fct-type": "function",
        "title": "inArrw2"
      },
      "index": {
        "description": "Apply binary function inside of Arrw representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inArrw2",
        "normalized": "((a b c d b)-\u003e(e f c g f)-\u003eh i c j i)-\u003eArrw c a d b-\u003eArrw c e g f-\u003eArrw c h j i",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": "((f a j g a)-\u003e(f' a' j g' a')-\u003ef'' a'' j g'' a'')-\u003eArrw j f g a-\u003eArrw j f' g' a'-\u003eArrw j f'' g'' a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw3",
      "description": {
        "fct-descr": "\u003cp\u003eApply ternary function inside of \u003ccode\u003eArrw j f g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a `j` g a) -\u003e (f' a' `j` g' a') -\u003e (f'' a'' `j` g'' a'') -\u003e f''' a''' `j` g''' a''') -\u003e Arrw j f g a -\u003e Arrw j f' g' a' -\u003e Arrw j f'' g'' a'' -\u003e Arrw j f''' g''' a'''",
        "fct-source": "src/Control-Compose.html#inArrw3",
        "fct-type": "function",
        "title": "inArrw3"
      },
      "index": {
        "description": "Apply ternary function inside of Arrw representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inArrw3",
        "normalized": "((a b c d b)-\u003e(e f c g f)-\u003e(h i c j i)-\u003ek l c m l)-\u003eArrw c a d b-\u003eArrw c e g f-\u003eArrw c h j i-\u003eArrw c k m l",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": "((f a j g a)-\u003e(f' a' j g' a')-\u003e(f'' a'' j g'' a'')-\u003ef''' a''' j g''' a''')-\u003eArrw j f g a-\u003eArrw j f' g' a'-\u003eArrw j f'' g'' a''-\u003eArrw j f''' g''' a'''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b) -\u003e Const a u -\u003e Const b v",
        "fct-source": "src/Control-Compose.html#inConst",
        "fct-type": "function",
        "title": "inConst"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inConst",
        "normalized": "(a-\u003eb)-\u003eConst a c-\u003eConst b d",
        "package": "TypeCompose",
        "partial": "Const",
        "signature": "(a-\u003eb)-\u003eConst a u-\u003eConst b v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst2",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Const a u -\u003e Const b v -\u003e Const c w",
        "fct-source": "src/Control-Compose.html#inConst2",
        "fct-type": "function",
        "title": "inConst2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inConst2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eConst a d-\u003eConst b e-\u003eConst c f",
        "package": "TypeCompose",
        "partial": "Const",
        "signature": "(a-\u003eb-\u003ec)-\u003eConst a u-\u003eConst b v-\u003eConst c w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst3",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Const a u -\u003e Const b v -\u003e Const c w -\u003e Const d x",
        "fct-source": "src/Control-Compose.html#inConst3",
        "fct-type": "function",
        "title": "inConst3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inConst3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eConst a e-\u003eConst b f-\u003eConst c g-\u003eConst d h",
        "package": "TypeCompose",
        "partial": "Const",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eConst a u-\u003eConst b v-\u003eConst c w-\u003eConst d x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inEndo",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience for partial-manipulating functions\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(Unop a -\u003e Unop a') -\u003e Endo a -\u003e Endo a'",
        "fct-source": "src/Control-Compose.html#inEndo",
        "fct-type": "function",
        "title": "inEndo"
      },
      "index": {
        "description": "Convenience for partial-manipulating functions",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inEndo",
        "normalized": "(Unop a-\u003eUnop b)-\u003eEndo a-\u003eEndo b",
        "package": "TypeCompose",
        "partial": "Endo",
        "signature": "(Unop a-\u003eUnop a')-\u003eEndo a-\u003eEndo a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((a `j` b) -\u003e a' `k` b') -\u003e Flip j b a -\u003e Flip k b' a'",
        "fct-source": "src/Control-Compose.html#inFlip",
        "fct-type": "function",
        "title": "inFlip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inFlip",
        "normalized": "((a b c)-\u003ed e f)-\u003eFlip b c a-\u003eFlip e f d",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": "((a j b)-\u003ea' k b')-\u003eFlip j b a-\u003eFlip k b' a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip2",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((a `j` b) -\u003e (a' `k` b') -\u003e a'' `l` b'') -\u003e Flip j b a -\u003e Flip k b' a' -\u003e Flip l b'' a''",
        "fct-source": "src/Control-Compose.html#inFlip2",
        "fct-type": "function",
        "title": "inFlip2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inFlip2",
        "normalized": "((a b c)-\u003e(d e f)-\u003eg h i)-\u003eFlip b c a-\u003eFlip e f d-\u003eFlip h i g",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": "((a j b)-\u003e(a' k b')-\u003ea'' l b'')-\u003eFlip j b a-\u003eFlip k b' a'-\u003eFlip l b'' a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip3",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((a `j` b) -\u003e (a' `k` b') -\u003e (a'' `l` b'') -\u003e a''' `m` b''') -\u003e Flip j b a -\u003e Flip k b' a' -\u003e Flip l b'' a'' -\u003e Flip m b''' a'''",
        "fct-source": "src/Control-Compose.html#inFlip3",
        "fct-type": "function",
        "title": "inFlip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inFlip3",
        "normalized": "((a b c)-\u003e(d e f)-\u003e(g h i)-\u003ej k l)-\u003eFlip b c a-\u003eFlip e f d-\u003eFlip h i g-\u003eFlip k l j",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": "((a j b)-\u003e(a' k b')-\u003e(a'' l b'')-\u003ea''' m b''')-\u003eFlip j b a-\u003eFlip k b' a'-\u003eFlip l b'' a''-\u003eFlip m b''' a'''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFunA",
      "description": {
        "fct-descr": "\u003cp\u003eApply unary function in side a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((h a -\u003e h b) -\u003e h' a' -\u003e h' b') -\u003e FunA h a b -\u003e FunA h' a' b'",
        "fct-source": "src/Control-Compose.html#inFunA",
        "fct-type": "function",
        "title": "inFunA"
      },
      "index": {
        "description": "Apply unary function in side FunA representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inFunA",
        "normalized": "((a b-\u003ea c)-\u003ed e-\u003ed f)-\u003eFunA a b c-\u003eFunA d e f",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "((h a-\u003eh b)-\u003eh' a'-\u003eh' b')-\u003eFunA h a b-\u003eFunA h' a' b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFunA2",
      "description": {
        "fct-descr": "\u003cp\u003eApply binary function in side a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((h a -\u003e h b) -\u003e (h' a' -\u003e h' b') -\u003e h'' a'' -\u003e h'' b'') -\u003e FunA h a b -\u003e FunA h' a' b' -\u003e FunA h'' a'' b''",
        "fct-source": "src/Control-Compose.html#inFunA2",
        "fct-type": "function",
        "title": "inFunA2"
      },
      "index": {
        "description": "Apply binary function in side FunA representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inFunA2",
        "normalized": "((a b-\u003ea c)-\u003e(d e-\u003ed f)-\u003eg h-\u003eg i)-\u003eFunA a b c-\u003eFunA d e f-\u003eFunA g h i",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "((h a-\u003eh b)-\u003e(h' a'-\u003eh' b')-\u003eh'' a''-\u003eh'' b'')-\u003eFunA h a b-\u003eFunA h' a' b'-\u003eFunA h'' a'' b''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inId",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b) -\u003e Id a -\u003e Id b",
        "fct-source": "src/Control-Compose.html#inId",
        "fct-type": "function",
        "title": "inId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inId",
        "normalized": "(a-\u003eb)-\u003eId a-\u003eId b",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": "(a-\u003eb)-\u003eId a-\u003eId b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inId2",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Id a -\u003e Id b -\u003e Id c",
        "fct-source": "src/Control-Compose.html#inId2",
        "fct-type": "function",
        "title": "inId2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inId2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO",
      "description": {
        "fct-descr": "\u003cp\u003eApply a unary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(g (f a) -\u003e g' (f' a')) -\u003e (g :. f) a -\u003e (g' :. f') a'",
        "fct-source": "src/Control-Compose.html#inO",
        "fct-type": "function",
        "title": "inO"
      },
      "index": {
        "description": "Apply unary function within the constructor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inO",
        "normalized": "(a(b c)-\u003ed(e f))-\u003e(a b)c-\u003e(d e)f",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(g(f a)-\u003eg'(f' a'))-\u003e(g f)a-\u003e(g' f')a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO2",
      "description": {
        "fct-descr": "\u003cp\u003eApply a binary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(g (f a) -\u003e g' (f' a') -\u003e g'' (f'' a'')) -\u003e (g :. f) a -\u003e (g' :. f') a' -\u003e (g'' :. f'') a''",
        "fct-source": "src/Control-Compose.html#inO2",
        "fct-type": "function",
        "title": "inO2"
      },
      "index": {
        "description": "Apply binary function within the constructor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inO2",
        "normalized": "(a(b c)-\u003ed(e f)-\u003eg(h i))-\u003e(a b)c-\u003e(d e)f-\u003e(g h)i",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(g(f a)-\u003eg'(f' a')-\u003eg''(f'' a''))-\u003e(g f)a-\u003e(g' f')a'-\u003e(g'' f'')a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO3",
      "description": {
        "fct-descr": "\u003cp\u003eApply a ternary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(g (f a) -\u003e g' (f' a') -\u003e g'' (f'' a'') -\u003e g''' (f''' a''')) -\u003e (g :. f) a -\u003e (g' :. f') a' -\u003e (g'' :. f'') a'' -\u003e (g''' :. f''') a'''",
        "fct-source": "src/Control-Compose.html#inO3",
        "fct-type": "function",
        "title": "inO3"
      },
      "index": {
        "description": "Apply ternary function within the constructor",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inO3",
        "normalized": "(a(b c)-\u003ed(e f)-\u003eg(h i)-\u003ej(k l))-\u003e(a b)c-\u003e(d e)f-\u003e(g h)i-\u003e(j k)l",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(g(f a)-\u003eg'(f' a')-\u003eg''(f'' a'')-\u003eg'''(f''' a'''))-\u003e(g f)a-\u003e(g' f')a'-\u003e(g'' f'')a''-\u003e(g''' f''')a'''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd",
      "description": {
        "fct-descr": "\u003cp\u003eApply unary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a, g a) -\u003e (f' a', g' a')) -\u003e (f :*: g) a -\u003e (f' :*: g') a'",
        "fct-source": "src/Control-Compose.html#inProd",
        "fct-type": "function",
        "title": "inProd"
      },
      "index": {
        "description": "Apply unary function inside of representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inProd",
        "normalized": "((a b,c b)-\u003e(d e,f e))-\u003e(a*c)b-\u003e(d*f)e",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "((f a,g a)-\u003e(f' a',g' a'))-\u003e(f*g)a-\u003e(f'*g')a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd2",
      "description": {
        "fct-descr": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a, g a) -\u003e (f' a', g' a') -\u003e (f'' a'', g'' a'')) -\u003e (f :*: g) a -\u003e (f' :*: g') a' -\u003e (f'' :*: g'') a''",
        "fct-source": "src/Control-Compose.html#inProd2",
        "fct-type": "function",
        "title": "inProd2"
      },
      "index": {
        "description": "Apply binary function inside of representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inProd2",
        "normalized": "((a b,c b)-\u003e(d e,f e)-\u003e(g h,i h))-\u003e(a*c)b-\u003e(d*f)e-\u003e(g*i)h",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "((f a,g a)-\u003e(f' a',g' a')-\u003e(f'' a'',g'' a''))-\u003e(f*g)a-\u003e(f'*g')a'-\u003e(f''*g'')a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd3",
      "description": {
        "fct-descr": "\u003cp\u003eApply ternary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "((f a, g a) -\u003e (f' a', g' a') -\u003e (f'' a'', g'' a'') -\u003e (f''' a''', g''' a''')) -\u003e (f :*: g) a -\u003e (f' :*: g') a' -\u003e (f'' :*: g'') a'' -\u003e (f''' :*: g''') a'''",
        "fct-source": "src/Control-Compose.html#inProd3",
        "fct-type": "function",
        "title": "inProd3"
      },
      "index": {
        "description": "Apply ternary function inside of representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inProd3",
        "normalized": "((a b,c b)-\u003e(d e,f e)-\u003e(g h,i h)-\u003e(j k,l k))-\u003e(a*c)b-\u003e(d*f)e-\u003e(g*i)h-\u003e(j*l)k",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "((f a,g a)-\u003e(f' a',g' a')-\u003e(f'' a'',g'' a'')-\u003e(f''' a''',g''' a'''))-\u003e(f*g)a-\u003e(f'*g')a'-\u003e(f''*g'')a''-\u003e(f'''*g''')a'''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProdd",
      "description": {
        "fct-descr": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "g') a' b'",
        "fct-source": "src/Control-Compose.html#inProdd",
        "fct-type": "function",
        "title": "inProdd"
      },
      "index": {
        "description": "Apply binary function inside of representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inProdd",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Prodd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProdd2",
      "description": {
        "fct-descr": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "g'') a'' b''",
        "fct-source": "src/Control-Compose.html#inProdd2",
        "fct-type": "function",
        "title": "inProdd2"
      },
      "index": {
        "description": "Apply binary function inside of representation",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "inProdd2",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Prodd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinComposeT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e-like function for explicitly composed monads\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(m :. n) ((m :. n) a) -\u003e (m :. n) a",
        "fct-source": "src/Control-Compose.html#joinComposeT",
        "fct-type": "function",
        "title": "joinComposeT"
      },
      "index": {
        "description": "join like function for explicitly composed monads",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "joinComposeT",
        "normalized": "(a b)((a b)c)-\u003e(a b)c",
        "package": "TypeCompose",
        "partial": "Compose",
        "signature": "(m n)((m n)a)-\u003e(m n)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinDistribM",
      "description": {
        "fct-descr": "\u003cp\u003eA candidate \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e(m :. n)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(m :. n) ((m :. n) a) -\u003e (m :. n) a",
        "fct-source": "src/Control-Compose.html#joinDistribM",
        "fct-type": "function",
        "title": "joinDistribM"
      },
      "index": {
        "description": "candidate join for",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "joinDistribM",
        "normalized": "(a b)((a b)c)-\u003e(a b)c",
        "package": "TypeCompose",
        "partial": "Distrib",
        "signature": "(m n)((m n)a)-\u003e(m n)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinMMT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e-like function for implicitly composed monads\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "m (n (m (n a))) -\u003e m (n a)",
        "fct-source": "src/Control-Compose.html#joinMMT",
        "fct-type": "function",
        "title": "joinMMT"
      },
      "index": {
        "description": "join like function for implicitly composed monads",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "joinMMT",
        "normalized": "a(b(a(b c)))-\u003ea(b c)",
        "package": "TypeCompose",
        "partial": "MMT",
        "signature": "m(n(m(n a)))-\u003em(n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:mappend_f",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "forall a.  m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Compose.html#mappend_f",
        "fct-type": "method",
        "title": "mappend_f"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "mappend_f",
        "normalized": "a b c d-\u003ec d-\u003ec d",
        "package": "TypeCompose",
        "partial": "",
        "signature": "forall a. m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:mempty_f",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "forall a.  m a",
        "fct-source": "src/Control-Compose.html#mempty_f",
        "fct-type": "method",
        "title": "mempty_f"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "mempty_f",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oFmap",
      "description": {
        "fct-descr": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e f' a') -\u003e (g' :. f) a -\u003e (g' :. f') a'",
        "fct-source": "src/Control-Compose.html#oFmap",
        "fct-type": "function",
        "title": "oFmap"
      },
      "index": {
        "description": "Handy combination of inO and fmap",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "oFmap",
        "normalized": "(a b-\u003ec d)-\u003e(e a)b-\u003e(e c)d",
        "package": "TypeCompose",
        "partial": "Fmap",
        "signature": "(f a-\u003ef' a')-\u003e(g' f)a-\u003e(g' f')a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oLiftA2",
      "description": {
        "fct-descr": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e f' a' -\u003e f'' a'') -\u003e (g'' :. f) a -\u003e (g'' :. f') a' -\u003e (g'' :. f'') a''",
        "fct-source": "src/Control-Compose.html#oLiftA2",
        "fct-type": "function",
        "title": "oLiftA2"
      },
      "index": {
        "description": "Handy combination of inO2 and liftA2",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "oLiftA2",
        "normalized": "(a b-\u003ec d-\u003ee f)-\u003e(g a)b-\u003e(g c)d-\u003e(g e)f",
        "package": "TypeCompose",
        "partial": "Lift",
        "signature": "(f a-\u003ef' a'-\u003ef'' a'')-\u003e(g'' f)a-\u003e(g'' f')a'-\u003e(g'' f'')a''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oLiftA3",
      "description": {
        "fct-descr": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftA3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a -\u003e f' a' -\u003e f'' a'' -\u003e f''' a''') -\u003e (g''' :. f) a -\u003e (g''' :. f') a' -\u003e (g''' :. f'') a'' -\u003e (g''' :. f''') a'''",
        "fct-source": "src/Control-Compose.html#oLiftA3",
        "fct-type": "function",
        "title": "oLiftA3"
      },
      "index": {
        "description": "Handy combination of inO3 and liftA3",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "oLiftA3",
        "normalized": "(a b-\u003ec d-\u003ee f-\u003eg h)-\u003e(i a)b-\u003e(i c)d-\u003e(i e)f-\u003e(i g)h",
        "package": "TypeCompose",
        "partial": "Lift",
        "signature": "(f a-\u003ef' a'-\u003ef'' a''-\u003ef''' a''')-\u003e(g''' f)a-\u003e(g''' f')a'-\u003e(g''' f'')a''-\u003e(g''' f''')a'''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oPure",
      "description": {
        "fct-descr": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f a -\u003e (g :. f) a",
        "fct-source": "src/Control-Compose.html#oPure",
        "fct-type": "function",
        "title": "oPure"
      },
      "index": {
        "description": "Handy combination of and pure",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "oPure",
        "normalized": "a b-\u003e(c a)b",
        "package": "TypeCompose",
        "partial": "Pure",
        "signature": "f a-\u003e(g f)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eAdd post-processing\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(b `cat` b') -\u003e (a `cat` b) -\u003e a `cat` b'",
        "fct-source": "src/Control-Compose.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Add post-processing",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "result",
        "normalized": "(a b c)-\u003e(d b a)-\u003ed b c",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(b cat b')-\u003e(a cat b)-\u003ea cat b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:returnDistribM",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "a -\u003e (m :. n) a",
        "fct-source": "src/Control-Compose.html#returnDistribM",
        "fct-type": "function",
        "title": "returnDistribM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "returnDistribM",
        "normalized": "a-\u003e(b c)a",
        "package": "TypeCompose",
        "partial": "Distrib",
        "signature": "a-\u003e(m n)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:secondFun",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(h b -\u003e h b') -\u003e h (a, b) -\u003e h (a, b')",
        "fct-source": "src/Control-Compose.html#secondFun",
        "fct-type": "method",
        "title": "secondFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "secondFun",
        "normalized": "(a b-\u003ea c)-\u003ea(d,b)-\u003ea(d,c)",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "(h b-\u003eh b')-\u003eh(a,b)-\u003eh(a,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:toOI",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "sink b -\u003e OI b",
        "fct-source": "src/Control-Compose.html#toOI",
        "fct-type": "method",
        "title": "toOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "toOI",
        "normalized": "a b-\u003eOI b",
        "package": "TypeCompose",
        "partial": "OI",
        "signature": "sink b-\u003eOI b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unApp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f a",
        "fct-source": "src/Control-Compose.html#%3A%24",
        "fct-type": "function",
        "title": "unApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unApp",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unArrw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f a `j` g a",
        "fct-source": "src/Control-Compose.html#Arrw",
        "fct-type": "function",
        "title": "unArrw"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unArrw",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Arrw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unFlip",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "a `j` b",
        "fct-source": "src/Control-Compose.html#Flip",
        "fct-type": "function",
        "title": "unFlip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unFlip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Flip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unFunA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "h a -\u003e h b",
        "fct-source": "src/Control-Compose.html#FunA",
        "fct-type": "function",
        "title": "unFunA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unFunA",
        "normalized": "a b-\u003ea c",
        "package": "TypeCompose",
        "partial": "Fun",
        "signature": "h a-\u003eh b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unId",
      "description": {
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "Id a -\u003e a",
        "fct-source": "src/Control-Compose.html#unId",
        "fct-type": "function",
        "title": "unId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unId",
        "normalized": "Id a-\u003ea",
        "package": "TypeCompose",
        "partial": "Id",
        "signature": "Id a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unO",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a '(:.)'.\n\u003c/p\u003e",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(g :. f) a -\u003e g (f a)",
        "fct-source": "src/Control-Compose.html#unO",
        "fct-type": "function",
        "title": "unO"
      },
      "index": {
        "description": "Unwrap",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unO",
        "normalized": "(a b)c-\u003ea(b c)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(g f)a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unOO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "f (a `j` b)",
        "fct-source": "src/Control-Compose.html#OO",
        "fct-type": "function",
        "title": "unOO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unOO",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "OO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unProd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a, g a)",
        "fct-source": "src/Control-Compose.html#%3A%2A%3A",
        "fct-type": "function",
        "title": "unProd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unProd",
        "normalized": "(a b,c b)",
        "package": "TypeCompose",
        "partial": "Prod",
        "signature": "(f a,g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unProdd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Compose",
        "fct-package": "TypeCompose",
        "fct-signature": "(f a b, g a b)",
        "fct-source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
        "fct-type": "function",
        "title": "unProdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Compose",
        "module": "Control.Compose",
        "name": "unProdd",
        "normalized": "(a b c,d b c)",
        "package": "TypeCompose",
        "partial": "Prodd",
        "signature": "(f a b,g a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome (orphan) instances that belong elsewhere (where they wouldn't be orphans).\n Add the following line to get these instances\n\u003c/p\u003e\u003cpre\u003e import Control.Instances ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Instances",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Control-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Some orphan instances that belong elsewhere where they wouldn be orphans Add the following line to get these instances import Control.Instances",
        "hierarchy": "Control Instances",
        "module": "Control.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBijections.  For a more general setting, see also [1]\n \u003cem\u003eThere and Back Again: Arrows for Invertible Programming\u003c/em\u003e,\n \u003ca\u003ehttp://citeseer.ist.psu.edu/alimarine05there.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Bijection.html",
        "fct-type": "module",
        "title": "Bijection"
      },
      "index": {
        "description": "Bijections For more general setting see also There and Back Again Arrows for Invertible Programming http citeseer.ist.psu.edu alimarine05there.html",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "Bijection",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Bijection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#t::-60--45--62-:",
      "description": {
        "fct-descr": "\u003cp\u003eBijective functions\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Bijection.html#%3A%3C-%3E%3A",
        "fct-type": "type",
        "title": ":\u003c-\u003e:"
      },
      "index": {
        "description": "Bijective functions",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": ":\u003c-\u003e:",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#t:Bijection",
      "description": {
        "fct-descr": "\u003cp\u003eA type of bijective arrows\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "data",
        "fct-source": "src/Data-Bijection.html#Bijection",
        "fct-type": "data",
        "title": "Bijection"
      },
      "index": {
        "description": "type of bijective arrows",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "Bijection",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Bijection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:-45--45--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBijections on arrows.\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "Bijection j a b -\u003e Bijection j c d -\u003e (a `j` c) :\u003c-\u003e: (b `j` d)",
        "fct-source": "src/Data-Bijection.html#---%3E",
        "fct-type": "function",
        "title": "(---\u003e)"
      },
      "index": {
        "description": "Bijections on arrows",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "(---\u003e) ---\u003e",
        "normalized": "Bijection a b c-\u003eBijection a d e-\u003e(b a d)-\u003e(c a e)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "Bijection j a b-\u003eBijection j c d-\u003e(a j c)-\u003e(b j d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:Bi",
      "description": {
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "Bi",
        "fct-source": "src/Data-Bijection.html#Bijection",
        "fct-type": "function",
        "title": "Bi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "Bi",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Bi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:biFrom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "b `j` a",
        "fct-source": "src/Data-Bijection.html#Bijection",
        "fct-type": "function",
        "title": "biFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "biFrom",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:biTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "a `j` b",
        "fct-source": "src/Data-Bijection.html#Bijection",
        "fct-type": "function",
        "title": "biTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "biTo",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:bimap",
      "description": {
        "fct-descr": "\u003cp\u003eBijections on functors\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "(a :\u003c-\u003e: b) -\u003e f a :\u003c-\u003e: f b",
        "fct-source": "src/Data-Bijection.html#bimap",
        "fct-type": "function",
        "title": "bimap"
      },
      "index": {
        "description": "Bijections on functors",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "bimap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:idb",
      "description": {
        "fct-descr": "\u003cp\u003eBijective identity arrow.  Warning: uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e(~\u003e)\u003c/code\u003e.  If you\n have no \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, but you have a \u003ccode\u003eDeepArrow\u003c/code\u003e, you can instead use \u003ccode\u003eBi idA\n idA\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "Bijection j a a",
        "fct-source": "src/Data-Bijection.html#idb",
        "fct-type": "function",
        "title": "idb"
      },
      "index": {
        "description": "Bijective identity arrow Warning uses arr on If you have no arr but you have DeepArrow you can instead use Bi idA idA",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "idb",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:inBi",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function in an alternative (monomorphic) representation.\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "Bijection j a b -\u003e (a `j` a) -\u003e b `j` b",
        "fct-source": "src/Data-Bijection.html#inBi",
        "fct-type": "function",
        "title": "inBi"
      },
      "index": {
        "description": "Apply function in an alternative monomorphic representation",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "inBi",
        "normalized": "Bijection a b c-\u003e(b a b)-\u003ec a c",
        "package": "TypeCompose",
        "partial": "Bi",
        "signature": "Bijection j a b-\u003e(a j a)-\u003eb j b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eInverse bijection\n\u003c/p\u003e",
        "fct-module": "Data.Bijection",
        "fct-package": "TypeCompose",
        "fct-signature": "Bijection j a b -\u003e Bijection j b a",
        "fct-source": "src/Data-Bijection.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "Inverse bijection",
        "hierarchy": "Data Bijection",
        "module": "Data.Bijection",
        "name": "inverse",
        "normalized": "Bijection a b c-\u003eBijection a c b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "Bijection j a b-\u003eBijection j b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContext-dependent monoids\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-CxMonoid.html",
        "fct-type": "module",
        "title": "CxMonoid"
      },
      "index": {
        "description": "Context-dependent monoids",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "CxMonoid",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Cx Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#t:CxMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eType of context-dependent monoid.  Includes an explicit dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "newtype",
        "fct-source": "src/Data-CxMonoid.html#CxMonoid",
        "fct-type": "newtype",
        "title": "CxMonoid"
      },
      "index": {
        "description": "Type of context-dependent monoid Includes an explicit dictionary",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "CxMonoid",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Cx Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#t:MonoidDict",
      "description": {
        "fct-descr": "\u003cp\u003eDictionary for \u003ccode\u003e\u003ca\u003eCxMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-CxMonoid.html#MonoidDict",
        "fct-type": "type",
        "title": "MonoidDict"
      },
      "index": {
        "description": "Dictionary for CxMonoid",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "MonoidDict",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Monoid Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:CxMonoid",
      "description": {
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "CxMonoid",
        "fct-source": "src/Data-CxMonoid.html#CxMonoid",
        "fct-type": "function",
        "title": "CxMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "CxMonoid",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Cx Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:biCxMonoid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "(MonoidDict a -\u003e a) :\u003c-\u003e: CxMonoid a",
        "fct-source": "src/Data-CxMonoid.html#biCxMonoid",
        "fct-type": "function",
        "title": "biCxMonoid"
      },
      "index": {
        "description": "newtype bijection",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "biCxMonoid",
        "normalized": "(MonoidDict a-\u003ea)-\u003eCxMonoid a",
        "package": "TypeCompose",
        "partial": "Cx Monoid",
        "signature": "(MonoidDict a-\u003ea)-\u003eCxMonoid a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:unCxMonoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.CxMonoid",
        "fct-package": "TypeCompose",
        "fct-signature": "MonoidDict a -\u003e a",
        "fct-source": "src/Data-CxMonoid.html#CxMonoid",
        "fct-type": "function",
        "title": "unCxMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CxMonoid",
        "module": "Data.CxMonoid",
        "name": "unCxMonoid",
        "normalized": "MonoidDict a-\u003ea",
        "package": "TypeCompose",
        "partial": "Cx Monoid",
        "signature": "MonoidDict a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome function-like classes, having lambda-like construction.\n See \u003ccode\u003e\u003ca\u003eLambdaTy\u003c/a\u003e\u003c/code\u003e for why \u003ca\u003elambda\u003c/a\u003e.\n See \u003ca\u003eData.Pair\u003c/a\u003e for similar classes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Lambda.html",
        "fct-type": "module",
        "title": "Lambda"
      },
      "index": {
        "description": "Some function-like classes having lambda-like construction See LambdaTy for why lambda See Data.Pair for similar classes",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "Lambda",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Lambda",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Colambda",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eCopair\u003c/code\u003e, but for functions\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Lambda.html#Colambda",
        "fct-type": "class",
        "title": "Colambda"
      },
      "index": {
        "description": "Like Copair but for functions",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "Colambda",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Colambda",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Lambda",
      "description": {
        "fct-descr": "\u003cp\u003eType constructor class for function-like things having lambda-like construction.\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Lambda.html#Lambda",
        "fct-type": "class",
        "title": "Lambda"
      },
      "index": {
        "description": "Type constructor class for function-like things having lambda-like construction",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "Lambda",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Lambda",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:LambdaTy",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003elambda\u003c/a\u003e\u003c/code\u003e method.  Think of \u003ccode\u003esrc\u003c/code\u003e as the bound variable (or\n pattern) part of a lambda and \u003ccode\u003esnk\u003c/code\u003e as the expression part.  They\n combine to form a function-typed expression. \n Instance template:\n\u003c/p\u003e\u003cpre\u003e\n   instance (Applicative f, Lambda src snk)\n     =\u003e Lambda (f :. src) (f :. snk) where\n       lambda = apLambda\n\u003c/pre\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Lambda.html#LambdaTy",
        "fct-type": "type",
        "title": "LambdaTy"
      },
      "index": {
        "description": "Type of lambda method Think of src as the bound variable or pattern part of lambda and snk as the expression part They combine to form function-typed expression Instance template instance Applicative Lambda src snk Lambda src snk where lambda apLambda",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "LambdaTy",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Lambda Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Unlambda",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eUnpair\u003c/code\u003e, but for functions.  Minimal instance definition: either (a)\n \u003ccode\u003e\u003ca\u003eunlambda\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b) both of \u003ccode\u003e\u003ca\u003efsrc\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003efres\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Lambda.html#Unlambda",
        "fct-type": "class",
        "title": "Unlambda"
      },
      "index": {
        "description": "Like Unpair but for functions Minimal instance definition either unlambda or both of fsrc and fres",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "Unlambda",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unlambda",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:cores",
      "description": {
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "f b -\u003e f (a -\u003e b)",
        "fct-source": "src/Data-Lambda.html#cores",
        "fct-type": "method",
        "title": "cores"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "cores",
        "normalized": "a b-\u003ea(c-\u003eb)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "f b-\u003ef(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:fres",
      "description": {
        "fct-descr": "\u003cp\u003eSecond part of pair-like value\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "snk (a -\u003e b) -\u003e snk b",
        "fct-source": "src/Data-Lambda.html#fres",
        "fct-type": "method",
        "title": "fres"
      },
      "index": {
        "description": "Second part of pair-like value",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "fres",
        "normalized": "a(b-\u003ec)-\u003ea c",
        "package": "TypeCompose",
        "partial": "",
        "signature": "snk(a-\u003eb)-\u003esnk b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:fsrc",
      "description": {
        "fct-descr": "\u003cp\u003eFirst part of pair-like value\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "snk (a -\u003e b) -\u003e src a",
        "fct-source": "src/Data-Lambda.html#fsrc",
        "fct-type": "method",
        "title": "fsrc"
      },
      "index": {
        "description": "First part of pair-like value",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "fsrc",
        "normalized": "a(b-\u003ec)-\u003ed b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "snk(a-\u003eb)-\u003esrc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:lambda",
      "description": {
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "lambda",
        "fct-source": "src/Data-Lambda.html#lambda",
        "fct-type": "method",
        "title": "lambda"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "lambda",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:unlambda",
      "description": {
        "fct-descr": "\u003cp\u003eDeconstruct pair-like value\n\u003c/p\u003e",
        "fct-module": "Data.Lambda",
        "fct-package": "TypeCompose",
        "fct-signature": "snk (a -\u003e b) -\u003e (src a, snk b)",
        "fct-source": "src/Data-Lambda.html#unlambda",
        "fct-type": "method",
        "title": "unlambda"
      },
      "index": {
        "description": "Deconstruct pair-like value",
        "hierarchy": "Data Lambda",
        "module": "Data.Lambda",
        "name": "unlambda",
        "normalized": "a(b-\u003ec)-\u003e(d b,a c)",
        "package": "TypeCompose",
        "partial": "",
        "signature": "snk(a-\u003eb)-\u003e(src a,snk b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePair-related type constructor classes.\n\u003c/p\u003e\u003cp\u003eThis module is similar to \u003ccode\u003eControl.Functor.Pair\u003c/code\u003e in the\n \u003ccode\u003ecategory-extras\u003c/code\u003e package, but it does not require a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n superclass.\n\u003c/p\u003e\u003cp\u003eTemporarily, there is also Data.Zip, which contains the same\n functionality with different naming.  I'm unsure which I prefer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Pair.html",
        "fct-type": "module",
        "title": "Pair"
      },
      "index": {
        "description": "Pair-related type constructor classes This module is similar to Control.Functor.Pair in the category-extras package but it does not require Functor superclass Temporarily there is also Data.Zip which contains the same functionality with different naming unsure which prefer",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "Pair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Copair",
      "description": {
        "fct-descr": "\u003cp\u003eDual to \u003ccode\u003e\u003ca\u003eUnpair\u003c/a\u003e\u003c/code\u003e.\n Especially handy for contravariant functors (\u003ccode\u003e\u003ca\u003eContraFunctor\u003c/a\u003e\u003c/code\u003e) .  Use this\n template (filling in \u003ccode\u003ef\u003c/code\u003e) :\n\u003c/p\u003e\u003cpre\u003e    instance ContraFunctor f =\u003e Copair f where\n      { cofsts = cofmap fst ; cosnds = cofmap snd }\n\u003c/pre\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Pair.html#Copair",
        "fct-type": "class",
        "title": "Copair"
      },
      "index": {
        "description": "Dual to Unpair Especially handy for contravariant functors ContraFunctor Use this template filling in instance ContraFunctor Copair where cofsts cofmap fst cosnds cofmap snd",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "Copair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Copair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003eType constructor class for \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e-like things.\n Here are some standard instance templates you can fill in.  They're not\n defined in the general forms below, because they would lead to a lot of\n overlap.\n\u003c/p\u003e\u003cpre\u003e    instance Applicative f =\u003e Pair f where\n        pair = liftA2 (,)\n    instance (Applicative h, Pair f) =\u003e Pair (h :. f) where\n        pair = apPair\n    instance (Functor g, Pair g, Pair f) =\u003e Pair (g :. f)\n        where pair = ppPair\n    instance (Arrow (~\u003e), Unpair f, Pair g) =\u003e Pair (Arrw (~\u003e) f g) where\n        pair = arPair\n    instance (Monoid_f h, Copair h) =\u003e Pair h where\n        pair = copair\n\u003c/pre\u003e\u003cp\u003eAlso, if you have a type constructor that's a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e,\n here is a way to define '(\u003ca\u003e*\u003c/a\u003e)' for \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e    (\u003c*\u003e) = pairWith ($)\n\u003c/pre\u003e\u003cp\u003eMinimum definitions for instances.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Pair.html#Pair",
        "fct-type": "class",
        "title": "Pair"
      },
      "index": {
        "description": "Type constructor class for pair like things Here are some standard instance templates you can fill in They re not defined in the general forms below because they would lead to lot of overlap instance Applicative Pair where pair liftA2 instance Applicative Pair Pair where pair apPair instance Functor Pair Pair Pair where pair ppPair instance Arrow Unpair Pair Pair Arrw where pair arPair instance Monoid Copair Pair where pair copair Also if you have type constructor that Functor and Pair here is way to define for Applicative pairWith Minimum definitions for instances",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "Pair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:PairTy",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Pair.html#PairTy",
        "fct-type": "type",
        "title": "PairTy"
      },
      "index": {
        "description": "Type of pair method",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "PairTy",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Unpair",
      "description": {
        "fct-descr": "\u003cp\u003eUnpairpable.  Minimal instance definition: either (a) \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b)\n both of \u003ccode\u003e\u003ca\u003efsts\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003esnds\u003c/a\u003e\u003c/code\u003e.  A standard template to substitute any\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef.\u003c/code\u003e But watch out for effects!\n\u003c/p\u003e\u003cpre\u003e     instance Functor f =\u003e Unpair f where {fsts = fmap fst; snds = fmap snd}\n\u003c/pre\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Pair.html#Unpair",
        "fct-type": "class",
        "title": "Unpair"
      },
      "index": {
        "description": "Unpairpable Minimal instance definition either unpair or both of fsts and snds standard template to substitute any Functor But watch out for effects instance Functor Unpair where fsts fmap fst snds fmap snd",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "Unpair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unpair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:UnpairTy",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e method.  Generalizes \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Pair.html#UnpairTy",
        "fct-type": "type",
        "title": "UnpairTy"
      },
      "index": {
        "description": "Type of unpair method Generalizes unpair",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "UnpairTy",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unpair Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:apPair",
      "description": {
        "fct-descr": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "PairTy (h :. f)",
        "fct-source": "src/Data-Pair.html#apPair",
        "fct-type": "function",
        "title": "apPair"
      },
      "index": {
        "description": "Handy for Pair instances",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "apPair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:arPair",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of \u003ccode\u003e\u003ca\u003eArrw\u003c/a\u003e\u003c/code\u003e values.  \u003cem\u003eWarning\u003c/em\u003e: definition uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, so only\n use if your arrow has a working \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "PairTy (Arrw j f g)",
        "fct-source": "src/Data-Pair.html#arPair",
        "fct-type": "function",
        "title": "arPair"
      },
      "index": {
        "description": "Pairing of Arrw values Warning definition uses arr so only use if your arrow has working arr",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "arPair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:cofsts",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "cofsts",
        "fct-source": "src/Data-Pair.html#cofsts",
        "fct-type": "method",
        "title": "cofsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "cofsts",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:copair",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of \u003ccode\u003e\u003ca\u003eCopair\u003c/a\u003e\u003c/code\u003e values.  Combines contribution of each.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "PairTy f",
        "fct-source": "src/Data-Pair.html#copair",
        "fct-type": "function",
        "title": "copair"
      },
      "index": {
        "description": "Pairing of Copair values Combines contribution of each",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "copair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:cosnds",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "cosnds",
        "fct-source": "src/Data-Pair.html#cosnds",
        "fct-type": "method",
        "title": "cosnds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "cosnds",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:fsts",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "fsts",
        "fct-source": "src/Data-Pair.html#fsts",
        "fct-type": "method",
        "title": "fsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "fsts",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pair",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "pair",
        "fct-source": "src/Data-Pair.html#pair",
        "fct-type": "method",
        "title": "pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "pair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pairEdit",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n 'Functor'\\/'Monoid' version.  See also \u003ccode\u003e\u003ca\u003epairEditM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
        "fct-source": "src/Data-Pair.html#pairEdit",
        "fct-type": "function",
        "title": "pairEdit"
      },
      "index": {
        "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Functor Monoid version See also pairEditM",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "pairEdit",
        "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
        "package": "TypeCompose",
        "partial": "Edit",
        "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pairEditM",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n Monad version.  See also \u003ccode\u003e\u003ca\u003epairEdit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
        "fct-source": "src/Data-Pair.html#pairEditM",
        "fct-type": "function",
        "title": "pairEditM"
      },
      "index": {
        "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Monad version See also pairEdit",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "pairEditM",
        "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
        "package": "TypeCompose",
        "partial": "Edit",
        "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:ppPair",
      "description": {
        "fct-descr": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "PairTy (g :. f)",
        "fct-source": "src/Data-Pair.html#ppPair",
        "fct-type": "function",
        "title": "ppPair"
      },
      "index": {
        "description": "Handy for Pair instances",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "ppPair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:snds",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "snds",
        "fct-source": "src/Data-Pair.html#snds",
        "fct-type": "method",
        "title": "snds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "snds",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:unpair",
      "description": {
        "fct-module": "Data.Pair",
        "fct-package": "TypeCompose",
        "fct-signature": "unpair",
        "fct-source": "src/Data-Pair.html#unpair",
        "fct-type": "method",
        "title": "unpair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Pair",
        "module": "Data.Pair",
        "name": "unpair",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monoid \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e of partial values.  See the [Teaser] and [Solution] blog\n posts.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eTeaser\u003c/dt\u003e\u003cdd\u003e:   \u003ca\u003ehttp://conal.net/blog/posts/a-type-for-partial-values\u003c/a\u003e\n   [Solution]: \u003ca\u003ehttp://conal.net/blog/posts/implementing-a-type-for-partial-values\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eAlso defines a \u003ccode\u003e\u003ca\u003eFunAble\u003c/a\u003e\u003c/code\u003e instance, so that \u003ccode\u003eFunA Partial\u003c/code\u003e is an arrow.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Partial.html",
        "fct-type": "module",
        "title": "Partial"
      },
      "index": {
        "description": "monoid Partial of partial values See the Teaser and Solution blog posts Teaser http conal.net blog posts a-type-for-partial-values Solution http conal.net blog posts implementing-a-type-for-partial-values Also defines FunAble instance so that FunA Partial is an arrow",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "Partial",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#t:Partial",
      "description": {
        "fct-descr": "\u003cp\u003ePartial value.  Represented an endomorphism, which is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n under \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e and '(.)'.  Then \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is the completely undefined value,\n and in \u003ccode\u003eu `@'mappend'@` v\u003c/code\u003e, \u003ccode\u003ev\u003c/code\u003e selectively replaces parts of \u003ccode\u003eu\u003c/code\u003e.  The\n \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003ePair\u003c/code\u003e, \u003ccode\u003eUnpair\u003c/code\u003e, \u003ccode\u003eCopair\u003c/code\u003e, \u003ccode\u003eUnfun\u003c/code\u003e, and \u003ccode\u003eCofun\u003c/code\u003e\n are all very useful on partial values.\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Partial.html#Partial",
        "fct-type": "type",
        "title": "Partial"
      },
      "index": {
        "description": "Partial value Represented an endomorphism which is Monoid under id and Then mempty is the completely undefined value and in mappend selectively replaces parts of The Endo instances for Pair Unpair Copair Unfun and Cofun are all very useful on partial values",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "Partial",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#t:PartialX",
      "description": {
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Partial.html#PartialX",
        "fct-type": "type",
        "title": "PartialX"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "PartialX",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnArg",
      "description": {
        "fct-descr": "\u003cp\u003eProvide in info about a function argument\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "PartialX u (u -\u003e v)",
        "fct-source": "src/Data-Partial.html#pUnArg",
        "fct-type": "function",
        "title": "pUnArg"
      },
      "index": {
        "description": "Provide in info about function argument",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "pUnArg",
        "normalized": "PartialX a(a-\u003eb)",
        "package": "TypeCompose",
        "partial": "Un Arg",
        "signature": "PartialX u(u-\u003ev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnElt",
      "description": {
        "fct-descr": "\u003cp\u003eInverse to \"element\" access, on all elements.  A way to inject some\n info about every element.  For \u003ccode\u003ef\u003c/code\u003e, consider '[]', \u003ccode\u003e(-\u003e) a\u003c/code\u003e,\n \u003ccode\u003eEvent\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "PartialX a (f a)",
        "fct-source": "src/Data-Partial.html#pUnElt",
        "fct-type": "function",
        "title": "pUnElt"
      },
      "index": {
        "description": "Inverse to element access on all elements way to inject some info about every element For consider Event etc",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "pUnElt",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Un Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnRes",
      "description": {
        "fct-descr": "\u003cp\u003eProvide info about a function result\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "PartialX v (u -\u003e v)",
        "fct-source": "src/Data-Partial.html#pUnRes",
        "fct-type": "function",
        "title": "pUnRes"
      },
      "index": {
        "description": "Provide info about function result",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "pUnRes",
        "normalized": "PartialX a(b-\u003ea)",
        "package": "TypeCompose",
        "partial": "Un Res",
        "signature": "PartialX v(u-\u003ev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnSrc",
      "description": {
        "fct-descr": "\u003cp\u003eInject a partial argument-source into a partial function-sink.\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "PartialX a ((a -\u003e b) -\u003e o)",
        "fct-source": "src/Data-Partial.html#pUnSrc",
        "fct-type": "function",
        "title": "pUnSrc"
      },
      "index": {
        "description": "Inject partial argument-source into partial function-sink",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "pUnSrc",
        "normalized": "PartialX a((a-\u003eb)-\u003ec)",
        "package": "TypeCompose",
        "partial": "Un Src",
        "signature": "PartialX a((a-\u003eb)-\u003eo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pval",
      "description": {
        "fct-descr": "\u003cp\u003eForce a partial value into a full one, filling in bottom for any\n missing parts.\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "Partial c -\u003e c",
        "fct-source": "src/Data-Partial.html#pval",
        "fct-type": "function",
        "title": "pval"
      },
      "index": {
        "description": "Force partial value into full one filling in bottom for any missing parts",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "pval",
        "normalized": "Partial a-\u003ea",
        "package": "TypeCompose",
        "partial": "",
        "signature": "Partial c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:valp",
      "description": {
        "fct-descr": "\u003cp\u003eTreat a full value as a partial one.  Fully overrides any\n \"previous\" (earlier argument to \u003ccode\u003emappend\u003c/code\u003e) partial value.\n\u003c/p\u003e",
        "fct-module": "Data.Partial",
        "fct-package": "TypeCompose",
        "fct-signature": "c -\u003e Partial c",
        "fct-source": "src/Data-Partial.html#valp",
        "fct-type": "function",
        "title": "valp"
      },
      "index": {
        "description": "Treat full value as partial one Fully overrides any previous earlier argument to mappend partial value",
        "hierarchy": "Data Partial",
        "module": "Data.Partial",
        "name": "valp",
        "normalized": "a-\u003ePartial a",
        "package": "TypeCompose",
        "partial": "",
        "signature": "c-\u003ePartial c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads with references, taken from John Hughes's \u003ca\u003eGlobal Variables in\n Haskell\u003c/a\u003e (\u003ca\u003ehttp://citeseer.ist.psu.edu/473734.html\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-RefMonad.html",
        "fct-type": "module",
        "title": "RefMonad"
      },
      "index": {
        "description": "Monads with references taken from John Hughes Global Variables in Haskell http citeseer.ist.psu.edu html",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "RefMonad",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Ref Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#t:RefMonad",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monads with references.\n\u003c/p\u003e",
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-RefMonad.html#RefMonad",
        "fct-type": "class",
        "title": "RefMonad"
      },
      "index": {
        "description": "Class of monads with references",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "RefMonad",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Ref Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:modifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eChange the contents of a ref\n\u003c/p\u003e",
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-RefMonad.html#modifyRef",
        "fct-type": "function",
        "title": "modifyRef"
      },
      "index": {
        "description": "Change the contents of ref",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "modifyRef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "TypeCompose",
        "partial": "Ref",
        "signature": "r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:newRef",
      "description": {
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "a -\u003e m (r a)",
        "fct-source": "src/Data-RefMonad.html#newRef",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "newRef",
        "normalized": "a-\u003eb(c a)",
        "package": "TypeCompose",
        "partial": "Ref",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:readRef",
      "description": {
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "r a -\u003e m a",
        "fct-source": "src/Data-RefMonad.html#readRef",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "readRef",
        "normalized": "a b-\u003ec b",
        "package": "TypeCompose",
        "partial": "Ref",
        "signature": "r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:writeRef",
      "description": {
        "fct-module": "Data.RefMonad",
        "fct-package": "TypeCompose",
        "fct-signature": "r a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-RefMonad.html#writeRef",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RefMonad",
        "module": "Data.RefMonad",
        "name": "writeRef",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "TypeCompose",
        "partial": "Ref",
        "signature": "r a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric titling (labeling).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Title",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Title.html",
        "fct-type": "module",
        "title": "Title"
      },
      "index": {
        "description": "Generic titling labeling",
        "hierarchy": "Data Title",
        "module": "Data.Title",
        "name": "Title",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#t:Title",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a title on a value.  If you can title polymorphically, please\n instantiate \u003ccode\u003e\u003ca\u003eTitle_f\u003c/a\u003e\u003c/code\u003e instead of Title.  Then you'll automatically\n get a \u003ccode\u003e\u003ca\u003eTitle\u003c/a\u003e\u003c/code\u003e for each type instance, thanks to this rule.\n\u003c/p\u003e\u003cpre\u003e\n   instance Title_f f =\u003e Title (f a) where title = title_f\n\u003c/pre\u003e\u003cp\u003eTo handle ambiguity for types like \u003ccode\u003e([] Char)\u003c/code\u003e -- aka \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, this\n module is compiled with \u003ccode\u003eOverlappingInstances\u003c/code\u003e and\n \u003ccode\u003eUndecidableInstances\u003c/code\u003e.  The more specific instance (yours) wins.\n\u003c/p\u003e\u003cp\u003eIn defining your instance, you might want to use the String instance,\n e.g., \u003ccode\u003etitle ttl \"\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Title",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Title.html#Title",
        "fct-type": "class",
        "title": "Title"
      },
      "index": {
        "description": "Provide title on value If you can title polymorphically please instantiate Title instead of Title Then you ll automatically get Title for each type instance thanks to this rule instance Title Title where title title To handle ambiguity for types like Char aka String this module is compiled with OverlappingInstances and UndecidableInstances The more specific instance yours wins In defining your instance you might want to use the String instance e.g title ttl",
        "hierarchy": "Data Title",
        "module": "Data.Title",
        "name": "Title",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#t:Title_f",
      "description": {
        "fct-module": "Data.Title",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Title.html#Title_f",
        "fct-type": "class",
        "title": "Title_f"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Title",
        "module": "Data.Title",
        "name": "Title_f",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#v:title",
      "description": {
        "fct-module": "Data.Title",
        "fct-package": "TypeCompose",
        "fct-signature": "String -\u003e u -\u003e u",
        "fct-source": "src/Data-Title.html#title",
        "fct-type": "method",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Title",
        "module": "Data.Title",
        "name": "title",
        "normalized": "String-\u003ea-\u003ea",
        "package": "TypeCompose",
        "partial": "",
        "signature": "String-\u003eu-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#v:title_f",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e for all applications of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Title",
        "fct-package": "TypeCompose",
        "fct-signature": "String -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Title.html#title_f",
        "fct-type": "method",
        "title": "title_f"
      },
      "index": {
        "description": "title for all applications of",
        "hierarchy": "Data Title",
        "module": "Data.Title",
        "name": "title_f",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "TypeCompose",
        "partial": "",
        "signature": "String-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZip-related type constructor classes.\n\u003c/p\u003e\u003cp\u003eThis module is similar to \u003ccode\u003eControl.Functor.Zip\u003c/code\u003e in the\n \u003ccode\u003ecategory-extras\u003c/code\u003e package, but it does not require a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n superclass.\n\u003c/p\u003e\u003cp\u003eThis module defines generalized \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e, so if you use it,\n you'll have to\n\u003c/p\u003e\u003cpre\u003e\n    import Prelude hiding (zip,zipWith,zipWith3,unzip)\n\u003c/pre\u003e\u003cp\u003eTemporarily, there is also Data.Pair, which contains the same\n functionality with different naming.  I'm unsure which I prefer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "module",
        "fct-source": "src/Data-Zip.html",
        "fct-type": "module",
        "title": "Zip"
      },
      "index": {
        "description": "Zip-related type constructor classes This module is similar to Control.Functor.Zip in the category-extras package but it does not require Functor superclass This module defines generalized zip and unzip so if you use it you ll have to import Prelude hiding zip zipWith zipWith3 unzip Temporarily there is also Data.Pair which contains the same functionality with different naming unsure which prefer",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "Zip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Cozip",
      "description": {
        "fct-descr": "\u003cp\u003eDual to \u003ccode\u003e\u003ca\u003eUnzip\u003c/a\u003e\u003c/code\u003e.\n Especially handy for contravariant functors (\u003ccode\u003eCofunctor\u003c/code\u003e) .  Use this\n template (filling in \u003ccode\u003ef\u003c/code\u003e) :\n\u003c/p\u003e\u003cpre\u003e    instance Cofunctor f =\u003e Cozip f where\n      { cofsts = cofmap fst ; cosnds = cofmap snd }\n\u003c/pre\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Zip.html#Cozip",
        "fct-type": "class",
        "title": "Cozip"
      },
      "index": {
        "description": "Dual to Unzip Especially handy for contravariant functors Cofunctor Use this template filling in instance Cofunctor Cozip where cofsts cofmap fst cosnds cofmap snd",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "Cozip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Cozip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Unzip",
      "description": {
        "fct-descr": "\u003cp\u003eUnzippable.  Minimal instance definition: either (a) \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b)\n both of \u003ccode\u003e\u003ca\u003efsts\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003esnds\u003c/a\u003e\u003c/code\u003e.  A standard template to substitute any\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef.\u003c/code\u003e But watch out for effects!\n\u003c/p\u003e\u003cpre\u003e     instance Functor f =\u003e Unzip f where {fsts = fmap fst; snds = fmap snd}\n\u003c/pre\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Zip.html#Unzip",
        "fct-type": "class",
        "title": "Unzip"
      },
      "index": {
        "description": "Unzippable Minimal instance definition either unzip or both of fsts and snds standard template to substitute any Functor But watch out for effects instance Functor Unzip where fsts fmap fst snds fmap snd",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "Unzip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unzip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:UnzipTy",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e method.  Generalizes \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Zip.html#UnzipTy",
        "fct-type": "type",
        "title": "UnzipTy"
      },
      "index": {
        "description": "Type of unzip method Generalizes unzip",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "UnzipTy",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Unzip Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Zip",
      "description": {
        "fct-descr": "\u003cp\u003eType constructor class for \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e-like things.\n Here are some standard instance templates you can fill in.  They're not\n defined in the general forms below, because they would lead to a lot of\n overlap.\n\u003c/p\u003e\u003cpre\u003e    instance Applicative f =\u003e Zip f where\n        zip = liftA2 (,)\n    instance (Applicative h, Zip f) =\u003e Zip (h :. f) where\n        zip = apZip\n    instance (Functor g, Zip g, Zip f) =\u003e Zip (g :. f)\n        where zip = ppZip\n    instance (Arrow (~\u003e), Unzip f, Zip g) =\u003e Zip (Arrw (~\u003e) f g) where\n        zip = arZip\n    instance (Monoid_f h, Cozip h) =\u003e Zip h where\n        zip = cozip\n\u003c/pre\u003e\u003cp\u003eAlso, if you have a type constructor that's a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e,\n here is a way to define '(\u003ca\u003e*\u003c/a\u003e)' for \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e    (\u003c*\u003e) = zipWith ($)\n\u003c/pre\u003e\u003cp\u003eMinimum definitions for instances.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "class",
        "fct-source": "src/Data-Zip.html#Zip",
        "fct-type": "class",
        "title": "Zip"
      },
      "index": {
        "description": "Type constructor class for zip like things Here are some standard instance templates you can fill in They re not defined in the general forms below because they would lead to lot of overlap instance Applicative Zip where zip liftA2 instance Applicative Zip Zip where zip apZip instance Functor Zip Zip Zip where zip ppZip instance Arrow Unzip Zip Zip Arrw where zip arZip instance Monoid Cozip Zip where zip cozip Also if you have type constructor that Functor and Zip here is way to define for Applicative zipWith Minimum definitions for instances",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "Zip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:ZipTy",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "type",
        "fct-source": "src/Data-Zip.html#ZipTy",
        "fct-type": "type",
        "title": "ZipTy"
      },
      "index": {
        "description": "Type of zip method",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "ZipTy",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:apZip",
      "description": {
        "fct-descr": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "ZipTy (h :. f)",
        "fct-source": "src/Data-Zip.html#apZip",
        "fct-type": "function",
        "title": "apZip"
      },
      "index": {
        "description": "Handy for Zip instances",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "apZip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:arZip",
      "description": {
        "fct-descr": "\u003cp\u003eZiping of \u003ccode\u003e\u003ca\u003eArrw\u003c/a\u003e\u003c/code\u003e values.  \u003cem\u003eWarning\u003c/em\u003e: definition uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, so only\n use if your arrow has a working \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "ZipTy (Arrw j f g)",
        "fct-source": "src/Data-Zip.html#arZip",
        "fct-type": "function",
        "title": "arZip"
      },
      "index": {
        "description": "Ziping of Arrw values Warning definition uses arr so only use if your arrow has working arr",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "arZip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cofsts",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "cofsts",
        "fct-source": "src/Data-Zip.html#cofsts",
        "fct-type": "method",
        "title": "cofsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "cofsts",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cosnds",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "cosnds",
        "fct-source": "src/Data-Zip.html#cosnds",
        "fct-type": "method",
        "title": "cosnds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "cosnds",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cozip",
      "description": {
        "fct-descr": "\u003cp\u003eZiping of \u003ccode\u003e\u003ca\u003eCozip\u003c/a\u003e\u003c/code\u003e values.  Combines contribution of each.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "ZipTy f",
        "fct-source": "src/Data-Zip.html#cozip",
        "fct-type": "function",
        "title": "cozip"
      },
      "index": {
        "description": "Ziping of Cozip values Combines contribution of each",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "cozip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:fsts",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "fsts",
        "fct-source": "src/Data-Zip.html#fsts",
        "fct-type": "method",
        "title": "fsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "fsts",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:pairEdit",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n 'Functor'\\/'Monoid' version.  See also \u003ccode\u003e\u003ca\u003epairEditM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
        "fct-source": "src/Data-Zip.html#pairEdit",
        "fct-type": "function",
        "title": "pairEdit"
      },
      "index": {
        "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Functor Monoid version See also pairEditM",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "pairEdit",
        "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
        "package": "TypeCompose",
        "partial": "Edit",
        "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:pairEditM",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n Monad version.  See also \u003ccode\u003e\u003ca\u003epairEdit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
        "fct-source": "src/Data-Zip.html#pairEditM",
        "fct-type": "function",
        "title": "pairEditM"
      },
      "index": {
        "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Monad version See also pairEdit",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "pairEditM",
        "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
        "package": "TypeCompose",
        "partial": "Edit",
        "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:ppZip",
      "description": {
        "fct-descr": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "ZipTy (g :. f)",
        "fct-source": "src/Data-Zip.html#ppZip",
        "fct-type": "function",
        "title": "ppZip"
      },
      "index": {
        "description": "Handy for Zip instances",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "ppZip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:snds",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "snds",
        "fct-source": "src/Data-Zip.html#snds",
        "fct-type": "method",
        "title": "snds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "snds",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:unzip",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "unzip",
        "fct-source": "src/Data-Zip.html#unzip",
        "fct-type": "method",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "unzip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zip",
      "description": {
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "zip",
        "fct-source": "src/Data-Zip.html#zip",
        "fct-type": "method",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "zip",
        "normalized": "",
        "package": "TypeCompose",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Zip.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Generalized zipWith",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "TypeCompose",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Zip",
        "fct-package": "TypeCompose",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
        "fct-source": "src/Data-Zip.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Generalized zipWith",
        "hierarchy": "Data Zip",
        "module": "Data.Zip",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
        "package": "TypeCompose",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d"
      }
    }
  }
]