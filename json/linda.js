[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the simple functionality of multidimensional linear function calculation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Function",
        "fct-package": "linda",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Function.html",
        "fct-type": "module",
        "title": "Function"
      },
      "index": {
        "description": "This module implements the simple functionality of multidimensional linear function calculation",
        "hierarchy": "Numeric Function",
        "module": "Numeric.Function",
        "name": "Function",
        "normalized": "",
        "package": "linda",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#t:LinFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe function-type represents a function by its constants, e.g.\n\u003c/p\u003e\u003cpre\u003e [b0,b1,...,bn] \n\u003c/pre\u003e\u003cp\u003erepresents the function f = b0 + b1 * X1 + ... + bn * Xn\n\u003c/p\u003e",
        "fct-module": "Numeric.Function",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Function.html#LinFunction",
        "fct-type": "type",
        "title": "LinFunction"
      },
      "index": {
        "description": "The function-type represents function by its constants e.g b0 b1 bn represents the function b0 b1 X1 bn Xn",
        "hierarchy": "Numeric Function",
        "module": "Numeric.Function",
        "name": "LinFunction",
        "normalized": "",
        "package": "linda",
        "partial": "Lin Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#t:Values",
      "description": {
        "fct-descr": "\u003cp\u003eSimilare to the function-type, but die value-type represents the values of the variables in a function, e.g.\n\u003c/p\u003e\u003cpre\u003e [X1,...,Xn]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Function",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Function.html#Values",
        "fct-type": "type",
        "title": "Values"
      },
      "index": {
        "description": "Similare to the function-type but die value-type represents the values of the variables in function e.g X1 Xn",
        "hierarchy": "Numeric Function",
        "module": "Numeric.Function",
        "name": "Values",
        "normalized": "",
        "package": "linda",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#v:calcLinFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the result of a given function with given values, e.g.\n\u003c/p\u003e\u003cpre\u003e calcLinFunction [1,1,1] [1,2] == 1 + 1 * 1 + 1 * 2 == 4\n\u003c/pre\u003e\u003cpre\u003e calcLinFunction [1,2,3] [1,1] == 1 + 2 * 1 + 3 * 1 == 6\n\u003c/pre\u003e\u003cpre\u003e calcLinFunction [1,2,3] [1..] == 1 + 2 * 1 + 3 * 2 == 9\n\u003c/pre\u003e",
        "fct-module": "Numeric.Function",
        "fct-package": "linda",
        "fct-signature": "LinFunction a -\u003e Values a -\u003e a",
        "fct-source": "src/Numeric-Function.html#calcLinFunction",
        "fct-type": "function",
        "title": "calcLinFunction"
      },
      "index": {
        "description": "Calculates the result of given function with given values e.g calcLinFunction calcLinFunction calcLinFunction",
        "hierarchy": "Numeric Function",
        "module": "Numeric.Function",
        "name": "calcLinFunction",
        "normalized": "LinFunction a-\u003eValues a-\u003ea",
        "package": "linda",
        "partial": "Lin Function",
        "signature": "LinFunction a-\u003eValues a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes a few (standard) functions to work with matrixes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "This module includes few standard functions to work with matrixes",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "linda",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:Element",
      "description": {
        "fct-descr": "\u003cp\u003eSupported matrix elements.\n\u003c/p\u003e\u003cp\u003eThis class provides optimized internal\n    operations for selected element types.\n    It provides unoptimised defaults for any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e type,\n    so you can create instances simply as:\n    \u003ccode\u003einstance Element Foo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Element"
      },
      "index": {
        "description": "Supported matrix elements This class provides optimized internal operations for selected element types It provides unoptimised defaults for any Storable type so you can create instances simply as instance Element Foo",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "Element",
        "normalized": "",
        "package": "linda",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:Matrix",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix representation suitable for GSL and LAPACK computations.\n\u003c/p\u003e\u003cp\u003eThe elements are stored in a continuous memory array.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Matrix"
      },
      "index": {
        "description": "Matrix representation suitable for GSL and LAPACK computations The elements are stored in continuous memory array",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "linda",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:RawMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eA matrix represented by a list of lists.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Matrix.html#RawMatrix",
        "fct-type": "type",
        "title": "RawMatrix"
      },
      "index": {
        "description": "matrix represented by list of lists",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "RawMatrix",
        "normalized": "",
        "package": "linda",
        "partial": "Raw Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:-64--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eReads a matrix position.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e (Int, Int) -\u003e t",
        "fct-type": "function",
        "title": "(@@\u003e)"
      },
      "index": {
        "description": "Reads matrix position",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "(@@\u003e) @@\u003e",
        "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
        "package": "linda",
        "partial": "",
        "signature": "Matrix t-\u003e(Int,Int)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:asRow",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a 1-row matrix from a vector\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Vector a -\u003e Matrix a",
        "fct-type": "function",
        "title": "asRow"
      },
      "index": {
        "description": "creates row matrix from vector",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "asRow",
        "normalized": "Vector a-\u003eMatrix a",
        "package": "linda",
        "partial": "Row",
        "signature": "Vector a-\u003eMatrix a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:eigenvalue",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the eigenvalue of a matrix, e.g.\n\u003c/p\u003e\u003cpre\u003e eigenvalue (fromLists [[0.77143,-0.25714],[-0.42245,0.14082]]) \n\u003c/pre\u003e\u003cp\u003ereturns \n\u003c/p\u003e\u003cpre\u003e 0.9122456375784809 \n\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix Double -\u003e Double",
        "fct-source": "src/Numeric-Matrix.html#eigenvalue",
        "fct-type": "function",
        "title": "eigenvalue"
      },
      "index": {
        "description": "Calculates the eigenvalue of matrix e.g eigenvalue fromLists returns",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "eigenvalue",
        "normalized": "Matrix Double-\u003eDouble",
        "package": "linda",
        "partial": "",
        "signature": "Matrix Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:eigenvector",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates one eigenvector of a given matrix, e.g.\n\u003c/p\u003e\u003cpre\u003e eigenvector (fromLists [[-0.14081563757848092,-0.25714],[-0.42245,-0.7714256375784809]])\n\u003c/pre\u003e\u003cp\u003ereturns\n\u003c/p\u003e\u003cpre\u003e [0.8770950095147589,-0.48031692067249215]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix Double -\u003e Vector Double",
        "fct-source": "src/Numeric-Matrix.html#eigenvector",
        "fct-type": "function",
        "title": "eigenvector"
      },
      "index": {
        "description": "Calculates one eigenvector of given matrix e.g eigenvector fromLists returns",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "eigenvector",
        "normalized": "Matrix Double-\u003eVector Double",
        "package": "linda",
        "partial": "",
        "signature": "Matrix Double-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a vector by concatenation of rows\n\u003c/p\u003e\u003cpre\u003e\u003e flatten (\u003ccode\u003eident\u003c/code\u003e 3)\n9 |\u003e [1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0]\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e Vector t",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Creates vector by concatenation of rows flatten ident",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "flatten",
        "normalized": "Matrix a-\u003eVector a",
        "package": "linda",
        "partial": "",
        "signature": "Matrix t-\u003eVector t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:fromListToQuadraticMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds a quadratic matrix out of a list\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "[Double] -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#fromListToQuadraticMatrix",
        "fct-type": "function",
        "title": "fromListToQuadraticMatrix"
      },
      "index": {
        "description": "Builds quadratic matrix out of list",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "fromListToQuadraticMatrix",
        "normalized": "[Double]-\u003eMatrix Double",
        "package": "linda",
        "partial": "List To Quadratic Matrix",
        "signature": "[Double]-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:fromLists",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e from a list of lists (considered as rows).\n\u003c/p\u003e\u003cpre\u003e\u003e fromLists [[1,2],[3,4],[5,6]]\n(3\u003e\u003c2)\n [ 1.0, 2.0\n , 3.0, 4.0\n , 5.0, 6.0 ]\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "[[t]] -\u003e Matrix t",
        "fct-type": "function",
        "title": "fromLists"
      },
      "index": {
        "description": "Creates Matrix from list of lists considered as rows fromLists",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "fromLists",
        "normalized": "[[a]]-\u003eMatrix a",
        "package": "linda",
        "partial": "Lists",
        "signature": "[[t]]-\u003eMatrix t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:identityMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the identity matrix (n x n) by given scale (n)\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Int -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#identityMatrix",
        "fct-type": "function",
        "title": "identityMatrix"
      },
      "index": {
        "description": "Calculates the identity matrix by given scale",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "identityMatrix",
        "normalized": "Int-\u003eMatrix Double",
        "package": "linda",
        "partial": "Matrix",
        "signature": "Int-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:inv",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of a square matrix. See also \u003ccode\u003e\u003ca\u003einvlndet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e Matrix t",
        "fct-type": "function",
        "title": "inv"
      },
      "index": {
        "description": "Inverse of square matrix See also invlndet",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "inv",
        "normalized": "Matrix a-\u003eMatrix a",
        "package": "linda",
        "partial": "",
        "signature": "Matrix t-\u003eMatrix t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:mapMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eA simple map-Function which maps a given function on every element of the given matrix\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "(Double -\u003e Double) -\u003e Matrix Double -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#mapMatrix",
        "fct-type": "function",
        "title": "mapMatrix"
      },
      "index": {
        "description": "simple map-Function which maps given function on every element of the given matrix",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "mapMatrix",
        "normalized": "(Double-\u003eDouble)-\u003eMatrix Double-\u003eMatrix Double",
        "package": "linda",
        "partial": "Matrix",
        "signature": "(Double-\u003eDouble)-\u003eMatrix Double-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:reduceMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the reduced matrix of a given matrix (by reducing the given matrix), e.g.\n\u003c/p\u003e\u003cpre\u003e reduceMatrix (fromLists [[0.77143,-0.25714],[-0.42245,0.14082]])\n\u003c/pre\u003e\u003cp\u003ereturns\n\u003c/p\u003e\u003cpre\u003e (2\u003e\u003c2)[ -0.14081563757848092,-0.25714,-0.42245,-0.7714256375784809]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix Double -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#reduceMatrix",
        "fct-type": "function",
        "title": "reduceMatrix"
      },
      "index": {
        "description": "Calculates the reduced matrix of given matrix by reducing the given matrix e.g reduceMatrix fromLists returns",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "reduceMatrix",
        "normalized": "Matrix Double-\u003eMatrix Double",
        "package": "linda",
        "partial": "Matrix",
        "signature": "Matrix Double-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:scalarMultiplication",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the scalarproduct (with a scalar and matrix)\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Double -\u003e Matrix Double -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#scalarMultiplication",
        "fct-type": "function",
        "title": "scalarMultiplication"
      },
      "index": {
        "description": "Calculates the scalarproduct with scalar and matrix",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "scalarMultiplication",
        "normalized": "Double-\u003eMatrix Double-\u003eMatrix Double",
        "package": "linda",
        "partial": "Multiplication",
        "signature": "Double-\u003eMatrix Double-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:subtractMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the difference (matrix) between two matrixes\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix Double -\u003e Matrix Double -\u003e Matrix Double",
        "fct-source": "src/Numeric-Matrix.html#subtractMatrix",
        "fct-type": "function",
        "title": "subtractMatrix"
      },
      "index": {
        "description": "Calculates the difference matrix between two matrixes",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "subtractMatrix",
        "normalized": "Matrix Double-\u003eMatrix Double-\u003eMatrix Double",
        "package": "linda",
        "partial": "Matrix",
        "signature": "Matrix Double-\u003eMatrix Double-\u003eMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toColumns",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a list of vectors from the columns of a matrix\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e [Vector t]",
        "fct-type": "function",
        "title": "toColumns"
      },
      "index": {
        "description": "Creates list of vectors from the columns of matrix",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "toColumns",
        "normalized": "Matrix a-\u003e[Vector a]",
        "package": "linda",
        "partial": "Columns",
        "signature": "Matrix t-\u003e[Vector t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toLists",
      "description": {
        "fct-descr": "\u003cp\u003ethe inverse of \u003ccode\u003eData.Packed.Matrix.fromLists\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e [[t]]",
        "fct-type": "function",
        "title": "toLists"
      },
      "index": {
        "description": "the inverse of Data.Packed.Matrix.fromLists",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "toLists",
        "normalized": "Matrix a-\u003e[[a]]",
        "package": "linda",
        "partial": "Lists",
        "signature": "Matrix t-\u003e[[t]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toRows",
      "description": {
        "fct-descr": "\u003cp\u003eextracts the rows of a matrix as a list of vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e [Vector t]",
        "fct-type": "function",
        "title": "toRows"
      },
      "index": {
        "description": "extracts the rows of matrix as list of vectors",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "toRows",
        "normalized": "Matrix a-\u003e[Vector a]",
        "package": "linda",
        "partial": "Rows",
        "signature": "Matrix t-\u003e[Vector t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:trans",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix transpose.\n\u003c/p\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "Matrix t -\u003e Matrix t",
        "fct-type": "function",
        "title": "trans"
      },
      "index": {
        "description": "Matrix transpose",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "trans",
        "normalized": "Matrix a-\u003eMatrix a",
        "package": "linda",
        "partial": "",
        "signature": "Matrix t-\u003eMatrix t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:zipAllWith",
      "description": {
        "fct-descr": "\u003cp\u003eZipps a matrix col by col\n\u003c/p\u003e\u003cpre\u003e zipAllWith sum [[1,2,3],[1,2,3],[1,2,3]] == [3,6,9]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Matrix",
        "fct-package": "linda",
        "fct-signature": "(RawVector a -\u003e b) -\u003e RawMatrix a -\u003e RawVector b",
        "fct-source": "src/Numeric-Matrix.html#zipAllWith",
        "fct-type": "function",
        "title": "zipAllWith"
      },
      "index": {
        "description": "Zipps matrix col by col zipAllWith sum",
        "hierarchy": "Numeric Matrix",
        "module": "Numeric.Matrix",
        "name": "zipAllWith",
        "normalized": "(RawVector a-\u003eb)-\u003eRawMatrix a-\u003eRawVector b",
        "package": "linda",
        "partial": "All With",
        "signature": "(RawVector a-\u003eb)-\u003eRawMatrix a-\u003eRawVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a list of matrixes and a few functions to handle them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "module",
        "fct-source": "src/Numeric-MatrixList.html",
        "fct-type": "module",
        "title": "MatrixList"
      },
      "index": {
        "description": "This module implements list of matrixes and few functions to handle them",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "MatrixList",
        "normalized": "",
        "package": "linda",
        "partial": "Matrix List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#t:MatrixList",
      "description": {
        "fct-descr": "\u003cp\u003eA list of matrixes\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-MatrixList.html#MatrixList",
        "fct-type": "type",
        "title": "MatrixList"
      },
      "index": {
        "description": "list of matrixes",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "MatrixList",
        "normalized": "",
        "package": "linda",
        "partial": "Matrix List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#t:RawMatrixList",
      "description": {
        "fct-descr": "\u003cp\u003eA list of matrixes represented as a list of lists of lists\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-MatrixList.html#RawMatrixList",
        "fct-type": "type",
        "title": "RawMatrixList"
      },
      "index": {
        "description": "list of matrixes represented as list of lists of lists",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "RawMatrixList",
        "normalized": "",
        "package": "linda",
        "partial": "Raw Matrix List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:averages",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate every cols averages\n\u003c/p\u003e\u003cpre\u003e   averages [[[1,2],[2,1]],[[2,3],[3,4]]] == [[1.5,1.5],[2.5,3.5]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawMatrix Double",
        "fct-source": "src/Numeric-MatrixList.html#averages",
        "fct-type": "function",
        "title": "averages"
      },
      "index": {
        "description": "Calculate every cols averages averages",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "averages",
        "normalized": "RawMatrixList Double-\u003eRawMatrix Double",
        "package": "linda",
        "partial": "",
        "signature": "RawMatrixList Double-\u003eRawMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countAllRows",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the sum of all matrixes-rows\n\u003c/p\u003e\u003cpre\u003e countAllRows [[[1,2],[2,1]],[[2,3],[3,4],[1,1]]] == 5.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e Double",
        "fct-source": "src/Numeric-MatrixList.html#countAllRows",
        "fct-type": "function",
        "title": "countAllRows"
      },
      "index": {
        "description": "Counts the sum of all matrixes-rows countAllRows",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "countAllRows",
        "normalized": "RawMatrixList a-\u003eDouble",
        "package": "linda",
        "partial": "All Rows",
        "signature": "RawMatrixList a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixElements",
      "description": {
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e RawMatrix Double",
        "fct-source": "src/Numeric-MatrixList.html#countMatrixElements",
        "fct-type": "function",
        "title": "countMatrixElements"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "countMatrixElements",
        "normalized": "RawMatrixList a-\u003eRawMatrix Double",
        "package": "linda",
        "partial": "Matrix Elements",
        "signature": "RawMatrixList a-\u003eRawMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixes",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of matrixes in a list of matrixes\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e Double",
        "fct-source": "src/Numeric-MatrixList.html#countMatrixes",
        "fct-type": "function",
        "title": "countMatrixes"
      },
      "index": {
        "description": "Counts the number of matrixes in list of matrixes",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "countMatrixes",
        "normalized": "RawMatrixList a-\u003eDouble",
        "package": "linda",
        "partial": "Matrixes",
        "signature": "RawMatrixList a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixesCols",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of cols (based on the guess that all matrixes have the similare structure)\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e Double",
        "fct-source": "src/Numeric-MatrixList.html#countMatrixesCols",
        "fct-type": "function",
        "title": "countMatrixesCols"
      },
      "index": {
        "description": "Counts the number of cols based on the guess that all matrixes have the similare structure",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "countMatrixesCols",
        "normalized": "RawMatrixList a-\u003eDouble",
        "package": "linda",
        "partial": "Matrixes Cols",
        "signature": "RawMatrixList a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countRows",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the rows of every matrix in the list\n\u003c/p\u003e\u003cpre\u003e countRows [[[1,2],[2,1]],[[2,3],[3,4],[1,1]]] == [2.0,3.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e RawVector Double",
        "fct-source": "src/Numeric-MatrixList.html#countRows",
        "fct-type": "function",
        "title": "countRows"
      },
      "index": {
        "description": "Counts the rows of every matrix in the list countRows",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "countRows",
        "normalized": "RawMatrixList a-\u003eRawVector Double",
        "package": "linda",
        "partial": "Rows",
        "signature": "RawMatrixList a-\u003eRawVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:crossProduct",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the cross-product of every matrix-cols\n\u003c/p\u003e\u003cpre\u003e crossProduct  [[[1,2],[2,1]],[[2,3],[3,4]]] == [[2.0,2.0],[6.0,12.0]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawMatrix Double",
        "fct-source": "src/Numeric-MatrixList.html#crossProduct",
        "fct-type": "function",
        "title": "crossProduct"
      },
      "index": {
        "description": "Calculates the cross-product of every matrix-cols crossProduct",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "crossProduct",
        "normalized": "RawMatrixList Double-\u003eRawMatrix Double",
        "package": "linda",
        "partial": "Product",
        "signature": "RawMatrixList Double-\u003eRawMatrix Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:foldVectors",
      "description": {
        "fct-descr": "\u003cp\u003efolds every vector of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e foldVectors sum [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "([a] -\u003e b) -\u003e RawMatrixList a -\u003e RawMatrix b",
        "fct-source": "src/Numeric-MatrixList.html#foldVectors",
        "fct-type": "function",
        "title": "foldVectors"
      },
      "index": {
        "description": "folds every vector of list of matrixes foldVectors sum",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "foldVectors",
        "normalized": "([a]-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrix b",
        "package": "linda",
        "partial": "Vectors",
        "signature": "([a]-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrix b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:mapElements",
      "description": {
        "fct-descr": "\u003cp\u003emaps a function over every element of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e mapElements (1+) [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "(a -\u003e b) -\u003e RawMatrixList a -\u003e RawMatrixList b",
        "fct-source": "src/Numeric-MatrixList.html#mapElements",
        "fct-type": "function",
        "title": "mapElements"
      },
      "index": {
        "description": "maps function over every element of list of matrixes mapElements",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "mapElements",
        "normalized": "(a-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrixList b",
        "package": "linda",
        "partial": "Elements",
        "signature": "(a-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrixList b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:mapVectors",
      "description": {
        "fct-descr": "\u003cp\u003emaps a function over every vector of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e mapVectors (map (1+)) [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "([a] -\u003e [b]) -\u003e RawMatrixList a -\u003e RawMatrixList b",
        "fct-source": "src/Numeric-MatrixList.html#mapVectors",
        "fct-type": "function",
        "title": "mapVectors"
      },
      "index": {
        "description": "maps function over every vector of list of matrixes mapVectors map",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "mapVectors",
        "normalized": "([a]-\u003e[b])-\u003eRawMatrixList a-\u003eRawMatrixList b",
        "package": "linda",
        "partial": "Vectors",
        "signature": "([a]-\u003e[b])-\u003eRawMatrixList a-\u003eRawMatrixList b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:toLists",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a Matrixlist to a RawMatrixList.\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "MatrixList a -\u003e RawMatrixList a",
        "fct-source": "src/Numeric-MatrixList.html#toLists",
        "fct-type": "function",
        "title": "toLists"
      },
      "index": {
        "description": "Transforms Matrixlist to RawMatrixList",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "toLists",
        "normalized": "MatrixList a-\u003eRawMatrixList a",
        "package": "linda",
        "partial": "Lists",
        "signature": "MatrixList a-\u003eRawMatrixList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:transposeAll",
      "description": {
        "fct-descr": "\u003cp\u003eTransposes every matrix in a lit of matrixes\n\u003c/p\u003e",
        "fct-module": "Numeric.MatrixList",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList a -\u003e RawMatrixList a",
        "fct-source": "src/Numeric-MatrixList.html#transposeAll",
        "fct-type": "function",
        "title": "transposeAll"
      },
      "index": {
        "description": "Transposes every matrix in lit of matrixes",
        "hierarchy": "Numeric MatrixList",
        "module": "Numeric.MatrixList",
        "name": "transposeAll",
        "normalized": "RawMatrixList a-\u003eRawMatrixList a",
        "package": "linda",
        "partial": "All",
        "signature": "RawMatrixList a-\u003eRawMatrixList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements some linear discriminant analysis functions.\n Imagine you've made a poll and now you have values/attributes from every subscriber. \n Further more you've grouped the subscribers into clusters.\n The poll-datas are structured as follows: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e poll-data of one subscriber = [value] --\u003e Vector value\n\u003c/li\u003e\u003cli\u003e poll-data of one cluster/group of subscribers = [[values]] --\u003e Matrix values\n\u003c/li\u003e\u003cli\u003e poll-data of all clusters/groups = [[[values]]] --\u003e MatrixList values\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNow you want to check if you clustered right and/or how significant the values you asked for are...\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Statistics-LDA.html",
        "fct-type": "module",
        "title": "LDA"
      },
      "index": {
        "description": "This module implements some linear discriminant analysis functions Imagine you ve made poll and now you have values attributes from every subscriber Further more you ve grouped the subscribers into clusters The poll-datas are structured as follows poll-data of one subscriber value Vector value poll-data of one cluster group of subscribers values Matrix values poll-data of all clusters groups values MatrixList values Now you want to check if you clustered right and or how significant the values you asked for are",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "LDA",
        "normalized": "",
        "package": "linda",
        "partial": "LDA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:aprioriProbability",
      "description": {
        "fct-descr": "\u003cp\u003eCalculation of the a priori probability, more precisely the probability that an element belongs to a group.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawVector Double",
        "fct-source": "src/Numeric-Statistics-LDA.html#aprioriProbability",
        "fct-type": "function",
        "title": "aprioriProbability"
      },
      "index": {
        "description": "Calculation of the priori probability more precisely the probability that an element belongs to group",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "aprioriProbability",
        "normalized": "RawMatrixList Double-\u003eRawVector Double",
        "package": "linda",
        "partial": "Probability",
        "signature": "RawMatrixList Double-\u003eRawVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:discriminantCriteria",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the discriminant criteria.            \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawVector Double",
        "fct-source": "src/Numeric-Statistics-LDA.html#discriminantCriteria",
        "fct-type": "function",
        "title": "discriminantCriteria"
      },
      "index": {
        "description": "Calculates the discriminant criteria",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "discriminantCriteria",
        "normalized": "RawMatrixList Double-\u003eRawVector Double",
        "package": "linda",
        "partial": "Criteria",
        "signature": "RawMatrixList Double-\u003eRawVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisher",
      "description": {
        "fct-descr": "\u003cp\u003eCalculation of the classification of a survey (or attributes) in a cluster. The function takes a vector\u003cem\u003elist of attributes\u003c/em\u003evalues and a context. The context consists of groups\u003cem\u003eclusters and its items values\u003c/em\u003eattributes. The function returns the ID (starting with 0) of the cluster to which the given vector/list belongs to. This function uses the Fisher algorithm.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawVector Double -\u003e Int",
        "fct-source": "src/Numeric-Statistics-LDA.html#fisher",
        "fct-type": "function",
        "title": "fisher"
      },
      "index": {
        "description": "Calculation of the classification of survey or attributes in cluster The function takes vector list of attributes values and context The context consists of groups clusters and its items values attributes The function returns the ID starting with of the cluster to which the given vector list belongs to This function uses the Fisher algorithm",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "fisher",
        "normalized": "RawMatrixList Double-\u003eRawVector Double-\u003eInt",
        "package": "linda",
        "partial": "",
        "signature": "RawMatrixList Double-\u003eRawVector Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisher-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the ID (starting with 0) of the cluster the given list of attributes belongs to. The function takes a list of attributes and a list of clusters which are representated by there classification function. This function uses the Fisher algorithm.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawVector (LinFunction Double) -\u003e RawVector Double -\u003e Int",
        "fct-source": "src/Numeric-Statistics-LDA.html#fisher%27",
        "fct-type": "function",
        "title": "fisher'"
      },
      "index": {
        "description": "Calculates the ID starting with of the cluster the given list of attributes belongs to The function takes list of attributes and list of clusters which are representated by there classification function This function uses the Fisher algorithm",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "fisher'",
        "normalized": "RawVector(LinFunction Double)-\u003eRawVector Double-\u003eInt",
        "package": "linda",
        "partial": "",
        "signature": "RawVector(LinFunction Double)-\u003eRawVector Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherAll",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the cluster of every survey of a poll. This function takes the data of a whole poll and classifies every survey of the poll. This function uses the Fisher algorithm.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawMatrix Int",
        "fct-source": "src/Numeric-Statistics-LDA.html#fisherAll",
        "fct-type": "function",
        "title": "fisherAll"
      },
      "index": {
        "description": "Calculates the cluster of every survey of poll This function takes the data of whole poll and classifies every survey of the poll This function uses the Fisher algorithm",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "fisherAll",
        "normalized": "RawMatrixList Double-\u003eRawMatrix Int",
        "package": "linda",
        "partial": "All",
        "signature": "RawMatrixList Double-\u003eRawMatrix Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherClassificationFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the classification function according to Fisher.  \n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawVector (LinFunction Double)",
        "fct-source": "src/Numeric-Statistics-LDA.html#fisherClassificationFunction",
        "fct-type": "function",
        "title": "fisherClassificationFunction"
      },
      "index": {
        "description": "Calculates the classification function according to Fisher",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "fisherClassificationFunction",
        "normalized": "RawMatrixList Double-\u003eRawVector(LinFunction Double)",
        "package": "linda",
        "partial": "Classification Function",
        "signature": "RawMatrixList Double-\u003eRawVector(LinFunction Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherT",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the ID of the cluster the given values belonging to. This function takes a list of clusters, representated by a tuple, and a list of values. The cluster-tuples consists of a ID of the cluster and the classification function (according to Fisher) of the cluster. This function uses the Fisher algorithm.\n\u003c/p\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawVector (Int, LinFunction Double) -\u003e RawVector Double -\u003e Int",
        "fct-source": "src/Numeric-Statistics-LDA.html#fisherT",
        "fct-type": "function",
        "title": "fisherT"
      },
      "index": {
        "description": "Calculates the ID of the cluster the given values belonging to This function takes list of clusters representated by tuple and list of values The cluster-tuples consists of ID of the cluster and the classification function according to Fisher of the cluster This function uses the Fisher algorithm",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "fisherT",
        "normalized": "RawVector(Int,LinFunction Double)-\u003eRawVector Double-\u003eInt",
        "package": "linda",
        "partial": "",
        "signature": "RawVector(Int,LinFunction Double)-\u003eRawVector Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:isolatedDiscriminant",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the isolated discriminants of every attribute.\n\u003c/p\u003e\u003cpre\u003e isolatedDiscriminant [[[-1,1],[2,2]],[[1,3],[4,8]]] == [0.4444444444444444,1.2307692307692308]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Statistics.LDA",
        "fct-package": "linda",
        "fct-signature": "RawMatrixList Double -\u003e RawVector Double",
        "fct-source": "src/Numeric-Statistics-LDA.html#isolatedDiscriminant",
        "fct-type": "function",
        "title": "isolatedDiscriminant"
      },
      "index": {
        "description": "Calculates the isolated discriminants of every attribute isolatedDiscriminant",
        "hierarchy": "Numeric Statistics LDA",
        "module": "Numeric.Statistics.LDA",
        "name": "isolatedDiscriminant",
        "normalized": "RawMatrixList Double-\u003eRawVector Double",
        "package": "linda",
        "partial": "Discriminant",
        "signature": "RawMatrixList Double-\u003eRawVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a few extensions for the vector-module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "This module implements few extensions for the vector-module",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "linda",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#t:RawVector",
      "description": {
        "fct-descr": "\u003cp\u003eA Vector represented by a simple list.\n\u003c/p\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Vector.html#RawVector",
        "fct-type": "type",
        "title": "RawVector"
      },
      "index": {
        "description": "Vector represented by simple list",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "RawVector",
        "normalized": "",
        "package": "linda",
        "partial": "Raw Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e-based vectors\n\u003c/p\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Storable based vectors",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "linda",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:average",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the lists elements average\n\u003c/p\u003e\u003cpre\u003e average [1,3,2] == 2.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "RawVector a -\u003e a",
        "fct-source": "src/Numeric-Vector.html#average",
        "fct-type": "function",
        "title": "average"
      },
      "index": {
        "description": "Calculates the lists elements average average",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "average",
        "normalized": "RawVector a-\u003ea",
        "package": "linda",
        "partial": "",
        "signature": "RawVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the elements of a given list\n\u003c/p\u003e\u003cpre\u003e count [1,2,3,4,5] == 5\n\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "RawVector a -\u003e b",
        "fct-source": "src/Numeric-Vector.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Counts the elements of given list count",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "count",
        "normalized": "RawVector a-\u003eb",
        "package": "linda",
        "partial": "",
        "signature": "RawVector a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003ecreates a Vector from a list:\n\u003c/p\u003e\u003cpre\u003e\u003e fromList [2,3,5,7]\n4 |\u003e [2.0,3.0,5.0,7.0]\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "[a] -\u003e Vector a",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "creates Vector from list fromList",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "fromList",
        "normalized": "[a]-\u003eVector a",
        "package": "linda",
        "partial": "List",
        "signature": "[a]-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:maxPos",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the position of a lists maximum\n\u003c/p\u003e\u003cpre\u003e maxPos [1,10,8,3] == 1 \n\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "RawVector Double -\u003e Int",
        "fct-source": "src/Numeric-Vector.html#maxPos",
        "fct-type": "function",
        "title": "maxPos"
      },
      "index": {
        "description": "Calculates the position of lists maximum maxPos",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "maxPos",
        "normalized": "RawVector Double-\u003eInt",
        "package": "linda",
        "partial": "Pos",
        "signature": "RawVector Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:maximumBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
        "fct-type": "function",
        "title": "maximumBy"
      },
      "index": {
        "description": "The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "maximumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
        "package": "linda",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eextracts the Vector elements to a list\n\u003c/p\u003e\u003cpre\u003e\u003e toList (linspace 5 (1,10))\n[1.0,3.25,5.5,7.75,10.0]\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "Vector a -\u003e [a]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "extracts the Vector elements to list toList linspace",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "toList",
        "normalized": "Vector a-\u003e[a]",
        "package": "linda",
        "partial": "List",
        "signature": "Vector a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Vector",
        "fct-package": "linda",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "The transpose function transposes the rows and columns of its argument For example transpose",
        "hierarchy": "Numeric Vector",
        "module": "Numeric.Vector",
        "name": "transpose",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "linda",
        "partial": "",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  }
]