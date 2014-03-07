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
        "word": "svm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module performs support vector regression on a set of training points in order to determine\n   the generating function.  Currently least squares support vector regression is implemented.  The\n   optimal solution to the Langrangian is found by a conjugate gradient algorithm (CGA).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "SVM",
          "name": "SVM",
          "package": "svm",
          "source": "src/SVM.html",
          "type": "module"
        },
        "index": {
          "description": "This module performs support vector regression on set of training points in order to determine the generating function Currently least squares support vector regression is implemented The optimal solution to the Langrangian is found by conjugate gradient algorithm CGA",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "SVM",
          "package": "svm",
          "partial": "SVM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach data set is a list of vectors and values which are training points of the form\n f(x) = y forall {x,y}.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "DataSet",
          "package": "svm",
          "source": "src/SVM.html#DataSet",
          "type": "data"
        },
        "index": {
          "description": "Each data set is list of vectors and values which are training points of the form forall",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "DataSet",
          "package": "svm",
          "partial": "Data Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:DataSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery kernel function represents an inner product in feature space.  The parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A list of kernel parameters that can be interpreted differently by each kernel function.\n\u003c/li\u003e\u003cli\u003e The first point in the inner product.\n\u003c/li\u003e\u003cli\u003e The second point in the inner product.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "SVM",
          "name": "KernelFunction",
          "package": "svm",
          "source": "src/SVM.html#KernelFunction",
          "type": "newtype"
        },
        "index": {
          "description": "Every kernel function represents an inner product in feature space The parameters are list of kernel parameters that can be interpreted differently by each kernel function The first point in the inner product The second point in the inner product",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "KernelFunction",
          "package": "svm",
          "partial": "Kernel Function",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:KernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kernel matrix has been implemented as an unboxed array for performance reasons.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "KernelMatrix",
          "package": "svm",
          "source": "src/SVM.html#KernelMatrix",
          "type": "newtype"
        },
        "index": {
          "description": "The kernel matrix has been implemented as an unboxed array for performance reasons",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "KernelMatrix",
          "package": "svm",
          "partial": "Kernel Matrix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:KernelMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA least squares support vector machine.  The cost represents the relative expense of missing a\n      training versus a more complicated generating function.  The higher this number the better the fit\n      of the training set, but at a cost of poorer generalization.  The LSSVM uses every training point\n      in the solution and performs least squares regression on the dual of the problem.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "LSSVM",
          "package": "svm",
          "source": "src/SVM.html#LSSVM",
          "type": "data"
        },
        "index": {
          "description": "least squares support vector machine The cost represents the relative expense of missing training versus more complicated generating function The higher this number the better the fit of the training set but at cost of poorer generalization The LSSVM uses every training point in the solution and performs least squares regression on the dual of the problem",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "LSSVM",
          "package": "svm",
          "partial": "LSSVM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:LSSVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA support vector machine (SVM) can estimate a function based upon some training data.\n      Instances of this class need only implement the dual cost and the kernel function.  Default\n      implementations are given for finding the SVM solution, for simulating a function and for\n      creating a kernel matrix from a set of training points.  All SVMs should return a solution\n      which contains a list of the support vectors and their dual weigths.  dcost represents the\n      coefficient of the dual cost function.  This term gets added to the diagonal elements of the\n      kernel matrix and may be different for each type of SVM.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "SVM",
          "package": "svm",
          "source": "src/SVM.html#SVM",
          "type": "class"
        },
        "index": {
          "description": "support vector machine SVM can estimate function based upon some training data Instances of this class need only implement the dual cost and the kernel function Default implementations are given for finding the SVM solution for simulating function and for creating kernel matrix from set of training points All SVMs should return solution which contains list of the support vectors and their dual weigths dcost represents the coefficient of the dual cost function This term gets added to the diagonal elements of the kernel matrix and may be different for each type of SVM",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "SVM",
          "package": "svm",
          "partial": "SVM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:SVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe solution contains the dual weights, the support vectors and the bias.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "SVMSolution",
          "package": "svm",
          "source": "src/SVM.html#SVMSolution",
          "type": "data"
        },
        "index": {
          "description": "The solution contains the dual weights the support vectors and the bias",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "SVMSolution",
          "package": "svm",
          "partial": "SVMSolution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#t:SVMSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "DataSet",
          "package": "svm",
          "signature": "DataSet",
          "source": "src/SVM.html#DataSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "DataSet",
          "package": "svm",
          "partial": "Data Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:DataSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "KernelFunction",
          "package": "svm",
          "signature": "KernelFunction ([Double] -\u003e [Double] -\u003e [Double] -\u003e Double)",
          "source": "src/SVM.html#KernelFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "KernelFunction",
          "normalized": "KernelFunction([Double]-\u003e[Double]-\u003e[Double]-\u003eDouble)",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "KernelFunction([Double]-\u003e[Double]-\u003e[Double]-\u003eDouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:KernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "KernelMatrix",
          "package": "svm",
          "signature": "KernelMatrix DoubleArray",
          "source": "src/SVM.html#KernelMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "KernelMatrix",
          "package": "svm",
          "partial": "Kernel Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:KernelMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "LSSVM",
          "package": "svm",
          "signature": "LSSVM",
          "source": "src/SVM.html#LSSVM",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "LSSVM",
          "package": "svm",
          "partial": "LSSVM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:LSSVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "SVMSolution",
          "package": "svm",
          "signature": "SVMSolution",
          "source": "src/SVM.html#SVMSolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "SVMSolution",
          "package": "svm",
          "partial": "SVMSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:SVMSolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "alpha",
          "package": "svm",
          "signature": "DoubleArray",
          "source": "src/SVM.html#SVMSolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "alpha",
          "package": "svm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "bias",
          "package": "svm",
          "signature": "Double",
          "source": "src/SVM.html#SVMSolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "bias",
          "package": "svm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:bias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cost coefficient in the Lagrangian.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "cost",
          "package": "svm",
          "signature": "Double",
          "source": "src/SVM.html#LSSVM",
          "type": "function"
        },
        "index": {
          "description": "The cost coefficient in the Lagrangian",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "cost",
          "package": "svm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:cost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eKernelMatrix\u003c/a\u003e\u003c/code\u003e from the training points in the \u003ccode\u003e\u003ca\u003eDataSet\u003c/a\u003e\u003c/code\u003e.  If \u003ccode\u003ekf\u003c/code\u003e is the\n         \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e then the elements of the kernel matrix are given by \u003ccode\u003eK[i,j] = kf x[i] x[j]\u003c/code\u003e,\n         where the \u003ccode\u003ex[i]\u003c/code\u003e are taken from the training points.  The kernel matrix is symmetric and\n         positive semi-definite.Only the bottom half of the kernel matrix is stored.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "createKernelMatrix",
          "package": "svm",
          "signature": "a -\u003e Array Int [Double] -\u003e KernelMatrix",
          "source": "src/SVM.html#createKernelMatrix",
          "type": "method"
        },
        "index": {
          "description": "Creates KernelMatrix from the training points in the DataSet If kf is the KernelFunction then the elements of the kernel matrix are given by kf where the are taken from the training points The kernel matrix is symmetric and positive semi-definite.Only the bottom half of the kernel matrix is stored",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "createKernelMatrix",
          "normalized": "a-\u003eArray Int[Double]-\u003eKernelMatrix",
          "package": "svm",
          "partial": "Kernel Matrix",
          "signature": "a-\u003eArray Int[Double]-\u003eKernelMatrix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:createKernelMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe derivative of the cost function is added to the diagonal elements of the kernel\n         matrix.  This places a cost on the norm of the solution, which helps prevent overfitting\n         of the training data.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "dcost",
          "package": "svm",
          "signature": "a -\u003e Double",
          "source": "src/SVM.html#dcost",
          "type": "method"
        },
        "index": {
          "description": "The derivative of the cost function is added to the diagonal elements of the kernel matrix This places cost on the norm of the solution which helps prevent overfitting of the training data",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "dcost",
          "normalized": "a-\u003eDouble",
          "package": "svm",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:dcost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function provides access to the \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e used by the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "evalKernel",
          "package": "svm",
          "signature": "a -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#evalKernel",
          "type": "method"
        },
        "index": {
          "description": "This function provides access to the KernelFunction used by the SVM",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "evalKernel",
          "normalized": "a-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel",
          "signature": "a-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:evalKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kernel function defines the feature space.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "kf",
          "package": "svm",
          "signature": "KernelFunction",
          "source": "src/SVM.html#LSSVM",
          "type": "function"
        },
        "index": {
          "description": "The kernel function defines the feature space",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "kf",
          "package": "svm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:kf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a simple dot product between the two data points, corresponding to a featureless space.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "linearKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#linearKernelFunction",
          "type": "function"
        },
        "index": {
          "description": "This is simple dot product between the two data points corresponding to featureless space",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "linearKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:linearKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a solution similar to neural net.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "mlpKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#mlpKernelFunction",
          "type": "function"
        },
        "index": {
          "description": "Provides solution similar to neural net",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "mlpKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:mlpKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny parameters needed by the \u003ccode\u003e\u003ca\u003eKernelFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "params",
          "package": "svm",
          "signature": "[Double]",
          "source": "src/SVM.html#LSSVM",
          "type": "function"
        },
        "index": {
          "description": "Any parameters needed by the KernelFunction",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "params",
          "normalized": "[Double]",
          "package": "svm",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "points",
          "package": "svm",
          "signature": "Array Int [Double]",
          "source": "src/SVM.html#DataSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "points",
          "normalized": "Array Int[Double]",
          "package": "svm",
          "signature": "Array Int[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "polyKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#polyKernelFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "polyKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:polyKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the kernel when radial basis functions are used.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "radialKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#radialKernelFunction",
          "type": "function"
        },
        "index": {
          "description": "This is the kernel when radial basis functions are used",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "radialKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:radialKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reciprocal kernel is the result of exponential basis functions, exp(-k*(x+a)).  The inner\n product is an integral over all k \u003e= 0.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "reciprocalKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#reciprocalKernelFunction",
          "type": "function"
        },
        "index": {
          "description": "The reciprocal kernel is the result of exponential basis functions exp The inner product is an integral over all",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "reciprocalKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:reciprocalKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes an \u003ccode\u003e\u003ca\u003eSVMSolution\u003c/a\u003e\u003c/code\u003e produced by the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e passed in, and a list of points\n         in the space, and it returns a list of valuues y = f(x), where f is the generating function\n         represented by the support vector solution.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "simulate",
          "package": "svm",
          "signature": "a -\u003e SVMSolution -\u003e Array Int [Double] -\u003e [Double]",
          "source": "src/SVM.html#simulate",
          "type": "method"
        },
        "index": {
          "description": "This function takes an SVMSolution produced by the SVM passed in and list of points in the space and it returns list of valuues where is the generating function represented by the support vector solution",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "simulate",
          "normalized": "a-\u003eSVMSolution-\u003eArray Int[Double]-\u003e[Double]",
          "package": "svm",
          "signature": "a-\u003eSVMSolution-\u003eArray Int[Double]-\u003e[Double]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:simulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a \u003ccode\u003e\u003ca\u003eDataSet\u003c/a\u003e\u003c/code\u003e and feeds it to the \u003ccode\u003e\u003ca\u003eSVM\u003c/a\u003e\u003c/code\u003e.  Then it returns the\n         \u003ccode\u003e\u003ca\u003eSVMSolution\u003c/a\u003e\u003c/code\u003e which is the support vector solution for the function which generated the\n         points in the training set.  The function also takes values for epsilon and the max\n         iterations, which are used as stopping criteria in the conjugate gradient algorithm.\n\u003c/p\u003e",
          "module": "SVM",
          "name": "solve",
          "package": "svm",
          "signature": "a -\u003e DataSet -\u003e Double -\u003e Int -\u003e SVMSolution",
          "source": "src/SVM.html#solve",
          "type": "method"
        },
        "index": {
          "description": "This function takes DataSet and feeds it to the SVM Then it returns the SVMSolution which is the support vector solution for the function which generated the points in the training set The function also takes values for epsilon and the max iterations which are used as stopping criteria in the conjugate gradient algorithm",
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "solve",
          "normalized": "a-\u003eDataSet-\u003eDouble-\u003eInt-\u003eSVMSolution",
          "package": "svm",
          "signature": "a-\u003eDataSet-\u003eDouble-\u003eInt-\u003eSVMSolution",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "splineKernelFunction",
          "package": "svm",
          "signature": "[Double] -\u003e [Double] -\u003e [Double] -\u003e Double",
          "source": "src/SVM.html#splineKernelFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "splineKernelFunction",
          "normalized": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "svm",
          "partial": "Kernel Function",
          "signature": "[Double]-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:splineKernelFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "sv",
          "package": "svm",
          "signature": "Array Int [Double]",
          "source": "src/SVM.html#SVMSolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "sv",
          "normalized": "Array Int[Double]",
          "package": "svm",
          "signature": "Array Int[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:sv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SVM",
          "name": "values",
          "package": "svm",
          "signature": "DoubleArray",
          "source": "src/SVM.html#DataSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "SVM",
          "module": "SVM",
          "name": "values",
          "package": "svm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svm/docs/SVM.html#v:values"
      }
    }
  ]
]