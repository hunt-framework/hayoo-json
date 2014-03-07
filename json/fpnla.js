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
        "word": "fpnla"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines commonly useful functions that are related specifically with vectors and matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FPNLA.Matrix.Utils",
          "name": "Utils",
          "package": "fpnla",
          "source": "src/FPNLA-Matrix-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines commonly useful functions that are related specifically with vectors and matrices",
          "hierarchy": "FPNLA Matrix Utils",
          "module": "FPNLA.Matrix.Utils",
          "name": "Utils",
          "package": "fpnla",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a matrix to the standard output.\n This operation requires the elements of the matrix to have an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e but does not requires a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for the matrix data type.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix.Utils",
          "name": "print_m",
          "package": "fpnla",
          "signature": "m e -\u003e IO ()",
          "source": "src/FPNLA-Matrix-Utils.html#print_m",
          "type": "function"
        },
        "index": {
          "description": "Prints matrix to the standard output This operation requires the elements of the matrix to have an instance of Show but does not requires Show instance for the matrix data type",
          "hierarchy": "FPNLA Matrix Utils",
          "module": "FPNLA.Matrix.Utils",
          "name": "print_m",
          "normalized": "a b-\u003eIO()",
          "package": "fpnla",
          "signature": "m e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix-Utils.html#v:print_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines classes used to handle Matrices and Vectors in a generic way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FPNLA.Matrix",
          "name": "Matrix",
          "package": "fpnla",
          "source": "src/FPNLA-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines classes used to handle Matrices and Vectors in generic way",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "Matrix",
          "package": "fpnla",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents any Matrix structure\n For any matrix data structure used in this framework it must have an instance of this class.\n A minimal instance of this class must provide an implementation for \u003ccode\u003e\u003ca\u003egenerate_m\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edim_m\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eelem_m\u003c/a\u003e\u003c/code\u003e.\n The index of the first element stored in the vector must be (0,0).\n This is a multi-param type class because usually libraries of Matrix and Vector imposes restrictions over the type of the elements (for example, to have an \u003ca\u003eStorable\u003c/a\u003e instance).\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "Matrix",
          "package": "fpnla",
          "source": "src/FPNLA-Matrix.html#Matrix",
          "type": "class"
        },
        "index": {
          "description": "This class represents any Matrix structure For any matrix data structure used in this framework it must have an instance of this class minimal instance of this class must provide an implementation for generate dim and elem The index of the first element stored in the vector must be This is multi-param type class because usually libraries of Matrix and Vector imposes restrictions over the type of the elements for example to have an Storable instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "Matrix",
          "package": "fpnla",
          "partial": "Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class allows us to leave separated the two concepts of \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n This class establishes a link between a vector and a matrix structure.\n We provide a default instance for any \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e instances so any vector could be used with any matrix whenever the type of the elements are the same.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "MatrixVector",
          "package": "fpnla",
          "source": "src/FPNLA-Matrix.html#MatrixVector",
          "type": "class"
        },
        "index": {
          "description": "This class allows us to leave separated the two concepts of Vector and Matrix This class establishes link between vector and matrix structure We provide default instance for any Vector and Matrix instances so any vector could be used with any matrix whenever the type of the elements are the same",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "MatrixVector",
          "package": "fpnla",
          "partial": "Matrix Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#t:MatrixVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents a vector structure\n For any vector data structure used in this framework it must have an instance of this class.\n A minimal instance of this class must provide an implementation for \u003ccode\u003e\u003ca\u003egenerate_v\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eelem_v\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elength_v\u003c/a\u003e\u003c/code\u003e.\n The index of the first element stored in the vector must be 0.\n This is a multi-param type class because usually libraries of Matrix and Vector imposes restrictions over the type of the elements (for example, to have a \u003ca\u003eStorable\u003c/a\u003e instance).\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "Vector",
          "package": "fpnla",
          "source": "src/FPNLA-Matrix.html#Vector",
          "type": "class"
        },
        "index": {
          "description": "This class represents vector structure For any vector data structure used in this framework it must have an instance of this class minimal instance of this class must provide an implementation for generate elem and length The index of the first element stored in the vector must be This is multi-param type class because usually libraries of Matrix and Vector imposes restrictions over the type of the elements for example to have Storable instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "Vector",
          "package": "fpnla",
          "partial": "Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a vector in a matrix of one column.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "asColumn_vm",
          "package": "fpnla",
          "signature": "v e -\u003e m e",
          "source": "src/FPNLA-Matrix.html#asColumn_vm",
          "type": "function"
        },
        "index": {
          "description": "Converts vector in matrix of one column",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "asColumn_vm",
          "normalized": "a b-\u003ec b",
          "package": "fpnla",
          "partial": "Column",
          "signature": "v e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:asColumn_vm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of columns of the matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "cantCols_m",
          "package": "fpnla",
          "signature": "m e -\u003e Int",
          "source": "src/FPNLA-Matrix.html#cantCols_m",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of columns of the matrix",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "cantCols_m",
          "normalized": "a b-\u003eInt",
          "package": "fpnla",
          "partial": "Cols",
          "signature": "m e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:cantCols_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of rows of the matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "cantRows_m",
          "package": "fpnla",
          "signature": "m e -\u003e Int",
          "source": "src/FPNLA-Matrix.html#cantRows_m",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of rows of the matrix",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "cantRows_m",
          "normalized": "a b-\u003eInt",
          "package": "fpnla",
          "partial": "Rows",
          "signature": "m e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:cantRows_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the \u003ccode\u003ej\u003c/code\u003e-th column of the matrix \u003ccode\u003em\u003c/code\u003e and converts it in the vector structure.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "col_vm",
          "package": "fpnla",
          "signature": "Int -\u003e m e -\u003e v e",
          "source": "src/FPNLA-Matrix.html#col_vm",
          "type": "method"
        },
        "index": {
          "description": "Extracts the th column of the matrix and converts it in the vector structure",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "col_vm",
          "normalized": "Int-\u003ea b-\u003ec b",
          "package": "fpnla",
          "signature": "Int-\u003em e-\u003ev e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:col_vm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin multiple vectors in one single vector.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "concat_v",
          "package": "fpnla",
          "signature": "concat_v",
          "source": "src/FPNLA-Matrix.html#concat_v",
          "type": "method"
        },
        "index": {
          "description": "Join multiple vectors in one single vector",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "concat_v",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:concat_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a matrix \u003ccode\u003em\u003c/code\u003e into blocks of size \u003ccode\u003e(r,c)\u003c/code\u003e and returns the block on the position \u003ccode\u003e(i,i)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "diagonalBlock",
          "package": "fpnla",
          "signature": "(Int, Int)-\u003e Int-\u003e m e-\u003e m e",
          "type": "function"
        },
        "index": {
          "description": "Splits matrix into blocks of size and returns the block on the position",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "diagonalBlock",
          "normalized": "(Int,Int)-\u003eInt-\u003ea b-\u003ea b",
          "package": "fpnla",
          "partial": "Block",
          "signature": "(Int,Int)-\u003eInt-\u003em e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:diagonalBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the dimension of a given matrix. The first element in the pair is the number of rows and the second the number of columns.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "dim_m",
          "package": "fpnla",
          "signature": "m e -\u003e (Int, Int)",
          "source": "src/FPNLA-Matrix.html#dim_m",
          "type": "method"
        },
        "index": {
          "description": "Returns the dimension of given matrix The first element in the pair is the number of rows and the second the number of columns",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "dim_m",
          "normalized": "a b-\u003e(Int,Int)",
          "package": "fpnla",
          "signature": "m e-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:dim_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the element that is in the position \u003ccode\u003e(i,j)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "elem_m",
          "package": "fpnla",
          "signature": "elem_m",
          "source": "src/FPNLA-Matrix.html#elem_m",
          "type": "method"
        },
        "index": {
          "description": "Returns the element that is in the position",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "elem_m",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:elem_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the element from a given index. The index must be between 0 and the length of the vector.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "elem_v",
          "package": "fpnla",
          "signature": "Int -\u003e v e -\u003e e",
          "source": "src/FPNLA-Matrix.html#elem_v",
          "type": "method"
        },
        "index": {
          "description": "Returns the element from given index The index must be between and the length of the vector",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "elem_v",
          "normalized": "Int-\u003ea b-\u003eb",
          "package": "fpnla",
          "signature": "Int-\u003ev e-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:elem_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common \u003cem\u003efoldr\u003c/em\u003e function but specific for this instance.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "foldr_v",
          "package": "fpnla",
          "signature": "(e -\u003e b -\u003e b) -\u003e b -\u003e v e -\u003e b",
          "source": "src/FPNLA-Matrix.html#foldr_v",
          "type": "method"
        },
        "index": {
          "description": "The common foldr function but specific for this instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "foldr_v",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "fpnla",
          "signature": "(e-\u003eb-\u003eb)-\u003eb-\u003ev e-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:foldr_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new matrix from a list of list where the elements are sub-matrices.\n This operations is the analogue of \u003ccode\u003e\u003ca\u003econcat_v\u003c/a\u003e\u003c/code\u003e operation from the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e class.\n The 'borders' of the sub-matrices will be joined.\n The dimensions of the sum-matrices must be compatibles.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "fromBlocks_m",
          "package": "fpnla",
          "signature": "[[m e]] -\u003e m e",
          "source": "src/FPNLA-Matrix.html#fromBlocks_m",
          "type": "method"
        },
        "index": {
          "description": "Constructs new matrix from list of list where the elements are sub-matrices This operations is the analogue of concat operation from the Vector class The borders of the sub-matrices will be joined The dimensions of the sum-matrices must be compatibles",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "fromBlocks_m",
          "normalized": "[[a b]]-\u003ea b",
          "package": "fpnla",
          "partial": "Blocks",
          "signature": "[[m e]]-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:fromBlocks_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins a list of column vectors in a matrix structure.\n The length of every vector in the list must be the same.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "fromCols_vm",
          "package": "fpnla",
          "signature": "[v e] -\u003e m e",
          "source": "src/FPNLA-Matrix.html#fromCols_vm",
          "type": "method"
        },
        "index": {
          "description": "Joins list of column vectors in matrix structure The length of every vector in the list must be the same",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "fromCols_vm",
          "normalized": "[a b]-\u003ec b",
          "package": "fpnla",
          "partial": "Cols",
          "signature": "[v e]-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:fromCols_vm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new matrix from the dimension (length of rows and columns) of and a list.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "fromList_m",
          "package": "fpnla",
          "signature": "Int -\u003e Int -\u003e [e] -\u003e m e",
          "source": "src/FPNLA-Matrix.html#fromList_m",
          "type": "method"
        },
        "index": {
          "description": "Creates new matrix from the dimension length of rows and columns of and list",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "fromList_m",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003eb a",
          "package": "fpnla",
          "partial": "List",
          "signature": "Int-\u003eInt-\u003e[e]-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:fromList_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector from a list, th vector will contain all (and only) the elements of the list, and in the same order.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "fromList_v",
          "package": "fpnla",
          "signature": "fromList_v",
          "source": "src/FPNLA-Matrix.html#fromList_v",
          "type": "method"
        },
        "index": {
          "description": "Creates new vector from list th vector will contain all and only the elements of the list and in the same order",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "fromList_v",
          "package": "fpnla",
          "partial": "List",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:fromList_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new matrix from the dimension (length of rows and columns) of the matrix and a function that returns the value for each index.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "generate_m",
          "package": "fpnla",
          "signature": "generate_m",
          "source": "src/FPNLA-Matrix.html#generate_m",
          "type": "method"
        },
        "index": {
          "description": "Creates new matrix from the dimension length of rows and columns of the matrix and function that returns the value for each index",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "generate_m",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:generate_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector from the length of the vector and a function that returns the value for each index.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "generate_v",
          "package": "fpnla",
          "signature": "generate_v",
          "source": "src/FPNLA-Matrix.html#generate_v",
          "type": "method"
        },
        "index": {
          "description": "Creates new vector from the length of the vector and function that returns the value for each index",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "generate_v",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:generate_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of the vector.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "length_v",
          "package": "fpnla",
          "signature": "v e -\u003e Int",
          "source": "src/FPNLA-Matrix.html#length_v",
          "type": "method"
        },
        "index": {
          "description": "Returns the length of the vector",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "length_v",
          "normalized": "a b-\u003eInt",
          "package": "fpnla",
          "signature": "v e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:length_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common \u003cem\u003emap\u003c/em\u003e function but specific for this instance.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "map_m",
          "package": "fpnla",
          "signature": "(e -\u003e e) -\u003e m e -\u003e m e",
          "source": "src/FPNLA-Matrix.html#map_m",
          "type": "method"
        },
        "index": {
          "description": "The common map function but specific for this instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "map_m",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "fpnla",
          "signature": "(e-\u003ee)-\u003em e-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:map_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common \u003cem\u003emap\u003c/em\u003e function but specific for this instance.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "map_v",
          "package": "fpnla",
          "signature": "(e -\u003e e) -\u003e v e -\u003e v e",
          "source": "src/FPNLA-Matrix.html#map_v",
          "type": "method"
        },
        "index": {
          "description": "The common map function but specific for this instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "map_v",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "fpnla",
          "signature": "(e-\u003ee)-\u003ev e-\u003ev e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:map_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the \u003ccode\u003ei\u003c/code\u003e-th row of the matrix \u003ccode\u003em\u003c/code\u003e and converts it in the vector structure.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "row_vm",
          "package": "fpnla",
          "signature": "Int -\u003e m e -\u003e v e",
          "source": "src/FPNLA-Matrix.html#row_vm",
          "type": "method"
        },
        "index": {
          "description": "Extracts the th row of the matrix and converts it in the vector structure",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "row_vm",
          "normalized": "Int-\u003ea b-\u003ec b",
          "package": "fpnla",
          "signature": "Int-\u003em e-\u003ev e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:row_vm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the size of the matrix (number of rows x number of columns).\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "size_m",
          "package": "fpnla",
          "signature": "m e -\u003e Int",
          "source": "src/FPNLA-Matrix.html#size_m",
          "type": "function"
        },
        "index": {
          "description": "Returns the size of the matrix number of rows number of columns",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "size_m",
          "normalized": "a b-\u003eInt",
          "package": "fpnla",
          "signature": "m e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:size_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial position \u003ccode\u003e(i,j)\u003c/code\u003e, a dimension \u003ccode\u003e(r,c)\u003c/code\u003e and a matrix \u003ccode\u003em\u003c/code\u003e, creates a new matrix that is a sub matrix of \u003ccode\u003em\u003c/code\u003e containing the elements in positions \u003ccode\u003e[(p1, p2) | p1 \u003c- [i..i+r], p2 \u003c- [j..j+c]]\u003c/code\u003e\n For example, if \u003ccode\u003em\u003c/code\u003e is:\n \u003ccode\u003e1 2 3\n 4 5 6\n 7 8 9\u003c/code\u003e\n and \u003ccode\u003e(i,j)\u003c/code\u003e and \u003ccode\u003e(r,c)\u003c/code\u003e are \u003ccode\u003e(0,1)\u003c/code\u003e and \u003ccode\u003e(2,3)\u003c/code\u003e respectively, then the result will be a new matrix containing:\n \u003ccode\u003e2 3\n 5 6\n 8 9\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "subMatrix_m",
          "package": "fpnla",
          "signature": "subMatrix_m",
          "source": "src/FPNLA-Matrix.html#subMatrix_m",
          "type": "method"
        },
        "index": {
          "description": "Given an initial position dimension and matrix creates new matrix that is sub matrix of containing the elements in positions p1 p2 p1 i..i p2 j..j For example if is and and are and respectively then the result will be new matrix containing",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "subMatrix_m",
          "package": "fpnla",
          "partial": "Matrix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:subMatrix_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a matrix \u003ccode\u003em\u003c/code\u003e in blocks of size \u003ccode\u003e(r,c)\u003c/code\u003e (the dimension of the blocks in the right and the bottom may be smaller).\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "toBlocks_m",
          "package": "fpnla",
          "signature": "toBlocks_m",
          "source": "src/FPNLA-Matrix.html#toBlocks_m",
          "type": "method"
        },
        "index": {
          "description": "Split matrix in blocks of size the dimension of the blocks in the right and the bottom may be smaller",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "toBlocks_m",
          "package": "fpnla",
          "partial": "Blocks",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:toBlocks_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list containing every column of the matrix converted in the vector structure.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "toCols_vm",
          "package": "fpnla",
          "signature": "m e -\u003e [v e]",
          "source": "src/FPNLA-Matrix.html#toCols_vm",
          "type": "method"
        },
        "index": {
          "description": "Returns list containing every column of the matrix converted in the vector structure",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "toCols_vm",
          "normalized": "a b-\u003e[c b]",
          "package": "fpnla",
          "partial": "Cols",
          "signature": "m e-\u003e[v e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:toCols_vm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a matrix, creates a new matrix that will be the transpose of the original.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "transpose_m",
          "package": "fpnla",
          "signature": "m e -\u003e m e",
          "source": "src/FPNLA-Matrix.html#transpose_m",
          "type": "method"
        },
        "index": {
          "description": "Given matrix creates new matrix that will be the transpose of the original",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "transpose_m",
          "normalized": "a b-\u003ea b",
          "package": "fpnla",
          "signature": "m e-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:transpose_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a matrix \u003ccode\u003em\u003c/code\u003e into blocks of size \u003ccode\u003e(s, cantCols_m m)\u003c/code\u003e and returns the block on the position \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "verticalBlock",
          "package": "fpnla",
          "signature": "Int-\u003e Int-\u003e m e-\u003e m e",
          "type": "function"
        },
        "index": {
          "description": "Splits matrix into blocks of size cantCols and returns the block on the position",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "verticalBlock",
          "normalized": "Int-\u003eInt-\u003ea b-\u003ea b",
          "package": "fpnla",
          "partial": "Block",
          "signature": "Int-\u003eInt-\u003em e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:verticalBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common \u003cem\u003ezipWith\u003c/em\u003e function but specific for this instance.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "zipWith_m",
          "package": "fpnla",
          "signature": "(e -\u003e e -\u003e e) -\u003e m e -\u003e m e -\u003e m e",
          "source": "src/FPNLA-Matrix.html#zipWith_m",
          "type": "method"
        },
        "index": {
          "description": "The common zipWith function but specific for this instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "zipWith_m",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "fpnla",
          "partial": "With",
          "signature": "(e-\u003ee-\u003ee)-\u003em e-\u003em e-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:zipWith_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common \u003cem\u003ezipWith\u003c/em\u003e function but specific for this instance.\n\u003c/p\u003e",
          "module": "FPNLA.Matrix",
          "name": "zipWith_v",
          "package": "fpnla",
          "signature": "(e -\u003e e -\u003e e) -\u003e v e -\u003e v e -\u003e v e",
          "source": "src/FPNLA-Matrix.html#zipWith_v",
          "type": "method"
        },
        "index": {
          "description": "The common zipWith function but specific for this instance",
          "hierarchy": "FPNLA Matrix",
          "module": "FPNLA.Matrix",
          "name": "zipWith_v",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "fpnla",
          "partial": "With",
          "signature": "(e-\u003ee-\u003ee)-\u003ev e-\u003ev e-\u003ev e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Matrix.html#v:zipWith_v"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines all the BLAS (Basic Linear Algebra Subprograms) operations supported by the framework.\n See \u003ca\u003ehttp://www.netlib.org/blas/\u003c/a\u003e for more information about BLAS and \u003ca\u003ehttp://www.ugcs.caltech.edu/~srbecker/blasqr_betterFonts.pdf\u003c/a\u003e for a quick description of all BLAS operation signatures and behaviour.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "BLAS",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines all the BLAS Basic Linear Algebra Subprograms operations supported by the framework See http www.netlib.org blas for more information about BLAS and http www.ugcs.caltech.edu srbecker blasqr betterFonts.pdf for quick description of all BLAS operation signatures and behaviour",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "BLAS",
          "package": "fpnla",
          "partial": "BLAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the level-1 BLAS \u003cem\u003edot\u003c/em\u003e operation in the framework.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "DOT",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html#DOT",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the level-1 BLAS dot operation in the framework",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "DOT",
          "package": "fpnla",
          "partial": "DOT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#t:DOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the level-3 BLAS \u003cem\u003egemm\u003c/em\u003e operation in the framework.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "GEMM",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html#GEMM",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the level-3 BLAS gemm operation in the framework",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "GEMM",
          "package": "fpnla",
          "partial": "GEMM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#t:GEMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the level-2 BLAS \u003cem\u003egemv\u003c/em\u003e operation in the framework.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "GEMV",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html#GEMV",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the level-2 BLAS gemv operation in the framework",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "GEMV",
          "package": "fpnla",
          "partial": "GEMV",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#t:GEMV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the level-3 BLAS \u003cem\u003esyrk\u003c/em\u003e operation in the framework.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "SYRK",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html#SYRK",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the level-3 BLAS syrk operation in the framework",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "SYRK",
          "package": "fpnla",
          "partial": "SYRK",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#t:SYRK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the level-3 BLAS \u003cem\u003etrsm\u003c/em\u003e operation in the framework.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.BLAS",
          "name": "TRSM",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-BLAS.html#TRSM",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the level-3 BLAS trsm operation in the framework",
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "TRSM",
          "package": "fpnla",
          "partial": "TRSM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#t:TRSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.BLAS",
          "name": "dot",
          "package": "fpnla",
          "signature": "dot",
          "source": "src/FPNLA-Operations-BLAS.html#dot",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "dot",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.BLAS",
          "name": "gemm",
          "package": "fpnla",
          "signature": "gemm",
          "source": "src/FPNLA-Operations-BLAS.html#gemm",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "gemm",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#v:gemm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.BLAS",
          "name": "gemv",
          "package": "fpnla",
          "signature": "gemv",
          "source": "src/FPNLA-Operations-BLAS.html#gemv",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "gemv",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#v:gemv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.BLAS",
          "name": "syrk",
          "package": "fpnla",
          "signature": "syrk",
          "source": "src/FPNLA-Operations-BLAS.html#syrk",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "syrk",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#v:syrk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.BLAS",
          "name": "trsm",
          "package": "fpnla",
          "signature": "trsm",
          "source": "src/FPNLA-Operations-BLAS.html#trsm",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations BLAS",
          "module": "FPNLA.Operations.BLAS",
          "name": "trsm",
          "package": "fpnla",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-BLAS.html#v:trsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines all the LAPACK (Linear Algebra PACKage) operations supported by the framework.\n See \u003ca\u003ehttp://www.netlib.org/lapack/\u003c/a\u003e for more information about LAPACK.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FPNLA.Operations.LAPACK",
          "name": "LAPACK",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-LAPACK.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines all the LAPACK Linear Algebra PACKage operations supported by the framework See http www.netlib.org lapack for more information about LAPACK",
          "hierarchy": "FPNLA Operations LAPACK",
          "module": "FPNLA.Operations.LAPACK",
          "name": "LAPACK",
          "package": "fpnla",
          "partial": "LAPACK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-LAPACK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the signature of the LAPACK \u003cem\u003epotrf\u003c/em\u003e operation in the framework.\n This operation takes a symmetric (or hermitian) positive definite (SPD) matrix (flagged with TriangType) and computes the Cholesky factorization of the matrix.\n The Cholesky decomposition of an SPD matrix \u003cem\u003eM\u003c/em\u003e is a lower triangular matrix \u003cem\u003eL\u003c/em\u003e where \u003cem\u003eM = L L*\u003c/em\u003e being \u003cem\u003eL*\u003c/em\u003e the conjugate transpose of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.LAPACK",
          "name": "POTRF",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-LAPACK.html#POTRF",
          "type": "class"
        },
        "index": {
          "description": "Defines the signature of the LAPACK potrf operation in the framework This operation takes symmetric or hermitian positive definite SPD matrix flagged with TriangType and computes the Cholesky factorization of the matrix The Cholesky decomposition of an SPD matrix is lower triangular matrix where being the conjugate transpose of",
          "hierarchy": "FPNLA Operations LAPACK",
          "module": "FPNLA.Operations.LAPACK",
          "name": "POTRF",
          "package": "fpnla",
          "partial": "POTRF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-LAPACK.html#t:POTRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.LAPACK",
          "name": "potrf",
          "package": "fpnla",
          "signature": "StratCtx s -\u003e TriangType (m e) -\u003e ResM s v m e",
          "source": "src/FPNLA-Operations-LAPACK.html#potrf",
          "type": "method"
        },
        "index": {
          "hierarchy": "FPNLA Operations LAPACK",
          "module": "FPNLA.Operations.LAPACK",
          "name": "potrf",
          "normalized": "StratCtx a-\u003eTriangType(b c)-\u003eResM a d b c",
          "package": "fpnla",
          "signature": "StratCtx s-\u003eTriangType(m e)-\u003eResM s v m e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-LAPACK.html#v:potrf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "Parameters",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Parameters",
          "package": "fpnla",
          "partial": "Parameters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents the elements that can be used in the BLAS operations.\n The elements in BLAS are real or complex numbers, so we provide default instances for the Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "Elt",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#Elt",
          "type": "class"
        },
        "index": {
          "description": "This class represents the elements that can be used in the BLAS operations The elements in BLAS are real or complex numbers so we provide default instances for the Haskell Double Float and Complex types",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Elt",
          "package": "fpnla",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResM\u003c/a\u003e\u003c/code\u003e data type is used as result of level three BLAS operations and returns a matrix \u003cem\u003em\u003c/em\u003e of elements \u003cem\u003ee\u003c/em\u003e and contains the strategy \u003cem\u003es\u003c/em\u003e and vector \u003cem\u003ev\u003c/em\u003e as phantom types.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResM",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#ResM",
          "type": "data"
        },
        "index": {
          "description": "The ResM data type is used as result of level three BLAS operations and returns matrix of elements and contains the strategy and vector as phantom types",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResM",
          "package": "fpnla",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:ResM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResS\u003c/a\u003e\u003c/code\u003e data type is used as result of level one BLAS operations and returns an scalar \u003cem\u003ee\u003c/em\u003e and contains the strategy \u003cem\u003es\u003c/em\u003e as phantom types.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResS",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#ResS",
          "type": "data"
        },
        "index": {
          "description": "The ResS data type is used as result of level one BLAS operations and returns an scalar and contains the strategy as phantom types",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResS",
          "package": "fpnla",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:ResS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResV\u003c/a\u003e\u003c/code\u003e data type is used as result of level two BLAS operations and returns a vector \u003cem\u003ev\u003c/em\u003e of elements \u003cem\u003ee\u003c/em\u003e and contains the strategy \u003cem\u003es\u003c/em\u003e as phantom types.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResV",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#ResV",
          "type": "data"
        },
        "index": {
          "description": "The ResV data type is used as result of level two BLAS operations and returns vector of elements and contains the strategy as phantom types",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "ResV",
          "package": "fpnla",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:ResV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type family is used to represent the \u003cem\u003econtext\u003c/em\u003e of an operation.\n A particular implementation is a combination of an algorithm and a parallelism technique, and we call it a \u003cem\u003estrategy\u003c/em\u003e. A particular strategy may need particular information to execute. For example, an operation that computes the matrix-matrix multiplication by splitting the matrices in blocks must require the size of the blocks.\n With this context we allows to pass any additional information that the operation needs to execute as parameters, but maintaining a common signature.\n The \u003cem\u003es\u003c/em\u003e type parameter is the strategy so, there must exist a Haskell data type to represent a particular strategy.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "StratCtx",
          "package": "fpnla",
          "signature": "StratCtx",
          "type": "function"
        },
        "index": {
          "description": "This type family is used to represent the context of an operation particular implementation is combination of an algorithm and parallelism technique and we call it strategy particular strategy may need particular information to execute For example an operation that computes the matrix-matrix multiplication by splitting the matrices in blocks must require the size of the blocks With this context we allows to pass any additional information that the operation needs to execute as parameters but maintaining common signature The type parameter is the strategy so there must exist Haskell data type to represent particular strategy",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "StratCtx",
          "package": "fpnla",
          "partial": "Strat Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:StratCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates if a matrix must be considered as normal, transposed or transposed conjugated.\n This is part of the common flags in the BLAS operation signatures and it's useful to work with a transposed matrix without really computing the transposed matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "TransType",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#TransType",
          "type": "data"
        },
        "index": {
          "description": "Indicates if matrix must be considered as normal transposed or transposed conjugated This is part of the common flags in the BLAS operation signatures and it useful to work with transposed matrix without really computing the transposed matrix",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "TransType",
          "package": "fpnla",
          "partial": "Trans Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:TransType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that a matrix is symmetric and with which triangular part of the matrix the operation is going to work (\u003ccode\u003e\u003ca\u003eUpper\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eLower\u003c/a\u003e\u003c/code\u003e).\n The operation only will see the indicated part of the matrix and should not try to access the other part.\n This is part of the common flags in the BLAS operation signatures.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "TriangType",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#TriangType",
          "type": "data"
        },
        "index": {
          "description": "Indicates that matrix is symmetric and with which triangular part of the matrix the operation is going to work Upper or Lower The operation only will see the indicated part of the matrix and should not try to access the other part This is part of the common flags in the BLAS operation signatures",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "TriangType",
          "package": "fpnla",
          "partial": "Triang Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:TriangType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates if a matrix must be considered as unitary or not. An unitary matrix is a matrix that contains ones in the diagonal.\n This is part of the common flags in the BLAS operation signatures.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "UnitType",
          "package": "fpnla",
          "source": "src/FPNLA-Operations-Parameters.html#UnitType",
          "type": "data"
        },
        "index": {
          "description": "Indicates if matrix must be considered as unitary or not An unitary matrix is matrix that contains ones in the diagonal This is part of the common flags in the BLAS operation signatures",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "UnitType",
          "package": "fpnla",
          "partial": "Unit Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#t:UnitType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "ConjTrans",
          "package": "fpnla",
          "signature": "ConjTrans m",
          "source": "src/FPNLA-Operations-Parameters.html#TransType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "ConjTrans",
          "package": "fpnla",
          "partial": "Conj Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:ConjTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "Lower",
          "package": "fpnla",
          "signature": "Lower m",
          "source": "src/FPNLA-Operations-Parameters.html#TriangType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Lower",
          "package": "fpnla",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:Lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "NoTrans",
          "package": "fpnla",
          "signature": "NoTrans m",
          "source": "src/FPNLA-Operations-Parameters.html#TransType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "NoTrans",
          "package": "fpnla",
          "partial": "No Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:NoTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "NoUnit",
          "package": "fpnla",
          "signature": "NoUnit m",
          "source": "src/FPNLA-Operations-Parameters.html#UnitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "NoUnit",
          "package": "fpnla",
          "partial": "No Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:NoUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "Trans",
          "package": "fpnla",
          "signature": "Trans m",
          "source": "src/FPNLA-Operations-Parameters.html#TransType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Trans",
          "package": "fpnla",
          "partial": "Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:Trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "Unit",
          "package": "fpnla",
          "signature": "Unit m",
          "source": "src/FPNLA-Operations-Parameters.html#UnitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Unit",
          "package": "fpnla",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FPNLA.Operations.Parameters",
          "name": "Upper",
          "package": "fpnla",
          "signature": "Upper m",
          "source": "src/FPNLA-Operations-Parameters.html#TriangType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "Upper",
          "package": "fpnla",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:Upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a matrix into a \u003ccode\u003e\u003ca\u003eResM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultM",
          "package": "fpnla",
          "signature": "m e -\u003e ResM s v m e",
          "source": "src/FPNLA-Operations-Parameters.html#blasResultM",
          "type": "function"
        },
        "index": {
          "description": "Wrap matrix into ResM",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultM",
          "normalized": "a b-\u003eResM c d a b",
          "package": "fpnla",
          "partial": "Result",
          "signature": "m e-\u003eResM s v m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:blasResultM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a scalar into a \u003ccode\u003e\u003ca\u003eResS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultS",
          "package": "fpnla",
          "signature": "e -\u003e ResS s e",
          "source": "src/FPNLA-Operations-Parameters.html#blasResultS",
          "type": "function"
        },
        "index": {
          "description": "Wrap scalar into ResS",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultS",
          "normalized": "a-\u003eResS b a",
          "package": "fpnla",
          "partial": "Result",
          "signature": "e-\u003eResS s e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:blasResultS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a vector into a \u003ccode\u003e\u003ca\u003eResV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultV",
          "package": "fpnla",
          "signature": "v e -\u003e ResV s v e",
          "source": "src/FPNLA-Operations-Parameters.html#blasResultV",
          "type": "function"
        },
        "index": {
          "description": "Wrap vector into ResV",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "blasResultV",
          "normalized": "a b-\u003eResV c a b",
          "package": "fpnla",
          "partial": "Result",
          "signature": "v e-\u003eResV s v e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:blasResultV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a TransType-UnitType flagged matrix, returns the dimension of the matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTransUnit_m",
          "package": "fpnla",
          "signature": "TransType (UnitType (m e)) -\u003e (Int, Int)",
          "source": "src/FPNLA-Operations-Parameters.html#dimTransUnit_m",
          "type": "function"
        },
        "index": {
          "description": "Given TransType-UnitType flagged matrix returns the dimension of the matrix",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTransUnit_m",
          "normalized": "TransType(UnitType(a b))-\u003e(Int,Int)",
          "package": "fpnla",
          "partial": "Trans Unit",
          "signature": "TransType(UnitType(m e))-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:dimTransUnit_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a TransType flagged matrix, returns the dimension of the matrix without computing the transpose.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTrans_m",
          "package": "fpnla",
          "signature": "TransType (m e) -\u003e (Int, Int)",
          "source": "src/FPNLA-Operations-Parameters.html#dimTrans_m",
          "type": "function"
        },
        "index": {
          "description": "Given TransType flagged matrix returns the dimension of the matrix without computing the transpose",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTrans_m",
          "normalized": "TransType(a b)-\u003e(Int,Int)",
          "package": "fpnla",
          "partial": "Trans",
          "signature": "TransType(m e)-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:dimTrans_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a TransType flagged matrix, returns the dimension of the matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTriang",
          "package": "fpnla",
          "signature": "TriangType (m e) -\u003e (Int, Int)",
          "source": "src/FPNLA-Operations-Parameters.html#dimTriang",
          "type": "function"
        },
        "index": {
          "description": "Given TransType flagged matrix returns the dimension of the matrix",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimTriang",
          "normalized": "TriangType(a b)-\u003e(Int,Int)",
          "package": "fpnla",
          "partial": "Triang",
          "signature": "TriangType(m e)-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:dimTriang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a UnitType flagged matrix, returns the dimension of the matrix.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimUnit_m",
          "package": "fpnla",
          "signature": "UnitType (m e) -\u003e (Int, Int)",
          "source": "src/FPNLA-Operations-Parameters.html#dimUnit_m",
          "type": "function"
        },
        "index": {
          "description": "Given UnitType flagged matrix returns the dimension of the matrix",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "dimUnit_m",
          "normalized": "UnitType(a b)-\u003e(Int,Int)",
          "package": "fpnla",
          "partial": "Unit",
          "signature": "UnitType(m e)-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:dimUnit_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003cem\u003ei,j\u003c/em\u003e position and a TransType flagged matrix, returns the element in that position only accessing the part indicated by the TransType.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemSymm",
          "package": "fpnla",
          "signature": "Int -\u003e Int -\u003e TriangType (m e) -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#elemSymm",
          "type": "function"
        },
        "index": {
          "description": "Given an position and TransType flagged matrix returns the element in that position only accessing the part indicated by the TransType",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemSymm",
          "normalized": "Int-\u003eInt-\u003eTriangType(a b)-\u003eb",
          "package": "fpnla",
          "partial": "Symm",
          "signature": "Int-\u003eInt-\u003eTriangType(m e)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:elemSymm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003cem\u003ei,j\u003c/em\u003e position and a TransType-UnitType flagged matrix, returns the element in that position without computing the transpose.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemTransUnit_m",
          "package": "fpnla",
          "signature": "Int -\u003e Int -\u003e TransType (UnitType (m e)) -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#elemTransUnit_m",
          "type": "function"
        },
        "index": {
          "description": "Given an position and TransType-UnitType flagged matrix returns the element in that position without computing the transpose",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemTransUnit_m",
          "normalized": "Int-\u003eInt-\u003eTransType(UnitType(a b))-\u003eb",
          "package": "fpnla",
          "partial": "Trans Unit",
          "signature": "Int-\u003eInt-\u003eTransType(UnitType(m e))-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:elemTransUnit_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003cem\u003ei,j\u003c/em\u003e position and a TransType flagged matrix, returns the element in that position without computing the transpose.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemTrans_m",
          "package": "fpnla",
          "signature": "Int -\u003e Int -\u003e TransType (m e) -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#elemTrans_m",
          "type": "function"
        },
        "index": {
          "description": "Given an position and TransType flagged matrix returns the element in that position without computing the transpose",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemTrans_m",
          "normalized": "Int-\u003eInt-\u003eTransType(a b)-\u003eb",
          "package": "fpnla",
          "partial": "Trans",
          "signature": "Int-\u003eInt-\u003eTransType(m e)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:elemTrans_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003cem\u003ei,j\u003c/em\u003e position and a UnitType flagged matrix, returns the element in that position. If the matrix is flagged as Unit and \u003cem\u003ei == j\u003c/em\u003e (the element is in the diagonal) returns one.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemUnit_m",
          "package": "fpnla",
          "signature": "Int -\u003e Int -\u003e UnitType (m e) -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#elemUnit_m",
          "type": "function"
        },
        "index": {
          "description": "Given an position and UnitType flagged matrix returns the element in that position If the matrix is flagged as Unit and the element is in the diagonal returns one",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "elemUnit_m",
          "normalized": "Int-\u003eInt-\u003eUnitType(a b)-\u003eb",
          "package": "fpnla",
          "partial": "Unit",
          "signature": "Int-\u003eInt-\u003eUnitType(m e)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:elemUnit_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the conjugate of a number. For real numbers it's the identity function and for complex numbers it's the common \u003ccode\u003e\u003ca\u003econjugate\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "getConjugate",
          "package": "fpnla",
          "signature": "e -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#getConjugate",
          "type": "method"
        },
        "index": {
          "description": "Returns the conjugate of number For real numbers it the identity function and for complex numbers it the common conjugate function",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "getConjugate",
          "normalized": "a-\u003ea",
          "package": "fpnla",
          "partial": "Conjugate",
          "signature": "e-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:getConjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a matrix from a \u003ccode\u003e\u003ca\u003eResM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataM",
          "package": "fpnla",
          "signature": "ResM s v m e -\u003e m e",
          "source": "src/FPNLA-Operations-Parameters.html#getResultDataM",
          "type": "function"
        },
        "index": {
          "description": "Unwrap matrix from ResM",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataM",
          "normalized": "ResM a b c d-\u003ec d",
          "package": "fpnla",
          "partial": "Result Data",
          "signature": "ResM s v m e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:getResultDataM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a scalar from a \u003ccode\u003e\u003ca\u003eResS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataS",
          "package": "fpnla",
          "signature": "ResS s e -\u003e e",
          "source": "src/FPNLA-Operations-Parameters.html#getResultDataS",
          "type": "function"
        },
        "index": {
          "description": "Unwrap scalar from ResS",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataS",
          "normalized": "ResS a b-\u003eb",
          "package": "fpnla",
          "partial": "Result Data",
          "signature": "ResS s e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:getResultDataS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a vector from a \u003ccode\u003e\u003ca\u003eResV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataV",
          "package": "fpnla",
          "signature": "ResV s v e -\u003e v e",
          "source": "src/FPNLA-Operations-Parameters.html#getResultDataV",
          "type": "function"
        },
        "index": {
          "description": "Unwrap vector from ResV",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "getResultDataV",
          "normalized": "ResV a b c-\u003eb c",
          "package": "fpnla",
          "partial": "Result Data",
          "signature": "ResV s v e-\u003ev e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:getResultDataV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a TransType flagged matrix, computes and returns its transpose.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "transTrans_m",
          "package": "fpnla",
          "signature": "TransType (m e) -\u003e m e",
          "source": "src/FPNLA-Operations-Parameters.html#transTrans_m",
          "type": "function"
        },
        "index": {
          "description": "Given TransType flagged matrix computes and returns its transpose",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "transTrans_m",
          "normalized": "TransType(a b)-\u003ea b",
          "package": "fpnla",
          "partial": "Trans",
          "signature": "TransType(m e)-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:transTrans_m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a data type flagged by a TransType, returns a pair containing the TransType constructor and the data type.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "unTransT",
          "package": "fpnla",
          "signature": "TransType a -\u003e (b -\u003e TransType b, a)",
          "source": "src/FPNLA-Operations-Parameters.html#unTransT",
          "type": "function"
        },
        "index": {
          "description": "Given data type flagged by TransType returns pair containing the TransType constructor and the data type",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "unTransT",
          "normalized": "TransType a-\u003e(b-\u003eTransType b,a)",
          "package": "fpnla",
          "partial": "Trans",
          "signature": "TransType a-\u003e(b-\u003eTransType b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:unTransT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a data type flagged by a TriangType, returns a pair containing the TriangType constructor and the data type.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "unTriangT",
          "package": "fpnla",
          "signature": "TriangType a -\u003e (b -\u003e TriangType b, a)",
          "source": "src/FPNLA-Operations-Parameters.html#unTriangT",
          "type": "function"
        },
        "index": {
          "description": "Given data type flagged by TriangType returns pair containing the TriangType constructor and the data type",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "unTriangT",
          "normalized": "TriangType a-\u003e(b-\u003eTriangType b,a)",
          "package": "fpnla",
          "partial": "Triang",
          "signature": "TriangType a-\u003e(b-\u003eTriangType b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:unTriangT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a data type flagged by a UnitType, returns a pair containing the UnitType constructor and the data type.\n\u003c/p\u003e",
          "module": "FPNLA.Operations.Parameters",
          "name": "unUnitT",
          "package": "fpnla",
          "signature": "UnitType a -\u003e (b -\u003e UnitType b, a)",
          "source": "src/FPNLA-Operations-Parameters.html#unUnitT",
          "type": "function"
        },
        "index": {
          "description": "Given data type flagged by UnitType returns pair containing the UnitType constructor and the data type",
          "hierarchy": "FPNLA Operations Parameters",
          "module": "FPNLA.Operations.Parameters",
          "name": "unUnitT",
          "normalized": "UnitType a-\u003e(b-\u003eUnitType b,a)",
          "package": "fpnla",
          "partial": "Unit",
          "signature": "UnitType a-\u003e(b-\u003eUnitType b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpnla/docs/FPNLA-Operations-Parameters.html#v:unUnitT"
      }
    }
  ]
]