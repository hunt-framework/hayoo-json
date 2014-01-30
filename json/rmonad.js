[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-IfThenElse.html#",
      "description": {
        "fct-module": "Control.IfThenElse",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-IfThenElse.html",
        "fct-type": "module",
        "title": "IfThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control IfThenElse",
        "module": "Control.IfThenElse",
        "name": "IfThenElse",
        "normalized": "",
        "package": "rmonad",
        "partial": "If Then Else",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-IfThenElse.html#v:ifThenElse",
      "description": {
        "fct-module": "Control.IfThenElse",
        "fct-package": "rmonad",
        "fct-signature": "Bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Control-IfThenElse.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control IfThenElse",
        "module": "Control.IfThenElse",
        "name": "ifThenElse",
        "normalized": "Bool-\u003ea-\u003ea-\u003ea",
        "package": "rmonad",
        "partial": "Then Else",
        "signature": "Bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#",
      "description": {
        "fct-module": "Control.RMonad.AsMonad",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-AsMonad.html",
        "fct-type": "module",
        "title": "AsMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad AsMonad",
        "module": "Control.RMonad.AsMonad",
        "name": "AsMonad",
        "normalized": "",
        "package": "rmonad",
        "partial": "As Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#t:AsMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper type that can be used to embed an arbitrary restricted\n monad as a normal monad.\n\u003c/p\u003e\u003cp\u003eNote that in general there can be an efficiency loss in using\n \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e where the underlying restricted monad could have been used\n instead. For example when using \u003ccode\u003eSet\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e, intermediate results\n will not have duplicates removed. On the other hand, it becomes legal\n to use intermediate results that do not have \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Control.RMonad.AsMonad",
        "fct-package": "rmonad",
        "fct-signature": "data",
        "fct-source": "src/Control-RMonad-AsMonad.html#AsMonad",
        "fct-type": "data",
        "title": "AsMonad"
      },
      "index": {
        "description": "wrapper type that can be used to embed an arbitrary restricted monad as normal monad Note that in general there can be an efficiency loss in using AsMonad where the underlying restricted monad could have been used instead For example when using Set with AsMonad intermediate results will not have duplicates removed On the other hand it becomes legal to use intermediate results that do not have Ord instances",
        "hierarchy": "Control RMonad AsMonad",
        "module": "Control.RMonad.AsMonad",
        "name": "AsMonad",
        "normalized": "",
        "package": "rmonad",
        "partial": "As Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a restricted monad into a normal monad\n\u003c/p\u003e",
        "fct-module": "Control.RMonad.AsMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e AsMonad m a",
        "fct-source": "src/Control-RMonad-AsMonad.html#embed",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "Turn restricted monad into normal monad",
        "hierarchy": "Control RMonad AsMonad",
        "module": "Control.RMonad.AsMonad",
        "name": "embed",
        "normalized": "a b-\u003eAsMonad a b",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003eAsMonad m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#v:unEmbed",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e value into the enclosed restricted monad\n\u003c/p\u003e",
        "fct-module": "Control.RMonad.AsMonad",
        "fct-package": "rmonad",
        "fct-signature": "AsMonad m a -\u003e m a",
        "fct-source": "src/Control-RMonad-AsMonad.html#unEmbed",
        "fct-type": "function",
        "title": "unEmbed"
      },
      "index": {
        "description": "Unwrap an AsMonad value into the enclosed restricted monad",
        "hierarchy": "Control RMonad AsMonad",
        "module": "Control.RMonad.AsMonad",
        "name": "unEmbed",
        "normalized": "AsMonad a b-\u003ea b",
        "package": "rmonad",
        "partial": "Embed",
        "signature": "AsMonad m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#",
      "description": {
        "fct-module": "Control.RMonad.Fix",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Fix.html",
        "fct-type": "module",
        "title": "Fix"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Fix",
        "module": "Control.RMonad.Fix",
        "name": "Fix",
        "normalized": "",
        "package": "rmonad",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#t:RMonadFix",
      "description": {
        "fct-module": "Control.RMonad.Fix",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad-Fix.html#RMonadFix",
        "fct-type": "class",
        "title": "RMonadFix"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Fix",
        "module": "Control.RMonad.Fix",
        "name": "RMonadFix",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#v:fix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is the least fixed point of the function \u003ccode\u003ef\u003c/code\u003e,\n i.e. the least defined \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ef x = x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.RMonad.Fix",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e a) -\u003e a",
        "fct-type": "function",
        "title": "fix"
      },
      "index": {
        "description": "fix is the least fixed point of the function i.e the least defined such that",
        "hierarchy": "Control RMonad Fix",
        "module": "Control.RMonad.Fix",
        "name": "fix",
        "normalized": "(a-\u003ea)-\u003ea",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#v:mfix",
      "description": {
        "fct-module": "Control.RMonad.Fix",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-RMonad-Fix.html#mfix",
        "fct-type": "method",
        "title": "mfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Fix",
        "module": "Control.RMonad.Fix",
        "name": "mfix",
        "normalized": "(a-\u003eb a)-\u003eb a",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Prelude.html#",
      "description": {
        "fct-module": "Control.RMonad.Prelude",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Prelude.html",
        "fct-type": "module",
        "title": "Prelude"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Prelude",
        "module": "Control.RMonad.Prelude",
        "name": "Prelude",
        "normalized": "",
        "package": "rmonad",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Cont.html#",
      "description": {
        "fct-module": "Control.RMonad.Trans.Cont",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Trans-Cont.html",
        "fct-type": "module",
        "title": "Cont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Cont",
        "module": "Control.RMonad.Trans.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "rmonad",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-List.html#",
      "description": {
        "fct-module": "Control.RMonad.Trans.List",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Trans-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans List",
        "module": "Control.RMonad.Trans.List",
        "name": "List",
        "normalized": "",
        "package": "rmonad",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Reader.html#",
      "description": {
        "fct-module": "Control.RMonad.Trans.Reader",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Trans-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Reader",
        "module": "Control.RMonad.Trans.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "rmonad",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#",
      "description": {
        "fct-module": "Control.RMonad.Trans.Set",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Trans-Set.html",
        "fct-type": "module",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Set",
        "module": "Control.RMonad.Trans.Set",
        "name": "Set",
        "normalized": "",
        "package": "rmonad",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#t:SetT",
      "description": {
        "fct-module": "Control.RMonad.Trans.Set",
        "fct-package": "rmonad",
        "fct-signature": "newtype",
        "fct-source": "src/Control-RMonad-Trans-Set.html#SetT",
        "fct-type": "newtype",
        "title": "SetT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Set",
        "module": "Control.RMonad.Trans.Set",
        "name": "SetT",
        "normalized": "",
        "package": "rmonad",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#v:SetT",
      "description": {
        "fct-module": "Control.RMonad.Trans.Set",
        "fct-package": "rmonad",
        "fct-signature": "SetT",
        "fct-source": "src/Control-RMonad-Trans-Set.html#SetT",
        "fct-type": "function",
        "title": "SetT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Set",
        "module": "Control.RMonad.Trans.Set",
        "name": "SetT",
        "normalized": "",
        "package": "rmonad",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#v:runSetT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.RMonad.Trans.Set",
        "fct-package": "rmonad",
        "fct-signature": "m (Set a)",
        "fct-source": "src/Control-RMonad-Trans-Set.html#SetT",
        "fct-type": "function",
        "title": "runSetT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans Set",
        "module": "Control.RMonad.Trans.Set",
        "name": "runSetT",
        "normalized": "",
        "package": "rmonad",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#",
      "description": {
        "fct-module": "Control.RMonad.Trans",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad-Trans.html",
        "fct-type": "module",
        "title": "Trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans",
        "module": "Control.RMonad.Trans",
        "name": "Trans",
        "normalized": "",
        "package": "rmonad",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#t:RMonadIO",
      "description": {
        "fct-module": "Control.RMonad.Trans",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad-Trans.html#RMonadIO",
        "fct-type": "class",
        "title": "RMonadIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans",
        "module": "Control.RMonad.Trans",
        "name": "RMonadIO",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#t:RMonadTrans",
      "description": {
        "fct-module": "Control.RMonad.Trans",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad-Trans.html#RMonadTrans",
        "fct-type": "class",
        "title": "RMonadTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans",
        "module": "Control.RMonad.Trans",
        "name": "RMonadTrans",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#v:lift",
      "description": {
        "fct-module": "Control.RMonad.Trans",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e t m a",
        "fct-source": "src/Control-RMonad-Trans.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans",
        "module": "Control.RMonad.Trans",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#v:liftIO",
      "description": {
        "fct-module": "Control.RMonad.Trans",
        "fct-package": "rmonad",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-RMonad-Trans.html#liftIO",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad Trans",
        "module": "Control.RMonad.Trans",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "rmonad",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides alternatives to the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eMonadPlus\u003c/code\u003e classes,\n allowing for constraints on the contained type (a restricted monad).\n It makes use of associated datatypes (available in GHC 6.8).\n\u003c/p\u003e\u003cp\u003eTo make your own type instances of these classes, first define\n the \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e datatype and the \u003ccode\u003e\u003ca\u003eSuitable\u003c/a\u003e\u003c/code\u003e type class for it. For example,\n\u003c/p\u003e\u003cpre\u003e\n     data instance Constraints Set a = Ord a =\u003e SetConstraints\n     instance Ord a =\u003e Suitable Set a where\n        constraints = SetConstraints\n\u003c/pre\u003e\u003cp\u003eYou need to change \u003ccode\u003eSet\u003c/code\u003e to your own type, \u003ccode\u003eOrd a\u003c/code\u003e to your own\n constraints, and \u003ccode\u003eSetConstraints\u003c/code\u003e to some distinguished name (this name\n will not normally be visible to users of your type)\n\u003c/p\u003e\u003cp\u003eNext you can make an instance of \u003ccode\u003e\u003ca\u003eRMonad\u003c/a\u003e\u003c/code\u003e and if appropriate \u003ccode\u003e\u003ca\u003eRMonadPlus\u003c/a\u003e\u003c/code\u003e\n by defining the members in the usual way. When you need to make use of the\n constraint on the contained type, you will need to get hold of the constraint\n wrapped up in the \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e datatype, which can be achieved with the helper\n \u003ccode\u003e\u003ca\u003ewithResConstraints\u003c/a\u003e\u003c/code\u003e. For example here are the instances for \u003ccode\u003eSet\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n    instance RMonad Set where\n       return = Set.singleton\n       s \u003e\u003e= f = withResConstraints $ SetConstraints -\u003e Set.fold (a s' -\u003e Set.union (f a) s') Set.empty s\n       fail _ = Set.empty\n\u003c/pre\u003e\u003cpre\u003e\n    instance RMonadPlus Set where\n       mzero = Set.empty\n       mplus s1 s2 = withResConstraints $ SetConstraints -\u003e Set.union s1 s2\n\u003c/pre\u003e\u003cp\u003eOnce you have made your type an instance of \u003ccode\u003e\u003ca\u003eRMonad\u003c/a\u003e\u003c/code\u003e, you can\n use it in two ways.\n Firstly, import this module directly and use the \u003ccode\u003eRebindableSyntax\u003c/code\u003e extension\n so that do-syntax is rebound. If using ghc\u003c7 use \u003ccode\u003eNoImplicitPrelude\u003c/code\u003e instead.\n Secondly, use the wrapper type in \u003ca\u003eControl.RMonad.AsMonad\u003c/a\u003e which supports\n the normal \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "module",
        "fct-source": "src/Control-RMonad.html",
        "fct-type": "module",
        "title": "RMonad"
      },
      "index": {
        "description": "This module provides alternatives to the Functor Monad and MonadPlus classes allowing for constraints on the contained type restricted monad It makes use of associated datatypes available in GHC To make your own type instances of these classes first define the Constraints datatype and the Suitable type class for it For example data instance Constraints Set Ord SetConstraints instance Ord Suitable Set where constraints SetConstraints You need to change Set to your own type Ord to your own constraints and SetConstraints to some distinguished name this name will not normally be visible to users of your type Next you can make an instance of RMonad and if appropriate RMonadPlus by defining the members in the usual way When you need to make use of the constraint on the contained type you will need to get hold of the constraint wrapped up in the Constraints datatype which can be achieved with the helper withResConstraints For example here are the instances for Set instance RMonad Set where return Set.singleton withResConstraints SetConstraints Set.fold Set.union Set.empty fail Set.empty instance RMonadPlus Set where mzero Set.empty mplus s1 s2 withResConstraints SetConstraints Set.union s1 s2 Once you have made your type an instance of RMonad you can use it in two ways Firstly import this module directly and use the RebindableSyntax extension so that do-syntax is rebound If using ghc use NoImplicitPrelude instead Secondly use the wrapper type in Control.RMonad.AsMonad which supports the normal Monad operations",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "RMonad",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RFunctor",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad.html#RFunctor",
        "fct-type": "class",
        "title": "RFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "RFunctor",
        "normalized": "",
        "package": "rmonad",
        "partial": "RFunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RMonad",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad.html#RMonad",
        "fct-type": "class",
        "title": "RMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "RMonad",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RMonadPlus",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-source": "src/Control-RMonad.html#RMonadPlus",
        "fct-type": "class",
        "title": "RMonadPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "RMonadPlus",
        "normalized": "",
        "package": "rmonad",
        "partial": "RMonad Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:Suitable",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Suitable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "Suitable",
        "normalized": "",
        "package": "rmonad",
        "partial": "Suitable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-60--61--60-",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
        "fct-source": "src/Control-RMonad.html#%3C%3D%3C",
        "fct-type": "function",
        "title": "(\u003c=\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "(\u003c=\u003c) \u003c=\u003c",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
        "package": "rmonad",
        "partial": "",
        "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-61--60--60-",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-RMonad.html#%3D%3C%3C",
        "fct-type": "function",
        "title": "(=\u003c\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "(=\u003c\u003c) =\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--61--62-",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
        "fct-source": "src/Control-RMonad.html#%3E%3D%3E",
        "fct-type": "function",
        "title": "(\u003e=\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "(\u003e=\u003e) \u003e=\u003e",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--62-",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e m b -\u003e m b",
        "fct-source": "src/Control-RMonad.html#%3E%3E",
        "fct-type": "method",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--62--61-",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-RMonad.html#%3E%3E%3D",
        "fct-type": "method",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:ap",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-RMonad.html#ap",
        "fct-type": "function",
        "title": "ap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "ap",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "rmonad",
        "partial": "",
        "signature": "m(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:constraints",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Constraints m a",
        "fct-type": "method",
        "title": "constraints"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "constraints",
        "normalized": "",
        "package": "rmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:fail",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Control-RMonad.html#fail",
        "fct-type": "method",
        "title": "fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "fail",
        "normalized": "String-\u003ea b",
        "package": "rmonad",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:filterM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
        "fct-source": "src/Control-RMonad.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "filterM",
        "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:fmap",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Control-RMonad.html#fmap",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:foldM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
        "fct-source": "src/Control-RMonad.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:foldM_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#foldM_",
        "fct-type": "function",
        "title": "foldM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "foldM_",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
        "fct-source": "src/Control-RMonad.html#forM",
        "fct-type": "function",
        "title": "forM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "forM",
        "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
        "package": "rmonad",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forM_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "forM_",
        "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
        "package": "rmonad",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forever",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e m b",
        "fct-source": "src/Control-RMonad.html#forever",
        "fct-type": "function",
        "title": "forever"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "forever",
        "normalized": "a b-\u003ea c",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:guard",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "guard",
        "normalized": "Bool-\u003ea()",
        "package": "rmonad",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:join",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m (m a) -\u003e m a",
        "fct-source": "src/Control-RMonad.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "join",
        "normalized": "a(a b)-\u003ea b",
        "package": "rmonad",
        "partial": "",
        "signature": "m(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
        "fct-source": "src/Control-RMonad.html#liftM",
        "fct-type": "function",
        "title": "liftM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "liftM",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003er)-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM2",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
        "fct-source": "src/Control-RMonad.html#liftM2",
        "fct-type": "function",
        "title": "liftM2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "liftM2",
        "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM3",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
        "fct-source": "src/Control-RMonad.html#liftM3",
        "fct-type": "function",
        "title": "liftM3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "liftM3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM4",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
        "fct-source": "src/Control-RMonad.html#liftM4",
        "fct-type": "function",
        "title": "liftM4"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "liftM4",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM5",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
        "fct-source": "src/Control-RMonad.html#liftM5",
        "fct-type": "function",
        "title": "liftM5"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "liftM5",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapAndUnzipM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
        "fct-source": "src/Control-RMonad.html#mapAndUnzipM",
        "fct-type": "function",
        "title": "mapAndUnzipM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "mapAndUnzipM",
        "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
        "package": "rmonad",
        "partial": "And Unzip",
        "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Control-RMonad.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapM_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
        "package": "rmonad",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mplus",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-RMonad.html#mplus",
        "fct-type": "method",
        "title": "mplus"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "mplus",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "rmonad",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:msum",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "[m a] -\u003e m a",
        "fct-source": "src/Control-RMonad.html#msum",
        "fct-type": "function",
        "title": "msum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "msum",
        "normalized": "[a b]-\u003ea b",
        "package": "rmonad",
        "partial": "",
        "signature": "[m a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mzero",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "m a",
        "fct-source": "src/Control-RMonad.html#mzero",
        "fct-type": "method",
        "title": "mzero"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "mzero",
        "normalized": "",
        "package": "rmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:replicateM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Int -\u003e m a -\u003e m [a]",
        "fct-source": "src/Control-RMonad.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "replicateM",
        "normalized": "Int-\u003ea b-\u003ea[b]",
        "package": "rmonad",
        "partial": "",
        "signature": "Int-\u003em a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:replicateM_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Int -\u003e m a -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#replicateM_",
        "fct-type": "function",
        "title": "replicateM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "replicateM_",
        "normalized": "Int-\u003ea b-\u003ea()",
        "package": "rmonad",
        "partial": "",
        "signature": "Int-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:return",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/Control-RMonad.html#return",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "return",
        "normalized": "a-\u003eb a",
        "package": "rmonad",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:sequence",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "[m a] -\u003e m [a]",
        "fct-source": "src/Control-RMonad.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "sequence",
        "normalized": "[a b]-\u003ea[b]",
        "package": "rmonad",
        "partial": "",
        "signature": "[m a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:sequence_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "[m a] -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "sequence_",
        "normalized": "[a b]-\u003ea()",
        "package": "rmonad",
        "partial": "",
        "signature": "[m a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:unless",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "unless",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "rmonad",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:when",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "when",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "rmonad",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:zipWithM",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
        "fct-source": "src/Control-RMonad.html#zipWithM",
        "fct-type": "function",
        "title": "zipWithM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "zipWithM",
        "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
        "package": "rmonad",
        "partial": "With",
        "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:zipWithM_",
      "description": {
        "fct-module": "Control.RMonad",
        "fct-package": "rmonad",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
        "fct-source": "src/Control-RMonad.html#zipWithM_",
        "fct-type": "function",
        "title": "zipWithM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RMonad",
        "module": "Control.RMonad",
        "name": "zipWithM_",
        "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
        "package": "rmonad",
        "partial": "With",
        "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()"
      }
    }
  }
]