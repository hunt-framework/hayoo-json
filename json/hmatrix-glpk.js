[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an interface to the standard simplex algorithm.\n\u003c/p\u003e\u003cp\u003eFor example, the following LP problem\n\u003c/p\u003e\u003cpre\u003emaximize 4 x_1 - 3 x_2 + 2 x_3\nsubject to\n\n2 x_1 +   x_2 \u003c= 10\n  x_3 + 5 x_4 \u003c= 20\n\nand\n\nx_i \u003e= 0\u003c/pre\u003e\u003cp\u003ecan be solved as follows:\n\u003c/p\u003e\u003cpre\u003eimport Numeric.LinearProgramming\n\nprob = Maximize [4, -3, 2]\n\nconstr1 = Sparse [ [2#1, 1#2] :\u003c=: 10\n                 , [1#2, 5#3] :\u003c=: 20\n                 ]\n\n\u003e simplex prob constr1 []\nOptimal (28.0,[5.0,0.0,4.0])\u003c/pre\u003e\u003cp\u003eThe coefficients of the constraint matrix can also be given in dense format:\n\u003c/p\u003e\u003cpre\u003econstr2 = Dense [ [2,1,0] :\u003c=: 10\n                , [0,1,5] :\u003c=: 20\n                ]\u003c/pre\u003e\u003cp\u003eBy default all variables are bounded as \u003ccode\u003ex_i \u003e= 0\u003c/code\u003e, but this can be\nchanged:\n\u003c/p\u003e\u003cpre\u003e\u003e simplex prob constr2 [ 2 :=\u003e: 1, 3 :&: (2,7)]\nOptimal (22.6,[4.5,1.0,3.8])\n\n\u003e simplex prob constr2 [Free 2]\nUnbounded\u003c/pre\u003e\u003cp\u003eThe given bound for a variable completely replaces the default,\nso \u003ccode\u003e0 \u003c= x_i \u003c= b\u003c/code\u003e must be explicitly given as \u003ccode\u003ei :&: (0,b)\u003c/code\u003e.\nMultiple bounds for a variable are not allowed, instead of\n\u003ccode\u003e[i :=\u003e: a, i:\u003c=: b]\u003c/code\u003e use \u003ccode\u003ei :&: (a,b)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "module",
        "fct-source": "src/Numeric-LinearProgramming.html",
        "fct-type": "module",
        "title": "LinearProgramming"
      },
      "index": {
        "description": "This module provides an interface to the standard simplex algorithm For example the following LP problem maximize subject to and can be solved as follows import Numeric.LinearProgramming prob Maximize constr1 Sparse simplex prob constr1 Optimal The coefficients of the constraint matrix can also be given in dense format constr2 Dense By default all variables are bounded as but this can be changed simplex prob constr2 Optimal simplex prob constr2 Free Unbounded The given bound for variable completely replaces the default so must be explicitly given as Multiple bounds for variable are not allowed instead of use",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "LinearProgramming",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Linear Programming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Bound",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "data",
        "title": "Bound"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Bound",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Bounds",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LinearProgramming.html#Bounds",
        "fct-type": "type",
        "title": "Bounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Bounds",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Constraints",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LinearProgramming.html#Constraints",
        "fct-type": "data",
        "title": "Constraints"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Constraints",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Optimization",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LinearProgramming.html#Optimization",
        "fct-type": "data",
        "title": "Optimization"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Optimization",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Optimization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#t:Solution",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "data",
        "title": "Solution"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Solution",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Solution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eCoefficient of a variable for a sparse representation of constraints.\n\u003c/p\u003e",
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Double -\u003e Int -\u003e (Double, Int)",
        "fct-source": "src/Numeric-LinearProgramming.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Coefficient of variable for sparse representation of constraints",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "(#) #",
        "normalized": "Double-\u003eInt-\u003e(Double,Int)",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": "Double-\u003eInt-\u003e(Double,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-38-:",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "x :&: (Double, Double)",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "function",
        "title": ":&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": ":&:",
        "normalized": "a(Double,Double)",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": "x(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-60--61-:",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "x :\u003c=: Double",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "function",
        "title": ":\u003c=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": ":\u003c=:",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-61--61-:",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "x :==: Double",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "function",
        "title": ":==:"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": ":==:",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v::-61--62-:",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": ": Double",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "function",
        "title": ":=\u003e:"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": ":=\u003e:",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Dense",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Dense [Bound [Double]]",
        "fct-source": "src/Numeric-LinearProgramming.html#Constraints",
        "fct-type": "function",
        "title": "Dense"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Dense",
        "normalized": "Dense[Bound[Double]]",
        "package": "hmatrix-glpk",
        "partial": "Dense",
        "signature": "Dense[Bound[Double]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Feasible",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Feasible (Double, [Double])",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "Feasible"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Feasible",
        "normalized": "Feasible(Double,[Double])",
        "package": "hmatrix-glpk",
        "partial": "Feasible",
        "signature": "Feasible(Double,[Double])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Free",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Free x",
        "fct-source": "src/Numeric-LinearProgramming.html#Bound",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Free",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Infeasible",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Infeasible (Double, [Double])",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "Infeasible"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Infeasible",
        "normalized": "Infeasible(Double,[Double])",
        "package": "hmatrix-glpk",
        "partial": "Infeasible",
        "signature": "Infeasible(Double,[Double])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Maximize",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Maximize [Double]",
        "fct-source": "src/Numeric-LinearProgramming.html#Optimization",
        "fct-type": "function",
        "title": "Maximize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Maximize",
        "normalized": "Maximize[Double]",
        "package": "hmatrix-glpk",
        "partial": "Maximize",
        "signature": "Maximize[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Minimize",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Minimize [Double]",
        "fct-source": "src/Numeric-LinearProgramming.html#Optimization",
        "fct-type": "function",
        "title": "Minimize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Minimize",
        "normalized": "Minimize[Double]",
        "package": "hmatrix-glpk",
        "partial": "Minimize",
        "signature": "Minimize[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:NoFeasible",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "NoFeasible",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "NoFeasible"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "NoFeasible",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "No Feasible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Optimal",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Optimal (Double, [Double])",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "Optimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Optimal",
        "normalized": "Optimal(Double,[Double])",
        "package": "hmatrix-glpk",
        "partial": "Optimal",
        "signature": "Optimal(Double,[Double])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Sparse",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Sparse [Bound [(Double, Int)]]",
        "fct-source": "src/Numeric-LinearProgramming.html#Constraints",
        "fct-type": "function",
        "title": "Sparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Sparse",
        "normalized": "Sparse[Bound[(Double,Int)]]",
        "package": "hmatrix-glpk",
        "partial": "Sparse",
        "signature": "Sparse[Bound[(Double,Int)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Unbounded",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Unbounded",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "Unbounded"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Unbounded",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Unbounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:Undefined",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Undefined",
        "fct-source": "src/Numeric-LinearProgramming.html#Solution",
        "fct-type": "function",
        "title": "Undefined"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "Undefined",
        "normalized": "",
        "package": "hmatrix-glpk",
        "partial": "Undefined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-glpk/docs/Numeric-LinearProgramming.html#v:simplex",
      "description": {
        "fct-module": "Numeric.LinearProgramming",
        "fct-package": "hmatrix-glpk",
        "fct-signature": "Optimization -\u003e Constraints -\u003e Bounds -\u003e Solution",
        "fct-source": "src/Numeric-LinearProgramming.html#simplex",
        "fct-type": "function",
        "title": "simplex"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LinearProgramming",
        "module": "Numeric.LinearProgramming",
        "name": "simplex",
        "normalized": "Optimization-\u003eConstraints-\u003eBounds-\u003eSolution",
        "package": "hmatrix-glpk",
        "partial": "",
        "signature": "Optimization-\u003eConstraints-\u003eBounds-\u003eSolution"
      }
    }
  }
]