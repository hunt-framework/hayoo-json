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
        "word": "hmatrix-quadprogpp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgPP",
          "package": "hmatrix-quadprogpp",
          "source": "src/Numeric-Minimization-QuadProgPP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgPP",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog PP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can happen in \u003ccode\u003e\u003ca\u003esolveQuadProg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgPPError",
          "package": "hmatrix-quadprogpp",
          "source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
          "type": "data"
        },
        "index": {
          "description": "Errors that can happen in solveQuadProg",
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgPPError",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog PPError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#t:QuadProgPPError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe problem has no feasible solution.\n\u003c/p\u003e",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgInfeasible",
          "package": "hmatrix-quadprogpp",
          "signature": "QuadProgInfeasible",
          "source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
          "type": "function"
        },
        "index": {
          "description": "The problem has no feasible solution",
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgInfeasible",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog Infeasible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgInfeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther errors. Currently this is used for C++ exceptions\n thrown by QuadProg++.\n\u003c/p\u003e",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgOtherError",
          "package": "hmatrix-quadprogpp",
          "signature": "QuadProgOtherError String",
          "source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
          "type": "function"
        },
        "index": {
          "description": "Other errors Currently this is used for exceptions thrown by QuadProg",
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgOtherError",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog Other Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgOtherError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe given matrices and vectors have inconsistent\n dimensionalities.\n\u003c/p\u003e",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgSizeMismatch",
          "package": "hmatrix-quadprogpp",
          "signature": "QuadProgSizeMismatch",
          "source": "src/Numeric-Minimization-QuadProgPP.html#QuadProgPPError",
          "type": "function"
        },
        "index": {
          "description": "The given matrices and vectors have inconsistent dimensionalities",
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "QuadProgSizeMismatch",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog Size Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:QuadProgSizeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve a strictly convex quadratic program with optional linear\n constraints. It returns a pair of the optimal solution and the\n value of the objective function at that point. On error it returns\n Left.\n\u003c/p\u003e",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "solveQuadProg",
          "package": "hmatrix-quadprogpp",
          "signature": "(Matrix Double, Vector Double)-\u003e Maybe (Matrix Double, Vector Double)-\u003e Maybe (Matrix Double, Vector Double)-\u003e Either QuadProgPPError (Vector Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Solve strictly convex quadratic program with optional linear constraints It returns pair of the optimal solution and the value of the objective function at that point On error it returns Left",
          "hierarchy": "Numeric Minimization QuadProgPP",
          "module": "Numeric.Minimization.QuadProgPP",
          "name": "solveQuadProg",
          "normalized": "(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eEither QuadProgPPError(Vector Double,Double)",
          "package": "hmatrix-quadprogpp",
          "partial": "Quad Prog",
          "signature": "(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eMaybe(Matrix Double,Vector Double)-\u003eEither QuadProgPPError(Vector Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-quadprogpp/docs/Numeric-Minimization-QuadProgPP.html#v:solveQuadProg"
      }
    }
  ]
]