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
        "word": "mwc-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTable-driven generation of random variates.  This approach can\n generate random variates in \u003cem\u003eO(1)\u003c/em\u003e time for the supported\n distributions, at a modest cost in initialization time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTable",
          "package": "mwc-random",
          "source": "src/System-Random-MWC-CondensedTable.html",
          "type": "module"
        },
        "index": {
          "description": "Table-driven generation of random variates This approach can generate random variates in time for the supported distributions at modest cost in initialization time",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTable",
          "package": "mwc-random",
          "partial": "Condensed Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lookup table for arbitrary discrete distributions. It allows\n the generation of random variates in \u003cem\u003eO(1)\u003c/em\u003e. Note that probability\n is quantized in units of \u003ccode\u003e1/2^32\u003c/code\u003e, and all distributions with\n infinite support (e.g. Poisson) should be truncated.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTable",
          "package": "mwc-random",
          "source": "src/System-Random-MWC-CondensedTable.html#CondensedTable",
          "type": "data"
        },
        "index": {
          "description": "lookup table for arbitrary discrete distributions It allows the generation of random variates in Note that probability is quantized in units of and all distributions with infinite support e.g Poisson should be truncated",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTable",
          "package": "mwc-random",
          "partial": "Condensed Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#t:CondensedTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCondensedTable\u003c/a\u003e\u003c/code\u003e that uses unboxed vectors.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTableU",
          "package": "mwc-random",
          "source": "src/System-Random-MWC-CondensedTable.html#CondensedTableU",
          "type": "type"
        },
        "index": {
          "description": "CondensedTable that uses unboxed vectors",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTableU",
          "package": "mwc-random",
          "partial": "Condensed Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#t:CondensedTableU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCondensedTable\u003c/a\u003e\u003c/code\u003e that uses boxed vectors, and is able to hold\n any type of element.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTableV",
          "package": "mwc-random",
          "source": "src/System-Random-MWC-CondensedTable.html#CondensedTableV",
          "type": "type"
        },
        "index": {
          "description": "CondensedTable that uses boxed vectors and is able to hold any type of element",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "CondensedTableV",
          "package": "mwc-random",
          "partial": "Condensed Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#t:CondensedTableV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random value using a condensed table.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "genFromTable",
          "package": "mwc-random",
          "signature": "CondensedTable v a -\u003e Gen (PrimState m) -\u003e m a",
          "source": "src/System-Random-MWC-CondensedTable.html#genFromTable",
          "type": "function"
        },
        "index": {
          "description": "Generate random value using condensed table",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "genFromTable",
          "normalized": "CondensedTable a b-\u003eGen(PrimState c)-\u003ec b",
          "package": "mwc-random",
          "partial": "From Table",
          "signature": "CondensedTable v a-\u003eGen(PrimState m)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:genFromTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lookup table for the binomial distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableBinomial",
          "package": "mwc-random",
          "signature": "Int-\u003e Double-\u003e CondensedTableU Int",
          "type": "function"
        },
        "index": {
          "description": "Create lookup table for the binomial distribution",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableBinomial",
          "normalized": "Int-\u003eDouble-\u003eCondensedTableU Int",
          "package": "mwc-random",
          "partial": "Binomial",
          "signature": "Int-\u003eDouble-\u003eCondensedTableU Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:tableBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a condensed lookup table from integer weights. Weights\n should sum to \u003ccode\u003e2^32\u003c/code\u003e. If they don't, the algorithm will alter the\n weights so that they do. This approach should work reasonably well\n for rounding errors.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromIntWeights",
          "package": "mwc-random",
          "signature": "v (a, Word32) -\u003e CondensedTable v a",
          "source": "src/System-Random-MWC-CondensedTable.html#tableFromIntWeights",
          "type": "function"
        },
        "index": {
          "description": "Generate condensed lookup table from integer weights Weights should sum to If they don the algorithm will alter the weights so that they do This approach should work reasonably well for rounding errors",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromIntWeights",
          "normalized": "a(b,Word)-\u003eCondensedTable a b",
          "package": "mwc-random",
          "partial": "From Int Weights",
          "signature": "v(a,Word)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:tableFromIntWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a condensed lookup table from a list of outcomes with\n given probabilities. The vector should be non-empty and the\n probabilites should be non-negative and sum to 1. If this is not\n the case, this algorithm will construct a table for some\n distribution that may bear no resemblance to what you intended.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromProbabilities",
          "package": "mwc-random",
          "signature": "v (a, Double) -\u003e CondensedTable v a",
          "source": "src/System-Random-MWC-CondensedTable.html#tableFromProbabilities",
          "type": "function"
        },
        "index": {
          "description": "Generate condensed lookup table from list of outcomes with given probabilities The vector should be non-empty and the probabilites should be non-negative and sum to If this is not the case this algorithm will construct table for some distribution that may bear no resemblance to what you intended",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromProbabilities",
          "normalized": "a(b,Double)-\u003eCondensedTable a b",
          "package": "mwc-random",
          "partial": "From Probabilities",
          "signature": "v(a,Double)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:tableFromProbabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etableFromProbabilities\u003c/a\u003e\u003c/code\u003e but treats number as weights not\n probilities. Non-positive weights are discarded, and those\n remaining are normalized to 1.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromWeights",
          "package": "mwc-random",
          "signature": "v (a, Double) -\u003e CondensedTable v a",
          "source": "src/System-Random-MWC-CondensedTable.html#tableFromWeights",
          "type": "function"
        },
        "index": {
          "description": "Same as tableFromProbabilities but treats number as weights not probilities Non-positive weights are discarded and those remaining are normalized to",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tableFromWeights",
          "normalized": "a(b,Double)-\u003eCondensedTable a b",
          "package": "mwc-random",
          "partial": "From Weights",
          "signature": "v(a,Double)-\u003eCondensedTable v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:tableFromWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a lookup table for the Poisson distibution. Note that\n table construction may have significant cost. For &#955; \u003c 100 it\n takes as much time to build table as generation of 1000-30000\n variates.\n\u003c/p\u003e",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tablePoisson",
          "package": "mwc-random",
          "signature": "Double -\u003e CondensedTableU Int",
          "source": "src/System-Random-MWC-CondensedTable.html#tablePoisson",
          "type": "function"
        },
        "index": {
          "description": "Create lookup table for the Poisson distibution Note that table construction may have significant cost For it takes as much time to build table as generation of variates",
          "hierarchy": "System Random MWC CondensedTable",
          "module": "System.Random.MWC.CondensedTable",
          "name": "tablePoisson",
          "normalized": "Double-\u003eCondensedTableU Int",
          "package": "mwc-random",
          "partial": "Poisson",
          "signature": "Double-\u003eCondensedTableU Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-CondensedTable.html#v:tablePoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePseudo-random number generation for non-uniform distributions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "Distributions",
          "package": "mwc-random",
          "source": "src/System-Random-MWC-Distributions.html",
          "type": "module"
        },
        "index": {
          "description": "Pseudo-random number generation for non-uniform distributions",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "Distributions",
          "package": "mwc-random",
          "partial": "Distributions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for the chi square distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "chiSquare",
          "package": "mwc-random",
          "signature": "Int-\u003e Gen (PrimState m)-\u003e m Double",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for the chi square distribution",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "chiSquare",
          "normalized": "Int-\u003eGen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "partial": "Square",
          "signature": "Int-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:chiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an exponentially distributed random variate.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "exponential",
          "package": "mwc-random",
          "signature": "Double-\u003e Gen (PrimState m)-\u003e m Double",
          "type": "function"
        },
        "index": {
          "description": "Generate an exponentially distributed random variate",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "exponential",
          "normalized": "Double-\u003eGen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "signature": "Double-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for gamma distribution.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "gamma",
          "package": "mwc-random",
          "signature": "Double-\u003e Double-\u003e Gen (PrimState m)-\u003e m Double",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for gamma distribution",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "gamma",
          "normalized": "Double-\u003eDouble-\u003eGen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "signature": "Double-\u003eDouble-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for the geometric distribution,\n computing the number of failures before success. Distribution's\n support is [0..].\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "geometric0",
          "package": "mwc-random",
          "signature": "Double-\u003e Gen (PrimState m)-\u003e m Int",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for the geometric distribution computing the number of failures before success Distribution support is",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "geometric0",
          "normalized": "Double-\u003eGen(PrimState a)-\u003ea Int",
          "package": "mwc-random",
          "signature": "Double-\u003eGen(PrimState m)-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:geometric0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom variate generator for geometric distribution for number of\n trials. Distribution's support is [1..] (i.e. just \u003ccode\u003e\u003ca\u003egeometric0\u003c/a\u003e\u003c/code\u003e\n shifted by 1).\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "geometric1",
          "package": "mwc-random",
          "signature": "Double-\u003e Gen (PrimState m)-\u003e m Int",
          "type": "function"
        },
        "index": {
          "description": "Random variate generator for geometric distribution for number of trials Distribution support is i.e just geometric0 shifted by",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "geometric1",
          "normalized": "Double-\u003eGen(PrimState a)-\u003ea Int",
          "package": "mwc-random",
          "signature": "Double-\u003eGen(PrimState m)-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:geometric1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a normally distributed random variate with given mean\n and standard deviation.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "normal",
          "package": "mwc-random",
          "signature": "Double-\u003e Double-\u003e Gen (PrimState m)-\u003e m Double",
          "type": "function"
        },
        "index": {
          "description": "Generate normally distributed random variate with given mean and standard deviation",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "normal",
          "normalized": "Double-\u003eDouble-\u003eGen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "signature": "Double-\u003eDouble-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a normally distributed random variate with zero mean and\n unit variance.\n\u003c/p\u003e\u003cp\u003eThe implementation uses Doornik's modified ziggurat algorithm.\n Compared to the ziggurat algorithm usually used, this is slower,\n but generates more independent variates that pass stringent tests\n of randomness.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "standard",
          "package": "mwc-random",
          "signature": "Gen (PrimState m) -\u003e m Double",
          "source": "src/System-Random-MWC-Distributions.html#standard",
          "type": "function"
        },
        "index": {
          "description": "Generate normally distributed random variate with zero mean and unit variance The implementation uses Doornik modified ziggurat algorithm Compared to the ziggurat algorithm usually used this is slower but generates more independent variates that pass stringent tests of randomness",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "standard",
          "normalized": "Gen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "signature": "Gen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:standard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate truncated exponentially distributed random variate.\n\u003c/p\u003e",
          "module": "System.Random.MWC.Distributions",
          "name": "truncatedExp",
          "package": "mwc-random",
          "signature": "Double-\u003e (Double, Double)-\u003e Gen (PrimState m)-\u003e m Double",
          "type": "function"
        },
        "index": {
          "description": "Generate truncated exponentially distributed random variate",
          "hierarchy": "System Random MWC Distributions",
          "module": "System.Random.MWC.Distributions",
          "name": "truncatedExp",
          "normalized": "Double-\u003e(Double,Double)-\u003eGen(PrimState a)-\u003ea Double",
          "package": "mwc-random",
          "partial": "Exp",
          "signature": "Double-\u003e(Double,Double)-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC-Distributions.html#v:truncatedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePseudo-random number generation.  This module contains code for\n generating high quality random numbers that follow a uniform\n distribution.\n\u003c/p\u003e\u003cp\u003eFor non-uniform distributions, see the\n \u003ccode\u003e\u003ca\u003eDistributions\u003c/a\u003e\u003c/code\u003e module.\n\u003c/p\u003e\u003cp\u003eThe uniform PRNG uses Marsaglia's MWC256 (also known as MWC8222)\n multiply-with-carry generator, which has a period of 2^8222 and\n fares well in tests of randomness.  It is also extremely fast,\n between 2 and 3 times faster than the Mersenne Twister.\n\u003c/p\u003e\u003cp\u003eThe generator state is stored in the \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e data type. It can be\n created in several ways:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Using the \u003ccode\u003e\u003ca\u003ewithSystemRandom\u003c/a\u003e\u003c/code\u003e call, which creates a random state.\n\u003c/li\u003e\u003cli\u003e Supply your own seed to \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e function.\n\u003c/li\u003e\u003cli\u003e Finally, \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e makes a generator from a fixed seed.\n      Generators created in this way aren't really random.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eFor repeatability, the state of the generator can be snapshotted\n and replayed using the \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eThe simplest use is to generate a vector of uniformly distributed values:\n\u003c/p\u003e\u003cpre\u003e\n   vs \u003c- \u003ccode\u003e\u003ca\u003ewithSystemRandom\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003easGenST\u003c/a\u003e\u003c/code\u003e $ \\gen -\u003e \u003ccode\u003e\u003ca\u003euniformVector\u003c/a\u003e\u003c/code\u003e gen 100\n\u003c/pre\u003e\u003cp\u003eThese values can be of any type which is an instance of the class\n \u003ccode\u003e\u003ca\u003eVariate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo generate random values on demand, first \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e a random number\n generator.\n\u003c/p\u003e\u003cpre\u003e\n   gen \u003c- \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eHold onto this generator and use it wherever random values are\n required (creating a new generator is expensive compared to\n generating a random number, so you don't want to throw them\n away). Get a random value using \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euniformR\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n   v \u003c- \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e gen\n\u003c/pre\u003e\u003cpre\u003e\n   v \u003c- \u003ccode\u003e\u003ca\u003euniformR\u003c/a\u003e\u003c/code\u003e (1, 52) gen\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Random.MWC",
          "name": "MWC",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html",
          "type": "module"
        },
        "index": {
          "description": "Pseudo-random number generation This module contains code for generating high quality random numbers that follow uniform distribution For non-uniform distributions see the Distributions module The uniform PRNG uses Marsaglia MWC256 also known as MWC8222 multiply-with-carry generator which has period of and fares well in tests of randomness It is also extremely fast between and times faster than the Mersenne Twister The generator state is stored in the Gen data type It can be created in several ways Using the withSystemRandom call which creates random state Supply your own seed to initialize function Finally create makes generator from fixed seed Generators created in this way aren really random For repeatability the state of the generator can be snapshotted and replayed using the save and restore functions The simplest use is to generate vector of uniformly distributed values vs withSystemRandom asGenST gen uniformVector gen These values can be of any type which is an instance of the class Variate To generate random values on demand first create random number generator gen create Hold onto this generator and use it wherever random values are required creating new generator is expensive compared to generating random number so you don want to throw them away Get random value using uniform or uniformR uniform gen uniformR gen",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "MWC",
          "package": "mwc-random",
          "partial": "MWC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of the pseudo-random number generator.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "Gen",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html#Gen",
          "type": "data"
        },
        "index": {
          "description": "State of the pseudo-random number generator",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "Gen",
          "package": "mwc-random",
          "partial": "Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#t:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shorter name for PRNG state in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "GenIO",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html#GenIO",
          "type": "type"
        },
        "index": {
          "description": "shorter name for PRNG state in the IO monad",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "GenIO",
          "package": "mwc-random",
          "partial": "Gen IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#t:GenIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shorter name for PRNG state in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "GenST",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html#GenST",
          "type": "type"
        },
        "index": {
          "description": "shorter name for PRNG state in the ST monad",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "GenST",
          "package": "mwc-random",
          "partial": "Gen ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#t:GenST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn immutable snapshot of the state of a \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "Seed",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html#Seed",
          "type": "data"
        },
        "index": {
          "description": "An immutable snapshot of the state of Gen",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "Seed",
          "package": "mwc-random",
          "partial": "Seed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types for which we can generate uniformly\n distributed random variates.\n\u003c/p\u003e\u003cp\u003eThe uniform PRNG uses Marsaglia's MWC256 (also known as MWC8222)\n multiply-with-carry generator, which has a period of 2^8222 and\n fares well in tests of randomness.  It is also extremely fast,\n between 2 and 3 times faster than the Mersenne Twister.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Marsaglia's PRNG is not known to be cryptographically\n secure, so you should not use it for cryptographic operations.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "Variate",
          "package": "mwc-random",
          "source": "src/System-Random-MWC.html#Variate",
          "type": "class"
        },
        "index": {
          "description": "The class of types for which we can generate uniformly distributed random variates The uniform PRNG uses Marsaglia MWC256 also known as MWC8222 multiply-with-carry generator which has period of and fares well in tests of randomness It is also extremely fast between and times faster than the Mersenne Twister Note Marsaglia PRNG is not known to be cryptographically secure so you should not use it for cryptographic operations",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "Variate",
          "package": "mwc-random",
          "partial": "Variate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#t:Variate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstrain the type of an action to run in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "asGenIO",
          "package": "mwc-random",
          "signature": "(GenIO -\u003e IO a) -\u003e GenIO -\u003e IO a",
          "source": "src/System-Random-MWC.html#asGenIO",
          "type": "function"
        },
        "index": {
          "description": "Constrain the type of an action to run in the IO monad",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "asGenIO",
          "normalized": "(GenIO-\u003eIO a)-\u003eGenIO-\u003eIO a",
          "package": "mwc-random",
          "partial": "Gen IO",
          "signature": "(GenIO-\u003eIO a)-\u003eGenIO-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:asGenIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstrain the type of an action to run in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "asGenST",
          "package": "mwc-random",
          "signature": "(GenST s -\u003e ST s a) -\u003e GenST s -\u003e ST s a",
          "source": "src/System-Random-MWC.html#asGenST",
          "type": "function"
        },
        "index": {
          "description": "Constrain the type of an action to run in the ST monad",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "asGenST",
          "normalized": "(GenST a-\u003eST a b)-\u003eGenST a-\u003eST a b",
          "package": "mwc-random",
          "partial": "Gen ST",
          "signature": "(GenST s-\u003eST s a)-\u003eGenST s-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:asGenST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generator for variates using a fixed seed.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "create",
          "package": "mwc-random",
          "signature": "m (Gen (PrimState m))",
          "source": "src/System-Random-MWC.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create generator for variates using fixed seed",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "create",
          "package": "mwc-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed a PRNG with data from the system's fast source of pseudo-random\n numbers. All the caveats of \u003ccode\u003e\u003ca\u003ewithSystemRandom\u003c/a\u003e\u003c/code\u003e apply here as well.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "createSystemRandom",
          "package": "mwc-random",
          "signature": "IO GenIO",
          "source": "src/System-Random-MWC.html#createSystemRandom",
          "type": "function"
        },
        "index": {
          "description": "Seed PRNG with data from the system fast source of pseudo-random numbers All the caveats of withSystemRandom apply here as well",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "createSystemRandom",
          "package": "mwc-random",
          "partial": "System Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:createSystemRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert seed into vector.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "fromSeed",
          "package": "mwc-random",
          "signature": "Seed -\u003e Vector Word32",
          "source": "src/System-Random-MWC.html#fromSeed",
          "type": "function"
        },
        "index": {
          "description": "Convert seed into vector",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "fromSeed",
          "normalized": "Seed-\u003eVector Word",
          "package": "mwc-random",
          "partial": "Seed",
          "signature": "Seed-\u003eVector Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:fromSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a generator for variates using the given seed, of which up\n to 256 elements will be used.  For arrays of less than 256\n elements, part of the default seed will be used to finish\n initializing the generator's state.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e initialize (singleton 42)\n\u003c/pre\u003e\u003cpre\u003e initialize (fromList [4, 8, 15, 16, 23, 42])\n\u003c/pre\u003e\u003cp\u003eIf a seed contains fewer than 256 elements, it is first used\n verbatim, then its elements are \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003eed against elements of the\n default seed until 256 elements are reached.\n\u003c/p\u003e\u003cp\u003eIf a seed contains exactly 258 elements, then the last two elements\n are used to set the generator's initial state. This allows for\n complete generator reproducibility, so that e.g. \u003ccode\u003egen' == gen\u003c/code\u003e in\n the following example:\n\u003c/p\u003e\u003cpre\u003egen' \u003c- \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromSeed\u003c/a\u003e\u003c/code\u003e =\u003c\u003c \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "System.Random.MWC",
          "name": "initialize",
          "package": "mwc-random",
          "signature": "v Word32 -\u003e m (Gen (PrimState m))",
          "source": "src/System-Random-MWC.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Create generator for variates using the given seed of which up to elements will be used For arrays of less than elements part of the default seed will be used to finish initializing the generator state Examples initialize singleton initialize fromList If seed contains fewer than elements it is first used verbatim then its elements are xor ed against elements of the default seed until elements are reached If seed contains exactly elements then the last two elements are used to set the generator initial state This allows for complete generator reproducibility so that e.g gen gen in the following example gen initialize fromSeed save",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "initialize",
          "normalized": "a Word-\u003eb(Gen(PrimState b))",
          "package": "mwc-random",
          "signature": "v Word-\u003em(Gen(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e that mirrors the state of a saved \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "restore",
          "package": "mwc-random",
          "signature": "Seed -\u003e m (Gen (PrimState m))",
          "source": "src/System-Random-MWC.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Create new Gen that mirrors the state of saved Seed",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "restore",
          "normalized": "Seed-\u003ea(Gen(PrimState a))",
          "package": "mwc-random",
          "signature": "Seed-\u003em(Gen(PrimState m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the state of a \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e, for later use by \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "save",
          "package": "mwc-random",
          "signature": "Gen (PrimState m) -\u003e m Seed",
          "source": "src/System-Random-MWC.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save the state of Gen for later use by restore",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "save",
          "normalized": "Gen(PrimState a)-\u003ea Seed",
          "package": "mwc-random",
          "signature": "Gen(PrimState m)-\u003em Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert vector to \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e. It acts similarily to \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e and\n will accept any vector. If you want to pass seed immediately to\n restore you better call initialize directly since following law holds:\n\u003c/p\u003e\u003cpre\u003e restore (toSeed v) = initialize v\n\u003c/pre\u003e",
          "module": "System.Random.MWC",
          "name": "toSeed",
          "package": "mwc-random",
          "signature": "v Word32 -\u003e Seed",
          "source": "src/System-Random-MWC.html#toSeed",
          "type": "function"
        },
        "index": {
          "description": "Convert vector to Seed It acts similarily to initialize and will accept any vector If you want to pass seed immediately to restore you better call initialize directly since following law holds restore toSeed initialize",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "toSeed",
          "normalized": "a Word-\u003eSeed",
          "package": "mwc-random",
          "partial": "Seed",
          "signature": "v Word-\u003eSeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:toSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a single uniformly distributed random variate.  The\n range of values produced varies by type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For fixed-width integral types, the type's entire range is\n   used.\n\u003c/li\u003e\u003cli\u003e For floating point numbers, the range (0,1] is used. Zero is\n   explicitly excluded, to allow variates to be used in\n   statistical calculations that require non-zero values\n   (e.g. uses of the \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e function).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo generate a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e variate with a range of [0,1), subtract\n 2**(-33).  To do the same with \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e variates, subtract\n 2**(-53).\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "uniform",
          "package": "mwc-random",
          "signature": "Gen (PrimState m) -\u003e m a",
          "source": "src/System-Random-MWC.html#uniform",
          "type": "method"
        },
        "index": {
          "description": "Generate single uniformly distributed random variate The range of values produced varies by type For fixed-width integral types the type entire range is used For floating point numbers the range is used Zero is explicitly excluded to allow variates to be used in statistical calculations that require non-zero values e.g uses of the log function To generate Float variate with range of subtract To do the same with Double variates subtract",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "uniform",
          "normalized": "Gen(PrimState a)-\u003ea b",
          "package": "mwc-random",
          "signature": "Gen(PrimState m)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate single uniformly distributed random variable in a\n given range.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For integral types inclusive range is used.\n\u003c/li\u003e\u003cli\u003e For floating point numbers range (a,b] is used if one ignores\n   rounding errors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Random.MWC",
          "name": "uniformR",
          "package": "mwc-random",
          "signature": "(a, a) -\u003e Gen (PrimState m) -\u003e m a",
          "source": "src/System-Random-MWC.html#uniformR",
          "type": "method"
        },
        "index": {
          "description": "Generate single uniformly distributed random variable in given range For integral types inclusive range is used For floating point numbers range is used if one ignores rounding errors",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "uniformR",
          "normalized": "(a,a)-\u003eGen(PrimState b)-\u003eb a",
          "package": "mwc-random",
          "signature": "(a,a)-\u003eGen(PrimState m)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:uniformR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a vector of pseudo-random variates.  This is not\n necessarily faster than invoking \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e repeatedly in a loop,\n but it may be more convenient to use in some situations.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "uniformVector",
          "package": "mwc-random",
          "signature": "Gen (PrimState m) -\u003e Int -\u003e m (v a)",
          "source": "src/System-Random-MWC.html#uniformVector",
          "type": "function"
        },
        "index": {
          "description": "Generate vector of pseudo-random variates This is not necessarily faster than invoking uniform repeatedly in loop but it may be more convenient to use in some situations",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "uniformVector",
          "normalized": "Gen(PrimState a)-\u003eInt-\u003ea(b c)",
          "package": "mwc-random",
          "partial": "Vector",
          "signature": "Gen(PrimState m)-\u003eInt-\u003em(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:uniformVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed a PRNG with data from the system's fast source of\n pseudo-random numbers (\"\u003ccode\u003e/dev/urandom\u003c/code\u003e\" on Unix-like systems),\n then run the given action.\n\u003c/p\u003e\u003cp\u003eThis is a somewhat expensive function, and is intended to be called\n only occasionally (e.g. once per thread).  You should use the \u003ccode\u003e\u003ca\u003eGen\u003c/a\u003e\u003c/code\u003e\n it creates to generate many random numbers.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: on Windows, this code does not yet use the native\n Cryptographic API as a source of random numbers (it uses the system\n clock instead). As a result, the sequences it generates may not be\n highly independent.\n\u003c/p\u003e",
          "module": "System.Random.MWC",
          "name": "withSystemRandom",
          "package": "mwc-random",
          "signature": "(Gen (PrimState m) -\u003e m a) -\u003e IO a",
          "source": "src/System-Random-MWC.html#withSystemRandom",
          "type": "function"
        },
        "index": {
          "description": "Seed PRNG with data from the system fast source of pseudo-random numbers dev urandom on Unix-like systems then run the given action This is somewhat expensive function and is intended to be called only occasionally e.g once per thread You should use the Gen it creates to generate many random numbers Note on Windows this code does not yet use the native Cryptographic API as source of random numbers it uses the system clock instead As result the sequences it generates may not be highly independent",
          "hierarchy": "System Random MWC",
          "module": "System.Random.MWC",
          "name": "withSystemRandom",
          "normalized": "(Gen(PrimState a)-\u003ea b)-\u003eIO b",
          "package": "mwc-random",
          "partial": "System Random",
          "signature": "(Gen(PrimState m)-\u003em a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mwc-random/docs/System-Random-MWC.html#v:withSystemRandom"
      }
    }
  ]
]