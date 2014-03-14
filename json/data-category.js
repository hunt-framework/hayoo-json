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
        "word": "data-category"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "source": "src/Data-Category-Adjunction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "partial": "Adjunction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "AdjArrow",
          "package": "data-category",
          "source": "src/Data-Category-Adjunction.html#AdjArrow",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "AdjArrow",
          "package": "data-category",
          "partial": "Adj Arrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#t:AdjArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "partial": "Adjunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#t:Adjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "AdjArrow",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e AdjArrow (CatW c) (CatW d)",
          "source": "src/Data-Category-Adjunction.html#AdjArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "AdjArrow",
          "normalized": "Adjunction a b c d-\u003eAdjArrow(CatW a)(CatW b)",
          "package": "data-category",
          "partial": "Adj Arrow",
          "signature": "Adjunction c d f g-\u003eAdjArrow(CatW c)(CatW d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:AdjArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "signature": "Adjunction",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "Adjunction",
          "package": "data-category",
          "partial": "Adjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:Adjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "adjunctionInitialProp",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Obj d y -\u003e InitialUniversal y g (f :% y)",
          "source": "src/Data-Category-Adjunction.html#adjunctionInitialProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "adjunctionInitialProp",
          "normalized": "Adjunction a b c d-\u003eObj b e-\u003eInitialUniversal e d(c e)",
          "package": "data-category",
          "partial": "Initial Prop",
          "signature": "Adjunction c d f g-\u003eObj d y-\u003eInitialUniversal y g(f y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:adjunctionInitialProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "adjunctionTerminalProp",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Obj c x -\u003e TerminalUniversal x f (g :% x)",
          "source": "src/Data-Category-Adjunction.html#adjunctionTerminalProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "adjunctionTerminalProp",
          "normalized": "Adjunction a b c d-\u003eObj a e-\u003eTerminalUniversal e c(d e)",
          "package": "data-category",
          "partial": "Terminal Prop",
          "signature": "Adjunction c d f g-\u003eObj c x-\u003eTerminalUniversal x f(g x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:adjunctionTerminalProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "composeAdj",
          "package": "data-category",
          "signature": "Adjunction d e f g -\u003e Adjunction c d f' g' -\u003e Adjunction c e (f' :.: f) (g :.: g')",
          "source": "src/Data-Category-Adjunction.html#composeAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "composeAdj",
          "normalized": "Adjunction a b c d-\u003eAdjunction e a f g-\u003eAdjunction e b(f c)(d g)",
          "package": "data-category",
          "partial": "Adj",
          "signature": "Adjunction d e f g-\u003eAdjunction c d f' g'-\u003eAdjunction c e(f' f)(g g')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:composeAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "contAdj",
          "package": "data-category",
          "signature": "Adjunction (Op (-\u003e)) (-\u003e) (Opposite ((-\u003e) :-*: r) :.: OpOpInv (-\u003e)) ((-\u003e) :-*: r)",
          "source": "src/Data-Category-Adjunction.html#contAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "contAdj",
          "normalized": "Adjunction(Op(-\u003e))(-\u003e)(Opposite((-\u003e)*a)OpOpInv(-\u003e))((-\u003e)*a)",
          "package": "data-category",
          "partial": "Adj",
          "signature": "Adjunction(Op(-\u003e))(-\u003e)(Opposite((-\u003e)*r)OpOpInv(-\u003e))((-\u003e)*r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:contAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "counit",
          "package": "data-category",
          "signature": "Nat c c (f :.: g) (Id c)",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "counit",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "idAdj",
          "package": "data-category",
          "signature": "Adjunction k k (Id k) (Id k)",
          "source": "src/Data-Category-Adjunction.html#idAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "idAdj",
          "package": "data-category",
          "partial": "Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:idAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "initialPropAdjunction",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e (forall y.  Obj d y -\u003e InitialUniversal y g (f :% y)) -\u003e Adjunction c d f g",
          "source": "src/Data-Category-Adjunction.html#initialPropAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "initialPropAdjunction",
          "normalized": "a-\u003eb-\u003e(c d Obj e f-\u003eInitialUniversal f b(a f))-\u003eAdjunction g e a b",
          "package": "data-category",
          "partial": "Prop Adjunction",
          "signature": "f-\u003eg-\u003e(forall y. Obj d y-\u003eInitialUniversal y g(f y))-\u003eAdjunction c d f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:initialPropAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "leftAdjoint",
          "package": "data-category",
          "signature": "f",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "leftAdjoint",
          "package": "data-category",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:leftAdjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "leftAdjunct",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Obj d a -\u003e c (f :% a) b -\u003e d a (g :% b)",
          "source": "src/Data-Category-Adjunction.html#leftAdjunct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "leftAdjunct",
          "normalized": "Adjunction a b c d-\u003eObj b e-\u003ea(c e)f-\u003eb e(d f)",
          "package": "data-category",
          "partial": "Adjunct",
          "signature": "Adjunction c d f g-\u003eObj d a-\u003ec(f a)b-\u003ed a(g b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "mkAdjunction",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e (forall a.  Obj d a -\u003e Component (Id d) (g :.: f) a) -\u003e (forall a.  Obj c a -\u003e Component (f :.: g) (Id c) a) -\u003e Adjunction c d f g",
          "source": "src/Data-Category-Adjunction.html#mkAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "mkAdjunction",
          "normalized": "a-\u003eb-\u003e(c d Obj e f-\u003eComponent(Id e)(b a)f)-\u003e(c d Obj g f-\u003eComponent(a b)(Id g)f)-\u003eAdjunction g e a b",
          "package": "data-category",
          "partial": "Adjunction",
          "signature": "f-\u003eg-\u003e(forall a. Obj d a-\u003eComponent(Id d)(g f)a)-\u003e(forall a. Obj c a-\u003eComponent(f g)(Id c)a)-\u003eAdjunction c d f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:mkAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "rightAdjoint",
          "package": "data-category",
          "signature": "g",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "rightAdjoint",
          "package": "data-category",
          "partial": "Adjoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:rightAdjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "rightAdjunct",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Obj c b -\u003e d a (g :% b) -\u003e c (f :% a) b",
          "source": "src/Data-Category-Adjunction.html#rightAdjunct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "rightAdjunct",
          "normalized": "Adjunction a b c d-\u003eObj a e-\u003eb f(d e)-\u003ea(c f)e",
          "package": "data-category",
          "partial": "Adjunct",
          "signature": "Adjunction c d f g-\u003eObj c b-\u003ed a(g b)-\u003ec(f a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "terminalPropAdjunction",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e (forall x.  Obj c x -\u003e TerminalUniversal x f (g :% x)) -\u003e Adjunction c d f g",
          "source": "src/Data-Category-Adjunction.html#terminalPropAdjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "terminalPropAdjunction",
          "normalized": "a-\u003eb-\u003e(c d Obj e f-\u003eTerminalUniversal f a(b f))-\u003eAdjunction e g a b",
          "package": "data-category",
          "partial": "Prop Adjunction",
          "signature": "f-\u003eg-\u003e(forall x. Obj c x-\u003eTerminalUniversal x f(g x))-\u003eAdjunction c d f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:terminalPropAdjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Adjunction",
          "name": "unit",
          "package": "data-category",
          "signature": "Nat d d (Id d) (g :.: f)",
          "source": "src/Data-Category-Adjunction.html#Adjunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Adjunction",
          "module": "Data.Category.Adjunction",
          "name": "unit",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Adjunction.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003e2\u003c/em\u003e, or the Boolean category.\n It contains 2 objects, one for true and one for false.\n It contains 3 arrows, 2 identity arrows and one from false to true.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Category.Boolean",
          "name": "Boolean",
          "package": "data-category",
          "source": "src/Data-Category-Boolean.html",
          "type": "module"
        },
        "index": {
          "description": "or the Boolean category It contains objects one for true and one for false It contains arrows identity arrows and one from false to true",
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Boolean",
          "package": "data-category",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "Boolean",
          "package": "data-category",
          "source": "src/Data-Category-Boolean.html#Boolean",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Boolean",
          "package": "data-category",
          "partial": "Boolean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "Fls",
          "package": "data-category",
          "source": "src/Data-Category-Boolean.html#Fls",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Fls",
          "package": "data-category",
          "partial": "Fls",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#t:Fls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "Tru",
          "package": "data-category",
          "source": "src/Data-Category-Boolean.html#Tru",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Tru",
          "package": "data-category",
          "partial": "Tru",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#t:Tru"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "F2T",
          "package": "data-category",
          "signature": "Boolean Fls Tru",
          "source": "src/Data-Category-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "F2T",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:F2T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "Fls",
          "package": "data-category",
          "signature": "Boolean Fls Fls",
          "source": "src/Data-Category-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Fls",
          "package": "data-category",
          "partial": "Fls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:Fls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "Tru",
          "package": "data-category",
          "signature": "Boolean Tru Tru",
          "source": "src/Data-Category-Boolean.html#Boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "Tru",
          "package": "data-category",
          "partial": "Tru",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:Tru"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "falseCoproductComonoid",
          "package": "data-category",
          "signature": "ComonoidObject (CoproductFunctor Boolean) Fls",
          "source": "src/Data-Category-Boolean.html#falseCoproductComonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "falseCoproductComonoid",
          "package": "data-category",
          "partial": "Coproduct Comonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:falseCoproductComonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "falseCoproductMonoid",
          "package": "data-category",
          "signature": "MonoidObject (CoproductFunctor Boolean) Fls",
          "source": "src/Data-Category-Boolean.html#falseCoproductMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "falseCoproductMonoid",
          "package": "data-category",
          "partial": "Coproduct Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:falseCoproductMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "falseProductComonoid",
          "package": "data-category",
          "signature": "ComonoidObject (ProductFunctor Boolean) Fls",
          "source": "src/Data-Category-Boolean.html#falseProductComonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "falseProductComonoid",
          "package": "data-category",
          "partial": "Product Comonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:falseProductComonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "trueCoproductMonoid",
          "package": "data-category",
          "signature": "MonoidObject (CoproductFunctor Boolean) Tru",
          "source": "src/Data-Category-Boolean.html#trueCoproductMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "trueCoproductMonoid",
          "package": "data-category",
          "partial": "Coproduct Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:trueCoproductMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "trueProductComonoid",
          "package": "data-category",
          "signature": "ComonoidObject (ProductFunctor Boolean) Tru",
          "source": "src/Data-Category-Boolean.html#trueProductComonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "trueProductComonoid",
          "package": "data-category",
          "partial": "Product Comonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:trueProductComonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Boolean",
          "name": "trueProductMonoid",
          "package": "data-category",
          "signature": "MonoidObject (ProductFunctor Boolean) Tru",
          "source": "src/Data-Category-Boolean.html#trueProductMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Boolean",
          "module": "Data.Category.Boolean",
          "name": "trueProductMonoid",
          "package": "data-category",
          "partial": "Product Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Boolean.html#v:trueProductMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "CartesianClosed",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "CartesianClosed",
          "package": "data-category",
          "partial": "Cartesian Closed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "Apply",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#Apply",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "Apply",
          "package": "data-category",
          "partial": "Apply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA category is cartesian closed if it has all products and exponentials for all objects.\n\u003c/p\u003e",
          "module": "Data.Category.CartesianClosed",
          "name": "CartesianClosed",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#CartesianClosed",
          "type": "class"
        },
        "index": {
          "description": "category is cartesian closed if it has all products and exponentials for all objects",
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "CartesianClosed",
          "package": "data-category",
          "partial": "Cartesian Closed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:CartesianClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "Context",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "Context",
          "package": "data-category",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ExpFunctor",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#ExpFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ExpFunctor",
          "package": "data-category",
          "partial": "Exp Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:ExpFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom every adjunction we get a monad, in this case the State monad.\n\u003c/p\u003e",
          "module": "Data.Category.CartesianClosed",
          "name": "State",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#State",
          "type": "type"
        },
        "index": {
          "description": "From every adjunction we get monad in this case the State monad",
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "State",
          "package": "data-category",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple1",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#ToTuple1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple1",
          "package": "data-category",
          "partial": "To Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:ToTuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple2",
          "package": "data-category",
          "source": "src/Data-Category-CartesianClosed.html#ToTuple2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple2",
          "package": "data-category",
          "partial": "To Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#t:ToTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "(^^^)",
          "package": "data-category",
          "signature": "k z1 z2 -\u003e k y2 y1 -\u003e k (Exponential k y1 z1) (Exponential k y2 z2)",
          "source": "src/Data-Category-CartesianClosed.html#%5E%5E%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "(^^^) ^^^",
          "normalized": "a b b-\u003ea c c-\u003ea(Exponential a c b)(Exponential a c b)",
          "package": "data-category",
          "signature": "k z z-\u003ek y y-\u003ek(Exponential k y z)(Exponential k y z)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:-94--94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "Apply",
          "package": "data-category",
          "signature": "Apply",
          "source": "src/Data-Category-CartesianClosed.html#Apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "Apply",
          "package": "data-category",
          "partial": "Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ExpFunctor",
          "package": "data-category",
          "signature": "ExpFunctor",
          "source": "src/Data-Category-CartesianClosed.html#ExpFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ExpFunctor",
          "package": "data-category",
          "partial": "Exp Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:ExpFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple1",
          "package": "data-category",
          "signature": "ToTuple1",
          "source": "src/Data-Category-CartesianClosed.html#ToTuple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple1",
          "package": "data-category",
          "partial": "To Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:ToTuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple2",
          "package": "data-category",
          "signature": "ToTuple2",
          "source": "src/Data-Category-CartesianClosed.html#ToTuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "ToTuple2",
          "package": "data-category",
          "partial": "To Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:ToTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "apply",
          "package": "data-category",
          "signature": "Obj k y -\u003e Obj k z -\u003e k (BinaryProduct k (Exponential k y z) y) z",
          "source": "src/Data-Category-CartesianClosed.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "apply",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(BinaryProduct a(Exponential a b c)b)c",
          "package": "data-category",
          "signature": "Obj k y-\u003eObj k z-\u003ek(BinaryProduct k(Exponential k y z)y)z",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "contextComonadDuplicate",
          "package": "data-category",
          "signature": "Obj k s -\u003e Obj k a -\u003e k (Context k s a) (Context k s (Context k s a))",
          "source": "src/Data-Category-CartesianClosed.html#contextComonadDuplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "contextComonadDuplicate",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(Context a b c)(Context a b(Context a b c))",
          "package": "data-category",
          "partial": "Comonad Duplicate",
          "signature": "Obj k s-\u003eObj k a-\u003ek(Context k s a)(Context k s(Context k s a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:contextComonadDuplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "contextComonadExtract",
          "package": "data-category",
          "signature": "Obj k s -\u003e Obj k a -\u003e k (Context k s a) a",
          "source": "src/Data-Category-CartesianClosed.html#contextComonadExtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "contextComonadExtract",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(Context a b c)c",
          "package": "data-category",
          "partial": "Comonad Extract",
          "signature": "Obj k s-\u003eObj k a-\u003ek(Context k s a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:contextComonadExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the adjunction between the product functor and the exponential functor we get the curry and uncurry functions,\n   generalized to any cartesian closed category.\n\u003c/p\u003e",
          "module": "Data.Category.CartesianClosed",
          "name": "curry",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e Obj k z -\u003e k (BinaryProduct k x y) z -\u003e k x (Exponential k y z)",
          "source": "src/Data-Category-CartesianClosed.html#curry",
          "type": "function"
        },
        "index": {
          "description": "From the adjunction between the product functor and the exponential functor we get the curry and uncurry functions generalized to any cartesian closed category",
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "curry",
          "normalized": "Obj a b-\u003eObj a c-\u003eObj a d-\u003ea(BinaryProduct a b c)d-\u003ea b(Exponential a c d)",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003eObj k z-\u003ek(BinaryProduct k x y)z-\u003ek x(Exponential k y z)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe product functor is left adjoint the the exponential functor.\n\u003c/p\u003e",
          "module": "Data.Category.CartesianClosed",
          "name": "curryAdj",
          "package": "data-category",
          "signature": "Obj k y -\u003e Adjunction k k (ProductFunctor k :.: Tuple2 k k y) (ExpFunctor k :.: Tuple1 (Op k) k y)",
          "source": "src/Data-Category-CartesianClosed.html#curryAdj",
          "type": "function"
        },
        "index": {
          "description": "The product functor is left adjoint the the exponential functor",
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "curryAdj",
          "normalized": "Obj a b-\u003eAdjunction a a(ProductFunctor a Tuple a a b)(ExpFunctor a Tuple(Op a)a b)",
          "package": "data-category",
          "partial": "Adj",
          "signature": "Obj k y-\u003eAdjunction k k(ProductFunctor k Tuple k k y)(ExpFunctor k Tuple(Op k)k y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:curryAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "stateMonadJoin",
          "package": "data-category",
          "signature": "Obj k s -\u003e Obj k a -\u003e k (State k s (State k s a)) (State k s a)",
          "source": "src/Data-Category-CartesianClosed.html#stateMonadJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "stateMonadJoin",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(State a b(State a b c))(State a b c)",
          "package": "data-category",
          "partial": "Monad Join",
          "signature": "Obj k s-\u003eObj k a-\u003ek(State k s(State k s a))(State k s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:stateMonadJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "stateMonadReturn",
          "package": "data-category",
          "signature": "Obj k s -\u003e Obj k a -\u003e k a (State k s a)",
          "source": "src/Data-Category-CartesianClosed.html#stateMonadReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "stateMonadReturn",
          "normalized": "Obj a b-\u003eObj a c-\u003ea c(State a b c)",
          "package": "data-category",
          "partial": "Monad Return",
          "signature": "Obj k s-\u003eObj k a-\u003ek a(State k s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:stateMonadReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "tuple",
          "package": "data-category",
          "signature": "Obj k y -\u003e Obj k z -\u003e k z (Exponential k y (BinaryProduct k z y))",
          "source": "src/Data-Category-CartesianClosed.html#tuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "tuple",
          "normalized": "Obj a b-\u003eObj a c-\u003ea c(Exponential a b(BinaryProduct a c b))",
          "package": "data-category",
          "signature": "Obj k y-\u003eObj k z-\u003ek z(Exponential k y(BinaryProduct k z y))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.CartesianClosed",
          "name": "uncurry",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e Obj k z -\u003e k x (Exponential k y z) -\u003e k (BinaryProduct k x y) z",
          "source": "src/Data-Category-CartesianClosed.html#uncurry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category CartesianClosed",
          "module": "Data.Category.CartesianClosed",
          "name": "uncurry",
          "normalized": "Obj a b-\u003eObj a c-\u003eObj a d-\u003ea b(Exponential a c d)-\u003ea(BinaryProduct a b c)d",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003eObj k z-\u003ek x(Exponential k y z)-\u003ek(BinaryProduct k x y)z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-CartesianClosed.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComma categories.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Category.Comma",
          "name": "Comma",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html",
          "type": "module"
        },
        "index": {
          "description": "Comma categories",
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "Comma",
          "package": "data-category",
          "partial": "Comma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": ":/\\:",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#%3A%2F%5C%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": ":/\\:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t::-47--92-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "CommaO",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#CommaO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "CommaO",
          "package": "data-category",
          "partial": "Comma",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t:CommaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "ObjectsFOver",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#ObjectsFOver",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "ObjectsFOver",
          "package": "data-category",
          "partial": "Objects FOver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t:ObjectsFOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "ObjectsFUnder",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#ObjectsFUnder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "ObjectsFUnder",
          "package": "data-category",
          "partial": "Objects FUnder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t:ObjectsFUnder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "ObjectsOver",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#ObjectsOver",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "ObjectsOver",
          "package": "data-category",
          "partial": "Objects Over",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t:ObjectsOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "ObjectsUnder",
          "package": "data-category",
          "source": "src/Data-Category-Comma.html#ObjectsUnder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "ObjectsUnder",
          "package": "data-category",
          "partial": "Objects Under",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#t:ObjectsUnder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "CommaA",
          "package": "data-category",
          "signature": "CommaO t s (a, b) -\u003e Dom t a a' -\u003e Dom s b b' -\u003e CommaO t s (a', b') -\u003e (t :/\\: s) (a, b) (a', b')",
          "source": "src/Data-Category-Comma.html#%3A%2F%5C%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "CommaA",
          "normalized": "CommaO a b(c,d)-\u003eDom a c e-\u003eDom b d f-\u003eCommaO a b(e,f)-\u003e(a b)(c,d)(e,f)",
          "package": "data-category",
          "partial": "Comma",
          "signature": "CommaO t s(a,b)-\u003eDom t a a'-\u003eDom s b b'-\u003eCommaO t s(a',b')-\u003e(t s)(a,b)(a',b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#v:CommaA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "CommaO",
          "package": "data-category",
          "signature": "Obj (Dom t) a -\u003e k (t :% a) (s :% b) -\u003e Obj (Dom s) b -\u003e CommaO t s (a, b)",
          "source": "src/Data-Category-Comma.html#CommaO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "CommaO",
          "normalized": "Obj(Dom a)b-\u003ec(a b)(d e)-\u003eObj(Dom d)e-\u003eCommaO a d(b,e)",
          "package": "data-category",
          "partial": "Comma",
          "signature": "Obj(Dom t)a-\u003ek(t a)(s b)-\u003eObj(Dom s)b-\u003eCommaO t s(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#v:CommaO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "commaId",
          "package": "data-category",
          "signature": "CommaO t s (a, b) -\u003e Obj (t :/\\: s) (a, b)",
          "source": "src/Data-Category-Comma.html#commaId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "commaId",
          "normalized": "CommaO a b(c,d)-\u003eObj(a b)(c,d)",
          "package": "data-category",
          "partial": "Id",
          "signature": "CommaO t s(a,b)-\u003eObj(t s)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#v:commaId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "initialUniversalComma",
          "package": "data-category",
          "signature": "u -\u003e InitialUniversal x u a",
          "source": "src/Data-Category-Comma.html#initialUniversalComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "initialUniversalComma",
          "normalized": "a-\u003eInitialUniversal b a c",
          "package": "data-category",
          "partial": "Universal Comma",
          "signature": "u-\u003eInitialUniversal x u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#v:initialUniversalComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Comma",
          "name": "terminalUniversalComma",
          "package": "data-category",
          "signature": "u -\u003e TerminalUniversal x u a",
          "source": "src/Data-Category-Comma.html#terminalUniversalComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Comma",
          "module": "Data.Category.Comma",
          "name": "terminalUniversalComma",
          "normalized": "a-\u003eTerminalUniversal b a c",
          "package": "data-category",
          "partial": "Universal Comma",
          "signature": "u-\u003eTerminalUniversal x u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Comma.html#v:terminalUniversalComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Coproduct",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Coproduct",
          "package": "data-category",
          "partial": "Coproduct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": ":+++:",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#%3A%2B%2B%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": ":+++:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t::-43--43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": ":++:",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#%3A%2B%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": ":++:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t::-43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": ":\u003e\u003e:",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#%3A%3E%3E%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": ":\u003e\u003e:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t::-62--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "CodiagCoprod",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#CodiagCoprod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "CodiagCoprod",
          "package": "data-category",
          "partial": "Codiag Coprod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:CodiagCoprod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Cotuple1",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#Cotuple1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Cotuple1",
          "package": "data-category",
          "partial": "Cotuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:Cotuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Cotuple2",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#Cotuple2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Cotuple2",
          "package": "data-category",
          "partial": "Cotuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:Cotuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I1",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#I1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I1",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:I1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I2",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#I2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I2",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:I2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Inj1",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#Inj1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Inj1",
          "package": "data-category",
          "partial": "Inj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:Inj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Inj2",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#Inj2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Inj2",
          "package": "data-category",
          "partial": "Inj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:Inj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "NatAsFunctor",
          "package": "data-category",
          "source": "src/Data-Category-Coproduct.html#NatAsFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "NatAsFunctor",
          "package": "data-category",
          "partial": "Nat As Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#t:NatAsFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": ":+++:",
          "package": "data-category",
          "signature": "f1 :+++: f2",
          "source": "src/Data-Category-Coproduct.html#%3A%2B%2B%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": ":+++:",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v::-43--43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "CodiagCoprod",
          "package": "data-category",
          "signature": "CodiagCoprod",
          "source": "src/Data-Category-Coproduct.html#CodiagCoprod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "CodiagCoprod",
          "package": "data-category",
          "partial": "Codiag Coprod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:CodiagCoprod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Cotuple1",
          "package": "data-category",
          "signature": "Cotuple1 (Obj c1 a)",
          "source": "src/Data-Category-Coproduct.html#Cotuple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Cotuple1",
          "package": "data-category",
          "partial": "Cotuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:Cotuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Cotuple2",
          "package": "data-category",
          "signature": "Cotuple2 (Obj c2 a)",
          "source": "src/Data-Category-Coproduct.html#Cotuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Cotuple2",
          "package": "data-category",
          "partial": "Cotuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:Cotuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I1",
          "package": "data-category",
          "signature": "c1 a1 b1 -\u003e :++: c1 c2 (I1 a1) (I1 b1)",
          "source": "src/Data-Category-Coproduct.html#%3A%2B%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I1",
          "normalized": "a b c-\u003ea a(I b)(I c)",
          "package": "data-category",
          "signature": "c a b-\u003ec c(I a)(I b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:I1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I12",
          "package": "data-category",
          "signature": "Obj c1 a -\u003e Obj c2 b -\u003e :\u003e\u003e: c1 c2 (I1 a) (I2 b)",
          "source": "src/Data-Category-Coproduct.html#%3A%3E%3E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I12",
          "normalized": "Obj a b-\u003eObj a c-\u003ea a(I b)(I c)",
          "package": "data-category",
          "signature": "Obj c a-\u003eObj c b-\u003ec c(I a)(I b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:I12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I1A",
          "package": "data-category",
          "signature": "c1 a1 b1 -\u003e :\u003e\u003e: c1 c2 (I1 a1) (I1 b1)",
          "source": "src/Data-Category-Coproduct.html#%3A%3E%3E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I1A",
          "normalized": "a b c-\u003ea a(I b)(I c)",
          "package": "data-category",
          "signature": "c a b-\u003ec c(I a)(I b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:I1A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I2",
          "package": "data-category",
          "signature": "c2 a2 b2 -\u003e :++: c1 c2 (I2 a2) (I2 b2)",
          "source": "src/Data-Category-Coproduct.html#%3A%2B%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I2",
          "normalized": "a b c-\u003ea a(I b)(I c)",
          "package": "data-category",
          "signature": "c a b-\u003ec c(I a)(I b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:I2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "I2A",
          "package": "data-category",
          "signature": "c2 a2 b2 -\u003e :\u003e\u003e: c1 c2 (I2 a2) (I2 b2)",
          "source": "src/Data-Category-Coproduct.html#%3A%3E%3E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "I2A",
          "normalized": "a b c-\u003ea a(I b)(I c)",
          "package": "data-category",
          "signature": "c a b-\u003ec c(I a)(I b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:I2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Inj1",
          "package": "data-category",
          "signature": "Inj1",
          "source": "src/Data-Category-Coproduct.html#Inj1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Inj1",
          "package": "data-category",
          "partial": "Inj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:Inj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "Inj2",
          "package": "data-category",
          "signature": "Inj2",
          "source": "src/Data-Category-Coproduct.html#Inj2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "Inj2",
          "package": "data-category",
          "partial": "Inj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:Inj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Coproduct",
          "name": "NatAsFunctor",
          "package": "data-category",
          "signature": "NatAsFunctor (Nat (Dom f) (Cod f) f g)",
          "source": "src/Data-Category-Coproduct.html#NatAsFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Coproduct",
          "module": "Data.Category.Coproduct",
          "name": "NatAsFunctor",
          "package": "data-category",
          "partial": "Nat As Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Coproduct.html#v:NatAsFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDialg(F,G), the category of (F,G)-dialgebras and (F,G)-homomorphisms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Category.Dialg",
          "name": "Dialg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html",
          "type": "module"
        },
        "index": {
          "description": "Dialg the category of dialgebras and homomorphisms",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Dialg",
          "package": "data-category",
          "partial": "Dialg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Alg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Alg",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Alg",
          "package": "data-category",
          "partial": "Alg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Alg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Algebra",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Algebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Algebra",
          "package": "data-category",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA anamorphism of an F-coalgebra is the arrow from it to the terminal F-coalgebra.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "Ana",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Ana",
          "type": "type"
        },
        "index": {
          "description": "anamorphism of an F-coalgebra is the arrow from it to the terminal F-coalgebra",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Ana",
          "package": "data-category",
          "partial": "Ana",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA catamorphism of an F-algebra is the arrow to it from the initial F-algebra.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "Cata",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Cata",
          "type": "type"
        },
        "index": {
          "description": "catamorphism of an F-algebra is the arrow to it from the initial F-algebra",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Cata",
          "package": "data-category",
          "partial": "Cata",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Coalg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Coalg",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Coalg",
          "package": "data-category",
          "partial": "Coalg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Coalg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Coalgebra",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Coalgebra",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Coalgebra",
          "package": "data-category",
          "partial": "Coalgebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Coalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrows of Dialg(F,G) are (F,G)-homomorphisms.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "Dialg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Dialg",
          "type": "data"
        },
        "index": {
          "description": "Arrows of Dialg are homomorphisms",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Dialg",
          "package": "data-category",
          "partial": "Dialg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Dialg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObjects of Dialg(F,G) are (F,G)-dialgebras.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "Dialgebra",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#Dialgebra",
          "type": "data"
        },
        "index": {
          "description": "Objects of Dialg are dialgebras",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Dialgebra",
          "package": "data-category",
          "partial": "Dialgebra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:Dialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "ForgetAlg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#ForgetAlg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "ForgetAlg",
          "package": "data-category",
          "partial": "Forget Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:ForgetAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "FreeAlg",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#FreeAlg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "FreeAlg",
          "package": "data-category",
          "partial": "Free Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:FreeAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial F-algebra is the initial object in the category of F-algebras.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "InitialFAlgebra",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#InitialFAlgebra",
          "type": "type"
        },
        "index": {
          "description": "The initial F-algebra is the initial object in the category of F-algebras",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "InitialFAlgebra",
          "package": "data-category",
          "partial": "Initial FAlgebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:InitialFAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "NatNum",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#NatNum",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "NatNum",
          "package": "data-category",
          "partial": "Nat Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:NatNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe terminal F-coalgebra is the terminal object in the category of F-coalgebras.\n\u003c/p\u003e",
          "module": "Data.Category.Dialg",
          "name": "TerminalFAlgebra",
          "package": "data-category",
          "source": "src/Data-Category-Dialg.html#TerminalFAlgebra",
          "type": "type"
        },
        "index": {
          "description": "The terminal F-coalgebra is the terminal object in the category of F-coalgebras",
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "TerminalFAlgebra",
          "package": "data-category",
          "partial": "Terminal FAlgebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#t:TerminalFAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "DialgA",
          "package": "data-category",
          "signature": "Dialgebra f g a -\u003e Dialgebra f g b -\u003e c a b -\u003e Dialg f g a b",
          "source": "src/Data-Category-Dialg.html#Dialg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "DialgA",
          "normalized": "Dialgebra a b c-\u003eDialgebra a b d-\u003ee c d-\u003eDialg a b c d",
          "package": "data-category",
          "partial": "Dialg",
          "signature": "Dialgebra f g a-\u003eDialgebra f g b-\u003ec a b-\u003eDialg f g a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:DialgA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Dialgebra",
          "package": "data-category",
          "signature": "Obj c a -\u003e d (f :% a) (g :% a) -\u003e Dialgebra f g a",
          "source": "src/Data-Category-Dialg.html#Dialgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Dialgebra",
          "normalized": "Obj a b-\u003ec(d b)(e b)-\u003eDialgebra d e b",
          "package": "data-category",
          "partial": "Dialgebra",
          "signature": "Obj c a-\u003ed(f a)(g a)-\u003eDialgebra f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:Dialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "ForgetAlg",
          "package": "data-category",
          "signature": "ForgetAlg",
          "source": "src/Data-Category-Dialg.html#ForgetAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "ForgetAlg",
          "package": "data-category",
          "partial": "Forget Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:ForgetAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "FreeAlg",
          "package": "data-category",
          "signature": "FreeAlg (Monad m)",
          "source": "src/Data-Category-Dialg.html#FreeAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "FreeAlg",
          "package": "data-category",
          "partial": "Free Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:FreeAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "S",
          "package": "data-category",
          "signature": "S NatNum",
          "source": "src/Data-Category-Dialg.html#NatNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "S",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "Z",
          "package": "data-category",
          "signature": "Z ()",
          "source": "src/Data-Category-Dialg.html#NatNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "Z",
          "normalized": "Z()",
          "package": "data-category",
          "signature": "Z()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "dialgId",
          "package": "data-category",
          "signature": "Dialgebra f g a -\u003e Obj (Dialg f g) a",
          "source": "src/Data-Category-Dialg.html#dialgId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "dialgId",
          "normalized": "Dialgebra a b c-\u003eObj(Dialg a b)c",
          "package": "data-category",
          "partial": "Id",
          "signature": "Dialgebra f g a-\u003eObj(Dialg f g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:dialgId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "dialgebra",
          "package": "data-category",
          "signature": "Obj (Dialg f g) a -\u003e Dialgebra f g a",
          "source": "src/Data-Category-Dialg.html#dialgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "dialgebra",
          "normalized": "Obj(Dialg a b)c-\u003eDialgebra a b c",
          "package": "data-category",
          "signature": "Obj(Dialg f g)a-\u003eDialgebra f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:dialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "eilenbergMooreAdj",
          "package": "data-category",
          "signature": "Monad m -\u003e Adjunction (Alg m) k (FreeAlg m) (ForgetAlg m)",
          "source": "src/Data-Category-Dialg.html#eilenbergMooreAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "eilenbergMooreAdj",
          "normalized": "Monad a-\u003eAdjunction(Alg a)b(FreeAlg a)(ForgetAlg a)",
          "package": "data-category",
          "partial": "Moore Adj",
          "signature": "Monad m-\u003eAdjunction(Alg m)k(FreeAlg m)(ForgetAlg m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:eilenbergMooreAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Dialg",
          "name": "primRec",
          "package": "data-category",
          "signature": "(() -\u003e t) -\u003e (t -\u003e t) -\u003e NatNum -\u003e t",
          "source": "src/Data-Category-Dialg.html#primRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Dialg",
          "module": "Data.Category.Dialg",
          "name": "primRec",
          "normalized": "(()-\u003ea)-\u003e(a-\u003ea)-\u003eNatNum-\u003ea",
          "package": "data-category",
          "partial": "Rec",
          "signature": "(()-\u003et)-\u003e(t-\u003et)-\u003eNatNum-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Dialg.html#v:primRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "source": "src/Data-Category-Fix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "partial": "Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "source": "src/Data-Category-Fix.html#Fix",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "partial": "Fix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the \u003ccode\u003e\u003ca\u003eOmega\u003c/a\u003e\u003c/code\u003e category, add a new disctinct object, and an arrow from that object to every object in \u003ccode\u003e\u003ca\u003eOmega\u003c/a\u003e\u003c/code\u003e,\n   and you get \u003ccode\u003e\u003ca\u003eOmega\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
          "module": "Data.Category.Fix",
          "name": "Omega",
          "package": "data-category",
          "source": "src/Data-Category-Fix.html#Omega",
          "type": "type"
        },
        "index": {
          "description": "Take the Omega category add new disctinct object and an arrow from that object to every object in Omega and you get Omega again",
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Omega",
          "package": "data-category",
          "partial": "Omega",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#t:Omega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Fix",
          "name": "Wrap",
          "package": "data-category",
          "source": "src/Data-Category-Fix.html#Wrap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Wrap",
          "package": "data-category",
          "partial": "Wrap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "signature": "Fix (f (Fix f) a b)",
          "source": "src/Data-Category-Fix.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Fix",
          "package": "data-category",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#v:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Fix",
          "name": "Wrap",
          "package": "data-category",
          "signature": "Wrap",
          "source": "src/Data-Category-Fix.html#Wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Fix",
          "module": "Data.Category.Fix",
          "name": "Wrap",
          "package": "data-category",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Fix.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Functor",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Functor",
          "package": "data-category",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":***:",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#%3A%2A%2A%2A%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":***:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t::-42--42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":*-:",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#%3A%2A-%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":*-:",
          "package": "data-category",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t::-42--45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":-*:",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#%3A-%2A%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":-*:",
          "package": "data-category",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t::-45--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":.:",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#%3A.%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":.:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctors are arrows in the category Cat.\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "Cat",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Cat",
          "type": "data"
        },
        "index": {
          "description": "Functors are arrows in the category Cat",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Cat",
          "package": "data-category",
          "partial": "Cat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need a wrapper here because objects need to be of kind *, and categories are of kind * -\u003e * -\u003e *.\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "CatW",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#CatW",
          "type": "data"
        },
        "index": {
          "description": "We need wrapper here because objects need to be of kind and categories are of kind",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "CatW",
          "package": "data-category",
          "partial": "Cat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:CatW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Const",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Const",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Const",
          "package": "data-category",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant functor with the same domain and codomain as f.\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "ConstF",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#ConstF",
          "type": "type"
        },
        "index": {
          "description": "The constant functor with the same domain and codomain as",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "ConstF",
          "package": "data-category",
          "partial": "Const",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:ConstF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "DiagProd",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#DiagProd",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "DiagProd",
          "package": "data-category",
          "partial": "Diag Prod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:DiagProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctors map objects and arrows.\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "Functor",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Functor",
          "type": "class"
        },
        "index": {
          "description": "Functors map objects and arrows",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Functor",
          "package": "data-category",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Hom",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Hom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Hom",
          "package": "data-category",
          "partial": "Hom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Hom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Id",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Id",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Id",
          "package": "data-category",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "OpOp",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#OpOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "OpOp",
          "package": "data-category",
          "partial": "Op Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:OpOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "OpOpInv",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#OpOpInv",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "OpOpInv",
          "package": "data-category",
          "partial": "Op Op Inv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:OpOpInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Opposite",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Opposite",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Opposite",
          "package": "data-category",
          "partial": "Opposite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Opposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Proj1",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Proj1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Proj1",
          "package": "data-category",
          "partial": "Proj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Proj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Proj2",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Proj2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Proj2",
          "package": "data-category",
          "partial": "Proj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Proj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Tuple1",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Tuple1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Tuple1",
          "package": "data-category",
          "partial": "Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Tuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Tuple2",
          "package": "data-category",
          "source": "src/Data-Category-Functor.html#Tuple2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Tuple2",
          "package": "data-category",
          "partial": "Tuple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#t:Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e%\u003c/code\u003e maps arrows.\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "(%)",
          "package": "data-category",
          "signature": "ftag -\u003e Dom ftag a b -\u003e Cod ftag (ftag :% a) (ftag :% b)",
          "source": "src/Data-Category-Functor.html#%25",
          "type": "method"
        },
        "index": {
          "description": "maps arrows",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "(%) %",
          "normalized": "a-\u003eDom a b c-\u003eCod a(a b)(a c)",
          "package": "data-category",
          "signature": "ftag-\u003eDom ftag a b-\u003eCod ftag(ftag a)(ftag b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":***:",
          "package": "data-category",
          "signature": "f1 :***: f2",
          "source": "src/Data-Category-Functor.html#%3A%2A%2A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":***:",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v::-42--42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": ":.:",
          "package": "data-category",
          "signature": "g -\u003e h -\u003e g :.: h",
          "source": "src/Data-Category-Functor.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": ":.:",
          "normalized": "a-\u003eb-\u003ea b",
          "package": "data-category",
          "signature": "g-\u003eh-\u003eg h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "CatA",
          "package": "data-category",
          "signature": "ftag -\u003e Cat (CatW (Dom ftag)) (CatW (Cod ftag))",
          "source": "src/Data-Category-Functor.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "CatA",
          "normalized": "a-\u003eCat(CatW(Dom a))(CatW(Cod a))",
          "package": "data-category",
          "partial": "Cat",
          "signature": "ftag-\u003eCat(CatW(Dom ftag))(CatW(Cod ftag))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:CatA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Const",
          "package": "data-category",
          "signature": "Obj c2 x -\u003e Const c1 c2 x",
          "source": "src/Data-Category-Functor.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Const",
          "normalized": "Obj a b-\u003eConst a a b",
          "package": "data-category",
          "partial": "Const",
          "signature": "Obj c x-\u003eConst c c x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "DiagProd",
          "package": "data-category",
          "signature": "DiagProd",
          "source": "src/Data-Category-Functor.html#DiagProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "DiagProd",
          "package": "data-category",
          "partial": "Diag Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:DiagProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Hom",
          "package": "data-category",
          "signature": "Hom",
          "source": "src/Data-Category-Functor.html#Hom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Hom",
          "package": "data-category",
          "partial": "Hom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Hom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Id",
          "package": "data-category",
          "signature": "Id",
          "source": "src/Data-Category-Functor.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Id",
          "package": "data-category",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "OpOp",
          "package": "data-category",
          "signature": "OpOp",
          "source": "src/Data-Category-Functor.html#OpOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "OpOp",
          "package": "data-category",
          "partial": "Op Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:OpOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "OpOpInv",
          "package": "data-category",
          "signature": "OpOpInv",
          "source": "src/Data-Category-Functor.html#OpOpInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "OpOpInv",
          "package": "data-category",
          "partial": "Op Op Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:OpOpInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Opposite",
          "package": "data-category",
          "signature": "f -\u003e Opposite f",
          "source": "src/Data-Category-Functor.html#Opposite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Opposite",
          "normalized": "a-\u003eOpposite a",
          "package": "data-category",
          "partial": "Opposite",
          "signature": "f-\u003eOpposite f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Opposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Proj1",
          "package": "data-category",
          "signature": "Proj1",
          "source": "src/Data-Category-Functor.html#Proj1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Proj1",
          "package": "data-category",
          "partial": "Proj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Proj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Proj2",
          "package": "data-category",
          "signature": "Proj2",
          "source": "src/Data-Category-Functor.html#Proj2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Proj2",
          "package": "data-category",
          "partial": "Proj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Proj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Tuple1",
          "package": "data-category",
          "signature": "Tuple1 (Obj c1 a)",
          "source": "src/Data-Category-Functor.html#Tuple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Tuple1",
          "package": "data-category",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Tuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Functor",
          "name": "Tuple2",
          "package": "data-category",
          "signature": "Tuple2 (Obj c2 a)",
          "source": "src/Data-Category-Functor.html#Tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "Tuple2",
          "package": "data-category",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe covariant functor Hom(X,--)\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "homX_",
          "package": "data-category",
          "signature": "Obj k x -\u003e x :*-: k",
          "source": "src/Data-Category-Functor.html#homX_",
          "type": "function"
        },
        "index": {
          "description": "The covariant functor Hom",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "homX_",
          "normalized": "Obj a b-\u003eb*a",
          "package": "data-category",
          "signature": "Obj k x-\u003ex*k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:homX_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contravariant functor Hom(--,X)\n\u003c/p\u003e",
          "module": "Data.Category.Functor",
          "name": "hom_X",
          "package": "data-category",
          "signature": "Obj k x -\u003e k :-*: x",
          "source": "src/Data-Category-Functor.html#hom_X",
          "type": "function"
        },
        "index": {
          "description": "The contravariant functor Hom",
          "hierarchy": "Data Category Functor",
          "module": "Data.Category.Functor",
          "name": "hom_X",
          "normalized": "Obj a b-\u003ea*b",
          "package": "data-category",
          "signature": "Obj k x-\u003ek*x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Functor.html#v:hom_X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an attempt at the Kleisli category, and the construction\n of an adjunction for each monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "package": "data-category",
          "source": "src/Data-Category-Kleisli.html",
          "type": "module"
        },
        "index": {
          "description": "This is an attempt at the Kleisli category and the construction of an adjunction for each monad",
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "package": "data-category",
          "partial": "Kleisli",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "package": "data-category",
          "source": "src/Data-Category-Kleisli.html#Kleisli",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "package": "data-category",
          "partial": "Kleisli",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#t:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjF",
          "package": "data-category",
          "source": "src/Data-Category-Kleisli.html#KleisliAdjF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjF",
          "package": "data-category",
          "partial": "Kleisli Adj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#t:KleisliAdjF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjG",
          "package": "data-category",
          "source": "src/Data-Category-Kleisli.html#KleisliAdjG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjG",
          "package": "data-category",
          "partial": "Kleisli Adj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#t:KleisliAdjG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "package": "data-category",
          "signature": "Monad m -\u003e Obj k b -\u003e k a (m :% b) -\u003e Kleisli m a b",
          "source": "src/Data-Category-Kleisli.html#Kleisli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "Kleisli",
          "normalized": "Monad a-\u003eObj b c-\u003eb d(a c)-\u003eKleisli a d c",
          "package": "data-category",
          "partial": "Kleisli",
          "signature": "Monad m-\u003eObj k b-\u003ek a(m b)-\u003eKleisli m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#v:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjF",
          "package": "data-category",
          "signature": "KleisliAdjF (Monad m)",
          "source": "src/Data-Category-Kleisli.html#KleisliAdjF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjF",
          "package": "data-category",
          "partial": "Kleisli Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#v:KleisliAdjF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjG",
          "package": "data-category",
          "signature": "KleisliAdjG (Monad m)",
          "source": "src/Data-Category-Kleisli.html#KleisliAdjG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "KleisliAdjG",
          "package": "data-category",
          "partial": "Kleisli Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#v:KleisliAdjG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "kleisliAdj",
          "package": "data-category",
          "signature": "Monad m -\u003e Adjunction (Kleisli m) k (KleisliAdjF m) (KleisliAdjG m)",
          "source": "src/Data-Category-Kleisli.html#kleisliAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "kleisliAdj",
          "normalized": "Monad a-\u003eAdjunction(Kleisli a)b(KleisliAdjF a)(KleisliAdjG a)",
          "package": "data-category",
          "partial": "Adj",
          "signature": "Monad m-\u003eAdjunction(Kleisli m)k(KleisliAdjF m)(KleisliAdjG m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#v:kleisliAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Kleisli",
          "name": "kleisliId",
          "package": "data-category",
          "signature": "Monad m -\u003e Obj k a -\u003e Kleisli m a a",
          "source": "src/Data-Category-Kleisli.html#kleisliId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Kleisli",
          "module": "Data.Category.Kleisli",
          "name": "kleisliId",
          "normalized": "Monad a-\u003eObj b c-\u003eKleisli a c c",
          "package": "data-category",
          "partial": "Id",
          "signature": "Monad m-\u003eObj k a-\u003eKleisli m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Kleisli.html#v:kleisliId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Limit",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Limit",
          "package": "data-category",
          "partial": "Limit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": ":*:",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": ":*:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": ":+:",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": ":+:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA co-cone from F to N is a natural transformation from F to the constant functor to N.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "Cocone",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Cocone",
          "type": "type"
        },
        "index": {
          "description": "co-cone from to is natural transformation from to the constant functor to",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Cocone",
          "package": "data-category",
          "partial": "Cocone",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Cocone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Colimit",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Colimit",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Colimit",
          "package": "data-category",
          "partial": "Colimit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Colimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColimits in a category \u003ccode\u003ek\u003c/code\u003e by means of a diagram of type \u003ccode\u003ej\u003c/code\u003e, which is a functor from \u003ccode\u003ej\u003c/code\u003e to \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "ColimitFam",
          "package": "data-category",
          "signature": "ColimitFam",
          "type": "function"
        },
        "index": {
          "description": "Colimits in category by means of diagram of type which is functor from to",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "ColimitFam",
          "package": "data-category",
          "partial": "Colimit Fam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:ColimitFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "ColimitFunctor",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#ColimitFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "ColimitFunctor",
          "package": "data-category",
          "partial": "Colimit Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:ColimitFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cone from N to F is a natural transformation from the constant functor to N to F.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "Cone",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Cone",
          "type": "type"
        },
        "index": {
          "description": "cone from to is natural transformation from the constant functor to to",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Cone",
          "package": "data-category",
          "partial": "Cone",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Cone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "CoproductFunctor",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#CoproductFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "CoproductFunctor",
          "package": "data-category",
          "partial": "Coproduct Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:CoproductFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Diag",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Diag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Diag",
          "package": "data-category",
          "partial": "Diag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe diagonal functor with the same domain and codomain as \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "DiagF",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#DiagF",
          "type": "type"
        },
        "index": {
          "description": "The diagonal functor with the same domain and codomain as",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "DiagF",
          "package": "data-category",
          "partial": "Diag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:DiagF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "HasBinaryCoproducts",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasBinaryCoproducts",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasBinaryCoproducts",
          "package": "data-category",
          "partial": "Has Binary Coproducts",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasBinaryCoproducts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "HasBinaryProducts",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasBinaryProducts",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasBinaryProducts",
          "package": "data-category",
          "partial": "Has Binary Products",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasBinaryProducts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003eHasColimits j k\u003c/code\u003e says that \u003ccode\u003ek\u003c/code\u003e has all colimits of type \u003ccode\u003ej\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "HasColimits",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasColimits",
          "type": "class"
        },
        "index": {
          "description": "An instance of HasColimits says that has all colimits of type",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasColimits",
          "package": "data-category",
          "partial": "Has Colimits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasColimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "HasInitialObject",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasInitialObject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasInitialObject",
          "package": "data-category",
          "partial": "Has Initial Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasInitialObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003eHasLimits j k\u003c/code\u003e says that \u003ccode\u003ek\u003c/code\u003e has all limits of type \u003ccode\u003ej\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "HasLimits",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasLimits",
          "type": "class"
        },
        "index": {
          "description": "An instance of HasLimits says that has all limits of type",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasLimits",
          "package": "data-category",
          "partial": "Has Limits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "HasTerminalObject",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#HasTerminalObject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "HasTerminalObject",
          "package": "data-category",
          "partial": "Has Terminal Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:HasTerminalObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Limit",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Limit",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Limit",
          "package": "data-category",
          "partial": "Limit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimits in a category \u003ccode\u003ek\u003c/code\u003e by means of a diagram of type \u003ccode\u003ej\u003c/code\u003e, which is a functor from \u003ccode\u003ej\u003c/code\u003e to \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "LimitFam",
          "package": "data-category",
          "signature": "LimitFam",
          "type": "function"
        },
        "index": {
          "description": "Limits in category by means of diagram of type which is functor from to",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "LimitFam",
          "package": "data-category",
          "partial": "Limit Fam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:LimitFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "LimitFunctor",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#LimitFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "LimitFunctor",
          "package": "data-category",
          "partial": "Limit Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:LimitFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "ProductFunctor",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#ProductFunctor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "ProductFunctor",
          "package": "data-category",
          "partial": "Product Functor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:ProductFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Zero",
          "package": "data-category",
          "source": "src/Data-Category-Limit.html#Zero",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Zero",
          "package": "data-category",
          "partial": "Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "(|||)",
          "package": "data-category",
          "signature": "k x a -\u003e k y a -\u003e k (BinaryCoproduct k x y) a",
          "source": "src/Data-Category-Limit.html#%7C%7C%7C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "(|||) |||",
          "normalized": "a b c-\u003ea d c-\u003ea(BinaryCoproduct a b d)c",
          "package": "data-category",
          "signature": "k x a-\u003ek y a-\u003ek(BinaryCoproduct k x y)a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "(&&&)",
          "package": "data-category",
          "signature": "k a x -\u003e k a y -\u003e k a (BinaryProduct k x y)",
          "source": "src/Data-Category-Limit.html#%26%26%26",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "(&&&) &&&",
          "normalized": "a b c-\u003ea b d-\u003ea b(BinaryProduct a c d)",
          "package": "data-category",
          "signature": "k a x-\u003ek a y-\u003ek a(BinaryProduct k x y)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "(***)",
          "package": "data-category",
          "signature": "k a1 b1 -\u003e k a2 b2 -\u003e k (BinaryProduct k a1 a2) (BinaryProduct k b1 b2)",
          "source": "src/Data-Category-Limit.html#%2A%2A%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "(***) ***",
          "normalized": "a b c-\u003ea b c-\u003ea(BinaryProduct a b b)(BinaryProduct a c c)",
          "package": "data-category",
          "signature": "k a b-\u003ek a b-\u003ek(BinaryProduct k a a)(BinaryProduct k b b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "(+++)",
          "package": "data-category",
          "signature": "k a1 b1 -\u003e k a2 b2 -\u003e k (BinaryCoproduct k a1 a2) (BinaryCoproduct k b1 b2)",
          "source": "src/Data-Category-Limit.html#%2B%2B%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "(+++) +++",
          "normalized": "a b c-\u003ea b c-\u003ea(BinaryCoproduct a b b)(BinaryCoproduct a c c)",
          "package": "data-category",
          "signature": "k a b-\u003ek a b-\u003ek(BinaryCoproduct k a a)(BinaryCoproduct k b b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": ":*:",
          "package": "data-category",
          "signature": "p -\u003e q -\u003e p :*: q",
          "source": "src/Data-Category-Limit.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": ":*:",
          "normalized": "a-\u003eb-\u003ea*b",
          "package": "data-category",
          "signature": "p-\u003eq-\u003ep*q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": ":+:",
          "package": "data-category",
          "signature": "p -\u003e q -\u003e p :+: q",
          "source": "src/Data-Category-Limit.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": ":+:",
          "normalized": "a-\u003eb-\u003ea b",
          "package": "data-category",
          "signature": "p-\u003eq-\u003ep q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "ColimitFunctor",
          "package": "data-category",
          "signature": "ColimitFunctor",
          "source": "src/Data-Category-Limit.html#ColimitFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "ColimitFunctor",
          "package": "data-category",
          "partial": "Colimit Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:ColimitFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "CoproductFunctor",
          "package": "data-category",
          "signature": "CoproductFunctor",
          "source": "src/Data-Category-Limit.html#CoproductFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "CoproductFunctor",
          "package": "data-category",
          "partial": "Coproduct Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:CoproductFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "Diag",
          "package": "data-category",
          "signature": "Diag j k",
          "source": "src/Data-Category-Limit.html#Diag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "Diag",
          "package": "data-category",
          "partial": "Diag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:Diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "LimitFunctor",
          "package": "data-category",
          "signature": "LimitFunctor",
          "source": "src/Data-Category-Limit.html#LimitFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "LimitFunctor",
          "package": "data-category",
          "partial": "Limit Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:LimitFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "ProductFunctor",
          "package": "data-category",
          "signature": "ProductFunctor",
          "source": "src/Data-Category-Limit.html#ProductFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "ProductFunctor",
          "package": "data-category",
          "partial": "Product Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:ProductFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vertex (or apex) of a co-cone.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "coconeVertex",
          "package": "data-category",
          "signature": "Cocone f n -\u003e Obj (Cod f) n",
          "source": "src/Data-Category-Limit.html#coconeVertex",
          "type": "function"
        },
        "index": {
          "description": "The vertex or apex of co-cone",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "coconeVertex",
          "normalized": "Cocone a b-\u003eObj(Cod a)b",
          "package": "data-category",
          "partial": "Vertex",
          "signature": "Cocone f n-\u003eObj(Cod f)n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:coconeVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecolimit\u003c/a\u003e\u003c/code\u003e returns the limiting co-cone for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "colimit",
          "package": "data-category",
          "signature": "Obj (Nat j k) f -\u003e Cocone f (Colimit f)",
          "source": "src/Data-Category-Limit.html#colimit",
          "type": "method"
        },
        "index": {
          "description": "colimit returns the limiting co-cone for functor",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "colimit",
          "normalized": "Obj(Nat a b)c-\u003eCocone c(Colimit c)",
          "package": "data-category",
          "signature": "Obj(Nat j k)f-\u003eCocone f(Colimit f)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:colimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colimit functor is left adjoint to the diagonal functor.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "colimitAdj",
          "package": "data-category",
          "signature": "Adjunction k (Nat j k) (ColimitFunctor j k) (Diag j k)",
          "source": "src/Data-Category-Limit.html#colimitAdj",
          "type": "function"
        },
        "index": {
          "description": "The colimit functor is left adjoint to the diagonal functor",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "colimitAdj",
          "package": "data-category",
          "partial": "Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:colimitAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecolimitFactorizer\u003c/a\u003e\u003c/code\u003e shows that the limiting co-cone is universal &#8211; i.e. any other co-cone of \u003ccode\u003ef\u003c/code\u003e factors through it\n   by returning the morphism between the vertices of the cones.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "colimitFactorizer",
          "package": "data-category",
          "signature": "Obj (Nat j k) f -\u003e forall n.  Cocone f n -\u003e k (Colimit f) n",
          "source": "src/Data-Category-Limit.html#colimitFactorizer",
          "type": "method"
        },
        "index": {
          "description": "colimitFactorizer shows that the limiting co-cone is universal i.e any other co-cone of factors through it by returning the morphism between the vertices of the cones",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "colimitFactorizer",
          "normalized": "Obj(Nat a b)c-\u003ed e Cocone c f-\u003eb(Colimit c)f",
          "package": "data-category",
          "partial": "Factorizer",
          "signature": "Obj(Nat j k)f-\u003eforall n. Cocone f n-\u003ek(Colimit f)n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:colimitFactorizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vertex (or apex) of a cone.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "coneVertex",
          "package": "data-category",
          "signature": "Cone f n -\u003e Obj (Cod f) n",
          "source": "src/Data-Category-Limit.html#coneVertex",
          "type": "function"
        },
        "index": {
          "description": "The vertex or apex of cone",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "coneVertex",
          "normalized": "Cone a b-\u003eObj(Cod a)b",
          "package": "data-category",
          "partial": "Vertex",
          "signature": "Cone f n-\u003eObj(Cod f)n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:coneVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "initialObject",
          "package": "data-category",
          "signature": "Obj k (InitialObject k)",
          "source": "src/Data-Category-Limit.html#initialObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "initialObject",
          "package": "data-category",
          "partial": "Object",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:initialObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "initialize",
          "package": "data-category",
          "signature": "Obj k a -\u003e k (InitialObject k) a",
          "source": "src/Data-Category-Limit.html#initialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "initialize",
          "normalized": "Obj a b-\u003ea(InitialObject a)b",
          "package": "data-category",
          "signature": "Obj k a-\u003ek(InitialObject k)a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "inj1",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e k x (BinaryCoproduct k x y)",
          "source": "src/Data-Category-Limit.html#inj1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "inj1",
          "normalized": "Obj a b-\u003eObj a c-\u003ea b(BinaryCoproduct a b c)",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003ek x(BinaryCoproduct k x y)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:inj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "inj2",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e k y (BinaryCoproduct k x y)",
          "source": "src/Data-Category-Limit.html#inj2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "inj2",
          "normalized": "Obj a b-\u003eObj a c-\u003ea c(BinaryCoproduct a b c)",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003ek y(BinaryCoproduct k x y)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:inj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e returns the limiting cone for a functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "limit",
          "package": "data-category",
          "signature": "Obj (Nat j k) f -\u003e Cone f (Limit f)",
          "source": "src/Data-Category-Limit.html#limit",
          "type": "method"
        },
        "index": {
          "description": "limit returns the limiting cone for functor",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "limit",
          "normalized": "Obj(Nat a b)c-\u003eCone c(Limit c)",
          "package": "data-category",
          "signature": "Obj(Nat j k)f-\u003eCone f(Limit f)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe limit functor is right adjoint to the diagonal functor.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "limitAdj",
          "package": "data-category",
          "signature": "Adjunction (Nat j k) k (Diag j k) (LimitFunctor j k)",
          "source": "src/Data-Category-Limit.html#limitAdj",
          "type": "function"
        },
        "index": {
          "description": "The limit functor is right adjoint to the diagonal functor",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "limitAdj",
          "package": "data-category",
          "partial": "Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:limitAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elimitFactorizer\u003c/a\u003e\u003c/code\u003e shows that the limiting cone is universal &#8211; i.e. any other cone of \u003ccode\u003ef\u003c/code\u003e factors through it\n   by returning the morphism between the vertices of the cones.\n\u003c/p\u003e",
          "module": "Data.Category.Limit",
          "name": "limitFactorizer",
          "package": "data-category",
          "signature": "Obj (Nat j k) f -\u003e forall n.  Cone f n -\u003e k n (Limit f)",
          "source": "src/Data-Category-Limit.html#limitFactorizer",
          "type": "method"
        },
        "index": {
          "description": "limitFactorizer shows that the limiting cone is universal i.e any other cone of factors through it by returning the morphism between the vertices of the cones",
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "limitFactorizer",
          "normalized": "Obj(Nat a b)c-\u003ed e Cone c f-\u003eb f(Limit c)",
          "package": "data-category",
          "partial": "Factorizer",
          "signature": "Obj(Nat j k)f-\u003eforall n. Cone f n-\u003ek n(Limit f)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:limitFactorizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "proj1",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e k (BinaryProduct k x y) x",
          "source": "src/Data-Category-Limit.html#proj1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "proj1",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(BinaryProduct a b c)b",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003ek(BinaryProduct k x y)x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:proj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "proj2",
          "package": "data-category",
          "signature": "Obj k x -\u003e Obj k y -\u003e k (BinaryProduct k x y) y",
          "source": "src/Data-Category-Limit.html#proj2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "proj2",
          "normalized": "Obj a b-\u003eObj a c-\u003ea(BinaryProduct a b c)c",
          "package": "data-category",
          "signature": "Obj k x-\u003eObj k y-\u003ek(BinaryProduct k x y)y",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:proj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "terminalObject",
          "package": "data-category",
          "signature": "Obj k (TerminalObject k)",
          "source": "src/Data-Category-Limit.html#terminalObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "terminalObject",
          "package": "data-category",
          "partial": "Object",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:terminalObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Limit",
          "name": "terminate",
          "package": "data-category",
          "signature": "Obj k a -\u003e k a (TerminalObject k)",
          "source": "src/Data-Category-Limit.html#terminate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Limit",
          "module": "Data.Category.Limit",
          "name": "terminate",
          "normalized": "Obj a b-\u003ea b(TerminalObject a)",
          "package": "data-category",
          "signature": "Obj k a-\u003ek a(TerminalObject k)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Limit.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "Monoidal",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "Monoidal",
          "package": "data-category",
          "partial": "Monoidal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comonad is a comonoid in the category of endofunctors.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "Comonad",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#Comonad",
          "type": "type"
        },
        "index": {
          "description": "comonad is comonoid in the category of endofunctors",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "Comonad",
          "package": "data-category",
          "partial": "Comonad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:Comonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eComonoidObject f a\u003c/code\u003e defines a comonoid \u003ccode\u003ea\u003c/code\u003e in a comonoidal category with tensor product \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "ComonoidObject",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#ComonoidObject",
          "type": "data"
        },
        "index": {
          "description": "ComonoidObject defines comonoid in comonoidal category with tensor product",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "ComonoidObject",
          "package": "data-category",
          "partial": "Comonoid Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:ComonoidObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad is a monoid in the category of endofunctors.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "Monad",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#Monad",
          "type": "type"
        },
        "index": {
          "description": "monad is monoid in the category of endofunctors",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "Monad",
          "package": "data-category",
          "partial": "Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "MonoidAsCategory",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#MonoidAsCategory",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "MonoidAsCategory",
          "package": "data-category",
          "partial": "Monoid As Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:MonoidAsCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonoidObject f a\u003c/code\u003e defines a monoid \u003ccode\u003ea\u003c/code\u003e in a monoidal category with tensor product \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "MonoidObject",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#MonoidObject",
          "type": "data"
        },
        "index": {
          "description": "MonoidObject defines monoid in monoidal category with tensor product",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "MonoidObject",
          "package": "data-category",
          "partial": "Monoid Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:MonoidObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoidal category is a category with some kind of tensor product.\n   A tensor product is a bifunctor, with a unit object.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "TensorProduct",
          "package": "data-category",
          "source": "src/Data-Category-Monoidal.html#TensorProduct",
          "type": "class"
        },
        "index": {
          "description": "monoidal category is category with some kind of tensor product tensor product is bifunctor with unit object",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "TensorProduct",
          "package": "data-category",
          "partial": "Tensor Product",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#t:TensorProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "ComonoidObject",
          "package": "data-category",
          "signature": "ComonoidObject",
          "source": "src/Data-Category-Monoidal.html#ComonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "ComonoidObject",
          "package": "data-category",
          "partial": "Comonoid Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:ComonoidObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "MonoidObject",
          "package": "data-category",
          "signature": "MonoidObject",
          "source": "src/Data-Category-Monoidal.html#MonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "MonoidObject",
          "package": "data-category",
          "partial": "Monoid Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:MonoidObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "MonoidValue",
          "package": "data-category",
          "signature": "f -\u003e MonoidObject f m -\u003e k (Unit f) m -\u003e MonoidAsCategory f m m m",
          "source": "src/Data-Category-Monoidal.html#MonoidAsCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "MonoidValue",
          "normalized": "a-\u003eMonoidObject a b-\u003ec(Unit a)b-\u003eMonoidAsCategory a b b b",
          "package": "data-category",
          "partial": "Monoid Value",
          "signature": "f-\u003eMonoidObject f m-\u003ek(Unit f)m-\u003eMonoidAsCategory f m m m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:MonoidValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery adjunction gives rise to an associated comonad.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "adjunctionComonad",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Comonad (f :.: g)",
          "source": "src/Data-Category-Monoidal.html#adjunctionComonad",
          "type": "function"
        },
        "index": {
          "description": "Every adjunction gives rise to an associated comonad",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "adjunctionComonad",
          "normalized": "Adjunction a b c d-\u003eComonad(c d)",
          "package": "data-category",
          "partial": "Comonad",
          "signature": "Adjunction c d f g-\u003eComonad(f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:adjunctionComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery adjunction gives rise to an associated monad.\n\u003c/p\u003e",
          "module": "Data.Category.Monoidal",
          "name": "adjunctionMonad",
          "package": "data-category",
          "signature": "Adjunction c d f g -\u003e Monad (g :.: f)",
          "source": "src/Data-Category-Monoidal.html#adjunctionMonad",
          "type": "function"
        },
        "index": {
          "description": "Every adjunction gives rise to an associated monad",
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "adjunctionMonad",
          "normalized": "Adjunction a b c d-\u003eMonad(d c)",
          "package": "data-category",
          "partial": "Monad",
          "signature": "Adjunction c d f g-\u003eMonad(g f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:adjunctionMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "associator",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e Obj k b -\u003e Obj k c -\u003e k (f :% (f :% (a, b), c)) (f :% (a, f :% (b, c)))",
          "source": "src/Data-Category-Monoidal.html#associator",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "associator",
          "normalized": "a-\u003eObj b c-\u003eObj b d-\u003eObj b e-\u003eb(a(a(c,d),e))(a(c,a(d,e)))",
          "package": "data-category",
          "signature": "f-\u003eObj k a-\u003eObj k b-\u003eObj k c-\u003ek(f(f(a,b),c))(f(a,f(b,c)))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:associator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "associatorInv",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e Obj k b -\u003e Obj k c -\u003e k (f :% (a, f :% (b, c))) (f :% (f :% (a, b), c))",
          "source": "src/Data-Category-Monoidal.html#associatorInv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "associatorInv",
          "normalized": "a-\u003eObj b c-\u003eObj b d-\u003eObj b e-\u003eb(a(c,a(d,e)))(a(a(c,d),e))",
          "package": "data-category",
          "partial": "Inv",
          "signature": "f-\u003eObj k a-\u003eObj k b-\u003eObj k c-\u003ek(f(a,f(b,c)))(f(f(a,b),c))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:associatorInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "comultiply",
          "package": "data-category",
          "signature": "k a (f :% (a, a))",
          "source": "src/Data-Category-Monoidal.html#ComonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "comultiply",
          "normalized": "a b(c(b,b))",
          "package": "data-category",
          "signature": "k a(f(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:comultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "counit",
          "package": "data-category",
          "signature": "k a (Unit f)",
          "source": "src/Data-Category-Monoidal.html#ComonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "counit",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "leftUnitor",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e k (f :% (Unit f, a)) a",
          "source": "src/Data-Category-Monoidal.html#leftUnitor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "leftUnitor",
          "normalized": "a-\u003eObj b c-\u003eb(a(Unit a,c))c",
          "package": "data-category",
          "partial": "Unitor",
          "signature": "f-\u003eObj k a-\u003ek(f(Unit f,a))a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:leftUnitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "leftUnitorInv",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e k a (f :% (Unit f, a))",
          "source": "src/Data-Category-Monoidal.html#leftUnitorInv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "leftUnitorInv",
          "normalized": "a-\u003eObj b c-\u003eb c(a(Unit a,c))",
          "package": "data-category",
          "partial": "Unitor Inv",
          "signature": "f-\u003eObj k a-\u003ek a(f(Unit f,a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:leftUnitorInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "mkComonad",
          "package": "data-category",
          "signature": "f -\u003e (forall a.  Obj k a -\u003e Component f (Id k) a) -\u003e (forall a.  Obj k a -\u003e Component f (f :.: f) a) -\u003e Comonad f",
          "source": "src/Data-Category-Monoidal.html#mkComonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "mkComonad",
          "normalized": "a-\u003e(b c Obj d e-\u003eComponent a(Id d)e)-\u003e(b c Obj d e-\u003eComponent a(a a)e)-\u003eComonad a",
          "package": "data-category",
          "partial": "Comonad",
          "signature": "f-\u003e(forall a. Obj k a-\u003eComponent f(Id k)a)-\u003e(forall a. Obj k a-\u003eComponent f(f f)a)-\u003eComonad f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:mkComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "mkMonad",
          "package": "data-category",
          "signature": "f -\u003e (forall a.  Obj k a -\u003e Component (Id k) f a) -\u003e (forall a.  Obj k a -\u003e Component (f :.: f) f a) -\u003e Monad f",
          "source": "src/Data-Category-Monoidal.html#mkMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "mkMonad",
          "normalized": "a-\u003e(b c Obj d e-\u003eComponent(Id d)a e)-\u003e(b c Obj d e-\u003eComponent(a a)a e)-\u003eMonad a",
          "package": "data-category",
          "partial": "Monad",
          "signature": "f-\u003e(forall a. Obj k a-\u003eComponent(Id k)f a)-\u003e(forall a. Obj k a-\u003eComponent(f f)f a)-\u003eMonad f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:mkMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "monadFunctor",
          "package": "data-category",
          "signature": "Monad f -\u003e f",
          "source": "src/Data-Category-Monoidal.html#monadFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "monadFunctor",
          "normalized": "Monad a-\u003ea",
          "package": "data-category",
          "partial": "Functor",
          "signature": "Monad f-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:monadFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "multiply",
          "package": "data-category",
          "signature": "k (f :% (a, a)) a",
          "source": "src/Data-Category-Monoidal.html#MonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "multiply",
          "normalized": "a(b(c,c))c",
          "package": "data-category",
          "signature": "k(f(a,a))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "rightUnitor",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e k (f :% (a, Unit f)) a",
          "source": "src/Data-Category-Monoidal.html#rightUnitor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "rightUnitor",
          "normalized": "a-\u003eObj b c-\u003eb(a(c,Unit a))c",
          "package": "data-category",
          "partial": "Unitor",
          "signature": "f-\u003eObj k a-\u003ek(f(a,Unit f))a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:rightUnitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "rightUnitorInv",
          "package": "data-category",
          "signature": "f -\u003e Obj k a -\u003e k a (f :% (a, Unit f))",
          "source": "src/Data-Category-Monoidal.html#rightUnitorInv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "rightUnitorInv",
          "normalized": "a-\u003eObj b c-\u003eb c(a(c,Unit a))",
          "package": "data-category",
          "partial": "Unitor Inv",
          "signature": "f-\u003eObj k a-\u003ek a(f(a,Unit f))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:rightUnitorInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "unit",
          "package": "data-category",
          "signature": "k (Unit f) a",
          "source": "src/Data-Category-Monoidal.html#MonoidObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "unit",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Monoidal",
          "name": "unitObject",
          "package": "data-category",
          "signature": "f -\u003e Obj (Cod f) (Unit f)",
          "source": "src/Data-Category-Monoidal.html#unitObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category Monoidal",
          "module": "Data.Category.Monoidal",
          "name": "unitObject",
          "normalized": "a-\u003eObj(Cod a)(Unit a)",
          "package": "data-category",
          "partial": "Object",
          "signature": "f-\u003eObj(Cod f)(Unit f)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Monoidal.html#v:unitObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "NNO",
          "package": "data-category",
          "source": "src/Data-Category-NNO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "NNO",
          "package": "data-category",
          "partial": "NNO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "HasNaturalNumberObject",
          "package": "data-category",
          "source": "src/Data-Category-NNO.html#HasNaturalNumberObject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "HasNaturalNumberObject",
          "package": "data-category",
          "partial": "Has Natural Number Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#t:HasNaturalNumberObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "Nat",
          "package": "data-category",
          "source": "src/Data-Category-NNO.html#Nat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "Nat",
          "package": "data-category",
          "partial": "Nat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "NatNum",
          "package": "data-category",
          "source": "src/Data-Category-NNO.html#NatNum",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "NatNum",
          "package": "data-category",
          "partial": "Nat Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#t:NatNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "PrimRec",
          "package": "data-category",
          "source": "src/Data-Category-NNO.html#PrimRec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "PrimRec",
          "package": "data-category",
          "partial": "Prim Rec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#t:PrimRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "PrimRec",
          "package": "data-category",
          "signature": "PrimRec z s",
          "source": "src/Data-Category-NNO.html#PrimRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "PrimRec",
          "package": "data-category",
          "partial": "Prim Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:PrimRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "S",
          "package": "data-category",
          "signature": "S NatNum",
          "source": "src/Data-Category-NNO.html#NatNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "S",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "Z",
          "package": "data-category",
          "signature": "Z",
          "source": "src/Data-Category-NNO.html#NatNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "Z",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "primRec",
          "package": "data-category",
          "signature": "k (TerminalObject k) a -\u003e k a a -\u003e k (NaturalNumberObject k) a",
          "source": "src/Data-Category-NNO.html#primRec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "primRec",
          "normalized": "a(TerminalObject a)b-\u003ea b b-\u003ea(NaturalNumberObject a)b",
          "package": "data-category",
          "partial": "Rec",
          "signature": "k(TerminalObject k)a-\u003ek a a-\u003ek(NaturalNumberObject k)a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:primRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "succ",
          "package": "data-category",
          "signature": "k (NaturalNumberObject k) (NaturalNumberObject k)",
          "source": "src/Data-Category-NNO.html#succ",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "succ",
          "package": "data-category",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NNO",
          "name": "zero",
          "package": "data-category",
          "signature": "k (TerminalObject k) (NaturalNumberObject k)",
          "source": "src/Data-Category-NNO.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category NNO",
          "module": "Data.Category.NNO",
          "name": "zero",
          "package": "data-category",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NNO.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "NaturalTransformation",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "NaturalTransformation",
          "package": "data-category",
          "partial": "Natural Transformation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ef :~\u003e g\u003c/code\u003e is a natural transformation from functor f to functor g.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": ":~\u003e",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "is natural transformation from functor to functor",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": ":~\u003e",
          "package": "data-category",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for components,\n   which can be useful for helper functions dealing with components.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "Com",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Com",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for components which can be useful for helper functions dealing with components",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Com",
          "package": "data-category",
          "partial": "Com",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Com"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA component for an object \u003ccode\u003ez\u003c/code\u003e is an arrow from \u003ccode\u003eF z\u003c/code\u003e to \u003ccode\u003eG z\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "Component",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Component",
          "type": "type"
        },
        "index": {
          "description": "component for an object is an arrow from to",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Component",
          "package": "data-category",
          "partial": "Component",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe category of endofunctors.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "Endo",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Endo",
          "type": "type"
        },
        "index": {
          "description": "The category of endofunctors",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Endo",
          "package": "data-category",
          "partial": "Endo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "FunctorCompose",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#FunctorCompose",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "FunctorCompose",
          "package": "data-category",
          "partial": "Functor Compose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:FunctorCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural transformations are built up of components,\n one for each object \u003ccode\u003ez\u003c/code\u003e in the domain category of \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "Nat",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Nat",
          "type": "data"
        },
        "index": {
          "description": "Natural transformations are built up of components one for each object in the domain category of and",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Nat",
          "package": "data-category",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Postcompose",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Postcompose",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Postcompose",
          "package": "data-category",
          "partial": "Postcompose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Postcompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Precompose",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Precompose",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Precompose",
          "package": "data-category",
          "partial": "Precompose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Precompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Wrap",
          "package": "data-category",
          "source": "src/Data-Category-NaturalTransformation.html#Wrap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Wrap",
          "package": "data-category",
          "partial": "Wrap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'n ! a' returns the component for the object \u003ccode\u003ea\u003c/code\u003e of a natural transformation \u003ccode\u003en\u003c/code\u003e.\n   This can be generalized to any arrow (instead of just identity arrows).\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "(!)",
          "package": "data-category",
          "signature": "Nat c d f g -\u003e c a b -\u003e d (f :% a) (g :% b)",
          "source": "src/Data-Category-NaturalTransformation.html#%21",
          "type": "function"
        },
        "index": {
          "description": "returns the component for the object of natural transformation This can be generalized to any arrow instead of just identity arrows",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "(!) !",
          "normalized": "Nat a b c d-\u003ea e f-\u003eb(c e)(d f)",
          "package": "data-category",
          "signature": "Nat c d f g-\u003ec a b-\u003ed(f a)(g b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Com",
          "package": "data-category",
          "signature": "Com",
          "source": "src/Data-Category-NaturalTransformation.html#Com",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Com",
          "package": "data-category",
          "partial": "Com",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:Com"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "FunctorCompose",
          "package": "data-category",
          "signature": "FunctorCompose",
          "source": "src/Data-Category-NaturalTransformation.html#FunctorCompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "FunctorCompose",
          "package": "data-category",
          "partial": "Functor Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:FunctorCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Nat",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e (forall z.  Obj c z -\u003e Component f g z) -\u003e Nat c d f g",
          "source": "src/Data-Category-NaturalTransformation.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Nat",
          "normalized": "a-\u003eb-\u003e(c d Obj e f-\u003eComponent a b f)-\u003eNat e g a b",
          "package": "data-category",
          "partial": "Nat",
          "signature": "f-\u003eg-\u003e(forall z. Obj c z-\u003eComponent f g z)-\u003eNat c d f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Postcompose",
          "package": "data-category",
          "signature": "f -\u003e Postcompose f c",
          "source": "src/Data-Category-NaturalTransformation.html#Postcompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Postcompose",
          "normalized": "a-\u003ePostcompose a b",
          "package": "data-category",
          "partial": "Postcompose",
          "signature": "f-\u003ePostcompose f c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:Postcompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Precompose",
          "package": "data-category",
          "signature": "f -\u003e Precompose f d",
          "source": "src/Data-Category-NaturalTransformation.html#Precompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Precompose",
          "normalized": "a-\u003ePrecompose a b",
          "package": "data-category",
          "partial": "Precompose",
          "signature": "f-\u003ePrecompose f d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:Precompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "Wrap",
          "package": "data-category",
          "signature": "Wrap f h",
          "source": "src/Data-Category-NaturalTransformation.html#Wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "Wrap",
          "package": "data-category",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "compAssoc",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e h -\u003e Nat (Dom h) (Cod f) ((f :.: g) :.: h) (f :.: (g :.: h))",
          "source": "src/Data-Category-NaturalTransformation.html#compAssoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "compAssoc",
          "normalized": "a-\u003eb-\u003ec-\u003eNat(Dom c)(Cod a)((a b)c)(a(b c))",
          "package": "data-category",
          "partial": "Assoc",
          "signature": "f-\u003eg-\u003eh-\u003eNat(Dom h)(Cod f)((f g)h)(f(g h))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:compAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "compAssocInv",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e h -\u003e Nat (Dom h) (Cod f) (f :.: (g :.: h)) ((f :.: g) :.: h)",
          "source": "src/Data-Category-NaturalTransformation.html#compAssocInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "compAssocInv",
          "normalized": "a-\u003eb-\u003ec-\u003eNat(Dom c)(Cod a)(a(b c))((a b)c)",
          "package": "data-category",
          "partial": "Assoc Inv",
          "signature": "f-\u003eg-\u003eh-\u003eNat(Dom h)(Cod f)(f(g h))((f g)h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:compAssocInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "constPostcomp",
          "package": "data-category",
          "signature": "Const (Cod f) c2 x -\u003e f -\u003e Nat (Dom f) c2 (Const (Cod f) c2 x :.: f) (Const (Dom f) c2 x)",
          "source": "src/Data-Category-NaturalTransformation.html#constPostcomp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "constPostcomp",
          "normalized": "Const(Cod a)b c-\u003ea-\u003eNat(Dom a)b(Const(Cod a)b c a)(Const(Dom a)b c)",
          "package": "data-category",
          "partial": "Postcomp",
          "signature": "Const(Cod f)c x-\u003ef-\u003eNat(Dom f)c(Const(Cod f)c x f)(Const(Dom f)c x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:constPostcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "constPostcompInv",
          "package": "data-category",
          "signature": "Const (Cod f) c2 x -\u003e f -\u003e Nat (Dom f) c2 (Const (Dom f) c2 x) (Const (Cod f) c2 x :.: f)",
          "source": "src/Data-Category-NaturalTransformation.html#constPostcompInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "constPostcompInv",
          "normalized": "Const(Cod a)b c-\u003ea-\u003eNat(Dom a)b(Const(Dom a)b c)(Const(Cod a)b c a)",
          "package": "data-category",
          "partial": "Postcomp Inv",
          "signature": "Const(Cod f)c x-\u003ef-\u003eNat(Dom f)c(Const(Dom f)c x)(Const(Cod f)c x f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:constPostcompInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "constPrecomp",
          "package": "data-category",
          "signature": "Const c1 (Dom f) x -\u003e f -\u003e Nat c1 (Cod f) (f :.: Const c1 (Dom f) x) (Const c1 (Cod f) (f :% x))",
          "source": "src/Data-Category-NaturalTransformation.html#constPrecomp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "constPrecomp",
          "normalized": "Const a(Dom b)c-\u003eb-\u003eNat a(Cod b)(b Const a(Dom b)c)(Const a(Cod b)(b c))",
          "package": "data-category",
          "partial": "Precomp",
          "signature": "Const c(Dom f)x-\u003ef-\u003eNat c(Cod f)(f Const c(Dom f)x)(Const c(Cod f)(f x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:constPrecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "constPrecompInv",
          "package": "data-category",
          "signature": "Const c1 (Dom f) x -\u003e f -\u003e Nat c1 (Cod f) (Const c1 (Cod f) (f :% x)) (f :.: Const c1 (Dom f) x)",
          "source": "src/Data-Category-NaturalTransformation.html#constPrecompInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "constPrecompInv",
          "normalized": "Const a(Dom b)c-\u003eb-\u003eNat a(Cod b)(Const a(Cod b)(b c))(b Const a(Dom b)c)",
          "package": "data-category",
          "partial": "Precomp Inv",
          "signature": "Const c(Dom f)x-\u003ef-\u003eNat c(Cod f)(Const c(Cod f)(f x))(f Const c(Dom f)x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:constPrecompInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "idPostcomp",
          "package": "data-category",
          "signature": "f -\u003e Nat (Dom f) (Cod f) (Id (Cod f) :.: f) f",
          "source": "src/Data-Category-NaturalTransformation.html#idPostcomp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "idPostcomp",
          "normalized": "a-\u003eNat(Dom a)(Cod a)(Id(Cod a)a)a",
          "package": "data-category",
          "partial": "Postcomp",
          "signature": "f-\u003eNat(Dom f)(Cod f)(Id(Cod f)f)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:idPostcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "idPostcompInv",
          "package": "data-category",
          "signature": "f -\u003e Nat (Dom f) (Cod f) f (Id (Cod f) :.: f)",
          "source": "src/Data-Category-NaturalTransformation.html#idPostcompInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "idPostcompInv",
          "normalized": "a-\u003eNat(Dom a)(Cod a)a(Id(Cod a)a)",
          "package": "data-category",
          "partial": "Postcomp Inv",
          "signature": "f-\u003eNat(Dom f)(Cod f)f(Id(Cod f)f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:idPostcompInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "idPrecomp",
          "package": "data-category",
          "signature": "f -\u003e Nat (Dom f) (Cod f) (f :.: Id (Dom f)) f",
          "source": "src/Data-Category-NaturalTransformation.html#idPrecomp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "idPrecomp",
          "normalized": "a-\u003eNat(Dom a)(Cod a)(a Id(Dom a))a",
          "package": "data-category",
          "partial": "Precomp",
          "signature": "f-\u003eNat(Dom f)(Cod f)(f Id(Dom f))f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:idPrecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "idPrecompInv",
          "package": "data-category",
          "signature": "f -\u003e Nat (Dom f) (Cod f) f (f :.: Id (Dom f))",
          "source": "src/Data-Category-NaturalTransformation.html#idPrecompInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "idPrecompInv",
          "normalized": "a-\u003eNat(Dom a)(Cod a)a(a Id(Dom a))",
          "package": "data-category",
          "partial": "Precomp Inv",
          "signature": "f-\u003eNat(Dom f)(Cod f)f(f Id(Dom f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:idPrecompInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity natural transformation of a functor.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "natId",
          "package": "data-category",
          "signature": "f -\u003e Nat (Dom f) (Cod f) f f",
          "source": "src/Data-Category-NaturalTransformation.html#natId",
          "type": "function"
        },
        "index": {
          "description": "The identity natural transformation of functor",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "natId",
          "normalized": "a-\u003eNat(Dom a)(Cod a)a a",
          "package": "data-category",
          "partial": "Id",
          "signature": "f-\u003eNat(Dom f)(Cod f)f f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:natId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal composition of natural transformations.\n\u003c/p\u003e",
          "module": "Data.Category.NaturalTransformation",
          "name": "o",
          "package": "data-category",
          "signature": "Nat d e j k -\u003e Nat c d f g -\u003e Nat c e (j :.: f) (k :.: g)",
          "source": "src/Data-Category-NaturalTransformation.html#o",
          "type": "function"
        },
        "index": {
          "description": "Horizontal composition of natural transformations",
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "o",
          "normalized": "Nat a b c d-\u003eNat e a f g-\u003eNat e b(c f)(d g)",
          "package": "data-category",
          "signature": "Nat d e j k-\u003eNat c d f g-\u003eNat c e(j f)(k g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "srcF",
          "package": "data-category",
          "signature": "Nat c d f g -\u003e f",
          "source": "src/Data-Category-NaturalTransformation.html#srcF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "srcF",
          "normalized": "Nat a b c d-\u003ec",
          "package": "data-category",
          "signature": "Nat c d f g-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:srcF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "tgtF",
          "package": "data-category",
          "signature": "Nat c d f g -\u003e g",
          "source": "src/Data-Category-NaturalTransformation.html#tgtF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "tgtF",
          "normalized": "Nat a b c d-\u003ed",
          "package": "data-category",
          "signature": "Nat c d f g-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:tgtF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.NaturalTransformation",
          "name": "unCom",
          "package": "data-category",
          "signature": "Component f g z",
          "source": "src/Data-Category-NaturalTransformation.html#Com",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category NaturalTransformation",
          "module": "Data.Category.NaturalTransformation",
          "name": "unCom",
          "package": "data-category",
          "partial": "Com",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-NaturalTransformation.html#v:unCom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Presheaf",
          "name": "Presheaf",
          "package": "data-category",
          "source": "src/Data-Category-Presheaf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Presheaf",
          "module": "Data.Category.Presheaf",
          "name": "Presheaf",
          "package": "data-category",
          "partial": "Presheaf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Presheaf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Presheaf",
          "name": "PShExponential",
          "package": "data-category",
          "source": "src/Data-Category-Presheaf.html#PShExponential",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Presheaf",
          "module": "Data.Category.Presheaf",
          "name": "PShExponential",
          "package": "data-category",
          "partial": "PSh Exponential",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Presheaf.html#t:PShExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Presheaf",
          "name": "Presheaves",
          "package": "data-category",
          "source": "src/Data-Category-Presheaf.html#Presheaves",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Presheaf",
          "module": "Data.Category.Presheaf",
          "name": "Presheaves",
          "package": "data-category",
          "partial": "Presheaves",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Presheaf.html#t:Presheaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Presheaf",
          "name": "pshExponential",
          "package": "data-category",
          "signature": "Obj (Presheaves k) y -\u003e Obj (Presheaves k) z -\u003e PShExponential k y z",
          "source": "src/Data-Category-Presheaf.html#pshExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Presheaf",
          "module": "Data.Category.Presheaf",
          "name": "pshExponential",
          "normalized": "Obj(Presheaves a)b-\u003eObj(Presheaves a)c-\u003ePShExponential a b c",
          "package": "data-category",
          "partial": "Exponential",
          "signature": "Obj(Presheaves k)y-\u003eObj(Presheaves k)z-\u003ePShExponential k y z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Presheaf.html#v:pshExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Product",
          "name": "Product",
          "package": "data-category",
          "source": "src/Data-Category-Product.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Product",
          "module": "Data.Category.Product",
          "name": "Product",
          "package": "data-category",
          "partial": "Product",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Product.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Product",
          "name": ":**:",
          "package": "data-category",
          "source": "src/Data-Category-Product.html#%3A%2A%2A%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Product",
          "module": "Data.Category.Product",
          "name": ":**:",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Product.html#t::-42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Product",
          "name": ":**:",
          "package": "data-category",
          "signature": "c1 a1 b1 -\u003e c2 a2 b2 -\u003e :**: c1 c2 (a1, a2) (b1, b2)",
          "source": "src/Data-Category-Product.html#%3A%2A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Product",
          "module": "Data.Category.Product",
          "name": ":**:",
          "normalized": "a b c-\u003ea b c-\u003e**a a(b,b)(c,c)",
          "package": "data-category",
          "signature": "c a b-\u003ec a b-\u003e**c c(a,a)(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Product.html#v::-42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "RepresentableFunctor",
          "package": "data-category",
          "source": "src/Data-Category-RepresentableFunctor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "RepresentableFunctor",
          "package": "data-category",
          "partial": "Representable Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "InitialUniversal",
          "package": "data-category",
          "source": "src/Data-Category-RepresentableFunctor.html#InitialUniversal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "InitialUniversal",
          "package": "data-category",
          "partial": "Initial Universal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#t:InitialUniversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "Representable",
          "package": "data-category",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "Representable",
          "package": "data-category",
          "partial": "Representable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#t:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "TerminalUniversal",
          "package": "data-category",
          "source": "src/Data-Category-RepresentableFunctor.html#TerminalUniversal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "TerminalUniversal",
          "package": "data-category",
          "partial": "Terminal Universal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#t:TerminalUniversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "Representable",
          "package": "data-category",
          "signature": "Representable",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "Representable",
          "package": "data-category",
          "partial": "Representable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:Representable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "contravariantHomRepr",
          "package": "data-category",
          "signature": "Obj k x -\u003e Representable (k :-*: x) x",
          "source": "src/Data-Category-RepresentableFunctor.html#contravariantHomRepr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "contravariantHomRepr",
          "normalized": "Obj a b-\u003eRepresentable(a*b)b",
          "package": "data-category",
          "partial": "Hom Repr",
          "signature": "Obj k x-\u003eRepresentable(k*x)x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:contravariantHomRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "covariantHomRepr",
          "package": "data-category",
          "signature": "Obj k x -\u003e Representable (x :*-: k) x",
          "source": "src/Data-Category-RepresentableFunctor.html#covariantHomRepr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "covariantHomRepr",
          "normalized": "Obj a b-\u003eRepresentable(b*a)b",
          "package": "data-category",
          "partial": "Hom Repr",
          "signature": "Obj k x-\u003eRepresentable(x*k)x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:covariantHomRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn initial universal property, a universal morphism from x to u.\n\u003c/p\u003e",
          "module": "Data.Category.RepresentableFunctor",
          "name": "initialUniversal",
          "package": "data-category",
          "signature": "u -\u003e Obj (Dom u) a -\u003e Cod u x (u :% a) -\u003e (forall y.  Obj (Dom u) y -\u003e Cod u x (u :% y) -\u003e Dom u a y) -\u003e InitialUniversal x u a",
          "source": "src/Data-Category-RepresentableFunctor.html#initialUniversal",
          "type": "function"
        },
        "index": {
          "description": "An initial universal property universal morphism from to",
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "initialUniversal",
          "normalized": "a-\u003eObj(Dom a)b-\u003eCod a c(a b)-\u003e(d e Obj(Dom a)f-\u003eCod a c(a f)-\u003eDom a b f)-\u003eInitialUniversal c a b",
          "package": "data-category",
          "partial": "Universal",
          "signature": "u-\u003eObj(Dom u)a-\u003eCod u x(u a)-\u003e(forall y. Obj(Dom u)y-\u003eCod u x(u y)-\u003eDom u a y)-\u003eInitialUniversal x u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:initialUniversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "represent",
          "package": "data-category",
          "signature": "Obj k z -\u003e (f :% z) -\u003e k repObj z",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "represent",
          "normalized": "Obj a b-\u003e(c b)-\u003ea d b",
          "package": "data-category",
          "signature": "Obj k z-\u003e(f z)-\u003ek repObj z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:represent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "representedFunctor",
          "package": "data-category",
          "signature": "f",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "representedFunctor",
          "package": "data-category",
          "partial": "Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:representedFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "representingObject",
          "package": "data-category",
          "signature": "Obj (Dom f) repObj",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "representingObject",
          "package": "data-category",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:representingObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA terminal universal property, a universal morphism from u to x.\n\u003c/p\u003e",
          "module": "Data.Category.RepresentableFunctor",
          "name": "terminalUniversal",
          "package": "data-category",
          "signature": "u -\u003e Obj (Dom u) a -\u003e Cod u (u :% a) x -\u003e (forall y.  Obj (Dom u) y -\u003e Cod u (u :% y) x -\u003e Dom u y a) -\u003e TerminalUniversal x u a",
          "source": "src/Data-Category-RepresentableFunctor.html#terminalUniversal",
          "type": "function"
        },
        "index": {
          "description": "terminal universal property universal morphism from to",
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "terminalUniversal",
          "normalized": "a-\u003eObj(Dom a)b-\u003eCod a(a b)c-\u003e(d e Obj(Dom a)f-\u003eCod a(a f)c-\u003eDom a f b)-\u003eTerminalUniversal c a b",
          "package": "data-category",
          "partial": "Universal",
          "signature": "u-\u003eObj(Dom u)a-\u003eCod u(u a)x-\u003e(forall y. Obj(Dom u)y-\u003eCod u(u y)x-\u003eDom u y a)-\u003eTerminalUniversal x u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:terminalUniversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "universalElement",
          "package": "data-category",
          "signature": "f :% repObj",
          "source": "src/Data-Category-RepresentableFunctor.html#Representable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "universalElement",
          "package": "data-category",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:universalElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.RepresentableFunctor",
          "name": "unrepresent",
          "package": "data-category",
          "signature": "Representable f repObj -\u003e k repObj z -\u003e f :% z",
          "source": "src/Data-Category-RepresentableFunctor.html#unrepresent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category RepresentableFunctor",
          "module": "Data.Category.RepresentableFunctor",
          "name": "unrepresent",
          "normalized": "Representable a b-\u003ec b d-\u003ea d",
          "package": "data-category",
          "signature": "Representable f repObj-\u003ek repObj z-\u003ef z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-RepresentableFunctor.html#v:unrepresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe (augmented) simplex category.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Category.Simplex",
          "name": "Simplex",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html",
          "type": "module"
        },
        "index": {
          "description": "The augmented simplex category",
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Simplex",
          "package": "data-category",
          "partial": "Simplex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Add",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Add",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Add",
          "package": "data-category",
          "partial": "Add",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Fin",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Fin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Fin",
          "package": "data-category",
          "partial": "Fin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Forget",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Forget",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Forget",
          "package": "data-category",
          "partial": "Forget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Replicate",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Replicate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Replicate",
          "package": "data-category",
          "partial": "Replicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "S",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#S",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "S",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Simplex",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Simplex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Simplex",
          "package": "data-category",
          "partial": "Simplex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Simplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Z",
          "package": "data-category",
          "source": "src/Data-Category-Simplex.html#Z",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Z",
          "package": "data-category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Add",
          "package": "data-category",
          "signature": "Add",
          "source": "src/Data-Category-Simplex.html#Add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Add",
          "package": "data-category",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Forget",
          "package": "data-category",
          "signature": "Forget",
          "source": "src/Data-Category-Simplex.html#Forget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Forget",
          "package": "data-category",
          "partial": "Forget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Fs",
          "package": "data-category",
          "signature": "Fin n -\u003e Fin (S n)",
          "source": "src/Data-Category-Simplex.html#Fin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Fs",
          "normalized": "Fin a-\u003eFin(S a)",
          "package": "data-category",
          "partial": "Fs",
          "signature": "Fin n-\u003eFin(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Fs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Fz",
          "package": "data-category",
          "signature": "Fin (S n)",
          "source": "src/Data-Category-Simplex.html#Fin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Fz",
          "package": "data-category",
          "partial": "Fz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Fz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Replicate",
          "package": "data-category",
          "signature": "Replicate f (MonoidObject f a)",
          "source": "src/Data-Category-Simplex.html#Replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Replicate",
          "package": "data-category",
          "partial": "Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "X",
          "package": "data-category",
          "signature": "Simplex x (S y) -\u003e Simplex (S x) (S y)",
          "source": "src/Data-Category-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "X",
          "normalized": "Simplex a(S b)-\u003eSimplex(S a)(S b)",
          "package": "data-category",
          "signature": "Simplex x(S y)-\u003eSimplex(S x)(S y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Y",
          "package": "data-category",
          "signature": "Simplex x y -\u003e Simplex x (S y)",
          "source": "src/Data-Category-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Y",
          "normalized": "Simplex a b-\u003eSimplex a(S b)",
          "package": "data-category",
          "signature": "Simplex x y-\u003eSimplex x(S y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "Z",
          "package": "data-category",
          "signature": "Simplex Z Z",
          "source": "src/Data-Category-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "Z",
          "package": "data-category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Simplex",
          "name": "suc",
          "package": "data-category",
          "signature": "Obj Simplex n -\u003e Obj Simplex (S n)",
          "source": "src/Data-Category-Simplex.html#suc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "suc",
          "normalized": "Obj Simplex a-\u003eObj Simplex(S a)",
          "package": "data-category",
          "signature": "Obj Simplex n-\u003eObj Simplex(S n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maps \u003ccode\u003e0 -\u003e 1\u003c/code\u003e and \u003ccode\u003e2 -\u003e 1\u003c/code\u003e form a monoid, which is universal, c.f. \u003ccode\u003e\u003ca\u003eReplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Simplex",
          "name": "universalMonoid",
          "package": "data-category",
          "signature": "MonoidObject (CoproductFunctor Simplex) (S Z)",
          "source": "src/Data-Category-Simplex.html#universalMonoid",
          "type": "function"
        },
        "index": {
          "description": "The maps and form monoid which is universal c.f Replicate",
          "hierarchy": "Data Category Simplex",
          "module": "Data.Category.Simplex",
          "name": "universalMonoid",
          "package": "data-category",
          "partial": "Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Simplex.html#v:universalMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Unit",
          "name": "Unit",
          "package": "data-category",
          "source": "src/Data-Category-Unit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Unit",
          "module": "Data.Category.Unit",
          "name": "Unit",
          "package": "data-category",
          "partial": "Unit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Unit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Unit",
          "name": "Unit",
          "package": "data-category",
          "source": "src/Data-Category-Unit.html#Unit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Unit",
          "module": "Data.Category.Unit",
          "name": "Unit",
          "package": "data-category",
          "partial": "Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Unit.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Unit",
          "name": "Unit",
          "package": "data-category",
          "signature": "Unit () ()",
          "source": "src/Data-Category-Unit.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Unit",
          "module": "Data.Category.Unit",
          "name": "Unit",
          "normalized": "Unit()()",
          "package": "data-category",
          "partial": "Unit",
          "signature": "Unit()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Unit.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "Void",
          "package": "data-category",
          "source": "src/Data-Category-Void.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "Void",
          "package": "data-category",
          "partial": "Void",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "Magic",
          "package": "data-category",
          "source": "src/Data-Category-Void.html#Magic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "Magic",
          "package": "data-category",
          "partial": "Magic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#t:Magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "Void",
          "package": "data-category",
          "source": "src/Data-Category-Void.html#Void",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "Void",
          "package": "data-category",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "Magic",
          "package": "data-category",
          "signature": "Magic",
          "source": "src/Data-Category-Void.html#Magic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "Magic",
          "package": "data-category",
          "partial": "Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#v:Magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "magic",
          "package": "data-category",
          "signature": "Void a b -\u003e x",
          "source": "src/Data-Category-Void.html#magic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "magic",
          "normalized": "Void a b-\u003ec",
          "package": "data-category",
          "signature": "Void a b-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#v:magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Void",
          "name": "voidNat",
          "package": "data-category",
          "signature": "f -\u003e g -\u003e Nat Void d f g",
          "source": "src/Data-Category-Void.html#voidNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Void",
          "module": "Data.Category.Void",
          "name": "voidNat",
          "normalized": "a-\u003eb-\u003eNat Void c a b",
          "package": "data-category",
          "partial": "Nat",
          "signature": "f-\u003eg-\u003eNat Void d f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Void.html#v:voidNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "source": "src/Data-Category-Yoneda.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "partial": "Yoneda",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "source": "src/Data-Category-Yoneda.html#Yoneda",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "partial": "Yoneda",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#t:Yoneda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Yoneda",
          "name": "YonedaEmbedding",
          "package": "data-category",
          "source": "src/Data-Category-Yoneda.html#YonedaEmbedding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "YonedaEmbedding",
          "package": "data-category",
          "partial": "Yoneda Embedding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#t:YonedaEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "signature": "Yoneda",
          "source": "src/Data-Category-Yoneda.html#Yoneda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "Yoneda",
          "package": "data-category",
          "partial": "Yoneda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#v:Yoneda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromYoneda\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoYoneda\u003c/a\u003e\u003c/code\u003e are together the isomophism from the Yoneda lemma.\n\u003c/p\u003e",
          "module": "Data.Category.Yoneda",
          "name": "fromYoneda",
          "package": "data-category",
          "signature": "f -\u003e Yoneda k f :~\u003e f",
          "source": "src/Data-Category-Yoneda.html#fromYoneda",
          "type": "function"
        },
        "index": {
          "description": "fromYoneda and toYoneda are together the isomophism from the Yoneda lemma",
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "fromYoneda",
          "normalized": "a-\u003eYoneda b a a",
          "package": "data-category",
          "partial": "Yoneda",
          "signature": "f-\u003eYoneda k f f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#v:fromYoneda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category.Yoneda",
          "name": "toYoneda",
          "package": "data-category",
          "signature": "f -\u003e f :~\u003e Yoneda k f",
          "source": "src/Data-Category-Yoneda.html#toYoneda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "toYoneda",
          "normalized": "a-\u003ea Yoneda b a",
          "package": "data-category",
          "partial": "Yoneda",
          "signature": "f-\u003ef Yoneda k f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#v:toYoneda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Yoneda embedding functor, \u003ccode\u003eC -\u003e Set^(C^op)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Category.Yoneda",
          "name": "yonedaEmbedding",
          "package": "data-category",
          "signature": "YonedaEmbedding k",
          "source": "src/Data-Category-Yoneda.html#yonedaEmbedding",
          "type": "function"
        },
        "index": {
          "description": "The Yoneda embedding functor Set op",
          "hierarchy": "Data Category Yoneda",
          "module": "Data.Category.Yoneda",
          "name": "yonedaEmbedding",
          "package": "data-category",
          "partial": "Embedding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category-Yoneda.html#v:yonedaEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "Category",
          "package": "data-category",
          "source": "src/Data-Category.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "Category",
          "package": "data-category",
          "partial": "Category",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003eCategory k\u003c/code\u003e declares the arrow \u003ccode\u003ek\u003c/code\u003e as a category.\n\u003c/p\u003e",
          "module": "Data.Category",
          "name": "Category",
          "package": "data-category",
          "source": "src/Data-Category.html#Category",
          "type": "class"
        },
        "index": {
          "description": "An instance of Category declares the arrow as category",
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "Category",
          "package": "data-category",
          "partial": "Category",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhenever objects are required at value level, they are represented by their identity arrows.\n\u003c/p\u003e",
          "module": "Data.Category",
          "name": "Obj",
          "package": "data-category",
          "source": "src/Data-Category.html#Obj",
          "type": "type"
        },
        "index": {
          "description": "Whenever objects are required at value level they are represented by their identity arrows",
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "Obj",
          "package": "data-category",
          "partial": "Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#t:Obj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "Op",
          "package": "data-category",
          "source": "src/Data-Category.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "Op",
          "package": "data-category",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "(.)",
          "package": "data-category",
          "signature": "k b c -\u003e k a b -\u003e k a c",
          "source": "src/Data-Category.html#.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "(.) .",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "data-category",
          "signature": "k b c-\u003ek a b-\u003ek a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "Op",
          "package": "data-category",
          "signature": "Op",
          "source": "src/Data-Category.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "Op",
          "package": "data-category",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "src",
          "package": "data-category",
          "signature": "k a b -\u003e Obj k a",
          "source": "src/Data-Category.html#src",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "src",
          "normalized": "a b c-\u003eObj a b",
          "package": "data-category",
          "signature": "k a b-\u003eObj k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "tgt",
          "package": "data-category",
          "signature": "k a b -\u003e Obj k b",
          "source": "src/Data-Category.html#tgt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "tgt",
          "normalized": "a b c-\u003eObj a c",
          "package": "data-category",
          "signature": "k a b-\u003eObj k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#v:tgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Category",
          "name": "unOp",
          "package": "data-category",
          "signature": "k b a",
          "source": "src/Data-Category.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Category",
          "module": "Data.Category",
          "name": "unOp",
          "package": "data-category",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-category/docs/Data-Category.html#v:unOp"
      }
    }
  ]
]