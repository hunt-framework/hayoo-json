[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the type classes for manipulating distributions.\n\u003c/p\u003e\u003cp\u003eWe use the same classes for both discrete and continuous distributions.  Unfortunately, we cannot use the type classes from the \u003ccode\u003estatistics\u003c/code\u003e package because we require more flexibility than they offer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "This module contains the type classes for manipulating distributions We use the same classes for both discrete and continuous distributions Unfortunately we cannot use the type classes from the statistics package because we require more flexibility than they offer",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "Common",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:CDF",
      "description": {
        "fct-descr": "\u003cp\u003eTechnically, every distribution has a Cumulative Distribution Function (CDF), and so this type class should be merged with the \u003ca\u003eDistribution\u003c/a\u003e type class.  However, I haven't had a chance to implement the CDF for most distributions yet, so this type class has been separated out.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#CDF",
        "fct-type": "class",
        "title": "CDF"
      },
      "index": {
        "description": "Technically every distribution has Cumulative Distribution Function CDF and so this type class should be merged with the Distribution type class However haven had chance to implement the CDF for most distributions yet so this type class has been separated out",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "CDF",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "CDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Mean",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#Mean",
        "fct-type": "class",
        "title": "Mean"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "Mean",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:PDF",
      "description": {
        "fct-descr": "\u003cp\u003eNot every distribution has a Probability Density Function (PDF), however most distributions in the HLearn library do.  For many applications, the PDF is much more intuitive and easier to work with than the CDF.  For discrete distributions, this is often called a Probability Mass Function (PMF); however, for simplicity we use the same type class for both continuous and discrete data.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#PDF",
        "fct-type": "class",
        "title": "PDF"
      },
      "index": {
        "description": "Not every distribution has Probability Density Function PDF however most distributions in the HLearn library do For many applications the PDF is much more intuitive and easier to work with than the CDF For discrete distributions this is often called Probability Mass Function PMF however for simplicity we use the same type class for both continuous and discrete data",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "PDF",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "PDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Probabilistic",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#Probabilistic",
        "fct-type": "class",
        "title": "Probabilistic"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "Probabilistic",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Probabilistic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#t:Variance",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#Variance",
        "fct-type": "class",
        "title": "Variance"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "Variance",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Variance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:cdf",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e Datapoint dist -\u003e Probability dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#cdf",
        "fct-type": "method",
        "title": "cdf"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "cdf",
        "normalized": "a-\u003eDatapoint a-\u003eProbability a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003eDatapoint dist-\u003eProbability dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:cdfInverse",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e Probability dist -\u003e Datapoint dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#cdfInverse",
        "fct-type": "method",
        "title": "cdfInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "cdfInverse",
        "normalized": "a-\u003eProbability a-\u003eDatapoint a",
        "package": "HLearn-distributions",
        "partial": "Inverse",
        "signature": "dist-\u003eProbability dist-\u003eDatapoint dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:mean",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e Datapoint dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#mean",
        "fct-type": "method",
        "title": "mean"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "mean",
        "normalized": "a-\u003eDatapoint a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003eDatapoint dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:nonoverlap",
      "description": {
        "fct-descr": "\u003cp\u003eIf you were to plot a list of distributions, nonoverlap returns the amount of area that only a single distribution covers.  That is, it will be equal to number of distributions - the overlap.\n\u003c/p\u003e\u003cp\u003eThis function is used by the HomTree classifier.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "[dist] -\u003e Probability dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#nonoverlap",
        "fct-type": "function",
        "title": "nonoverlap"
      },
      "index": {
        "description": "If you were to plot list of distributions nonoverlap returns the amount of area that only single distribution covers That is it will be equal to number of distributions the overlap This function is used by the HomTree classifier",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "nonoverlap",
        "normalized": "[a]-\u003eProbability a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "[dist]-\u003eProbability dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:pdf",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e Datapoint dist -\u003e Probability dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#pdf",
        "fct-type": "method",
        "title": "pdf"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "pdf",
        "normalized": "a-\u003eDatapoint a-\u003eProbability a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003eDatapoint dist-\u003eProbability dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Common.html#v:variance",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Common",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e Probability dist",
        "fct-source": "src/HLearn-Models-Distributions-Common.html#variance",
        "fct-type": "method",
        "title": "variance"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Common",
        "module": "HLearn.Models.Distributions.Common",
        "name": "variance",
        "normalized": "a-\u003eProbability a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003eProbability dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis list of kernels is take from wikipedia's: \u003ca\u003ehttps://en.wikipedia.org/wiki/Uniform_kernel#Kernel_functions_in_common_use\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html",
        "fct-type": "module",
        "title": "Kernels"
      },
      "index": {
        "description": "This list of kernels is take from wikipedia https en.wikipedia.org wiki Uniform kernel Kernel functions in common use",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Kernels",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Kernels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Cosine",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Cosine",
        "fct-type": "data",
        "title": "Cosine"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Cosine",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Cosine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Epanechnikov",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Epanechnikov",
        "fct-type": "data",
        "title": "Epanechnikov"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Epanechnikov",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Epanechnikov",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Gaussian",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Gaussian",
        "fct-type": "data",
        "title": "Gaussian"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Gaussian",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Gaussian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Kernel",
      "description": {
        "fct-descr": "\u003cp\u003eA kernel is function in one parameter that takes a value on the x axis and spits out a \u003ca\u003eprobability.\u003c/a\u003e  We create a data object for each kernel, and a corresponding class to make things play nice with the type system.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Kernel",
        "fct-type": "class",
        "title": "Kernel"
      },
      "index": {
        "description": "kernel is function in one parameter that takes value on the axis and spits out probability We create data object for each kernel and corresponding class to make things play nice with the type system",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Kernel",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:KernelBox",
      "description": {
        "fct-descr": "\u003cp\u003eA KernelBox is a universal object for storing kernels.  Whatever kernel it stores, it becomes a kernel with the same properties.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#KernelBox",
        "fct-type": "data",
        "title": "KernelBox"
      },
      "index": {
        "description": "KernelBox is universal object for storing kernels Whatever kernel it stores it becomes kernel with the same properties",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "KernelBox",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Kernel Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Quartic",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Quartic",
        "fct-type": "data",
        "title": "Quartic"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Quartic",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Quartic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Triangular",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Triangular",
        "fct-type": "data",
        "title": "Triangular"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Triangular",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Triangular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Tricube",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Tricube",
        "fct-type": "data",
        "title": "Tricube"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Tricube",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Tricube",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Triweight",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Triweight",
        "fct-type": "data",
        "title": "Triweight"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Triweight",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Triweight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#t:Uniform",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Uniform",
        "fct-type": "data",
        "title": "Uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Uniform",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Uniform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Cosine",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Cosine",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Cosine",
        "fct-type": "function",
        "title": "Cosine"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Cosine",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Cosine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Epanechnikov",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Epanechnikov",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Epanechnikov",
        "fct-type": "function",
        "title": "Epanechnikov"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Epanechnikov",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Epanechnikov",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Gaussian",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Gaussian",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Gaussian",
        "fct-type": "function",
        "title": "Gaussian"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Gaussian",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Gaussian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:KernelBox",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "kernel -\u003e KernelBox num",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#KernelBox",
        "fct-type": "function",
        "title": "KernelBox"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "KernelBox",
        "normalized": "a-\u003eKernelBox b",
        "package": "HLearn-distributions",
        "partial": "Kernel Box",
        "signature": "kernel-\u003eKernelBox num"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Quartic",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Quartic",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Quartic",
        "fct-type": "function",
        "title": "Quartic"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Quartic",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Quartic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Triangular",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Triangular",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Triangular",
        "fct-type": "function",
        "title": "Triangular"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Triangular",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Triangular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Tricube",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Tricube",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Tricube",
        "fct-type": "function",
        "title": "Tricube"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Tricube",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Tricube",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Triweight",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Triweight",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Triweight",
        "fct-type": "function",
        "title": "Triweight"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Triweight",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Triweight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:Uniform",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Uniform",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#Uniform",
        "fct-type": "function",
        "title": "Uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "Uniform",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Uniform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Kernels.html#v:evalKernel",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Kernels",
        "fct-package": "HLearn-distributions",
        "fct-signature": "kernel -\u003e num -\u003e num",
        "fct-source": "src/HLearn-Models-Distributions-Kernels.html#evalKernel",
        "fct-type": "method",
        "title": "evalKernel"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Kernels",
        "module": "HLearn.Models.Distributions.Kernels",
        "name": "evalKernel",
        "normalized": "a-\u003eb-\u003eb",
        "package": "HLearn-distributions",
        "partial": "Kernel",
        "signature": "kernel-\u003enum-\u003enum"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed for Multivariate distributions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Interface.html",
        "fct-type": "module",
        "title": "Interface"
      },
      "index": {
        "description": "Used for Multivariate distributions",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "Interface",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Dependent",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Dependent",
        "fct-type": "function",
        "title": "Dependent"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "Dependent",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Dependent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Independent",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Independent",
        "fct-type": "function",
        "title": "Independent"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "Independent",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Independent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Index",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Index",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "Index",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:MultiCategorical",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "MultiCategorical",
        "fct-type": "function",
        "title": "MultiCategorical"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "MultiCategorical",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multi Categorical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Interface.html#t:Multivariate",
      "description": {
        "fct-descr": "\u003cp\u003ethis is the main type for specifying multivariate distributions\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Interface",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Interface.html#Multivariate",
        "fct-type": "data",
        "title": "Multivariate"
      },
      "index": {
        "description": "this is the main type for specifying multivariate distributions",
        "hierarchy": "HLearn Models Distributions Multivariate Interface",
        "module": "HLearn.Models.Distributions.Multivariate.Interface",
        "name": "Multivariate",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multivariate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe categorical distribution is used for discrete data.  It is also sometimes called the discrete distribution or the multinomial distribution.  For more, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/CatContainer_distribution\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html",
        "fct-type": "module",
        "title": "CatContainer"
      },
      "index": {
        "description": "The categorical distribution is used for discrete data It is also sometimes called the discrete distribution or the multinomial distribution For more see the wikipedia entry https en.wikipedia.org wiki CatContainer distribution",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "CatContainer",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Cat Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#t:CatContainer",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
        "fct-type": "data",
        "title": "CatContainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "CatContainer",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Cat Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:CatContainer",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "CatContainer",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
        "fct-type": "function",
        "title": "CatContainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "CatContainer",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Cat Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:catnumdp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "prob",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
        "fct-type": "function",
        "title": "catnumdp"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "catnumdp",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:ds",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "[HList (: * [Char] (: * Char (: * [Char] ([] *))))]",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#ds",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "ds",
        "normalized": "[HList(*[Char](*Char(*[Char]([]*))))]",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "[HList(*[Char](*Char(*[Char]([]*))))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:pdfmap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "!(Map label basedist)",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
        "fct-type": "function",
        "title": "pdfmap"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "pdfmap",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:probmap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "!(Map label prob)",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#CatContainer",
        "fct-type": "function",
        "title": "probmap"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "probmap",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#v:test",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "fct-package": "HLearn-distributions",
        "fct-signature": "CatContainer String (CatContainer Char (CatContainer String (Unital Double) Double) Double) Double",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-CatContainer.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal CatContainer",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.CatContainer",
        "name": "test",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html",
        "fct-type": "module",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "name": "Container",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#t:Container",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html#Container",
        "fct-type": "data",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "name": "Container",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Container.html#t:MultiContainer",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Container.html#MultiContainer",
        "fct-type": "data",
        "title": "MultiContainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Container",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Container",
        "name": "MultiContainer",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multi Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed for ignoring data\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html",
        "fct-type": "module",
        "title": "Ignore"
      },
      "index": {
        "description": "Used for ignoring data",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "name": "Ignore",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#t:Ignore",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Ignore",
        "fct-type": "function",
        "title": "Ignore"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "name": "Ignore",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#t:Ignore-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#Ignore%27",
        "fct-type": "newtype",
        "title": "Ignore'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "name": "Ignore'",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Ignore'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#v:Ignore-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Ignore' basedist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Ignore.html#Ignore%27",
        "fct-type": "function",
        "title": "Ignore'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Ignore",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Ignore",
        "name": "Ignore'",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Ignore'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMarginalization is a tricky procedure involving a lot of type hackery.  All user-facing interfaces use the \u003ca\u003eMarginalize\u003c/a\u003e class, and all internal interfaces use the \u003ca\u003eMarginalize'\u003c/a\u003e class.  Essentially, \u003ca\u003eTypeLens\u003c/a\u003e class converts the \u003ca\u003eType lens\u003c/a\u003e for our user's data type into a type level number.  The  \u003ca\u003eMarginalize'\u003c/a\u003e class then takes this type number and uses it as an index into an appropriate type list that represents the data type.\n\u003c/p\u003e\u003cp\u003eThe TemplateHaskell module has more info.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html",
        "fct-type": "module",
        "title": "Marginalization"
      },
      "index": {
        "description": "Marginalization is tricky procedure involving lot of type hackery All user-facing interfaces use the Marginalize class and all internal interfaces use the Marginalize class Essentially TypeLens class converts the Type lens for our user data type into type level number The Marginalize class then takes this type number and uses it as an index into an appropriate type list that represents the data type The TemplateHaskell module has more info",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "Marginalization",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Marginalization",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#t:Marginalize",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#Marginalize",
        "fct-type": "class",
        "title": "Marginalize"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "Marginalize",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Marginalize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#t:Marginalize-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#Marginalize%27",
        "fct-type": "class",
        "title": "Marginalize'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "Marginalize'",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Marginalize'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:condition",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e Datapoint (Margin' (TypeLensIndex index) dist) -\u003e dist -\u003e MarginalizeOut' (TypeLensIndex index) dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#condition",
        "fct-type": "method",
        "title": "condition"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "condition",
        "normalized": "a-\u003eDatapoint(Margin'(TypeLensIndex a)b)-\u003eb-\u003eMarginalizeOut'(TypeLensIndex a)b",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "index-\u003eDatapoint(Margin'(TypeLensIndex index)dist)-\u003edist-\u003eMarginalizeOut'(TypeLensIndex index)dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:condition-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e dist -\u003e Datapoint (Margin' index dist) -\u003e MarginalizeOut' index dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#condition%27",
        "fct-type": "method",
        "title": "condition'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "condition'",
        "normalized": "a-\u003eb-\u003eDatapoint(Margin' a b)-\u003eMarginalizeOut' a b",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "index-\u003edist-\u003eDatapoint(Margin' index dist)-\u003eMarginalizeOut' index dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:getMargin",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e dist -\u003e Margin index dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#getMargin",
        "fct-type": "method",
        "title": "getMargin"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "getMargin",
        "normalized": "a-\u003eb-\u003eMargin a b",
        "package": "HLearn-distributions",
        "partial": "Margin",
        "signature": "index-\u003edist-\u003eMargin index dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:getMargin-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e dist -\u003e Margin' index dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#getMargin%27",
        "fct-type": "method",
        "title": "getMargin'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "getMargin'",
        "normalized": "a-\u003eb-\u003eMargin' a b",
        "package": "HLearn-distributions",
        "partial": "Margin'",
        "signature": "index-\u003edist-\u003eMargin' index dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:marginalizeOut",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e dist -\u003e MarginalizeOut index dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#marginalizeOut",
        "fct-type": "method",
        "title": "marginalizeOut"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "marginalizeOut",
        "normalized": "a-\u003eb-\u003eMarginalizeOut a b",
        "package": "HLearn-distributions",
        "partial": "Out",
        "signature": "index-\u003edist-\u003eMarginalizeOut index dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#v:marginalizeOut-39-",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "fct-package": "HLearn-distributions",
        "fct-signature": "index -\u003e dist -\u003e MarginalizeOut' index dist",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Marginalization.html#marginalizeOut%27",
        "fct-type": "method",
        "title": "marginalizeOut'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Marginalization",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Marginalization",
        "name": "marginalizeOut'",
        "normalized": "a-\u003eb-\u003eMarginalizeOut' a b",
        "package": "HLearn-distributions",
        "partial": "Out'",
        "signature": "index-\u003edist-\u003eMarginalizeOut' index dist"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenient TemplateHaskell functions for making type lens suitable for use with multivariate distributions.\n\u003c/p\u003e\u003cp\u003eGiven a data type that looks like:\n\u003c/p\u003e\u003cpre\u003edata Character = Character\n    { _name      :: String\n    , _species   :: String\n    , _job       :: Job\n    , _isGood    :: Maybe Bool\n    , _age       :: Double -- in years\n    , _height    :: Double -- in feet\n    , _weight    :: Double -- in pounds\n    }\n    deriving (Read,Show,Eq,Ord)\n \ndata Job = Manager | Crew | Henchman | Other\n    deriving (Read,Show,Eq,Ord)\n\u003c/pre\u003e\u003cp\u003ewhen we run the command:\n\u003c/p\u003e\u003cpre\u003emakeTypeLenses ''Character\n\u003c/pre\u003e\u003cp\u003eWe generate the following type lenses automatically:\n\u003c/p\u003e\u003cpre\u003edata TH_name    = TH_name\ndata TH_species = TH_species\ndata TH_job     = TH_job\ndata TH_isGood  = TH_isGood\ndata TH_age     = TH_age\ndata TH_height  = TH_height\ndata TH_weight  = TH_weight\n\ninstance TypeLens TH_name where\n    type instance TypeLensIndex TH_name = Nat1Box Zero\ninstance TypeLens TH_species where\n    type instance TypeLensIndex TH_species = Nat1Box (Succ Zero)\ninstance TypeLens TH_job where\n    type instance TypeLensIndex TH_job = Nat1Box (Succ (Succ Zero))\ninstance TypeLens TH_isGood where\n    type instance TypeLensIndex TH_isGood = Nat1Box (Succ (Succ (Succ Zero)))\ninstance TypeLens TH_age where\n    type instance TypeLensIndex TH_age = Nat1Box (Succ (Succ (Succ (Succ Zero))))\ninstance TypeLens TH_height where\n    type instance TypeLensIndex TH_height = Nat1Box (Succ (Succ (Succ (Succ (Succ Zero)))))\ninstance TypeLens TH_weight where\n    type instance TypeLensIndex TH_weight = Nat1Box (Succ (Succ (Succ (Succ (Succ (Succ Zero))))))\n        \ninstance Trainable Character where\n    type instance GetHList Character = HList '[String,String,Job,Maybe Bool, Double,Double,Double]\n    getHList var = name var:::species var:::job var:::isGood var:::age var:::height var:::weight var:::HNil\n\ninstance MultivariateLabels Character where\n    getLabels dist = [\"TH_name\",\"TH_species\",\"TH_job\",\"TH_isGood\",\"TH_age\",\"TH_height\",\"TH_weight\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html",
        "fct-type": "module",
        "title": "TypeLens"
      },
      "index": {
        "description": "This module provides convenient TemplateHaskell functions for making type lens suitable for use with multivariate distributions Given data type that looks like data Character Character name String species String job Job isGood Maybe Bool age Double in years height Double in feet weight Double in pounds deriving Read Show Eq Ord data Job Manager Crew Henchman Other deriving Read Show Eq Ord when we run the command makeTypeLenses Character We generate the following type lenses automatically data TH name TH name data TH species TH species data TH job TH job data TH isGood TH isGood data TH age TH age data TH height TH height data TH weight TH weight instance TypeLens TH name where type instance TypeLensIndex TH name Nat1Box Zero instance TypeLens TH species where type instance TypeLensIndex TH species Nat1Box Succ Zero instance TypeLens TH job where type instance TypeLensIndex TH job Nat1Box Succ Succ Zero instance TypeLens TH isGood where type instance TypeLensIndex TH isGood Nat1Box Succ Succ Succ Zero instance TypeLens TH age where type instance TypeLensIndex TH age Nat1Box Succ Succ Succ Succ Zero instance TypeLens TH height where type instance TypeLensIndex TH height Nat1Box Succ Succ Succ Succ Succ Zero instance TypeLens TH weight where type instance TypeLensIndex TH weight Nat1Box Succ Succ Succ Succ Succ Succ Zero instance Trainable Character where type instance GetHList Character HList String String Job Maybe Bool Double Double Double getHList var name var species var job var isGood var age var height var weight var HNil instance MultivariateLabels Character where getLabels dist TH name TH species TH job TH isGood TH age TH height TH weight",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "TypeLens",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Type Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:Trainable",
      "description": {
        "fct-descr": "\u003cp\u003eThe Trainable class allows us to convert data types into an isomorphic \u003ca\u003eHList\u003c/a\u003e.  All of our multivariate distributions work on \u003ca\u003eHList\u003c/a\u003es, so they work on all instances of \u003ca\u003eTrainable\u003c/a\u003e as well.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#Trainable",
        "fct-type": "class",
        "title": "Trainable"
      },
      "index": {
        "description": "The Trainable class allows us to convert data types into an isomorphic HList All of our multivariate distributions work on HList so they work on all instances of Trainable as well",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "Trainable",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Trainable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:TypeFunction",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#TypeFunction",
        "fct-type": "class",
        "title": "TypeFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "TypeFunction",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Type Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#t:TypeLens",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies a type level natural number (i.e. \u003ca\u003eNat1\u003c/a\u003e) that indexes at the right location into our HList\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#TypeLens",
        "fct-type": "class",
        "title": "TypeLens"
      },
      "index": {
        "description": "This specifies type level natural number i.e Nat1 that indexes at the right location into our HList",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "TypeLens",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Type Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:getHList",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "t -\u003e GetHList t",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#getHList",
        "fct-type": "method",
        "title": "getHList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "getHList",
        "normalized": "a-\u003eGetHList a",
        "package": "HLearn-distributions",
        "partial": "HList",
        "signature": "t-\u003eGetHList t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:makeTypeLenses",
      "description": {
        "fct-descr": "\u003cp\u003econstructs the type lens\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#makeTypeLenses",
        "fct-type": "function",
        "title": "makeTypeLenses"
      },
      "index": {
        "description": "constructs the type lens",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "makeTypeLenses",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "HLearn-distributions",
        "partial": "Type Lenses",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:nameTransform",
      "description": {
        "fct-descr": "\u003cp\u003egiven the name of one of our records, transform it into the name of our type lens\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#nameTransform",
        "fct-type": "function",
        "title": "nameTransform"
      },
      "index": {
        "description": "given the name of one of our records transform it into the name of our type lens",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "nameTransform",
        "normalized": "String-\u003eString",
        "package": "HLearn-distributions",
        "partial": "Transform",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#v:typefunc",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "fct-package": "HLearn-distributions",
        "fct-signature": "f -\u003e Domain f -\u003e Range f",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-TypeLens.html#typefunc",
        "fct-type": "method",
        "title": "typefunc"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal TypeLens",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.TypeLens",
        "name": "typefunc",
        "normalized": "a-\u003eDomain a-\u003eRange a",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "f-\u003eDomain f-\u003eRange f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html",
        "fct-type": "module",
        "title": "Unital"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "name": "Unital",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Unital",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#t:Unital",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#Unital",
        "fct-type": "newtype",
        "title": "Unital"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "name": "Unital",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Unital",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#v:Unital",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Unital prob",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-Internal-Unital.html#Unital",
        "fct-type": "function",
        "title": "Unital"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate Internal Unital",
        "module": "HLearn.Models.Distributions.Multivariate.Internal.Unital",
        "name": "Unital",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Unital",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html",
        "fct-type": "module",
        "title": "MultiNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
        "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "name": "MultiNormal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multi Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#t:MultiNormal",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html#MultiNormal",
        "fct-type": "newtype",
        "title": "MultiNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
        "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "name": "MultiNormal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multi Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Multivariate-MultiNormal.html#v:MultiNormal",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "MultiNormal (MultiNormalVec (Length xs) prob)",
        "fct-source": "src/HLearn-Models-Distributions-Multivariate-MultiNormal.html#MultiNormal",
        "fct-type": "function",
        "title": "MultiNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Multivariate MultiNormal",
        "module": "HLearn.Models.Distributions.Multivariate.MultiNormal",
        "name": "MultiNormal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multi Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html",
        "fct-type": "module",
        "title": "Binomial"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "Binomial",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Binomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#t:Binomial",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
        "fct-type": "newtype",
        "title": "Binomial"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "Binomial",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Binomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:Binomial",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Binomial",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
        "fct-type": "function",
        "title": "Binomial"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "Binomial",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Binomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bin_n",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Binomial Double Int -\u003e Int",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#bin_n",
        "fct-type": "function",
        "title": "bin_n"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "bin_n",
        "normalized": "Binomial Double Int-\u003eInt",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "Binomial Double Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bin_p",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Binomial Double Int -\u003e Double",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#bin_p",
        "fct-type": "function",
        "title": "bin_p"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "bin_p",
        "normalized": "Binomial Double Int-\u003eDouble",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "Binomial Double Int-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Binomial.html#v:bmoments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Univariate.Binomial",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Moments3 dp",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Binomial.html#Binomial",
        "fct-type": "function",
        "title": "bmoments"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Binomial",
        "module": "HLearn.Models.Distributions.Univariate.Binomial",
        "name": "bmoments",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe categorical distribution is used for discrete data.  It is also sometimes called the discrete distribution or the multinomial distribution.  For more, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Categorical_distribution\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Categorical",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Categorical.html",
        "fct-type": "module",
        "title": "Categorical"
      },
      "index": {
        "description": "The categorical distribution is used for discrete data It is also sometimes called the discrete distribution or the multinomial distribution For more see the wikipedia entry https en.wikipedia.org wiki Categorical distribution",
        "hierarchy": "HLearn Models Distributions Univariate Categorical",
        "module": "HLearn.Models.Distributions.Univariate.Categorical",
        "name": "Categorical",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Categorical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#t:Categorical",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Categorical",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#Categorical",
        "fct-type": "newtype",
        "title": "Categorical"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Categorical",
        "module": "HLearn.Models.Distributions.Univariate.Categorical",
        "name": "Categorical",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Categorical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:Categorical",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Categorical",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Categorical (Map label prob)",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#Categorical",
        "fct-type": "function",
        "title": "Categorical"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Categorical",
        "module": "HLearn.Models.Distributions.Univariate.Categorical",
        "name": "Categorical",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Categorical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:dist2list",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a distribution into a list of (sample,probability) pai\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Categorical",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Categorical prob label -\u003e [(label, prob)]",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#dist2list",
        "fct-type": "function",
        "title": "dist2list"
      },
      "index": {
        "description": "Converts distribution into list of sample probability pai",
        "hierarchy": "HLearn Models Distributions Univariate Categorical",
        "module": "HLearn.Models.Distributions.Univariate.Categorical",
        "name": "dist2list",
        "normalized": "Categorical a b-\u003e[(b,a)]",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "Categorical prob label-\u003e[(label,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Categorical.html#v:mostLikely",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the element in the distribution with the highest probability\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Categorical",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Categorical prob label -\u003e label",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Categorical.html#mostLikely",
        "fct-type": "function",
        "title": "mostLikely"
      },
      "index": {
        "description": "Extracts the element in the distribution with the highest probability",
        "hierarchy": "HLearn Models Distributions Univariate Categorical",
        "module": "HLearn.Models.Distributions.Univariate.Categorical",
        "name": "mostLikely",
        "normalized": "Categorical a b-\u003eb",
        "package": "HLearn-distributions",
        "partial": "Likely",
        "signature": "Categorical prob label-\u003elabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Exponential.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Exponential",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Exponential.html",
        "fct-type": "module",
        "title": "Exponential"
      },
      "index": {
        "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
        "hierarchy": "HLearn Models Distributions Univariate Exponential",
        "module": "HLearn.Models.Distributions.Univariate.Exponential",
        "name": "Exponential",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Exponential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Exponential.html#t:Exponential",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Exponential",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Exponential.html#Exponential",
        "fct-type": "data",
        "title": "Exponential"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Exponential",
        "module": "HLearn.Models.Distributions.Univariate.Exponential",
        "name": "Exponential",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Exponential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Geometric.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Geometric",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Geometric.html",
        "fct-type": "module",
        "title": "Geometric"
      },
      "index": {
        "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
        "hierarchy": "HLearn Models Distributions Univariate Geometric",
        "module": "HLearn.Models.Distributions.Univariate.Geometric",
        "name": "Geometric",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Geometric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Geometric.html#t:Geometric",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Geometric",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Geometric.html#Geometric",
        "fct-type": "data",
        "title": "Geometric"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Geometric",
        "module": "HLearn.Models.Distributions.Univariate.Geometric",
        "name": "Geometric",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Geometric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapts any distribution into one that can handle missing data\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html",
        "fct-type": "module",
        "title": "MissingData"
      },
      "index": {
        "description": "Adapts any distribution into one that can handle missing data",
        "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
        "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "name": "MissingData",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Missing Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#t:MissResponse",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissResponse",
        "fct-type": "data",
        "title": "MissResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
        "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "name": "MissResponse",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Miss Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#t:MissingData",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissingData",
        "fct-type": "data",
        "title": "MissingData"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
        "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "name": "MissingData",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Missing Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#v:Ignore",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Ignore",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-MissingData.html#MissResponse",
        "fct-type": "function",
        "title": "Ignore"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal MissingData",
        "module": "HLearn.Models.Distributions.Univariate.Internal.MissingData",
        "name": "Ignore",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html",
        "fct-type": "module",
        "title": "Moments"
      },
      "index": {
        "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "Moments",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Moments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#t:Moments3",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
        "fct-type": "data",
        "title": "Moments3"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "Moments3",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Moments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:Moments3",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Moments3",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
        "fct-type": "function",
        "title": "Moments3"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "Moments3",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Moments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m0",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "!prob",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
        "fct-type": "function",
        "title": "m0"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "m0",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "!prob",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
        "fct-type": "function",
        "title": "m1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "m1",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Internal-Moments.html#v:m2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "fct-package": "HLearn-distributions",
        "fct-signature": "!prob",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Internal-Moments.html#Moments3",
        "fct-type": "function",
        "title": "m2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Internal Moments",
        "module": "HLearn.Models.Distributions.Univariate.Internal.Moments",
        "name": "m2",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKernel Density Estimation (KDE) is a generic and powerful method for estimating a probability distribution.  See wikipedia for more information: \u003ca\u003ehttp://en.wikipedia.org/wiki/Kernel_density_estimation\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html",
        "fct-type": "module",
        "title": "KernelDensityEstimator"
      },
      "index": {
        "description": "Kernel Density Estimation KDE is generic and powerful method for estimating probability distribution See wikipedia for more information http en.wikipedia.org wiki Kernel density estimation",
        "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
        "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "name": "KernelDensityEstimator",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Kernel Density Estimator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#t:KDE",
      "description": {
        "fct-descr": "\u003cp\u003eThe KDE type is implemented as an isomorphism with the FreeModule\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
        "fct-type": "newtype",
        "title": "KDE"
      },
      "index": {
        "description": "The KDE type is implemented as an isomorphism with the FreeModule",
        "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
        "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "name": "KDE",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "KDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#v:KDE",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "fct-package": "HLearn-distributions",
        "fct-signature": "KDE",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
        "fct-type": "function",
        "title": "KDE"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
        "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "name": "KDE",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "KDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#v:freemod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "fct-package": "HLearn-distributions",
        "fct-signature": "SortedVector dp",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-KernelDensityEstimator.html#KDE",
        "fct-type": "function",
        "title": "freemod"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate KernelDensityEstimator",
        "module": "HLearn.Models.Distributions.Univariate.KernelDensityEstimator",
        "name": "freemod",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-LogNormal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogNormal\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.LogNormal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-LogNormal.html",
        "fct-type": "module",
        "title": "LogNormal"
      },
      "index": {
        "description": "LogNormal",
        "hierarchy": "HLearn Models Distributions Univariate LogNormal",
        "module": "HLearn.Models.Distributions.Univariate.LogNormal",
        "name": "LogNormal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Log Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-LogNormal.html#t:LogNormal",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.LogNormal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-LogNormal.html#LogNormal",
        "fct-type": "data",
        "title": "LogNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate LogNormal",
        "module": "HLearn.Models.Distributions.Univariate.LogNormal",
        "name": "LogNormal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Log Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Normal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Normal.html",
        "fct-type": "module",
        "title": "Normal"
      },
      "index": {
        "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
        "hierarchy": "HLearn Models Distributions Univariate Normal",
        "module": "HLearn.Models.Distributions.Univariate.Normal",
        "name": "Normal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#t:Normal",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Normal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Normal.html#Normal",
        "fct-type": "newtype",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Normal",
        "module": "HLearn.Models.Distributions.Univariate.Normal",
        "name": "Normal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Normal.html#v:Normal",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Normal",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Normal (Moments3 prob)",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Normal.html#Normal",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Normal",
        "module": "HLearn.Models.Distributions.Univariate.Normal",
        "name": "Normal",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Poisson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe method of moments can be used to estimate a number of commonly used distributions.  This module is still under construction as I work out the best way to handle morphisms from the Moments3 type to types of other distributions.  For more information, see the wikipedia entry: \u003ca\u003ehttps://en.wikipedia.org/wiki/Method_of_moments_(statistics)\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Univariate.Poisson",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Poisson.html",
        "fct-type": "module",
        "title": "Poisson"
      },
      "index": {
        "description": "The method of moments can be used to estimate number of commonly used distributions This module is still under construction as work out the best way to handle morphisms from the Moments3 type to types of other distributions For more information see the wikipedia entry https en.wikipedia.org wiki Method of moments statistics",
        "hierarchy": "HLearn Models Distributions Univariate Poisson",
        "module": "HLearn.Models.Distributions.Univariate.Poisson",
        "name": "Poisson",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Poisson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Univariate-Poisson.html#t:Poisson",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Univariate.Poisson",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Univariate-Poisson.html#Poisson",
        "fct-type": "data",
        "title": "Poisson"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Univariate Poisson",
        "module": "HLearn.Models.Distributions.Univariate.Poisson",
        "name": "Poisson",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Poisson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the functions for plotting distributions using Gnuplot.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html",
        "fct-type": "module",
        "title": "Gnuplot"
      },
      "index": {
        "description": "This module contains the functions for plotting distributions using Gnuplot",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "Gnuplot",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Gnuplot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PicType",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
        "fct-type": "data",
        "title": "PicType"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PicType",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Pic Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlotParams",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "data",
        "title": "PlotParams"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PlotParams",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Plot Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlotType",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
        "fct-type": "data",
        "title": "PlotType"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PlotType",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Plot Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:Plottable",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#Plottable",
        "fct-type": "class",
        "title": "Plottable"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "Plottable",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Plottable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#t:PlottableDistribution",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to plot a distribution, it must be an instance of this class.  You shouldn't need to know the details.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlottableDistribution",
        "fct-type": "class",
        "title": "PlottableDistribution"
      },
      "index": {
        "description": "In order to plot distribution it must be an instance of this class You shouldn need to know the details",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PlottableDistribution",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Plottable Distribution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Bar",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Bar",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
        "fct-type": "function",
        "title": "Bar"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "Bar",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Bar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Continuous",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Continuous",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
        "fct-type": "function",
        "title": "Continuous"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "Continuous",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Continuous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:EPS",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "EPS",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
        "fct-type": "function",
        "title": "EPS"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "EPS",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "EPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:PNG",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "PNG",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
        "fct-type": "function",
        "title": "PNG"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PNG",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "PNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:PlotParams",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "PlotParams",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "function",
        "title": "PlotParams"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "PlotParams",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Plot Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:Points",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Points",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotType",
        "fct-type": "function",
        "title": "Points"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "Points",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Points",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:dataFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "FilePath",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "function",
        "title": "dataFile"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "dataFile",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:genPlotParams",
      "description": {
        "fct-descr": "\u003cp\u003eprovided due to backwards compatibility with the nuclear weapons blog post.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "String -\u003e a -\u003e PlotParams",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#genPlotParams",
        "fct-type": "function",
        "title": "genPlotParams"
      },
      "index": {
        "description": "provided due to backwards compatibility with the nuclear weapons blog post",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "genPlotParams",
        "normalized": "String-\u003ea-\u003ePlotParams",
        "package": "HLearn-distributions",
        "partial": "Plot Params",
        "signature": "String-\u003ea-\u003ePlotParams"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:gnuFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "FilePath",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "function",
        "title": "gnuFile"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "gnuFile",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pdfL",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e [Probability dist]",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#pdfL",
        "fct-type": "method",
        "title": "pdfL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "pdfL",
        "normalized": "a-\u003e[Probability a]",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003e[Probability dist]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:picFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "FilePath",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "function",
        "title": "picFile"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "picFile",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:picType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "PicType",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PlotParams",
        "fct-type": "function",
        "title": "picType"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "picType",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotDistribution",
      "description": {
        "fct-descr": "\u003cp\u003eCall this function to plot your distribution.  You can create the PlotParams manually, or you can use default parameter creating function below.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "PlotParams -\u003e dist -\u003e IO ()",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotDistribution",
        "fct-type": "function",
        "title": "plotDistribution"
      },
      "index": {
        "description": "Call this function to plot your distribution You can create the PlotParams manually or you can use default parameter creating function below",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "plotDistribution",
        "normalized": "PlotParams-\u003ea-\u003eIO()",
        "package": "HLearn-distributions",
        "partial": "Distribution",
        "signature": "PlotParams-\u003edist-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotFile",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "String -\u003e PicType -\u003e PlotParams",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotFile",
        "fct-type": "function",
        "title": "plotFile"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "plotFile",
        "normalized": "String-\u003ePicType-\u003ePlotParams",
        "package": "HLearn-distributions",
        "partial": "File",
        "signature": "String-\u003ePicType-\u003ePlotParams"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotType",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e PlotType",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotType",
        "fct-type": "method",
        "title": "plotType"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "plotType",
        "normalized": "a-\u003ePlotType",
        "package": "HLearn-distributions",
        "partial": "Type",
        "signature": "dist-\u003ePlotType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:plotdata",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e String",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#plotdata",
        "fct-type": "method",
        "title": "plotdata"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "plotdata",
        "normalized": "a-\u003eString",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pngHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Int",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
        "fct-type": "function",
        "title": "pngHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "pngHeight",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:pngWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "Int",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#PicType",
        "fct-type": "function",
        "title": "pngWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "pngWidth",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:samplePoints",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e [Datapoint dist]",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#samplePoints",
        "fct-type": "method",
        "title": "samplePoints"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "samplePoints",
        "normalized": "a-\u003e[Datapoint a]",
        "package": "HLearn-distributions",
        "partial": "Points",
        "signature": "dist-\u003e[Datapoint dist]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Gnuplot.html#v:samplesFromMinMax",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "fct-package": "HLearn-distributions",
        "fct-signature": "b -\u003e b -\u003e [b]",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Gnuplot.html#samplesFromMinMax",
        "fct-type": "function",
        "title": "samplesFromMinMax"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Gnuplot",
        "module": "HLearn.Models.Distributions.Visualization.Gnuplot",
        "name": "samplesFromMinMax",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "HLearn-distributions",
        "partial": "From Min Max",
        "signature": "b-\u003eb-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplays Multivariate dependencies\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html",
        "fct-type": "module",
        "title": "Graphviz"
      },
      "index": {
        "description": "Displays Multivariate dependencies",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "Graphviz",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Graphviz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#t:MarkovNetwork",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#MarkovNetwork",
        "fct-type": "class",
        "title": "MarkovNetwork"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "MarkovNetwork",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Markov Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#t:MultivariateLabels",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#MultivariateLabels",
        "fct-type": "class",
        "title": "MultivariateLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "MultivariateLabels",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Multivariate Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:getLabels",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "datatype -\u003e [String]",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#getLabels",
        "fct-type": "method",
        "title": "getLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "getLabels",
        "normalized": "a-\u003e[String]",
        "package": "HLearn-distributions",
        "partial": "Labels",
        "signature": "datatype-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:graphL",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "dist -\u003e [String] -\u003e [(String, [String])]",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#graphL",
        "fct-type": "method",
        "title": "graphL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "graphL",
        "normalized": "a-\u003e[String]-\u003e[(String,[String])]",
        "package": "HLearn-distributions",
        "partial": "",
        "signature": "dist-\u003e[String]-\u003e[(String,[String])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions-Visualization-Graphviz.html#v:plotNetwork",
      "description": {
        "fct-module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "fct-package": "HLearn-distributions",
        "fct-signature": "FilePath -\u003e dist -\u003e IO Bool",
        "fct-source": "src/HLearn-Models-Distributions-Visualization-Graphviz.html#plotNetwork",
        "fct-type": "method",
        "title": "plotNetwork"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Distributions Visualization Graphviz",
        "module": "HLearn.Models.Distributions.Visualization.Graphviz",
        "name": "plotNetwork",
        "normalized": "FilePath-\u003ea-\u003eIO Bool",
        "package": "HLearn-distributions",
        "partial": "Network",
        "signature": "FilePath-\u003edist-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-distributions/docs/HLearn-Models-Distributions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file exports the most commonly used modules within HLearn-distributions.  Most likely this is the only file you will have to import.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Distributions",
        "fct-package": "HLearn-distributions",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Distributions.html",
        "fct-type": "module",
        "title": "Distributions"
      },
      "index": {
        "description": "This file exports the most commonly used modules within HLearn-distributions Most likely this is the only file you will have to import",
        "hierarchy": "HLearn Models Distributions",
        "module": "HLearn.Models.Distributions",
        "name": "Distributions",
        "normalized": "",
        "package": "HLearn-distributions",
        "partial": "Distributions",
        "signature": ""
      }
    }
  }
]