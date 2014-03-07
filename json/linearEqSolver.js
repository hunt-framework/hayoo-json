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
        "word": "linearEqSolver"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(The linear equation solver library is hosted at \u003ca\u003ehttp://github.com/LeventErkok/linearEqSolver\u003c/a\u003e.\n Comments, bug reports, and patches are always welcome.)\n\u003c/p\u003e\u003cp\u003eSolvers for linear equations over integers and rationals. Both single solution and all\n solution variants are supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "LinearEquationSolver",
          "package": "linearEqSolver",
          "source": "src/Math-LinearEquationSolver.html",
          "type": "module"
        },
        "index": {
          "description": "The linear equation solver library is hosted at http github.com LeventErkok linearEqSolver Comments bug reports and patches are always welcome Solvers for linear equations over integers and rationals Both single solution and all solution variants are supported",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "LinearEquationSolver",
          "package": "linearEqSolver",
          "partial": "Linear Equation Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to the SMT solver, via the SBV library. Unless you need to create\n custom solvers, or tweak the existing ones, you should not need to use this type: Simply\n use the values \u003ccode\u003e\u003ca\u003ez3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecvc4\u003c/a\u003e\u003c/code\u003e to access the respective SMT solvers.\n\u003c/p\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "Solver",
          "package": "linearEqSolver",
          "source": "src/Math-LinearEquationSolver.html#Solver",
          "type": "newtype"
        },
        "index": {
          "description": "Interface to the SMT solver via the SBV library Unless you need to create custom solvers or tweak the existing ones you should not need to use this type Simply use the values z3 and cvc4 to access the respective SMT solvers",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "Solver",
          "package": "linearEqSolver",
          "partial": "Solver",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#t:Solver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearEquationSolver",
          "name": "Solver",
          "package": "linearEqSolver",
          "signature": "Solver SMTConfig",
          "source": "src/Math-LinearEquationSolver.html#Solver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "Solver",
          "package": "linearEqSolver",
          "partial": "Solver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:Solver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CVC4 SMT solver from New York University and the University of Iowa: \u003ca\u003ehttp://cvc4.cs.nyu.edu\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "cvc4",
          "package": "linearEqSolver",
          "signature": "Solver",
          "source": "src/Math-LinearEquationSolver.html#cvc4",
          "type": "function"
        },
        "index": {
          "description": "The CVC4 SMT solver from New York University and the University of Iowa http cvc4.cs.nyu.edu",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "cvc4",
          "package": "linearEqSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:cvc4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve a system of linear integer equations. The first argument is\n the matrix of coefficients, known as \u003ccode\u003eA\u003c/code\u003e, of size \u003ccode\u003emxn\u003c/code\u003e. The second argument\n is the vector of results, known as \u003ccode\u003eb\u003c/code\u003e, of size \u003ccode\u003emx1\u003c/code\u003e. The result will be\n either \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there is no solution, or \u003ccode\u003eJust x\u003c/code\u003e -- such that \u003ccode\u003eAx = b\u003c/code\u003e holds.\n (Naturally, the result \u003ccode\u003ex\u003c/code\u003e will be a vector of size \u003ccode\u003enx1\u003c/code\u003e in this case.)\n\u003c/p\u003e\u003cp\u003eHere's an example call, to solve the following system of equations:\n\u003c/p\u003e\u003cpre\u003e\n     2x + 3y + 4z = 20\n     6x - 3y + 9z = -6\n     2x      +  z = 8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolveIntegerLinearEqs z3 [[2, 3, 4],[6, -3, 9],[2, 0, 1]] [20, -6, 8]\n\u003c/code\u003e\u003c/strong\u003eJust [5,6,-2]\n\u003c/pre\u003e\u003cp\u003eThe first argument picks the SMT solver to use. Valid values are \u003ccode\u003e\u003ca\u003ez3\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecvc4\u003c/a\u003e\u003c/code\u003e. Naturally, you should have the chosen solver installed on your system.\n\u003c/p\u003e\u003cp\u003eIn case there are no solutions, we will get \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolveIntegerLinearEqs z3 [[1], [1]] [2, 3]\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eNote that there are no solutions to this second system as it stipulates the unknown is\n equal to both 2 and 3. (Overspecified.)\n\u003c/p\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "solveIntegerLinearEqs",
          "package": "linearEqSolver",
          "signature": "Solver-\u003e [[Integer]]-\u003e [Integer]-\u003e IO (Maybe [Integer])",
          "type": "function"
        },
        "index": {
          "description": "Solve system of linear integer equations The first argument is the matrix of coefficients known as of size mxn The second argument is the vector of results known as of size mx1 The result will be either Nothing if there is no solution or Just such that Ax holds Naturally the result will be vector of size nx1 in this case Here an example call to solve the following system of equations solveIntegerLinearEqs z3 Just The first argument picks the SMT solver to use Valid values are z3 and cvc4 Naturally you should have the chosen solver installed on your system In case there are no solutions we will get Nothing solveIntegerLinearEqs z3 Nothing Note that there are no solutions to this second system as it stipulates the unknown is equal to both and Overspecified",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "solveIntegerLinearEqs",
          "normalized": "Solver-\u003e[[Integer]]-\u003e[Integer]-\u003eIO(Maybe[Integer])",
          "package": "linearEqSolver",
          "partial": "Integer Linear Eqs",
          "signature": "Solver-\u003e[[Integer]]-\u003e[Integer]-\u003eIO(Maybe[Integer])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:solveIntegerLinearEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003esolveIntegerLinearEqs\u003c/a\u003e\u003c/code\u003e, except returns all possible solutions.\n Note that there might be an infinite number of solutions if the system\n is underspecified, in which case the result will be a lazy list of solutions\n that the caller can consume as much as needed.\n\u003c/p\u003e\u003cp\u003eHere's an example call, where we underspecify the system and hence there are\n multiple (in this case an infinite number of) solutions. Here, we only take the first 3 elements,\n for testing purposes, but all such results can be computed lazily. Our system is:\n\u003c/p\u003e\u003cpre\u003e\n     2x + 3y + 4z = 20\n     6x - 3y + 9z = -6\n\u003c/pre\u003e\u003cp\u003eWe have:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 3 `fmap` solveIntegerLinearEqsAll z3 [[2, 3, 4],[6, -3, 9]] [20, -6]\n\u003c/code\u003e\u003c/strong\u003e[[5,6,-2],[-8,4,6],[18,8,-10]]\n\u003c/pre\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "solveIntegerLinearEqsAll",
          "package": "linearEqSolver",
          "signature": "Solver-\u003e [[Integer]]-\u003e [Integer]-\u003e IO [[Integer]]",
          "type": "function"
        },
        "index": {
          "description": "Similar to solveIntegerLinearEqs except returns all possible solutions Note that there might be an infinite number of solutions if the system is underspecified in which case the result will be lazy list of solutions that the caller can consume as much as needed Here an example call where we underspecify the system and hence there are multiple in this case an infinite number of solutions Here we only take the first elements for testing purposes but all such results can be computed lazily Our system is We have take fmap solveIntegerLinearEqsAll z3",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "solveIntegerLinearEqsAll",
          "normalized": "Solver-\u003e[[Integer]]-\u003e[Integer]-\u003eIO[[Integer]]",
          "package": "linearEqSolver",
          "partial": "Integer Linear Eqs All",
          "signature": "Solver-\u003e[[Integer]]-\u003e[Integer]-\u003eIO[[Integer]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:solveIntegerLinearEqsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve a system of linear equations over rationals. Same as the integer\n version \u003ccode\u003e\u003ca\u003esolveIntegerLinearEqs\u003c/a\u003e\u003c/code\u003e, except it takes rational coefficients\n and returns rational results.\n\u003c/p\u003e\u003cp\u003eHere's an example call, to solve the following system of equations:\n\u003c/p\u003e\u003cpre\u003e\n     2.4x + 3.6y = 12\n     7.2x - 5y   = -8.5\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolveRationalLinearEqs z3 [[2.4, 3.6],[7.2, -5]] [12, -8.5]\n\u003c/code\u003e\u003c/strong\u003eJust [245 % 316,445 % 158]\n\u003c/pre\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "solveRationalLinearEqs",
          "package": "linearEqSolver",
          "signature": "Solver-\u003e [[Rational]]-\u003e [Rational]-\u003e IO (Maybe [Rational])",
          "type": "function"
        },
        "index": {
          "description": "Solve system of linear equations over rationals Same as the integer version solveIntegerLinearEqs except it takes rational coefficients and returns rational results Here an example call to solve the following system of equations solveRationalLinearEqs z3 Just",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "solveRationalLinearEqs",
          "normalized": "Solver-\u003e[[Rational]]-\u003e[Rational]-\u003eIO(Maybe[Rational])",
          "package": "linearEqSolver",
          "partial": "Rational Linear Eqs",
          "signature": "Solver-\u003e[[Rational]]-\u003e[Rational]-\u003eIO(Maybe[Rational])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:solveRationalLinearEqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve a system of linear equations over rationals.  Similar to \u003ccode\u003e\u003ca\u003esolveRationalLinearEqs\u003c/a\u003e\u003c/code\u003e,\n except it returns all solutions lazily.\n\u003c/p\u003e\u003cp\u003eExample system:\n\u003c/p\u003e\u003cpre\u003e\n     2.4x + 3.6y = 12\n\u003c/pre\u003e\u003cp\u003eIn this case, the system has infinitely many solutions. We can compute three of them as follows:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 3 `fmap` solveRationalLinearEqsAll z3 [[2.4, 3.6]] [12]\n\u003c/code\u003e\u003c/strong\u003e[[5 % 1,0 % 1],[0 % 1,10 % 3],[3 % 2,7 % 3]]\n\u003c/pre\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "solveRationalLinearEqsAll",
          "package": "linearEqSolver",
          "signature": "Solver-\u003e [[Rational]]-\u003e [Rational]-\u003e IO [[Rational]]",
          "type": "function"
        },
        "index": {
          "description": "Solve system of linear equations over rationals Similar to solveRationalLinearEqs except it returns all solutions lazily Example system In this case the system has infinitely many solutions We can compute three of them as follows take fmap solveRationalLinearEqsAll z3",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "solveRationalLinearEqsAll",
          "normalized": "Solver-\u003e[[Rational]]-\u003e[Rational]-\u003eIO[[Rational]]",
          "package": "linearEqSolver",
          "partial": "Rational Linear Eqs All",
          "signature": "Solver-\u003e[[Rational]]-\u003e[Rational]-\u003eIO[[Rational]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:solveRationalLinearEqsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Z3 SMT solver from Microsoft: \u003ca\u003ehttp://z3.codeplex.com/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.LinearEquationSolver",
          "name": "z3",
          "package": "linearEqSolver",
          "signature": "Solver",
          "source": "src/Math-LinearEquationSolver.html#z3",
          "type": "function"
        },
        "index": {
          "description": "The Z3 SMT solver from Microsoft http z3.codeplex.com",
          "hierarchy": "Math LinearEquationSolver",
          "module": "Math.LinearEquationSolver",
          "name": "z3",
          "package": "linearEqSolver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linearEqSolver/docs/Math-LinearEquationSolver.html#v:z3"
      }
    }
  ]
]