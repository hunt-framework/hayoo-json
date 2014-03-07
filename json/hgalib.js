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
        "word": "hgalib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An Artificial Neural Network\n",
          "module": "Chromosome.ANN",
          "name": "ANN",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#ANN",
          "type": "type"
        },
        "index": {
          "description": "An Artificial Neural Network",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "ANN",
          "package": "hgalib",
          "partial": "ANN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:ANN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A layer of nodes in an ANN\n",
          "module": "Chromosome.ANN",
          "name": "Layer",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#Layer",
          "type": "type"
        },
        "index": {
          "description": "layer of nodes in an ANN",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "Layer",
          "package": "hgalib",
          "partial": "Layer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A node in an ANN. The head of the list is the bias weight. The tail is the weights for the previous layer\n",
          "module": "Chromosome.ANN",
          "name": "Node",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#Node",
          "type": "type"
        },
        "index": {
          "description": "node in an ANN The head of the list is the bias weight The tail is the weights for the previous layer",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "Node",
          "package": "hgalib",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Crossover between two ANN's by averaging weights\n",
          "module": "Chromosome.ANN",
          "name": "averageCross",
          "package": "hgalib",
          "signature": "ANN -\u003e ANN -\u003e GAState c p (ANN, ANN)",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#averageCross",
          "type": "function"
        },
        "index": {
          "description": "Crossover between two ANN by averaging weights",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "averageCross",
          "normalized": "ANN-\u003eANN-\u003eGAState a b(ANN,ANN)",
          "package": "hgalib",
          "partial": "Cross",
          "signature": "ANN-\u003eANN-\u003eGAState c p(ANN,ANN)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:averageCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Computes the mean square error for a list of examples\n The examples are a list of tuples of (input, output)\n",
          "module": "Chromosome.ANN",
          "name": "averageMSE",
          "package": "hgalib",
          "signature": "ANN -\u003e [([Double], [Double])] -\u003e Double",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#averageMSE",
          "type": "function"
        },
        "index": {
          "description": "Computes the mean square error for list of examples The examples are list of tuples of input output",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "averageMSE",
          "normalized": "ANN-\u003e[([Double],[Double])]-\u003eDouble",
          "package": "hgalib",
          "partial": "MSE",
          "signature": "ANN-\u003e[([Double],[Double])]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:averageMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the number of examples correct within the tolerance. The examples are a list of tuples of (input, output)\n",
          "module": "Chromosome.ANN",
          "name": "correctExamples",
          "package": "hgalib",
          "signature": "[([Double], [Double])] -\u003e Double -\u003e ANN -\u003e Double",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#correctExamples",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of examples correct within the tolerance The examples are list of tuples of input output",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "correctExamples",
          "normalized": "[([Double],[Double])]-\u003eDouble-\u003eANN-\u003eDouble",
          "package": "hgalib",
          "partial": "Examples",
          "signature": "[([Double],[Double])]-\u003eDouble-\u003eANN-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:correctExamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Evaluates an ANN with a given input\n",
          "module": "Chromosome.ANN",
          "name": "eval",
          "package": "hgalib",
          "signature": "[Double] -\u003e ANN -\u003e [Double]",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluates an ANN with given input",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "eval",
          "normalized": "[Double]-\u003eANN-\u003e[Double]",
          "package": "hgalib",
          "signature": "[Double]-\u003eANN-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Computes the fitness based on the mean square error for a list of examples\n The examples are a list of tuples of (input, output)\n",
          "module": "Chromosome.ANN",
          "name": "fitnessMSE",
          "package": "hgalib",
          "signature": "[([Double], [Double])] -\u003e ANN -\u003e Double",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#fitnessMSE",
          "type": "function"
        },
        "index": {
          "description": "Computes the fitness based on the mean square error for list of examples The examples are list of tuples of input output",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "fitnessMSE",
          "normalized": "[([Double],[Double])]-\u003eANN-\u003eDouble",
          "package": "hgalib",
          "partial": "MSE",
          "signature": "[([Double],[Double])]-\u003eANN-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:fitnessMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutates an ANN by randomly settings weights to +/- range\n",
          "module": "Chromosome.ANN",
          "name": "mutateRandomize",
          "package": "hgalib",
          "signature": "Double -\u003e Double -\u003e ANN -\u003e GAState ANN p ANN",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#mutateRandomize",
          "type": "function"
        },
        "index": {
          "description": "Mutates an ANN by randomly settings weights to range",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "mutateRandomize",
          "normalized": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN a ANN",
          "package": "hgalib",
          "partial": "Randomize",
          "signature": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN p ANN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:mutateRandomize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutates an ANN by randomly shifting weights by +/- range\n",
          "module": "Chromosome.ANN",
          "name": "mutateShift",
          "package": "hgalib",
          "signature": "Double -\u003e Double -\u003e ANN -\u003e GAState ANN p ANN",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#mutateShift",
          "type": "function"
        },
        "index": {
          "description": "Mutates an ANN by randomly shifting weights by range",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "mutateShift",
          "normalized": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN a ANN",
          "package": "hgalib",
          "partial": "Shift",
          "signature": "Double-\u003eDouble-\u003eANN-\u003eGAState ANN p ANN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:mutateShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates a random ANN with a given number of input nodes, a list of number of hidden nodes per layer, and the weight range\n",
          "module": "Chromosome.ANN",
          "name": "randomANN",
          "package": "hgalib",
          "signature": "Int -\u003e [Int] -\u003e Double -\u003e GAState c p ANN",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#randomANN",
          "type": "function"
        },
        "index": {
          "description": "Generates random ANN with given number of input nodes list of number of hidden nodes per layer and the weight range",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "randomANN",
          "normalized": "Int-\u003e[Int]-\u003eDouble-\u003eGAState a b ANN",
          "package": "hgalib",
          "partial": "ANN",
          "signature": "Int-\u003e[Int]-\u003eDouble-\u003eGAState c p ANN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:randomANN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Crossover between two ANN's by exchanging weights\n",
          "module": "Chromosome.ANN",
          "name": "uniformCross",
          "package": "hgalib",
          "signature": "ANN -\u003e ANN -\u003e GAState c p (ANN, ANN)",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-ANN.html#uniformCross",
          "type": "function"
        },
        "index": {
          "description": "Crossover between two ANN by exchanging weights",
          "hierarchy": "Chromosome ANN",
          "module": "Chromosome.ANN",
          "name": "uniformCross",
          "normalized": "ANN-\u003eANN-\u003eGAState a b(ANN,ANN)",
          "package": "hgalib",
          "partial": "Cross",
          "signature": "ANN-\u003eANN-\u003eGAState c p(ANN,ANN)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-ANN.html#v:uniformCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Converts a list of Bool's to it's integer representation\n",
          "module": "Chromosome.Bits",
          "name": "bits2int",
          "package": "hgalib",
          "signature": "[Bool] -\u003e Int",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#bits2int",
          "type": "function"
        },
        "index": {
          "description": "Converts list of Bool to it integer representation",
          "hierarchy": "Chromosome Bits",
          "module": "Chromosome.Bits",
          "name": "bits2int",
          "normalized": "[Bool]-\u003eInt",
          "package": "hgalib",
          "signature": "[Bool]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:bits2int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The config for a chromosome of a list of bits. User must defined fitness and mutate.\n",
          "module": "Chromosome.Bits",
          "name": "config",
          "package": "hgalib",
          "signature": "ChromosomeConfig [a] p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#config",
          "type": "function"
        },
        "index": {
          "description": "The config for chromosome of list of bits User must defined fitness and mutate",
          "hierarchy": "Chromosome Bits",
          "module": "Chromosome.Bits",
          "name": "config",
          "normalized": "ChromosomeConfig[a]b",
          "package": "hgalib",
          "signature": "ChromosomeConfig[a]p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Randomly flips fits with a specified probability\n",
          "module": "Chromosome.Bits",
          "name": "mutateBits",
          "package": "hgalib",
          "signature": "Double -\u003e [Bool] -\u003e GAState c p [Bool]",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#mutateBits",
          "type": "function"
        },
        "index": {
          "description": "Randomly flips fits with specified probability",
          "hierarchy": "Chromosome Bits",
          "module": "Chromosome.Bits",
          "name": "mutateBits",
          "normalized": "Double-\u003e[Bool]-\u003eGAState a b[Bool]",
          "package": "hgalib",
          "partial": "Bits",
          "signature": "Double-\u003e[Bool]-\u003eGAState c p[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:mutateBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Single point cross at a random location\n",
          "module": "Chromosome.Bits",
          "name": "pointCross",
          "package": "hgalib",
          "signature": "[a] -\u003e [a] -\u003e GAState c p ([a], [a])",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#pointCross",
          "type": "function"
        },
        "index": {
          "description": "Single point cross at random location",
          "hierarchy": "Chromosome Bits",
          "module": "Chromosome.Bits",
          "name": "pointCross",
          "normalized": "[a]-\u003e[a]-\u003eGAState b c([a],[a])",
          "package": "hgalib",
          "partial": "Cross",
          "signature": "[a]-\u003e[a]-\u003eGAState c p([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:pointCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates i random bits\n",
          "module": "Chromosome.Bits",
          "name": "randomBits",
          "package": "hgalib",
          "signature": "Int -\u003e GAState c p [Bool]",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-Bits.html#randomBits",
          "type": "function"
        },
        "index": {
          "description": "Generates random bits",
          "hierarchy": "Chromosome Bits",
          "module": "Chromosome.Bits",
          "name": "randomBits",
          "normalized": "Int-\u003eGAState a b[Bool]",
          "package": "hgalib",
          "partial": "Bits",
          "signature": "Int-\u003eGAState c p[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-Bits.html#v:randomBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Chromosome.GP",
          "name": "Node",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Chromosome GP",
          "module": "Chromosome.GP",
          "name": "Node",
          "package": "hgalib",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Chromosome.GP",
          "name": "Op",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Chromosome GP",
          "module": "Chromosome.GP",
          "name": "Op",
          "package": "hgalib",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Statefully evaluates a given GP\n",
          "module": "Chromosome.GP",
          "name": "eval",
          "package": "hgalib",
          "signature": "Node a s -\u003e State s a",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Statefully evaluates given GP",
          "hierarchy": "Chromosome GP",
          "module": "Chromosome.GP",
          "name": "eval",
          "normalized": "Node a b-\u003eState b a",
          "package": "hgalib",
          "signature": "Node a s-\u003eState s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Calculates fitness based on the mean square error across a list of examples\n The examples are a list of tuples of (inputs state, correct output)\n",
          "module": "Chromosome.GP",
          "name": "mseFitness",
          "package": "hgalib",
          "signature": "[(s, a)] -\u003e Node a s -\u003e a",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Chromosome-GP.html#mseFitness",
          "type": "function"
        },
        "index": {
          "description": "Calculates fitness based on the mean square error across list of examples The examples are list of tuples of inputs state correct output",
          "hierarchy": "Chromosome GP",
          "module": "Chromosome.GP",
          "name": "mseFitness",
          "normalized": "[(a,b)]-\u003eNode b a-\u003eb",
          "package": "hgalib",
          "partial": "Fitness",
          "signature": "[(s,a)]-\u003eNode a s-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Chromosome-GP.html#v:mseFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GA",
          "name": "ChromosomeConfig",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#ChromosomeConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "GA",
          "module": "GA",
          "name": "ChromosomeConfig",
          "package": "hgalib",
          "partial": "Chromosome Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:ChromosomeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GA",
          "name": "Config",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "GA",
          "module": "GA",
          "name": "Config",
          "package": "hgalib",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GA",
          "name": "GAState",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#GAState",
          "type": "type"
        },
        "index": {
          "hierarchy": "GA",
          "module": "GA",
          "name": "GAState",
          "package": "hgalib",
          "partial": "GAState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:GAState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GA",
          "name": "PopulationConfig",
          "package": "hgalib",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#PopulationConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "GA",
          "module": "GA",
          "name": "PopulationConfig",
          "package": "hgalib",
          "partial": "Population Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#t:PopulationConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Wrapper function which returns the best chromosome of a population\n",
          "module": "GA",
          "name": "bestChromosome",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p c",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#bestChromosome",
          "type": "function"
        },
        "index": {
          "description": "Wrapper function which returns the best chromosome of population",
          "hierarchy": "GA",
          "module": "GA",
          "name": "bestChromosome",
          "normalized": "a-\u003eGAState b a b",
          "package": "hgalib",
          "partial": "Chromosome",
          "signature": "p-\u003eGAState c p c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:bestChromosome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A wrapper function for use in newPopulation for applying crossover to the population\n",
          "module": "GA",
          "name": "crossM",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#crossM",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for use in newPopulation for applying crossover to the population",
          "hierarchy": "GA",
          "module": "GA",
          "name": "crossM",
          "normalized": "a-\u003eGAState b a a",
          "package": "hgalib",
          "signature": "p-\u003eGAState c p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:crossM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "defaultConfig acts as a blank slate for genetic algorithms.\n cConfig, pConfig, gen, and maxFitness or maxGeneration must be defined\n",
          "module": "GA",
          "name": "defaultConfig",
          "package": "hgalib",
          "signature": "Config c p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "defaultConfig acts as blank slate for genetic algorithms cConfig pConfig gen and maxFitness or maxGeneration must be defined",
          "hierarchy": "GA",
          "module": "GA",
          "name": "defaultConfig",
          "package": "hgalib",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates a random number which updating the random number generator for the config\n",
          "module": "GA",
          "name": "gaRand",
          "package": "hgalib",
          "signature": "(a, a) -\u003e GAState c p a",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#gaRand",
          "type": "function"
        },
        "index": {
          "description": "Generates random number which updating the random number generator for the config",
          "hierarchy": "GA",
          "module": "GA",
          "name": "gaRand",
          "normalized": "(a,a)-\u003eGAState b c a",
          "package": "hgalib",
          "partial": "Rand",
          "signature": "(a,a)-\u003eGAState c p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:gaRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns true if the given population satisfies the termination condition for the GA config\n",
          "module": "GA",
          "name": "isDone",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p Bool",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#isDone",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the given population satisfies the termination condition for the GA config",
          "hierarchy": "GA",
          "module": "GA",
          "name": "isDone",
          "normalized": "a-\u003eGAState b a Bool",
          "package": "hgalib",
          "partial": "Done",
          "signature": "p-\u003eGAState c p Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:isDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A wrapper function for use in newPopulation for mutating the population\n",
          "module": "GA",
          "name": "mutateM",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#mutateM",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for use in newPopulation for mutating the population",
          "hierarchy": "GA",
          "module": "GA",
          "name": "mutateM",
          "normalized": "a-\u003eGAState b a a",
          "package": "hgalib",
          "signature": "p-\u003eGAState c p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:mutateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A wrapper function for use in newPopulation for roulette selection\n",
          "module": "GA",
          "name": "rouletteM",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#rouletteM",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for use in newPopulation for roulette selection",
          "hierarchy": "GA",
          "module": "GA",
          "name": "rouletteM",
          "normalized": "a-\u003eGAState b a a",
          "package": "hgalib",
          "signature": "p-\u003eGAState c p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:rouletteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Runs the specified GA config until the termination condition is reached\n",
          "module": "GA",
          "name": "run",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#run",
          "type": "function"
        },
        "index": {
          "description": "Runs the specified GA config until the termination condition is reached",
          "hierarchy": "GA",
          "module": "GA",
          "name": "run",
          "normalized": "a-\u003eGAState b a a",
          "package": "hgalib",
          "signature": "p-\u003eGAState c p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A wrapper function for use in newPopulation for tournament selection\n",
          "module": "GA",
          "name": "tournamentM",
          "package": "hgalib",
          "signature": "p -\u003e GAState c p p",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/GA.html#tournamentM",
          "type": "function"
        },
        "index": {
          "description": "wrapper function for use in newPopulation for tournament selection",
          "hierarchy": "GA",
          "module": "GA",
          "name": "tournamentM",
          "normalized": "a-\u003eGAState b a a",
          "package": "hgalib",
          "signature": "p-\u003eGAState c p p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/GA.html#v:tournamentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Population config for arrays\n",
          "module": "Population.Array",
          "name": "config",
          "package": "hgalib",
          "signature": "PopulationConfig c (PArray c)",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Population-Array.html#config",
          "type": "function"
        },
        "index": {
          "description": "Population config for arrays",
          "hierarchy": "Population Array",
          "module": "Population.Array",
          "name": "config",
          "package": "hgalib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Population-Array.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Config for use of lists as the population model. Lists are deprecated in favor of arrays.\n",
          "module": "Population.List",
          "name": "config",
          "package": "hgalib",
          "signature": "PopulationConfig c [c]",
          "source": "http://hackage.haskell.org/package/hgalib/docs/src/Population-List.html#config",
          "type": "function"
        },
        "index": {
          "description": "Config for use of lists as the population model Lists are deprecated in favor of arrays",
          "hierarchy": "Population List",
          "module": "Population.List",
          "name": "config",
          "normalized": "PopulationConfig a[a]",
          "package": "hgalib",
          "signature": "PopulationConfig c[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgalib/docs/Population-List.html#v:config"
      }
    }
  ]
]