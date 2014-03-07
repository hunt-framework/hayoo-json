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
        "word": "levmar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor additional documentation see the\n \u003ca\u003edocumentation of the levmar C\u003c/a\u003e\n library which this library is based on:\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LevMar",
          "name": "LevMar",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html",
          "type": "module"
        },
        "index": {
          "description": "For additional documentation see the documentation of the levmar library which this library is based on",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LevMar",
          "package": "levmar",
          "partial": "Lev Mar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that these vectors have the same length as the number of parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "Constraints",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "data"
        },
        "index": {
          "description": "Ensure that these vectors have the same length as the number of parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Constraints",
          "package": "levmar",
          "partial": "Constraints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation regarding the minimization.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "Info",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "data"
        },
        "index": {
          "description": "Information regarding the minimization",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Info",
          "package": "levmar",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003ejacobian\u003c/a\u003e\nof the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e function. Expressed as a function from a vector of\nparameters to a matrix which for each expected sample describes the\npartial derivatives of the parameters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ensure that the length \u003ccode\u003em\u003c/code\u003e of the parameter vector equals the length of the\n   initial parameter vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the output matrix has the dimension \u003ccode\u003en\u003e\u003cm\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the\n   number of samples and \u003ccode\u003em\u003c/code\u003e is the number of parameters.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.LevMar",
          "name": "Jacobian",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Jacobian",
          "type": "type"
        },
        "index": {
          "description": "The jacobian of the Model function Expressed as function from vector of parameters to matrix which for each expected sample describes the partial derivatives of the parameters Ensure that the length of the parameter vector equals the length of the initial parameter vector in levmar Ensure that the output matrix has the dimension where is the number of samples and is the number of parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Jacobian",
          "package": "levmar",
          "partial": "Jacobian",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LevMar",
          "name": "LevMarError",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LevMarError",
          "package": "levmar",
          "partial": "Lev Mar Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LevMarError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Levenberg-Marquardt algorithm is overloaded to work on \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "LevMarable",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#LevMarable",
          "type": "class"
        },
        "index": {
          "description": "The Levenberg-Marquardt algorithm is overloaded to work on Double and Float",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LevMarable",
          "package": "levmar",
          "partial": "Lev Marable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LevMarable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear constraints consisting of a constraints matrix, \u003ccode\u003ek\u003e\u003cm\u003c/code\u003e and\n   a right hand constraints vector, of length \u003ccode\u003ek\u003c/code\u003e where \u003ccode\u003em\u003c/code\u003e is the number of\n   parameters and \u003ccode\u003ek\u003c/code\u003e is the number of constraints.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "LinearConstraints",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#LinearConstraints",
          "type": "type"
        },
        "index": {
          "description": "Linear constraints consisting of constraints matrix and right hand constraints vector of length where is the number of parameters and is the number of constraints",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LinearConstraints",
          "package": "levmar",
          "partial": "Linear Constraints",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LinearConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functional relation describing measurements represented as a function\nfrom a vector of parameters to a vector of expected samples.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ensure that the length \u003ccode\u003em\u003c/code\u003e of the parameter vector equals the length of the\n   initial parameter vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the length \u003ccode\u003en\u003c/code\u003e of the output sample vector equals the length of\n   the sample vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the length \u003ccode\u003en\u003c/code\u003e of the output sample vector vector is bigger than or\n   equal to the length \u003ccode\u003em\u003c/code\u003e of the parameter vector.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.LevMar",
          "name": "Model",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Model",
          "type": "type"
        },
        "index": {
          "description": "functional relation describing measurements represented as function from vector of parameters to vector of expected samples Ensure that the length of the parameter vector equals the length of the initial parameter vector in levmar Ensure that the length of the output sample vector equals the length of the sample vector in levmar Ensure that the length of the output sample vector vector is bigger than or equal to the length of the parameter vector",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Model",
          "package": "levmar",
          "partial": "Model",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimization options\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "Options",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Minimization options",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Options",
          "package": "levmar",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter vector of length \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003em \u003c= n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the length of the \u003ccode\u003e\u003ca\u003eSamples\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "Params",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Params",
          "type": "type"
        },
        "index": {
          "description": "Parameter vector of length Ensure that where is the length of the Samples vector",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Params",
          "package": "levmar",
          "partial": "Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample vector of length \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003en \u003e= m\u003c/code\u003e where \u003ccode\u003em\u003c/code\u003e is the length of the \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "Samples",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#Samples",
          "type": "type"
        },
        "index": {
          "description": "Sample vector of length Ensure that where is the length of the Params vector",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Samples",
          "package": "levmar",
          "partial": "Samples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Samples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason for terminating.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "StopReason",
          "package": "levmar",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "data"
        },
        "index": {
          "description": "Reason for terminating",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "StopReason",
          "package": "levmar",
          "partial": "Stop Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:StopReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstraints matrix is not of full row\n   rank.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "ConstraintMatrixNotFullRowRank",
          "package": "levmar",
          "signature": "ConstraintMatrixNotFullRowRank",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "Constraints matrix is not of full row rank",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "ConstraintMatrixNotFullRowRank",
          "package": "levmar",
          "partial": "Constraint Matrix Not Full Row Rank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:ConstraintMatrixNotFullRowRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe matrix of constraints cannot have\n   more rows than columns.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "ConstraintMatrixRowsGtCols",
          "package": "levmar",
          "signature": "ConstraintMatrixRowsGtCols",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "The matrix of constraints cannot have more rows than columns",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "ConstraintMatrixRowsGtCols",
          "package": "levmar",
          "partial": "Constraint Matrix Rows Gt Cols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:ConstraintMatrixRowsGtCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LevMar",
          "name": "Constraints",
          "package": "levmar",
          "signature": "Constraints",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Constraints",
          "package": "levmar",
          "partial": "Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Constraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt least one lower bound exceeds the\n   upper one.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "FailedBoxCheck",
          "package": "levmar",
          "signature": "FailedBoxCheck",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "At least one lower bound exceeds the upper one",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "FailedBoxCheck",
          "package": "levmar",
          "partial": "Failed Box Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:FailedBoxCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LevMar",
          "name": "Info",
          "package": "levmar",
          "signature": "Info",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Info",
          "package": "levmar",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because model function returned invalid values\n   (i.e. NaN or Inf). This is a user error.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "InvalidValues",
          "package": "levmar",
          "signature": "InvalidValues",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because model function returned invalid values i.e NaN or Inf This is user error",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "InvalidValues",
          "package": "levmar",
          "partial": "Invalid Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:InvalidValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA call to a lapack subroutine failed\n   in the underlying C levmar library.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "LapackError",
          "package": "levmar",
          "signature": "LapackError",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "call to lapack subroutine failed in the underlying levmar library",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LapackError",
          "package": "levmar",
          "partial": "Lapack Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:LapackError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric error (not one of the others)\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "LevMarError",
          "package": "levmar",
          "signature": "LevMarError",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "Generic error not one of the others",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "LevMarError",
          "package": "levmar",
          "partial": "Lev Mar Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:LevMarError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because maximum iterations was reached.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "MaxIterations",
          "package": "levmar",
          "signature": "MaxIterations",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because maximum iterations was reached",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "MaxIterations",
          "package": "levmar",
          "partial": "Max Iterations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:MaxIterations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA call to \u003ccode\u003emalloc\u003c/code\u003e failed in the\n   underlying C levmar library.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "MemoryAllocationFailure",
          "package": "levmar",
          "signature": "MemoryAllocationFailure",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "call to malloc failed in the underlying levmar library",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "MemoryAllocationFailure",
          "package": "levmar",
          "partial": "Memory Allocation Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:MemoryAllocationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LevMar",
          "name": "Opts",
          "package": "levmar",
          "signature": "Opts",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "Opts",
          "package": "levmar",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because of singular matrix. Restart from current\n   estimated parameters with increased \u003ccode\u003e\u003ca\u003eoptScaleInitMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "SingularMatrix",
          "package": "levmar",
          "signature": "SingularMatrix",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because of singular matrix Restart from current estimated parameters with increased optScaleInitMu",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "SingularMatrix",
          "package": "levmar",
          "partial": "Singular Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SingularMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because of small Dp.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "SmallDp",
          "package": "levmar",
          "signature": "SmallDp",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because of small Dp",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "SmallDp",
          "package": "levmar",
          "partial": "Small Dp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallDp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because of small gradient \u003ccode\u003eJ^T e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "SmallGradient",
          "package": "levmar",
          "signature": "SmallGradient",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because of small gradient",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "SmallGradient",
          "package": "levmar",
          "partial": "Small Gradient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because of small \u003ccode\u003e||e||_2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "SmallNorm2E",
          "package": "levmar",
          "signature": "SmallNorm2E",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because of small",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "SmallNorm2E",
          "package": "levmar",
          "partial": "Small Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallNorm2E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopped because no further error reduction is\n   possible. Restart with increased \u003ccode\u003e\u003ca\u003eoptScaleInitMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "SmallestError",
          "package": "levmar",
          "signature": "SmallestError",
          "source": "src/Numeric-LevMar.html#StopReason",
          "type": "function"
        },
        "index": {
          "description": "Stopped because no further error reduction is possible Restart with increased optScaleInitMu",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "SmallestError",
          "package": "levmar",
          "partial": "Smallest Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallestError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCannot solve a problem with fewer\n   measurements than unknowns.  In case\n   linear constraints are provided, this\n   error is also returned when the number\n   of measurements is smaller than the\n   number of unknowns minus the number of\n   equality constraints.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "TooFewMeasurements",
          "package": "levmar",
          "signature": "TooFewMeasurements",
          "source": "src/Numeric-LevMar.html#LevMarError",
          "type": "function"
        },
        "index": {
          "description": "Cannot solve problem with fewer measurements than unknowns In case linear constraints are provided this error is also returned when the number of measurements is smaller than the number of unknowns minus the number of equality constraints",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "TooFewMeasurements",
          "package": "levmar",
          "partial": "Too Few Measurements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:TooFewMeasurements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault minimization options\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "defaultOpts",
          "package": "levmar",
          "signature": "Options r",
          "source": "src/Numeric-LevMar.html#defaultOpts",
          "type": "function"
        },
        "index": {
          "description": "Default minimization options",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "defaultOpts",
          "package": "levmar",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:defaultOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emu/max[J^T J]_ii ]\u003c/code\u003e at estimated parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infMuDivMax",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "mu max ii at estimated parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infMuDivMax",
          "package": "levmar",
          "partial": "Mu Div Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infMuDivMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e||Dp||_2\u003c/code\u003e            at estimated parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNorm2Dp",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Dp at estimated parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNorm2Dp",
          "package": "levmar",
          "partial": "Norm Dp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2Dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e||e||_2\u003c/code\u003e             at estimated parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNorm2E",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "at estimated parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNorm2E",
          "package": "levmar",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e||e||_2\u003c/code\u003e             at initial parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNorm2initE",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "at initial parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNorm2initE",
          "package": "levmar",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2initE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e||J^T e||_inf\u003c/code\u003e       at estimated parameters.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNormInfJacTe",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "inf at estimated parameters",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNormInfJacTe",
          "package": "levmar",
          "partial": "Norm Inf Jac Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNormInfJacTe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of function evaluations.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNumFuncEvals",
          "package": "levmar",
          "signature": "Int",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of function evaluations",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNumFuncEvals",
          "package": "levmar",
          "partial": "Num Func Evals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumFuncEvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of iterations.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNumIter",
          "package": "levmar",
          "signature": "Int",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of iterations",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNumIter",
          "package": "levmar",
          "partial": "Num Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of jacobian evaluations.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNumJacobEvals",
          "package": "levmar",
          "signature": "Int",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of jacobian evaluations",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNumJacobEvals",
          "package": "levmar",
          "partial": "Num Jacob Evals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumJacobEvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of linear systems solved,\n   i.e. attempts for reducing error.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infNumLinSysSolved",
          "package": "levmar",
          "signature": "Int",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Number of linear systems solved i.e attempts for reducing error",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infNumLinSysSolved",
          "package": "levmar",
          "partial": "Num Lin Sys Solved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumLinSysSolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason for terminating.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "infStopReason",
          "package": "levmar",
          "signature": "StopReason",
          "source": "src/Numeric-LevMar.html#Info",
          "type": "function"
        },
        "index": {
          "description": "Reason for terminating",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "infStopReason",
          "package": "levmar",
          "partial": "Stop Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infStopReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Levenberg-Marquardt algorithm.\n\u003c/p\u003e\u003cp\u003eReturns a triple of the found parameters, a structure containing\n information about the minimization and the covariance matrix\n corresponding to LS solution.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003en \u003e= m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "levmar",
          "package": "levmar",
          "signature": "levmar",
          "source": "src/Numeric-LevMar.html#levmar",
          "type": "method"
        },
        "index": {
          "description": "The Levenberg-Marquardt algorithm Returns triple of the found parameters structure containing information about the minimization and the covariance matrix corresponding to LS solution Ensure that",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "levmar",
          "package": "levmar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:levmar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional linear constraints\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "linearConstraints",
          "package": "levmar",
          "signature": "(Maybe (LinearConstraints r))",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "function"
        },
        "index": {
          "description": "Optional linear constraints",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "linearConstraints",
          "package": "levmar",
          "partial": "Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:linearConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional lower bounds\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "lowerBounds",
          "package": "levmar",
          "signature": "(Maybe (Params r))",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "function"
        },
        "index": {
          "description": "Optional lower bounds",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "lowerBounds",
          "package": "levmar",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:lowerBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep used in the difference\n approximation to the Jacobian. If\n \u003ccode\u003eoptDelta\u003c0\u003c/code\u003e, the Jacobian is approximated\n with central differences which are more\n accurate (but slower!)  compared to the\n forward differences employed by default.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "optDelta",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Step used in the difference approximation to the Jacobian If optDelta the Jacobian is approximated with central differences which are more accurate but slower compared to the forward differences employed by default",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "optDelta",
          "package": "levmar",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale factor for initial \u003cem\u003emu\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "optScaleInitMu",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Scale factor for initial mu",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "optScaleInitMu",
          "package": "levmar",
          "partial": "Scale Init Mu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optScaleInitMu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||Dp||_2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "optStopNorm2Dp",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Stopping thresholds for Dp",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "optStopNorm2Dp",
          "package": "levmar",
          "partial": "Stop Norm Dp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNorm2Dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||e||_2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "optStopNorm2E",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Stopping thresholds for",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "optStopNorm2E",
          "package": "levmar",
          "partial": "Stop Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNorm2E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||J^T e||_inf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "optStopNormInfJacTe",
          "package": "levmar",
          "signature": "r",
          "source": "src/Numeric-LevMar.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Stopping thresholds for inf",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "optStopNormInfJacTe",
          "package": "levmar",
          "partial": "Stop Norm Inf Jac Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNormInfJacTe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional upper bounds\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "upperBounds",
          "package": "levmar",
          "signature": "(Maybe (Params r))",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "function"
        },
        "index": {
          "description": "Optional upper bounds",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "upperBounds",
          "package": "levmar",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:upperBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional weights\n\u003c/p\u003e",
          "module": "Numeric.LevMar",
          "name": "weights",
          "package": "levmar",
          "signature": "(Maybe (Params r))",
          "source": "src/Numeric-LevMar.html#Constraints",
          "type": "function"
        },
        "index": {
          "description": "Optional weights",
          "hierarchy": "Numeric LevMar",
          "module": "Numeric.LevMar",
          "name": "weights",
          "package": "levmar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:weights"
      }
    }
  ]
]