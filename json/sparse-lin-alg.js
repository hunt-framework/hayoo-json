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
        "word": "sparse-lin-alg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "Diagonal",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "Diagonal",
          "package": "sparse-lin-alg",
          "partial": "Diagonal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if matrix has diagonal form\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "isDiag",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Bool",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#isDiag",
          "type": "function"
        },
        "index": {
          "description": "Checks if matrix has diagonal form",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "isDiag",
          "normalized": "SparseMatrix a-\u003eBool",
          "package": "sparse-lin-alg",
          "partial": "Diag",
          "signature": "SparseMatrix α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#v:isDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms matrix to diagonal form and returns also two protocol matrices:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (d,t,u) = toDiag m  in t &#215; m &#215; (trans u) == d\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003et\u003c/code\u003e stores rows transformations and \u003ccode\u003eu\u003c/code\u003e &#8212; columns transformations\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "toDiag",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α, SparseMatrix α)",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#toDiag",
          "type": "function"
        },
        "index": {
          "description": "Transforms matrix to diagonal form and returns also two protocol matrices let toDiag in trans True stores rows transformations and columns transformations",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
          "name": "toDiag",
          "normalized": "SparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a,SparseMatrix a)",
          "package": "sparse-lin-alg",
          "partial": "Diag",
          "signature": "SparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α,SparseMatrix α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#v:toDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "SolveLinear",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "SolveLinear",
          "package": "sparse-lin-alg",
          "partial": "Solve Linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves a set of systems for given left-side matrix and each right-side vector of given set (sparse vector)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "solveLinSystems",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003e SparseVector (SparseVector α)-\u003e Maybe (SparseVector (SparseVector α))",
          "type": "function"
        },
        "index": {
          "description": "Solves set of systems for given left-side matrix and each right-side vector of given set sparse vector",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "solveLinSystems",
          "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)-\u003eMaybe(SparseVector(SparseVector a))",
          "package": "sparse-lin-alg",
          "partial": "Lin Systems",
          "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)-\u003eMaybe(SparseVector(SparseVector α))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#v:solveLinSystems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust solves system of linear equations in matrix form \n   for given left-side matrix and right-side vector\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "solveLinear",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector α -\u003e Maybe (SparseVector α)",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#solveLinear",
          "type": "function"
        },
        "index": {
          "description": "Just solves system of linear equations in matrix form for given left-side matrix and right-side vector",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
          "name": "solveLinear",
          "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eMaybe(SparseVector a)",
          "package": "sparse-lin-alg",
          "partial": "Linear",
          "signature": "SparseMatrix α-\u003eSparseVector α-\u003eMaybe(SparseVector α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#v:solveLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "Staircase",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "Staircase",
          "package": "sparse-lin-alg",
          "partial": "Staircase",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended Euclid algorithm\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eextGCD a b\u003c/code\u003e returns \u003ccode\u003e(x,y)\u003c/code\u003e, such that \n\u003c/p\u003e\u003cpre\u003ex &#183; (a \u003c\u003e b) == gcd a b\u003c/pre\u003e\u003cpre\u003ey &#183; (a \u003c\u003e b) == 0\u003c/pre\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "extGCD",
          "package": "sparse-lin-alg",
          "signature": "α -\u003e α -\u003e (SparseVector α, SparseVector α)",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#extGCD",
          "type": "function"
        },
        "index": {
          "description": "Extended Euclid algorithm extGCD returns such that gcd",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "extGCD",
          "normalized": "a-\u003ea-\u003e(SparseVector a,SparseVector a)",
          "package": "sparse-lin-alg",
          "partial": "GCD",
          "signature": "α-\u003eα-\u003e(SparseVector α,SparseVector α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:extGCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStaircase Form of matrix.\n\u003c/p\u003e\u003cp\u003eIt uses an identity matrix as initial protocol matrix for \u003ccode\u003e\u003ca\u003estaircase'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt returns also transformation matrix:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (s, t) = staircase m  in  t &#215; m == s\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eUsage of \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e causes \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e context. (TODO: eliminate it)\n\u003c/p\u003e\u003cp\u003eMethod:\n   Gauss method applied to the rows of matrix. Though &#945; may be not\n   a field, we repeat the remainder division to obtain zeroes down\n   in the column. \n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "staircase",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α)",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#staircase",
          "type": "function"
        },
        "index": {
          "description": "Staircase Form of matrix It uses an identity matrix as initial protocol matrix for staircase It returns also transformation matrix let staircase in True Usage of divMod causes Integral context TODO eliminate it Method Gauss method applied to the rows of matrix Though may be not field we repeat the remainder division to obtain zeroes down in the column",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "staircase",
          "normalized": "SparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:staircase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStaircase Form of matrix.\n\u003c/p\u003e\u003cp\u003eIt takes matrix itself and initial protocol matrix and applies all\n   transformations to both of them in the same way, and then returns\n   matrix in the staircase form and a transformation matrix.\n\u003c/p\u003e\u003cp\u003eUsage of \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e causes \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e context. (TODO: eliminate it)\n\u003c/p\u003e\u003cp\u003eMethod:\n   Gauss method applied to the rows of matrix. Though &#945; may be not\n   a field, we repeat the remainder division to obtain zeroes down\n   in the column. \n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "staircase'",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix a -\u003e SparseMatrix a -\u003e (SparseMatrix a, SparseMatrix a)",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#staircase%27",
          "type": "function"
        },
        "index": {
          "description": "Staircase Form of matrix It takes matrix itself and initial protocol matrix and applies all transformations to both of them in the same way and then returns matrix in the staircase form and transformation matrix Usage of divMod causes Integral context TODO eliminate it Method Gauss method applied to the rows of matrix Though may be not field we repeat the remainder division to obtain zeroes down in the column",
          "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
          "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
          "name": "staircase'",
          "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix a-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:staircase-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Algorithms",
          "name": "Algorithms",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Algorithms.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Algorithms",
          "module": "Math.LinearAlgebra.Sparse.Algorithms",
          "name": "Algorithms",
          "package": "sparse-lin-alg",
          "partial": "Algorithms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "Matrix",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "Matrix",
          "package": "sparse-lin-alg",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal storage of matrix\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SMx",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SMx",
          "type": "type"
        },
        "index": {
          "description": "Internal storage of matrix",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SMx",
          "package": "sparse-lin-alg",
          "partial": "SMx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#t:SMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSparse matrix is indexed map of non-zero rows, \n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SparseMatrix",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
          "type": "data"
        },
        "index": {
          "description": "Sparse matrix is indexed map of non-zero rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SparseMatrix",
          "package": "sparse-lin-alg",
          "partial": "Sparse Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#t:SparseMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds row to matrix at the top\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(|\u003e)",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Adds row to matrix at the top",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(|\u003e) |\u003e",
          "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emulVM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "·×",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%B7%D7",
          "type": "function"
        },
        "index": {
          "description": "Unicode alias for mulVM",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "·×",
          "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-183--215-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emul\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(×)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%D7",
          "type": "function"
        },
        "index": {
          "description": "Unicode alias for mul",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(×) ×",
          "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-215-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emulMV\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(×·)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%D7%B7",
          "type": "function"
        },
        "index": {
          "description": "Unicode alias for mulMV",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(×·) ×·",
          "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-215--183-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up an element in the matrix (if not found, zero is returned)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(#)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e (Index, Index) -\u003e α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%23",
          "type": "function"
        },
        "index": {
          "description": "Looks up an element in the matrix if not found zero is returned",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(#) #",
          "normalized": "SparseMatrix a-\u003e(Index,Index)-\u003ea",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003e(Index,Index)-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical concatenation\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(//)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Vertical concatenation",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(//) //",
          "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds row to matrix at the bottom\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(\u003c|)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Adds row to matrix at the bottom",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "(\u003c|) \u003c|",
          "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SM",
          "package": "sparse-lin-alg",
          "signature": "SM",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "SM",
          "package": "sparse-lin-alg",
          "partial": "SM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds column at given index, increasing matrix width by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addCol",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addCol",
          "type": "function"
        },
        "index": {
          "description": "Adds column at given index increasing matrix width by and shifting indexes after it",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addCol",
          "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Col",
          "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds row at given index, increasing matrix height by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addRow",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addRow",
          "type": "function"
        },
        "index": {
          "description": "Adds row at given index increasing matrix height by and shifting indexes after it",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addRow",
          "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust adds zero column at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addZeroCol",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addZeroCol",
          "type": "function"
        },
        "index": {
          "description": "Just adds zero column at given index",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addZeroCol",
          "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Zero Col",
          "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addZeroCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust adds zero row at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addZeroRow",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addZeroRow",
          "type": "function"
        },
        "index": {
          "description": "Just adds zero row at given index",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "addZeroRow",
          "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Zero Row",
          "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addZeroRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "blockMx",
          "package": "sparse-lin-alg",
          "signature": "[[SparseMatrix α]] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#blockMx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "blockMx",
          "normalized": "[[SparseMatrix a]]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "[[SparseMatrix α]]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:blockMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "blockSMx",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix (SparseMatrix α) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#blockSMx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "blockSMx",
          "normalized": "SparseMatrix(SparseMatrix a)-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "SMx",
          "signature": "SparseMatrix(SparseMatrix α)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:blockSMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns column of matrix at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "col",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Index -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#col",
          "type": "function"
        },
        "index": {
          "description": "Returns column of matrix at given index",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "col",
          "normalized": "SparseMatrix a-\u003eIndex-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eIndex-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns vector with matrix columns (\u003ccode\u003erows . trans\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "columns",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector (SparseVector α)",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#columns",
          "type": "function"
        },
        "index": {
          "description": "Returns vector with matrix columns rows trans",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "columns",
          "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes column at given index, decreasing matrix width by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delCol",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delCol",
          "type": "function"
        },
        "index": {
          "description": "Deletes column at given index decreasing matrix width by and shifting indexes after it",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delCol",
          "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Col",
          "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes row at given index, decreasing matrix height by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delRow",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delRow",
          "type": "function"
        },
        "index": {
          "description": "Deletes row at given index decreasing matrix height by and shifting indexes after it",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delRow",
          "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes row and column at given indexes\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delRowCol",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delRowCol",
          "type": "function"
        },
        "index": {
          "description": "Deletes row and column at given indexes",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "delRowCol",
          "normalized": "Index-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row Col",
          "signature": "Index-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delRowCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs square matrix with given elements on diagonal\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "diagonalMx",
          "package": "sparse-lin-alg",
          "signature": "[α] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#diagonalMx",
          "type": "function"
        },
        "index": {
          "description": "Constructs square matrix with given elements on diagonal",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "diagonalMx",
          "normalized": "[a]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "[α]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:diagonalMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereal height and width of filled matrix\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "dims",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int)",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
          "type": "function"
        },
        "index": {
          "description": "real height and width of filled matrix",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "dims",
          "normalized": "(Int,Int)",
          "package": "sparse-lin-alg",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:dims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix of zero size with no values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "emptyMx",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#emptyMx",
          "type": "function"
        },
        "index": {
          "description": "Matrix of zero size with no values",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "emptyMx",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:emptyMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErases matrix element at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "erase",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e (Index, Index) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#erase",
          "type": "function"
        },
        "index": {
          "description": "Erases matrix element at given index",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "erase",
          "normalized": "SparseMatrix a-\u003e(Index,Index)-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003e(Index,Index)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:erase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills row with zeroes (i.e. deletes it, but size of matrix doesn't change)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "eraseRow",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#eraseRow",
          "type": "function"
        },
        "index": {
          "description": "Fills row with zeroes i.e deletes it but size of matrix doesn change",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "eraseRow",
          "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:eraseRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchanges positions of two rows\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "exchangeRows",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#exchangeRows",
          "type": "function"
        },
        "index": {
          "description": "Exchanges positions of two rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "exchangeRows",
          "normalized": "Index-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Rows",
          "signature": "Index-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:exchangeRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts sparse matrix to plain list-matrix with all zeroes restored\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fillMx",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e [[α]]",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fillMx",
          "type": "function"
        },
        "index": {
          "description": "Converts sparse matrix to plain list-matrix with all zeroes restored",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fillMx",
          "normalized": "SparseMatrix a-\u003e[[a]]",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "SparseMatrix α-\u003e[[α]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fillMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds indices of rows, that satisfy given predicate. Searches from left to right (in ascending order of indices)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "findRowIndices",
          "package": "sparse-lin-alg",
          "signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e [Int]",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#findRowIndices",
          "type": "function"
        },
        "index": {
          "description": "Finds indices of rows that satisfy given predicate Searches from left to right in ascending order of indices",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "findRowIndices",
          "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e[Int]",
          "package": "sparse-lin-alg",
          "partial": "Row Indices",
          "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:findRowIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds indices of rows, that satisfy given predicate. Searches from right to left (in descending order of indices)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "findRowIndicesR",
          "package": "sparse-lin-alg",
          "signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e [Int]",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#findRowIndicesR",
          "type": "function"
        },
        "index": {
          "description": "Finds indices of rows that satisfy given predicate Searches from right to left in descending order of indices",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "findRowIndicesR",
          "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e[Int]",
          "package": "sparse-lin-alg",
          "partial": "Row Indices",
          "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:findRowIndicesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts associative list to sparse matrix,\n   using maximal index as matrix size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromAssocList",
          "package": "sparse-lin-alg",
          "signature": "[((Index, Index), α)] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromAssocList",
          "type": "function"
        },
        "index": {
          "description": "Converts associative list to sparse matrix using maximal index as matrix size",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromAssocList",
          "normalized": "[((Index,Index),a)]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Assoc List",
          "signature": "[((Index,Index),α)]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromAssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts associative list to sparse matrix,\n   of given size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromAssocListWithSize",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int) -\u003e [((Index, Index), α)] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromAssocListWithSize",
          "type": "function"
        },
        "index": {
          "description": "Converts associative list to sparse matrix of given size",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromAssocListWithSize",
          "normalized": "(Int,Int)-\u003e[((Index,Index),a)]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Assoc List With Size",
          "signature": "(Int,Int)-\u003e[((Index,Index),α)]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromAssocListWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs matrix from a set (list\u003cem\u003evector\u003c/em\u003eetc.) of rows\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromRows",
          "package": "sparse-lin-alg",
          "signature": "φ (SparseVector α) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromRows",
          "type": "function"
        },
        "index": {
          "description": "Constructs matrix from set list vector etc of rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "fromRows",
          "normalized": "a(SparseVector b)-\u003eSparseMatrix b",
          "package": "sparse-lin-alg",
          "partial": "Rows",
          "signature": "φ(SparseVector α)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBatch horisontal/vertical concatenation\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "hconcat",
          "package": "sparse-lin-alg",
          "signature": "[SparseMatrix α] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#hconcat",
          "type": "function"
        },
        "index": {
          "description": "Batch horisontal vertical concatenation",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "hconcat",
          "normalized": "[SparseMatrix a]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "[SparseMatrix α]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:hconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix real height and width\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "height",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Int",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#height",
          "type": "function"
        },
        "index": {
          "description": "Matrix real height and width",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "height",
          "normalized": "SparseMatrix a-\u003eInt",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity matrix of given size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "idMx",
          "package": "sparse-lin-alg",
          "signature": "Int -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#idMx",
          "type": "function"
        },
        "index": {
          "description": "Identity matrix of given size",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "idMx",
          "normalized": "Int-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "Int-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:idMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts new element to the sparse matrix (replaces old value)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "ins",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e ((Index, Index), α) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#ins",
          "type": "function"
        },
        "index": {
          "description": "Inserts new element to the sparse matrix replaces old value",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "ins",
          "normalized": "SparseMatrix a-\u003e((Index,Index),a)-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003e((Index,Index),α)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:ins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if matrix has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "isNotZeroMx",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Bool",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#isNotZeroMx",
          "type": "function"
        },
        "index": {
          "description": "Checks if matrix has no non-zero values i.e is empty",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "isNotZeroMx",
          "normalized": "SparseMatrix a-\u003eBool",
          "package": "sparse-lin-alg",
          "partial": "Not Zero Mx",
          "signature": "SparseMatrix α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:isNotZeroMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if matrix has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "isZeroMx",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Bool",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#isZeroMx",
          "type": "function"
        },
        "index": {
          "description": "Checks if matrix has no non-zero values i.e is empty",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "isZeroMx",
          "normalized": "SparseMatrix a-\u003eBool",
          "package": "sparse-lin-alg",
          "partial": "Zero Mx",
          "signature": "SparseMatrix α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:isZeroMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects main diagonal of matrix\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mainDiag",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mainDiag",
          "type": "function"
        },
        "index": {
          "description": "Collects main diagonal of matrix",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mainDiag",
          "normalized": "SparseMatrix a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Diag",
          "signature": "SparseMatrix α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mainDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies vector-function on matrix rows\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mapOnRows",
          "package": "sparse-lin-alg",
          "signature": "(SparseVector α -\u003e SparseVector β) -\u003e SparseMatrix α -\u003e SparseMatrix β",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mapOnRows",
          "type": "function"
        },
        "index": {
          "description": "Applies vector-function on matrix rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mapOnRows",
          "normalized": "(SparseVector a-\u003eSparseVector b)-\u003eSparseMatrix a-\u003eSparseMatrix b",
          "package": "sparse-lin-alg",
          "partial": "On Rows",
          "signature": "(SparseVector α-\u003eSparseVector β)-\u003eSparseMatrix α-\u003eSparseMatrix β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mapOnRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSparse matrices multiplication\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mul",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mul",
          "type": "function"
        },
        "index": {
          "description": "Sparse matrices multiplication",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mul",
          "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix-by-vector multiplication\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mulMV",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mulMV",
          "type": "function"
        },
        "index": {
          "description": "Matrix-by-vector multiplication",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mulMV",
          "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "MV",
          "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mulMV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector-by-matrix multiplication\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mulVM",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mulVM",
          "type": "function"
        },
        "index": {
          "description": "Vector-by-matrix multiplication",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mulVM",
          "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "VM",
          "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mulVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntMap (IntMap &#945;) representing non-zero values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mx",
          "package": "sparse-lin-alg",
          "signature": "SMx α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
          "type": "function"
        },
        "index": {
          "description": "IntMap IntMap representing non-zero values",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "mx",
          "package": "sparse-lin-alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a row at given index and matrix without it\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "popRow",
          "package": "sparse-lin-alg",
          "signature": "Index -\u003e SparseMatrix α -\u003e (SparseVector α, SparseMatrix α)",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#popRow",
          "type": "function"
        },
        "index": {
          "description": "Returns row at given index and matrix without it",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "popRow",
          "normalized": "Index-\u003eSparseMatrix a-\u003e(SparseVector a,SparseMatrix a)",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "Index-\u003eSparseMatrix α-\u003e(SparseVector α,SparseMatrix α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:popRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces row at given index with given vector\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "replaceRow",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#replaceRow",
          "type": "function"
        },
        "index": {
          "description": "Replaces row at given index with given vector",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "replaceRow",
          "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:replaceRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns row of matrix at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "row",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Index -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#row",
          "type": "function"
        },
        "index": {
          "description": "Returns row of matrix at given index",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "row",
          "normalized": "SparseMatrix a-\u003eIndex-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eIndex-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns vector with matrix rows\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "rows",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseVector (SparseVector α)",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#rows",
          "type": "function"
        },
        "index": {
          "description": "Returns vector with matrix rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "rows",
          "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparates matrix, using pedicate on rows and returns two matrices of the same size,\n   one only with rows satisfying predicate, and another with the rest rows\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "separateMx",
          "package": "sparse-lin-alg",
          "signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α)",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#separateMx",
          "type": "function"
        },
        "index": {
          "description": "Separates matrix using pedicate on rows and returns two matrices of the same size one only with rows satisfying predicate and another with the rest rows",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "separateMx",
          "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:separateMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets height and width of matrix\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "setSize",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int) -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#setSize",
          "type": "function"
        },
        "index": {
          "description": "Sets height and width of matrix",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "setSize",
          "normalized": "(Int,Int)-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Size",
          "signature": "(Int,Int)-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:setSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes size of each block and matrix of sparse matrices\n   and constructs sparse matrix from this blocks\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sizedBlockMx",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int) -\u003e [[SparseMatrix α]] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sizedBlockMx",
          "type": "function"
        },
        "index": {
          "description": "Takes size of each block and matrix of sparse matrices and constructs sparse matrix from this blocks",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sizedBlockMx",
          "normalized": "(Int,Int)-\u003e[[SparseMatrix a]]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Block Mx",
          "signature": "(Int,Int)-\u003e[[SparseMatrix α]]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sizedBlockMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills sparse matrix of blocks and then applies \u003ccode\u003e\u003ca\u003esizedBlockMx\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sizedBlockSMx",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int) -\u003e SparseMatrix (SparseMatrix α) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sizedBlockSMx",
          "type": "function"
        },
        "index": {
          "description": "Fills sparse matrix of blocks and then applies sizedBlockMx",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sizedBlockSMx",
          "normalized": "(Int,Int)-\u003eSparseMatrix(SparseMatrix a)-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Block SMx",
          "signature": "(Int,Int)-\u003eSparseMatrix(SparseMatrix α)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sizedBlockSMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts plain list-matrix to sparse matrix, throwing out all zeroes\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sparseMx",
          "package": "sparse-lin-alg",
          "signature": "[[α]] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sparseMx",
          "type": "function"
        },
        "index": {
          "description": "Converts plain list-matrix to sparse matrix throwing out all zeroes",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "sparseMx",
          "normalized": "[[a]]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "[[α]]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sparseMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts sparse matrix to associative list,\n   adding fake zero element, to save real size for inverse conversion\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "toAssocList",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e [((Index, Index), α)]",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#toAssocList",
          "type": "function"
        },
        "index": {
          "description": "Converts sparse matrix to associative list adding fake zero element to save real size for inverse conversion",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "toAssocList",
          "normalized": "SparseMatrix a-\u003e[((Index,Index),a)]",
          "package": "sparse-lin-alg",
          "partial": "Assoc List",
          "signature": "SparseMatrix α-\u003e[((Index,Index),α)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:toAssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes matrix (rows become columns)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "trans",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Transposes matrix rows become columns",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "trans",
          "normalized": "SparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates values in row using given function\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "updRow",
          "package": "sparse-lin-alg",
          "signature": "(SparseVector α -\u003e SparseVector α) -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#updRow",
          "type": "function"
        },
        "index": {
          "description": "Updates values in row using given function",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "updRow",
          "normalized": "(SparseVector a-\u003eSparseVector a)-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Row",
          "signature": "(SparseVector α-\u003eSparseVector α)-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:updRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBatch horisontal/vertical concatenation\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "vconcat",
          "package": "sparse-lin-alg",
          "signature": "[SparseMatrix α] -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#vconcat",
          "type": "function"
        },
        "index": {
          "description": "Batch horisontal vertical concatenation",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "vconcat",
          "normalized": "[SparseMatrix a]-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "signature": "[SparseMatrix α]-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:vconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix real height and width\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "width",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α -\u003e Int",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#width",
          "type": "function"
        },
        "index": {
          "description": "Matrix real height and width",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "width",
          "normalized": "SparseMatrix a-\u003eInt",
          "package": "sparse-lin-alg",
          "signature": "SparseMatrix α-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero matrix of given size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "zeroMx",
          "package": "sparse-lin-alg",
          "signature": "(Int, Int) -\u003e SparseMatrix α",
          "source": "src/Math-LinearAlgebra-Sparse-Matrix.html#zeroMx",
          "type": "function"
        },
        "index": {
          "description": "Zero matrix of given size",
          "hierarchy": "Math LinearAlgebra Sparse Matrix",
          "module": "Math.LinearAlgebra.Sparse.Matrix",
          "name": "zeroMx",
          "normalized": "(Int,Int)-\u003eSparseMatrix a",
          "package": "sparse-lin-alg",
          "partial": "Mx",
          "signature": "(Int,Int)-\u003eSparseMatrix α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:zeroMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides common funtions for manipulating sparse vectors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "Vector",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides common funtions for manipulating sparse vectors",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "Vector",
          "package": "sparse-lin-alg",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "Index",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "Index",
          "package": "sparse-lin-alg",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of internal vector storage\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SVec",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#SVec",
          "type": "type"
        },
        "index": {
          "description": "Type of internal vector storage",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SVec",
          "package": "sparse-lin-alg",
          "partial": "SVec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:SVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSparse vector is just indexed map of non-zero values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SparseVector",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
          "type": "data"
        },
        "index": {
          "description": "Sparse vector is just indexed map of non-zero values",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SparseVector",
          "package": "sparse-lin-alg",
          "partial": "Sparse Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:SparseVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003edot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "·",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e SparseVector α -\u003e α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#%B7",
          "type": "function"
        },
        "index": {
          "description": "Unicode alias for dot",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "·",
          "normalized": "SparseVector a-\u003eSparseVector a-\u003ea",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α-\u003eSparseVector α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:-183-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up an element in the vector (if not found, zero is returned)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "(!)",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Index -\u003e α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Looks up an element in the vector if not found zero is returned",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "(!) !",
          "normalized": "SparseVector a-\u003eIndex-\u003ea",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α-\u003eIndex-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SV",
          "package": "sparse-lin-alg",
          "signature": "SV",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "SV",
          "package": "sparse-lin-alg",
          "partial": "SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereal size of vector (with zeroes)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "dim",
          "package": "sparse-lin-alg",
          "signature": "Int",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
          "type": "function"
        },
        "index": {
          "description": "real size of vector with zeroes",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "dim",
          "package": "sparse-lin-alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product of two sparse vectors\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "dot",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e SparseVector α -\u003e α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#dot",
          "type": "function"
        },
        "index": {
          "description": "Dot product of two sparse vectors",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "dot",
          "normalized": "SparseVector a-\u003eSparseVector a-\u003ea",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α-\u003eSparseVector α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of zero size with no values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "emptyVec",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#emptyVec",
          "type": "function"
        },
        "index": {
          "description": "Vector of zero size with no values",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "emptyVec",
          "package": "sparse-lin-alg",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:emptyVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes element of vector at given index (size of vector doesn't change)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "eraseInVec",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Index -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#eraseInVec",
          "type": "function"
        },
        "index": {
          "description": "Deletes element of vector at given index size of vector doesn change",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "eraseInVec",
          "normalized": "SparseVector a-\u003eIndex-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "In Vec",
          "signature": "SparseVector α-\u003eIndex-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:eraseInVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns plain list with all zeroes restored\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "fillVec",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e [α]",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#fillVec",
          "type": "function"
        },
        "index": {
          "description": "Returns plain list with all zeroes restored",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "fillVec",
          "normalized": "SparseVector a-\u003e[a]",
          "package": "sparse-lin-alg",
          "partial": "Vec",
          "signature": "SparseVector α-\u003e[α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:fillVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersects non-zero values of vectors and applies given function on them\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "intersectVecsWith",
          "package": "sparse-lin-alg",
          "signature": "(α -\u003e α -\u003e α) -\u003e SparseVector α -\u003e SparseVector α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#intersectVecsWith",
          "type": "function"
        },
        "index": {
          "description": "Intersects non-zero values of vectors and applies given function on them",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "intersectVecsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSparseVector a-\u003eSparseVector a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Vecs With",
          "signature": "(α-\u003eα-\u003eα)-\u003eSparseVector α-\u003eSparseVector α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:intersectVecsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if vector has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "isNotZeroVec",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Bool",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#isNotZeroVec",
          "type": "function"
        },
        "index": {
          "description": "Checks if vector has no non-zero values i.e is empty",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "isNotZeroVec",
          "normalized": "SparseVector a-\u003eBool",
          "package": "sparse-lin-alg",
          "partial": "Not Zero Vec",
          "signature": "SparseVector α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:isNotZeroVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if vector has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "isZeroVec",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e Bool",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#isZeroVec",
          "type": "function"
        },
        "index": {
          "description": "Checks if vector has no non-zero values i.e is empty",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "isZeroVec",
          "normalized": "SparseVector a-\u003eBool",
          "package": "sparse-lin-alg",
          "partial": "Zero Vec",
          "signature": "SparseVector α-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:isZeroVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits vector using predicate and returns a pair with filtered values and\n   re-enumereted second part (that doesn't satisfy predicate). For example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epartitionVec (\u003e0) (sparseList [0,1,-1,2,3,0,-4,5,-6,0,7])\n\u003c/code\u003e\u003c/strong\u003e( sparseList [0,1,0,2,3,0,0,5,0,0,7], sparseList [-1,-4,-6] )\n\u003c/pre\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "partitionVec",
          "package": "sparse-lin-alg",
          "signature": "(α -\u003e Bool) -\u003e SparseVector α -\u003e (SparseVector α, SparseVector α)",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#partitionVec",
          "type": "function"
        },
        "index": {
          "description": "Splits vector using predicate and returns pair with filtered values and re-enumereted second part that doesn satisfy predicate For example partitionVec sparseList sparseList sparseList",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "partitionVec",
          "normalized": "(a-\u003eBool)-\u003eSparseVector a-\u003e(SparseVector a,SparseVector a)",
          "package": "sparse-lin-alg",
          "partial": "Vec",
          "signature": "(α-\u003eBool)-\u003eSparseVector α-\u003e(SparseVector α,SparseVector α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:partitionVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets vector's size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "setLength",
          "package": "sparse-lin-alg",
          "signature": "Int -\u003e SparseVector α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#setLength",
          "type": "function"
        },
        "index": {
          "description": "Sets vector size",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "setLength",
          "normalized": "Int-\u003eSparseVector a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Length",
          "signature": "Int-\u003eSparseVector α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:setLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of length 1 with given value\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "singVec",
          "package": "sparse-lin-alg",
          "signature": "α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#singVec",
          "type": "function"
        },
        "index": {
          "description": "Vector of length with given value",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "singVec",
          "normalized": "a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Vec",
          "signature": "α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:singVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts plain list to sparse vector, throwing out all zeroes\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "sparseList",
          "package": "sparse-lin-alg",
          "signature": "[α] -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#sparseList",
          "type": "function"
        },
        "index": {
          "description": "Converts plain list to sparse vector throwing out all zeroes",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "sparseList",
          "normalized": "[a]-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "List",
          "signature": "[α]-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:sparseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnions non-zero values of vectors and applies given function on intersection\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "unionVecsWith",
          "package": "sparse-lin-alg",
          "signature": "(α -\u003e α -\u003e α) -\u003e SparseVector α -\u003e SparseVector α -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#unionVecsWith",
          "type": "function"
        },
        "index": {
          "description": "Unions non-zero values of vectors and applies given function on intersection",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "unionVecsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSparseVector a-\u003eSparseVector a-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Vecs With",
          "signature": "(α-\u003eα-\u003eα)-\u003eSparseVector α-\u003eSparseVector α-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:unionVecsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntMap storing non-zero values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vec",
          "package": "sparse-lin-alg",
          "signature": "SVec α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
          "type": "function"
        },
        "index": {
          "description": "IntMap storing non-zero values",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vec",
          "package": "sparse-lin-alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts associative list to sparse vector,\n   using maximal index as it's size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecFromAssocList",
          "package": "sparse-lin-alg",
          "signature": "[(Index, α)] -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecFromAssocList",
          "type": "function"
        },
        "index": {
          "description": "Converts associative list to sparse vector using maximal index as it size",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecFromAssocList",
          "normalized": "[(Index,a)]-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "From Assoc List",
          "signature": "[(Index,α)]-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecFromAssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts associative list to sparse vector,\n   of given size\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecFromAssocListWithSize",
          "package": "sparse-lin-alg",
          "signature": "Int -\u003e [(Index, α)] -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecFromAssocListWithSize",
          "type": "function"
        },
        "index": {
          "description": "Converts associative list to sparse vector of given size",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecFromAssocListWithSize",
          "normalized": "Int-\u003e[(Index,a)]-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "From Assoc List With Size",
          "signature": "Int-\u003e[(Index,α)]-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecFromAssocListWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates value at given index\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecIns",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e (Index, α) -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecIns",
          "type": "function"
        },
        "index": {
          "description": "Updates value at given index",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecIns",
          "normalized": "SparseVector a-\u003e(Index,a)-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Ins",
          "signature": "SparseVector α-\u003e(Index,α)-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts sparse vector to an associative list,\n   adding fake zero element, to save real size for inverse conversion\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecToAssocList",
          "package": "sparse-lin-alg",
          "signature": "SparseVector α -\u003e [(Index, α)]",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecToAssocList",
          "type": "function"
        },
        "index": {
          "description": "Converts sparse vector to an associative list adding fake zero element to save real size for inverse conversion",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "vecToAssocList",
          "normalized": "SparseVector a-\u003e[(Index,a)]",
          "package": "sparse-lin-alg",
          "partial": "To Assoc List",
          "signature": "SparseVector α-\u003e[(Index,α)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecToAssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of given size with no non-zero values\n\u003c/p\u003e",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "zeroVec",
          "package": "sparse-lin-alg",
          "signature": "Int -\u003e SparseVector α",
          "source": "src/Math-LinearAlgebra-Sparse-Vector.html#zeroVec",
          "type": "function"
        },
        "index": {
          "description": "Vector of given size with no non-zero values",
          "hierarchy": "Math LinearAlgebra Sparse Vector",
          "module": "Math.LinearAlgebra.Sparse.Vector",
          "name": "zeroVec",
          "normalized": "Int-\u003eSparseVector a",
          "package": "sparse-lin-alg",
          "partial": "Vec",
          "signature": "Int-\u003eSparseVector α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:zeroVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.LinearAlgebra.Sparse",
          "name": "Sparse",
          "package": "sparse-lin-alg",
          "source": "src/Math-LinearAlgebra-Sparse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math LinearAlgebra Sparse",
          "module": "Math.LinearAlgebra.Sparse",
          "name": "Sparse",
          "package": "sparse-lin-alg",
          "partial": "Sparse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse.html#"
      }
    }
  ]
]