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
        "word": "matrix-market-pure"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure and composable Matrix Market reader and writer.\n\u003c/p\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre\u003e\n rm \u003c- \u003ccode\u003e\u003ca\u003ereadMM\u003c/a\u003e\u003c/code\u003e `liftM` readFile \"my-real-matrix.mtx\" :: IO (\u003ccode\u003e\u003ca\u003eReadMatrix\u003c/a\u003e\u003c/code\u003e Double)\n case rm of\n   Right m -\u003e -- Do something with the matrix m\n   Left err -\u003e -- Report error\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.MatrixMarket",
          "name": "MatrixMarket",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html",
          "type": "module"
        },
        "index": {
          "description": "Pure and composable Matrix Market reader and writer Usage example rm readMM liftM readFile my-real-matrix.mtx IO ReadMatrix Double case rm of Right Do something with the matrix Left err Report error",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MatrixMarket",
          "package": "matrix-market-pure",
          "partial": "Matrix Market",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray format (dense matrix).\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "AM",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#AM",
          "type": "data"
        },
        "index": {
          "description": "Array format dense matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "AM",
          "package": "matrix-market-pure",
          "partial": "AM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:AM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoordinate format (sparse matrix).\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "CM",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "data"
        },
        "index": {
          "description": "Coordinate format sparse matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "CM",
          "package": "matrix-market-pure",
          "partial": "CM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "Complex",
          "package": "matrix-market-pure",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "Complex",
          "package": "matrix-market-pure",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField of the matrix.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "MField",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#MField",
          "type": "data"
        },
        "index": {
          "description": "Field of the matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MField",
          "package": "matrix-market-pure",
          "partial": "MField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues allowed in the Matrix Market files.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "MValue",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#MValue",
          "type": "class"
        },
        "index": {
          "description": "Values allowed in the Matrix Market files",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MValue",
          "package": "matrix-market-pure",
          "partial": "MValue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix Market format representation.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "Matrix",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Matrix Market format representation",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "Matrix",
          "package": "matrix-market-pure",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix' data block.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "MatrixData",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#MatrixData",
          "type": "data"
        },
        "index": {
          "description": "Matrix data block",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MatrixData",
          "package": "matrix-market-pure",
          "partial": "Matrix Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MatrixData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing errors.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "ReadError",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "data"
        },
        "index": {
          "description": "Parsing errors",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "ReadError",
          "package": "matrix-market-pure",
          "partial": "Read Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:ReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this type synonym to specify the type of \u003ccode\u003e\u003ca\u003ereadMM\u003c/a\u003e\u003c/code\u003e when calling.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "ReadMatrix",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#ReadMatrix",
          "type": "type"
        },
        "index": {
          "description": "Use this type synonym to specify the type of readMM when calling",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "ReadMatrix",
          "package": "matrix-market-pure",
          "partial": "Read Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:ReadMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetry class of the matrix.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "Symmetry",
          "package": "matrix-market-pure",
          "source": "src/Data-MatrixMarket.html#Symmetry",
          "type": "data"
        },
        "index": {
          "description": "Symmetry class of the matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "Symmetry",
          "package": "matrix-market-pure",
          "partial": "Symmetry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Symmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": ":+",
          "package": "matrix-market-pure",
          "signature": "a :+ !a",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its real and imaginary rectangular components",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": ":+",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v::-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "AM",
          "package": "matrix-market-pure",
          "signature": "AM",
          "source": "src/Data-MatrixMarket.html#AM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "AM",
          "package": "matrix-market-pure",
          "partial": "AM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:AM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "ArrayM",
          "package": "matrix-market-pure",
          "signature": "ArrayM",
          "source": "src/Data-MatrixMarket.html#MatrixData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "ArrayM",
          "package": "matrix-market-pure",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:ArrayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "CM",
          "package": "matrix-market-pure",
          "signature": "CM",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "CM",
          "package": "matrix-market-pure",
          "partial": "CM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "CoordinateM",
          "package": "matrix-market-pure",
          "signature": "CoordinateM",
          "source": "src/Data-MatrixMarket.html#MatrixData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "CoordinateM",
          "package": "matrix-market-pure",
          "partial": "Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:CoordinateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "General",
          "package": "matrix-market-pure",
          "signature": "General",
          "source": "src/Data-MatrixMarket.html#Symmetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "General",
          "package": "matrix-market-pure",
          "partial": "General",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:General"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "Hermitian",
          "package": "matrix-market-pure",
          "signature": "Hermitian",
          "source": "src/Data-MatrixMarket.html#Symmetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "Hermitian",
          "package": "matrix-market-pure",
          "partial": "Hermitian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:Hermitian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "InvalidHeader",
          "package": "matrix-market-pure",
          "signature": "InvalidHeader String",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "InvalidHeader",
          "package": "matrix-market-pure",
          "partial": "Invalid Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:InvalidHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "MComplex",
          "package": "matrix-market-pure",
          "signature": "MComplex",
          "source": "src/Data-MatrixMarket.html#MField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MComplex",
          "package": "matrix-market-pure",
          "partial": "MComplex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "MInt",
          "package": "matrix-market-pure",
          "signature": "MInt",
          "source": "src/Data-MatrixMarket.html#MField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MInt",
          "package": "matrix-market-pure",
          "partial": "MInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "MM",
          "package": "matrix-market-pure",
          "signature": "MM",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MM",
          "package": "matrix-market-pure",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "MPattern",
          "package": "matrix-market-pure",
          "signature": "MPattern",
          "source": "src/Data-MatrixMarket.html#MField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MPattern",
          "package": "matrix-market-pure",
          "partial": "MPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "MReal",
          "package": "matrix-market-pure",
          "signature": "MReal",
          "source": "src/Data-MatrixMarket.html#MField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "MReal",
          "package": "matrix-market-pure",
          "partial": "MReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "NoParse",
          "package": "matrix-market-pure",
          "signature": "NoParse",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "NoParse",
          "package": "matrix-market-pure",
          "partial": "No Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:NoParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "NotAMatrixMarketFormat",
          "package": "matrix-market-pure",
          "signature": "NotAMatrixMarketFormat",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "NotAMatrixMarketFormat",
          "package": "matrix-market-pure",
          "partial": "Not AMatrix Market Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:NotAMatrixMarketFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "SkewSymmetric",
          "package": "matrix-market-pure",
          "signature": "SkewSymmetric",
          "source": "src/Data-MatrixMarket.html#Symmetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "SkewSymmetric",
          "package": "matrix-market-pure",
          "partial": "Skew Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:SkewSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "Symmetric",
          "package": "matrix-market-pure",
          "signature": "Symmetric",
          "source": "src/Data-MatrixMarket.html#Symmetry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "Symmetric",
          "package": "matrix-market-pure",
          "partial": "Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:Symmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "UnexpectedField",
          "package": "matrix-market-pure",
          "signature": "UnexpectedField String",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "UnexpectedField",
          "package": "matrix-market-pure",
          "partial": "Unexpected Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnexpectedField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "UnknownFormat",
          "package": "matrix-market-pure",
          "signature": "UnknownFormat String",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "UnknownFormat",
          "package": "matrix-market-pure",
          "partial": "Unknown Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnknownFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "UnknownSymmetry",
          "package": "matrix-market-pure",
          "signature": "UnknownSymmetry String",
          "source": "src/Data-MatrixMarket.html#ReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "UnknownSymmetry",
          "package": "matrix-market-pure",
          "partial": "Unknown Symmetry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnknownSymmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "am'cols",
          "package": "matrix-market-pure",
          "signature": "Int",
          "source": "src/Data-MatrixMarket.html#AM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "am'cols",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "am'rows",
          "package": "matrix-market-pure",
          "signature": "Int",
          "source": "src/Data-MatrixMarket.html#AM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "am'rows",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "am'values",
          "package": "matrix-market-pure",
          "signature": "[a]",
          "source": "src/Data-MatrixMarket.html#AM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "am'values",
          "normalized": "[a]",
          "package": "matrix-market-pure",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "array'm",
          "package": "matrix-market-pure",
          "signature": "AM a",
          "source": "src/Data-MatrixMarket.html#MatrixData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "array'm",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:array-39-m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an element of the matrix at the specified position.\n Warning: This operation is slow, use \u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoArrayM\u003c/a\u003e\u003c/code\u003e\n to convert to an array first.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "at",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e (Int, Int) -\u003e a",
          "source": "src/Data-MatrixMarket.html#at",
          "type": "function"
        },
        "index": {
          "description": "Get an element of the matrix at the specified position Warning This operation is slow use toArray or toArrayM to convert to an array first",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "at",
          "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
          "package": "matrix-market-pure",
          "signature": "Matrix a-\u003e(Int,Int)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "cm'cols",
          "package": "matrix-market-pure",
          "signature": "Int",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "cm'cols",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "cm'rows",
          "package": "matrix-market-pure",
          "signature": "Int",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "cm'rows",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "cm'size",
          "package": "matrix-market-pure",
          "signature": "Int",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "cm'size",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "cm'values",
          "package": "matrix-market-pure",
          "signature": "[((Int, Int), a)]",
          "source": "src/Data-MatrixMarket.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "cm'values",
          "normalized": "[((Int,Int),a)]",
          "package": "matrix-market-pure",
          "signature": "[((Int,Int),a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "conj",
          "package": "matrix-market-pure",
          "signature": "a -\u003e a",
          "source": "src/Data-MatrixMarket.html#conj",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "conj",
          "normalized": "a-\u003ea",
          "package": "matrix-market-pure",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "coords'm",
          "package": "matrix-market-pure",
          "signature": "CM a",
          "source": "src/Data-MatrixMarket.html#MatrixData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "coords'm",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:coords-39-m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite Matrix Market format.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "dumpMM",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e String",
          "source": "src/Data-MatrixMarket.html#dumpMM",
          "type": "function"
        },
        "index": {
          "description": "Write Matrix Market format",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "dumpMM",
          "normalized": "Matrix a-\u003eString",
          "package": "matrix-market-pure",
          "partial": "MM",
          "signature": "Matrix a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:dumpMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of columns in the matrix.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "mm'cols",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e Int",
          "source": "src/Data-MatrixMarket.html#mm%27cols",
          "type": "function"
        },
        "index": {
          "description": "Number of columns in the matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'cols",
          "normalized": "Matrix a-\u003eInt",
          "package": "matrix-market-pure",
          "signature": "Matrix a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "mm'comments",
          "package": "matrix-market-pure",
          "signature": "[String]",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'comments",
          "normalized": "[String]",
          "package": "matrix-market-pure",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "mm'data",
          "package": "matrix-market-pure",
          "signature": "MatrixData a",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'data",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "mm'field",
          "package": "matrix-market-pure",
          "signature": "MField",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'field",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rows in the matrix.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "mm'rows",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e Int",
          "source": "src/Data-MatrixMarket.html#mm%27rows",
          "type": "function"
        },
        "index": {
          "description": "Number of rows in the matrix",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'rows",
          "normalized": "Matrix a-\u003eInt",
          "package": "matrix-market-pure",
          "signature": "Matrix a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDimensions of the matrix: (number of rows, number of columns).\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "mm'shape",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e (Int, Int)",
          "source": "src/Data-MatrixMarket.html#mm%27shape",
          "type": "function"
        },
        "index": {
          "description": "Dimensions of the matrix number of rows number of columns",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'shape",
          "normalized": "Matrix a-\u003e(Int,Int)",
          "package": "matrix-market-pure",
          "signature": "Matrix a-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "mm'symmetry",
          "package": "matrix-market-pure",
          "signature": "Symmetry",
          "source": "src/Data-MatrixMarket.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "mm'symmetry",
          "package": "matrix-market-pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-symmetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse Matrix Market format.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "readMM",
          "package": "matrix-market-pure",
          "signature": "String -\u003e ReadMatrix a",
          "source": "src/Data-MatrixMarket.html#readMM",
          "type": "function"
        },
        "index": {
          "description": "Parse Matrix Market format",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "readMM",
          "normalized": "String-\u003eReadMatrix a",
          "package": "matrix-market-pure",
          "partial": "MM",
          "signature": "String-\u003eReadMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:readMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "readval",
          "package": "matrix-market-pure",
          "signature": "[String] -\u003e Maybe a",
          "source": "src/Data-MatrixMarket.html#readval",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "readval",
          "normalized": "[String]-\u003eMaybe a",
          "package": "matrix-market-pure",
          "signature": "[String]-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:readval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "showval",
          "package": "matrix-market-pure",
          "signature": "a -\u003e String",
          "source": "src/Data-MatrixMarket.html#showval",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "showval",
          "normalized": "a-\u003eString",
          "package": "matrix-market-pure",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:showval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an immutable dense array.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "toArray",
          "package": "matrix-market-pure",
          "signature": "Int-\u003e Matrix a-\u003e arr (Int, Int) a",
          "type": "function"
        },
        "index": {
          "description": "Convert to an immutable dense array",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "toArray",
          "normalized": "Int-\u003eMatrix a-\u003eb(Int,Int)a",
          "package": "matrix-market-pure",
          "partial": "Array",
          "signature": "Int-\u003eMatrix a-\u003earr(Int,Int)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a mutable dense array.\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "toArrayM",
          "package": "matrix-market-pure",
          "signature": "Int-\u003e Matrix a-\u003e m (arr (Int, Int) a)",
          "type": "function"
        },
        "index": {
          "description": "Convert to mutable dense array",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "toArrayM",
          "normalized": "Int-\u003eMatrix a-\u003eb(c(Int,Int)a)",
          "package": "matrix-market-pure",
          "partial": "Array",
          "signature": "Int-\u003eMatrix a-\u003em(arr(Int,Int)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toArrayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list of all non-zero entries (including symmetric entries).\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "toCompleteList",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e [((Int, Int), a)]",
          "source": "src/Data-MatrixMarket.html#toCompleteList",
          "type": "function"
        },
        "index": {
          "description": "Construct list of all non-zero entries including symmetric entries",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "toCompleteList",
          "normalized": "Matrix a-\u003e[((Int,Int),a)]",
          "package": "matrix-market-pure",
          "partial": "Complete List",
          "signature": "Matrix a-\u003e[((Int,Int),a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toCompleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list of non-zero entries (without symmetric entries).\n\u003c/p\u003e",
          "module": "Data.MatrixMarket",
          "name": "toList",
          "package": "matrix-market-pure",
          "signature": "Matrix a -\u003e [((Int, Int), a)]",
          "source": "src/Data-MatrixMarket.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Construct list of non-zero entries without symmetric entries",
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "toList",
          "normalized": "Matrix a-\u003e[((Int,Int),a)]",
          "package": "matrix-market-pure",
          "partial": "List",
          "signature": "Matrix a-\u003e[((Int,Int),a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MatrixMarket",
          "name": "typename",
          "package": "matrix-market-pure",
          "signature": "a -\u003e String",
          "source": "src/Data-MatrixMarket.html#typename",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MatrixMarket",
          "module": "Data.MatrixMarket",
          "name": "typename",
          "normalized": "a-\u003eString",
          "package": "matrix-market-pure",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:typename"
      }
    }
  ]
]