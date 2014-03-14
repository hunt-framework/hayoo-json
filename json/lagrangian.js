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
        "word": "lagrangian"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumerically solve convex lagrange multiplier problems with conjugate gradient descent. \n\u003c/p\u003e\u003cp\u003eHere is an example from the Wikipedia page on Lagrange multipliers.\n  Maximize f(x, y) = x + y, subject to the constraint x^2 + y^2 = 1 \n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximize 0.00001 (\\[x, y] -\u003e x + y) [(\\[x, y] -\u003e x^2 + y^2) \u003c=\u003e 1] 2\n\u003c/code\u003e\u003c/strong\u003eRight ([0.707,0.707], [-0.707])\n\u003c/pre\u003e\u003cp\u003eThe first elements of the result pair are the arguments for the objective function at the minimum. \n  The second elements are the lagrange multipliers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "Lagrangian",
          "package": "lagrangian",
          "source": "src/Numeric-AD-Lagrangian.html",
          "type": "module"
        },
        "index": {
          "description": "Numerically solve convex lagrange multiplier problems with conjugate gradient descent Here is an example from the Wikipedia page on Lagrange multipliers Maximize subject to the constraint maximize Right The first elements of the result pair are the arguments for the objective function at the minimum The second elements are the lagrange multipliers",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "Lagrangian",
          "package": "lagrangian",
          "partial": "Lagrangian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Lagrangian",
          "name": "AD2",
          "package": "lagrangian",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#AD2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "AD2",
          "package": "lagrangian",
          "partial": "AD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#t:AD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constraint of the form \u003ccode\u003eg(x, y, ...) = c\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003e\u003c=\u003e\u003c/a\u003e\u003c/code\u003e for constructing a \u003ccode\u003e\u003ca\u003eConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "Constraint",
          "package": "lagrangian",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#Constraint",
          "type": "type"
        },
        "index": {
          "description": "constraint of the form See for constructing Constraint",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "Constraint",
          "package": "lagrangian",
          "partial": "Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for working with the rank 2 types constraint functions. \n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "FU",
          "package": "lagrangian",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#FU",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for working with the rank types constraint functions",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "FU",
          "package": "lagrangian",
          "partial": "FU",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#t:FU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003eConstraint\u003c/a\u003e\u003c/code\u003e from a function and a constant\n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "(\u003c=\u003e)",
          "package": "lagrangian",
          "signature": "[AD2 s r a] -\u003e AD2 s r a) -\u003e a -\u003e Constraint a",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#%3C%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Build Constraint from function and constant",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "(\u003c=\u003e) \u003c=\u003e",
          "normalized": "[AD a b c]-\u003eAD a b c)-\u003ec-\u003eConstraint c",
          "package": "lagrangian",
          "signature": "[AD s r a]-\u003eAD s r a)-\u003ea-\u003eConstraint a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:-60--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Lagrangian",
          "name": "FU",
          "package": "lagrangian",
          "signature": "FU",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#FU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "FU",
          "package": "lagrangian",
          "partial": "FU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:FU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWARNING. Experimental.\n   This is not a true feasibility test for the function. I am not sure \n   exactly how to implement that. This just checks the feasiblility at a point.\n   If this ever returns false, \u003ccode\u003esolve\u003c/code\u003e can fail.\n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "feasible",
          "package": "lagrangian",
          "signature": "[AD2 s r Double] -\u003e AD2 s r Double) -\u003e [Constraint Double] -\u003e [Double] -\u003e Bool",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#feasible",
          "type": "function"
        },
        "index": {
          "description": "WARNING Experimental This is not true feasibility test for the function am not sure exactly how to implement that This just checks the feasiblility at point If this ever returns false solve can fail",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "feasible",
          "normalized": "[AD a b Double]-\u003eAD a b Double)-\u003e[Constraint Double]-\u003e[Double]-\u003eBool",
          "package": "lagrangian",
          "signature": "[AD s r Double]-\u003eAD s r Double)-\u003e[Constraint Double]-\u003e[Double]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:feasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum is the same as the minimum with the objective function inverted\n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "maximize",
          "package": "lagrangian",
          "signature": "[AD2 s r Double] -\u003e AD2 s r Double)-\u003e [Constraint Double]-\u003e Int-\u003e Either (Result, Statistics) (Vector Double, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum is the same as the minimum with the objective function inverted",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "maximize",
          "normalized": "[AD a b Double]-\u003eAD a b Double)-\u003e[Constraint Double]-\u003eInt-\u003eEither(Result,Statistics)(Vector Double,Vector Double)",
          "package": "lagrangian",
          "signature": "[AD s r Double]-\u003eAD s r Double)-\u003e[Constraint Double]-\u003eInt-\u003eEither(Result,Statistics)(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the lagrangian multiplier solver. It is assumed that the \n   objective function and all of the constraints take in the \n   same amount of arguments.\n\u003c/p\u003e",
          "module": "Numeric.AD.Lagrangian",
          "name": "minimize",
          "package": "lagrangian",
          "signature": "[AD2 s r Double] -\u003e AD2 s r Double)-\u003e [Constraint Double]-\u003e Int-\u003e Either (Result, Statistics) (Vector Double, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "This is the lagrangian multiplier solver It is assumed that the objective function and all of the constraints take in the same amount of arguments",
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "minimize",
          "normalized": "[AD a b Double]-\u003eAD a b Double)-\u003e[Constraint Double]-\u003eInt-\u003eEither(Result,Statistics)(Vector Double,Vector Double)",
          "package": "lagrangian",
          "signature": "[AD s r Double]-\u003eAD s r Double)-\u003e[Constraint Double]-\u003eInt-\u003eEither(Result,Statistics)(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Lagrangian",
          "name": "unFU",
          "package": "lagrangian",
          "signature": "[AD2 s r a] -\u003e AD2 s r a",
          "source": "src/Numeric-AD-Lagrangian-Internal.html#FU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Lagrangian",
          "module": "Numeric.AD.Lagrangian",
          "name": "unFU",
          "normalized": "[AD a b c]-\u003eAD a b c",
          "package": "lagrangian",
          "partial": "FU",
          "signature": "[AD s r a]-\u003eAD s r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lagrangian/docs/Numeric-AD-Lagrangian.html#v:unFU"
      }
    }
  ]
]