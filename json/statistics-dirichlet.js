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
        "word": "statistics-dirichlet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "Density",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Density.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "Density",
          "package": "statistics-dirichlet",
          "partial": "Density",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Dirichlet density.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "DirichletDensity",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
          "type": "newtype"
        },
        "index": {
          "description": "Dirichlet density",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "DirichletDensity",
          "package": "statistics-dirichlet",
          "partial": "Dirichlet Density",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#t:DirichletDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "DD",
          "package": "statistics-dirichlet",
          "signature": "DD",
          "source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "DD",
          "package": "statistics-dirichlet",
          "partial": "DD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:DD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost function for deriving a Dirichlet density (equation\n 18).  This function is minimized by \u003ccode\u003e\u003ca\u003ederive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "cost",
          "package": "statistics-dirichlet",
          "signature": "TrainingVectors -\u003e DirichletDensity -\u003e Double",
          "source": "src/Math-Statistics-Dirichlet-Density.html#cost",
          "type": "function"
        },
        "index": {
          "description": "Cost function for deriving Dirichlet density equation This function is minimized by derive",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "cost",
          "normalized": "TrainingVectors-\u003eDirichletDensity-\u003eDouble",
          "package": "statistics-dirichlet",
          "signature": "TrainingVectors-\u003eDirichletDensity-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:cost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a Dirichlet density using a maximum likelihood method\n as described by Karplus et al (equation 26).  All training\n vectors should have the same length, however this is not\n verified.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "derive",
          "package": "statistics-dirichlet",
          "signature": "DirichletDensity -\u003e Predicate -\u003e StepSize -\u003e TrainingVectors -\u003e Result DirichletDensity",
          "source": "src/Math-Statistics-Dirichlet-Density.html#derive",
          "type": "function"
        },
        "index": {
          "description": "Derive Dirichlet density using maximum likelihood method as described by Karplus et al equation All training vectors should have the same length however this is not verified",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "derive",
          "normalized": "DirichletDensity-\u003ePredicate-\u003eStepSize-\u003eTrainingVectors-\u003eResult DirichletDensity",
          "package": "statistics-dirichlet",
          "signature": "DirichletDensity-\u003ePredicate-\u003eStepSize-\u003eTrainingVectors-\u003eResult DirichletDensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:derive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eempty n x\u003c/code\u003e is an \"empty\" Dirichlet density with size\n \u003ccode\u003en\u003c/code\u003e and all alphas set to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "empty",
          "package": "statistics-dirichlet",
          "signature": "Int -\u003e Double -\u003e DirichletDensity",
          "source": "src/Math-Statistics-Dirichlet-Density.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty is an empty Dirichlet density with size and all alphas set to",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "empty",
          "normalized": "Int-\u003eDouble-\u003eDirichletDensity",
          "package": "statistics-dirichlet",
          "signature": "Int-\u003eDouble-\u003eDirichletDensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e constructs a Dirichlet density from a list of\n alpha values.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "fromList",
          "package": "statistics-dirichlet",
          "signature": "[Double] -\u003e DirichletDensity",
          "source": "src/Math-Statistics-Dirichlet-Density.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "fromList xs constructs Dirichlet density from list of alpha values",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "fromList",
          "normalized": "[Double]-\u003eDirichletDensity",
          "package": "statistics-dirichlet",
          "partial": "List",
          "signature": "[Double]-\u003eDirichletDensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoList d\u003c/code\u003e deconstructs a Dirichlet density to a list of\n alpha values.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "toList",
          "package": "statistics-dirichlet",
          "signature": "DirichletDensity -\u003e [Double]",
          "source": "src/Math-Statistics-Dirichlet-Density.html#toList",
          "type": "function"
        },
        "index": {
          "description": "toList deconstructs Dirichlet density to list of alpha values",
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "toList",
          "normalized": "DirichletDensity-\u003e[Double]",
          "package": "statistics-dirichlet",
          "partial": "List",
          "signature": "DirichletDensity-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "unDD",
          "package": "statistics-dirichlet",
          "signature": "Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Density.html#DirichletDensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Density",
          "module": "Math.Statistics.Dirichlet.Density",
          "name": "unDD",
          "package": "statistics-dirichlet",
          "partial": "DD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Density.html#v:unDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplement matrices using plain \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es with data stored in\n row-major order (i.e. the first elements correspond to the\n first row).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "Matrix",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Implement matrices using plain Vector with data stored in row-major order i.e the first elements correspond to the first row",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "Matrix",
          "package": "statistics-dirichlet",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA matrix.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "Matrix",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "matrix",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "Matrix",
          "package": "statistics-dirichlet",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement at position.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "(!)",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e (Int, Int) -\u003e Double",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Element at position",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "(!) !",
          "normalized": "Matrix-\u003e(Int,Int)-\u003eDouble",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003e(Int,Int)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003em !!! i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th row of the matrix.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "(!!!)",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e Int -\u003e Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "description": "is the th row of the matrix",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "(!!!) !!!",
          "normalized": "Matrix-\u003eInt-\u003eVector Double",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "M",
          "package": "statistics-dirichlet",
          "signature": "M",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "M",
          "package": "statistics-dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows)\u003c/em\u003e \u003ccode\u003em \u003ccode\u003e\u003ca\u003ecol\u003c/a\u003e\u003c/code\u003e i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th column of the matrix.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "col",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e Int -\u003e Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#col",
          "type": "function"
        },
        "index": {
          "description": "rows col is the th column of the matrix",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "col",
          "normalized": "Matrix-\u003eInt-\u003eVector Double",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows*cols)\u003c/em\u003e Columns of the matrix.  Each element takes\n \u003cem\u003eO(rows)\u003c/em\u003e time and storage.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "cols",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e Vector (Vector Double)",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#cols",
          "type": "function"
        },
        "index": {
          "description": "rows cols Columns of the matrix Each element takes rows time and storage",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "cols",
          "normalized": "Matrix-\u003eVector(Vector Double)",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003eVector(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a matrix from a vector of vectors.  It *is not*\n verified that the vectors have the right length.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "fromVector",
          "package": "statistics-dirichlet",
          "signature": "v (w Double) -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Creates matrix from vector of vectors It is not verified that the vectors have the right length",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "fromVector",
          "normalized": "a(b Double)-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "Vector",
          "signature": "v(w Double)-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a matrix from a vector of vectors.  The vectors are\n transposed, so \u003ccode\u003efromVectorT\u003c/code\u003e is the same as \u003ccode\u003etranspose\n . fromVector\u003c/code\u003e. It *is* verified that the vectors have the\n right length.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "fromVectorT",
          "package": "statistics-dirichlet",
          "signature": "v (w Double) -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#fromVectorT",
          "type": "function"
        },
        "index": {
          "description": "Creates matrix from vector of vectors The vectors are transposed so fromVectorT is the same as transpose fromVector It is verified that the vectors have the right length",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "fromVectorT",
          "normalized": "a(b Double)-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "Vector",
          "signature": "v(w Double)-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:fromVectorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "imap",
          "package": "statistics-dirichlet",
          "signature": "((Int, Int) -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#imap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "imap",
          "normalized": "((Int,Int)-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "((Int,Int)-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "irowmap",
          "package": "statistics-dirichlet",
          "signature": "(Int -\u003e Vector Double -\u003e Double) -\u003e Matrix -\u003e Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#irowmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "irowmap",
          "normalized": "(Int-\u003eVector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
          "package": "statistics-dirichlet",
          "signature": "(Int-\u003eVector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:irowmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "izipWith",
          "package": "statistics-dirichlet",
          "signature": "((Int, Int) -\u003e Double -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#izipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "izipWith",
          "normalized": "((Int,Int)-\u003eDouble-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "With",
          "signature": "((Int,Int)-\u003eDouble-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:izipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mCols",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mCols",
          "package": "statistics-dirichlet",
          "partial": "Cols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mData",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double)",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mData",
          "package": "statistics-dirichlet",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mRows",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#Matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "mRows",
          "package": "statistics-dirichlet",
          "partial": "Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:mRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "map",
          "package": "statistics-dirichlet",
          "signature": "(Double -\u003e Double) -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "map",
          "normalized": "(Double-\u003eDouble)-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "(Double-\u003eDouble)-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA matrix where all elements are of the same value.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "replicate",
          "package": "statistics-dirichlet",
          "signature": "(Int, Int) -\u003e Double -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "matrix where all elements are of the same value",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "replicate",
          "normalized": "(Int,Int)-\u003eDouble-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "(Int,Int)-\u003eDouble-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA matrix where all rows are of the same value.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "replicateRows",
          "package": "statistics-dirichlet",
          "signature": "Int -\u003e Vector Double -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#replicateRows",
          "type": "function"
        },
        "index": {
          "description": "matrix where all rows are of the same value",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "replicateRows",
          "normalized": "Int-\u003eVector Double-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "Rows",
          "signature": "Int-\u003eVector Double-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:replicateRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rowmap",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double -\u003e Double) -\u003e Matrix -\u003e Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#rowmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rowmap",
          "normalized": "(Vector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double-\u003eDouble)-\u003eMatrix-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rowmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(rows)\u003c/em\u003e Rows of the matrix.  Each element takes \u003cem\u003eO(1)\u003c/em\u003e time and\n storage.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rows",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e Vector (Vector Double)",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#rows",
          "type": "function"
        },
        "index": {
          "description": "rows Rows of the matrix Each element takes time and storage",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rows",
          "normalized": "Matrix-\u003eVector(Vector Double)",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003eVector(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erzipWith f m n\u003c/code\u003e is a matrix with the same number of rows as\n \u003ccode\u003em\u003c/code\u003e.  The \u003ccode\u003ei\u003c/code\u003e-th row is obtained by applying \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003ei\u003c/code\u003e-th\n rows of \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rzipWith",
          "package": "statistics-dirichlet",
          "signature": "(Int -\u003e Vector Double -\u003e Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#rzipWith",
          "type": "function"
        },
        "index": {
          "description": "rzipWith is matrix with the same number of rows as The th row is obtained by applying to the th rows of and",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "rzipWith",
          "normalized": "(Int-\u003eVector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "With",
          "signature": "(Int-\u003eVector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:rzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the matrix.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "size",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e (Int, Int)",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#size",
          "type": "function"
        },
        "index": {
          "description": "Size of the matrix",
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "size",
          "normalized": "Matrix-\u003e(Int,Int)",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "transpose",
          "package": "statistics-dirichlet",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "transpose",
          "normalized": "Matrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "umap",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#umap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "umap",
          "normalized": "(Vector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:umap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "uzipWith",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double -\u003e Vector Double -\u003e Vector Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#uzipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "uzipWith",
          "normalized": "(Vector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "With",
          "signature": "(Vector Double-\u003eVector Double-\u003eVector Double)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:uzipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "zipWith",
          "package": "statistics-dirichlet",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Matrix.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Matrix",
          "module": "Math.Statistics.Dirichlet.Matrix",
          "name": "zipWith",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "package": "statistics-dirichlet",
          "partial": "With",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eMatrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Matrix.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "Mixture",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "Mixture",
          "package": "statistics-dirichlet",
          "partial": "Mixture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list representation of a component of a Dirichlet mixture.\n Used by \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e only.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "Component",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#Component",
          "type": "type"
        },
        "index": {
          "description": "list representation of component of Dirichlet mixture Used by fromList and toList only",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "Component",
          "package": "statistics-dirichlet",
          "partial": "Component",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Dirichlet mixture.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "DirichletMixture",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
          "type": "data"
        },
        "index": {
          "description": "Dirichlet mixture",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "DirichletMixture",
          "package": "statistics-dirichlet",
          "partial": "Dirichlet Mixture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:DirichletMixture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-processed training vectors (see \u003ccode\u003e\u003ca\u003eprepareTraining\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "TrainingData",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#TrainingData",
          "type": "data"
        },
        "index": {
          "description": "Pre-processed training vectors see prepareTraining",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "TrainingData",
          "package": "statistics-dirichlet",
          "partial": "Training Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#t:TrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edm !!! i\u003c/code\u003e is the \u003ccode\u003ei\u003c/code\u003e-th density.  No bounding checks are\n made.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "(!!!)",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e Int -\u003e Vector Double",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "description": "dm is the th density No bounding checks are made",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "(!!!) !!!",
          "normalized": "DirichletMixture-\u003eInt-\u003eVector Double",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "DM",
          "package": "statistics-dirichlet",
          "signature": "DM",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:DM\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:DM\"]"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "DM",
          "package": "statistics-dirichlet",
          "partial": "DM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:DM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost function for deriving a Dirichlet mixture (equation\n 18).  This function is minimized by \u003ccode\u003e\u003ca\u003ederive\u003c/a\u003e\u003c/code\u003e.  Calculated\n using (17) and (54).\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "cost",
          "package": "statistics-dirichlet",
          "signature": "TrainingData -\u003e DirichletMixture -\u003e Double",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#cost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:cost\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:cost\"]"
        },
        "index": {
          "description": "Cost function for deriving Dirichlet mixture equation This function is minimized by derive Calculated using and",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "cost",
          "normalized": "TrainingData-\u003eDirichletMixture-\u003eDouble",
          "package": "statistics-dirichlet",
          "signature": "TrainingData-\u003eDirichletMixture-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:cost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerivative of the cost function with respect \u003ccode\u003ew_{i,j}\u003c/code\u003e,\n defined by Equation (22).  The result is given in the same\n size and order as the \u003ccode\u003edmDensitites\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "del_cost_w",
          "package": "statistics-dirichlet",
          "signature": "TrainingData -\u003e DirichletMixture -\u003e Matrix",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#del_cost_w",
          "type": "function"
        },
        "index": {
          "description": "Derivative of the cost function with respect defined by Equation The result is given in the same size and order as the dmDensitites vector",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "del_cost_w",
          "normalized": "TrainingData-\u003eDirichletMixture-\u003eMatrix",
          "package": "statistics-dirichlet",
          "signature": "TrainingData-\u003eDirichletMixture-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:del_cost_w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a Dirichlet mixture using a maximum likelihood method\n as described by Karplus et al (equation 25) using CG_DESCENT\n method by Hager and Zhang (see\n \u003ca\u003eNumeric.Optimization.Algorithms.HagerZhang05\u003c/a\u003e).  All training\n vectors should have the same length, however this is not\n verified.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "derive",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e Predicate -\u003e StepSize -\u003e TrainingData -\u003e Result DirichletMixture",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#derive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:derive\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:derive\"]"
        },
        "index": {
          "description": "Derive Dirichlet mixture using maximum likelihood method as described by Karplus et al equation using CG DESCENT method by Hager and Zhang see Numeric.Optimization.Algorithms.HagerZhang05 All training vectors should have the same length however this is not verified",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "derive",
          "normalized": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture-\u003ePredicate-\u003eStepSize-\u003eTrainingData-\u003eResult DirichletMixture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:derive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of components in a dirichlet mixture.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmComponents",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e Int",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#dmComponents",
          "type": "function"
        },
        "index": {
          "description": "Number of components in dirichlet mixture",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmComponents",
          "normalized": "DirichletMixture-\u003eInt",
          "package": "statistics-dirichlet",
          "partial": "Components",
          "signature": "DirichletMixture-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues of all parameters of all densities.  This\n matrix has \u003ccode\u003elength dmWeights\u003c/code\u003e rows.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "dmDensities",
          "package": "statistics-dirichlet",
          "signature": "Matrix",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmDensities\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:dmDensities\"]"
        },
        "index": {
          "description": "Values of all parameters of all densities This matrix has length dmWeights rows",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmDensities",
          "package": "statistics-dirichlet",
          "partial": "Densities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmDensities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparated list of densities.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmDensitiesL",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e [DirichletDensity]",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#dmDensitiesL",
          "type": "function"
        },
        "index": {
          "description": "Separated list of densities",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmDensitiesL",
          "normalized": "DirichletMixture-\u003e[DirichletDensity]",
          "package": "statistics-dirichlet",
          "partial": "Densities",
          "signature": "DirichletMixture-\u003e[DirichletDensity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmDensitiesL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of parameters each component has.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmParameters",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e Int",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#dmParameters",
          "type": "function"
        },
        "index": {
          "description": "Number of parameters each component has",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmParameters",
          "normalized": "DirichletMixture-\u003eInt",
          "package": "statistics-dirichlet",
          "partial": "Parameters",
          "signature": "DirichletMixture-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeights of each density.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "dmWeights",
          "package": "statistics-dirichlet",
          "signature": "(Vector Double)",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmWeights\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:dmWeights\"]"
        },
        "index": {
          "description": "Weights of each density",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "dmWeights",
          "package": "statistics-dirichlet",
          "partial": "Weights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:dmWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eempty q n x\u003c/code\u003e is an \"empty\" Dirichlet mixture with \u003ccode\u003eq\u003c/code\u003e\n components and \u003ccode\u003en\u003c/code\u003e parameters.  Each component has size \u003ccode\u003en\u003c/code\u003e,\n weight inversely proportional to its index and all alphas set\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "empty",
          "package": "statistics-dirichlet",
          "signature": "Int -\u003e Int -\u003e Double -\u003e DirichletMixture",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:empty\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:empty\"]"
        },
        "index": {
          "description": "empty is an empty Dirichlet mixture with components and parameters Each component has size weight inversely proportional to its index and all alphas set to",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "empty",
          "normalized": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture",
          "package": "statistics-dirichlet",
          "signature": "Int-\u003eInt-\u003eDouble-\u003eDirichletMixture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Dirichlet mixture of one component from a\n Dirichlet density.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "fromDD",
          "package": "statistics-dirichlet",
          "signature": "DirichletDensity -\u003e DirichletMixture",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#fromDD",
          "type": "function"
        },
        "index": {
          "description": "Constructs Dirichlet mixture of one component from Dirichlet density",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "fromDD",
          "normalized": "DirichletDensity-\u003eDirichletMixture",
          "package": "statistics-dirichlet",
          "partial": "DD",
          "signature": "DirichletDensity-\u003eDirichletMixture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:fromDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e constructs a Dirichlet mixture from a\n non-empty list of components.  Each component has a weight and\n a list of alpha values.  The weights sum to 1, all lists must\n have the same number of values and every number must be\n non-negative.  None of these preconditions are verified.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "fromList",
          "package": "statistics-dirichlet",
          "signature": "[Component] -\u003e DirichletMixture",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#fromList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:fromList\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:fromList\"]"
        },
        "index": {
          "description": "fromList xs constructs Dirichlet mixture from non-empty list of components Each component has weight and list of alpha values The weights sum to all lists must have the same number of values and every number must be non-negative None of these preconditions are verified",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "fromList",
          "normalized": "[Component]-\u003eDirichletMixture",
          "package": "statistics-dirichlet",
          "partial": "List",
          "signature": "[Component]-\u003eDirichletMixture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepares training vectors to be used as training data.\n Anything that depends only on the training vectors is\n precalculated here.\n\u003c/p\u003e\u003cp\u003eWe also try to find columns where all training vectors are\n zero.  Those columns are removed from the derivation process\n and every component will have zero value on that column.  Note\n that at least one column should have non-zero training\n vectors.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "prepareTraining",
          "package": "statistics-dirichlet",
          "signature": "TrainingVectors -\u003e TrainingData",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#prepareTraining",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:prepareTraining\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:prepareTraining\"]"
        },
        "index": {
          "description": "Prepares training vectors to be used as training data Anything that depends only on the training vectors is precalculated here We also try to find columns where all training vectors are zero Those columns are removed from the derivation process and every component will have zero value on that column Note that at least one column should have non-zero training vectors",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "prepareTraining",
          "normalized": "TrainingVectors-\u003eTrainingData",
          "package": "statistics-dirichlet",
          "partial": "Training",
          "signature": "TrainingVectors-\u003eTrainingData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:prepareTraining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoList dm\u003c/code\u003e is the inverse of \u003ccode\u003efromList\u003c/code\u003e, constructs a list\n of components from a Dirichlet mixture.  There are no error\n conditions and \u003ccode\u003etoList . fromList == id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Mixture\",\"Math.Statistics.Dirichlet\"]",
          "name": "toList",
          "package": "statistics-dirichlet",
          "signature": "DirichletMixture -\u003e [Component]",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:toList\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:toList\"]"
        },
        "index": {
          "description": "toList dm is the inverse of fromList constructs list of components from Dirichlet mixture There are no error conditions and toList fromList id",
          "hierarchy": "Math Statistics Dirichlet Mixture",
          "module": "Math.Statistics.Dirichlet.Mixture",
          "name": "toList",
          "normalized": "DirichletMixture-\u003e[Component]",
          "package": "statistics-dirichlet",
          "partial": "List",
          "signature": "DirichletMixture-\u003e[Component]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Mixture.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Options",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Options",
          "package": "statistics-dirichlet",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum difference between costs to consider that the\n   process converged.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Delta",
          "type": "type"
        },
        "index": {
          "description": "Maximum difference between costs to consider that the process converged",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate specifying when the training should be over.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Predicate",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "Predicate specifying when the training should be over",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Predicate",
          "package": "statistics-dirichlet",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Reason",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
          "type": "data"
        },
        "index": {
          "description": "Reason why the derivation was over",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Reason",
          "package": "statistics-dirichlet",
          "partial": "Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a deriviation.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Result",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result of deriviation",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Result",
          "package": "statistics-dirichlet",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually denoted by lowercase greek letter eta (&#951;), size of\n   each step in the gradient. Should be greater than zero and\n   much less than one.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "StepSize",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
          "type": "newtype"
        },
        "index": {
          "description": "Usually denoted by lowercase greek letter eta size of each step in the gradient Should be greater than zero and much less than one",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "StepSize",
          "package": "statistics-dirichlet",
          "partial": "Step Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:StepSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector used for deriving the parameters of a Dirichlet\n   density or mixture.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "TrainingVector",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVector",
          "type": "type"
        },
        "index": {
          "description": "vector used for deriving the parameters of Dirichlet density or mixture",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "TrainingVector",
          "package": "statistics-dirichlet",
          "partial": "Training Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:TrainingVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector of training vectors.  This is the only vector that\n is not unboxed (for obvious reasons).\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "TrainingVectors",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVectors",
          "type": "type"
        },
        "index": {
          "description": "vector of training vectors This is the only vector that is not unboxed for obvious reasons",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "TrainingVectors",
          "package": "statistics-dirichlet",
          "partial": "Training Vectors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#t:TrainingVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCG_DESCENT returned this result,\n which brought the derivation\n process to a halt.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "CG",
          "package": "statistics-dirichlet",
          "signature": "CG Result",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:CG\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:CG\"]"
        },
        "index": {
          "description": "CG DESCENT returned this result which brought the derivation process to halt",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "CG",
          "package": "statistics-dirichlet",
          "partial": "CG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:CG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difference between\n applications of the cost function\n dropped below the minimum delta.\n In other words, it coverged.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "signature": "Delta",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Delta\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Delta\"]"
        },
        "index": {
          "description": "The difference between applications of the cost function dropped below the minimum delta In other words it coverged",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of iterations\n was reached while the delta was\n still greater than the minimum delta.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "MaxIter",
          "package": "statistics-dirichlet",
          "signature": "MaxIter",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:MaxIter\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:MaxIter\"]"
        },
        "index": {
          "description": "The maximum number of iterations was reached while the delta was still greater than the minimum delta",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "MaxIter",
          "package": "statistics-dirichlet",
          "partial": "Max Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:MaxIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "Pred",
          "package": "statistics-dirichlet",
          "signature": "Pred",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Pred\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Pred\"]"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Pred",
          "package": "statistics-dirichlet",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "Result",
          "package": "statistics-dirichlet",
          "signature": "Result",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Result\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Result\"]"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Result",
          "package": "statistics-dirichlet",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "Step",
          "package": "statistics-dirichlet",
          "signature": "Step Double",
          "source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Step\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:Step\"]"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "Step",
          "package": "statistics-dirichlet",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many estimation steps should be done\n before recalculating the delta.  If\n \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e1\u003c/code\u003e then it will be\n recalculated on every step.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "deltaSteps",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:deltaSteps\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:deltaSteps\"]"
        },
        "index": {
          "description": "How many estimation steps should be done before recalculating the delta If deltaSteps is then it will be recalculated on every step",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "deltaSteps",
          "package": "statistics-dirichlet",
          "partial": "Steps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:deltaSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of iterations spent.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "iters",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:iters\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:iters\"]"
        },
        "index": {
          "description": "Number of iterations spent",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "iters",
          "package": "statistics-dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:iters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed only when calculating mixtures.\n When the delta drops below this cutoff\n the computation changes from estimating\n the alphas to estimatating the weights\n and vice-versa.  Should be greater than\n \u003ccode\u003eminDelta\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "jumpDelta",
          "package": "statistics-dirichlet",
          "signature": "Delta",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:jumpDelta\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:jumpDelta\"]"
        },
        "index": {
          "description": "Used only when calculating mixtures When the delta drops below this cutoff the computation changes from estimating the alphas to estimatating the weights and vice-versa Should be greater than minDelta",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "jumpDelta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:jumpDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast cost (i.e. the cost of the result).\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "lastCost",
          "package": "statistics-dirichlet",
          "signature": "Double",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastCost\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:lastCost\"]"
        },
        "index": {
          "description": "Last cost i.e the cost of the result",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "lastCost",
          "package": "statistics-dirichlet",
          "partial": "Cost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast difference between costs.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "lastDelta",
          "package": "statistics-dirichlet",
          "signature": "Delta",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastDelta\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:lastDelta\"]"
        },
        "index": {
          "description": "Last difference between costs",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "lastDelta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:lastDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of iterations.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "maxIter",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxIter\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:maxIter\"]"
        },
        "index": {
          "description": "Maximum number of iterations",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "maxIter",
          "package": "statistics-dirichlet",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of iterations on\n each weight step.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "maxWeightIter",
          "package": "statistics-dirichlet",
          "signature": "Int",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxWeightIter\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:maxWeightIter\"]"
        },
        "index": {
          "description": "Maximum number of iterations on each weight step",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "maxWeightIter",
          "package": "statistics-dirichlet",
          "partial": "Weight Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:maxWeightIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum delta to continue iterating.\n This is invariant of \u003ccode\u003edeltaSteps\u003c/code\u003e, which\n means that if \u003ccode\u003edeltaSteps\u003c/code\u003e is \u003ccode\u003e2\u003c/code\u003e then\n minDelta will be considered twice bigger\n to account for the different \u003ccode\u003edeltaSteps\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "minDelta",
          "package": "statistics-dirichlet",
          "signature": "Delta",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:minDelta\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:minDelta\"]"
        },
        "index": {
          "description": "Minimum delta to continue iterating This is invariant of deltaSteps which means that if deltaSteps is then minDelta will be considered twice bigger to account for the different deltaSteps",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "minDelta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:minDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "reason",
          "package": "statistics-dirichlet",
          "signature": "Reason",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:reason\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:reason\"]"
        },
        "index": {
          "description": "Reason why the derivation was over",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "reason",
          "package": "statistics-dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult obtained.\n\u003c/p\u003e",
          "module": "[\"Math.Statistics.Dirichlet.Options\",\"Math.Statistics.Dirichlet\"]",
          "name": "result",
          "package": "statistics-dirichlet",
          "signature": "a",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:result\",\"http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#v:result\"]"
        },
        "index": {
          "description": "Result obtained",
          "hierarchy": "Math Statistics Dirichlet Options",
          "module": "Math.Statistics.Dirichlet.Options",
          "name": "result",
          "package": "statistics-dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Options.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "Util",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics Dirichlet Util",
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "Util",
          "package": "statistics-dirichlet",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinity, currently defined as \u003ccode\u003e1e100\u003c/code\u003e.  Used mainly as the\n initial cost.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "infinity",
          "package": "statistics-dirichlet",
          "signature": "Double",
          "source": "src/Math-Statistics-Dirichlet-Util.html#infinity",
          "type": "function"
        },
        "index": {
          "description": "Infinity currently defined as e100 Used mainly as the initial cost",
          "hierarchy": "Math Statistics Dirichlet Util",
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "infinity",
          "package": "statistics-dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogarithm of the beta function applied to a vector.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "logBeta",
          "package": "statistics-dirichlet",
          "signature": "Vector Double -\u003e Double",
          "source": "src/Math-Statistics-Dirichlet-Util.html#logBeta",
          "type": "function"
        },
        "index": {
          "description": "Logarithm of the beta function applied to vector",
          "hierarchy": "Math Statistics Dirichlet Util",
          "module": "Math.Statistics.Dirichlet.Util",
          "name": "logBeta",
          "normalized": "Vector Double-\u003eDouble",
          "package": "statistics-dirichlet",
          "partial": "Beta",
          "signature": "Vector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet-Util.html#v:logBeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports functions from\n \u003ca\u003eMath.Statistics.Dirichlet.Mixture\u003c/a\u003e and\n \u003ca\u003eMath.Statistics.Dirichlet.Options\u003c/a\u003e in a more digestable way.\n Since this library is under-documented, I recommend reading\n the documentation of the symbols re-exported here.\n\u003c/p\u003e\u003cp\u003eThis module does not use \u003ca\u003eMath.Statistics.Dirichlet.Density\u003c/a\u003e\n in any way.  If you don't need mixtures then you should\n probably use that module directly since it's faster and more\n reliable (less magic happens there).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Dirichlet",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports functions from Math.Statistics.Dirichlet.Mixture and Math.Statistics.Dirichlet.Options in more digestable way Since this library is under-documented recommend reading the documentation of the symbols re-exported here This module does not use Math.Statistics.Dirichlet.Density in any way If you don need mixtures then you should probably use that module directly since it faster and more reliable less magic happens there",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Dirichlet",
          "package": "statistics-dirichlet",
          "partial": "Dirichlet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list representation of a component of a Dirichlet mixture.\n Used by \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e only.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Component",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#Component",
          "type": "type"
        },
        "index": {
          "description": "list representation of component of Dirichlet mixture Used by fromList and toList only",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Component",
          "package": "statistics-dirichlet",
          "partial": "Component",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum difference between costs to consider that the\n   process converged.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Delta",
          "type": "type"
        },
        "index": {
          "description": "Maximum difference between costs to consider that the process converged",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Delta",
          "package": "statistics-dirichlet",
          "partial": "Delta",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Dirichlet mixture.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "DirichletMixture",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#DirichletMixture",
          "type": "data"
        },
        "index": {
          "description": "Dirichlet mixture",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "DirichletMixture",
          "package": "statistics-dirichlet",
          "partial": "Dirichlet Mixture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:DirichletMixture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate specifying when the training should be over.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Predicate",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "Predicate specifying when the training should be over",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Predicate",
          "package": "statistics-dirichlet",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason why the derivation was over.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Reason",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Reason",
          "type": "data"
        },
        "index": {
          "description": "Reason why the derivation was over",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Reason",
          "package": "statistics-dirichlet",
          "partial": "Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a deriviation.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "Result",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result of deriviation",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "Result",
          "package": "statistics-dirichlet",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually denoted by lowercase greek letter eta (&#951;), size of\n   each step in the gradient. Should be greater than zero and\n   much less than one.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "StepSize",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#StepSize",
          "type": "newtype"
        },
        "index": {
          "description": "Usually denoted by lowercase greek letter eta size of each step in the gradient Should be greater than zero and much less than one",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "StepSize",
          "package": "statistics-dirichlet",
          "partial": "Step Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:StepSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-processed training vectors (see \u003ccode\u003e\u003ca\u003eprepareTraining\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingData",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Mixture.html#TrainingData",
          "type": "data"
        },
        "index": {
          "description": "Pre-processed training vectors see prepareTraining",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingData",
          "package": "statistics-dirichlet",
          "partial": "Training Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector used for deriving the parameters of a Dirichlet\n   density or mixture.\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingVector",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVector",
          "type": "type"
        },
        "index": {
          "description": "vector used for deriving the parameters of Dirichlet density or mixture",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingVector",
          "package": "statistics-dirichlet",
          "partial": "Training Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector of training vectors.  This is the only vector that\n is not unboxed (for obvious reasons).\n\u003c/p\u003e",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingVectors",
          "package": "statistics-dirichlet",
          "source": "src/Math-Statistics-Dirichlet-Options.html#TrainingVectors",
          "type": "type"
        },
        "index": {
          "description": "vector of training vectors This is the only vector that is not unboxed for obvious reasons",
          "hierarchy": "Math Statistics Dirichlet",
          "module": "Math.Statistics.Dirichlet",
          "name": "TrainingVectors",
          "package": "statistics-dirichlet",
          "partial": "Training Vectors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-dirichlet/docs/Math-Statistics-Dirichlet.html#t:TrainingVectors"
      }
    }
  ]
]