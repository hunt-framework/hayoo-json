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
        "word": "learn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides tools for doing single parameter Bayesian inference.\n\u003c/p\u003e\u003cp\u003eExample ghci use:\n\u003c/p\u003e\u003cpre\u003e # Generate a discrete simulation of the uniform prior for the bias\n # of a single coin on [0,1] using a grid of 100 points.\n let prior = uniformPrior 100\n # Update the prior as if we flipped the coin 100 times and got 25 heads.\n let posterior = coins prior 25 75\n # Optionally, import Graphics.Gnuplot.Simple and convert posterior \n # to a list of tuples for plotting using listify\n :m + Graphics.Gnuplot.Simple\n plotList [] (listify posterior)\n # As you'd expect, nearly all of the probability mass is concentrated\n # between a bias of 0.2 and 0.3\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Learn",
          "name": "Learn",
          "package": "learn",
          "source": "src/Numeric-Learn.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides tools for doing single parameter Bayesian inference Example ghci use Generate discrete simulation of the uniform prior for the bias of single coin on using grid of points let prior uniformPrior Update the prior as if we flipped the coin times and got heads let posterior coins prior Optionally import Graphics.Gnuplot.Simple and convert posterior to list of tuples for plotting using listify Graphics.Gnuplot.Simple plotList listify posterior As you expect nearly all of the probability mass is concentrated between bias of and",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Learn",
          "package": "learn",
          "partial": "Learn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Distro",
          "package": "learn",
          "source": "src/Numeric-Learn.html#Distro",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Distro",
          "package": "learn",
          "partial": "Distro",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Distro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Prob",
          "package": "learn",
          "source": "src/Numeric-Learn.html#Prob",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Prob",
          "package": "learn",
          "partial": "Prob",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Result",
          "package": "learn",
          "source": "src/Numeric-Learn.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Result",
          "package": "learn",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Distro",
          "package": "learn",
          "signature": "Distro",
          "source": "src/Numeric-Learn.html#Distro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Distro",
          "package": "learn",
          "partial": "Distro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Distro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Negative",
          "package": "learn",
          "signature": "Negative",
          "source": "src/Numeric-Learn.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Negative",
          "package": "learn",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "Positive",
          "package": "learn",
          "signature": "Positive",
          "source": "src/Numeric-Learn.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "Positive",
          "package": "learn",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a distro with many trials, all of which either succeeded or failed.\n\u003c/p\u003e",
          "module": "Numeric.Learn",
          "name": "coins",
          "package": "learn",
          "signature": "Distro Prob -\u003e Int -\u003e Int -\u003e Distro Prob",
          "source": "src/Numeric-Learn.html#coins",
          "type": "function"
        },
        "index": {
          "description": "Updates distro with many trials all of which either succeeded or failed",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "coins",
          "normalized": "Distro Prob-\u003eInt-\u003eInt-\u003eDistro Prob",
          "package": "learn",
          "signature": "Distro Prob-\u003eInt-\u003eInt-\u003eDistro Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:coins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Distro to a list of tuples for easier plotting.\n\u003c/p\u003e",
          "module": "Numeric.Learn",
          "name": "listify",
          "package": "learn",
          "signature": "Distro k -\u003e [(k, Prob)]",
          "source": "src/Numeric-Learn.html#listify",
          "type": "function"
        },
        "index": {
          "description": "Convert Distro to list of tuples for easier plotting",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "listify",
          "normalized": "Distro a-\u003e[(a,Prob)]",
          "package": "learn",
          "signature": "Distro k-\u003e[(k,Prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:listify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Learn",
          "name": "runDistro",
          "package": "learn",
          "signature": "Map a Prob",
          "source": "src/Numeric-Learn.html#Distro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "runDistro",
          "package": "learn",
          "partial": "Distro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:runDistro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a distro with a new trial that either succeeded or failed. \n\u003c/p\u003e",
          "module": "Numeric.Learn",
          "name": "singleCoin",
          "package": "learn",
          "signature": "Distro Prob -\u003e Result -\u003e Distro Prob",
          "source": "src/Numeric-Learn.html#singleCoin",
          "type": "function"
        },
        "index": {
          "description": "Updates distro with new trial that either succeeded or failed",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "singleCoin",
          "normalized": "Distro Prob-\u003eResult-\u003eDistro Prob",
          "package": "learn",
          "partial": "Coin",
          "signature": "Distro Prob-\u003eResult-\u003eDistro Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:singleCoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of elements and generates a uniform Distro over them.\n\u003c/p\u003e",
          "module": "Numeric.Learn",
          "name": "uniformPDF",
          "package": "learn",
          "signature": "[k] -\u003e Distro k",
          "source": "src/Numeric-Learn.html#uniformPDF",
          "type": "function"
        },
        "index": {
          "description": "Takes list of elements and generates uniform Distro over them",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "uniformPDF",
          "normalized": "[a]-\u003eDistro a",
          "package": "learn",
          "partial": "PDF",
          "signature": "[k]-\u003eDistro k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:uniformPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a simulated uniform distro over [0,1] with user supplied granularity. \n\u003c/p\u003e",
          "module": "Numeric.Learn",
          "name": "uniformPrior",
          "package": "learn",
          "signature": "Integer -\u003e Distro Prob",
          "source": "src/Numeric-Learn.html#uniformPrior",
          "type": "function"
        },
        "index": {
          "description": "Generates simulated uniform distro over with user supplied granularity",
          "hierarchy": "Numeric Learn",
          "module": "Numeric.Learn",
          "name": "uniformPrior",
          "normalized": "Integer-\u003eDistro Prob",
          "package": "learn",
          "partial": "Prior",
          "signature": "Integer-\u003eDistro Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/learn/docs/Numeric-Learn.html#v:uniformPrior"
      }
    }
  ]
]