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
        "word": "traverse-with-class"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor the generated instances you'll typically need the following\n extensions:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell, MultiParamTypeClasses, FlexibleInstances, ConstraintKinds, UndecidableInstances #-}\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.Traversable.TH",
          "name": "TH",
          "package": "traverse-with-class",
          "source": "src/Data-Generics-Traversable-TH.html",
          "type": "module"
        },
        "index": {
          "description": "For the generated instances you ll typically need the following extensions LANGUAGE TemplateHaskell MultiParamTypeClasses FlexibleInstances ConstraintKinds UndecidableInstances",
          "hierarchy": "Data Generics Traversable TH",
          "module": "Data.Generics.Traversable.TH",
          "name": "TH",
          "package": "traverse-with-class",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003edata MyType = MyType\n\nderiveGTraversable ''MyType\n\u003c/pre\u003e\u003cp\u003eIt tries to create the necessary instance constraints, but is not very\n smart about it For tricky types, it may fail or produce an\n overconstrained instance. In that case, write the instance declaration\n yourself and use \u003ccode\u003e\u003ca\u003egtraverseExpr\u003c/a\u003e\u003c/code\u003e to derive the implementation:\n\u003c/p\u003e\u003cpre\u003edata MyType a = MyType\n\ninstance GTraversable (MyType a) where\n  gtraverse = $(gtraverseExpr ''MyType)\n\u003c/pre\u003e",
          "module": "Data.Generics.Traversable.TH",
          "name": "deriveGTraversable",
          "package": "traverse-with-class",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Generics-Traversable-TH.html#deriveGTraversable",
          "type": "function"
        },
        "index": {
          "description": "Example usage data MyType MyType deriveGTraversable MyType It tries to create the necessary instance constraints but is not very smart about it For tricky types it may fail or produce an overconstrained instance In that case write the instance declaration yourself and use gtraverseExpr to derive the implementation data MyType MyType instance GTraversable MyType where gtraverse gtraverseExpr MyType",
          "hierarchy": "Data Generics Traversable TH",
          "module": "Data.Generics.Traversable.TH",
          "name": "deriveGTraversable",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "traverse-with-class",
          "partial": "GTraversable",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable-TH.html#v:deriveGTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a lambda expression which implements \u003ccode\u003e\u003ca\u003egtraverse\u003c/a\u003e\u003c/code\u003e for the given\n data type.\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable.TH",
          "name": "gtraverseExpr",
          "package": "traverse-with-class",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Generics-Traversable-TH.html#gtraverseExpr",
          "type": "function"
        },
        "index": {
          "description": "Return lambda expression which implements gtraverse for the given data type",
          "hierarchy": "Data Generics Traversable TH",
          "module": "Data.Generics.Traversable.TH",
          "name": "gtraverseExpr",
          "normalized": "Name-\u003eQ Exp",
          "package": "traverse-with-class",
          "partial": "Expr",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable-TH.html#v:gtraverseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll of the functions below work only on &#171;interesting&#187; subterms It is up to the instance writer to decide which subterms are\n interesting and which subterms should count as immediate. This can\n also depend on the context \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe context, denoted \u003ccode\u003ec\u003c/code\u003e, is a constraint (of kind \u003ccode\u003e* -\u003e Constraint\u003c/code\u003e)\n that provides additional facilities to work with the data. Most\n functions take an implicit parameter \u003ccode\u003e?c :: p c\u003c/code\u003e; it's\n used to disambugate which context you are referring to. \u003ccode\u003ep\u003c/code\u003e can be\n \u003ccode\u003eProxy\u003c/code\u003e from the \u003ccode\u003etagged\u003c/code\u003e package or any other suitable type\n constructor.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eScrap your boilerplate with class\u003c/dt\u003e\u003cdd\u003e\n \u003ca\u003ehttp://research.microsoft.com/en-us/um/people/simonpj/papers/hmap/\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003eGeneralizing generic fold\u003c/dt\u003e\u003cdd\u003e\n \u003ca\u003ehttp://ro-che.info/articles/2013-03-11-generalizing-gfoldl.html\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Data.Generics.Traversable",
          "name": "Traversable",
          "package": "traverse-with-class",
          "source": "src/Data-Generics-Traversable.html",
          "type": "module"
        },
        "index": {
          "description": "All of the functions below work only on interesting subterms It is up to the instance writer to decide which subterms are interesting and which subterms should count as immediate This can also depend on the context The context denoted is constraint of kind Constraint that provides additional facilities to work with the data Most functions take an implicit parameter it used to disambugate which context you are referring to can be Proxy from the tagged package or any other suitable type constructor For more information see Scrap your boilerplate with class http research.microsoft.com en-us um people simonpj papers hmap Generalizing generic fold http ro-che.info articles generalizing-gfoldl.html",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "Traversable",
          "package": "traverse-with-class",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Traversable",
          "name": "GTraversable",
          "package": "traverse-with-class",
          "source": "src/Data-Generics-Traversable-Core.html#GTraversable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "GTraversable",
          "package": "traverse-with-class",
          "partial": "GTraversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#t:GTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e enables \"deep traversals\".\n\u003c/p\u003e\u003cp\u003eIt is satisfied automatically when its superclass constraints are\n satisfied &#8212; you are not supposed to declare new instances of this class.\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "Rec",
          "package": "traverse-with-class",
          "source": "src/Data-Generics-Traversable.html#Rec",
          "type": "class"
        },
        "index": {
          "description": "Rec enables deep traversals It is satisfied automatically when its superclass constraints are satisfied you are not supposed to declare new instances of this class",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "Rec",
          "package": "traverse-with-class",
          "partial": "Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#t:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left fold over all elements, top-down\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "everything",
          "package": "traverse-with-class",
          "signature": "d -\u003e r) -\u003e a -\u003e r",
          "source": "src/Data-Generics-Traversable.html#everything",
          "type": "function"
        },
        "index": {
          "description": "Strict left fold over all elements top-down",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "everything",
          "normalized": "a-\u003eb)-\u003ec-\u003eb",
          "package": "traverse-with-class",
          "signature": "d-\u003er)-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:everything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation everywhere in bottom-up manner\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "everywhere",
          "package": "traverse-with-class",
          "signature": "d -\u003e d) -\u003e a -\u003e a",
          "source": "src/Data-Generics-Traversable.html#everywhere",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation everywhere in bottom-up manner",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "everywhere",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "traverse-with-class",
          "signature": "d-\u003ed)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation everywhere in top-down manner\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "everywhere'",
          "package": "traverse-with-class",
          "signature": "d -\u003e d) -\u003e a -\u003e a",
          "source": "src/Data-Generics-Traversable.html#everywhere%27",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation everywhere in top-down manner",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "everywhere'",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "traverse-with-class",
          "signature": "d-\u003ed)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:everywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variation on everywhere\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "everywhereM",
          "package": "traverse-with-class",
          "signature": "d -\u003e m d) -\u003e a -\u003e m a",
          "source": "src/Data-Generics-Traversable.html#everywhereM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variation on everywhere",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "everywhereM",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "traverse-with-class",
          "signature": "d-\u003em d)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:everywhereM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric monoidal fold over the immediate subterms (cf. \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e from\n \u003ca\u003eData.Foldable\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gfoldMap",
          "package": "traverse-with-class",
          "signature": "d -\u003e r) -\u003e a -\u003e r",
          "source": "src/Data-Generics-Traversable.html#gfoldMap",
          "type": "function"
        },
        "index": {
          "description": "Generic monoidal fold over the immediate subterms cf foldMap from Data.Foldable",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gfoldMap",
          "normalized": "a-\u003eb)-\u003ec-\u003eb",
          "package": "traverse-with-class",
          "partial": "Map",
          "signature": "d-\u003er)-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gfoldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric strict left fold over the immediate subterms\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gfoldl'",
          "package": "traverse-with-class",
          "signature": "r -\u003e d -\u003e r) -\u003e r -\u003e a -\u003e r",
          "source": "src/Data-Generics-Traversable.html#gfoldl%27",
          "type": "function"
        },
        "index": {
          "description": "Generic strict left fold over the immediate subterms",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gfoldl'",
          "normalized": "a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "traverse-with-class",
          "signature": "r-\u003ed-\u003er)-\u003er-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gfoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric right fold over the immediate subterms\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gfoldr",
          "package": "traverse-with-class",
          "signature": "d -\u003e r -\u003e r) -\u003e r -\u003e a -\u003e r",
          "source": "src/Data-Generics-Traversable.html#gfoldr",
          "type": "function"
        },
        "index": {
          "description": "Generic right fold over the immediate subterms",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gfoldr",
          "normalized": "a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "traverse-with-class",
          "signature": "d-\u003er-\u003er)-\u003er-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric map over the immediate subterms\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gmap",
          "package": "traverse-with-class",
          "signature": "d -\u003e d) -\u003e a -\u003e a",
          "source": "src/Data-Generics-Traversable.html#gmap",
          "type": "function"
        },
        "index": {
          "description": "Generic map over the immediate subterms",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gmap",
          "normalized": "a-\u003ea)-\u003eb-\u003eb",
          "package": "traverse-with-class",
          "signature": "d-\u003ed)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric monadic map over the immediate subterms\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gmapM",
          "package": "traverse-with-class",
          "signature": "d -\u003e m d) -\u003e a -\u003e m a",
          "source": "src/Data-Generics-Traversable.html#gmapM",
          "type": "function"
        },
        "index": {
          "description": "Generic monadic map over the immediate subterms",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gmapM",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "traverse-with-class",
          "signature": "d-\u003em d)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplicative traversal over (a subset of) immediate subterms. This is\n a generic version of \u003ccode\u003etraverse\u003c/code\u003e from \u003ca\u003eData.Traversable\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe supplied function is applied only to the &#171;interesting&#187; subterms\u003c/p\u003e\u003cp\u003eOther subterms are lifted using \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e, and the whole structure is\n folded back using \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egtraverse\u003c/a\u003e\u003c/code\u003e has a default implementation \u003ccode\u003econst pure\u003c/code\u003e, which works for\n types without interesting subterms (in particular, atomic types).\n\u003c/p\u003e",
          "module": "Data.Generics.Traversable",
          "name": "gtraverse",
          "package": "traverse-with-class",
          "signature": "d -\u003e f d) -\u003e a -\u003e f a",
          "source": "src/Data-Generics-Traversable-Core.html#gtraverse",
          "type": "method"
        },
        "index": {
          "description": "Applicative traversal over subset of immediate subterms This is generic version of traverse from Data.Traversable The supplied function is applied only to the interesting subterms Other subterms are lifted using pure and the whole structure is folded back using gtraverse has default implementation const pure which works for types without interesting subterms in particular atomic types",
          "hierarchy": "Data Generics Traversable",
          "module": "Data.Generics.Traversable",
          "name": "gtraverse",
          "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
          "package": "traverse-with-class",
          "signature": "d-\u003ef d)-\u003ea-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/traverse-with-class/docs/Data-Generics-Traversable.html#v:gtraverse"
      }
    }
  ]
]