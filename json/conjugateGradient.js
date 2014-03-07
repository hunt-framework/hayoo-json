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
        "word": "conjugateGradient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(The linear equation solver library is hosted at \u003ca\u003ehttp://github.com/LeventErkok/conjugateGradient\u003c/a\u003e.\n Comments, bug reports, and patches are always welcome.)\n\u003c/p\u003e\u003cp\u003eSparse matrix linear-equation solver, using the conjugate gradient algorithm. Note that the technique only\n applies to matrices that are symmetric and positive definite. See \u003ca\u003ehttp://en.wikipedia.org/wiki/Conjugate_gradient_method\u003c/a\u003e\n for details.\n\u003c/p\u003e\u003cp\u003eThe conjugate gradient method can handle very large sparse matrices, where direct\n  methods (such as LU decomposition) are way too expensive to be useful in practice.\n  Such large sparse matrices arise naturally in many engineering problems, such as\n  in ASIC placement algorithms and when solving partial differential equations.\n\u003c/p\u003e\u003cp\u003eHere's an example usage, for the simple system:\n\u003c/p\u003e\u003cpre\u003e\n       4x +  y = 1\n        x + 3y = 2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.IntMap.Strict\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Random\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Math.ConjugateGradient\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet a = SM (2, fromList [(0, SV (fromList [(0, 4), (1, 1)])), (1, SV (fromList [(0, 1), (1, 3)]))]) :: SM Double\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet b = SV (fromList [(0, 1), (1, 2)]) :: SV Double\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet g = mkStdGen 12345\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = solveCG g a b\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ showSolution 4 a b x\n\u003c/code\u003e\u003c/strong\u003e      A       |   x    =   b   \n--------------+----------------\n4.0000 1.0000 | 0.0909 = 1.0000\n1.0000 3.0000 | 0.6364 = 2.0000\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Math.ConjugateGradient",
          "name": "ConjugateGradient",
          "package": "conjugateGradient",
          "source": "src/Math-ConjugateGradient.html",
          "type": "module"
        },
        "index": {
          "description": "The linear equation solver library is hosted at http github.com LeventErkok conjugateGradient Comments bug reports and patches are always welcome Sparse matrix linear-equation solver using the conjugate gradient algorithm Note that the technique only applies to matrices that are symmetric and positive definite See http en.wikipedia.org wiki Conjugate gradient method for details The conjugate gradient method can handle very large sparse matrices where direct methods such as LU decomposition are way too expensive to be useful in practice Such large sparse matrices arise naturally in many engineering problems such as in ASIC placement algorithms and when solving partial differential equations Here an example usage for the simple system import Data.IntMap.Strict import System.Random import Math.ConjugateGradient let SM fromList SV fromList SV fromList SM Double let SV fromList SV Double let mkStdGen let solveCG putStrLn showSolution",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "ConjugateGradient",
          "package": "conjugateGradient",
          "partial": "Conjugate Gradient",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sparse matrix is essentially an int-map containing sparse row-vectors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first element, \u003ccode\u003en\u003c/code\u003e, is the number of rows in the matrix, including those with all \u003ccode\u003e0\u003c/code\u003e elements.\n\u003c/li\u003e\u003cli\u003e The matrix is implicitly assumed to be \u003ccode\u003enxn\u003c/code\u003e, indexed by keys \u003ccode\u003e(0, 0)\u003c/code\u003e to \u003ccode\u003e(n-1, n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e When constructing a sparse-matrix, only put in rows that have a non-\u003ccode\u003e0\u003c/code\u003e element in them for efficiency.\n\u003c/li\u003e\u003cli\u003e Note that you have to give all the non-0 elements: Even though the matrix must be symmetric for the algorithm\n       to work, the matrix should contain all the non-\u003ccode\u003e0\u003c/code\u003e elements, not just the upper (or the lower)-triangle.\n\u003c/li\u003e\u003cli\u003e Make sure the keys of the int-map is a subset of \u003ccode\u003e[0 .. n-1]\u003c/code\u003e, both for the row-indices and the indices of the vectors representing the sparse-rows.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Math.ConjugateGradient",
          "name": "SM",
          "package": "conjugateGradient",
          "source": "src/Math-ConjugateGradient.html#SM",
          "type": "newtype"
        },
        "index": {
          "description": "sparse matrix is essentially an int-map containing sparse row-vectors The first element is the number of rows in the matrix including those with all elements The matrix is implicitly assumed to be nxn indexed by keys to n-1 n-1 When constructing sparse-matrix only put in rows that have non element in them for efficiency Note that you have to give all the non-0 elements Even though the matrix must be symmetric for the algorithm to work the matrix should contain all the non elements not just the upper or the lower triangle Make sure the keys of the int-map is subset of n-1 both for the row-indices and the indices of the vectors representing the sparse-rows",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "SM",
          "package": "conjugateGradient",
          "partial": "SM",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#t:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sparse vector containing elements of type \u003ccode\u003ea\u003c/code\u003e. Only the indices that contain non-\u003ccode\u003e0\u003c/code\u003e elements should be given\n for efficiency purposes. (Nothing will break if you put in elements that are \u003ccode\u003e0\u003c/code\u003e's, it's just not as efficient.)\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "SV",
          "package": "conjugateGradient",
          "source": "src/Math-ConjugateGradient.html#SV",
          "type": "newtype"
        },
        "index": {
          "description": "sparse vector containing elements of type Only the indices that contain non elements should be given for efficiency purposes Nothing will break if you put in elements that are it just not as efficient",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "SV",
          "package": "conjugateGradient",
          "partial": "SV",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#t:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.ConjugateGradient",
          "name": "SM",
          "package": "conjugateGradient",
          "signature": "SM (Int, IntMap (SV a))",
          "source": "src/Math-ConjugateGradient.html#SM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "SM",
          "normalized": "SM(Int,IntMap(SV a))",
          "package": "conjugateGradient",
          "partial": "SM",
          "signature": "SM(Int,IntMap(SV a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.ConjugateGradient",
          "name": "SV",
          "package": "conjugateGradient",
          "signature": "SV (IntMap a)",
          "source": "src/Math-ConjugateGradient.html#SV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "SV",
          "package": "conjugateGradient",
          "partial": "SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two sparse vectors.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "addSV",
          "package": "conjugateGradient",
          "signature": "SV a -\u003e SV a -\u003e SV a",
          "source": "src/Math-ConjugateGradient.html#addSV",
          "type": "function"
        },
        "index": {
          "description": "Add two sparse vectors",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "addSV",
          "normalized": "SV a-\u003eSV a-\u003eSV a",
          "package": "conjugateGradient",
          "partial": "SV",
          "signature": "SV a-\u003eSV a-\u003eSV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:addSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product of two sparse vectors.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "dotSV",
          "package": "conjugateGradient",
          "signature": "SV a -\u003e SV a -\u003e a",
          "source": "src/Math-ConjugateGradient.html#dotSV",
          "type": "function"
        },
        "index": {
          "description": "Dot product of two sparse vectors",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "dotSV",
          "normalized": "SV a-\u003eSV a-\u003ea",
          "package": "conjugateGradient",
          "partial": "SV",
          "signature": "SV a-\u003eSV a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:dotSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook-up a value in a sparse-matrix.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "lookupSM",
          "package": "conjugateGradient",
          "signature": "(Int, Int) -\u003e SM a -\u003e a",
          "source": "src/Math-ConjugateGradient.html#lookupSM",
          "type": "function"
        },
        "index": {
          "description": "Look-up value in sparse-matrix",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "lookupSM",
          "normalized": "(Int,Int)-\u003eSM a-\u003ea",
          "package": "conjugateGradient",
          "partial": "SM",
          "signature": "(Int,Int)-\u003eSM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:lookupSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook-up a value in a sparse-vector.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "lookupSV",
          "package": "conjugateGradient",
          "signature": "Int -\u003e SV a -\u003e a",
          "source": "src/Math-ConjugateGradient.html#lookupSV",
          "type": "function"
        },
        "index": {
          "description": "Look-up value in sparse-vector",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "lookupSV",
          "normalized": "Int-\u003eSV a-\u003ea",
          "package": "conjugateGradient",
          "partial": "SV",
          "signature": "Int-\u003eSV a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:lookupSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a sparse matrix (nxn) with a sparse vector (nx1), obtaining a sparse vector (nx1).\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "mulSMV",
          "package": "conjugateGradient",
          "signature": "SM a -\u003e SV a -\u003e SV a",
          "source": "src/Math-ConjugateGradient.html#mulSMV",
          "type": "function"
        },
        "index": {
          "description": "Multiply sparse matrix nxn with sparse vector nx1 obtaining sparse vector nx1",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "mulSMV",
          "normalized": "SM a-\u003eSV a-\u003eSV a",
          "package": "conjugateGradient",
          "partial": "SMV",
          "signature": "SM a-\u003eSV a-\u003eSV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:mulSMV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorm of a sparse vector. (Square-root of its dot-product with itself.)\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "normSV",
          "package": "conjugateGradient",
          "signature": "SV a -\u003e a",
          "source": "src/Math-ConjugateGradient.html#normSV",
          "type": "function"
        },
        "index": {
          "description": "Norm of sparse vector Square-root of its dot-product with itself",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "normSV",
          "normalized": "SV a-\u003ea",
          "package": "conjugateGradient",
          "partial": "SV",
          "signature": "SV a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:normSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a sparse-matrix by a scalar.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "sMulSM",
          "package": "conjugateGradient",
          "signature": "a -\u003e SM a -\u003e SM a",
          "source": "src/Math-ConjugateGradient.html#sMulSM",
          "type": "function"
        },
        "index": {
          "description": "Multiply sparse-matrix by scalar",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "sMulSM",
          "normalized": "a-\u003eSM a-\u003eSM a",
          "package": "conjugateGradient",
          "partial": "Mul SM",
          "signature": "a-\u003eSM a-\u003eSM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:sMulSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a sparse-vector by a scalar.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "sMulSV",
          "package": "conjugateGradient",
          "signature": "a -\u003e SV a -\u003e SV a",
          "source": "src/Math-ConjugateGradient.html#sMulSV",
          "type": "function"
        },
        "index": {
          "description": "Multiply sparse-vector by scalar",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "sMulSV",
          "normalized": "a-\u003eSV a-\u003eSV a",
          "package": "conjugateGradient",
          "partial": "Mul SV",
          "signature": "a-\u003eSV a-\u003eSV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:sMulSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a solution in a human-readable form. Needless to say, only use this\n method when the system is small enough to fit nicely on the screen.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "showSolution",
          "package": "conjugateGradient",
          "signature": "Int-\u003e SM a-\u003e SV a-\u003e SV a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Display solution in human-readable form Needless to say only use this method when the system is small enough to fit nicely on the screen",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "showSolution",
          "normalized": "Int-\u003eSM a-\u003eSV a-\u003eSV a-\u003eString",
          "package": "conjugateGradient",
          "partial": "Solution",
          "signature": "Int-\u003eSM a-\u003eSV a-\u003eSV a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:showSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjugate Gradient Solver for the system \u003ccode\u003eAx=b\u003c/code\u003e. See: \u003ca\u003ehttp://en.wikipedia.org/wiki/Conjugate_gradient_method\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNB. Assumptions on the input:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eA\u003c/code\u003e matrix is symmetric and positive definite.\n\u003c/li\u003e\u003cli\u003e All non-\u003ccode\u003e0\u003c/code\u003e rows are present. (Even if the input is assumed symmetric, all rows must be present.)\n\u003c/li\u003e\u003cli\u003e The indices start from \u003ccode\u003e0\u003c/code\u003e and go consecutively up-to \u003ccode\u003en-1\u003c/code\u003e. (Only non-\u003ccode\u003e0\u003c/code\u003e value/row\n      indices has to be present, of course.)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor efficiency reasons, we do not check that these properties hold of the input. (If these assumptions are\n violated, the algorithm will still produce a result, but not the one you expected!)\n\u003c/p\u003e\u003cp\u003eWe perform either \u003ccode\u003e10^6\u003c/code\u003e iterations of the Conjugate-Gradient algorithm, or until the error\n factor is less than \u003ccode\u003e1e-10\u003c/code\u003e. The error factor is defined as the difference of the norm of\n the current solution from the last one, as we go through the iterative solver. See\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Conjugate_gradient_method#Convergence_properties_of_the_conjugate_gradient_method\u003c/a\u003e\n for a discussion on the convergence properties of this algorithm.\n\u003c/p\u003e\u003cp\u003eThe solver can throw an error if it does not converge by \u003ccode\u003e10^6\u003c/code\u003e iterations. This is typically an indication\n that the input matrix is not well formed, i.e., not symmetric positive-definite.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "solveCG",
          "package": "conjugateGradient",
          "signature": "g-\u003e SM a-\u003e SV a-\u003e SV a",
          "type": "function"
        },
        "index": {
          "description": "Conjugate Gradient Solver for the system Ax See http en.wikipedia.org wiki Conjugate gradient method NB Assumptions on the input The matrix is symmetric and positive definite All non rows are present Even if the input is assumed symmetric all rows must be present The indices start from and go consecutively up-to n-1 Only non value row indices has to be present of course For efficiency reasons we do not check that these properties hold of the input If these assumptions are violated the algorithm will still produce result but not the one you expected We perform either iterations of the Conjugate-Gradient algorithm or until the error factor is less than e-10 The error factor is defined as the difference of the norm of the current solution from the last one as we go through the iterative solver See http en.wikipedia.org wiki Conjugate gradient method Convergence properties of the conjugate gradient method for discussion on the convergence properties of this algorithm The solver can throw an error if it does not converge by iterations This is typically an indication that the input matrix is not well formed i.e not symmetric positive-definite",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "solveCG",
          "normalized": "a-\u003eSM b-\u003eSV b-\u003eSV b",
          "package": "conjugateGradient",
          "partial": "CG",
          "signature": "g-\u003eSM a-\u003eSV a-\u003eSV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:solveCG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two sparse vectors.\n\u003c/p\u003e",
          "module": "Math.ConjugateGradient",
          "name": "subSV",
          "package": "conjugateGradient",
          "signature": "SV a -\u003e SV a -\u003e SV a",
          "source": "src/Math-ConjugateGradient.html#subSV",
          "type": "function"
        },
        "index": {
          "description": "Subtract two sparse vectors",
          "hierarchy": "Math ConjugateGradient",
          "module": "Math.ConjugateGradient",
          "name": "subSV",
          "normalized": "SV a-\u003eSV a-\u003eSV a",
          "package": "conjugateGradient",
          "partial": "SV",
          "signature": "SV a-\u003eSV a-\u003eSV a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/conjugateGradient/docs/Math-ConjugateGradient.html#v:subSV"
      }
    }
  ]
]