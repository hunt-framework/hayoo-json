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
        "word": "TypeCompose"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious type constructor compositions and instances for them.\n Some come from \n \"Applicative Programming with Effects\"\n \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/Applicative.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compose",
          "name": "Compose",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html",
          "type": "module"
        },
        "index": {
          "description": "Various type constructor compositions and instances for them Some come from Applicative Programming with Effects http www.soi.city.ac.uk ross papers Applicative.html",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Compose",
          "package": "TypeCompose",
          "partial": "Compose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType application\n We can also drop the \u003ccode\u003eApp\u003c/code\u003e constructor, but then we overlap with many\n other instances, like \u003ccode\u003e[a]\u003c/code\u003e.  Here's a template for \u003ccode\u003eApp\u003c/code\u003e-free\n instances.\n\u003c/p\u003e\u003cpre\u003e    instance (Applicative f, Monoid a) =\u003e Monoid (f a) where\n      mempty  = pure mempty\n      mappend = liftA2 mappend\n\u003c/pre\u003e",
          "module": "Control.Compose",
          "name": ":$",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#%3A%24",
          "type": "newtype"
        },
        "index": {
          "description": "Type application We can also drop the App constructor but then we overlap with many other instances like Here template for App free instances instance Applicative Monoid Monoid where mempty pure mempty mappend liftA2 mappend",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": ":$",
          "package": "TypeCompose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of unary type constructors\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": ":*:",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#%3A%2A%3A",
          "type": "newtype"
        },
        "index": {
          "description": "Pairing of unary type constructors",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": ":*:",
          "package": "TypeCompose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": ":-\u003e:",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#%3A-%3E%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": ":-\u003e:",
          "package": "TypeCompose",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::-45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of unary type constructors\n\u003c/p\u003e\u003cp\u003eThere are (at least) two useful \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances, so you'll have to\npick one and type-specialize it (filling in all or parts of \u003ccode\u003eg\u003c/code\u003e and/or \u003ccode\u003ef\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e     -- standard Monoid instance for Applicative applied to Monoid\n     instance (Applicative (g :. f), Monoid a) =\u003e Monoid ((g :. f) a) where\n       { mempty = pure mempty; mappend = liftA2 mappend }\n     -- Especially handy when g is a Monoid_f.\n     instance Monoid (g (f a)) =\u003e Monoid ((g :. f) a) where\n       { mempty = O mempty; mappend = inO2 mappend }\n\u003c/pre\u003e\u003cp\u003eCorresponding to the first and second definitions above,\n\u003c/p\u003e\u003cpre\u003e     instance (Applicative g, Monoid_f f) =\u003e Monoid_f (g :. f) where\n       { mempty_f = O (pure mempty_f); mappend_f = inO2 (liftA2 mappend_f) }\n     instance Monoid_f g =\u003e Monoid_f (g :. f) where\n       { mempty_f = O mempty_f; mappend_f = inO2 mappend_f }\n\u003c/pre\u003e\u003cp\u003eSimilarly, there are two useful \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instances and two useful\n\u003ccode\u003e\u003ca\u003eContraFunctor\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cpre\u003e     instance (      Functor g,       Functor f) =\u003e Functor (g :. f) where fmap = fmapFF\n     instance (ContraFunctor g, ContraFunctor f) =\u003e Functor (g :. f) where fmap = fmapCC\n \n     instance (      Functor g, ContraFunctor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapFC\n     instance (ContraFunctor g,       Functor f) =\u003e ContraFunctor (g :. f) where contraFmap = contraFmapCF\n\u003c/pre\u003e\u003cp\u003eHowever, it's such a bother to define the Functor instances per\ncomposition type, I've left the fmapFF case in.  If you want the fmapCC\none, you're out of luck for now.  I'd love to hear a good solution.  Maybe\nsomeday Haskell will do Prolog-style search for instances, subgoaling the\nconstraints, rather than just matching instance heads.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": ":.",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#%3A.",
          "type": "newtype"
        },
        "index": {
          "description": "Composition of unary type constructors There are at least two useful Monoid instances so you ll have to pick one and type-specialize it filling in all or parts of and or standard Monoid instance for Applicative applied to Monoid instance Applicative Monoid Monoid where mempty pure mempty mappend liftA2 mappend Especially handy when is Monoid instance Monoid Monoid where mempty mempty mappend inO2 mappend Corresponding to the first and second definitions above instance Applicative Monoid Monoid where mempty pure mempty mappend inO2 liftA2 mappend instance Monoid Monoid where mempty mempty mappend inO2 mappend Similarly there are two useful Functor instances and two useful ContraFunctor instances instance Functor Functor Functor where fmap fmapFF instance ContraFunctor ContraFunctor Functor where fmap fmapCC instance Functor ContraFunctor ContraFunctor where contraFmap contraFmapFC instance ContraFunctor Functor ContraFunctor where contraFmap contraFmapCF However it such bother to define the Functor instances per composition type ve left the fmapFF case in If you want the fmapCC one you re out of luck for now love to hear good solution Maybe someday Haskell will do Prolog-style search for instances subgoaling the constraints rather than just matching instance heads",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": ":.",
          "package": "TypeCompose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of binary type constructors\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "::*::",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
          "type": "newtype"
        },
        "index": {
          "description": "Pairing of binary type constructors",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "::*::",
          "package": "TypeCompose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:::-42-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility synonym for (:$).\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "App",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#App",
          "type": "type"
        },
        "index": {
          "description": "Compatibility synonym for",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "App",
          "package": "TypeCompose",
          "partial": "App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow-like type between type constructors (doesn't enforce \u003ccode\u003eArrow\n (~\u003e)\u003c/code\u003e here).\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "Arrw",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Arrw",
          "type": "newtype"
        },
        "index": {
          "description": "Arrow-like type between type constructors doesn enforce Arrow here",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Arrw",
          "package": "TypeCompose",
          "partial": "Arrw",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Arrw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary functions\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "Binop",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Binop",
          "type": "type"
        },
        "index": {
          "description": "Binary functions",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Binop",
          "package": "TypeCompose",
          "partial": "Binop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Binop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContravariant functors.  often useful for \u003cem\u003eacceptors\u003c/em\u003e (consumers,\n sinks) of values.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "ContraFunctor",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#ContraFunctor",
          "type": "class"
        },
        "index": {
          "description": "Contravariant functors often useful for acceptors consumers sinks of values",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "ContraFunctor",
          "package": "TypeCompose",
          "partial": "Contra Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:ContraFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad distributivity.\n\u003c/p\u003e\u003cp\u003eTODO: what conditions are required so that \u003ccode\u003e(m :. n)\u003c/code\u003e satisfies the monad laws?\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "DistribM",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#DistribM",
          "type": "class"
        },
        "index": {
          "description": "Monad distributivity TODO what conditions are required so that satisfies the monad laws",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "DistribM",
          "package": "TypeCompose",
          "partial": "Distrib",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:DistribM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip type arguments\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "Flip",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Flip",
          "type": "newtype"
        },
        "index": {
          "description": "Flip type arguments",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Flip",
          "package": "TypeCompose",
          "partial": "Flip",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon pattern for \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "FunA",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#FunA",
          "type": "newtype"
        },
        "index": {
          "description": "Common pattern for Arrow",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "FunA",
          "package": "TypeCompose",
          "partial": "Fun",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:FunA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupport needed for a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e to be an \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "FunAble",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#FunAble",
          "type": "class"
        },
        "index": {
          "description": "Support needed for FunA to be an Arrow",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "FunAble",
          "package": "TypeCompose",
          "partial": "Fun Able",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:FunAble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity type constructor.  Until there's a better place to find it.\n I'd use \u003ca\u003eControl.Monad.Identity\u003c/a\u003e, but I don't want to introduce a\n dependency on mtl just for Id.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "Id",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "Identity type constructor Until there better place to find it use Control.Monad.Identity but don want to introduce dependency on mtl just for Id",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Id",
          "package": "TypeCompose",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulates universal constraint \u003ccode\u003eforall a. Monoid (f a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee Simulating Quantified Class Constraints\n (\u003ca\u003ehttp://flint.cs.yale.edu/trifonov/papers/sqcc.pdf\u003c/a\u003e)\n  Instantiate this schema wherever necessary:\n\u003c/p\u003e\u003cpre\u003e    instance Monoid_f f where { mempty_f = mempty ; mappend_f = mappend }\n\u003c/pre\u003e",
          "module": "Control.Compose",
          "name": "Monoid_f",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Monoid_f",
          "type": "class"
        },
        "index": {
          "description": "Simulates universal constraint forall Monoid See Simulating Quantified Class Constraints http flint.cs.yale.edu trifonov papers sqcc.pdf Instantiate this schema wherever necessary instance Monoid where mempty mempty mappend mappend",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Monoid_f",
          "package": "TypeCompose",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Monoid_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility synonym\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "O",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#O",
          "type": "type"
        },
        "index": {
          "description": "Compatibility synonym",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "O",
          "package": "TypeCompose",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(-\u003e IO ()) as a \u003ccode\u003e\u003ca\u003eFlip\u003c/a\u003e\u003c/code\u003e.  A ContraFunctor.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "OI",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#OI",
          "type": "type"
        },
        "index": {
          "description": "IO as Flip ContraFunctor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "OI",
          "package": "TypeCompose",
          "partial": "OI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:OI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of type constructors: unary with binary.  Called\n \u003ca\u003eStaticArrow\u003c/a\u003e in [1].\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "OO",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#OO",
          "type": "newtype"
        },
        "index": {
          "description": "Composition of type constructors unary with binary Called StaticArrow in",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "OO",
          "package": "TypeCompose",
          "partial": "OO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:OO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eOI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "ToOI",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#ToOI",
          "type": "class"
        },
        "index": {
          "description": "Convert to an OI",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "ToOI",
          "package": "TypeCompose",
          "partial": "To OI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:ToOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary functions\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "Unop",
          "package": "TypeCompose",
          "source": "src/Control-Compose.html#Unop",
          "type": "type"
        },
        "index": {
          "description": "Unary functions",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Unop",
          "package": "TypeCompose",
          "partial": "Unop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#t:Unop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd pre- and post processing\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "(~\u003e)",
          "package": "TypeCompose",
          "signature": "(a' `cat` a) -\u003e (b `cat` b') -\u003e (a `cat` b) -\u003e a' `cat` b'",
          "source": "src/Control-Compose.html#~%3E",
          "type": "function"
        },
        "index": {
          "description": "Add pre and post processing",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(~\u003e) ~\u003e",
          "normalized": "(a b c)-\u003e(d b e)-\u003e(c b d)-\u003ea b e",
          "package": "TypeCompose",
          "signature": "(a' cat a)-\u003e(b cat b')-\u003e(a cat b)-\u003ea' cat b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike '(~\u003e)' but specialized to functors and functions.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "(~\u003e*)",
          "package": "TypeCompose",
          "signature": "(a' -\u003e a) -\u003e (b -\u003e b') -\u003e (p a -\u003e q b) -\u003e p a' -\u003e q b'",
          "source": "src/Control-Compose.html#~%3E%2A",
          "type": "function"
        },
        "index": {
          "description": "Like but specialized to functors and functions",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(~\u003e*) ~\u003e*",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e b-\u003ef c)-\u003ee a-\u003ef d",
          "package": "TypeCompose",
          "signature": "(a'-\u003ea)-\u003e(b-\u003eb')-\u003e(p a-\u003eq b)-\u003ep a'-\u003eq b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-126--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy combining form.  See '(***#)' for an sample use.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "($*)",
          "package": "TypeCompose",
          "signature": "(a -\u003e b, a' -\u003e b') -\u003e (a, a') -\u003e (b, b')",
          "source": "src/Control-Compose.html#%24%2A",
          "type": "function"
        },
        "index": {
          "description": "handy combining form See for an sample use",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "($*) $*",
          "normalized": "(a-\u003eb,c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "TypeCompose",
          "signature": "(a-\u003eb,a'-\u003eb')-\u003e(a,a')-\u003e(b,b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-36--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "(&&&%)",
          "package": "TypeCompose",
          "signature": "(h a -\u003e h b) -\u003e (h a -\u003e h b') -\u003e h a -\u003e h (b, b')",
          "source": "src/Control-Compose.html#%26%26%26%25",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(&&&%) &&&%",
          "normalized": "(a b-\u003ea c)-\u003e(a b-\u003ea d)-\u003ea b-\u003ea(c,d)",
          "package": "TypeCompose",
          "signature": "(h a-\u003eh b)-\u003e(h a-\u003eh b')-\u003eh a-\u003eh(b,b')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-38--38--38--37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two binary functions into a binary function on pairs\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "(***#)",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a' -\u003e b' -\u003e c') -\u003e (a, a') -\u003e (b, b') -\u003e (c, c')",
          "source": "src/Control-Compose.html#%2A%2A%2A%23",
          "type": "function"
        },
        "index": {
          "description": "Combine two binary functions into binary function on pairs",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(***#) ***#",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ef)-\u003e(a,d)-\u003e(b,e)-\u003e(c,f)",
          "package": "TypeCompose",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a'-\u003eb'-\u003ec')-\u003e(a,a')-\u003e(b,b')-\u003e(c,c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--42--42--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "(***%)",
          "package": "TypeCompose",
          "signature": "(h a -\u003e h b) -\u003e (h a' -\u003e h b') -\u003e h (a, a') -\u003e h (b, b')",
          "source": "src/Control-Compose.html#%2A%2A%2A%25",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(***%) ***%",
          "normalized": "(a b-\u003ea c)-\u003e(a d-\u003ea e)-\u003ea(b,d)-\u003ea(c,e)",
          "package": "TypeCompose",
          "signature": "(h a-\u003eh b)-\u003e(h a'-\u003eh b')-\u003eh(a,a')-\u003eh(b,b')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--42--42--37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "(*\u003c~)",
          "package": "TypeCompose",
          "signature": "(b -\u003e b') -\u003e (a' -\u003e a) -\u003e (p a -\u003e q b) -\u003e p a' -\u003e q b'",
          "source": "src/Control-Compose.html#%2A%3C~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(*\u003c~) *\u003c~",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e d-\u003ef a)-\u003ee c-\u003ef b",
          "package": "TypeCompose",
          "signature": "(b-\u003eb')-\u003e(a'-\u003ea)-\u003e(p a-\u003eq b)-\u003ep a'-\u003eq b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42--60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy infix & curried \u003ccode\u003e\u003ca\u003eProd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "(*:*)",
          "package": "TypeCompose",
          "signature": "f a -\u003e g a -\u003e (f :*: g) a",
          "source": "src/Control-Compose.html#%2A%3A%2A",
          "type": "function"
        },
        "index": {
          "description": "Handy infix curried Prod",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(*:*) *:*",
          "normalized": "a b-\u003ec b-\u003e(a*c)b",
          "package": "TypeCompose",
          "signature": "f a-\u003eg a-\u003e(f*g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42-:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy infix & curried \u003ccode\u003e\u003ca\u003eProdd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "(*::*)",
          "package": "TypeCompose",
          "signature": "g) a b",
          "source": "src/Control-Compose.html#%2A%3A%3A%2A",
          "type": "function"
        },
        "index": {
          "description": "Handy infix curried Prodd",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(*::*) *::*",
          "package": "TypeCompose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-42-::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "(\u003c~)",
          "package": "TypeCompose",
          "signature": "(b `cat` b') -\u003e (a' `cat` a) -\u003e (a `cat` b) -\u003e a' `cat` b'",
          "source": "src/Control-Compose.html#%3C~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "(\u003c~) \u003c~",
          "normalized": "(a b c)-\u003e(d b e)-\u003e(e b a)-\u003ed b c",
          "package": "TypeCompose",
          "signature": "(b cat b')-\u003e(a' cat a)-\u003e(a cat b)-\u003ea' cat b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "App",
          "package": "TypeCompose",
          "signature": "App",
          "source": "src/Control-Compose.html#%3A%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "App",
          "package": "TypeCompose",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "Arrw",
          "package": "TypeCompose",
          "signature": "Arrw",
          "source": "src/Control-Compose.html#Arrw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Arrw",
          "package": "TypeCompose",
          "partial": "Arrw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Arrw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "Flip",
          "package": "TypeCompose",
          "signature": "Flip",
          "source": "src/Control-Compose.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Flip",
          "package": "TypeCompose",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "FunA",
          "package": "TypeCompose",
          "signature": "FunA",
          "source": "src/Control-Compose.html#FunA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "FunA",
          "package": "TypeCompose",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:FunA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "Id",
          "package": "TypeCompose",
          "signature": "Id a",
          "source": "src/Control-Compose.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Id",
          "package": "TypeCompose",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "O",
          "package": "TypeCompose",
          "signature": "O (g (f a))",
          "source": "src/Control-Compose.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "O",
          "package": "TypeCompose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "OO",
          "package": "TypeCompose",
          "signature": "OO",
          "source": "src/Control-Compose.html#OO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "OO",
          "package": "TypeCompose",
          "partial": "OO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:OO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "Prod",
          "package": "TypeCompose",
          "signature": "Prod",
          "source": "src/Control-Compose.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Prod",
          "package": "TypeCompose",
          "partial": "Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "Prodd",
          "package": "TypeCompose",
          "signature": "Prodd",
          "source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "Prodd",
          "package": "TypeCompose",
          "partial": "Prodd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:Prodd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd pre-processing\n argument :: (a' -\u003e a) -\u003e ((a -\u003e b) -\u003e (a' -\u003e b))\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "argument",
          "package": "TypeCompose",
          "signature": "(a' `cat` a) -\u003e (a `cat` b) -\u003e a' `cat` b",
          "source": "src/Control-Compose.html#argument",
          "type": "function"
        },
        "index": {
          "description": "Add pre-processing argument",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "argument",
          "normalized": "(a b c)-\u003e(c b d)-\u003ea b d",
          "package": "TypeCompose",
          "signature": "(a' cat a)-\u003e(a cat b)-\u003ea' cat b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:argument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "arrFun",
          "package": "TypeCompose",
          "signature": "arrFun",
          "source": "src/Control-Compose.html#arrFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "arrFun",
          "package": "TypeCompose",
          "partial": "Fun",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:arrFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biApp",
          "package": "TypeCompose",
          "signature": "f a :\u003c-\u003e: App f a",
          "source": "src/Control-Compose.html#biApp",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biApp",
          "normalized": "a b-\u003eApp a b",
          "package": "TypeCompose",
          "partial": "App",
          "signature": "f a-\u003eApp f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biConst",
          "package": "TypeCompose",
          "signature": "a :\u003c-\u003e: Const a b",
          "source": "src/Control-Compose.html#biConst",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biConst",
          "normalized": "a-\u003eConst a b",
          "package": "TypeCompose",
          "partial": "Const",
          "signature": "a-\u003eConst a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biEndo",
          "package": "TypeCompose",
          "signature": "(a -\u003e a) :\u003c-\u003e: Endo a",
          "source": "src/Control-Compose.html#biEndo",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biEndo",
          "normalized": "(a-\u003ea)-\u003eEndo a",
          "package": "TypeCompose",
          "partial": "Endo",
          "signature": "(a-\u003ea)-\u003eEndo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biFlip",
          "package": "TypeCompose",
          "signature": "(a `j` b) :\u003c-\u003e: Flip j b a",
          "source": "src/Control-Compose.html#biFlip",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biFlip",
          "normalized": "(a b c)-\u003eFlip b c a",
          "package": "TypeCompose",
          "partial": "Flip",
          "signature": "(a j b)-\u003eFlip j b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biFun",
          "package": "TypeCompose",
          "signature": "(f a -\u003e g a) :\u003c-\u003e: (f :-\u003e: g) a",
          "source": "src/Control-Compose.html#biFun",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biFun",
          "normalized": "(a b-\u003ec b)-\u003e(a-\u003ec)b",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "(f a-\u003eg a)-\u003e(f-\u003eg)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biId",
          "package": "TypeCompose",
          "signature": "a :\u003c-\u003e: Id a",
          "source": "src/Control-Compose.html#biId",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biId",
          "normalized": "a-\u003eId a",
          "package": "TypeCompose",
          "partial": "Id",
          "signature": "a-\u003eId a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biO",
          "package": "TypeCompose",
          "signature": "g (f a) :\u003c-\u003e: (g :. f) a",
          "source": "src/Control-Compose.html#biO",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biO",
          "normalized": "a(b c)-\u003e(a b)c",
          "package": "TypeCompose",
          "signature": "g(f a)-\u003e(g f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "biProd",
          "package": "TypeCompose",
          "signature": "(f a, g a) :\u003c-\u003e: (f :*: g) a",
          "source": "src/Control-Compose.html#biProd",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "biProd",
          "normalized": "(a b,c b)-\u003e(a*c)b",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "(f a,g a)-\u003e(f*g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:biProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBijections on contravariant functors\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "bicomap",
          "package": "TypeCompose",
          "signature": "(a :\u003c-\u003e: b) -\u003e f a :\u003c-\u003e: f b",
          "source": "src/Control-Compose.html#bicomap",
          "type": "function"
        },
        "index": {
          "description": "Bijections on contravariant functors",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "bicomap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "TypeCompose",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:bicomap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA candidate '(\u003e\u003e=)' for \u003ccode\u003e(m :. n)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "bindDistribM",
          "package": "TypeCompose",
          "signature": "(m :. n) a -\u003e (a -\u003e (m :. n) b) -\u003e (m :. n) b",
          "source": "src/Control-Compose.html#bindDistribM",
          "type": "function"
        },
        "index": {
          "description": "candidate for",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "bindDistribM",
          "normalized": "(a b)c-\u003e(c-\u003e(a b)d)-\u003e(a b)d",
          "package": "TypeCompose",
          "partial": "Distrib",
          "signature": "(m n)a-\u003e(a-\u003e(m n)b)-\u003e(m n)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:bindDistribM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a bijection, ContraFunctor style\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "coconvO",
          "package": "TypeCompose",
          "signature": "(b :\u003c-\u003e: g c) -\u003e (c :\u003c-\u003e: f a) -\u003e b :\u003c-\u003e: (g :. f) a",
          "source": "src/Control-Compose.html#coconvO",
          "type": "function"
        },
        "index": {
          "description": "Compose bijection ContraFunctor style",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "coconvO",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ed e)-\u003ea-\u003e(b d)e",
          "package": "TypeCompose",
          "signature": "(b-\u003eg c)-\u003e(c-\u003ef a)-\u003eb-\u003e(g f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:coconvO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "contraFmap",
          "package": "TypeCompose",
          "signature": "(a -\u003e b) -\u003e h b -\u003e h a",
          "source": "src/Control-Compose.html#contraFmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "contraFmap",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "TypeCompose",
          "partial": "Fmap",
          "signature": "(a-\u003eb)-\u003eh b-\u003eh a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for the \u003ccode\u003eContraFunctor :. Functor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "contraFmapCF",
          "package": "TypeCompose",
          "signature": "(b -\u003e a) -\u003e (g :. f) a -\u003e (g :. f) b",
          "source": "src/Control-Compose.html#contraFmapCF",
          "type": "function"
        },
        "index": {
          "description": "Used for the ContraFunctor Functor instance of Functor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "contraFmapCF",
          "normalized": "(a-\u003eb)-\u003e(c d)b-\u003e(c d)a",
          "package": "TypeCompose",
          "partial": "Fmap CF",
          "signature": "(b-\u003ea)-\u003e(g f)a-\u003e(g f)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmapCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for the \u003ccode\u003eFunctor :. ContraFunctor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "contraFmapFC",
          "package": "TypeCompose",
          "signature": "(b -\u003e a) -\u003e (g :. f) a -\u003e (g :. f) b",
          "source": "src/Control-Compose.html#contraFmapFC",
          "type": "function"
        },
        "index": {
          "description": "Used for the Functor ContraFunctor instance of Functor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "contraFmapFC",
          "normalized": "(a-\u003eb)-\u003e(c d)b-\u003e(c d)a",
          "package": "TypeCompose",
          "partial": "Fmap FC",
          "signature": "(b-\u003ea)-\u003e(g f)a-\u003e(g f)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:contraFmapFC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "convFun",
          "package": "TypeCompose",
          "signature": "(b :\u003c-\u003e: f a) -\u003e (c :\u003c-\u003e: g a) -\u003e (b -\u003e c) :\u003c-\u003e: (f :-\u003e: g) a",
          "source": "src/Control-Compose.html#convFun",
          "type": "function"
        },
        "index": {
          "description": "Compose bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "convFun",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003ee c)-\u003e(a-\u003ed)-\u003e(b-\u003ee)c",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "(b-\u003ef a)-\u003e(c-\u003eg a)-\u003e(b-\u003ec)-\u003e(f-\u003eg)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a bijection, Functor style\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "convO",
          "package": "TypeCompose",
          "signature": "(b :\u003c-\u003e: g c) -\u003e (c :\u003c-\u003e: f a) -\u003e b :\u003c-\u003e: (g :. f) a",
          "source": "src/Control-Compose.html#convO",
          "type": "function"
        },
        "index": {
          "description": "Compose bijection Functor style",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "convO",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ed e)-\u003ea-\u003e(b d)e",
          "package": "TypeCompose",
          "signature": "(b-\u003eg c)-\u003e(c-\u003ef a)-\u003eb-\u003e(g f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a bijection\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "convProd",
          "package": "TypeCompose",
          "signature": "(b :\u003c-\u003e: f a) -\u003e (c :\u003c-\u003e: g a) -\u003e (b, c) :\u003c-\u003e: (f :*: g) a",
          "source": "src/Control-Compose.html#convProd",
          "type": "function"
        },
        "index": {
          "description": "Compose bijection",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "convProd",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003ee c)-\u003e(a,d)-\u003e(b*e)c",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "(b-\u003ef a)-\u003e(c-\u003eg a)-\u003e(b,c)-\u003e(f*g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:convProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "distribM",
          "package": "TypeCompose",
          "signature": "n (m a) -\u003e m (n a)",
          "source": "src/Control-Compose.html#distribM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "distribM",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "TypeCompose",
          "signature": "n(m a)-\u003em(n a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:distribM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "firstFun",
          "package": "TypeCompose",
          "signature": "(h a -\u003e h a') -\u003e h (a, b) -\u003e h (a', b)",
          "source": "src/Control-Compose.html#firstFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "firstFun",
          "normalized": "(a b-\u003ea c)-\u003ea(b,d)-\u003ea(c,d)",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "(h a-\u003eh a')-\u003eh(a,b)-\u003eh(a',b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:firstFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for the \u003ccode\u003eContraFunctor :. ContraFunctor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "fmapCC",
          "package": "TypeCompose",
          "signature": "(a -\u003e b) -\u003e (g :. f) a -\u003e (g :. f) b",
          "source": "src/Control-Compose.html#fmapCC",
          "type": "function"
        },
        "index": {
          "description": "Used for the ContraFunctor ContraFunctor instance of Functor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "fmapCC",
          "normalized": "(a-\u003eb)-\u003e(c d)a-\u003e(c d)b",
          "package": "TypeCompose",
          "partial": "CC",
          "signature": "(a-\u003eb)-\u003e(g f)a-\u003e(g f)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:fmapCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for the \u003ccode\u003eFunctor :. Functor\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "fmapFF",
          "package": "TypeCompose",
          "signature": "(a -\u003e b) -\u003e (g :. f) a -\u003e (g :. f) b",
          "source": "src/Control-Compose.html#fmapFF",
          "type": "function"
        },
        "index": {
          "description": "Used for the Functor Functor instance of Functor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "fmapFF",
          "normalized": "(a-\u003eb)-\u003e(c d)a-\u003e(c d)b",
          "package": "TypeCompose",
          "partial": "FF",
          "signature": "(a-\u003eb)-\u003e(g f)a-\u003e(g f)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:fmapFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inApp",
          "package": "TypeCompose",
          "signature": "(f a -\u003e f' a') -\u003e App f a -\u003e App f' a'",
          "source": "src/Control-Compose.html#inApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inApp",
          "normalized": "(a b-\u003ec d)-\u003eApp a b-\u003eApp c d",
          "package": "TypeCompose",
          "partial": "App",
          "signature": "(f a-\u003ef' a')-\u003eApp f a-\u003eApp f' a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inApp2",
          "package": "TypeCompose",
          "signature": "(f a -\u003e f' a' -\u003e f'' a'') -\u003e App f a -\u003e App f' a' -\u003e App f'' a''",
          "source": "src/Control-Compose.html#inApp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inApp2",
          "normalized": "(a b-\u003ec d-\u003ee f)-\u003eApp a b-\u003eApp c d-\u003eApp e f",
          "package": "TypeCompose",
          "partial": "App",
          "signature": "(f a-\u003ef' a'-\u003ef'' a'')-\u003eApp f a-\u003eApp f' a'-\u003eApp f'' a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inApp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply unary function inside of \u003ccode\u003eArrw\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inArrw",
          "package": "TypeCompose",
          "signature": "((f a `j` g a) -\u003e f' a' `j` g' a') -\u003e Arrw j f g a -\u003e Arrw j f' g' a'",
          "source": "src/Control-Compose.html#inArrw",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function inside of Arrw representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inArrw",
          "normalized": "((a b c d b)-\u003ee f c g f)-\u003eArrw c a d b-\u003eArrw c e g f",
          "package": "TypeCompose",
          "partial": "Arrw",
          "signature": "((f a j g a)-\u003ef' a' j g' a')-\u003eArrw j f g a-\u003eArrw j f' g' a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply binary function inside of \u003ccode\u003eArrw j f g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inArrw2",
          "package": "TypeCompose",
          "signature": "((f a `j` g a) -\u003e (f' a' `j` g' a') -\u003e f'' a'' `j` g'' a'') -\u003e Arrw j f g a -\u003e Arrw j f' g' a' -\u003e Arrw j f'' g'' a''",
          "source": "src/Control-Compose.html#inArrw2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function inside of Arrw representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inArrw2",
          "normalized": "((a b c d b)-\u003e(e f c g f)-\u003eh i c j i)-\u003eArrw c a d b-\u003eArrw c e g f-\u003eArrw c h j i",
          "package": "TypeCompose",
          "partial": "Arrw",
          "signature": "((f a j g a)-\u003e(f' a' j g' a')-\u003ef'' a'' j g'' a'')-\u003eArrw j f g a-\u003eArrw j f' g' a'-\u003eArrw j f'' g'' a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply ternary function inside of \u003ccode\u003eArrw j f g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inArrw3",
          "package": "TypeCompose",
          "signature": "((f a `j` g a) -\u003e (f' a' `j` g' a') -\u003e (f'' a'' `j` g'' a'') -\u003e f''' a''' `j` g''' a''') -\u003e Arrw j f g a -\u003e Arrw j f' g' a' -\u003e Arrw j f'' g'' a'' -\u003e Arrw j f''' g''' a'''",
          "source": "src/Control-Compose.html#inArrw3",
          "type": "function"
        },
        "index": {
          "description": "Apply ternary function inside of Arrw representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inArrw3",
          "normalized": "((a b c d b)-\u003e(e f c g f)-\u003e(h i c j i)-\u003ek l c m l)-\u003eArrw c a d b-\u003eArrw c e g f-\u003eArrw c h j i-\u003eArrw c k m l",
          "package": "TypeCompose",
          "partial": "Arrw",
          "signature": "((f a j g a)-\u003e(f' a' j g' a')-\u003e(f'' a'' j g'' a'')-\u003ef''' a''' j g''' a''')-\u003eArrw j f g a-\u003eArrw j f' g' a'-\u003eArrw j f'' g'' a''-\u003eArrw j f''' g''' a'''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inArrw3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inConst",
          "package": "TypeCompose",
          "signature": "(a -\u003e b) -\u003e Const a u -\u003e Const b v",
          "source": "src/Control-Compose.html#inConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inConst",
          "normalized": "(a-\u003eb)-\u003eConst a c-\u003eConst b d",
          "package": "TypeCompose",
          "partial": "Const",
          "signature": "(a-\u003eb)-\u003eConst a u-\u003eConst b v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inConst2",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c) -\u003e Const a u -\u003e Const b v -\u003e Const c w",
          "source": "src/Control-Compose.html#inConst2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inConst2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eConst a d-\u003eConst b e-\u003eConst c f",
          "package": "TypeCompose",
          "partial": "Const",
          "signature": "(a-\u003eb-\u003ec)-\u003eConst a u-\u003eConst b v-\u003eConst c w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inConst3",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Const a u -\u003e Const b v -\u003e Const c w -\u003e Const d x",
          "source": "src/Control-Compose.html#inConst3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inConst3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eConst a e-\u003eConst b f-\u003eConst c g-\u003eConst d h",
          "package": "TypeCompose",
          "partial": "Const",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eConst a u-\u003eConst b v-\u003eConst c w-\u003eConst d x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inConst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience for partial-manipulating functions\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inEndo",
          "package": "TypeCompose",
          "signature": "(Unop a -\u003e Unop a') -\u003e Endo a -\u003e Endo a'",
          "source": "src/Control-Compose.html#inEndo",
          "type": "function"
        },
        "index": {
          "description": "Convenience for partial-manipulating functions",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inEndo",
          "normalized": "(Unop a-\u003eUnop b)-\u003eEndo a-\u003eEndo b",
          "package": "TypeCompose",
          "partial": "Endo",
          "signature": "(Unop a-\u003eUnop a')-\u003eEndo a-\u003eEndo a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inFlip",
          "package": "TypeCompose",
          "signature": "((a `j` b) -\u003e a' `k` b') -\u003e Flip j b a -\u003e Flip k b' a'",
          "source": "src/Control-Compose.html#inFlip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inFlip",
          "normalized": "((a b c)-\u003ed e f)-\u003eFlip b c a-\u003eFlip e f d",
          "package": "TypeCompose",
          "partial": "Flip",
          "signature": "((a j b)-\u003ea' k b')-\u003eFlip j b a-\u003eFlip k b' a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inFlip2",
          "package": "TypeCompose",
          "signature": "((a `j` b) -\u003e (a' `k` b') -\u003e a'' `l` b'') -\u003e Flip j b a -\u003e Flip k b' a' -\u003e Flip l b'' a''",
          "source": "src/Control-Compose.html#inFlip2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inFlip2",
          "normalized": "((a b c)-\u003e(d e f)-\u003eg h i)-\u003eFlip b c a-\u003eFlip e f d-\u003eFlip h i g",
          "package": "TypeCompose",
          "partial": "Flip",
          "signature": "((a j b)-\u003e(a' k b')-\u003ea'' l b'')-\u003eFlip j b a-\u003eFlip k b' a'-\u003eFlip l b'' a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inFlip3",
          "package": "TypeCompose",
          "signature": "((a `j` b) -\u003e (a' `k` b') -\u003e (a'' `l` b'') -\u003e a''' `m` b''') -\u003e Flip j b a -\u003e Flip k b' a' -\u003e Flip l b'' a'' -\u003e Flip m b''' a'''",
          "source": "src/Control-Compose.html#inFlip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inFlip3",
          "normalized": "((a b c)-\u003e(d e f)-\u003e(g h i)-\u003ej k l)-\u003eFlip b c a-\u003eFlip e f d-\u003eFlip h i g-\u003eFlip k l j",
          "package": "TypeCompose",
          "partial": "Flip",
          "signature": "((a j b)-\u003e(a' k b')-\u003e(a'' l b'')-\u003ea''' m b''')-\u003eFlip j b a-\u003eFlip k b' a'-\u003eFlip l b'' a''-\u003eFlip m b''' a'''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFlip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply unary function in side a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inFunA",
          "package": "TypeCompose",
          "signature": "((h a -\u003e h b) -\u003e h' a' -\u003e h' b') -\u003e FunA h a b -\u003e FunA h' a' b'",
          "source": "src/Control-Compose.html#inFunA",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function in side FunA representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inFunA",
          "normalized": "((a b-\u003ea c)-\u003ed e-\u003ed f)-\u003eFunA a b c-\u003eFunA d e f",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "((h a-\u003eh b)-\u003eh' a'-\u003eh' b')-\u003eFunA h a b-\u003eFunA h' a' b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFunA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply binary function in side a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inFunA2",
          "package": "TypeCompose",
          "signature": "((h a -\u003e h b) -\u003e (h' a' -\u003e h' b') -\u003e h'' a'' -\u003e h'' b'') -\u003e FunA h a b -\u003e FunA h' a' b' -\u003e FunA h'' a'' b''",
          "source": "src/Control-Compose.html#inFunA2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function in side FunA representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inFunA2",
          "normalized": "((a b-\u003ea c)-\u003e(d e-\u003ed f)-\u003eg h-\u003eg i)-\u003eFunA a b c-\u003eFunA d e f-\u003eFunA g h i",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "((h a-\u003eh b)-\u003e(h' a'-\u003eh' b')-\u003eh'' a''-\u003eh'' b'')-\u003eFunA h a b-\u003eFunA h' a' b'-\u003eFunA h'' a'' b''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inFunA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inId",
          "package": "TypeCompose",
          "signature": "(a -\u003e b) -\u003e Id a -\u003e Id b",
          "source": "src/Control-Compose.html#inId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inId",
          "normalized": "(a-\u003eb)-\u003eId a-\u003eId b",
          "package": "TypeCompose",
          "partial": "Id",
          "signature": "(a-\u003eb)-\u003eId a-\u003eId b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "inId2",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c) -\u003e Id a -\u003e Id b -\u003e Id c",
          "source": "src/Control-Compose.html#inId2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inId2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c",
          "package": "TypeCompose",
          "partial": "Id",
          "signature": "(a-\u003eb-\u003ec)-\u003eId a-\u003eId b-\u003eId c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inId2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a unary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inO",
          "package": "TypeCompose",
          "signature": "(g (f a) -\u003e g' (f' a')) -\u003e (g :. f) a -\u003e (g' :. f') a'",
          "source": "src/Control-Compose.html#inO",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function within the constructor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inO",
          "normalized": "(a(b c)-\u003ed(e f))-\u003e(a b)c-\u003e(d e)f",
          "package": "TypeCompose",
          "signature": "(g(f a)-\u003eg'(f' a'))-\u003e(g f)a-\u003e(g' f')a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a binary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inO2",
          "package": "TypeCompose",
          "signature": "(g (f a) -\u003e g' (f' a') -\u003e g'' (f'' a'')) -\u003e (g :. f) a -\u003e (g' :. f') a' -\u003e (g'' :. f'') a''",
          "source": "src/Control-Compose.html#inO2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function within the constructor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inO2",
          "normalized": "(a(b c)-\u003ed(e f)-\u003eg(h i))-\u003e(a b)c-\u003e(d e)f-\u003e(g h)i",
          "package": "TypeCompose",
          "signature": "(g(f a)-\u003eg'(f' a')-\u003eg''(f'' a''))-\u003e(g f)a-\u003e(g' f')a'-\u003e(g'' f'')a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a ternary function within the \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inO3",
          "package": "TypeCompose",
          "signature": "(g (f a) -\u003e g' (f' a') -\u003e g'' (f'' a'') -\u003e g''' (f''' a''')) -\u003e (g :. f) a -\u003e (g' :. f') a' -\u003e (g'' :. f'') a'' -\u003e (g''' :. f''') a'''",
          "source": "src/Control-Compose.html#inO3",
          "type": "function"
        },
        "index": {
          "description": "Apply ternary function within the constructor",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inO3",
          "normalized": "(a(b c)-\u003ed(e f)-\u003eg(h i)-\u003ej(k l))-\u003e(a b)c-\u003e(d e)f-\u003e(g h)i-\u003e(j k)l",
          "package": "TypeCompose",
          "signature": "(g(f a)-\u003eg'(f' a')-\u003eg''(f'' a'')-\u003eg'''(f''' a'''))-\u003e(g f)a-\u003e(g' f')a'-\u003e(g'' f'')a''-\u003e(g''' f''')a'''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inO3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply unary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inProd",
          "package": "TypeCompose",
          "signature": "((f a, g a) -\u003e (f' a', g' a')) -\u003e (f :*: g) a -\u003e (f' :*: g') a'",
          "source": "src/Control-Compose.html#inProd",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function inside of representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inProd",
          "normalized": "((a b,c b)-\u003e(d e,f e))-\u003e(a*c)b-\u003e(d*f)e",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "((f a,g a)-\u003e(f' a',g' a'))-\u003e(f*g)a-\u003e(f'*g')a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inProd2",
          "package": "TypeCompose",
          "signature": "((f a, g a) -\u003e (f' a', g' a') -\u003e (f'' a'', g'' a'')) -\u003e (f :*: g) a -\u003e (f' :*: g') a' -\u003e (f'' :*: g'') a''",
          "source": "src/Control-Compose.html#inProd2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function inside of representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inProd2",
          "normalized": "((a b,c b)-\u003e(d e,f e)-\u003e(g h,i h))-\u003e(a*c)b-\u003e(d*f)e-\u003e(g*i)h",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "((f a,g a)-\u003e(f' a',g' a')-\u003e(f'' a'',g'' a''))-\u003e(f*g)a-\u003e(f'*g')a'-\u003e(f''*g'')a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply ternary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inProd3",
          "package": "TypeCompose",
          "signature": "((f a, g a) -\u003e (f' a', g' a') -\u003e (f'' a'', g'' a'') -\u003e (f''' a''', g''' a''')) -\u003e (f :*: g) a -\u003e (f' :*: g') a' -\u003e (f'' :*: g'') a'' -\u003e (f''' :*: g''') a'''",
          "source": "src/Control-Compose.html#inProd3",
          "type": "function"
        },
        "index": {
          "description": "Apply ternary function inside of representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inProd3",
          "normalized": "((a b,c b)-\u003e(d e,f e)-\u003e(g h,i h)-\u003e(j k,l k))-\u003e(a*c)b-\u003e(d*f)e-\u003e(g*i)h-\u003e(j*l)k",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "((f a,g a)-\u003e(f' a',g' a')-\u003e(f'' a'',g'' a'')-\u003e(f''' a''',g''' a'''))-\u003e(f*g)a-\u003e(f'*g')a'-\u003e(f''*g'')a''-\u003e(f'''*g''')a'''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inProdd",
          "package": "TypeCompose",
          "signature": "g') a' b'",
          "source": "src/Control-Compose.html#inProdd",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function inside of representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inProdd",
          "package": "TypeCompose",
          "partial": "Prodd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply binary function inside of \u003ccode\u003ef :*: g\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "inProdd2",
          "package": "TypeCompose",
          "signature": "g'') a'' b''",
          "source": "src/Control-Compose.html#inProdd2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function inside of representation",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "inProdd2",
          "package": "TypeCompose",
          "partial": "Prodd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:inProdd2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e-like function for explicitly composed monads\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "joinComposeT",
          "package": "TypeCompose",
          "signature": "(m :. n) ((m :. n) a) -\u003e (m :. n) a",
          "source": "src/Control-Compose.html#joinComposeT",
          "type": "function"
        },
        "index": {
          "description": "join like function for explicitly composed monads",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "joinComposeT",
          "normalized": "(a b)((a b)c)-\u003e(a b)c",
          "package": "TypeCompose",
          "partial": "Compose",
          "signature": "(m n)((m n)a)-\u003e(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinComposeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA candidate \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e(m :. n)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "joinDistribM",
          "package": "TypeCompose",
          "signature": "(m :. n) ((m :. n) a) -\u003e (m :. n) a",
          "source": "src/Control-Compose.html#joinDistribM",
          "type": "function"
        },
        "index": {
          "description": "candidate join for",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "joinDistribM",
          "normalized": "(a b)((a b)c)-\u003e(a b)c",
          "package": "TypeCompose",
          "partial": "Distrib",
          "signature": "(m n)((m n)a)-\u003e(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinDistribM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e-like function for implicitly composed monads\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "joinMMT",
          "package": "TypeCompose",
          "signature": "m (n (m (n a))) -\u003e m (n a)",
          "source": "src/Control-Compose.html#joinMMT",
          "type": "function"
        },
        "index": {
          "description": "join like function for implicitly composed monads",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "joinMMT",
          "normalized": "a(b(a(b c)))-\u003ea(b c)",
          "package": "TypeCompose",
          "partial": "MMT",
          "signature": "m(n(m(n a)))-\u003em(n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:joinMMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "mappend_f",
          "package": "TypeCompose",
          "signature": "forall a.  m a -\u003e m a -\u003e m a",
          "source": "src/Control-Compose.html#mappend_f",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "mappend_f",
          "normalized": "a b c d-\u003ec d-\u003ec d",
          "package": "TypeCompose",
          "signature": "forall a. m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:mappend_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "mempty_f",
          "package": "TypeCompose",
          "signature": "forall a.  m a",
          "source": "src/Control-Compose.html#mempty_f",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "mempty_f",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:mempty_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "oFmap",
          "package": "TypeCompose",
          "signature": "(f a -\u003e f' a') -\u003e (g' :. f) a -\u003e (g' :. f') a'",
          "source": "src/Control-Compose.html#oFmap",
          "type": "function"
        },
        "index": {
          "description": "Handy combination of inO and fmap",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "oFmap",
          "normalized": "(a b-\u003ec d)-\u003e(e a)b-\u003e(e c)d",
          "package": "TypeCompose",
          "partial": "Fmap",
          "signature": "(f a-\u003ef' a')-\u003e(g' f)a-\u003e(g' f')a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oFmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "oLiftA2",
          "package": "TypeCompose",
          "signature": "(f a -\u003e f' a' -\u003e f'' a'') -\u003e (g'' :. f) a -\u003e (g'' :. f') a' -\u003e (g'' :. f'') a''",
          "source": "src/Control-Compose.html#oLiftA2",
          "type": "function"
        },
        "index": {
          "description": "Handy combination of inO2 and liftA2",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "oLiftA2",
          "normalized": "(a b-\u003ec d-\u003ee f)-\u003e(g a)b-\u003e(g c)d-\u003e(g e)f",
          "package": "TypeCompose",
          "partial": "Lift",
          "signature": "(f a-\u003ef' a'-\u003ef'' a'')-\u003e(g'' f)a-\u003e(g'' f')a'-\u003e(g'' f'')a''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oLiftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003einO3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftA3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "oLiftA3",
          "package": "TypeCompose",
          "signature": "(f a -\u003e f' a' -\u003e f'' a'' -\u003e f''' a''') -\u003e (g''' :. f) a -\u003e (g''' :. f') a' -\u003e (g''' :. f'') a'' -\u003e (g''' :. f''') a'''",
          "source": "src/Control-Compose.html#oLiftA3",
          "type": "function"
        },
        "index": {
          "description": "Handy combination of inO3 and liftA3",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "oLiftA3",
          "normalized": "(a b-\u003ec d-\u003ee f-\u003eg h)-\u003e(i a)b-\u003e(i c)d-\u003e(i e)f-\u003e(i g)h",
          "package": "TypeCompose",
          "partial": "Lift",
          "signature": "(f a-\u003ef' a'-\u003ef'' a''-\u003ef''' a''')-\u003e(g''' f)a-\u003e(g''' f')a'-\u003e(g''' f'')a''-\u003e(g''' f''')a'''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oLiftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy combination of \u003ccode\u003e\u003ca\u003eO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "oPure",
          "package": "TypeCompose",
          "signature": "f a -\u003e (g :. f) a",
          "source": "src/Control-Compose.html#oPure",
          "type": "function"
        },
        "index": {
          "description": "Handy combination of and pure",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "oPure",
          "normalized": "a b-\u003e(c a)b",
          "package": "TypeCompose",
          "partial": "Pure",
          "signature": "f a-\u003e(g f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:oPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd post-processing\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "result",
          "package": "TypeCompose",
          "signature": "(b `cat` b') -\u003e (a `cat` b) -\u003e a `cat` b'",
          "source": "src/Control-Compose.html#result",
          "type": "function"
        },
        "index": {
          "description": "Add post-processing",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "result",
          "normalized": "(a b c)-\u003e(d b a)-\u003ed b c",
          "package": "TypeCompose",
          "signature": "(b cat b')-\u003e(a cat b)-\u003ea cat b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "returnDistribM",
          "package": "TypeCompose",
          "signature": "a -\u003e (m :. n) a",
          "source": "src/Control-Compose.html#returnDistribM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "returnDistribM",
          "normalized": "a-\u003e(b c)a",
          "package": "TypeCompose",
          "partial": "Distrib",
          "signature": "a-\u003e(m n)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:returnDistribM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "secondFun",
          "package": "TypeCompose",
          "signature": "(h b -\u003e h b') -\u003e h (a, b) -\u003e h (a, b')",
          "source": "src/Control-Compose.html#secondFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "secondFun",
          "normalized": "(a b-\u003ea c)-\u003ea(d,b)-\u003ea(d,c)",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "(h b-\u003eh b')-\u003eh(a,b)-\u003eh(a,b')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:secondFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "toOI",
          "package": "TypeCompose",
          "signature": "sink b -\u003e OI b",
          "source": "src/Control-Compose.html#toOI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "toOI",
          "normalized": "a b-\u003eOI b",
          "package": "TypeCompose",
          "partial": "OI",
          "signature": "sink b-\u003eOI b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:toOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unApp",
          "package": "TypeCompose",
          "signature": "f a",
          "source": "src/Control-Compose.html#%3A%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unApp",
          "package": "TypeCompose",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unArrw",
          "package": "TypeCompose",
          "signature": "f a `j` g a",
          "source": "src/Control-Compose.html#Arrw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unArrw",
          "package": "TypeCompose",
          "partial": "Arrw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unArrw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unFlip",
          "package": "TypeCompose",
          "signature": "a `j` b",
          "source": "src/Control-Compose.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unFlip",
          "package": "TypeCompose",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unFunA",
          "package": "TypeCompose",
          "signature": "h a -\u003e h b",
          "source": "src/Control-Compose.html#FunA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unFunA",
          "normalized": "a b-\u003ea c",
          "package": "TypeCompose",
          "partial": "Fun",
          "signature": "h a-\u003eh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unFunA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unId",
          "package": "TypeCompose",
          "signature": "Id a -\u003e a",
          "source": "src/Control-Compose.html#unId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unId",
          "normalized": "Id a-\u003ea",
          "package": "TypeCompose",
          "partial": "Id",
          "signature": "Id a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a '(:.)'.\n\u003c/p\u003e",
          "module": "Control.Compose",
          "name": "unO",
          "package": "TypeCompose",
          "signature": "(g :. f) a -\u003e g (f a)",
          "source": "src/Control-Compose.html#unO",
          "type": "function"
        },
        "index": {
          "description": "Unwrap",
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unO",
          "normalized": "(a b)c-\u003ea(b c)",
          "package": "TypeCompose",
          "signature": "(g f)a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unOO",
          "package": "TypeCompose",
          "signature": "f (a `j` b)",
          "source": "src/Control-Compose.html#OO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unOO",
          "package": "TypeCompose",
          "partial": "OO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unOO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unProd",
          "package": "TypeCompose",
          "signature": "(f a, g a)",
          "source": "src/Control-Compose.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unProd",
          "normalized": "(a b,c b)",
          "package": "TypeCompose",
          "partial": "Prod",
          "signature": "(f a,g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compose",
          "name": "unProdd",
          "package": "TypeCompose",
          "signature": "(f a b, g a b)",
          "source": "src/Control-Compose.html#%3A%3A%2A%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compose",
          "module": "Control.Compose",
          "name": "unProdd",
          "normalized": "(a b c,d b c)",
          "package": "TypeCompose",
          "partial": "Prodd",
          "signature": "(f a b,g a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Compose.html#v:unProdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome (orphan) instances that belong elsewhere (where they wouldn't be orphans).\n Add the following line to get these instances\n\u003c/p\u003e\u003cpre\u003e import Control.Instances ()\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Instances",
          "name": "Instances",
          "package": "TypeCompose",
          "source": "src/Control-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Some orphan instances that belong elsewhere where they wouldn be orphans Add the following line to get these instances import Control.Instances",
          "hierarchy": "Control Instances",
          "module": "Control.Instances",
          "name": "Instances",
          "package": "TypeCompose",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Control-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBijections.  For a more general setting, see also [1]\n \u003cem\u003eThere and Back Again: Arrows for Invertible Programming\u003c/em\u003e,\n \u003ca\u003ehttp://citeseer.ist.psu.edu/alimarine05there.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bijection",
          "name": "Bijection",
          "package": "TypeCompose",
          "source": "src/Data-Bijection.html",
          "type": "module"
        },
        "index": {
          "description": "Bijections For more general setting see also There and Back Again Arrows for Invertible Programming http citeseer.ist.psu.edu alimarine05there.html",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "Bijection",
          "package": "TypeCompose",
          "partial": "Bijection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBijective functions\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": ":\u003c-\u003e:",
          "package": "TypeCompose",
          "source": "src/Data-Bijection.html#%3A%3C-%3E%3A",
          "type": "type"
        },
        "index": {
          "description": "Bijective functions",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": ":\u003c-\u003e:",
          "package": "TypeCompose",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#t::-60--45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of bijective arrows\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "Bijection",
          "package": "TypeCompose",
          "source": "src/Data-Bijection.html#Bijection",
          "type": "data"
        },
        "index": {
          "description": "type of bijective arrows",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "Bijection",
          "package": "TypeCompose",
          "partial": "Bijection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#t:Bijection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBijections on arrows.\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "(---\u003e)",
          "package": "TypeCompose",
          "signature": "Bijection j a b -\u003e Bijection j c d -\u003e (a `j` c) :\u003c-\u003e: (b `j` d)",
          "source": "src/Data-Bijection.html#---%3E",
          "type": "function"
        },
        "index": {
          "description": "Bijections on arrows",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "(---\u003e) ---\u003e",
          "normalized": "Bijection a b c-\u003eBijection a d e-\u003e(b a d)-\u003e(c a e)",
          "package": "TypeCompose",
          "signature": "Bijection j a b-\u003eBijection j c d-\u003e(a j c)-\u003e(b j d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:-45--45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bijection",
          "name": "Bi",
          "package": "TypeCompose",
          "signature": "Bi",
          "source": "src/Data-Bijection.html#Bijection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "Bi",
          "package": "TypeCompose",
          "partial": "Bi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:Bi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bijection",
          "name": "biFrom",
          "package": "TypeCompose",
          "signature": "b `j` a",
          "source": "src/Data-Bijection.html#Bijection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "biFrom",
          "package": "TypeCompose",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:biFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bijection",
          "name": "biTo",
          "package": "TypeCompose",
          "signature": "a `j` b",
          "source": "src/Data-Bijection.html#Bijection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "biTo",
          "package": "TypeCompose",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:biTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBijections on functors\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "bimap",
          "package": "TypeCompose",
          "signature": "(a :\u003c-\u003e: b) -\u003e f a :\u003c-\u003e: f b",
          "source": "src/Data-Bijection.html#bimap",
          "type": "function"
        },
        "index": {
          "description": "Bijections on functors",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "bimap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "TypeCompose",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:bimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBijective identity arrow.  Warning: uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e(~\u003e)\u003c/code\u003e.  If you\n have no \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, but you have a \u003ccode\u003eDeepArrow\u003c/code\u003e, you can instead use \u003ccode\u003eBi idA\n idA\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "idb",
          "package": "TypeCompose",
          "signature": "Bijection j a a",
          "source": "src/Data-Bijection.html#idb",
          "type": "function"
        },
        "index": {
          "description": "Bijective identity arrow Warning uses arr on If you have no arr but you have DeepArrow you can instead use Bi idA idA",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "idb",
          "package": "TypeCompose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:idb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function in an alternative (monomorphic) representation.\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "inBi",
          "package": "TypeCompose",
          "signature": "Bijection j a b -\u003e (a `j` a) -\u003e b `j` b",
          "source": "src/Data-Bijection.html#inBi",
          "type": "function"
        },
        "index": {
          "description": "Apply function in an alternative monomorphic representation",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "inBi",
          "normalized": "Bijection a b c-\u003e(b a b)-\u003ec a c",
          "package": "TypeCompose",
          "partial": "Bi",
          "signature": "Bijection j a b-\u003e(a j a)-\u003eb j b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:inBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse bijection\n\u003c/p\u003e",
          "module": "Data.Bijection",
          "name": "inverse",
          "package": "TypeCompose",
          "signature": "Bijection j a b -\u003e Bijection j b a",
          "source": "src/Data-Bijection.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Inverse bijection",
          "hierarchy": "Data Bijection",
          "module": "Data.Bijection",
          "name": "inverse",
          "normalized": "Bijection a b c-\u003eBijection a c b",
          "package": "TypeCompose",
          "signature": "Bijection j a b-\u003eBijection j b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Bijection.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContext-dependent monoids\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "source": "src/Data-CxMonoid.html",
          "type": "module"
        },
        "index": {
          "description": "Context-dependent monoids",
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "partial": "Cx Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of context-dependent monoid.  Includes an explicit dictionary.\n\u003c/p\u003e",
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "source": "src/Data-CxMonoid.html#CxMonoid",
          "type": "newtype"
        },
        "index": {
          "description": "Type of context-dependent monoid Includes an explicit dictionary",
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "partial": "Cx Monoid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#t:CxMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary for \u003ccode\u003e\u003ca\u003eCxMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CxMonoid",
          "name": "MonoidDict",
          "package": "TypeCompose",
          "source": "src/Data-CxMonoid.html#MonoidDict",
          "type": "type"
        },
        "index": {
          "description": "Dictionary for CxMonoid",
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "MonoidDict",
          "package": "TypeCompose",
          "partial": "Monoid Dict",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#t:MonoidDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "signature": "CxMonoid",
          "source": "src/Data-CxMonoid.html#CxMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "CxMonoid",
          "package": "TypeCompose",
          "partial": "Cx Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:CxMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e bijection\n\u003c/p\u003e",
          "module": "Data.CxMonoid",
          "name": "biCxMonoid",
          "package": "TypeCompose",
          "signature": "(MonoidDict a -\u003e a) :\u003c-\u003e: CxMonoid a",
          "source": "src/Data-CxMonoid.html#biCxMonoid",
          "type": "function"
        },
        "index": {
          "description": "newtype bijection",
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "biCxMonoid",
          "normalized": "(MonoidDict a-\u003ea)-\u003eCxMonoid a",
          "package": "TypeCompose",
          "partial": "Cx Monoid",
          "signature": "(MonoidDict a-\u003ea)-\u003eCxMonoid a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:biCxMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CxMonoid",
          "name": "unCxMonoid",
          "package": "TypeCompose",
          "signature": "MonoidDict a -\u003e a",
          "source": "src/Data-CxMonoid.html#CxMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CxMonoid",
          "module": "Data.CxMonoid",
          "name": "unCxMonoid",
          "normalized": "MonoidDict a-\u003ea",
          "package": "TypeCompose",
          "partial": "Cx Monoid",
          "signature": "MonoidDict a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-CxMonoid.html#v:unCxMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome function-like classes, having lambda-like construction.\n See \u003ccode\u003e\u003ca\u003eLambdaTy\u003c/a\u003e\u003c/code\u003e for why \u003ca\u003elambda\u003c/a\u003e.\n See \u003ca\u003eData.Pair\u003c/a\u003e for similar classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Lambda",
          "name": "Lambda",
          "package": "TypeCompose",
          "source": "src/Data-Lambda.html",
          "type": "module"
        },
        "index": {
          "description": "Some function-like classes having lambda-like construction See LambdaTy for why lambda See Data.Pair for similar classes",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "Lambda",
          "package": "TypeCompose",
          "partial": "Lambda",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eCopair\u003c/code\u003e, but for functions\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "Colambda",
          "package": "TypeCompose",
          "source": "src/Data-Lambda.html#Colambda",
          "type": "class"
        },
        "index": {
          "description": "Like Copair but for functions",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "Colambda",
          "package": "TypeCompose",
          "partial": "Colambda",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Colambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType constructor class for function-like things having lambda-like construction.\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "Lambda",
          "package": "TypeCompose",
          "source": "src/Data-Lambda.html#Lambda",
          "type": "class"
        },
        "index": {
          "description": "Type constructor class for function-like things having lambda-like construction",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "Lambda",
          "package": "TypeCompose",
          "partial": "Lambda",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003elambda\u003c/a\u003e\u003c/code\u003e method.  Think of \u003ccode\u003esrc\u003c/code\u003e as the bound variable (or\n pattern) part of a lambda and \u003ccode\u003esnk\u003c/code\u003e as the expression part.  They\n combine to form a function-typed expression. \n Instance template:\n\u003c/p\u003e\u003cpre\u003e\n   instance (Applicative f, Lambda src snk)\n     =\u003e Lambda (f :. src) (f :. snk) where\n       lambda = apLambda\n\u003c/pre\u003e",
          "module": "Data.Lambda",
          "name": "LambdaTy",
          "package": "TypeCompose",
          "source": "src/Data-Lambda.html#LambdaTy",
          "type": "type"
        },
        "index": {
          "description": "Type of lambda method Think of src as the bound variable or pattern part of lambda and snk as the expression part They combine to form function-typed expression Instance template instance Applicative Lambda src snk Lambda src snk where lambda apLambda",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "LambdaTy",
          "package": "TypeCompose",
          "partial": "Lambda Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:LambdaTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eUnpair\u003c/code\u003e, but for functions.  Minimal instance definition: either (a)\n \u003ccode\u003e\u003ca\u003eunlambda\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b) both of \u003ccode\u003e\u003ca\u003efsrc\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003efres\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "Unlambda",
          "package": "TypeCompose",
          "source": "src/Data-Lambda.html#Unlambda",
          "type": "class"
        },
        "index": {
          "description": "Like Unpair but for functions Minimal instance definition either unlambda or both of fsrc and fres",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "Unlambda",
          "package": "TypeCompose",
          "partial": "Unlambda",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#t:Unlambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lambda",
          "name": "cores",
          "package": "TypeCompose",
          "signature": "f b -\u003e f (a -\u003e b)",
          "source": "src/Data-Lambda.html#cores",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "cores",
          "normalized": "a b-\u003ea(c-\u003eb)",
          "package": "TypeCompose",
          "signature": "f b-\u003ef(a-\u003eb)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:cores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond part of pair-like value\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "fres",
          "package": "TypeCompose",
          "signature": "snk (a -\u003e b) -\u003e snk b",
          "source": "src/Data-Lambda.html#fres",
          "type": "method"
        },
        "index": {
          "description": "Second part of pair-like value",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "fres",
          "normalized": "a(b-\u003ec)-\u003ea c",
          "package": "TypeCompose",
          "signature": "snk(a-\u003eb)-\u003esnk b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:fres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst part of pair-like value\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "fsrc",
          "package": "TypeCompose",
          "signature": "snk (a -\u003e b) -\u003e src a",
          "source": "src/Data-Lambda.html#fsrc",
          "type": "method"
        },
        "index": {
          "description": "First part of pair-like value",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "fsrc",
          "normalized": "a(b-\u003ec)-\u003ed b",
          "package": "TypeCompose",
          "signature": "snk(a-\u003eb)-\u003esrc a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:fsrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Lambda",
          "name": "lambda",
          "package": "TypeCompose",
          "signature": "lambda",
          "source": "src/Data-Lambda.html#lambda",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "lambda",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct pair-like value\n\u003c/p\u003e",
          "module": "Data.Lambda",
          "name": "unlambda",
          "package": "TypeCompose",
          "signature": "snk (a -\u003e b) -\u003e (src a, snk b)",
          "source": "src/Data-Lambda.html#unlambda",
          "type": "method"
        },
        "index": {
          "description": "Deconstruct pair-like value",
          "hierarchy": "Data Lambda",
          "module": "Data.Lambda",
          "name": "unlambda",
          "normalized": "a(b-\u003ec)-\u003e(d b,a c)",
          "package": "TypeCompose",
          "signature": "snk(a-\u003eb)-\u003e(src a,snk b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Lambda.html#v:unlambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePair-related type constructor classes.\n\u003c/p\u003e\u003cp\u003eThis module is similar to \u003ccode\u003eControl.Functor.Pair\u003c/code\u003e in the\n \u003ccode\u003ecategory-extras\u003c/code\u003e package, but it does not require a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n superclass.\n\u003c/p\u003e\u003cp\u003eTemporarily, there is also Data.Zip, which contains the same\n functionality with different naming.  I'm unsure which I prefer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Pair",
          "name": "Pair",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html",
          "type": "module"
        },
        "index": {
          "description": "Pair-related type constructor classes This module is similar to Control.Functor.Pair in the category-extras package but it does not require Functor superclass Temporarily there is also Data.Zip which contains the same functionality with different naming unsure which prefer",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "Pair",
          "package": "TypeCompose",
          "partial": "Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual to \u003ccode\u003e\u003ca\u003eUnpair\u003c/a\u003e\u003c/code\u003e.\n Especially handy for contravariant functors (\u003ccode\u003e\u003ca\u003eContraFunctor\u003c/a\u003e\u003c/code\u003e) .  Use this\n template (filling in \u003ccode\u003ef\u003c/code\u003e) :\n\u003c/p\u003e\u003cpre\u003e    instance ContraFunctor f =\u003e Copair f where\n      { cofsts = cofmap fst ; cosnds = cofmap snd }\n\u003c/pre\u003e",
          "module": "Data.Pair",
          "name": "Copair",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html#Copair",
          "type": "class"
        },
        "index": {
          "description": "Dual to Unpair Especially handy for contravariant functors ContraFunctor Use this template filling in instance ContraFunctor Copair where cofsts cofmap fst cosnds cofmap snd",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "Copair",
          "package": "TypeCompose",
          "partial": "Copair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Copair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType constructor class for \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e-like things.\n Here are some standard instance templates you can fill in.  They're not\n defined in the general forms below, because they would lead to a lot of\n overlap.\n\u003c/p\u003e\u003cpre\u003e    instance Applicative f =\u003e Pair f where\n        pair = liftA2 (,)\n    instance (Applicative h, Pair f) =\u003e Pair (h :. f) where\n        pair = apPair\n    instance (Functor g, Pair g, Pair f) =\u003e Pair (g :. f)\n        where pair = ppPair\n    instance (Arrow (~\u003e), Unpair f, Pair g) =\u003e Pair (Arrw (~\u003e) f g) where\n        pair = arPair\n    instance (Monoid_f h, Copair h) =\u003e Pair h where\n        pair = copair\n\u003c/pre\u003e\u003cp\u003eAlso, if you have a type constructor that's a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e,\n here is a way to define '(\u003ca\u003e*\u003c/a\u003e)' for \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e    (\u003c*\u003e) = pairWith ($)\n\u003c/pre\u003e\u003cp\u003eMinimum definitions for instances.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "Pair",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html#Pair",
          "type": "class"
        },
        "index": {
          "description": "Type constructor class for pair like things Here are some standard instance templates you can fill in They re not defined in the general forms below because they would lead to lot of overlap instance Applicative Pair where pair liftA2 instance Applicative Pair Pair where pair apPair instance Functor Pair Pair Pair where pair ppPair instance Arrow Unpair Pair Pair Arrw where pair arPair instance Monoid Copair Pair where pair copair Also if you have type constructor that Functor and Pair here is way to define for Applicative pairWith Minimum definitions for instances",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "Pair",
          "package": "TypeCompose",
          "partial": "Pair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "PairTy",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html#PairTy",
          "type": "type"
        },
        "index": {
          "description": "Type of pair method",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "PairTy",
          "package": "TypeCompose",
          "partial": "Pair Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:PairTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpairpable.  Minimal instance definition: either (a) \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b)\n both of \u003ccode\u003e\u003ca\u003efsts\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003esnds\u003c/a\u003e\u003c/code\u003e.  A standard template to substitute any\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef.\u003c/code\u003e But watch out for effects!\n\u003c/p\u003e\u003cpre\u003e     instance Functor f =\u003e Unpair f where {fsts = fmap fst; snds = fmap snd}\n\u003c/pre\u003e",
          "module": "Data.Pair",
          "name": "Unpair",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html#Unpair",
          "type": "class"
        },
        "index": {
          "description": "Unpairpable Minimal instance definition either unpair or both of fsts and snds standard template to substitute any Functor But watch out for effects instance Functor Unpair where fsts fmap fst snds fmap snd",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "Unpair",
          "package": "TypeCompose",
          "partial": "Unpair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:Unpair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e method.  Generalizes \u003ccode\u003e\u003ca\u003eunpair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "UnpairTy",
          "package": "TypeCompose",
          "source": "src/Data-Pair.html#UnpairTy",
          "type": "type"
        },
        "index": {
          "description": "Type of unpair method Generalizes unpair",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "UnpairTy",
          "package": "TypeCompose",
          "partial": "Unpair Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#t:UnpairTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "apPair",
          "package": "TypeCompose",
          "signature": "PairTy (h :. f)",
          "source": "src/Data-Pair.html#apPair",
          "type": "function"
        },
        "index": {
          "description": "Handy for Pair instances",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "apPair",
          "package": "TypeCompose",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:apPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of \u003ccode\u003e\u003ca\u003eArrw\u003c/a\u003e\u003c/code\u003e values.  \u003cem\u003eWarning\u003c/em\u003e: definition uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, so only\n use if your arrow has a working \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "arPair",
          "package": "TypeCompose",
          "signature": "PairTy (Arrw j f g)",
          "source": "src/Data-Pair.html#arPair",
          "type": "function"
        },
        "index": {
          "description": "Pairing of Arrw values Warning definition uses arr so only use if your arrow has working arr",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "arPair",
          "package": "TypeCompose",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:arPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "cofsts",
          "package": "TypeCompose",
          "signature": "cofsts",
          "source": "src/Data-Pair.html#cofsts",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "cofsts",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:cofsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of \u003ccode\u003e\u003ca\u003eCopair\u003c/a\u003e\u003c/code\u003e values.  Combines contribution of each.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "copair",
          "package": "TypeCompose",
          "signature": "PairTy f",
          "source": "src/Data-Pair.html#copair",
          "type": "function"
        },
        "index": {
          "description": "Pairing of Copair values Combines contribution of each",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "copair",
          "package": "TypeCompose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:copair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "cosnds",
          "package": "TypeCompose",
          "signature": "cosnds",
          "source": "src/Data-Pair.html#cosnds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "cosnds",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:cosnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "fsts",
          "package": "TypeCompose",
          "signature": "fsts",
          "source": "src/Data-Pair.html#fsts",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "fsts",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:fsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "pair",
          "package": "TypeCompose",
          "signature": "pair",
          "source": "src/Data-Pair.html#pair",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "pair",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n 'Functor'\\/'Monoid' version.  See also \u003ccode\u003e\u003ca\u003epairEditM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "pairEdit",
          "package": "TypeCompose",
          "signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
          "source": "src/Data-Pair.html#pairEdit",
          "type": "function"
        },
        "index": {
          "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Functor Monoid version See also pairEditM",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "pairEdit",
          "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
          "package": "TypeCompose",
          "partial": "Edit",
          "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pairEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n Monad version.  See also \u003ccode\u003e\u003ca\u003epairEdit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "pairEditM",
          "package": "TypeCompose",
          "signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
          "source": "src/Data-Pair.html#pairEditM",
          "type": "function"
        },
        "index": {
          "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Monad version See also pairEdit",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "pairEditM",
          "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
          "package": "TypeCompose",
          "partial": "Edit",
          "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:pairEditM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
          "module": "Data.Pair",
          "name": "ppPair",
          "package": "TypeCompose",
          "signature": "PairTy (g :. f)",
          "source": "src/Data-Pair.html#ppPair",
          "type": "function"
        },
        "index": {
          "description": "Handy for Pair instances",
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "ppPair",
          "package": "TypeCompose",
          "partial": "Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:ppPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "snds",
          "package": "TypeCompose",
          "signature": "snds",
          "source": "src/Data-Pair.html#snds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "snds",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:snds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Pair",
          "name": "unpair",
          "package": "TypeCompose",
          "signature": "unpair",
          "source": "src/Data-Pair.html#unpair",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Pair",
          "module": "Data.Pair",
          "name": "unpair",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Pair.html#v:unpair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monoid \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e of partial values.  See the [Teaser] and [Solution] blog\n posts.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eTeaser\u003c/dt\u003e\u003cdd\u003e:   \u003ca\u003ehttp://conal.net/blog/posts/a-type-for-partial-values\u003c/a\u003e\n   [Solution]: \u003ca\u003ehttp://conal.net/blog/posts/implementing-a-type-for-partial-values\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eAlso defines a \u003ccode\u003e\u003ca\u003eFunAble\u003c/a\u003e\u003c/code\u003e instance, so that \u003ccode\u003eFunA Partial\u003c/code\u003e is an arrow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Partial",
          "name": "Partial",
          "package": "TypeCompose",
          "source": "src/Data-Partial.html",
          "type": "module"
        },
        "index": {
          "description": "monoid Partial of partial values See the Teaser and Solution blog posts Teaser http conal.net blog posts a-type-for-partial-values Solution http conal.net blog posts implementing-a-type-for-partial-values Also defines FunAble instance so that FunA Partial is an arrow",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "Partial",
          "package": "TypeCompose",
          "partial": "Partial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial value.  Represented an endomorphism, which is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n under \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e and '(.)'.  Then \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is the completely undefined value,\n and in \u003ccode\u003eu `@'mappend'@` v\u003c/code\u003e, \u003ccode\u003ev\u003c/code\u003e selectively replaces parts of \u003ccode\u003eu\u003c/code\u003e.  The\n \u003ccode\u003e\u003ca\u003eEndo\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003ePair\u003c/code\u003e, \u003ccode\u003eUnpair\u003c/code\u003e, \u003ccode\u003eCopair\u003c/code\u003e, \u003ccode\u003eUnfun\u003c/code\u003e, and \u003ccode\u003eCofun\u003c/code\u003e\n are all very useful on partial values.\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "Partial",
          "package": "TypeCompose",
          "source": "src/Data-Partial.html#Partial",
          "type": "type"
        },
        "index": {
          "description": "Partial value Represented an endomorphism which is Monoid under id and Then mempty is the completely undefined value and in mappend selectively replaces parts of The Endo instances for Pair Unpair Copair Unfun and Cofun are all very useful on partial values",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "Partial",
          "package": "TypeCompose",
          "partial": "Partial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#t:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Partial",
          "name": "PartialX",
          "package": "TypeCompose",
          "source": "src/Data-Partial.html#PartialX",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "PartialX",
          "package": "TypeCompose",
          "partial": "Partial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#t:PartialX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide in info about a function argument\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "pUnArg",
          "package": "TypeCompose",
          "signature": "PartialX u (u -\u003e v)",
          "source": "src/Data-Partial.html#pUnArg",
          "type": "function"
        },
        "index": {
          "description": "Provide in info about function argument",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "pUnArg",
          "normalized": "PartialX a(a-\u003eb)",
          "package": "TypeCompose",
          "partial": "Un Arg",
          "signature": "PartialX u(u-\u003ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse to \"element\" access, on all elements.  A way to inject some\n info about every element.  For \u003ccode\u003ef\u003c/code\u003e, consider '[]', \u003ccode\u003e(-\u003e) a\u003c/code\u003e,\n \u003ccode\u003eEvent\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "pUnElt",
          "package": "TypeCompose",
          "signature": "PartialX a (f a)",
          "source": "src/Data-Partial.html#pUnElt",
          "type": "function"
        },
        "index": {
          "description": "Inverse to element access on all elements way to inject some info about every element For consider Event etc",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "pUnElt",
          "package": "TypeCompose",
          "partial": "Un Elt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnElt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide info about a function result\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "pUnRes",
          "package": "TypeCompose",
          "signature": "PartialX v (u -\u003e v)",
          "source": "src/Data-Partial.html#pUnRes",
          "type": "function"
        },
        "index": {
          "description": "Provide info about function result",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "pUnRes",
          "normalized": "PartialX a(b-\u003ea)",
          "package": "TypeCompose",
          "partial": "Un Res",
          "signature": "PartialX v(u-\u003ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a partial argument-source into a partial function-sink.\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "pUnSrc",
          "package": "TypeCompose",
          "signature": "PartialX a ((a -\u003e b) -\u003e o)",
          "source": "src/Data-Partial.html#pUnSrc",
          "type": "function"
        },
        "index": {
          "description": "Inject partial argument-source into partial function-sink",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "pUnSrc",
          "normalized": "PartialX a((a-\u003eb)-\u003ec)",
          "package": "TypeCompose",
          "partial": "Un Src",
          "signature": "PartialX a((a-\u003eb)-\u003eo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pUnSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce a partial value into a full one, filling in bottom for any\n missing parts.\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "pval",
          "package": "TypeCompose",
          "signature": "Partial c -\u003e c",
          "source": "src/Data-Partial.html#pval",
          "type": "function"
        },
        "index": {
          "description": "Force partial value into full one filling in bottom for any missing parts",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "pval",
          "normalized": "Partial a-\u003ea",
          "package": "TypeCompose",
          "signature": "Partial c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:pval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat a full value as a partial one.  Fully overrides any\n \"previous\" (earlier argument to \u003ccode\u003emappend\u003c/code\u003e) partial value.\n\u003c/p\u003e",
          "module": "Data.Partial",
          "name": "valp",
          "package": "TypeCompose",
          "signature": "c -\u003e Partial c",
          "source": "src/Data-Partial.html#valp",
          "type": "function"
        },
        "index": {
          "description": "Treat full value as partial one Fully overrides any previous earlier argument to mappend partial value",
          "hierarchy": "Data Partial",
          "module": "Data.Partial",
          "name": "valp",
          "normalized": "a-\u003ePartial a",
          "package": "TypeCompose",
          "signature": "c-\u003ePartial c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Partial.html#v:valp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads with references, taken from John Hughes's \u003ca\u003eGlobal Variables in\n Haskell\u003c/a\u003e (\u003ca\u003ehttp://citeseer.ist.psu.edu/473734.html\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RefMonad",
          "name": "RefMonad",
          "package": "TypeCompose",
          "source": "src/Data-RefMonad.html",
          "type": "module"
        },
        "index": {
          "description": "Monads with references taken from John Hughes Global Variables in Haskell http citeseer.ist.psu.edu html",
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "RefMonad",
          "package": "TypeCompose",
          "partial": "Ref Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of monads with references.\n\u003c/p\u003e",
          "module": "Data.RefMonad",
          "name": "RefMonad",
          "package": "TypeCompose",
          "source": "src/Data-RefMonad.html#RefMonad",
          "type": "class"
        },
        "index": {
          "description": "Class of monads with references",
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "RefMonad",
          "package": "TypeCompose",
          "partial": "Ref Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#t:RefMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the contents of a ref\n\u003c/p\u003e",
          "module": "Data.RefMonad",
          "name": "modifyRef",
          "package": "TypeCompose",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-RefMonad.html#modifyRef",
          "type": "function"
        },
        "index": {
          "description": "Change the contents of ref",
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "TypeCompose",
          "partial": "Ref",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RefMonad",
          "name": "newRef",
          "package": "TypeCompose",
          "signature": "a -\u003e m (r a)",
          "source": "src/Data-RefMonad.html#newRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "newRef",
          "normalized": "a-\u003eb(c a)",
          "package": "TypeCompose",
          "partial": "Ref",
          "signature": "a-\u003em(r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RefMonad",
          "name": "readRef",
          "package": "TypeCompose",
          "signature": "r a -\u003e m a",
          "source": "src/Data-RefMonad.html#readRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "readRef",
          "normalized": "a b-\u003ec b",
          "package": "TypeCompose",
          "partial": "Ref",
          "signature": "r a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RefMonad",
          "name": "writeRef",
          "package": "TypeCompose",
          "signature": "r a -\u003e a -\u003e m ()",
          "source": "src/Data-RefMonad.html#writeRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RefMonad",
          "module": "Data.RefMonad",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "TypeCompose",
          "partial": "Ref",
          "signature": "r a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-RefMonad.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric titling (labeling).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Title",
          "name": "Title",
          "package": "TypeCompose",
          "source": "src/Data-Title.html",
          "type": "module"
        },
        "index": {
          "description": "Generic titling labeling",
          "hierarchy": "Data Title",
          "module": "Data.Title",
          "name": "Title",
          "package": "TypeCompose",
          "partial": "Title",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a title on a value.  If you can title polymorphically, please\n instantiate \u003ccode\u003e\u003ca\u003eTitle_f\u003c/a\u003e\u003c/code\u003e instead of Title.  Then you'll automatically\n get a \u003ccode\u003e\u003ca\u003eTitle\u003c/a\u003e\u003c/code\u003e for each type instance, thanks to this rule.\n\u003c/p\u003e\u003cpre\u003e\n   instance Title_f f =\u003e Title (f a) where title = title_f\n\u003c/pre\u003e\u003cp\u003eTo handle ambiguity for types like \u003ccode\u003e([] Char)\u003c/code\u003e -- aka \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, this\n module is compiled with \u003ccode\u003eOverlappingInstances\u003c/code\u003e and\n \u003ccode\u003eUndecidableInstances\u003c/code\u003e.  The more specific instance (yours) wins.\n\u003c/p\u003e\u003cp\u003eIn defining your instance, you might want to use the String instance,\n e.g., \u003ccode\u003etitle ttl \"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Title",
          "name": "Title",
          "package": "TypeCompose",
          "source": "src/Data-Title.html#Title",
          "type": "class"
        },
        "index": {
          "description": "Provide title on value If you can title polymorphically please instantiate Title instead of Title Then you ll automatically get Title for each type instance thanks to this rule instance Title Title where title title To handle ambiguity for types like Char aka String this module is compiled with OverlappingInstances and UndecidableInstances The more specific instance yours wins In defining your instance you might want to use the String instance e.g title ttl",
          "hierarchy": "Data Title",
          "module": "Data.Title",
          "name": "Title",
          "package": "TypeCompose",
          "partial": "Title",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Title",
          "name": "Title_f",
          "package": "TypeCompose",
          "source": "src/Data-Title.html#Title_f",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Title",
          "module": "Data.Title",
          "name": "Title_f",
          "package": "TypeCompose",
          "partial": "Title",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#t:Title_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Title",
          "name": "title",
          "package": "TypeCompose",
          "signature": "String -\u003e u -\u003e u",
          "source": "src/Data-Title.html#title",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Title",
          "module": "Data.Title",
          "name": "title",
          "normalized": "String-\u003ea-\u003ea",
          "package": "TypeCompose",
          "signature": "String-\u003eu-\u003eu",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e for all applications of \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Title",
          "name": "title_f",
          "package": "TypeCompose",
          "signature": "String -\u003e f a -\u003e f a",
          "source": "src/Data-Title.html#title_f",
          "type": "method"
        },
        "index": {
          "description": "title for all applications of",
          "hierarchy": "Data Title",
          "module": "Data.Title",
          "name": "title_f",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "TypeCompose",
          "signature": "String-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Title.html#v:title_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZip-related type constructor classes.\n\u003c/p\u003e\u003cp\u003eThis module is similar to \u003ccode\u003eControl.Functor.Zip\u003c/code\u003e in the\n \u003ccode\u003ecategory-extras\u003c/code\u003e package, but it does not require a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n superclass.\n\u003c/p\u003e\u003cp\u003eThis module defines generalized \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e, so if you use it,\n you'll have to\n\u003c/p\u003e\u003cpre\u003e\n    import Prelude hiding (zip,zipWith,zipWith3,unzip)\n\u003c/pre\u003e\u003cp\u003eTemporarily, there is also Data.Pair, which contains the same\n functionality with different naming.  I'm unsure which I prefer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Zip",
          "name": "Zip",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html",
          "type": "module"
        },
        "index": {
          "description": "Zip-related type constructor classes This module is similar to Control.Functor.Zip in the category-extras package but it does not require Functor superclass This module defines generalized zip and unzip so if you use it you ll have to import Prelude hiding zip zipWith zipWith3 unzip Temporarily there is also Data.Pair which contains the same functionality with different naming unsure which prefer",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "Zip",
          "package": "TypeCompose",
          "partial": "Zip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual to \u003ccode\u003e\u003ca\u003eUnzip\u003c/a\u003e\u003c/code\u003e.\n Especially handy for contravariant functors (\u003ccode\u003eCofunctor\u003c/code\u003e) .  Use this\n template (filling in \u003ccode\u003ef\u003c/code\u003e) :\n\u003c/p\u003e\u003cpre\u003e    instance Cofunctor f =\u003e Cozip f where\n      { cofsts = cofmap fst ; cosnds = cofmap snd }\n\u003c/pre\u003e",
          "module": "Data.Zip",
          "name": "Cozip",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html#Cozip",
          "type": "class"
        },
        "index": {
          "description": "Dual to Unzip Especially handy for contravariant functors Cofunctor Use this template filling in instance Cofunctor Cozip where cofsts cofmap fst cosnds cofmap snd",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "Cozip",
          "package": "TypeCompose",
          "partial": "Cozip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Cozip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzippable.  Minimal instance definition: either (a) \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e (b)\n both of \u003ccode\u003e\u003ca\u003efsts\u003c/a\u003e\u003c/code\u003e \u003cem\u003eand\u003c/em\u003e \u003ccode\u003e\u003ca\u003esnds\u003c/a\u003e\u003c/code\u003e.  A standard template to substitute any\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef.\u003c/code\u003e But watch out for effects!\n\u003c/p\u003e\u003cpre\u003e     instance Functor f =\u003e Unzip f where {fsts = fmap fst; snds = fmap snd}\n\u003c/pre\u003e",
          "module": "Data.Zip",
          "name": "Unzip",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html#Unzip",
          "type": "class"
        },
        "index": {
          "description": "Unzippable Minimal instance definition either unzip or both of fsts and snds standard template to substitute any Functor But watch out for effects instance Functor Unzip where fsts fmap fst snds fmap snd",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "Unzip",
          "package": "TypeCompose",
          "partial": "Unzip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e method.  Generalizes \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "UnzipTy",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html#UnzipTy",
          "type": "type"
        },
        "index": {
          "description": "Type of unzip method Generalizes unzip",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "UnzipTy",
          "package": "TypeCompose",
          "partial": "Unzip Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:UnzipTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType constructor class for \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e-like things.\n Here are some standard instance templates you can fill in.  They're not\n defined in the general forms below, because they would lead to a lot of\n overlap.\n\u003c/p\u003e\u003cpre\u003e    instance Applicative f =\u003e Zip f where\n        zip = liftA2 (,)\n    instance (Applicative h, Zip f) =\u003e Zip (h :. f) where\n        zip = apZip\n    instance (Functor g, Zip g, Zip f) =\u003e Zip (g :. f)\n        where zip = ppZip\n    instance (Arrow (~\u003e), Unzip f, Zip g) =\u003e Zip (Arrw (~\u003e) f g) where\n        zip = arZip\n    instance (Monoid_f h, Cozip h) =\u003e Zip h where\n        zip = cozip\n\u003c/pre\u003e\u003cp\u003eAlso, if you have a type constructor that's a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e,\n here is a way to define '(\u003ca\u003e*\u003c/a\u003e)' for \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e    (\u003c*\u003e) = zipWith ($)\n\u003c/pre\u003e\u003cp\u003eMinimum definitions for instances.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "Zip",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html#Zip",
          "type": "class"
        },
        "index": {
          "description": "Type constructor class for zip like things Here are some standard instance templates you can fill in They re not defined in the general forms below because they would lead to lot of overlap instance Applicative Zip where zip liftA2 instance Applicative Zip Zip where zip apZip instance Functor Zip Zip Zip where zip ppZip instance Arrow Unzip Zip Zip Arrw where zip arZip instance Monoid Cozip Zip where zip cozip Also if you have type constructor that Functor and Zip here is way to define for Applicative zipWith Minimum definitions for instances",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "Zip",
          "package": "TypeCompose",
          "partial": "Zip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:Zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "ZipTy",
          "package": "TypeCompose",
          "source": "src/Data-Zip.html#ZipTy",
          "type": "type"
        },
        "index": {
          "description": "Type of zip method",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "ZipTy",
          "package": "TypeCompose",
          "partial": "Zip Ty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#t:ZipTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "apZip",
          "package": "TypeCompose",
          "signature": "ZipTy (h :. f)",
          "source": "src/Data-Zip.html#apZip",
          "type": "function"
        },
        "index": {
          "description": "Handy for Zip instances",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "apZip",
          "package": "TypeCompose",
          "partial": "Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:apZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZiping of \u003ccode\u003e\u003ca\u003eArrw\u003c/a\u003e\u003c/code\u003e values.  \u003cem\u003eWarning\u003c/em\u003e: definition uses \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, so only\n use if your arrow has a working \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "arZip",
          "package": "TypeCompose",
          "signature": "ZipTy (Arrw j f g)",
          "source": "src/Data-Zip.html#arZip",
          "type": "function"
        },
        "index": {
          "description": "Ziping of Arrw values Warning definition uses arr so only use if your arrow has working arr",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "arZip",
          "package": "TypeCompose",
          "partial": "Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:arZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "cofsts",
          "package": "TypeCompose",
          "signature": "cofsts",
          "source": "src/Data-Zip.html#cofsts",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "cofsts",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cofsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "cosnds",
          "package": "TypeCompose",
          "signature": "cosnds",
          "source": "src/Data-Zip.html#cosnds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "cosnds",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cosnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZiping of \u003ccode\u003e\u003ca\u003eCozip\u003c/a\u003e\u003c/code\u003e values.  Combines contribution of each.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "cozip",
          "package": "TypeCompose",
          "signature": "ZipTy f",
          "source": "src/Data-Zip.html#cozip",
          "type": "function"
        },
        "index": {
          "description": "Ziping of Cozip values Combines contribution of each",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "cozip",
          "package": "TypeCompose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:cozip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "fsts",
          "package": "TypeCompose",
          "signature": "fsts",
          "source": "src/Data-Zip.html#fsts",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "fsts",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:fsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n 'Functor'\\/'Monoid' version.  See also \u003ccode\u003e\u003ca\u003epairEditM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "pairEdit",
          "package": "TypeCompose",
          "signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
          "source": "src/Data-Zip.html#pairEdit",
          "type": "function"
        },
        "index": {
          "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Functor Monoid version See also pairEditM",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "pairEdit",
          "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
          "package": "TypeCompose",
          "partial": "Edit",
          "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:pairEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a pair of sources into a source of pair-editors.  See\n \u003ca\u003ehttp://conal.net/blog/posts/pairs-sums-and-reactivity/\u003c/a\u003e.\n Monad version.  See also \u003ccode\u003e\u003ca\u003epairEdit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "pairEditM",
          "package": "TypeCompose",
          "signature": "(m c, m d) -\u003e m ((c, d) -\u003e (c, d))",
          "source": "src/Data-Zip.html#pairEditM",
          "type": "function"
        },
        "index": {
          "description": "Turn pair of sources into source of pair-editors See http conal.net blog posts pairs-sums-and-reactivity Monad version See also pairEdit",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "pairEditM",
          "normalized": "(a b,a c)-\u003ea((b,c)-\u003e(b,c))",
          "package": "TypeCompose",
          "partial": "Edit",
          "signature": "(m c,m d)-\u003em((c,d)-\u003e(c,d))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:pairEditM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy for \u003ccode\u003e\u003ca\u003eZip\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "ppZip",
          "package": "TypeCompose",
          "signature": "ZipTy (g :. f)",
          "source": "src/Data-Zip.html#ppZip",
          "type": "function"
        },
        "index": {
          "description": "Handy for Zip instances",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "ppZip",
          "package": "TypeCompose",
          "partial": "Zip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:ppZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "snds",
          "package": "TypeCompose",
          "signature": "snds",
          "source": "src/Data-Zip.html#snds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "snds",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:snds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "unzip",
          "package": "TypeCompose",
          "signature": "unzip",
          "source": "src/Data-Zip.html#unzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "unzip",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Zip",
          "name": "zip",
          "package": "TypeCompose",
          "signature": "zip",
          "source": "src/Data-Zip.html#zip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "zip",
          "package": "TypeCompose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "zipWith",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Zip.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Generalized zipWith",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "TypeCompose",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Zip",
          "name": "zipWith3",
          "package": "TypeCompose",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Zip.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Generalized zipWith",
          "hierarchy": "Data Zip",
          "module": "Data.Zip",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "TypeCompose",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TypeCompose/docs/Data-Zip.html#v:zipWith3"
      }
    }
  ]
]