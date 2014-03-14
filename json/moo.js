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
        "word": "moo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary genetic algorithms. Candidates solutions are represented as bit-strings.\n\u003c/p\u003e\u003cp\u003eChoose Gray code if sudden changes to the variable value after a point\nmutation are undesirable, choose binary code otherwise.  In Gray code\ntwo successive variable values differ in only one bit, it may help to\nprevent premature convergence.\n\u003c/p\u003e\u003cp\u003eTo apply binary genetic algorithms to real-valued problems, the real\nvariable may be discretized (\u003ccode\u003e\u003ca\u003eencodeGrayReal\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003edecodeGrayReal\u003c/a\u003e\u003c/code\u003e). Another approach is to use continuous genetic\nalgorithms, see \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo encode more than one variable, just concatenate their codes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "Binary",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Binary genetic algorithms Candidates solutions are represented as bit-strings Choose Gray code if sudden changes to the variable value after point mutation are undesirable choose binary code otherwise In Gray code two successive variable values differ in only one bit it may help to prevent premature convergence To apply binary genetic algorithms to real-valued problems the real variable may be discretized encodeGrayReal and decodeGrayReal Another approach is to use continuous genetic algorithms see Moo.GeneticAlgorithm.Continuous To encode more than one variable just concatenate their codes",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "Binary",
          "package": "moo",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e0\u003c/code\u003es with different probabilities. This may help to control\n the relative frequencies of \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e0\u003c/code\u003es in the genome.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "asymmetricMutate",
          "package": "moo",
          "signature": "Double-\u003e Double-\u003e MutationOp Bool",
          "type": "function"
        },
        "index": {
          "description": "Flip and with different probabilities This may help to control the relative frequencies of and in the genome",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "asymmetricMutate",
          "normalized": "Double-\u003eDouble-\u003eMutationOp Bool",
          "package": "moo",
          "partial": "Mutate",
          "signature": "Double-\u003eDouble-\u003eMutationOp Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:asymmetricMutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReorders a list of individual solutions,\n by putting the best in the head of the list.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "bestFirst",
          "package": "moo",
          "signature": "ProblemType -\u003e Population a -\u003e Population a",
          "source": "src/Moo-GeneticAlgorithm-Selection.html#bestFirst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:bestFirst\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:bestFirst\"]"
        },
        "index": {
          "description": "Reorders list of individual solutions by putting the best in the head of the list",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "bestFirst",
          "normalized": "ProblemType-\u003ePopulation a-\u003ePopulation a",
          "package": "moo",
          "partial": "First",
          "signature": "ProblemType-\u003ePopulation a-\u003ePopulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:bestFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many bits are needed to represent a range of integer numbers\n \u003ccode\u003e(from, to)\u003c/code\u003e (inclusive).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "bitsNeeded",
          "package": "moo",
          "signature": "(a, a) -\u003e b",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#bitsNeeded",
          "type": "function"
        },
        "index": {
          "description": "How many bits are needed to represent range of integer numbers from to inclusive",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "bitsNeeded",
          "normalized": "(a,a)-\u003eb",
          "package": "moo",
          "partial": "Needed",
          "signature": "(a,a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:bitsNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip \u003ccode\u003em\u003c/code\u003e bits on average, keeping the relative frequency of \u003ccode\u003e0\u003c/code\u003es\n and \u003ccode\u003e1\u003c/code\u003es in the genome constant.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "constFrequencyMutate",
          "package": "moo",
          "signature": "a-\u003e MutationOp Bool",
          "type": "function"
        },
        "index": {
          "description": "Flip bits on average keeping the relative frequency of and in the genome constant",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "constFrequencyMutate",
          "normalized": "a-\u003eMutationOp Bool",
          "package": "moo",
          "partial": "Frequency Mutate",
          "signature": "a-\u003eMutationOp Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:constFrequencyMutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a binary sequence to an integer in the range \u003ccode\u003e(from, to)\u003c/code\u003e\n (inclusive). This is an inverse of \u003ccode\u003e\u003ca\u003eencodeBinary\u003c/a\u003e\u003c/code\u003e.  Actual value\n returned may be greater than \u003ccode\u003eto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeBinary",
          "package": "moo",
          "signature": "(b, b) -\u003e [Bool] -\u003e b",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#decodeBinary",
          "type": "function"
        },
        "index": {
          "description": "Decode binary sequence to an integer in the range from to inclusive This is an inverse of encodeBinary Actual value returned may be greater than to",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeBinary",
          "normalized": "(a,a)-\u003e[Bool]-\u003ea",
          "package": "moo",
          "partial": "Binary",
          "signature": "(b,b)-\u003e[Bool]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:decodeBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a binary sequence using Gray code to an integer in the\n range \u003ccode\u003e(from, to)\u003c/code\u003e (inclusive). This is an inverse of \u003ccode\u003e\u003ca\u003eencodeGray\u003c/a\u003e\u003c/code\u003e.\n Actual value returned may be greater than \u003ccode\u003eto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeGray",
          "package": "moo",
          "signature": "(b, b) -\u003e [Bool] -\u003e b",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#decodeGray",
          "type": "function"
        },
        "index": {
          "description": "Decode binary sequence using Gray code to an integer in the range from to inclusive This is an inverse of encodeGray Actual value returned may be greater than to",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeGray",
          "normalized": "(a,a)-\u003e[Bool]-\u003ea",
          "package": "moo",
          "partial": "Gray",
          "signature": "(b,b)-\u003e[Bool]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:decodeGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a binary sequence using Gray code to a real value in the\n range \u003ccode\u003e(from, to)\u003c/code\u003e, assuming it was discretized with \u003ccode\u003en\u003c/code\u003e equally\n spaced values (see \u003ccode\u003e\u003ca\u003eencodeGrayReal\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeGrayReal",
          "package": "moo",
          "signature": "(a, a) -\u003e Int -\u003e [Bool] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#decodeGrayReal",
          "type": "function"
        },
        "index": {
          "description": "Decode binary sequence using Gray code to real value in the range from to assuming it was discretized with equally spaced values see encodeGrayReal",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "decodeGrayReal",
          "normalized": "(a,a)-\u003eInt-\u003e[Bool]-\u003ea",
          "package": "moo",
          "partial": "Gray Real",
          "signature": "(a,a)-\u003eInt-\u003e[Bool]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:decodeGrayReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrossover all available parents. Parents are not repeated.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "doCrossovers",
          "package": "moo",
          "signature": "[Genome a] -\u003e CrossoverOp a -\u003e Rand [Genome a]",
          "source": "src/Moo-GeneticAlgorithm-Utilities.html#doCrossovers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:doCrossovers\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:doCrossovers\"]"
        },
        "index": {
          "description": "Crossover all available parents Parents are not repeated",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "doCrossovers",
          "normalized": "[Genome a]-\u003eCrossoverOp a-\u003eRand[Genome a]",
          "package": "moo",
          "partial": "Crossovers",
          "signature": "[Genome a]-\u003eCrossoverOp a-\u003eRand[Genome a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:doCrossovers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce exactly \u003ccode\u003en\u003c/code\u003e offsprings by repeatedly running the \u003ccode\u003ecrossover\u003c/code\u003e\n operator between randomly selected parents (possibly repeated).\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "doNCrossovers",
          "package": "moo",
          "signature": "Int-\u003e [Genome a]-\u003e CrossoverOp a-\u003e Rand [Genome a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:doNCrossovers\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:doNCrossovers\"]"
        },
        "index": {
          "description": "Produce exactly offsprings by repeatedly running the crossover operator between randomly selected parents possibly repeated",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "doNCrossovers",
          "normalized": "Int-\u003e[Genome a]-\u003eCrossoverOp a-\u003eRand[Genome a]",
          "package": "moo",
          "partial": "NCrossovers",
          "signature": "Int-\u003e[Genome a]-\u003eCrossoverOp a-\u003eRand[Genome a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:doNCrossovers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an integer number in the range \u003ccode\u003e(from, to)\u003c/code\u003e (inclusive)\n as a binary sequence of minimal length. Use of binary encoding\n means that a single point mutation may lead to sudden big change\n of the encoded value.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeBinary",
          "package": "moo",
          "signature": "(b, b) -\u003e b -\u003e [Bool]",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#encodeBinary",
          "type": "function"
        },
        "index": {
          "description": "Encode an integer number in the range from to inclusive as binary sequence of minimal length Use of binary encoding means that single point mutation may lead to sudden big change of the encoded value",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeBinary",
          "normalized": "(a,a)-\u003ea-\u003e[Bool]",
          "package": "moo",
          "partial": "Binary",
          "signature": "(b,b)-\u003eb-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:encodeBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an integer number in the range \u003ccode\u003e(from, to)\u003c/code\u003e (inclusive) as\n binary sequence of minimal length. Use of Gray code means that a\n single point mutation leads to incremental change of the encoded\n value.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeGray",
          "package": "moo",
          "signature": "(b, b) -\u003e b -\u003e [Bool]",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#encodeGray",
          "type": "function"
        },
        "index": {
          "description": "Encode an integer number in the range from to inclusive as binary sequence of minimal length Use of Gray code means that single point mutation leads to incremental change of the encoded value",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeGray",
          "normalized": "(a,a)-\u003ea-\u003e[Bool]",
          "package": "moo",
          "partial": "Gray",
          "signature": "(b,b)-\u003eb-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:encodeGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a real number in the range \u003ccode\u003e(from, to)\u003c/code\u003e (inclusive)\n with \u003ccode\u003en\u003c/code\u003e equally spaced discrete values in binary Gray code.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeGrayReal",
          "package": "moo",
          "signature": "(a, a) -\u003e Int -\u003e a -\u003e [Bool]",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#encodeGrayReal",
          "type": "function"
        },
        "index": {
          "description": "Encode real number in the range from to inclusive with equally spaced discrete values in binary Gray code",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "encodeGrayReal",
          "normalized": "(a,a)-\u003eInt-\u003ea-\u003e[Bool]",
          "package": "moo",
          "partial": "Gray Real",
          "signature": "(a,a)-\u003eInt-\u003ea-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:encodeGrayReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003en\u003c/code\u003e random binary genomes of length \u003ccode\u003elen\u003c/code\u003e.\n Return a list of genomes.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "getRandomBinaryGenomes",
          "package": "moo",
          "signature": "Int-\u003e Int-\u003e Rand [Genome Bool]",
          "type": "function"
        },
        "index": {
          "description": "Generate random binary genomes of length len Return list of genomes",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "getRandomBinaryGenomes",
          "normalized": "Int-\u003eInt-\u003eRand[Genome Bool]",
          "package": "moo",
          "partial": "Random Binary Genomes",
          "signature": "Int-\u003eInt-\u003eRand[Genome Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:getRandomBinaryGenomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHamming distance between \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is the number of coordinates\n for which \u003ccode\u003ex_i\u003c/code\u003e and \u003ccode\u003ey_i\u003c/code\u003e are different.\n\u003c/p\u003e\u003cp\u003eReference: Hamming, Richard W. (1950), &#8220;Error detecting and error\n correcting codes&#8221;, Bell System Technical Journal 29 (2): 147&#8211;160,\n MR 0035935.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "hammingDistance",
          "package": "moo",
          "signature": "[a] -\u003e [a] -\u003e i",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#hammingDistance",
          "type": "function"
        },
        "index": {
          "description": "Hamming distance between and is the number of coordinates for which and are different Reference Hamming Richard Error detecting and error correcting codes Bell System Technical Journal MR",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "hammingDistance",
          "normalized": "[a]-\u003e[a]-\u003eb",
          "package": "moo",
          "partial": "Distance",
          "signature": "[a]-\u003e[a]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:hammingDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't crossover.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "noCrossover",
          "package": "moo",
          "signature": "CrossoverOp a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#noCrossover",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:noCrossover\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:noCrossover\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:noCrossover\"]"
        },
        "index": {
          "description": "Don crossover",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "noCrossover",
          "package": "moo",
          "partial": "Crossover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:noCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random point in two genomes, and swap them beyond this point.\n Apply with probability \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "onePointCrossover",
          "package": "moo",
          "signature": "Double -\u003e CrossoverOp a",
          "source": "src/Moo-GeneticAlgorithm-Crossover.html#onePointCrossover",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:onePointCrossover\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:onePointCrossover\"]"
        },
        "index": {
          "description": "Select random point in two genomes and swap them beyond this point Apply with probability",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "onePointCrossover",
          "normalized": "Double-\u003eCrossoverOp a",
          "package": "moo",
          "partial": "Point Crossover",
          "signature": "Double-\u003eCrossoverOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:onePointCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlips a random bit along the length of the genome with probability \u003ccode\u003ep\u003c/code\u003e.\n With probability \u003ccode\u003e(1 - p)\u003c/code\u003e the genome remains unaffected.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "pointMutate",
          "package": "moo",
          "signature": "Double -\u003e MutationOp Bool",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#pointMutate",
          "type": "function"
        },
        "index": {
          "description": "Flips random bit along the length of the genome with probability With probability the genome remains unaffected",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "pointMutate",
          "normalized": "Double-\u003eMutationOp Bool",
          "package": "moo",
          "partial": "Mutate",
          "signature": "Double-\u003eMutationOp Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:pointMutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace objective function values in the population with their\n ranks.  For a population of size \u003ccode\u003en\u003c/code\u003e, a genome with the best value\n of objective function has rank \u003ccode\u003en' \u003c= n\u003c/code\u003e, and a genome with the\n worst value of objective function gets rank \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erankScale\u003c/a\u003e\u003c/code\u003e may be useful to avoid domination of few super-genomes\n in \u003ccode\u003e\u003ca\u003erouletteSelect\u003c/a\u003e\u003c/code\u003e or to apply \u003ccode\u003e\u003ca\u003erouletteSelect\u003c/a\u003e\u003c/code\u003e when an objective\n function is not necessarily positive.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "rankScale",
          "package": "moo",
          "signature": "ProblemType -\u003e Population a -\u003e Population a",
          "source": "src/Moo-GeneticAlgorithm-Selection.html#rankScale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:rankScale\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:rankScale\"]"
        },
        "index": {
          "description": "Replace objective function values in the population with their ranks For population of size genome with the best value of objective function has rank and genome with the worst value of objective function gets rank rankScale may be useful to avoid domination of few super-genomes in rouletteSelect or to apply rouletteSelect when an objective function is not necessarily positive",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "rankScale",
          "normalized": "ProblemType-\u003ePopulation a-\u003ePopulation a",
          "package": "moo",
          "partial": "Scale",
          "signature": "ProblemType-\u003ePopulation a-\u003ePopulation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:rankScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObjective-proportionate (roulette wheel) selection: select \u003ccode\u003en\u003c/code\u003e\n random items with each item's chance of being selected is\n proportional to its objective function (fitness).\n Objective function should be non-negative.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "rouletteSelect",
          "package": "moo",
          "signature": "Int -\u003e SelectionOp a",
          "source": "src/Moo-GeneticAlgorithm-Selection.html#rouletteSelect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:rouletteSelect\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:rouletteSelect\"]"
        },
        "index": {
          "description": "Objective-proportionate roulette wheel selection select random items with each item chance of being selected is proportional to its objective function fitness Objective function should be non-negative",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "rouletteSelect",
          "normalized": "Int-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Select",
          "signature": "Int-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:rouletteSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into pieces of size \u003ccode\u003en\u003c/code\u003e. This may be useful to split\n the genome into distinct equally sized &#8220;genes&#8221; which encode\n distinct properties of the solution.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "splitEvery",
          "package": "moo",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Moo-GeneticAlgorithm-Binary.html#splitEvery",
          "type": "function"
        },
        "index": {
          "description": "Split list into pieces of size This may be useful to split the genome into distinct equally sized genes which encode distinct properties of the solution",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "splitEvery",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "moo",
          "partial": "Every",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:splitEvery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStochastic universal sampling (SUS) is a selection technique\n similar to roulette wheel selection. It gives weaker members a fair\n chance to be selected, which is proportinal to their\n fitness. Objective function should be non-negative.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "stochasticUniversalSampling",
          "package": "moo",
          "signature": "Int-\u003e SelectionOp a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:stochasticUniversalSampling\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:stochasticUniversalSampling\"]"
        },
        "index": {
          "description": "Stochastic universal sampling SUS is selection technique similar to roulette wheel selection It gives weaker members fair chance to be selected which is proportinal to their fitness Objective function should be non-negative",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "stochasticUniversalSampling",
          "normalized": "Int-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Universal Sampling",
          "signature": "Int-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:stochasticUniversalSampling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms tournament selection among \u003ccode\u003esize\u003c/code\u003e individuals and\n returns the winner. Repeat \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "tournamentSelect",
          "package": "moo",
          "signature": "ProblemType-\u003e Int-\u003e Int-\u003e SelectionOp a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:tournamentSelect\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:tournamentSelect\"]"
        },
        "index": {
          "description": "Performs tournament selection among size individuals and returns the winner Repeat times",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "tournamentSelect",
          "normalized": "ProblemType-\u003eInt-\u003eInt-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Select",
          "signature": "ProblemType-\u003eInt-\u003eInt-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:tournamentSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect two random points in two genomes, and swap everything in between.\n Apply with probability \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "twoPointCrossover",
          "package": "moo",
          "signature": "Double -\u003e CrossoverOp a",
          "source": "src/Moo-GeneticAlgorithm-Crossover.html#twoPointCrossover",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:twoPointCrossover\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:twoPointCrossover\"]"
        },
        "index": {
          "description": "Select two random points in two genomes and swap everything in between Apply with probability",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "twoPointCrossover",
          "normalized": "Double-\u003eCrossoverOp a",
          "package": "moo",
          "partial": "Point Crossover",
          "signature": "Double-\u003eCrossoverOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:twoPointCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap individual bits of two genomes with probability \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "uniformCrossover",
          "package": "moo",
          "signature": "Double -\u003e CrossoverOp a",
          "source": "src/Moo-GeneticAlgorithm-Crossover.html#uniformCrossover",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:uniformCrossover\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:uniformCrossover\"]"
        },
        "index": {
          "description": "Swap individual bits of two genomes with probability",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "uniformCrossover",
          "normalized": "Double-\u003eCrossoverOp a",
          "package": "moo",
          "partial": "Crossover",
          "signature": "Double-\u003eCrossoverOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:uniformCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA popular niching method proposed by D. Goldberg and\n J. Richardson in 1987. The shared fitness of the individual is inversely\n protoptional to its niche count.\n The method expects the objective function to be non-negative.\n\u003c/p\u003e\u003cp\u003eAn extension for minimization problems is implemented by\n making the fitnes proportional to its niche count (rather than\n inversely proportional).\n\u003c/p\u003e\u003cp\u003eReference: Chen, J. H., Goldberg, D. E., Ho, S. Y., & Sastry,\n K. (2002, July). Fitness inheritance in multiobjective\n optimization. In Proceedings of the Genetic and Evolutionary\n Computation Conference (pp. 319-326). Morgan Kaufmann Publishers\n Inc..\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "withFitnessSharing",
          "package": "moo",
          "signature": "(Phenotype a -\u003e Phenotype a -\u003e Double)-\u003e Double-\u003e Double-\u003e ProblemType-\u003e SelectionOp a -\u003e SelectionOp a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withFitnessSharing\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:withFitnessSharing\"]"
        },
        "index": {
          "description": "popular niching method proposed by Goldberg and Richardson in The shared fitness of the individual is inversely protoptional to its niche count The method expects the objective function to be non-negative An extension for minimization problems is implemented by making the fitnes proportional to its niche count rather than inversely proportional Reference Chen Goldberg Ho Sastry July Fitness inheritance in multiobjective optimization In Proceedings of the Genetic and Evolutionary Computation Conference pp Morgan Kaufmann Publishers Inc",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "withFitnessSharing",
          "normalized": "(Phenotype a-\u003ePhenotype a-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eProblemType-\u003eSelectionOp a-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Fitness Sharing",
          "signature": "(Phenotype a-\u003ePhenotype a-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eProblemType-\u003eSelectionOp a-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withFitnessSharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply given scaling or other transform to population before selection.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "withPopulationTransform",
          "package": "moo",
          "signature": "(Population a -\u003e Population a) -\u003e SelectionOp a -\u003e SelectionOp a",
          "source": "src/Moo-GeneticAlgorithm-Selection.html#withPopulationTransform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withPopulationTransform\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:withPopulationTransform\"]"
        },
        "index": {
          "description": "Apply given scaling or other transform to population before selection",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "withPopulationTransform",
          "normalized": "(Population a-\u003ePopulation a)-\u003eSelectionOp a-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Population Transform",
          "signature": "(Population a-\u003ePopulation a)-\u003eSelectionOp a-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withPopulationTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform objective function values before seletion.\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Binary\",\"Moo.GeneticAlgorithm.Continuous\"]",
          "name": "withScale",
          "package": "moo",
          "signature": "(Objective -\u003e Objective) -\u003e SelectionOp a -\u003e SelectionOp a",
          "source": "src/Moo-GeneticAlgorithm-Selection.html#withScale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withScale\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:withScale\"]"
        },
        "index": {
          "description": "Transform objective function values before seletion",
          "hierarchy": "Moo GeneticAlgorithm Binary",
          "module": "Moo.GeneticAlgorithm.Binary",
          "name": "withScale",
          "normalized": "(Objective-\u003eObjective)-\u003eSelectionOp a-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Scale",
          "signature": "(Objective-\u003eObjective)-\u003eSelectionOp a-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Binary.html#v:withScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "Constraints",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "Constraints",
          "package": "moo",
          "partial": "Constraints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine constraints using \u003ccode\u003e\u003ca\u003e.\u003c.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e.\u003c=.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e.\u003e.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e.\u003e=.\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e\n operators, with a \u003ccode\u003e\u003ca\u003eConstraintFunction\u003c/a\u003e\u003c/code\u003e on the left hand side.\n\u003c/p\u003e\u003cp\u003eFor double inequality constraints use pairs of \u003ccode\u003e\u003ca\u003e.\u003c\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c.\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003e.\u003c=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c=.\u003c/a\u003e\u003c/code\u003e respectively, with a \u003ccode\u003e\u003ca\u003eConstraintFunction\u003c/a\u003e\u003c/code\u003e in the middle.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n function .\u003e=. lowerBound\n lowerBound .\u003c= function \u003c=. upperBound\n\u003c/pre\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "Constraint",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#Constraint",
          "type": "data"
        },
        "index": {
          "description": "Define constraints using and operators with ConstraintFunction on the left hand side For double inequality constraints use pairs of and respectively with ConstraintFunction in the middle Examples function lowerBound lowerBound function upperBound",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "Constraint",
          "package": "moo",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "ConstraintFunction",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#ConstraintFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "ConstraintFunction",
          "package": "moo",
          "partial": "Constraint Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#t:ConstraintFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "LeftHandSideInequality",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#LeftHandSideInequality",
          "type": "data"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "LeftHandSideInequality",
          "package": "moo",
          "partial": "Left Hand Side Inequality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#t:LeftHandSideInequality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(\u003c=.)",
          "package": "moo",
          "signature": "LeftHandSideInequality a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#%3C%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(\u003c=.) \u003c=.",
          "normalized": "LeftHandSideInequality a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "LeftHandSideInequality a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(\u003c.)",
          "package": "moo",
          "signature": "LeftHandSideInequality a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(\u003c.) \u003c.",
          "normalized": "LeftHandSideInequality a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "LeftHandSideInequality a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c)",
          "package": "moo",
          "signature": "b -\u003e ConstraintFunction a b -\u003e LeftHandSideInequality a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c) .\u003c",
          "normalized": "a-\u003eConstraintFunction b a-\u003eLeftHandSideInequality b a",
          "package": "moo",
          "signature": "b-\u003eConstraintFunction a b-\u003eLeftHandSideInequality a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c=)",
          "package": "moo",
          "signature": "b -\u003e ConstraintFunction a b -\u003e LeftHandSideInequality a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c=) .\u003c=",
          "normalized": "a-\u003eConstraintFunction b a-\u003eLeftHandSideInequality b a",
          "package": "moo",
          "signature": "b-\u003eConstraintFunction a b-\u003eLeftHandSideInequality a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c=.)",
          "package": "moo",
          "signature": "ConstraintFunction a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3C%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c=.) .\u003c=.",
          "normalized": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c.)",
          "package": "moo",
          "signature": "ConstraintFunction a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.==.)",
          "package": "moo",
          "signature": "ConstraintFunction a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.==.) .==.",
          "normalized": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003e=.)",
          "package": "moo",
          "signature": "ConstraintFunction a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3E%3D.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003e=.) .\u003e=.",
          "normalized": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003e.)",
          "package": "moo",
          "signature": "ConstraintFunction a b -\u003e b -\u003e Constraint a b",
          "source": "src/Moo-GeneticAlgorithm-Constraints.html#.%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "(.\u003e.) .\u003e.",
          "normalized": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "package": "moo",
          "signature": "ConstraintFunction a b-\u003eb-\u003eConstraint a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:.-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn estimate of the degree of (in)feasibility.\n\u003c/p\u003e\u003cp\u003eGiven \u003ccode\u003ef_j\u003c/code\u003e is the excess of \u003ccode\u003ej\u003c/code\u003e-th constraint function value,\n return \u003ccode\u003esum |f_j|^beta\u003c/code\u003e.  For strict inequality constraints, return\n \u003ccode\u003esum (|f_j|^beta + eta)\u003c/code\u003e.  Return \u003ccode\u003e0.0\u003c/code\u003e if the solution is\n feasible.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "degreeOfViolation",
          "package": "moo",
          "signature": "Double-\u003e Double-\u003e [Constraint a Double]-\u003e Genome a-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "An estimate of the degree of in feasibility Given is the excess of th constraint function value return sum beta For strict inequality constraints return sum beta eta Return if the solution is feasible",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "degreeOfViolation",
          "normalized": "Double-\u003eDouble-\u003e[Constraint a Double]-\u003eGenome a-\u003eDouble",
          "package": "moo",
          "partial": "Of Violation",
          "signature": "Double-\u003eDouble-\u003e[Constraint a Double]-\u003eGenome a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:degreeOfViolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003en\u003c/code\u003e feasible random binary genomes.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "getConstrainedBinaryGenomes",
          "package": "moo",
          "signature": "[Constraint Bool b]-\u003e Int-\u003e Int-\u003e Rand [Genome Bool]",
          "type": "function"
        },
        "index": {
          "description": "Generate feasible random binary genomes",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "getConstrainedBinaryGenomes",
          "normalized": "[Constraint Bool a]-\u003eInt-\u003eInt-\u003eRand[Genome Bool]",
          "package": "moo",
          "partial": "Constrained Binary Genomes",
          "signature": "[Constraint Bool b]-\u003eInt-\u003eInt-\u003eRand[Genome Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:getConstrainedBinaryGenomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003en\u003c/code\u003e feasible random genomes with individual genome elements\n bounded by \u003ccode\u003eranges\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "getConstrainedGenomes",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e Int-\u003e [(a, a)]-\u003e Rand [Genome a]",
          "type": "function"
        },
        "index": {
          "description": "Generate feasible random genomes with individual genome elements bounded by ranges",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "getConstrainedGenomes",
          "normalized": "[Constraint a b]-\u003eInt-\u003e[(a,a)]-\u003eRand[Genome a]",
          "package": "moo",
          "partial": "Constrained Genomes",
          "signature": "[Constraint a b]-\u003eInt-\u003e[(a,a)]-\u003eRand[Genome a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:getConstrainedGenomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if a \u003ccode\u003egenome\u003c/code\u003e represents a feasible solution,\n i.e. satisfies all \u003ccode\u003econstraints\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "isFeasible",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e gt-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns True if genome represents feasible solution i.e satisfies all constraints",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "isFeasible",
          "normalized": "[Constraint a b]-\u003ec-\u003eBool",
          "package": "moo",
          "partial": "Feasible",
          "signature": "[Constraint a b]-\u003egt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:isFeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple estimate of the degree of (in)feasibility.\n\u003c/p\u003e\u003cp\u003eCount the number of constraint violations. Return \u003ccode\u003e0\u003c/code\u003e if the solution is feasible.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "numberOfViolations",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e Genome a-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "simple estimate of the degree of in feasibility Count the number of constraint violations Return if the solution is feasible",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "numberOfViolations",
          "normalized": "[Constraint a b]-\u003eGenome a-\u003eInt",
          "package": "moo",
          "partial": "Of Violations",
          "signature": "[Constraint a b]-\u003eGenome a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:numberOfViolations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify objective function in such a way that 1) any feasible\n solution is preferred to any infeasible solution, 2) among two\n feasible solutions the one having better objective function value\n is preferred, 3) among two infeasible solution the one having\n smaller constraint violation is preferred.\n\u003c/p\u003e\u003cp\u003eReference: Deb, K. (2000). An efficient constraint handling method\n for genetic algorithms. Computer methods in applied mechanics and\n engineering, 186(2), 311-338.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withConstraints",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e ([Constraint a b] -\u003e Genome a -\u003e c)-\u003e ProblemType-\u003e SelectionOp a-\u003e SelectionOp a",
          "type": "function"
        },
        "index": {
          "description": "Modify objective function in such way that any feasible solution is preferred to any infeasible solution among two feasible solutions the one having better objective function value is preferred among two infeasible solution the one having smaller constraint violation is preferred Reference Deb An efficient constraint handling method for genetic algorithms Computer methods in applied mechanics and engineering",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withConstraints",
          "normalized": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eProblemType-\u003eSelectionOp a-\u003eSelectionOp a",
          "package": "moo",
          "partial": "Constraints",
          "signature": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eProblemType-\u003eSelectionOp a-\u003eSelectionOp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:withConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all infeasible solutions after every step of the genetic algorithm.\n\u003c/p\u003e\u003cp\u003e&#8220;Death penalty is very popular within the evolution strategies community,\n but it is limited to problems in which the feasible search space is convex\n and constitutes a reasonably large portion of the whole search space,&#8221; --\n (Coello 1999).\n\u003c/p\u003e\u003cp\u003eCoello, C. A. C., & Carlos, A. (1999). A survey of constraint\n handling techniques used with evolutionary algorithms.\n Lania-RI-99-04, Laboratorio Nacional de Inform&#225;tica Avanzada.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withDeathPenalty",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e StepGA m a-\u003e StepGA m a",
          "type": "function"
        },
        "index": {
          "description": "Kill all infeasible solutions after every step of the genetic algorithm Death penalty is very popular within the evolution strategies community but it is limited to problems in which the feasible search space is convex and constitutes reasonably large portion of the whole search space Coello Coello Carlos survey of constraint handling techniques used with evolutionary algorithms Lania-RI-99-04 Laboratorio Nacional de Inform tica Avanzada",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withDeathPenalty",
          "normalized": "[Constraint a b]-\u003eStepGA c a-\u003eStepGA c a",
          "package": "moo",
          "partial": "Death Penalty",
          "signature": "[Constraint a b]-\u003eStepGA m a-\u003eStepGA m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:withDeathPenalty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all infeasible solutions once after the last step of the\n genetic algorithm. See also \u003ccode\u003e\u003ca\u003ewithDeathPenalty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withFinalDeathPenalty",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e StepGA m a-\u003e StepGA m a",
          "type": "function"
        },
        "index": {
          "description": "Kill all infeasible solutions once after the last step of the genetic algorithm See also withDeathPenalty",
          "hierarchy": "Moo GeneticAlgorithm Constraints",
          "module": "Moo.GeneticAlgorithm.Constraints",
          "name": "withFinalDeathPenalty",
          "normalized": "[Constraint a b]-\u003eStepGA c a-\u003eStepGA c a",
          "package": "moo",
          "partial": "Final Death Penalty",
          "signature": "[Constraint a b]-\u003eStepGA m a-\u003eStepGA m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Constraints.html#v:withFinalDeathPenalty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContinuous (real-coded) genetic algorithms. Candidate solutions are\nrepresented as lists of real variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "Continuous",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Continuous.html",
          "type": "module"
        },
        "index": {
          "description": "Continuous real-coded genetic algorithms Candidate solutions are represented as lists of real variables",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "Continuous",
          "package": "moo",
          "partial": "Continuous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlend crossover (BLX-alpha) for continuous genetic algorithms.  For\n each component let \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e be its values in the first and the\n second parent respectively. Choose corresponding component values\n of the children independently from the uniform distribution in the\n range (L,U), where \u003ccode\u003eL = min (x,y) - alpha * d\u003c/code\u003e, \u003ccode\u003eU = max\n (x,y) + alpha * d\u003c/code\u003e, and \u003ccode\u003ed = abs (x - y)\u003c/code\u003e. \u003ccode\u003ealpha\u003c/code\u003e is usually\n 0.5. Takahashi in [10.1109/CEC.2001.934452] suggests 0.366.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "blendCrossover",
          "package": "moo",
          "signature": "Double-\u003e CrossoverOp Double",
          "type": "function"
        },
        "index": {
          "description": "Blend crossover BLX-alpha for continuous genetic algorithms For each component let and be its values in the first and the second parent respectively Choose corresponding component values of the children independently from the uniform distribution in the range where min alpha max alpha and abs alpha is usually Takahashi in CEC.2001.934452 suggests",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "blendCrossover",
          "normalized": "Double-\u003eCrossoverOp Double",
          "package": "moo",
          "partial": "Crossover",
          "signature": "Double-\u003eCrossoverOp Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:blendCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-norm distance: \u003ccode\u003esum |x_i - y-i|\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distance1",
          "package": "moo",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Continuous.html#distance1",
          "type": "function"
        },
        "index": {
          "description": "norm distance sum y-i",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distance1",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:distance1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2-norm distance: \u003ccode\u003e(sum (x_i - y_i)^2)^(1/2)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distance2",
          "package": "moo",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Continuous.html#distance2",
          "type": "function"
        },
        "index": {
          "description": "norm distance sum",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distance2",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:distance2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinity norm distance: \u003ccode\u003emax |x_i - y_i|\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distanceInf",
          "package": "moo",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Continuous.html#distanceInf",
          "type": "function"
        },
        "index": {
          "description": "Infinity norm distance max",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "distanceInf",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "moo",
          "partial": "Inf",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:distanceInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every variable in the genome with probability \u003ccode\u003ep\u003c/code\u003e replace its\n value \u003ccode\u003ev\u003c/code\u003e with \u003ccode\u003ev + sigma*N(0,1)\u003c/code\u003e, where \u003ccode\u003eN(0,1)\u003c/code\u003e is a normally\n distributed random variable with mean equal 0 and variance equal 1.\n With probability \u003ccode\u003e(1 - p)^n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the number\n of variables, the genome remains unaffected.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "gaussianMutate",
          "package": "moo",
          "signature": "Double-\u003e Double-\u003e MutationOp Double",
          "type": "function"
        },
        "index": {
          "description": "For every variable in the genome with probability replace its value with sigma where is normally distributed random variable with mean equal and variance equal With probability where is the number of variables the genome remains unaffected",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "gaussianMutate",
          "normalized": "Double-\u003eDouble-\u003eMutationOp Double",
          "package": "moo",
          "partial": "Mutate",
          "signature": "Double-\u003eDouble-\u003eMutationOp Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:gaussianMutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003en\u003c/code\u003e uniform random genomes with individual genome\n elements bounded by \u003ccode\u003eranges\u003c/code\u003e. This corresponds to random uniform\n sampling of points (genomes) from a hyperrectangle with a bounding\n box \u003ccode\u003eranges\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "getRandomGenomes",
          "package": "moo",
          "signature": "Int-\u003e [(a, a)]-\u003e Rand [Genome a]",
          "type": "function"
        },
        "index": {
          "description": "Generate uniform random genomes with individual genome elements bounded by ranges This corresponds to random uniform sampling of points genomes from hyperrectangle with bounding box ranges",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "getRandomGenomes",
          "normalized": "Int-\u003e[(a,a)]-\u003eRand[Genome a]",
          "package": "moo",
          "partial": "Random Genomes",
          "signature": "Int-\u003e[(a,a)]-\u003eRand[Genome a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:getRandomGenomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulated binary crossover (SBX) operator for continuous genetic\n algorithms. SBX preserves the average of the parents and has a\n spread factor distribution similar to single-point crossover of the\n binary genetic algorithms. If \u003ccode\u003en \u003e 0\u003c/code\u003e, then the heighest\n probability density is assigned to the same distance between\n children as that of the parents.\n\u003c/p\u003e\u003cp\u003eThe performance of real-coded genetic algorithm with SBX is similar\n to that of binary GA with a single-point crossover. For details see\n Simulated Binary Crossover for Continuous Search Space (1995) Agrawal etal.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "simulatedBinaryCrossover",
          "package": "moo",
          "signature": "Double-\u003e CrossoverOp Double",
          "type": "function"
        },
        "index": {
          "description": "Simulated binary crossover SBX operator for continuous genetic algorithms SBX preserves the average of the parents and has spread factor distribution similar to single-point crossover of the binary genetic algorithms If then the heighest probability density is assigned to the same distance between children as that of the parents The performance of real-coded genetic algorithm with SBX is similar to that of binary GA with single-point crossover For details see Simulated Binary Crossover for Continuous Search Space Agrawal etal",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "simulatedBinaryCrossover",
          "normalized": "Double-\u003eCrossoverOp Double",
          "package": "moo",
          "partial": "Binary Crossover",
          "signature": "Double-\u003eCrossoverOp Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:simulatedBinaryCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnimodal normal distributed crossover (UNDX) for continuous\n genetic algorithms. Recommended parameters according to [ISBN\n 978-3-540-43330-9] are \u003ccode\u003esigma_xi = 0.5\u003c/code\u003e, \u003ccode\u003esigma_eta =\n 0.35/sqrt(n)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the number of variables (dimensionality\n of the search space). UNDX mixes three parents, producing normally\n distributed children along the line between first two parents, and using\n the third parent to build a supplementary orthogonal correction\n component.\n\u003c/p\u003e\u003cp\u003eUNDX preserves the mean of the offspring, and also the\n covariance matrix of the offspring if \u003ccode\u003esigma_xi^2 = 0.25\u003c/code\u003e.  By\n preserving distribution of the offspring, /the UNDX can efficiently\n search in along the valleys where parents are distributed in\n functions with strong epistasis among parameters/ (idem).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "unimodalCrossover",
          "package": "moo",
          "signature": "Double-\u003e Double-\u003e CrossoverOp Double",
          "type": "function"
        },
        "index": {
          "description": "Unimodal normal distributed crossover UNDX for continuous genetic algorithms Recommended parameters according to ISBN are sigma xi sigma eta sqrt where is the number of variables dimensionality of the search space UNDX mixes three parents producing normally distributed children along the line between first two parents and using the third parent to build supplementary orthogonal correction component UNDX preserves the mean of the offspring and also the covariance matrix of the offspring if sigma xi By preserving distribution of the offspring the UNDX can efficiently search in along the valleys where parents are distributed in functions with strong epistasis among parameters idem",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "unimodalCrossover",
          "normalized": "Double-\u003eDouble-\u003eCrossoverOp Double",
          "package": "moo",
          "partial": "Crossover",
          "signature": "Double-\u003eDouble-\u003eCrossoverOp Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:unimodalCrossover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eunimodalCrossover\u003c/a\u003e\u003c/code\u003e with default recommended parameters.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "unimodalCrossoverRP",
          "package": "moo",
          "signature": "CrossoverOp Double",
          "source": "src/Moo-GeneticAlgorithm-Continuous.html#unimodalCrossoverRP",
          "type": "function"
        },
        "index": {
          "description": "Run unimodalCrossover with default recommended parameters",
          "hierarchy": "Moo GeneticAlgorithm Continuous",
          "module": "Moo.GeneticAlgorithm.Continuous",
          "name": "unimodalCrossoverRP",
          "package": "moo",
          "partial": "Crossover RP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Continuous.html#v:unimodalCrossoverRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "Multiobjective",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Multiobjective.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "Multiobjective",
          "package": "moo",
          "partial": "Multiobjective",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "MultiObjectiveProblem",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Multiobjective-Types.html#MultiObjectiveProblem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "MultiObjectiveProblem",
          "package": "moo",
          "partial": "Multi Objective Problem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#t:MultiObjectiveProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual with all objective functions evaluated.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "MultiPhenotype",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Multiobjective-Types.html#MultiPhenotype",
          "type": "type"
        },
        "index": {
          "description": "An individual with all objective functions evaluated",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "MultiPhenotype",
          "package": "moo",
          "partial": "Multi Phenotype",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#t:MultiPhenotype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "SingleObjectiveProblem",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Multiobjective-Types.html#SingleObjectiveProblem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "SingleObjectiveProblem",
          "package": "moo",
          "partial": "Single Objective Problem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#t:SingleObjectiveProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate multiple objective per every genome in the population.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "evalAllObjectives",
          "package": "moo",
          "signature": "MultiObjectiveProblem fn-\u003e [gt]-\u003e [MultiPhenotype a]",
          "type": "function"
        },
        "index": {
          "description": "Calculate multiple objective per every genome in the population",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "evalAllObjectives",
          "normalized": "MultiObjectiveProblem a-\u003e[b]-\u003e[MultiPhenotype c]",
          "package": "moo",
          "partial": "All Objectives",
          "signature": "MultiObjectiveProblem fn-\u003e[gt]-\u003e[MultiPhenotype a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:evalAllObjectives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single step of the constrained NSGA-II algorithm, which uses a\n constraint-domination rule:\n\u003c/p\u003e\u003cp\u003e&#8220;A solution \u003ccode\u003ei\u003c/code\u003e is said to constrain-dominate a solution \u003ccode\u003ej\u003c/code\u003e, if any of the\n following is true: 1) Solution \u003ccode\u003ei\u003c/code\u003e is feasible and \u003ccode\u003ej\u003c/code\u003e is not. 2) Solutions\n \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ej\u003c/code\u003e are both infeasible but solution \u003ccode\u003ei\u003c/code\u003e has a smaller overall constraint\n violation. 3) Solutions \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003ej\u003c/code\u003e are feasible, and solution \u003ccode\u003ei\u003c/code\u003e dominates solution \u003ccode\u003ej\u003c/code\u003e.&#8221;\n\u003c/p\u003e\u003cp\u003eReference: (Deb, 2002).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepConstrainedNSGA2",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e ([Constraint a b] -\u003e Genome a -\u003e c)-\u003e MultiObjectiveProblem fn-\u003e SelectionOp a-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "single step of the constrained NSGA-II algorithm which uses constraint-domination rule solution is said to constrain-dominate solution if any of the following is true Solution is feasible and is not Solutions and are both infeasible but solution has smaller overall constraint violation Solutions and are feasible and solution dominates solution Reference Deb",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepConstrainedNSGA2",
          "normalized": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eMultiObjectiveProblem d-\u003eSelectionOp a-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "package": "moo",
          "partial": "Constrained NSGA",
          "signature": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eMultiObjectiveProblem fn-\u003eSelectionOp a-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:stepConstrainedNSGA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single step of the constrained NSGA-II algorithm with binary tournament\n selection. See also \u003ccode\u003e\u003ca\u003estepConstrainedNSGA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepConstrainedNSGA2bt",
          "package": "moo",
          "signature": "[Constraint a b]-\u003e ([Constraint a b] -\u003e Genome a -\u003e c)-\u003e MultiObjectiveProblem fn-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "single step of the constrained NSGA-II algorithm with binary tournament selection See also stepConstrainedNSGA2",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepConstrainedNSGA2bt",
          "normalized": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eMultiObjectiveProblem d-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "package": "moo",
          "partial": "Constrained NSGA",
          "signature": "[Constraint a b]-\u003e([Constraint a b]-\u003eGenome a-\u003ec)-\u003eMultiObjectiveProblem fn-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:stepConstrainedNSGA2bt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single step of the NSGA-II algorithm (Non-Dominated Sorting\n Genetic Algorithm for Multi-Objective Optimization).\n\u003c/p\u003e\u003cp\u003eThe next population is selected from a common pool of parents and\n their children minimizing the non-domination rank and maximizing\n the crowding distance within the same rank.\n The first generation of children is produced without taking\n crowding into account.\n Every solution is assigned a single objective value which is its\n sequence number after sorting with the crowded comparison operator.\n The smaller value corresponds to solutions which are not worse\n the one with the bigger value. Use \u003ccode\u003e\u003ca\u003eevalAllObjectives\u003c/a\u003e\u003c/code\u003e to restore\n individual objective values.\n\u003c/p\u003e\u003cp\u003eReference:\n Deb, K., Pratap, A., Agarwal, S., & Meyarivan, T. A. M. T. (2002). A\n fast and elitist multiobjective genetic algorithm:\n NSGA-II. Evolutionary Computation, IEEE Transactions on, 6(2),\n 182-197.\n\u003c/p\u003e\u003cp\u003eDeb et al. used a binary tournament selection, base on crowded\n comparison operator. To achieve the same effect, use\n \u003ccode\u003e\u003ca\u003estepNSGA2bt\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003estepNSGA2\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003etournamentSelect\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eMinimizing 2 n\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the size of the population).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepNSGA2",
          "package": "moo",
          "signature": "MultiObjectiveProblem fn-\u003e SelectionOp a-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "single step of the NSGA-II algorithm Non-Dominated Sorting Genetic Algorithm for Multi-Objective Optimization The next population is selected from common pool of parents and their children minimizing the non-domination rank and maximizing the crowding distance within the same rank The first generation of children is produced without taking crowding into account Every solution is assigned single objective value which is its sequence number after sorting with the crowded comparison operator The smaller value corresponds to solutions which are not worse the one with the bigger value Use evalAllObjectives to restore individual objective values Reference Deb Pratap Agarwal Meyarivan fast and elitist multiobjective genetic algorithm NSGA-II Evolutionary Computation IEEE Transactions on Deb et al used binary tournament selection base on crowded comparison operator To achieve the same effect use stepNSGA2bt or stepNSGA2 with tournamentSelect Minimizing where is the size of the population",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepNSGA2",
          "normalized": "MultiObjectiveProblem a-\u003eSelectionOp b-\u003eCrossoverOp b-\u003eMutationOp b-\u003eStepGA Rand b",
          "package": "moo",
          "partial": "NSGA",
          "signature": "MultiObjectiveProblem fn-\u003eSelectionOp a-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:stepNSGA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single step of NSGA-II algorithm with binary tournament selection.\n See also \u003ccode\u003e\u003ca\u003estepNSGA2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepNSGA2bt",
          "package": "moo",
          "signature": "MultiObjectiveProblem fn-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "single step of NSGA-II algorithm with binary tournament selection See also stepNSGA2",
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "stepNSGA2bt",
          "normalized": "MultiObjectiveProblem a-\u003eCrossoverOp b-\u003eMutationOp b-\u003eStepGA Rand b",
          "package": "moo",
          "partial": "NSGA",
          "signature": "MultiObjectiveProblem fn-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:stepNSGA2bt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "takeObjectiveValues",
          "package": "moo",
          "signature": "MultiPhenotype a -\u003e [Objective]",
          "source": "src/Moo-GeneticAlgorithm-Multiobjective-Types.html#takeObjectiveValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Multiobjective",
          "module": "Moo.GeneticAlgorithm.Multiobjective",
          "name": "takeObjectiveValues",
          "normalized": "MultiPhenotype a-\u003e[Objective]",
          "package": "moo",
          "partial": "Objective Values",
          "signature": "MultiPhenotype a-\u003e[Objective]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Multiobjective.html#v:takeObjectiveValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome extra facilities to work with \u003ccode\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/code\u003e monad and \u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e\n     random number generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Random",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Some extra facilities to work with Rand monad and PureMT random number generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Random",
          "package": "moo",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePureMT\u003c/a\u003e\u003c/code\u003e, a pure mersenne twister pseudo-random number generator\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "PureMT",
          "package": "moo",
          "type": "data"
        },
        "index": {
          "description": "PureMT pure mersenne twister pseudo-random number generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "PureMT",
          "package": "moo",
          "partial": "Pure MT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#t:PureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic random monad, for generating random numbers from pure mersenne twisters.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Rand",
          "package": "moo",
          "type": "data"
        },
        "index": {
          "description": "basic random monad for generating random numbers from pure mersenne twisters",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Rand",
          "package": "moo",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith a source of random number supply in hand, the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e class allows the\nprogrammer to extract random values of a variety of types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Random",
          "package": "moo",
          "type": "class"
        },
        "index": {
          "description": "With source of random number supply in hand the Random class allows the programmer to extract random values of variety of types Minimal complete definition randomR and random",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "Random",
          "package": "moo",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a random computation using the mersenne generator \u003ccode\u003eg\u003c/code\u003e.  Note that the\n generator \u003ccode\u003eg\u003c/code\u003e is not returned, so there's no way to recover the\n updated version of \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "evalRandom",
          "package": "moo",
          "signature": "Rand a -\u003e PureMT -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate random computation using the mersenne generator Note that the generator is not returned so there no way to recover the updated version of",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "evalRandom",
          "normalized": "Rand a-\u003ePureMT-\u003ea",
          "package": "moo",
          "partial": "Random",
          "signature": "Rand a-\u003ePureMT-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:evalRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getBool",
          "package": "moo",
          "signature": "Rand Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getBool",
          "package": "moo",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new 53-bit precise \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getDouble",
          "package": "moo",
          "signature": "Rand Double",
          "type": "function"
        },
        "index": {
          "description": "Yield new bit precise Double value from the generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getDouble",
          "package": "moo",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getInt",
          "package": "moo",
          "signature": "Rand Int",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int value from the generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getInt",
          "package": "moo",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getInt64",
          "package": "moo",
          "signature": "Rand Int64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Int64 value from the generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getInt64",
          "package": "moo",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield one randomly selected value from standard normal distribution.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getNormal",
          "package": "moo",
          "signature": "Rand Double",
          "source": "src/Moo-GeneticAlgorithm-Random.html#getNormal",
          "type": "function"
        },
        "index": {
          "description": "Yield one randomly selected value from standard normal distribution",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getNormal",
          "package": "moo",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield two randomly selected values which follow standard\n normal distribution.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getNormal2",
          "package": "moo",
          "signature": "Rand (Double, Double)",
          "source": "src/Moo-GeneticAlgorithm-Random.html#getNormal2",
          "type": "function"
        },
        "index": {
          "description": "Yield two randomly selected values which follow standard normal distribution",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getNormal2",
          "normalized": "Rand(Double,Double)",
          "package": "moo",
          "partial": "Normal",
          "signature": "Rand(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getNormal2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new randomly selected value of type \u003ccode\u003ea\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getRandom",
          "package": "moo",
          "signature": "Rand a",
          "source": "src/Moo-GeneticAlgorithm-Random.html#getRandom",
          "type": "function"
        },
        "index": {
          "description": "Yield new randomly selected value of type See random for details",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getRandom",
          "package": "moo",
          "partial": "Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new randomly selected value of type \u003ccode\u003ea\u003c/code\u003e in the range \u003ccode\u003e(lo, hi)\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getRandomR",
          "package": "moo",
          "signature": "(a, a) -\u003e Rand a",
          "source": "src/Moo-GeneticAlgorithm-Random.html#getRandomR",
          "type": "function"
        },
        "index": {
          "description": "Yield new randomly selected value of type in the range lo hi See randomR for details",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getRandomR",
          "normalized": "(a,a)-\u003eRand a",
          "package": "moo",
          "partial": "Random",
          "signature": "(a,a)-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getRandomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getWord",
          "package": "moo",
          "signature": "Rand Word",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word value from the generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getWord",
          "package": "moo",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a new \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e value from the generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getWord64",
          "package": "moo",
          "signature": "Rand Word64",
          "type": "function"
        },
        "index": {
          "description": "Yield new Word64 value from the generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "getWord64",
          "package": "moo",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:getWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new PureMT generator, using the clocktime as the base for the seed.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "newPureMT",
          "package": "moo",
          "signature": "IO PureMT",
          "type": "function"
        },
        "index": {
          "description": "Create new PureMT generator using the clocktime as the base for the seed",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "newPureMT",
          "package": "moo",
          "partial": "Pure MT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:newPureMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake at most n random elements from the list. Preserve order.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "randomSample",
          "package": "moo",
          "signature": "Int -\u003e [a] -\u003e Rand [a]",
          "source": "src/Moo-GeneticAlgorithm-Random.html#randomSample",
          "type": "function"
        },
        "index": {
          "description": "Take at most random elements from the list Preserve order",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "randomSample",
          "normalized": "Int-\u003e[a]-\u003eRand[a]",
          "package": "moo",
          "partial": "Sample",
          "signature": "Int-\u003e[a]-\u003eRand[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:randomSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a random computation using the generator \u003ccode\u003eg\u003c/code\u003e, returning the result\n and the updated generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "runRandom",
          "package": "moo",
          "signature": "Rand a -\u003e PureMT -\u003e (a, PureMT)",
          "type": "function"
        },
        "index": {
          "description": "Run random computation using the generator returning the result and the updated generator",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "runRandom",
          "normalized": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "package": "moo",
          "partial": "Random",
          "signature": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:runRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly reorder the list.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "shuffle",
          "package": "moo",
          "signature": "[a] -\u003e Rand [a]",
          "source": "src/Moo-GeneticAlgorithm-Random.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Randomly reorder the list",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "shuffle",
          "normalized": "[a]-\u003eRand[a]",
          "package": "moo",
          "signature": "[a]-\u003eRand[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify value with probability \u003ccode\u003ep\u003c/code\u003e. Return the unchanged value with probability \u003ccode\u003e1-p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "withProbability",
          "package": "moo",
          "signature": "Double -\u003e (a -\u003e Rand a) -\u003e a -\u003e Rand a",
          "source": "src/Moo-GeneticAlgorithm-Random.html#withProbability",
          "type": "function"
        },
        "index": {
          "description": "Modify value with probability Return the unchanged value with probability",
          "hierarchy": "Moo GeneticAlgorithm Random",
          "module": "Moo.GeneticAlgorithm.Random",
          "name": "withProbability",
          "normalized": "Double-\u003e(a-\u003eRand a)-\u003ea-\u003eRand a",
          "package": "moo",
          "partial": "Probability",
          "signature": "Double-\u003e(a-\u003eRand a)-\u003ea-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Random.html#v:withProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper functions to run genetic algorithms and control iterations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Run",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Helper functions to run genetic algorithms and control iterations",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Run",
          "package": "moo",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterations stop when the condition evaluates as \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Cond",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "data"
        },
        "index": {
          "description": "Iterations stop when the condition evaluates as True",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Cond",
          "package": "moo",
          "partial": "Cond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput-output actions, interactive and time-dependent stop conditions.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "IOHook",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "data"
        },
        "index": {
          "description": "Input-output actions interactive and time-dependent stop conditions",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "IOHook",
          "package": "moo",
          "partial": "IOHook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#t:IOHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging to run every \u003ccode\u003en\u003c/code\u003eth iteration starting from 0 (the first parameter).\n The logging function takes the current generation count and population.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "LogHook",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Run.html#LogHook",
          "type": "data"
        },
        "index": {
          "description": "Logging to run every th iteration starting from the first parameter The logging function takes the current generation count and population",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "LogHook",
          "package": "moo",
          "partial": "Log Hook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#t:LogHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop when both conditions hold\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "And",
          "package": "moo",
          "signature": "And (Cond a) (Cond a)",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:And\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:And\"]"
        },
        "index": {
          "description": "stop when both conditions hold",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "And",
          "package": "moo",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaction to run every \u003ccode\u003en\u003c/code\u003eth iteration, starting from 0;\n initially (at iteration 0) the objective value is zero.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "DoEvery",
          "package": "moo",
          "signature": "DoEvery",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "description": "action to run every th iteration starting from initially at iteration the objective value is zero",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "DoEvery",
          "package": "moo",
          "partial": "Do Every",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:DoEvery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop after \u003ccode\u003en\u003c/code\u003e generations\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "Generations",
          "package": "moo",
          "signature": "Generations Int",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:Generations\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:Generations\"]"
        },
        "index": {
          "description": "stop after generations",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Generations",
          "package": "moo",
          "partial": "Generations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:Generations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eterminate when evolution stalls\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "GensNoChange",
          "package": "moo",
          "signature": "GensNoChange",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:GensNoChange\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:GensNoChange\"]"
        },
        "index": {
          "description": "terminate when evolution stalls",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "GensNoChange",
          "package": "moo",
          "partial": "Gens No Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:GensNoChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop when objective values satisfy the \u003ccode\u003epredicate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "IfObjective",
          "package": "moo",
          "signature": "IfObjective ([Objective] -\u003e Bool)",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:IfObjective\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:IfObjective\"]"
        },
        "index": {
          "description": "stop when objective values satisfy the predicate",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "IfObjective",
          "normalized": "IfObjective([Objective]-\u003eBool)",
          "package": "moo",
          "partial": "If Objective",
          "signature": "IfObjective([Objective]-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:IfObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop when at least one of two conditions holds\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "Or",
          "package": "moo",
          "signature": "Or (Cond a) (Cond a)",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:Or\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:Or\"]"
        },
        "index": {
          "description": "stop when at least one of two conditions holds",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "Or",
          "package": "moo",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecustom or interactive stop condition\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "StopWhen",
          "package": "moo",
          "signature": "StopWhen (IO Bool)",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "description": "custom or interactive stop condition",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "StopWhen",
          "package": "moo",
          "partial": "Stop When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:StopWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eterminate iteration after \u003ccode\u003et\u003c/code\u003e seconds\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "TimeLimit",
          "package": "moo",
          "signature": "TimeLimit",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "description": "terminate iteration after seconds",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "TimeLimit",
          "package": "moo",
          "partial": "Time Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:TimeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "WriteEvery",
          "package": "moo",
          "signature": "WriteEvery Int (Int -\u003e Population a -\u003e w)",
          "source": "src/Moo-GeneticAlgorithm-Run.html#LogHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "WriteEvery",
          "normalized": "WriteEvery Int(Int-\u003ePopulation a-\u003eb)",
          "package": "moo",
          "partial": "Write Every",
          "signature": "WriteEvery Int(Int-\u003ePopulation a-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:WriteEvery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea counter (initially \u003ccode\u003eNothing\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "c'counter",
          "package": "moo",
          "signature": "Maybe (b, Int)",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-counter\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:c-39-counter\"]"
        },
        "index": {
          "description": "counter initially Nothing",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "c'counter",
          "normalized": "Maybe(a,Int)",
          "package": "moo",
          "signature": "Maybe(b,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estall indicator function\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "c'indicator",
          "package": "moo",
          "signature": "[Objective] -\u003e b",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-indicator\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:c-39-indicator\"]"
        },
        "index": {
          "description": "stall indicator function",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "c'indicator",
          "normalized": "[Objective]-\u003ea",
          "package": "moo",
          "signature": "[Objective]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-indicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emax number of generations for an indicator to be the same\n\u003c/p\u003e",
          "module": "[\"Moo.GeneticAlgorithm.Run\",\"Moo.GeneticAlgorithm.Types\"]",
          "name": "c'maxgens",
          "package": "moo",
          "signature": "Int",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-maxgens\",\"http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:c-39-maxgens\"]"
        },
        "index": {
          "description": "max number of generations for an indicator to be the same",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "c'maxgens",
          "package": "moo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:c-39-maxgens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io'action",
          "package": "moo",
          "signature": "Int -\u003e Population a -\u003e IO ()",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io'action",
          "normalized": "Int-\u003ePopulation a-\u003eIO()",
          "package": "moo",
          "signature": "Int-\u003ePopulation a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:io-39-action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io'n",
          "package": "moo",
          "signature": "Int",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io'n",
          "package": "moo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:io-39-n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io't",
          "package": "moo",
          "signature": "Double",
          "source": "src/Moo-GeneticAlgorithm-Run.html#IOHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "io't",
          "package": "moo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:io-39-t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun strict iterations of the genetic algorithm defined by \u003ccode\u003estep\u003c/code\u003e.\n Return the result of the last step.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loop",
          "package": "moo",
          "signature": "Cond a-\u003e StepGA m a-\u003e [Genome a]-\u003e m (Population a)",
          "type": "function"
        },
        "index": {
          "description": "Run strict iterations of the genetic algorithm defined by step Return the result of the last step",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loop",
          "normalized": "Cond a-\u003eStepGA b a-\u003e[Genome a]-\u003eb(Population a)",
          "package": "moo",
          "signature": "Cond a-\u003eStepGA m a-\u003e[Genome a]-\u003em(Population a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGA iteration interleaved with IO (for logging or saving the\n intermediate results); it takes and returns the updated random\n number generator explicitly.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loopIO",
          "package": "moo",
          "signature": "[IOHook a]-\u003e Cond a-\u003e StepGA Rand a-\u003e IORef PureMT-\u003e [Genome a]-\u003e IO (Population a)",
          "type": "function"
        },
        "index": {
          "description": "GA iteration interleaved with IO for logging or saving the intermediate results it takes and returns the updated random number generator explicitly",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loopIO",
          "normalized": "[IOHook a]-\u003eCond a-\u003eStepGA Rand a-\u003eIORef PureMT-\u003e[Genome a]-\u003eIO(Population a)",
          "package": "moo",
          "partial": "IO",
          "signature": "[IOHook a]-\u003eCond a-\u003eStepGA Rand a-\u003eIORef PureMT-\u003e[Genome a]-\u003eIO(Population a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:loopIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGA iteration interleaved with the same-monad logging hooks.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loopWithLog",
          "package": "moo",
          "signature": "LogHook a m w-\u003e Cond a-\u003e StepGA m a-\u003e [Genome a]-\u003e m (Population a, w)",
          "type": "function"
        },
        "index": {
          "description": "GA iteration interleaved with the same-monad logging hooks",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "loopWithLog",
          "normalized": "LogHook a b c-\u003eCond a-\u003eStepGA b a-\u003e[Genome a]-\u003eb(Population a,c)",
          "package": "moo",
          "partial": "With Log",
          "signature": "LogHook a m w-\u003eCond a-\u003eStepGA m a-\u003e[Genome a]-\u003em(Population a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:loopWithLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a population transformation with pre- and post-conditions\n to indicate the end of simulation.\n\u003c/p\u003e\u003cp\u003eUse this function to define custom replacement strategies\n in addition to \u003ccode\u003e\u003ca\u003enextGeneration\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enextSteadyState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "makeStoppable",
          "package": "moo",
          "signature": "objectivefn -\u003e (Population a -\u003e m (Population a)) -\u003e StepGA m a",
          "source": "src/Moo-GeneticAlgorithm-Run.html#makeStoppable",
          "type": "function"
        },
        "index": {
          "description": "Wrap population transformation with pre and post-conditions to indicate the end of simulation Use this function to define custom replacement strategies in addition to nextGeneration and nextSteadyState",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "makeStoppable",
          "normalized": "a-\u003e(Population b-\u003ec(Population b))-\u003eStepGA c b",
          "package": "moo",
          "partial": "Stoppable",
          "signature": "objectivefn-\u003e(Population a-\u003em(Population a))-\u003eStepGA m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:makeStoppable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a single step of the genetic algorithm.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eMoo.GeneticAlgorithm.Binary\u003c/a\u003e and \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e\n for the building blocks of the algorithm.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "nextGeneration",
          "package": "moo",
          "signature": "ProblemType-\u003e objectivefn-\u003e SelectionOp a-\u003e Int-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "Construct single step of the genetic algorithm See Moo.GeneticAlgorithm.Binary and Moo.GeneticAlgorithm.Continuous for the building blocks of the algorithm",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "nextGeneration",
          "normalized": "ProblemType-\u003ea-\u003eSelectionOp b-\u003eInt-\u003eCrossoverOp b-\u003eMutationOp b-\u003eStepGA Rand b",
          "package": "moo",
          "partial": "Generation",
          "signature": "ProblemType-\u003eobjectivefn-\u003eSelectionOp a-\u003eInt-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:nextGeneration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a single step of the incremental (steady-steate) genetic algorithm.\n Exactly \u003ccode\u003en\u003c/code\u003e worst solutions are replaced with newly born children.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eMoo.GeneticAlgorithm.Binary\u003c/a\u003e and \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e\n for the building blocks of the algorithm.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "nextSteadyState",
          "package": "moo",
          "signature": "Int-\u003e ProblemType-\u003e objectivefn-\u003e SelectionOp a-\u003e CrossoverOp a-\u003e MutationOp a-\u003e StepGA Rand a",
          "type": "function"
        },
        "index": {
          "description": "Construct single step of the incremental steady-steate genetic algorithm Exactly worst solutions are replaced with newly born children See Moo.GeneticAlgorithm.Binary and Moo.GeneticAlgorithm.Continuous for the building blocks of the algorithm",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "nextSteadyState",
          "normalized": "Int-\u003eProblemType-\u003ea-\u003eSelectionOp b-\u003eCrossoverOp b-\u003eMutationOp b-\u003eStepGA Rand b",
          "package": "moo",
          "partial": "Steady State",
          "signature": "Int-\u003eProblemType-\u003eobjectivefn-\u003eSelectionOp a-\u003eCrossoverOp a-\u003eMutationOp a-\u003eStepGA Rand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:nextSteadyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to run the entire algorithm in the \u003ccode\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/code\u003e monad.\n It takes care of generating a new random number generator.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "runGA",
          "package": "moo",
          "signature": "Rand [Genome a]-\u003e ([Genome a] -\u003e Rand b)-\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Helper function to run the entire algorithm in the Rand monad It takes care of generating new random number generator",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "runGA",
          "normalized": "Rand[Genome a]-\u003e([Genome a]-\u003eRand b)-\u003eIO b",
          "package": "moo",
          "partial": "GA",
          "signature": "Rand[Genome a]-\u003e([Genome a]-\u003eRand b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:runGA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to run the entire algorithm in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "runIO",
          "package": "moo",
          "signature": "Rand [Genome a]-\u003e (IORef PureMT -\u003e [Genome a] -\u003e IO (Population a))-\u003e IO (Population a)",
          "type": "function"
        },
        "index": {
          "description": "Helper function to run the entire algorithm in the IO monad",
          "hierarchy": "Moo GeneticAlgorithm Run",
          "module": "Moo.GeneticAlgorithm.Run",
          "name": "runIO",
          "normalized": "Rand[Genome a]-\u003e(IORef PureMT-\u003e[Genome a]-\u003eIO(Population a))-\u003eIO(Population a)",
          "package": "moo",
          "partial": "IO",
          "signature": "Rand[Genome a]-\u003e(IORef PureMT-\u003e[Genome a]-\u003eIO(Population a))-\u003eIO(Population a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Run.html#v:runIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic statistics for lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "Statistics",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Statistics.html",
          "type": "module"
        },
        "index": {
          "description": "Basic statistics for lists",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "Statistics",
          "package": "moo",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "average",
          "package": "moo",
          "signature": "[a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Statistics.html#average",
          "type": "function"
        },
        "index": {
          "description": "Average",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "average",
          "normalized": "[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterquartile range.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "iqr",
          "package": "moo",
          "signature": "[a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Statistics.html#iqr",
          "type": "function"
        },
        "index": {
          "description": "Interquartile range",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "iqr",
          "normalized": "[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#v:iqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedian\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "median",
          "package": "moo",
          "signature": "[a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Statistics.html#median",
          "type": "function"
        },
        "index": {
          "description": "Median",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "median",
          "normalized": "[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute empirical qunatiles (using R type 7 continuous sample quantile).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "quantiles",
          "package": "moo",
          "signature": "[a]-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Compute empirical qunatiles using type continuous sample quantile",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "quantiles",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "moo",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#v:quantiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation variance (divided by n).\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "variance",
          "package": "moo",
          "signature": "[a] -\u003e a",
          "source": "src/Moo-GeneticAlgorithm-Statistics.html#variance",
          "type": "function"
        },
        "index": {
          "description": "Population variance divided by",
          "hierarchy": "Moo GeneticAlgorithm Statistics",
          "module": "Moo.GeneticAlgorithm.Statistics",
          "name": "variance",
          "normalized": "[a]-\u003ea",
          "package": "moo",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Statistics.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Types",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Types",
          "package": "moo",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterations stop when the condition evaluates as \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Cond",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Cond",
          "type": "data"
        },
        "index": {
          "description": "Iterations stop when the condition evaluates as True",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Cond",
          "package": "moo",
          "partial": "Cond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA crossover operator takes some \u003cem\u003eparent\u003c/em\u003e genomes and returns some\n \u003cem\u003echildren\u003c/em\u003e along with the remaining parents. Many crossover\n operators use only two parents, but some require three (like UNDX)\n or more. Crossover operator should consume as many parents as\n necessary and stop when the list of parents is empty.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "CrossoverOp",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#CrossoverOp",
          "type": "type"
        },
        "index": {
          "description": "crossover operator takes some parent genomes and returns some children along with the remaining parents Many crossover operators use only two parents but some require three like UNDX or more Crossover operator should consume as many parents as necessary and stop when the list of parents is empty",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "CrossoverOp",
          "package": "moo",
          "partial": "Crossover Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:CrossoverOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA genetic representation of an individual solution.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Genome",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Genome",
          "type": "type"
        },
        "index": {
          "description": "genetic representation of an individual solution",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Genome",
          "package": "moo",
          "partial": "Genome",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:Genome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeGenome\u003c/a\u003e\u003c/code\u003e extracts a raw genome from any type which embeds it.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "GenomeState",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#GenomeState",
          "type": "class"
        },
        "index": {
          "description": "takeGenome extracts raw genome from any type which embeds it",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "GenomeState",
          "package": "moo",
          "partial": "Genome State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:GenomeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutation operator takes a genome and returns an altered copy of it.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "MutationOp",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#MutationOp",
          "type": "type"
        },
        "index": {
          "description": "mutation operator takes genome and returns an altered copy of it",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "MutationOp",
          "package": "moo",
          "partial": "Mutation Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:MutationOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA measure of the observed performance. It may be called cost\n for minimization problems, or fitness for maximization problems.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Objective",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Objective",
          "type": "type"
        },
        "index": {
          "description": "measure of the observed performance It may be called cost for minimization problems or fitness for maximization problems",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Objective",
          "package": "moo",
          "partial": "Objective",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:Objective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to evaluate a genome should be an instance of\n \u003ccode\u003e\u003ca\u003eObjectiveFunction\u003c/a\u003e\u003c/code\u003e class. It may be called a cost function for\n minimization problems, or a fitness function for maximization\n problems.\n\u003c/p\u003e\u003cp\u003eSome genetic algorithm operators, like \u003ccode\u003erouletteSelect\u003c/code\u003e, require\n the \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e to be non-negative.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ObjectiveFunction",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#ObjectiveFunction",
          "type": "class"
        },
        "index": {
          "description": "function to evaluate genome should be an instance of ObjectiveFunction class It may be called cost function for minimization problems or fitness function for maximization problems Some genetic algorithm operators like rouletteSelect require the Objective to be non-negative",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ObjectiveFunction",
          "package": "moo",
          "partial": "Objective Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:ObjectiveFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA genome associated with its observed \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Phenotype",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Phenotype",
          "type": "type"
        },
        "index": {
          "description": "genome associated with its observed Objective value",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Phenotype",
          "package": "moo",
          "partial": "Phenotype",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:Phenotype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entire population of observed \u003ccode\u003e\u003ca\u003ePhenotype\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Population",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#Population",
          "type": "type"
        },
        "index": {
          "description": "An entire population of observed Phenotype",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Population",
          "package": "moo",
          "partial": "Population",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:Population"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn life cycle of the genetic algorithm:\n\u003c/p\u003e\u003cpre\u003e\n   [ start ]\n       |\n       v\n   (genomes) --\u003e [calculate objective] --\u003e (evaluated genomes) --\u003e [ stop ]\n       ^  ^                                       |\n       |  |                                       |\n       |  `-----------.                           |\n       |               \\                          v\n   [ mutate ]        (elite) \u003c-------------- [ select ]\n       ^                                          |\n       |                                          |\n       |                                          |\n       |                                          v\n   (genomes) \u003c----- [ crossover ] \u003c-------- (evaluted genomes)\n\n\u003c/pre\u003e\u003cp\u003ePopulationState can represent either \u003ccode\u003egenomes\u003c/code\u003e or \u003ccode\u003eevaluated genomed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "PopulationState",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#PopulationState",
          "type": "type"
        },
        "index": {
          "description": "On life cycle of the genetic algorithm start genomes calculate objective evaluated genomes stop mutate elite select genomes crossover evaluted genomes PopulationState can represent either genomes or evaluated genomed",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "PopulationState",
          "package": "moo",
          "partial": "Population State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:PopulationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of optimization problem: whether the objective function\n has to be miminized, or maximized.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ProblemType",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#ProblemType",
          "type": "data"
        },
        "index": {
          "description": "type of optimization problem whether the objective function has to be miminized or maximized",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ProblemType",
          "package": "moo",
          "partial": "Problem Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:ProblemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA selection operator selects a subset (probably with repetition)\n of genomes for reproduction via crossover and mutation.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "SelectionOp",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#SelectionOp",
          "type": "type"
        },
        "index": {
          "description": "selection operator selects subset probably with repetition of genomes for reproduction via crossover and mutation",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "SelectionOp",
          "package": "moo",
          "partial": "Selection Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:SelectionOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single step of the genetic algorithm. See also \u003ccode\u003enextGeneration\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StepGA",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#StepGA",
          "type": "type"
        },
        "index": {
          "description": "single step of the genetic algorithm See also nextGeneration",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StepGA",
          "package": "moo",
          "partial": "Step GA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:StepGA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type to distinguish the last and intermediate steps results.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StepResult",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm-Types.html#StepResult",
          "type": "data"
        },
        "index": {
          "description": "data type to distinguish the last and intermediate steps results",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StepResult",
          "package": "moo",
          "partial": "Step Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#t:StepResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ContinueGA",
          "package": "moo",
          "signature": "ContinueGA a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#StepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "ContinueGA",
          "package": "moo",
          "partial": "Continue GA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:ContinueGA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Maximizing",
          "package": "moo",
          "signature": "Maximizing",
          "source": "src/Moo-GeneticAlgorithm-Types.html#ProblemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Maximizing",
          "package": "moo",
          "partial": "Maximizing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:Maximizing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Minimizing",
          "package": "moo",
          "signature": "Minimizing",
          "source": "src/Moo-GeneticAlgorithm-Types.html#ProblemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "Minimizing",
          "package": "moo",
          "partial": "Minimizing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:Minimizing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StopGA",
          "package": "moo",
          "signature": "StopGA a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#StepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "StopGA",
          "package": "moo",
          "partial": "Stop GA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:StopGA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "evalObjective",
          "package": "moo",
          "signature": "f -\u003e [Genome a] -\u003e Population a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#evalObjective",
          "type": "method"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "evalObjective",
          "normalized": "a-\u003e[Genome b]-\u003ePopulation b",
          "package": "moo",
          "partial": "Objective",
          "signature": "f-\u003e[Genome a]-\u003ePopulation a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:evalObjective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't mutate.\n\u003c/p\u003e",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "noMutation",
          "package": "moo",
          "signature": "MutationOp a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#noMutation",
          "type": "function"
        },
        "index": {
          "description": "Don mutate",
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "noMutation",
          "package": "moo",
          "partial": "Mutation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:noMutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "takeGenome",
          "package": "moo",
          "signature": "gt -\u003e Genome a",
          "source": "src/Moo-GeneticAlgorithm-Types.html#takeGenome",
          "type": "method"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "takeGenome",
          "normalized": "a-\u003eGenome b",
          "package": "moo",
          "partial": "Genome",
          "signature": "gt-\u003eGenome a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:takeGenome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "takeObjectiveValue",
          "package": "moo",
          "signature": "Phenotype a -\u003e Objective",
          "source": "src/Moo-GeneticAlgorithm-Types.html#takeObjectiveValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Moo GeneticAlgorithm Types",
          "module": "Moo.GeneticAlgorithm.Types",
          "name": "takeObjectiveValue",
          "normalized": "Phenotype a-\u003eObjective",
          "package": "moo",
          "partial": "Objective Value",
          "signature": "Phenotype a-\u003eObjective",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm-Types.html#v:takeObjectiveValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for custom genetic algorithms.\n\u003c/p\u003e\u003cpre\u003e\n-----------\nQuick Start\n-----------\n\u003c/pre\u003e\u003cp\u003eImport\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e either \u003ca\u003eMoo.GeneticAlgorithm.Binary\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e or \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eGenetic algorithms are used to find good solutions to optimization\nand search problems. They mimic the process of natural evolution\nand selection.\n\u003c/p\u003e\u003cp\u003eA genetic algorithm deals with a \u003cem\u003epopulation\u003c/em\u003e of candidate solutions.\nEach candidate solution is represented with a \u003ccode\u003e\u003ca\u003eGenome\u003c/a\u003e\u003c/code\u003e. On every\niteration the best genomes are \u003cem\u003eselected\u003c/em\u003e (\u003ccode\u003e\u003ca\u003eSelectionOp\u003c/a\u003e\u003c/code\u003e). The next\ngeneration is produced through \u003cem\u003ecrossover\u003c/em\u003e (recombination of the\nparents, \u003ccode\u003e\u003ca\u003eCrossoverOp\u003c/a\u003e\u003c/code\u003e) and \u003cem\u003emutation\u003c/em\u003e (a random change in the genome,\n\u003ccode\u003e\u003ca\u003eMutationOp\u003c/a\u003e\u003c/code\u003e) of the selected genomes. This process of selection --\ncrossover -- mutation is repeated until a good solution appears or all\nhope is lost.\n\u003c/p\u003e\u003cp\u003eGenetic algorithms are often defined in terms of minimizing a cost\nfunction or maximizing fitness. This library refers to observed\nperformance of a genome as \u003ccode\u003e\u003ca\u003eObjective\u003c/a\u003e\u003c/code\u003e, which can be minimized as well\nas maximized.\n\u003c/p\u003e\u003cpre\u003e\n--------------------------------\nHow to write a genetic algorithm\n--------------------------------\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Provide an encoding and decoding functions to convert from model\n     variables to genomes and back. See \u003cem\u003eHow to choose encoding\u003c/em\u003e below.\n\u003c/li\u003e\u003cli\u003e Write a custom objective function. Its type should be an instance\n     of \u003ccode\u003e\u003ca\u003eObjectiveFunction\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e. Functions of type \u003ccode\u003eGenome a -\u003e Objective\u003c/code\u003e\n     are commonly used.\n\u003c/li\u003e\u003cli\u003e Optionally write custom selection (\u003ccode\u003e\u003ca\u003eSelectionOp\u003c/a\u003e\u003c/code\u003e), crossover\n     (\u003ccode\u003e\u003ca\u003eCrossoverOp\u003c/a\u003e\u003c/code\u003e) and mutation (\u003ccode\u003e\u003ca\u003eMutationOp\u003c/a\u003e\u003c/code\u003e) operators or just use\n     some standard operators provided by this library. Operators specific\n     to binary or continuous algorithms are provided by\n     \u003ca\u003eMoo.GeneticAlgorithm.Binary\u003c/a\u003e and \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e\n     modules respectively.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003enextGeneration\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enextSteadyState\u003c/a\u003e\u003c/code\u003e to create a single step\n     of the algorithm, control the iterative process with \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e,\n     \u003ccode\u003e\u003ca\u003eloopWithLog\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eloopIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Write a function to generate an initial population; for random\n     uniform initialization use \u003ccode\u003e\u003ca\u003egetRandomGenomes\u003c/a\u003e\u003c/code\u003e\n     or \u003ccode\u003e\u003ca\u003egetRandomBinaryGenomes\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eLibrary functions which need access to random number generator work in\n\u003ccode\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/code\u003e monad.  You may use a high-level wrapper \u003ccode\u003e\u003ca\u003erunGA\u003c/a\u003e\u003c/code\u003e (or\n\u003ccode\u003e\u003ca\u003erunIO\u003c/a\u003e\u003c/code\u003e if you used \u003ccode\u003e\u003ca\u003eloopIO\u003c/a\u003e\u003c/code\u003e), which takes care of creating a new random\nnumber generator and running the entire algorithm.\n\u003c/p\u003e\u003cp\u003eTo solve constrained optimization problems, modify initialization and\nselection operators (see \u003ca\u003eMoo.GeneticAlgorithm.Constraints\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eTo solve multi-objective optimization problems, use NSGA-II algorithm\n(see \u003ca\u003eMoo.GeneticAlgorithm.Multiobjective\u003c/a\u003e).\n\u003c/p\u003e\u003cpre\u003e\n----------------------\nHow to choose encoding\n----------------------\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e For problems with discrete search space, binary (or Gray)\n   encoding of the bit-string is usually used.\n   A bit-string is represented as a list of \u003ccode\u003eBool\u003c/code\u003e values (\u003ccode\u003e[Bool]\u003c/code\u003e).\n   To build a binary genetic algorithm, import \u003ca\u003eMoo.GeneticAlgorithm.Binary\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e For problems with continuous search space, it is possible to use a\n   vector of real variables as a genome.\n   Such a genome is represented as a list of \u003ccode\u003eDouble\u003c/code\u003e or \u003ccode\u003eFloat\u003c/code\u003e values.\n   Special crossover and mutation operators should be used.\n   To build a continuous genetic algorithm, import\n   \u003ca\u003eMoo.GeneticAlgorithm.Continuous\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n--------\nExamples\n--------\n\u003c/pre\u003e\u003cp\u003eMinimizing Beale's function:\n\u003c/p\u003e\u003cpre\u003e\nimport Moo.GeneticAlgorithm.Continuous\n\nbeale :: [Double] -\u003e Double\nbeale [x, y] = (1.5 - x + x*y)**2 + (2.25 - x + x*y*y)**2 + (2.625 - x + x*y*y*y)**2\n\npopsize = 101\nelitesize = 1\ntolerance = 1e-6\n\nselection = tournamentSelect Minimizing 2 (popsize - elitesize)\ncrossover = unimodalCrossoverRP\nmutation = gaussianMutate 0.25 0.1\nstep = nextGeneration Minimizing beale selection elitesize crossover mutation\nstop = IfObjective (\\values -\u003e (minimum values) \u003c tolerance)\ninitialize = getRandomGenomes popsize [(-4.5, 4.5), (-4.5, 4.5)]\n\nmain = do\n  population \u003c- runGA initialize (loop stop step)\n  print (head . bestFirst Minimizing $ population)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003eexamples/\u003c/code\u003e folder of the source distribution for more examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Moo.GeneticAlgorithm",
          "name": "GeneticAlgorithm",
          "package": "moo",
          "source": "src/Moo-GeneticAlgorithm.html",
          "type": "module"
        },
        "index": {
          "description": "library for custom genetic algorithms Quick Start Import either Moo.GeneticAlgorithm.Binary or Moo.GeneticAlgorithm.Continuous Genetic algorithms are used to find good solutions to optimization and search problems They mimic the process of natural evolution and selection genetic algorithm deals with population of candidate solutions Each candidate solution is represented with Genome On every iteration the best genomes are selected SelectionOp The next generation is produced through crossover recombination of the parents CrossoverOp and mutation random change in the genome MutationOp of the selected genomes This process of selection crossover mutation is repeated until good solution appears or all hope is lost Genetic algorithms are often defined in terms of minimizing cost function or maximizing fitness This library refers to observed performance of genome as Objective which can be minimized as well as maximized How to write genetic algorithm Provide an encoding and decoding functions to convert from model variables to genomes and back See How to choose encoding below Write custom objective function Its type should be an instance of ObjectiveFunction Functions of type Genome Objective are commonly used Optionally write custom selection SelectionOp crossover CrossoverOp and mutation MutationOp operators or just use some standard operators provided by this library Operators specific to binary or continuous algorithms are provided by Moo.GeneticAlgorithm.Binary and Moo.GeneticAlgorithm.Continuous modules respectively Use nextGeneration or nextSteadyState to create single step of the algorithm control the iterative process with loop loopWithLog or loopIO Write function to generate an initial population for random uniform initialization use getRandomGenomes or getRandomBinaryGenomes Library functions which need access to random number generator work in Rand monad You may use high-level wrapper runGA or runIO if you used loopIO which takes care of creating new random number generator and running the entire algorithm To solve constrained optimization problems modify initialization and selection operators see Moo.GeneticAlgorithm.Constraints To solve multi-objective optimization problems use NSGA-II algorithm see Moo.GeneticAlgorithm.Multiobjective How to choose encoding For problems with discrete search space binary or Gray encoding of the bit-string is usually used bit-string is represented as list of Bool values Bool To build binary genetic algorithm import Moo.GeneticAlgorithm.Binary For problems with continuous search space it is possible to use vector of real variables as genome Such genome is represented as list of Double or Float values Special crossover and mutation operators should be used To build continuous genetic algorithm import Moo.GeneticAlgorithm.Continuous Examples Minimizing Beale function import Moo.GeneticAlgorithm.Continuous beale Double Double beale popsize elitesize tolerance e-6 selection tournamentSelect Minimizing popsize elitesize crossover unimodalCrossoverRP mutation gaussianMutate step nextGeneration Minimizing beale selection elitesize crossover mutation stop IfObjective values minimum values tolerance initialize getRandomGenomes popsize main do population runGA initialize loop stop step print head bestFirst Minimizing population See examples folder of the source distribution for more examples",
          "hierarchy": "Moo GeneticAlgorithm",
          "module": "Moo.GeneticAlgorithm",
          "name": "GeneticAlgorithm",
          "package": "moo",
          "partial": "Genetic Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/moo/docs/Moo-GeneticAlgorithm.html#"
      }
    }
  ]
]