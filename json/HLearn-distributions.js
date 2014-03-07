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
        "word": "HLearn-distributions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the type classes for manipulating distributions.\n\u003c/p\u003e\u003cp\u003eWe use the same classes for both discrete and continuous distributions.  Unfortunately, we cannot use the type classes from the \u003ccode\u003estatistics\u003c/code\u003e package because we require more flexibility than they offer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Common",
          "name": "Common",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the type classes for manipulating distributions We use the same classes for both discrete and continuous distributions Unfortunately we cannot use the type classes from the statistics package because we require more flexibility than they offer",
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "Common",
          "package": "HLearn-distributions",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTechnically, every distribution has a Cumulative Distribution Function (CDF), and so this type class should be merged with the \u003ca\u003eDistribution\u003c/a\u003e type class.  However, I haven't had a chance to implement the CDF for most distributions yet, so this type class has been separated out.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Common",
          "name": "CDF",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html#CDF",
          "type": "class"
        },
        "index": {
          "description": "Technically every distribution has Cumulative Distribution Function CDF and so this type class should be merged with the Distribution type class However haven had chance to implement the CDF for most distributions yet so this type class has been separated out",
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "CDF",
          "package": "HLearn-distributions",
          "partial": "CDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:CDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "Mean",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html#Mean",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "Mean",
          "package": "HLearn-distributions",
          "partial": "Mean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot every distribution has a Probability Density Function (PDF), however most distributions in the HLearn library do.  For many applications, the PDF is much more intuitive and easier to work with than the CDF.  For discrete distributions, this is often called a Probability Mass Function (PMF); however, for simplicity we use the same type class for both continuous and discrete data.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Common",
          "name": "PDF",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html#PDF",
          "type": "class"
        },
        "index": {
          "description": "Not every distribution has Probability Density Function PDF however most distributions in the HLearn library do For many applications the PDF is much more intuitive and easier to work with than the CDF For discrete distributions this is often called Probability Mass Function PMF however for simplicity we use the same type class for both continuous and discrete data",
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "PDF",
          "package": "HLearn-distributions",
          "partial": "PDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "Probabilistic",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html#Probabilistic",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "Probabilistic",
          "package": "HLearn-distributions",
          "partial": "Probabilistic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Probabilistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "Variance",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Common.html#Variance",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "Variance",
          "package": "HLearn-distributions",
          "partial": "Variance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "cdf",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e Datapoint dist -\u003e Probability dist",
          "source": "src/HLearn-Models-Distributions-Common.html#cdf",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "cdf",
          "normalized": "a-\u003eDatapoint a-\u003eProbability a",
          "package": "HLearn-distributions",
          "signature": "dist-\u003eDatapoint dist-\u003eProbability dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:cdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "cdfInverse",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e Probability dist -\u003e Datapoint dist",
          "source": "src/HLearn-Models-Distributions-Common.html#cdfInverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "cdfInverse",
          "normalized": "a-\u003eProbability a-\u003eDatapoint a",
          "package": "HLearn-distributions",
          "partial": "Inverse",
          "signature": "dist-\u003eProbability dist-\u003eDatapoint dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:cdfInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "mean",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e Datapoint dist",
          "source": "src/HLearn-Models-Distributions-Common.html#mean",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "mean",
          "normalized": "a-\u003eDatapoint a",
          "package": "HLearn-distributions",
          "signature": "dist-\u003eDatapoint dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you were to plot a list of distributions, nonoverlap returns the amount of area that only a single distribution covers.  That is, it will be equal to number of distributions - the overlap.\n\u003c/p\u003e\u003cp\u003eThis function is used by the HomTree classifier.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Common",
          "name": "nonoverlap",
          "package": "HLearn-distributions",
          "signature": "[dist] -\u003e Probability dist",
          "source": "src/HLearn-Models-Distributions-Common.html#nonoverlap",
          "type": "function"
        },
        "index": {
          "description": "If you were to plot list of distributions nonoverlap returns the amount of area that only single distribution covers That is it will be equal to number of distributions the overlap This function is used by the HomTree classifier",
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "nonoverlap",
          "normalized": "[a]-\u003eProbability a",
          "package": "HLearn-distributions",
          "signature": "[dist]-\u003eProbability dist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:nonoverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "pdf",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e Datapoint dist -\u003e Probability dist",
          "source": "src/HLearn-Models-Distributions-Common.html#pdf",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "pdf",
          "normalized": "a-\u003eDatapoint a-\u003eProbability a",
          "package": "HLearn-distributions",
          "signature": "dist-\u003eDatapoint dist-\u003eProbability dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Common",
          "name": "variance",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e Probability dist",
          "source": "src/HLearn-Models-Distributions-Common.html#variance",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Common",
          "module": "HLearn.Models.Distributions.Common",
          "name": "variance",
          "normalized": "a-\u003eProbability a",
          "package": "HLearn-distributions",
          "signature": "dist-\u003eProbability dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis list of kernels is take from wikipedia's: \u003ca\u003ehttps://en.wikipedia.org/wiki/Uniform_kernel#Kernel_functions_in_common_use\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Kernels",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html",
          "type": "module"
        },
        "index": {
          "description": "This list of kernels is take from wikipedia https en.wikipedia.org wiki Uniform kernel Kernel functions in common use",
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Kernels",
          "package": "HLearn-distributions",
          "partial": "Kernels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Cosine",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Cosine",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Cosine",
          "package": "HLearn-distributions",
          "partial": "Cosine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Cosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Epanechnikov",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Epanechnikov",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Epanechnikov",
          "package": "HLearn-distributions",
          "partial": "Epanechnikov",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Epanechnikov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Gaussian",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Gaussian",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Gaussian",
          "package": "HLearn-distributions",
          "partial": "Gaussian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA kernel is function in one parameter that takes a value on the x axis and spits out a \u003ca\u003eprobability.\u003c/a\u003e  We create a data object for each kernel, and a corresponding class to make things play nice with the type system.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Kernel",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Kernel",
          "type": "class"
        },
        "index": {
          "description": "kernel is function in one parameter that takes value on the axis and spits out probability We create data object for each kernel and corresponding class to make things play nice with the type system",
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Kernel",
          "package": "HLearn-distributions",
          "partial": "Kernel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA KernelBox is a universal object for storing kernels.  Whatever kernel it stores, it becomes a kernel with the same properties.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "KernelBox",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#KernelBox",
          "type": "data"
        },
        "index": {
          "description": "KernelBox is universal object for storing kernels Whatever kernel it stores it becomes kernel with the same properties",
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "KernelBox",
          "package": "HLearn-distributions",
          "partial": "Kernel Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:KernelBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Quartic",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Quartic",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Quartic",
          "package": "HLearn-distributions",
          "partial": "Quartic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Quartic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triangular",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Triangular",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triangular",
          "package": "HLearn-distributions",
          "partial": "Triangular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Triangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Tricube",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Tricube",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Tricube",
          "package": "HLearn-distributions",
          "partial": "Tricube",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Tricube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triweight",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Triweight",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triweight",
          "package": "HLearn-distributions",
          "partial": "Triweight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Triweight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Uniform",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Uniform",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Uniform",
          "package": "HLearn-distributions",
          "partial": "Uniform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Cosine",
          "package": "HLearn-distributions",
          "signature": "Cosine",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Cosine",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Cosine",
          "package": "HLearn-distributions",
          "partial": "Cosine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Cosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Epanechnikov",
          "package": "HLearn-distributions",
          "signature": "Epanechnikov",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Epanechnikov",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Epanechnikov",
          "package": "HLearn-distributions",
          "partial": "Epanechnikov",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Epanechnikov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Gaussian",
          "package": "HLearn-distributions",
          "signature": "Gaussian",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Gaussian",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Gaussian",
          "package": "HLearn-distributions",
          "partial": "Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Gaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "KernelBox",
          "package": "HLearn-distributions",
          "signature": "kernel -\u003e KernelBox num",
          "source": "src/HLearn-Models-Distributions-Kernels.html#KernelBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "KernelBox",
          "normalized": "a-\u003eKernelBox b",
          "package": "HLearn-distributions",
          "partial": "Kernel Box",
          "signature": "kernel-\u003eKernelBox num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:KernelBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Quartic",
          "package": "HLearn-distributions",
          "signature": "Quartic",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Quartic",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Quartic",
          "package": "HLearn-distributions",
          "partial": "Quartic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Quartic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triangular",
          "package": "HLearn-distributions",
          "signature": "Triangular",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Triangular",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triangular",
          "package": "HLearn-distributions",
          "partial": "Triangular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Triangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Tricube",
          "package": "HLearn-distributions",
          "signature": "Tricube",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Tricube",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Tricube",
          "package": "HLearn-distributions",
          "partial": "Tricube",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Tricube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triweight",
          "package": "HLearn-distributions",
          "signature": "Triweight",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Triweight",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Triweight",
          "package": "HLearn-distributions",
          "partial": "Triweight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Triweight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Uniform",
          "package": "HLearn-distributions",
          "signature": "Uniform",
          "source": "src/HLearn-Models-Distributions-Kernels.html#Uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "Uniform",
          "package": "HLearn-distributions",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "evalKernel",
          "package": "HLearn-distributions",
          "signature": "kernel -\u003e num -\u003e num",
          "source": "src/HLearn-Models-Distributions-Kernels.html#evalKernel",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Kernels",
          "module": "HLearn.Models.Distributions.Kernels",
          "name": "evalKernel",
          "normalized": "a-\u003eb-\u003eb",
          "package": "HLearn-distributions",
          "partial": "Kernel",
          "signature": "kernel-\u003enum-\u003enum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:evalKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed for Multivariate distributions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Interface",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Interface.html",
          "type": "module"
        },
        "index": {
          "description": "Used for Multivariate distributions",
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Interface",
          "package": "HLearn-distributions",
          "partial": "Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Dependent",
          "package": "HLearn-distributions",
          "signature": "Dependent",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Dependent",
          "package": "HLearn-distributions",
          "partial": "Dependent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Dependent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Independent",
          "package": "HLearn-distributions",
          "signature": "Independent",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Independent",
          "package": "HLearn-distributions",
          "partial": "Independent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Independent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Index",
          "package": "HLearn-distributions",
          "signature": "Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Index",
          "package": "HLearn-distributions",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "MultiCategorical",
          "package": "HLearn-distributions",
          "signature": "MultiCategorical",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "MultiCategorical",
          "package": "HLearn-distributions",
          "partial": "Multi Categorical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:MultiCategorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is the main type for specifying multivariate distributions\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Multivariate",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Interface.html#Multivariate",
          "type": "data"
        },
        "index": {
          "description": "this is the main type for specifying multivariate distributions",
          "hierarchy": "HLearn Models Distributions Multivariate Interface",
          "module": "HLearn.Models.Distributions.Multivariate.Interface",
          "name": "Multivariate",
          "package": "HLearn-distributions",
          "partial": "Multivariate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Multivariate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe categorical distribution is used for discrete data.  It is also sometimes called the discrete distribution or the multinomial distribution.  For more, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/CatContainer_distribution\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html",
          "type": "module"
        },
        "index": {
          "description": "The categorical distribution is used for discrete data It is also sometimes called the discrete distribution or the multinomial distribution For more see the wikipedia entry https en.wikipedia.org wiki CatContainer distribution",
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "partial": "Cat Container",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "partial": "Cat Container",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#t:CatContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "signature": "CatContainer",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "CatContainer",
          "package": "HLearn-distributions",
          "partial": "Cat Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:CatContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "catnumdp",
          "package": "HLearn-distributions",
          "signature": "prob",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "catnumdp",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:catnumdp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "ds",
          "package": "HLearn-distributions",
          "signature": "[HList (: * [Char] (: * Char (: * [Char] ([] *))))]",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#ds",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "ds",
          "normalized": "[HList(*[Char](*Char(*[Char]([]*))))]",
          "package": "HLearn-distributions",
          "signature": "[HList(*[Char](*Char(*[Char]([]*))))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "pdfmap",
          "package": "HLearn-distributions",
          "signature": "(Map label basedist)",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "pdfmap",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:pdfmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "probmap",
          "package": "HLearn-distributions",
          "signature": "(Map label prob)",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "probmap",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:probmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "test",
          "package": "HLearn-distributions",
          "signature": "CatContainer String (CatContainer Char (CatContainer String (Unital Double) Double) Double) Double",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
          "name": "test",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "Container",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "Container",
          "package": "HLearn-distributions",
          "partial": "Container",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "Container",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html#Container",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "Container",
          "package": "HLearn-distributions",
          "partial": "Container",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "MultiContainer",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html#MultiContainer",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
          "name": "MultiContainer",
          "package": "HLearn-distributions",
          "partial": "Multi Container",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#t:MultiContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed for ignoring data\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html",
          "type": "module"
        },
        "index": {
          "description": "Used for ignoring data",
          "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "partial": "Ignore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "signature": "Ignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#t:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore'",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#Ignore%27",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore'",
          "package": "HLearn-distributions",
          "partial": "Ignore'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#t:Ignore-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore'",
          "package": "HLearn-distributions",
          "signature": "Ignore' basedist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#Ignore%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
          "name": "Ignore'",
          "package": "HLearn-distributions",
          "partial": "Ignore'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#v:Ignore-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMarginalization is a tricky procedure involving a lot of type hackery.  All user-facing interfaces use the \u003ca\u003eMarginalize\u003c/a\u003e class, and all internal interfaces use the \u003ca\u003eMarginalize'\u003c/a\u003e class.  Essentially, \u003ca\u003eTypeLens\u003c/a\u003e class converts the \u003ca\u003eType lens\u003c/a\u003e for our user's data type into a type level number.  The  \u003ca\u003eMarginalize'\u003c/a\u003e class then takes this type number and uses it as an index into an appropriate type list that represents the data type.\n\u003c/p\u003e\u003cp\u003eThe TemplateHaskell module has more info.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalization",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html",
          "type": "module"
        },
        "index": {
          "description": "Marginalization is tricky procedure involving lot of type hackery All user-facing interfaces use the Marginalize class and all internal interfaces use the Marginalize class Essentially TypeLens class converts the Type lens for our user data type into type level number The Marginalize class then takes this type number and uses it as an index into an appropriate type list that represents the data type The TemplateHaskell module has more info",
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalization",
          "package": "HLearn-distributions",
          "partial": "Marginalization",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalize",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#Marginalize",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalize",
          "package": "HLearn-distributions",
          "partial": "Marginalize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#t:Marginalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalize'",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#Marginalize%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "Marginalize'",
          "package": "HLearn-distributions",
          "partial": "Marginalize'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#t:Marginalize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "condition",
          "package": "HLearn-distributions",
          "signature": "index -\u003e Datapoint (Margin' (TypeLensIndex index) dist) -\u003e dist -\u003e MarginalizeOut' (TypeLensIndex index) dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#condition",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "condition",
          "normalized": "a-\u003eDatapoint(Margin'(TypeLensIndex a)b)-\u003eb-\u003eMarginalizeOut'(TypeLensIndex a)b",
          "package": "HLearn-distributions",
          "signature": "index-\u003eDatapoint(Margin'(TypeLensIndex index)dist)-\u003edist-\u003eMarginalizeOut'(TypeLensIndex index)dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "condition'",
          "package": "HLearn-distributions",
          "signature": "index -\u003e dist -\u003e Datapoint (Margin' index dist) -\u003e MarginalizeOut' index dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#condition%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "condition'",
          "normalized": "a-\u003eb-\u003eDatapoint(Margin' a b)-\u003eMarginalizeOut' a b",
          "package": "HLearn-distributions",
          "signature": "index-\u003edist-\u003eDatapoint(Margin' index dist)-\u003eMarginalizeOut' index dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:condition-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "getMargin",
          "package": "HLearn-distributions",
          "signature": "index -\u003e dist -\u003e Margin index dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#getMargin",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "getMargin",
          "normalized": "a-\u003eb-\u003eMargin a b",
          "package": "HLearn-distributions",
          "partial": "Margin",
          "signature": "index-\u003edist-\u003eMargin index dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:getMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "getMargin'",
          "package": "HLearn-distributions",
          "signature": "index -\u003e dist -\u003e Margin' index dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#getMargin%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "getMargin'",
          "normalized": "a-\u003eb-\u003eMargin' a b",
          "package": "HLearn-distributions",
          "partial": "Margin'",
          "signature": "index-\u003edist-\u003eMargin' index dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:getMargin-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "marginalizeOut",
          "package": "HLearn-distributions",
          "signature": "index -\u003e dist -\u003e MarginalizeOut index dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#marginalizeOut",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "marginalizeOut",
          "normalized": "a-\u003eb-\u003eMarginalizeOut a b",
          "package": "HLearn-distributions",
          "partial": "Out",
          "signature": "index-\u003edist-\u003eMarginalizeOut index dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:marginalizeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "marginalizeOut'",
          "package": "HLearn-distributions",
          "signature": "index -\u003e dist -\u003e MarginalizeOut' index dist",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#marginalizeOut%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
          "name": "marginalizeOut'",
          "normalized": "a-\u003eb-\u003eMarginalizeOut' a b",
          "package": "HLearn-distributions",
          "partial": "Out'",
          "signature": "index-\u003edist-\u003eMarginalizeOut' index dist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:marginalizeOut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenient TemplateHaskell functions for making type lens suitable for use with multivariate distributions.\n\u003c/p\u003e\u003cp\u003eGiven a data type that looks like:\n\u003c/p\u003e\u003cpre\u003edata Character = Character\n    { _name      :: String\n    , _species   :: String\n    , _job       :: Job\n    , _isGood    :: Maybe Bool\n    , _age       :: Double -- in years\n    , _height    :: Double -- in feet\n    , _weight    :: Double -- in pounds\n    }\n    deriving (Read,Show,Eq,Ord)\n \ndata Job = Manager | Crew | Henchman | Other\n    deriving (Read,Show,Eq,Ord)\n\u003c/pre\u003e\u003cp\u003ewhen we run the command:\n\u003c/p\u003e\u003cpre\u003emakeTypeLenses ''Character\n\u003c/pre\u003e\u003cp\u003eWe generate the following type lenses automatically:\n\u003c/p\u003e\u003cpre\u003edata TH_name    = TH_name\ndata TH_species = TH_species\ndata TH_job     = TH_job\ndata TH_isGood  = TH_isGood\ndata TH_age     = TH_age\ndata TH_height  = TH_height\ndata TH_weight  = TH_weight\n\ninstance TypeLens TH_name where\n    type instance TypeLensIndex TH_name = Nat1Box Zero\ninstance TypeLens TH_species where\n    type instance TypeLensIndex TH_species = Nat1Box (Succ Zero)\ninstance TypeLens TH_job where\n    type instance TypeLensIndex TH_job = Nat1Box (Succ (Succ Zero))\ninstance TypeLens TH_isGood where\n    type instance TypeLensIndex TH_isGood = Nat1Box (Succ (Succ (Succ Zero)))\ninstance TypeLens TH_age where\n    type instance TypeLensIndex TH_age = Nat1Box (Succ (Succ (Succ (Succ Zero))))\ninstance TypeLens TH_height where\n    type instance TypeLensIndex TH_height = Nat1Box (Succ (Succ (Succ (Succ (Succ Zero)))))\ninstance TypeLens TH_weight where\n    type instance TypeLensIndex TH_weight = Nat1Box (Succ (Succ (Succ (Succ (Succ (Succ Zero))))))\n        \ninstance Trainable Character where\n    type instance GetHList Character = HList '[String,String,Job,Maybe Bool, Double,Double,Double]\n    getHList var = name var:::species var:::job var:::isGood var:::age var:::height var:::weight var:::HNil\n\ninstance MultivariateLabels Character where\n    getLabels dist = [\"TH_name\",\"TH_species\",\"TH_job\",\"TH_isGood\",\"TH_age\",\"TH_height\",\"TH_weight\"]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeLens",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenient TemplateHaskell functions for making type lens suitable for use with multivariate distributions Given data type that looks like data Character Character name String species String job Job isGood Maybe Bool age Double in years height Double in feet weight Double in pounds deriving Read Show Eq Ord data Job Manager Crew Henchman Other deriving Read Show Eq Ord when we run the command makeTypeLenses Character We generate the following type lenses automatically data TH name TH name data TH species TH species data TH job TH job data TH isGood TH isGood data TH age TH age data TH height TH height data TH weight TH weight instance TypeLens TH name where type instance TypeLensIndex TH name Nat1Box Zero instance TypeLens TH species where type instance TypeLensIndex TH species Nat1Box Succ Zero instance TypeLens TH job where type instance TypeLensIndex TH job Nat1Box Succ Succ Zero instance TypeLens TH isGood where type instance TypeLensIndex TH isGood Nat1Box Succ Succ Succ Zero instance TypeLens TH age where type instance TypeLensIndex TH age Nat1Box Succ Succ Succ Succ Zero instance TypeLens TH height where type instance TypeLensIndex TH height Nat1Box Succ Succ Succ Succ Succ Zero instance TypeLens TH weight where type instance TypeLensIndex TH weight Nat1Box Succ Succ Succ Succ Succ Succ Zero instance Trainable Character where type instance GetHList Character HList String String Job Maybe Bool Double Double Double getHList var name var species var job var isGood var age var height var weight var HNil instance MultivariateLabels Character where getLabels dist TH name TH species TH job TH isGood TH age TH height TH weight",
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeLens",
          "package": "HLearn-distributions",
          "partial": "Type Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Trainable class allows us to convert data types into an isomorphic \u003ca\u003eHList\u003c/a\u003e.  All of our multivariate distributions work on \u003ca\u003eHList\u003c/a\u003es, so they work on all instances of \u003ca\u003eTrainable\u003c/a\u003e as well.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "Trainable",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#Trainable",
          "type": "class"
        },
        "index": {
          "description": "The Trainable class allows us to convert data types into an isomorphic HList All of our multivariate distributions work on HList so they work on all instances of Trainable as well",
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "Trainable",
          "package": "HLearn-distributions",
          "partial": "Trainable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:Trainable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeFunction",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#TypeFunction",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeFunction",
          "package": "HLearn-distributions",
          "partial": "Type Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:TypeFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies a type level natural number (i.e. \u003ca\u003eNat1\u003c/a\u003e) that indexes at the right location into our HList\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeLens",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#TypeLens",
          "type": "class"
        },
        "index": {
          "description": "This specifies type level natural number i.e Nat1 that indexes at the right location into our HList",
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "TypeLens",
          "package": "HLearn-distributions",
          "partial": "Type Lens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:TypeLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "getHList",
          "package": "HLearn-distributions",
          "signature": "t -\u003e GetHList t",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#getHList",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "getHList",
          "normalized": "a-\u003eGetHList a",
          "package": "HLearn-distributions",
          "partial": "HList",
          "signature": "t-\u003eGetHList t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:getHList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructs the type lens\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "makeTypeLenses",
          "package": "HLearn-distributions",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#makeTypeLenses",
          "type": "function"
        },
        "index": {
          "description": "constructs the type lens",
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "makeTypeLenses",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "HLearn-distributions",
          "partial": "Type Lenses",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:makeTypeLenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egiven the name of one of our records, transform it into the name of our type lens\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "nameTransform",
          "package": "HLearn-distributions",
          "signature": "String -\u003e String",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#nameTransform",
          "type": "function"
        },
        "index": {
          "description": "given the name of one of our records transform it into the name of our type lens",
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "nameTransform",
          "normalized": "String-\u003eString",
          "package": "HLearn-distributions",
          "partial": "Transform",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:nameTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "typefunc",
          "package": "HLearn-distributions",
          "signature": "f -\u003e Domain f -\u003e Range f",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#typefunc",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
          "name": "typefunc",
          "normalized": "a-\u003eDomain a-\u003eRange a",
          "package": "HLearn-distributions",
          "signature": "f-\u003eDomain f-\u003eRange f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:typefunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "partial": "Unital",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#Unital",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "partial": "Unital",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#t:Unital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "signature": "Unital prob",
          "source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#Unital",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
          "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
          "name": "Unital",
          "package": "HLearn-distributions",
          "partial": "Unital",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#v:Unital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "partial": "Multi Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html#MultiNormal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "partial": "Multi Normal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#t:MultiNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "signature": "MultiNormal (MultiNormalVec (Length xs) prob)",
          "source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html#MultiNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
          "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
          "name": "MultiNormal",
          "package": "HLearn-distributions",
          "partial": "Multi Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#v:MultiNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "partial": "Binomial",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#t:Binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "signature": "Binomial",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "Binomial",
          "package": "HLearn-distributions",
          "partial": "Binomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:Binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bin_n",
          "package": "HLearn-distributions",
          "signature": "Binomial Double Int -\u003e Int",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#bin_n",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bin_n",
          "normalized": "Binomial Double Int-\u003eInt",
          "package": "HLearn-distributions",
          "signature": "Binomial Double Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bin_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bin_p",
          "package": "HLearn-distributions",
          "signature": "Binomial Double Int -\u003e Double",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#bin_p",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bin_p",
          "normalized": "Binomial Double Int-\u003eDouble",
          "package": "HLearn-distributions",
          "signature": "Binomial Double Int-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bin_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bmoments",
          "package": "HLearn-distributions",
          "signature": "Moments3 dp",
          "source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Binomial",
          "module": "HLearn.Models.Distributions.Univariate.Binomial",
          "name": "bmoments",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bmoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe categorical distribution is used for discrete data.  It is also sometimes called the discrete distribution or the multinomial distribution.  For more, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Categorical_distribution\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Categorical.html",
          "type": "module"
        },
        "index": {
          "description": "The categorical distribution is used for discrete data It is also sometimes called the discrete distribution or the multinomial distribution For more see the wikipedia entry https en.wikipedia.org wiki Categorical distribution",
          "hierarchy": "HLearn Models Distributions Univariate Categorical",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "partial": "Categorical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#Categorical",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Categorical",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "partial": "Categorical",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#t:Categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "signature": "Categorical (Map label prob)",
          "source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#Categorical",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Categorical",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "Categorical",
          "package": "HLearn-distributions",
          "partial": "Categorical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:Categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a distribution into a list of (sample,probability) pai\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "dist2list",
          "package": "HLearn-distributions",
          "signature": "Categorical prob label -\u003e [(label, prob)]",
          "source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#dist2list",
          "type": "function"
        },
        "index": {
          "description": "Converts distribution into list of sample probability pai",
          "hierarchy": "HLearn Models Distributions Univariate Categorical",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "dist2list",
          "normalized": "Categorical a b-\u003e[(b,a)]",
          "package": "HLearn-distributions",
          "signature": "Categorical prob label-\u003e[(label,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:dist2list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the element in the distribution with the highest probability\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "mostLikely",
          "package": "HLearn-distributions",
          "signature": "Categorical prob label -\u003e label",
          "source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#mostLikely",
          "type": "function"
        },
        "index": {
          "description": "Extracts the element in the distribution with the highest probability",
          "hierarchy": "HLearn Models Distributions Univariate Categorical",
          "module": "HLearn.Models.Distributions.Univariate.Categorical",
          "name": "mostLikely",
          "normalized": "Categorical a b-\u003eb",
          "package": "HLearn-distributions",
          "partial": "Likely",
          "signature": "Categorical prob label-\u003elabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:mostLikely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Exponential",
          "name": "Exponential",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Exponential.html",
          "type": "module"
        },
        "index": {
          "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
          "hierarchy": "HLearn Models Distributions Univariate Exponential",
          "module": "HLearn.Models.Distributions.Univariate.Exponential",
          "name": "Exponential",
          "package": "HLearn-distributions",
          "partial": "Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Exponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Exponential",
          "name": "Exponential",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Exponential.html#Exponential",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Exponential",
          "module": "HLearn.Models.Distributions.Univariate.Exponential",
          "name": "Exponential",
          "package": "HLearn-distributions",
          "partial": "Exponential",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Exponential.html#t:Exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Geometric",
          "name": "Geometric",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Geometric.html",
          "type": "module"
        },
        "index": {
          "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
          "hierarchy": "HLearn Models Distributions Univariate Geometric",
          "module": "HLearn.Models.Distributions.Univariate.Geometric",
          "name": "Geometric",
          "package": "HLearn-distributions",
          "partial": "Geometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Geometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Geometric",
          "name": "Geometric",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Geometric.html#Geometric",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Geometric",
          "module": "HLearn.Models.Distributions.Univariate.Geometric",
          "name": "Geometric",
          "package": "HLearn-distributions",
          "partial": "Geometric",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Geometric.html#t:Geometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapts any distribution into one that can handle missing data\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissingData",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html",
          "type": "module"
        },
        "index": {
          "description": "Adapts any distribution into one that can handle missing data",
          "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissingData",
          "package": "HLearn-distributions",
          "partial": "Missing Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissResponse",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissResponse",
          "package": "HLearn-distributions",
          "partial": "Miss Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#t:MissResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissingData",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissingData",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "MissingData",
          "package": "HLearn-distributions",
          "partial": "Missing Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#t:MissingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "signature": "Ignore",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
          "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
          "name": "Ignore",
          "package": "HLearn-distributions",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html",
          "type": "module"
        },
        "index": {
          "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments",
          "package": "HLearn-distributions",
          "partial": "Moments",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments3",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments3",
          "package": "HLearn-distributions",
          "partial": "Moments",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#t:Moments3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments3",
          "package": "HLearn-distributions",
          "signature": "Moments3",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "Moments3",
          "package": "HLearn-distributions",
          "partial": "Moments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:Moments3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m0",
          "package": "HLearn-distributions",
          "signature": "prob",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m0",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m1",
          "package": "HLearn-distributions",
          "signature": "prob",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m1",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m2",
          "package": "HLearn-distributions",
          "signature": "prob",
          "source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
          "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
          "name": "m2",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKernel Density Estimation (KDE) is a generic and powerful method for estimating a probability distribution.  See wikipedia for more information: \u003ca\u003ehttp://en.wikipedia.org/wiki/Kernel_density_estimation\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KernelDensityEstimator",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html",
          "type": "module"
        },
        "index": {
          "description": "Kernel Density Estimation KDE is generic and powerful method for estimating probability distribution See wikipedia for more information http en.wikipedia.org wiki Kernel density estimation",
          "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KernelDensityEstimator",
          "package": "HLearn-distributions",
          "partial": "Kernel Density Estimator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe KDE type is implemented as an isomorphism with the FreeModule\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KDE",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
          "type": "newtype"
        },
        "index": {
          "description": "The KDE type is implemented as an isomorphism with the FreeModule",
          "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KDE",
          "package": "HLearn-distributions",
          "partial": "KDE",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#t:KDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KDE",
          "package": "HLearn-distributions",
          "signature": "KDE",
          "source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "KDE",
          "package": "HLearn-distributions",
          "partial": "KDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#v:KDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "freemod",
          "package": "HLearn-distributions",
          "signature": "SortedVector dp",
          "source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
          "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
          "name": "freemod",
          "package": "HLearn-distributions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#v:freemod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogNormal\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.LogNormal",
          "name": "LogNormal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-LogNormal.html",
          "type": "module"
        },
        "index": {
          "description": "LogNormal",
          "hierarchy": "HLearn Models Distributions Univariate LogNormal",
          "module": "HLearn.Models.Distributions.Univariate.LogNormal",
          "name": "LogNormal",
          "package": "HLearn-distributions",
          "partial": "Log Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-LogNormal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.LogNormal",
          "name": "LogNormal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-LogNormal.html#LogNormal",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate LogNormal",
          "module": "HLearn.Models.Distributions.Univariate.LogNormal",
          "name": "LogNormal",
          "package": "HLearn-distributions",
          "partial": "Log Normal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-LogNormal.html#t:LogNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Normal.html",
          "type": "module"
        },
        "index": {
          "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
          "hierarchy": "HLearn Models Distributions Univariate Normal",
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Normal.html#Normal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Normal",
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "partial": "Normal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#t:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "signature": "Normal (Moments3 prob)",
          "source": "src/HLearn-Models-Distributions-Univariate-Normal.html#Normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Normal",
          "module": "HLearn.Models.Distributions.Univariate.Normal",
          "name": "Normal",
          "package": "HLearn-distributions",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Univariate.Poisson",
          "name": "Poisson",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Poisson.html",
          "type": "module"
        },
        "index": {
          "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
          "hierarchy": "HLearn Models Distributions Univariate Poisson",
          "module": "HLearn.Models.Distributions.Univariate.Poisson",
          "name": "Poisson",
          "package": "HLearn-distributions",
          "partial": "Poisson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Poisson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Univariate.Poisson",
          "name": "Poisson",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Univariate-Poisson.html#Poisson",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Univariate Poisson",
          "module": "HLearn.Models.Distributions.Univariate.Poisson",
          "name": "Poisson",
          "package": "HLearn-distributions",
          "partial": "Poisson",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Poisson.html#t:Poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the functions for plotting distributions using Gnuplot.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Gnuplot",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the functions for plotting distributions using Gnuplot",
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Gnuplot",
          "package": "HLearn-distributions",
          "partial": "Gnuplot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PicType",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PicType",
          "package": "HLearn-distributions",
          "partial": "Pic Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PicType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotParams",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotParams",
          "package": "HLearn-distributions",
          "partial": "Plot Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlotParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotType",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotType",
          "package": "HLearn-distributions",
          "partial": "Plot Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlotType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Plottable",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#Plottable",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Plottable",
          "package": "HLearn-distributions",
          "partial": "Plottable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:Plottable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to plot a distribution, it must be an instance of this class.  You shouldn't need to know the details.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlottableDistribution",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlottableDistribution",
          "type": "class"
        },
        "index": {
          "description": "In order to plot distribution it must be an instance of this class You shouldn need to know the details",
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlottableDistribution",
          "package": "HLearn-distributions",
          "partial": "Plottable Distribution",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlottableDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Bar",
          "package": "HLearn-distributions",
          "signature": "Bar",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Bar",
          "package": "HLearn-distributions",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Continuous",
          "package": "HLearn-distributions",
          "signature": "Continuous",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Continuous",
          "package": "HLearn-distributions",
          "partial": "Continuous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Continuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "EPS",
          "package": "HLearn-distributions",
          "signature": "EPS",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "EPS",
          "package": "HLearn-distributions",
          "partial": "EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PNG",
          "package": "HLearn-distributions",
          "signature": "PNG",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PNG",
          "package": "HLearn-distributions",
          "partial": "PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:PNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotParams",
          "package": "HLearn-distributions",
          "signature": "PlotParams",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "PlotParams",
          "package": "HLearn-distributions",
          "partial": "Plot Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:PlotParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Points",
          "package": "HLearn-distributions",
          "signature": "Points",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "Points",
          "package": "HLearn-distributions",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "dataFile",
          "package": "HLearn-distributions",
          "signature": "FilePath",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "dataFile",
          "package": "HLearn-distributions",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:dataFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprovided due to backwards compatibility with the nuclear weapons blog post.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "genPlotParams",
          "package": "HLearn-distributions",
          "signature": "String -\u003e a -\u003e PlotParams",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#genPlotParams",
          "type": "function"
        },
        "index": {
          "description": "provided due to backwards compatibility with the nuclear weapons blog post",
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "genPlotParams",
          "normalized": "String-\u003ea-\u003ePlotParams",
          "package": "HLearn-distributions",
          "partial": "Plot Params",
          "signature": "String-\u003ea-\u003ePlotParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:genPlotParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "gnuFile",
          "package": "HLearn-distributions",
          "signature": "FilePath",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "gnuFile",
          "package": "HLearn-distributions",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:gnuFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pdfL",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e [Probability dist]",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#pdfL",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pdfL",
          "normalized": "a-\u003e[Probability a]",
          "package": "HLearn-distributions",
          "signature": "dist-\u003e[Probability dist]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pdfL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "picFile",
          "package": "HLearn-distributions",
          "signature": "FilePath",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "picFile",
          "package": "HLearn-distributions",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:picFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "picType",
          "package": "HLearn-distributions",
          "signature": "PicType",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "picType",
          "package": "HLearn-distributions",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:picType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall this function to plot your distribution.  You can create the PlotParams manually, or you can use default parameter creating function below.\n\u003c/p\u003e",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotDistribution",
          "package": "HLearn-distributions",
          "signature": "PlotParams -\u003e dist -\u003e IO ()",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotDistribution",
          "type": "function"
        },
        "index": {
          "description": "Call this function to plot your distribution You can create the PlotParams manually or you can use default parameter creating function below",
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotDistribution",
          "normalized": "PlotParams-\u003ea-\u003eIO()",
          "package": "HLearn-distributions",
          "partial": "Distribution",
          "signature": "PlotParams-\u003edist-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotFile",
          "package": "HLearn-distributions",
          "signature": "String -\u003e PicType -\u003e PlotParams",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotFile",
          "normalized": "String-\u003ePicType-\u003ePlotParams",
          "package": "HLearn-distributions",
          "partial": "File",
          "signature": "String-\u003ePicType-\u003ePlotParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotType",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e PlotType",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotType",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotType",
          "normalized": "a-\u003ePlotType",
          "package": "HLearn-distributions",
          "partial": "Type",
          "signature": "dist-\u003ePlotType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotdata",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e String",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotdata",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "plotdata",
          "normalized": "a-\u003eString",
          "package": "HLearn-distributions",
          "signature": "dist-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pngHeight",
          "package": "HLearn-distributions",
          "signature": "Int",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pngHeight",
          "package": "HLearn-distributions",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pngHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pngWidth",
          "package": "HLearn-distributions",
          "signature": "Int",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "pngWidth",
          "package": "HLearn-distributions",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pngWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "samplePoints",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e [Datapoint dist]",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#samplePoints",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "samplePoints",
          "normalized": "a-\u003e[Datapoint a]",
          "package": "HLearn-distributions",
          "partial": "Points",
          "signature": "dist-\u003e[Datapoint dist]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:samplePoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "samplesFromMinMax",
          "package": "HLearn-distributions",
          "signature": "b -\u003e b -\u003e [b]",
          "source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#samplesFromMinMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
          "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
          "name": "samplesFromMinMax",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "HLearn-distributions",
          "partial": "From Min Max",
          "signature": "b-\u003eb-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:samplesFromMinMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplays Multivariate dependencies\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "Graphviz",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html",
          "type": "module"
        },
        "index": {
          "description": "Displays Multivariate dependencies",
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "Graphviz",
          "package": "HLearn-distributions",
          "partial": "Graphviz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "MarkovNetwork",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#MarkovNetwork",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "MarkovNetwork",
          "package": "HLearn-distributions",
          "partial": "Markov Network",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#t:MarkovNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "MultivariateLabels",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#MultivariateLabels",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "MultivariateLabels",
          "package": "HLearn-distributions",
          "partial": "Multivariate Labels",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#t:MultivariateLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "getLabels",
          "package": "HLearn-distributions",
          "signature": "datatype -\u003e [String]",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#getLabels",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "getLabels",
          "normalized": "a-\u003e[String]",
          "package": "HLearn-distributions",
          "partial": "Labels",
          "signature": "datatype-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:getLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "graphL",
          "package": "HLearn-distributions",
          "signature": "dist -\u003e [String] -\u003e [(String, [String])]",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#graphL",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "graphL",
          "normalized": "a-\u003e[String]-\u003e[(String,[String])]",
          "package": "HLearn-distributions",
          "signature": "dist-\u003e[String]-\u003e[(String,[String])]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:graphL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "plotNetwork",
          "package": "HLearn-distributions",
          "signature": "FilePath -\u003e dist -\u003e IO Bool",
          "source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#plotNetwork",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Distributions Visualization Graphviz",
          "module": "HLearn.Models.Distributions.Visualization.Graphviz",
          "name": "plotNetwork",
          "normalized": "FilePath-\u003ea-\u003eIO Bool",
          "package": "HLearn-distributions",
          "partial": "Network",
          "signature": "FilePath-\u003edist-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:plotNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file exports the most commonly used modules within HLearn-distributions.  Most likely this is the only file you will have to import.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Distributions",
          "name": "Distributions",
          "package": "HLearn-distributions",
          "source": "src/HLearn-Models-Distributions.html",
          "type": "module"
        },
        "index": {
          "description": "This file exports the most commonly used modules within HLearn-distributions Most likely this is the only file you will have to import",
          "hierarchy": "HLearn Models Distributions",
          "module": "HLearn.Models.Distributions",
          "name": "Distributions",
          "package": "HLearn-distributions",
          "partial": "Distributions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions.html#"
      }
    }
  ]
]