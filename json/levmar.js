[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor additional documentation see the\n \u003ca\u003edocumentation of the levmar C\u003c/a\u003e\n library which this library is based on:\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "module",
        "fct-source": "src/Numeric-LevMar.html",
        "fct-type": "module",
        "title": "LevMar"
      },
      "index": {
        "description": "For additional documentation see the documentation of the levmar library which this library is based on",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LevMar",
        "normalized": "",
        "package": "levmar",
        "partial": "Lev Mar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Constraints",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that these vectors have the same length as the number of parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "data",
        "title": "Constraints"
      },
      "index": {
        "description": "Ensure that these vectors have the same length as the number of parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Constraints",
        "normalized": "",
        "package": "levmar",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Info",
      "description": {
        "fct-descr": "\u003cp\u003eInformation regarding the minimization.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "data",
        "title": "Info"
      },
      "index": {
        "description": "Information regarding the minimization",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Info",
        "normalized": "",
        "package": "levmar",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ca\u003ejacobian\u003c/a\u003e\nof the \u003ccode\u003e\u003ca\u003eModel\u003c/a\u003e\u003c/code\u003e function. Expressed as a function from a vector of\nparameters to a matrix which for each expected sample describes the\npartial derivatives of the parameters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ensure that the length \u003ccode\u003em\u003c/code\u003e of the parameter vector equals the length of the\n   initial parameter vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the output matrix has the dimension \u003ccode\u003en\u003e\u003cm\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the\n   number of samples and \u003ccode\u003em\u003c/code\u003e is the number of parameters.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LevMar.html#Jacobian",
        "fct-type": "type",
        "title": "Jacobian"
      },
      "index": {
        "description": "The jacobian of the Model function Expressed as function from vector of parameters to matrix which for each expected sample describes the partial derivatives of the parameters Ensure that the length of the parameter vector equals the length of the initial parameter vector in levmar Ensure that the output matrix has the dimension where is the number of samples and is the number of parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Jacobian",
        "normalized": "",
        "package": "levmar",
        "partial": "Jacobian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LevMarError",
      "description": {
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "data",
        "title": "LevMarError"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LevMarError",
        "normalized": "",
        "package": "levmar",
        "partial": "Lev Mar Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LevMarable",
      "description": {
        "fct-descr": "\u003cp\u003eThe Levenberg-Marquardt algorithm is overloaded to work on \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "class",
        "fct-source": "src/Numeric-LevMar.html#LevMarable",
        "fct-type": "class",
        "title": "LevMarable"
      },
      "index": {
        "description": "The Levenberg-Marquardt algorithm is overloaded to work on Double and Float",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LevMarable",
        "normalized": "",
        "package": "levmar",
        "partial": "Lev Marable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:LinearConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eLinear constraints consisting of a constraints matrix, \u003ccode\u003ek\u003e\u003cm\u003c/code\u003e and\n   a right hand constraints vector, of length \u003ccode\u003ek\u003c/code\u003e where \u003ccode\u003em\u003c/code\u003e is the number of\n   parameters and \u003ccode\u003ek\u003c/code\u003e is the number of constraints.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LevMar.html#LinearConstraints",
        "fct-type": "type",
        "title": "LinearConstraints"
      },
      "index": {
        "description": "Linear constraints consisting of constraints matrix and right hand constraints vector of length where is the number of parameters and is the number of constraints",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LinearConstraints",
        "normalized": "",
        "package": "levmar",
        "partial": "Linear Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eA functional relation describing measurements represented as a function\nfrom a vector of parameters to a vector of expected samples.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ensure that the length \u003ccode\u003em\u003c/code\u003e of the parameter vector equals the length of the\n   initial parameter vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the length \u003ccode\u003en\u003c/code\u003e of the output sample vector equals the length of\n   the sample vector in \u003ccode\u003e\u003ca\u003elevmar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Ensure that the length \u003ccode\u003en\u003c/code\u003e of the output sample vector vector is bigger than or\n   equal to the length \u003ccode\u003em\u003c/code\u003e of the parameter vector.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LevMar.html#Model",
        "fct-type": "type",
        "title": "Model"
      },
      "index": {
        "description": "functional relation describing measurements represented as function from vector of parameters to vector of expected samples Ensure that the length of the parameter vector equals the length of the initial parameter vector in levmar Ensure that the length of the output sample vector equals the length of the sample vector in levmar Ensure that the length of the output sample vector vector is bigger than or equal to the length of the parameter vector",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Model",
        "normalized": "",
        "package": "levmar",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eMinimization options\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Minimization options",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Options",
        "normalized": "",
        "package": "levmar",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Params",
      "description": {
        "fct-descr": "\u003cp\u003eParameter vector of length \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003em \u003c= n\u003c/code\u003e where \u003ccode\u003en\u003c/code\u003e is the length of the \u003ccode\u003e\u003ca\u003eSamples\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LevMar.html#Params",
        "fct-type": "type",
        "title": "Params"
      },
      "index": {
        "description": "Parameter vector of length Ensure that where is the length of the Samples vector",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Params",
        "normalized": "",
        "package": "levmar",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:Samples",
      "description": {
        "fct-descr": "\u003cp\u003eSample vector of length \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003en \u003e= m\u003c/code\u003e where \u003ccode\u003em\u003c/code\u003e is the length of the \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "type",
        "fct-source": "src/Numeric-LevMar.html#Samples",
        "fct-type": "type",
        "title": "Samples"
      },
      "index": {
        "description": "Sample vector of length Ensure that where is the length of the Params vector",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Samples",
        "normalized": "",
        "package": "levmar",
        "partial": "Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#t:StopReason",
      "description": {
        "fct-descr": "\u003cp\u003eReason for terminating.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "data",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "data",
        "title": "StopReason"
      },
      "index": {
        "description": "Reason for terminating",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "StopReason",
        "normalized": "",
        "package": "levmar",
        "partial": "Stop Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:ConstraintMatrixNotFullRowRank",
      "description": {
        "fct-descr": "\u003cp\u003eConstraints matrix is not of full row\n   rank.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "ConstraintMatrixNotFullRowRank",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "ConstraintMatrixNotFullRowRank"
      },
      "index": {
        "description": "Constraints matrix is not of full row rank",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "ConstraintMatrixNotFullRowRank",
        "normalized": "",
        "package": "levmar",
        "partial": "Constraint Matrix Not Full Row Rank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:ConstraintMatrixRowsGtCols",
      "description": {
        "fct-descr": "\u003cp\u003eThe matrix of constraints cannot have\n   more rows than columns.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "ConstraintMatrixRowsGtCols",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "ConstraintMatrixRowsGtCols"
      },
      "index": {
        "description": "The matrix of constraints cannot have more rows than columns",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "ConstraintMatrixRowsGtCols",
        "normalized": "",
        "package": "levmar",
        "partial": "Constraint Matrix Rows Gt Cols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Constraints",
      "description": {
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "Constraints",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "function",
        "title": "Constraints"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Constraints",
        "normalized": "",
        "package": "levmar",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:FailedBoxCheck",
      "description": {
        "fct-descr": "\u003cp\u003eAt least one lower bound exceeds the\n   upper one.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "FailedBoxCheck",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "FailedBoxCheck"
      },
      "index": {
        "description": "At least one lower bound exceeds the upper one",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "FailedBoxCheck",
        "normalized": "",
        "package": "levmar",
        "partial": "Failed Box Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Info",
      "description": {
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "Info",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Info",
        "normalized": "",
        "package": "levmar",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:InvalidValues",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because model function returned invalid values\n   (i.e. NaN or Inf). This is a user error.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "InvalidValues",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "InvalidValues"
      },
      "index": {
        "description": "Stopped because model function returned invalid values i.e NaN or Inf This is user error",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "InvalidValues",
        "normalized": "",
        "package": "levmar",
        "partial": "Invalid Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:LapackError",
      "description": {
        "fct-descr": "\u003cp\u003eA call to a lapack subroutine failed\n   in the underlying C levmar library.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "LapackError",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "LapackError"
      },
      "index": {
        "description": "call to lapack subroutine failed in the underlying levmar library",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LapackError",
        "normalized": "",
        "package": "levmar",
        "partial": "Lapack Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:LevMarError",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric error (not one of the others)\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "LevMarError",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "LevMarError"
      },
      "index": {
        "description": "Generic error not one of the others",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "LevMarError",
        "normalized": "",
        "package": "levmar",
        "partial": "Lev Mar Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:MaxIterations",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because maximum iterations was reached.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "MaxIterations",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "MaxIterations"
      },
      "index": {
        "description": "Stopped because maximum iterations was reached",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "MaxIterations",
        "normalized": "",
        "package": "levmar",
        "partial": "Max Iterations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:MemoryAllocationFailure",
      "description": {
        "fct-descr": "\u003cp\u003eA call to \u003ccode\u003emalloc\u003c/code\u003e failed in the\n   underlying C levmar library.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "MemoryAllocationFailure",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "MemoryAllocationFailure"
      },
      "index": {
        "description": "call to malloc failed in the underlying levmar library",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "MemoryAllocationFailure",
        "normalized": "",
        "package": "levmar",
        "partial": "Memory Allocation Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:Opts",
      "description": {
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "Opts",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "Opts"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "Opts",
        "normalized": "",
        "package": "levmar",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SingularMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because of singular matrix. Restart from current\n   estimated parameters with increased \u003ccode\u003e\u003ca\u003eoptScaleInitMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "SingularMatrix",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "SingularMatrix"
      },
      "index": {
        "description": "Stopped because of singular matrix Restart from current estimated parameters with increased optScaleInitMu",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "SingularMatrix",
        "normalized": "",
        "package": "levmar",
        "partial": "Singular Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallDp",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because of small Dp.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "SmallDp",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "SmallDp"
      },
      "index": {
        "description": "Stopped because of small Dp",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "SmallDp",
        "normalized": "",
        "package": "levmar",
        "partial": "Small Dp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallGradient",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because of small gradient \u003ccode\u003eJ^T e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "SmallGradient",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "SmallGradient"
      },
      "index": {
        "description": "Stopped because of small gradient",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "SmallGradient",
        "normalized": "",
        "package": "levmar",
        "partial": "Small Gradient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallNorm2E",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because of small \u003ccode\u003e||e||_2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "SmallNorm2E",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "SmallNorm2E"
      },
      "index": {
        "description": "Stopped because of small",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "SmallNorm2E",
        "normalized": "",
        "package": "levmar",
        "partial": "Small Norm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:SmallestError",
      "description": {
        "fct-descr": "\u003cp\u003eStopped because no further error reduction is\n   possible. Restart with increased \u003ccode\u003e\u003ca\u003eoptScaleInitMu\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "SmallestError",
        "fct-source": "src/Numeric-LevMar.html#StopReason",
        "fct-type": "function",
        "title": "SmallestError"
      },
      "index": {
        "description": "Stopped because no further error reduction is possible Restart with increased optScaleInitMu",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "SmallestError",
        "normalized": "",
        "package": "levmar",
        "partial": "Smallest Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:TooFewMeasurements",
      "description": {
        "fct-descr": "\u003cp\u003eCannot solve a problem with fewer\n   measurements than unknowns.  In case\n   linear constraints are provided, this\n   error is also returned when the number\n   of measurements is smaller than the\n   number of unknowns minus the number of\n   equality constraints.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "TooFewMeasurements",
        "fct-source": "src/Numeric-LevMar.html#LevMarError",
        "fct-type": "function",
        "title": "TooFewMeasurements"
      },
      "index": {
        "description": "Cannot solve problem with fewer measurements than unknowns In case linear constraints are provided this error is also returned when the number of measurements is smaller than the number of unknowns minus the number of equality constraints",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "TooFewMeasurements",
        "normalized": "",
        "package": "levmar",
        "partial": "Too Few Measurements",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:defaultOpts",
      "description": {
        "fct-descr": "\u003cp\u003eDefault minimization options\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "Options r",
        "fct-source": "src/Numeric-LevMar.html#defaultOpts",
        "fct-type": "function",
        "title": "defaultOpts"
      },
      "index": {
        "description": "Default minimization options",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "defaultOpts",
        "normalized": "",
        "package": "levmar",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infMuDivMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emu/max[J^T J]_ii ]\u003c/code\u003e at estimated parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infMuDivMax"
      },
      "index": {
        "description": "mu max ii at estimated parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infMuDivMax",
        "normalized": "",
        "package": "levmar",
        "partial": "Mu Div Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2Dp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e||Dp||_2\u003c/code\u003e            at estimated parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNorm2Dp"
      },
      "index": {
        "description": "Dp at estimated parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNorm2Dp",
        "normalized": "",
        "package": "levmar",
        "partial": "Norm Dp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2E",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e||e||_2\u003c/code\u003e             at estimated parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNorm2E"
      },
      "index": {
        "description": "at estimated parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNorm2E",
        "normalized": "",
        "package": "levmar",
        "partial": "Norm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNorm2initE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e||e||_2\u003c/code\u003e             at initial parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNorm2initE"
      },
      "index": {
        "description": "at initial parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNorm2initE",
        "normalized": "",
        "package": "levmar",
        "partial": "Norm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNormInfJacTe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e||J^T e||_inf\u003c/code\u003e       at estimated parameters.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNormInfJacTe"
      },
      "index": {
        "description": "inf at estimated parameters",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNormInfJacTe",
        "normalized": "",
        "package": "levmar",
        "partial": "Norm Inf Jac Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumFuncEvals",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of function evaluations.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNumFuncEvals"
      },
      "index": {
        "description": "Number of function evaluations",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNumFuncEvals",
        "normalized": "",
        "package": "levmar",
        "partial": "Num Func Evals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumIter",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of iterations.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNumIter"
      },
      "index": {
        "description": "Number of iterations",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNumIter",
        "normalized": "",
        "package": "levmar",
        "partial": "Num Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumJacobEvals",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of jacobian evaluations.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNumJacobEvals"
      },
      "index": {
        "description": "Number of jacobian evaluations",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNumJacobEvals",
        "normalized": "",
        "package": "levmar",
        "partial": "Num Jacob Evals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infNumLinSysSolved",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of linear systems solved,\n   i.e. attempts for reducing error.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infNumLinSysSolved"
      },
      "index": {
        "description": "Number of linear systems solved i.e attempts for reducing error",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infNumLinSysSolved",
        "normalized": "",
        "package": "levmar",
        "partial": "Num Lin Sys Solved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:infStopReason",
      "description": {
        "fct-descr": "\u003cp\u003eReason for terminating.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!StopReason",
        "fct-source": "src/Numeric-LevMar.html#Info",
        "fct-type": "function",
        "title": "infStopReason"
      },
      "index": {
        "description": "Reason for terminating",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "infStopReason",
        "normalized": "",
        "package": "levmar",
        "partial": "Stop Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:levmar",
      "description": {
        "fct-descr": "\u003cp\u003eThe Levenberg-Marquardt algorithm.\n\u003c/p\u003e\u003cp\u003eReturns a triple of the found parameters, a structure containing\n information about the minimization and the covariance matrix\n corresponding to LS solution.\n\u003c/p\u003e\u003cp\u003eEnsure that \u003ccode\u003en \u003e= m\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "levmar",
        "fct-source": "src/Numeric-LevMar.html#levmar",
        "fct-type": "method",
        "title": "levmar"
      },
      "index": {
        "description": "The Levenberg-Marquardt algorithm Returns triple of the found parameters structure containing information about the minimization and the covariance matrix corresponding to LS solution Ensure that",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "levmar",
        "normalized": "",
        "package": "levmar",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:linearConstraints",
      "description": {
        "fct-descr": "\u003cp\u003eOptional linear constraints\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!(Maybe (LinearConstraints r))",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "function",
        "title": "linearConstraints"
      },
      "index": {
        "description": "Optional linear constraints",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "linearConstraints",
        "normalized": "",
        "package": "levmar",
        "partial": "Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:lowerBounds",
      "description": {
        "fct-descr": "\u003cp\u003eOptional lower bounds\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!(Maybe (Params r))",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "function",
        "title": "lowerBounds"
      },
      "index": {
        "description": "Optional lower bounds",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "lowerBounds",
        "normalized": "",
        "package": "levmar",
        "partial": "Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optDelta",
      "description": {
        "fct-descr": "\u003cp\u003eStep used in the difference\n approximation to the Jacobian. If\n \u003ccode\u003eoptDelta\u003c0\u003c/code\u003e, the Jacobian is approximated\n with central differences which are more\n accurate (but slower!)  compared to the\n forward differences employed by default.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "optDelta"
      },
      "index": {
        "description": "Step used in the difference approximation to the Jacobian If optDelta the Jacobian is approximated with central differences which are more accurate but slower compared to the forward differences employed by default",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "optDelta",
        "normalized": "",
        "package": "levmar",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optScaleInitMu",
      "description": {
        "fct-descr": "\u003cp\u003eScale factor for initial \u003cem\u003emu\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "optScaleInitMu"
      },
      "index": {
        "description": "Scale factor for initial mu",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "optScaleInitMu",
        "normalized": "",
        "package": "levmar",
        "partial": "Scale Init Mu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNorm2Dp",
      "description": {
        "fct-descr": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||Dp||_2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "optStopNorm2Dp"
      },
      "index": {
        "description": "Stopping thresholds for Dp",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "optStopNorm2Dp",
        "normalized": "",
        "package": "levmar",
        "partial": "Stop Norm Dp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNorm2E",
      "description": {
        "fct-descr": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||e||_2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "optStopNorm2E"
      },
      "index": {
        "description": "Stopping thresholds for",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "optStopNorm2E",
        "normalized": "",
        "package": "levmar",
        "partial": "Stop Norm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:optStopNormInfJacTe",
      "description": {
        "fct-descr": "\u003cp\u003eStopping thresholds for \u003ccode\u003e||J^T e||_inf\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!r",
        "fct-source": "src/Numeric-LevMar.html#Options",
        "fct-type": "function",
        "title": "optStopNormInfJacTe"
      },
      "index": {
        "description": "Stopping thresholds for inf",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "optStopNormInfJacTe",
        "normalized": "",
        "package": "levmar",
        "partial": "Stop Norm Inf Jac Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:upperBounds",
      "description": {
        "fct-descr": "\u003cp\u003eOptional upper bounds\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!(Maybe (Params r))",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "function",
        "title": "upperBounds"
      },
      "index": {
        "description": "Optional upper bounds",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "upperBounds",
        "normalized": "",
        "package": "levmar",
        "partial": "Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/levmar/docs/Numeric-LevMar.html#v:weights",
      "description": {
        "fct-descr": "\u003cp\u003eOptional weights\n\u003c/p\u003e",
        "fct-module": "Numeric.LevMar",
        "fct-package": "levmar",
        "fct-signature": "!(Maybe (Params r))",
        "fct-source": "src/Numeric-LevMar.html#Constraints",
        "fct-type": "function",
        "title": "weights"
      },
      "index": {
        "description": "Optional weights",
        "hierarchy": "Numeric LevMar",
        "module": "Numeric.LevMar",
        "name": "weights",
        "normalized": "",
        "package": "levmar",
        "partial": "",
        "signature": ""
      }
    }
  }
]