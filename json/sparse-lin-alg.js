[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html",
        "fct-type": "module",
        "title": "Diagonal"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "name": "Diagonal",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Diagonal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#v:isDiag",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if matrix has diagonal form\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Bool",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#isDiag",
        "fct-type": "function",
        "title": "isDiag"
      },
      "index": {
        "description": "Checks if matrix has diagonal form",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "name": "isDiag",
        "normalized": "SparseMatrix a-\u003eBool",
        "package": "sparse-lin-alg",
        "partial": "Diag",
        "signature": "SparseMatrix α-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#v:toDiag",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms matrix to diagonal form and returns also two protocol matrices:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (d,t,u) = toDiag m  in t &#215; m &#215; (trans u) == d\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003et\u003c/code\u003e stores rows transformations and \u003ccode\u003eu\u003c/code\u003e &#8212; columns transformations\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α, SparseMatrix α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Diagonal.html#toDiag",
        "fct-type": "function",
        "title": "toDiag"
      },
      "index": {
        "description": "Transforms matrix to diagonal form and returns also two protocol matrices let toDiag in trans True stores rows transformations and columns transformations",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Diagonal",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Diagonal",
        "name": "toDiag",
        "normalized": "SparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a,SparseMatrix a)",
        "package": "sparse-lin-alg",
        "partial": "Diag",
        "signature": "SparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α,SparseMatrix α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html",
        "fct-type": "module",
        "title": "SolveLinear"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "name": "SolveLinear",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Solve Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#v:solveLinSystems",
      "description": {
        "fct-descr": "\u003cp\u003eSolves a set of systems for given left-side matrix and each right-side vector of given set (sparse vector)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α-\u003e SparseVector (SparseVector α)-\u003e Maybe (SparseVector (SparseVector α))",
        "fct-type": "function",
        "title": "solveLinSystems"
      },
      "index": {
        "description": "Solves set of systems for given left-side matrix and each right-side vector of given set sparse vector",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "name": "solveLinSystems",
        "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)-\u003eMaybe(SparseVector(SparseVector a))",
        "package": "sparse-lin-alg",
        "partial": "Lin Systems",
        "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)-\u003eMaybe(SparseVector(SparseVector α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#v:solveLinear",
      "description": {
        "fct-descr": "\u003cp\u003eJust solves system of linear equations in matrix form \n   for given left-side matrix and right-side vector\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector α -\u003e Maybe (SparseVector α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-SolveLinear.html#solveLinear",
        "fct-type": "function",
        "title": "solveLinear"
      },
      "index": {
        "description": "Just solves system of linear equations in matrix form for given left-side matrix and right-side vector",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms SolveLinear",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.SolveLinear",
        "name": "solveLinear",
        "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eMaybe(SparseVector a)",
        "package": "sparse-lin-alg",
        "partial": "Linear",
        "signature": "SparseMatrix α-\u003eSparseVector α-\u003eMaybe(SparseVector α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html",
        "fct-type": "module",
        "title": "Staircase"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "name": "Staircase",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Staircase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:extGCD",
      "description": {
        "fct-descr": "\u003cp\u003eExtended Euclid algorithm\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eextGCD a b\u003c/code\u003e returns \u003ccode\u003e(x,y)\u003c/code\u003e, such that \n\u003c/p\u003e\u003cpre\u003ex &#183; (a \u003c\u003e b) == gcd a b\u003c/pre\u003e\u003cpre\u003ey &#183; (a \u003c\u003e b) == 0\u003c/pre\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "α -\u003e α -\u003e (SparseVector α, SparseVector α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#extGCD",
        "fct-type": "function",
        "title": "extGCD"
      },
      "index": {
        "description": "Extended Euclid algorithm extGCD returns such that gcd",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "name": "extGCD",
        "normalized": "a-\u003ea-\u003e(SparseVector a,SparseVector a)",
        "package": "sparse-lin-alg",
        "partial": "GCD",
        "signature": "α-\u003eα-\u003e(SparseVector α,SparseVector α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:staircase",
      "description": {
        "fct-descr": "\u003cp\u003eStaircase Form of matrix.\n\u003c/p\u003e\u003cp\u003eIt uses an identity matrix as initial protocol matrix for \u003ccode\u003e\u003ca\u003estaircase'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt returns also transformation matrix:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet (s, t) = staircase m  in  t &#215; m == s\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eUsage of \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e causes \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e context. (TODO: eliminate it)\n\u003c/p\u003e\u003cp\u003eMethod:\n   Gauss method applied to the rows of matrix. Though &#945; may be not\n   a field, we repeat the remainder division to obtain zeroes down\n   in the column. \n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#staircase",
        "fct-type": "function",
        "title": "staircase"
      },
      "index": {
        "description": "Staircase Form of matrix It uses an identity matrix as initial protocol matrix for staircase It returns also transformation matrix let staircase in True Usage of divMod causes Integral context TODO eliminate it Method Gauss method applied to the rows of matrix Though may be not field we repeat the remainder division to obtain zeroes down in the column",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "name": "staircase",
        "normalized": "SparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#v:staircase-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStaircase Form of matrix.\n\u003c/p\u003e\u003cp\u003eIt takes matrix itself and initial protocol matrix and applies all\n   transformations to both of them in the same way, and then returns\n   matrix in the staircase form and a transformation matrix.\n\u003c/p\u003e\u003cp\u003eUsage of \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e causes \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e context. (TODO: eliminate it)\n\u003c/p\u003e\u003cp\u003eMethod:\n   Gauss method applied to the rows of matrix. Though &#945; may be not\n   a field, we repeat the remainder division to obtain zeroes down\n   in the column. \n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix a -\u003e SparseMatrix a -\u003e (SparseMatrix a, SparseMatrix a)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms-Staircase.html#staircase%27",
        "fct-type": "function",
        "title": "staircase'"
      },
      "index": {
        "description": "Staircase Form of matrix It takes matrix itself and initial protocol matrix and applies all transformations to both of them in the same way and then returns matrix in the staircase form and transformation matrix Usage of divMod causes Integral context TODO eliminate it Method Gauss method applied to the rows of matrix Though may be not field we repeat the remainder division to obtain zeroes down in the column",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms Staircase",
        "module": "Math.LinearAlgebra.Sparse.Algorithms.Staircase",
        "name": "staircase'",
        "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix a-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Algorithms.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Algorithms",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Algorithms.html",
        "fct-type": "module",
        "title": "Algorithms"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Algorithms",
        "module": "Math.LinearAlgebra.Sparse.Algorithms",
        "name": "Algorithms",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Algorithms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#t:SMx",
      "description": {
        "fct-descr": "\u003cp\u003eInternal storage of matrix\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "type",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SMx",
        "fct-type": "type",
        "title": "SMx"
      },
      "index": {
        "description": "Internal storage of matrix",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "SMx",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "SMx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#t:SparseMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eSparse matrix is indexed map of non-zero rows, \n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "data",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
        "fct-type": "data",
        "title": "SparseMatrix"
      },
      "index": {
        "description": "Sparse matrix is indexed map of non-zero rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "SparseMatrix",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Sparse Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds row to matrix at the top\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "Adds row to matrix at the top",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(|\u003e) |\u003e",
        "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-183--215-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emulVM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%B7%D7",
        "fct-type": "function",
        "title": "·×"
      },
      "index": {
        "description": "Unicode alias for mulVM",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "·×",
        "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-215-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emul\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%D7",
        "fct-type": "function",
        "title": "(×)"
      },
      "index": {
        "description": "Unicode alias for mul",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(×) ×",
        "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-215--183-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003emulMV\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%D7%B7",
        "fct-type": "function",
        "title": "(×·)"
      },
      "index": {
        "description": "Unicode alias for mulMV",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(×·) ×·",
        "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up an element in the matrix (if not found, zero is returned)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e (Index, Index) -\u003e α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Looks up an element in the matrix if not found zero is returned",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(#) #",
        "normalized": "SparseMatrix a-\u003e(Index,Index)-\u003ea",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003e(Index,Index)-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-47--47-",
      "description": {
        "fct-descr": "\u003cp\u003eVertical concatenation\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%2F%2F",
        "fct-type": "function",
        "title": "(//)"
      },
      "index": {
        "description": "Vertical concatenation",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(//) //",
        "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:-60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds row to matrix at the bottom\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "Adds row to matrix at the bottom",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "(\u003c|) \u003c|",
        "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:SM",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SM",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
        "fct-type": "function",
        "title": "SM"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "SM",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "SM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addCol",
      "description": {
        "fct-descr": "\u003cp\u003eAdds column at given index, increasing matrix width by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addCol",
        "fct-type": "function",
        "title": "addCol"
      },
      "index": {
        "description": "Adds column at given index increasing matrix width by and shifting indexes after it",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "addCol",
        "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Col",
        "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addRow",
      "description": {
        "fct-descr": "\u003cp\u003eAdds row at given index, increasing matrix height by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addRow",
        "fct-type": "function",
        "title": "addRow"
      },
      "index": {
        "description": "Adds row at given index increasing matrix height by and shifting indexes after it",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "addRow",
        "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addZeroCol",
      "description": {
        "fct-descr": "\u003cp\u003eJust adds zero column at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addZeroCol",
        "fct-type": "function",
        "title": "addZeroCol"
      },
      "index": {
        "description": "Just adds zero column at given index",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "addZeroCol",
        "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Zero Col",
        "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:addZeroRow",
      "description": {
        "fct-descr": "\u003cp\u003eJust adds zero row at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#addZeroRow",
        "fct-type": "function",
        "title": "addZeroRow"
      },
      "index": {
        "description": "Just adds zero row at given index",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "addZeroRow",
        "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Zero Row",
        "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:blockMx",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[[SparseMatrix α]] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#blockMx",
        "fct-type": "function",
        "title": "blockMx"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "blockMx",
        "normalized": "[[SparseMatrix a]]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "[[SparseMatrix α]]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:blockSMx",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix (SparseMatrix α) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#blockSMx",
        "fct-type": "function",
        "title": "blockSMx"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "blockSMx",
        "normalized": "SparseMatrix(SparseMatrix a)-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "SMx",
        "signature": "SparseMatrix(SparseMatrix α)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:col",
      "description": {
        "fct-descr": "\u003cp\u003eReturns column of matrix at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Index -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#col",
        "fct-type": "function",
        "title": "col"
      },
      "index": {
        "description": "Returns column of matrix at given index",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "col",
        "normalized": "SparseMatrix a-\u003eIndex-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eIndex-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:columns",
      "description": {
        "fct-descr": "\u003cp\u003eReturns vector with matrix columns (\u003ccode\u003erows . trans\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector (SparseVector α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#columns",
        "fct-type": "function",
        "title": "columns"
      },
      "index": {
        "description": "Returns vector with matrix columns rows trans",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "columns",
        "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delCol",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes column at given index, decreasing matrix width by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delCol",
        "fct-type": "function",
        "title": "delCol"
      },
      "index": {
        "description": "Deletes column at given index decreasing matrix width by and shifting indexes after it",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "delCol",
        "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Col",
        "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delRow",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes row at given index, decreasing matrix height by 1 \n   and shifting indexes after it\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delRow",
        "fct-type": "function",
        "title": "delRow"
      },
      "index": {
        "description": "Deletes row at given index decreasing matrix height by and shifting indexes after it",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "delRow",
        "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:delRowCol",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes row and column at given indexes\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#delRowCol",
        "fct-type": "function",
        "title": "delRowCol"
      },
      "index": {
        "description": "Deletes row and column at given indexes",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "delRowCol",
        "normalized": "Index-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row Col",
        "signature": "Index-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:diagonalMx",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs square matrix with given elements on diagonal\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[α] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#diagonalMx",
        "fct-type": "function",
        "title": "diagonalMx"
      },
      "index": {
        "description": "Constructs square matrix with given elements on diagonal",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "diagonalMx",
        "normalized": "[a]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "[α]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:dims",
      "description": {
        "fct-descr": "\u003cp\u003ereal height and width of filled matrix\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
        "fct-type": "function",
        "title": "dims"
      },
      "index": {
        "description": "real height and width of filled matrix",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "dims",
        "normalized": "(Int,Int)",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:emptyMx",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix of zero size with no values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#emptyMx",
        "fct-type": "function",
        "title": "emptyMx"
      },
      "index": {
        "description": "Matrix of zero size with no values",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "emptyMx",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:erase",
      "description": {
        "fct-descr": "\u003cp\u003eErases matrix element at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e (Index, Index) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#erase",
        "fct-type": "function",
        "title": "erase"
      },
      "index": {
        "description": "Erases matrix element at given index",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "erase",
        "normalized": "SparseMatrix a-\u003e(Index,Index)-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003e(Index,Index)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:eraseRow",
      "description": {
        "fct-descr": "\u003cp\u003eFills row with zeroes (i.e. deletes it, but size of matrix doesn't change)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#eraseRow",
        "fct-type": "function",
        "title": "eraseRow"
      },
      "index": {
        "description": "Fills row with zeroes i.e deletes it but size of matrix doesn change",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "eraseRow",
        "normalized": "Index-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "Index-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:exchangeRows",
      "description": {
        "fct-descr": "\u003cp\u003eExchanges positions of two rows\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#exchangeRows",
        "fct-type": "function",
        "title": "exchangeRows"
      },
      "index": {
        "description": "Exchanges positions of two rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "exchangeRows",
        "normalized": "Index-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Rows",
        "signature": "Index-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fillMx",
      "description": {
        "fct-descr": "\u003cp\u003eConverts sparse matrix to plain list-matrix with all zeroes restored\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e [[α]]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fillMx",
        "fct-type": "function",
        "title": "fillMx"
      },
      "index": {
        "description": "Converts sparse matrix to plain list-matrix with all zeroes restored",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "fillMx",
        "normalized": "SparseMatrix a-\u003e[[a]]",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "SparseMatrix α-\u003e[[α]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:findRowIndices",
      "description": {
        "fct-descr": "\u003cp\u003eFinds indices of rows, that satisfy given predicate. Searches from left to right (in ascending order of indices)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e [Int]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#findRowIndices",
        "fct-type": "function",
        "title": "findRowIndices"
      },
      "index": {
        "description": "Finds indices of rows that satisfy given predicate Searches from left to right in ascending order of indices",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "findRowIndices",
        "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e[Int]",
        "package": "sparse-lin-alg",
        "partial": "Row Indices",
        "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:findRowIndicesR",
      "description": {
        "fct-descr": "\u003cp\u003eFinds indices of rows, that satisfy given predicate. Searches from right to left (in descending order of indices)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e [Int]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#findRowIndicesR",
        "fct-type": "function",
        "title": "findRowIndicesR"
      },
      "index": {
        "description": "Finds indices of rows that satisfy given predicate Searches from right to left in descending order of indices",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "findRowIndicesR",
        "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e[Int]",
        "package": "sparse-lin-alg",
        "partial": "Row Indices",
        "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromAssocList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts associative list to sparse matrix,\n   using maximal index as matrix size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[((Index, Index), α)] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromAssocList",
        "fct-type": "function",
        "title": "fromAssocList"
      },
      "index": {
        "description": "Converts associative list to sparse matrix using maximal index as matrix size",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "fromAssocList",
        "normalized": "[((Index,Index),a)]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Assoc List",
        "signature": "[((Index,Index),α)]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromAssocListWithSize",
      "description": {
        "fct-descr": "\u003cp\u003eConverts associative list to sparse matrix,\n   of given size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int) -\u003e [((Index, Index), α)] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromAssocListWithSize",
        "fct-type": "function",
        "title": "fromAssocListWithSize"
      },
      "index": {
        "description": "Converts associative list to sparse matrix of given size",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "fromAssocListWithSize",
        "normalized": "(Int,Int)-\u003e[((Index,Index),a)]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Assoc List With Size",
        "signature": "(Int,Int)-\u003e[((Index,Index),α)]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:fromRows",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs matrix from a set (list\u003cem\u003evector\u003c/em\u003eetc.) of rows\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "φ (SparseVector α) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#fromRows",
        "fct-type": "function",
        "title": "fromRows"
      },
      "index": {
        "description": "Constructs matrix from set list vector etc of rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "fromRows",
        "normalized": "a(SparseVector b)-\u003eSparseMatrix b",
        "package": "sparse-lin-alg",
        "partial": "Rows",
        "signature": "φ(SparseVector α)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:hconcat",
      "description": {
        "fct-descr": "\u003cp\u003eBatch horisontal/vertical concatenation\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[SparseMatrix α] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#hconcat",
        "fct-type": "function",
        "title": "hconcat"
      },
      "index": {
        "description": "Batch horisontal vertical concatenation",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "hconcat",
        "normalized": "[SparseMatrix a]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "[SparseMatrix α]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:height",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix real height and width\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Int",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "Matrix real height and width",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "height",
        "normalized": "SparseMatrix a-\u003eInt",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:idMx",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity matrix of given size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Int -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#idMx",
        "fct-type": "function",
        "title": "idMx"
      },
      "index": {
        "description": "Identity matrix of given size",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "idMx",
        "normalized": "Int-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "Int-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:ins",
      "description": {
        "fct-descr": "\u003cp\u003eInserts new element to the sparse matrix (replaces old value)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e ((Index, Index), α) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#ins",
        "fct-type": "function",
        "title": "ins"
      },
      "index": {
        "description": "Inserts new element to the sparse matrix replaces old value",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "ins",
        "normalized": "SparseMatrix a-\u003e((Index,Index),a)-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003e((Index,Index),α)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:isNotZeroMx",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if matrix has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Bool",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#isNotZeroMx",
        "fct-type": "function",
        "title": "isNotZeroMx"
      },
      "index": {
        "description": "Checks if matrix has no non-zero values i.e is empty",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "isNotZeroMx",
        "normalized": "SparseMatrix a-\u003eBool",
        "package": "sparse-lin-alg",
        "partial": "Not Zero Mx",
        "signature": "SparseMatrix α-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:isZeroMx",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if matrix has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Bool",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#isZeroMx",
        "fct-type": "function",
        "title": "isZeroMx"
      },
      "index": {
        "description": "Checks if matrix has no non-zero values i.e is empty",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "isZeroMx",
        "normalized": "SparseMatrix a-\u003eBool",
        "package": "sparse-lin-alg",
        "partial": "Zero Mx",
        "signature": "SparseMatrix α-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mainDiag",
      "description": {
        "fct-descr": "\u003cp\u003eCollects main diagonal of matrix\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mainDiag",
        "fct-type": "function",
        "title": "mainDiag"
      },
      "index": {
        "description": "Collects main diagonal of matrix",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mainDiag",
        "normalized": "SparseMatrix a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Diag",
        "signature": "SparseMatrix α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mapOnRows",
      "description": {
        "fct-descr": "\u003cp\u003eApplies vector-function on matrix rows\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(SparseVector α -\u003e SparseVector β) -\u003e SparseMatrix α -\u003e SparseMatrix β",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mapOnRows",
        "fct-type": "function",
        "title": "mapOnRows"
      },
      "index": {
        "description": "Applies vector-function on matrix rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mapOnRows",
        "normalized": "(SparseVector a-\u003eSparseVector b)-\u003eSparseMatrix a-\u003eSparseMatrix b",
        "package": "sparse-lin-alg",
        "partial": "On Rows",
        "signature": "(SparseVector α-\u003eSparseVector β)-\u003eSparseMatrix α-\u003eSparseMatrix β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mul",
      "description": {
        "fct-descr": "\u003cp\u003eSparse matrices multiplication\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mul",
        "fct-type": "function",
        "title": "mul"
      },
      "index": {
        "description": "Sparse matrices multiplication",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mul",
        "normalized": "SparseMatrix a-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mulMV",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix-by-vector multiplication\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mulMV",
        "fct-type": "function",
        "title": "mulMV"
      },
      "index": {
        "description": "Matrix-by-vector multiplication",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mulMV",
        "normalized": "SparseMatrix a-\u003eSparseVector a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "MV",
        "signature": "SparseMatrix α-\u003eSparseVector α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mulVM",
      "description": {
        "fct-descr": "\u003cp\u003eVector-by-matrix multiplication\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e SparseMatrix α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#mulVM",
        "fct-type": "function",
        "title": "mulVM"
      },
      "index": {
        "description": "Vector-by-matrix multiplication",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mulVM",
        "normalized": "SparseVector a-\u003eSparseMatrix a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "VM",
        "signature": "SparseVector α-\u003eSparseMatrix α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:mx",
      "description": {
        "fct-descr": "\u003cp\u003eIntMap (IntMap &#945;) representing non-zero values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SMx α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#SparseMatrix",
        "fct-type": "function",
        "title": "mx"
      },
      "index": {
        "description": "IntMap IntMap representing non-zero values",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "mx",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:popRow",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a row at given index and matrix without it\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Index -\u003e SparseMatrix α -\u003e (SparseVector α, SparseMatrix α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#popRow",
        "fct-type": "function",
        "title": "popRow"
      },
      "index": {
        "description": "Returns row at given index and matrix without it",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "popRow",
        "normalized": "Index-\u003eSparseMatrix a-\u003e(SparseVector a,SparseMatrix a)",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "Index-\u003eSparseMatrix α-\u003e(SparseVector α,SparseMatrix α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:replaceRow",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces row at given index with given vector\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#replaceRow",
        "fct-type": "function",
        "title": "replaceRow"
      },
      "index": {
        "description": "Replaces row at given index with given vector",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "replaceRow",
        "normalized": "SparseVector a-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "SparseVector α-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:row",
      "description": {
        "fct-descr": "\u003cp\u003eReturns row of matrix at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Index -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#row",
        "fct-type": "function",
        "title": "row"
      },
      "index": {
        "description": "Returns row of matrix at given index",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "row",
        "normalized": "SparseMatrix a-\u003eIndex-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eIndex-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:rows",
      "description": {
        "fct-descr": "\u003cp\u003eReturns vector with matrix rows\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseVector (SparseVector α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#rows",
        "fct-type": "function",
        "title": "rows"
      },
      "index": {
        "description": "Returns vector with matrix rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "rows",
        "normalized": "SparseMatrix a-\u003eSparseVector(SparseVector a)",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseVector(SparseVector α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:separateMx",
      "description": {
        "fct-descr": "\u003cp\u003eSeparates matrix, using pedicate on rows and returns two matrices of the same size,\n   one only with rows satisfying predicate, and another with the rest rows\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(SparseVector α -\u003e Bool) -\u003e SparseMatrix α -\u003e (SparseMatrix α, SparseMatrix α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#separateMx",
        "fct-type": "function",
        "title": "separateMx"
      },
      "index": {
        "description": "Separates matrix using pedicate on rows and returns two matrices of the same size one only with rows satisfying predicate and another with the rest rows",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "separateMx",
        "normalized": "(SparseVector a-\u003eBool)-\u003eSparseMatrix a-\u003e(SparseMatrix a,SparseMatrix a)",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "(SparseVector α-\u003eBool)-\u003eSparseMatrix α-\u003e(SparseMatrix α,SparseMatrix α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:setSize",
      "description": {
        "fct-descr": "\u003cp\u003eSets height and width of matrix\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int) -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#setSize",
        "fct-type": "function",
        "title": "setSize"
      },
      "index": {
        "description": "Sets height and width of matrix",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "setSize",
        "normalized": "(Int,Int)-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Size",
        "signature": "(Int,Int)-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sizedBlockMx",
      "description": {
        "fct-descr": "\u003cp\u003eTakes size of each block and matrix of sparse matrices\n   and constructs sparse matrix from this blocks\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int) -\u003e [[SparseMatrix α]] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sizedBlockMx",
        "fct-type": "function",
        "title": "sizedBlockMx"
      },
      "index": {
        "description": "Takes size of each block and matrix of sparse matrices and constructs sparse matrix from this blocks",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "sizedBlockMx",
        "normalized": "(Int,Int)-\u003e[[SparseMatrix a]]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Block Mx",
        "signature": "(Int,Int)-\u003e[[SparseMatrix α]]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sizedBlockSMx",
      "description": {
        "fct-descr": "\u003cp\u003eFills sparse matrix of blocks and then applies \u003ccode\u003e\u003ca\u003esizedBlockMx\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int) -\u003e SparseMatrix (SparseMatrix α) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sizedBlockSMx",
        "fct-type": "function",
        "title": "sizedBlockSMx"
      },
      "index": {
        "description": "Fills sparse matrix of blocks and then applies sizedBlockMx",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "sizedBlockSMx",
        "normalized": "(Int,Int)-\u003eSparseMatrix(SparseMatrix a)-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Block SMx",
        "signature": "(Int,Int)-\u003eSparseMatrix(SparseMatrix α)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:sparseMx",
      "description": {
        "fct-descr": "\u003cp\u003eConverts plain list-matrix to sparse matrix, throwing out all zeroes\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[[α]] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#sparseMx",
        "fct-type": "function",
        "title": "sparseMx"
      },
      "index": {
        "description": "Converts plain list-matrix to sparse matrix throwing out all zeroes",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "sparseMx",
        "normalized": "[[a]]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "[[α]]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:toAssocList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts sparse matrix to associative list,\n   adding fake zero element, to save real size for inverse conversion\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e [((Index, Index), α)]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#toAssocList",
        "fct-type": "function",
        "title": "toAssocList"
      },
      "index": {
        "description": "Converts sparse matrix to associative list adding fake zero element to save real size for inverse conversion",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "toAssocList",
        "normalized": "SparseMatrix a-\u003e[((Index,Index),a)]",
        "package": "sparse-lin-alg",
        "partial": "Assoc List",
        "signature": "SparseMatrix α-\u003e[((Index,Index),α)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:trans",
      "description": {
        "fct-descr": "\u003cp\u003eTransposes matrix (rows become columns)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#trans",
        "fct-type": "function",
        "title": "trans"
      },
      "index": {
        "description": "Transposes matrix rows become columns",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "trans",
        "normalized": "SparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:updRow",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates values in row using given function\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(SparseVector α -\u003e SparseVector α) -\u003e Index -\u003e SparseMatrix α -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#updRow",
        "fct-type": "function",
        "title": "updRow"
      },
      "index": {
        "description": "Updates values in row using given function",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "updRow",
        "normalized": "(SparseVector a-\u003eSparseVector a)-\u003eIndex-\u003eSparseMatrix a-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Row",
        "signature": "(SparseVector α-\u003eSparseVector α)-\u003eIndex-\u003eSparseMatrix α-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:vconcat",
      "description": {
        "fct-descr": "\u003cp\u003eBatch horisontal/vertical concatenation\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[SparseMatrix α] -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#vconcat",
        "fct-type": "function",
        "title": "vconcat"
      },
      "index": {
        "description": "Batch horisontal vertical concatenation",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "vconcat",
        "normalized": "[SparseMatrix a]-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "[SparseMatrix α]-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:width",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix real height and width\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseMatrix α -\u003e Int",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "Matrix real height and width",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "width",
        "normalized": "SparseMatrix a-\u003eInt",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseMatrix α-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Matrix.html#v:zeroMx",
      "description": {
        "fct-descr": "\u003cp\u003eZero matrix of given size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Matrix",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(Int, Int) -\u003e SparseMatrix α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Matrix.html#zeroMx",
        "fct-type": "function",
        "title": "zeroMx"
      },
      "index": {
        "description": "Zero matrix of given size",
        "hierarchy": "Math LinearAlgebra Sparse Matrix",
        "module": "Math.LinearAlgebra.Sparse.Matrix",
        "name": "zeroMx",
        "normalized": "(Int,Int)-\u003eSparseMatrix a",
        "package": "sparse-lin-alg",
        "partial": "Mx",
        "signature": "(Int,Int)-\u003eSparseMatrix α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides common funtions for manipulating sparse vectors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "This module provides common funtions for manipulating sparse vectors",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:Index",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "type",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "Index",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:SVec",
      "description": {
        "fct-descr": "\u003cp\u003eType of internal vector storage\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "type",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#SVec",
        "fct-type": "type",
        "title": "SVec"
      },
      "index": {
        "description": "Type of internal vector storage",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "SVec",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "SVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#t:SparseVector",
      "description": {
        "fct-descr": "\u003cp\u003eSparse vector is just indexed map of non-zero values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "data",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
        "fct-type": "data",
        "title": "SparseVector"
      },
      "index": {
        "description": "Sparse vector is just indexed map of non-zero values",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "SparseVector",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Sparse Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:-183-",
      "description": {
        "fct-descr": "\u003cp\u003eUnicode alias for \u003ccode\u003e\u003ca\u003edot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e SparseVector α -\u003e α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#%B7",
        "fct-type": "function",
        "title": "·"
      },
      "index": {
        "description": "Unicode alias for dot",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "·",
        "normalized": "SparseVector a-\u003eSparseVector a-\u003ea",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseVector α-\u003eSparseVector α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up an element in the vector (if not found, zero is returned)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Index -\u003e α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Looks up an element in the vector if not found zero is returned",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "(!) !",
        "normalized": "SparseVector a-\u003eIndex-\u003ea",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseVector α-\u003eIndex-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:SV",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SV",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
        "fct-type": "function",
        "title": "SV"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "SV",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "SV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:dim",
      "description": {
        "fct-descr": "\u003cp\u003ereal size of vector (with zeroes)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Int",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
        "fct-type": "function",
        "title": "dim"
      },
      "index": {
        "description": "real size of vector with zeroes",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "dim",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eDot product of two sparse vectors\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e SparseVector α -\u003e α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "Dot product of two sparse vectors",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "dot",
        "normalized": "SparseVector a-\u003eSparseVector a-\u003ea",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": "SparseVector α-\u003eSparseVector α-\u003eα"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:emptyVec",
      "description": {
        "fct-descr": "\u003cp\u003eVector of zero size with no values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#emptyVec",
        "fct-type": "function",
        "title": "emptyVec"
      },
      "index": {
        "description": "Vector of zero size with no values",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "emptyVec",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:eraseInVec",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes element of vector at given index (size of vector doesn't change)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Index -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#eraseInVec",
        "fct-type": "function",
        "title": "eraseInVec"
      },
      "index": {
        "description": "Deletes element of vector at given index size of vector doesn change",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "eraseInVec",
        "normalized": "SparseVector a-\u003eIndex-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "In Vec",
        "signature": "SparseVector α-\u003eIndex-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:fillVec",
      "description": {
        "fct-descr": "\u003cp\u003eReturns plain list with all zeroes restored\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e [α]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#fillVec",
        "fct-type": "function",
        "title": "fillVec"
      },
      "index": {
        "description": "Returns plain list with all zeroes restored",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "fillVec",
        "normalized": "SparseVector a-\u003e[a]",
        "package": "sparse-lin-alg",
        "partial": "Vec",
        "signature": "SparseVector α-\u003e[α]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:intersectVecsWith",
      "description": {
        "fct-descr": "\u003cp\u003eIntersects non-zero values of vectors and applies given function on them\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(α -\u003e α -\u003e α) -\u003e SparseVector α -\u003e SparseVector α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#intersectVecsWith",
        "fct-type": "function",
        "title": "intersectVecsWith"
      },
      "index": {
        "description": "Intersects non-zero values of vectors and applies given function on them",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "intersectVecsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eSparseVector a-\u003eSparseVector a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Vecs With",
        "signature": "(α-\u003eα-\u003eα)-\u003eSparseVector α-\u003eSparseVector α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:isNotZeroVec",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if vector has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Bool",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#isNotZeroVec",
        "fct-type": "function",
        "title": "isNotZeroVec"
      },
      "index": {
        "description": "Checks if vector has no non-zero values i.e is empty",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "isNotZeroVec",
        "normalized": "SparseVector a-\u003eBool",
        "package": "sparse-lin-alg",
        "partial": "Not Zero Vec",
        "signature": "SparseVector α-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:isZeroVec",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if vector has no non-zero values (i.e. is empty)\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e Bool",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#isZeroVec",
        "fct-type": "function",
        "title": "isZeroVec"
      },
      "index": {
        "description": "Checks if vector has no non-zero values i.e is empty",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "isZeroVec",
        "normalized": "SparseVector a-\u003eBool",
        "package": "sparse-lin-alg",
        "partial": "Zero Vec",
        "signature": "SparseVector α-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:partitionVec",
      "description": {
        "fct-descr": "\u003cp\u003eSplits vector using predicate and returns a pair with filtered values and\n   re-enumereted second part (that doesn't satisfy predicate). For example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epartitionVec (\u003e0) (sparseList [0,1,-1,2,3,0,-4,5,-6,0,7])\n\u003c/code\u003e\u003c/strong\u003e( sparseList [0,1,0,2,3,0,0,5,0,0,7], sparseList [-1,-4,-6] )\n\u003c/pre\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(α -\u003e Bool) -\u003e SparseVector α -\u003e (SparseVector α, SparseVector α)",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#partitionVec",
        "fct-type": "function",
        "title": "partitionVec"
      },
      "index": {
        "description": "Splits vector using predicate and returns pair with filtered values and re-enumereted second part that doesn satisfy predicate For example partitionVec sparseList sparseList sparseList",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "partitionVec",
        "normalized": "(a-\u003eBool)-\u003eSparseVector a-\u003e(SparseVector a,SparseVector a)",
        "package": "sparse-lin-alg",
        "partial": "Vec",
        "signature": "(α-\u003eBool)-\u003eSparseVector α-\u003e(SparseVector α,SparseVector α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:setLength",
      "description": {
        "fct-descr": "\u003cp\u003eSets vector's size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Int -\u003e SparseVector α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#setLength",
        "fct-type": "function",
        "title": "setLength"
      },
      "index": {
        "description": "Sets vector size",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "setLength",
        "normalized": "Int-\u003eSparseVector a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Length",
        "signature": "Int-\u003eSparseVector α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:singVec",
      "description": {
        "fct-descr": "\u003cp\u003eVector of length 1 with given value\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#singVec",
        "fct-type": "function",
        "title": "singVec"
      },
      "index": {
        "description": "Vector of length with given value",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "singVec",
        "normalized": "a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Vec",
        "signature": "α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:sparseList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts plain list to sparse vector, throwing out all zeroes\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[α] -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#sparseList",
        "fct-type": "function",
        "title": "sparseList"
      },
      "index": {
        "description": "Converts plain list to sparse vector throwing out all zeroes",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "sparseList",
        "normalized": "[a]-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "List",
        "signature": "[α]-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:unionVecsWith",
      "description": {
        "fct-descr": "\u003cp\u003eUnions non-zero values of vectors and applies given function on intersection\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "(α -\u003e α -\u003e α) -\u003e SparseVector α -\u003e SparseVector α -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#unionVecsWith",
        "fct-type": "function",
        "title": "unionVecsWith"
      },
      "index": {
        "description": "Unions non-zero values of vectors and applies given function on intersection",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "unionVecsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eSparseVector a-\u003eSparseVector a-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Vecs With",
        "signature": "(α-\u003eα-\u003eα)-\u003eSparseVector α-\u003eSparseVector α-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vec",
      "description": {
        "fct-descr": "\u003cp\u003eIntMap storing non-zero values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SVec α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#SparseVector",
        "fct-type": "function",
        "title": "vec"
      },
      "index": {
        "description": "IntMap storing non-zero values",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "vec",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecFromAssocList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts associative list to sparse vector,\n   using maximal index as it's size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "[(Index, α)] -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecFromAssocList",
        "fct-type": "function",
        "title": "vecFromAssocList"
      },
      "index": {
        "description": "Converts associative list to sparse vector using maximal index as it size",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "vecFromAssocList",
        "normalized": "[(Index,a)]-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "From Assoc List",
        "signature": "[(Index,α)]-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecFromAssocListWithSize",
      "description": {
        "fct-descr": "\u003cp\u003eConverts associative list to sparse vector,\n   of given size\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Int -\u003e [(Index, α)] -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecFromAssocListWithSize",
        "fct-type": "function",
        "title": "vecFromAssocListWithSize"
      },
      "index": {
        "description": "Converts associative list to sparse vector of given size",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "vecFromAssocListWithSize",
        "normalized": "Int-\u003e[(Index,a)]-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "From Assoc List With Size",
        "signature": "Int-\u003e[(Index,α)]-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecIns",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates value at given index\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e (Index, α) -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecIns",
        "fct-type": "function",
        "title": "vecIns"
      },
      "index": {
        "description": "Updates value at given index",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "vecIns",
        "normalized": "SparseVector a-\u003e(Index,a)-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Ins",
        "signature": "SparseVector α-\u003e(Index,α)-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:vecToAssocList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts sparse vector to an associative list,\n   adding fake zero element, to save real size for inverse conversion\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "SparseVector α -\u003e [(Index, α)]",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#vecToAssocList",
        "fct-type": "function",
        "title": "vecToAssocList"
      },
      "index": {
        "description": "Converts sparse vector to an associative list adding fake zero element to save real size for inverse conversion",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "vecToAssocList",
        "normalized": "SparseVector a-\u003e[(Index,a)]",
        "package": "sparse-lin-alg",
        "partial": "To Assoc List",
        "signature": "SparseVector α-\u003e[(Index,α)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse-Vector.html#v:zeroVec",
      "description": {
        "fct-descr": "\u003cp\u003eVector of given size with no non-zero values\n\u003c/p\u003e",
        "fct-module": "Math.LinearAlgebra.Sparse.Vector",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "Int -\u003e SparseVector α",
        "fct-source": "src/Math-LinearAlgebra-Sparse-Vector.html#zeroVec",
        "fct-type": "function",
        "title": "zeroVec"
      },
      "index": {
        "description": "Vector of given size with no non-zero values",
        "hierarchy": "Math LinearAlgebra Sparse Vector",
        "module": "Math.LinearAlgebra.Sparse.Vector",
        "name": "zeroVec",
        "normalized": "Int-\u003eSparseVector a",
        "package": "sparse-lin-alg",
        "partial": "Vec",
        "signature": "Int-\u003eSparseVector α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparse-lin-alg/docs/Math-LinearAlgebra-Sparse.html#",
      "description": {
        "fct-module": "Math.LinearAlgebra.Sparse",
        "fct-package": "sparse-lin-alg",
        "fct-signature": "module",
        "fct-source": "src/Math-LinearAlgebra-Sparse.html",
        "fct-type": "module",
        "title": "Sparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Math LinearAlgebra Sparse",
        "module": "Math.LinearAlgebra.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "sparse-lin-alg",
        "partial": "Sparse",
        "signature": ""
      }
    }
  }
]