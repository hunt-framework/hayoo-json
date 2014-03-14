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
        "word": "HSGEP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExpression related code.  These are helpers to turn linear sequences\n into trees.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Expression",
          "name": "Expression",
          "package": "HSGEP",
          "source": "src/GEP-Expression.html",
          "type": "module"
        },
        "index": {
          "description": "Expression related code These are helpers to turn linear sequences into trees Author mjsottile@computer.org",
          "hierarchy": "GEP Expression",
          "module": "GEP.Expression",
          "name": "Expression",
          "package": "HSGEP",
          "partial": "Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Expression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Expression",
          "name": "levelize",
          "package": "HSGEP",
          "signature": "(Symbol -\u003e Int) -\u003e Sequence -\u003e Int -\u003e [Sequence]",
          "source": "src/GEP-Expression.html#levelize",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Expression",
          "module": "GEP.Expression",
          "name": "levelize",
          "normalized": "(Symbol-\u003eInt)-\u003eSequence-\u003eInt-\u003e[Sequence]",
          "package": "HSGEP",
          "signature": "(Symbol-\u003eInt)-\u003eSequence-\u003eInt-\u003e[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Expression.html#v:levelize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains code related to fitness evaluation.  The\n   main purpose of the code is to both evaluate fitnesses of individuals\n   and to sort individuals by fitness.  These are intended to all be\n   higher order functions that assume nothing about the purpose of the\n   individuals or the types of inputs being used for fitness testing.\n   The only assumption made currently is that the outputs for test cases\n   are floating point numbers.  That likely should change for general\n   purpose usage.\n\u003c/p\u003e\u003cp\u003emjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Fitness",
          "name": "Fitness",
          "package": "HSGEP",
          "source": "src/GEP-Fitness.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains code related to fitness evaluation The main purpose of the code is to both evaluate fitnesses of individuals and to sort individuals by fitness These are intended to all be higher order functions that assume nothing about the purpose of the individuals or the types of inputs being used for fitness testing The only assumption made currently is that the outputs for test cases are floating point numbers That likely should change for general purpose usage mjsottile@computer.org",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "Fitness",
          "package": "HSGEP",
          "partial": "Fitness",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFitness function type\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "FitnessFunction",
          "package": "HSGEP",
          "source": "src/GEP-Fitness.html#FitnessFunction",
          "type": "type"
        },
        "index": {
          "description": "Fitness function type",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "FitnessFunction",
          "package": "HSGEP",
          "partial": "Fitness Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#t:FitnessFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA test case maps a list of terminals to float values\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "TestCase",
          "package": "HSGEP",
          "source": "src/GEP-Fitness.html#TestCase",
          "type": "type"
        },
        "index": {
          "description": "test case maps list of terminals to float values",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "TestCase",
          "package": "HSGEP",
          "partial": "Test Case",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#t:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA test dictionary is a set of test cases\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "TestDict",
          "package": "HSGEP",
          "source": "src/GEP-Fitness.html#TestDict",
          "type": "type"
        },
        "index": {
          "description": "test dictionary is set of test cases",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "TestDict",
          "package": "HSGEP",
          "partial": "Test Dict",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#t:TestDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of outputs expected for each entry in the test dictionary\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "TestOuts",
          "package": "HSGEP",
          "source": "src/GEP-Fitness.html#TestOuts",
          "type": "type"
        },
        "index": {
          "description": "The set of outputs expected for each entry in the test dictionary",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "TestOuts",
          "package": "HSGEP",
          "partial": "Test Outs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#t:TestOuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of fitness values and a corresponding list of individuals,\n  return a list of tuples pairing the fitness value with the individuals for\n  only those individuals that have a valid fitness value.  This means those\n  that are +/- infinity or NaN are removed.\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "fitness_filter",
          "package": "HSGEP",
          "signature": "[Double]-\u003e [Chromosome]-\u003e [(Double, Chromosome)]",
          "type": "function"
        },
        "index": {
          "description": "Given list of fitness values and corresponding list of individuals return list of tuples pairing the fitness value with the individuals for only those individuals that have valid fitness value This means those that are infinity or NaN are removed",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "fitness_filter",
          "normalized": "[Double]-\u003e[Chromosome]-\u003e[(Double,Chromosome)]",
          "package": "HSGEP",
          "signature": "[Double]-\u003e[Chromosome]-\u003e[(Double,Chromosome)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#v:fitness_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFitness evaluator for generic individuals.  This needs to go away\n  and use a more general approach like evaluateFitness above.\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "fitness_tester",
          "package": "HSGEP",
          "signature": "a-\u003e FitnessFunction a b-\u003e TestDict b-\u003e TestOuts-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Fitness evaluator for generic individuals This needs to go away and use more general approach like evaluateFitness above",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "fitness_tester",
          "normalized": "a-\u003eFitnessFunction a b-\u003eTestDict b-\u003eTestOuts-\u003eDouble-\u003eDouble",
          "package": "HSGEP",
          "signature": "a-\u003eFitnessFunction a b-\u003eTestDict b-\u003eTestOuts-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#v:fitness_tester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a set of individuals with fitness values by their fitness\n\u003c/p\u003e",
          "module": "GEP.Fitness",
          "name": "sortByFitness",
          "package": "HSGEP",
          "signature": "[(Double, Chromosome)] -\u003e [(Double, Chromosome)]",
          "source": "src/GEP-Fitness.html#sortByFitness",
          "type": "function"
        },
        "index": {
          "description": "Sort set of individuals with fitness values by their fitness",
          "hierarchy": "GEP Fitness",
          "module": "GEP.Fitness",
          "name": "sortByFitness",
          "normalized": "[(Double,Chromosome)]-\u003e[(Double,Chromosome)]",
          "package": "HSGEP",
          "partial": "By Fitness",
          "signature": "[(Double,Chromosome)]-\u003e[(Double,Chromosome)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Fitness.html#v:sortByFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on the chromosomes of individuals.  The following assumptions\n  are made.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Symbols are numbered 1 through n for a chromosome of length n.\n\u003c/li\u003e\u003cli\u003e Genes are numbered 0 through m-1 for a chromosome with m genes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe functions provided in this module are purely functional.  See\n  \u003ca\u003eGEP.MonadicGeneOperations\u003c/a\u003e for code that invokes these from within the\n  \u003ca\u003eGEP.Rmonad\u003c/a\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.GeneOperations",
          "name": "GeneOperations",
          "package": "HSGEP",
          "source": "src/GEP-GeneOperations.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on the chromosomes of individuals The following assumptions are made Symbols are numbered through for chromosome of length Genes are numbered through m-1 for chromosome with genes The functions provided in this module are purely functional See GEP.MonadicGeneOperations for code that invokes these from within the GEP.Rmonad monad",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "GeneOperations",
          "package": "HSGEP",
          "partial": "Gene Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-point crossover\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "crossover1pt",
          "package": "HSGEP",
          "signature": "(Chromosome, Chromosome)-\u003e Int-\u003e (Chromosome, Chromosome)",
          "type": "function"
        },
        "index": {
          "description": "One-point crossover",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "crossover1pt",
          "normalized": "(Chromosome,Chromosome)-\u003eInt-\u003e(Chromosome,Chromosome)",
          "package": "HSGEP",
          "signature": "(Chromosome,Chromosome)-\u003eInt-\u003e(Chromosome,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:crossover1pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-point crossover\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "crossover2pt",
          "package": "HSGEP",
          "signature": "(Chromosome, Chromosome)-\u003e Int-\u003e Int-\u003e (Chromosome, Chromosome)",
          "type": "function"
        },
        "index": {
          "description": "Two-point crossover",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "crossover2pt",
          "normalized": "(Chromosome,Chromosome)-\u003eInt-\u003eInt-\u003e(Chromosome,Chromosome)",
          "package": "HSGEP",
          "signature": "(Chromosome,Chromosome)-\u003eInt-\u003eInt-\u003e(Chromosome,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:crossover2pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGene crossover\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "crossoverGene",
          "package": "HSGEP",
          "signature": "(Sequence, Sequence)-\u003e Int-\u003e Int-\u003e (Sequence, Sequence)",
          "type": "function"
        },
        "index": {
          "description": "Gene crossover",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "crossoverGene",
          "normalized": "(Sequence,Sequence)-\u003eInt-\u003eInt-\u003e(Sequence,Sequence)",
          "package": "HSGEP",
          "partial": "Gene",
          "signature": "(Sequence,Sequence)-\u003eInt-\u003eInt-\u003e(Sequence,Sequence)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:crossoverGene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGene transposition.\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "transposeGene",
          "package": "HSGEP",
          "signature": "Chromosome-\u003e Genome-\u003e Int-\u003e Chromosome",
          "type": "function"
        },
        "index": {
          "description": "Gene transposition",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "transposeGene",
          "normalized": "Chromosome-\u003eGenome-\u003eInt-\u003eChromosome",
          "package": "HSGEP",
          "partial": "Gene",
          "signature": "Chromosome-\u003eGenome-\u003eInt-\u003eChromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:transposeGene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion sequence transposition.\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "transposeIS",
          "package": "HSGEP",
          "signature": "Chromosome-\u003e Genome-\u003e Int-\u003e Int-\u003e Int-\u003e Int-\u003e Chromosome",
          "type": "function"
        },
        "index": {
          "description": "Insertion sequence transposition",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "transposeIS",
          "normalized": "Chromosome-\u003eGenome-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eChromosome",
          "package": "HSGEP",
          "partial": "IS",
          "signature": "Chromosome-\u003eGenome-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eChromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:transposeIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot insertion sequence transposition.\n\u003c/p\u003e",
          "module": "GEP.GeneOperations",
          "name": "transposeRIS",
          "package": "HSGEP",
          "signature": "Sequence-\u003e Genome-\u003e Int-\u003e Int-\u003e Int-\u003e Sequence",
          "type": "function"
        },
        "index": {
          "description": "Root insertion sequence transposition",
          "hierarchy": "GEP GeneOperations",
          "module": "GEP.GeneOperations",
          "name": "transposeRIS",
          "normalized": "Sequence-\u003eGenome-\u003eInt-\u003eInt-\u003eInt-\u003eSequence",
          "package": "HSGEP",
          "partial": "RIS",
          "signature": "Sequence-\u003eGenome-\u003eInt-\u003eInt-\u003eInt-\u003eSequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GeneOperations.html#v:transposeRIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.GenericDriver",
          "name": "GenericDriver",
          "package": "HSGEP",
          "source": "src/GEP-GenericDriver.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GEP GenericDriver",
          "module": "GEP.GenericDriver",
          "name": "GenericDriver",
          "package": "HSGEP",
          "partial": "Generic Driver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GenericDriver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric driver to be called from specific GEP program instances in their\n  main routine.\n\u003c/p\u003e",
          "module": "GEP.GenericDriver",
          "name": "gepDriver",
          "package": "HSGEP",
          "signature": "SimParams-\u003e Rates-\u003e Genome-\u003e TestDict b-\u003e TestOuts-\u003e FitnessFunction a b-\u003e ExpressionFunction a-\u003e IO (Double, [Chromosome])",
          "type": "function"
        },
        "index": {
          "description": "Generic driver to be called from specific GEP program instances in their main routine",
          "hierarchy": "GEP GenericDriver",
          "module": "GEP.GenericDriver",
          "name": "gepDriver",
          "normalized": "SimParams-\u003eRates-\u003eGenome-\u003eTestDict a-\u003eTestOuts-\u003eFitnessFunction b a-\u003eExpressionFunction b-\u003eIO(Double,[Chromosome])",
          "package": "HSGEP",
          "partial": "Driver",
          "signature": "SimParams-\u003eRates-\u003eGenome-\u003eTestDict b-\u003eTestOuts-\u003eFitnessFunction a b-\u003eExpressionFunction a-\u003eIO(Double,[Chromosome])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-GenericDriver.html#v:gepDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains wrappers around the purely functional gene operations\n   in \u003ca\u003eGEP.GeneOperations\u003c/a\u003e in order to string the random number generation\n   state through via the \u003ca\u003eGEP.Rmonad\u003c/a\u003e.  These helper functions are responsible\n   for sampling the random number generator to determine the parameters for\n   applying the genetic operators.\n\u003c/p\u003e\u003cp\u003eThe reasoning behind using a specialized Random monad instead of the\n   system generator provided by IO is that this allows independent\n   generators to be used should we support multiple threads of execution.\n   Parallel random number generation requires distinct generators, not a\n   shared one.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "MonadicGeneOperations",
          "package": "HSGEP",
          "source": "src/GEP-MonadicGeneOperations.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains wrappers around the purely functional gene operations in GEP.GeneOperations in order to string the random number generation state through via the GEP.Rmonad These helper functions are responsible for sampling the random number generator to determine the parameters for applying the genetic operators The reasoning behind using specialized Random monad instead of the system generator provided by IO is that this allows independent generators to be used should we support multiple threads of execution Parallel random number generation requires distinct generators not shared one Author mjsottile@computer.org",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "MonadicGeneOperations",
          "package": "HSGEP",
          "partial": "Monadic Gene Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGene transposition helper\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "geneTransposer",
          "package": "HSGEP",
          "signature": "Genome -\u003e Chromosome -\u003e GEPMonad Chromosome",
          "source": "src/GEP-MonadicGeneOperations.html#geneTransposer",
          "type": "function"
        },
        "index": {
          "description": "Gene transposition helper",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "geneTransposer",
          "normalized": "Genome-\u003eChromosome-\u003eGEPMonad Chromosome",
          "package": "HSGEP",
          "partial": "Transposer",
          "signature": "Genome-\u003eChromosome-\u003eGEPMonad Chromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:geneTransposer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIS Transposition helper\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "isTransposer",
          "package": "HSGEP",
          "signature": "Genome -\u003e SimParams -\u003e Chromosome -\u003e GEPMonad Chromosome",
          "source": "src/GEP-MonadicGeneOperations.html#isTransposer",
          "type": "function"
        },
        "index": {
          "description": "IS Transposition helper",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "isTransposer",
          "normalized": "Genome-\u003eSimParams-\u003eChromosome-\u003eGEPMonad Chromosome",
          "package": "HSGEP",
          "partial": "Transposer",
          "signature": "Genome-\u003eSimParams-\u003eChromosome-\u003eGEPMonad Chromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:isTransposer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRIS Transposition helper\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "risTransposer",
          "package": "HSGEP",
          "signature": "Genome -\u003e SimParams -\u003e Chromosome -\u003e GEPMonad Chromosome",
          "source": "src/GEP-MonadicGeneOperations.html#risTransposer",
          "type": "function"
        },
        "index": {
          "description": "RIS Transposition helper",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "risTransposer",
          "normalized": "Genome-\u003eSimParams-\u003eChromosome-\u003eGEPMonad Chromosome",
          "package": "HSGEP",
          "partial": "Transposer",
          "signature": "Genome-\u003eSimParams-\u003eChromosome-\u003eGEPMonad Chromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:risTransposer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-point crossover helper.  Takes a genome, a pair of individuals,\n  and selects the crossover point before generating the new pair of\n  resulting individuals after crossover.\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "x1PHelper",
          "package": "HSGEP",
          "signature": "Genome -\u003e (Chromosome, Chromosome) -\u003e GEPMonad (Chromosome, Chromosome)",
          "source": "src/GEP-MonadicGeneOperations.html#x1PHelper",
          "type": "function"
        },
        "index": {
          "description": "One-point crossover helper Takes genome pair of individuals and selects the crossover point before generating the new pair of resulting individuals after crossover",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "x1PHelper",
          "normalized": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "package": "HSGEP",
          "partial": "PHelper",
          "signature": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:x1PHelper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-point crossover helper.  Takes a genome, a pair of individuals,\n  and selects the crossover points before generating the new pair of\n  resulting individuals after crossover.\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "x2PHelper",
          "package": "HSGEP",
          "signature": "Genome -\u003e (Chromosome, Chromosome) -\u003e GEPMonad (Chromosome, Chromosome)",
          "source": "src/GEP-MonadicGeneOperations.html#x2PHelper",
          "type": "function"
        },
        "index": {
          "description": "Two-point crossover helper Takes genome pair of individuals and selects the crossover points before generating the new pair of resulting individuals after crossover",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "x2PHelper",
          "normalized": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "package": "HSGEP",
          "partial": "PHelper",
          "signature": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:x2PHelper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGene crossover helper.  Takes a genome, a pair of individuals, and\n  selects the crossover gene before generating the new pair of\n  individuals resulting after crossover.\n\u003c/p\u003e",
          "module": "GEP.MonadicGeneOperations",
          "name": "xGHelper",
          "package": "HSGEP",
          "signature": "Genome -\u003e (Chromosome, Chromosome) -\u003e GEPMonad (Chromosome, Chromosome)",
          "source": "src/GEP-MonadicGeneOperations.html#xGHelper",
          "type": "function"
        },
        "index": {
          "description": "Gene crossover helper Takes genome pair of individuals and selects the crossover gene before generating the new pair of individuals resulting after crossover",
          "hierarchy": "GEP MonadicGeneOperations",
          "module": "GEP.MonadicGeneOperations",
          "name": "xGHelper",
          "normalized": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "package": "HSGEP",
          "partial": "GHelper",
          "signature": "Genome-\u003e(Chromosome,Chromosome)-\u003eGEPMonad(Chromosome,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-MonadicGeneOperations.html#v:xGHelper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGEP parameters.  These are related to both population management,\n selection, and rates of genetic operators.  The rates are a set of\n probabilities of each operator being applied during each step of the\n selection and reproduction phase.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Params",
          "name": "Params",
          "package": "HSGEP",
          "source": "src/GEP-Params.html",
          "type": "module"
        },
        "index": {
          "description": "GEP parameters These are related to both population management selection and rates of genetic operators The rates are set of probabilities of each operator being applied during each step of the selection and reproduction phase Author mjsottile@computer.org",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "Params",
          "package": "HSGEP",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Rates structure is used to hold the probability of various events\n   occurring during the evolution of the GEP algorithm.  \n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "Rates",
          "package": "HSGEP",
          "source": "src/GEP-Params.html#Rates",
          "type": "data"
        },
        "index": {
          "description": "The Rates structure is used to hold the probability of various events occurring during the evolution of the GEP algorithm",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "Rates",
          "package": "HSGEP",
          "partial": "Rates",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#t:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SimParams structure reprents the parameters for a run of the GEP\n   algorithm.  This includes gross parameters unrelated to individuals\n   such as the population size, parameters related to selection, and\n   parameters related to specific genetic operators.\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "SimParams",
          "package": "HSGEP",
          "source": "src/GEP-Params.html#SimParams",
          "type": "data"
        },
        "index": {
          "description": "The SimParams structure reprents the parameters for run of the GEP algorithm This includes gross parameters unrelated to individuals such as the population size parameters related to selection and parameters related to specific genetic operators",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "SimParams",
          "package": "HSGEP",
          "partial": "Sim Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#t:SimParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Params",
          "name": "Rates",
          "package": "HSGEP",
          "signature": "Rates",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "Rates",
          "package": "HSGEP",
          "partial": "Rates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:Rates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Params",
          "name": "SimParams",
          "package": "HSGEP",
          "signature": "SimParams",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "SimParams",
          "package": "HSGEP",
          "partial": "Sim Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:SimParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFitness of the ideal individual\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "maxFitness",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Fitness of the ideal individual",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "maxFitness",
          "package": "HSGEP",
          "partial": "Fitness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:maxFitness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum length of an IS transpose seq.\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "maxISLen",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Maximum length of an IS transpose seq",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "maxISLen",
          "package": "HSGEP",
          "partial": "ISLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:maxISLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum length of an RIS transpose seq.\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "maxRISLen",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Maximum length of an RIS transpose seq",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "maxRISLen",
          "package": "HSGEP",
          "partial": "RISLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:maxRISLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of generations to run the\n   algorithm for\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "numGenerations",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Number of generations to run the algorithm for",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "numGenerations",
          "package": "HSGEP",
          "partial": "Generations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:numGenerations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of a 1pt recombination event\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "p1R",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of pt recombination event",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "p1R",
          "package": "HSGEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:p1R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of a 2pt recombination event\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "p2R",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of pt recombination event",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "p2R",
          "package": "HSGEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:p2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of a gene recombination event\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "pGR",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of gene recombination event",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "pGR",
          "package": "HSGEP",
          "partial": "GR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:pGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of an individual experiencing\n   gene transposition\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "pGT",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of an individual experiencing gene transposition",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "pGT",
          "package": "HSGEP",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:pGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of an individual experiencing\n   insertion sequence transposition\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "pIS",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of an individual experiencing insertion sequence transposition",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "pIS",
          "package": "HSGEP",
          "partial": "IS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:pIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of any single symbol being mutated\n   per individual\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "pMutate",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of any single symbol being mutated per individual",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "pMutate",
          "package": "HSGEP",
          "partial": "Mutate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:pMutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of an individual experiencing\n   root insertion sequence transposition\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "pRIS",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#Rates",
          "type": "function"
        },
        "index": {
          "description": "Probability of an individual experiencing root insertion sequence transposition",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "pRIS",
          "package": "HSGEP",
          "partial": "RIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:pRIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation size\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "popSize",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Population size",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "popSize",
          "package": "HSGEP",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:popSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponent for defining the roulette\n   wheel bin sizes\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "rouletteExponent",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Exponent for defining the roulette wheel bin sizes",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "rouletteExponent",
          "package": "HSGEP",
          "partial": "Exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:rouletteExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter m for fitness value\n   computation from the GEP paper.\n\u003c/p\u003e",
          "module": "GEP.Params",
          "name": "selectionRange",
          "package": "HSGEP",
          "signature": "Double",
          "source": "src/GEP-Params.html#SimParams",
          "type": "function"
        },
        "index": {
          "description": "Parameter for fitness value computation from the GEP paper",
          "hierarchy": "GEP Params",
          "module": "GEP.Params",
          "name": "selectionRange",
          "package": "HSGEP",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Params.html#v:selectionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandomized functions for GEP applications.  Attempting to\n    isolate all code that needs to be run under the Rmonad here.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Random",
          "name": "Random",
          "package": "HSGEP",
          "source": "src/GEP-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Randomized functions for GEP applications Attempting to isolate all code that needs to be run under the Rmonad here Author mjsottile@computer.org",
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "Random",
          "package": "HSGEP",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Random",
          "name": "mutate",
          "package": "HSGEP",
          "signature": "Genome -\u003e Rates -\u003e Chromosome -\u003e GEPMonad Chromosome",
          "source": "src/GEP-Random.html#mutate",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "mutate",
          "normalized": "Genome-\u003eRates-\u003eChromosome-\u003eGEPMonad Chromosome",
          "package": "HSGEP",
          "signature": "Genome-\u003eRates-\u003eChromosome-\u003eGEPMonad Chromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#v:mutate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new individual given a genome specification.\n\u003c/p\u003e",
          "module": "GEP.Random",
          "name": "newIndividual",
          "package": "HSGEP",
          "signature": "Genome-\u003e Int-\u003e GEPMonad Chromosome",
          "type": "function"
        },
        "index": {
          "description": "Generate new individual given genome specification",
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "newIndividual",
          "normalized": "Genome-\u003eInt-\u003eGEPMonad Chromosome",
          "package": "HSGEP",
          "partial": "Individual",
          "signature": "Genome-\u003eInt-\u003eGEPMonad Chromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#v:newIndividual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a population of fresh random individuals given a genome\n |specification.\n\u003c/p\u003e",
          "module": "GEP.Random",
          "name": "newPopulation",
          "package": "HSGEP",
          "signature": "Genome-\u003e Int-\u003e GEPMonad [Chromosome]",
          "type": "function"
        },
        "index": {
          "description": "Create population of fresh random individuals given genome specification",
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "newPopulation",
          "normalized": "Genome-\u003eInt-\u003eGEPMonad[Chromosome]",
          "package": "HSGEP",
          "partial": "Population",
          "signature": "Genome-\u003eInt-\u003eGEPMonad[Chromosome]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#v:newPopulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random symbol from the provided list.\n\u003c/p\u003e",
          "module": "GEP.Random",
          "name": "randomSymbol",
          "package": "HSGEP",
          "signature": "[a]-\u003e GEPMonad a",
          "type": "function"
        },
        "index": {
          "description": "Select random symbol from the provided list",
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "randomSymbol",
          "normalized": "[a]-\u003eGEPMonad a",
          "package": "HSGEP",
          "partial": "Symbol",
          "signature": "[a]-\u003eGEPMonad a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#v:randomSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a sequence of random symbols from the provided list.\n\u003c/p\u003e",
          "module": "GEP.Random",
          "name": "randomSymbolList",
          "package": "HSGEP",
          "signature": "[a]-\u003e Int-\u003e GEPMonad [a]",
          "type": "function"
        },
        "index": {
          "description": "Select sequence of random symbols from the provided list",
          "hierarchy": "GEP Random",
          "module": "GEP.Random",
          "name": "randomSymbolList",
          "normalized": "[a]-\u003eInt-\u003eGEPMonad[a]",
          "package": "HSGEP",
          "partial": "Symbol List",
          "signature": "[a]-\u003eInt-\u003eGEPMonad[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Random.html#v:randomSymbolList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad based on state for passing random number state around for GEP.\n  The choice of Mersenne.Pure64 was for performance, and the pure version\n  will play nicely with threading.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Rmonad",
          "name": "Rmonad",
          "package": "HSGEP",
          "source": "src/GEP-Rmonad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad based on state for passing random number state around for GEP The choice of Mersenne.Pure64 was for performance and the pure version will play nicely with threading Author mjsottile@computer.org",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "Rmonad",
          "package": "HSGEP",
          "partial": "Rmonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Rmonad",
          "name": "GEPMonad",
          "package": "HSGEP",
          "source": "src/GEP-Rmonad.html#GEPMonad",
          "type": "type"
        },
        "index": {
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "GEPMonad",
          "package": "HSGEP",
          "partial": "GEPMonad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#t:GEPMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument me!\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "generatePairs",
          "package": "HSGEP",
          "signature": "Int -\u003e Rand [(Int, Int)]",
          "source": "src/GEP-Rmonad.html#generatePairs",
          "type": "function"
        },
        "index": {
          "description": "Document me",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "generatePairs",
          "normalized": "Int-\u003eRand[(Int,Int)]",
          "package": "HSGEP",
          "partial": "Pairs",
          "signature": "Int-\u003eRand[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:generatePairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random number as a Double between 0.0 and the given upper\n   bound.\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "nextF",
          "package": "HSGEP",
          "signature": "Double-\u003e Rand Double",
          "type": "function"
        },
        "index": {
          "description": "Generate random number as Double between and the given upper bound",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextF",
          "normalized": "Double-\u003eRand Double",
          "package": "HSGEP",
          "signature": "Double-\u003eRand Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random integer between 1 and the upper bound (inclusive).\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "nextR",
          "package": "HSGEP",
          "signature": "Int-\u003e Rand Int",
          "type": "function"
        },
        "index": {
          "description": "Generate random integer between and the upper bound inclusive",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextR",
          "normalized": "Int-\u003eRand Int",
          "package": "HSGEP",
          "signature": "Int-\u003eRand Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random integer in the specified range that is NOT equal to\n   the integer provided.\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "nextRDifferent",
          "package": "HSGEP",
          "signature": "Int-\u003e Int-\u003e Rand Int",
          "type": "function"
        },
        "index": {
          "description": "Generate random integer in the specified range that is NOT equal to the integer provided",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextRDifferent",
          "normalized": "Int-\u003eInt-\u003eRand Int",
          "package": "HSGEP",
          "partial": "RDifferent",
          "signature": "Int-\u003eInt-\u003eRand Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextRDifferent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of random integers.\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "nextRList",
          "package": "HSGEP",
          "signature": "Int-\u003e Int-\u003e Rand [Int]",
          "type": "function"
        },
        "index": {
          "description": "Generate list of random integers",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextRList",
          "normalized": "Int-\u003eInt-\u003eRand[Int]",
          "package": "HSGEP",
          "partial": "RList",
          "signature": "Int-\u003eInt-\u003eRand[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextRList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Rmonad",
          "name": "nextRListPairs",
          "package": "HSGEP",
          "signature": "Int -\u003e Int -\u003e Rand [(Int, Int)]",
          "source": "src/GEP-Rmonad.html#nextRListPairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextRListPairs",
          "normalized": "Int-\u003eInt-\u003eRand[(Int,Int)]",
          "package": "HSGEP",
          "partial": "RList Pairs",
          "signature": "Int-\u003eInt-\u003eRand[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextRListPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of n random integers such that each entry occurs at most\n   once.  Each number in the list must be unique.\n\u003c/p\u003e",
          "module": "GEP.Rmonad",
          "name": "nextRListUnique",
          "package": "HSGEP",
          "signature": "Int -\u003e [Int] -\u003e Int -\u003e Rand [Int]",
          "source": "src/GEP-Rmonad.html#nextRListUnique",
          "type": "function"
        },
        "index": {
          "description": "Generate list of random integers such that each entry occurs at most once Each number in the list must be unique",
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "nextRListUnique",
          "normalized": "Int-\u003e[Int]-\u003eInt-\u003eRand[Int]",
          "package": "HSGEP",
          "partial": "RList Unique",
          "signature": "Int-\u003e[Int]-\u003eInt-\u003eRand[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:nextRListUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Rmonad",
          "name": "runRmonad",
          "package": "HSGEP",
          "signature": "Rand a -\u003e PureMT -\u003e (a, PureMT)",
          "source": "src/GEP-Rmonad.html#runRmonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Rmonad",
          "module": "GEP.Rmonad",
          "name": "runRmonad",
          "normalized": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "package": "HSGEP",
          "partial": "Rmonad",
          "signature": "Rand a-\u003ePureMT-\u003e(a,PureMT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Rmonad.html#v:runRmonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRoutines for selection after fitness evaluation.  Selection is the process\n of taking some input population P, a set of fitness values such that\n each p in P has a fitness score f(p,X) under some fitness test X, and\n selecting which members of P participate in the creation of the next\n population P'.\n\u003c/p\u003e\u003cp\u003eA common technique is roulette wheel selection.  In essence, this means that\n we create a roulette wheel with one slot per individual where the width of\n each slot is a function of the fitness of the individuals.  So, those\n individuals with very good fitness will have wide slots and a correspondingly\n high likelihood of selection, while poor fitness individuals will have tiny\n slots and a low probability of being selected.\n\u003c/p\u003e\u003cp\u003eFitness testing takes place outside this module.  This module is only\n concerned with the selection process (ie: generating the roulette wheel).\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Selection",
          "name": "Selection",
          "package": "HSGEP",
          "source": "src/GEP-Selection.html",
          "type": "module"
        },
        "index": {
          "description": "Routines for selection after fitness evaluation Selection is the process of taking some input population set of fitness values such that each in has fitness score under some fitness test and selecting which members of participate in the creation of the next population common technique is roulette wheel selection In essence this means that we create roulette wheel with one slot per individual where the width of each slot is function of the fitness of the individuals So those individuals with very good fitness will have wide slots and correspondingly high likelihood of selection while poor fitness individuals will have tiny slots and low probability of being selected Fitness testing takes place outside this module This module is only concerned with the selection process ie generating the roulette wheel Author mjsottile@computer.org",
          "hierarchy": "GEP Selection",
          "module": "GEP.Selection",
          "name": "Selection",
          "package": "HSGEP",
          "partial": "Selection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Selection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate n roulette weights with a generator exponent e.  A helper function\n  weight_function is used to generate the actual weights.  For example,\n  w = (k^e)^(-1) for k from 1 to n leads to a set of weights such that the\n  size of the slots decreases exponentially as fitness decreases.  When e=1,\n  this decrease is linear.  The list that is returned is the width of each slot\n  such that the total of the weights adds to 1.0.\n\u003c/p\u003e",
          "module": "GEP.Selection",
          "name": "generate_roulette_weights",
          "package": "HSGEP",
          "signature": "Double -\u003e Double -\u003e [Double]",
          "source": "src/GEP-Selection.html#generate_roulette_weights",
          "type": "function"
        },
        "index": {
          "description": "Generate roulette weights with generator exponent helper function weight function is used to generate the actual weights For example for from to leads to set of weights such that the size of the slots decreases exponentially as fitness decreases When this decrease is linear The list that is returned is the width of each slot such that the total of the weights adds to",
          "hierarchy": "GEP Selection",
          "module": "GEP.Selection",
          "name": "generate_roulette_weights",
          "normalized": "Double-\u003eDouble-\u003e[Double]",
          "package": "HSGEP",
          "signature": "Double-\u003eDouble-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Selection.html#v:generate_roulette_weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of pairs (f,i) where f is the fitness of the individual i,\n  return the pair representing the individual with the best fitness.\n  We may return nothing if an empty set is passed in to begin with, so\n  the return type is a Maybe pair.\n\u003c/p\u003e",
          "module": "GEP.Selection",
          "name": "getBest",
          "package": "HSGEP",
          "signature": "[(Double, Chromosome)]-\u003e Maybe (Double, Chromosome)",
          "type": "function"
        },
        "index": {
          "description": "Given set of pairs where is the fitness of the individual return the pair representing the individual with the best fitness We may return nothing if an empty set is passed in to begin with so the return type is Maybe pair",
          "hierarchy": "GEP Selection",
          "module": "GEP.Selection",
          "name": "getBest",
          "normalized": "[(Double,Chromosome)]-\u003eMaybe(Double,Chromosome)",
          "package": "HSGEP",
          "partial": "Best",
          "signature": "[(Double,Chromosome)]-\u003eMaybe(Double,Chromosome)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Selection.html#v:getBest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of roulette weights and a number of spins of the wheel, return\n  a list of indices corresponding to the winning slot for each spin.  This\n  is used to perform the actual selection after a set of roulette weights are\n  generated.\n\u003c/p\u003e",
          "module": "GEP.Selection",
          "name": "roulette",
          "package": "HSGEP",
          "signature": "[Double] -\u003e Int -\u003e GEPMonad [Int]",
          "source": "src/GEP-Selection.html#roulette",
          "type": "function"
        },
        "index": {
          "description": "Given set of roulette weights and number of spins of the wheel return list of indices corresponding to the winning slot for each spin This is used to perform the actual selection after set of roulette weights are generated",
          "hierarchy": "GEP Selection",
          "module": "GEP.Selection",
          "name": "roulette",
          "normalized": "[Double]-\u003eInt-\u003eGEPMonad[Int]",
          "package": "HSGEP",
          "signature": "[Double]-\u003eInt-\u003eGEPMonad[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Selection.html#v:roulette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of indices and a list of data elements, create a new list\n  of data elements composed of the elements listed in the index list.\n  The output list may contain duplicates.\n\u003c/p\u003e",
          "module": "GEP.Selection",
          "name": "selector",
          "package": "HSGEP",
          "signature": "[Int]-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Given list of indices and list of data elements create new list of data elements composed of the elements listed in the index list The output list may contain duplicates",
          "hierarchy": "GEP Selection",
          "module": "GEP.Selection",
          "name": "selector",
          "normalized": "[Int]-\u003e[a]-\u003e[a]",
          "package": "HSGEP",
          "signature": "[Int]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Selection.html#v:selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode representing a single step of the GEP algorithm resides here.\n\u003c/p\u003e\u003cp\u003esingle step of fitness evaluation, selection and reproduction to make\n a new population\n\u003c/p\u003e\u003cp\u003eprocess includes:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e expression of individuals\n\u003c/li\u003e\u003cli\u003e fitness evaluation\n\u003c/li\u003e\u003cli\u003e filtration to eliminate individuals yielding impossible\n       fitness values (infinite or NaN)\n\u003c/li\u003e\u003cli\u003e preservation of best individual\n\u003c/li\u003e\u003cli\u003e generation of roulette selection weights\n\u003c/li\u003e\u003cli\u003e roulette selection of individuals\n\u003c/li\u003e\u003cli\u003e perform mutation operator\n\u003c/li\u003e\u003cli\u003e IS transposition\n\u003c/li\u003e\u003cli\u003e RIS transposition\n\u003c/li\u003e\u003cli\u003e Gene transposition\n\u003c/li\u003e\u003cli\u003e 1Pt recombination\n\u003c/li\u003e\u003cli\u003e 2Pt recombination\n\u003c/li\u003e\u003cli\u003e Gene recombination\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.TimeStep",
          "name": "TimeStep",
          "package": "HSGEP",
          "source": "src/GEP-TimeStep.html",
          "type": "module"
        },
        "index": {
          "description": "Code representing single step of the GEP algorithm resides here single step of fitness evaluation selection and reproduction to make new population process includes expression of individuals fitness evaluation filtration to eliminate individuals yielding impossible fitness values infinite or NaN preservation of best individual generation of roulette selection weights roulette selection of individuals perform mutation operator IS transposition RIS transposition Gene transposition Pt recombination Pt recombination Gene recombination Author mjsottile@computer.org",
          "hierarchy": "GEP TimeStep",
          "module": "GEP.TimeStep",
          "name": "TimeStep",
          "package": "HSGEP",
          "partial": "Time Step",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-TimeStep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.TimeStep",
          "name": "multiStep",
          "package": "HSGEP",
          "signature": "[Chromosome]-\u003e Genome-\u003e SimParams-\u003e Rates-\u003e ExpressionFunction a-\u003e FitnessFunction a b-\u003e TestDict b-\u003e TestOuts-\u003e Int-\u003e Double-\u003e GEPMonad (Double, [Chromosome])",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP TimeStep",
          "module": "GEP.TimeStep",
          "name": "multiStep",
          "normalized": "[Chromosome]-\u003eGenome-\u003eSimParams-\u003eRates-\u003eExpressionFunction a-\u003eFitnessFunction a b-\u003eTestDict b-\u003eTestOuts-\u003eInt-\u003eDouble-\u003eGEPMonad(Double,[Chromosome])",
          "package": "HSGEP",
          "partial": "Step",
          "signature": "[Chromosome]-\u003eGenome-\u003eSimParams-\u003eRates-\u003eExpressionFunction a-\u003eFitnessFunction a b-\u003eTestDict b-\u003eTestOuts-\u003eInt-\u003eDouble-\u003eGEPMonad(Double,[Chromosome])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-TimeStep.html#v:multiStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the types used for implementing GEP problems\n   and operations.  A few functions are also provided for convenience\n   here for performing common operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Types",
          "name": "Types",
          "package": "HSGEP",
          "source": "src/GEP-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the types used for implementing GEP problems and operations few functions are also provided for convenience here for performing common operations",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Types",
          "package": "HSGEP",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chromosome is a list of symbols.  We avoided using a list of genes to\n   maintain the view of a chromosome as nothing more than a flattened,\n   linear sequence of genes.\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "Chromosome",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#Chromosome",
          "type": "type"
        },
        "index": {
          "description": "chromosome is list of symbols We avoided using list of genes to maintain the view of chromosome as nothing more than flattened linear sequence of genes",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Chromosome",
          "package": "HSGEP",
          "partial": "Chromosome",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:Chromosome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to express an individual into a list of ET structures\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "ExpressionFunction",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#ExpressionFunction",
          "type": "type"
        },
        "index": {
          "description": "Function to express an individual into list of ET structures",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "ExpressionFunction",
          "package": "HSGEP",
          "partial": "Expression Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:ExpressionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA gene in a chromosome is a list of symbols\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "Gene",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#Gene",
          "type": "type"
        },
        "index": {
          "description": "gene in chromosome is list of symbols",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Gene",
          "package": "HSGEP",
          "partial": "Gene",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:Gene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a genome.  The genome contains all necessary\n   parameters to interpret a chromosome.  These include the alphabet (split\n   between terminal and nonterminal characters), connective characters for\n   multi-gene chromosomes, the maximum arity of any nonterminal, the length\n   of the head of a gene, and the number of genes per chromosome.\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "Genome",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#Genome",
          "type": "data"
        },
        "index": {
          "description": "Data type representing genome The genome contains all necessary parameters to interpret chromosome These include the alphabet split between terminal and nonterminal characters connective characters for multi-gene chromosomes the maximum arity of any nonterminal the length of the head of gene and the number of genes per chromosome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Genome",
          "package": "HSGEP",
          "partial": "Genome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:Genome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of symbols not neccessaryly a gene or chromosome. Used in gene\n   operations.\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "Sequence",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#Sequence",
          "type": "type"
        },
        "index": {
          "description": "sequence of symbols not neccessaryly gene or chromosome Used in gene operations",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Sequence",
          "package": "HSGEP",
          "partial": "Sequence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol table used for fitness tests.  We assume that there is exactly\n   one pair per symbol.  If there are symbols missing, fitness testing\n   may fail (the library does not have facilities yet to allow for\n   default values).  If a symbol occurs multiple times in the symbol\n   table, no guarantee is provided for which value will be chosen.\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "SymTable",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#SymTable",
          "type": "type"
        },
        "index": {
          "description": "Symbol table used for fitness tests We assume that there is exactly one pair per symbol If there are symbols missing fitness testing may fail the library does not have facilities yet to allow for default values If symbol occurs multiple times in the symbol table no guarantee is provided for which value will be chosen",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "SymTable",
          "package": "HSGEP",
          "partial": "Sym Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:SymTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol in a chromosome\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "Symbol",
          "package": "HSGEP",
          "source": "src/GEP-Types.html#Symbol",
          "type": "type"
        },
        "index": {
          "description": "symbol in chromosome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Symbol",
          "package": "HSGEP",
          "partial": "Symbol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Types",
          "name": "Genome",
          "package": "HSGEP",
          "signature": "Genome",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "Genome",
          "package": "HSGEP",
          "partial": "Genome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:Genome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a genome, provide the list of all symbols possible in a chromosome.\n   This is just nonterminals ++ terminals.\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "allsymbols",
          "package": "HSGEP",
          "signature": "Genome-\u003e [Symbol]",
          "type": "function"
        },
        "index": {
          "description": "Given genome provide the list of all symbols possible in chromosome This is just nonterminals terminals",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "allsymbols",
          "normalized": "Genome-\u003e[Symbol]",
          "package": "HSGEP",
          "signature": "Genome-\u003e[Symbol]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:allsymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFracture a chromosome into a set of genes\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "chromToGenes",
          "package": "HSGEP",
          "signature": "Chromosome-\u003e Int-\u003e [Gene]",
          "type": "function"
        },
        "index": {
          "description": "Fracture chromosome into set of genes",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "chromToGenes",
          "normalized": "Chromosome-\u003eInt-\u003e[Gene]",
          "package": "HSGEP",
          "partial": "To Genes",
          "signature": "Chromosome-\u003eInt-\u003e[Gene]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:chromToGenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbol connecting genes in a chromosome\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "geneConnector",
          "package": "HSGEP",
          "signature": "Symbol",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Symbol connecting genes in chromosome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "geneConnector",
          "package": "HSGEP",
          "partial": "Connector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:geneConnector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn length of a gene (tail + head) for a given genome\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "geneLength",
          "package": "HSGEP",
          "signature": "Genome-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Return length of gene tail head for given genome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "geneLength",
          "normalized": "Genome-\u003eInt",
          "package": "HSGEP",
          "partial": "Length",
          "signature": "Genome-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:geneLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssemble a chromosome from a set of genes\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "genesToChrom",
          "package": "HSGEP",
          "signature": "[Gene]-\u003e Chromosome",
          "type": "function"
        },
        "index": {
          "description": "Assemble chromosome from set of genes",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "genesToChrom",
          "normalized": "[Gene]-\u003eChromosome",
          "package": "HSGEP",
          "partial": "To Chrom",
          "signature": "[Gene]-\u003eChromosome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:genesToChrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of gene head sequence\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "headLength",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Length of gene head sequence",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "headLength",
          "package": "HSGEP",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:headLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a symbol is a nonterminal\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "isNonterminal",
          "package": "HSGEP",
          "signature": "Symbol-\u003e Genome-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test if symbol is nonterminal",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "isNonterminal",
          "normalized": "Symbol-\u003eGenome-\u003eBool",
          "package": "HSGEP",
          "partial": "Nonterminal",
          "signature": "Symbol-\u003eGenome-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:isNonterminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHighest arity nonterminal function\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "maxArity",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Highest arity nonterminal function",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "maxArity",
          "package": "HSGEP",
          "partial": "Arity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:maxArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of nonterminal symbols\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "nonterminals",
          "package": "HSGEP",
          "signature": "[Symbol]",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Set of nonterminal symbols",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "nonterminals",
          "normalized": "[Symbol]",
          "package": "HSGEP",
          "signature": "[Symbol]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:nonterminals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of genes per chromosome\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "numGenes",
          "package": "HSGEP",
          "signature": "Int",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Number of genes per chromosome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "numGenes",
          "package": "HSGEP",
          "partial": "Genes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:numGenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the tail of a gene for a given genome\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "tailLength",
          "package": "HSGEP",
          "signature": "Genome-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Return the length of the tail of gene for given genome",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "tailLength",
          "normalized": "Genome-\u003eInt",
          "package": "HSGEP",
          "partial": "Length",
          "signature": "Genome-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:tailLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of terminal symbols\n\u003c/p\u003e",
          "module": "GEP.Types",
          "name": "terminals",
          "package": "HSGEP",
          "signature": "[Symbol]",
          "source": "src/GEP-Types.html#Genome",
          "type": "function"
        },
        "index": {
          "description": "Set of terminal symbols",
          "hierarchy": "GEP Types",
          "module": "GEP.Types",
          "name": "terminals",
          "normalized": "[Symbol]",
          "package": "HSGEP",
          "signature": "[Symbol]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Types.html#v:terminals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode to read configuration files.\n\u003c/p\u003e\u003cp\u003eAuthor: mjsottile@computer.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GEP.Util.ConfigurationReader",
          "name": "ConfigurationReader",
          "package": "HSGEP",
          "source": "src/GEP-Util-ConfigurationReader.html",
          "type": "module"
        },
        "index": {
          "description": "Code to read configuration files Author mjsottile@computer.org",
          "hierarchy": "GEP Util ConfigurationReader",
          "module": "GEP.Util.ConfigurationReader",
          "name": "ConfigurationReader",
          "package": "HSGEP",
          "partial": "Configuration Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Util-ConfigurationReader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GEP.Util.ConfigurationReader",
          "name": "readParameters",
          "package": "HSGEP",
          "signature": "String -\u003e IO (Rates, Genome, SimParams)",
          "source": "src/GEP-Util-ConfigurationReader.html#readParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "GEP Util ConfigurationReader",
          "module": "GEP.Util.ConfigurationReader",
          "name": "readParameters",
          "normalized": "String-\u003eIO(Rates,Genome,SimParams)",
          "package": "HSGEP",
          "partial": "Parameters",
          "signature": "String-\u003eIO(Rates,Genome,SimParams)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSGEP/docs/GEP-Util-ConfigurationReader.html#v:readParameters"
      }
    }
  ]
]