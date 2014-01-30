[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides tools for doing single parameter Bayesian inference.\n\u003c/p\u003e\u003cp\u003eExample ghci use:\n\u003c/p\u003e\u003cpre\u003e # Generate a discrete simulation of the uniform prior for the bias\n # of a single coin on [0,1] using a grid of 100 points.\n let prior = uniformPrior 100\n # Update the prior as if we flipped the coin 100 times and got 25 heads.\n let posterior = coins prior 25 75\n # Optionally, import Graphics.Gnuplot.Simple and convert posterior \n # to a list of tuples for plotting using listify\n :m + Graphics.Gnuplot.Simple\n plotList [] (listify posterior)\n # As you'd expect, nearly all of the probability mass is concentrated\n # between a bias of 0.2 and 0.3\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Learn.html",
        "fct-type": "module",
        "title": "Learn"
      },
      "index": {
        "description": "This library provides tools for doing single parameter Bayesian inference Example ghci use Generate discrete simulation of the uniform prior for the bias of single coin on using grid of points let prior uniformPrior Update the prior as if we flipped the coin times and got heads let posterior coins prior Optionally import Graphics.Gnuplot.Simple and convert posterior to list of tuples for plotting using listify Graphics.Gnuplot.Simple plotList listify posterior As you expect nearly all of the probability mass is concentrated between bias of and",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Learn",
        "normalized": "",
        "package": "learn",
        "partial": "Learn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Distro",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Learn.html#Distro",
        "fct-type": "newtype",
        "title": "Distro"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Distro",
        "normalized": "",
        "package": "learn",
        "partial": "Distro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Prob",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Learn.html#Prob",
        "fct-type": "type",
        "title": "Prob"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Prob",
        "normalized": "",
        "package": "learn",
        "partial": "Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Result",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Learn.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Result",
        "normalized": "",
        "package": "learn",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Distro",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Distro",
        "fct-source": "src/Numeric-Learn.html#Distro",
        "fct-type": "function",
        "title": "Distro"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Distro",
        "normalized": "",
        "package": "learn",
        "partial": "Distro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Negative",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Negative",
        "fct-source": "src/Numeric-Learn.html#Result",
        "fct-type": "function",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Negative",
        "normalized": "",
        "package": "learn",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Positive",
      "description": {
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Positive",
        "fct-source": "src/Numeric-Learn.html#Result",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "Positive",
        "normalized": "",
        "package": "learn",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:coins",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a distro with many trials, all of which either succeeded or failed.\n\u003c/p\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Distro Prob -\u003e Int -\u003e Int -\u003e Distro Prob",
        "fct-source": "src/Numeric-Learn.html#coins",
        "fct-type": "function",
        "title": "coins"
      },
      "index": {
        "description": "Updates distro with many trials all of which either succeeded or failed",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "coins",
        "normalized": "Distro Prob-\u003eInt-\u003eInt-\u003eDistro Prob",
        "package": "learn",
        "partial": "",
        "signature": "Distro Prob-\u003eInt-\u003eInt-\u003eDistro Prob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:listify",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Distro to a list of tuples for easier plotting.\n\u003c/p\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Distro k -\u003e [(k, Prob)]",
        "fct-source": "src/Numeric-Learn.html#listify",
        "fct-type": "function",
        "title": "listify"
      },
      "index": {
        "description": "Convert Distro to list of tuples for easier plotting",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "listify",
        "normalized": "Distro a-\u003e[(a,Prob)]",
        "package": "learn",
        "partial": "",
        "signature": "Distro k-\u003e[(k,Prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:runDistro",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Map a Prob",
        "fct-source": "src/Numeric-Learn.html#Distro",
        "fct-type": "function",
        "title": "runDistro"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "runDistro",
        "normalized": "",
        "package": "learn",
        "partial": "Distro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:singleCoin",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a distro with a new trial that either succeeded or failed. \n\u003c/p\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Distro Prob -\u003e Result -\u003e Distro Prob",
        "fct-source": "src/Numeric-Learn.html#singleCoin",
        "fct-type": "function",
        "title": "singleCoin"
      },
      "index": {
        "description": "Updates distro with new trial that either succeeded or failed",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "singleCoin",
        "normalized": "Distro Prob-\u003eResult-\u003eDistro Prob",
        "package": "learn",
        "partial": "Coin",
        "signature": "Distro Prob-\u003eResult-\u003eDistro Prob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:uniformPDF",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of elements and generates a uniform Distro over them.\n\u003c/p\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "[k] -\u003e Distro k",
        "fct-source": "src/Numeric-Learn.html#uniformPDF",
        "fct-type": "function",
        "title": "uniformPDF"
      },
      "index": {
        "description": "Takes list of elements and generates uniform Distro over them",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "uniformPDF",
        "normalized": "[a]-\u003eDistro a",
        "package": "learn",
        "partial": "PDF",
        "signature": "[k]-\u003eDistro k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:uniformPrior",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a simulated uniform distro over [0,1] with user supplied granularity. \n\u003c/p\u003e",
        "fct-module": "Numeric.Learn",
        "fct-package": "learn",
        "fct-signature": "Integer -\u003e Distro Prob",
        "fct-source": "src/Numeric-Learn.html#uniformPrior",
        "fct-type": "function",
        "title": "uniformPrior"
      },
      "index": {
        "description": "Generates simulated uniform distro over with user supplied granularity",
        "hierarchy": "Numeric Learn",
        "module": "Numeric.Learn",
        "name": "uniformPrior",
        "normalized": "Integer-\u003eDistro Prob",
        "package": "learn",
        "partial": "Prior",
        "signature": "Integer-\u003eDistro Prob"
      }
    }
  }
]