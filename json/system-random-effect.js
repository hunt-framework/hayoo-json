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
        "word": "system-random-effect"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random number effect, using a pure mersenne twister under\n   the hood. This algorithm is not suitable for cryptography!\n\u003c/p\u003e\u003cp\u003eIf you need cryptographically secure random numbers,\n   you MUST use \u003ccode\u003e\u003ca\u003emkSecureRandomIO\u003c/a\u003e\u003c/code\u003e. Otherwise, \u003ccode\u003e\u003ca\u003emkRandom\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003emkRandomIO\u003c/a\u003e\u003c/code\u003e are much faster.\n\u003c/p\u003e\u003cp\u003eThis effect should be plug-and-play with any application\n   making use of extensible effects.\n\u003c/p\u003e\u003cp\u003ePatches, even for the smallest of documentation bugs, are\n   always welcome!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Effect",
          "name": "Effect",
          "package": "system-random-effect",
          "source": "src/System-Random-Effect.html",
          "type": "module"
        },
        "index": {
          "description": "random number effect using pure mersenne twister under the hood This algorithm is not suitable for cryptography If you need cryptographically secure random numbers you MUST use mkSecureRandomIO Otherwise mkRandom and mkRandomIO are much faster This effect should be plug-and-play with any application making use of extensible effects Patches even for the smallest of documentation bugs are always welcome",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "Effect",
          "package": "system-random-effect",
          "partial": "Effect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains a sorted list of cumulative probabilities, so we\n   can do a sample by generating a uniformly distributed random\n   number in the range [0, 1), and binary searching the vector\n   for where to put it.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "DiscreteDistributionHelper",
          "package": "system-random-effect",
          "source": "src/System-Random-Effect.html#DiscreteDistributionHelper",
          "type": "data"
        },
        "index": {
          "description": "Contains sorted list of cumulative probabilities so we can do sample by generating uniformly distributed random number in the range and binary searching the vector for where to put it",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "DiscreteDistributionHelper",
          "package": "system-random-effect",
          "partial": "Discrete Distribution Helper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#t:DiscreteDistributionHelper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random number generator. Either a fast, insecure mersenne\n   twister or a secure one, depending on which smart constructor\n   is used to construct this type.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "Random",
          "package": "system-random-effect",
          "source": "src/System-Random-Effect-Raw.html#Random",
          "type": "data"
        },
        "index": {
          "description": "random number generator Either fast insecure mersenne twister or secure one depending on which smart constructor is used to construct this type",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "Random",
          "package": "system-random-effect",
          "partial": "Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces random boolean values, according to a discrete probability.\n\u003c/p\u003e\u003cp\u003ek must be in the range [0, 1].\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "bernoulliDist",
          "package": "system-random-effect",
          "signature": "Rational-\u003e Eff r Bool",
          "type": "function"
        },
        "index": {
          "description": "Produces random boolean values according to discrete probability must be in the range",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "bernoulliDist",
          "normalized": "Rational-\u003eEff a Bool",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Rational-\u003eEff r Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:bernoulliDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value obtained is the number of successes in a sequence of\n   t yes/no experiments, each of which succeeds with probability p.\n\u003c/p\u003e\u003cp\u003et must be \u003e= 0\n   p must be in the range [0, 1].\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "binomialDist",
          "package": "system-random-effect",
          "signature": "Int-\u003e Rational-\u003e Eff r Int",
          "type": "function"
        },
        "index": {
          "description": "The value obtained is the number of successes in sequence of yes no experiments each of which succeeds with probability must be must be in the range",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "binomialDist",
          "normalized": "Int-\u003eRational-\u003eEff a Int",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Int-\u003eRational-\u003eEff r Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:binomialDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms O(n) work building a table which we can later use\n   sample with \u003ccode\u003e\u003ca\u003ediscreteDist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "buildDDH",
          "package": "system-random-effect",
          "signature": "[Word64] -\u003e DiscreteDistributionHelper",
          "source": "src/System-Random-Effect.html#buildDDH",
          "type": "function"
        },
        "index": {
          "description": "Performs work building table which we can later use sample with discreteDist",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "buildDDH",
          "normalized": "[Word]-\u003eDiscreteDistributionHelper",
          "package": "system-random-effect",
          "partial": "DDH",
          "signature": "[Word]-\u003eDiscreteDistributionHelper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:buildDDH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduced random numbers according to a Cauchy (or Lorentz) distribution.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "cauchyDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Produced random numbers according to Cauchy or Lorentz distribution",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "cauchyDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:cauchyDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces random numbers according to a chi-squared distribution.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "chiSquaredDist",
          "package": "system-random-effect",
          "signature": "Int-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Produces random numbers according to chi-squared distribution",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "chiSquaredDist",
          "normalized": "Int-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Squared Dist",
          "signature": "Int-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:chiSquaredDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pre-build \u003ccode\u003e\u003ca\u003eDiscreteDistributionHelper\u003c/a\u003e\u003c/code\u003e (use \u003ccode\u003e\u003ca\u003ebuildDDH\u003c/a\u003e\u003c/code\u003e),\n   produces random integers on the interval [0, n), where the\n   probability of each individual integer i is defined as w_i/S,\n   that is the weight of the ith integer divided by the sum of all\n   n weights.\n\u003c/p\u003e\u003cp\u003ei.e. This function produces an integer with probability equal to\n   the weight given in its index into the parameter to \u003ccode\u003e\u003ca\u003ebuildDDH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "discreteDist",
          "package": "system-random-effect",
          "signature": "DiscreteDistributionHelper -\u003e Eff r Int",
          "source": "src/System-Random-Effect.html#discreteDist",
          "type": "function"
        },
        "index": {
          "description": "Given pre-build DiscreteDistributionHelper use buildDDH produces random integers on the interval where the probability of each individual integer is defined as that is the weight of the ith integer divided by the sum of all weights i.e This function produces an integer with probability equal to the weight given in its index into the parameter to buildDDH",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "discreteDist",
          "normalized": "DiscreteDistributionHelper-\u003eEff a Int",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "DiscreteDistributionHelper-\u003eEff r Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:discreteDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value obtained is the time/distance until the next\n   random event if random events occur at constant rate &#955;   per unit of time/distance. For example, this distribution\n   describes the time between the clicks of a Geiger counter\n   or the distance between point mutations in a DNA strand.\n\u003c/p\u003e\u003cp\u003eThis is the continuous counterpart of \u003ccode\u003e\u003ca\u003egeometricDist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "exponentialDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "The value obtained is the time distance until the next random event if random events occur at constant rate per unit of time distance For example this distribution describes the time between the clicks of Geiger counter or the distance between point mutations in DNA strand This is the continuous counterpart of geometricDist",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "exponentialDist",
          "normalized": "Double-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:exponentialDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e???\n\u003c/p\u003e\u003cp\u003eWarning: NOT IMPLEMENTED!\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "extremeValueDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Warning NOT IMPLEMENTED",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "extremeValueDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Value Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:extremeValueDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces random numbers according to an F-distribution.\n\u003c/p\u003e\u003cp\u003em and n are the degrees of freedom.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "fisherFDist",
          "package": "system-random-effect",
          "signature": "Int-\u003e Int-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Produces random numbers according to an F-distribution and are the degrees of freedom",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "fisherFDist",
          "normalized": "Int-\u003eInt-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "FDist",
          "signature": "Int-\u003eInt-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:fisherFDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a non-random effect as the Random source for running a random effect.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "forRandEff",
          "package": "system-random-effect",
          "signature": "Eff r Random -\u003e Eff (State Random :\u003e r) w -\u003e Eff r w",
          "source": "src/System-Random-Effect-Raw.html#forRandEff",
          "type": "function"
        },
        "index": {
          "description": "Use non-random effect as the Random source for running random effect",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "forRandEff",
          "normalized": "Eff a Random-\u003eEff(State Random a)b-\u003eEff a b",
          "package": "system-random-effect",
          "partial": "Rand Eff",
          "signature": "Eff r Random-\u003eEff(State Random r)w-\u003eEff r w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:forRandEff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor floating-point &#945;, the value obtained is the sum of    independent exponentially distributed random variables,\n   each of which has a mean of &#946;.\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "gammaDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "For floating-point the value obtained is the sum of independent exponentially distributed random variables each of which has mean of",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "gammaDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:gammaDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value represents the number of yes/no trials (each\n   succeeding with probability p) which are necessary to\n   obtain a single success.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egeometricDist\u003c/a\u003e\u003c/code\u003e p is equivalent to negativeBinomialDist 1 p\n\u003c/p\u003e\u003cp\u003ep must be in the range (0, 1]\n\u003c/p\u003e\u003cp\u003eWarning: NOT IMPLEMENTED!\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "geometricDist",
          "package": "system-random-effect",
          "signature": "Rational-\u003e Eff r Integer",
          "type": "function"
        },
        "index": {
          "description": "The value represents the number of yes no trials each succeeding with probability which are necessary to obtain single success geometricDist is equivalent to negativeBinomialDist must be in the range Warning NOT IMPLEMENTED",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "geometricDist",
          "normalized": "Rational-\u003eEff a Integer",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Rational-\u003eEff r Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:geometricDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle an immutable vector.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "knuthShuffle",
          "package": "system-random-effect",
          "signature": "Vector a -\u003e Eff r (Vector a)",
          "source": "src/System-Random-Effect.html#knuthShuffle",
          "type": "function"
        },
        "index": {
          "description": "Shuffle an immutable vector",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "knuthShuffle",
          "normalized": "Vector a-\u003eEff b(Vector a)",
          "package": "system-random-effect",
          "partial": "Shuffle",
          "signature": "Vector a-\u003eEff r(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:knuthShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle a mutable vector.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "knuthShuffleM",
          "package": "system-random-effect",
          "signature": "MVector (PrimState m) a -\u003e Eff r ()",
          "source": "src/System-Random-Effect.html#knuthShuffleM",
          "type": "function"
        },
        "index": {
          "description": "Shuffle mutable vector",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "knuthShuffleM",
          "normalized": "MVector(PrimState a)b-\u003eEff c()",
          "package": "system-random-effect",
          "partial": "Shuffle",
          "signature": "MVector(PrimState m)a-\u003eEff r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:knuthShuffleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a linearly-distributed random number in the range \u003ccode\u003e[a, b)\u003c/code\u003e;\n \u003ccode\u003ea\u003c/code\u003e with a probability of 0.\n This code is not guaranteed to be correct.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "linearRealDist",
          "package": "system-random-effect",
          "signature": "Double -\u003e Double -\u003e Eff r Double",
          "source": "src/System-Random-Effect.html#linearRealDist",
          "type": "function"
        },
        "index": {
          "description": "Generates linearly-distributed random number in the range with probability of This code is not guaranteed to be correct",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "linearRealDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Real Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:linearRealDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a log-normally distributed random number.\n   This is based off of sampling the normal distribution,\n   and then following the instructions at\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Log-normal_distribution#Generating_log-normally_distributed_random_variates\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "lognormalDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Generates log-normally distributed random number This is based off of sampling the normal distribution and then following the instructions at http en.wikipedia.org wiki Log-normal distribution Generating log-normally distributed random variates",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "lognormalDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:lognormalDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a random number generator from a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e seed.\n   This uses the insecure (but fast) mersenne twister.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "mkRandom",
          "package": "system-random-effect",
          "signature": "Word64 -\u003e Random",
          "source": "src/System-Random-Effect-Raw.html#mkRandom",
          "type": "function"
        },
        "index": {
          "description": "Create random number generator from Word64 seed This uses the insecure but fast mersenne twister",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "mkRandom",
          "normalized": "Word-\u003eRandom",
          "package": "system-random-effect",
          "partial": "Random",
          "signature": "Word-\u003eRandom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:mkRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new random number generator, using the clocktime as the base for\n   the seed. This must be called from a computation with a lifted base effect\n   of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is just a conveniently seeded mersenne twister.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "mkRandomIO",
          "package": "system-random-effect",
          "signature": "Eff r Random",
          "source": "src/System-Random-Effect-Raw.html#mkRandomIO",
          "type": "function"
        },
        "index": {
          "description": "Create new random number generator using the clocktime as the base for the seed This must be called from computation with lifted base effect of IO This is just conveniently seeded mersenne twister",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "mkRandomIO",
          "package": "system-random-effect",
          "partial": "Random IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:mkRandomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new random number generator, using the system entropy source\n   as a seed. The random number generator returned from this function is\n   cryptographically secure, but not nearly as fast as the one returned\n   by \u003ccode\u003e\u003ca\u003emkRandom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkRandomIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "mkSecureRandomIO",
          "package": "system-random-effect",
          "signature": "Eff r Random",
          "source": "src/System-Random-Effect-Raw.html#mkSecureRandomIO",
          "type": "function"
        },
        "index": {
          "description": "Creates new random number generator using the system entropy source as seed The random number generator returned from this function is cryptographically secure but not nearly as fast as the one returned by mkRandom and mkRandomIO",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "mkSecureRandomIO",
          "package": "system-random-effect",
          "partial": "Secure Random IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:mkSecureRandomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value represents the number of failures in a series of\n   independent yes/no trials (each succeeds with probability p),\n   before exactly k successes occur.\n\u003c/p\u003e\u003cp\u003ep must be in the range (0, 1]\n   k must be \u003e= 0\n\u003c/p\u003e\u003cp\u003eWarning: NOT IMPLEMENTED!\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "negativeBinomialDist",
          "package": "system-random-effect",
          "signature": "Rational-\u003e Integer-\u003e Eff r Integer",
          "type": "function"
        },
        "index": {
          "description": "The value represents the number of failures in series of independent yes no trials each succeeds with probability before exactly successes occur must be in the range must be Warning NOT IMPLEMENTED",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "negativeBinomialDist",
          "normalized": "Rational-\u003eInteger-\u003eEff a Integer",
          "package": "system-random-effect",
          "partial": "Binomial Dist",
          "signature": "Rational-\u003eInteger-\u003eEff r Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:negativeBinomialDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates random numbers as sampled from the\n   normal distribution.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "normalDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Generates random numbers as sampled from the normal distribution",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "normalDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:normalDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function produces random floating-point numbers, which\n   are uniformly distributed within each of the several subintervals\n   [b_i, b_(i+1)), each with its own weight w_i. The set of interval\n   boundaries and the set of weights are the parameters of this\n   distribution.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003epiecewiseConstantDist [ 0, 1, 10, 15 ]\n                             (buildDDH   [ 1, 0,  1 ])\u003c/code\u003e\n   will produce values between 0 and 1 half the time, and values\n   between 10 and 15 the other half of the time.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "piecewiseConstantDist",
          "package": "system-random-effect",
          "signature": "[Double]-\u003e DiscreteDistributionHelper-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "This function produces random floating-point numbers which are uniformly distributed within each of the several subintervals each with its own weight The set of interval boundaries and the set of weights are the parameters of this distribution For example piecewiseConstantDist buildDDH will produce values between and half the time and values between and the other half of the time",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "piecewiseConstantDist",
          "normalized": "[Double]-\u003eDiscreteDistributionHelper-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Constant Dist",
          "signature": "[Double]-\u003eDiscreteDistributionHelper-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:piecewiseConstantDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function produces random floating-point numbers, which\n   are distributed with linearly-increasing probability within\n   each of the several subintervals [b_i, b_(i+1)), each with its own\n   weight w_i. The set of interval boundaries and the set of weights\n   are the parameters of this distribution.\n\u003c/p\u003e\u003cp\u003eFor example, `piecewiseLinearDist [ 0, 1, 10, 15 ]\n                             (buildDDH   [ 1, 0,  1 ])`\n   will produce values between 0 and 1 half the time, and values\n   between 10 and 15 the other half of the time.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "piecewiseLinearDist",
          "package": "system-random-effect",
          "signature": "[Double]-\u003e DiscreteDistributionHelper-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "This function produces random floating-point numbers which are distributed with linearly-increasing probability within each of the several subintervals each with its own weight The set of interval boundaries and the set of weights are the parameters of this distribution For example piecewiseLinearDist buildDDH will produce values between and half the time and values between and the other half of the time",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "piecewiseLinearDist",
          "normalized": "[Double]-\u003eDiscreteDistributionHelper-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Linear Dist",
          "signature": "[Double]-\u003eDiscreteDistributionHelper-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:piecewiseLinearDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value obtained is the probability of exactly i\n   occurrences of a random event if the expected, mean\n   number of its occurrence under the same conditions\n   (on the same time/space interval) is &#956;.\u003c/p\u003e\u003cp\u003eWarning: NOT IMPLEMENTED!\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "poissonDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "The value obtained is the probability of exactly occurrences of random event if the expected mean number of its occurrence under the same conditions on the same time space interval is Warning NOT IMPLEMENTED",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "poissonDist",
          "normalized": "Double-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:poissonDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of bits which have been randomly generated.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "randomBitList",
          "package": "system-random-effect",
          "signature": "Int-\u003e Eff r [Bool]",
          "type": "function"
        },
        "index": {
          "description": "Returns list of bits which have been randomly generated",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomBitList",
          "normalized": "Int-\u003eEff a[Bool]",
          "package": "system-random-effect",
          "partial": "Bit List",
          "signature": "Int-\u003eEff r[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomBitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a set of random from the internal generator,\n   using \u003ccode\u003e\u003ca\u003erandomWord64\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "randomBits",
          "package": "system-random-effect",
          "signature": "Eff r x",
          "source": "src/System-Random-Effect.html#randomBits",
          "type": "function"
        },
        "index": {
          "description": "Yields set of random from the internal generator using randomWord64 internally",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomBits",
          "package": "system-random-effect",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Effect",
          "name": "randomDouble",
          "package": "system-random-effect",
          "signature": "Eff r Double",
          "source": "src/System-Random-Effect.html#randomDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomDouble",
          "package": "system-random-effect",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Effect",
          "name": "randomInt",
          "package": "system-random-effect",
          "signature": "Eff r Int",
          "source": "src/System-Random-Effect-Raw.html#randomInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomInt",
          "package": "system-random-effect",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Effect",
          "name": "randomInt64",
          "package": "system-random-effect",
          "signature": "Eff r Int64",
          "source": "src/System-Random-Effect-Raw.html#randomInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomInt64",
          "package": "system-random-effect",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Effect",
          "name": "randomWord",
          "package": "system-random-effect",
          "signature": "Eff r Word",
          "source": "src/System-Random-Effect-Raw.html#randomWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomWord",
          "package": "system-random-effect",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Effect",
          "name": "randomWord64",
          "package": "system-random-effect",
          "signature": "Eff r Word64",
          "source": "src/System-Random-Effect-Raw.html#randomWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "randomWord64",
          "package": "system-random-effect",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:randomWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an effectful random computation, returning the computation's result.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "runRandomState",
          "package": "system-random-effect",
          "signature": "Random -\u003e Eff (State Random :\u003e r) w -\u003e Eff r w",
          "source": "src/System-Random-Effect-Raw.html#runRandomState",
          "type": "function"
        },
        "index": {
          "description": "Runs an effectful random computation returning the computation result",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "runRandomState",
          "normalized": "Random-\u003eEff(State Random a)b-\u003eEff a b",
          "package": "system-random-effect",
          "partial": "Random State",
          "signature": "Random-\u003eEff(State Random r)w-\u003eEff r w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:runRandomState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis distribution is used when estimating the mean of an\n   unknown normally distributed value given n+1 independent\n   measurements, each with additive errors of unknown standard\n   deviation, as in physical measurements. Or, alternatively,\n   when estimating the unknown mean of a normal distribution\n   with unknown standard deviation, given n+1 samples.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "studentTDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "This distribution is used when estimating the mean of an unknown normally distributed value given independent measurements each with additive errors of unknown standard deviation as in physical measurements Or alternatively when estimating the unknown mean of normal distribution with unknown standard deviation given samples",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "studentTDist",
          "normalized": "Double-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "TDist",
          "signature": "Double-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:studentTDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a uniformly distributed random number in\n   the inclusive range [a, b].\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "uniformIntDist",
          "package": "system-random-effect",
          "signature": "Integer-\u003e Integer-\u003e Eff r Integer",
          "type": "function"
        },
        "index": {
          "description": "Generates uniformly distributed random number in the inclusive range",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "uniformIntDist",
          "normalized": "Integer-\u003eInteger-\u003eEff a Integer",
          "package": "system-random-effect",
          "partial": "Int Dist",
          "signature": "Integer-\u003eInteger-\u003eEff r Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:uniformIntDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a uniformly distributed random number in\n   the inclusive range [a, b].\n\u003c/p\u003e\u003cp\u003eThis function is more flexible than \u003ccode\u003e\u003ca\u003euniformIntDist\u003c/a\u003e\u003c/code\u003e\n   since it relaxes type constraints, but passing in\n   constant bounds such as \u003ccode\u003euniformIntegralDist 0 10\u003c/code\u003e\n   will warn with -Wall.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "uniformIntegralDist",
          "package": "system-random-effect",
          "signature": "a-\u003e a-\u003e Eff r a",
          "type": "function"
        },
        "index": {
          "description": "Generates uniformly distributed random number in the inclusive range This function is more flexible than uniformIntDist since it relaxes type constraints but passing in constant bounds such as uniformIntegralDist will warn with Wall",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "uniformIntegralDist",
          "normalized": "a-\u003ea-\u003eEff b a",
          "package": "system-random-effect",
          "partial": "Integral Dist",
          "signature": "a-\u003ea-\u003eEff r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:uniformIntegralDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a uniformly distributed random number in\n   the range [a, b).\n\u003c/p\u003e\u003cp\u003eNOTE: This code might not be correct, in that the\n          returned value may not be perfectly uniformly\n          distributed. If you know how to make one of\n          these a better way, PLEASE send me a pull request.\n          I just stole this implementation from the C++11\n          \u003ca\u003erandom\u003c/a\u003e header.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "uniformRealDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Generates uniformly distributed random number in the range NOTE This code might not be correct in that the returned value may not be perfectly uniformly distributed If you know how to make one of these better way PLEASE send me pull request just stole this implementation from the random header",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "uniformRealDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Real Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:uniformRealDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates random numbers as sampled from a Weibull\n   distribution. It was originally identified to describe\n   particle size distribution.\n\u003c/p\u003e",
          "module": "System.Random.Effect",
          "name": "weibullDist",
          "package": "system-random-effect",
          "signature": "Double-\u003e Double-\u003e Eff r Double",
          "type": "function"
        },
        "index": {
          "description": "Generates random numbers as sampled from Weibull distribution It was originally identified to describe particle size distribution",
          "hierarchy": "System Random Effect",
          "module": "System.Random.Effect",
          "name": "weibullDist",
          "normalized": "Double-\u003eDouble-\u003eEff a Double",
          "package": "system-random-effect",
          "partial": "Dist",
          "signature": "Double-\u003eDouble-\u003eEff r Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-random-effect/docs/System-Random-Effect.html#v:weibullDist"
      }
    }
  ]
]