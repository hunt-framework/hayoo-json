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
        "word": "free-functors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA cofree functor is right adjoint to a forgetful functor.\n In this package the forgetful functor forgets class constraints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "package": "free-functors",
          "source": "src/Data-Functor-Cofree.html",
          "type": "module"
        },
        "index": {
          "description": "cofree functor is right adjoint to forgetful functor In this package the forgetful functor forgets class constraints",
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "package": "free-functors",
          "partial": "Cofree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cofree functor for constraint \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "package": "free-functors",
          "source": "src/Data-Functor-Cofree.html#Cofree",
          "type": "data"
        },
        "index": {
          "description": "The cofree functor for constraint",
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "package": "free-functors",
          "partial": "Cofree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#t:Cofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "Product",
          "package": "free-functors",
          "source": "src/Data-Functor-Cofree.html#Product",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "Product",
          "package": "free-functors",
          "partial": "Product",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "TerminalObject",
          "package": "free-functors",
          "source": "src/Data-Functor-Cofree.html#TerminalObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "TerminalObject",
          "package": "free-functors",
          "partial": "Terminal Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#t:TerminalObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "package": "free-functors",
          "signature": "(a -\u003e b) -\u003e a -\u003e Cofree c b",
          "source": "src/Data-Functor-Cofree.html#Cofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "Cofree",
          "normalized": "(a-\u003eb)-\u003ea-\u003eCofree c b",
          "package": "free-functors",
          "partial": "Cofree",
          "signature": "(a-\u003eb)-\u003ea-\u003eCofree c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:Cofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "convert",
          "package": "free-functors",
          "signature": "w a -\u003e Cofree c a",
          "source": "src/Data-Functor-Cofree.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "convert",
          "normalized": "a b-\u003eCofree c b",
          "package": "free-functors",
          "signature": "w a-\u003eCofree c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "counit",
          "package": "free-functors",
          "signature": "Cofree c b -\u003e b",
          "source": "src/Data-Functor-Cofree.html#counit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "counit",
          "normalized": "Cofree a b-\u003eb",
          "package": "free-functors",
          "signature": "Cofree c b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "leftAdjunct",
          "package": "free-functors",
          "signature": "(a -\u003e b) -\u003e a -\u003e Cofree c b",
          "source": "src/Data-Functor-Cofree.html#leftAdjunct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "leftAdjunct",
          "normalized": "(a-\u003eb)-\u003ea-\u003eCofree c b",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(a-\u003eb)-\u003ea-\u003eCofree c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "leftAdjunctF",
          "package": "free-functors",
          "signature": "(f a -\u003e b) -\u003e f a -\u003e Cofree c b",
          "source": "src/Data-Functor-Cofree.html#leftAdjunctF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "leftAdjunctF",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003eCofree d c",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(f a-\u003eb)-\u003ef a-\u003eCofree c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:leftAdjunctF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "outL",
          "package": "free-functors",
          "signature": "Product c m n -\u003e m",
          "source": "src/Data-Functor-Cofree.html#outL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "outL",
          "normalized": "Product a b c-\u003eb",
          "package": "free-functors",
          "signature": "Product c m n-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:outL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "outR",
          "package": "free-functors",
          "signature": "Product c m n -\u003e n",
          "source": "src/Data-Functor-Cofree.html#outR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "outR",
          "normalized": "Product a b c-\u003ec",
          "package": "free-functors",
          "signature": "Product c m n-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:outR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "product",
          "package": "free-functors",
          "signature": "(a -\u003e m) -\u003e (a -\u003e n) -\u003e a -\u003e Product c m n",
          "source": "src/Data-Functor-Cofree.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "product",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003eProduct d b c",
          "package": "free-functors",
          "signature": "(a-\u003em)-\u003e(a-\u003en)-\u003ea-\u003eProduct c m n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003erightAdjunct f = counit . f\u003c/pre\u003e",
          "module": "Data.Functor.Cofree",
          "name": "rightAdjunct",
          "package": "free-functors",
          "signature": "(a -\u003e Cofree c b) -\u003e a -\u003e b",
          "source": "src/Data-Functor-Cofree.html#rightAdjunct",
          "type": "function"
        },
        "index": {
          "description": "rightAdjunct counit",
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "rightAdjunct",
          "normalized": "(a-\u003eCofree b c)-\u003ea-\u003ec",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(a-\u003eCofree c b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Cofree",
          "name": "terminal",
          "package": "free-functors",
          "signature": "a -\u003e TerminalObject c",
          "source": "src/Data-Functor-Cofree.html#terminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "terminal",
          "normalized": "a-\u003eTerminalObject b",
          "package": "free-functors",
          "signature": "a-\u003eTerminalObject c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunit = leftAdjunct id\u003c/pre\u003e",
          "module": "Data.Functor.Cofree",
          "name": "unit",
          "package": "free-functors",
          "signature": "b -\u003e Cofree c b",
          "source": "src/Data-Functor-Cofree.html#unit",
          "type": "function"
        },
        "index": {
          "description": "unit leftAdjunct id",
          "hierarchy": "Data Functor Cofree",
          "module": "Data.Functor.Cofree",
          "name": "unit",
          "normalized": "a-\u003eCofree b a",
          "package": "free-functors",
          "signature": "b-\u003eCofree c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Cofree.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA free functor is left adjoint to a forgetful functor.\n In this package the forgetful functor forgets class constraints.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "source": "src/Data-Functor-Free.html",
          "type": "module"
        },
        "index": {
          "description": "free functor is left adjoint to forgetful functor In this package the forgetful functor forgets class constraints",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProducts of \u003ccode\u003eMonoid\u003c/code\u003es are \u003ccode\u003eMonoid\u003c/code\u003es themselves. But coproducts of \u003ccode\u003eMonoid\u003c/code\u003es are not. \n However, the free \u003ccode\u003eMonoid\u003c/code\u003e applied to the coproduct \u003cem\u003eis\u003c/em\u003e a \u003ccode\u003eMonoid\u003c/code\u003e, and it is the coproduct in the category of \u003ccode\u003eMonoid\u003c/code\u003es.\n This is also called the free product, and generalizes to any algebraic class.\n\u003c/p\u003e",
          "module": "Data.Functor.Free",
          "name": "Coproduct",
          "package": "free-functors",
          "source": "src/Data-Functor-Free.html#Coproduct",
          "type": "type"
        },
        "index": {
          "description": "Products of Monoid are Monoid themselves But coproducts of Monoid are not However the free Monoid applied to the coproduct is Monoid and it is the coproduct in the category of Monoid This is also called the free product and generalizes to any algebraic class",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "Coproduct",
          "package": "free-functors",
          "partial": "Coproduct",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#t:Coproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe free functor for class \u003ccode\u003ec\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eFree c a\u003c/code\u003e is basically an expression tree with operations from class \u003ccode\u003ec\u003c/code\u003e \n   and variables/placeholders of type \u003ccode\u003ea\u003c/code\u003e, created with \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e.\n   Monadic bind allows you to replace each of these variables with another sub-expression.\n\u003c/p\u003e",
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "source": "src/Data-Functor-Free.html#Free",
          "type": "newtype"
        },
        "index": {
          "description": "The free functor for class Free is basically an expression tree with operations from class and variables placeholders of type created with unit Monadic bind allows you to replace each of these variables with another sub-expression",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "partial": "Free",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#t:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "InitialObject",
          "package": "free-functors",
          "source": "src/Data-Functor-Free.html#InitialObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "InitialObject",
          "package": "free-functors",
          "partial": "Initial Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#t:InitialObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "signature": "Free",
          "source": "src/Data-Functor-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "Free",
          "package": "free-functors",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003econvert = rightAdjunct pure\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "convert",
          "package": "free-functors",
          "signature": "Free c a -\u003e f a",
          "source": "src/Data-Functor-Free.html#convert",
          "type": "function"
        },
        "index": {
          "description": "convert rightAdjunct pure",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "convert",
          "normalized": "Free a b-\u003ec b",
          "package": "free-functors",
          "signature": "Free c a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003econvertClosed = rightAdjunct absurd\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "convertClosed",
          "package": "free-functors",
          "signature": "Free c Void -\u003e r",
          "source": "src/Data-Functor-Free.html#convertClosed",
          "type": "function"
        },
        "index": {
          "description": "convertClosed rightAdjunct absurd",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "convertClosed",
          "normalized": "Free a Void-\u003eb",
          "package": "free-functors",
          "partial": "Closed",
          "signature": "Free c Void-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:convertClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "coproduct",
          "package": "free-functors",
          "signature": "(m -\u003e r) -\u003e (n -\u003e r) -\u003e Coproduct c m n -\u003e r",
          "source": "src/Data-Functor-Free.html#coproduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "coproduct",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eCoproduct d a c-\u003eb",
          "package": "free-functors",
          "signature": "(m-\u003er)-\u003e(n-\u003er)-\u003eCoproduct c m n-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:coproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecounit = rightAdjunct id\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "counit",
          "package": "free-functors",
          "signature": "Free c a -\u003e a",
          "source": "src/Data-Functor-Free.html#counit",
          "type": "function"
        },
        "index": {
          "description": "counit rightAdjunct id",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "counit",
          "normalized": "Free a b-\u003eb",
          "package": "free-functors",
          "signature": "Free c a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the instances of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e c a\u003c/code\u003e for the class \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example: \n\u003c/p\u003e\u003cpre\u003ederiveInstances ''Num\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "deriveInstances",
          "package": "free-functors",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Functor-Free.html#deriveInstances",
          "type": "function"
        },
        "index": {
          "description": "Derive the instances of Free for the class Show Foldable and Traversable For example deriveInstances Num",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "deriveInstances",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "free-functors",
          "partial": "Instances",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:deriveInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "inL",
          "package": "free-functors",
          "signature": "m -\u003e Coproduct c m n",
          "source": "src/Data-Functor-Free.html#inL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "inL",
          "normalized": "a-\u003eCoproduct b a c",
          "package": "free-functors",
          "signature": "m-\u003eCoproduct c m n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:inL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "inR",
          "package": "free-functors",
          "signature": "n -\u003e Coproduct c m n",
          "source": "src/Data-Functor-Free.html#inR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "inR",
          "normalized": "a-\u003eCoproduct b c a",
          "package": "free-functors",
          "signature": "n-\u003eCoproduct c m n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:inR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "initial",
          "package": "free-functors",
          "signature": "InitialObject c -\u003e r",
          "source": "src/Data-Functor-Free.html#initial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "initial",
          "normalized": "InitialObject a-\u003eb",
          "package": "free-functors",
          "signature": "InitialObject c-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eleftAdjunct f = f . unit\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "leftAdjunct",
          "package": "free-functors",
          "signature": "(Free c a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Functor-Free.html#leftAdjunct",
          "type": "function"
        },
        "index": {
          "description": "leftAdjunct unit",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "leftAdjunct",
          "normalized": "(Free a b-\u003ec)-\u003eb-\u003ec",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(Free c a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erightAdjunct\u003c/a\u003e\u003c/code\u003e is the destructor of `Free c` values.\n\u003c/p\u003e",
          "module": "Data.Functor.Free",
          "name": "rightAdjunct",
          "package": "free-functors",
          "signature": "(a -\u003e b) -\u003e Free c a -\u003e b",
          "source": "src/Data-Functor-Free.html#rightAdjunct",
          "type": "function"
        },
        "index": {
          "description": "rightAdjunct is the destructor of Free values",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "rightAdjunct",
          "normalized": "(a-\u003eb)-\u003eFree c a-\u003eb",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(a-\u003eb)-\u003eFree c a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "rightAdjunctF",
          "package": "free-functors",
          "signature": "(a -\u003e f b) -\u003e Free c a -\u003e f b",
          "source": "src/Data-Functor-Free.html#rightAdjunctF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "rightAdjunctF",
          "normalized": "(a-\u003eb c)-\u003eFree d a-\u003eb c",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(a-\u003ef b)-\u003eFree c a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:rightAdjunctF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "rightAdjunctT",
          "package": "free-functors",
          "signature": "(a -\u003e t f b) -\u003e Free c a -\u003e t f b",
          "source": "src/Data-Functor-Free.html#rightAdjunctT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "rightAdjunctT",
          "normalized": "(a-\u003eb c d)-\u003eFree e a-\u003eb c d",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(a-\u003et f b)-\u003eFree c a-\u003et f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:rightAdjunctT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Free",
          "name": "runFree",
          "package": "free-functors",
          "signature": "(a -\u003e b) -\u003e b",
          "source": "src/Data-Functor-Free.html#Free",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "runFree",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "free-functors",
          "partial": "Free",
          "signature": "(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:runFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003etransform f as = as \u003e\u003e= f unit\u003c/pre\u003e\u003cpre\u003etransform f . transform g = transform (g . f)\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "transform",
          "package": "free-functors",
          "signature": "(b -\u003e r) -\u003e a -\u003e r) -\u003e Free c a -\u003e Free c b",
          "source": "src/Data-Functor-Free.html#transform",
          "type": "function"
        },
        "index": {
          "description": "transform as as unit transform transform transform",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "transform",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb)-\u003eFree d c-\u003eFree d a",
          "package": "free-functors",
          "signature": "(b-\u003er)-\u003ea-\u003er)-\u003eFree c a-\u003eFree c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunfold f = coproduct (unfold f) unit . f\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003einL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einR\u003c/a\u003e\u003c/code\u003e are useful here. For example, the following creates the list \u003ccode\u003e[1..10]\u003c/code\u003e as a \u003ccode\u003eFree Monoid\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003eunfold (b -\u003e if b == 0 then mempty else \u003ccode\u003e\u003ca\u003einL\u003c/a\u003e\u003c/code\u003e (b - 1) \u003c\u003e \u003ccode\u003e\u003ca\u003einR\u003c/a\u003e\u003c/code\u003e b) 10\u003c/pre\u003e",
          "module": "Data.Functor.Free",
          "name": "unfold",
          "package": "free-functors",
          "signature": "(b -\u003e Coproduct c b a) -\u003e b -\u003e Free c a",
          "source": "src/Data-Functor-Free.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold coproduct unfold unit inL and inR are useful here For example the following creates the list as Free Monoid unfold if then mempty else inL inR",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "unfold",
          "normalized": "(a-\u003eCoproduct b a c)-\u003ea-\u003eFree b c",
          "package": "free-functors",
          "signature": "(b-\u003eCoproduct c b a)-\u003eb-\u003eFree c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e allows you to create `Free c` values, together with the operations from the class \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.Free",
          "name": "unit",
          "package": "free-functors",
          "signature": "a -\u003e Free c a",
          "source": "src/Data-Functor-Free.html#unit",
          "type": "function"
        },
        "index": {
          "description": "unit allows you to create Free values together with the operations from the class",
          "hierarchy": "Data Functor Free",
          "module": "Data.Functor.Free",
          "name": "unit",
          "normalized": "a-\u003eFree b a",
          "package": "free-functors",
          "signature": "a-\u003eFree c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-Free.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA cofree functor is right adjoint to a forgetful functor.\n In this package the forgetful functor forgets class constraints.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003eData.Functor.Cofree\u003c/code\u003e we're going up a level.\n These free functors go between categories of functors and the natural\n transformations between them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "package": "free-functors",
          "source": "src/Data-Functor-HCofree.html",
          "type": "module"
        },
        "index": {
          "description": "cofree functor is right adjoint to forgetful functor In this package the forgetful functor forgets class constraints Compared to Data.Functor.Cofree we re going up level These free functors go between categories of functors and the natural transformations between them",
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "package": "free-functors",
          "partial": "HCofree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural transformations.\n\u003c/p\u003e",
          "module": "Data.Functor.HCofree",
          "name": ":~\u003e",
          "package": "free-functors",
          "source": "src/Data-Functor-HCofree.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "Natural transformations",
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": ":~\u003e",
          "package": "free-functors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher order cofree functor for constraint \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "package": "free-functors",
          "source": "src/Data-Functor-HCofree.html#HCofree",
          "type": "data"
        },
        "index": {
          "description": "The higher order cofree functor for constraint",
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "package": "free-functors",
          "partial": "HCofree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#t:HCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e f a -\u003e HCofree c g a",
          "source": "src/Data-Functor-HCofree.html#HCofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "HCofree",
          "normalized": "(a b)-\u003ea c-\u003eHCofree d b c",
          "package": "free-functors",
          "partial": "HCofree",
          "signature": "(f g)-\u003ef a-\u003eHCofree c g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:HCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "coiter",
          "package": "free-functors",
          "signature": "(forall b.  b -\u003e f b) -\u003e a -\u003e HCofree c f a",
          "source": "src/Data-Functor-HCofree.html#coiter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "coiter",
          "normalized": "(a b c-\u003ed c)-\u003ee-\u003eHCofree f d e",
          "package": "free-functors",
          "signature": "(forall b. b-\u003ef b)-\u003ea-\u003eHCofree c f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:coiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "convert",
          "package": "free-functors",
          "signature": "t f a -\u003e HCofree c f a",
          "source": "src/Data-Functor-HCofree.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "convert",
          "normalized": "a b c-\u003eHCofree d b c",
          "package": "free-functors",
          "signature": "t f a-\u003eHCofree c f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "counit",
          "package": "free-functors",
          "signature": "HCofree c g :~\u003e g",
          "source": "src/Data-Functor-HCofree.html#counit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "counit",
          "package": "free-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "hfmap",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e HCofree c f :~\u003e HCofree c g",
          "source": "src/Data-Functor-HCofree.html#hfmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "hfmap",
          "normalized": "(a b)-\u003eHCofree c a HCofree c b",
          "package": "free-functors",
          "signature": "(f g)-\u003eHCofree c f HCofree c g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:hfmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "leftAdjunct",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e f :~\u003e HCofree c g",
          "source": "src/Data-Functor-HCofree.html#leftAdjunct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "leftAdjunct",
          "normalized": "(a b)-\u003ea HCofree c b",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(f g)-\u003ef HCofree c g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "liftCofree",
          "package": "free-functors",
          "signature": "f a -\u003e HCofree c f a",
          "source": "src/Data-Functor-HCofree.html#liftCofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "liftCofree",
          "normalized": "a b-\u003eHCofree c a b",
          "package": "free-functors",
          "partial": "Cofree",
          "signature": "f a-\u003eHCofree c f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:liftCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "lowerCofree",
          "package": "free-functors",
          "signature": "HCofree c f a -\u003e f a",
          "source": "src/Data-Functor-HCofree.html#lowerCofree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "lowerCofree",
          "normalized": "HCofree a b c-\u003eb c",
          "package": "free-functors",
          "partial": "Cofree",
          "signature": "HCofree c f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:lowerCofree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003erightAdjunct f = counit . f\u003c/pre\u003e",
          "module": "Data.Functor.HCofree",
          "name": "rightAdjunct",
          "package": "free-functors",
          "signature": "(f :~\u003e HCofree c g) -\u003e f :~\u003e g",
          "source": "src/Data-Functor-HCofree.html#rightAdjunct",
          "type": "function"
        },
        "index": {
          "description": "rightAdjunct counit",
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "rightAdjunct",
          "normalized": "(a HCofree b c)-\u003ea c",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(f HCofree c g)-\u003ef g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunit = leftAdjunct id\u003c/pre\u003e",
          "module": "Data.Functor.HCofree",
          "name": "unit",
          "package": "free-functors",
          "signature": "g :~\u003e HCofree c g",
          "source": "src/Data-Functor-HCofree.html#unit",
          "type": "function"
        },
        "index": {
          "description": "unit leftAdjunct id",
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "unit",
          "package": "free-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HCofree",
          "name": "unwrap",
          "package": "free-functors",
          "signature": "HCofree Comonad g a -\u003e g (HCofree Comonad g a)",
          "source": "src/Data-Functor-HCofree.html#unwrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HCofree",
          "module": "Data.Functor.HCofree",
          "name": "unwrap",
          "normalized": "HCofree Comonad a b-\u003ea(HCofree Comonad a b)",
          "package": "free-functors",
          "signature": "HCofree Comonad g a-\u003eg(HCofree Comonad g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HCofree.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA free functor is left adjoint to a forgetful functor.\n In this package the forgetful functor forgets class constraints.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003eData.Functor.Free\u003c/code\u003e we're going up a level.\n These free functors go between categories of functors and the natural\n transformations between them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "source": "src/Data-Functor-HFree.html",
          "type": "module"
        },
        "index": {
          "description": "free functor is left adjoint to forgetful functor In this package the forgetful functor forgets class constraints Compared to Data.Functor.Free we re going up level These free functors go between categories of functors and the natural transformations between them",
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "partial": "HFree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural transformations.\n\u003c/p\u003e",
          "module": "Data.Functor.HFree",
          "name": ":~\u003e",
          "package": "free-functors",
          "source": "src/Data-Functor-HFree.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "description": "Natural transformations",
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": ":~\u003e",
          "package": "free-functors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe higher order free functor for constraint \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "source": "src/Data-Functor-HFree.html#HFree",
          "type": "newtype"
        },
        "index": {
          "description": "The higher order free functor for constraint",
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "partial": "HFree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#t:HFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "signature": "HFree",
          "source": "src/Data-Functor-HFree.html#HFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "HFree",
          "package": "free-functors",
          "partial": "HFree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:HFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "convert",
          "package": "free-functors",
          "signature": "HFree c f a -\u003e t f a",
          "source": "src/Data-Functor-HFree.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "convert",
          "normalized": "HFree a b c-\u003ed b c",
          "package": "free-functors",
          "signature": "HFree c f a-\u003et f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecounit = rightAdjunct id\u003c/pre\u003e",
          "module": "Data.Functor.HFree",
          "name": "counit",
          "package": "free-functors",
          "signature": "HFree c f :~\u003e f",
          "source": "src/Data-Functor-HFree.html#counit",
          "type": "function"
        },
        "index": {
          "description": "counit rightAdjunct id",
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "counit",
          "package": "free-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "hfmap",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e HFree c f :~\u003e HFree c g",
          "source": "src/Data-Functor-HFree.html#hfmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "hfmap",
          "normalized": "(a b)-\u003eHFree c a HFree c b",
          "package": "free-functors",
          "signature": "(f g)-\u003eHFree c f HFree c g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:hfmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "iter",
          "package": "free-functors",
          "signature": "(forall b.  f b -\u003e b) -\u003e HFree c f a -\u003e a",
          "source": "src/Data-Functor-HFree.html#iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "iter",
          "normalized": "(a b c d-\u003ed)-\u003eHFree e c f-\u003ef",
          "package": "free-functors",
          "signature": "(forall b. f b-\u003eb)-\u003eHFree c f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eleftAdjunct f = f . unit\u003c/pre\u003e",
          "module": "Data.Functor.HFree",
          "name": "leftAdjunct",
          "package": "free-functors",
          "signature": "(HFree c f :~\u003e g) -\u003e f :~\u003e g",
          "source": "src/Data-Functor-HFree.html#leftAdjunct",
          "type": "function"
        },
        "index": {
          "description": "leftAdjunct unit",
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "leftAdjunct",
          "normalized": "(HFree a b c)-\u003eb c",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(HFree c f g)-\u003ef g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:leftAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "liftFree",
          "package": "free-functors",
          "signature": "f a -\u003e HFree c f a",
          "source": "src/Data-Functor-HFree.html#liftFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "liftFree",
          "normalized": "a b-\u003eHFree c a b",
          "package": "free-functors",
          "partial": "Free",
          "signature": "f a-\u003eHFree c f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:liftFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "lowerFree",
          "package": "free-functors",
          "signature": "HFree c f a -\u003e f a",
          "source": "src/Data-Functor-HFree.html#lowerFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "lowerFree",
          "normalized": "HFree a b c-\u003eb c",
          "package": "free-functors",
          "partial": "Free",
          "signature": "HFree c f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:lowerFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "rightAdjunct",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e HFree c f :~\u003e g",
          "source": "src/Data-Functor-HFree.html#rightAdjunct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "rightAdjunct",
          "normalized": "(a b)-\u003eHFree c a b",
          "package": "free-functors",
          "partial": "Adjunct",
          "signature": "(f g)-\u003eHFree c f g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:rightAdjunct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "runHFree",
          "package": "free-functors",
          "signature": "(f :~\u003e g) -\u003e g a",
          "source": "src/Data-Functor-HFree.html#HFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "runHFree",
          "normalized": "(a b)-\u003eb c",
          "package": "free-functors",
          "partial": "HFree",
          "signature": "(f g)-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:runHFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "unit",
          "package": "free-functors",
          "signature": "f :~\u003e HFree c f",
          "source": "src/Data-Functor-HFree.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "unit",
          "package": "free-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.HFree",
          "name": "wrap",
          "package": "free-functors",
          "signature": "f (HFree Monad f a) -\u003e HFree Monad f a",
          "source": "src/Data-Functor-HFree.html#wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Functor HFree",
          "module": "Data.Functor.HFree",
          "name": "wrap",
          "normalized": "a(HFree Monad a b)-\u003eHFree Monad a b",
          "package": "free-functors",
          "signature": "f(HFree Monad f a)-\u003eHFree Monad f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/free-functors/docs/Data-Functor-HFree.html#v:wrap"
      }
    }
  ]
]