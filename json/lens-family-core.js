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
        "word": "lens-family-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is provided for Haskell 98 compatibility.\n If you are able to use \u003ccode\u003eRank2Types\u003c/code\u003e, I advise you to instead use the rank 2 aliases\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eLens\u003c/code\u003e, \u003ccode\u003eLens'\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eTraversal\u003c/code\u003e, \u003ccode\u003eTraversal'\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eFold\u003c/code\u003e, \u003ccode\u003eFold'\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eGetter\u003c/code\u003e, \u003ccode\u003eGetter'\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003efrom the \u003ccode\u003elens-family\u003c/code\u003e package instead.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloneLens\u003c/a\u003e\u003c/code\u003e allows one to circumvent the need for rank 2 types by allowing one to take a universal monomorphic lens instance and rederive a polymorphic instance.\n When you require a lens family parameter you use the type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eALens\u003c/a\u003e\u003c/code\u003e a a' b b'\u003c/code\u003e (or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eALens'\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e).\n Then, inside a \u003ccode\u003ewhere\u003c/code\u003e clause, you use \u003ccode\u003e\u003ca\u003ecloneLens\u003c/a\u003e\u003c/code\u003e to create a \u003ccode\u003eLens\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eFor example.\n\u003c/p\u003e\u003cpre\u003e example :: ALens a a' b b' -\u003e Example\n example l = ... x^.cl ... cl .~ y ...\n  where\n   cl x = cloneLens l x\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: It is important to eta-expand the definition of \u003ccode\u003ecl\u003c/code\u003e to avoid the dreaded monomorphism restriction.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecloneTraversal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecloneGetter\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ecloneFold\u003c/a\u003e\u003c/code\u003e provides similar functionality for traversals, getters and folds respectively.\n Setters are already monomorphic, so do not need to be cloned.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Cloning is only need if you use a functional reference multiple times with different instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family.Clone",
          "name": "Clone",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html",
          "type": "module"
        },
        "index": {
          "description": "This module is provided for Haskell compatibility If you are able to use Rank2Types advise you to instead use the rank aliases Lens Lens Traversal Traversal Fold Fold Getter Getter from the lens-family package instead cloneLens allows one to circumvent the need for rank types by allowing one to take universal monomorphic lens instance and rederive polymorphic instance When you require lens family parameter you use the type ALens or ALens Then inside where clause you use cloneLens to create Lens type For example example ALens Example example cl cl where cl cloneLens Note It is important to eta-expand the definition of cl to avoid the dreaded monomorphism restriction cloneTraversal cloneGetter and cloneFold provides similar functionality for traversals getters and folds respectively Setters are already monomorphic so do not need to be cloned Note Cloning is only need if you use functional reference multiple times with different instances",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "Clone",
          "package": "lens-family-core",
          "partial": "Clone",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAFold a a' b b' is a universal Fold' a a' b b' instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "AFold",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#AFold",
          "type": "type"
        },
        "index": {
          "description": "AFold is universal Fold instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "AFold",
          "package": "lens-family-core",
          "partial": "AFold",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:AFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAFold' a b is a universal Fold' a b instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "AFold'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#AFold%27",
          "type": "type"
        },
        "index": {
          "description": "AFold is universal Fold instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "AFold'",
          "package": "lens-family-core",
          "partial": "AFold'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:AFold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAGetter a a' b b' is a universal Fold a a' b b' instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "AGetter",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#AGetter",
          "type": "type"
        },
        "index": {
          "description": "AGetter is universal Fold instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "AGetter",
          "package": "lens-family-core",
          "partial": "AGetter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:AGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAGetter' a b is a universal Fold' a b instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "AGetter'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#AGetter%27",
          "type": "type"
        },
        "index": {
          "description": "AGetter is universal Fold instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "AGetter'",
          "package": "lens-family-core",
          "partial": "AGetter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:AGetter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eALens a a' b b' is a universal Lens a a' b b' instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "ALens",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#ALens",
          "type": "type"
        },
        "index": {
          "description": "ALens is universal Lens instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "ALens",
          "package": "lens-family-core",
          "partial": "ALens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:ALens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eALens' a b is a universal Lens' a b instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "ALens'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#ALens%27",
          "type": "type"
        },
        "index": {
          "description": "ALens is universal Lens instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "ALens'",
          "package": "lens-family-core",
          "partial": "ALens'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:ALens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eATraversal a a' b b' is a universal Traversal a a' b b' instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "ATraversal",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#ATraversal",
          "type": "type"
        },
        "index": {
          "description": "ATraversal is universal Traversal instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "ATraversal",
          "package": "lens-family-core",
          "partial": "ATraversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:ATraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eATraversal' a b is a universal Traversal' a b instance\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "ATraversal'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#ATraversal%27",
          "type": "type"
        },
        "index": {
          "description": "ATraversal is universal Traversal instance",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "ATraversal'",
          "package": "lens-family-core",
          "partial": "ATraversal'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:ATraversal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "Applicative",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "Applicative",
          "package": "lens-family-core",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Clone",
          "name": "FoldLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#FoldLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "FoldLike",
          "package": "lens-family-core",
          "partial": "Fold Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:FoldLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Clone",
          "name": "IKleeneStore",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#IKleeneStore",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "IKleeneStore",
          "package": "lens-family-core",
          "partial": "IKleene Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:IKleeneStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Clone",
          "name": "IStore",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Clone.html#IStore",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "IStore",
          "package": "lens-family-core",
          "partial": "IStore",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:IStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Clone",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Clone",
          "name": "Phantom",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Phantom.html#Phantom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "Phantom",
          "package": "lens-family-core",
          "partial": "Phantom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#t:Phantom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a universal fold instance back into a polymorphic fold.\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "cloneFold",
          "package": "lens-family-core",
          "signature": "AFold a a' b b' -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family-Clone.html#cloneFold",
          "type": "function"
        },
        "index": {
          "description": "Converts universal fold instance back into polymorphic fold",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "cloneFold",
          "normalized": "AFold a b c d-\u003eLensLike e a b c d",
          "package": "lens-family-core",
          "partial": "Fold",
          "signature": "AFold a a' b b'-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#v:cloneFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a universal getter instance back into a polymorphic getter.\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "cloneGetter",
          "package": "lens-family-core",
          "signature": "AGetter a a' b b' -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family-Clone.html#cloneGetter",
          "type": "function"
        },
        "index": {
          "description": "Converts universal getter instance back into polymorphic getter",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "cloneGetter",
          "normalized": "AGetter a b c d-\u003eLensLike e a b c d",
          "package": "lens-family-core",
          "partial": "Getter",
          "signature": "AGetter a a' b b'-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#v:cloneGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a universal lens instance back into a polymorphic lens.\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "cloneLens",
          "package": "lens-family-core",
          "signature": "ALens a a' b b' -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family-Clone.html#cloneLens",
          "type": "function"
        },
        "index": {
          "description": "Converts universal lens instance back into polymorphic lens",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "cloneLens",
          "normalized": "ALens a b c d-\u003eLensLike e a b c d",
          "package": "lens-family-core",
          "partial": "Lens",
          "signature": "ALens a a' b b'-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#v:cloneLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a universal traversal instance back into a polymorphic traversal.\n\u003c/p\u003e",
          "module": "Lens.Family.Clone",
          "name": "cloneTraversal",
          "package": "lens-family-core",
          "signature": "ATraversal a a' b b' -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family-Clone.html#cloneTraversal",
          "type": "function"
        },
        "index": {
          "description": "Converts universal traversal instance back into polymorphic traversal",
          "hierarchy": "Lens Family Clone",
          "module": "Lens.Family.Clone",
          "name": "cloneTraversal",
          "normalized": "ATraversal a b c d-\u003eLensLike e a b c d",
          "package": "lens-family-core",
          "partial": "Traversal",
          "signature": "ATraversal a a' b b'-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Clone.html#v:cloneTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses allow you to use fields of the state of a state monad as if they were variables in an imperative language.\n \u003ccode\u003e\u003ca\u003euse\u003c/a\u003e\u003c/code\u003e is used to retrieve the value of a variable, and \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e%=\u003c/a\u003e\u003c/code\u003e allow you to set and modify a variable.\n C-style compound assignments are also provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "Lazy",
          "package": "lens-family-core",
          "source": "src/Lens-Family-State-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses allow you to use fields of the state of state monad as if they were variables in an imperative language use is used to retrieve the value of variable and and allow you to set and modify variable C-style compound assignments are also provided",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Lazy",
          "package": "lens-family-core",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "FoldLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#FoldLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "FoldLike",
          "package": "lens-family-core",
          "partial": "Fold Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:FoldLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "LensLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "LensLike'",
          "package": "lens-family-core",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "Monoid",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Monoid",
          "package": "lens-family-core",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "Setter",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Setter",
          "package": "lens-family-core",
          "partial": "Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "Setter'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Setter'",
          "package": "lens-family-core",
          "partial": "Setter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:Setter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "StateT",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "StateT",
          "package": "lens-family-core",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "Writer",
          "package": "lens-family-core",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Writer",
          "package": "lens-family-core",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "Zooming",
          "package": "lens-family-core",
          "source": "src/Lens-Family-State-Zoom.html#Zooming",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "Zooming",
          "package": "lens-family-core",
          "partial": "Zooming",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#t:Zooming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(||=)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(||=) ||=",
          "normalized": "Setter' a Bool-\u003eBool-\u003eStateT a b()",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n (%%=) :: Monad m =\u003e Lens a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eModify a field of the state while returning another value.\n\u003c/p\u003e\u003cpre\u003e\n (%%=) :: (Monad m, Monoid c) =\u003e Traversal a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eModify each field of the state and return the \u003ccode\u003emconcat\u003c/code\u003e of the other values.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "(%%=)",
          "package": "lens-family-core",
          "signature": "LensLike (Writer c) a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c",
          "source": "src/Lens-Family-State-Lazy.html#%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Monad Lens StateT Modify field of the state while returning another value Monad Monoid Traversal StateT Modify each field of the state and return the mconcat of the other values",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(%%=) %%=",
          "normalized": "LensLike(Writer a)b b c d-\u003e(c-\u003e(a,d))-\u003eStateT b e a",
          "package": "lens-family-core",
          "signature": "LensLike(Writer c)a a b b'-\u003e(b-\u003e(c,b'))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "(%=)",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e (b -\u003e b') -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Modify field of the state",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(%=) %=",
          "normalized": "Setter a a b c-\u003e(b-\u003ec)-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003e(b-\u003eb')-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(&&=)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(&&=) &&=",
          "normalized": "Setter' a Bool-\u003eBool-\u003eStateT a b()",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(*=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(*=) *=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(+=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(+=) +=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(-=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(-=) -=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Lazy",
          "name": "(//=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%2F%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(//=) //=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-47--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidally append a value to all referenced fields of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "(\u003c\u003e=)",
          "package": "lens-family-core",
          "signature": "Setter' a o -\u003e o -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#%3C%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Monoidally append value to all referenced fields of the state",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(\u003c\u003e=) \u003c\u003e=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a o-\u003eo-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:-60--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "(.=)",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e b' -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#.%3D",
          "type": "function"
        },
        "index": {
          "description": "Set field of the state",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "(.=) .=",
          "normalized": "Setter a a b c-\u003ec-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003eb'-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "assign",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e b' -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Lazy.html#assign",
          "type": "function"
        },
        "index": {
          "description": "Set field of the state",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "assign",
          "normalized": "Setter a a b c-\u003ec-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003eb'-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n use :: Monad m =\u003e Getter a a' b b' -\u003e StateT a m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state\n\u003c/p\u003e\u003cpre\u003e\n use :: (Monoid b, Monad m) =\u003e Fold a a' b b' -\u003e StateT a m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a monoidal summary of all the referenced fields from the state\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "use",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b' -\u003e StateT a m b",
          "source": "src/Lens-Family-State-Lazy.html#use",
          "type": "function"
        },
        "index": {
          "description": "use Monad Getter StateT Retrieve field of the state use Monoid Monad Fold StateT Retrieve monoidal summary of all the referenced fields from the state",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "use",
          "normalized": "FoldLike a b c a d-\u003eStateT b e a",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b'-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n uses :: (Monoid r, Monad m) =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r\n\u003c/pre\u003e\u003cp\u003eRetrieve all the referenced fields from the state and foldMap the results together with \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n uses :: Monad m =\u003e Getter a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state and pass it through the function \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003euses l f = f \u003ca\u003e$\u003c/a\u003e use l\u003c/pre\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "uses",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r",
          "source": "src/Lens-Family-State-Lazy.html#uses",
          "type": "function"
        },
        "index": {
          "description": "uses Monoid Monad Fold StateT Retrieve all the referenced fields from the state and foldMap the results together with uses Monad Getter StateT Retrieve field of the state and pass it through the function uses use",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "uses",
          "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003eStateT b f a",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003eStateT a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:uses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n zoom :: Monad m =\u003e Lens' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eLift a stateful operation on a field to a stateful operation on the whole state.\n This is a good way to call a \"subroutine\" that only needs access to part of the state.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: (Monoid c, Moand m) =\u003e Traversal' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element of the traversal in turn and \u003ccode\u003emconcat\u003c/code\u003e all the results together.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: Monad m =\u003e Traversal' a b -\u003e StateT b m () -\u003e StateT a m ()\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element the traversal in turn.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Lazy",
          "name": "zoom",
          "package": "lens-family-core",
          "signature": "LensLike' (Zooming m c) a b -\u003e StateT b m c -\u003e StateT a m c",
          "source": "src/Lens-Family-State-Lazy.html#zoom",
          "type": "function"
        },
        "index": {
          "description": "zoom Monad Lens StateT StateT Lift stateful operation on field to stateful operation on the whole state This is good way to call subroutine that only needs access to part of the state zoom Monoid Moand Traversal StateT StateT Run the subroutine on each element of the traversal in turn and mconcat all the results together zoom Monad Traversal StateT StateT Run the subroutine on each element the traversal in turn",
          "hierarchy": "Lens Family State Lazy",
          "module": "Lens.Family.State.Lazy",
          "name": "zoom",
          "normalized": "LensLike'(Zooming a b)c d-\u003eStateT d a b-\u003eStateT c a b",
          "package": "lens-family-core",
          "signature": "LensLike'(Zooming m c)a b-\u003eStateT b m c-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Lazy.html#v:zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses allow you to use fields of the state of a state monad as if they were variables in an imperative language.\n \u003ccode\u003e\u003ca\u003euse\u003c/a\u003e\u003c/code\u003e is used to retrieve the value of a variable, and \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e%=\u003c/a\u003e\u003c/code\u003e allow you to set and modify a variable.\n C-style compound assignments are also provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "Strict",
          "package": "lens-family-core",
          "source": "src/Lens-Family-State-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses allow you to use fields of the state of state monad as if they were variables in an imperative language use is used to retrieve the value of variable and and allow you to set and modify variable C-style compound assignments are also provided",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Strict",
          "package": "lens-family-core",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "FoldLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#FoldLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "FoldLike",
          "package": "lens-family-core",
          "partial": "Fold Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:FoldLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "LensLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "LensLike'",
          "package": "lens-family-core",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "Monoid",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Monoid",
          "package": "lens-family-core",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "Setter",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Setter",
          "package": "lens-family-core",
          "partial": "Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "Setter'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Setter'",
          "package": "lens-family-core",
          "partial": "Setter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:Setter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "StateT",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "StateT",
          "package": "lens-family-core",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "Writer",
          "package": "lens-family-core",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Writer",
          "package": "lens-family-core",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "Zooming",
          "package": "lens-family-core",
          "source": "src/Lens-Family-State-Zoom.html#Zooming",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "Zooming",
          "package": "lens-family-core",
          "partial": "Zooming",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#t:Zooming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(||=)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%7C%7C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(||=) ||=",
          "normalized": "Setter' a Bool-\u003eBool-\u003eStateT a b()",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-124--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n (%%=) :: Monad m =\u003e Lens a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eModify a field of the state while returning another value.\n\u003c/p\u003e\u003cpre\u003e\n (%%=) :: (Monad m, Monoid c) =\u003e Traversal a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eModify each field of the state and return the \u003ccode\u003emconcat\u003c/code\u003e of the other values.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "(%%=)",
          "package": "lens-family-core",
          "signature": "LensLike (Writer c) a a b b' -\u003e (b -\u003e (c, b')) -\u003e StateT a m c",
          "source": "src/Lens-Family-State-Strict.html#%25%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Monad Lens StateT Modify field of the state while returning another value Monad Monoid Traversal StateT Modify each field of the state and return the mconcat of the other values",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(%%=) %%=",
          "normalized": "LensLike(Writer a)b b c d-\u003e(c-\u003e(a,d))-\u003eStateT b e a",
          "package": "lens-family-core",
          "signature": "LensLike(Writer c)a a b b'-\u003e(b-\u003e(c,b'))-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-37--37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "(%=)",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e (b -\u003e b') -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%25%3D",
          "type": "function"
        },
        "index": {
          "description": "Modify field of the state",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(%=) %=",
          "normalized": "Setter a a b c-\u003e(b-\u003ec)-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003e(b-\u003eb')-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(&&=)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%26%26%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(&&=) &&=",
          "normalized": "Setter' a Bool-\u003eBool-\u003eStateT a b()",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-38--38--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(*=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(*=) *=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(+=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(+=) +=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(-=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(-=) -=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-45--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State.Strict",
          "name": "(//=)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%2F%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(//=) //=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-47--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidally append a value to all referenced fields of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "(\u003c\u003e=)",
          "package": "lens-family-core",
          "signature": "Setter' a o -\u003e o -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#%3C%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Monoidally append value to all referenced fields of the state",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(\u003c\u003e=) \u003c\u003e=",
          "normalized": "Setter' a b-\u003eb-\u003eStateT a c()",
          "package": "lens-family-core",
          "signature": "Setter' a o-\u003eo-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:-60--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "(.=)",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e b' -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#.%3D",
          "type": "function"
        },
        "index": {
          "description": "Set field of the state",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "(.=) .=",
          "normalized": "Setter a a b c-\u003ec-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003eb'-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "assign",
          "package": "lens-family-core",
          "signature": "Setter a a b b' -\u003e b' -\u003e StateT a m ()",
          "source": "src/Lens-Family-State-Strict.html#assign",
          "type": "function"
        },
        "index": {
          "description": "Set field of the state",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "assign",
          "normalized": "Setter a a b c-\u003ec-\u003eStateT a d()",
          "package": "lens-family-core",
          "signature": "Setter a a b b'-\u003eb'-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n use :: Monad m =\u003e Getter a a' b b' -\u003e StateT a m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state\n\u003c/p\u003e\u003cpre\u003e\n use :: (Monoid b, Monad m) =\u003e Fold a a' b b' -\u003e StateT a m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a monoidal summary of all the referenced fields from the state\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "use",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b' -\u003e StateT a m b",
          "source": "src/Lens-Family-State-Strict.html#use",
          "type": "function"
        },
        "index": {
          "description": "use Monad Getter StateT Retrieve field of the state use Monoid Monad Fold StateT Retrieve monoidal summary of all the referenced fields from the state",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "use",
          "normalized": "FoldLike a b c a d-\u003eStateT b e a",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b'-\u003eStateT a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n uses :: (Monoid r, Monad m) =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r\n\u003c/pre\u003e\u003cp\u003eRetrieve all the referenced fields from the state and foldMap the results together with \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n uses :: Monad m =\u003e Getter a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state and pass it through the function \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003euses l f = f \u003ca\u003e$\u003c/a\u003e use l\u003c/pre\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "uses",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e StateT a m r",
          "source": "src/Lens-Family-State-Strict.html#uses",
          "type": "function"
        },
        "index": {
          "description": "uses Monoid Monad Fold StateT Retrieve all the referenced fields from the state and foldMap the results together with uses Monad Getter StateT Retrieve field of the state and pass it through the function uses use",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "uses",
          "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003eStateT b f a",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003eStateT a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:uses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n zoom :: Monad m =\u003e Lens' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eLift a stateful operation on a field to a stateful operation on the whole state.\n This is a good way to call a \"subroutine\" that only needs access to part of the state.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: (Monoid c, Moand m) =\u003e Traversal' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element of the traversal in turn and \u003ccode\u003emconcat\u003c/code\u003e all the results together.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: Monad m =\u003e Traversal' a b -\u003e StateT b m () -\u003e StateT a m ()\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element the traversal in turn.\n\u003c/p\u003e",
          "module": "Lens.Family.State.Strict",
          "name": "zoom",
          "package": "lens-family-core",
          "signature": "LensLike' (Zooming m c) a b -\u003e StateT b m c -\u003e StateT a m c",
          "source": "src/Lens-Family-State-Strict.html#zoom",
          "type": "function"
        },
        "index": {
          "description": "zoom Monad Lens StateT StateT Lift stateful operation on field to stateful operation on the whole state This is good way to call subroutine that only needs access to part of the state zoom Monoid Moand Traversal StateT StateT Run the subroutine on each element of the traversal in turn and mconcat all the results together zoom Monad Traversal StateT StateT Run the subroutine on each element the traversal in turn",
          "hierarchy": "Lens Family State Strict",
          "module": "Lens.Family.State.Strict",
          "name": "zoom",
          "normalized": "LensLike'(Zooming a b)c d-\u003eStateT d a b-\u003eStateT c a b",
          "package": "lens-family-core",
          "signature": "LensLike'(Zooming m c)a b-\u003eStateT b m c-\u003eStateT a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State-Strict.html#v:zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.State",
          "name": "State",
          "package": "lens-family-core",
          "source": "src/Lens-Family-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Lens Family State",
          "module": "Lens.Family.State",
          "name": "State",
          "package": "lens-family-core",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains lenses and traversals for common structures in Haskell.\n It also contains the combinators for lenses and traversals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family.Stock",
          "name": "Stock",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Stock.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains lenses and traversals for common structures in Haskell It also contains the combinators for lenses and traversals",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "Stock",
          "package": "lens-family-core",
          "partial": "Stock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Stock",
          "name": "AlongsideLeft",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Stock.html#AlongsideLeft",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "AlongsideLeft",
          "package": "lens-family-core",
          "partial": "Alongside Left",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#t:AlongsideLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Stock",
          "name": "AlongsideRight",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Stock.html#AlongsideRight",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "AlongsideRight",
          "package": "lens-family-core",
          "partial": "Alongside Right",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#t:AlongsideRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "Applicative",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "Applicative",
          "package": "lens-family-core",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Stock",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Stock",
          "name": "LensLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "LensLike'",
          "package": "lens-family-core",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _1 :: Lens (a, b) (a', b) a a'\n\u003c/pre\u003e\u003cp\u003eLens on the first element of a pair.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_1",
          "package": "lens-family-core",
          "signature": "LensLike f (a, b) (a', b) a a'",
          "source": "src/Lens-Family-Stock.html#_1",
          "type": "function"
        },
        "index": {
          "description": "Lens Lens on the first element of pair",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_1",
          "normalized": "LensLike a(b,c)(d,c)b d",
          "package": "lens-family-core",
          "signature": "LensLike f(a,b)(a',b)a a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _2 :: Lens (a, b) (a, b') b b'\n\u003c/pre\u003e\u003cp\u003eLens on the second element of a pair.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_2",
          "package": "lens-family-core",
          "signature": "LensLike f (a, b) (a, b') b b'",
          "source": "src/Lens-Family-Stock.html#_2",
          "type": "function"
        },
        "index": {
          "description": "Lens Lens on the second element of pair",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_2",
          "normalized": "LensLike a(b,c)(b,d)c d",
          "package": "lens-family-core",
          "signature": "LensLike f(a,b)(a,b')b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _Just :: Traversal (Maybe a) (Maybe a') a a'\n\u003c/pre\u003e\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e element of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_Just",
          "package": "lens-family-core",
          "signature": "LensLike f (Maybe a) (Maybe a') a a'",
          "source": "src/Lens-Family-Stock.html#_Just",
          "type": "function"
        },
        "index": {
          "description": "Just Traversal Maybe Maybe Traversal on the Just element of Maybe",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_Just",
          "package": "lens-family-core",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _Left :: Traversal (Either a b) (Either a' b) a a'\n\u003c/pre\u003e\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e element of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_Left",
          "package": "lens-family-core",
          "signature": "LensLike f (Either a b) (Either a' b) a a'",
          "source": "src/Lens-Family-Stock.html#_Left",
          "type": "function"
        },
        "index": {
          "description": "Left Traversal Either Either Traversal on the Left element of an Either",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_Left",
          "package": "lens-family-core",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _Nothing :: Traversal' (Maybe a) ()\n\u003c/pre\u003e\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e element of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_Nothing",
          "package": "lens-family-core",
          "signature": "LensLike' f (Maybe a) ()",
          "source": "src/Lens-Family-Stock.html#_Nothing",
          "type": "function"
        },
        "index": {
          "description": "Nothing Traversal Maybe Traversal on the Nothing element of Maybe",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_Nothing",
          "normalized": "LensLike' a(Maybe b)()",
          "package": "lens-family-core",
          "partial": "Nothing",
          "signature": "LensLike' f(Maybe a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n _Right :: Traversal (Either a b) (Either a b') b b'\n\u003c/pre\u003e\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e element of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "_Right",
          "package": "lens-family-core",
          "signature": "LensLike f (Either a b) (Either a b') b b'",
          "source": "src/Lens-Family-Stock.html#_Right",
          "type": "function"
        },
        "index": {
          "description": "Right Traversal Either Either Traversal on the Right element of an Either",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "_Right",
          "package": "lens-family-core",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:_Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n alongside :: Lens a1 a1' b1 b1' -\u003e Lens a2 a2' b2 b2' -\u003e Lens (a1, a2) (a1', a2') (b1, b2) (b1', b2')\n\u003c/pre\u003e\u003cpre\u003e\n alongside :: Getter a1 a1' b1 b1' -\u003e Getter a2 a2' b2 b2' -\u003e Getter (a1, a2) (a1', a2') (b1, b2) (b1', b2')\n\u003c/pre\u003e\u003cp\u003eGiven two lens/getter families, make a new lens/getter on their product.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "alongside",
          "package": "lens-family-core",
          "signature": "LensLike (AlongsideLeft f b2') a1 a1' b1 b1' -\u003e LensLike (AlongsideRight f a1') a2 a2' b2 b2' -\u003e LensLike f (a1, a2) (a1', a2') (b1, b2) (b1', b2')",
          "source": "src/Lens-Family-Stock.html#alongside",
          "type": "function"
        },
        "index": {
          "description": "alongside Lens a1 a1 b1 b1 Lens a2 a2 b2 b2 Lens a1 a2 a1 a2 b1 b2 b1 b2 alongside Getter a1 a1 b1 b1 Getter a2 a2 b2 b2 Getter a1 a2 a1 a2 b1 b2 b1 b2 Given two lens getter families make new lens getter on their product",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "alongside",
          "normalized": "LensLike(AlongsideLeft a b)c c b b-\u003eLensLike(AlongsideRight a c)c c b b-\u003eLensLike a(c,c)(c,c)(b,b)(b,b)",
          "package": "lens-family-core",
          "signature": "LensLike(AlongsideLeft f b)a a b b-\u003eLensLike(AlongsideRight f a)a a b b-\u003eLensLike f(a,a)(a,a)(b,b)(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:alongside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n at :: Ord k =\u003e k -\u003e Lens' (Map.Map k v) (Maybe v)\n\u003c/pre\u003e\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "at",
          "package": "lens-family-core",
          "signature": "k -\u003e LensLike' f (Map k v) (Maybe v)",
          "source": "src/Lens-Family-Stock.html#at",
          "type": "function"
        },
        "index": {
          "description": "at Ord Lens Map.Map Maybe Lens on given point of Map",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "at",
          "normalized": "a-\u003eLensLike' b(Map a c)(Maybe c)",
          "package": "lens-family-core",
          "signature": "k-\u003eLensLike' f(Map k v)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n beside :: Traversal a a' c c' -\u003e Traversal b' b' c c' -\u003e Traversal (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n beside :: Fold a a' c c' -\u003e Fold b' b' c c' -\u003e Fold (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n beside :: Setter a a' c c' -\u003e Setter b' b' c c' -\u003e Setter (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cp\u003eGiven two traversals/folds/setters referencing a type \u003ccode\u003ec\u003c/code\u003e, create a traversal/fold/setter on the pair referencing \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "beside",
          "package": "lens-family-core",
          "signature": "LensLike f a a' c c' -\u003e LensLike f b b' c c' -\u003e LensLike f (a, b) (a', b') c c'",
          "source": "src/Lens-Family-Stock.html#beside",
          "type": "function"
        },
        "index": {
          "description": "beside Traversal Traversal Traversal beside Fold Fold Fold beside Setter Setter Setter Given two traversals folds setters referencing type create traversal fold setter on the pair referencing",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "beside",
          "normalized": "LensLike a b c d e-\u003eLensLike a f g d e-\u003eLensLike a(b,f)(c,g)d e",
          "package": "lens-family-core",
          "signature": "LensLike f a a' c c'-\u003eLensLike f b b' c c'-\u003eLensLike f(a,b)(a',b')c c'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:beside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n both :: Traversal (a,a) (b,b) a b\n\u003c/pre\u003e\u003cp\u003eTraversals on both elements of a pair \u003ccode\u003e(a,a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "both",
          "package": "lens-family-core",
          "signature": "LensLike f (a, a) (b, b) a b",
          "source": "src/Lens-Family-Stock.html#both",
          "type": "function"
        },
        "index": {
          "description": "both Traversal Traversals on both elements of pair",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "both",
          "normalized": "LensLike a(b,b)(c,c)b c",
          "package": "lens-family-core",
          "signature": "LensLike f(a,a)(b,b)a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n choosing :: Lens a a' c c' -\u003e Lens b b' c c' -\u003e Lens (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Traversal a a' c c' -\u003e Traversal b b' c c' -\u003e Traversal (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Getter a a' c c' -\u003e Getter b b' c c' -\u003e Getter (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Fold a a' c c' -\u003e Fold b b' c c' -\u003e Fold (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Setter a a' c c' -\u003e Setter b b' c c' -\u003e Setter (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cp\u003eGiven two lens/traversal/getter/fold/setter families with the same substructure, make a new lens/traversal/getter/fold/setter on \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "choosing",
          "package": "lens-family-core",
          "signature": "LensLike f a a' c c' -\u003e LensLike f b b' c c' -\u003e LensLike f (Either a b) (Either a' b') c c'",
          "source": "src/Lens-Family-Stock.html#choosing",
          "type": "function"
        },
        "index": {
          "description": "choosing Lens Lens Lens Either Either choosing Traversal Traversal Traversal Either Either choosing Getter Getter Getter Either Either choosing Fold Fold Fold Either Either choosing Setter Setter Setter Either Either Given two lens traversal getter fold setter families with the same substructure make new lens traversal getter fold setter on Either",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "choosing",
          "normalized": "LensLike a b c d e-\u003eLensLike a f g d e-\u003eLensLike a(Either b f)(Either c g)d e",
          "package": "lens-family-core",
          "signature": "LensLike f a a' c c'-\u003eLensLike f b b' c c'-\u003eLensLike f(Either a b)(Either a' b')c c'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:choosing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n chosen :: Lens (Either a a) (Either b b) a b\n\u003c/pre\u003e\u003cp\u003eLens on the Left or Right element of an (\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a a).\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "chosen",
          "package": "lens-family-core",
          "signature": "LensLike f (Either a a) (Either b b) a b",
          "source": "src/Lens-Family-Stock.html#chosen",
          "type": "function"
        },
        "index": {
          "description": "chosen Lens Either Either Lens on the Left or Right element of an Either",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "chosen",
          "package": "lens-family-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:chosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n contains :: Ord =\u003e k -\u003e Lens' (Set.Set k) Bool\n\u003c/pre\u003e\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "contains",
          "package": "lens-family-core",
          "signature": "k -\u003e LensLike' f (Set k) Bool",
          "source": "src/Lens-Family-Stock.html#contains",
          "type": "function"
        },
        "index": {
          "description": "contains Ord Lens Set.Set Bool Lens on given point of Set",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "contains",
          "normalized": "a-\u003eLensLike' b(Set a)Bool",
          "package": "lens-family-core",
          "signature": "k-\u003eLensLike' f(Set k)Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n ignored :: Traversal a a b b'\n\u003c/pre\u003e\u003cp\u003eThe empty traversal on any type.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "ignored",
          "package": "lens-family-core",
          "signature": "null -\u003e a -\u003e f a",
          "source": "src/Lens-Family-Stock.html#ignored",
          "type": "function"
        },
        "index": {
          "description": "ignored Traversal The empty traversal on any type",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "ignored",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "lens-family-core",
          "signature": "null-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:ignored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n intAt :: Int -\u003e Lens (IntMap.IntMap v) (Maybe v)\n\u003c/pre\u003e\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "intAt",
          "package": "lens-family-core",
          "signature": "Int -\u003e LensLike' f (IntMap v) (Maybe v)",
          "source": "src/Lens-Family-Stock.html#intAt",
          "type": "function"
        },
        "index": {
          "description": "intAt Int Lens IntMap.IntMap Maybe Lens on given point of IntMap",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "intAt",
          "normalized": "Int-\u003eLensLike' a(IntMap b)(Maybe b)",
          "package": "lens-family-core",
          "partial": "At",
          "signature": "Int-\u003eLensLike' f(IntMap v)(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:intAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n intContains :: Int -\u003e Lens' IntSet.IntSet Bool\n\u003c/pre\u003e\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "intContains",
          "package": "lens-family-core",
          "signature": "Int -\u003e LensLike' f IntSet Bool",
          "source": "src/Lens-Family-Stock.html#intContains",
          "type": "function"
        },
        "index": {
          "description": "intContains Int Lens IntSet.IntSet Bool Lens on given point of IntSet",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "intContains",
          "normalized": "Int-\u003eLensLike' a IntSet Bool",
          "package": "lens-family-core",
          "partial": "Contains",
          "signature": "Int-\u003eLensLike' f IntSet Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:intContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n ix :: Eq k =\u003e k -\u003e Lens' (k -\u003e v) v\n\u003c/pre\u003e\u003cp\u003eLens on a given point of a function.\n\u003c/p\u003e",
          "module": "Lens.Family.Stock",
          "name": "ix",
          "package": "lens-family-core",
          "signature": "k -\u003e LensLike' f (k -\u003e v) v",
          "source": "src/Lens-Family-Stock.html#ix",
          "type": "function"
        },
        "index": {
          "description": "ix Eq Lens Lens on given point of function",
          "hierarchy": "Lens Family Stock",
          "module": "Lens.Family.Stock",
          "name": "ix",
          "normalized": "a-\u003eLensLike' b(a-\u003ec)c",
          "package": "lens-family-core",
          "signature": "k-\u003eLensLike' f(k-\u003ev)v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Stock.html#v:ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: Improper use of this module can lead to unexpected behaviour if the preconditions of the functions are not met.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family.Unchecked",
          "name": "Unchecked",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html",
          "type": "module"
        },
        "index": {
          "description": "Caution Improper use of this module can lead to unexpected behaviour if the preconditions of the functions are not met",
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "Unchecked",
          "package": "lens-family-core",
          "partial": "Unchecked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Unchecked",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Unchecked",
          "name": "LensLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "LensLike'",
          "package": "lens-family-core",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Unchecked",
          "name": "Setter",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "Setter",
          "package": "lens-family-core",
          "partial": "Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Unchecked",
          "name": "Setter'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "Setter'",
          "package": "lens-family-core",
          "partial": "Setter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#t:Setter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family.Unchecked",
          "name": "Setting",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Setting.html#Setting",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "Setting",
          "package": "lens-family-core",
          "partial": "Setting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#t:Setting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n iso :: (a -\u003e b) -\u003e (b' -\u003e a') -\u003e Lens a a' b b'\n\u003c/pre\u003e\u003cp\u003eBuild a lens from isomorphism families.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated lens family to be well-defined, you must ensure that the two isomorphism laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eyin . yang === id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eyang . yin === id\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Lens.Family.Unchecked",
          "name": "iso",
          "package": "lens-family-core",
          "signature": "(a -\u003e b)-\u003e (b' -\u003e a')-\u003e LensLike f a a' b b'",
          "type": "function"
        },
        "index": {
          "description": "iso Lens Build lens from isomorphism families Caution In order for the generated lens family to be well-defined you must ensure that the two isomorphism laws hold yin yang id yang yin id",
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "iso",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eLensLike e a d b c",
          "package": "lens-family-core",
          "signature": "(a-\u003eb)-\u003e(b'-\u003ea')-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n lens :: (a -\u003e b) -\u003e (a -\u003e b' -\u003e a') -\u003e Lens a a' b b'\n\u003c/pre\u003e\u003cp\u003eBuild a lens from a \u003ccode\u003egetter\u003c/code\u003e and \u003ccode\u003esetter\u003c/code\u003e families.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated lens family to be well-defined, you must ensure that the three lens laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003egetter (setter a b) === b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esetter a (getter a) === a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esetter (setter a b1) b2) === setter a b2\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Lens.Family.Unchecked",
          "name": "lens",
          "package": "lens-family-core",
          "signature": "(a -\u003e b)-\u003e (a -\u003e b' -\u003e a')-\u003e LensLike f a a' b b'",
          "type": "function"
        },
        "index": {
          "description": "lens Lens Build lens from getter and setter families Caution In order for the generated lens family to be well-defined you must ensure that the three lens laws hold getter setter setter getter setter setter b1 b2 setter b2",
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003ed)-\u003eLensLike e a d b c",
          "package": "lens-family-core",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb'-\u003ea')-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetting\u003c/a\u003e\u003c/code\u003e promotes a \"semantic editor combinator\" to a modify-only lens.\n To demote a lens to a semantic edit combinator, use the section \u003ccode\u003e(l %~)\u003c/code\u003e or \u003ccode\u003esec l\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetting map . fstL %~ length $ [(\"The\",0),(\"quick\",1),(\"brown\",1),(\"fox\",2)]\n\u003c/code\u003e\u003c/strong\u003e[(3,0),(5,1),(5,1),(3,2)]\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated setter family to be well-defined, you must ensure that the two functors laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esec id === id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esec f . sec g === sec (f . g)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Lens.Family.Unchecked",
          "name": "setting",
          "package": "lens-family-core",
          "signature": "((b -\u003e b') -\u003e a -\u003e a')-\u003e Setter a a' b b'",
          "type": "function"
        },
        "index": {
          "description": "setting promotes semantic editor combinator to modify-only lens To demote lens to semantic edit combinator use the section or sec setting map fstL length The quick brown fox Caution In order for the generated setter family to be well-defined you must ensure that the two functors laws hold sec id id sec sec sec",
          "hierarchy": "Lens Family Unchecked",
          "module": "Lens.Family.Unchecked",
          "name": "setting",
          "normalized": "((a-\u003eb)-\u003ec-\u003ed)-\u003eSetter c d a b",
          "package": "lens-family-core",
          "signature": "((b-\u003eb')-\u003ea-\u003ea')-\u003eSetter a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family-Unchecked.html#v:setting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module for end-users of lens-families-core.\n If you are not building your own lenses or traversals, but just using functional references made by others, this is the only module you need.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Lens.Family",
          "name": "Family",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main module for end-users of lens-families-core If you are not building your own lenses or traversals but just using functional references made by others this is the only module you need",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Family",
          "package": "lens-family-core",
          "partial": "Family",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under conjunction.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "All",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Boolean monoid under conjunction",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "All",
          "package": "lens-family-core",
          "partial": "All",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under disjunction.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Any",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Boolean monoid under disjunction",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Any",
          "package": "lens-family-core",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Applicative",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Applicative",
          "package": "lens-family-core",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Backwards",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Backwards",
          "package": "lens-family-core",
          "partial": "Backwards",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe monoid returning the leftmost non-Nothing value.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "First",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Maybe monoid returning the leftmost non-Nothing value",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "First",
          "package": "lens-family-core",
          "partial": "First",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "FoldLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#FoldLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "FoldLike",
          "package": "lens-family-core",
          "partial": "Fold Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:FoldLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "FoldLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#FoldLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "FoldLike'",
          "package": "lens-family-core",
          "partial": "Fold Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:FoldLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structures that can be folded.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldMap f Empty = mempty\n    foldMap f (Leaf x) = f x\n    foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the monoid is assumed\n to satisfy the monoid laws.  Alternatively, one could define \u003ccode\u003efoldr\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldr f z Empty = z\n    foldr f z (Leaf x) = f x z\n    foldr f z (Node l k r) = foldr f (f k (foldr f z r)) l\n\u003c/pre\u003e",
          "module": "Lens.Family",
          "name": "Foldable",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "Data structures that can be folded Minimal complete definition foldMap or foldr For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Foldable Tree where foldMap Empty mempty foldMap Leaf foldMap Node foldMap mappend mappend foldMap This is suitable even for abstract types as the monoid is assumed to satisfy the monoid laws Alternatively one could define foldr instance Foldable Tree where foldr Empty foldr Leaf foldr Node foldr foldr",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Foldable",
          "package": "lens-family-core",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Foldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Getting",
          "package": "lens-family-core",
          "source": "src/Lens-Family.html#Getting",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Getting",
          "package": "lens-family-core",
          "partial": "Getting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Getting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe monoid returning the rightmost non-Nothing value.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Last",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Maybe monoid returning the rightmost non-Nothing value",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Last",
          "package": "lens-family-core",
          "partial": "Last",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "LensLike",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "LensLike",
          "package": "lens-family-core",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "LensLike'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "LensLike'",
          "package": "lens-family-core",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Monoid",
          "package": "lens-family-core",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Monoid",
          "package": "lens-family-core",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Phantom",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Phantom.html#Phantom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Phantom",
          "package": "lens-family-core",
          "partial": "Phantom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Phantom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under multiplication.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Product",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Monoid under multiplication",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Product",
          "package": "lens-family-core",
          "partial": "Product",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Setter",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Setter",
          "package": "lens-family-core",
          "partial": "Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Setter'",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Unchecked.html#Setter%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Setter'",
          "package": "lens-family-core",
          "partial": "Setter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Setter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "Setting",
          "package": "lens-family-core",
          "source": "src/Lens-Family-Setting.html#Setting",
          "type": "data"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Setting",
          "package": "lens-family-core",
          "partial": "Setting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Setting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under addition.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "Sum",
          "package": "lens-family-core",
          "type": "data"
        },
        "index": {
          "description": "Monoid under addition",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "Sum",
          "package": "lens-family-core",
          "partial": "Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#t:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(||~)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%7C%7C~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(||~) ||~",
          "normalized": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-124--124--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify all referenced fields.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(%~)",
          "package": "lens-family-core",
          "signature": "Setter a a' b b' -\u003e (b -\u003e b') -\u003e a -\u003e a'",
          "source": "src/Lens-Family.html#%25~",
          "type": "function"
        },
        "index": {
          "description": "Modify all referenced fields",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(%~) %~",
          "normalized": "Setter a b c d-\u003e(c-\u003ed)-\u003ea-\u003eb",
          "package": "lens-family-core",
          "signature": "Setter a a' b b'-\u003e(b-\u003eb')-\u003ea-\u003ea'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flipped version of \u003ccode\u003e($)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(&)",
          "package": "lens-family-core",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Lens-Family.html#%26",
          "type": "function"
        },
        "index": {
          "description": "flipped version of",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(&) &",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "lens-family-core",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(&&~)",
          "package": "lens-family-core",
          "signature": "Setter' a Bool -\u003e Bool -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%26%26~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(&&~) &&~",
          "normalized": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-38--38--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(*~)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%2A~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(*~) *~",
          "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-42--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(+~)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%2B~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(+~) +~",
          "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-43--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(-~)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#-~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(-~) -~",
          "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-45--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Lens.Family",
          "name": "(//~)",
          "package": "lens-family-core",
          "signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%2F%2F~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(//~) //~",
          "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-47--47--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoidally append a value to all referenced fields.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(\u003c\u003e~)",
          "package": "lens-family-core",
          "signature": "Setter' a o -\u003e o -\u003e a -\u003e a",
          "source": "src/Lens-Family.html#%3C%3E~",
          "type": "function"
        },
        "index": {
          "description": "Monoidally append value to all referenced fields",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(\u003c\u003e~) \u003c\u003e~",
          "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
          "package": "lens-family-core",
          "signature": "Setter' a o-\u003eo-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-60--62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n (^?) :: a -\u003e Fold a a' b b' -\u003e Maybe b\n\u003c/pre\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(^?)",
          "package": "lens-family-core",
          "signature": "a -\u003e FoldLike (First b) a a' b b' -\u003e Maybe b",
          "source": "src/Lens-Family.html#%5E%3F",
          "type": "function"
        },
        "index": {
          "description": "Fold Maybe Returns Just the first referenced value Returns Nothing if there are no referenced values",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(^?) ^?",
          "normalized": "a-\u003eFoldLike(First b)a c b d-\u003eMaybe b",
          "package": "lens-family-core",
          "signature": "a-\u003eFoldLike(First b)a a' b b'-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-94--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n (^.) :: a -\u003e Getter a a' b b' -\u003e b\n\u003c/pre\u003e\u003cp\u003eAccess the value referenced by a getter or lens.\n\u003c/p\u003e\u003cpre\u003e\n (^.) :: Monoid b =\u003e a -\u003e Fold a a' b b' -\u003e b\n\u003c/pre\u003e\u003cp\u003eAccess the monoidal summary referenced by a getter or lens.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(^.)",
          "package": "lens-family-core",
          "signature": "a -\u003e FoldLike b a a' b b' -\u003e b",
          "source": "src/Lens-Family.html#%5E.",
          "type": "function"
        },
        "index": {
          "description": "Getter Access the value referenced by getter or lens Monoid Fold Access the monoidal summary referenced by getter or lens",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(^.) ^.",
          "normalized": "a-\u003eFoldLike b a c b d-\u003eb",
          "package": "lens-family-core",
          "signature": "a-\u003eFoldLike b a a' b b'-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n (^..) :: a -\u003e Getter a a' b b' -\u003e [b]\n\u003c/pre\u003e\u003cp\u003eReturns a list of all of the referenced values in order.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(^..)",
          "package": "lens-family-core",
          "signature": "a -\u003e FoldLike [b] a a' b b' -\u003e [b]",
          "source": "src/Lens-Family.html#%5E..",
          "type": "function"
        },
        "index": {
          "description": "Getter Returns list of all of the referenced values in order",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(^..) ^..",
          "normalized": "a-\u003eFoldLike[b]a c b d-\u003e[b]",
          "package": "lens-family-core",
          "signature": "a-\u003eFoldLike[b]a a' b b'-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:-94-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all referenced fields to the given value.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "(.~)",
          "package": "lens-family-core",
          "signature": "Setter a a' b b' -\u003e b' -\u003e a -\u003e a'",
          "source": "src/Lens-Family.html#.~",
          "type": "function"
        },
        "index": {
          "description": "Set all referenced fields to the given value",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "(.~) .~",
          "normalized": "Setter a b c d-\u003ed-\u003ea-\u003eb",
          "package": "lens-family-core",
          "signature": "Setter a a' b b'-\u003eb'-\u003ea-\u003ea'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:.-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n allOf :: Fold a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eReturns true if all of the referenced values satisfy the given predicate.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "allOf",
          "package": "lens-family-core",
          "signature": "FoldLike All a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Lens-Family.html#allOf",
          "type": "function"
        },
        "index": {
          "description": "allOf Fold Bool Bool Returns true if all of the referenced values satisfy the given predicate",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "allOf",
          "normalized": "FoldLike All a b c d-\u003e(c-\u003eBool)-\u003ea-\u003eBool",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike All a a' b b'-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:allOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n anyOf :: Fold a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eReturns true if any of the referenced values satisfy the given predicate.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "anyOf",
          "package": "lens-family-core",
          "signature": "FoldLike Any a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/Lens-Family.html#anyOf",
          "type": "function"
        },
        "index": {
          "description": "anyOf Fold Bool Bool Returns true if any of the referenced values satisfy the given predicate",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "anyOf",
          "normalized": "FoldLike Any a b c d-\u003e(c-\u003eBool)-\u003ea-\u003eBool",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike Any a a' b b'-\u003e(b-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:anyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n backwards :: Traversal a a' b b' -\u003e Traversal a a' b b'\n backwards :: Fold a a' b b' -\u003e Fold a a' b b'\n\u003c/pre\u003e\u003cp\u003eGiven a traversal or fold, reverse the order that elements are traversed.\n\u003c/p\u003e\u003cpre\u003e\n backwards :: Lens a a' b b' -\u003e Lens a a' b b'\n backwards :: Getter a a' b b' -\u003e Getter a a' b b'\n\u003c/pre\u003e\u003cp\u003eNo effect on lenses or getters.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "backwards",
          "package": "lens-family-core",
          "signature": "LensLike (Backwards f) a a' b b' -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family.html#backwards",
          "type": "function"
        },
        "index": {
          "description": "backwards Traversal Traversal backwards Fold Fold Given traversal or fold reverse the order that elements are traversed backwards Lens Lens backwards Getter Getter No effect on lenses or getters",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "backwards",
          "normalized": "LensLike(Backwards a)b c d e-\u003eLensLike a b c d e",
          "package": "lens-family-core",
          "signature": "LensLike(Backwards f)a a' b b'-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n firstOf :: Fold a a' b b' -\u003e a -\u003e Maybe b\n\u003c/pre\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n See \u003ccode\u003e\u003ca\u003e^?\u003c/a\u003e\u003c/code\u003e for an infix version of \u003ccode\u003e\u003ca\u003efirstOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "firstOf",
          "package": "lens-family-core",
          "signature": "FoldLike (First b) a a' b b' -\u003e a -\u003e Maybe b",
          "source": "src/Lens-Family.html#firstOf",
          "type": "function"
        },
        "index": {
          "description": "firstOf Fold Maybe Returns Just the first referenced value Returns Nothing if there are no referenced values See for an infix version of firstOf",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "firstOf",
          "normalized": "FoldLike(First a)b c a d-\u003eb-\u003eMaybe a",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike(First b)a a' b b'-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:firstOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n folding :: (a -\u003e [b]) -\u003e Fold a a' b b'\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efolding\u003c/a\u003e\u003c/code\u003e promotes a \"toList\" function to a read-only traversal called a fold.\n\u003c/p\u003e\u003cp\u003eTo demote a traversal or fold to a \"toList\" function use the section \u003ccode\u003e(^..l)\u003c/code\u003e or \u003ccode\u003etoListOf l\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "folding",
          "package": "lens-family-core",
          "signature": "(a -\u003e g b) -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family.html#folding",
          "type": "function"
        },
        "index": {
          "description": "folding Fold folding promotes toList function to read-only traversal called fold To demote traversal or fold to toList function use the section or toListOf",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "folding",
          "normalized": "(a-\u003eb c)-\u003eLensLike d a e c f",
          "package": "lens-family-core",
          "signature": "(a-\u003eg b)-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:folding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n lastOf :: Fold a a' b b' -\u003e a -\u003e Maybe b\n\u003c/pre\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the last referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "lastOf",
          "package": "lens-family-core",
          "signature": "FoldLike (Last b) a a' b b' -\u003e a -\u003e Maybe b",
          "source": "src/Lens-Family.html#lastOf",
          "type": "function"
        },
        "index": {
          "description": "lastOf Fold Maybe Returns Just the last referenced value Returns Nothing if there are no referenced values",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "lastOf",
          "normalized": "FoldLike(Last a)b c a d-\u003eb-\u003eMaybe a",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike(Last b)a a' b b'-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:lastOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n lengthOf :: Num r =\u003e Fold a a' b b' -\u003e a -\u003e r\n\u003c/pre\u003e\u003cp\u003eCounts the number of references in a traversal or fold for the input.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "lengthOf",
          "package": "lens-family-core",
          "signature": "FoldLike (Sum r) a a' b b' -\u003e a -\u003e r",
          "source": "src/Lens-Family.html#lengthOf",
          "type": "function"
        },
        "index": {
          "description": "lengthOf Num Fold Counts the number of references in traversal or fold for the input",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "lengthOf",
          "normalized": "FoldLike(Sum a)b c d e-\u003eb-\u003ea",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike(Sum r)a a' b b'-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:lengthOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n nullOf :: Fold a a' b b' -\u003e a -\u003e Bool\n\u003c/pre\u003e\u003cp\u003eReturns true if the number of references in the input is zero.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "nullOf",
          "package": "lens-family-core",
          "signature": "FoldLike All a a' b b' -\u003e a -\u003e Bool",
          "source": "src/Lens-Family.html#nullOf",
          "type": "function"
        },
        "index": {
          "description": "nullOf Fold Bool Returns true if the number of references in the input is zero",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "nullOf",
          "normalized": "FoldLike All a b c d-\u003ea-\u003eBool",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike All a a' b b'-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:nullOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemote a setter to a semantic editor combinator.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "over",
          "package": "lens-family-core",
          "signature": "Setter a a' b b' -\u003e (b -\u003e b') -\u003e a -\u003e a'",
          "source": "src/Lens-Family.html#over",
          "type": "function"
        },
        "index": {
          "description": "Demote setter to semantic editor combinator",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "over",
          "normalized": "Setter a b c d-\u003e(c-\u003ed)-\u003ea-\u003eb",
          "package": "lens-family-core",
          "signature": "Setter a a' b b'-\u003e(b-\u003eb')-\u003ea-\u003ea'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:over"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n productOf :: Num b =\u003e Fold a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eReturns the product of all the referenced values.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "productOf",
          "package": "lens-family-core",
          "signature": "FoldLike (Product b) a a' b b' -\u003e a -\u003e b",
          "source": "src/Lens-Family.html#productOf",
          "type": "function"
        },
        "index": {
          "description": "productOf Num Fold Returns the product of all the referenced values",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "productOf",
          "normalized": "FoldLike(Product a)b c a d-\u003eb-\u003ea",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike(Product b)a a' b b'-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:productOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all referenced fields to the given value.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "set",
          "package": "lens-family-core",
          "signature": "Setter a a' b b' -\u003e b' -\u003e a -\u003e a'",
          "source": "src/Lens-Family.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set all referenced fields to the given value",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "set",
          "normalized": "Setter a b c d-\u003ed-\u003ea-\u003eb",
          "package": "lens-family-core",
          "signature": "Setter a a' b b'-\u003eb'-\u003ea-\u003ea'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n sumOf :: Num b =\u003e Fold a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eReturns the sum of all the referenced values.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "sumOf",
          "package": "lens-family-core",
          "signature": "FoldLike (Sum b) a a' b b' -\u003e a -\u003e b",
          "source": "src/Lens-Family.html#sumOf",
          "type": "function"
        },
        "index": {
          "description": "sumOf Num Fold Returns the sum of all the referenced values",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "sumOf",
          "normalized": "FoldLike(Sum a)b c a d-\u003eb-\u003ea",
          "package": "lens-family-core",
          "partial": "Of",
          "signature": "FoldLike(Sum b)a a' b b'-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:sumOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n to :: (a -\u003e b) -\u003e Getter a a' b b'\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e promotes a projection function to a read-only lens called a getter.\n To demote a lens to a projection function, use the section \u003ccode\u003e(^.l)\u003c/code\u003e or \u003ccode\u003eview l\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(3 :+ 4, \"example\")^._1.to(abs)\n\u003c/code\u003e\u003c/strong\u003e5.0 :+ 0.0\n\u003c/pre\u003e",
          "module": "Lens.Family",
          "name": "to",
          "package": "lens-family-core",
          "signature": "(a -\u003e b) -\u003e LensLike f a a' b b'",
          "source": "src/Lens-Family.html#to",
          "type": "function"
        },
        "index": {
          "description": "to Getter to promotes projection function to read-only lens called getter To demote lens to projection function use the section or view example to abs",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "to",
          "normalized": "(a-\u003eb)-\u003eLensLike c a d b e",
          "package": "lens-family-core",
          "signature": "(a-\u003eb)-\u003eLensLike f a a' b b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n toListOf :: Fold a a' b b' -\u003e a -\u003e [b]\n\u003c/pre\u003e\u003cp\u003eReturns a list of all of the referenced values in order.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "toListOf",
          "package": "lens-family-core",
          "signature": "FoldLike [b] a a' b b' -\u003e a -\u003e [b]",
          "source": "src/Lens-Family.html#toListOf",
          "type": "function"
        },
        "index": {
          "description": "toListOf Fold Returns list of all of the referenced values in order",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "toListOf",
          "normalized": "FoldLike[a]b c a d-\u003eb-\u003e[a]",
          "package": "lens-family-core",
          "partial": "List Of",
          "signature": "FoldLike[b]a a' b b'-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:toListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n view :: Getter a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eDemote a lens or getter to a projection function.\n\u003c/p\u003e\u003cpre\u003e\n view :: Monoid b =\u003e Fold a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eReturns the monoidal summary of a traversal or a fold.\n\u003c/p\u003e",
          "module": "Lens.Family",
          "name": "view",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b' -\u003e a -\u003e b",
          "source": "src/Lens-Family.html#view",
          "type": "function"
        },
        "index": {
          "description": "view Getter Demote lens or getter to projection function view Monoid Fold Returns the monoidal summary of traversal or fold",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "view",
          "normalized": "FoldLike a b c a d-\u003eb-\u003ea",
          "package": "lens-family-core",
          "signature": "FoldLike b a a' b b'-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\n views :: Monoid r =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r\n\u003c/pre\u003e\u003cp\u003eGiven a fold or traversal, return the \u003ccode\u003efoldMap\u003c/code\u003e of all the values using the given function.\n\u003c/p\u003e\u003cpre\u003e\n views :: Getter a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eviews\u003c/a\u003e\u003c/code\u003e is not particularly useful for getters or lenses, but given a getter or lens, it returns the referenced value passed through the given function.\n\u003c/p\u003e\u003cpre\u003e\n views l f a = f (view l a)\n\u003c/pre\u003e",
          "module": "Lens.Family",
          "name": "views",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r",
          "source": "src/Lens-Family.html#views",
          "type": "function"
        },
        "index": {
          "description": "views Monoid Fold Given fold or traversal return the foldMap of all the values using the given function views Getter views is not particularly useful for getters or lenses but given getter or lens it returns the referenced value passed through the given function views view",
          "hierarchy": "Lens Family",
          "module": "Lens.Family",
          "name": "views",
          "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003eb-\u003ea",
          "package": "lens-family-core",
          "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-family-core/docs/Lens-Family.html#v:views"
      }
    }
  ]
]