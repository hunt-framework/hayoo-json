[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad morphism is a natural transformation:\n\u003c/p\u003e\u003cpre\u003e morph :: forall a . m a -\u003e n a\n\u003c/pre\u003e\u003cp\u003e... that obeys the following two laws:\n\u003c/p\u003e\u003cpre\u003e morph $ do x \u003c- m  =  do x \u003c- morph m\n            f x           morph (f x)\n \n morph (return x) = return x\n\u003c/pre\u003e\u003cp\u003e... which are equivalent to the following two functor laws:\n\u003c/p\u003e\u003cpre\u003e morph . (f \u003e=\u003e g) = morph . f \u003e=\u003e morph . g\n \n morph . return = return\n\u003c/pre\u003e\u003cp\u003eExamples of monad morphisms include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (from \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esquash\u003c/a\u003e\u003c/code\u003e (See below)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e (See below), if \u003ccode\u003ef\u003c/code\u003e is a monad morphism\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e(f . g)\u003c/code\u003e, if \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e are both monad morphisms\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMonad morphisms commonly arise when manipulating existing monad transformer\n    code for compatibility purposes.  The \u003ccode\u003e\u003ca\u003eMFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e, and\n    \u003ccode\u003e\u003ca\u003eMMonad\u003c/a\u003e\u003c/code\u003e classes define standard ways to change monad transformer stacks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e introduces a new monad transformer layer of any type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esquash\u003c/a\u003e\u003c/code\u003e flattens two identical monad transformer layers into a single\n      layer of the same type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e maps monad morphisms to modify deeper layers of the monad\n       transformer stack.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Morph.html",
        "fct-type": "module",
        "title": "Morph"
      },
      "index": {
        "description": "monad morphism is natural transformation morph forall that obeys the following two laws morph do do morph morph morph return return which are equivalent to the following two functor laws morph morph morph morph return return Examples of monad morphisms include lift from MonadTrans squash See below hoist See below if is monad morphism if and are both monad morphisms id Monad morphisms commonly arise when manipulating existing monad transformer code for compatibility purposes The MFunctor MonadTrans and MMonad classes define standard ways to change monad transformer stacks lift introduces new monad transformer layer of any type squash flattens two identical monad transformer layers into single layer of the same type hoist maps monad morphisms to modify deeper layers of the monad transformer stack",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "Morph",
        "normalized": "",
        "package": "mmorph",
        "partial": "Morph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#t:MFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eA functor in the category of monads, using \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e as the analog of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hoist (f . g) = hoist f . hoist g\n \n hoist id = id\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Morph.html#MFunctor",
        "fct-type": "class",
        "title": "MFunctor"
      },
      "index": {
        "description": "functor in the category of monads using hoist as the analog of fmap hoist hoist hoist hoist id id",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "MFunctor",
        "normalized": "",
        "package": "mmorph",
        "partial": "MFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#t:MMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in the category of monads, using \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e as the\n    analog of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e as the analog of (\u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e embed lift = id\n \n embed f (lift m) = f m\n \n embed g (embed f t) = embed (\\m -\u003e embed g (f m)) t\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Morph.html#MMonad",
        "fct-type": "class",
        "title": "MMonad"
      },
      "index": {
        "description": "monad in the category of monads using lift from MonadTrans as the analog of return and embed as the analog of embed lift id embed lift embed embed embed embed",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "MMonad",
        "normalized": "",
        "package": "mmorph",
        "partial": "MMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#t:MonadTrans",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monad transformers.  Instances should satisfy the\n following laws, which state that \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadTrans"
      },
      "index": {
        "description": "The class of monad transformers Instances should satisfy the following laws which state that lift is transformer of monads lift return return lift lift lift",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "MonadTrans",
        "normalized": "",
        "package": "mmorph",
        "partial": "Monad Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:-124--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e=\u003c|\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e|\u003e=\u003c/a\u003e\u003c/code\u003e) is analogous to (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "t m b -\u003e (forall a.  m a -\u003e t n a) -\u003e t n b",
        "fct-source": "src/Control-Monad-Morph.html#%7C%3E%3D",
        "fct-type": "function",
        "title": "(|\u003e=)"
      },
      "index": {
        "description": "Equivalent to with the arguments flipped is analogous to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "(|\u003e=) |\u003e=",
        "normalized": "a b c-\u003e(d e b f-\u003ea g f)-\u003ea g c",
        "package": "mmorph",
        "partial": "",
        "signature": "t m b-\u003e(forall a. m a-\u003et n a)-\u003et n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:-60--124--60-",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to (\u003ccode\u003e\u003ca\u003e\u003e|\u003e\u003c/a\u003e\u003c/code\u003e) with the arguments flipped\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003c|\u003c\u003c/a\u003e\u003c/code\u003e) is analogous to (\u003ccode\u003e\u003ca\u003e\u003c=\u003c\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "(forall b.  m2 b -\u003e t m3 b) -\u003e (forall a.  m1 a -\u003e t m2 a) -\u003e m1 c -\u003e t m3 c",
        "fct-source": "src/Control-Monad-Morph.html#%3C%7C%3C",
        "fct-type": "function",
        "title": "(\u003c|\u003c)"
      },
      "index": {
        "description": "Equivalent to with the arguments flipped is analogous to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "(\u003c|\u003c) \u003c|\u003c",
        "normalized": "(a b c d-\u003ee c d)-\u003e(a f c g-\u003ee c g)-\u003ec h-\u003ee c h",
        "package": "mmorph",
        "partial": "",
        "signature": "(forall b. m b-\u003et m b)-\u003e(forall a. m a-\u003et m a)-\u003em c-\u003et m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:-61--60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix operator equivalent to \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e=\u003c|\u003c/a\u003e\u003c/code\u003e) is analogous to (\u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "(forall a.  m a -\u003e t n a) -\u003e t m b -\u003e t n b",
        "fct-source": "src/Control-Monad-Morph.html#%3D%3C%7C",
        "fct-type": "function",
        "title": "(=\u003c|)"
      },
      "index": {
        "description": "An infix operator equivalent to embed is analogous to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "(=\u003c|) =\u003c|",
        "normalized": "(a b c d-\u003ee f d)-\u003ee c g-\u003ee f g",
        "package": "mmorph",
        "partial": "",
        "signature": "(forall a. m a-\u003et n a)-\u003et m b-\u003et n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:-62--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two \u003ccode\u003e\u003ca\u003eMMonad\u003c/a\u003e\u003c/code\u003e layer-building functions\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e|\u003e\u003c/a\u003e\u003c/code\u003e) is analogous to (\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "(forall a.  m1 a -\u003e t m2 a) -\u003e (forall b.  m2 b -\u003e t m3 b) -\u003e m1 c -\u003e t m3 c",
        "fct-source": "src/Control-Monad-Morph.html#%3E%7C%3E",
        "fct-type": "function",
        "title": "(\u003e|\u003e)"
      },
      "index": {
        "description": "Compose two MMonad layer-building functions is analogous to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "(\u003e|\u003e) \u003e|\u003e",
        "normalized": "(a b c d-\u003ee c d)-\u003e(a f c g-\u003ee c g)-\u003ec h-\u003ee c h",
        "package": "mmorph",
        "partial": "",
        "signature": "(forall a. m a-\u003et m a)-\u003e(forall b. m b-\u003et m b)-\u003em c-\u003et m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a newly created \u003ccode\u003e\u003ca\u003eMMonad\u003c/a\u003e\u003c/code\u003e layer within an existing layer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e is analogous to (\u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "(forall a.  m a -\u003e t n a) -\u003e t m b -\u003e t n b",
        "fct-source": "src/Control-Monad-Morph.html#embed",
        "fct-type": "method",
        "title": "embed"
      },
      "index": {
        "description": "Embed newly created MMonad layer within an existing layer embed is analogous to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "embed",
        "normalized": "(a b c d-\u003ee f d)-\u003ee c g-\u003ee f g",
        "package": "mmorph",
        "partial": "",
        "signature": "(forall a. m a-\u003et n a)-\u003et m b-\u003et n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:generalize",
      "description": {
        "fct-descr": "\u003cp\u003eA function that \u003ccode\u003egeneralize\u003c/code\u003es the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e base monad to be any monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "Identity a -\u003e m a",
        "fct-source": "src/Control-Monad-Morph.html#generalize",
        "fct-type": "function",
        "title": "generalize"
      },
      "index": {
        "description": "function that generalize the Identity base monad to be any monad",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "generalize",
        "normalized": "Identity a-\u003eb a",
        "package": "mmorph",
        "partial": "",
        "signature": "Identity a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:hoist",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monad morphism from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e into a monad morphism from\n        \u003ccode\u003e(t m)\u003c/code\u003e to \u003ccode\u003e(t n)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e t m b -\u003e t n b",
        "fct-source": "src/Control-Monad-Morph.html#hoist",
        "fct-type": "method",
        "title": "hoist"
      },
      "index": {
        "description": "Lift monad morphism from to into monad morphism from to",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "hoist",
        "normalized": "(a b c d-\u003ee d)-\u003ef c g-\u003ef e g",
        "package": "mmorph",
        "partial": "",
        "signature": "(forall a. m a-\u003en a)-\u003et m b-\u003et n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the argument monad to the constructed monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "m a -\u003e t m a",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "Lift computation from the argument monad to the constructed monad",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "mmorph",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Morph.html#v:squash",
      "description": {
        "fct-descr": "\u003cp\u003eSquash two \u003ccode\u003e\u003ca\u003eMMonad\u003c/a\u003e\u003c/code\u003e layers into a single layer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esquash\u003c/a\u003e\u003c/code\u003e is analogous to \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Morph",
        "fct-package": "mmorph",
        "fct-signature": "t (t m) a -\u003e t m a",
        "fct-source": "src/Control-Monad-Morph.html#squash",
        "fct-type": "function",
        "title": "squash"
      },
      "index": {
        "description": "Squash two MMonad layers into single layer squash is analogous to join",
        "hierarchy": "Control Monad Morph",
        "module": "Control.Monad.Morph",
        "name": "squash",
        "normalized": "a(a b)c-\u003ea b c",
        "package": "mmorph",
        "partial": "",
        "signature": "t(t m)a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Trans-Compose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposition of monad transformers. A higher-order version of\n    \u003ca\u003eData.Functor.Compose\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Compose",
        "fct-package": "mmorph",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Compose.html",
        "fct-type": "module",
        "title": "Compose"
      },
      "index": {
        "description": "Composition of monad transformers higher-order version of Data.Functor.Compose",
        "hierarchy": "Control Monad Trans Compose",
        "module": "Control.Monad.Trans.Compose",
        "name": "Compose",
        "normalized": "",
        "package": "mmorph",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Trans-Compose.html#t:ComposeT",
      "description": {
        "fct-descr": "\u003cp\u003eComposition of monad transformers.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Compose",
        "fct-package": "mmorph",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Compose.html#ComposeT",
        "fct-type": "newtype",
        "title": "ComposeT"
      },
      "index": {
        "description": "Composition of monad transformers",
        "hierarchy": "Control Monad Trans Compose",
        "module": "Control.Monad.Trans.Compose",
        "name": "ComposeT",
        "normalized": "",
        "package": "mmorph",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Trans-Compose.html#v:ComposeT",
      "description": {
        "fct-module": "Control.Monad.Trans.Compose",
        "fct-package": "mmorph",
        "fct-signature": "ComposeT",
        "fct-source": "src/Control-Monad-Trans-Compose.html#ComposeT",
        "fct-type": "function",
        "title": "ComposeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Compose",
        "module": "Control.Monad.Trans.Compose",
        "name": "ComposeT",
        "normalized": "",
        "package": "mmorph",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmorph/docs/Control-Monad-Trans-Compose.html#v:getComposeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Compose",
        "fct-package": "mmorph",
        "fct-signature": "f (g m) a",
        "fct-source": "src/Control-Monad-Trans-Compose.html#ComposeT",
        "fct-type": "function",
        "title": "getComposeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Compose",
        "module": "Control.Monad.Trans.Compose",
        "name": "getComposeT",
        "normalized": "",
        "package": "mmorph",
        "partial": "Compose",
        "signature": ""
      }
    }
  }
]