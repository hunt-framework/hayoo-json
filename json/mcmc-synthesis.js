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
        "word": "mcmc-synthesis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Distribution",
          "name": "Distribution",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Distribution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "Distribution",
          "package": "mcmc-synthesis",
          "partial": "Distribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a discrete probability distribution.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "Distr",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Distribution.html#Distr",
          "type": "data"
        },
        "index": {
          "description": "Represents discrete probability distribution",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "Distr",
          "package": "mcmc-synthesis",
          "partial": "Distr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#t:Distr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Distribution",
          "name": "Distr",
          "package": "mcmc-synthesis",
          "signature": "Distr",
          "source": "src/Language-Synthesis-Distribution.html#Distr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "Distr",
          "package": "mcmc-synthesis",
          "partial": "Distr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:Distr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distribution from an (item, weight) list.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "categorical",
          "package": "mcmc-synthesis",
          "signature": "[(a, Double)] -\u003e Distr a",
          "source": "src/Language-Synthesis-Distribution.html#categorical",
          "type": "function"
        },
        "index": {
          "description": "distribution from an item weight list",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "categorical",
          "normalized": "[(a,Double)]-\u003eDistr a",
          "package": "mcmc-synthesis",
          "signature": "[(a,Double)]-\u003eDistr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distribution containing a single item.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "constant",
          "package": "mcmc-synthesis",
          "signature": "a -\u003e Distr a",
          "source": "src/Language-Synthesis-Distribution.html#constant",
          "type": "function"
        },
        "index": {
          "description": "distribution containing single item",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "constant",
          "normalized": "a-\u003eDistr a",
          "package": "mcmc-synthesis",
          "signature": "a-\u003eDistr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the log probability of a given value.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "logProbability",
          "package": "mcmc-synthesis",
          "signature": "a -\u003e Double",
          "source": "src/Language-Synthesis-Distribution.html#Distr",
          "type": "function"
        },
        "index": {
          "description": "Compute the log probability of given value",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "logProbability",
          "normalized": "a-\u003eDouble",
          "package": "mcmc-synthesis",
          "partial": "Probability",
          "signature": "a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:logProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven (distribution, weight) pairs, mix the distributions.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "mix",
          "package": "mcmc-synthesis",
          "signature": "[(Distr a, Double)] -\u003e Distr a",
          "source": "src/Language-Synthesis-Distribution.html#mix",
          "type": "function"
        },
        "index": {
          "description": "Given distribution weight pairs mix the distributions",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "mix",
          "normalized": "[(Distr a,Double)]-\u003eDistr a",
          "package": "mcmc-synthesis",
          "signature": "[(Distr a,Double)]-\u003eDistr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegative infinity, the log of 0 probability.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "negativeInfinity",
          "package": "mcmc-synthesis",
          "signature": "Double",
          "source": "src/Language-Synthesis-Distribution.html#negativeInfinity",
          "type": "function"
        },
        "index": {
          "description": "Negative infinity the log of probability",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "negativeInfinity",
          "package": "mcmc-synthesis",
          "partial": "Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:negativeInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distribution over some integral type, inclusively between the 2\n values.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "randInt",
          "package": "mcmc-synthesis",
          "signature": "(i, i) -\u003e Distr i",
          "source": "src/Language-Synthesis-Distribution.html#randInt",
          "type": "function"
        },
        "index": {
          "description": "distribution over some integral type inclusively between the values",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "randInt",
          "normalized": "(a,a)-\u003eDistr a",
          "package": "mcmc-synthesis",
          "partial": "Int",
          "signature": "(i,i)-\u003eDistr i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:randInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate n independent draws from a distribution.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "replicate",
          "package": "mcmc-synthesis",
          "signature": "Int -\u003e Distr a -\u003e Distr [a]",
          "source": "src/Language-Synthesis-Distribution.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Generate independent draws from distribution",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "replicate",
          "normalized": "Int-\u003eDistr a-\u003eDistr[a]",
          "package": "mcmc-synthesis",
          "signature": "Int-\u003eDistr a-\u003eDistr[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a random item from the distribution.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "sample",
          "package": "mcmc-synthesis",
          "signature": "Rand g a",
          "source": "src/Language-Synthesis-Distribution.html#Distr",
          "type": "function"
        },
        "index": {
          "description": "Sample random item from the distribution",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "sample",
          "package": "mcmc-synthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes (log . sum . map exp), with more numeric precision.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "sumByLogs",
          "package": "mcmc-synthesis",
          "signature": "[Double] -\u003e Double",
          "source": "src/Language-Synthesis-Distribution.html#sumByLogs",
          "type": "function"
        },
        "index": {
          "description": "Computes log sum map exp with more numeric precision",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "sumByLogs",
          "normalized": "[Double]-\u003eDouble",
          "package": "mcmc-synthesis",
          "partial": "By Logs",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:sumByLogs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform distribution.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Distribution",
          "name": "uniform",
          "package": "mcmc-synthesis",
          "signature": "[a] -\u003e Distr a",
          "source": "src/Language-Synthesis-Distribution.html#uniform",
          "type": "function"
        },
        "index": {
          "description": "Uniform distribution",
          "hierarchy": "Language Synthesis Distribution",
          "module": "Language.Synthesis.Distribution",
          "name": "uniform",
          "normalized": "[a]-\u003eDistr a",
          "package": "mcmc-synthesis",
          "signature": "[a]-\u003eDistr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Distribution.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.MCMC",
          "name": "MCMC",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-MCMC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Synthesis MCMC",
          "module": "Language.Synthesis.MCMC",
          "name": "MCMC",
          "package": "mcmc-synthesis",
          "partial": "MCMC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-MCMC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the Metropolis-Hastings algorithm to sample a list of values.\n\u003c/p\u003e",
          "module": "Language.Synthesis.MCMC",
          "name": "mhList",
          "package": "mcmc-synthesis",
          "signature": "a-\u003e (a -\u003e (b, Double))-\u003e (a -\u003e Distr a)-\u003e Rand g [(a, b, Double)]",
          "type": "function"
        },
        "index": {
          "description": "Use the Metropolis-Hastings algorithm to sample list of values",
          "hierarchy": "Language Synthesis MCMC",
          "module": "Language.Synthesis.MCMC",
          "name": "mhList",
          "normalized": "a-\u003e(a-\u003e(b,Double))-\u003e(a-\u003eDistr a)-\u003eRand c[(a,b,Double)]",
          "package": "mcmc-synthesis",
          "partial": "List",
          "signature": "a-\u003e(a-\u003e(b,Double))-\u003e(a-\u003eDistr a)-\u003eRand g[(a,b,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-MCMC.html#v:mhList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Mutations",
          "name": "Mutations",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Mutations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "Mutations",
          "package": "mcmc-synthesis",
          "partial": "Mutations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Mutations",
          "name": "Mutation",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Mutations.html#Mutation",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "Mutation",
          "package": "mcmc-synthesis",
          "partial": "Mutation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#t:Mutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven (mutation, weight) list, mixes the mutations.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Mutations",
          "name": "mix",
          "package": "mcmc-synthesis",
          "signature": "[(Mutation a, Double)] -\u003e Mutation a",
          "source": "src/Language-Synthesis-Mutations.html#mix",
          "type": "function"
        },
        "index": {
          "description": "Given mutation weight list mixes the mutations",
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "mix",
          "normalized": "[(Mutation a,Double)]-\u003eMutation a",
          "package": "mcmc-synthesis",
          "signature": "[(Mutation a,Double)]-\u003eMutation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#v:mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a distribution over instructions, mutates a random instruction.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstruction",
          "package": "mcmc-synthesis",
          "signature": "Distr a -\u003e Mutation [a]",
          "source": "src/Language-Synthesis-Mutations.html#mutateInstruction",
          "type": "function"
        },
        "index": {
          "description": "Given distribution over instructions mutates random instruction",
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstruction",
          "normalized": "Distr a-\u003eMutation[a]",
          "package": "mcmc-synthesis",
          "partial": "Instruction",
          "signature": "Distr a-\u003eMutation[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#v:mutateInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstructionAt",
          "package": "mcmc-synthesis",
          "signature": "Distr a -\u003e Int -\u003e [a] -\u003e Distr [a]",
          "source": "src/Language-Synthesis-Mutations.html#mutateInstructionAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstructionAt",
          "normalized": "Distr a-\u003eInt-\u003e[a]-\u003eDistr[a]",
          "package": "mcmc-synthesis",
          "partial": "Instruction At",
          "signature": "Distr a-\u003eInt-\u003e[a]-\u003eDistr[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#v:mutateInstructionAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstructionsAt",
          "package": "mcmc-synthesis",
          "signature": "Distr a -\u003e [Int] -\u003e [a] -\u003e Distr [a]",
          "source": "src/Language-Synthesis-Mutations.html#mutateInstructionsAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "mutateInstructionsAt",
          "normalized": "Distr a-\u003e[Int]-\u003e[a]-\u003eDistr[a]",
          "package": "mcmc-synthesis",
          "partial": "Instructions At",
          "signature": "Distr a-\u003e[Int]-\u003e[a]-\u003eDistr[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#v:mutateInstructionsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwaps 2 random instructions.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Mutations",
          "name": "swapInstructions",
          "package": "mcmc-synthesis",
          "signature": "Mutation [a]",
          "source": "src/Language-Synthesis-Mutations.html#swapInstructions",
          "type": "function"
        },
        "index": {
          "description": "Swaps random instructions",
          "hierarchy": "Language Synthesis Mutations",
          "module": "Language.Synthesis.Mutations",
          "name": "swapInstructions",
          "normalized": "Mutation[a]",
          "package": "mcmc-synthesis",
          "partial": "Instructions",
          "signature": "Mutation[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Mutations.html#v:swapInstructions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "Synthesis",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Synthesis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "Synthesis",
          "package": "mcmc-synthesis",
          "partial": "Synthesis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "Mutation",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Mutations.html#Mutation",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "Mutation",
          "package": "mcmc-synthesis",
          "partial": "Mutation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#t:Mutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type specifies which program to synthesize. It comes with a\n specification, which is a program that already works, some inputs\n and a distance function.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Synthesis",
          "name": "Problem",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Synthesis.html#Problem",
          "type": "data"
        },
        "index": {
          "description": "This type specifies which program to synthesize It comes with specification which is program that already works some inputs and distance function",
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "Problem",
          "package": "mcmc-synthesis",
          "partial": "Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#t:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA score is anything that can be mapped to a double.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Synthesis",
          "name": "Score",
          "package": "mcmc-synthesis",
          "source": "src/Language-Synthesis-Synthesis.html#Score",
          "type": "class"
        },
        "index": {
          "description": "score is anything that can be mapped to double",
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "Score",
          "package": "mcmc-synthesis",
          "partial": "Score",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "Problem",
          "package": "mcmc-synthesis",
          "signature": "Problem",
          "source": "src/Language-Synthesis-Synthesis.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "Problem",
          "package": "mcmc-synthesis",
          "partial": "Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "jump",
          "package": "mcmc-synthesis",
          "signature": "Mutation p",
          "source": "src/Language-Synthesis-Synthesis.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "jump",
          "package": "mcmc-synthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "prior",
          "package": "mcmc-synthesis",
          "signature": "Distr p",
          "source": "src/Language-Synthesis-Synthesis.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "prior",
          "package": "mcmc-synthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:prior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven (value, score) pairs, return a running list of the best pair so far.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Synthesis",
          "name": "runningBest",
          "package": "mcmc-synthesis",
          "signature": "[(a, s)] -\u003e [(a, s)]",
          "source": "src/Language-Synthesis-Synthesis.html#runningBest",
          "type": "function"
        },
        "index": {
          "description": "Given value score pairs return running list of the best pair so far",
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "runningBest",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "mcmc-synthesis",
          "partial": "Best",
          "signature": "[(a,s)]-\u003e[(a,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:runningBest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "score",
          "package": "mcmc-synthesis",
          "signature": "p -\u003e s",
          "source": "src/Language-Synthesis-Synthesis.html#Problem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "score",
          "normalized": "a-\u003eb",
          "package": "mcmc-synthesis",
          "signature": "p-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a prior distribution, score function, mutation distribution, generate\n a list of (program, score) values through MH sampling.\n\u003c/p\u003e",
          "module": "Language.Synthesis.Synthesis",
          "name": "synthesizeMhList",
          "package": "mcmc-synthesis",
          "signature": "Problem p s -\u003e Rand gen [(p, s)]",
          "source": "src/Language-Synthesis-Synthesis.html#synthesizeMhList",
          "type": "function"
        },
        "index": {
          "description": "Given prior distribution score function mutation distribution generate list of program score values through MH sampling",
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "synthesizeMhList",
          "normalized": "Problem a b-\u003eRand c[(a,b)]",
          "package": "mcmc-synthesis",
          "partial": "Mh List",
          "signature": "Problem p s-\u003eRand gen[(p,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:synthesizeMhList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Synthesis.Synthesis",
          "name": "toScore",
          "package": "mcmc-synthesis",
          "signature": "a -\u003e Double",
          "source": "src/Language-Synthesis-Synthesis.html#toScore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Synthesis Synthesis",
          "module": "Language.Synthesis.Synthesis",
          "name": "toScore",
          "normalized": "a-\u003eDouble",
          "package": "mcmc-synthesis",
          "partial": "Score",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mcmc-synthesis/docs/Language-Synthesis-Synthesis.html#v:toScore"
      }
    }
  ]
]