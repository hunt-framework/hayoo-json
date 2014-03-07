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
        "word": "mwc-random-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic wrapper for \u003ccode\u003e\u003ca\u003eCondesedTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-CondensedTable-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic wrapper for CondesedTable",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lookup table for arbitrary discrete distributions. It allows\n the generation of random variates in \u003cem\u003eO(1)\u003c/em\u003e. Note that probability\n is quantized in units of \u003ccode\u003e1/2^32\u003c/code\u003e, and all distributions with\n infinite support (e.g. Poisson) should be truncated.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTable",
          "package": "mwc-random-monad",
          "type": "data"
        },
        "index": {
          "description": "lookup table for arbitrary discrete distributions It allows the generation of random variates in Note that probability is quantized in units of and all distributions with infinite support e.g Poisson should be truncated",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTable",
          "package": "mwc-random-monad",
          "partial": "Condensed Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#t:CondensedTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCondensedTable\u003c/a\u003e\u003c/code\u003e that uses unboxed vectors.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTableU",
          "package": "mwc-random-monad",
          "type": "type"
        },
        "index": {
          "description": "CondensedTable that uses unboxed vectors",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTableU",
          "package": "mwc-random-monad",
          "partial": "Condensed Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#t:CondensedTableU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCondensedTable\u003c/a\u003e\u003c/code\u003e that uses boxed vectors, and is able to hold\n any type of element.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTableV",
          "package": "mwc-random-monad",
          "type": "type"
        },
        "index": {
          "description": "CondensedTable that uses boxed vectors and is able to hold any type of element",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "CondensedTableV",
          "package": "mwc-random-monad",
          "partial": "Condensed Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#t:CondensedTableV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "genFromTable",
          "package": "mwc-random-monad",
          "signature": "CondensedTable v a -\u003e Rand m a",
          "source": "src/System-Random-MWC-CondensedTable-Monad.html#genFromTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "genFromTable",
          "normalized": "CondensedTable a b-\u003eRand c b",
          "package": "mwc-random-monad",
          "partial": "From Table",
          "signature": "CondensedTable v a-\u003eRand m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:genFromTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lookup table for the binomial distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableBinomial",
          "package": "mwc-random-monad",
          "signature": "Int-\u003e Double-\u003e CondensedTableU Int",
          "type": "function"
        },
        "index": {
          "description": "Create lookup table for the binomial distribution",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableBinomial",
          "normalized": "Int-\u003eDouble-\u003eCondensedTableU Int",
          "package": "mwc-random-monad",
          "partial": "Binomial",
          "signature": "Int-\u003eDouble-\u003eCondensedTableU Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:tableBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a condensed lookup table from integer weights. Weights\n should sum to \u003ccode\u003e2^32\u003c/code\u003e. If they don't, the algorithm will alter the\n weights so that they do. This approach should work reasonably well\n for rounding errors.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromIntWeights",
          "package": "mwc-random-monad",
          "signature": "v (a, Word32) -\u003e CondensedTable v a",
          "type": "function"
        },
        "index": {
          "description": "Generate condensed lookup table from integer weights Weights should sum to If they don the algorithm will alter the weights so that they do This approach should work reasonably well for rounding errors",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromIntWeights",
          "normalized": "a(b,Word)-\u003eCondensedTable a b",
          "package": "mwc-random-monad",
          "partial": "From Int Weights",
          "signature": "v(a,Word)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:tableFromIntWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a condensed lookup table from a list of outcomes with\n given probabilities. The vector should be non-empty and the\n probabilites should be non-negative and sum to 1. If this is not\n the case, this algorithm will construct a table for some\n distribution that may bear no resemblance to what you intended.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromProbabilities",
          "package": "mwc-random-monad",
          "signature": "v (a, Double) -\u003e CondensedTable v a",
          "type": "function"
        },
        "index": {
          "description": "Generate condensed lookup table from list of outcomes with given probabilities The vector should be non-empty and the probabilites should be non-negative and sum to If this is not the case this algorithm will construct table for some distribution that may bear no resemblance to what you intended",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromProbabilities",
          "normalized": "a(b,Double)-\u003eCondensedTable a b",
          "package": "mwc-random-monad",
          "partial": "From Probabilities",
          "signature": "v(a,Double)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:tableFromProbabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etableFromProbabilities\u003c/a\u003e\u003c/code\u003e but treats number as weights not\n probilities. Non-positive weights are discarded, and those\n remaining are normalized to 1.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromWeights",
          "package": "mwc-random-monad",
          "signature": "v (a, Double) -\u003e CondensedTable v a",
          "type": "function"
        },
        "index": {
          "description": "Same as tableFromProbabilities but treats number as weights not probilities Non-positive weights are discarded and those remaining are normalized to",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tableFromWeights",
          "normalized": "a(b,Double)-\u003eCondensedTable a b",
          "package": "mwc-random-monad",
          "partial": "From Weights",
          "signature": "v(a,Double)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:tableFromWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lookup table for the Poisson distibution. Note that\n table construction may have significant cost. For &#955; \u003c 100 it\n takes as much time to build table as generation of 1000-30000\n variates.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tablePoisson",
          "package": "mwc-random-monad",
          "signature": "Double -\u003e CondensedTableU Int",
          "type": "function"
        },
        "index": {
          "description": "Create lookup table for the Poisson distibution Note that table construction may have significant cost For it takes as much time to build table as generation of variates",
          "hierarchy": "System Random MWC CondensedTable Monad",
          "module": "System.Random.MWC.CondensedTable.Monad",
          "name": "tablePoisson",
          "normalized": "Double-\u003eCondensedTableU Int",
          "package": "mwc-random-monad",
          "partial": "Poisson",
          "signature": "Double-\u003eCondensedTableU Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-CondensedTable-Monad.html#v:tablePoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic wrapper for various distributions generators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-Distributions-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic wrapper for various distributions generators",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for chi square distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "chiSquare",
          "package": "mwc-random-monad",
          "signature": "Int-\u003e Rand m Double",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for chi square distribution",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "chiSquare",
          "normalized": "Int-\u003eRand a Double",
          "package": "mwc-random-monad",
          "partial": "Square",
          "signature": "Int-\u003eRand m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:chiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate exponentially distributed random variate. \n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "exponential",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e Rand m Double",
          "type": "function"
        },
        "index": {
          "description": "Generate exponentially distributed random variate",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "exponential",
          "normalized": "Double-\u003eRand a Double",
          "package": "mwc-random-monad",
          "signature": "Double-\u003eRand m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for gamma distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "gamma",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e Double-\u003e Rand m Double",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for gamma distribution",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "gamma",
          "normalized": "Double-\u003eDouble-\u003eRand a Double",
          "package": "mwc-random-monad",
          "signature": "Double-\u003eDouble-\u003eRand m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for the geometric distribution,\n computing the number of failures before success. Distribution's\n support is [0..].\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "geometric0",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e Rand m Int",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for the geometric distribution computing the number of failures before success Distribution support is",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "geometric0",
          "normalized": "Double-\u003eRand a Int",
          "package": "mwc-random-monad",
          "signature": "Double-\u003eRand m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:geometric0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for geometric distribution for number of\n trials. Distribution's support is [1..] (i.e. just \u003ccode\u003e\u003ca\u003egeometric0\u003c/a\u003e\u003c/code\u003e shifted by 1).\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "geometric1",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e Rand m Int",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for geometric distribution for number of trials Distribution support is i.e just geometric0 shifted by",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "geometric1",
          "normalized": "Double-\u003eRand a Int",
          "package": "mwc-random-monad",
          "signature": "Double-\u003eRand m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:geometric1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally distributed variable\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "normal",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e Double-\u003e Rand m Double",
          "type": "function"
        },
        "index": {
          "description": "Normally distributed variable",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "normal",
          "normalized": "Double-\u003eDouble-\u003eRand a Double",
          "package": "mwc-random-monad",
          "signature": "Double-\u003eDouble-\u003eRand m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally distributed variables with mean 0 and 1 standard deviation\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "standard",
          "package": "mwc-random-monad",
          "signature": "Rand m Double",
          "source": "src/System-Random-MWC-Distributions-Monad.html#standard",
          "type": "function"
        },
        "index": {
          "description": "Normally distributed variables with mean and standard deviation",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "standard",
          "package": "mwc-random-monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:standard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate truncated exponentially distributed random variate.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "truncatedExp",
          "package": "mwc-random-monad",
          "signature": "Double-\u003e (Double, Double)-\u003e Rand m Double",
          "type": "function"
        },
        "index": {
          "description": "Generate truncated exponentially distributed random variate",
          "hierarchy": "System Random MWC Distributions Monad",
          "module": "System.Random.MWC.Distributions.Monad",
          "name": "truncatedExp",
          "normalized": "Double-\u003e(Double,Double)-\u003eRand a Double",
          "package": "mwc-random-monad",
          "partial": "Exp",
          "signature": "Double-\u003e(Double,Double)-\u003eRand m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Distributions-Monad.html#v:truncatedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provide monadic interface for \u003ccode\u003emwc-random\u003c/code\u003e\n package. It's just a thin wrapper and all work is done\n \u003ccode\u003emwc-random\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This module provide monadic interface for mwc-random package It just thin wrapper and all work is done mwc-random",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "Monad",
          "package": "mwc-random-monad",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom monad for mwc-random package\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "Rand",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-Monad.html#Rand",
          "type": "data"
        },
        "index": {
          "description": "Random monad for mwc-random package",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "Rand",
          "package": "mwc-random-monad",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonim for IO-based Rand monad\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "RandIO",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-Monad.html#RandIO",
          "type": "type"
        },
        "index": {
          "description": "Type synonim for IO-based Rand monad",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "RandIO",
          "package": "mwc-random-monad",
          "partial": "Rand IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#t:RandIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonim for ST-based Rand monad\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "RandST",
          "package": "mwc-random-monad",
          "source": "src/System-Random-MWC-Monad.html#RandST",
          "type": "type"
        },
        "index": {
          "description": "Type synonim for ST-based Rand monad",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "RandST",
          "package": "mwc-random-monad",
          "partial": "Rand ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#t:RandST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn immutable snapshot of the state of a \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "Seed",
          "package": "mwc-random-monad",
          "type": "data"
        },
        "index": {
          "description": "An immutable snapshot of the state of Gen",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "Seed",
          "package": "mwc-random-monad",
          "partial": "Seed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFix type of monad to IO\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "asRandIO",
          "package": "mwc-random-monad",
          "signature": "RandIO a -\u003e RandIO a",
          "source": "src/System-Random-MWC-Monad.html#asRandIO",
          "type": "function"
        },
        "index": {
          "description": "Fix type of monad to IO",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "asRandIO",
          "normalized": "RandIO a-\u003eRandIO a",
          "package": "mwc-random-monad",
          "partial": "Rand IO",
          "signature": "RandIO a-\u003eRandIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:asRandIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFix type of monad to ST\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "asRandST",
          "package": "mwc-random-monad",
          "signature": "RandST s a -\u003e RandST s a",
          "source": "src/System-Random-MWC-Monad.html#asRandST",
          "type": "function"
        },
        "index": {
          "description": "Fix type of monad to ST",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "asRandST",
          "normalized": "RandST a b-\u003eRandST a b",
          "package": "mwc-random-monad",
          "partial": "Rand ST",
          "signature": "RandST s a-\u003eRandST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:asRandST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert seed into vector.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "fromSeed",
          "package": "mwc-random-monad",
          "signature": "Seed -\u003e Vector Word32",
          "type": "function"
        },
        "index": {
          "description": "Convert seed into vector",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "fromSeed",
          "normalized": "Seed-\u003eVector Word",
          "package": "mwc-random-monad",
          "partial": "Seed",
          "signature": "Seed-\u003eVector Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:fromSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun random monad\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "runRand",
          "package": "mwc-random-monad",
          "signature": "Rand m a -\u003e Gen (PrimState (BasePrimMonad m)) -\u003e m a",
          "source": "src/System-Random-MWC-Monad.html#runRand",
          "type": "function"
        },
        "index": {
          "description": "Run random monad",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "runRand",
          "normalized": "Rand a b-\u003eGen(PrimState(BasePrimMonad a))-\u003ea b",
          "package": "mwc-random-monad",
          "partial": "Rand",
          "signature": "Rand m a-\u003eGen(PrimState(BasePrimMonad m))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:runRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun monad using fixed seed\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "runWithCreate",
          "package": "mwc-random-monad",
          "signature": "Rand m a -\u003e m a",
          "source": "src/System-Random-MWC-Monad.html#runWithCreate",
          "type": "function"
        },
        "index": {
          "description": "Run monad using fixed seed",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "runWithCreate",
          "normalized": "Rand a b-\u003ea b",
          "package": "mwc-random-monad",
          "partial": "With Create",
          "signature": "Rand m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:runWithCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun monad using seed\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "runWithSeed",
          "package": "mwc-random-monad",
          "signature": "Seed -\u003e Rand m a -\u003e m a",
          "source": "src/System-Random-MWC-Monad.html#runWithSeed",
          "type": "function"
        },
        "index": {
          "description": "Run monad using seed",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "runWithSeed",
          "normalized": "Seed-\u003eRand a b-\u003ea b",
          "package": "mwc-random-monad",
          "partial": "With Seed",
          "signature": "Seed-\u003eRand m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:runWithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun monad using system random\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "runWithSystemRandom",
          "package": "mwc-random-monad",
          "signature": "Rand m a -\u003e IO a",
          "source": "src/System-Random-MWC-Monad.html#runWithSystemRandom",
          "type": "function"
        },
        "index": {
          "description": "Run monad using system random",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "runWithSystemRandom",
          "normalized": "Rand a b-\u003eIO b",
          "package": "mwc-random-monad",
          "partial": "With System Random",
          "signature": "Rand m a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:runWithSystemRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy creating seed from vector of values\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "runWithVector",
          "package": "mwc-random-monad",
          "signature": "Rand m a -\u003e v Word32 -\u003e m a",
          "source": "src/System-Random-MWC-Monad.html#runWithVector",
          "type": "function"
        },
        "index": {
          "description": "By creating seed from vector of values",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "runWithVector",
          "normalized": "Rand a b-\u003ec Word-\u003ea b",
          "package": "mwc-random-monad",
          "partial": "With Vector",
          "signature": "Rand m a-\u003ev Word-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:runWithVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave current seed for future reuse\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "save",
          "package": "mwc-random-monad",
          "signature": "Rand m Seed",
          "source": "src/System-Random-MWC-Monad.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save current seed for future reuse",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "save",
          "package": "mwc-random-monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert function to Rand monad\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "toRand",
          "package": "mwc-random-monad",
          "signature": "(Gen (PrimState (BasePrimMonad m)) -\u003e BasePrimMonad m a) -\u003e Rand m a",
          "source": "src/System-Random-MWC-Monad.html#toRand",
          "type": "function"
        },
        "index": {
          "description": "Convert function to Rand monad",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "toRand",
          "normalized": "(Gen(PrimState(BasePrimMonad a))-\u003eBasePrimMonad a b)-\u003eRand a b",
          "package": "mwc-random-monad",
          "partial": "Rand",
          "signature": "(Gen(PrimState(BasePrimMonad m))-\u003eBasePrimMonad m a)-\u003eRand m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:toRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert vector to \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e. It acts similarily to \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e and\n will accept any vector. If you want to pass seed immediately to\n restore you better call initialize directly since following law holds:\n\u003c/p\u003e\u003cpre\u003e restore (toSeed v) = initialize v\n\u003c/pre\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "toSeed",
          "package": "mwc-random-monad",
          "signature": "v Word32 -\u003e Seed",
          "type": "function"
        },
        "index": {
          "description": "Convert vector to Seed It acts similarily to initialize and will accept any vector If you want to pass seed immediately to restore you better call initialize directly since following law holds restore toSeed initialize",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "toSeed",
          "normalized": "a Word-\u003eSeed",
          "package": "mwc-random-monad",
          "partial": "Seed",
          "signature": "v Word-\u003eSeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:toSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniformly distributed values\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "uniform",
          "package": "mwc-random-monad",
          "signature": "Rand m a",
          "source": "src/System-Random-MWC-Monad.html#uniform",
          "type": "function"
        },
        "index": {
          "description": "Uniformly distributed values",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "uniform",
          "package": "mwc-random-monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniformly distributed values in range\n\u003c/p\u003e",
          "module": "System.Random.MWC.Monad",
          "name": "uniformR",
          "package": "mwc-random-monad",
          "signature": "(a, a) -\u003e Rand m a",
          "source": "src/System-Random-MWC-Monad.html#uniformR",
          "type": "function"
        },
        "index": {
          "description": "Uniformly distributed values in range",
          "hierarchy": "System Random MWC Monad",
          "module": "System.Random.MWC.Monad",
          "name": "uniformR",
          "normalized": "(a,a)-\u003eRand b a",
          "package": "mwc-random-monad",
          "signature": "(a,a)-\u003eRand m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random-monad/docs/System-Random-MWC-Monad.html#v:uniformR"
      }
    }
  ]
]