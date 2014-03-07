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
        "word": "linda"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the simple functionality of multidimensional linear function calculation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Function",
          "name": "Function",
          "package": "linda",
          "source": "src/Numeric-Function.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the simple functionality of multidimensional linear function calculation",
          "hierarchy": "Numeric Function",
          "module": "Numeric.Function",
          "name": "Function",
          "package": "linda",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function-type represents a function by its constants, e.g.\n\u003c/p\u003e\u003cpre\u003e [b0,b1,...,bn] \n\u003c/pre\u003e\u003cp\u003erepresents the function f = b0 + b1 * X1 + ... + bn * Xn\n\u003c/p\u003e",
          "module": "Numeric.Function",
          "name": "LinFunction",
          "package": "linda",
          "source": "src/Numeric-Function.html#LinFunction",
          "type": "type"
        },
        "index": {
          "description": "The function-type represents function by its constants e.g b0 b1 bn represents the function b0 b1 X1 bn Xn",
          "hierarchy": "Numeric Function",
          "module": "Numeric.Function",
          "name": "LinFunction",
          "package": "linda",
          "partial": "Lin Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#t:LinFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilare to the function-type, but die value-type represents the values of the variables in a function, e.g.\n\u003c/p\u003e\u003cpre\u003e [X1,...,Xn]\n\u003c/pre\u003e",
          "module": "Numeric.Function",
          "name": "Values",
          "package": "linda",
          "source": "src/Numeric-Function.html#Values",
          "type": "type"
        },
        "index": {
          "description": "Similare to the function-type but die value-type represents the values of the variables in function e.g X1 Xn",
          "hierarchy": "Numeric Function",
          "module": "Numeric.Function",
          "name": "Values",
          "package": "linda",
          "partial": "Values",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#t:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the result of a given function with given values, e.g.\n\u003c/p\u003e\u003cpre\u003e calcLinFunction [1,1,1] [1,2] == 1 + 1 * 1 + 1 * 2 == 4\n\u003c/pre\u003e\u003cpre\u003e calcLinFunction [1,2,3] [1,1] == 1 + 2 * 1 + 3 * 1 == 6\n\u003c/pre\u003e\u003cpre\u003e calcLinFunction [1,2,3] [1..] == 1 + 2 * 1 + 3 * 2 == 9\n\u003c/pre\u003e",
          "module": "Numeric.Function",
          "name": "calcLinFunction",
          "package": "linda",
          "signature": "LinFunction a -\u003e Values a -\u003e a",
          "source": "src/Numeric-Function.html#calcLinFunction",
          "type": "function"
        },
        "index": {
          "description": "Calculates the result of given function with given values e.g calcLinFunction calcLinFunction calcLinFunction",
          "hierarchy": "Numeric Function",
          "module": "Numeric.Function",
          "name": "calcLinFunction",
          "normalized": "LinFunction a-\u003eValues a-\u003ea",
          "package": "linda",
          "partial": "Lin Function",
          "signature": "LinFunction a-\u003eValues a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Function.html#v:calcLinFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes a few (standard) functions to work with matrixes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "linda",
          "source": "src/Numeric-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "This module includes few standard functions to work with matrixes",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "linda",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported matrix elements.\n\u003c/p\u003e\u003cp\u003eThis class provides optimized internal\n    operations for selected element types.\n    It provides unoptimised defaults for any \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e type,\n    so you can create instances simply as:\n    \u003ccode\u003einstance Element Foo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "Element",
          "package": "linda",
          "type": "class"
        },
        "index": {
          "description": "Supported matrix elements This class provides optimized internal operations for selected element types It provides unoptimised defaults for any Storable type so you can create instances simply as instance Element Foo",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "Element",
          "package": "linda",
          "partial": "Element",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix representation suitable for GSL and LAPACK computations.\n\u003c/p\u003e\u003cp\u003eThe elements are stored in a continuous memory array.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "linda",
          "type": "data"
        },
        "index": {
          "description": "Matrix representation suitable for GSL and LAPACK computations The elements are stored in continuous memory array",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "linda",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA matrix represented by a list of lists.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "RawMatrix",
          "package": "linda",
          "source": "src/Numeric-Matrix.html#RawMatrix",
          "type": "type"
        },
        "index": {
          "description": "matrix represented by list of lists",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "RawMatrix",
          "package": "linda",
          "partial": "Raw Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#t:RawMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a matrix position.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "(@@\u003e)",
          "package": "linda",
          "signature": "Matrix t -\u003e (Int, Int) -\u003e t",
          "type": "function"
        },
        "index": {
          "description": "Reads matrix position",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "(@@\u003e) @@\u003e",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
          "package": "linda",
          "signature": "Matrix t-\u003e(Int,Int)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:-64--64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a 1-row matrix from a vector\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "asRow",
          "package": "linda",
          "signature": "Vector a -\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "creates row matrix from vector",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "asRow",
          "normalized": "Vector a-\u003eMatrix a",
          "package": "linda",
          "partial": "Row",
          "signature": "Vector a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:asRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the eigenvalue of a matrix, e.g.\n\u003c/p\u003e\u003cpre\u003e eigenvalue (fromLists [[0.77143,-0.25714],[-0.42245,0.14082]]) \n\u003c/pre\u003e\u003cp\u003ereturns \n\u003c/p\u003e\u003cpre\u003e 0.9122456375784809 \n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "eigenvalue",
          "package": "linda",
          "signature": "Matrix Double -\u003e Double",
          "source": "src/Numeric-Matrix.html#eigenvalue",
          "type": "function"
        },
        "index": {
          "description": "Calculates the eigenvalue of matrix e.g eigenvalue fromLists returns",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "eigenvalue",
          "normalized": "Matrix Double-\u003eDouble",
          "package": "linda",
          "signature": "Matrix Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:eigenvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates one eigenvector of a given matrix, e.g.\n\u003c/p\u003e\u003cpre\u003e eigenvector (fromLists [[-0.14081563757848092,-0.25714],[-0.42245,-0.7714256375784809]])\n\u003c/pre\u003e\u003cp\u003ereturns\n\u003c/p\u003e\u003cpre\u003e [0.8770950095147589,-0.48031692067249215]\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "eigenvector",
          "package": "linda",
          "signature": "Matrix Double -\u003e Vector Double",
          "source": "src/Numeric-Matrix.html#eigenvector",
          "type": "function"
        },
        "index": {
          "description": "Calculates one eigenvector of given matrix e.g eigenvector fromLists returns",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "eigenvector",
          "normalized": "Matrix Double-\u003eVector Double",
          "package": "linda",
          "signature": "Matrix Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:eigenvector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a vector by concatenation of rows\n\u003c/p\u003e\u003cpre\u003e\u003e flatten (\u003ccode\u003eident\u003c/code\u003e 3)\n9 |\u003e [1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0]\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "flatten",
          "package": "linda",
          "signature": "Matrix t -\u003e Vector t",
          "type": "function"
        },
        "index": {
          "description": "Creates vector by concatenation of rows flatten ident",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "flatten",
          "normalized": "Matrix a-\u003eVector a",
          "package": "linda",
          "signature": "Matrix t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a quadratic matrix out of a list\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "fromListToQuadraticMatrix",
          "package": "linda",
          "signature": "[Double] -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#fromListToQuadraticMatrix",
          "type": "function"
        },
        "index": {
          "description": "Builds quadratic matrix out of list",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "fromListToQuadraticMatrix",
          "normalized": "[Double]-\u003eMatrix Double",
          "package": "linda",
          "partial": "List To Quadratic Matrix",
          "signature": "[Double]-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:fromListToQuadraticMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e from a list of lists (considered as rows).\n\u003c/p\u003e\u003cpre\u003e\u003e fromLists [[1,2],[3,4],[5,6]]\n(3\u003e\u003c2)\n [ 1.0, 2.0\n , 3.0, 4.0\n , 5.0, 6.0 ]\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "fromLists",
          "package": "linda",
          "signature": "[[t]] -\u003e Matrix t",
          "type": "function"
        },
        "index": {
          "description": "Creates Matrix from list of lists considered as rows fromLists",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "fromLists",
          "normalized": "[[a]]-\u003eMatrix a",
          "package": "linda",
          "partial": "Lists",
          "signature": "[[t]]-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:fromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the identity matrix (n x n) by given scale (n)\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "identityMatrix",
          "package": "linda",
          "signature": "Int -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#identityMatrix",
          "type": "function"
        },
        "index": {
          "description": "Calculates the identity matrix by given scale",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "identityMatrix",
          "normalized": "Int-\u003eMatrix Double",
          "package": "linda",
          "partial": "Matrix",
          "signature": "Int-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:identityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of a square matrix. See also \u003ccode\u003e\u003ca\u003einvlndet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "inv",
          "package": "linda",
          "signature": "Matrix t -\u003e Matrix t",
          "type": "function"
        },
        "index": {
          "description": "Inverse of square matrix See also invlndet",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "inv",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "linda",
          "signature": "Matrix t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple map-Function which maps a given function on every element of the given matrix\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "mapMatrix",
          "package": "linda",
          "signature": "(Double -\u003e Double) -\u003e Matrix Double -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#mapMatrix",
          "type": "function"
        },
        "index": {
          "description": "simple map-Function which maps given function on every element of the given matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "mapMatrix",
          "normalized": "(Double-\u003eDouble)-\u003eMatrix Double-\u003eMatrix Double",
          "package": "linda",
          "partial": "Matrix",
          "signature": "(Double-\u003eDouble)-\u003eMatrix Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:mapMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the reduced matrix of a given matrix (by reducing the given matrix), e.g.\n\u003c/p\u003e\u003cpre\u003e reduceMatrix (fromLists [[0.77143,-0.25714],[-0.42245,0.14082]])\n\u003c/pre\u003e\u003cp\u003ereturns\n\u003c/p\u003e\u003cpre\u003e (2\u003e\u003c2)[ -0.14081563757848092,-0.25714,-0.42245,-0.7714256375784809]\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "reduceMatrix",
          "package": "linda",
          "signature": "Matrix Double -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#reduceMatrix",
          "type": "function"
        },
        "index": {
          "description": "Calculates the reduced matrix of given matrix by reducing the given matrix e.g reduceMatrix fromLists returns",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "reduceMatrix",
          "normalized": "Matrix Double-\u003eMatrix Double",
          "package": "linda",
          "partial": "Matrix",
          "signature": "Matrix Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:reduceMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the scalarproduct (with a scalar and matrix)\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "scalarMultiplication",
          "package": "linda",
          "signature": "Double -\u003e Matrix Double -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#scalarMultiplication",
          "type": "function"
        },
        "index": {
          "description": "Calculates the scalarproduct with scalar and matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "scalarMultiplication",
          "normalized": "Double-\u003eMatrix Double-\u003eMatrix Double",
          "package": "linda",
          "partial": "Multiplication",
          "signature": "Double-\u003eMatrix Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:scalarMultiplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the difference (matrix) between two matrixes\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "subtractMatrix",
          "package": "linda",
          "signature": "Matrix Double -\u003e Matrix Double -\u003e Matrix Double",
          "source": "src/Numeric-Matrix.html#subtractMatrix",
          "type": "function"
        },
        "index": {
          "description": "Calculates the difference matrix between two matrixes",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "subtractMatrix",
          "normalized": "Matrix Double-\u003eMatrix Double-\u003eMatrix Double",
          "package": "linda",
          "partial": "Matrix",
          "signature": "Matrix Double-\u003eMatrix Double-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:subtractMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list of vectors from the columns of a matrix\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "toColumns",
          "package": "linda",
          "signature": "Matrix t -\u003e [Vector t]",
          "type": "function"
        },
        "index": {
          "description": "Creates list of vectors from the columns of matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "toColumns",
          "normalized": "Matrix a-\u003e[Vector a]",
          "package": "linda",
          "partial": "Columns",
          "signature": "Matrix t-\u003e[Vector t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe inverse of \u003ccode\u003eData.Packed.Matrix.fromLists\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "toLists",
          "package": "linda",
          "signature": "Matrix t -\u003e [[t]]",
          "type": "function"
        },
        "index": {
          "description": "the inverse of Data.Packed.Matrix.fromLists",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "toLists",
          "normalized": "Matrix a-\u003e[[a]]",
          "package": "linda",
          "partial": "Lists",
          "signature": "Matrix t-\u003e[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracts the rows of a matrix as a list of vectors\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "toRows",
          "package": "linda",
          "signature": "Matrix t -\u003e [Vector t]",
          "type": "function"
        },
        "index": {
          "description": "extracts the rows of matrix as list of vectors",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "toRows",
          "normalized": "Matrix a-\u003e[Vector a]",
          "package": "linda",
          "partial": "Rows",
          "signature": "Matrix t-\u003e[Vector t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:toRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix transpose.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "trans",
          "package": "linda",
          "signature": "Matrix t -\u003e Matrix t",
          "type": "function"
        },
        "index": {
          "description": "Matrix transpose",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "trans",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "linda",
          "signature": "Matrix t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipps a matrix col by col\n\u003c/p\u003e\u003cpre\u003e zipAllWith sum [[1,2,3],[1,2,3],[1,2,3]] == [3,6,9]\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "zipAllWith",
          "package": "linda",
          "signature": "(RawVector a -\u003e b) -\u003e RawMatrix a -\u003e RawVector b",
          "source": "src/Numeric-Matrix.html#zipAllWith",
          "type": "function"
        },
        "index": {
          "description": "Zipps matrix col by col zipAllWith sum",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "zipAllWith",
          "normalized": "(RawVector a-\u003eb)-\u003eRawMatrix a-\u003eRawVector b",
          "package": "linda",
          "partial": "All With",
          "signature": "(RawVector a-\u003eb)-\u003eRawMatrix a-\u003eRawVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Matrix.html#v:zipAllWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a list of matrixes and a few functions to handle them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.MatrixList",
          "name": "MatrixList",
          "package": "linda",
          "source": "src/Numeric-MatrixList.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements list of matrixes and few functions to handle them",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "MatrixList",
          "package": "linda",
          "partial": "Matrix List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of matrixes\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "MatrixList",
          "package": "linda",
          "source": "src/Numeric-MatrixList.html#MatrixList",
          "type": "type"
        },
        "index": {
          "description": "list of matrixes",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "MatrixList",
          "package": "linda",
          "partial": "Matrix List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#t:MatrixList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of matrixes represented as a list of lists of lists\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "RawMatrixList",
          "package": "linda",
          "source": "src/Numeric-MatrixList.html#RawMatrixList",
          "type": "type"
        },
        "index": {
          "description": "list of matrixes represented as list of lists of lists",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "RawMatrixList",
          "package": "linda",
          "partial": "Raw Matrix List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#t:RawMatrixList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate every cols averages\n\u003c/p\u003e\u003cpre\u003e   averages [[[1,2],[2,1]],[[2,3],[3,4]]] == [[1.5,1.5],[2.5,3.5]]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "averages",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawMatrix Double",
          "source": "src/Numeric-MatrixList.html#averages",
          "type": "function"
        },
        "index": {
          "description": "Calculate every cols averages averages",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "averages",
          "normalized": "RawMatrixList Double-\u003eRawMatrix Double",
          "package": "linda",
          "signature": "RawMatrixList Double-\u003eRawMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:averages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the sum of all matrixes-rows\n\u003c/p\u003e\u003cpre\u003e countAllRows [[[1,2],[2,1]],[[2,3],[3,4],[1,1]]] == 5.0\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "countAllRows",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e Double",
          "source": "src/Numeric-MatrixList.html#countAllRows",
          "type": "function"
        },
        "index": {
          "description": "Counts the sum of all matrixes-rows countAllRows",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "countAllRows",
          "normalized": "RawMatrixList a-\u003eDouble",
          "package": "linda",
          "partial": "All Rows",
          "signature": "RawMatrixList a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countAllRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.MatrixList",
          "name": "countMatrixElements",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e RawMatrix Double",
          "source": "src/Numeric-MatrixList.html#countMatrixElements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "countMatrixElements",
          "normalized": "RawMatrixList a-\u003eRawMatrix Double",
          "package": "linda",
          "partial": "Matrix Elements",
          "signature": "RawMatrixList a-\u003eRawMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of matrixes in a list of matrixes\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "countMatrixes",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e Double",
          "source": "src/Numeric-MatrixList.html#countMatrixes",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of matrixes in list of matrixes",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "countMatrixes",
          "normalized": "RawMatrixList a-\u003eDouble",
          "package": "linda",
          "partial": "Matrixes",
          "signature": "RawMatrixList a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of cols (based on the guess that all matrixes have the similare structure)\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "countMatrixesCols",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e Double",
          "source": "src/Numeric-MatrixList.html#countMatrixesCols",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of cols based on the guess that all matrixes have the similare structure",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "countMatrixesCols",
          "normalized": "RawMatrixList a-\u003eDouble",
          "package": "linda",
          "partial": "Matrixes Cols",
          "signature": "RawMatrixList a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countMatrixesCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the rows of every matrix in the list\n\u003c/p\u003e\u003cpre\u003e countRows [[[1,2],[2,1]],[[2,3],[3,4],[1,1]]] == [2.0,3.0]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "countRows",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e RawVector Double",
          "source": "src/Numeric-MatrixList.html#countRows",
          "type": "function"
        },
        "index": {
          "description": "Counts the rows of every matrix in the list countRows",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "countRows",
          "normalized": "RawMatrixList a-\u003eRawVector Double",
          "package": "linda",
          "partial": "Rows",
          "signature": "RawMatrixList a-\u003eRawVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:countRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the cross-product of every matrix-cols\n\u003c/p\u003e\u003cpre\u003e crossProduct  [[[1,2],[2,1]],[[2,3],[3,4]]] == [[2.0,2.0],[6.0,12.0]]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "crossProduct",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawMatrix Double",
          "source": "src/Numeric-MatrixList.html#crossProduct",
          "type": "function"
        },
        "index": {
          "description": "Calculates the cross-product of every matrix-cols crossProduct",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "crossProduct",
          "normalized": "RawMatrixList Double-\u003eRawMatrix Double",
          "package": "linda",
          "partial": "Product",
          "signature": "RawMatrixList Double-\u003eRawMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:crossProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efolds every vector of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e foldVectors sum [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "foldVectors",
          "package": "linda",
          "signature": "([a] -\u003e b) -\u003e RawMatrixList a -\u003e RawMatrix b",
          "source": "src/Numeric-MatrixList.html#foldVectors",
          "type": "function"
        },
        "index": {
          "description": "folds every vector of list of matrixes foldVectors sum",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "foldVectors",
          "normalized": "([a]-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrix b",
          "package": "linda",
          "partial": "Vectors",
          "signature": "([a]-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrix b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:foldVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps a function over every element of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e mapElements (1+) [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "mapElements",
          "package": "linda",
          "signature": "(a -\u003e b) -\u003e RawMatrixList a -\u003e RawMatrixList b",
          "source": "src/Numeric-MatrixList.html#mapElements",
          "type": "function"
        },
        "index": {
          "description": "maps function over every element of list of matrixes mapElements",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "mapElements",
          "normalized": "(a-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrixList b",
          "package": "linda",
          "partial": "Elements",
          "signature": "(a-\u003eb)-\u003eRawMatrixList a-\u003eRawMatrixList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:mapElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps a function over every vector of a list of matrixes\n\u003c/p\u003e\u003cpre\u003e mapVectors (map (1+)) [[[1,2],[2,1]],[[2,3],[3,4]]] == [[[2.0,3.0],[3.0,2.0]],[[3.0,4.0],[4.0,5.0]]]\n\u003c/pre\u003e",
          "module": "Numeric.MatrixList",
          "name": "mapVectors",
          "package": "linda",
          "signature": "([a] -\u003e [b]) -\u003e RawMatrixList a -\u003e RawMatrixList b",
          "source": "src/Numeric-MatrixList.html#mapVectors",
          "type": "function"
        },
        "index": {
          "description": "maps function over every vector of list of matrixes mapVectors map",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "mapVectors",
          "normalized": "([a]-\u003e[b])-\u003eRawMatrixList a-\u003eRawMatrixList b",
          "package": "linda",
          "partial": "Vectors",
          "signature": "([a]-\u003e[b])-\u003eRawMatrixList a-\u003eRawMatrixList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:mapVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a Matrixlist to a RawMatrixList.\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "toLists",
          "package": "linda",
          "signature": "MatrixList a -\u003e RawMatrixList a",
          "source": "src/Numeric-MatrixList.html#toLists",
          "type": "function"
        },
        "index": {
          "description": "Transforms Matrixlist to RawMatrixList",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "toLists",
          "normalized": "MatrixList a-\u003eRawMatrixList a",
          "package": "linda",
          "partial": "Lists",
          "signature": "MatrixList a-\u003eRawMatrixList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:toLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes every matrix in a lit of matrixes\n\u003c/p\u003e",
          "module": "Numeric.MatrixList",
          "name": "transposeAll",
          "package": "linda",
          "signature": "RawMatrixList a -\u003e RawMatrixList a",
          "source": "src/Numeric-MatrixList.html#transposeAll",
          "type": "function"
        },
        "index": {
          "description": "Transposes every matrix in lit of matrixes",
          "hierarchy": "Numeric MatrixList",
          "module": "Numeric.MatrixList",
          "name": "transposeAll",
          "normalized": "RawMatrixList a-\u003eRawMatrixList a",
          "package": "linda",
          "partial": "All",
          "signature": "RawMatrixList a-\u003eRawMatrixList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-MatrixList.html#v:transposeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements some linear discriminant analysis functions.\n Imagine you've made a poll and now you have values/attributes from every subscriber. \n Further more you've grouped the subscribers into clusters.\n The poll-datas are structured as follows: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e poll-data of one subscriber = [value] --\u003e Vector value\n\u003c/li\u003e\u003cli\u003e poll-data of one cluster/group of subscribers = [[values]] --\u003e Matrix values\n\u003c/li\u003e\u003cli\u003e poll-data of all clusters/groups = [[[values]]] --\u003e MatrixList values\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNow you want to check if you clustered right and/or how significant the values you asked for are...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "LDA",
          "package": "linda",
          "source": "src/Numeric-Statistics-LDA.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements some linear discriminant analysis functions Imagine you ve made poll and now you have values attributes from every subscriber Further more you ve grouped the subscribers into clusters The poll-datas are structured as follows poll-data of one subscriber value Vector value poll-data of one cluster group of subscribers values Matrix values poll-data of all clusters groups values MatrixList values Now you want to check if you clustered right and or how significant the values you asked for are",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "LDA",
          "package": "linda",
          "partial": "LDA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculation of the a priori probability, more precisely the probability that an element belongs to a group.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "aprioriProbability",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawVector Double",
          "source": "src/Numeric-Statistics-LDA.html#aprioriProbability",
          "type": "function"
        },
        "index": {
          "description": "Calculation of the priori probability more precisely the probability that an element belongs to group",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "aprioriProbability",
          "normalized": "RawMatrixList Double-\u003eRawVector Double",
          "package": "linda",
          "partial": "Probability",
          "signature": "RawMatrixList Double-\u003eRawVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:aprioriProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the discriminant criteria.            \n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "discriminantCriteria",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawVector Double",
          "source": "src/Numeric-Statistics-LDA.html#discriminantCriteria",
          "type": "function"
        },
        "index": {
          "description": "Calculates the discriminant criteria",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "discriminantCriteria",
          "normalized": "RawMatrixList Double-\u003eRawVector Double",
          "package": "linda",
          "partial": "Criteria",
          "signature": "RawMatrixList Double-\u003eRawVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:discriminantCriteria"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculation of the classification of a survey (or attributes) in a cluster. The function takes a vector\u003cem\u003elist of attributes\u003c/em\u003evalues and a context. The context consists of groups\u003cem\u003eclusters and its items values\u003c/em\u003eattributes. The function returns the ID (starting with 0) of the cluster to which the given vector/list belongs to. This function uses the Fisher algorithm.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "fisher",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawVector Double -\u003e Int",
          "source": "src/Numeric-Statistics-LDA.html#fisher",
          "type": "function"
        },
        "index": {
          "description": "Calculation of the classification of survey or attributes in cluster The function takes vector list of attributes values and context The context consists of groups clusters and its items values attributes The function returns the ID starting with of the cluster to which the given vector list belongs to This function uses the Fisher algorithm",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "fisher",
          "normalized": "RawMatrixList Double-\u003eRawVector Double-\u003eInt",
          "package": "linda",
          "signature": "RawMatrixList Double-\u003eRawVector Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the ID (starting with 0) of the cluster the given list of attributes belongs to. The function takes a list of attributes and a list of clusters which are representated by there classification function. This function uses the Fisher algorithm.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "fisher'",
          "package": "linda",
          "signature": "RawVector (LinFunction Double) -\u003e RawVector Double -\u003e Int",
          "source": "src/Numeric-Statistics-LDA.html#fisher%27",
          "type": "function"
        },
        "index": {
          "description": "Calculates the ID starting with of the cluster the given list of attributes belongs to The function takes list of attributes and list of clusters which are representated by there classification function This function uses the Fisher algorithm",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "fisher'",
          "normalized": "RawVector(LinFunction Double)-\u003eRawVector Double-\u003eInt",
          "package": "linda",
          "signature": "RawVector(LinFunction Double)-\u003eRawVector Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisher-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the cluster of every survey of a poll. This function takes the data of a whole poll and classifies every survey of the poll. This function uses the Fisher algorithm.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherAll",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawMatrix Int",
          "source": "src/Numeric-Statistics-LDA.html#fisherAll",
          "type": "function"
        },
        "index": {
          "description": "Calculates the cluster of every survey of poll This function takes the data of whole poll and classifies every survey of the poll This function uses the Fisher algorithm",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherAll",
          "normalized": "RawMatrixList Double-\u003eRawMatrix Int",
          "package": "linda",
          "partial": "All",
          "signature": "RawMatrixList Double-\u003eRawMatrix Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the classification function according to Fisher.  \n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherClassificationFunction",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawVector (LinFunction Double)",
          "source": "src/Numeric-Statistics-LDA.html#fisherClassificationFunction",
          "type": "function"
        },
        "index": {
          "description": "Calculates the classification function according to Fisher",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherClassificationFunction",
          "normalized": "RawMatrixList Double-\u003eRawVector(LinFunction Double)",
          "package": "linda",
          "partial": "Classification Function",
          "signature": "RawMatrixList Double-\u003eRawVector(LinFunction Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherClassificationFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the ID of the cluster the given values belonging to. This function takes a list of clusters, representated by a tuple, and a list of values. The cluster-tuples consists of a ID of the cluster and the classification function (according to Fisher) of the cluster. This function uses the Fisher algorithm.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherT",
          "package": "linda",
          "signature": "RawVector (Int, LinFunction Double) -\u003e RawVector Double -\u003e Int",
          "source": "src/Numeric-Statistics-LDA.html#fisherT",
          "type": "function"
        },
        "index": {
          "description": "Calculates the ID of the cluster the given values belonging to This function takes list of clusters representated by tuple and list of values The cluster-tuples consists of ID of the cluster and the classification function according to Fisher of the cluster This function uses the Fisher algorithm",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "fisherT",
          "normalized": "RawVector(Int,LinFunction Double)-\u003eRawVector Double-\u003eInt",
          "package": "linda",
          "signature": "RawVector(Int,LinFunction Double)-\u003eRawVector Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:fisherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the isolated discriminants of every attribute.\n\u003c/p\u003e\u003cpre\u003e isolatedDiscriminant [[[-1,1],[2,2]],[[1,3],[4,8]]] == [0.4444444444444444,1.2307692307692308]\n\u003c/pre\u003e",
          "module": "Numeric.Statistics.LDA",
          "name": "isolatedDiscriminant",
          "package": "linda",
          "signature": "RawMatrixList Double -\u003e RawVector Double",
          "source": "src/Numeric-Statistics-LDA.html#isolatedDiscriminant",
          "type": "function"
        },
        "index": {
          "description": "Calculates the isolated discriminants of every attribute isolatedDiscriminant",
          "hierarchy": "Numeric Statistics LDA",
          "module": "Numeric.Statistics.LDA",
          "name": "isolatedDiscriminant",
          "normalized": "RawMatrixList Double-\u003eRawVector Double",
          "package": "linda",
          "partial": "Discriminant",
          "signature": "RawMatrixList Double-\u003eRawVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Statistics-LDA.html#v:isolatedDiscriminant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a few extensions for the vector-module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Vector",
          "name": "Vector",
          "package": "linda",
          "source": "src/Numeric-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements few extensions for the vector-module",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "Vector",
          "package": "linda",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Vector represented by a simple list.\n\u003c/p\u003e",
          "module": "Numeric.Vector",
          "name": "RawVector",
          "package": "linda",
          "source": "src/Numeric-Vector.html#RawVector",
          "type": "type"
        },
        "index": {
          "description": "Vector represented by simple list",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "RawVector",
          "package": "linda",
          "partial": "Raw Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#t:RawVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e-based vectors\n\u003c/p\u003e",
          "module": "Numeric.Vector",
          "name": "Vector",
          "package": "linda",
          "type": "data"
        },
        "index": {
          "description": "Storable based vectors",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "Vector",
          "package": "linda",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the lists elements average\n\u003c/p\u003e\u003cpre\u003e average [1,3,2] == 2.0\n\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "average",
          "package": "linda",
          "signature": "RawVector a -\u003e a",
          "source": "src/Numeric-Vector.html#average",
          "type": "function"
        },
        "index": {
          "description": "Calculates the lists elements average average",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "average",
          "normalized": "RawVector a-\u003ea",
          "package": "linda",
          "signature": "RawVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the elements of a given list\n\u003c/p\u003e\u003cpre\u003e count [1,2,3,4,5] == 5\n\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "count",
          "package": "linda",
          "signature": "RawVector a -\u003e b",
          "source": "src/Numeric-Vector.html#count",
          "type": "function"
        },
        "index": {
          "description": "Counts the elements of given list count",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "count",
          "normalized": "RawVector a-\u003eb",
          "package": "linda",
          "signature": "RawVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a Vector from a list:\n\u003c/p\u003e\u003cpre\u003e\u003e fromList [2,3,5,7]\n4 |\u003e [2.0,3.0,5.0,7.0]\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "fromList",
          "package": "linda",
          "signature": "[a] -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "creates Vector from list fromList",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "fromList",
          "normalized": "[a]-\u003eVector a",
          "package": "linda",
          "partial": "List",
          "signature": "[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the position of a lists maximum\n\u003c/p\u003e\u003cpre\u003e maxPos [1,10,8,3] == 1 \n\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "maxPos",
          "package": "linda",
          "signature": "RawVector Double -\u003e Int",
          "source": "src/Numeric-Vector.html#maxPos",
          "type": "function"
        },
        "index": {
          "description": "Calculates the position of lists maximum maxPos",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "maxPos",
          "normalized": "RawVector Double-\u003eInt",
          "package": "linda",
          "partial": "Pos",
          "signature": "RawVector Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:maxPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Numeric.Vector",
          "name": "maximumBy",
          "package": "linda",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "linda",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracts the Vector elements to a list\n\u003c/p\u003e\u003cpre\u003e\u003e toList (linspace 5 (1,10))\n[1.0,3.25,5.5,7.75,10.0]\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "toList",
          "package": "linda",
          "signature": "Vector a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "extracts the Vector elements to list toList linspace",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "toList",
          "normalized": "Vector a-\u003e[a]",
          "package": "linda",
          "partial": "List",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
          "module": "Numeric.Vector",
          "name": "transpose",
          "package": "linda",
          "signature": "[[a]] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its argument For example transpose",
          "hierarchy": "Numeric Vector",
          "module": "Numeric.Vector",
          "name": "transpose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "linda",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linda/docs/Numeric-Vector.html#v:transpose"
      }
    }
  ]
]