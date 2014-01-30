[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module performs support vector regression on a set of training points in order to determine\n   the generating function.  Currently least squares support vector regression is implemented.  The\n   optimal solution to the Langrangian is found by a conjugate gradient algorithm (CGA).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "module",
        "fct-source": "src/SVM.html",
        "fct-type": "module",
        "title": "SVM"
      },
      "index": {
        "description": "This module performs support vector regression on set of training points in order to determine the generating function Currently least squares support vector regression is implemented The optimal solution to the Langrangian is found by conjugate gradient algorithm CGA",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "SVM",
        "normalized": "",
        "package": "svm",
        "partial": "SVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:DataSet",
      "description": {
        "fct-descr": "\u003cp\u003eEach data set is a list of vectors and values which are training points of the form\n f(x) = y forall {x,y}.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "data",
        "fct-source": "src/SVM.html#DataSet",
        "fct-type": "data",
        "title": "DataSet"
      },
      "index": {
        "description": "Each data set is list of vectors and values which are training points of the form forall",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "DataSet",
        "normalized": "",
        "package": "svm",
        "partial": "Data Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:KernelFunction",
      "description": {
        "fct-descr": "\u003cp\u003eEvery kernel function represents an inner product in feature space.  The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of kernel parameters that can be interpreted differently by each kernel function.\n\u003c/li\u003e\u003cli\u003e The first point in the inner product.\n\u003c/li\u003e\u003cli\u003e The second point in the inner product.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "newtype",
        "fct-source": "src/SVM.html#KernelFunction",
        "fct-type": "newtype",
        "title": "KernelFunction"
      },
      "index": {
        "description": "Every kernel function represents an inner product in feature space The parameters are list of kernel parameters that can be interpreted differently by each kernel function The first point in the inner product The second point in the inner product",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "KernelFunction",
        "normalized": "",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:KernelMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eThe kernel matrix has been implemented as an unboxed array for performance reasons.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "newtype",
        "fct-source": "src/SVM.html#KernelMatrix",
        "fct-type": "newtype",
        "title": "KernelMatrix"
      },
      "index": {
        "description": "The kernel matrix has been implemented as an unboxed array for performance reasons",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "KernelMatrix",
        "normalized": "",
        "package": "svm",
        "partial": "Kernel Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:LSSVM",
      "description": {
        "fct-descr": "\u003cp\u003eA least squares support vector machine.  The cost represents the relative expense of missing a\n      training versus a more complicated generating function.  The higher this number the better the fit\n      of the training set, but at a cost of poorer generalization.  The LSSVM uses every training point\n      in the solution and performs least squares regression on the dual of the problem.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "data",
        "fct-source": "src/SVM.html#LSSVM",
        "fct-type": "data",
        "title": "LSSVM"
      },
      "index": {
        "description": "least squares support vector machine The cost represents the relative expense of missing training versus more complicated generating function The higher this number the better the fit of the training set but at cost of poorer generalization The LSSVM uses every training point in the solution and performs least squares regression on the dual of the problem",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "LSSVM",
        "normalized": "",
        "package": "svm",
        "partial": "LSSVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:SVM",
      "description": {
        "fct-descr": "\u003cp\u003eA support vector machine (SVM) can estimate a function based upon some training data.\n      Instances of this class need only implement the dual cost and the kernel function.  Default\n      implementations are given for finding the SVM solution, for simulating a function and for\n      creating a kernel matrix from a set of training points.  All SVMs should return a solution\n      which contains a list of the support vectors and their dual weigths.  dcost represents the\n      coefficient of the dual cost function.  This term gets added to the diagonal elements of the\n      kernel matrix and may be different for each type of SVM.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "class",
        "fct-source": "src/SVM.html#SVM",
        "fct-type": "class",
        "title": "SVM"
      },
      "index": {
        "description": "support vector machine SVM can estimate function based upon some training data Instances of this class need only implement the dual cost and the kernel function Default implementations are given for finding the SVM solution for simulating function and for creating kernel matrix from set of training points All SVMs should return solution which contains list of the support vectors and their dual weigths dcost represents the coefficient of the dual cost function This term gets added to the diagonal elements of the kernel matrix and may be different for each type of SVM",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "SVM",
        "normalized": "",
        "package": "svm",
        "partial": "SVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:SVMSolution",
      "description": {
        "fct-descr": "\u003cp\u003eThe solution contains the dual weights, the support vectors and the bias.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "data",
        "fct-source": "src/SVM.html#SVMSolution",
        "fct-type": "data",
        "title": "SVMSolution"
      },
      "index": {
        "description": "The solution contains the dual weights the support vectors and the bias",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "SVMSolution",
        "normalized": "",
        "package": "svm",
        "partial": "SVMSolution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:DataSet",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "DataSet",
        "fct-source": "src/SVM.html#DataSet",
        "fct-type": "function",
        "title": "DataSet"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "DataSet",
        "normalized": "",
        "package": "svm",
        "partial": "Data Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:KernelFunction",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "KernelFunction ([Double] -\u003e [Double] -\u003e [Double] -\u003e Double)",
        "fct-source": "src/SVM.html#KernelFunction",
        "fct-type": "function",
        "title": "KernelFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "KernelFunction",
        "normalized": "KernelFunction([Double]-\u003e[Double]-\u003e[Double]-\u003eDouble)",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "KernelFunction([Double]-\u003e[Double]-\u003e[Double]-\u003eDouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:KernelMatrix",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "KernelMatrix DoubleArray",
        "fct-source": "src/SVM.html#KernelMatrix",
        "fct-type": "function",
        "title": "KernelMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "KernelMatrix",
        "normalized": "",
        "package": "svm",
        "partial": "Kernel Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:LSSVM",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "LSSVM",
        "fct-source": "src/SVM.html#LSSVM",
        "fct-type": "function",
        "title": "LSSVM"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "LSSVM",
        "normalized": "",
        "package": "svm",
        "partial": "LSSVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:SVMSolution",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "SVMSolution",
        "fct-source": "src/SVM.html#SVMSolution",
        "fct-type": "function",
        "title": "SVMSolution"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "SVMSolution",
        "normalized": "",
        "package": "svm",
        "partial": "SVMSolution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:alpha",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "DoubleArray",
        "fct-source": "src/SVM.html#SVMSolution",
        "fct-type": "function",
        "title": "alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "alpha",
        "normalized": "",
        "package": "svm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:bias",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "Double",
        "fct-source": "src/SVM.html#SVMSolution",
        "fct-type": "function",
        "title": "bias"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "bias",
        "normalized": "",
        "package": "svm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eThe cost coefficient in the Lagrangian.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "Double",
        "fct-source": "src/SVM.html#LSSVM",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "The cost coefficient in the Lagrangian",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "cost",
        "normalized": "",
        "package": "svm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:createKernelMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eKernelMatrix\u003c/a\u003e\u003c/code\u003e from the training points in the \u003ccode\u003e\u003ca\u003eDataSet\u003c/a\u003e\u003c/code\u003e.  If \u003ccode\u003ekf\u003c/code\u003e is the\n         \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e then the elements of the kernel matrix are given by \u003ccode\u003eK[i,j] = kf x[i] x[j]\u003c/code\u003e,\n         where the \u003ccode\u003ex[i]\u003c/code\u003e are taken from the training points.  The kernel matrix is symmetric and\n         positive semi-definite.Only the bottom half of the kernel matrix is stored.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "a -\u003e Array Int [Double] -\u003e KernelMatrix",
        "fct-source": "src/SVM.html#createKernelMatrix",
        "fct-type": "method",
        "title": "createKernelMatrix"
      },
      "index": {
        "description": "Creates KernelMatrix from the training points in the DataSet If kf is the KernelFunction then the elements of the kernel matrix are given by kf where the are taken from the training points The kernel matrix is symmetric and positive semi-definite.Only the bottom half of the kernel matrix is stored",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "createKernelMatrix",
        "normalized": "a-\u003eArray Int[Double]-\u003eKernelMatrix",
        "package": "svm",
        "partial": "Kernel Matrix",
        "signature": "a-\u003eArray Int[Double]-\u003eKernelMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:dcost",
      "description": {
        "fct-descr": "\u003cp\u003eThe derivative of the cost function is added to the diagonal elements of the kernel\n         matrix.  This places a cost on the norm of the solution, which helps prevent overfitting\n         of the training data.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "a -\u003e Double",
        "fct-source": "src/SVM.html#dcost",
        "fct-type": "method",
        "title": "dcost"
      },
      "index": {
        "description": "The derivative of the cost function is added to the diagonal elements of the kernel matrix This places cost on the norm of the solution which helps prevent overfitting of the training data",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "dcost",
        "normalized": "a-\u003eDouble",
        "package": "svm",
        "partial": "",
        "signature": "a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:evalKernel",
      "description": {
        "fct-descr": "\u003cp\u003eThis function provides access to the \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e used by the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "a -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#evalKernel",
        "fct-type": "method",
        "title": "evalKernel"
      },
      "index": {
        "description": "This function provides access to the KernelFunction used by the SVM",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "evalKernel",
        "normalized": "a-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel",
        "signature": "a-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:kf",
      "description": {
        "fct-descr": "\u003cp\u003eThe kernel function defines the feature space.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "KernelFunction",
        "fct-source": "src/SVM.html#LSSVM",
        "fct-type": "function",
        "title": "kf"
      },
      "index": {
        "description": "The kernel function defines the feature space",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "kf",
        "normalized": "",
        "package": "svm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:linearKernelFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a simple dot product between the two data points, corresponding to a featureless space.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#linearKernelFunction",
        "fct-type": "function",
        "title": "linearKernelFunction"
      },
      "index": {
        "description": "This is simple dot product between the two data points corresponding to featureless space",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "linearKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:mlpKernelFunction",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a solution similar to neural net.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#mlpKernelFunction",
        "fct-type": "function",
        "title": "mlpKernelFunction"
      },
      "index": {
        "description": "Provides solution similar to neural net",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "mlpKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:params",
      "description": {
        "fct-descr": "\u003cp\u003eAny parameters needed by the \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double]",
        "fct-source": "src/SVM.html#LSSVM",
        "fct-type": "function",
        "title": "params"
      },
      "index": {
        "description": "Any parameters needed by the KernelFunction",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "params",
        "normalized": "[Double]",
        "package": "svm",
        "partial": "",
        "signature": "[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:points",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "Array Int [Double]",
        "fct-source": "src/SVM.html#DataSet",
        "fct-type": "function",
        "title": "points"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "points",
        "normalized": "Array Int[Double]",
        "package": "svm",
        "partial": "",
        "signature": "Array Int[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:polyKernelFunction",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#polyKernelFunction",
        "fct-type": "function",
        "title": "polyKernelFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "polyKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:radialKernelFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the kernel when radial basis functions are used.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#radialKernelFunction",
        "fct-type": "function",
        "title": "radialKernelFunction"
      },
      "index": {
        "description": "This is the kernel when radial basis functions are used",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "radialKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:reciprocalKernelFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe reciprocal kernel is the result of exponential basis functions, exp(-k*(x+a)).  The inner\n product is an integral over all k \u003e= 0.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#reciprocalKernelFunction",
        "fct-type": "function",
        "title": "reciprocalKernelFunction"
      },
      "index": {
        "description": "The reciprocal kernel is the result of exponential basis functions exp The inner product is an integral over all",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "reciprocalKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes an \u003ccode\u003e\u003ca\u003eSVMSolution\u003c/a\u003e\u003c/code\u003e produced by the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e passed in, and a list of points\n         in the space, and it returns a list of valuues y = f(x), where f is the generating function\n         represented by the support vector solution.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "a -\u003e SVMSolution -\u003e Array Int [Double] -\u003e [Double]",
        "fct-source": "src/SVM.html#simulate",
        "fct-type": "method",
        "title": "simulate"
      },
      "index": {
        "description": "This function takes an SVMSolution produced by the SVM passed in and list of points in the space and it returns list of valuues where is the generating function represented by the support vector solution",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "simulate",
        "normalized": "a-\u003eSVMSolution-\u003eArray Int[Double]-\u003e[Double]",
        "package": "svm",
        "partial": "",
        "signature": "a-\u003eSVMSolution-\u003eArray Int[Double]-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:solve",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a \u003ccode\u003e\u003ca\u003eDataSet\u003c/a\u003e\u003c/code\u003e and feeds it to the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e.  Then it returns the\n         \u003ccode\u003e\u003ca\u003eSVMSolution\u003c/a\u003e\u003c/code\u003e which is the support vector solution for the function which generated the\n         points in the training set.  The function also takes values for epsilon and the max\n         iterations, which are used as stopping criteria in the conjugate gradient algorithm.\n\u003c/p\u003e",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "a -\u003e DataSet -\u003e Double -\u003e Int -\u003e SVMSolution",
        "fct-source": "src/SVM.html#solve",
        "fct-type": "method",
        "title": "solve"
      },
      "index": {
        "description": "This function takes DataSet and feeds it to the SVM Then it returns the SVMSolution which is the support vector solution for the function which generated the points in the training set The function also takes values for epsilon and the max iterations which are used as stopping criteria in the conjugate gradient algorithm",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "solve",
        "normalized": "a-\u003eDataSet-\u003eDouble-\u003eInt-\u003eSVMSolution",
        "package": "svm",
        "partial": "",
        "signature": "a-\u003eDataSet-\u003eDouble-\u003eInt-\u003eSVMSolution"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:splineKernelFunction",
      "description": {
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
        "fct-source": "src/SVM.html#splineKernelFunction",
        "fct-type": "function",
        "title": "splineKernelFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "splineKernelFunction",
        "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
        "package": "svm",
        "partial": "Kernel Function",
        "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:sv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "Array Int [Double]",
        "fct-source": "src/SVM.html#SVMSolution",
        "fct-type": "function",
        "title": "sv"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "sv",
        "normalized": "Array Int[Double]",
        "package": "svm",
        "partial": "",
        "signature": "Array Int[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:values",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "SVM",
        "fct-package": "svm",
        "fct-signature": "DoubleArray",
        "fct-source": "src/SVM.html#DataSet",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "",
        "hierarchy": "SVM",
        "module": "SVM",
        "name": "values",
        "normalized": "",
        "package": "svm",
        "partial": "",
        "signature": ""
      }
    }
  }
]