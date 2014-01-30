[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html",
        "fct-type": "module",
        "title": "Density"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "Density",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#t:DirichletDensity",
      "description": {
        "fct-descr": "\u003cp\u003eA Dirichlet density.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
        "fct-type": "newtype",
        "title": "DirichletDensity"
      },
      "index": {
        "description": "Dirichlet density",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "DirichletDensity",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Dirichlet Density",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:DD",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DD",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
        "fct-type": "function",
        "title": "DD"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "DD",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "DD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eCost function for deriving a Dirichlet density (equation\n 18).  This function is minimized by \u003ccode\u003e\u003ca\u003ederive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingVectors -\u003e DirichletDensity -\u003e Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#cost",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "Cost function for deriving Dirichlet density equation This function is minimized by derive",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "cost",
        "normalized": "TrainingVectors-\u003eDirichletDensity-\u003eDouble",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "TrainingVectors-\u003eDirichletDensity-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:derive",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a Dirichlet density using a maximum likelihood method\n as described by Karplus et al (equation 26).  All training\n vectors should have the same length, however this is not\n verified.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletDensity -\u003e Predicate -\u003e StepSize -\u003e TrainingVectors -\u003e Result DirichletDensity",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#derive",
        "fct-type": "function",
        "title": "derive"
      },
      "index": {
        "description": "Derive Dirichlet density using maximum likelihood method as described by Karplus et al equation All training vectors should have the same length however this is not verified",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "derive",
        "normalized": "DirichletDensity-\u003ePredicate-\u003eStepSize-\u003eTrainingVectors-\u003eResult DirichletDensity",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "DirichletDensity-\u003ePredicate-\u003eStepSize-\u003eTrainingVectors-\u003eResult DirichletDensity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eempty n x\u003c/code\u003e is an \"empty\" Dirichlet density with size\n \u003ccode\u003en\u003c/code\u003e and all alphas set to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Int -\u003e Double -\u003e DirichletDensity",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is an empty Dirichlet density with size and all alphas set to",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "empty",
        "normalized": "Int-\u003eDouble-\u003eDirichletDensity",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Int-\u003eDouble-\u003eDirichletDensity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e constructs a Dirichlet density from a list of\n alpha values.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "[Double] -\u003e DirichletDensity",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "fromList xs constructs Dirichlet density from list of alpha values",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "fromList",
        "normalized": "[Double]-\u003eDirichletDensity",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "[Double]-\u003eDirichletDensity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoList d\u003c/code\u003e deconstructs a Dirichlet density to a list of\n alpha values.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletDensity -\u003e [Double]",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList deconstructs Dirichlet density to list of alpha values",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "toList",
        "normalized": "DirichletDensity-\u003e[Double]",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "DirichletDensity-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:unDD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Statistics.Dirichlet.Density",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
        "fct-type": "function",
        "title": "unDD"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Density",
        "module": "Math.Statistics.Dirichlet.Density",
        "name": "unDD",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "DD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplement matrices using plain \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es with data stored in\n row-major order (i.e. the first elements correspond to the\n first row).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "Implement matrices using plain Vector with data stored in row-major order i.e the first elements correspond to the first row",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#t:Matrix",
      "description": {
        "fct-descr": "\u003cp\u003eA matrix.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
        "fct-type": "data",
        "title": "Matrix"
      },
      "index": {
        "description": "matrix",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eElement at position.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e (Int, Int) -\u003e Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Element at position",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "(!) !",
        "normalized": "Matrix-\u003e(Int,Int)-\u003eDouble",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003e(Int,Int)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:-33--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003em !!! i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th row of the matrix.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e Int -\u003e Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#%21%21%21",
        "fct-type": "function",
        "title": "(!!!)"
      },
      "index": {
        "description": "is the th row of the matrix",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "(!!!) !!!",
        "normalized": "Matrix-\u003eInt-\u003eVector Double",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003eInt-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:M",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "M",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "M",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:col",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(rows)\u003c/em\u003e \u003ccode\u003em \u003ccode\u003e\u003ca\u003ecol\u003c/a\u003e\u003c/code\u003e i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th column of the matrix.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e Int -\u003e Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#col",
        "fct-type": "function",
        "title": "col"
      },
      "index": {
        "description": "rows col is the th column of the matrix",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "col",
        "normalized": "Matrix-\u003eInt-\u003eVector Double",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003eInt-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:cols",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e Columns of the matrix.  Each element takes\n \u003cem\u003eO(rows)\u003c/em\u003e time and storage.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e Vector (Vector Double)",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#cols",
        "fct-type": "function",
        "title": "cols"
      },
      "index": {
        "description": "rows cols Columns of the matrix Each element takes rows time and storage",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "cols",
        "normalized": "Matrix-\u003eVector(Vector Double)",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003eVector(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:fromVector",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a matrix from a vector of vectors.  It *is not*\n verified that the vectors have the right length.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "v (w Double) -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "Creates matrix from vector of vectors It is not verified that the vectors have the right length",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "fromVector",
        "normalized": "a(b Double)-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "Vector",
        "signature": "v(w Double)-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:fromVectorT",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a matrix from a vector of vectors.  The vectors are\n transposed, so \u003ccode\u003efromVectorT\u003c/code\u003e is the same as \u003ccode\u003etranspose\n . fromVector\u003c/code\u003e. It *is* verified that the vectors have the\n right length.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "v (w Double) -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#fromVectorT",
        "fct-type": "function",
        "title": "fromVectorT"
      },
      "index": {
        "description": "Creates matrix from vector of vectors The vectors are transposed so fromVectorT is the same as transpose fromVector It is verified that the vectors have the right length",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "fromVectorT",
        "normalized": "a(b Double)-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "Vector",
        "signature": "v(w Double)-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:imap",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "((Int, Int) -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#imap",
        "fct-type": "function",
        "title": "imap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "imap",
        "normalized": "((Int,Int)-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "((Int,Int)-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:irowmap",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Int -\u003e Vector Double -\u003e Double) -\u003e Matrix -\u003e Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#irowmap",
        "fct-type": "function",
        "title": "irowmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "irowmap",
        "normalized": "(Int-\u003eVector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "(Int-\u003eVector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:izipWith",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "((Int, Int) -\u003e Double -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#izipWith",
        "fct-type": "function",
        "title": "izipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "izipWith",
        "normalized": "((Int,Int)-\u003eDouble-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "With",
        "signature": "((Int,Int)-\u003eDouble-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mCols",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
        "fct-type": "function",
        "title": "mCols"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "mCols",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Cols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!(Vector Double)",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
        "fct-type": "function",
        "title": "mData"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "mData",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mRows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
        "fct-type": "function",
        "title": "mRows"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "mRows",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Rows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:map",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Double -\u003e Double) -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "map",
        "normalized": "(Double-\u003eDouble)-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "(Double-\u003eDouble)-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eA matrix where all elements are of the same value.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Int, Int) -\u003e Double -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "matrix where all elements are of the same value",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "replicate",
        "normalized": "(Int,Int)-\u003eDouble-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "(Int,Int)-\u003eDouble-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:replicateRows",
      "description": {
        "fct-descr": "\u003cp\u003eA matrix where all rows are of the same value.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Int -\u003e Vector Double -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#replicateRows",
        "fct-type": "function",
        "title": "replicateRows"
      },
      "index": {
        "description": "matrix where all rows are of the same value",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "replicateRows",
        "normalized": "Int-\u003eVector Double-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "Rows",
        "signature": "Int-\u003eVector Double-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rowmap",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Vector Double -\u003e Double) -\u003e Matrix -\u003e Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#rowmap",
        "fct-type": "function",
        "title": "rowmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "rowmap",
        "normalized": "(Vector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "(Vector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rows",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(rows)\u003c/em\u003e Rows of the matrix.  Each element takes \u003cem\u003eO(1)\u003c/em\u003e time and\n storage.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e Vector (Vector Double)",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#rows",
        "fct-type": "function",
        "title": "rows"
      },
      "index": {
        "description": "rows Rows of the matrix Each element takes time and storage",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "rows",
        "normalized": "Matrix-\u003eVector(Vector Double)",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003eVector(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rzipWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erzipWith f m n\u003c/code\u003e is a matrix with the same number of rows as\n \u003ccode\u003em\u003c/code\u003e.  The \u003ccode\u003ei\u003c/code\u003e-th row is obtained by applying \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003ei\u003c/code\u003e-th\n rows of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Int -\u003e Vector Double -\u003e Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#rzipWith",
        "fct-type": "function",
        "title": "rzipWith"
      },
      "index": {
        "description": "rzipWith is matrix with the same number of rows as The th row is obtained by applying to the th rows of and",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "rzipWith",
        "normalized": "(Int-\u003eVector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "With",
        "signature": "(Int-\u003eVector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the matrix.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e (Int, Int)",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Size of the matrix",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "size",
        "normalized": "Matrix-\u003e(Int,Int)",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:transpose",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "transpose",
        "normalized": "Matrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:umap",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#umap",
        "fct-type": "function",
        "title": "umap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "umap",
        "normalized": "(Vector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "(Vector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:uzipWith",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Vector Double -\u003e Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#uzipWith",
        "fct-type": "function",
        "title": "uzipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "uzipWith",
        "normalized": "(Vector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "With",
        "signature": "(Vector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:zipWith",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Matrix",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "(Double -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Matrix.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Matrix",
        "module": "Math.Statistics.Dirichlet.Matrix",
        "name": "zipWith",
        "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "With",
        "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html",
        "fct-type": "module",
        "title": "Mixture"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "Mixture",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Mixture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:Component",
      "description": {
        "fct-descr": "\u003cp\u003eA list representation of a component of a Dirichlet mixture.\n Used by \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e only.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#Component",
        "fct-type": "type",
        "title": "Component"
      },
      "index": {
        "description": "list representation of component of Dirichlet mixture Used by fromList and toList only",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "Component",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:DirichletMixture",
      "description": {
        "fct-descr": "\u003cp\u003eA Dirichlet mixture.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "data",
        "title": "DirichletMixture"
      },
      "index": {
        "description": "Dirichlet mixture",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "DirichletMixture",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Dirichlet Mixture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:TrainingData",
      "description": {
        "fct-descr": "\u003cp\u003ePre-processed training vectors (see \u003ccode\u003e\u003ca\u003eprepareTraining\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#TrainingData",
        "fct-type": "data",
        "title": "TrainingData"
      },
      "index": {
        "description": "Pre-processed training vectors see prepareTraining",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "TrainingData",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:-33--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edm !!! i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th density.  No bounding checks are\n made.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e Int -\u003e Vector Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#%21%21%21",
        "fct-type": "function",
        "title": "(!!!)"
      },
      "index": {
        "description": "dm is the th density No bounding checks are made",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "(!!!) !!!",
        "normalized": "DirichletMixture-\u003eInt-\u003eVector Double",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "DirichletMixture-\u003eInt-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:DM",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DM",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "DM"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "DM",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "DM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eCost function for deriving a Dirichlet mixture (equation\n 18).  This function is minimized by \u003ccode\u003e\u003ca\u003ederive\u003c/a\u003e\u003c/code\u003e.  Calculated\n using (17) and (54).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingData -\u003e DirichletMixture -\u003e Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#cost",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "Cost function for deriving Dirichlet mixture equation This function is minimized by derive Calculated using and",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "cost",
        "normalized": "TrainingData-\u003eDirichletMixture-\u003eDouble",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "TrainingData-\u003eDirichletMixture-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:del_cost_w",
      "description": {
        "fct-descr": "\u003cp\u003eDerivative of the cost function with respect \u003ccode\u003ew_{i,j}\u003c/code\u003e,\n defined by Equation (22).  The result is given in the same\n size and order as the \u003ccode\u003edmDensitites\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingData -\u003e DirichletMixture -\u003e Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#del_cost_w",
        "fct-type": "function",
        "title": "del_cost_w"
      },
      "index": {
        "description": "Derivative of the cost function with respect defined by Equation The result is given in the same size and order as the dmDensitites vector",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "del_cost_w",
        "normalized": "TrainingData-\u003eDirichletMixture-\u003eMatrix",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "TrainingData-\u003eDirichletMixture-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:derive",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a Dirichlet mixture using a maximum likelihood method\n as described by Karplus et al (equation 25) using CG_DESCENT\n method by Hager and Zhang (see\n \u003ca\u003eNumeric.Optimization.Algorithms.HagerZhang05\u003c/a\u003e).  All training\n vectors should have the same length, however this is not\n verified.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e Predicate -\u003e StepSize -\u003e TrainingData -\u003e Result DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#derive",
        "fct-type": "function",
        "title": "derive"
      },
      "index": {
        "description": "Derive Dirichlet mixture using maximum likelihood method as described by Karplus et al equation using CG DESCENT method by Hager and Zhang see Numeric.Optimization.Algorithms.HagerZhang05 All training vectors should have the same length however this is not verified",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "derive",
        "normalized": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmComponents",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of components in a dirichlet mixture.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#dmComponents",
        "fct-type": "function",
        "title": "dmComponents"
      },
      "index": {
        "description": "Number of components in dirichlet mixture",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "dmComponents",
        "normalized": "DirichletMixture-\u003eInt",
        "package": "statistics-dirichlet",
        "partial": "Components",
        "signature": "DirichletMixture-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmDensities",
      "description": {
        "fct-descr": "\u003cp\u003eValues of all parameters of all densities.  This\n matrix has \u003ccode\u003elength dmWeights\u003c/code\u003e rows.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "dmDensities"
      },
      "index": {
        "description": "Values of all parameters of all densities This matrix has length dmWeights rows",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "dmDensities",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Densities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmDensitiesL",
      "description": {
        "fct-descr": "\u003cp\u003eSeparated list of densities.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e [DirichletDensity]",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#dmDensitiesL",
        "fct-type": "function",
        "title": "dmDensitiesL"
      },
      "index": {
        "description": "Separated list of densities",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "dmDensitiesL",
        "normalized": "DirichletMixture-\u003e[DirichletDensity]",
        "package": "statistics-dirichlet",
        "partial": "Densities",
        "signature": "DirichletMixture-\u003e[DirichletDensity]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmParameters",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of parameters each component has.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#dmParameters",
        "fct-type": "function",
        "title": "dmParameters"
      },
      "index": {
        "description": "Number of parameters each component has",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "dmParameters",
        "normalized": "DirichletMixture-\u003eInt",
        "package": "statistics-dirichlet",
        "partial": "Parameters",
        "signature": "DirichletMixture-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmWeights",
      "description": {
        "fct-descr": "\u003cp\u003eWeights of each density.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!(Vector Double)",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "dmWeights"
      },
      "index": {
        "description": "Weights of each density",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "dmWeights",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Weights",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eempty q n x\u003c/code\u003e is an \"empty\" Dirichlet mixture with \u003ccode\u003eq\u003c/code\u003e\n components and \u003ccode\u003en\u003c/code\u003e parameters.  Each component has size \u003ccode\u003en\u003c/code\u003e,\n weight inversely proportional to its index and all alphas set\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Int -\u003e Int -\u003e Double -\u003e DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is an empty Dirichlet mixture with components and parameters Each component has size weight inversely proportional to its index and all alphas set to",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "empty",
        "normalized": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:fromDD",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a Dirichlet mixture of one component from a\n Dirichlet density.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletDensity -\u003e DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#fromDD",
        "fct-type": "function",
        "title": "fromDD"
      },
      "index": {
        "description": "Constructs Dirichlet mixture of one component from Dirichlet density",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "fromDD",
        "normalized": "DirichletDensity-\u003eDirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "DD",
        "signature": "DirichletDensity-\u003eDirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e constructs a Dirichlet mixture from a\n non-empty list of components.  Each component has a weight and\n a list of alpha values.  The weights sum to 1, all lists must\n have the same number of values and every number must be\n non-negative.  None of these preconditions are verified.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "[Component] -\u003e DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "fromList xs constructs Dirichlet mixture from non-empty list of components Each component has weight and list of alpha values The weights sum to all lists must have the same number of values and every number must be non-negative None of these preconditions are verified",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "fromList",
        "normalized": "[Component]-\u003eDirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "[Component]-\u003eDirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:prepareTraining",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares training vectors to be used as training data.\n Anything that depends only on the training vectors is\n precalculated here.\n\u003c/p\u003e\u003cp\u003eWe also try to find columns where all training vectors are\n zero.  Those columns are removed from the derivation process\n and every component will have zero value on that column.  Note\n that at least one column should have non-zero training\n vectors.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingVectors -\u003e TrainingData",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#prepareTraining",
        "fct-type": "function",
        "title": "prepareTraining"
      },
      "index": {
        "description": "Prepares training vectors to be used as training data Anything that depends only on the training vectors is precalculated here We also try to find columns where all training vectors are zero Those columns are removed from the derivation process and every component will have zero value on that column Note that at least one column should have non-zero training vectors",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "prepareTraining",
        "normalized": "TrainingVectors-\u003eTrainingData",
        "package": "statistics-dirichlet",
        "partial": "Training",
        "signature": "TrainingVectors-\u003eTrainingData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoList dm\u003c/code\u003e is the inverse of \u003ccode\u003efromList\u003c/code\u003e, constructs a list\n of components from a Dirichlet mixture.  There are no error\n conditions and \u003ccode\u003etoList . fromList == id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Mixture",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e [Component]",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList dm is the inverse of fromList constructs list of components from Dirichlet mixture There are no error conditions and toList fromList id",
        "hierarchy": "Math Statistics Dirichlet Mixture",
        "module": "Math.Statistics.Dirichlet.Mixture",
        "name": "toList",
        "normalized": "DirichletMixture-\u003e[Component]",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "DirichletMixture-\u003e[Component]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Options",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Delta",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum difference between costs to consider that the\n   process converged.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Delta",
        "fct-type": "type",
        "title": "Delta"
      },
      "index": {
        "description": "Maximum difference between costs to consider that the process converged",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Delta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate specifying when the training should be over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "Predicate specifying when the training should be over",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Predicate",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Reason",
      "description": {
        "fct-descr": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "data",
        "title": "Reason"
      },
      "index": {
        "description": "Reason why the derivation was over",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Reason",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a deriviation.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Result of deriviation",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:StepSize",
      "description": {
        "fct-descr": "\u003cp\u003eUsually denoted by lowercase greek letter eta (&#951;), size of\n   each step in the gradient. Should be greater than zero and\n   much less than one.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
        "fct-type": "newtype",
        "title": "StepSize"
      },
      "index": {
        "description": "Usually denoted by lowercase greek letter eta size of each step in the gradient Should be greater than zero and much less than one",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "StepSize",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Step Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:TrainingVector",
      "description": {
        "fct-descr": "\u003cp\u003eA vector used for deriving the parameters of a Dirichlet\n   density or mixture.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVector",
        "fct-type": "type",
        "title": "TrainingVector"
      },
      "index": {
        "description": "vector used for deriving the parameters of Dirichlet density or mixture",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "TrainingVector",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:TrainingVectors",
      "description": {
        "fct-descr": "\u003cp\u003eA vector of training vectors.  This is the only vector that\n is not unboxed (for obvious reasons).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVectors",
        "fct-type": "type",
        "title": "TrainingVectors"
      },
      "index": {
        "description": "vector of training vectors This is the only vector that is not unboxed for obvious reasons",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "TrainingVectors",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Vectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:CG",
      "description": {
        "fct-descr": "\u003cp\u003eCG_DESCENT returned this result,\n which brought the derivation\n process to a halt.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "CG Result",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "CG"
      },
      "index": {
        "description": "CG DESCENT returned this result which brought the derivation process to halt",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "CG",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "CG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Delta",
      "description": {
        "fct-descr": "\u003cp\u003eThe difference between\n applications of the cost function\n dropped below the minimum delta.\n In other words, it coverged.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "Delta"
      },
      "index": {
        "description": "The difference between applications of the cost function dropped below the minimum delta In other words it coverged",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Delta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:MaxIter",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum number of iterations\n was reached while the delta was\n still greater than the minimum delta.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "MaxIter",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "MaxIter"
      },
      "index": {
        "description": "The maximum number of iterations was reached while the delta was still greater than the minimum delta",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "MaxIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Max Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Pred",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Pred",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "Pred"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Pred",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Pred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Result",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Result",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Step",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Step Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "Step",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:deltaSteps",
      "description": {
        "fct-descr": "\u003cp\u003eHow many estimation steps should be done\n before recalculating the delta.  If\n \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e1\u003c/code\u003e then it will be\n recalculated on every step.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "deltaSteps"
      },
      "index": {
        "description": "How many estimation steps should be done before recalculating the delta If deltaSteps is then it will be recalculated on every step",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "deltaSteps",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Steps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:iters",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of iterations spent.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "iters"
      },
      "index": {
        "description": "Number of iterations spent",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "iters",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:jumpDelta",
      "description": {
        "fct-descr": "\u003cp\u003eUsed only when calculating mixtures.\n When the delta drops below this cutoff\n the computation changes from estimating\n the alphas to estimatating the weights\n and vice-versa.  Should be greater than\n \u003ccode\u003eminDelta\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "jumpDelta"
      },
      "index": {
        "description": "Used only when calculating mixtures When the delta drops below this cutoff the computation changes from estimating the alphas to estimatating the weights and vice-versa Should be greater than minDelta",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "jumpDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastCost",
      "description": {
        "fct-descr": "\u003cp\u003eLast cost (i.e. the cost of the result).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "lastCost"
      },
      "index": {
        "description": "Last cost i.e the cost of the result",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "lastCost",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Cost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastDelta",
      "description": {
        "fct-descr": "\u003cp\u003eLast difference between costs.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "lastDelta"
      },
      "index": {
        "description": "Last difference between costs",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "lastDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxIter",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of iterations.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "maxIter"
      },
      "index": {
        "description": "Maximum number of iterations",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "maxIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxWeightIter",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of iterations on\n each weight step.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "maxWeightIter"
      },
      "index": {
        "description": "Maximum number of iterations on each weight step",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "maxWeightIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Weight Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:minDelta",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum delta to continue iterating.\n This is invariant of \u003ccode\u003edeltaSteps\u003c/code\u003e, which\n means that if \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e2\u003c/code\u003e then\n minDelta will be considered twice bigger\n to account for the different \u003ccode\u003edeltaSteps\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "minDelta"
      },
      "index": {
        "description": "Minimum delta to continue iterating This is invariant of deltaSteps which means that if deltaSteps is then minDelta will be considered twice bigger to account for the different deltaSteps",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "minDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Reason",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "Reason why the derivation was over",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "reason",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eResult obtained.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Options",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!a",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Result obtained",
        "hierarchy": "Math Statistics Dirichlet Options",
        "module": "Math.Statistics.Dirichlet.Options",
        "name": "result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet.Util",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet Util",
        "module": "Math.Statistics.Dirichlet.Util",
        "name": "Util",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#v:infinity",
      "description": {
        "fct-descr": "\u003cp\u003eInfinity, currently defined as \u003ccode\u003e1e100\u003c/code\u003e.  Used mainly as the\n initial cost.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Util",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Util.html#infinity",
        "fct-type": "function",
        "title": "infinity"
      },
      "index": {
        "description": "Infinity currently defined as e100 Used mainly as the initial cost",
        "hierarchy": "Math Statistics Dirichlet Util",
        "module": "Math.Statistics.Dirichlet.Util",
        "name": "infinity",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#v:logBeta",
      "description": {
        "fct-descr": "\u003cp\u003eLogarithm of the beta function applied to a vector.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet.Util",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Vector Double -\u003e Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Util.html#logBeta",
        "fct-type": "function",
        "title": "logBeta"
      },
      "index": {
        "description": "Logarithm of the beta function applied to vector",
        "hierarchy": "Math Statistics Dirichlet Util",
        "module": "Math.Statistics.Dirichlet.Util",
        "name": "logBeta",
        "normalized": "Vector Double-\u003eDouble",
        "package": "statistics-dirichlet",
        "partial": "Beta",
        "signature": "Vector Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports functions from\n \u003ca\u003eMath.Statistics.Dirichlet.Mixture\u003c/a\u003e and\n \u003ca\u003eMath.Statistics.Dirichlet.Options\u003c/a\u003e in a more digestable way.\n Since this library is under-documented, I recommend reading\n the documentation of the symbols re-exported here.\n\u003c/p\u003e\u003cp\u003eThis module does not use \u003ca\u003eMath.Statistics.Dirichlet.Density\u003c/a\u003e\n in any way.  If you don't need mixtures then you should\n probably use that module directly since it's faster and more\n reliable (less magic happens there).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "module",
        "fct-source": "src/Math-Statistics-Dirichlet.html",
        "fct-type": "module",
        "title": "Dirichlet"
      },
      "index": {
        "description": "This module re-exports functions from Math.Statistics.Dirichlet.Mixture and Math.Statistics.Dirichlet.Options in more digestable way Since this library is under-documented recommend reading the documentation of the symbols re-exported here This module does not use Math.Statistics.Dirichlet.Density in any way If you don need mixtures then you should probably use that module directly since it faster and more reliable less magic happens there",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Dirichlet",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Dirichlet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Component",
      "description": {
        "fct-descr": "\u003cp\u003eA list representation of a component of a Dirichlet mixture.\n Used by \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e only.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#Component",
        "fct-type": "type",
        "title": "Component"
      },
      "index": {
        "description": "list representation of component of Dirichlet mixture Used by fromList and toList only",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Component",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Delta",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum difference between costs to consider that the\n   process converged.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Delta",
        "fct-type": "type",
        "title": "Delta"
      },
      "index": {
        "description": "Maximum difference between costs to consider that the process converged",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Delta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:DirichletMixture",
      "description": {
        "fct-descr": "\u003cp\u003eA Dirichlet mixture.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "data",
        "title": "DirichletMixture"
      },
      "index": {
        "description": "Dirichlet mixture",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "DirichletMixture",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Dirichlet Mixture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate specifying when the training should be over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "Predicate specifying when the training should be over",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Predicate",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Reason",
      "description": {
        "fct-descr": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "data",
        "title": "Reason"
      },
      "index": {
        "description": "Reason why the derivation was over",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Reason",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a deriviation.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Result of deriviation",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:StepSize",
      "description": {
        "fct-descr": "\u003cp\u003eUsually denoted by lowercase greek letter eta (&#951;), size of\n   each step in the gradient. Should be greater than zero and\n   much less than one.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
        "fct-type": "newtype",
        "title": "StepSize"
      },
      "index": {
        "description": "Usually denoted by lowercase greek letter eta size of each step in the gradient Should be greater than zero and much less than one",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "StepSize",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Step Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingData",
      "description": {
        "fct-descr": "\u003cp\u003ePre-processed training vectors (see \u003ccode\u003e\u003ca\u003eprepareTraining\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "data",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#TrainingData",
        "fct-type": "data",
        "title": "TrainingData"
      },
      "index": {
        "description": "Pre-processed training vectors see prepareTraining",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "TrainingData",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingVector",
      "description": {
        "fct-descr": "\u003cp\u003eA vector used for deriving the parameters of a Dirichlet\n   density or mixture.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVector",
        "fct-type": "type",
        "title": "TrainingVector"
      },
      "index": {
        "description": "vector used for deriving the parameters of Dirichlet density or mixture",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "TrainingVector",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingVectors",
      "description": {
        "fct-descr": "\u003cp\u003eA vector of training vectors.  This is the only vector that\n is not unboxed (for obvious reasons).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "type",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVectors",
        "fct-type": "type",
        "title": "TrainingVectors"
      },
      "index": {
        "description": "vector of training vectors This is the only vector that is not unboxed for obvious reasons",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "TrainingVectors",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Training Vectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:CG",
      "description": {
        "fct-descr": "\u003cp\u003eCG_DESCENT returned this result,\n which brought the derivation\n process to a halt.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "CG Result",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "CG"
      },
      "index": {
        "description": "CG DESCENT returned this result which brought the derivation process to halt",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "CG",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "CG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:DM",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DM",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "DM"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "DM",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "DM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Delta",
      "description": {
        "fct-descr": "\u003cp\u003eThe difference between\n applications of the cost function\n dropped below the minimum delta.\n In other words, it coverged.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "Delta"
      },
      "index": {
        "description": "The difference between applications of the cost function dropped below the minimum delta In other words it coverged",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Delta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:MaxIter",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum number of iterations\n was reached while the delta was\n still greater than the minimum delta.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "MaxIter",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
        "fct-type": "function",
        "title": "MaxIter"
      },
      "index": {
        "description": "The maximum number of iterations was reached while the delta was still greater than the minimum delta",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "MaxIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Max Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Pred",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Pred",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "Pred"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Pred",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Pred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Result",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Result",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Step",
      "description": {
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Step Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "Step",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eCost function for deriving a Dirichlet mixture (equation\n 18).  This function is minimized by \u003ccode\u003e\u003ca\u003ederive\u003c/a\u003e\u003c/code\u003e.  Calculated\n using (17) and (54).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingData -\u003e DirichletMixture -\u003e Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#cost",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "Cost function for deriving Dirichlet mixture equation This function is minimized by derive Calculated using and",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "cost",
        "normalized": "TrainingData-\u003eDirichletMixture-\u003eDouble",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "TrainingData-\u003eDirichletMixture-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:deltaSteps",
      "description": {
        "fct-descr": "\u003cp\u003eHow many estimation steps should be done\n before recalculating the delta.  If\n \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e1\u003c/code\u003e then it will be\n recalculated on every step.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "deltaSteps"
      },
      "index": {
        "description": "How many estimation steps should be done before recalculating the delta If deltaSteps is then it will be recalculated on every step",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "deltaSteps",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Steps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:derive",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a Dirichlet mixture using a maximum likelihood method\n as described by Karplus et al (equation 25) using CG_DESCENT\n method by Hager and Zhang (see\n \u003ca\u003eNumeric.Optimization.Algorithms.HagerZhang05\u003c/a\u003e).  All training\n vectors should have the same length, however this is not\n verified.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e Predicate -\u003e StepSize -\u003e TrainingData -\u003e Result DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#derive",
        "fct-type": "function",
        "title": "derive"
      },
      "index": {
        "description": "Derive Dirichlet mixture using maximum likelihood method as described by Karplus et al equation using CG DESCENT method by Hager and Zhang see Numeric.Optimization.Algorithms.HagerZhang05 All training vectors should have the same length however this is not verified",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "derive",
        "normalized": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:dmDensities",
      "description": {
        "fct-descr": "\u003cp\u003eValues of all parameters of all densities.  This\n matrix has \u003ccode\u003elength dmWeights\u003c/code\u003e rows.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Matrix",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "dmDensities"
      },
      "index": {
        "description": "Values of all parameters of all densities This matrix has length dmWeights rows",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "dmDensities",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Densities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:dmWeights",
      "description": {
        "fct-descr": "\u003cp\u003eWeights of each density.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!(Vector Double)",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
        "fct-type": "function",
        "title": "dmWeights"
      },
      "index": {
        "description": "Weights of each density",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "dmWeights",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Weights",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eempty q n x\u003c/code\u003e is an \"empty\" Dirichlet mixture with \u003ccode\u003eq\u003c/code\u003e\n components and \u003ccode\u003en\u003c/code\u003e parameters.  Each component has size \u003ccode\u003en\u003c/code\u003e,\n weight inversely proportional to its index and all alphas set\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "Int -\u003e Int -\u003e Double -\u003e DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is an empty Dirichlet mixture with components and parameters Each component has size weight inversely proportional to its index and all alphas set to",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "empty",
        "normalized": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e constructs a Dirichlet mixture from a\n non-empty list of components.  Each component has a weight and\n a list of alpha values.  The weights sum to 1, all lists must\n have the same number of values and every number must be\n non-negative.  None of these preconditions are verified.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "[Component] -\u003e DirichletMixture",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "fromList xs constructs Dirichlet mixture from non-empty list of components Each component has weight and list of alpha values The weights sum to all lists must have the same number of values and every number must be non-negative None of these preconditions are verified",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "fromList",
        "normalized": "[Component]-\u003eDirichletMixture",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "[Component]-\u003eDirichletMixture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:iters",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of iterations spent.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "iters"
      },
      "index": {
        "description": "Number of iterations spent",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "iters",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:jumpDelta",
      "description": {
        "fct-descr": "\u003cp\u003eUsed only when calculating mixtures.\n When the delta drops below this cutoff\n the computation changes from estimating\n the alphas to estimatating the weights\n and vice-versa.  Should be greater than\n \u003ccode\u003eminDelta\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "jumpDelta"
      },
      "index": {
        "description": "Used only when calculating mixtures When the delta drops below this cutoff the computation changes from estimating the alphas to estimatating the weights and vice-versa Should be greater than minDelta",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "jumpDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:lastCost",
      "description": {
        "fct-descr": "\u003cp\u003eLast cost (i.e. the cost of the result).\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Double",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "lastCost"
      },
      "index": {
        "description": "Last cost i.e the cost of the result",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "lastCost",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Cost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:lastDelta",
      "description": {
        "fct-descr": "\u003cp\u003eLast difference between costs.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "lastDelta"
      },
      "index": {
        "description": "Last difference between costs",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "lastDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:maxIter",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of iterations.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "maxIter"
      },
      "index": {
        "description": "Maximum number of iterations",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "maxIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:maxWeightIter",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of iterations on\n each weight step.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Int",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "maxWeightIter"
      },
      "index": {
        "description": "Maximum number of iterations on each weight step",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "maxWeightIter",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Weight Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:minDelta",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum delta to continue iterating.\n This is invariant of \u003ccode\u003edeltaSteps\u003c/code\u003e, which\n means that if \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e2\u003c/code\u003e then\n minDelta will be considered twice bigger\n to account for the different \u003ccode\u003edeltaSteps\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Delta",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
        "fct-type": "function",
        "title": "minDelta"
      },
      "index": {
        "description": "Minimum delta to continue iterating This is invariant of deltaSteps which means that if deltaSteps is then minDelta will be considered twice bigger to account for the different deltaSteps",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "minDelta",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:prepareTraining",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares training vectors to be used as training data.\n Anything that depends only on the training vectors is\n precalculated here.\n\u003c/p\u003e\u003cp\u003eWe also try to find columns where all training vectors are\n zero.  Those columns are removed from the derivation process\n and every component will have zero value on that column.  Note\n that at least one column should have non-zero training\n vectors.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "TrainingVectors -\u003e TrainingData",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#prepareTraining",
        "fct-type": "function",
        "title": "prepareTraining"
      },
      "index": {
        "description": "Prepares training vectors to be used as training data Anything that depends only on the training vectors is precalculated here We also try to find columns where all training vectors are zero Those columns are removed from the derivation process and every component will have zero value on that column Note that at least one column should have non-zero training vectors",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "prepareTraining",
        "normalized": "TrainingVectors-\u003eTrainingData",
        "package": "statistics-dirichlet",
        "partial": "Training",
        "signature": "TrainingVectors-\u003eTrainingData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!Reason",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "Reason why the derivation was over",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "reason",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eResult obtained.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "!a",
        "fct-source": "src/Math-Statistics-Dirichlet-Options.html#Result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Result obtained",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "result",
        "normalized": "",
        "package": "statistics-dirichlet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoList dm\u003c/code\u003e is the inverse of \u003ccode\u003efromList\u003c/code\u003e, constructs a list\n of components from a Dirichlet mixture.  There are no error\n conditions and \u003ccode\u003etoList . fromList == id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Statistics.Dirichlet",
        "fct-package": "statistics-dirichlet",
        "fct-signature": "DirichletMixture -\u003e [Component]",
        "fct-source": "src/Math-Statistics-Dirichlet-Mixture.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList dm is the inverse of fromList constructs list of components from Dirichlet mixture There are no error conditions and toList fromList id",
        "hierarchy": "Math Statistics Dirichlet",
        "module": "Math.Statistics.Dirichlet",
        "name": "toList",
        "normalized": "DirichletMixture-\u003e[Component]",
        "package": "statistics-dirichlet",
        "partial": "List",
        "signature": "DirichletMixture-\u003e[Component]"
      }
    }
  }
]