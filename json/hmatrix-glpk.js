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
        "word": "hmatrix-glpk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an interface to the standard simplex algorithm.\n\u003c/p\u003e\u003cp\u003eFor example, the following LP problem\n\u003c/p\u003e\u003cpre\u003emaximize 4 x_1 - 3 x_2 + 2 x_3\nsubject to\n\n2 x_1 +   x_2 \u003c= 10\n  x_3 + 5 x_4 \u003c= 20\n\nand\n\nx_i \u003e= 0\u003c/pre\u003e\u003cp\u003ecan be solved as follows:\n\u003c/p\u003e\u003cpre\u003eimport Numeric.LinearProgramming\n\nprob = Maximize [4, -3, 2]\n\nconstr1 = Sparse [ [2#1, 1#2] :\u003c=: 10\n                 , [1#2, 5#3] :\u003c=: 20\n                 ]\n\n\u003e simplex prob constr1 []\nOptimal (28.0,[5.0,0.0,4.0])\u003c/pre\u003e\u003cp\u003eThe coefficients of the constraint matrix can also be given in dense format:\n\u003c/p\u003e\u003cpre\u003econstr2 = Dense [ [2,1,0] :\u003c=: 10\n                , [0,1,5] :\u003c=: 20\n                ]\u003c/pre\u003e\u003cp\u003eBy default all variables are bounded as \u003ccode\u003ex_i \u003e= 0\u003c/code\u003e, but this can be\nchanged:\n\u003c/p\u003e\u003cpre\u003e\u003e simplex prob constr2 [ 2 :=\u003e: 1, 3 :&: (2,7)]\nOptimal (22.6,[4.5,1.0,3.8])\n\n\u003e simplex prob constr2 [Free 2]\nUnbounded\u003c/pre\u003e\u003cp\u003eThe given bound for a variable completely replaces the default,\nso \u003ccode\u003e0 \u003c= x_i \u003c= b\u003c/code\u003e must be explicitly given as \u003ccode\u003ei :&: (0,b)\u003c/code\u003e.\nMultiple bounds for a variable are not allowed, instead of\n\u003ccode\u003e[i :=\u003e: a, i:\u003c=: b]\u003c/code\u003e use \u003ccode\u003ei :&: (a,b)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearProgramming",
          "name": "LinearProgramming",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides an interface to the standard simplex algorithm For example the following LP problem maximize subject to and can be solved as follows import Numeric.LinearProgramming prob Maximize constr1 Sparse simplex prob constr1 Optimal The coefficients of the constraint matrix can also be given in dense format constr2 Dense By default all variables are bounded as but this can be changed simplex prob constr2 Optimal simplex prob constr2 Free Unbounded The given bound for variable completely replaces the default so must be explicitly given as Multiple bounds for variable are not allowed instead of use",
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "LinearProgramming",
          "package": "hmatrix-glpk",
          "partial": "Linear Programming",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Bound",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Bound",
          "package": "hmatrix-glpk",
          "partial": "Bound",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Bounds",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html#Bounds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Bounds",
          "package": "hmatrix-glpk",
          "partial": "Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Constraints",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html#Constraints",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Constraints",
          "package": "hmatrix-glpk",
          "partial": "Constraints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Optimization",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html#Optimization",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Optimization",
          "package": "hmatrix-glpk",
          "partial": "Optimization",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Optimization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Solution",
          "package": "hmatrix-glpk",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Solution",
          "package": "hmatrix-glpk",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoefficient of a variable for a sparse representation of constraints.\n\u003c/p\u003e",
          "module": "Numeric.LinearProgramming",
          "name": "(#)",
          "package": "hmatrix-glpk",
          "signature": "Double -\u003e Int -\u003e (Double, Int)",
          "source": "src/Numeric-LinearProgramming.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Coefficient of variable for sparse representation of constraints",
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "(#) #",
          "normalized": "Double-\u003eInt-\u003e(Double,Int)",
          "package": "hmatrix-glpk",
          "signature": "Double-\u003eInt-\u003e(Double,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": ":&:",
          "package": "hmatrix-glpk",
          "signature": "x :&: (Double, Double)",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": ":&:",
          "normalized": "a(Double,Double)",
          "package": "hmatrix-glpk",
          "signature": "x(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": ":\u003c=:",
          "package": "hmatrix-glpk",
          "signature": "x :\u003c=: Double",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": ":\u003c=:",
          "package": "hmatrix-glpk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-60--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": ":==:",
          "package": "hmatrix-glpk",
          "signature": "x :==: Double",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": ":==:",
          "package": "hmatrix-glpk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-61--61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": ":=\u003e:",
          "package": "hmatrix-glpk",
          "signature": ": Double",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": ":=\u003e:",
          "package": "hmatrix-glpk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-61--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Dense",
          "package": "hmatrix-glpk",
          "signature": "Dense [Bound [Double]]",
          "source": "src/Numeric-LinearProgramming.html#Constraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Dense",
          "normalized": "Dense[Bound[Double]]",
          "package": "hmatrix-glpk",
          "partial": "Dense",
          "signature": "Dense[Bound[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Dense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Feasible",
          "package": "hmatrix-glpk",
          "signature": "Feasible (Double, [Double])",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Feasible",
          "normalized": "Feasible(Double,[Double])",
          "package": "hmatrix-glpk",
          "partial": "Feasible",
          "signature": "Feasible(Double,[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Feasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Free",
          "package": "hmatrix-glpk",
          "signature": "Free x",
          "source": "src/Numeric-LinearProgramming.html#Bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Free",
          "package": "hmatrix-glpk",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Infeasible",
          "package": "hmatrix-glpk",
          "signature": "Infeasible (Double, [Double])",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Infeasible",
          "normalized": "Infeasible(Double,[Double])",
          "package": "hmatrix-glpk",
          "partial": "Infeasible",
          "signature": "Infeasible(Double,[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Infeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Maximize",
          "package": "hmatrix-glpk",
          "signature": "Maximize [Double]",
          "source": "src/Numeric-LinearProgramming.html#Optimization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Maximize",
          "normalized": "Maximize[Double]",
          "package": "hmatrix-glpk",
          "partial": "Maximize",
          "signature": "Maximize[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Maximize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Minimize",
          "package": "hmatrix-glpk",
          "signature": "Minimize [Double]",
          "source": "src/Numeric-LinearProgramming.html#Optimization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Minimize",
          "normalized": "Minimize[Double]",
          "package": "hmatrix-glpk",
          "partial": "Minimize",
          "signature": "Minimize[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Minimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "NoFeasible",
          "package": "hmatrix-glpk",
          "signature": "NoFeasible",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "NoFeasible",
          "package": "hmatrix-glpk",
          "partial": "No Feasible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:NoFeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Optimal",
          "package": "hmatrix-glpk",
          "signature": "Optimal (Double, [Double])",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Optimal",
          "normalized": "Optimal(Double,[Double])",
          "package": "hmatrix-glpk",
          "partial": "Optimal",
          "signature": "Optimal(Double,[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Optimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Sparse",
          "package": "hmatrix-glpk",
          "signature": "Sparse [Bound [(Double, Int)]]",
          "source": "src/Numeric-LinearProgramming.html#Constraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Sparse",
          "normalized": "Sparse[Bound[(Double,Int)]]",
          "package": "hmatrix-glpk",
          "partial": "Sparse",
          "signature": "Sparse[Bound[(Double,Int)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Sparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Unbounded",
          "package": "hmatrix-glpk",
          "signature": "Unbounded",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Unbounded",
          "package": "hmatrix-glpk",
          "partial": "Unbounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Unbounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "Undefined",
          "package": "hmatrix-glpk",
          "signature": "Undefined",
          "source": "src/Numeric-LinearProgramming.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "Undefined",
          "package": "hmatrix-glpk",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearProgramming",
          "name": "simplex",
          "package": "hmatrix-glpk",
          "signature": "Optimization -\u003e Constraints -\u003e Bounds -\u003e Solution",
          "source": "src/Numeric-LinearProgramming.html#simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearProgramming",
          "module": "Numeric.LinearProgramming",
          "name": "simplex",
          "normalized": "Optimization-\u003eConstraints-\u003eBounds-\u003eSolution",
          "package": "hmatrix-glpk",
          "signature": "Optimization-\u003eConstraints-\u003eBounds-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:simplex"
      }
    }
  ]
]