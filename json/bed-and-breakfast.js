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
        "word": "bed-and-breakfast"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix.Sugar",
          "name": "Sugar",
          "package": "bed-and-breakfast",
          "source": "src/Numeric-Matrix-Sugar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Matrix Sugar",
          "module": "Numeric.Matrix.Sugar",
          "name": "Sugar",
          "package": "bed-and-breakfast",
          "partial": "Sugar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix-Sugar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix.Sugar",
          "name": "dMatrix",
          "package": "bed-and-breakfast",
          "signature": "QuasiQuoter",
          "source": "src/Numeric-Matrix-Sugar.html#dMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Matrix Sugar",
          "module": "Numeric.Matrix.Sugar",
          "name": "dMatrix",
          "package": "bed-and-breakfast",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix-Sugar.html#v:dMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix.Sugar",
          "name": "iMatrix",
          "package": "bed-and-breakfast",
          "signature": "QuasiQuoter",
          "source": "src/Numeric-Matrix-Sugar.html#iMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Matrix Sugar",
          "module": "Numeric.Matrix.Sugar",
          "name": "iMatrix",
          "package": "bed-and-breakfast",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix-Sugar.html#v:iMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient matrix operations in 100% pure Haskell.\n\u003c/p\u003e\u003cp\u003eThis package uses miscellaneous implementations,\n depending on the type of its components. Typically unboxed\n arrays will perform best, while unboxed arrays give you\n certain features such as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e components.\n\u003c/p\u003e\u003cp\u003eThe following component types are supported by \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eInt\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Uses unboxed arrays internally. \u003ccode\u003e\u003ca\u003einv\u003c/a\u003e\u003c/code\u003e will always\n      return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eInteger\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Uses boxed arrays internally. \u003ccode\u003e\u003ca\u003einv\u003c/a\u003e\u003c/code\u003e will always\n      return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDouble\u003c/code\u003e and \u003ccode\u003eFloat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Uses unboxed arrays internally.\n      All matrix operations will work as expected.\n      \u003ccode\u003eMatrix Double\u003c/code\u003e will probably yield the best peformance.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRational\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Best choice if precision is what you aim for.\n      Uses boxed arrays internally. All matrix operations will\n      work as expected.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eComplex\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Experimental. Uses boxed arrays internally.\n      The current implementation of \u003ccode\u003e\u003ca\u003einv\u003c/a\u003e\u003c/code\u003e requires an instance\n      of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e for the component type, therefor it is currently\n      not possible to calculate the inverse of a complex matrix\n      (on my to do list).\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "bed-and-breakfast",
          "source": "src/Numeric-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient matrix operations in pure Haskell This package uses miscellaneous implementations depending on the type of its components Typically unboxed arrays will perform best while unboxed arrays give you certain features such as Rational or Complex components The following component types are supported by Matrix Int Uses unboxed arrays internally inv will always return Nothing Integer Uses boxed arrays internally inv will always return Nothing Double and Float Uses unboxed arrays internally All matrix operations will work as expected Matrix Double will probably yield the best peformance Rational Best choice if precision is what you aim for Uses boxed arrays internally All matrix operations will work as expected Complex Experimental Uses boxed arrays internally The current implementation of inv requires an instance of Ord for the component type therefor it is currently not possible to calculate the inverse of complex matrix on my to do list",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "bed-and-breakfast",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrices are represented by a type which fits best the component type.\n For example a \u003ccode\u003eMatrix Double\u003c/code\u003e is represented by unboxed arrays,\n \u003ccode\u003eMatrix Integer\u003c/code\u003e by boxed arrays.\n\u003c/p\u003e\u003cp\u003eData instances exist for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e. Certain types do have certain disadvantages, like for\n example you can not compute the inverse matrix of a \u003ccode\u003eMatrix Int\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery matrix (regardless of the component type) has instances for\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e. This means that you can use arithmetic operations like\n \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, as well as functions like \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eread\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eShow (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n Note that a Show instance for the component type \u003ccode\u003ee\u003c/code\u003e must exist.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRead (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n You can read a matrix like so:\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e read \"1 0\\n0 1\\n\" :: Matrix Double\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eNum (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e will compute the determinant and return the signum\n of it.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e applies \u003ccode\u003emap abs\u003c/code\u003e on the matrix (that is, it applies\n \u003ccode\u003eabs\u003c/code\u003e on every component in the matrix and returns a new\n matrix without negative components).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efromInteger\u003c/code\u003e yields a 1-x-1-matrix.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eFractional (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n Only available if there exists an instance \u003ccode\u003eFractional e\u003c/code\u003e\n (the component type needs to have a \u003ccode\u003eFractional\u003c/code\u003e instance, too).\n Note that while the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e operations are safe, \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e will fail (with an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e) if the involved matrix is\n not invertible or not a square matrix.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eNFData (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n Matrices have instances for NFData so that you can use a\n matrix in parallel computations using the \u003ccode\u003eControl.Monad.Par\u003c/code\u003e\n monad (see the \u003ccode\u003emonad-par\u003c/code\u003e package for details).\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eTypeable (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n Allows you to use matrices as \u003ccode\u003eDynamic\u003c/code\u003e values.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eBinary (Matrix e)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n Serialize and unserialize matrices using the \u003ccode\u003ebinary\u003c/code\u003e package.\n See \u003ccode\u003eencode\u003c/code\u003e and \u003ccode\u003edecode\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "bed-and-breakfast",
          "signature": "Matrix",
          "type": "function"
        },
        "index": {
          "description": "Matrices are represented by type which fits best the component type For example Matrix Double is represented by unboxed arrays Matrix Integer by boxed arrays Data instances exist for Int Float Double Integer Ratio and Complex Certain types do have certain disadvantages like for example you can not compute the inverse matrix of Matrix Int Every matrix regardless of the component type has instances for Show Read Num Fractional Eq Typeable Binary and NFData This means that you can use arithmetic operations like and as well as functions like show read or typeOf Show Matrix Note that Show instance for the component type must exist Read Matrix You can read matrix like so read n0 Matrix Double Num Matrix negate abs signum and fromInteger signum will compute the determinant and return the signum of it abs applies map abs on the matrix that is it applies abs on every component in the matrix and returns new matrix without negative components fromInteger yields x-1-matrix Fractional Matrix Only available if there exists an instance Fractional the component type needs to have Fractional instance too Note that while the Num operations are safe recip and will fail with an error if the involved matrix is not invertible or not square matrix NFData Matrix Matrices have instances for NFData so that you can use matrix in parallel computations using the Control.Monad.Par monad see the monad-par package for details Typeable Matrix Allows you to use matrices as Dynamic values Binary Matrix Serialize and unserialize matrices using the binary package See encode and decode",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "Matrix",
          "package": "bed-and-breakfast",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "MatrixElement",
          "package": "bed-and-breakfast",
          "source": "src/Numeric-Matrix.html#MatrixElement",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "MatrixElement",
          "package": "bed-and-breakfast",
          "partial": "Matrix Element",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#t:MatrixElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins two matrices horizontally.\n\u003c/p\u003e\u003cpre\u003e 1 2 3     1 0 0      1 2 3 1 0 0\n 3 4 5 \u003c|\u003e 2 1 0  -\u003e  3 4 5 2 1 0\n 5 6 7     3 2 1      5 6 7 3 2 1\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "(\u003c|\u003e)",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Joins two matrices horizontally",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e-\u003eMatrix e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins two matrices vertically.\n\u003c/p\u003e\u003cpre\u003e 1 2 3     1 0 0      1 2 3\n 3 4 5 \u003c-\u003e 2 1 0  -\u003e  3 4 5\n 5 6 7     3 2 1      5 6 7\n                      1 0 0\n                      2 1 0\n                      3 2 1\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "(\u003c-\u003e)",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Joins two matrices vertically",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e-\u003eMatrix e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "adjugate",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#adjugate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "adjugate",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:adjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a predicate on every component in the matrix\n and returns True iff all components satisfy it.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "all",
          "package": "bed-and-breakfast",
          "signature": "(e -\u003e Bool) -\u003e Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#all",
          "type": "method"
        },
        "index": {
          "description": "Apply predicate on every component in the matrix and returns True iff all components satisfy it",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eMatrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "signature": "(e-\u003eBool)-\u003eMatrix e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "allWithIndex",
          "package": "bed-and-breakfast",
          "signature": "((Int, Int) -\u003e e -\u003e Bool) -\u003e Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#allWithIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "allWithIndex",
          "normalized": "((Int,Int)-\u003ea-\u003eBool)-\u003eMatrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "With Index",
          "signature": "((Int,Int)-\u003ee-\u003eBool)-\u003eMatrix e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:allWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a predicate on every component in the matrix\n and return True if one or more components satisfy it.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "any",
          "package": "bed-and-breakfast",
          "signature": "(e -\u003e Bool) -\u003e Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#any",
          "type": "method"
        },
        "index": {
          "description": "Apply predicate on every component in the matrix and return True if one or more components satisfy it",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eMatrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "signature": "(e-\u003eBool)-\u003eMatrix e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "anyWithIndex",
          "package": "bed-and-breakfast",
          "signature": "((Int, Int) -\u003e e -\u003e Bool) -\u003e Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#anyWithIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "anyWithIndex",
          "normalized": "((Int,Int)-\u003ea-\u003eBool)-\u003eMatrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "With Index",
          "signature": "((Int,Int)-\u003ee-\u003eBool)-\u003eMatrix e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:anyWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the component at the given position in the matrix.\n Note that indices start at one, not at zero.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "at",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e (Int, Int) -\u003e e",
          "source": "src/Numeric-Matrix.html#at",
          "type": "method"
        },
        "index": {
          "description": "Returns the component at the given position in the matrix Note that indices start at one not at zero",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "at",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003e(Int,Int)-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "cofactors",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#cofactors",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "cofactors",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:cofactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the row at the given index in the matrix.\n Note that indices start at one, not at zero.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "col",
          "package": "bed-and-breakfast",
          "signature": "Int -\u003e Matrix e -\u003e [e]",
          "source": "src/Numeric-Matrix.html#col",
          "type": "method"
        },
        "index": {
          "description": "Returns the row at the given index in the matrix Note that indices start at one not at zero",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "col",
          "normalized": "Int-\u003eMatrix a-\u003e[a]",
          "package": "bed-and-breakfast",
          "signature": "Int-\u003eMatrix e-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies Bareiss multistep integer-preserving\n algorithm for finding the determinant of a matrix.\n Returns 0 if the matrix is not a square matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "det",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e e",
          "source": "src/Numeric-Matrix.html#det",
          "type": "method"
        },
        "index": {
          "description": "Applies Bareiss multistep integer-preserving algorithm for finding the determinant of matrix Returns if the matrix is not square matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "det",
          "normalized": "Matrix a-\u003ea",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square matrix which trace is the given list, all other components\n set to zero.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediag [1,4,7,9]\n\u003c/code\u003e\u003c/strong\u003e1 0 0 0\n0 4 0 0\n0 0 7 0\n0 0 0 9\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "diag",
          "package": "bed-and-breakfast",
          "signature": "[e] -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#diag",
          "type": "method"
        },
        "index": {
          "description": "square matrix which trace is the given list all other components set to zero diag",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "diag",
          "normalized": "[a]-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "[e]-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dimensions of a given matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "dimensions",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e (Int, Int)",
          "source": "src/Numeric-Matrix.html#dimensions",
          "type": "method"
        },
        "index": {
          "description": "The dimensions of given matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "dimensions",
          "normalized": "Matrix a-\u003e(Int,Int)",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:dimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the matrix is the empty matrix.\n\u003c/p\u003e\u003cpre\u003e dimensions empty == (0, 0)\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "empty",
          "package": "bed-and-breakfast",
          "signature": "Matrix e",
          "source": "src/Numeric-Matrix.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Check whether the matrix is the empty matrix dimensions empty",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "empty",
          "package": "bed-and-breakfast",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a matrix from a list of lists.\n\u003c/p\u003e\u003cp\u003eThe innermost lists represent the rows. This function will create a m-n-matrix,\n where m is the number of rows, which is the minimum length of the row lists\n and n is the number of columns, i.e. the length of the outer list.\n\u003c/p\u003e\u003cpre\u003e fromList [[1,2,3],[2,1,3],[3,2,1]] :: Matrix Rational\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "fromList",
          "package": "bed-and-breakfast",
          "signature": "[[e]] -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Builds matrix from list of lists The innermost lists represent the rows This function will create m-n-matrix where is the number of rows which is the minimum length of the row lists and is the number of columns i.e the length of the outer list fromList Matrix Rational",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "fromList",
          "normalized": "[[a]]-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "partial": "List",
          "signature": "[[e]]-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the inverse of a matrix. Returns \u003ccode\u003eNothing\u003c/code\u003e\n if the matrix is not invertible.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "inv",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Maybe (Matrix e)",
          "source": "src/Numeric-Matrix.html#inv",
          "type": "method"
        },
        "index": {
          "description": "Compute the inverse of matrix Returns Nothing if the matrix is not invertible",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "inv",
          "normalized": "Matrix a-\u003eMaybe(Matrix a)",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMaybe(Matrix e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the matrix is a diagonal matrix.\n\u003c/p\u003e\u003cpre\u003e 4 0 0 0\n 0 7 0 0\n 0 0 3 0\n 0 0 0 9 (True)\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "isDiagonal",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#isDiagonal",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the matrix is diagonal matrix True",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "isDiagonal",
          "normalized": "Matrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "Diagonal",
          "signature": "Matrix e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:isDiagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the matrix is empty.\n\u003c/p\u003e\u003cpre\u003e isEmpty m = numCols == 0 || numRows == 0\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "isEmpty",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the matrix is empty isEmpty numCols numRows",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "isEmpty",
          "normalized": "Matrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "Empty",
          "signature": "Matrix e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the matrix is a square matrix.\n\u003c/p\u003e\u003cpre\u003e isSquare == uncurry (==) . dimensions\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "isSquare",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#isSquare",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the matrix is square matrix isSquare uncurry dimensions",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "isSquare",
          "normalized": "Matrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "Square",
          "signature": "Matrix e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:isSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the matrix is an identity matrix.\n\u003c/p\u003e\u003cpre\u003e 1 0 0\n 0 1 0\n 0 0 1 (True)\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "isUnit",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#isUnit",
          "type": "function"
        },
        "index": {
          "description": "Check whether the matrix is an identity matrix True",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "isUnit",
          "normalized": "Matrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "Unit",
          "signature": "Matrix e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:isUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the matrix consists of all zeros.\n\u003c/p\u003e\u003cpre\u003e isZero == all (== 0)\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "isZero",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Bool",
          "source": "src/Numeric-Matrix.html#isZero",
          "type": "function"
        },
        "index": {
          "description": "Check whether the matrix consists of all zeros isZero all",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "isZero",
          "normalized": "Matrix a-\u003eBool",
          "package": "bed-and-breakfast",
          "partial": "Zero",
          "signature": "Matrix e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function on every component in the matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "map",
          "package": "bed-and-breakfast",
          "signature": "(e -\u003e f) -\u003e Matrix e -\u003e Matrix f",
          "source": "src/Numeric-Matrix.html#map",
          "type": "method"
        },
        "index": {
          "description": "Apply function on every component in the matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eMatrix a-\u003eMatrix b",
          "package": "bed-and-breakfast",
          "signature": "(e-\u003ef)-\u003eMatrix e-\u003eMatrix f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "mapWithIndex",
          "package": "bed-and-breakfast",
          "signature": "((Int, Int) -\u003e e -\u003e f) -\u003e Matrix e -\u003e Matrix f",
          "source": "src/Numeric-Matrix.html#mapWithIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "mapWithIndex",
          "normalized": "((Int,Int)-\u003ea-\u003eb)-\u003eMatrix a-\u003eMatrix b",
          "package": "bed-and-breakfast",
          "partial": "With Index",
          "signature": "((Int,Int)-\u003ee-\u003ef)-\u003eMatrix e-\u003eMatrix f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:mapWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a matrix of the given size using a generator\n function for the value of each component.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "matrix",
          "package": "bed-and-breakfast",
          "signature": "(Int, Int) -\u003e ((Int, Int) -\u003e e) -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#matrix",
          "type": "method"
        },
        "index": {
          "description": "Creates matrix of the given size using generator function for the value of each component",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "matrix",
          "normalized": "(Int,Int)-\u003e((Int,Int)-\u003ea)-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "(Int,Int)-\u003e((Int,Int)-\u003ee)-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "minor",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e (Int, Int) -\u003e e",
          "source": "src/Numeric-Matrix.html#minor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "minor",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003e(Int,Int)-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "minorMatrix",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e (Int, Int) -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#minorMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "minorMatrix",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "partial": "Matrix",
          "signature": "Matrix e-\u003e(Int,Int)-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:minorMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract a matrix from another.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "minus",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#minus",
          "type": "method"
        },
        "index": {
          "description": "Subtract matrix from another",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "minus",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of columns in the given matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "numCols",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Int",
          "source": "src/Numeric-Matrix.html#numCols",
          "type": "method"
        },
        "index": {
          "description": "The number of columns in the given matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "numCols",
          "normalized": "Matrix a-\u003eInt",
          "package": "bed-and-breakfast",
          "partial": "Cols",
          "signature": "Matrix e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:numCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of rows in the given matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "numRows",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Int",
          "source": "src/Numeric-Matrix.html#numRows",
          "type": "method"
        },
        "index": {
          "description": "The number of rows in the given matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "numRows",
          "normalized": "Matrix a-\u003eInt",
          "package": "bed-and-breakfast",
          "partial": "Rows",
          "signature": "Matrix e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:numRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two matrices.\n\u003c/p\u003e\u003cp\u003eYou may also use the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance for matrices,\n i.e. \u003ccode\u003ematrix1 + matrix2\u003c/code\u003e will work, too.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "plus",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#plus",
          "type": "method"
        },
        "index": {
          "description": "Add two matrices You may also use the Num instance for matrices i.e matrix1 matrix2 will work too",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "plus",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the rank of a matrix.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "rank",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e e",
          "source": "src/Numeric-Matrix.html#rank",
          "type": "method"
        },
        "index": {
          "description": "Compute the rank of matrix",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "rank",
          "normalized": "Matrix a-\u003ea",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the row at the given index in the matrix.\n Note that indices start at one, not at zero.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "row",
          "package": "bed-and-breakfast",
          "signature": "Int -\u003e Matrix e -\u003e [e]",
          "source": "src/Numeric-Matrix.html#row",
          "type": "method"
        },
        "index": {
          "description": "Returns the row at the given index in the matrix Note that indices start at one not at zero",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "row",
          "normalized": "Int-\u003eMatrix a-\u003e[a]",
          "package": "bed-and-breakfast",
          "signature": "Int-\u003eMatrix e-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales a matrix by the given factor.\n\u003c/p\u003e\u003cpre\u003e scale s == map (*s)\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "scale",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Scales matrix by the given factor scale map",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "scale",
          "normalized": "Matrix a-\u003ea-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003ee-\u003eMatrix e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a list from a matrix for the indices for which\n the given predicate matches.\n\u003c/p\u003e\u003cpre\u003e trace == select (uncurry (==))\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "select",
          "package": "bed-and-breakfast",
          "signature": "((Int, Int) -\u003e Bool) -\u003e Matrix e -\u003e [e]",
          "source": "src/Numeric-Matrix.html#select",
          "type": "method"
        },
        "index": {
          "description": "Builds list from matrix for the indices for which the given predicate matches trace select uncurry",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "select",
          "normalized": "((Int,Int)-\u003eBool)-\u003eMatrix a-\u003e[a]",
          "package": "bed-and-breakfast",
          "signature": "((Int,Int)-\u003eBool)-\u003eMatrix e-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two matrices \u003cem\u003eO(n^3)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eYou may also use the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance for matrices,\n i.e. \u003ccode\u003ematrix1 * matrix2\u003c/code\u003e will work, too.\n\u003c/p\u003e",
          "module": "Numeric.Matrix",
          "name": "times",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#times",
          "type": "method"
        },
        "index": {
          "description": "Multiply two matrices You may also use the Num instance for matrices i.e matrix1 matrix2 will work too",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "times",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "toList",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e [[e]]",
          "source": "src/Numeric-Matrix.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "toList",
          "normalized": "Matrix a-\u003e[[a]]",
          "package": "bed-and-breakfast",
          "partial": "List",
          "signature": "Matrix e-\u003e[[e]]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Matrix",
          "name": "trace",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e [e]",
          "source": "src/Numeric-Matrix.html#trace",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "trace",
          "normalized": "Matrix a-\u003e[a]",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip rows and columns.\n\u003c/p\u003e\u003cpre\u003e 1 8 9                1 2 3\n 2 1 8  --transpose-\u003e 8 1 2\n 3 2 1                9 8 1 \n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "transpose",
          "package": "bed-and-breakfast",
          "signature": "Matrix e -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#transpose",
          "type": "method"
        },
        "index": {
          "description": "Flip rows and columns transpose",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "transpose",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Matrix e-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity square matrix of the given size.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunit 4\n\u003c/code\u003e\u003c/strong\u003e1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "unit",
          "package": "bed-and-breakfast",
          "signature": "Int -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#unit",
          "type": "method"
        },
        "index": {
          "description": "An identity square matrix of the given size unit",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "unit",
          "normalized": "Int-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Int-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square matrix of the given size consisting of all zeros.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ezero 2\n\u003c/code\u003e\u003c/strong\u003e0 0\n0 0\n\u003c/pre\u003e",
          "module": "Numeric.Matrix",
          "name": "zero",
          "package": "bed-and-breakfast",
          "signature": "Int -\u003e Matrix e",
          "source": "src/Numeric-Matrix.html#zero",
          "type": "method"
        },
        "index": {
          "description": "square matrix of the given size consisting of all zeros zero",
          "hierarchy": "Numeric Matrix",
          "module": "Numeric.Matrix",
          "name": "zero",
          "normalized": "Int-\u003eMatrix a",
          "package": "bed-and-breakfast",
          "signature": "Int-\u003eMatrix e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bed-and-breakfast/docs/Numeric-Matrix.html#v:zero"
      }
    }
  ]
]