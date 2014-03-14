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
        "word": "algebra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean additive abelian semigroup\n\u003c/p\u003e\u003cp\u003ea + b = b + a\n\u003c/p\u003e",
          "module": "Numeric.Additive.Class",
          "name": "Abelian",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Abelian",
          "type": "class"
        },
        "index": {
          "description": "an additive abelian semigroup",
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "Abelian",
          "package": "algebra",
          "partial": "Abelian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#t:Abelian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (a + b) + c = a + (b + c)\n sinnum 1 a = a\n sinnum (2 * n) a = sinnum n a + sinnum n a\n sinnum (2 * n + 1) a = sinnum n a + sinnum n a + a\n\u003c/pre\u003e",
          "module": "Numeric.Additive.Class",
          "name": "Additive",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Additive",
          "type": "class"
        },
        "index": {
          "description": "sinnum sinnum sinnum sinnum sinnum sinnum sinnum",
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "Additive",
          "package": "algebra",
          "partial": "Additive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#t:Additive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additive semigroup with idempotent addition.\n\u003c/p\u003e\u003cpre\u003e a + a = a\n\u003c/pre\u003e",
          "module": "Numeric.Additive.Class",
          "name": "Idempotent",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Idempotent",
          "type": "class"
        },
        "index": {
          "description": "An additive semigroup with idempotent addition",
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "Idempotent",
          "package": "algebra",
          "partial": "Idempotent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#t:Idempotent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Class",
          "name": "Partitionable",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Partitionable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "Partitionable",
          "package": "algebra",
          "partial": "Partitionable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#t:Partitionable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Class",
          "name": "(+)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epartitionWith f c returns a list containing f a b for each a b such that a + b = c, \n\u003c/p\u003e",
          "module": "Numeric.Additive.Class",
          "name": "partitionWith",
          "package": "algebra",
          "signature": "(m -\u003e m -\u003e r) -\u003e m -\u003e NonEmpty r",
          "source": "src/Numeric-Additive-Class.html#partitionWith",
          "type": "method"
        },
        "index": {
          "description": "partitionWith returns list containing for each such that",
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "partitionWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eNonEmpty b",
          "package": "algebra",
          "partial": "With",
          "signature": "(m-\u003em-\u003er)-\u003em-\u003eNonEmpty r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:partitionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esinnum1p n r = sinnum (1 + n) r\n\u003c/p\u003e",
          "module": "Numeric.Additive.Class",
          "name": "sinnum1p",
          "package": "algebra",
          "signature": "n -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sinnum1p",
          "type": "method"
        },
        "index": {
          "description": "sinnum1p sinnum",
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "sinnum1p",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sinnum1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Additive.Class\",\"Numeric.Algebra\"]",
          "name": "sinnum1pIdempotent",
          "package": "algebra",
          "signature": "Natural -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sinnum1pIdempotent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sinnum1pIdempotent\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnum1pIdempotent\"]"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "sinnum1pIdempotent",
          "normalized": "Natural-\u003ea-\u003ea",
          "package": "algebra",
          "partial": "Idempotent",
          "signature": "Natural-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sinnum1pIdempotent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Additive.Class\",\"Numeric.Algebra\"]",
          "name": "sum1",
          "package": "algebra",
          "signature": "f r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sum1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sum1\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sum1\"]"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "sum1",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Class",
          "name": "sumWith1",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sumWith1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Class",
          "module": "Numeric.Additive.Class",
          "name": "sumWith1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Class.html#v:sumWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "Group",
          "package": "algebra",
          "source": "src/Numeric-Additive-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "Group",
          "package": "algebra",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "Group",
          "package": "algebra",
          "source": "src/Numeric-Additive-Group.html#Group",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "Group",
          "package": "algebra",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "(-)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#-",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "negate",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#negate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "subtract",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#subtract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Additive.Group",
          "name": "times",
          "package": "algebra",
          "signature": "n -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#times",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Additive Group",
          "module": "Numeric.Additive.Group",
          "name": "times",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Additive-Group.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative algebra built with a free module over a semiring\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Class",
          "name": "Algebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Algebra",
          "type": "class"
        },
        "index": {
          "description": "An associative algebra built with free module over semiring",
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Algebra",
          "package": "algebra",
          "partial": "Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "Coalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Coalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Coalgebra",
          "package": "algebra",
          "partial": "Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Coalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "LeftModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#LeftModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "LeftModule",
          "package": "algebra",
          "partial": "Left Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:LeftModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "Module",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Module",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Module",
          "package": "algebra",
          "partial": "Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additive monoid\n\u003c/p\u003e\u003cpre\u003e zero + a = a = a + zero\n\u003c/pre\u003e",
          "module": "Numeric.Algebra.Class",
          "name": "Monoidal",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Monoidal",
          "type": "class"
        },
        "index": {
          "description": "An additive monoid zero zero",
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Monoidal",
          "package": "algebra",
          "partial": "Monoidal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Monoidal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiplicative semigroup\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Class",
          "name": "Multiplicative",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Multiplicative",
          "type": "class"
        },
        "index": {
          "description": "multiplicative semigroup",
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Multiplicative",
          "package": "algebra",
          "partial": "Multiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "RightModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#RightModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "RightModule",
          "package": "algebra",
          "partial": "Right Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:RightModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair of an additive abelian semigroup, and a multiplicative semigroup, with the distributive laws:\n\u003c/p\u003e\u003cpre\u003e a(b + c) = ab + ac -- left distribution (we are a LeftNearSemiring)\n (a + b)c = ac + bc -- right distribution (we are a [Right]NearSemiring)\n\u003c/pre\u003e\u003cp\u003eCommon notation includes the laws for additive and multiplicative identity in semiring.\n\u003c/p\u003e\u003cp\u003eIf you want that, look at \u003ccode\u003eRig\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eIdeally we'd use the cyclic definition:\n\u003c/p\u003e\u003cpre\u003e class (LeftModule r r, RightModule r r, Additive r, Abelian r, Multiplicative r) =\u003e Semiring r\n\u003c/pre\u003e\u003cp\u003eto enforce that every semiring r is an r-module over itself, but Haskell doesn't like that.\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Class",
          "name": "Semiring",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Semiring",
          "type": "class"
        },
        "index": {
          "description": "pair of an additive abelian semigroup and multiplicative semigroup with the distributive laws ab ac left distribution we are LeftNearSemiring ac bc right distribution we are Right NearSemiring Common notation includes the laws for additive and multiplicative identity in semiring If you want that look at Rig instead Ideally we use the cyclic definition class LeftModule RightModule Additive Abelian Multiplicative Semiring to enforce that every semiring is an r-module over itself but Haskell doesn like that",
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "Semiring",
          "package": "algebra",
          "partial": "Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#t:Semiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "(*)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "(*.)",
          "package": "algebra",
          "signature": "m -\u003e r -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#%2A.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "(*.) *.",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "m-\u003er-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "(.*)",
          "package": "algebra",
          "signature": "r -\u003e m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#.%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "(.*) .*",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "r-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "comult",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e c -\u003e c -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#comult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "comult",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003ec-\u003ec-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:comult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "mult",
          "package": "algebra",
          "signature": "(a -\u003e a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#mult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "mult",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003ea-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "pow1p",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#pow1p",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "pow1p",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:pow1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "pow1pIntegral",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#pow1pIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "pow1pIntegral",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "partial": "Integral",
          "signature": "r-\u003en-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:pow1pIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Class\",\"Numeric.Algebra\"]",
          "name": "product1",
          "package": "algebra",
          "signature": "f r -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#product1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:product1\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:product1\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "product1",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:product1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "productWith1",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#productWith1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "productWith1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:productWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "sinnum",
          "package": "algebra",
          "signature": "n -\u003e m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#sinnum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "sinnum",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sinnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Class\",\"Numeric.Algebra\"]",
          "name": "sinnumIdempotent",
          "package": "algebra",
          "signature": "n -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#sinnumIdempotent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sinnumIdempotent\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnumIdempotent\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "sinnumIdempotent",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "partial": "Idempotent",
          "signature": "n-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sinnumIdempotent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Class\",\"Numeric.Algebra\"]",
          "name": "sum",
          "package": "algebra",
          "signature": "f m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#sum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sum\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sum\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "sum",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "signature": "f m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "sumWith",
          "package": "algebra",
          "signature": "(a -\u003e m) -\u003e f a -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#sumWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "sumWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003em)-\u003ef a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:sumWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Class",
          "name": "zero",
          "package": "algebra",
          "signature": "m",
          "source": "src/Numeric-Algebra-Class.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Class",
          "module": "Numeric.Algebra.Class",
          "name": "zero",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Class.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Commutative",
          "name": "Commutative",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Commutative",
          "module": "Numeric.Algebra.Commutative",
          "name": "Commutative",
          "package": "algebra",
          "partial": "Commutative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Commutative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Commutative",
          "name": "CocommutativeCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CocommutativeCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Commutative",
          "module": "Numeric.Algebra.Commutative",
          "name": "CocommutativeCoalgebra",
          "package": "algebra",
          "partial": "Cocommutative Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Commutative.html#t:CocommutativeCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA commutative multiplicative semigroup\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Commutative",
          "name": "Commutative",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#Commutative",
          "type": "class"
        },
        "index": {
          "description": "commutative multiplicative semigroup",
          "hierarchy": "Numeric Algebra Commutative",
          "module": "Numeric.Algebra.Commutative",
          "name": "Commutative",
          "package": "algebra",
          "partial": "Commutative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Commutative.html#t:Commutative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Commutative",
          "name": "CommutativeAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CommutativeAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Commutative",
          "module": "Numeric.Algebra.Commutative",
          "name": "CommutativeAlgebra",
          "package": "algebra",
          "partial": "Commutative Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Commutative.html#t:CommutativeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Commutative",
          "name": "CommutativeBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CommutativeBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Commutative",
          "module": "Numeric.Algebra.Commutative",
          "name": "CommutativeBialgebra",
          "package": "algebra",
          "partial": "Commutative Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Commutative.html#t:CommutativeBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex Class",
          "module": "Numeric.Algebra.Complex.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex.Class",
          "name": "Complicated",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex-Class.html#Complicated",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex Class",
          "module": "Numeric.Algebra.Complex.Class",
          "name": "Complicated",
          "package": "algebra",
          "partial": "Complicated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex-Class.html#t:Complicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex.Class",
          "name": "i",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Complex-Class.html#i",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex Class",
          "module": "Numeric.Algebra.Complex.Class",
          "name": "i",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex-Class.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex.html#Complex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "ComplexBasis",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex.html#ComplexBasis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "ComplexBasis",
          "package": "algebra",
          "partial": "Complex Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#t:ComplexBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "Complicated",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex-Class.html#Complicated",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "Complicated",
          "package": "algebra",
          "partial": "Complicated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#t:Complicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "signature": "Complex a a",
          "source": "src/Numeric-Algebra-Complex.html#Complex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "Complex",
          "package": "algebra",
          "partial": "Complex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "E",
          "package": "algebra",
          "signature": "E",
          "source": "src/Numeric-Algebra-Complex.html#ComplexBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "E",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "I",
          "package": "algebra",
          "signature": "I",
          "source": "src/Numeric-Algebra-Complex.html#ComplexBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "I",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "i",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Complex-Class.html#i",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "i",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "imagPart",
          "package": "algebra",
          "signature": "f a -\u003e a",
          "source": "src/Numeric-Algebra-Complex.html#imagPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "imagPart",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "partial": "Part",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Complex",
          "name": "realPart",
          "package": "algebra",
          "signature": "f a -\u003e a",
          "source": "src/Numeric-Algebra-Complex.html#realPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "realPart",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "partial": "Part",
          "signature": "f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehalf of the Cayley-Dickson quaternion isomorphism \n\u003c/p\u003e",
          "module": "Numeric.Algebra.Complex",
          "name": "uncomplicate",
          "package": "algebra",
          "signature": "ComplexBasis -\u003e ComplexBasis -\u003e q",
          "source": "src/Numeric-Algebra-Complex.html#uncomplicate",
          "type": "function"
        },
        "index": {
          "description": "half of the Cayley-Dickson quaternion isomorphism",
          "hierarchy": "Numeric Algebra Complex",
          "module": "Numeric.Algebra.Complex",
          "name": "uncomplicate",
          "normalized": "ComplexBasis-\u003eComplexBasis-\u003ea",
          "package": "algebra",
          "signature": "ComplexBasis-\u003eComplexBasis-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Complex.html#v:uncomplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Distinguished Class",
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Distinguished-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Distinguished Class",
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Distinguished-Class.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Distinguished Class",
          "module": "Numeric.Algebra.Distinguished.Class",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Distinguished-Class.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "Division",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Division.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "Division",
          "package": "algebra",
          "partial": "Division",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "Division",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Division.html#Division",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "Division",
          "package": "algebra",
          "partial": "Division",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#t:Division"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "DivisionAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Division.html#DivisionAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "DivisionAlgebra",
          "package": "algebra",
          "partial": "Division Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#t:DivisionAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "(/)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%2F",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "(\\\\)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%5C%5C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "(\\\\) \\\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "(^)",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "recip",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#recip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Division",
          "name": "recipriocal",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#recipriocal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Division",
          "module": "Numeric.Algebra.Division",
          "name": "recipriocal",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Division.html#v:recipriocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual Class",
          "module": "Numeric.Algebra.Dual.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual.Class",
          "name": "Infinitesimal",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual-Class.html#Infinitesimal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual Class",
          "module": "Numeric.Algebra.Dual.Class",
          "name": "Infinitesimal",
          "package": "algebra",
          "partial": "Infinitesimal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual-Class.html#t:Infinitesimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual.Class",
          "name": "d",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Dual-Class.html#d",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual Class",
          "module": "Numeric.Algebra.Dual.Class",
          "name": "d",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual-Class.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "partial": "Dual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual.html#Dual",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "partial": "Dual",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edual number basis, D^2 = 0. D /= 0.\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Dual",
          "name": "DualBasis",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual.html#DualBasis",
          "type": "data"
        },
        "index": {
          "description": "dual number basis",
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "DualBasis",
          "package": "algebra",
          "partial": "Dual Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#t:DualBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "Infinitesimal",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual-Class.html#Infinitesimal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "Infinitesimal",
          "package": "algebra",
          "partial": "Infinitesimal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#t:Infinitesimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "D",
          "package": "algebra",
          "signature": "D",
          "source": "src/Numeric-Algebra-Dual.html#DualBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "D",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "signature": "Dual a a",
          "source": "src/Numeric-Algebra-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "E",
          "package": "algebra",
          "signature": "E",
          "source": "src/Numeric-Algebra-Dual.html#DualBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "E",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "d",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Dual-Class.html#d",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "d",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Dual",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Dual",
          "module": "Numeric.Algebra.Dual",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Dual.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Factorable",
          "name": "Factorable",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Factorable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Factorable",
          "module": "Numeric.Algebra.Factorable",
          "name": "Factorable",
          "package": "algebra",
          "partial": "Factorable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Factorable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`factorWith f c` returns a non-empty list containing `f a b` for all `a, b` such that `a * b = c`.\n\u003c/p\u003e\u003cp\u003eResults of factorWith f 0 are undefined and may result in either an error or an infinite list.\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Factorable",
          "name": "Factorable",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Factorable.html#Factorable",
          "type": "class"
        },
        "index": {
          "description": "factorWith returns non-empty list containing for all such that Results of factorWith are undefined and may result in either an error or an infinite list",
          "hierarchy": "Numeric Algebra Factorable",
          "module": "Numeric.Algebra.Factorable",
          "name": "Factorable",
          "package": "algebra",
          "partial": "Factorable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Factorable.html#t:Factorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Factorable",
          "name": "factorWith",
          "package": "algebra",
          "signature": "(m -\u003e m -\u003e r) -\u003e m -\u003e NonEmpty r",
          "source": "src/Numeric-Algebra-Factorable.html#factorWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Factorable",
          "module": "Numeric.Algebra.Factorable",
          "name": "factorWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eNonEmpty b",
          "package": "algebra",
          "partial": "With",
          "signature": "(m-\u003em-\u003er)-\u003em-\u003eNonEmpty r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Factorable.html#v:factorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hopf",
          "name": "Hopf",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hopf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hopf",
          "module": "Numeric.Algebra.Hopf",
          "name": "Hopf",
          "package": "algebra",
          "partial": "Hopf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hopf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HopfAlgebra algebra on a semiring, where the module is free.\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eantipode . antipode = id\u003c/code\u003e and antipode is an antihomomorphism then we are an InvolutiveBialgebra with \u003ccode\u003einv = antipode\u003c/code\u003e as well\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Hopf",
          "name": "HopfAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hopf.html#HopfAlgebra",
          "type": "class"
        },
        "index": {
          "description": "HopfAlgebra algebra on semiring where the module is free When antipode antipode id and antipode is an antihomomorphism then we are an InvolutiveBialgebra with inv antipode as well",
          "hierarchy": "Numeric Algebra Hopf",
          "module": "Numeric.Algebra.Hopf",
          "name": "HopfAlgebra",
          "package": "algebra",
          "partial": "Hopf Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hopf.html#t:HopfAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hopf",
          "name": "antipode",
          "package": "algebra",
          "signature": "(h -\u003e r) -\u003e h -\u003e r",
          "source": "src/Numeric-Algebra-Hopf.html#antipode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hopf",
          "module": "Numeric.Algebra.Hopf",
          "name": "antipode",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(h-\u003er)-\u003eh-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hopf.html#v:antipode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hyperbolic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "partial": "Hyperbolic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyper'",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hyperbolic.html#Hyper%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyper'",
          "package": "algebra",
          "partial": "Hyper'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#t:Hyper-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "HyperBasis'",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hyperbolic.html#HyperBasis%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "HyperBasis'",
          "package": "algebra",
          "partial": "Hyper Basis'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#t:HyperBasis-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#Hyperbolic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "partial": "Hyperbolic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#t:Hyperbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Cosh'",
          "package": "algebra",
          "signature": "Cosh'",
          "source": "src/Numeric-Algebra-Hyperbolic.html#HyperBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Cosh'",
          "package": "algebra",
          "partial": "Cosh'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#v:Cosh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyper'",
          "package": "algebra",
          "signature": "Hyper' a a",
          "source": "src/Numeric-Algebra-Hyperbolic.html#Hyper%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Hyper'",
          "package": "algebra",
          "partial": "Hyper'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#v:Hyper-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Sinh'",
          "package": "algebra",
          "signature": "Sinh'",
          "source": "src/Numeric-Algebra-Hyperbolic.html#HyperBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "Sinh'",
          "package": "algebra",
          "partial": "Sinh'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#v:Sinh-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "cosh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#cosh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "cosh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "sinh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#sinh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Hyperbolic",
          "module": "Numeric.Algebra.Hyperbolic",
          "name": "sinh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Hyperbolic.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Idempotent",
          "name": "Idempotent",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "Idempotent",
          "package": "algebra",
          "partial": "Idempotent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn multiplicative semigroup with idempotent multiplication.\n\u003c/p\u003e\u003cpre\u003e a * a = a\n\u003c/pre\u003e",
          "module": "Numeric.Algebra.Idempotent",
          "name": "Band",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#Band",
          "type": "class"
        },
        "index": {
          "description": "An multiplicative semigroup with idempotent multiplication",
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "Band",
          "package": "algebra",
          "partial": "Band",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#t:Band"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#IdempotentAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentAlgebra",
          "package": "algebra",
          "partial": "Idempotent Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#t:IdempotentAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#IdempotentBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentBialgebra",
          "package": "algebra",
          "partial": "Idempotent Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#t:IdempotentBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#IdempotentCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "IdempotentCoalgebra",
          "package": "algebra",
          "partial": "Idempotent Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#t:IdempotentCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Idempotent\",\"Numeric.Algebra\",\"Numeric.Band.Class\"]",
          "name": "pow1pBand",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Idempotent.html#pow1pBand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#v:pow1pBand\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:pow1pBand\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Class.html#v:pow1pBand\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "pow1pBand",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "partial": "Band",
          "signature": "r-\u003en-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#v:pow1pBand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Idempotent\",\"Numeric.Algebra\",\"Numeric.Band.Class\"]",
          "name": "powBand",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Idempotent.html#powBand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#v:powBand\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:powBand\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Class.html#v:powBand\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Idempotent",
          "module": "Numeric.Algebra.Idempotent",
          "name": "powBand",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "partial": "Band",
          "signature": "r-\u003en-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Idempotent.html#v:powBand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Incidence",
          "name": "Incidence",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Incidence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Incidence",
          "module": "Numeric.Algebra.Incidence",
          "name": "Incidence",
          "package": "algebra",
          "partial": "Incidence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Incidence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Incidence",
          "name": "Interval",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Incidence.html#Interval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Incidence",
          "module": "Numeric.Algebra.Incidence",
          "name": "Interval",
          "package": "algebra",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Incidence.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Incidence",
          "name": "Interval",
          "package": "algebra",
          "signature": "Interval a a",
          "source": "src/Numeric-Algebra-Incidence.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Incidence",
          "module": "Numeric.Algebra.Incidence",
          "name": "Interval",
          "package": "algebra",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Incidence.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Incidence",
          "name": "moebius",
          "package": "algebra",
          "signature": "Interval a -\u003e r",
          "source": "src/Numeric-Algebra-Incidence.html#moebius",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Incidence",
          "module": "Numeric.Algebra.Incidence",
          "name": "moebius",
          "normalized": "Interval a-\u003eb",
          "package": "algebra",
          "signature": "Interval a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Incidence.html#v:moebius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Incidence",
          "name": "zeta",
          "package": "algebra",
          "signature": "Interval a -\u003e r",
          "source": "src/Numeric-Algebra-Incidence.html#zeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Incidence",
          "module": "Numeric.Algebra.Incidence",
          "name": "zeta",
          "normalized": "Interval a-\u003eb",
          "package": "algebra",
          "signature": "Interval a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Incidence.html#v:zeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "Involutive",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "Involutive",
          "package": "algebra",
          "partial": "Involutive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveAlgebra",
          "package": "algebra",
          "partial": "Involutive Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:InvolutiveAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveBialgebra",
          "package": "algebra",
          "partial": "Involutive Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:InvolutiveBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveCoalgebra",
          "package": "algebra",
          "partial": "Involutive Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:InvolutiveCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn semigroup with involution\n\u003c/p\u003e\u003cpre\u003e adjoint a * adjoint b = adjoint (b * a)\n\u003c/pre\u003e",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveMultiplication",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveMultiplication",
          "type": "class"
        },
        "index": {
          "description": "An semigroup with involution adjoint adjoint adjoint",
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveMultiplication",
          "package": "algebra",
          "partial": "Involutive Multiplication",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:InvolutiveMultiplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadjoint (x + y) = adjoint x + adjoint y\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveSemiring",
          "type": "class"
        },
        "index": {
          "description": "adjoint adjoint adjoint",
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "partial": "Involutive Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:InvolutiveSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e adjoint = id\n\u003c/pre\u003e",
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutive",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutive",
          "type": "class"
        },
        "index": {
          "description": "adjoint id",
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutive",
          "package": "algebra",
          "partial": "Trivially Involutive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:TriviallyInvolutive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveAlgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:TriviallyInvolutiveAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveBialgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:TriviallyInvolutiveBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "TriviallyInvolutiveCoalgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#t:TriviallyInvolutiveCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "adjoint",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#adjoint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "adjoint",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "coinv",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e c -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#coinv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "coinv",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003ec-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#v:coinv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Involutive",
          "name": "inv",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#inv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Involutive",
          "module": "Numeric.Algebra.Involutive",
          "name": "inv",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Involutive.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion Class",
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "Hamiltonian",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#Hamiltonian",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion Class",
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "Hamiltonian",
          "package": "algebra",
          "partial": "Hamiltonian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion-Class.html#t:Hamiltonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "j",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#j",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion Class",
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "j",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion-Class.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "k",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#k",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion Class",
          "module": "Numeric.Algebra.Quaternion.Class",
          "name": "k",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion-Class.html#v:k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "partial": "Quaternion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Complicated",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex-Class.html#Complicated",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Complicated",
          "package": "algebra",
          "partial": "Complicated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#t:Complicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Hamiltonian",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#Hamiltonian",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Hamiltonian",
          "package": "algebra",
          "partial": "Hamiltonian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#t:Hamiltonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion.html#Quaternion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "partial": "Quaternion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#t:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "QuaternionBasis",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion.html#QuaternionBasis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "QuaternionBasis",
          "package": "algebra",
          "partial": "Quaternion Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#t:QuaternionBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "E",
          "package": "algebra",
          "signature": "E",
          "source": "src/Numeric-Algebra-Quaternion.html#QuaternionBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "E",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "I",
          "package": "algebra",
          "signature": "I",
          "source": "src/Numeric-Algebra-Quaternion.html#QuaternionBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "I",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "J",
          "package": "algebra",
          "signature": "J",
          "source": "src/Numeric-Algebra-Quaternion.html#QuaternionBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "J",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:J"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "K",
          "package": "algebra",
          "signature": "K",
          "source": "src/Numeric-Algebra-Quaternion.html#QuaternionBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "K",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "signature": "Quaternion a a a a",
          "source": "src/Numeric-Algebra-Quaternion.html#Quaternion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "partial": "Quaternion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCayley-Dickson quaternion isomorphism (one way)\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Quaternion",
          "name": "complicate",
          "package": "algebra",
          "signature": "QuaternionBasis -\u003e (c, c)",
          "source": "src/Numeric-Algebra-Quaternion.html#complicate",
          "type": "function"
        },
        "index": {
          "description": "Cayley-Dickson quaternion isomorphism one way",
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "complicate",
          "normalized": "QuaternionBasis-\u003e(a,a)",
          "package": "algebra",
          "signature": "QuaternionBasis-\u003e(c,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:complicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "i",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Complex-Class.html#i",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "i",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "j",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#j",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "j",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "k",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#k",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "k",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "scalarPart",
          "package": "algebra",
          "signature": "f r -\u003e r",
          "source": "src/Numeric-Algebra-Quaternion.html#scalarPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "scalarPart",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "partial": "Part",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:scalarPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Quaternion",
          "name": "vectorPart",
          "package": "algebra",
          "signature": "f r -\u003e (r, r, r)",
          "source": "src/Numeric-Algebra-Quaternion.html#vectorPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Algebra Quaternion",
          "module": "Numeric.Algebra.Quaternion",
          "name": "vectorPart",
          "normalized": "a b-\u003e(b,b,b)",
          "package": "algebra",
          "partial": "Part",
          "signature": "f r-\u003e(r,r,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Quaternion.html#v:vectorPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "Unital",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "Unital",
          "package": "algebra",
          "partial": "Unital",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bialgebra is both a unital algebra and counital coalgebra \n where the \u003ccode\u003e\u003ca\u003emult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e are compatible in some sense with \n the \u003ccode\u003e\u003ca\u003ecomult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e. That is to say that \n \u003ccode\u003e\u003ca\u003emult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e are a coalgebra homomorphisms or (equivalently) that \n \u003ccode\u003e\u003ca\u003ecomult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e are an algebra homomorphisms.\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Unital",
          "name": "Bialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#Bialgebra",
          "type": "class"
        },
        "index": {
          "description": "bialgebra is both unital algebra and counital coalgebra where the mult and unit are compatible in some sense with the comult and counit That is to say that mult and unit are coalgebra homomorphisms or equivalently that comult and counit are an algebra homomorphisms",
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "Bialgebra",
          "package": "algebra",
          "partial": "Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#t:Bialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "CounitalCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#CounitalCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "CounitalCoalgebra",
          "package": "algebra",
          "partial": "Counital Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#t:CounitalCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "Unital",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#Unital",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "Unital",
          "package": "algebra",
          "partial": "Unital",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#t:Unital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative unital algebra over a semiring, built using a free module\n\u003c/p\u003e",
          "module": "Numeric.Algebra.Unital",
          "name": "UnitalAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#UnitalAlgebra",
          "type": "class"
        },
        "index": {
          "description": "An associative unital algebra over semiring built using free module",
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "UnitalAlgebra",
          "package": "algebra",
          "partial": "Unital Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#t:UnitalAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "counit",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#counit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "counit",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "one",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Unital.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "one",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "pow",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#pow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "pow",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra.Unital\",\"Numeric.Algebra\"]",
          "name": "product",
          "package": "algebra",
          "signature": "f r -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#product",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:product\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:product\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "product",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "productWith",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#productWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "productWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:productWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra.Unital",
          "name": "unit",
          "package": "algebra",
          "signature": "r -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra Unital",
          "module": "Numeric.Algebra.Unital",
          "name": "unit",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra-Unital.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Algebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Algebra",
          "package": "algebra",
          "partial": "Algebra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean additive abelian semigroup\n\u003c/p\u003e\u003cp\u003ea + b = b + a\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Abelian",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Abelian",
          "type": "class"
        },
        "index": {
          "description": "an additive abelian semigroup",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Abelian",
          "package": "algebra",
          "partial": "Abelian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Abelian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (a + b) + c = a + (b + c)\n sinnum 1 a = a\n sinnum (2 * n) a = sinnum n a + sinnum n a\n sinnum (2 * n + 1) a = sinnum n a + sinnum n a + a\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "Additive",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Additive",
          "type": "class"
        },
        "index": {
          "description": "sinnum sinnum sinnum sinnum sinnum sinnum sinnum",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Additive",
          "package": "algebra",
          "partial": "Additive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Additive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ez + x \u003c= z + y = x \u003c= y = x + z \u003c= y + z\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "AdditiveOrder",
          "package": "algebra",
          "source": "src/Numeric-Order-Additive.html#AdditiveOrder",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "AdditiveOrder",
          "package": "algebra",
          "partial": "Additive Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:AdditiveOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative algebra built with a free module over a semiring\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Algebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Algebra",
          "type": "class"
        },
        "index": {
          "description": "An associative algebra built with free module over semiring",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Algebra",
          "package": "algebra",
          "partial": "Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn multiplicative semigroup with idempotent multiplication.\n\u003c/p\u003e\u003cpre\u003e a * a = a\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "Band",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#Band",
          "type": "class"
        },
        "index": {
          "description": "An multiplicative semigroup with idempotent multiplication",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Band",
          "package": "algebra",
          "partial": "Band",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Band"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bialgebra is both a unital algebra and counital coalgebra \n where the \u003ccode\u003e\u003ca\u003emult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e are compatible in some sense with \n the \u003ccode\u003e\u003ca\u003ecomult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e. That is to say that \n \u003ccode\u003e\u003ca\u003emult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e are a coalgebra homomorphisms or (equivalently) that \n \u003ccode\u003e\u003ca\u003ecomult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecounit\u003c/a\u003e\u003c/code\u003e are an algebra homomorphisms.\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Bialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#Bialgebra",
          "type": "class"
        },
        "index": {
          "description": "bialgebra is both unital algebra and counital coalgebra where the mult and unit are compatible in some sense with the comult and counit That is to say that mult and unit are coalgebra homomorphisms or equivalently that comult and counit are an algebra homomorphisms",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Bialgebra",
          "package": "algebra",
          "partial": "Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Bialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Characteristic",
          "package": "algebra",
          "source": "src/Numeric-Rig-Characteristic.html#Characteristic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Characteristic",
          "package": "algebra",
          "partial": "Characteristic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Characteristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Coalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Coalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Coalgebra",
          "package": "algebra",
          "partial": "Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Coalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "CocommutativeCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CocommutativeCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "CocommutativeCoalgebra",
          "package": "algebra",
          "partial": "Cocommutative Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:CocommutativeCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA commutative multiplicative semigroup\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Commutative",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#Commutative",
          "type": "class"
        },
        "index": {
          "description": "commutative multiplicative semigroup",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Commutative",
          "package": "algebra",
          "partial": "Commutative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Commutative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "CommutativeAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CommutativeAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "CommutativeAlgebra",
          "package": "algebra",
          "partial": "Commutative Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:CommutativeAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "CommutativeBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Commutative.html#CommutativeBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "CommutativeBialgebra",
          "package": "algebra",
          "partial": "Commutative Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:CommutativeBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "CounitalCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#CounitalCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "CounitalCoalgebra",
          "package": "algebra",
          "partial": "Counital Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:CounitalCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear functionals from elements of an (infinite) free module to a scalar\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Covector",
          "package": "algebra",
          "source": "src/Numeric-Covector.html#Covector",
          "type": "newtype"
        },
        "index": {
          "description": "Linear functionals from elements of an infinite free module to scalar",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Covector",
          "package": "algebra",
          "partial": "Covector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "DecidableAssociates",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Associates.html#DecidableAssociates",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "DecidableAssociates",
          "package": "algebra",
          "partial": "Decidable Associates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:DecidableAssociates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "DecidableUnits",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Units.html#DecidableUnits",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "DecidableUnits",
          "package": "algebra",
          "partial": "Decidable Units",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:DecidableUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "DecidableZero",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Zero.html#DecidableZero",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "DecidableZero",
          "package": "algebra",
          "partial": "Decidable Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:DecidableZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Dioid",
          "package": "algebra",
          "source": "src/Numeric-Dioid-Class.html#Dioid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Dioid",
          "package": "algebra",
          "partial": "Dioid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Dioid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Division",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Division.html#Division",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Division",
          "package": "algebra",
          "partial": "Division",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Division"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "DivisionAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Division.html#DivisionAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "DivisionAlgebra",
          "package": "algebra",
          "partial": "Division Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:DivisionAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "DivisionRing",
          "package": "algebra",
          "source": "src/Numeric-Ring-Division.html#DivisionRing",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "DivisionRing",
          "package": "algebra",
          "partial": "Division Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:DivisionRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`factorWith f c` returns a non-empty list containing `f a b` for all `a, b` such that `a * b = c`.\n\u003c/p\u003e\u003cp\u003eResults of factorWith f 0 are undefined and may result in either an error or an infinite list.\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Factorable",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Factorable.html#Factorable",
          "type": "class"
        },
        "index": {
          "description": "factorWith returns non-empty list containing for all such that Results of factorWith are undefined and may result in either an error or an infinite list",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Factorable",
          "package": "algebra",
          "partial": "Factorable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Factorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Field",
          "package": "algebra",
          "source": "src/Numeric-Field-Class.html#Field",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Field",
          "package": "algebra",
          "partial": "Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Group",
          "package": "algebra",
          "source": "src/Numeric-Additive-Group.html#Group",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Group",
          "package": "algebra",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HopfAlgebra algebra on a semiring, where the module is free.\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003eantipode . antipode = id\u003c/code\u003e and antipode is an antihomomorphism then we are an InvolutiveBialgebra with \u003ccode\u003einv = antipode\u003c/code\u003e as well\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "HopfAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Hopf.html#HopfAlgebra",
          "type": "class"
        },
        "index": {
          "description": "HopfAlgebra algebra on semiring where the module is free When antipode antipode id and antipode is an antihomomorphism then we are an InvolutiveBialgebra with inv antipode as well",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "HopfAlgebra",
          "package": "algebra",
          "partial": "Hopf Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:HopfAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additive semigroup with idempotent addition.\n\u003c/p\u003e\u003cpre\u003e a + a = a\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "Idempotent",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Idempotent",
          "type": "class"
        },
        "index": {
          "description": "An additive semigroup with idempotent addition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Idempotent",
          "package": "algebra",
          "partial": "Idempotent",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Idempotent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "IdempotentAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#IdempotentAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "IdempotentAlgebra",
          "package": "algebra",
          "partial": "Idempotent Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:IdempotentAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "IdempotentBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#IdempotentBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "IdempotentBialgebra",
          "package": "algebra",
          "partial": "Idempotent Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:IdempotentBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "InvolutiveAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "InvolutiveAlgebra",
          "package": "algebra",
          "partial": "Involutive Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:InvolutiveAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "InvolutiveBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "InvolutiveBialgebra",
          "package": "algebra",
          "partial": "Involutive Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:InvolutiveBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "InvolutiveCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "InvolutiveCoalgebra",
          "package": "algebra",
          "partial": "Involutive Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:InvolutiveCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn semigroup with involution\n\u003c/p\u003e\u003cpre\u003e adjoint a * adjoint b = adjoint (b * a)\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "InvolutiveMultiplication",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveMultiplication",
          "type": "class"
        },
        "index": {
          "description": "An semigroup with involution adjoint adjoint adjoint",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "InvolutiveMultiplication",
          "package": "algebra",
          "partial": "Involutive Multiplication",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:InvolutiveMultiplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadjoint (x + y) = adjoint x + adjoint y\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveSemiring",
          "type": "class"
        },
        "index": {
          "description": "adjoint adjoint adjoint",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "partial": "Involutive Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:InvolutiveSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "LeftModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#LeftModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "LeftModule",
          "package": "algebra",
          "partial": "Left Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:LeftModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "LocalRing",
          "package": "algebra",
          "source": "src/Numeric-Ring-Local.html#LocalRing",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "LocalRing",
          "package": "algebra",
          "partial": "Local Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:LocalRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "LocallyFiniteOrder",
          "package": "algebra",
          "source": "src/Numeric-Order-LocallyFinite.html#LocallyFiniteOrder",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "LocallyFiniteOrder",
          "package": "algebra",
          "partial": "Locally Finite Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:LocallyFiniteOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Module",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Module",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Module",
          "package": "algebra",
          "partial": "Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additive monoid\n\u003c/p\u003e\u003cpre\u003e zero + a = a = a + zero\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "Monoidal",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Monoidal",
          "type": "class"
        },
        "index": {
          "description": "An additive monoid zero zero",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Monoidal",
          "package": "algebra",
          "partial": "Monoidal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Monoidal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiplicative semigroup\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Multiplicative",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Multiplicative",
          "type": "class"
        },
        "index": {
          "description": "multiplicative semigroup",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Multiplicative",
          "package": "algebra",
          "partial": "Multiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Natural",
          "package": "algebra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Natural",
          "package": "algebra",
          "partial": "Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Order",
          "package": "algebra",
          "source": "src/Numeric-Order-Class.html#Order",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Order",
          "package": "algebra",
          "partial": "Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "OrderedRig",
          "package": "algebra",
          "source": "src/Numeric-Rig-Ordered.html#OrderedRig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "OrderedRig",
          "package": "algebra",
          "partial": "Ordered Rig",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:OrderedRig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Partitionable",
          "package": "algebra",
          "source": "src/Numeric-Additive-Class.html#Partitionable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Partitionable",
          "package": "algebra",
          "partial": "Partitionable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Partitionable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Quadrance",
          "package": "algebra",
          "source": "src/Numeric-Quadrance-Class.html#Quadrance",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Quadrance",
          "package": "algebra",
          "partial": "Quadrance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Quadrance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ring without (n)egation\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Rig",
          "package": "algebra",
          "source": "src/Numeric-Rig-Class.html#Rig",
          "type": "class"
        },
        "index": {
          "description": "Ring without egation",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Rig",
          "package": "algebra",
          "partial": "Rig",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Rig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "RightModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#RightModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "RightModule",
          "package": "algebra",
          "partial": "Right Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:RightModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Ring",
          "package": "algebra",
          "source": "src/Numeric-Ring-Class.html#Ring",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Ring",
          "package": "algebra",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ring without an \u003cem\u003ei\u003c/em\u003edentity.\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Rng",
          "package": "algebra",
          "source": "src/Numeric-Rng-Class.html#Rng",
          "type": "class"
        },
        "index": {
          "description": "Ring without an dentity",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Rng",
          "package": "algebra",
          "partial": "Rng",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Rng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair of an additive abelian semigroup, and a multiplicative semigroup, with the distributive laws:\n\u003c/p\u003e\u003cpre\u003e a(b + c) = ab + ac -- left distribution (we are a LeftNearSemiring)\n (a + b)c = ac + bc -- right distribution (we are a [Right]NearSemiring)\n\u003c/pre\u003e\u003cp\u003eCommon notation includes the laws for additive and multiplicative identity in semiring.\n\u003c/p\u003e\u003cp\u003eIf you want that, look at \u003ccode\u003eRig\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eIdeally we'd use the cyclic definition:\n\u003c/p\u003e\u003cpre\u003e class (LeftModule r r, RightModule r r, Additive r, Abelian r, Multiplicative r) =\u003e Semiring r\n\u003c/pre\u003e\u003cp\u003eto enforce that every semiring r is an r-module over itself, but Haskell doesn't like that.\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Semiring",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Semiring",
          "type": "class"
        },
        "index": {
          "description": "pair of an additive abelian semigroup and multiplicative semigroup with the distributive laws ab ac left distribution we are LeftNearSemiring ac bc right distribution we are Right NearSemiring Common notation includes the laws for additive and multiplicative identity in semiring If you want that look at Rig instead Ideally we use the cyclic definition class LeftModule RightModule Additive Abelian Multiplicative Semiring to enforce that every semiring is an r-module over itself but Haskell doesn like that",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Semiring",
          "package": "algebra",
          "partial": "Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Semiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e adjoint = id\n\u003c/pre\u003e",
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutive",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutive",
          "type": "class"
        },
        "index": {
          "description": "adjoint id",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutive",
          "package": "algebra",
          "partial": "Trivially Involutive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:TriviallyInvolutive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveAlgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveAlgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:TriviallyInvolutiveAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveBialgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveBialgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveBialgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Bialgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:TriviallyInvolutiveBialgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveCoalgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#TriviallyInvolutiveCoalgebra",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "TriviallyInvolutiveCoalgebra",
          "package": "algebra",
          "partial": "Trivially Involutive Coalgebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:TriviallyInvolutiveCoalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "Unital",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#Unital",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Unital",
          "package": "algebra",
          "partial": "Unital",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Unital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative unital algebra over a semiring, built using a free module\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "UnitalAlgebra",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Unital.html#UnitalAlgebra",
          "type": "class"
        },
        "index": {
          "description": "An associative unital algebra over semiring built using free module",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "UnitalAlgebra",
          "package": "algebra",
          "partial": "Unital Algebra",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:UnitalAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA refinement of \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e to represent types that do not contain negative numbers.\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "Whole",
          "package": "algebra",
          "type": "class"
        },
        "index": {
          "description": "refinement of Integral to represent types that do not contain negative numbers",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Whole",
          "package": "algebra",
          "partial": "Whole",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#t:Whole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(~~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#~~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(~~) ~~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(*)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(*.)",
          "package": "algebra",
          "signature": "m -\u003e r -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#%2A.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(*.) *.",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "m-\u003er-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(+)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(-)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#-",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(/)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%2F",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(/~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%2F~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(/~) /~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-47--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(\u003c)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(\u003c~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3C~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(\u003c~) \u003c~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(\u003e)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(\u003e~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3E~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(\u003e~) \u003e~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(\\\\)",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%5C%5C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(\\\\) \\\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(^)",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "(.*)",
          "package": "algebra",
          "signature": "r -\u003e m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#.%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "(.*) .*",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "r-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "Covector",
          "package": "algebra",
          "signature": "Covector ((a -\u003e r) -\u003e r)",
          "source": "src/Numeric-Covector.html#Covector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:Covector\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:Covector\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "Covector",
          "normalized": "Covector((a-\u003eb)-\u003eb)",
          "package": "algebra",
          "partial": "Covector",
          "signature": "Covector((a-\u003er)-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:Covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`Additive.(+)` default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "addRep",
          "package": "algebra",
          "signature": "m r -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#addRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:addRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:addRep\"]"
        },
        "index": {
          "description": "Additive default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "addRep",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "algebra",
          "partial": "Rep",
          "signature": "m r-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:addRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "adjoint",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#adjoint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "adjoint",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:adjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "antipode",
          "package": "algebra",
          "signature": "(h -\u003e r) -\u003e h -\u003e r",
          "source": "src/Numeric-Algebra-Hopf.html#antipode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "antipode",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(h-\u003er)-\u003eh-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:antipode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvolveM antipodeM return = convolveM return antipodeM = comultM \u003e=\u003e uncurry joinM\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "antipodeM",
          "package": "algebra",
          "signature": "h -\u003e Covector r h",
          "source": "src/Numeric-Covector.html#antipodeM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:antipodeM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:antipodeM\"]"
        },
        "index": {
          "description": "convolveM antipodeM return convolveM return antipodeM comultM uncurry joinM",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "antipodeM",
          "normalized": "a-\u003eCovector b a",
          "package": "algebra",
          "signature": "h-\u003eCovector r h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:antipodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "char",
          "package": "algebra",
          "signature": "proxy r -\u003e Natural",
          "source": "src/Numeric-Rig-Characteristic.html#char",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "char",
          "normalized": "a b-\u003eNatural",
          "package": "algebra",
          "signature": "proxy r-\u003eNatural",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Rig.Characteristic\"]",
          "name": "charInt",
          "package": "algebra",
          "signature": "proxy s -\u003e Natural",
          "source": "src/Numeric-Rig-Characteristic.html#charInt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:charInt\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Characteristic.html#v:charInt\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "charInt",
          "normalized": "a b-\u003eNatural",
          "package": "algebra",
          "partial": "Int",
          "signature": "proxy s-\u003eNatural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:charInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Rig.Characteristic\"]",
          "name": "charWord",
          "package": "algebra",
          "signature": "proxy s -\u003e Natural",
          "source": "src/Numeric-Rig-Characteristic.html#charWord",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:charWord\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Characteristic.html#v:charWord\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "charWord",
          "normalized": "a b-\u003eNatural",
          "package": "algebra",
          "partial": "Word",
          "signature": "proxy s-\u003eNatural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:charWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "coinv",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e c -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#coinv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "coinv",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003ec-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:coinv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "coinvM",
          "package": "algebra",
          "signature": "h -\u003e Covector r h",
          "source": "src/Numeric-Covector.html#coinvM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:coinvM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:coinvM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "coinvM",
          "normalized": "a-\u003eCovector b a",
          "package": "algebra",
          "signature": "h-\u003eCovector r h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:coinvM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "comparable",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#comparable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "comparable",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:comparable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "comult",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e c -\u003e c -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#comult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "comult",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003ec-\u003ec-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:comult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "comultM",
          "package": "algebra",
          "signature": "a -\u003e Covector r (a, a)",
          "source": "src/Numeric-Covector.html#comultM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:comultM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:comultM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "comultM",
          "normalized": "a-\u003eCovector b(a,a)",
          "package": "algebra",
          "signature": "a-\u003eCovector r(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:comultM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "convolveM",
          "package": "algebra",
          "signature": "(c -\u003e Covector r a) -\u003e (c -\u003e Covector r a) -\u003e c -\u003e Covector r a",
          "source": "src/Numeric-Covector.html#convolveM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:convolveM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:convolveM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "convolveM",
          "normalized": "(a-\u003eCovector b c)-\u003e(a-\u003eCovector b c)-\u003ea-\u003eCovector b c",
          "package": "algebra",
          "signature": "(c-\u003eCovector r a)-\u003e(c-\u003eCovector r a)-\u003ec-\u003eCovector r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:convolveM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "counit",
          "package": "algebra",
          "signature": "(c -\u003e r) -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#counit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "counit",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "algebra",
          "signature": "(c-\u003er)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:counit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "counitM",
          "package": "algebra",
          "signature": "a -\u003e Covector r ()",
          "source": "src/Numeric-Covector.html#counitM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:counitM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:counitM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "counitM",
          "normalized": "a-\u003eCovector b()",
          "package": "algebra",
          "signature": "a-\u003eCovector r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:counitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "factorWith",
          "package": "algebra",
          "signature": "(m -\u003e m -\u003e r) -\u003e m -\u003e NonEmpty r",
          "source": "src/Numeric-Algebra-Factorable.html#factorWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "factorWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eNonEmpty b",
          "package": "algebra",
          "partial": "With",
          "signature": "(m-\u003em-\u003er)-\u003em-\u003eNonEmpty r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:factorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "fromInteger",
          "package": "algebra",
          "signature": "Integer -\u003e r",
          "source": "src/Numeric-Ring-Class.html#fromInteger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "algebra",
          "partial": "Integer",
          "signature": "Integer-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "fromIntegerRep",
          "package": "algebra",
          "signature": "Integer -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#fromIntegerRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromIntegerRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:fromIntegerRep\"]"
        },
        "index": {
          "description": "fromInteger default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "fromIntegerRep",
          "normalized": "Integer-\u003ea b",
          "package": "algebra",
          "partial": "Integer Rep",
          "signature": "Integer-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromIntegerRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "fromNatural",
          "package": "algebra",
          "signature": "Natural -\u003e r",
          "source": "src/Numeric-Rig-Class.html#fromNatural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "fromNatural",
          "normalized": "Natural-\u003ea",
          "package": "algebra",
          "partial": "Natural",
          "signature": "Natural-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromNatural\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "fromNaturalRep",
          "package": "algebra",
          "signature": "Natural -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#fromNaturalRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromNaturalRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:fromNaturalRep\"]"
        },
        "index": {
          "description": "fromNatural default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "fromNaturalRep",
          "normalized": "Natural-\u003ea b",
          "package": "algebra",
          "partial": "Natural Rep",
          "signature": "Natural-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:fromNaturalRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "inv",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Involutive.html#inv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "inv",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "invM",
          "package": "algebra",
          "signature": "h -\u003e Covector r h",
          "source": "src/Numeric-Covector.html#invM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:invM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:invM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "invM",
          "normalized": "a-\u003eCovector b a",
          "package": "algebra",
          "signature": "h-\u003eCovector r h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:invM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "memoM",
          "package": "algebra",
          "signature": "a -\u003e Covector s a",
          "source": "src/Numeric-Covector.html#memoM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:memoM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:memoM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "memoM",
          "normalized": "a-\u003eCovector b a",
          "package": "algebra",
          "signature": "a-\u003eCovector s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:memoM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`Group.(-)` default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "minusRep",
          "package": "algebra",
          "signature": "m r -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#minusRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:minusRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:minusRep\"]"
        },
        "index": {
          "description": "Group default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "minusRep",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "algebra",
          "partial": "Rep",
          "signature": "m r-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:minusRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e`Multiplicative.(*)` default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "mulRep",
          "package": "algebra",
          "signature": "m r -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#mulRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:mulRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:mulRep\"]"
        },
        "index": {
          "description": "Multiplicative default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "mulRep",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "algebra",
          "partial": "Rep",
          "signature": "m r-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:mulRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "mult",
          "package": "algebra",
          "signature": "(a -\u003e a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#mult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "mult",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003ea-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "multM",
          "package": "algebra",
          "signature": "c -\u003e c -\u003e Covector r c",
          "source": "src/Numeric-Covector.html#multM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:multM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:multM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "multM",
          "normalized": "a-\u003ea-\u003eCovector b a",
          "package": "algebra",
          "signature": "c-\u003ec-\u003eCovector r c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:multM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "negate",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#negate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "negateRep",
          "package": "algebra",
          "signature": "m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#negateRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:negateRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:negateRep\"]"
        },
        "index": {
          "description": "negate default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "negateRep",
          "normalized": "a b-\u003ea b",
          "package": "algebra",
          "partial": "Rep",
          "signature": "m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:negateRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "one",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Unital.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "one",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eone\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "oneRep",
          "package": "algebra",
          "signature": "m r",
          "source": "src/Numeric-Module-Representable.html#oneRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:oneRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:oneRep\"]"
        },
        "index": {
          "description": "one default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "oneRep",
          "package": "algebra",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:oneRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "order",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Numeric-Order-Class.html#order",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "order",
          "normalized": "a-\u003ea-\u003eMaybe Ordering",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eMaybe Ordering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epartitionWith f c returns a list containing f a b for each a b such that a + b = c, \n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "partitionWith",
          "package": "algebra",
          "signature": "(m -\u003e m -\u003e r) -\u003e m -\u003e NonEmpty r",
          "source": "src/Numeric-Additive-Class.html#partitionWith",
          "type": "method"
        },
        "index": {
          "description": "partitionWith returns list containing for each such that",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "partitionWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003eNonEmpty b",
          "package": "algebra",
          "partial": "With",
          "signature": "(m-\u003em-\u003er)-\u003em-\u003eNonEmpty r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:partitionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "pow",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#pow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "pow",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "pow1p",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#pow1p",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "pow1p",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003en-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:pow1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "productWith",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#productWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "productWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:productWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "productWith1",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Algebra-Class.html#productWith1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "productWith1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:productWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "quadrance",
          "package": "algebra",
          "signature": "m -\u003e r",
          "source": "src/Numeric-Quadrance-Class.html#quadrance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "quadrance",
          "normalized": "a-\u003eb",
          "package": "algebra",
          "signature": "m-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:quadrance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "recip",
          "package": "algebra",
          "signature": "r -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#recip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "recipriocal",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Division.html#recipriocal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "recipriocal",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "algebra",
          "signature": "(a-\u003er)-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:recipriocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "sinnum",
          "package": "algebra",
          "signature": "n -\u003e m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#sinnum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sinnum",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esinnum1p n r = sinnum (1 + n) r\n\u003c/p\u003e",
          "module": "Numeric.Algebra",
          "name": "sinnum1p",
          "package": "algebra",
          "signature": "n -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sinnum1p",
          "type": "method"
        },
        "index": {
          "description": "sinnum1p sinnum",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sinnum1p",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnum1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esinnum1p\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "sinnum1pRep",
          "package": "algebra",
          "signature": "n -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#sinnum1pRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnum1pRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:sinnum1pRep\"]"
        },
        "index": {
          "description": "sinnum1p default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sinnum1pRep",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "algebra",
          "partial": "Rep",
          "signature": "n-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnum1pRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esinnum\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "sinnumRep",
          "package": "algebra",
          "signature": "n -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#sinnumRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnumRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:sinnumRep\"]"
        },
        "index": {
          "description": "sinnum default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sinnumRep",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "algebra",
          "partial": "Rep",
          "signature": "n-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sinnumRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "subtract",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#subtract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "algebra",
          "signature": "r-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "subtractRep",
          "package": "algebra",
          "signature": "m r -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#subtractRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:subtractRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:subtractRep\"]"
        },
        "index": {
          "description": "subtract default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "subtractRep",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "algebra",
          "partial": "Rep",
          "signature": "m r-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:subtractRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "sumWith",
          "package": "algebra",
          "signature": "(a -\u003e m) -\u003e f a -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#sumWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sumWith",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003em)-\u003ef a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sumWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "sumWith1",
          "package": "algebra",
          "signature": "(a -\u003e r) -\u003e f a -\u003e r",
          "source": "src/Numeric-Additive-Class.html#sumWith1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "sumWith1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "algebra",
          "partial": "With",
          "signature": "(a-\u003er)-\u003ef a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:sumWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "times",
          "package": "algebra",
          "signature": "n -\u003e r -\u003e r",
          "source": "src/Numeric-Additive-Group.html#times",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "times",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "n-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimes\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "timesRep",
          "package": "algebra",
          "signature": "n -\u003e m r -\u003e m r",
          "source": "src/Numeric-Module-Representable.html#timesRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:timesRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:timesRep\"]"
        },
        "index": {
          "description": "times default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "timesRep",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "algebra",
          "partial": "Rep",
          "signature": "n-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:timesRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "toNatural",
          "package": "algebra",
          "signature": "n -\u003e Natural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "toNatural",
          "normalized": "a-\u003eNatural",
          "package": "algebra",
          "partial": "Natural",
          "signature": "n-\u003eNatural",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:toNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "unit",
          "package": "algebra",
          "signature": "r -\u003e a -\u003e r",
          "source": "src/Numeric-Algebra-Unital.html#unit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "unit",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "r-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.Algebra\",\"Numeric.Covector\"]",
          "name": "unitM",
          "package": "algebra",
          "signature": "Covector r c",
          "source": "src/Numeric-Covector.html#unitM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:unitM\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:unitM\"]"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "unitM",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:unitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Algebra",
          "name": "zero",
          "package": "algebra",
          "signature": "m",
          "source": "src/Numeric-Algebra-Class.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "zero",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e default definition\n\u003c/p\u003e",
          "module": "[\"Numeric.Algebra\",\"Numeric.Module.Representable\"]",
          "name": "zeroRep",
          "package": "algebra",
          "signature": "m r",
          "source": "src/Numeric-Module-Representable.html#zeroRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:zeroRep\",\"http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#v:zeroRep\"]"
        },
        "index": {
          "description": "zero default definition",
          "hierarchy": "Numeric Algebra",
          "module": "Numeric.Algebra",
          "name": "zeroRep",
          "package": "algebra",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Algebra.html#v:zeroRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Band.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Band-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Band Class",
          "module": "Numeric.Band.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn multiplicative semigroup with idempotent multiplication.\n\u003c/p\u003e\u003cpre\u003e a * a = a\n\u003c/pre\u003e",
          "module": "Numeric.Band.Class",
          "name": "Band",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Idempotent.html#Band",
          "type": "class"
        },
        "index": {
          "description": "An multiplicative semigroup with idempotent multiplication",
          "hierarchy": "Numeric Band Class",
          "module": "Numeric.Band.Class",
          "name": "Band",
          "package": "algebra",
          "partial": "Band",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Class.html#t:Band"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Band.Rectangular",
          "name": "Rectangular",
          "package": "algebra",
          "source": "src/Numeric-Band-Rectangular.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Band Rectangular",
          "module": "Numeric.Band.Rectangular",
          "name": "Rectangular",
          "package": "algebra",
          "partial": "Rectangular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Rectangular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea rectangular band is a nowhere commutative semigroup.\n That is to say, if ab = ba then a = b. From this it follows\n classically that aa = a and that such a band is isomorphic \n to the following structure\n\u003c/p\u003e",
          "module": "Numeric.Band.Rectangular",
          "name": "Rect",
          "package": "algebra",
          "source": "src/Numeric-Band-Rectangular.html#Rect",
          "type": "data"
        },
        "index": {
          "description": "rectangular band is nowhere commutative semigroup That is to say if ab ba then From this it follows classically that aa and that such band is isomorphic to the following structure",
          "hierarchy": "Numeric Band Rectangular",
          "module": "Numeric.Band.Rectangular",
          "name": "Rect",
          "package": "algebra",
          "partial": "Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Rectangular.html#t:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Band.Rectangular",
          "name": "Rect",
          "package": "algebra",
          "signature": "Rect i j",
          "source": "src/Numeric-Band-Rectangular.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Band Rectangular",
          "module": "Numeric.Band.Rectangular",
          "name": "Rect",
          "package": "algebra",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Band-Rectangular.html#v:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Categorical",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Categorical.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Categorical",
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Categorical",
          "package": "algebra",
          "partial": "Categorical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Categorical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Morphism",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Categorical.html#Morphism",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Categorical",
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Morphism",
          "package": "algebra",
          "partial": "Morphism",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Categorical.html#t:Morphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Morphism",
          "package": "algebra",
          "signature": "Morphism a",
          "source": "src/Numeric-Coalgebra-Categorical.html#Morphism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Categorical",
          "module": "Numeric.Coalgebra.Categorical",
          "name": "Morphism",
          "package": "algebra",
          "partial": "Morphism",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Categorical.html#v:Morphism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Dual.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual",
          "package": "algebra",
          "partial": "Dual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual'",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Dual.html#Dual%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual'",
          "package": "algebra",
          "partial": "Dual'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#t:Dual-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edual number basis, D^2 = 0. D /= 0.\n\u003c/p\u003e",
          "module": "Numeric.Coalgebra.Dual",
          "name": "DualBasis'",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Dual.html#DualBasis%27",
          "type": "data"
        },
        "index": {
          "description": "dual number basis",
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "DualBasis'",
          "package": "algebra",
          "partial": "Dual Basis'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#t:DualBasis-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "Infinitesimal",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Dual-Class.html#Infinitesimal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "Infinitesimal",
          "package": "algebra",
          "partial": "Infinitesimal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#t:Infinitesimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "D",
          "package": "algebra",
          "signature": "D",
          "source": "src/Numeric-Coalgebra-Dual.html#DualBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "D",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual'",
          "package": "algebra",
          "signature": "Dual' a a",
          "source": "src/Numeric-Coalgebra-Dual.html#Dual%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "Dual'",
          "package": "algebra",
          "partial": "Dual'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#v:Dual-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "E",
          "package": "algebra",
          "signature": "E",
          "source": "src/Numeric-Coalgebra-Dual.html#DualBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "E",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "d",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Dual-Class.html#d",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "d",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Dual",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Dual",
          "module": "Numeric.Coalgebra.Dual",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Dual.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Geometric",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Geometric",
          "package": "algebra",
          "partial": "Geometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "BasisCoblade",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html#BasisCoblade",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "BasisCoblade",
          "package": "algebra",
          "partial": "Basis Coblade",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#t:BasisCoblade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Comultivector",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html#Comultivector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Comultivector",
          "package": "algebra",
          "partial": "Comultivector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#t:Comultivector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Eigenbasis",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html#Eigenbasis",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Eigenbasis",
          "package": "algebra",
          "partial": "Eigenbasis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#t:Eigenbasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Eigenmetric",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html#Eigenmetric",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Eigenmetric",
          "package": "algebra",
          "partial": "Eigenmetric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#t:Eigenmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Euclidean",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Geometric.html#Euclidean",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Euclidean",
          "package": "algebra",
          "partial": "Euclidean",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#t:Euclidean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "BasisCoblade",
          "package": "algebra",
          "signature": "BasisCoblade",
          "source": "src/Numeric-Coalgebra-Geometric.html#BasisCoblade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "BasisCoblade",
          "package": "algebra",
          "partial": "Basis Coblade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:BasisCoblade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Euclidean",
          "package": "algebra",
          "signature": "Euclidean Int",
          "source": "src/Numeric-Coalgebra-Geometric.html#Euclidean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "Euclidean",
          "package": "algebra",
          "partial": "Euclidean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:Euclidean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "antiEuclidean",
          "package": "algebra",
          "signature": "proxy m -\u003e Bool",
          "source": "src/Numeric-Coalgebra-Geometric.html#antiEuclidean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "antiEuclidean",
          "normalized": "a b-\u003eBool",
          "package": "algebra",
          "partial": "Euclidean",
          "signature": "proxy m-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:antiEuclidean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "cliffordConjugate",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#cliffordConjugate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "cliffordConjugate",
          "normalized": "BasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "partial": "Conjugate",
          "signature": "BasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:cliffordConjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "contractL",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#contractL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "contractL",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:contractL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "contractR",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#contractR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "contractR",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:contractR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "dot",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "dot",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "e",
          "package": "algebra",
          "signature": "Int -\u003e m",
          "source": "src/Numeric-Coalgebra-Geometric.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "e",
          "normalized": "Int-\u003ea",
          "package": "algebra",
          "signature": "Int-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "euclidean",
          "package": "algebra",
          "signature": "proxy m -\u003e Bool",
          "source": "src/Numeric-Coalgebra-Geometric.html#euclidean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "euclidean",
          "normalized": "a b-\u003eBool",
          "package": "algebra",
          "signature": "proxy m-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:euclidean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "filterGrade",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e Int -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#filterGrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "filterGrade",
          "normalized": "BasisCoblade a-\u003eInt-\u003eComultivector b a",
          "package": "algebra",
          "partial": "Grade",
          "signature": "BasisCoblade m-\u003eInt-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:filterGrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "geometric",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#geometric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "geometric",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:geometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "grade",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e Int",
          "source": "src/Numeric-Coalgebra-Geometric.html#grade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "grade",
          "normalized": "BasisCoblade a-\u003eInt",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:grade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "gradeInversion",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#gradeInversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "gradeInversion",
          "normalized": "BasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "partial": "Inversion",
          "signature": "BasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:gradeInversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "hestenes",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#hestenes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "hestenes",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:hestenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "liftProduct",
          "package": "algebra",
          "signature": "(BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m) -\u003e Comultivector r m -\u003e Comultivector r m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#liftProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "liftProduct",
          "normalized": "(BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a)-\u003eComultivector b a-\u003eComultivector b a-\u003eComultivector b a",
          "package": "algebra",
          "partial": "Product",
          "signature": "(BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m)-\u003eComultivector r m-\u003eComultivector r m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:liftProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "metric",
          "package": "algebra",
          "signature": "m -\u003e r",
          "source": "src/Numeric-Coalgebra-Geometric.html#metric",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "metric",
          "normalized": "a-\u003eb",
          "package": "algebra",
          "signature": "m-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "outer",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#outer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "outer",
          "normalized": "BasisCoblade a-\u003eBasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eBasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:outer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "reverse",
          "package": "algebra",
          "signature": "BasisCoblade m -\u003e Comultivector r m",
          "source": "src/Numeric-Coalgebra-Geometric.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "reverse",
          "normalized": "BasisCoblade a-\u003eComultivector b a",
          "package": "algebra",
          "signature": "BasisCoblade m-\u003eComultivector r m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "runBasisCoblade",
          "package": "algebra",
          "signature": "Word64",
          "source": "src/Numeric-Coalgebra-Geometric.html#BasisCoblade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "runBasisCoblade",
          "package": "algebra",
          "partial": "Basis Coblade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:runBasisCoblade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Geometric",
          "name": "v",
          "package": "algebra",
          "signature": "m -\u003e BasisCoblade m",
          "source": "src/Numeric-Coalgebra-Geometric.html#v",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Geometric",
          "module": "Numeric.Coalgebra.Geometric",
          "name": "v",
          "normalized": "a-\u003eBasisCoblade a",
          "package": "algebra",
          "signature": "m-\u003eBasisCoblade m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Geometric.html#v:v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic Class",
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "Hyperbolic",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#Hyperbolic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic Class",
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "Hyperbolic",
          "package": "algebra",
          "partial": "Hyperbolic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic-Class.html#t:Hyperbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "cosh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#cosh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic Class",
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "cosh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic-Class.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "sinh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#sinh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic Class",
          "module": "Numeric.Coalgebra.Hyperbolic.Class",
          "name": "sinh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic-Class.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "partial": "Hyperbolic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyper",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html#Hyper",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyper",
          "package": "algebra",
          "partial": "Hyper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#t:Hyper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "HyperBasis",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html#HyperBasis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "HyperBasis",
          "package": "algebra",
          "partial": "Hyper Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#t:HyperBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#Hyperbolic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyperbolic",
          "package": "algebra",
          "partial": "Hyperbolic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#t:Hyperbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Cosh",
          "package": "algebra",
          "signature": "Cosh",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html#HyperBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Cosh",
          "package": "algebra",
          "partial": "Cosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyper",
          "package": "algebra",
          "signature": "Hyper a a",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html#Hyper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Hyper",
          "package": "algebra",
          "partial": "Hyper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#v:Hyper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Sinh",
          "package": "algebra",
          "signature": "Sinh",
          "source": "src/Numeric-Coalgebra-Hyperbolic.html#HyperBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "Sinh",
          "package": "algebra",
          "partial": "Sinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "cosh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#cosh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "cosh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "sinh",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Hyperbolic-Class.html#sinh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Hyperbolic",
          "module": "Numeric.Coalgebra.Hyperbolic",
          "name": "sinh",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Hyperbolic.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Incidence",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Incidence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Incidence",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Incidence",
          "package": "algebra",
          "partial": "Incidence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Incidence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe dual incidence algebra basis\n\u003c/p\u003e",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Interval'",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Incidence.html#Interval%27",
          "type": "data"
        },
        "index": {
          "description": "the dual incidence algebra basis",
          "hierarchy": "Numeric Coalgebra Incidence",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Interval'",
          "package": "algebra",
          "partial": "Interval'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Incidence.html#t:Interval-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Interval'",
          "package": "algebra",
          "signature": "Interval' a a",
          "source": "src/Numeric-Coalgebra-Incidence.html#Interval%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Incidence",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "Interval'",
          "package": "algebra",
          "partial": "Interval'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Incidence.html#v:Interval-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Incidence",
          "name": "moebius'",
          "package": "algebra",
          "signature": "Interval' a -\u003e r",
          "source": "src/Numeric-Coalgebra-Incidence.html#moebius%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Incidence",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "moebius'",
          "normalized": "Interval' a-\u003eb",
          "package": "algebra",
          "signature": "Interval' a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Incidence.html#v:moebius-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Incidence",
          "name": "zeta'",
          "package": "algebra",
          "signature": "Interval' a -\u003e r",
          "source": "src/Numeric-Coalgebra-Incidence.html#zeta%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Incidence",
          "module": "Numeric.Coalgebra.Incidence",
          "name": "zeta'",
          "normalized": "Interval' a-\u003eb",
          "package": "algebra",
          "signature": "Interval' a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Incidence.html#v:zeta-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Quaternion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion",
          "package": "algebra",
          "partial": "Quaternion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Complicated",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Complex-Class.html#Complicated",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Complicated",
          "package": "algebra",
          "partial": "Complicated",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#t:Complicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Distinguished",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#Distinguished",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Distinguished",
          "package": "algebra",
          "partial": "Distinguished",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#t:Distinguished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Hamiltonian",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#Hamiltonian",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Hamiltonian",
          "package": "algebra",
          "partial": "Hamiltonian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#t:Hamiltonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion'",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Quaternion.html#Quaternion%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion'",
          "package": "algebra",
          "partial": "Quaternion'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#t:Quaternion-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "QuaternionBasis'",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Quaternion.html#QuaternionBasis%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "QuaternionBasis'",
          "package": "algebra",
          "partial": "Quaternion Basis'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#t:QuaternionBasis-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "E'",
          "package": "algebra",
          "signature": "E'",
          "source": "src/Numeric-Coalgebra-Quaternion.html#QuaternionBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "E'",
          "package": "algebra",
          "partial": "E'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:E-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "I'",
          "package": "algebra",
          "signature": "I'",
          "source": "src/Numeric-Coalgebra-Quaternion.html#QuaternionBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "I'",
          "package": "algebra",
          "partial": "I'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:I-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "J'",
          "package": "algebra",
          "signature": "J'",
          "source": "src/Numeric-Coalgebra-Quaternion.html#QuaternionBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "J'",
          "package": "algebra",
          "partial": "J'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:J-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "K'",
          "package": "algebra",
          "signature": "K'",
          "source": "src/Numeric-Coalgebra-Quaternion.html#QuaternionBasis%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "K'",
          "package": "algebra",
          "partial": "K'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:K-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion'",
          "package": "algebra",
          "signature": "Quaternion' a a a a",
          "source": "src/Numeric-Coalgebra-Quaternion.html#Quaternion%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "Quaternion'",
          "package": "algebra",
          "partial": "Quaternion'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:Quaternion-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCayley-Dickson quaternion isomorphism (one way)\n\u003c/p\u003e",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "complicate'",
          "package": "algebra",
          "signature": "QuaternionBasis' -\u003e (c, c)",
          "source": "src/Numeric-Coalgebra-Quaternion.html#complicate%27",
          "type": "function"
        },
        "index": {
          "description": "Cayley-Dickson quaternion isomorphism one way",
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "complicate'",
          "normalized": "QuaternionBasis'-\u003e(a,a)",
          "package": "algebra",
          "signature": "QuaternionBasis'-\u003e(c,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:complicate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "e",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Distinguished-Class.html#e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "e",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "i",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Algebra-Complex-Class.html#i",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "i",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "j",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#j",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "j",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "k",
          "package": "algebra",
          "signature": "t",
          "source": "src/Numeric-Algebra-Quaternion-Class.html#k",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "k",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "scalarPart'",
          "package": "algebra",
          "signature": "f r -\u003e r",
          "source": "src/Numeric-Coalgebra-Quaternion.html#scalarPart%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "scalarPart'",
          "normalized": "a b-\u003eb",
          "package": "algebra",
          "partial": "Part'",
          "signature": "f r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:scalarPart-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "vectorPart'",
          "package": "algebra",
          "signature": "f r -\u003e (r, r, r)",
          "source": "src/Numeric-Coalgebra-Quaternion.html#vectorPart%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Quaternion",
          "module": "Numeric.Coalgebra.Quaternion",
          "name": "vectorPart'",
          "normalized": "a b-\u003e(b,b,b)",
          "package": "algebra",
          "partial": "Part'",
          "signature": "f r-\u003e(r,r,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Quaternion.html#v:vectorPart-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric Class",
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "Trigonometric",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#Trigonometric",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric Class",
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "Trigonometric",
          "package": "algebra",
          "partial": "Trigonometric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric-Class.html#t:Trigonometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "cos",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#cos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric Class",
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "cos",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric-Class.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "sin",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#sin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric Class",
          "module": "Numeric.Coalgebra.Trigonometric.Class",
          "name": "sin",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric-Class.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trigonometric",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trigonometric",
          "package": "algebra",
          "partial": "Trigonometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trig",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric.html#Trig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trig",
          "package": "algebra",
          "partial": "Trig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#t:Trig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "TrigBasis",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric.html#TrigBasis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "TrigBasis",
          "package": "algebra",
          "partial": "Trig Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#t:TrigBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trigonometric",
          "package": "algebra",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#Trigonometric",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trigonometric",
          "package": "algebra",
          "partial": "Trigonometric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#t:Trigonometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Cos",
          "package": "algebra",
          "signature": "Cos",
          "source": "src/Numeric-Coalgebra-Trigonometric.html#TrigBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Cos",
          "package": "algebra",
          "partial": "Cos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Sin",
          "package": "algebra",
          "signature": "Sin",
          "source": "src/Numeric-Coalgebra-Trigonometric.html#TrigBasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Sin",
          "package": "algebra",
          "partial": "Sin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trig",
          "package": "algebra",
          "signature": "Trig a a",
          "source": "src/Numeric-Coalgebra-Trigonometric.html#Trig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "Trig",
          "package": "algebra",
          "partial": "Trig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#v:Trig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "cos",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#cos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "cos",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "sin",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Coalgebra-Trigonometric-Class.html#sin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Coalgebra Trigonometric",
          "module": "Numeric.Coalgebra.Trigonometric",
          "name": "sin",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Coalgebra-Trigonometric.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Covector",
          "name": "Covector",
          "package": "algebra",
          "source": "src/Numeric-Covector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Covector",
          "module": "Numeric.Covector",
          "name": "Covector",
          "package": "algebra",
          "partial": "Covector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear functionals from elements of an (infinite) free module to a scalar\n\u003c/p\u003e",
          "module": "Numeric.Covector",
          "name": "Covector",
          "package": "algebra",
          "source": "src/Numeric-Covector.html#Covector",
          "type": "newtype"
        },
        "index": {
          "description": "Linear functionals from elements of an infinite free module to scalar",
          "hierarchy": "Numeric Covector",
          "module": "Numeric.Covector",
          "name": "Covector",
          "package": "algebra",
          "partial": "Covector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#t:Covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Covector",
          "name": "($*)",
          "package": "algebra",
          "signature": "Covector r (Key m) -\u003e m r -\u003e r",
          "source": "src/Numeric-Covector.html#%24%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Covector",
          "module": "Numeric.Covector",
          "name": "($*) $*",
          "normalized": "Covector a(Key b)-\u003eb a-\u003ea",
          "package": "algebra",
          "signature": "Covector r(Key m)-\u003em r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Covector.html#v:-36--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Associates",
          "name": "Associates",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Associates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Decidable Associates",
          "module": "Numeric.Decidable.Associates",
          "name": "Associates",
          "package": "algebra",
          "partial": "Associates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Associates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Associates",
          "name": "DecidableAssociates",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Associates.html#DecidableAssociates",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Decidable Associates",
          "module": "Numeric.Decidable.Associates",
          "name": "DecidableAssociates",
          "package": "algebra",
          "partial": "Decidable Associates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Associates.html#t:DecidableAssociates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eb is an associate of a if there exists a unit u such that b = a*u\n\u003c/p\u003e\u003cp\u003eThis relationship is symmetric because if u is a unit, u^-1 exists and is a unit, so\n\u003c/p\u003e\u003cpre\u003e b*u^-1 = a*u*u^-1 = a\n\u003c/pre\u003e",
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociate",
          "package": "algebra",
          "signature": "r -\u003e r -\u003e Bool",
          "source": "src/Numeric-Decidable-Associates.html#isAssociate",
          "type": "method"
        },
        "index": {
          "description": "is an associate of if there exists unit such that This relationship is symmetric because if is unit exists and is unit so",
          "hierarchy": "Numeric Decidable Associates",
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociate",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "partial": "Associate",
          "signature": "r-\u003er-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Associates.html#v:isAssociate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociateIntegral",
          "package": "algebra",
          "signature": "n -\u003e n -\u003e Bool",
          "source": "src/Numeric-Decidable-Associates.html#isAssociateIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Decidable Associates",
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociateIntegral",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "partial": "Associate Integral",
          "signature": "n-\u003en-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Associates.html#v:isAssociateIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociateWhole",
          "package": "algebra",
          "signature": "n -\u003e n -\u003e Bool",
          "source": "src/Numeric-Decidable-Associates.html#isAssociateWhole",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Decidable Associates",
          "module": "Numeric.Decidable.Associates",
          "name": "isAssociateWhole",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "partial": "Associate Whole",
          "signature": "n-\u003en-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Associates.html#v:isAssociateWhole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "Units",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Units.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "Units",
          "package": "algebra",
          "partial": "Units",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "DecidableUnits",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Units.html#DecidableUnits",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "DecidableUnits",
          "package": "algebra",
          "partial": "Decidable Units",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#t:DecidableUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "(^?)",
          "package": "algebra",
          "signature": "r -\u003e n -\u003e Maybe r",
          "source": "src/Numeric-Decidable-Units.html#%5E%3F",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "(^?) ^?",
          "normalized": "a-\u003eb-\u003eMaybe a",
          "package": "algebra",
          "signature": "r-\u003en-\u003eMaybe r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#v:-94--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "isUnit",
          "package": "algebra",
          "signature": "r -\u003e Bool",
          "source": "src/Numeric-Decidable-Units.html#isUnit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "isUnit",
          "normalized": "a-\u003eBool",
          "package": "algebra",
          "partial": "Unit",
          "signature": "r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#v:isUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "recipUnit",
          "package": "algebra",
          "signature": "r -\u003e Maybe r",
          "source": "src/Numeric-Decidable-Units.html#recipUnit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "recipUnit",
          "normalized": "a-\u003eMaybe a",
          "package": "algebra",
          "partial": "Unit",
          "signature": "r-\u003eMaybe r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#v:recipUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "recipUnitIntegral",
          "package": "algebra",
          "signature": "r -\u003e Maybe r",
          "source": "src/Numeric-Decidable-Units.html#recipUnitIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "recipUnitIntegral",
          "normalized": "a-\u003eMaybe a",
          "package": "algebra",
          "partial": "Unit Integral",
          "signature": "r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#v:recipUnitIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Units",
          "name": "recipUnitWhole",
          "package": "algebra",
          "signature": "r -\u003e Maybe r",
          "source": "src/Numeric-Decidable-Units.html#recipUnitWhole",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Decidable Units",
          "module": "Numeric.Decidable.Units",
          "name": "recipUnitWhole",
          "normalized": "a-\u003eMaybe a",
          "package": "algebra",
          "partial": "Unit Whole",
          "signature": "r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Units.html#v:recipUnitWhole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Zero",
          "name": "Zero",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Zero.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Decidable Zero",
          "module": "Numeric.Decidable.Zero",
          "name": "Zero",
          "package": "algebra",
          "partial": "Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Zero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Zero",
          "name": "DecidableZero",
          "package": "algebra",
          "source": "src/Numeric-Decidable-Zero.html#DecidableZero",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Decidable Zero",
          "module": "Numeric.Decidable.Zero",
          "name": "DecidableZero",
          "package": "algebra",
          "partial": "Decidable Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Zero.html#t:DecidableZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Decidable.Zero",
          "name": "isZero",
          "package": "algebra",
          "signature": "r -\u003e Bool",
          "source": "src/Numeric-Decidable-Zero.html#isZero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Decidable Zero",
          "module": "Numeric.Decidable.Zero",
          "name": "isZero",
          "normalized": "a-\u003eBool",
          "package": "algebra",
          "partial": "Zero",
          "signature": "r-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Decidable-Zero.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Dioid.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Dioid-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Dioid Class",
          "module": "Numeric.Dioid.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Dioid-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Dioid.Class",
          "name": "Dioid",
          "package": "algebra",
          "source": "src/Numeric-Dioid-Class.html#Dioid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Dioid Class",
          "module": "Numeric.Dioid.Class",
          "name": "Dioid",
          "package": "algebra",
          "partial": "Dioid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Dioid-Class.html#t:Dioid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "source": "src/Numeric-Exp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Exp",
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "partial": "Exp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Exp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "source": "src/Numeric-Exp.html#Exp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Exp",
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "partial": "Exp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Exp.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "signature": "Exp",
          "source": "src/Numeric-Exp.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Exp",
          "module": "Numeric.Exp",
          "name": "Exp",
          "package": "algebra",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Exp.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Exp",
          "name": "runExp",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Exp.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Exp",
          "module": "Numeric.Exp",
          "name": "runExp",
          "package": "algebra",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Exp.html#v:runExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Field.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Field-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Field Class",
          "module": "Numeric.Field.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Field-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Field.Class",
          "name": "Field",
          "package": "algebra",
          "source": "src/Numeric-Field-Class.html#Field",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Field Class",
          "module": "Numeric.Field.Class",
          "name": "Field",
          "package": "algebra",
          "partial": "Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Field-Class.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "source": "src/Numeric-Log.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "partial": "Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Log.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "source": "src/Numeric-Log.html#Log",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "partial": "Log",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Log.html#t:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "signature": "Log",
          "source": "src/Numeric-Log.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "algebra",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Log.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "runLog",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Log.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "runLog",
          "package": "algebra",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Log.html#v:runLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "Map",
          "package": "algebra",
          "source": "src/Numeric-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "Map",
          "package": "algebra",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinear maps from elements of a free module to another free module over r\n\u003c/p\u003e\u003cpre\u003e f $# x + y = (f $# x) + (f $# y)\n f $# (r .* x) = r .* (f $# x)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eMap r b a\u003c/code\u003e represents a linear mapping from a free module with basis \u003ccode\u003ea\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e to a free module with basis \u003ccode\u003eb\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote well the reversed direction of the arrow, due to the contravariance of change of basis!\n\u003c/p\u003e\u003cp\u003eThis way enables we can employ arbitrary pure functions as linear maps by lifting them using \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, or build them\n by using the monad instance for Map r b.  As a consequence Map is an instance of, well, almost everything.\n\u003c/p\u003e",
          "module": "Numeric.Map",
          "name": "Map",
          "package": "algebra",
          "source": "src/Numeric-Map.html#Map",
          "type": "newtype"
        },
        "index": {
          "description": "linear maps from elements of free module to another free module over Map represents linear mapping from free module with basis over to free module with basis over Note well the reversed direction of the arrow due to the contravariance of change of basis This way enables we can employ arbitrary pure functions as linear maps by lifting them using arr or build them by using the monad instance for Map As consequence Map is an instance of well almost everything",
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "Map",
          "package": "algebra",
          "partial": "Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract a linear functional from a linear map\n\u003c/p\u003e",
          "module": "Numeric.Map",
          "name": "($@)",
          "package": "algebra",
          "signature": "Map r b a -\u003e b -\u003e Covector r a",
          "source": "src/Numeric-Map.html#%24%40",
          "type": "function"
        },
        "index": {
          "description": "extract linear functional from linear map",
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "($@) $@",
          "normalized": "Map a b c-\u003eb-\u003eCovector a c",
          "package": "algebra",
          "signature": "Map r b a-\u003eb-\u003eCovector r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:-36--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "Map",
          "package": "algebra",
          "signature": "Map ((a -\u003e r) -\u003e b -\u003e r)",
          "source": "src/Numeric-Map.html#Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "Map",
          "normalized": "Map((a-\u003eb)-\u003ec-\u003eb)",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map((a-\u003er)-\u003eb-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "antipodeMap",
          "package": "algebra",
          "signature": "Map r h h",
          "source": "src/Numeric-Map.html#antipodeMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "antipodeMap",
          "package": "algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:antipodeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "coinvMap",
          "package": "algebra",
          "signature": "Map r a a",
          "source": "src/Numeric-Map.html#coinvMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "coinvMap",
          "package": "algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:coinvMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "comultMap",
          "package": "algebra",
          "signature": "Map r a (a, a)",
          "source": "src/Numeric-Map.html#comultMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "comultMap",
          "normalized": "Map a b(b,b)",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map r a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:comultMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvolution given an associative algebra and coassociative coalgebra\n\u003c/p\u003e",
          "module": "Numeric.Map",
          "name": "convolveMap",
          "package": "algebra",
          "signature": "Map r a c -\u003e Map r a c -\u003e Map r a c",
          "source": "src/Numeric-Map.html#convolveMap",
          "type": "function"
        },
        "index": {
          "description": "convolution given an associative algebra and coassociative coalgebra",
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "convolveMap",
          "normalized": "Map a b c-\u003eMap a b c-\u003eMap a b c",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map r a c-\u003eMap r a c-\u003eMap r a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:convolveMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "counitMap",
          "package": "algebra",
          "signature": "Map r a ()",
          "source": "src/Numeric-Map.html#counitMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "counitMap",
          "normalized": "Map a b()",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map r a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:counitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "invMap",
          "package": "algebra",
          "signature": "Map r c c",
          "source": "src/Numeric-Map.html#invMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "invMap",
          "package": "algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:invMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(inefficiently) combine a linear combination of basis vectors to make a map.\n arrMap :: (Monoidal r, Semiring r) =\u003e (b -\u003e [(r, a)]) -\u003e Map r b a\n arrMap f = Map $ k b -\u003e sum [ r * k a | (r, a) \u003c- f b ]\n\u003c/p\u003e\u003cp\u003eMemoize the results of this linear map\n\u003c/p\u003e",
          "module": "Numeric.Map",
          "name": "memoMap",
          "package": "algebra",
          "signature": "Map r a a",
          "source": "src/Numeric-Map.html#memoMap",
          "type": "function"
        },
        "index": {
          "description": "inefficiently combine linear combination of basis vectors to make map arrMap Monoidal Semiring Map arrMap Map sum Memoize the results of this linear map",
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "memoMap",
          "package": "algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:memoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "multMap",
          "package": "algebra",
          "signature": "Map r (c, c) c",
          "source": "src/Numeric-Map.html#multMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "multMap",
          "normalized": "Map a(b,b)b",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map r(c,c)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:multMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Map",
          "name": "unitMap",
          "package": "algebra",
          "signature": "Map r () c",
          "source": "src/Numeric-Map.html#unitMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Map",
          "module": "Numeric.Map",
          "name": "unitMap",
          "normalized": "Map a()b",
          "package": "algebra",
          "partial": "Map",
          "signature": "Map r()c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Map.html#v:unitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Module-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "LeftModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#LeftModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "LeftModule",
          "package": "algebra",
          "partial": "Left Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#t:LeftModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "Module",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#Module",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "Module",
          "package": "algebra",
          "partial": "Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "RightModule",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Class.html#RightModule",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "RightModule",
          "package": "algebra",
          "partial": "Right Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#t:RightModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "(*.)",
          "package": "algebra",
          "signature": "m -\u003e r -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#%2A.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "(*.) *.",
          "normalized": "a-\u003eb-\u003ea",
          "package": "algebra",
          "signature": "m-\u003er-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Class",
          "name": "(.*)",
          "package": "algebra",
          "signature": "r -\u003e m -\u003e m",
          "source": "src/Numeric-Algebra-Class.html#.%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Module Class",
          "module": "Numeric.Module.Class",
          "name": "(.*) .*",
          "normalized": "a-\u003eb-\u003eb",
          "package": "algebra",
          "signature": "r-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Class.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Module.Representable",
          "name": "Representable",
          "package": "algebra",
          "source": "src/Numeric-Module-Representable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Module Representable",
          "module": "Numeric.Module.Representable",
          "name": "Representable",
          "package": "algebra",
          "partial": "Representable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Module-Representable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Additive",
          "name": "Additive",
          "package": "algebra",
          "source": "src/Numeric-Order-Additive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Order Additive",
          "module": "Numeric.Order.Additive",
          "name": "Additive",
          "package": "algebra",
          "partial": "Additive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Additive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ez + x \u003c= z + y = x \u003c= y = x + z \u003c= y + z\n\u003c/p\u003e",
          "module": "Numeric.Order.Additive",
          "name": "AdditiveOrder",
          "package": "algebra",
          "source": "src/Numeric-Order-Additive.html#AdditiveOrder",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Order Additive",
          "module": "Numeric.Order.Additive",
          "name": "AdditiveOrder",
          "package": "algebra",
          "partial": "Additive Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Additive.html#t:AdditiveOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Order-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "Order",
          "package": "algebra",
          "source": "src/Numeric-Order-Class.html#Order",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "Order",
          "package": "algebra",
          "partial": "Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(~~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#~~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(~~) ~~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(/~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%2F~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(/~) /~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-47--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(\u003c)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(\u003c~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3C~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(\u003c~) \u003c~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(\u003e)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "(\u003e~)",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#%3E~",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "(\u003e~) \u003e~",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:-62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "comparable",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-Order-Class.html#comparable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "comparable",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:comparable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "order",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Numeric-Order-Class.html#order",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "order",
          "normalized": "a-\u003ea-\u003eMaybe Ordering",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eMaybe Ordering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.Class",
          "name": "orderOrd",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Numeric-Order-Class.html#orderOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Order Class",
          "module": "Numeric.Order.Class",
          "name": "orderOrd",
          "normalized": "a-\u003ea-\u003eMaybe Ordering",
          "package": "algebra",
          "partial": "Ord",
          "signature": "a-\u003ea-\u003eMaybe Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-Class.html#v:orderOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.LocallyFinite",
          "name": "LocallyFinite",
          "package": "algebra",
          "source": "src/Numeric-Order-LocallyFinite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Order LocallyFinite",
          "module": "Numeric.Order.LocallyFinite",
          "name": "LocallyFinite",
          "package": "algebra",
          "partial": "Locally Finite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-LocallyFinite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.LocallyFinite",
          "name": "LocallyFiniteOrder",
          "package": "algebra",
          "source": "src/Numeric-Order-LocallyFinite.html#LocallyFiniteOrder",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Order LocallyFinite",
          "module": "Numeric.Order.LocallyFinite",
          "name": "LocallyFiniteOrder",
          "package": "algebra",
          "partial": "Locally Finite Order",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-LocallyFinite.html#t:LocallyFiniteOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.LocallyFinite",
          "name": "moebiusInversion",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e r",
          "source": "src/Numeric-Order-LocallyFinite.html#moebiusInversion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order LocallyFinite",
          "module": "Numeric.Order.LocallyFinite",
          "name": "moebiusInversion",
          "normalized": "a-\u003ea-\u003eb",
          "package": "algebra",
          "partial": "Inversion",
          "signature": "a-\u003ea-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-LocallyFinite.html#v:moebiusInversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.LocallyFinite",
          "name": "range",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e [a]",
          "source": "src/Numeric-Order-LocallyFinite.html#range",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order LocallyFinite",
          "module": "Numeric.Order.LocallyFinite",
          "name": "range",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "algebra",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-LocallyFinite.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Order.LocallyFinite",
          "name": "rangeSize",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Natural",
          "source": "src/Numeric-Order-LocallyFinite.html#rangeSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Order LocallyFinite",
          "module": "Numeric.Order.LocallyFinite",
          "name": "rangeSize",
          "normalized": "a-\u003ea-\u003eNatural",
          "package": "algebra",
          "partial": "Size",
          "signature": "a-\u003ea-\u003eNatural",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Order-LocallyFinite.html#v:rangeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Group",
          "name": "Group",
          "package": "algebra",
          "source": "src/Numeric-Partial-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Partial Group",
          "module": "Numeric.Partial.Group",
          "name": "Group",
          "package": "algebra",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Group",
          "name": "PartialGroup",
          "package": "algebra",
          "source": "src/Numeric-Partial-Group.html#PartialGroup",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Partial Group",
          "module": "Numeric.Partial.Group",
          "name": "PartialGroup",
          "package": "algebra",
          "partial": "Partial Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Group.html#t:PartialGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Group",
          "name": "pminus",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Partial-Group.html#pminus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Partial Group",
          "module": "Numeric.Partial.Group",
          "name": "pminus",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Group.html#v:pminus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Group",
          "name": "pnegate",
          "package": "algebra",
          "signature": "a -\u003e Maybe a",
          "source": "src/Numeric-Partial-Group.html#pnegate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Partial Group",
          "module": "Numeric.Partial.Group",
          "name": "pnegate",
          "normalized": "a-\u003eMaybe a",
          "package": "algebra",
          "signature": "a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Group.html#v:pnegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Group",
          "name": "psubtract",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Partial-Group.html#psubtract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Partial Group",
          "module": "Numeric.Partial.Group",
          "name": "psubtract",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Group.html#v:psubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Monoid",
          "name": "Monoid",
          "package": "algebra",
          "source": "src/Numeric-Partial-Monoid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Partial Monoid",
          "module": "Numeric.Partial.Monoid",
          "name": "Monoid",
          "package": "algebra",
          "partial": "Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Monoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Monoid",
          "name": "PartialMonoid",
          "package": "algebra",
          "source": "src/Numeric-Partial-Monoid.html#PartialMonoid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Partial Monoid",
          "module": "Numeric.Partial.Monoid",
          "name": "PartialMonoid",
          "package": "algebra",
          "partial": "Partial Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Monoid.html#t:PartialMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Monoid",
          "name": "pzero",
          "package": "algebra",
          "signature": "a",
          "source": "src/Numeric-Partial-Monoid.html#pzero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Partial Monoid",
          "module": "Numeric.Partial.Monoid",
          "name": "pzero",
          "package": "algebra",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Monoid.html#v:pzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Semigroup",
          "name": "Semigroup",
          "package": "algebra",
          "source": "src/Numeric-Partial-Semigroup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Partial Semigroup",
          "module": "Numeric.Partial.Semigroup",
          "name": "Semigroup",
          "package": "algebra",
          "partial": "Semigroup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Semigroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Semigroup",
          "name": "PartialSemigroup",
          "package": "algebra",
          "source": "src/Numeric-Partial-Semigroup.html#PartialSemigroup",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Partial Semigroup",
          "module": "Numeric.Partial.Semigroup",
          "name": "PartialSemigroup",
          "package": "algebra",
          "partial": "Partial Semigroup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Semigroup.html#t:PartialSemigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Partial.Semigroup",
          "name": "padd",
          "package": "algebra",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Partial-Semigroup.html#padd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Partial Semigroup",
          "module": "Numeric.Partial.Semigroup",
          "name": "padd",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "algebra",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Partial-Semigroup.html#v:padd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Quadrance.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Quadrance-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Quadrance Class",
          "module": "Numeric.Quadrance.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Quadrance-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Quadrance.Class",
          "name": "Quadrance",
          "package": "algebra",
          "source": "src/Numeric-Quadrance-Class.html#Quadrance",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Quadrance Class",
          "module": "Numeric.Quadrance.Class",
          "name": "Quadrance",
          "package": "algebra",
          "partial": "Quadrance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Quadrance-Class.html#t:Quadrance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Quadrance.Class",
          "name": "quadrance",
          "package": "algebra",
          "signature": "m -\u003e r",
          "source": "src/Numeric-Quadrance-Class.html#quadrance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Quadrance Class",
          "module": "Numeric.Quadrance.Class",
          "name": "quadrance",
          "normalized": "a-\u003eb",
          "package": "algebra",
          "signature": "m-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Quadrance-Class.html#v:quadrance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Characteristic",
          "name": "Characteristic",
          "package": "algebra",
          "source": "src/Numeric-Rig-Characteristic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Rig Characteristic",
          "module": "Numeric.Rig.Characteristic",
          "name": "Characteristic",
          "package": "algebra",
          "partial": "Characteristic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Characteristic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Characteristic",
          "name": "Characteristic",
          "package": "algebra",
          "source": "src/Numeric-Rig-Characteristic.html#Characteristic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Rig Characteristic",
          "module": "Numeric.Rig.Characteristic",
          "name": "Characteristic",
          "package": "algebra",
          "partial": "Characteristic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Characteristic.html#t:Characteristic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Characteristic",
          "name": "char",
          "package": "algebra",
          "signature": "proxy r -\u003e Natural",
          "source": "src/Numeric-Rig-Characteristic.html#char",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Rig Characteristic",
          "module": "Numeric.Rig.Characteristic",
          "name": "char",
          "normalized": "a b-\u003eNatural",
          "package": "algebra",
          "signature": "proxy r-\u003eNatural",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Characteristic.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Rig-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Rig Class",
          "module": "Numeric.Rig.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ring without (n)egation\n\u003c/p\u003e",
          "module": "Numeric.Rig.Class",
          "name": "Rig",
          "package": "algebra",
          "source": "src/Numeric-Rig-Class.html#Rig",
          "type": "class"
        },
        "index": {
          "description": "Ring without egation",
          "hierarchy": "Numeric Rig Class",
          "module": "Numeric.Rig.Class",
          "name": "Rig",
          "package": "algebra",
          "partial": "Rig",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Class.html#t:Rig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Class",
          "name": "fromNatural",
          "package": "algebra",
          "signature": "Natural -\u003e r",
          "source": "src/Numeric-Rig-Class.html#fromNatural",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Rig Class",
          "module": "Numeric.Rig.Class",
          "name": "fromNatural",
          "normalized": "Natural-\u003ea",
          "package": "algebra",
          "partial": "Natural",
          "signature": "Natural-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Class.html#v:fromNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Class",
          "name": "fromNaturalNum",
          "package": "algebra",
          "signature": "Natural -\u003e r",
          "source": "src/Numeric-Rig-Class.html#fromNaturalNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Rig Class",
          "module": "Numeric.Rig.Class",
          "name": "fromNaturalNum",
          "normalized": "Natural-\u003ea",
          "package": "algebra",
          "partial": "Natural Num",
          "signature": "Natural-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Class.html#v:fromNaturalNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Class",
          "name": "fromWhole",
          "package": "algebra",
          "signature": "n -\u003e r",
          "source": "src/Numeric-Rig-Class.html#fromWhole",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Rig Class",
          "module": "Numeric.Rig.Class",
          "name": "fromWhole",
          "normalized": "a-\u003eb",
          "package": "algebra",
          "partial": "Whole",
          "signature": "n-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Class.html#v:fromWhole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Ordered",
          "name": "Ordered",
          "package": "algebra",
          "source": "src/Numeric-Rig-Ordered.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Rig Ordered",
          "module": "Numeric.Rig.Ordered",
          "name": "Ordered",
          "package": "algebra",
          "partial": "Ordered",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Ordered.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rig.Ordered",
          "name": "OrderedRig",
          "package": "algebra",
          "source": "src/Numeric-Rig-Ordered.html#OrderedRig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Rig Ordered",
          "module": "Numeric.Rig.Ordered",
          "name": "OrderedRig",
          "package": "algebra",
          "partial": "Ordered Rig",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rig-Ordered.html#t:OrderedRig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Ring-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Class",
          "module": "Numeric.Ring.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Class",
          "name": "Ring",
          "package": "algebra",
          "source": "src/Numeric-Ring-Class.html#Ring",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Ring Class",
          "module": "Numeric.Ring.Class",
          "name": "Ring",
          "package": "algebra",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Class.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Class",
          "name": "fromInteger",
          "package": "algebra",
          "signature": "Integer -\u003e r",
          "source": "src/Numeric-Ring-Class.html#fromInteger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Ring Class",
          "module": "Numeric.Ring.Class",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "algebra",
          "partial": "Integer",
          "signature": "Integer-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Class.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Class",
          "name": "fromIntegral",
          "package": "algebra",
          "signature": "n -\u003e r",
          "source": "src/Numeric-Ring-Class.html#fromIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Class",
          "module": "Numeric.Ring.Class",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "algebra",
          "partial": "Integral",
          "signature": "n-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Class.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Division",
          "name": "Division",
          "package": "algebra",
          "source": "src/Numeric-Ring-Division.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Division",
          "module": "Numeric.Ring.Division",
          "name": "Division",
          "package": "algebra",
          "partial": "Division",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Division.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Division",
          "name": "DivisionRing",
          "package": "algebra",
          "source": "src/Numeric-Ring-Division.html#DivisionRing",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Ring Division",
          "module": "Numeric.Ring.Division",
          "name": "DivisionRing",
          "package": "algebra",
          "partial": "Division Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Division.html#t:DivisionRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "Endomorphism",
          "package": "algebra",
          "source": "src/Numeric-Ring-Endomorphism.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "Endomorphism",
          "package": "algebra",
          "partial": "Endomorphism",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe endomorphism ring of an abelian group or the endomorphism semiring of an abelian monoid\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eEndomorphism_ring\n\u003c/p\u003e",
          "module": "Numeric.Ring.Endomorphism",
          "name": "End",
          "package": "algebra",
          "source": "src/Numeric-Ring-Endomorphism.html#End",
          "type": "newtype"
        },
        "index": {
          "description": "The endomorphism ring of an abelian group or the endomorphism semiring of an abelian monoid http en.wikipedia.org wiki Endomorphism ring",
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "End",
          "package": "algebra",
          "partial": "End",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#t:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "End",
          "package": "algebra",
          "signature": "End",
          "source": "src/Numeric-Ring-Endomorphism.html#End",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "End",
          "package": "algebra",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "appEnd",
          "package": "algebra",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Ring-Endomorphism.html#End",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "appEnd",
          "normalized": "a-\u003ea",
          "package": "algebra",
          "partial": "End",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#v:appEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "frobenius",
          "package": "algebra",
          "signature": "End r",
          "source": "src/Numeric-Ring-Endomorphism.html#frobenius",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "frobenius",
          "package": "algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#v:frobenius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "fromEnd",
          "package": "algebra",
          "signature": "End r -\u003e r",
          "source": "src/Numeric-Ring-Endomorphism.html#fromEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "fromEnd",
          "normalized": "End a-\u003ea",
          "package": "algebra",
          "partial": "End",
          "signature": "End r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#v:fromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Endomorphism",
          "name": "toEnd",
          "package": "algebra",
          "signature": "r -\u003e End r",
          "source": "src/Numeric-Ring-Endomorphism.html#toEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Endomorphism",
          "module": "Numeric.Ring.Endomorphism",
          "name": "toEnd",
          "normalized": "a-\u003eEnd a",
          "package": "algebra",
          "partial": "End",
          "signature": "r-\u003eEnd r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Endomorphism.html#v:toEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Local",
          "name": "Local",
          "package": "algebra",
          "source": "src/Numeric-Ring-Local.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Local",
          "module": "Numeric.Ring.Local",
          "name": "Local",
          "package": "algebra",
          "partial": "Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Local.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Local",
          "name": "LocalRing",
          "package": "algebra",
          "source": "src/Numeric-Ring-Local.html#LocalRing",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Ring Local",
          "module": "Numeric.Ring.Local",
          "name": "LocalRing",
          "package": "algebra",
          "partial": "Local Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Local.html#t:LocalRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "source": "src/Numeric-Ring-Opposite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Opposite",
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "partial": "Opposite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Opposite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehttp:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eOpposite_ring\n\u003c/p\u003e",
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "source": "src/Numeric-Ring-Opposite.html#Opposite",
          "type": "newtype"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Opposite ring",
          "hierarchy": "Numeric Ring Opposite",
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "partial": "Opposite",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Opposite.html#t:Opposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "signature": "Opposite",
          "source": "src/Numeric-Ring-Opposite.html#Opposite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Opposite",
          "module": "Numeric.Ring.Opposite",
          "name": "Opposite",
          "package": "algebra",
          "partial": "Opposite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Opposite.html#v:Opposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Opposite",
          "name": "runOpposite",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Ring-Opposite.html#Opposite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Opposite",
          "module": "Numeric.Ring.Opposite",
          "name": "runOpposite",
          "package": "algebra",
          "partial": "Opposite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Opposite.html#v:runOpposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Rng",
          "name": "Rng",
          "package": "algebra",
          "source": "src/Numeric-Ring-Rng.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Ring Rng",
          "module": "Numeric.Ring.Rng",
          "name": "Rng",
          "package": "algebra",
          "partial": "Rng",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Rng.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe free Ring given a Rng obtained by adjoining Z, such that\n\u003c/p\u003e\u003cpre\u003e RngRing r = n*1 + r\n\u003c/pre\u003e\u003cp\u003eThis ring is commonly denoted r^.\n\u003c/p\u003e",
          "module": "Numeric.Ring.Rng",
          "name": "RngRing",
          "package": "algebra",
          "source": "src/Numeric-Ring-Rng.html#RngRing",
          "type": "data"
        },
        "index": {
          "description": "The free Ring given Rng obtained by adjoining such that RngRing This ring is commonly denoted",
          "hierarchy": "Numeric Ring Rng",
          "module": "Numeric.Ring.Rng",
          "name": "RngRing",
          "package": "algebra",
          "partial": "Rng Ring",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Rng.html#t:RngRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Ring.Rng",
          "name": "RngRing",
          "package": "algebra",
          "signature": "RngRing !Integer r",
          "source": "src/Numeric-Ring-Rng.html#RngRing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Ring Rng",
          "module": "Numeric.Ring.Rng",
          "name": "RngRing",
          "package": "algebra",
          "partial": "Rng Ring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Rng.html#v:RngRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egiven a rng homomorphism from a rng r into a ring s, liftRngHom yields a ring homomorphism from the ring `r^` into \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Ring.Rng",
          "name": "liftRngHom",
          "package": "algebra",
          "signature": "(r -\u003e s) -\u003e RngRing r -\u003e s",
          "source": "src/Numeric-Ring-Rng.html#liftRngHom",
          "type": "function"
        },
        "index": {
          "description": "given rng homomorphism from rng into ring liftRngHom yields ring homomorphism from the ring into",
          "hierarchy": "Numeric Ring Rng",
          "module": "Numeric.Ring.Rng",
          "name": "liftRngHom",
          "normalized": "(a-\u003eb)-\u003eRngRing a-\u003eb",
          "package": "algebra",
          "partial": "Rng Hom",
          "signature": "(r-\u003es)-\u003eRngRing r-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Rng.html#v:liftRngHom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rng homomorphism from r to RngRing r\n\u003c/p\u003e",
          "module": "Numeric.Ring.Rng",
          "name": "rngRingHom",
          "package": "algebra",
          "signature": "r -\u003e RngRing r",
          "source": "src/Numeric-Ring-Rng.html#rngRingHom",
          "type": "function"
        },
        "index": {
          "description": "The rng homomorphism from to RngRing",
          "hierarchy": "Numeric Ring Rng",
          "module": "Numeric.Ring.Rng",
          "name": "rngRingHom",
          "normalized": "a-\u003eRngRing a",
          "package": "algebra",
          "partial": "Ring Hom",
          "signature": "r-\u003eRngRing r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Ring-Rng.html#v:rngRingHom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rng.Class",
          "name": "Class",
          "package": "algebra",
          "source": "src/Numeric-Rng-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Rng Class",
          "module": "Numeric.Rng.Class",
          "name": "Class",
          "package": "algebra",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ring without an \u003cem\u003ei\u003c/em\u003edentity.\n\u003c/p\u003e",
          "module": "Numeric.Rng.Class",
          "name": "Rng",
          "package": "algebra",
          "source": "src/Numeric-Rng-Class.html#Rng",
          "type": "class"
        },
        "index": {
          "description": "Ring without an dentity",
          "hierarchy": "Numeric Rng Class",
          "module": "Numeric.Rng.Class",
          "name": "Rng",
          "package": "algebra",
          "partial": "Rng",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Class.html#t:Rng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rng.Zero",
          "name": "Zero",
          "package": "algebra",
          "source": "src/Numeric-Rng-Zero.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Rng Zero",
          "module": "Numeric.Rng.Zero",
          "name": "Zero",
          "package": "algebra",
          "partial": "Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Zero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rng.Zero",
          "name": "ZeroRng",
          "package": "algebra",
          "source": "src/Numeric-Rng-Zero.html#ZeroRng",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Rng Zero",
          "module": "Numeric.Rng.Zero",
          "name": "ZeroRng",
          "package": "algebra",
          "partial": "Zero Rng",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Zero.html#t:ZeroRng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rng.Zero",
          "name": "ZeroRng",
          "package": "algebra",
          "signature": "ZeroRng",
          "source": "src/Numeric-Rng-Zero.html#ZeroRng",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Rng Zero",
          "module": "Numeric.Rng.Zero",
          "name": "ZeroRng",
          "package": "algebra",
          "partial": "Zero Rng",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Zero.html#v:ZeroRng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Rng.Zero",
          "name": "runZeroRng",
          "package": "algebra",
          "signature": "r",
          "source": "src/Numeric-Rng-Zero.html#ZeroRng",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Rng Zero",
          "module": "Numeric.Rng.Zero",
          "name": "runZeroRng",
          "package": "algebra",
          "partial": "Zero Rng",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Rng-Zero.html#v:runZeroRng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Semiring.Integral",
          "name": "Integral",
          "package": "algebra",
          "source": "src/Numeric-Semiring-Integral.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Semiring Integral",
          "module": "Numeric.Semiring.Integral",
          "name": "Integral",
          "package": "algebra",
          "partial": "Integral",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Semiring-Integral.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integral semiring has no zero divisors\n\u003c/p\u003e\u003cpre\u003e a * b = 0 implies a == 0 || b == 0\n\u003c/pre\u003e",
          "module": "Numeric.Semiring.Integral",
          "name": "IntegralSemiring",
          "package": "algebra",
          "source": "src/Numeric-Semiring-Integral.html#IntegralSemiring",
          "type": "class"
        },
        "index": {
          "description": "An integral semiring has no zero divisors implies",
          "hierarchy": "Numeric Semiring Integral",
          "module": "Numeric.Semiring.Integral",
          "name": "IntegralSemiring",
          "package": "algebra",
          "partial": "Integral Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Semiring-Integral.html#t:IntegralSemiring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Semiring.Involutive",
          "name": "Involutive",
          "package": "algebra",
          "source": "src/Numeric-Semiring-Involutive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Semiring Involutive",
          "module": "Numeric.Semiring.Involutive",
          "name": "Involutive",
          "package": "algebra",
          "partial": "Involutive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Semiring-Involutive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadjoint (x + y) = adjoint x + adjoint y\n\u003c/p\u003e",
          "module": "Numeric.Semiring.Involutive",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "source": "src/Numeric-Algebra-Involutive.html#InvolutiveSemiring",
          "type": "class"
        },
        "index": {
          "description": "adjoint adjoint adjoint",
          "hierarchy": "Numeric Semiring Involutive",
          "module": "Numeric.Semiring.Involutive",
          "name": "InvolutiveSemiring",
          "package": "algebra",
          "partial": "Involutive Semiring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/algebra/docs/Numeric-Semiring-Involutive.html#t:InvolutiveSemiring"
      }
    }
  ]
]