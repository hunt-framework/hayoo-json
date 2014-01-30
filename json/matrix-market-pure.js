[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure and composable Matrix Market reader and writer.\n\u003c/p\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre\u003e\n rm \u003c- \u003ccode\u003e\u003ca\u003ereadMM\u003c/a\u003e\u003c/code\u003e `liftM` readFile \"my-real-matrix.mtx\" :: IO (\u003ccode\u003e\u003ca\u003eReadMatrix\u003c/a\u003e\u003c/code\u003e Double)\n case rm of\n   Right m -\u003e -- Do something with the matrix m\n   Left err -\u003e -- Report error\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "module",
        "fct-source": "src/Data-MatrixMarket.html",
        "fct-type": "module",
        "title": "MatrixMarket"
      },
      "index": {
        "description": "Pure and composable Matrix Market reader and writer Usage example rm readMM liftM readFile my-real-matrix.mtx IO ReadMatrix Double case rm of Right Do something with the matrix Left err Report error",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MatrixMarket",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Matrix Market",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:AM",
      "description": {
        "fct-descr": "\u003cp\u003eArray format (dense matrix).\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#AM",
        "fct-type": "data",
        "title": "AM"
      },
      "index": {
        "description": "Array format dense matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "AM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "AM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:CM",
      "description": {
        "fct-descr": "\u003cp\u003eCoordinate format (sparse matrix).\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "data",
        "title": "CM"
      },
      "index": {
        "description": "Coordinate format sparse matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "CM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Complex",
      "description": {
        "fct-descr": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Complex"
      },
      "index": {
        "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "Complex",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Complex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MField",
      "description": {
        "fct-descr": "\u003cp\u003eField of the matrix.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#MField",
        "fct-type": "data",
        "title": "MField"
      },
      "index": {
        "description": "Field of the matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MField",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MField",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MValue",
      "description": {
        "fct-descr": "\u003cp\u003eValues allowed in the Matrix Market files.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "class",
        "fct-source": "src/Data-MatrixMarket.html#MValue",
        "fct-type": "class",
        "title": "MValue"
      },
      "index": {
        "description": "Values allowed in the Matrix Market files",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MValue",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Matrix",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix Market format representation.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "data",
        "title": "Matrix"
      },
      "index": {
        "description": "Matrix Market format representation",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "Matrix",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:MatrixData",
      "description": {
        "fct-descr": "\u003cp\u003eMatrix' data block.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#MatrixData",
        "fct-type": "data",
        "title": "MatrixData"
      },
      "index": {
        "description": "Matrix data block",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MatrixData",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Matrix Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:ReadError",
      "description": {
        "fct-descr": "\u003cp\u003eParsing errors.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "data",
        "title": "ReadError"
      },
      "index": {
        "description": "Parsing errors",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "ReadError",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Read Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:ReadMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eUse this type synonym to specify the type of \u003ccode\u003e\u003ca\u003ereadMM\u003c/a\u003e\u003c/code\u003e when calling.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "type",
        "fct-source": "src/Data-MatrixMarket.html#ReadMatrix",
        "fct-type": "type",
        "title": "ReadMatrix"
      },
      "index": {
        "description": "Use this type synonym to specify the type of readMM when calling",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "ReadMatrix",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Read Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#t:Symmetry",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetry class of the matrix.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "data",
        "fct-source": "src/Data-MatrixMarket.html#Symmetry",
        "fct-type": "data",
        "title": "Symmetry"
      },
      "index": {
        "description": "Symmetry class of the matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "Symmetry",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Symmetry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v::-43-",
      "description": {
        "fct-descr": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "!a :+ !a",
        "fct-type": "function",
        "title": ":+"
      },
      "index": {
        "description": "forms complex number from its real and imaginary rectangular components",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": ":+",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:AM",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "AM",
        "fct-source": "src/Data-MatrixMarket.html#AM",
        "fct-type": "function",
        "title": "AM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "AM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "AM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:ArrayM",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "ArrayM",
        "fct-source": "src/Data-MatrixMarket.html#MatrixData",
        "fct-type": "function",
        "title": "ArrayM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "ArrayM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:CM",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "CM",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "function",
        "title": "CM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "CM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:CoordinateM",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "CoordinateM",
        "fct-source": "src/Data-MatrixMarket.html#MatrixData",
        "fct-type": "function",
        "title": "CoordinateM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "CoordinateM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Coordinate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:General",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "General",
        "fct-source": "src/Data-MatrixMarket.html#Symmetry",
        "fct-type": "function",
        "title": "General"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "General",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "General",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:Hermitian",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Hermitian",
        "fct-source": "src/Data-MatrixMarket.html#Symmetry",
        "fct-type": "function",
        "title": "Hermitian"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "Hermitian",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Hermitian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:InvalidHeader",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "InvalidHeader String",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "InvalidHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "InvalidHeader",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Invalid Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MComplex",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MComplex",
        "fct-source": "src/Data-MatrixMarket.html#MField",
        "fct-type": "function",
        "title": "MComplex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MComplex",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MComplex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MInt",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MInt",
        "fct-source": "src/Data-MatrixMarket.html#MField",
        "fct-type": "function",
        "title": "MInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MInt",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MM",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MM",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "function",
        "title": "MM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MM",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MPattern",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MPattern",
        "fct-source": "src/Data-MatrixMarket.html#MField",
        "fct-type": "function",
        "title": "MPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MPattern",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MPattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:MReal",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MReal",
        "fct-source": "src/Data-MatrixMarket.html#MField",
        "fct-type": "function",
        "title": "MReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "MReal",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "MReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:NoParse",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "NoParse",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "NoParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "NoParse",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "No Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:NotAMatrixMarketFormat",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "NotAMatrixMarketFormat",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "NotAMatrixMarketFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "NotAMatrixMarketFormat",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Not AMatrix Market Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:SkewSymmetric",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "SkewSymmetric",
        "fct-source": "src/Data-MatrixMarket.html#Symmetry",
        "fct-type": "function",
        "title": "SkewSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "SkewSymmetric",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Skew Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:Symmetric",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Symmetric",
        "fct-source": "src/Data-MatrixMarket.html#Symmetry",
        "fct-type": "function",
        "title": "Symmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "Symmetric",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnexpectedField",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "UnexpectedField String",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "UnexpectedField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "UnexpectedField",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Unexpected Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnknownFormat",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "UnknownFormat String",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "UnknownFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "UnknownFormat",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Unknown Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:UnknownSymmetry",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "UnknownSymmetry String",
        "fct-source": "src/Data-MatrixMarket.html#ReadError",
        "fct-type": "function",
        "title": "UnknownSymmetry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "UnknownSymmetry",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "Unknown Symmetry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-cols",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int",
        "fct-source": "src/Data-MatrixMarket.html#AM",
        "fct-type": "function",
        "title": "am'cols"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "am'cols",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-rows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int",
        "fct-source": "src/Data-MatrixMarket.html#AM",
        "fct-type": "function",
        "title": "am'rows"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "am'rows",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:am-39-values",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "[a]",
        "fct-source": "src/Data-MatrixMarket.html#AM",
        "fct-type": "function",
        "title": "am'values"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "am'values",
        "normalized": "[a]",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:array-39-m",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "AM a",
        "fct-source": "src/Data-MatrixMarket.html#MatrixData",
        "fct-type": "function",
        "title": "array'm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "array'm",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eGet an element of the matrix at the specified position.\n Warning: This operation is slow, use \u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoArrayM\u003c/a\u003e\u003c/code\u003e\n to convert to an array first.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e (Int, Int) -\u003e a",
        "fct-source": "src/Data-MatrixMarket.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Get an element of the matrix at the specified position Warning This operation is slow use toArray or toArrayM to convert to an array first",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "at",
        "normalized": "Matrix a-\u003e(Int,Int)-\u003ea",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "Matrix a-\u003e(Int,Int)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-cols",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "function",
        "title": "cm'cols"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "cm'cols",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-rows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "function",
        "title": "cm'rows"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "cm'rows",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "function",
        "title": "cm'size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "cm'size",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:cm-39-values",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "[((Int, Int), a)]",
        "fct-source": "src/Data-MatrixMarket.html#CM",
        "fct-type": "function",
        "title": "cm'values"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "cm'values",
        "normalized": "[((Int,Int),a)]",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "[((Int,Int),a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:conj",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-MatrixMarket.html#conj",
        "fct-type": "method",
        "title": "conj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "conj",
        "normalized": "a-\u003ea",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:coords-39-m",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "CM a",
        "fct-source": "src/Data-MatrixMarket.html#MatrixData",
        "fct-type": "function",
        "title": "coords'm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "coords'm",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:dumpMM",
      "description": {
        "fct-descr": "\u003cp\u003eWrite Matrix Market format.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e String",
        "fct-source": "src/Data-MatrixMarket.html#dumpMM",
        "fct-type": "function",
        "title": "dumpMM"
      },
      "index": {
        "description": "Write Matrix Market format",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "dumpMM",
        "normalized": "Matrix a-\u003eString",
        "package": "matrix-market-pure",
        "partial": "MM",
        "signature": "Matrix a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-cols",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of columns in the matrix.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e Int",
        "fct-source": "src/Data-MatrixMarket.html#mm%27cols",
        "fct-type": "function",
        "title": "mm'cols"
      },
      "index": {
        "description": "Number of columns in the matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'cols",
        "normalized": "Matrix a-\u003eInt",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "Matrix a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-comments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "[String]",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "function",
        "title": "mm'comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'comments",
        "normalized": "[String]",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-data",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MatrixData a",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "function",
        "title": "mm'data"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'data",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-field",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "MField",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "function",
        "title": "mm'field"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'field",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-rows",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of rows in the matrix.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e Int",
        "fct-source": "src/Data-MatrixMarket.html#mm%27rows",
        "fct-type": "function",
        "title": "mm'rows"
      },
      "index": {
        "description": "Number of rows in the matrix",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'rows",
        "normalized": "Matrix a-\u003eInt",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "Matrix a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-shape",
      "description": {
        "fct-descr": "\u003cp\u003eDimensions of the matrix: (number of rows, number of columns).\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e (Int, Int)",
        "fct-source": "src/Data-MatrixMarket.html#mm%27shape",
        "fct-type": "function",
        "title": "mm'shape"
      },
      "index": {
        "description": "Dimensions of the matrix number of rows number of columns",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'shape",
        "normalized": "Matrix a-\u003e(Int,Int)",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "Matrix a-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:mm-39-symmetry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Symmetry",
        "fct-source": "src/Data-MatrixMarket.html#Matrix",
        "fct-type": "function",
        "title": "mm'symmetry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "mm'symmetry",
        "normalized": "",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:readMM",
      "description": {
        "fct-descr": "\u003cp\u003eParse Matrix Market format.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "String -\u003e ReadMatrix a",
        "fct-source": "src/Data-MatrixMarket.html#readMM",
        "fct-type": "function",
        "title": "readMM"
      },
      "index": {
        "description": "Parse Matrix Market format",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "readMM",
        "normalized": "String-\u003eReadMatrix a",
        "package": "matrix-market-pure",
        "partial": "MM",
        "signature": "String-\u003eReadMatrix a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:readval",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "[String] -\u003e Maybe a",
        "fct-source": "src/Data-MatrixMarket.html#readval",
        "fct-type": "method",
        "title": "readval"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "readval",
        "normalized": "[String]-\u003eMaybe a",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "[String]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:showval",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-MatrixMarket.html#showval",
        "fct-type": "method",
        "title": "showval"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "showval",
        "normalized": "a-\u003eString",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an immutable dense array.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int-\u003e Matrix a-\u003e arr (Int, Int) a",
        "fct-type": "function",
        "title": "toArray"
      },
      "index": {
        "description": "Convert to an immutable dense array",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "toArray",
        "normalized": "Int-\u003eMatrix a-\u003eb(Int,Int)a",
        "package": "matrix-market-pure",
        "partial": "Array",
        "signature": "Int-\u003eMatrix a-\u003earr(Int,Int)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toArrayM",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to a mutable dense array.\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Int-\u003e Matrix a-\u003e m (arr (Int, Int) a)",
        "fct-type": "function",
        "title": "toArrayM"
      },
      "index": {
        "description": "Convert to mutable dense array",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "toArrayM",
        "normalized": "Int-\u003eMatrix a-\u003eb(c(Int,Int)a)",
        "package": "matrix-market-pure",
        "partial": "Array",
        "signature": "Int-\u003eMatrix a-\u003em(arr(Int,Int)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toCompleteList",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a list of all non-zero entries (including symmetric entries).\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e [((Int, Int), a)]",
        "fct-source": "src/Data-MatrixMarket.html#toCompleteList",
        "fct-type": "function",
        "title": "toCompleteList"
      },
      "index": {
        "description": "Construct list of all non-zero entries including symmetric entries",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "toCompleteList",
        "normalized": "Matrix a-\u003e[((Int,Int),a)]",
        "package": "matrix-market-pure",
        "partial": "Complete List",
        "signature": "Matrix a-\u003e[((Int,Int),a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a list of non-zero entries (without symmetric entries).\n\u003c/p\u003e",
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "Matrix a -\u003e [((Int, Int), a)]",
        "fct-source": "src/Data-MatrixMarket.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Construct list of non-zero entries without symmetric entries",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "toList",
        "normalized": "Matrix a-\u003e[((Int,Int),a)]",
        "package": "matrix-market-pure",
        "partial": "List",
        "signature": "Matrix a-\u003e[((Int,Int),a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/matrix-market-pure/docs/Data-MatrixMarket.html#v:typename",
      "description": {
        "fct-module": "Data.MatrixMarket",
        "fct-package": "matrix-market-pure",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-MatrixMarket.html#typename",
        "fct-type": "method",
        "title": "typename"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MatrixMarket",
        "module": "Data.MatrixMarket",
        "name": "typename",
        "normalized": "a-\u003eString",
        "package": "matrix-market-pure",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  }
]