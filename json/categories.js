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
        "word": "categories"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA more categorical definition of \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Categorical.Bifunctor",
          "name": "Bifunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Bifunctor.html",
          "type": "module"
        },
        "index": {
          "description": "more categorical definition of Bifunctor",
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "Bifunctor",
          "package": "categories",
          "partial": "Bifunctor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition: \u003ccode\u003ebimap\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Control.Categorical.Bifunctor",
          "name": "Bifunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Bifunctor.html#Bifunctor",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition bimap",
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "Bifunctor",
          "package": "categories",
          "partial": "Bifunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#t:Bifunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "PFunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Bifunctor.html#PFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "PFunctor",
          "package": "categories",
          "partial": "PFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#t:PFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "QFunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Bifunctor.html#QFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "QFunctor",
          "package": "categories",
          "partial": "QFunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#t:QFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "bimap",
          "package": "categories",
          "signature": "r a b -\u003e s c d -\u003e t (p a c) (p b d)",
          "source": "src/Control-Categorical-Bifunctor.html#bimap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "bimap",
          "normalized": "a b c-\u003ed e f-\u003eg(h b e)(h c f)",
          "package": "categories",
          "signature": "r a b-\u003es c d-\u003et(p a c)(p b d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#v:bimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "difirst",
          "package": "categories",
          "signature": "s b a -\u003e t (f a c) (f b c)",
          "source": "src/Control-Categorical-Bifunctor.html#difirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "difirst",
          "normalized": "a b c-\u003ed(e c f)(e b f)",
          "package": "categories",
          "signature": "s b a-\u003et(f a c)(f b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#v:difirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "dimap",
          "package": "categories",
          "signature": "s b a -\u003e t c d -\u003e u (f a c) (f b d)",
          "source": "src/Control-Categorical-Bifunctor.html#dimap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "dimap",
          "normalized": "a b c-\u003ed e f-\u003eg(h c e)(h b f)",
          "package": "categories",
          "signature": "s b a-\u003et c d-\u003eu(f a c)(f b d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#v:dimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "first",
          "package": "categories",
          "signature": "r a b -\u003e t (p a c) (p b c)",
          "source": "src/Control-Categorical-Bifunctor.html#first",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "first",
          "normalized": "a b c-\u003ed(e b f)(e c f)",
          "package": "categories",
          "signature": "r a b-\u003et(p a c)(p b c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Bifunctor",
          "name": "second",
          "package": "categories",
          "signature": "s a b -\u003e t (q c a) (q c b)",
          "source": "src/Control-Categorical-Bifunctor.html#second",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Bifunctor",
          "module": "Control.Categorical.Bifunctor",
          "name": "second",
          "normalized": "a b c-\u003ed(e f b)(e f c)",
          "package": "categories",
          "signature": "s a b-\u003et(q c a)(q c b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Bifunctor.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA more categorical definition of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Categorical.Functor",
          "name": "Functor",
          "package": "categories",
          "source": "src/Control-Categorical-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "more categorical definition of Functor",
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "Functor",
          "package": "categories",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "Endofunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Functor.html#Endofunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "Endofunctor",
          "package": "categories",
          "partial": "Endofunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#t:Endofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "Functor",
          "package": "categories",
          "source": "src/Control-Categorical-Functor.html#Functor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "Functor",
          "package": "categories",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "LiftedFunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Functor.html#LiftedFunctor",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "LiftedFunctor",
          "package": "categories",
          "partial": "Lifted Functor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#t:LiftedFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "LoweredFunctor",
          "package": "categories",
          "source": "src/Control-Categorical-Functor.html#LoweredFunctor",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "LoweredFunctor",
          "package": "categories",
          "partial": "Lowered Functor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#t:LoweredFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "LiftedFunctor",
          "package": "categories",
          "signature": "LiftedFunctor (f a)",
          "source": "src/Control-Categorical-Functor.html#LiftedFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "LiftedFunctor",
          "package": "categories",
          "partial": "Lifted Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#v:LiftedFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "LoweredFunctor",
          "package": "categories",
          "signature": "LoweredFunctor (f a)",
          "source": "src/Control-Categorical-Functor.html#LoweredFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "LoweredFunctor",
          "package": "categories",
          "partial": "Lowered Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#v:LoweredFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Functor",
          "name": "fmap",
          "package": "categories",
          "signature": "r a b -\u003e t (f a) (f b)",
          "source": "src/Control-Categorical-Functor.html#fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Functor",
          "module": "Control.Categorical.Functor",
          "name": "fmap",
          "normalized": "a b c-\u003ed(e b)(e c)",
          "package": "categories",
          "signature": "r a b-\u003et(f a)(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Functor.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module declares the \u003ccode\u003e\u003ca\u003eHasTerminalObject\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHasInitialObject\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e\u003cp\u003eThese are both special cases of the idea of a (co)limit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Categorical.Object",
          "name": "Object",
          "package": "categories",
          "source": "src/Control-Categorical-Object.html",
          "type": "module"
        },
        "index": {
          "description": "This module declares the HasTerminalObject and HasInitialObject classes These are both special cases of the idea of co limit",
          "hierarchy": "Control Categorical Object",
          "module": "Control.Categorical.Object",
          "name": "Object",
          "package": "categories",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eCategory (~\u003e)\u003c/code\u003e has an initial (coterminal) object \u003ccode\u003eInitial (~\u003e)\u003c/code\u003e such that for all objects\n \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003e(~\u003e)\u003c/code\u003e, there exists a unique morphism from \u003ccode\u003eInitial (~\u003e) \u003c/code\u003e to \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Categorical.Object",
          "name": "HasInitialObject",
          "package": "categories",
          "source": "src/Control-Categorical-Object.html#HasInitialObject",
          "type": "class"
        },
        "index": {
          "description": "The Category has an initial coterminal object Initial such that for all objects in there exists unique morphism from Initial to",
          "hierarchy": "Control Categorical Object",
          "module": "Control.Categorical.Object",
          "name": "HasInitialObject",
          "package": "categories",
          "partial": "Has Initial Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Object.html#t:HasInitialObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eCategory (~\u003e)\u003c/code\u003e has a terminal object \u003ccode\u003eTerminal (~\u003e)\u003c/code\u003e such that for all objects \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003e(~\u003e)\u003c/code\u003e,\n there exists a unique morphism from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eTerminal (~\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Categorical.Object",
          "name": "HasTerminalObject",
          "package": "categories",
          "source": "src/Control-Categorical-Object.html#HasTerminalObject",
          "type": "class"
        },
        "index": {
          "description": "The Category has terminal object Terminal such that for all objects in there exists unique morphism from to Terminal",
          "hierarchy": "Control Categorical Object",
          "module": "Control.Categorical.Object",
          "name": "HasTerminalObject",
          "package": "categories",
          "partial": "Has Terminal Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Object.html#t:HasTerminalObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Object",
          "name": "initiate",
          "package": "categories",
          "signature": "Initial k `k` a",
          "source": "src/Control-Categorical-Object.html#initiate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Object",
          "module": "Control.Categorical.Object",
          "name": "initiate",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Object.html#v:initiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Categorical.Object",
          "name": "terminate",
          "package": "categories",
          "signature": "a `k` Terminal k",
          "source": "src/Control-Categorical-Object.html#terminate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Categorical Object",
          "module": "Control.Categorical.Object",
          "name": "terminate",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Categorical-Object.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNB: this contradicts another common meaning for an \u003ccode\u003e\u003ca\u003eAssociative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eCategory\u003c/code\u003e, which is one\n where the pentagonal condition does not hold, but for which there is an identity.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Category.Associative",
          "name": "Associative",
          "package": "categories",
          "source": "src/Control-Category-Associative.html",
          "type": "module"
        },
        "index": {
          "description": "NB this contradicts another common meaning for an Associative Category which is one where the pentagonal condition does not hold but for which there is an identity",
          "hierarchy": "Control Category Associative",
          "module": "Control.Category.Associative",
          "name": "Associative",
          "package": "categories",
          "partial": "Associative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Associative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA category with an associative bifunctor satisfying Mac Lane's pentagonal coherence identity law:\n\u003c/p\u003e\u003cpre\u003e bimap id associate . associate . bimap associate id = associate . associate\n bimap disassociate id . disassociate . bimap id disassociate = disassociate . disassociate\n\u003c/pre\u003e",
          "module": "Control.Category.Associative",
          "name": "Associative",
          "package": "categories",
          "source": "src/Control-Category-Associative.html#Associative",
          "type": "class"
        },
        "index": {
          "description": "category with an associative bifunctor satisfying Mac Lane pentagonal coherence identity law bimap id associate associate bimap associate id associate associate bimap disassociate id disassociate bimap id disassociate disassociate disassociate",
          "hierarchy": "Control Category Associative",
          "module": "Control.Category.Associative",
          "name": "Associative",
          "package": "categories",
          "partial": "Associative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Associative.html#t:Associative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Associative",
          "name": "associate",
          "package": "categories",
          "signature": "k (p (p a b) c) (p a (p b c))",
          "source": "src/Control-Category-Associative.html#associate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Associative",
          "module": "Control.Category.Associative",
          "name": "associate",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Associative.html#v:associate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Associative",
          "name": "disassociate",
          "package": "categories",
          "signature": "k (p a (p b c)) (p (p a b) c)",
          "source": "src/Control-Category-Associative.html#disassociate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Associative",
          "module": "Control.Category.Associative",
          "name": "disassociate",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Associative.html#v:disassociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Braided",
          "name": "Braided",
          "package": "categories",
          "source": "src/Control-Category-Braided.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Braided",
          "module": "Control.Category.Braided",
          "name": "Braided",
          "package": "categories",
          "partial": "Braided",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Braided.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA braided (co)(monoidal or associative) category can commute the arguments of its bi-endofunctor. Obeys the laws:\n\u003c/p\u003e\u003cpre\u003e associate . braid . associate = second braid . associate . first braid\n disassociate . braid . disassociate = first braid . disassociate . second braid\n\u003c/pre\u003e\u003cp\u003eIf the category is Monoidal the following laws should be satisfied\n\u003c/p\u003e\u003cpre\u003e idr . braid = idl\n idl . braid = idr\n\u003c/pre\u003e\u003cp\u003eIf the category is Comonoidal the following laws should be satisfied\n\u003c/p\u003e\u003cpre\u003e braid . coidr = coidl\n braid . coidl = coidr\n\u003c/pre\u003e",
          "module": "Control.Category.Braided",
          "name": "Braided",
          "package": "categories",
          "source": "src/Control-Category-Braided.html#Braided",
          "type": "class"
        },
        "index": {
          "description": "braided co monoidal or associative category can commute the arguments of its bi-endofunctor Obeys the laws associate braid associate second braid associate first braid disassociate braid disassociate first braid disassociate second braid If the category is Monoidal the following laws should be satisfied idr braid idl idl braid idr If the category is Comonoidal the following laws should be satisfied braid coidr coidl braid coidl coidr",
          "hierarchy": "Control Category Braided",
          "module": "Control.Category.Braided",
          "name": "Braided",
          "package": "categories",
          "partial": "Braided",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Braided.html#t:Braided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we have a symmetric (co)\u003ccode\u003eMonoidal\u003c/code\u003e category, you get the additional law:\n\u003c/p\u003e\u003cpre\u003e swap . swap = id\n\u003c/pre\u003e",
          "module": "Control.Category.Braided",
          "name": "Symmetric",
          "package": "categories",
          "source": "src/Control-Category-Braided.html#Symmetric",
          "type": "class"
        },
        "index": {
          "description": "If we have symmetric co Monoidal category you get the additional law swap swap id",
          "hierarchy": "Control Category Braided",
          "module": "Control.Category.Braided",
          "name": "Symmetric",
          "package": "categories",
          "partial": "Symmetric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Braided.html#t:Symmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Braided",
          "name": "braid",
          "package": "categories",
          "signature": "k (p a b) (p b a)",
          "source": "src/Control-Category-Braided.html#braid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Braided",
          "module": "Control.Category.Braided",
          "name": "braid",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Braided.html#v:braid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Braided",
          "name": "swap",
          "package": "categories",
          "signature": "k (p a b) (p b a)",
          "source": "src/Control-Category-Braided.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Braided",
          "module": "Control.Category.Braided",
          "name": "swap",
          "package": "categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Braided.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "Closed",
          "package": "categories",
          "source": "src/Control-Category-Cartesian-Closed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "Closed",
          "package": "categories",
          "partial": "Closed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCCC\u003c/a\u003e\u003c/code\u003e has full-fledged monoidal finite products and exponentials\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian.Closed",
          "name": "CCC",
          "package": "categories",
          "source": "src/Control-Category-Cartesian-Closed.html#CCC",
          "type": "class"
        },
        "index": {
          "description": "CCC has full-fledged monoidal finite products and exponentials",
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "CCC",
          "package": "categories",
          "partial": "CCC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#t:CCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Co-CCC has full-fledged comonoidal finite coproducts and coexponentials\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian.Closed",
          "name": "CoCCC",
          "package": "categories",
          "source": "src/Control-Category-Cartesian-Closed.html#CoCCC",
          "type": "class"
        },
        "index": {
          "description": "Co-CCC has full-fledged comonoidal finite coproducts and coexponentials",
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "CoCCC",
          "package": "categories",
          "partial": "Co CCC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#t:CoCCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "apply",
          "package": "categories",
          "signature": "Product k (Exp k a b) a `k` b",
          "source": "src/Control-Category-Cartesian-Closed.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "apply",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "coapply",
          "package": "categories",
          "signature": "b `k` Sum k (Coexp k a b) a",
          "source": "src/Control-Category-Cartesian-Closed.html#coapply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "coapply",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:coapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "cocurry",
          "package": "categories",
          "signature": "(c `k` Sum k a b) -\u003e Coexp k b c `k` a",
          "source": "src/Control-Category-Cartesian-Closed.html#cocurry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "cocurry",
          "normalized": "(a b Sum b c d)-\u003eCoexp b d a b c",
          "package": "categories",
          "signature": "(c k Sum k a b)-\u003eCoexp k b c k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:cocurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "counitCCC",
          "package": "categories",
          "signature": "Product k b (Exp k b a) `k` a",
          "source": "src/Control-Category-Cartesian-Closed.html#counitCCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "counitCCC",
          "package": "categories",
          "partial": "CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:counitCCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "counitCoCCC",
          "package": "categories",
          "signature": "Coexp k b (Sum k b a) `k` a",
          "source": "src/Control-Category-Cartesian-Closed.html#counitCoCCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "counitCoCCC",
          "package": "categories",
          "partial": "Co CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:counitCoCCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "curry",
          "package": "categories",
          "signature": "(Product k a b `k` c) -\u003e a `k` Exp k b c",
          "source": "src/Control-Category-Cartesian-Closed.html#curry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "curry",
          "normalized": "(Product a b c a d)-\u003eb a Exp a c d",
          "package": "categories",
          "signature": "(Product k a b k c)-\u003ea k Exp k b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "uncocurry",
          "package": "categories",
          "signature": "(Coexp k b c `k` a) -\u003e c `k` Sum k a b",
          "source": "src/Control-Category-Cartesian-Closed.html#uncocurry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "uncocurry",
          "normalized": "(Coexp a b c a d)-\u003ec a Sum a d b",
          "package": "categories",
          "signature": "(Coexp k b c k a)-\u003ec k Sum k a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:uncocurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "uncurry",
          "package": "categories",
          "signature": "(a `k` Exp k b c) -\u003e Product k a b `k` c",
          "source": "src/Control-Category-Cartesian-Closed.html#uncurry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "uncurry",
          "normalized": "(a b Exp b c d)-\u003eProduct b a c b d",
          "package": "categories",
          "signature": "(a k Exp k b c)-\u003eProduct k a b k c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "unitCCC",
          "package": "categories",
          "signature": "a `k` Exp k b (Product k b a)",
          "source": "src/Control-Category-Cartesian-Closed.html#unitCCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "unitCCC",
          "package": "categories",
          "partial": "CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:unitCCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian.Closed",
          "name": "unitCoCCC",
          "package": "categories",
          "signature": "a `k` Sum k b (Coexp k b a)",
          "source": "src/Control-Category-Cartesian-Closed.html#unitCoCCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Cartesian Closed",
          "module": "Control.Category.Cartesian.Closed",
          "name": "unitCoCCC",
          "package": "categories",
          "partial": "Co CCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian-Closed.html#v:unitCoCCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "Cartesian",
          "package": "categories",
          "source": "src/Control-Category-Cartesian.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "Cartesian",
          "package": "categories",
          "partial": "Cartesian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum definition:\n\u003c/p\u003e\u003cpre\u003e fst, snd, diag\n fst, snd, (&&&)\n\u003c/pre\u003e",
          "module": "Control.Category.Cartesian",
          "name": "Cartesian",
          "package": "categories",
          "source": "src/Control-Category-Cartesian.html#Cartesian",
          "type": "class"
        },
        "index": {
          "description": "Minimum definition fst snd diag fst snd",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "Cartesian",
          "package": "categories",
          "partial": "Cartesian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#t:Cartesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "CoCartesian",
          "package": "categories",
          "source": "src/Control-Category-Cartesian.html#CoCartesian",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "CoCartesian",
          "package": "categories",
          "partial": "Co Cartesian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#t:CoCartesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "(|||)",
          "package": "categories",
          "signature": "k a c -\u003e k b c -\u003e Sum k a b `k` c",
          "source": "src/Control-Category-Cartesian.html#%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "(|||) |||",
          "normalized": "a b c-\u003ea d c-\u003eSum a b d a c",
          "package": "categories",
          "signature": "k a c-\u003ek b c-\u003eSum k a b k c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "(&&&)",
          "package": "categories",
          "signature": "(a `k` b) -\u003e (a `k` c) -\u003e a `k` Product k b c",
          "source": "src/Control-Category-Cartesian.html#%26%26%26",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "(&&&) &&&",
          "normalized": "(a b c)-\u003e(a b d)-\u003ea b Product b c d",
          "package": "categories",
          "signature": "(a k b)-\u003e(a k c)-\u003ea k Product k b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003eAssociative\u003c/code\u003e for the product \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eProduct k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "associateProduct",
          "package": "categories",
          "signature": "Product k (Product k a b) c `k` Product k a (Product k b c)",
          "source": "src/Control-Category-Cartesian.html#associateProduct",
          "type": "function"
        },
        "index": {
          "description": "free construction of Associative for the product Bifunctor Product",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "associateProduct",
          "package": "categories",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:associateProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003eAssociative\u003c/code\u003e for the coproduct \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eSum k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "associateSum",
          "package": "categories",
          "signature": "Sum k (Sum k a b) c `k` Sum k a (Sum k b c)",
          "source": "src/Control-Category-Cartesian.html#associateSum",
          "type": "function"
        },
        "index": {
          "description": "free construction of Associative for the coproduct Bifunctor Sum",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "associateSum",
          "package": "categories",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:associateSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e for the product \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eProduct k\u003c/code\u003e if \u003ccode\u003e(&&&)\u003c/code\u003e is known\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "bimapProduct",
          "package": "categories",
          "signature": "k a c -\u003e k b d -\u003e Product k a b `k` Product k c d",
          "source": "src/Control-Category-Cartesian.html#bimapProduct",
          "type": "function"
        },
        "index": {
          "description": "free construction of Bifunctor for the product Bifunctor Product if is known",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "bimapProduct",
          "normalized": "a b c-\u003ea d e-\u003eProduct a b d a Product a c e",
          "package": "categories",
          "partial": "Product",
          "signature": "k a c-\u003ek b d-\u003eProduct k a b k Product k c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:bimapProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e for the coproduct \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eSum k\u003c/code\u003e if \u003ccode\u003e(|||)\u003c/code\u003e is known\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "bimapSum",
          "package": "categories",
          "signature": "k a c -\u003e k b d -\u003e Sum k a b `k` Sum k c d",
          "source": "src/Control-Category-Cartesian.html#bimapSum",
          "type": "function"
        },
        "index": {
          "description": "free construction of Bifunctor for the coproduct Bifunctor Sum if is known",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "bimapSum",
          "normalized": "a b c-\u003ea d e-\u003eSum a b d a Sum a c e",
          "package": "categories",
          "partial": "Sum",
          "signature": "k a c-\u003ek b d-\u003eSum k a b k Sum k c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:bimapSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003e\u003ca\u003eBraided\u003c/a\u003e\u003c/code\u003e for the product \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eProduct k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "braidProduct",
          "package": "categories",
          "signature": "k (Product k a b) (Product k b a)",
          "source": "src/Control-Category-Cartesian.html#braidProduct",
          "type": "function"
        },
        "index": {
          "description": "free construction of Braided for the product Bifunctor Product",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "braidProduct",
          "package": "categories",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:braidProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003e\u003ca\u003eBraided\u003c/a\u003e\u003c/code\u003e for the coproduct \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eSum k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "braidSum",
          "package": "categories",
          "signature": "Sum k a b `k` Sum k b a",
          "source": "src/Control-Category-Cartesian.html#braidSum",
          "type": "function"
        },
        "index": {
          "description": "free construction of Braided for the coproduct Bifunctor Sum",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "braidSum",
          "package": "categories",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:braidSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "codiag",
          "package": "categories",
          "signature": "Sum k a a `k` a",
          "source": "src/Control-Category-Cartesian.html#codiag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "codiag",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:codiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "diag",
          "package": "categories",
          "signature": "a `k` Product k a a",
          "source": "src/Control-Category-Cartesian.html#diag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "diag",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003eDisassociative\u003c/code\u003e for the product \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eProduct k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "disassociateProduct",
          "package": "categories",
          "signature": "Product k a (Product k b c) `k` Product k (Product k a b) c",
          "source": "src/Control-Category-Cartesian.html#disassociateProduct",
          "type": "function"
        },
        "index": {
          "description": "free construction of Disassociative for the product Bifunctor Product",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "disassociateProduct",
          "package": "categories",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:disassociateProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree construction of \u003ccode\u003eDisassociative\u003c/code\u003e for the coproduct \u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eSum k\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Category.Cartesian",
          "name": "disassociateSum",
          "package": "categories",
          "signature": "Sum k a (Sum k b c) `k` Sum k (Sum k a b) c",
          "source": "src/Control-Category-Cartesian.html#disassociateSum",
          "type": "function"
        },
        "index": {
          "description": "free construction of Disassociative for the coproduct Bifunctor Sum",
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "disassociateSum",
          "package": "categories",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:disassociateSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "fst",
          "package": "categories",
          "signature": "Product k a b `k` a",
          "source": "src/Control-Category-Cartesian.html#fst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "fst",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "inl",
          "package": "categories",
          "signature": "a `k` Sum k a b",
          "source": "src/Control-Category-Cartesian.html#inl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "inl",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:inl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "inr",
          "package": "categories",
          "signature": "b `k` Sum k a b",
          "source": "src/Control-Category-Cartesian.html#inr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "inr",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:inr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Cartesian",
          "name": "snd",
          "package": "categories",
          "signature": "Product k a b `k` b",
          "source": "src/Control-Category-Cartesian.html#snd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Cartesian",
          "module": "Control.Category.Cartesian",
          "name": "snd",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Cartesian.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Discrete",
          "name": "Discrete",
          "package": "categories",
          "source": "src/Control-Category-Discrete.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "Discrete",
          "package": "categories",
          "partial": "Discrete",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategory of discrete objects. The only arrows are identity arrows.\n\u003c/p\u003e",
          "module": "Control.Category.Discrete",
          "name": "Discrete",
          "package": "categories",
          "source": "src/Control-Category-Discrete.html#Discrete",
          "type": "data"
        },
        "index": {
          "description": "Category of discrete objects The only arrows are identity arrows",
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "Discrete",
          "package": "categories",
          "partial": "Discrete",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#t:Discrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Discrete",
          "name": "Refl",
          "package": "categories",
          "signature": "Discrete a a",
          "source": "src/Control-Category-Discrete.html#Discrete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "Refl",
          "package": "categories",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower the proof that a ~ b to an arbitrary category.\n\u003c/p\u003e",
          "module": "Control.Category.Discrete",
          "name": "cast",
          "package": "categories",
          "signature": "Discrete a b -\u003e k a b",
          "source": "src/Control-Category-Discrete.html#cast",
          "type": "function"
        },
        "index": {
          "description": "Lower the proof that to an arbitrary category",
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "cast",
          "normalized": "Discrete a b-\u003ec a b",
          "package": "categories",
          "signature": "Discrete a b-\u003ek a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Discrete",
          "name": "inverse",
          "package": "categories",
          "signature": "Discrete a b -\u003e Discrete b a",
          "source": "src/Control-Category-Discrete.html#inverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "inverse",
          "normalized": "Discrete a b-\u003eDiscrete b a",
          "package": "categories",
          "signature": "Discrete a b-\u003eDiscrete b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete a b acts as a proof that a = b, lift that proof into something of kind * -\u003e *\n\u003c/p\u003e",
          "module": "Control.Category.Discrete",
          "name": "liftDiscrete",
          "package": "categories",
          "signature": "Discrete a b -\u003e Discrete (f a) (f b)",
          "source": "src/Control-Category-Discrete.html#liftDiscrete",
          "type": "function"
        },
        "index": {
          "description": "Discrete acts as proof that lift that proof into something of kind",
          "hierarchy": "Control Category Discrete",
          "module": "Control.Category.Discrete",
          "name": "liftDiscrete",
          "normalized": "Discrete a b-\u003eDiscrete(c a)(c b)",
          "package": "categories",
          "partial": "Discrete",
          "signature": "Discrete a b-\u003eDiscrete(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Discrete.html#v:liftDiscrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Distributive",
          "name": "Distributive",
          "package": "categories",
          "source": "src/Control-Category-Distributive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Distributive",
          "module": "Control.Category.Distributive",
          "name": "Distributive",
          "package": "categories",
          "partial": "Distributive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Distributive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA category in which \u003ccode\u003e\u003ca\u003efactor\u003c/a\u003e\u003c/code\u003e is an isomorphism\n\u003c/p\u003e",
          "module": "Control.Category.Distributive",
          "name": "Distributive",
          "package": "categories",
          "source": "src/Control-Category-Distributive.html#Distributive",
          "type": "class"
        },
        "index": {
          "description": "category in which factor is an isomorphism",
          "hierarchy": "Control Category Distributive",
          "module": "Control.Category.Distributive",
          "name": "Distributive",
          "package": "categories",
          "partial": "Distributive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Distributive.html#t:Distributive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Distributive",
          "name": "distribute",
          "package": "categories",
          "signature": "Product k a (Sum k b c) `k` Sum k (Product k a b) (Product k a c)",
          "source": "src/Control-Category-Distributive.html#distribute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Distributive",
          "module": "Control.Category.Distributive",
          "name": "distribute",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Distributive.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe canonical factoring morphism.\n\u003c/p\u003e",
          "module": "Control.Category.Distributive",
          "name": "factor",
          "package": "categories",
          "signature": "Sum k (Product k a b) (Product k a c) `k` Product k a (Sum k b c)",
          "source": "src/Control-Category-Distributive.html#factor",
          "type": "function"
        },
        "index": {
          "description": "The canonical factoring morphism",
          "hierarchy": "Control Category Distributive",
          "module": "Control.Category.Distributive",
          "name": "factor",
          "package": "categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Distributive.html#v:factor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "source": "src/Control-Category-Dual.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Category Dual",
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "partial": "Dual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Dual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "source": "src/Control-Category-Dual.html#Dual",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Category Dual",
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "partial": "Dual",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Dual.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "signature": "Dual",
          "source": "src/Control-Category-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Dual",
          "module": "Control.Category.Dual",
          "name": "Dual",
          "package": "categories",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Dual.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Dual",
          "name": "runDual",
          "package": "categories",
          "signature": "k b a",
          "source": "src/Control-Category-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Category Dual",
          "module": "Control.Category.Dual",
          "name": "runDual",
          "package": "categories",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Dual.html#v:runDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonoidal\u003c/a\u003e\u003c/code\u003e category is a category with an associated biendofunctor that has an identity,\n which satisfies Mac Lane''s pentagonal and triangular coherence conditions\n Technically we usually say that category is \u003ccode\u003e\u003ca\u003eMonoidal\u003c/a\u003e\u003c/code\u003e, but since\n most interesting categories in our world have multiple candidate bifunctors that you can\n use to enrich their structure, we choose here to think of the bifunctor as being\n monoidal. This lets us reuse the same \u003ccode\u003eBifunctor\u003c/code\u003e over different categories without\n painful newtype wrapping.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Category.Monoidal",
          "name": "Monoidal",
          "package": "categories",
          "source": "src/Control-Category-Monoidal.html",
          "type": "module"
        },
        "index": {
          "description": "Monoidal category is category with an associated biendofunctor that has an identity which satisfies Mac Lane pentagonal and triangular coherence conditions Technically we usually say that category is Monoidal but since most interesting categories in our world have multiple candidate bifunctors that you can use to enrich their structure we choose here to think of the bifunctor as being monoidal This lets us reuse the same Bifunctor over different categories without painful newtype wrapping",
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "Monoidal",
          "package": "categories",
          "partial": "Monoidal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes that we have some reasonable notion of \u003ccode\u003eIdentity\u003c/code\u003e for a particular \u003ccode\u003eBifunctor\u003c/code\u003e in this \u003ccode\u003eCategory\u003c/code\u003e. This\n notion is currently used by both \u003ccode\u003e\u003ca\u003eMonoidal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eComonoidal\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA monoidal category. \u003ccode\u003e\u003ca\u003eidl\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eidr\u003c/a\u003e\u003c/code\u003e are traditionally denoted lambda and rho\n the triangle identities hold:\n\u003c/p\u003e\u003cpre\u003e first idr = second idl . associate\n second idl = first idr . associate\n first idr = disassociate . second idl\n second idl = disassociate . first idr\n idr . coidr = id\n idl . coidl = id\n coidl . idl = id\n coidr . idr = id\n\u003c/pre\u003e",
          "module": "Control.Category.Monoidal",
          "name": "Monoidal",
          "package": "categories",
          "source": "src/Control-Category-Monoidal.html#Monoidal",
          "type": "class"
        },
        "index": {
          "description": "Denotes that we have some reasonable notion of Identity for particular Bifunctor in this Category This notion is currently used by both Monoidal and Comonoidal monoidal category idl and idr are traditionally denoted lambda and rho the triangle identities hold first idr second idl associate second idl first idr associate first idr disassociate second idl second idl disassociate first idr idr coidr id idl coidl id coidl idl id coidr idr id",
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "Monoidal",
          "package": "categories",
          "partial": "Monoidal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#t:Monoidal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Monoidal",
          "name": "coidl",
          "package": "categories",
          "signature": "k a (p (Id k p) a)",
          "source": "src/Control-Category-Monoidal.html#coidl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "coidl",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#v:coidl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Monoidal",
          "name": "coidr",
          "package": "categories",
          "signature": "k a (p a (Id k p))",
          "source": "src/Control-Category-Monoidal.html#coidr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "coidr",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#v:coidr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Monoidal",
          "name": "idl",
          "package": "categories",
          "signature": "k (p (Id k p) a) a",
          "source": "src/Control-Category-Monoidal.html#idl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "idl",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#v:idl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Category.Monoidal",
          "name": "idr",
          "package": "categories",
          "signature": "k (p a (Id k p)) a",
          "source": "src/Control-Category-Monoidal.html#idr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Category Monoidal",
          "module": "Control.Category.Monoidal",
          "name": "idr",
          "package": "categories",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/categories/docs/Control-Category-Monoidal.html#v:idr"
      }
    }
  ]
]