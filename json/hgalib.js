[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:ANN",
      "description": {
        "fct-descr": "An Artificial Neural Network\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#ANN",
        "fct-type": "unknown",
        "title": "ANN"
      },
      "index": {
        "description": "An Artificial Neural Network",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "ANN",
        "normalized": "",
        "package": "hgalib",
        "partial": "ANN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:Layer",
      "description": {
        "fct-descr": "A layer of nodes in an ANN\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#Layer",
        "fct-type": "unknown",
        "title": "Layer"
      },
      "index": {
        "description": "layer of nodes in an ANN",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "Layer",
        "normalized": "",
        "package": "hgalib",
        "partial": "Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:Node",
      "description": {
        "fct-descr": "A node in an ANN. The head of the list is the bias weight. The tail is the weights for the previous layer\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#Node",
        "fct-type": "unknown",
        "title": "Node"
      },
      "index": {
        "description": "node in an ANN The head of the list is the bias weight The tail is the weights for the previous layer",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "Node",
        "normalized": "",
        "package": "hgalib",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:averageCross",
      "description": {
        "fct-descr": "Crossover between two ANN's by averaging weights\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "ANN -\u003e ANN -\u003e GAState c p (ANN, ANN)",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#averageCross",
        "fct-type": "unknown",
        "title": "averageCross"
      },
      "index": {
        "description": "Crossover between two ANN by averaging weights",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "averageCross",
        "normalized": "ANN-\u003eANN-\u003eGAState a b(ANN,ANN)",
        "package": "hgalib",
        "partial": "Cross",
        "signature": "ANN-\u003eANN-\u003eGAState c p(ANN,ANN)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:averageMSE",
      "description": {
        "fct-descr": "Computes the mean square error for a list of examples\n The examples are a list of tuples of (input, output)\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "ANN -\u003e [([Double], [Double])] -\u003e Double",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#averageMSE",
        "fct-type": "unknown",
        "title": "averageMSE"
      },
      "index": {
        "description": "Computes the mean square error for list of examples The examples are list of tuples of input output",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "averageMSE",
        "normalized": "ANN-\u003e[([Double],[Double])]-\u003eDouble",
        "package": "hgalib",
        "partial": "MSE",
        "signature": "ANN-\u003e[([Double],[Double])]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:correctExamples",
      "description": {
        "fct-descr": "Returns the number of examples correct within the tolerance. The examples are a list of tuples of (input, output)\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "[([Double], [Double])] -\u003e Double -\u003e ANN -\u003e Double",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#correctExamples",
        "fct-type": "unknown",
        "title": "correctExamples"
      },
      "index": {
        "description": "Returns the number of examples correct within the tolerance The examples are list of tuples of input output",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "correctExamples",
        "normalized": "[([Double],[Double])]-\u003eDouble-\u003eANN-\u003eDouble",
        "package": "hgalib",
        "partial": "Examples",
        "signature": "[([Double],[Double])]-\u003eDouble-\u003eANN-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:eval",
      "description": {
        "fct-descr": "Evaluates an ANN with a given input\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "[Double] -\u003e ANN -\u003e [Double]",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#eval",
        "fct-type": "unknown",
        "title": "eval"
      },
      "index": {
        "description": "Evaluates an ANN with given input",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "eval",
        "normalized": "[Double]-\u003eANN-\u003e[Double]",
        "package": "hgalib",
        "partial": "",
        "signature": "[Double]-\u003eANN-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:fitnessMSE",
      "description": {
        "fct-descr": "Computes the fitness based on the mean square error for a list of examples\n The examples are a list of tuples of (input, output)\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "[([Double], [Double])] -\u003e ANN -\u003e Double",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#fitnessMSE",
        "fct-type": "unknown",
        "title": "fitnessMSE"
      },
      "index": {
        "description": "Computes the fitness based on the mean square error for list of examples The examples are list of tuples of input output",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "fitnessMSE",
        "normalized": "[([Double],[Double])]-\u003eANN-\u003eDouble",
        "package": "hgalib",
        "partial": "MSE",
        "signature": "[([Double],[Double])]-\u003eANN-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:mutateRandomize",
      "description": {
        "fct-descr": "Mutates an ANN by randomly settings weights to +/- range\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "Double -\u003e Double -\u003e ANN -\u003e GAState ANN p ANN",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#mutateRandomize",
        "fct-type": "unknown",
        "title": "mutateRandomize"
      },
      "index": {
        "description": "Mutates an ANN by randomly settings weights to range",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "mutateRandomize",
        "normalized": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN a ANN",
        "package": "hgalib",
        "partial": "Randomize",
        "signature": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN p ANN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:mutateShift",
      "description": {
        "fct-descr": "Mutates an ANN by randomly shifting weights by +/- range\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "Double -\u003e Double -\u003e ANN -\u003e GAState ANN p ANN",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#mutateShift",
        "fct-type": "unknown",
        "title": "mutateShift"
      },
      "index": {
        "description": "Mutates an ANN by randomly shifting weights by range",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "mutateShift",
        "normalized": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN a ANN",
        "package": "hgalib",
        "partial": "Shift",
        "signature": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN p ANN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:randomANN",
      "description": {
        "fct-descr": "Generates a random ANN with a given number of input nodes, a list of number of hidden nodes per layer, and the weight range\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "Int -\u003e [Int] -\u003e Double -\u003e GAState c p ANN",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#randomANN",
        "fct-type": "unknown",
        "title": "randomANN"
      },
      "index": {
        "description": "Generates random ANN with given number of input nodes list of number of hidden nodes per layer and the weight range",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "randomANN",
        "normalized": "Int-\u003e[Int]-\u003eDouble-\u003eGAState a b ANN",
        "package": "hgalib",
        "partial": "ANN",
        "signature": "Int-\u003e[Int]-\u003eDouble-\u003eGAState c p ANN"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:uniformCross",
      "description": {
        "fct-descr": "Crossover between two ANN's by exchanging weights\n",
        "fct-module": "Chromosome.ANN",
        "fct-package": "hgalib",
        "fct-signature": "ANN -\u003e ANN -\u003e GAState c p (ANN, ANN)",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#uniformCross",
        "fct-type": "unknown",
        "title": "uniformCross"
      },
      "index": {
        "description": "Crossover between two ANN by exchanging weights",
        "hierarchy": "Chromosome ANN",
        "module": "Chromosome.ANN",
        "name": "uniformCross",
        "normalized": "ANN-\u003eANN-\u003eGAState a b(ANN,ANN)",
        "package": "hgalib",
        "partial": "Cross",
        "signature": "ANN-\u003eANN-\u003eGAState c p(ANN,ANN)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:bits2int",
      "description": {
        "fct-descr": "Converts a list of Bool's to it's integer representation\n",
        "fct-module": "Chromosome.Bits",
        "fct-package": "hgalib",
        "fct-signature": "[Bool] -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#bits2int",
        "fct-type": "unknown",
        "title": "bits2int"
      },
      "index": {
        "description": "Converts list of Bool to it integer representation",
        "hierarchy": "Chromosome Bits",
        "module": "Chromosome.Bits",
        "name": "bits2int",
        "normalized": "[Bool]-\u003eInt",
        "package": "hgalib",
        "partial": "",
        "signature": "[Bool]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:config",
      "description": {
        "fct-descr": "The config for a chromosome of a list of bits. User must defined fitness and mutate.\n",
        "fct-module": "Chromosome.Bits",
        "fct-package": "hgalib",
        "fct-signature": "ChromosomeConfig [a] p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#config",
        "fct-type": "unknown",
        "title": "config"
      },
      "index": {
        "description": "The config for chromosome of list of bits User must defined fitness and mutate",
        "hierarchy": "Chromosome Bits",
        "module": "Chromosome.Bits",
        "name": "config",
        "normalized": "ChromosomeConfig[a]b",
        "package": "hgalib",
        "partial": "",
        "signature": "ChromosomeConfig[a]p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:mutateBits",
      "description": {
        "fct-descr": "Randomly flips fits with a specified probability\n",
        "fct-module": "Chromosome.Bits",
        "fct-package": "hgalib",
        "fct-signature": "Double -\u003e [Bool] -\u003e GAState c p [Bool]",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#mutateBits",
        "fct-type": "unknown",
        "title": "mutateBits"
      },
      "index": {
        "description": "Randomly flips fits with specified probability",
        "hierarchy": "Chromosome Bits",
        "module": "Chromosome.Bits",
        "name": "mutateBits",
        "normalized": "Double-\u003e[Bool]-\u003eGAState a b[Bool]",
        "package": "hgalib",
        "partial": "Bits",
        "signature": "Double-\u003e[Bool]-\u003eGAState c p[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:pointCross",
      "description": {
        "fct-descr": "Single point cross at a random location\n",
        "fct-module": "Chromosome.Bits",
        "fct-package": "hgalib",
        "fct-signature": "[a] -\u003e [a] -\u003e GAState c p ([a], [a])",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#pointCross",
        "fct-type": "unknown",
        "title": "pointCross"
      },
      "index": {
        "description": "Single point cross at random location",
        "hierarchy": "Chromosome Bits",
        "module": "Chromosome.Bits",
        "name": "pointCross",
        "normalized": "[a]-\u003e[a]-\u003eGAState b c([a],[a])",
        "package": "hgalib",
        "partial": "Cross",
        "signature": "[a]-\u003e[a]-\u003eGAState c p([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:randomBits",
      "description": {
        "fct-descr": "Generates i random bits\n",
        "fct-module": "Chromosome.Bits",
        "fct-package": "hgalib",
        "fct-signature": "Int -\u003e GAState c p [Bool]",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#randomBits",
        "fct-type": "unknown",
        "title": "randomBits"
      },
      "index": {
        "description": "Generates random bits",
        "hierarchy": "Chromosome Bits",
        "module": "Chromosome.Bits",
        "name": "randomBits",
        "normalized": "Int-\u003eGAState a b[Bool]",
        "package": "hgalib",
        "partial": "Bits",
        "signature": "Int-\u003eGAState c p[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#t:Node",
      "description": {
        "fct-module": "Chromosome.GP",
        "fct-package": "hgalib",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#Node",
        "fct-type": "unknown",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Chromosome GP",
        "module": "Chromosome.GP",
        "name": "Node",
        "normalized": "",
        "package": "hgalib",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#t:Op",
      "description": {
        "fct-module": "Chromosome.GP",
        "fct-package": "hgalib",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#Op",
        "fct-type": "unknown",
        "title": "Op"
      },
      "index": {
        "description": "",
        "hierarchy": "Chromosome GP",
        "module": "Chromosome.GP",
        "name": "Op",
        "normalized": "",
        "package": "hgalib",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#v:eval",
      "description": {
        "fct-descr": "Statefully evaluates a given GP\n",
        "fct-module": "Chromosome.GP",
        "fct-package": "hgalib",
        "fct-signature": "Node a s -\u003e State s a",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#eval",
        "fct-type": "unknown",
        "title": "eval"
      },
      "index": {
        "description": "Statefully evaluates given GP",
        "hierarchy": "Chromosome GP",
        "module": "Chromosome.GP",
        "name": "eval",
        "normalized": "Node a b-\u003eState b a",
        "package": "hgalib",
        "partial": "",
        "signature": "Node a s-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#v:mseFitness",
      "description": {
        "fct-descr": "Calculates fitness based on the mean square error across a list of examples\n The examples are a list of tuples of (inputs state, correct output)\n",
        "fct-module": "Chromosome.GP",
        "fct-package": "hgalib",
        "fct-signature": "[(s, a)] -\u003e Node a s -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#mseFitness",
        "fct-type": "unknown",
        "title": "mseFitness"
      },
      "index": {
        "description": "Calculates fitness based on the mean square error across list of examples The examples are list of tuples of inputs state correct output",
        "hierarchy": "Chromosome GP",
        "module": "Chromosome.GP",
        "name": "mseFitness",
        "normalized": "[(a,b)]-\u003eNode b a-\u003eb",
        "package": "hgalib",
        "partial": "Fitness",
        "signature": "[(s,a)]-\u003eNode a s-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:ChromosomeConfig",
      "description": {
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#ChromosomeConfig",
        "fct-type": "unknown",
        "title": "ChromosomeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "GA",
        "module": "GA",
        "name": "ChromosomeConfig",
        "normalized": "",
        "package": "hgalib",
        "partial": "Chromosome Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:Config",
      "description": {
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#Config",
        "fct-type": "unknown",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "GA",
        "module": "GA",
        "name": "Config",
        "normalized": "",
        "package": "hgalib",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:GAState",
      "description": {
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#GAState",
        "fct-type": "unknown",
        "title": "GAState"
      },
      "index": {
        "description": "",
        "hierarchy": "GA",
        "module": "GA",
        "name": "GAState",
        "normalized": "",
        "package": "hgalib",
        "partial": "GAState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:PopulationConfig",
      "description": {
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#PopulationConfig",
        "fct-type": "unknown",
        "title": "PopulationConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "GA",
        "module": "GA",
        "name": "PopulationConfig",
        "normalized": "",
        "package": "hgalib",
        "partial": "Population Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:bestChromosome",
      "description": {
        "fct-descr": "Wrapper function which returns the best chromosome of a population\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p c",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#bestChromosome",
        "fct-type": "unknown",
        "title": "bestChromosome"
      },
      "index": {
        "description": "Wrapper function which returns the best chromosome of population",
        "hierarchy": "GA",
        "module": "GA",
        "name": "bestChromosome",
        "normalized": "a-\u003eGAState b a b",
        "package": "hgalib",
        "partial": "Chromosome",
        "signature": "p-\u003eGAState c p c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:crossM",
      "description": {
        "fct-descr": "A wrapper function for use in newPopulation for applying crossover to the population\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#crossM",
        "fct-type": "unknown",
        "title": "crossM"
      },
      "index": {
        "description": "wrapper function for use in newPopulation for applying crossover to the population",
        "hierarchy": "GA",
        "module": "GA",
        "name": "crossM",
        "normalized": "a-\u003eGAState b a a",
        "package": "hgalib",
        "partial": "",
        "signature": "p-\u003eGAState c p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:defaultConfig",
      "description": {
        "fct-descr": "defaultConfig acts as a blank slate for genetic algorithms.\n cConfig, pConfig, gen, and maxFitness or maxGeneration must be defined\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "Config c p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#defaultConfig",
        "fct-type": "unknown",
        "title": "defaultConfig"
      },
      "index": {
        "description": "defaultConfig acts as blank slate for genetic algorithms cConfig pConfig gen and maxFitness or maxGeneration must be defined",
        "hierarchy": "GA",
        "module": "GA",
        "name": "defaultConfig",
        "normalized": "",
        "package": "hgalib",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:gaRand",
      "description": {
        "fct-descr": "Generates a random number which updating the random number generator for the config\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "(a, a) -\u003e GAState c p a",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#gaRand",
        "fct-type": "unknown",
        "title": "gaRand"
      },
      "index": {
        "description": "Generates random number which updating the random number generator for the config",
        "hierarchy": "GA",
        "module": "GA",
        "name": "gaRand",
        "normalized": "(a,a)-\u003eGAState b c a",
        "package": "hgalib",
        "partial": "Rand",
        "signature": "(a,a)-\u003eGAState c p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:isDone",
      "description": {
        "fct-descr": "Returns true if the given population satisfies the termination condition for the GA config\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p Bool",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#isDone",
        "fct-type": "unknown",
        "title": "isDone"
      },
      "index": {
        "description": "Returns true if the given population satisfies the termination condition for the GA config",
        "hierarchy": "GA",
        "module": "GA",
        "name": "isDone",
        "normalized": "a-\u003eGAState b a Bool",
        "package": "hgalib",
        "partial": "Done",
        "signature": "p-\u003eGAState c p Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:mutateM",
      "description": {
        "fct-descr": "A wrapper function for use in newPopulation for mutating the population\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#mutateM",
        "fct-type": "unknown",
        "title": "mutateM"
      },
      "index": {
        "description": "wrapper function for use in newPopulation for mutating the population",
        "hierarchy": "GA",
        "module": "GA",
        "name": "mutateM",
        "normalized": "a-\u003eGAState b a a",
        "package": "hgalib",
        "partial": "",
        "signature": "p-\u003eGAState c p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:rouletteM",
      "description": {
        "fct-descr": "A wrapper function for use in newPopulation for roulette selection\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#rouletteM",
        "fct-type": "unknown",
        "title": "rouletteM"
      },
      "index": {
        "description": "wrapper function for use in newPopulation for roulette selection",
        "hierarchy": "GA",
        "module": "GA",
        "name": "rouletteM",
        "normalized": "a-\u003eGAState b a a",
        "package": "hgalib",
        "partial": "",
        "signature": "p-\u003eGAState c p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:run",
      "description": {
        "fct-descr": "Runs the specified GA config until the termination condition is reached\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#run",
        "fct-type": "unknown",
        "title": "run"
      },
      "index": {
        "description": "Runs the specified GA config until the termination condition is reached",
        "hierarchy": "GA",
        "module": "GA",
        "name": "run",
        "normalized": "a-\u003eGAState b a a",
        "package": "hgalib",
        "partial": "",
        "signature": "p-\u003eGAState c p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:tournamentM",
      "description": {
        "fct-descr": "A wrapper function for use in newPopulation for tournament selection\n",
        "fct-module": "GA",
        "fct-package": "hgalib",
        "fct-signature": "p -\u003e GAState c p p",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#tournamentM",
        "fct-type": "unknown",
        "title": "tournamentM"
      },
      "index": {
        "description": "wrapper function for use in newPopulation for tournament selection",
        "hierarchy": "GA",
        "module": "GA",
        "name": "tournamentM",
        "normalized": "a-\u003eGAState b a a",
        "package": "hgalib",
        "partial": "",
        "signature": "p-\u003eGAState c p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Population-Array.html#v:config",
      "description": {
        "fct-descr": "Population config for arrays\n",
        "fct-module": "Population.Array",
        "fct-package": "hgalib",
        "fct-signature": "PopulationConfig c (PArray c)",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Population-Array.html#config",
        "fct-type": "unknown",
        "title": "config"
      },
      "index": {
        "description": "Population config for arrays",
        "hierarchy": "Population Array",
        "module": "Population.Array",
        "name": "config",
        "normalized": "",
        "package": "hgalib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgalib/docs/Population-List.html#v:config",
      "description": {
        "fct-descr": "Config for use of lists as the population model. Lists are deprecated in favor of arrays.\n",
        "fct-module": "Population.List",
        "fct-package": "hgalib",
        "fct-signature": "PopulationConfig c [c]",
        "fct-source": "http://hackage.haskell.org/package/hgalib/docs/src/Population-List.html#config",
        "fct-type": "unknown",
        "title": "config"
      },
      "index": {
        "description": "Config for use of lists as the population model Lists are deprecated in favor of arrays",
        "hierarchy": "Population List",
        "module": "Population.List",
        "name": "config",
        "normalized": "PopulationConfig a[a]",
        "package": "hgalib",
        "partial": "",
        "signature": "PopulationConfig c[c]"
      }
    }
  }
]