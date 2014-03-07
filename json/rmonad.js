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
        "word": "rmonad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IfThenElse",
          "name": "IfThenElse",
          "package": "rmonad",
          "source": "src/Control-IfThenElse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control IfThenElse",
          "module": "Control.IfThenElse",
          "name": "IfThenElse",
          "package": "rmonad",
          "partial": "If Then Else",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-IfThenElse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IfThenElse",
          "name": "ifThenElse",
          "package": "rmonad",
          "signature": "Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Control-IfThenElse.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IfThenElse",
          "module": "Control.IfThenElse",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "rmonad",
          "partial": "Then Else",
          "signature": "Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-IfThenElse.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.AsMonad",
          "name": "AsMonad",
          "package": "rmonad",
          "source": "src/Control-RMonad-AsMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad AsMonad",
          "module": "Control.RMonad.AsMonad",
          "name": "AsMonad",
          "package": "rmonad",
          "partial": "As Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type that can be used to embed an arbitrary restricted\n monad as a normal monad.\n\u003c/p\u003e\u003cp\u003eNote that in general there can be an efficiency loss in using\n \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e where the underlying restricted monad could have been used\n instead. For example when using \u003ccode\u003eSet\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e, intermediate results\n will not have duplicates removed. On the other hand, it becomes legal\n to use intermediate results that do not have \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Control.RMonad.AsMonad",
          "name": "AsMonad",
          "package": "rmonad",
          "source": "src/Control-RMonad-AsMonad.html#AsMonad",
          "type": "data"
        },
        "index": {
          "description": "wrapper type that can be used to embed an arbitrary restricted monad as normal monad Note that in general there can be an efficiency loss in using AsMonad where the underlying restricted monad could have been used instead For example when using Set with AsMonad intermediate results will not have duplicates removed On the other hand it becomes legal to use intermediate results that do not have Ord instances",
          "hierarchy": "Control RMonad AsMonad",
          "module": "Control.RMonad.AsMonad",
          "name": "AsMonad",
          "package": "rmonad",
          "partial": "As Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#t:AsMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a restricted monad into a normal monad\n\u003c/p\u003e",
          "module": "Control.RMonad.AsMonad",
          "name": "embed",
          "package": "rmonad",
          "signature": "m a -\u003e AsMonad m a",
          "source": "src/Control-RMonad-AsMonad.html#embed",
          "type": "function"
        },
        "index": {
          "description": "Turn restricted monad into normal monad",
          "hierarchy": "Control RMonad AsMonad",
          "module": "Control.RMonad.AsMonad",
          "name": "embed",
          "normalized": "a b-\u003eAsMonad a b",
          "package": "rmonad",
          "signature": "m a-\u003eAsMonad m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an \u003ccode\u003e\u003ca\u003eAsMonad\u003c/a\u003e\u003c/code\u003e value into the enclosed restricted monad\n\u003c/p\u003e",
          "module": "Control.RMonad.AsMonad",
          "name": "unEmbed",
          "package": "rmonad",
          "signature": "AsMonad m a -\u003e m a",
          "source": "src/Control-RMonad-AsMonad.html#unEmbed",
          "type": "function"
        },
        "index": {
          "description": "Unwrap an AsMonad value into the enclosed restricted monad",
          "hierarchy": "Control RMonad AsMonad",
          "module": "Control.RMonad.AsMonad",
          "name": "unEmbed",
          "normalized": "AsMonad a b-\u003ea b",
          "package": "rmonad",
          "partial": "Embed",
          "signature": "AsMonad m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-AsMonad.html#v:unEmbed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Fix",
          "name": "Fix",
          "package": "rmonad",
          "source": "src/Control-RMonad-Fix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Fix",
          "module": "Control.RMonad.Fix",
          "name": "Fix",
          "package": "rmonad",
          "partial": "Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Fix",
          "name": "RMonadFix",
          "package": "rmonad",
          "source": "src/Control-RMonad-Fix.html#RMonadFix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad Fix",
          "module": "Control.RMonad.Fix",
          "name": "RMonadFix",
          "package": "rmonad",
          "partial": "RMonad Fix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#t:RMonadFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is the least fixed point of the function \u003ccode\u003ef\u003c/code\u003e,\n i.e. the least defined \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ef x = x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.RMonad.Fix",
          "name": "fix",
          "package": "rmonad",
          "signature": "(a -\u003e a) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "fix is the least fixed point of the function i.e the least defined such that",
          "hierarchy": "Control RMonad Fix",
          "module": "Control.RMonad.Fix",
          "name": "fix",
          "normalized": "(a-\u003ea)-\u003ea",
          "package": "rmonad",
          "signature": "(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Fix",
          "name": "mfix",
          "package": "rmonad",
          "signature": "(a -\u003e m a) -\u003e m a",
          "source": "src/Control-RMonad-Fix.html#mfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad Fix",
          "module": "Control.RMonad.Fix",
          "name": "mfix",
          "normalized": "(a-\u003eb a)-\u003eb a",
          "package": "rmonad",
          "signature": "(a-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Fix.html#v:mfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Prelude",
          "name": "Prelude",
          "package": "rmonad",
          "source": "src/Control-RMonad-Prelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Prelude",
          "module": "Control.RMonad.Prelude",
          "name": "Prelude",
          "package": "rmonad",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Cont",
          "name": "Cont",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans-Cont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Cont",
          "module": "Control.RMonad.Trans.Cont",
          "name": "Cont",
          "package": "rmonad",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.List",
          "name": "List",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Trans List",
          "module": "Control.RMonad.Trans.List",
          "name": "List",
          "package": "rmonad",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Reader",
          "name": "Reader",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans-Reader.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Reader",
          "module": "Control.RMonad.Trans.Reader",
          "name": "Reader",
          "package": "rmonad",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Set",
          "name": "Set",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans-Set.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Set",
          "module": "Control.RMonad.Trans.Set",
          "name": "Set",
          "package": "rmonad",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Set",
          "name": "SetT",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans-Set.html#SetT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Set",
          "module": "Control.RMonad.Trans.Set",
          "name": "SetT",
          "package": "rmonad",
          "partial": "Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#t:SetT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Set",
          "name": "SetT",
          "package": "rmonad",
          "signature": "SetT",
          "source": "src/Control-RMonad-Trans-Set.html#SetT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Set",
          "module": "Control.RMonad.Trans.Set",
          "name": "SetT",
          "package": "rmonad",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#v:SetT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans.Set",
          "name": "runSetT",
          "package": "rmonad",
          "signature": "m (Set a)",
          "source": "src/Control-RMonad-Trans-Set.html#SetT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad Trans Set",
          "module": "Control.RMonad.Trans.Set",
          "name": "runSetT",
          "package": "rmonad",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans-Set.html#v:runSetT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans",
          "name": "Trans",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control RMonad Trans",
          "module": "Control.RMonad.Trans",
          "name": "Trans",
          "package": "rmonad",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans",
          "name": "RMonadIO",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans.html#RMonadIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad Trans",
          "module": "Control.RMonad.Trans",
          "name": "RMonadIO",
          "package": "rmonad",
          "partial": "RMonad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#t:RMonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans",
          "name": "RMonadTrans",
          "package": "rmonad",
          "source": "src/Control-RMonad-Trans.html#RMonadTrans",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad Trans",
          "module": "Control.RMonad.Trans",
          "name": "RMonadTrans",
          "package": "rmonad",
          "partial": "RMonad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#t:RMonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans",
          "name": "lift",
          "package": "rmonad",
          "signature": "m a -\u003e t m a",
          "source": "src/Control-RMonad-Trans.html#lift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad Trans",
          "module": "Control.RMonad.Trans",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "rmonad",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad.Trans",
          "name": "liftIO",
          "package": "rmonad",
          "signature": "IO a -\u003e m a",
          "source": "src/Control-RMonad-Trans.html#liftIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad Trans",
          "module": "Control.RMonad.Trans",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "rmonad",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad-Trans.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides alternatives to the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eMonadPlus\u003c/code\u003e classes,\n allowing for constraints on the contained type (a restricted monad).\n It makes use of associated datatypes (available in GHC 6.8).\n\u003c/p\u003e\u003cp\u003eTo make your own type instances of these classes, first define\n the \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e datatype and the \u003ccode\u003e\u003ca\u003eSuitable\u003c/a\u003e\u003c/code\u003e type class for it. For example,\n\u003c/p\u003e\u003cpre\u003e\n     data instance Constraints Set a = Ord a =\u003e SetConstraints\n     instance Ord a =\u003e Suitable Set a where\n        constraints = SetConstraints\n\u003c/pre\u003e\u003cp\u003eYou need to change \u003ccode\u003eSet\u003c/code\u003e to your own type, \u003ccode\u003eOrd a\u003c/code\u003e to your own\n constraints, and \u003ccode\u003eSetConstraints\u003c/code\u003e to some distinguished name (this name\n will not normally be visible to users of your type)\n\u003c/p\u003e\u003cp\u003eNext you can make an instance of \u003ccode\u003e\u003ca\u003eRMonad\u003c/a\u003e\u003c/code\u003e and if appropriate \u003ccode\u003e\u003ca\u003eRMonadPlus\u003c/a\u003e\u003c/code\u003e\n by defining the members in the usual way. When you need to make use of the\n constraint on the contained type, you will need to get hold of the constraint\n wrapped up in the \u003ccode\u003e\u003ca\u003eConstraints\u003c/a\u003e\u003c/code\u003e datatype, which can be achieved with the helper\n \u003ccode\u003e\u003ca\u003ewithResConstraints\u003c/a\u003e\u003c/code\u003e. For example here are the instances for \u003ccode\u003eSet\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n    instance RMonad Set where\n       return = Set.singleton\n       s \u003e\u003e= f = withResConstraints $ SetConstraints -\u003e Set.fold (a s' -\u003e Set.union (f a) s') Set.empty s\n       fail _ = Set.empty\n\u003c/pre\u003e\u003cpre\u003e\n    instance RMonadPlus Set where\n       mzero = Set.empty\n       mplus s1 s2 = withResConstraints $ SetConstraints -\u003e Set.union s1 s2\n\u003c/pre\u003e\u003cp\u003eOnce you have made your type an instance of \u003ccode\u003e\u003ca\u003eRMonad\u003c/a\u003e\u003c/code\u003e, you can\n use it in two ways.\n Firstly, import this module directly and use the \u003ccode\u003eRebindableSyntax\u003c/code\u003e extension\n so that do-syntax is rebound. If using ghc\u003c7 use \u003ccode\u003eNoImplicitPrelude\u003c/code\u003e instead.\n Secondly, use the wrapper type in \u003ca\u003eControl.RMonad.AsMonad\u003c/a\u003e which supports\n the normal \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.RMonad",
          "name": "RMonad",
          "package": "rmonad",
          "source": "src/Control-RMonad.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides alternatives to the Functor Monad and MonadPlus classes allowing for constraints on the contained type restricted monad It makes use of associated datatypes available in GHC To make your own type instances of these classes first define the Constraints datatype and the Suitable type class for it For example data instance Constraints Set Ord SetConstraints instance Ord Suitable Set where constraints SetConstraints You need to change Set to your own type Ord to your own constraints and SetConstraints to some distinguished name this name will not normally be visible to users of your type Next you can make an instance of RMonad and if appropriate RMonadPlus by defining the members in the usual way When you need to make use of the constraint on the contained type you will need to get hold of the constraint wrapped up in the Constraints datatype which can be achieved with the helper withResConstraints For example here are the instances for Set instance RMonad Set where return Set.singleton withResConstraints SetConstraints Set.fold Set.union Set.empty fail Set.empty instance RMonadPlus Set where mzero Set.empty mplus s1 s2 withResConstraints SetConstraints Set.union s1 s2 Once you have made your type an instance of RMonad you can use it in two ways Firstly import this module directly and use the RebindableSyntax extension so that do-syntax is rebound If using ghc use NoImplicitPrelude instead Secondly use the wrapper type in Control.RMonad.AsMonad which supports the normal Monad operations",
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "RMonad",
          "package": "rmonad",
          "partial": "RMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "RFunctor",
          "package": "rmonad",
          "source": "src/Control-RMonad.html#RFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "RFunctor",
          "package": "rmonad",
          "partial": "RFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "RMonad",
          "package": "rmonad",
          "source": "src/Control-RMonad.html#RMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "RMonad",
          "package": "rmonad",
          "partial": "RMonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "RMonadPlus",
          "package": "rmonad",
          "source": "src/Control-RMonad.html#RMonadPlus",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "RMonadPlus",
          "package": "rmonad",
          "partial": "RMonad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:RMonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "Suitable",
          "package": "rmonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "Suitable",
          "package": "rmonad",
          "partial": "Suitable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#t:Suitable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "(\u003c=\u003c)",
          "package": "rmonad",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "source": "src/Control-RMonad.html#%3C%3D%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "rmonad",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "(=\u003c\u003c)",
          "package": "rmonad",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Control-RMonad.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "rmonad",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "(\u003e=\u003e)",
          "package": "rmonad",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Control-RMonad.html#%3E%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "rmonad",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "(\u003e\u003e)",
          "package": "rmonad",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Control-RMonad.html#%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "rmonad",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "(\u003e\u003e=)",
          "package": "rmonad",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Control-RMonad.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "rmonad",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "ap",
          "package": "rmonad",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "source": "src/Control-RMonad.html#ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "rmonad",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "constraints",
          "package": "rmonad",
          "signature": "Constraints m a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "constraints",
          "package": "rmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "fail",
          "package": "rmonad",
          "signature": "String -\u003e m a",
          "source": "src/Control-RMonad.html#fail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "rmonad",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "filterM",
          "package": "rmonad",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-RMonad.html#filterM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "rmonad",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "fmap",
          "package": "rmonad",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-RMonad.html#fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "foldM",
          "package": "rmonad",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "source": "src/Control-RMonad.html#foldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "rmonad",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "foldM_",
          "package": "rmonad",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
          "source": "src/Control-RMonad.html#foldM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
          "package": "rmonad",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "forM",
          "package": "rmonad",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
          "source": "src/Control-RMonad.html#forM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
          "package": "rmonad",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "forM_",
          "package": "rmonad",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/Control-RMonad.html#forM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
          "package": "rmonad",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "forever",
          "package": "rmonad",
          "signature": "m a -\u003e m b",
          "source": "src/Control-RMonad.html#forever",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "forever",
          "normalized": "a b-\u003ea c",
          "package": "rmonad",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "guard",
          "package": "rmonad",
          "signature": "Bool -\u003e m ()",
          "source": "src/Control-RMonad.html#guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "rmonad",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "join",
          "package": "rmonad",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Control-RMonad.html#join",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "rmonad",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "liftM",
          "package": "rmonad",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "source": "src/Control-RMonad.html#liftM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "liftM2",
          "package": "rmonad",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "source": "src/Control-RMonad.html#liftM2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "liftM3",
          "package": "rmonad",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "source": "src/Control-RMonad.html#liftM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "liftM4",
          "package": "rmonad",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "source": "src/Control-RMonad.html#liftM4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "liftM5",
          "package": "rmonad",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "source": "src/Control-RMonad.html#liftM5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "rmonad",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "mapAndUnzipM",
          "package": "rmonad",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "source": "src/Control-RMonad.html#mapAndUnzipM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "rmonad",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "mapM",
          "package": "rmonad",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "source": "src/Control-RMonad.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "rmonad",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "mapM_",
          "package": "rmonad",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "source": "src/Control-RMonad.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "rmonad",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "mplus",
          "package": "rmonad",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Control-RMonad.html#mplus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "mplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "rmonad",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "msum",
          "package": "rmonad",
          "signature": "[m a] -\u003e m a",
          "source": "src/Control-RMonad.html#msum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "rmonad",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "mzero",
          "package": "rmonad",
          "signature": "m a",
          "source": "src/Control-RMonad.html#mzero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "mzero",
          "package": "rmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "replicateM",
          "package": "rmonad",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "source": "src/Control-RMonad.html#replicateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "rmonad",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "replicateM_",
          "package": "rmonad",
          "signature": "Int -\u003e m a -\u003e m ()",
          "source": "src/Control-RMonad.html#replicateM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "replicateM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "rmonad",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "return",
          "package": "rmonad",
          "signature": "a -\u003e m a",
          "source": "src/Control-RMonad.html#return",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "rmonad",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "sequence",
          "package": "rmonad",
          "signature": "[m a] -\u003e m [a]",
          "source": "src/Control-RMonad.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "rmonad",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "sequence_",
          "package": "rmonad",
          "signature": "[m a] -\u003e m ()",
          "source": "src/Control-RMonad.html#sequence_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "rmonad",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "unless",
          "package": "rmonad",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-RMonad.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "rmonad",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "when",
          "package": "rmonad",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-RMonad.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "rmonad",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "zipWithM",
          "package": "rmonad",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "source": "src/Control-RMonad.html#zipWithM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "rmonad",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RMonad",
          "name": "zipWithM_",
          "package": "rmonad",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "source": "src/Control-RMonad.html#zipWithM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RMonad",
          "module": "Control.RMonad",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "rmonad",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rmonad/docs/Control-RMonad.html#v:zipWithM_"
      }
    }
  ]
]