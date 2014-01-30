[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#",
      "description": {
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Minimization-QuadProgPP.html",
        "fct-type": "module",
        "title": "QuadProgPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "QuadProgPP",
        "normalized": "",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#t:QuadProgPPError",
      "description": {
        "fct-descr": "\u003cp\u003eErrors that can happen in \u003ccode\u003e\u003ca\u003esolveQuadProg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
        "fct-type": "data",
        "title": "QuadProgPPError"
      },
      "index": {
        "description": "Errors that can happen in solveQuadProg",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "QuadProgPPError",
        "normalized": "",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog PPError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgInfeasible",
      "description": {
        "fct-descr": "\u003cp\u003eThe problem has no feasible solution.\n\u003c/p\u003e",
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "QuadProgInfeasible",
        "fct-source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
        "fct-type": "function",
        "title": "QuadProgInfeasible"
      },
      "index": {
        "description": "The problem has no feasible solution",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "QuadProgInfeasible",
        "normalized": "",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog Infeasible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgOtherError",
      "description": {
        "fct-descr": "\u003cp\u003eOther errors. Currently this is used for C++ exceptions\n thrown by QuadProg++.\n\u003c/p\u003e",
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "QuadProgOtherError String",
        "fct-source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
        "fct-type": "function",
        "title": "QuadProgOtherError"
      },
      "index": {
        "description": "Other errors Currently this is used for exceptions thrown by QuadProg",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "QuadProgOtherError",
        "normalized": "",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog Other Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgSizeMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eThe given matrices and vectors have inconsistent\n dimensionalities.\n\u003c/p\u003e",
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "QuadProgSizeMismatch",
        "fct-source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
        "fct-type": "function",
        "title": "QuadProgSizeMismatch"
      },
      "index": {
        "description": "The given matrices and vectors have inconsistent dimensionalities",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "QuadProgSizeMismatch",
        "normalized": "",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog Size Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:solveQuadProg",
      "description": {
        "fct-descr": "\u003cp\u003eSolve a strictly convex quadratic program with optional linear\n constraints. It returns a pair of the optimal solution and the\n value of the objective function at that point. On error it returns\n Left.\n\u003c/p\u003e",
        "fct-module": "Numeric.Minimization.QuadProgPP",
        "fct-package": "hmatrix-quadprogpp",
        "fct-signature": "(Matrix Double, Vector Double)-\u003e Maybe (Matrix Double, Vector Double)-\u003e Maybe (Matrix Double, Vector Double)-\u003e Either QuadProgPPError (Vector Double, Double)",
        "fct-type": "function",
        "title": "solveQuadProg"
      },
      "index": {
        "description": "Solve strictly convex quadratic program with optional linear constraints It returns pair of the optimal solution and the value of the objective function at that point On error it returns Left",
        "hierarchy": "Numeric Minimization QuadProgPP",
        "module": "Numeric.Minimization.QuadProgPP",
        "name": "solveQuadProg",
        "normalized": "(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eEither QuadProgPPError(Vector Double,Double)",
        "package": "hmatrix-quadprogpp",
        "partial": "Quad Prog",
        "signature": "(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eEither QuadProgPPError(Vector Double,Double)"
      }
    }
  }
]