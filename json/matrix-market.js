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
        "word": "matrix-market"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write matrices and vectors in the Matrix Market format\n (see http://math.nist.gov/MatrixMarket/).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "MatrixMarket",
          "package": "matrix-market",
          "source": "src/System-IO-MatrixMarket.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write matrices and vectors in the Matrix Market format see http math.nist.gov MatrixMarket",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "MatrixMarket",
          "package": "matrix-market",
          "partial": "Matrix Market",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the element type.  Pattern matrices do not have any \n elements, only indices, and only make sense for coordinate matrices and\n vectors.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "Field",
          "package": "matrix-market",
          "source": "src/System-IO-MatrixMarket.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Specifies the element type Pattern matrices do not have any elements only indices and only make sense for coordinate matrices and vectors",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Field",
          "package": "matrix-market",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies either sparse or dense storage.  In sparse (\"coordinate\") \n storage, elements are given in (i,j,x) triplets for matrices (or (i,x) \n for vectors).  Indices are 1-based, so that A(1,1) is the first element of\n a matrix, and x(1) is the first element of a vector.\n\u003c/p\u003e\u003cp\u003eIn dense (\"array\") storage, elements are given in column-major order.\n\u003c/p\u003e\u003cp\u003eIn both cases, each element is given on a separate line.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "Format",
          "package": "matrix-market",
          "source": "src/System-IO-MatrixMarket.html#Format",
          "type": "data"
        },
        "index": {
          "description": "Specifies either sparse or dense storage In sparse coordinate storage elements are given in triplets for matrices or for vectors Indices are based so that is the first element of matrix and is the first element of vector In dense array storage elements are given in column-major order In both cases each element is given on separate line",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Format",
          "package": "matrix-market",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies any special structure in the matrix.  For symmetric and \n hermition matrices, only the lower-triangular part of the matrix is given.\n For skew matrices, only the entries below the diagonal are stored.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "Type",
          "package": "matrix-market",
          "source": "src/System-IO-MatrixMarket.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Specifies any special structure in the matrix For symmetric and hermition matrices only the lower-triangular part of the matrix is given For skew matrices only the entries below the diagonal are stored",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Type",
          "package": "matrix-market",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Array",
          "package": "matrix-market",
          "signature": "Array",
          "source": "src/System-IO-MatrixMarket.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Array",
          "package": "matrix-market",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Complex",
          "package": "matrix-market",
          "signature": "Complex",
          "source": "src/System-IO-MatrixMarket.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Complex",
          "package": "matrix-market",
          "partial": "Complex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Coordinate",
          "package": "matrix-market",
          "signature": "Coordinate",
          "source": "src/System-IO-MatrixMarket.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Coordinate",
          "package": "matrix-market",
          "partial": "Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Coordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "General",
          "package": "matrix-market",
          "signature": "General",
          "source": "src/System-IO-MatrixMarket.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "General",
          "package": "matrix-market",
          "partial": "General",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:General"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Hermitian",
          "package": "matrix-market",
          "signature": "Hermitian",
          "source": "src/System-IO-MatrixMarket.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Hermitian",
          "package": "matrix-market",
          "partial": "Hermitian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Hermitian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Integer",
          "package": "matrix-market",
          "signature": "Integer",
          "source": "src/System-IO-MatrixMarket.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Integer",
          "package": "matrix-market",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Pattern",
          "package": "matrix-market",
          "signature": "Pattern",
          "source": "src/System-IO-MatrixMarket.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Pattern",
          "package": "matrix-market",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Real",
          "package": "matrix-market",
          "signature": "Real",
          "source": "src/System-IO-MatrixMarket.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Real",
          "package": "matrix-market",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Skew",
          "package": "matrix-market",
          "signature": "Skew",
          "source": "src/System-IO-MatrixMarket.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Skew",
          "package": "matrix-market",
          "partial": "Skew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Skew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.MatrixMarket",
          "name": "Symmetric",
          "package": "matrix-market",
          "signature": "Symmetric",
          "source": "src/System-IO-MatrixMarket.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "Symmetric",
          "package": "matrix-market",
          "partial": "Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:Symmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line-comment character (\u003ccode\u003e%\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "commentChar",
          "package": "matrix-market",
          "signature": "Char",
          "source": "src/System-IO-MatrixMarket.html#commentChar",
          "type": "function"
        },
        "index": {
          "description": "The line-comment character",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "commentChar",
          "package": "matrix-market",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:commentChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the Matrix Market banner (including comments) from a file.  The\n comments and the banner information are returned.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetBanner",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Format, Field, Type, String)",
          "source": "src/System-IO-MatrixMarket.html#hGetBanner",
          "type": "function"
        },
        "index": {
          "description": "Read the Matrix Market banner including comments from file The comments and the banner information are returned",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetBanner",
          "normalized": "Handle-\u003eIO(Format,Field,Type,String)",
          "package": "matrix-market",
          "partial": "Get Banner",
          "signature": "Handle-\u003eIO(Format,Field,Type,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetBanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the comments from a file, stripping the leading '%' from each\n line, until reaching a line that does not start with the comment character.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetComments",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-MatrixMarket.html#hGetComments",
          "type": "function"
        },
        "index": {
          "description": "Read the comments from file stripping the leading from each line until reaching line that does not start with the comment character",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetComments",
          "normalized": "Handle-\u003eIO String",
          "package": "matrix-market",
          "partial": "Get Comments",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a coordinate matrix from a file.  The matrix field, type, shape\n size,and elements are returned.  The files contents lazily, and the file is\n put in a semi-closed state.  If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, only the indices are \n returned.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetCoordMatrix",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Field, Type, (Int, Int), Int, Either [(Int, Int)] [((Int, Int), a)])",
          "source": "src/System-IO-MatrixMarket.html#hGetCoordMatrix",
          "type": "function"
        },
        "index": {
          "description": "Lazily read coordinate matrix from file The matrix field type shape size and elements are returned The files contents lazily and the file is put in semi-closed state If the field is Pattern only the indices are returned",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetCoordMatrix",
          "normalized": "Handle-\u003eIO(Field,Type,(Int,Int),Int,Either[(Int,Int)][((Int,Int),a)])",
          "package": "matrix-market",
          "partial": "Get Coord Matrix",
          "signature": "Handle-\u003eIO(Field,Type,(Int,Int),Int,Either[(Int,Int)][((Int,Int),a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetCoordMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a coordinate vector from a file.  The vector field, dimension, \n size, and elements are returned.  The file is put in a semi-clased state and\n the elements are read lazily.  If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, only a list of \n indices is returned.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetCoordVector",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Field, Int, Int, Either [Int] [(Int, a)])",
          "source": "src/System-IO-MatrixMarket.html#hGetCoordVector",
          "type": "function"
        },
        "index": {
          "description": "Lazily read coordinate vector from file The vector field dimension size and elements are returned The file is put in semi-clased state and the elements are read lazily If the field is Pattern only list of indices is returned",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetCoordVector",
          "normalized": "Handle-\u003eIO(Field,Int,Int,Either[Int][(Int,a)])",
          "package": "matrix-market",
          "partial": "Get Coord Vector",
          "signature": "Handle-\u003eIO(Field,Int,Int,Either[Int][(Int,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetCoordVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the Matrix Market header from a file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetHeader",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Format, Field, Type)",
          "source": "src/System-IO-MatrixMarket.html#hGetHeader",
          "type": "function"
        },
        "index": {
          "description": "Read the Matrix Market header from file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetHeader",
          "normalized": "Handle-\u003eIO(Format,Field,Type)",
          "package": "matrix-market",
          "partial": "Get Header",
          "signature": "Handle-\u003eIO(Format,Field,Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a dense matrix from a file, returning the matrix field, type,\n shape and elements in column-major order.  The elements are read laxily, and\n the file is put in a semi-closed state.  If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003eNothing\u003c/code\u003e is returned instead of an element list.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetMatrix",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Field, Type, (Int, Int), Maybe [a])",
          "source": "src/System-IO-MatrixMarket.html#hGetMatrix",
          "type": "function"
        },
        "index": {
          "description": "Lazily read dense matrix from file returning the matrix field type shape and elements in column-major order The elements are read laxily and the file is put in semi-closed state If the field is Pattern Nothing is returned instead of an element list",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetMatrix",
          "normalized": "Handle-\u003eIO(Field,Type,(Int,Int),Maybe[a])",
          "package": "matrix-market",
          "partial": "Get Matrix",
          "signature": "Handle-\u003eIO(Field,Type,(Int,Int),Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a dense vector from a file.  The vector field, dimension\n and elements are returned.  The file is put in a semi-closed state and\n the elements are read lazily.  If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, the elements \n list will be \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hGetVector",
          "package": "matrix-market",
          "signature": "Handle -\u003e IO (Field, Int, Maybe [a])",
          "source": "src/System-IO-MatrixMarket.html#hGetVector",
          "type": "function"
        },
        "index": {
          "description": "Lazily read dense vector from file The vector field dimension and elements are returned The file is put in semi-closed state and the elements are read lazily If the field is Pattern the elements list will be Nothing",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hGetVector",
          "normalized": "Handle-\u003eIO(Field,Int,Maybe[a])",
          "package": "matrix-market",
          "partial": "Get Vector",
          "signature": "Handle-\u003eIO(Field,Int,Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hGetVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out a header and comments for a Matrix Market matrix.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutBanner",
          "package": "matrix-market",
          "signature": "Handle -\u003e Format -\u003e Field -\u003e Type -\u003e String -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutBanner",
          "type": "function"
        },
        "index": {
          "description": "Write out header and comments for Matrix Market matrix",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutBanner",
          "normalized": "Handle-\u003eFormat-\u003eField-\u003eType-\u003eString-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Banner",
          "signature": "Handle-\u003eFormat-\u003eField-\u003eType-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutBanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string as a Matrix Market file comment.  This prepends each line\n with '%' and then writes it out to the file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutComments",
          "package": "matrix-market",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutComments",
          "type": "function"
        },
        "index": {
          "description": "Write string as Matrix Market file comment This prepends each line with and then writes it out to the file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutComments",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Comments",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a coordinate matrix with the given shape and size to a file.  The\n indices are 1-based, so that A(1,1) is the first element of the matrix.\n If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, only the indices are used.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordMatrix",
          "package": "matrix-market",
          "signature": "Handle -\u003e Field -\u003e Type -\u003e (Int, Int) -\u003e Int -\u003e [((Int, Int), a)] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutCoordMatrix",
          "type": "function"
        },
        "index": {
          "description": "Write coordinate matrix with the given shape and size to file The indices are based so that is the first element of the matrix If the field is Pattern only the indices are used",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordMatrix",
          "normalized": "Handle-\u003eField-\u003eType-\u003e(Int,Int)-\u003eInt-\u003e[((Int,Int),a)]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Coord Matrix",
          "signature": "Handle-\u003eField-\u003eType-\u003e(Int,Int)-\u003eInt-\u003e[((Int,Int),a)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutCoordMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a coordinate matrix along with a description, which is put in the\n comment section of the file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordMatrixWithDesc",
          "package": "matrix-market",
          "signature": "Handle -\u003e String -\u003e Field -\u003e Type -\u003e (Int, Int) -\u003e Int -\u003e [((Int, Int), a)] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutCoordMatrixWithDesc",
          "type": "function"
        },
        "index": {
          "description": "Write coordinate matrix along with description which is put in the comment section of the file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordMatrixWithDesc",
          "normalized": "Handle-\u003eString-\u003eField-\u003eType-\u003e(Int,Int)-\u003eInt-\u003e[((Int,Int),a)]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Coord Matrix With Desc",
          "signature": "Handle-\u003eString-\u003eField-\u003eType-\u003e(Int,Int)-\u003eInt-\u003e[((Int,Int),a)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutCoordMatrixWithDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a coordinate vector with the given dimension and size to a file.\n The indices are 1-based, so that x(1) is the first element of the vector.\n If the field is \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, only the indices are used.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordVector",
          "package": "matrix-market",
          "signature": "Handle -\u003e Field -\u003e Int -\u003e Int -\u003e [(Int, a)] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutCoordVector",
          "type": "function"
        },
        "index": {
          "description": "Write coordinate vector with the given dimension and size to file The indices are based so that is the first element of the vector If the field is Pattern only the indices are used",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordVector",
          "normalized": "Handle-\u003eField-\u003eInt-\u003eInt-\u003e[(Int,a)]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Coord Vector",
          "signature": "Handle-\u003eField-\u003eInt-\u003eInt-\u003e[(Int,a)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutCoordVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a coordinate vector along with a description, which is put in the\n comment section of the file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordVectorWithDesc",
          "package": "matrix-market",
          "signature": "Handle -\u003e String -\u003e Field -\u003e Int -\u003e Int -\u003e [(Int, a)] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutCoordVectorWithDesc",
          "type": "function"
        },
        "index": {
          "description": "Write coordinate vector along with description which is put in the comment section of the file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutCoordVectorWithDesc",
          "normalized": "Handle-\u003eString-\u003eField-\u003eInt-\u003eInt-\u003e[(Int,a)]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Coord Vector With Desc",
          "signature": "Handle-\u003eString-\u003eField-\u003eInt-\u003eInt-\u003e[(Int,a)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutCoordVectorWithDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Matrix Market header for a matrix to a file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutHeader",
          "package": "matrix-market",
          "signature": "Handle -\u003e Format -\u003e Field -\u003e Type -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutHeader",
          "type": "function"
        },
        "index": {
          "description": "Write Matrix Market header for matrix to file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutHeader",
          "normalized": "Handle-\u003eFormat-\u003eField-\u003eType-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Header",
          "signature": "Handle-\u003eFormat-\u003eField-\u003eType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dense matrix with the given shape and elements in column-major\n order to a file. If the field is given as \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, no elements are \n written, only the header and size.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutMatrix",
          "package": "matrix-market",
          "signature": "Handle -\u003e Field -\u003e Type -\u003e (Int, Int) -\u003e [a] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutMatrix",
          "type": "function"
        },
        "index": {
          "description": "Write dense matrix with the given shape and elements in column-major order to file If the field is given as Pattern no elements are written only the header and size",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutMatrix",
          "normalized": "Handle-\u003eField-\u003eType-\u003e(Int,Int)-\u003e[a]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Matrix",
          "signature": "Handle-\u003eField-\u003eType-\u003e(Int,Int)-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dense matrix along with a description, which is put in the\n comment section of the file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutMatrixWithDesc",
          "package": "matrix-market",
          "signature": "Handle -\u003e String -\u003e Field -\u003e Type -\u003e (Int, Int) -\u003e [a] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutMatrixWithDesc",
          "type": "function"
        },
        "index": {
          "description": "Write dense matrix along with description which is put in the comment section of the file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutMatrixWithDesc",
          "normalized": "Handle-\u003eString-\u003eField-\u003eType-\u003e(Int,Int)-\u003e[a]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Matrix With Desc",
          "signature": "Handle-\u003eString-\u003eField-\u003eType-\u003e(Int,Int)-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutMatrixWithDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dense vector with the given dimension and elements to a file.\n If the field is given as \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, no elements are written, only the \n header and size.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutVector",
          "package": "matrix-market",
          "signature": "Handle -\u003e Field -\u003e Int -\u003e [a] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutVector",
          "type": "function"
        },
        "index": {
          "description": "Write dense vector with the given dimension and elements to file If the field is given as Pattern no elements are written only the header and size",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutVector",
          "normalized": "Handle-\u003eField-\u003eInt-\u003e[a]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Vector",
          "signature": "Handle-\u003eField-\u003eInt-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a dense vector along with a description, which is put in the\n comment section of the file.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "hPutVectorWithDesc",
          "package": "matrix-market",
          "signature": "Handle -\u003e String -\u003e Field -\u003e Int -\u003e [a] -\u003e IO ()",
          "source": "src/System-IO-MatrixMarket.html#hPutVectorWithDesc",
          "type": "function"
        },
        "index": {
          "description": "Write dense vector along with description which is put in the comment section of the file",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "hPutVectorWithDesc",
          "normalized": "Handle-\u003eString-\u003eField-\u003eInt-\u003e[a]-\u003eIO()",
          "package": "matrix-market",
          "partial": "Put Vector With Desc",
          "signature": "Handle-\u003eString-\u003eField-\u003eInt-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:hPutVectorWithDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Matrix Market header from a string.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "readHeader",
          "package": "matrix-market",
          "signature": "String -\u003e (Format, Field, Type)",
          "source": "src/System-IO-MatrixMarket.html#readHeader",
          "type": "function"
        },
        "index": {
          "description": "Read Matrix Market header from string",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "readHeader",
          "normalized": "String-\u003e(Format,Field,Type)",
          "package": "matrix-market",
          "partial": "Header",
          "signature": "String-\u003e(Format,Field,Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:readHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the Matrix Market header string for the given matrix type.\n\u003c/p\u003e",
          "module": "System.IO.MatrixMarket",
          "name": "showHeader",
          "package": "matrix-market",
          "signature": "Format -\u003e Field -\u003e Type -\u003e String",
          "source": "src/System-IO-MatrixMarket.html#showHeader",
          "type": "function"
        },
        "index": {
          "description": "Give the Matrix Market header string for the given matrix type",
          "hierarchy": "System IO MatrixMarket",
          "module": "System.IO.MatrixMarket",
          "name": "showHeader",
          "normalized": "Format-\u003eField-\u003eType-\u003eString",
          "package": "matrix-market",
          "partial": "Header",
          "signature": "Format-\u003eField-\u003eType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market/docs/System-IO-MatrixMarket.html#v:showHeader"
      }
    }
  ]
]