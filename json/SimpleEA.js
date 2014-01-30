[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilitify functions that makes it easier to write the genetic operators and\nfunctions for doing calculations on the EA data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "module",
        "fct-source": "src/AI-SimpleEA-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utilitify functions that makes it easier to write the genetic operators and functions for doing calculations on the EA data",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:avgFitnesses",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the average fitnesses for a list of generations.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
        "fct-source": "src/AI-SimpleEA-Utils.html#avgFitnesses",
        "fct-type": "function",
        "title": "avgFitnesses"
      },
      "index": {
        "description": "Returns the average fitnesses for list of generations",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "avgFitnesses",
        "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
        "package": "SimpleEA",
        "partial": "Fitnesses",
        "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:elite",
      "description": {
        "fct-descr": "\u003cp\u003etakes a list of (genome,fitness) pairs and returns a list of genomes sorted\n by fitness (descending)\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[(a, Fitness)] -\u003e [a]",
        "fct-source": "src/AI-SimpleEA-Utils.html#elite",
        "fct-type": "function",
        "title": "elite"
      },
      "index": {
        "description": "takes list of genome fitness pairs and returns list of genomes sorted by fitness descending",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "elite",
        "normalized": "[(a,Fitness)]-\u003e[a]",
        "package": "SimpleEA",
        "partial": "",
        "signature": "[(a,Fitness)]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:fitPropSelect",
      "description": {
        "fct-descr": "\u003cp\u003eFitness-proportionate selection: select a random item from a list of (item,\n score) where each item's chance of being selected is proportional to its\n score\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[(a, Fitness)] -\u003e Rand g a",
        "fct-source": "src/AI-SimpleEA-Utils.html#fitPropSelect",
        "fct-type": "function",
        "title": "fitPropSelect"
      },
      "index": {
        "description": "Fitness-proportionate selection select random item from list of item score where each item chance of being selected is proportional to its score",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "fitPropSelect",
        "normalized": "[(a,Fitness)]-\u003eRand b a",
        "package": "SimpleEA",
        "partial": "Prop Select",
        "signature": "[(a,Fitness)]-\u003eRand g a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:getPlottingData",
      "description": {
        "fct-descr": "\u003cp\u003etakes a list of generations and returns a string intended for plotting with\n gnuplot.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[[(Genome a, Fitness)]] -\u003e String",
        "fct-source": "src/AI-SimpleEA-Utils.html#getPlottingData",
        "fct-type": "function",
        "title": "getPlottingData"
      },
      "index": {
        "description": "takes list of generations and returns string intended for plotting with gnuplot",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "getPlottingData",
        "normalized": "[[(Genome a,Fitness)]]-\u003eString",
        "package": "SimpleEA",
        "partial": "Plotting Data",
        "signature": "[[(Genome a,Fitness)]]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:maxFitnesses",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the maximum fitness per generation for a list of generations.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
        "fct-source": "src/AI-SimpleEA-Utils.html#maxFitnesses",
        "fct-type": "function",
        "title": "maxFitnesses"
      },
      "index": {
        "description": "Returns the maximum fitness per generation for list of generations",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "maxFitnesses",
        "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
        "package": "SimpleEA",
        "partial": "Fitnesses",
        "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:minFitnesses",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the minimum fitness per generation for a list of generations.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[[(Genome a, Fitness)]] -\u003e [Fitness]",
        "fct-source": "src/AI-SimpleEA-Utils.html#minFitnesses",
        "fct-type": "function",
        "title": "minFitnesses"
      },
      "index": {
        "description": "Returns the minimum fitness per generation for list of generations",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "minFitnesses",
        "normalized": "[[(Genome a,Fitness)]]-\u003e[Fitness]",
        "package": "SimpleEA",
        "partial": "Fitnesses",
        "signature": "[[(Genome a,Fitness)]]-\u003e[Fitness]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:randomGenomes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of \u003ccode\u003elen\u003c/code\u003e random genomes who has length \u003ccode\u003egenomeLen\u003c/code\u003e made of\n elements in the range \u003ccode\u003e[from,to]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "Int -\u003e Int -\u003e a -\u003e a -\u003e Rand g [Genome a]",
        "fct-source": "src/AI-SimpleEA-Utils.html#randomGenomes",
        "fct-type": "function",
        "title": "randomGenomes"
      },
      "index": {
        "description": "Returns list of len random genomes who has length genomeLen made of elements in the range from to",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "randomGenomes",
        "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eRand b[Genome a]",
        "package": "SimpleEA",
        "partial": "Genomes",
        "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eRand g[Genome a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:rankScale",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of fitness values and returns rank scaled values. For a list of \u003cem\u003en\u003c/em\u003e values, this\n means that the best fitness is scaled to \u003cem\u003en\u003c/em\u003e, the second best to \u003cem\u003en-1\u003c/em\u003e, and so on.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[Fitness] -\u003e [Fitness]",
        "fct-source": "src/AI-SimpleEA-Utils.html#rankScale",
        "fct-type": "function",
        "title": "rankScale"
      },
      "index": {
        "description": "Takes list of fitness values and returns rank scaled values For list of values this means that the best fitness is scaled to the second best to n-1 and so on",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "rankScale",
        "normalized": "[Fitness]-\u003e[Fitness]",
        "package": "SimpleEA",
        "partial": "Scale",
        "signature": "[Fitness]-\u003e[Fitness]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:sigmaScale",
      "description": {
        "fct-descr": "\u003cp\u003eApplies sigma scaling to a list of fitness values. In sigma scaling, the\n standard deviation of the population fitness is used to scale the fitness\n scores.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[Fitness] -\u003e [Fitness]",
        "fct-source": "src/AI-SimpleEA-Utils.html#sigmaScale",
        "fct-type": "function",
        "title": "sigmaScale"
      },
      "index": {
        "description": "Applies sigma scaling to list of fitness values In sigma scaling the standard deviation of the population fitness is used to scale the fitness scores",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "sigmaScale",
        "normalized": "[Fitness]-\u003e[Fitness]",
        "package": "SimpleEA",
        "partial": "Scale",
        "signature": "[Fitness]-\u003e[Fitness]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:stdDeviations",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the standard deviation of the fitness values per generation fot a\n list of generations.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[[(Genome a, Fitness)]] -\u003e [Double]",
        "fct-source": "src/AI-SimpleEA-Utils.html#stdDeviations",
        "fct-type": "function",
        "title": "stdDeviations"
      },
      "index": {
        "description": "Returns the standard deviation of the fitness values per generation fot list of generations",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "stdDeviations",
        "normalized": "[[(Genome a,Fitness)]]-\u003e[Double]",
        "package": "SimpleEA",
        "partial": "Deviations",
        "signature": "[[(Genome a,Fitness)]]-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA-Utils.html#v:tournamentSelect",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms tournament selection amoing \u003ccode\u003esize\u003c/code\u003e individuals and returns the winner\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA.Utils",
        "fct-package": "SimpleEA",
        "fct-signature": "[(a, Fitness)] -\u003e Int -\u003e Rand PureMT a",
        "fct-source": "src/AI-SimpleEA-Utils.html#tournamentSelect",
        "fct-type": "function",
        "title": "tournamentSelect"
      },
      "index": {
        "description": "Performs tournament selection amoing size individuals and returns the winner",
        "hierarchy": "AI SimpleEA Utils",
        "module": "AI.SimpleEA.Utils",
        "name": "tournamentSelect",
        "normalized": "[(a,Fitness)]-\u003eInt-\u003eRand PureMT a",
        "package": "SimpleEA",
        "partial": "Select",
        "signature": "[(a,Fitness)]-\u003eInt-\u003eRand PureMT a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA framework for simple evolutionary algorithms. Provided with a function for\nevaluating a genome's fitness, a function for probabilistic selection among a\npool of genomes, and recombination and mutation operators, \u003ccode\u003e\u003ca\u003erunEA\u003c/a\u003e\u003c/code\u003e will run an\nEA that lazily produces an infinite list of generations.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUtils\u003c/a\u003e\u003c/code\u003e contains utilitify functions that makes it easier to write\nthe genetic operators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "module",
        "fct-source": "src/AI-SimpleEA.html",
        "fct-type": "module",
        "title": "SimpleEA"
      },
      "index": {
        "description": "framework for simple evolutionary algorithms Provided with function for evaluating genome fitness function for probabilistic selection among pool of genomes and recombination and mutation operators runEA will run an EA that lazily produces an infinite list of generations Utils contains utilitify functions that makes it easier to write the genetic operators",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "SimpleEA",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Simple EA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:Fitness",
      "description": {
        "fct-descr": "\u003cp\u003eAn individual's fitness is simply a number.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#Fitness",
        "fct-type": "type",
        "title": "Fitness"
      },
      "index": {
        "description": "An individual fitness is simply number",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "Fitness",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Fitness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:FitnessFunc",
      "description": {
        "fct-descr": "\u003cp\u003eA fitness functions assigns a fitness score to a genome. The rest of the\n individuals of that generation is also provided in case the fitness is\n in proportion to its neighbours.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#FitnessFunc",
        "fct-type": "type",
        "title": "FitnessFunc"
      },
      "index": {
        "description": "fitness functions assigns fitness score to genome The rest of the individuals of that generation is also provided in case the fitness is in proportion to its neighbours",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "FitnessFunc",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Fitness Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:Genome",
      "description": {
        "fct-descr": "\u003cp\u003eA genome is a list (e.g. a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#Genome",
        "fct-type": "type",
        "title": "Genome"
      },
      "index": {
        "description": "genome is list e.g String",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "Genome",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Genome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:MutationOp",
      "description": {
        "fct-descr": "\u003cp\u003eA mutation operator takes a genome and returns (a possibly altered) copy\n of it.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#MutationOp",
        "fct-type": "type",
        "title": "MutationOp"
      },
      "index": {
        "description": "mutation operator takes genome and returns possibly altered copy of it",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "MutationOp",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Mutation Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:RecombinationOp",
      "description": {
        "fct-descr": "\u003cp\u003eA recombination operator takes two \u003cem\u003eparent\u003c/em\u003e genomes and returns two\n \u003cem\u003echildren\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#RecombinationOp",
        "fct-type": "type",
        "title": "RecombinationOp"
      },
      "index": {
        "description": "recombination operator takes two parent genomes and returns two children",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "RecombinationOp",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Recombination Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#t:SelectionFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA selection function is responsible for selection. It takes pairs of\n genomes and their fitness and is responsible for returning one or more\n individuals.\n\u003c/p\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "type",
        "fct-source": "src/AI-SimpleEA.html#SelectionFunction",
        "fct-type": "type",
        "title": "SelectionFunction"
      },
      "index": {
        "description": "selection function is responsible for selection It takes pairs of genomes and their fitness and is responsible for returning one or more individuals",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "SelectionFunction",
        "normalized": "",
        "package": "SimpleEA",
        "partial": "Selection Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SimpleEA/docs/AI-SimpleEA.html#v:runEA",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the evolutionary algorithm with the given start population. This will\n produce an infinite list of generations and \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e should be\n used to decide how many generations should be computed. To run a specific\n number of generations, use \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e let generations = take 50 $ runEA myFF mySF myROp myMOp myStdGen\n\u003c/pre\u003e\u003cp\u003eTo run until a criterion is met, e.g. that an individual with a fitness of at\n least 19 is found, \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e can be used:\n\u003c/p\u003e\u003cpre\u003e let criterion   = any id . map (\\i -\u003e snd i \u003e= 19.0)\n let generations = takeWhile (not . criterion) $ runEA myFF mySF myROp myMOp myStdGen\n\u003c/pre\u003e",
        "fct-module": "AI.SimpleEA",
        "fct-package": "SimpleEA",
        "fct-signature": "[Genome a] -\u003e FitnessFunc a -\u003e SelectionFunction a -\u003e RecombinationOp a -\u003e MutationOp a -\u003e PureMT -\u003e [[(Genome a, Fitness)]]",
        "fct-source": "src/AI-SimpleEA.html#runEA",
        "fct-type": "function",
        "title": "runEA"
      },
      "index": {
        "description": "Runs the evolutionary algorithm with the given start population This will produce an infinite list of generations and take or takeWhile should be used to decide how many generations should be computed To run specific number of generations use take let generations take runEA myFF mySF myROp myMOp myStdGen To run until criterion is met e.g that an individual with fitness of at least is found takeWhile can be used let criterion any id map snd let generations takeWhile not criterion runEA myFF mySF myROp myMOp myStdGen",
        "hierarchy": "AI SimpleEA",
        "module": "AI.SimpleEA",
        "name": "runEA",
        "normalized": "[Genome a]-\u003eFitnessFunc a-\u003eSelectionFunction a-\u003eRecombinationOp a-\u003eMutationOp a-\u003ePureMT-\u003e[[(Genome a,Fitness)]]",
        "package": "SimpleEA",
        "partial": "EA",
        "signature": "[Genome a]-\u003eFitnessFunc a-\u003eSelectionFunction a-\u003eRecombinationOp a-\u003eMutationOp a-\u003ePureMT-\u003e[[(Genome a,Fitness)]]"
      }
    }
  }
]