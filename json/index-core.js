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
        "word": "index-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the core (\u003ccode\u003e\u003ca\u003e:-\u003e\u003c/a\u003e\u003c/code\u003e) type operator, which links the world\n   of indexed types and the world of unindexed types.\n\u003c/p\u003e\u003cp\u003eYou can use this type operator with the following extension:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TypeOperators #-}\n\u003c/pre\u003e\u003cp\u003eSometimes you may also need the \u003ccode\u003eRank2Types\u003c/code\u003e extension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Category.Index",
          "name": "Index",
          "package": "index-core",
          "source": "src/Control-Category-Index.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the core type operator which links the world of indexed types and the world of unindexed types You can use this type operator with the following extension LANGUAGE TypeOperators Sometimes you may also need the Rank2Types extension",
          "hierarchy": "Control Category Index",
          "module": "Control.Category.Index",
          "name": "Index",
          "package": "index-core",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-Category-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index-preserving function from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Index",
          "name": ":-\u003e",
          "package": "index-core",
          "source": "src/Control-Category-Index.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "An index-preserving function from to",
          "hierarchy": "Control Category Index",
          "module": "Control.Category.Index",
          "name": ":-\u003e",
          "package": "index-core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-Category-Index.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eIFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIMonad\u003c/a\u003e\u003c/code\u003e classes which are the\n    indexed counterparts to \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IMonad.Core",
          "name": "Core",
          "package": "index-core",
          "source": "src/Control-IMonad-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the IFunctor and IMonad classes which are the indexed counterparts to Functor and Monad from Control.Monad",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "Core",
          "package": "index-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn endofunctor within the category of index-preserving functions\n\u003c/p\u003e\u003cp\u003eAll instances must satisfy the functor laws:\n\u003c/p\u003e\u003cpre\u003e fmapI id == id\n\n fmapI (f . g) == fmapI f . fmapI g\n\u003c/pre\u003e",
          "module": "Control.IMonad.Core",
          "name": "IFunctor",
          "package": "index-core",
          "source": "src/Control-IMonad-Core.html#IFunctor",
          "type": "class"
        },
        "index": {
          "description": "An endofunctor within the category of index-preserving functions All instances must satisfy the functor laws fmapI id id fmapI fmapI fmapI",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "IFunctor",
          "package": "index-core",
          "partial": "IFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#t:IFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indexed monad\n\u003c/p\u003e\u003cp\u003eAll instances must satisfy the monad laws:\n\u003c/p\u003e\u003cpre\u003e returnI \u003e?\u003e f = f\n\n f \u003e?\u003e returnI = f\n\n (f \u003e?\u003e g) \u003e?\u003e h = f \u003e?\u003e (g \u003e?\u003e h)\n\u003c/pre\u003e",
          "module": "Control.IMonad.Core",
          "name": "IMonad",
          "package": "index-core",
          "source": "src/Control-IMonad-Core.html#IMonad",
          "type": "class"
        },
        "index": {
          "description": "An indexed monad All instances must satisfy the monad laws returnI returnI",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "IMonad",
          "package": "index-core",
          "partial": "IMonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#t:IMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of indexed Kleisli arrows\n\u003c/p\u003e\u003cp\u003eThis is equivalent to (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) from \u003ccode\u003eControl.Category\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Core",
          "name": "(\u003c?\u003c)",
          "package": "index-core",
          "signature": "(b :-\u003e m c) -\u003e (a :-\u003e m b) -\u003e a :-\u003e m c",
          "source": "src/Control-IMonad-Core.html#%3C%3F%3C",
          "type": "function"
        },
        "index": {
          "description": "Composition of indexed Kleisli arrows This is equivalent to from Control.Category",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "(\u003c?\u003c) \u003c?\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "index-core",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:-60--63--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix \u003ccode\u003e\u003ca\u003ebindI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.IMonad.Core",
          "name": "(=\u003c?)",
          "package": "index-core",
          "signature": "(a :-\u003e m b) -\u003e m a :-\u003e m b",
          "source": "src/Control-IMonad-Core.html#%3D%3C%3F",
          "type": "function"
        },
        "index": {
          "description": "An infix bindI",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "(=\u003c?) =\u003c?",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "index-core",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:-61--60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of indexed Kleisli arrows\n\u003c/p\u003e\u003cp\u003eThis is equivalent to (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e) from \u003ccode\u003eControl.Category\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Core",
          "name": "(\u003e?\u003e)",
          "package": "index-core",
          "signature": "(a :-\u003e m b) -\u003e (b :-\u003e m c) -\u003e a :-\u003e m c",
          "source": "src/Control-IMonad-Core.html#%3E%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Composition of indexed Kleisli arrows This is equivalent to from Control.Category",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "(\u003e?\u003e) \u003e?\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "index-core",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:-62--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix \u003ccode\u003e\u003ca\u003ebindI\u003c/a\u003e\u003c/code\u003e with arguments flipped\n\u003c/p\u003e",
          "module": "Control.IMonad.Core",
          "name": "(?\u003e=)",
          "package": "index-core",
          "signature": "m a i -\u003e (a :-\u003e m b) -\u003e m b i",
          "source": "src/Control-IMonad-Core.html#%3F%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "An infix bindI with arguments flipped",
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "(?\u003e=) ?\u003e=",
          "normalized": "a b c-\u003e(b-\u003ea d)-\u003ea d c",
          "package": "index-core",
          "signature": "m a i-\u003e(a-\u003em b)-\u003em b i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:-63--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Core",
          "name": "bindI",
          "package": "index-core",
          "signature": "(a :-\u003e m b) -\u003e m a :-\u003e m b",
          "source": "src/Control-IMonad-Core.html#bindI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "bindI",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "index-core",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:bindI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Core",
          "name": "fmapI",
          "package": "index-core",
          "signature": "(a :-\u003e b) -\u003e f a :-\u003e f b",
          "source": "src/Control-IMonad-Core.html#fmapI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "fmapI",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "index-core",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:fmapI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Core",
          "name": "returnI",
          "package": "index-core",
          "signature": "a :-\u003e m a",
          "source": "src/Control-IMonad-Core.html#returnI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control IMonad Core",
          "module": "Control.IMonad.Core",
          "name": "returnI",
          "normalized": "a-\u003eb a",
          "package": "index-core",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Core.html#v:returnI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module rebinds \u003ccode\u003edo\u003c/code\u003e notation to work with restricted monads in\n   conjunction with the \u003ccode\u003eRebindableSyntax\u003c/code\u003e extension.  This module re-exports\n   \u003ca\u003eControl.IMonad\u003c/a\u003e, so it only requires the following minimum file header:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE RebindableSyntax #-}\n\n import Control.IMonad.Do\n import Prelude hiding (Monad(..))\n\u003c/pre\u003e\u003cp\u003eThe Prelude is reimported since \u003ccode\u003eRebindableSyntax\u003c/code\u003e also includes the\n \u003ccode\u003eNoImplicitPrelude\u003c/code\u003e extension, otherwise the Prelude's \u003ccode\u003eMonad\u003c/code\u003e bindings would\n conflict with these bindings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IMonad.Do",
          "name": "Do",
          "package": "index-core",
          "source": "src/Control-IMonad-Do.html",
          "type": "module"
        },
        "index": {
          "description": "This module rebinds do notation to work with restricted monads in conjunction with the RebindableSyntax extension This module re-exports Control.IMonad so it only requires the following minimum file header LANGUAGE RebindableSyntax import Control.IMonad.Do import Prelude hiding Monad The Prelude is reimported since RebindableSyntax also includes the NoImplicitPrelude extension otherwise the Prelude Monad bindings would conflict with these bindings",
          "hierarchy": "Control IMonad Do",
          "module": "Control.IMonad.Do",
          "name": "Do",
          "package": "index-core",
          "partial": "Do",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Do.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e) replaces (\u003ccode\u003e\u003e\u003e\u003c/code\u003e) from \u003ccode\u003eControl.Monad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Do",
          "name": "(\u003e\u003e)",
          "package": "index-core",
          "signature": "m (a := j) i -\u003e m (b := k) j -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Do.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "replaces from Control.Monad",
          "hierarchy": "Control IMonad Do",
          "module": "Control.IMonad.Do",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a(b c)d-\u003ea(e f)c-\u003ea(e f)d",
          "package": "index-core",
          "signature": "m(a j)i-\u003em(b k)j-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Do.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) replaces (\u003ccode\u003e\u003e\u003e=\u003c/code\u003e) from \u003ccode\u003eControl.Monad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Do",
          "name": "(\u003e\u003e=)",
          "package": "index-core",
          "signature": "m (a := j) i -\u003e (a -\u003e m (b := k) j) -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Do.html#%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "replaces from Control.Monad",
          "hierarchy": "Control IMonad Do",
          "module": "Control.IMonad.Do",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a(b c)d-\u003e(b-\u003ea(e f)c)-\u003ea(e f)d",
          "package": "index-core",
          "signature": "m(a j)i-\u003e(a-\u003em(b k)j)-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Do.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e replaces \u003ccode\u003efail\u003c/code\u003e from \u003ccode\u003eControl.Monad\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.IMonad.Do",
          "name": "fail",
          "package": "index-core",
          "signature": "String -\u003e m (a := j) i",
          "source": "src/Control-IMonad-Do.html#fail",
          "type": "function"
        },
        "index": {
          "description": "fail replaces fail from Control.Monad",
          "hierarchy": "Control IMonad Do",
          "module": "Control.IMonad.Do",
          "name": "fail",
          "normalized": "String-\u003ea(b c)d",
          "package": "index-core",
          "signature": "String-\u003em(a j)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Do.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e replaces \u003ccode\u003ereturn\u003c/code\u003e from \u003ccode\u003eControl.Monad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Do",
          "name": "return",
          "package": "index-core",
          "signature": "a -\u003e m (a := i) i",
          "source": "src/Control-IMonad-Do.html#return",
          "type": "function"
        },
        "index": {
          "description": "return replaces return from Control.Monad",
          "hierarchy": "Control IMonad Do",
          "module": "Control.IMonad.Do",
          "name": "return",
          "normalized": "a-\u003eb(a c)c",
          "package": "index-core",
          "signature": "a-\u003em(a i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Do.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRestricted monads are a subset of indexed monads where the return value is\n    restricted to a single index.  They build on top of \u003ccode\u003e\u003ca\u003eIMonad\u003c/a\u003e\u003c/code\u003e using the\n    (\u003ccode\u003e\u003ca\u003e:=\u003c/a\u003e\u003c/code\u003e) type constructor which restricts the index of the return value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "Restrict",
          "package": "index-core",
          "source": "src/Control-IMonad-Restrict.html",
          "type": "module"
        },
        "index": {
          "description": "Restricted monads are subset of indexed monads where the return value is restricted to single index They build on top of IMonad using the type constructor which restricts the index of the return value",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "Restrict",
          "package": "index-core",
          "partial": "Restrict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(a := i)\u003c/code\u003e represents a locked value of type \u003ccode\u003ea\u003c/code\u003e that you can only access \n    at the index \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eV\u003c/a\u003e\u003c/code\u003e seals values of type \u003ccode\u003ea\u003c/code\u003e, restricting them to a single index \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": ":=",
          "package": "index-core",
          "source": "src/Control-IMonad-Restrict.html#%3A%3D",
          "type": "data"
        },
        "index": {
          "description": "represents locked value of type that you can only access at the index seals values of type restricting them to single index",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": ":=",
          "package": "index-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#t::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eD\u003c/a\u003e\u003c/code\u003e type 'D'owngrades index-preserving restricted monads to ordinary\n    monads\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "D",
          "package": "index-core",
          "source": "src/Control-IMonad-Restrict.html#D",
          "type": "data"
        },
        "index": {
          "description": "The type owngrades index-preserving restricted monads to ordinary monads",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "D",
          "package": "index-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indexed monad where the final index, \u003ccode\u003ej\u003c/code\u003e, is 'R'estricted\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "R",
          "package": "index-core",
          "source": "src/Control-IMonad-Restrict.html#R",
          "type": "type"
        },
        "index": {
          "description": "An indexed monad where the final index is estricted",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "R",
          "package": "index-core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eU\u003c/a\u003e\u003c/code\u003e type 'U'pgrades ordinary monads to restricted monads\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "U",
          "package": "index-core",
          "source": "src/Control-IMonad-Restrict.html#U",
          "type": "data"
        },
        "index": {
          "description": "The type pgrades ordinary monads to restricted monads",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "U",
          "package": "index-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence two indexed monads\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(!\u003e)",
          "package": "index-core",
          "signature": "m (a := j) i -\u003e m (b := k) j -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Restrict.html#%21%3E",
          "type": "function"
        },
        "index": {
          "description": "Sequence two indexed monads",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(!\u003e) !\u003e",
          "normalized": "a(b c)d-\u003ea(e f)c-\u003ea(e f)d",
          "package": "index-core",
          "signature": "m(a j)i-\u003em(b k)j-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flipped \u003ccode\u003e\u003ca\u003ebindI\u003c/a\u003e\u003c/code\u003e that restricts the intermediate and final index\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(!\u003e=)",
          "package": "index-core",
          "signature": "m (a := j) i -\u003e (a -\u003e m (b := k) j) -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Restrict.html#%21%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "flipped bindI that restricts the intermediate and final index",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(!\u003e=) !\u003e=",
          "normalized": "a(b c)d-\u003e(b-\u003ea(e f)c)-\u003ea(e f)d",
          "package": "index-core",
          "signature": "m(a j)i-\u003e(a-\u003em(b k)j)-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-33--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of restricted Kleisli arrows\n\u003c/p\u003e\u003cp\u003eThis is equivalent to (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e) from \u003ccode\u003eControl.Category\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c!\u003c)",
          "package": "index-core",
          "signature": "(b -\u003e m (c := k) j) -\u003e (a -\u003e m (b := j) i) -\u003e a -\u003e m (c := k) i",
          "source": "src/Control-IMonad-Restrict.html#%3C%21%3C",
          "type": "function"
        },
        "index": {
          "description": "Composition of restricted Kleisli arrows This is equivalent to from Control.Category",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c!\u003c) \u003c!\u003c",
          "normalized": "(a-\u003eb(c d)e)-\u003e(f-\u003eb(a e)g)-\u003ef-\u003eb(c d)g",
          "package": "index-core",
          "signature": "(b-\u003em(c k)j)-\u003e(a-\u003em(b j)i)-\u003ea-\u003em(c k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-60--33--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003efmapR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c!\u003e)",
          "package": "index-core",
          "signature": "(a -\u003e b) -\u003e m (a := j) i -\u003e m (b := j) i",
          "source": "src/Control-IMonad-Restrict.html#%3C%21%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix fmapR",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c!\u003e) \u003c!\u003e",
          "normalized": "(a-\u003eb)-\u003ec(a d)e-\u003ec(b d)e",
          "package": "index-core",
          "signature": "(a-\u003eb)-\u003em(a j)i-\u003em(b j)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-60--33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll restricted monads are restricted applicatives\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c.\u003e)",
          "package": "index-core",
          "signature": "m ((a -\u003e b) := j) i -\u003e m (a := k) j -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Restrict.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "All restricted monads are restricted applicatives",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "a((b-\u003ec)d)e-\u003ea(b f)d-\u003ea(c f)e",
          "package": "index-core",
          "signature": "m((a-\u003eb)j)i-\u003em(a k)j-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ebindI\u003c/a\u003e\u003c/code\u003e that restricts the intermediate and final index\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(=\u003c!)",
          "package": "index-core",
          "signature": "(a -\u003e m (b := k) j) -\u003e m (a := j) i -\u003e m (b := k) i",
          "source": "src/Control-IMonad-Restrict.html#%3D%3C%21",
          "type": "function"
        },
        "index": {
          "description": "bindI that restricts the intermediate and final index",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(=\u003c!) =\u003c!",
          "normalized": "(a-\u003eb(c d)e)-\u003eb(a e)f-\u003eb(c d)f",
          "package": "index-core",
          "signature": "(a-\u003em(b k)j)-\u003em(a j)i-\u003em(b k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-61--60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of restricted Kleisli arrows\n\u003c/p\u003e\u003cp\u003eThis is equivalent to (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e) from \u003ccode\u003eControl.Category\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003e!\u003e)",
          "package": "index-core",
          "signature": "(a -\u003e m (b := j) i) -\u003e (b -\u003e m (c := k) j) -\u003e a -\u003e m (c := k) i",
          "source": "src/Control-IMonad-Restrict.html#%3E%21%3E",
          "type": "function"
        },
        "index": {
          "description": "Composition of restricted Kleisli arrows This is equivalent to from Control.Category",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "(\u003e!\u003e) \u003e!\u003e",
          "normalized": "(a-\u003eb(c d)e)-\u003e(c-\u003eb(f g)d)-\u003ea-\u003eb(f g)e",
          "package": "index-core",
          "signature": "(a-\u003em(b j)i)-\u003e(b-\u003em(c k)j)-\u003ea-\u003em(c k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:-62--33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Restrict",
          "name": "D",
          "package": "index-core",
          "signature": "D",
          "source": "src/Control-IMonad-Restrict.html#D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "D",
          "package": "index-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Restrict",
          "name": "U",
          "package": "index-core",
          "signature": "m (a i) -\u003e U m a i",
          "source": "src/Control-IMonad-Restrict.html#U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "U",
          "normalized": "a(b c)-\u003eU a b c",
          "package": "index-core",
          "signature": "m(a i)-\u003eU m a i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Restrict",
          "name": "V",
          "package": "index-core",
          "signature": "a -\u003e (a := i) i",
          "source": "src/Control-IMonad-Restrict.html#%3A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "V",
          "normalized": "a-\u003e(a b)b",
          "package": "index-core",
          "signature": "a-\u003e(a i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll restricted monads are ordinary functors\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "fmapR",
          "package": "index-core",
          "signature": "(a -\u003e b) -\u003e m (a := j) i -\u003e m (b := j) i",
          "source": "src/Control-IMonad-Restrict.html#fmapR",
          "type": "function"
        },
        "index": {
          "description": "All restricted monads are ordinary functors",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "fmapR",
          "normalized": "(a-\u003eb)-\u003ec(a d)e-\u003ec(b d)e",
          "package": "index-core",
          "signature": "(a-\u003eb)-\u003em(a j)i-\u003em(b j)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:fmapR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapMR\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "forMR",
          "package": "index-core",
          "signature": "[a] -\u003e (a -\u003e m (b := i) i) -\u003e m ([b] := i) i",
          "source": "src/Control-IMonad-Restrict.html#forMR",
          "type": "function"
        },
        "index": {
          "description": "mapMR with its arguments flipped",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "forMR",
          "normalized": "[a]-\u003e(a-\u003eb(c d)d)-\u003eb([c]d)d",
          "package": "index-core",
          "partial": "MR",
          "signature": "[a]-\u003e(a-\u003em(b i)i)-\u003em([b]i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:forMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapMR_\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "forMR_",
          "package": "index-core",
          "signature": "[a] -\u003e (a -\u003e m (b := i) i) -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#forMR_",
          "type": "function"
        },
        "index": {
          "description": "mapMR with its arguments flipped",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "forMR_",
          "normalized": "[a]-\u003e(a-\u003eb(c d)d)-\u003eb(()d)d",
          "package": "index-core",
          "partial": "MR",
          "signature": "[a]-\u003e(a-\u003em(b i)i)-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:forMR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforeverR\u003c/a\u003e\u003c/code\u003e repeats the action indefinitely\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "foreverR",
          "package": "index-core",
          "signature": "m (a := i) i -\u003e m (b := j) i",
          "source": "src/Control-IMonad-Restrict.html#foreverR",
          "type": "function"
        },
        "index": {
          "description": "foreverR repeats the action indefinitely",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "foreverR",
          "normalized": "a(b c)c-\u003ea(d e)c",
          "package": "index-core",
          "signature": "m(a i)i-\u003em(b j)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:foreverR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoinR\u003c/a\u003e\u003c/code\u003e joins two monad layers into one\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "joinR",
          "package": "index-core",
          "signature": "m (m (a := k) j := j) i -\u003e m (a := k) i",
          "source": "src/Control-IMonad-Restrict.html#joinR",
          "type": "function"
        },
        "index": {
          "description": "joinR joins two monad layers into one",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "joinR",
          "normalized": "a(a(b c)d d)e-\u003ea(b c)e",
          "package": "index-core",
          "signature": "m(m(a k)j j)i-\u003em(a k)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:joinR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003emapMR f\u003c/code\u003e\" is equivalent to \"\u003ccode\u003esequenceR . map f\u003c/code\u003e\"\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "mapMR",
          "package": "index-core",
          "signature": "(a -\u003e m (b := i) i) -\u003e [a] -\u003e m ([b] := i) i",
          "source": "src/Control-IMonad-Restrict.html#mapMR",
          "type": "function"
        },
        "index": {
          "description": "mapMR is equivalent to sequenceR map",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "mapMR",
          "normalized": "(a-\u003eb(c d)d)-\u003e[a]-\u003eb([c]d)d",
          "package": "index-core",
          "partial": "MR",
          "signature": "(a-\u003em(b i)i)-\u003e[a]-\u003em([b]i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:mapMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003emapMR_ f\u003c/code\u003e\" is equivalent to \"\u003ccode\u003esequenceR_ . map f\u003c/code\u003e\"\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "mapMR_",
          "package": "index-core",
          "signature": "(a -\u003e m (b := i) i) -\u003e [a] -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#mapMR_",
          "type": "function"
        },
        "index": {
          "description": "mapMR is equivalent to sequenceR map",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "mapMR_",
          "normalized": "(a-\u003eb(c d)d)-\u003e[a]-\u003eb(()d)d",
          "package": "index-core",
          "partial": "MR",
          "signature": "(a-\u003em(b i)i)-\u003e[a]-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:mapMR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003ereplicateMR n m\u003c/code\u003e\" performs \u003ccode\u003em\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times and collects the results\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "replicateMR",
          "package": "index-core",
          "signature": "Int -\u003e m (a := i) i -\u003e m ([a] := i) i",
          "source": "src/Control-IMonad-Restrict.html#replicateMR",
          "type": "function"
        },
        "index": {
          "description": "replicateMR performs times and collects the results",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "replicateMR",
          "normalized": "Int-\u003ea(b c)c-\u003ea([b]c)c",
          "package": "index-core",
          "partial": "MR",
          "signature": "Int-\u003em(a i)i-\u003em([a]i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:replicateMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003ereplicateMR_ n m\u003c/code\u003e\" performs \u003ccode\u003em\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times and ignores the results\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "replicateMR_",
          "package": "index-core",
          "signature": "Int -\u003e m (a := i) i -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#replicateMR_",
          "type": "function"
        },
        "index": {
          "description": "replicateMR performs times and ignores the results",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "replicateMR_",
          "normalized": "Int-\u003ea(b c)c-\u003ea(()c)c",
          "package": "index-core",
          "partial": "MR",
          "signature": "Int-\u003em(a i)i-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:replicateMR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e that restricts the final index\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "returnR",
          "package": "index-core",
          "signature": "a -\u003e m (a := i) i",
          "source": "src/Control-IMonad-Restrict.html#returnR",
          "type": "function"
        },
        "index": {
          "description": "returnI that restricts the final index",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "returnR",
          "normalized": "a-\u003eb(a c)c",
          "package": "index-core",
          "signature": "a-\u003em(a i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:returnR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action from left to right and collect the results\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "sequenceR",
          "package": "index-core",
          "signature": "[m (a := i) i] -\u003e m ([a] := i) i",
          "source": "src/Control-IMonad-Restrict.html#sequenceR",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action from left to right and collect the results",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "sequenceR",
          "normalized": "[a(b c)c]-\u003ea([b]c)c",
          "package": "index-core",
          "signature": "[m(a i)i]-\u003em([a]i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:sequenceR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action from left to right and ignore the results\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "sequenceR_",
          "package": "index-core",
          "signature": "[m (a := i) i] -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#sequenceR_",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action from left to right and ignore the results",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "sequenceR_",
          "normalized": "[a(b c)c]-\u003ea(()c)c",
          "package": "index-core",
          "signature": "[m(a i)i]-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:sequenceR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eu\u003c/a\u003e\u003c/code\u003e transforms an ordinary monad into a restricted monad\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "u",
          "package": "index-core",
          "signature": "m a -\u003e U m (a := i) i",
          "source": "src/Control-IMonad-Restrict.html#u",
          "type": "function"
        },
        "index": {
          "description": "transforms an ordinary monad into restricted monad",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "u",
          "normalized": "a b-\u003eU a(b c)c",
          "package": "index-core",
          "signature": "m a-\u003eU m(a i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Restrict",
          "name": "unD",
          "package": "index-core",
          "signature": "m (r := i) i",
          "source": "src/Control-IMonad-Restrict.html#D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "unD",
          "package": "index-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:unD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Restrict",
          "name": "unU",
          "package": "index-core",
          "signature": "m (a i)",
          "source": "src/Control-IMonad-Restrict.html#U",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "unU",
          "package": "index-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:unU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003eunlessR p m\u003c/code\u003e\" executes \u003ccode\u003em\u003c/code\u003e if \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "unlessR",
          "package": "index-core",
          "signature": "Bool -\u003e m (() := i) i -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#unlessR",
          "type": "function"
        },
        "index": {
          "description": "unlessR executes if is False",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "unlessR",
          "normalized": "Bool-\u003ea(()b)b-\u003ea(()b)b",
          "package": "index-core",
          "signature": "Bool-\u003em(()i)i-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:unlessR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the result of evaluation\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "voidR",
          "package": "index-core",
          "signature": "m (a := i) i -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#voidR",
          "type": "function"
        },
        "index": {
          "description": "Discard the result of evaluation",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "voidR",
          "normalized": "a(b c)c-\u003ea(()c)c",
          "package": "index-core",
          "signature": "m(a i)i-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:voidR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"\u003ccode\u003ewhenR p m\u003c/code\u003e\" executes \u003ccode\u003em\u003c/code\u003e if \u003ccode\u003ep\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.IMonad.Restrict",
          "name": "whenR",
          "package": "index-core",
          "signature": "Bool -\u003e m (() := i) i -\u003e m (() := i) i",
          "source": "src/Control-IMonad-Restrict.html#whenR",
          "type": "function"
        },
        "index": {
          "description": "whenR executes if is True",
          "hierarchy": "Control IMonad Restrict",
          "module": "Control.IMonad.Restrict",
          "name": "whenR",
          "normalized": "Bool-\u003ea(()b)b-\u003ea(()b)b",
          "package": "index-core",
          "signature": "Bool-\u003em(()i)i-\u003em(()i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Restrict.html#v:whenR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the indexed equivalent to \u003ccode\u003eControl.Monad.Trans.Class\u003c/code\u003e from\n    the \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IMonad.Trans",
          "name": "Trans",
          "package": "index-core",
          "source": "src/Control-IMonad-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the indexed equivalent to Control.Monad.Trans.Class from the transformers package",
          "hierarchy": "Control IMonad Trans",
          "module": "Control.IMonad.Trans",
          "name": "Trans",
          "package": "index-core",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indexed monad transformer.\n\u003c/p\u003e\u003cp\u003eAll instances must satisfy the monad transformer laws:\n\u003c/p\u003e\u003cpre\u003e liftI . returnI = returnI\n\n liftI . (f \u003e?\u003e g) = (liftI . f) \u003e?\u003e (liftI . g)\n\u003c/pre\u003e",
          "module": "Control.IMonad.Trans",
          "name": "IMonadTrans",
          "package": "index-core",
          "source": "src/Control-IMonad-Trans.html#IMonadTrans",
          "type": "class"
        },
        "index": {
          "description": "An indexed monad transformer All instances must satisfy the monad transformer laws liftI returnI returnI liftI liftI liftI",
          "hierarchy": "Control IMonad Trans",
          "module": "Control.IMonad.Trans",
          "name": "IMonadTrans",
          "package": "index-core",
          "partial": "IMonad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Trans.html#t:IMonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IMonad.Trans",
          "name": "liftI",
          "package": "index-core",
          "signature": "m a :-\u003e t m a",
          "source": "src/Control-IMonad-Trans.html#liftI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control IMonad Trans",
          "module": "Control.IMonad.Trans",
          "name": "liftI",
          "normalized": "a b-\u003ec a b",
          "package": "index-core",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Trans.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts ordinary monads for restricted monad transformers\n\u003c/p\u003e\u003cpre\u003e liftU = liftI . u\n\u003c/pre\u003e",
          "module": "Control.IMonad.Trans",
          "name": "liftU",
          "package": "index-core",
          "signature": "m a -\u003e t (U m) (a := i) i",
          "source": "src/Control-IMonad-Trans.html#liftU",
          "type": "function"
        },
        "index": {
          "description": "Lifts ordinary monads for restricted monad transformers liftU liftI",
          "hierarchy": "Control IMonad Trans",
          "module": "Control.IMonad.Trans",
          "name": "liftU",
          "normalized": "a b-\u003ec(U a)(b d)d",
          "package": "index-core",
          "signature": "m a-\u003et(U m)(a i)i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad-Trans.html#v:liftU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a common interface to both indexed monads and\n    restricted monads.  I split them into two separate modules for\n    organizational purposes and to simplify the presentation of each type of\n    indexed monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IMonad",
          "name": "IMonad",
          "package": "index-core",
          "source": "src/Control-IMonad.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides common interface to both indexed monads and restricted monads split them into two separate modules for organizational purposes and to simplify the presentation of each type of indexed monad",
          "hierarchy": "Control IMonad",
          "module": "Control.IMonad",
          "name": "IMonad",
          "package": "index-core",
          "partial": "IMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/index-core/docs/Control-IMonad.html#"
      }
    }
  ]
]