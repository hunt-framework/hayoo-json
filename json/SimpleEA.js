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
        "word": "SimpleEA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilitify functions that makes it easier to write the genetic operators and\nfunctions for doing calculations on the EA data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "Utils",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilitify functions that makes it easier to write the genetic operators and functions for doing calculations on the EA data",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "Utils",
          "package": "SimpleEA",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the average fitnesses for a list of generations.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "avgFitnesses",
          "package": "SimpleEA",
          "signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
          "source": "src/AI-SimpleEA-Utils.html#avgFitnesses",
          "type": "function"
        },
        "index": {
          "description": "Returns the average fitnesses for list of generations",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "avgFitnesses",
          "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "package": "SimpleEA",
          "partial": "Fitnesses",
          "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:avgFitnesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etakes a list of (genome,fitness) pairs and returns a list of genomes sorted\n by fitness (descending)\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "elite",
          "package": "SimpleEA",
          "signature": "[(a, Fitness)] -\u003e [a]",
          "source": "src/AI-SimpleEA-Utils.html#elite",
          "type": "function"
        },
        "index": {
          "description": "takes list of genome fitness pairs and returns list of genomes sorted by fitness descending",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "elite",
          "normalized": "[(a,Fitness)]-\u003e[a]",
          "package": "SimpleEA",
          "signature": "[(a,Fitness)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:elite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFitness-proportionate selection: select a random item from a list of (item,\n score) where each item's chance of being selected is proportional to its\n score\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "fitPropSelect",
          "package": "SimpleEA",
          "signature": "[(a, Fitness)] -\u003e Rand g a",
          "source": "src/AI-SimpleEA-Utils.html#fitPropSelect",
          "type": "function"
        },
        "index": {
          "description": "Fitness-proportionate selection select random item from list of item score where each item chance of being selected is proportional to its score",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "fitPropSelect",
          "normalized": "[(a,Fitness)]-\u003eRand b a",
          "package": "SimpleEA",
          "partial": "Prop Select",
          "signature": "[(a,Fitness)]-\u003eRand g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:fitPropSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etakes a list of generations and returns a string intended for plotting with\n gnuplot.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "getPlottingData",
          "package": "SimpleEA",
          "signature": "[[(Genome a, Fitness)]] -\u003e String",
          "source": "src/AI-SimpleEA-Utils.html#getPlottingData",
          "type": "function"
        },
        "index": {
          "description": "takes list of generations and returns string intended for plotting with gnuplot",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "getPlottingData",
          "normalized": "[[(Genome a,Fitness)]]-\u003eString",
          "package": "SimpleEA",
          "partial": "Plotting Data",
          "signature": "[[(Genome a,Fitness)]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:getPlottingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the maximum fitness per generation for a list of generations.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "maxFitnesses",
          "package": "SimpleEA",
          "signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
          "source": "src/AI-SimpleEA-Utils.html#maxFitnesses",
          "type": "function"
        },
        "index": {
          "description": "Returns the maximum fitness per generation for list of generations",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "maxFitnesses",
          "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "package": "SimpleEA",
          "partial": "Fitnesses",
          "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:maxFitnesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum fitness per generation for a list of generations.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "minFitnesses",
          "package": "SimpleEA",
          "signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
          "source": "src/AI-SimpleEA-Utils.html#minFitnesses",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum fitness per generation for list of generations",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "minFitnesses",
          "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "package": "SimpleEA",
          "partial": "Fitnesses",
          "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:minFitnesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of \u003ccode\u003elen\u003c/code\u003e random genomes who has length \u003ccode\u003egenomeLen\u003c/code\u003e made of\n elements in the range \u003ccode\u003e[from,to]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "randomGenomes",
          "package": "SimpleEA",
          "signature": "Int -\u003e Int -\u003e a -\u003e a -\u003e Rand g [Genome a]",
          "source": "src/AI-SimpleEA-Utils.html#randomGenomes",
          "type": "function"
        },
        "index": {
          "description": "Returns list of len random genomes who has length genomeLen made of elements in the range from to",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "randomGenomes",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eRand b[Genome a]",
          "package": "SimpleEA",
          "partial": "Genomes",
          "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eRand g[Genome a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:randomGenomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of fitness values and returns rank scaled values. For a list of \u003cem\u003en\u003c/em\u003e values, this\n means that the best fitness is scaled to \u003cem\u003en\u003c/em\u003e, the second best to \u003cem\u003en-1\u003c/em\u003e, and so on.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "rankScale",
          "package": "SimpleEA",
          "signature": "[Fitness] -\u003e [Fitness]",
          "source": "src/AI-SimpleEA-Utils.html#rankScale",
          "type": "function"
        },
        "index": {
          "description": "Takes list of fitness values and returns rank scaled values For list of values this means that the best fitness is scaled to the second best to n-1 and so on",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "rankScale",
          "normalized": "[Fitness]-\u003e[Fitness]",
          "package": "SimpleEA",
          "partial": "Scale",
          "signature": "[Fitness]-\u003e[Fitness]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:rankScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies sigma scaling to a list of fitness values. In sigma scaling, the\n standard deviation of the population fitness is used to scale the fitness\n scores.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "sigmaScale",
          "package": "SimpleEA",
          "signature": "[Fitness] -\u003e [Fitness]",
          "source": "src/AI-SimpleEA-Utils.html#sigmaScale",
          "type": "function"
        },
        "index": {
          "description": "Applies sigma scaling to list of fitness values In sigma scaling the standard deviation of the population fitness is used to scale the fitness scores",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "sigmaScale",
          "normalized": "[Fitness]-\u003e[Fitness]",
          "package": "SimpleEA",
          "partial": "Scale",
          "signature": "[Fitness]-\u003e[Fitness]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:sigmaScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the standard deviation of the fitness values per generation fot a\n list of generations.\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "stdDeviations",
          "package": "SimpleEA",
          "signature": "[[(Genome a, Fitness)]] -\u003e [Double]",
          "source": "src/AI-SimpleEA-Utils.html#stdDeviations",
          "type": "function"
        },
        "index": {
          "description": "Returns the standard deviation of the fitness values per generation fot list of generations",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "stdDeviations",
          "normalized": "[[(Genome a,Fitness)]]-\u003e[Double]",
          "package": "SimpleEA",
          "partial": "Deviations",
          "signature": "[[(Genome a,Fitness)]]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:stdDeviations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms tournament selection amoing \u003ccode\u003esize\u003c/code\u003e individuals and returns the winner\n\u003c/p\u003e",
          "module": "AI.SimpleEA.Utils",
          "name": "tournamentSelect",
          "package": "SimpleEA",
          "signature": "[(a, Fitness)] -\u003e Int -\u003e Rand PureMT a",
          "source": "src/AI-SimpleEA-Utils.html#tournamentSelect",
          "type": "function"
        },
        "index": {
          "description": "Performs tournament selection amoing size individuals and returns the winner",
          "hierarchy": "AI SimpleEA Utils",
          "module": "AI.SimpleEA.Utils",
          "name": "tournamentSelect",
          "normalized": "[(a,Fitness)]-\u003eInt-\u003eRand PureMT a",
          "package": "SimpleEA",
          "partial": "Select",
          "signature": "[(a,Fitness)]-\u003eInt-\u003eRand PureMT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:tournamentSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA framework for simple evolutionary algorithms. Provided with a function for\nevaluating a genome's fitness, a function for probabilistic selection among a\npool of genomes, and recombination and mutation operators, \u003ccode\u003e\u003ca\u003erunEA\u003c/a\u003e\u003c/code\u003e will run an\nEA that lazily produces an infinite list of generations.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUtils\u003c/a\u003e\u003c/code\u003e contains utilitify functions that makes it easier to write\nthe genetic operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AI.SimpleEA",
          "name": "SimpleEA",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html",
          "type": "module"
        },
        "index": {
          "description": "framework for simple evolutionary algorithms Provided with function for evaluating genome fitness function for probabilistic selection among pool of genomes and recombination and mutation operators runEA will run an EA that lazily produces an infinite list of generations Utils contains utilitify functions that makes it easier to write the genetic operators",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "SimpleEA",
          "package": "SimpleEA",
          "partial": "Simple EA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual's fitness is simply a number.\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "Fitness",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#Fitness",
          "type": "type"
        },
        "index": {
          "description": "An individual fitness is simply number",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "Fitness",
          "package": "SimpleEA",
          "partial": "Fitness",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:Fitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fitness functions assigns a fitness score to a genome. The rest of the\n individuals of that generation is also provided in case the fitness is\n in proportion to its neighbours.\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "FitnessFunc",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#FitnessFunc",
          "type": "type"
        },
        "index": {
          "description": "fitness functions assigns fitness score to genome The rest of the individuals of that generation is also provided in case the fitness is in proportion to its neighbours",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "FitnessFunc",
          "package": "SimpleEA",
          "partial": "Fitness Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:FitnessFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA genome is a list (e.g. a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "Genome",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#Genome",
          "type": "type"
        },
        "index": {
          "description": "genome is list e.g String",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "Genome",
          "package": "SimpleEA",
          "partial": "Genome",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:Genome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutation operator takes a genome and returns (a possibly altered) copy\n of it.\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "MutationOp",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#MutationOp",
          "type": "type"
        },
        "index": {
          "description": "mutation operator takes genome and returns possibly altered copy of it",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "MutationOp",
          "package": "SimpleEA",
          "partial": "Mutation Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:MutationOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recombination operator takes two \u003cem\u003eparent\u003c/em\u003e genomes and returns two\n \u003cem\u003echildren\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "RecombinationOp",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#RecombinationOp",
          "type": "type"
        },
        "index": {
          "description": "recombination operator takes two parent genomes and returns two children",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "RecombinationOp",
          "package": "SimpleEA",
          "partial": "Recombination Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:RecombinationOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA selection function is responsible for selection. It takes pairs of\n genomes and their fitness and is responsible for returning one or more\n individuals.\n\u003c/p\u003e",
          "module": "AI.SimpleEA",
          "name": "SelectionFunction",
          "package": "SimpleEA",
          "source": "src/AI-SimpleEA.html#SelectionFunction",
          "type": "type"
        },
        "index": {
          "description": "selection function is responsible for selection It takes pairs of genomes and their fitness and is responsible for returning one or more individuals",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "SelectionFunction",
          "package": "SimpleEA",
          "partial": "Selection Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:SelectionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the evolutionary algorithm with the given start population. This will\n produce an infinite list of generations and \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e should be\n used to decide how many generations should be computed. To run a specific\n number of generations, use \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e let generations = take 50 $ runEA myFF mySF myROp myMOp myStdGen\n\u003c/pre\u003e\u003cp\u003eTo run until a criterion is met, e.g. that an individual with a fitness of at\n least 19 is found, \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e can be used:\n\u003c/p\u003e\u003cpre\u003e let criterion   = any id . map (\\i -\u003e snd i \u003e= 19.0)\n let generations = takeWhile (not . criterion) $ runEA myFF mySF myROp myMOp myStdGen\n\u003c/pre\u003e",
          "module": "AI.SimpleEA",
          "name": "runEA",
          "package": "SimpleEA",
          "signature": "[Genome a] -\u003e FitnessFunc a -\u003e SelectionFunction a -\u003e RecombinationOp a -\u003e MutationOp a -\u003e PureMT -\u003e [[(Genome a, Fitness)]]",
          "source": "src/AI-SimpleEA.html#runEA",
          "type": "function"
        },
        "index": {
          "description": "Runs the evolutionary algorithm with the given start population This will produce an infinite list of generations and take or takeWhile should be used to decide how many generations should be computed To run specific number of generations use take let generations take runEA myFF mySF myROp myMOp myStdGen To run until criterion is met e.g that an individual with fitness of at least is found takeWhile can be used let criterion any id map snd let generations takeWhile not criterion runEA myFF mySF myROp myMOp myStdGen",
          "hierarchy": "AI SimpleEA",
          "module": "AI.SimpleEA",
          "name": "runEA",
          "normalized": "[Genome a]-\u003eFitnessFunc a-\u003eSelectionFunction a-\u003eRecombinationOp a-\u003eMutationOp a-\u003ePureMT-\u003e[[(Genome a,Fitness)]]",
          "package": "SimpleEA",
          "partial": "EA",
          "signature": "[Genome a]-\u003eFitnessFunc a-\u003eSelectionFunction a-\u003eRecombinationOp a-\u003eMutationOp a-\u003ePureMT-\u003e[[(Genome a,Fitness)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#v:runEA"
      }
    }
  ]
]