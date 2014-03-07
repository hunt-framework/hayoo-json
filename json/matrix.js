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
        "word": "matrix"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatrix datatype and operations.\n\u003c/p\u003e\u003cp\u003eEvery provided example has been tested.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix",
          "name": "Matrix",
          "package": "matrix",
          "source": "src/Data-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Matrix datatype and operations Every provided example has been tested",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "Matrix",
          "package": "matrix",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of matrices.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "Matrix",
          "package": "matrix",
          "source": "src/Data-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Type of matrices",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "Matrix",
          "package": "matrix",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort alias for \u003ccode\u003e\u003ca\u003egetElem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "(!)",
          "package": "matrix",
          "signature": "Matrix a -\u003e (Int, Int) -\u003e a",
          "source": "src/Data-Matrix.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Short alias for getElem",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "(!) !",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
          "package": "matrix",
          "signature": "Matrix a-\u003e(Int,Int)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontally join two matrices. Visually:\n\u003c/p\u003e\u003cpre\u003e ( A ) \u003c|\u003e ( B ) = ( A | B )\n\u003c/pre\u003e\u003cp\u003eWhere both matrices \u003cem\u003eA\u003c/em\u003e and \u003cem\u003eB\u003c/em\u003e have the same number of rows.\n \u003cem\u003eThis condition is not checked\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "(\u003c|\u003e)",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Horizontally join two matrices Visually Where both matrices and have the same number of rows This condition is not checked",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertically join two matrices. Visually:\n\u003c/p\u003e\u003cpre\u003e                   ( A )\n ( A ) \u003c-\u003e ( B ) = ( - )\n                   ( B )\n\u003c/pre\u003e\u003cp\u003eWhere both matrices \u003cem\u003eA\u003c/em\u003e and \u003cem\u003eB\u003c/em\u003e have the same number of columns.\n \u003cem\u003eThis condition is not checked\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "(\u003c-\u003e)",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Vertically join two matrices Visually Where both matrices and have the same number of columns This condition is not checked",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple Cholesky decomposition of a symmetric, positive definite matrix.\n   The result for a matrix \u003cem\u003eM\u003c/em\u003e is a lower triangular matrix \u003cem\u003eL\u003c/em\u003e such that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eM = LL^T\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e            (  2 -1  0 )   (  1.41  0     0    )\n            ( -1  2 -1 )   ( -0.70  1.22  0    )\n cholDecomp (  0 -1  2 ) = (  0.00 -0.81  1.15 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "cholDecomp",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#cholDecomp",
          "type": "function"
        },
        "index": {
          "description": "Simple Cholesky decomposition of symmetric positive definite matrix The result for matrix is lower triangular matrix such that LL Example cholDecomp",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "cholDecomp",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Decomp",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:cholDecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Represent a vector as a one column matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "colVector",
          "package": "matrix",
          "signature": "Vector a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#colVector",
          "type": "function"
        },
        "index": {
          "description": "Represent vector as one column matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "colVector",
          "normalized": "Vector a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Vector",
          "signature": "Vector a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:colVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to one row a scalar multiple of other row.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                   ( 1 2 3 )   (  1  2  3 )\n                   ( 4 5 6 )   (  6  9 12 )\n combineRows 2 2 1 ( 7 8 9 ) = (  7  8  9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "combineRows",
          "package": "matrix",
          "signature": "Int -\u003e a -\u003e Int -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#combineRows",
          "type": "function"
        },
        "index": {
          "description": "Add to one row scalar multiple of other row Example combineRows",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "combineRows",
          "normalized": "Int-\u003ea-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Rows",
          "signature": "Int-\u003ea-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:combineRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix determinant using LU decomposition.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "detLU",
          "package": "matrix",
          "signature": "Matrix a -\u003e a",
          "source": "src/Data-Matrix.html#detLU",
          "type": "function"
        },
        "index": {
          "description": "Matrix determinant using LU decomposition",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "detLU",
          "normalized": "Matrix a-\u003ea",
          "package": "matrix",
          "partial": "LU",
          "signature": "Matrix a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:detLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix determinant using Laplace expansion.\n   If the elements of the \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e are instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e\n   consider to use \u003ccode\u003e\u003ca\u003edetLU\u003c/a\u003e\u003c/code\u003e in order to obtain better performance.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "detLaplace",
          "package": "matrix",
          "signature": "Matrix a -\u003e a",
          "source": "src/Data-Matrix.html#detLaplace",
          "type": "function"
        },
        "index": {
          "description": "Matrix determinant using Laplace expansion If the elements of the Matrix are instance of Ord and Fractional consider to use detLU in order to obtain better performance",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "detLaplace",
          "normalized": "Matrix a-\u003ea",
          "package": "matrix",
          "partial": "Laplace",
          "signature": "Matrix a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:detLaplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of the elements in the diagonal. See also \u003ccode\u003e\u003ca\u003egetDiag\u003c/a\u003e\u003c/code\u003e.\n   Example:\n\u003c/p\u003e\u003cpre\u003e          ( 1 2 3 )\n          ( 4 5 6 )\n diagProd ( 7 8 9 ) = 45\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "diagProd",
          "package": "matrix",
          "signature": "Matrix a -\u003e a",
          "source": "src/Data-Matrix.html#diagProd",
          "type": "function"
        },
        "index": {
          "description": "Product of the elements in the diagonal See also getDiag Example diagProd",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "diagProd",
          "normalized": "Matrix a-\u003ea",
          "package": "matrix",
          "partial": "Prod",
          "signature": "Matrix a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:diagProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a matrix to a given size adding zeroes.\n   If the matrix already has the required size, nothing happens.\n   The matrix is \u003cem\u003enever\u003c/em\u003e reduced in size.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                          ( 1 2 3 0 0 )\n              ( 1 2 3 )   ( 4 5 6 0 0 )\n              ( 4 5 6 )   ( 7 8 9 0 0 )\n extendTo 4 5 ( 7 8 9 ) = ( 0 0 0 0 0 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "extendTo",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "Extend matrix to given size adding zeroes If the matrix already has the required size nothing happens The matrix is never reduced in size Example extendTo",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "extendTo",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "To",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:extendTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Similar to \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e, drop any extra memory.\n\u003c/p\u003e\u003cp\u003eUseful when using \u003ccode\u003e\u003ca\u003esubmatrix\u003c/a\u003e\u003c/code\u003e from a big matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "forceMatrix",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#forceMatrix",
          "type": "function"
        },
        "index": {
          "description": "rows cols Similar to force drop any extra memory Useful when using submatrix from big matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "forceMatrix",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Matrix",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:forceMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a matrix from a non-empty list given the desired size.\n   The list must have at least \u003cem\u003erows*cols\u003c/em\u003e elements.\n   An example:\n\u003c/p\u003e\u003cpre\u003e                       ( 1 2 3 )\n                       ( 4 5 6 )\n fromList 3 3 [1..] =  ( 7 8 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "fromList",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e [a]-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "Create matrix from non-empty list given the desired size The list must have at least rows cols elements An example fromList",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "fromList",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003eMatrix a",
          "package": "matrix",
          "partial": "List",
          "signature": "Int-\u003eInt-\u003e[a]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a matrix from an non-empty list of non-empty lists.\n   \u003cem\u003eEach list must have the same number of elements\u003c/em\u003e.\n   For example:\n\u003c/p\u003e\u003cpre\u003e fromLists [ [1,2,3]      ( 1 2 3 )\n           , [4,5,6]      ( 4 5 6 )\n           , [7,8,9] ] =  ( 7 8 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "fromLists",
          "package": "matrix",
          "signature": "[[a]] -\u003e Matrix a",
          "source": "src/Data-Matrix.html#fromLists",
          "type": "function"
        },
        "index": {
          "description": "Create matrix from an non-empty list of non-empty lists Each list must have the same number of elements For example fromLists",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "fromLists",
          "normalized": "[[a]]-\u003eMatrix a",
          "package": "matrix",
          "partial": "Lists",
          "signature": "[[a]]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:fromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows)\u003c/em\u003e. Get a column of a matrix as a vector.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "getCol",
          "package": "matrix",
          "signature": "Int -\u003e Matrix a -\u003e Vector a",
          "source": "src/Data-Matrix.html#getCol",
          "type": "function"
        },
        "index": {
          "description": "rows Get column of matrix as vector",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "getCol",
          "normalized": "Int-\u003eMatrix a-\u003eVector a",
          "package": "matrix",
          "partial": "Col",
          "signature": "Int-\u003eMatrix a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:getCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min rows cols)\u003c/em\u003e. Diagonal of a \u003cem\u003enot necessarily square\u003c/em\u003e matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "getDiag",
          "package": "matrix",
          "signature": "Matrix a -\u003e Vector a",
          "source": "src/Data-Matrix.html#getDiag",
          "type": "function"
        },
        "index": {
          "description": "min rows cols Diagonal of not necessarily square matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "getDiag",
          "normalized": "Matrix a-\u003eVector a",
          "package": "matrix",
          "partial": "Diag",
          "signature": "Matrix a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:getDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Get an element of a matrix. Indices range from \u003cem\u003e(1,1)\u003c/em\u003e to \u003cem\u003e(n,m)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "getElem",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Get an element of matrix Indices range from to",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "getElem",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003ea",
          "package": "matrix",
          "partial": "Elem",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:getElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(cols)\u003c/em\u003e. Get a row of a matrix as a vector.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "getRow",
          "package": "matrix",
          "signature": "Int -\u003e Matrix a -\u003e Vector a",
          "source": "src/Data-Matrix.html#getRow",
          "type": "function"
        },
        "index": {
          "description": "cols Get row of matrix as vector",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "getRow",
          "normalized": "Int-\u003eMatrix a-\u003eVector a",
          "package": "matrix",
          "partial": "Row",
          "signature": "Int-\u003eMatrix a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:getRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Identity matrix of the given order.\n\u003c/p\u003e\u003cpre\u003e identity n =\n                 n\n   1 ( 1 0 ... 0 0 )\n   2 ( 0 1 ... 0 0 )\n     (     ...     )\n     ( 0 0 ... 1 0 )\n   n ( 0 0 ... 0 1 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "identity",
          "package": "matrix",
          "signature": "Int -\u003e Matrix a",
          "source": "src/Data-Matrix.html#identity",
          "type": "function"
        },
        "index": {
          "description": "rows cols Identity matrix of the given order identity",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "identity",
          "normalized": "Int-\u003eMatrix a",
          "package": "matrix",
          "signature": "Int-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin blocks of the form detailed in \u003ccode\u003e\u003ca\u003esplitBlocks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "joinBlocks",
          "package": "matrix",
          "signature": "(Matrix a, Matrix a, Matrix a, Matrix a) -\u003e Matrix a",
          "source": "src/Data-Matrix.html#joinBlocks",
          "type": "function"
        },
        "index": {
          "description": "Join blocks of the form detailed in splitBlocks",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "joinBlocks",
          "normalized": "(Matrix a,Matrix a,Matrix a,Matrix a)-\u003eMatrix a",
          "package": "matrix",
          "partial": "Blocks",
          "signature": "(Matrix a,Matrix a,Matrix a,Matrix a)-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:joinBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix LU decomposition with \u003cem\u003epartial pivoting\u003c/em\u003e.\n   The result for a matrix \u003cem\u003eM\u003c/em\u003e is given in the format \u003cem\u003e(U,L,P,d)\u003c/em\u003e where:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eU\u003c/em\u003e is an upper triangular matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eL\u003c/em\u003e is an \u003cem\u003eunit\u003c/em\u003e lower triangular matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eP\u003c/em\u003e is a permutation matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ed\u003c/em\u003e is the determinant of \u003cem\u003eP\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ePM = LU\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese properties are only guaranteed when the input matrix is invertible.\n   An additional property matches thanks to the strategy followed for pivoting:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eL_(i,j)\u003c/em\u003e \u003c= 1, for all \u003cem\u003ei,j\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis follows from the maximal property of the selected pivots, which also\n   leads to a better numerical stability of the algorithm.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e          ( 1 2 0 )     ( 2 0  2 )   (   1 0 0 )   ( 0 0 1 )\n          ( 0 2 1 )     ( 0 2 -1 )   ( 1/2 1 0 )   ( 1 0 0 )\n luDecomp ( 2 0 2 ) = ( ( 0 0  2 ) , (   0 1 1 ) , ( 0 1 0 ) , 1 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "luDecomp",
          "package": "matrix",
          "signature": "Matrix a -\u003e (Matrix a, Matrix a, Matrix a, a)",
          "source": "src/Data-Matrix.html#luDecomp",
          "type": "function"
        },
        "index": {
          "description": "Matrix LU decomposition with partial pivoting The result for matrix is given in the format where is an upper triangular matrix is an unit lower triangular matrix is permutation matrix is the determinant of PM LU These properties are only guaranteed when the input matrix is invertible An additional property matches thanks to the strategy followed for pivoting for all This follows from the maximal property of the selected pivots which also leads to better numerical stability of the algorithm Example luDecomp",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "luDecomp",
          "normalized": "Matrix a-\u003e(Matrix a,Matrix a,Matrix a,a)",
          "package": "matrix",
          "partial": "Decomp",
          "signature": "Matrix a-\u003e(Matrix a,Matrix a,Matrix a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:luDecomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix LU decomposition with \u003cem\u003ecomplete pivoting\u003c/em\u003e.\n   The result for a matrix \u003cem\u003eM\u003c/em\u003e is given in the format \u003cem\u003e(U,L,P,Q,d,e)\u003c/em\u003e where:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eU\u003c/em\u003e is an upper triangular matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eL\u003c/em\u003e is an \u003cem\u003eunit\u003c/em\u003e lower triangular matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eP,Q\u003c/em\u003e is a permutation matrix.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ed,e\u003c/em\u003e is the determinant of \u003cem\u003eP,Q\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ePMQ = LU\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese properties are only guaranteed when the input matrix is invertible.\n   An additional property matches thanks to the strategy followed for pivoting:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eL_(i,j)\u003c/em\u003e \u003c= 1, for all \u003cem\u003ei,j\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis follows from the maximal property of the selected pivots, which also\n   leads to a better numerical stability of the algorithm.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e           ( 1 0 )     ( 2 1 )   (   1    0 0 )   ( 0 0 1 )\n           ( 0 2 )     ( 0 2 )   (   0    1 0 )   ( 0 1 0 )   ( 1 0 )\n luDecomp' ( 2 1 ) = ( ( 0 0 ) , ( 1/2 -1/4 1 ) , ( 1 0 0 ) , ( 0 1 ) , -1 , 1 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "luDecomp'",
          "package": "matrix",
          "signature": "Matrix a -\u003e (Matrix a, Matrix a, Matrix a, Matrix a, a, a)",
          "source": "src/Data-Matrix.html#luDecomp%27",
          "type": "function"
        },
        "index": {
          "description": "Matrix LU decomposition with complete pivoting The result for matrix is given in the format where is an upper triangular matrix is an unit lower triangular matrix is permutation matrix is the determinant of PMQ LU These properties are only guaranteed when the input matrix is invertible An additional property matches thanks to the strategy followed for pivoting for all This follows from the maximal property of the selected pivots which also leads to better numerical stability of the algorithm Example luDecomp",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "luDecomp'",
          "normalized": "Matrix a-\u003e(Matrix a,Matrix a,Matrix a,Matrix a,a,a)",
          "package": "matrix",
          "partial": "Decomp'",
          "signature": "Matrix a-\u003e(Matrix a,Matrix a,Matrix a,Matrix a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:luDecomp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Map a function over a column.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                          ( 1 2 3 )   ( 1 3 3 )\n                          ( 4 5 6 )   ( 4 6 6 )\n mapCol (\\_ x -\u003e x + 1) 2 ( 7 8 9 ) = ( 7 9 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "mapCol",
          "package": "matrix",
          "signature": "(Int -\u003e a -\u003e a)-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols Map function over column Example mapCol",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "mapCol",
          "normalized": "(Int-\u003ea-\u003ea)-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Col",
          "signature": "(Int-\u003ea-\u003ea)-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:mapCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Map a function over a row.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                          ( 1 2 3 )   ( 1 2 3 )\n                          ( 4 5 6 )   ( 5 6 7 )\n mapRow (\\_ x -\u003e x + 1) 2 ( 7 8 9 ) = ( 7 8 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "mapRow",
          "package": "matrix",
          "signature": "(Int -\u003e a -\u003e a)-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols Map function over row Example mapRow",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "mapRow",
          "normalized": "(Int-\u003ea-\u003ea)-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Row",
          "signature": "(Int-\u003ea-\u003ea)-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:mapRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Generate a matrix from a generator function.\n   Example of usage:\n\u003c/p\u003e\u003cpre\u003e                                  (  1  0 -1 -2 )\n                                  (  3  2  1  0 )\n                                  (  5  4  3  2 )\n matrix 4 4 $ \\(i,j) -\u003e 2*i - j = (  7  6  5  4 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "matrix",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e ((Int, Int) -\u003e a)-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols Generate matrix from generator function Example of usage matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "matrix",
          "normalized": "Int-\u003eInt-\u003e((Int,Int)-\u003ea)-\u003eMatrix a",
          "package": "matrix",
          "signature": "Int-\u003eInt-\u003e((Int,Int)-\u003ea)-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Remove a row and a column from a matrix.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                 ( 1 2 3 )\n                 ( 4 5 6 )   ( 1 3 )\n minorMatrix 2 2 ( 7 8 9 ) = ( 7 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "minorMatrix",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols Remove row and column from matrix Example minorMatrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "minorMatrix",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Matrix",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:minorMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard matrix multiplication by definition.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "multStd",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#multStd",
          "type": "function"
        },
        "index": {
          "description": "Standard matrix multiplication by definition",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "multStd",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Std",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:multStd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrassen's matrix multiplication.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "multStrassen",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#multStrassen",
          "type": "function"
        },
        "index": {
          "description": "Strassen matrix multiplication",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "multStrassen",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Strassen",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:multStrassen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMixed Strassen's matrix multiplication.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "multStrassenMixed",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#multStrassenMixed",
          "type": "function"
        },
        "index": {
          "description": "Mixed Strassen matrix multiplication",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "multStrassenMixed",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Strassen Mixed",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:multStrassenMixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of columns.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "ncols",
          "package": "matrix",
          "signature": "Matrix a -\u003e Int",
          "source": "src/Data-Matrix.html#ncols",
          "type": "function"
        },
        "index": {
          "description": "Number of columns",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "ncols",
          "normalized": "Matrix a-\u003eInt",
          "package": "matrix",
          "signature": "Matrix a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:ncols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rows.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "nrows",
          "package": "matrix",
          "signature": "Matrix a -\u003e Int",
          "source": "src/Data-Matrix.html#nrows",
          "type": "function"
        },
        "index": {
          "description": "Number of rows",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "nrows",
          "normalized": "Matrix a-\u003eInt",
          "package": "matrix",
          "signature": "Matrix a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:nrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. Permutation matrix.\n\u003c/p\u003e\u003cpre\u003e permMatrix n i j =\n               i     j       n\n   1 ( 1 0 ... 0 ... 0 ... 0 0 )\n   2 ( 0 1 ... 0 ... 0 ... 0 0 )\n     (     ...   ...   ...     )\n   i ( 0 0 ... 0 ... 1 ... 0 0 )\n     (     ...   ...   ...     )\n   j ( 0 0 ... 1 ... 0 ... 0 0 )\n     (     ...   ...   ...     )\n     ( 0 0 ... 0 ... 0 ... 1 0 )\n   n ( 0 0 ... 0 ... 0 ... 0 1 )\n\u003c/pre\u003e\u003cp\u003eWhen \u003ccode\u003ei == j\u003c/code\u003e it reduces to \u003ccode\u003e\u003ca\u003eidentity\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "permMatrix",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols Permutation matrix permMatrix When it reduces to identity",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "permMatrix",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eMatrix a",
          "package": "matrix",
          "partial": "Matrix",
          "signature": "Int-\u003eInt-\u003eInt-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:permMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a matrix as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of its elements.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "prettyMatrix",
          "package": "matrix",
          "signature": "Matrix a -\u003e String",
          "source": "src/Data-Matrix.html#prettyMatrix",
          "type": "function"
        },
        "index": {
          "description": "Display matrix as String using the Show instance of its elements",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "prettyMatrix",
          "normalized": "Matrix a-\u003eString",
          "package": "matrix",
          "partial": "Matrix",
          "signature": "Matrix a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:prettyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Represent a vector as a one row matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "rowVector",
          "package": "matrix",
          "signature": "Vector a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#rowVector",
          "type": "function"
        },
        "index": {
          "description": "Represent vector as one row matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "rowVector",
          "normalized": "Vector a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Vector",
          "signature": "Vector a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:rowVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe variant of \u003ccode\u003e\u003ca\u003egetElem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "safeGet",
          "package": "matrix",
          "signature": "Int -\u003e Int -\u003e Matrix a -\u003e Maybe a",
          "source": "src/Data-Matrix.html#safeGet",
          "type": "function"
        },
        "index": {
          "description": "Safe variant of getElem",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "safeGet",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003eMaybe a",
          "package": "matrix",
          "partial": "Get",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:safeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a matrix by a given factor.\n   Example:\n\u003c/p\u003e\u003cpre\u003e               ( 1 2 3 )   (  2  4  6 )\n               ( 4 5 6 )   (  8 10 12 )\n scaleMatrix 2 ( 7 8 9 ) = ( 14 16 18 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "scaleMatrix",
          "package": "matrix",
          "signature": "a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#scaleMatrix",
          "type": "function"
        },
        "index": {
          "description": "Scale matrix by given factor Example scaleMatrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "scaleMatrix",
          "normalized": "a-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Matrix",
          "signature": "a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:scaleMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a row by a given factor.\n   Example:\n\u003c/p\u003e\u003cpre\u003e              ( 1 2 3 )   (  1  2  3 )\n              ( 4 5 6 )   (  8 10 12 )\n scaleRow 2 2 ( 7 8 9 ) = (  7  8  9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "scaleRow",
          "package": "matrix",
          "signature": "a -\u003e Int -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#scaleRow",
          "type": "function"
        },
        "index": {
          "description": "Scale row by given factor Example scaleRow",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "scaleRow",
          "normalized": "a-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Row",
          "signature": "a-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:scaleRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Replace the value of a cell in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "setElem",
          "package": "matrix",
          "signature": "a-\u003e (Int, Int)-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "Replace the value of cell in matrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "setElem",
          "normalized": "a-\u003e(Int,Int)-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Elem",
          "signature": "a-\u003e(Int,Int)-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:setElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a block-partition of a matrix using a given element as reference.\n   The element will stay in the bottom-right corner of the top-left corner matrix.\n\u003c/p\u003e\u003cpre\u003e                 (             )   (      |      )\n                 (             )   ( ...  | ...  )\n                 (    x        )   (    x |      )\n splitBlocks i j (             ) = (-------------) , where x = a_{i,j}\n                 (             )   (      |      )\n                 (             )   ( ...  | ...  )\n                 (             )   (      |      )\n\u003c/pre\u003e\u003cp\u003eNote that some blocks can end up empty. We use the following notation for these blocks:\n\u003c/p\u003e\u003cpre\u003e ( TL | TR )\n (---------)\n ( BL | BR )\n\u003c/pre\u003e\u003cp\u003eWhere T = Top, B = Bottom, L = Left, R = Right.\n\u003c/p\u003e\u003cp\u003eImplementation is done via slicing of vectors.\n\u003c/p\u003e",
          "module": "Data.Matrix",
          "name": "splitBlocks",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e (Matrix a, Matrix a, Matrix a, Matrix a)",
          "type": "function"
        },
        "index": {
          "description": "Make block-partition of matrix using given element as reference The element will stay in the bottom-right corner of the top-left corner matrix splitBlocks where Note that some blocks can end up empty We use the following notation for these blocks TL TR BL BR Where Top Bottom Left Right Implementation is done via slicing of vectors",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "splitBlocks",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003e(Matrix a,Matrix a,Matrix a,Matrix a)",
          "package": "matrix",
          "partial": "Blocks",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003e(Matrix a,Matrix a,Matrix a,Matrix a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:splitBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(subrows*subcols)\u003c/em\u003e. Extract a submatrix given row and column limits.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                   ( 1 2 3 )\n                   ( 4 5 6 )   ( 2 3 )\n submatrix 1 2 2 3 ( 7 8 9 ) = ( 5 6 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "submatrix",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "subrows subcols Extract submatrix given row and column limits Example submatrix",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "submatrix",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:submatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch two coumns of a matrix.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                ( 1 2 3 )   ( 2 1 3 )\n                ( 4 5 6 )   ( 5 4 6 )\n switchCols 1 2 ( 7 8 9 ) = ( 8 7 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "switchCols",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "Switch two coumns of matrix Example switchCols",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "switchCols",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Cols",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:switchCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch two rows of a matrix.\n   Example:\n\u003c/p\u003e\u003cpre\u003e                ( 1 2 3 )   ( 4 5 6 )\n                ( 4 5 6 )   ( 1 2 3 )\n switchRows 1 2 ( 7 8 9 ) = ( 7 8 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "switchRows",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "Switch two rows of matrix Example switchRows",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "switchRows",
          "normalized": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "package": "matrix",
          "partial": "Rows",
          "signature": "Int-\u003eInt-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:switchRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of the elements in the diagonal. See also \u003ccode\u003e\u003ca\u003egetDiag\u003c/a\u003e\u003c/code\u003e.\n   Example:\n\u003c/p\u003e\u003cpre\u003e       ( 1 2 3 )\n       ( 4 5 6 )\n trace ( 7 8 9 ) = 15\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "trace",
          "package": "matrix",
          "signature": "Matrix a -\u003e a",
          "source": "src/Data-Matrix.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Sum of the elements in the diagonal See also getDiag Example trace",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "trace",
          "normalized": "Matrix a-\u003ea",
          "package": "matrix",
          "signature": "Matrix a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. The transpose of a matrix.\n   Example:\n\u003c/p\u003e\u003cpre\u003e           ( 1 2 3 )   ( 1 4 7 )\n           ( 4 5 6 )   ( 2 5 8 )\n transpose ( 7 8 9 ) = ( 3 6 9 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "transpose",
          "package": "matrix",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/Data-Matrix.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "rows cols The transpose of matrix Example transpose",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "transpose",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "matrix",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e. The zero matrix of the given size.\n\u003c/p\u003e\u003cpre\u003e zero n m =\n                 n\n   1 ( 0 0 ... 0 0 )\n   2 ( 0 0 ... 0 0 )\n     (     ...     )\n     ( 0 0 ... 0 0 )\n   n ( 0 0 ... 0 0 )\n\u003c/pre\u003e",
          "module": "Data.Matrix",
          "name": "zero",
          "package": "matrix",
          "signature": "Int-\u003e Int-\u003e Matrix a",
          "type": "function"
        },
        "index": {
          "description": "rows cols The zero matrix of the given size zero",
          "hierarchy": "Data Matrix",
          "module": "Data.Matrix",
          "name": "zero",
          "normalized": "Int-\u003eInt-\u003eMatrix a",
          "package": "matrix",
          "signature": "Int-\u003eInt-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix/docs/Data-Matrix.html#v:zero"
      }
    }
  ]
]