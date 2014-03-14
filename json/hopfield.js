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
        "word": "hopfield"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Analysis",
          "name": "Analysis",
          "package": "hopfield",
          "source": "src/Hopfield-Analysis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "Analysis",
          "package": "hopfield",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the probability of error for one element given a hopfield data\n structure. Note that I claim that the actuall error of probability depends\n on this, but is not the whole term\n The assumption is that the patterns which were used to train the network\n are independent.\n\u003c/p\u003e",
          "module": "Hopfield.Analysis",
          "name": "computeErrorIndependentPats",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Double",
          "source": "src/Hopfield-Analysis.html#computeErrorIndependentPats",
          "type": "function"
        },
        "index": {
          "description": "Computes the probability of error for one element given hopfield data structure Note that claim that the actuall error of probability depends on this but is not the whole term The assumption is that the patterns which were used to train the network are independent",
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "computeErrorIndependentPats",
          "normalized": "HopfieldData-\u003eDouble",
          "package": "hopfield",
          "partial": "Error Independent Pats",
          "signature": "HopfieldData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:computeErrorIndependentPats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Analysis",
          "name": "computeErrorIndependentPatsNumbers",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Analysis.html#computeErrorIndependentPatsNumbers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "computeErrorIndependentPatsNumbers",
          "normalized": "Int-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Error Independent Pats Numbers",
          "signature": "Int-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:computeErrorIndependentPatsNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomputes the error of a super attractor of a hopfield network. The assumption\n is that there is only one super attractor and the other patterns are independent.\n\u003c/p\u003e",
          "module": "Hopfield.Analysis",
          "name": "computeErrorSuperAttractor",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Double",
          "source": "src/Hopfield-Analysis.html#computeErrorSuperAttractor",
          "type": "function"
        },
        "index": {
          "description": "computes the error of super attractor of hopfield network The assumption is that there is only one super attractor and the other patterns are independent",
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "computeErrorSuperAttractor",
          "normalized": "HopfieldData-\u003eDouble",
          "package": "hopfield",
          "partial": "Error Super Attractor",
          "signature": "HopfieldData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:computeErrorSuperAttractor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecomputeErrorSuperAttractorNumbers d p n\u003c/code\u003e\n Computes the probability of error for a super attractor with degree \u003ccode\u003ed\u003c/code\u003e, in\n a Hopfield network with \u003ccode\u003en\u003c/code\u003e neurons, which has been trained with \u003ccode\u003ep\u003c/code\u003e patterns.\n The assumption is that the other patterns are independent\n for mathematical derivation of the equation, see report.\n\u003c/p\u003e",
          "module": "Hopfield.Analysis",
          "name": "computeErrorSuperAttractorNumbers",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Analysis.html#computeErrorSuperAttractorNumbers",
          "type": "function"
        },
        "index": {
          "description": "computeErrorSuperAttractorNumbers Computes the probability of error for super attractor with degree in Hopfield network with neurons which has been trained with patterns The assumption is that the other patterns are independent for mathematical derivation of the equation see report",
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "computeErrorSuperAttractorNumbers",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Error Super Attractor Numbers",
          "signature": "Int-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:computeErrorSuperAttractorNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Analysis",
          "name": "maxNumberOfPatterns",
          "package": "hopfield",
          "signature": "Int -\u003e Double -\u003e Int",
          "source": "src/Hopfield-Analysis.html#maxNumberOfPatterns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "maxNumberOfPatterns",
          "normalized": "Int-\u003eDouble-\u003eInt",
          "package": "hopfield",
          "partial": "Number Of Patterns",
          "signature": "Int-\u003eDouble-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:maxNumberOfPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Analysis",
          "name": "minNumberOfNeurons",
          "package": "hopfield",
          "signature": "Int -\u003e Double -\u003e Int",
          "source": "src/Hopfield-Analysis.html#minNumberOfNeurons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "minNumberOfNeurons",
          "normalized": "Int-\u003eDouble-\u003eInt",
          "package": "hopfield",
          "partial": "Number Of Neurons",
          "signature": "Int-\u003eDouble-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:minNumberOfNeurons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Analysis",
          "name": "patternsToNeuronsRatioFromError",
          "package": "hopfield",
          "signature": "Double -\u003e Double",
          "source": "src/Hopfield-Analysis.html#patternsToNeuronsRatioFromError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Analysis",
          "module": "Hopfield.Analysis",
          "name": "patternsToNeuronsRatioFromError",
          "normalized": "Double-\u003eDouble",
          "package": "hopfield",
          "partial": "To Neurons Ratio From Error",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Analysis.html#v:patternsToNeuronsRatioFromError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Benchmark",
          "name": "Benchmark",
          "package": "hopfield",
          "source": "src/Hopfield-Benchmark.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Benchmark",
          "module": "Hopfield.Benchmark",
          "name": "Benchmark",
          "package": "hopfield",
          "partial": "Benchmark",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Benchmark.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Benchmark",
          "name": "bench1",
          "package": "hopfield",
          "signature": "IO ()",
          "source": "src/Hopfield-Benchmark.html#bench1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Benchmark",
          "module": "Hopfield.Benchmark",
          "name": "bench1",
          "normalized": "IO()",
          "package": "hopfield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Benchmark.html#v:bench1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Benchmark",
          "name": "bench2",
          "package": "hopfield",
          "signature": "IO ()",
          "source": "src/Hopfield-Benchmark.html#bench2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Benchmark",
          "module": "Hopfield.Benchmark",
          "name": "bench2",
          "normalized": "IO()",
          "package": "hopfield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Benchmark.html#v:bench2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase Restricted Boltzmann machine.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "ClassificationBoltzmannMachine",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html",
          "type": "module"
        },
        "index": {
          "description": "Base Restricted Boltzmann machine",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "ClassificationBoltzmannMachine",
          "package": "hopfield",
          "partial": "Classification Boltzmann Machine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#t:BoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Mode",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Mode",
          "package": "hopfield",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "signature": "BoltzmannData",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:BoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Classification",
          "package": "hopfield",
          "signature": "Classification",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Classification",
          "package": "hopfield",
          "partial": "Classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:Classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Hidden",
          "package": "hopfield",
          "signature": "Hidden",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Hidden",
          "package": "hopfield",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Visible",
          "package": "hopfield",
          "signature": "Visible",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "Visible",
          "package": "hopfield",
          "partial": "Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:Visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe activation function for the network (the logistic sigmoid).\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eSigmoid_function\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "activation",
          "package": "hopfield",
          "signature": "Double -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#activation",
          "type": "function"
        },
        "index": {
          "description": "The activation function for the network the logistic sigmoid http en.wikipedia.org wiki Sigmoid function",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "activation",
          "normalized": "Double-\u003eDouble",
          "package": "hopfield",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:activation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasB",
          "package": "hopfield",
          "signature": "Bias",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasB",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:biasB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasC",
          "package": "hopfield",
          "signature": "Bias",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasC",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:biasC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasD",
          "package": "hopfield",
          "signature": "Bias",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "biasD",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:biasD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildCBoltzmannData patterns\u003c/code\u003e trains a boltzmann network with \u003ccode\u003epatterns\u003c/code\u003e.\n The number of hidden neurons is set to the number of visible neurons.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "buildCBoltzmannData",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#buildCBoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "buildCBoltzmannData patterns trains boltzmann network with patterns The number of hidden neurons is set to the number of visible neurons",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "buildCBoltzmannData",
          "normalized": "[Pattern]-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "CBoltzmann Data",
          "signature": "[Pattern]-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:buildCBoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildCBoltzmannData' patterns nrHidden\u003c/code\u003e: Takes a list of patterns and\n builds a Boltzmann network (by training) in which these patterns are\n stable states. The result of this function can be used to run a pattern\n against the network, by using \u003ccode\u003ematchPatternBoltzmann\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "buildCBoltzmannData'",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e Int -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#buildCBoltzmannData%27",
          "type": "function"
        },
        "index": {
          "description": "buildCBoltzmannData patterns nrHidden Takes list of patterns and builds Boltzmann network by training in which these patterns are stable states The result of this function can be used to run pattern against the network by using matchPatternBoltzmann",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "buildCBoltzmannData'",
          "normalized": "[Pattern]-\u003eInt-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "CBoltzmann Data'",
          "signature": "[Pattern]-\u003eInt-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:buildCBoltzmannData-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "classificationWeights",
          "package": "hopfield",
          "signature": "Weights",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "classificationWeights",
          "package": "hopfield",
          "partial": "Weights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:classificationWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetActivationProbabilityVisible ws u bias v index\u003c/code\u003e returns the activation\n probability for a neuron \u003ccode\u003eindex\u003c/code\u003e in a hidden pattern, given the weights\n matrices \u003ccode\u003ews\u003c/code\u003e and \u003ccode\u003eu\u003c/code\u003e, the vector of biases \u003ccode\u003ebias\u003c/code\u003e. Applies the activation function\n to the activation sum, in order to obtain the probability.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationProbabilityHidden",
          "package": "hopfield",
          "signature": "Weights -\u003e Weights -\u003e Bias -\u003e Pattern -\u003e Pattern -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getActivationProbabilityHidden",
          "type": "function"
        },
        "index": {
          "description": "getActivationProbabilityVisible ws bias index returns the activation probability for neuron index in hidden pattern given the weights matrices ws and the vector of biases bias Applies the activation function to the activation sum in order to obtain the probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationProbabilityHidden",
          "normalized": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Activation Probability Hidden",
          "signature": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getActivationProbabilityHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetActivationProbabilityVisible ws bias h index\u003c/code\u003e returns the activation\n probability for a neuron \u003ccode\u003eindex\u003c/code\u003e in a visible pattern, given the weights\n matrix \u003ccode\u003ews\u003c/code\u003e, the vector of biases \u003ccode\u003ebias\u003c/code\u003e. Applies the activation function\n to the activation sum, in order to obtain the probability.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationProbabilityVisible",
          "package": "hopfield",
          "signature": "Weights -\u003e Bias -\u003e Pattern -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getActivationProbabilityVisible",
          "type": "function"
        },
        "index": {
          "description": "getActivationProbabilityVisible ws bias index returns the activation probability for neuron index in visible pattern given the weights matrix ws the vector of biases bias Applies the activation function to the activation sum in order to obtain the probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationProbabilityVisible",
          "normalized": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Activation Probability Visible",
          "signature": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getActivationProbabilityVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetActivationProbability ws bias pat index\u003c/code\u003e\n can be used to compute the activation probability for a neuron in the\n visible layer, or for parts of the sums requires for\n the probability of the classifications\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationSum",
          "package": "hopfield",
          "signature": "Weights -\u003e Bias -\u003e Pattern -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getActivationSum",
          "type": "function"
        },
        "index": {
          "description": "getActivationProbability ws bias pat index can be used to compute the activation probability for neuron in the visible layer or for parts of the sums requires for the probability of the classifications",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationSum",
          "normalized": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Activation Sum",
          "signature": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getActivationSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetActivationSumHidden ws bias h index\u003c/code\u003e returns the activation\n sum for a neuron \u003ccode\u003eindex\u003c/code\u003e in a hidden pattern, given the weights\n matrix \u003ccode\u003ews\u003c/code\u003e, the vector of biases \u003ccode\u003ebias\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationSumHidden",
          "package": "hopfield",
          "signature": "Weights -\u003e Weights -\u003e Bias -\u003e Pattern -\u003e Pattern -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getActivationSumHidden",
          "type": "function"
        },
        "index": {
          "description": "getActivationSumHidden ws bias index returns the activation sum for neuron index in hidden pattern given the weights matrix ws the vector of biases bias",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getActivationSumHidden",
          "normalized": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Activation Sum Hidden",
          "signature": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getActivationSumHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getClassificationVector",
          "package": "hopfield",
          "signature": "[(Pattern, Int)] -\u003e Pattern -\u003e Pattern",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getClassificationVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getClassificationVector",
          "normalized": "[(Pattern,Int)]-\u003ePattern-\u003ePattern",
          "package": "hopfield",
          "partial": "Classification Vector",
          "signature": "[(Pattern,Int)]-\u003ePattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getClassificationVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the dimension of the weights matrix corresponding to the given mode.\n For hidden, it is the width of the matrix, and for visible it is the height.\n One has to ensure that the appropriate weights matrix is passed with this function.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getDimension",
          "package": "hopfield",
          "signature": "Mode -\u003e Weights -\u003e Int",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getDimension",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the dimension of the weights matrix corresponding to the given mode For hidden it is the width of the matrix and for visible it is the height One has to ensure that the appropriate weights matrix is passed with this function",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getDimension",
          "normalized": "Mode-\u003eWeights-\u003eInt",
          "package": "hopfield",
          "partial": "Dimension",
          "signature": "Mode-\u003eWeights-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFreeEnergy bm visible classification_vector\u003c/code\u003e\n Computes the free energy of \u003ccode\u003ev\u003c/code\u003e with \u003ccode\u003eclassification_vector\u003c/code\u003e, according\n to the trained Boltzmann network \u003ccode\u003ebm\u003c/code\u003e. It is used for classifying a given\n visible vector according to the classes used for training the network \u003ccode\u003ebm\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getFreeEnergy",
          "package": "hopfield",
          "signature": "BoltzmannData -\u003e Pattern -\u003e Pattern -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getFreeEnergy",
          "type": "function"
        },
        "index": {
          "description": "getFreeEnergy bm visible classification vector Computes the free energy of with classification vector according to the trained Boltzmann network bm It is used for classifying given visible vector according to the classes used for training the network bm",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getFreeEnergy",
          "normalized": "BoltzmannData-\u003ePattern-\u003ePattern-\u003eDouble",
          "package": "hopfield",
          "partial": "Free Energy",
          "signature": "BoltzmannData-\u003ePattern-\u003ePattern-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getFreeEnergy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetActivationSumHidden ws bias h index\u003c/code\u003e returns the activation\n sum for all neurons in the hidden pattern, given the weights\n matrix \u003ccode\u003ews\u003c/code\u003e, the vector of biases \u003ccode\u003ebias\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getHiddenSums",
          "package": "hopfield",
          "signature": "Weights -\u003e Weights -\u003e Bias -\u003e Pattern -\u003e Pattern -\u003e Vector Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#getHiddenSums",
          "type": "function"
        },
        "index": {
          "description": "getActivationSumHidden ws bias index returns the activation sum for all neurons in the hidden pattern given the weights matrix ws the vector of biases bias",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "getHiddenSums",
          "normalized": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eVector Double",
          "package": "hopfield",
          "partial": "Hidden Sums",
          "signature": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:getHiddenSums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of neurons in the hidden layer\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "hiddenCount",
          "package": "hopfield",
          "signature": "Int",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "number of neurons in the hidden layer",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "hiddenCount",
          "package": "hopfield",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:hiddenCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edetermines the rate in which the weights are changed in the training phase.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "learningRate",
          "package": "hopfield",
          "signature": "Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#learningRate",
          "type": "function"
        },
        "index": {
          "description": "determines the rate in which the weights are changed in the training phase http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "learningRate",
          "package": "hopfield",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:learningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ematchPatternBoltzmann bm pat\u003c/code\u003e given the Boltzmann trained network \u003ccode\u003ebm\u003c/code\u003e\n recognizes \u003ccode\u003epat\u003c/code\u003e, by classifying it to one of the patterns the network was\n trained with. This is done by computing the free energy of \u003ccode\u003epat\u003c/code\u003e with\n every possible classification, and choosing the classification with\n lowest energy.\n http:\u003cem/\u003euai.sis.pitt.edu\u003cem\u003epapers\u003c/em\u003e11/p463-louradour.pdf\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "matchPatternCBoltzmann",
          "package": "hopfield",
          "signature": "BoltzmannData -\u003e Pattern -\u003e Int",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#matchPatternCBoltzmann",
          "type": "function"
        },
        "index": {
          "description": "matchPatternBoltzmann bm pat given the Boltzmann trained network bm recognizes pat by classifying it to one of the patterns the network was trained with This is done by computing the free energy of pat with every possible classification and choosing the classification with lowest energy http uai.sis.pitt.edu papers p463-louradour.pdf",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "matchPatternCBoltzmann",
          "normalized": "BoltzmannData-\u003ePattern-\u003eInt",
          "package": "hopfield",
          "partial": "Pattern CBoltzmann",
          "signature": "BoltzmannData-\u003ePattern-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:matchPatternCBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne step which updates the weights in the CD-n training process.\n The weights are changed according to one of the training patterns.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n \u003ccode\u003eoneTrainingStep bm visible\u003c/code\u003e updates the parameters of \u003ccode\u003ebm\u003c/code\u003e (the 2 weight\n matrices and the biases) according to the training instance \u003ccode\u003ev\u003c/code\u003e\n and its classification, obtained by looking in the map kept in \u003ccode\u003ebm\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "oneTrainingStep",
          "package": "hopfield",
          "signature": "BoltzmannData -\u003e Pattern -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#oneTrainingStep",
          "type": "function"
        },
        "index": {
          "description": "One step which updates the weights in the CD-n training process The weights are changed according to one of the training patterns http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm oneTrainingStep bm visible updates the parameters of bm the weight matrices and the biases according to the training instance and its classification obtained by looking in the map kept in bm",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "oneTrainingStep",
          "normalized": "BoltzmannData-\u003ePattern-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "Training Step",
          "signature": "BoltzmannData-\u003ePattern-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:oneTrainingStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "pattern_to_class",
          "package": "hopfield",
          "signature": "[(Pattern, Int)]",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "pattern_to_class",
          "normalized": "[(Pattern,Int)]",
          "package": "hopfield",
          "signature": "[(Pattern,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:pattern_to_class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe patterns which were used to train it\n can be decuded from weights, maybe should be remove now\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "patternsB",
          "package": "hopfield",
          "signature": "[Pattern]",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "the patterns which were used to train it can be decuded from weights maybe should be remove now",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "patternsB",
          "normalized": "[Pattern]",
          "package": "hopfield",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:patternsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to compute the free energy\n http:\u003cem/\u003euai.sis.pitt.edu\u003cem\u003epapers\u003c/em\u003e11/p463-louradour.pdf\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "softplus",
          "package": "hopfield",
          "signature": "Double -\u003e Double",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#softplus",
          "type": "function"
        },
        "index": {
          "description": "The function used to compute the free energy http uai.sis.pitt.edu papers p463-louradour.pdf",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "softplus",
          "normalized": "Double-\u003eDouble",
          "package": "hopfield",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:softplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe training function for the Boltzmann Machine.\n We are using the contrastive divergence algorithm CD-1\n TODO see if making the vis\n (we could extend to CD-n, but \u003ca\u003eIn pratice,  CD-1 has been shown to work surprisingly well.\u003c/a\u003e\n \u003ccode\u003etrainBoltzmann pats nrHidden\u003c/code\u003e where \u003ccode\u003epats\u003c/code\u003e are the training patterns\n and \u003ccode\u003enrHidden\u003c/code\u003e is the number of neurons to be created in the hidden layer.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "trainBoltzmann",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e Int -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#trainBoltzmann",
          "type": "function"
        },
        "index": {
          "description": "The training function for the Boltzmann Machine We are using the contrastive divergence algorithm CD-1 TODO see if making the vis we could extend to CD-n but In pratice CD-1 has been shown to work surprisingly well trainBoltzmann pats nrHidden where pats are the training patterns and nrHidden is the number of neurons to be created in the hidden layer http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "trainBoltzmann",
          "normalized": "[Pattern]-\u003eInt-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann",
          "signature": "[Pattern]-\u003eInt-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:trainBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a classification vector given the current state of the network (\n the u matrix and the vector of biases d, together with a hidden vector h)\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateClassification",
          "package": "hopfield",
          "signature": "Weights -\u003e Bias -\u003e Pattern -\u003e Pattern",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#updateClassification",
          "type": "function"
        },
        "index": {
          "description": "Updates classification vector given the current state of the network the matrix and the vector of biases together with hidden vector",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateClassification",
          "normalized": "Weights-\u003eBias-\u003ePattern-\u003ePattern",
          "package": "hopfield",
          "partial": "Classification",
          "signature": "Weights-\u003eBias-\u003ePattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:updateClassification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the entire visible layer by using gibbsSampling, according\n to the activation probability\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateHidden",
          "package": "hopfield",
          "signature": "Weights -\u003e Weights -\u003e Bias -\u003e Pattern -\u003e Pattern -\u003e m Pattern",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#updateHidden",
          "type": "function"
        },
        "index": {
          "description": "Updates the entire visible layer by using gibbsSampling according to the activation probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateHidden",
          "normalized": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Hidden",
          "signature": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:updateHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a neuron in the hidden layer by using gibbsSampling, according\n to the activation probability\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateNeuronHidden",
          "package": "hopfield",
          "signature": "Weights -\u003e Weights -\u003e Bias -\u003e Pattern -\u003e Pattern -\u003e Int -\u003e m Int",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#updateNeuronHidden",
          "type": "function"
        },
        "index": {
          "description": "Updates neuron in the hidden layer by using gibbsSampling according to the activation probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateNeuronHidden",
          "normalized": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003ea Int",
          "package": "hopfield",
          "partial": "Neuron Hidden",
          "signature": "Weights-\u003eWeights-\u003eBias-\u003ePattern-\u003ePattern-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:updateNeuronHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateNeuronVisible ws bias h index\u003c/code\u003e updates a neuron in the visible layer by using gibbsSampling, according\n to the activation probability\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateNeuronVisible",
          "package": "hopfield",
          "signature": "Weights -\u003e Bias -\u003e Pattern -\u003e Int -\u003e m Int",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#updateNeuronVisible",
          "type": "function"
        },
        "index": {
          "description": "updateNeuronVisible ws bias index updates neuron in the visible layer by using gibbsSampling according to the activation probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateNeuronVisible",
          "normalized": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003ea Int",
          "package": "hopfield",
          "partial": "Neuron Visible",
          "signature": "Weights-\u003eBias-\u003ePattern-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:updateNeuronVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the entire visible layer by using gibbsSampling, according\n to the activation probability\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateVisible",
          "package": "hopfield",
          "signature": "Weights -\u003e Bias -\u003e Pattern -\u003e m Pattern",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#updateVisible",
          "type": "function"
        },
        "index": {
          "description": "Updates the entire visible layer by using gibbsSampling according to the activation probability",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "updateVisible",
          "normalized": "Weights-\u003eBias-\u003ePattern-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Visible",
          "signature": "Weights-\u003eBias-\u003ePattern-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:updateVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validClassificationVector",
          "package": "hopfield",
          "signature": "Pattern -\u003e Int -\u003e Maybe String",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#validClassificationVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validClassificationVector",
          "normalized": "Pattern-\u003eInt-\u003eMaybe String",
          "package": "hopfield",
          "partial": "Classification Vector",
          "signature": "Pattern-\u003eInt-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:validClassificationVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalidPattern mode weights pattern\u003c/code\u003e\n Returns an error string in a Just if the \u003ccode\u003epattern\u003c/code\u003e is not compatible\n with \u003ccode\u003eweights\u003c/code\u003e and Nothing otherwise. \u003ccode\u003emode\u003c/code\u003e gives the type of the pattern,\n which is checked (Visible or Hidden).\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validPattern",
          "package": "hopfield",
          "signature": "Mode -\u003e Weights -\u003e Pattern -\u003e Maybe String",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#validPattern",
          "type": "function"
        },
        "index": {
          "description": "validPattern mode weights pattern Returns an error string in Just if the pattern is not compatible with weights and Nothing otherwise mode gives the type of the pattern which is checked Visible or Hidden",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validPattern",
          "normalized": "Mode-\u003eWeights-\u003ePattern-\u003eMaybe String",
          "package": "hopfield",
          "partial": "Pattern",
          "signature": "Mode-\u003eWeights-\u003ePattern-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:validPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalidWeights ws\u003c/code\u003e checks that a weight matrix is well formed.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validWeights",
          "package": "hopfield",
          "signature": "Weights -\u003e Maybe String",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#validWeights",
          "type": "function"
        },
        "index": {
          "description": "validWeights ws checks that weight matrix is well formed",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "validWeights",
          "normalized": "Weights-\u003eMaybe String",
          "package": "hopfield",
          "partial": "Weights",
          "signature": "Weights-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:validWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe weights of the network\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "weightsB",
          "package": "hopfield",
          "signature": "Weights",
          "source": "src/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "the weights of the network",
          "hierarchy": "Hopfield Boltzmann ClassificationBoltzmannMachine",
          "module": "Hopfield.Boltzmann.ClassificationBoltzmannMachine",
          "name": "weightsB",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-ClassificationBoltzmannMachine.html#v:weightsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase Restricted Boltzmann machine.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "RestrictedBoltzmannMachine",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html",
          "type": "module"
        },
        "index": {
          "description": "Base Restricted Boltzmann machine http en.wikipedia.org wiki Restricted Boltzmann machine",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "RestrictedBoltzmannMachine",
          "package": "hopfield",
          "partial": "Restricted Boltzmann Machine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#t:BoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Mode",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Mode",
          "package": "hopfield",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Phase",
          "package": "hopfield",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Phase",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Phase",
          "package": "hopfield",
          "partial": "Phase",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#t:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "signature": "BoltzmannData",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:BoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Hidden",
          "package": "hopfield",
          "signature": "Hidden",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Hidden",
          "package": "hopfield",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Matching",
          "package": "hopfield",
          "signature": "Matching",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Matching",
          "package": "hopfield",
          "partial": "Matching",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:Matching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Training",
          "package": "hopfield",
          "signature": "Training",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Training",
          "package": "hopfield",
          "partial": "Training",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:Training"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Visible",
          "package": "hopfield",
          "signature": "Visible",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "Visible",
          "package": "hopfield",
          "partial": "Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:Visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe activation function for the network (the logistic sigmoid).\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eSigmoid_function\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "activation",
          "package": "hopfield",
          "signature": "Double -\u003e Double",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#activation",
          "type": "function"
        },
        "index": {
          "description": "The activation function for the network the logistic sigmoid http en.wikipedia.org wiki Sigmoid function",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "activation",
          "normalized": "Double-\u003eDouble",
          "package": "hopfield",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:activation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildBoltzmannData patterns\u003c/code\u003e trains a boltzmann network with \u003ccode\u003epatterns\u003c/code\u003e.\n The number of hidden neurons is set to the number of visible neurons.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "buildBoltzmannData",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#buildBoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "buildBoltzmannData patterns trains boltzmann network with patterns The number of hidden neurons is set to the number of visible neurons",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "buildBoltzmannData",
          "normalized": "[Pattern]-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data",
          "signature": "[Pattern]-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:buildBoltzmannData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildBoltzmannData' patterns nr_hidden\u003c/code\u003e: Takes a list of patterns and\n builds a Boltzmann network (by training) in which these patterns are\n stable states. The result of this function can be used to run a pattern\n against the network, by using \u003ccode\u003e\u003ca\u003ematchPatternBoltzmann\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "buildBoltzmannData'",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e Int -\u003e m BoltzmannData",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#buildBoltzmannData%27",
          "type": "function"
        },
        "index": {
          "description": "buildBoltzmannData patterns nr hidden Takes list of patterns and builds Boltzmann network by training in which these patterns are stable states The result of this function can be used to run pattern against the network by using matchPatternBoltzmann",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "buildBoltzmannData'",
          "normalized": "[Pattern]-\u003eInt-\u003ea BoltzmannData",
          "package": "hopfield",
          "partial": "Boltzmann Data'",
          "signature": "[Pattern]-\u003eInt-\u003em BoltzmannData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:buildBoltzmannData-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getActivationProbability",
          "package": "hopfield",
          "signature": "Phase -\u003e Mode -\u003e Weights -\u003e Pattern -\u003e Int -\u003e Double",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#getActivationProbability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getActivationProbability",
          "normalized": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003eDouble",
          "package": "hopfield",
          "partial": "Activation Probability",
          "signature": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:getActivationProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCounterPattern mode ws pat\u003c/code\u003e, given a vector \u003ccode\u003epat\u003c/code\u003e of type \u003ccode\u003emode\u003c/code\u003e\n computes the values of all the neurons in the layer of the opposite type.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getCounterPattern",
          "package": "hopfield",
          "signature": "Phase -\u003e Mode -\u003e Weights -\u003e Pattern -\u003e m Pattern",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#getCounterPattern",
          "type": "function"
        },
        "index": {
          "description": "getCounterPattern mode ws pat given vector pat of type mode computes the values of all the neurons in the layer of the opposite type",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getCounterPattern",
          "normalized": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Counter Pattern",
          "signature": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:getCounterPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the dimension of the weights matrix corresponding to the given mode.\n For hidden, it is the width of the matrix, and for visible it is the height.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getDimension",
          "package": "hopfield",
          "signature": "Mode -\u003e Weights -\u003e Int",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#getDimension",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the dimension of the weights matrix corresponding to the given mode For hidden it is the width of the matrix and for visible it is the height",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getDimension",
          "normalized": "Mode-\u003eWeights-\u003eInt",
          "package": "hopfield",
          "partial": "Dimension",
          "signature": "Mode-\u003eWeights-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:getDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getFreeEnergy",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e Double",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#getFreeEnergy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "getFreeEnergy",
          "normalized": "Weights-\u003ePattern-\u003eDouble",
          "package": "hopfield",
          "partial": "Free Energy",
          "signature": "Weights-\u003ePattern-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:getFreeEnergy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edetermines the rate in which the weights are changed in the training phase.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "learningRate",
          "package": "hopfield",
          "signature": "Double",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#learningRate",
          "type": "function"
        },
        "index": {
          "description": "determines the rate in which the weights are changed in the training phase http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "learningRate",
          "package": "hopfield",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:learningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a pattern against the a given network\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "matchPatternBoltzmann",
          "package": "hopfield",
          "signature": "BoltzmannData -\u003e Pattern -\u003e m Int",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#matchPatternBoltzmann",
          "type": "function"
        },
        "index": {
          "description": "Matches pattern against the given network",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "matchPatternBoltzmann",
          "normalized": "BoltzmannData-\u003ePattern-\u003ea Int",
          "package": "hopfield",
          "partial": "Pattern Boltzmann",
          "signature": "BoltzmannData-\u003ePattern-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:matchPatternBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "notMode",
          "package": "hopfield",
          "signature": "Mode -\u003e Mode",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#notMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "notMode",
          "normalized": "Mode-\u003eMode",
          "package": "hopfield",
          "partial": "Mode",
          "signature": "Mode-\u003eMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:notMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of neurons in the hidden layer\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "nr_hiddenB",
          "package": "hopfield",
          "signature": "Int",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "number of neurons in the hidden layer",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "nr_hiddenB",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:nr_hiddenB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe binary representation of the pattern index\n the pattern_to_binary field will not replace the patternsB field as it does\n not contain duplicated patterns, which might be required for statistical\n analysis in clustering and super attractors\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "pattern_to_binaryB",
          "package": "hopfield",
          "signature": "[(Pattern, [Int])]",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "the binary representation of the pattern index the pattern to binary field will not replace the patternsB field as it does not contain duplicated patterns which might be required for statistical analysis in clustering and super attractors",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "pattern_to_binaryB",
          "normalized": "[(Pattern,[Int])]",
          "package": "hopfield",
          "signature": "[(Pattern,[Int])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:pattern_to_binaryB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe patterns which were used to train it\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "patternsB",
          "package": "hopfield",
          "signature": "[Pattern]",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "the patterns which were used to train it",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "patternsB",
          "normalized": "[Pattern]",
          "package": "hopfield",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:patternsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe training function for the Boltzmann Machine.\n We are using the contrastive divergence algorithm CD-1\n TODO see if making the vis\n (we could extend to CD-n, but \u003ca\u003eIn practice,  CD-1 has been shown to work surprisingly well.\u003c/a\u003e\n \u003ccode\u003etrainBoltzmann pats nr_hidden\u003c/code\u003e where \u003ccode\u003epats\u003c/code\u003e are the training patterns\n and \u003ccode\u003enr_hidden\u003c/code\u003e is the number of neurons to be created in the hidden layer.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "trainBoltzmann",
          "package": "hopfield",
          "signature": "[Pattern] -\u003e Int -\u003e m (Weights, [(Pattern, [Int])])",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#trainBoltzmann",
          "type": "function"
        },
        "index": {
          "description": "The training function for the Boltzmann Machine We are using the contrastive divergence algorithm CD-1 TODO see if making the vis we could extend to CD-n but In practice CD-1 has been shown to work surprisingly well trainBoltzmann pats nr hidden where pats are the training patterns and nr hidden is the number of neurons to be created in the hidden layer http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "trainBoltzmann",
          "normalized": "[Pattern]-\u003eInt-\u003ea(Weights,[(Pattern,[Int])])",
          "package": "hopfield",
          "partial": "Boltzmann",
          "signature": "[Pattern]-\u003eInt-\u003em(Weights,[(Pattern,[Int])])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:trainBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a pattern using the Boltzmann machine\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateBoltzmann",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e m Pattern",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#updateBoltzmann",
          "type": "function"
        },
        "index": {
          "description": "Updates pattern using the Boltzmann machine",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateBoltzmann",
          "normalized": "Weights-\u003ePattern-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Boltzmann",
          "signature": "Weights-\u003ePattern-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:updateBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateNeuron mode ws pat index\u003c/code\u003e , given a vector \u003ccode\u003epat\u003c/code\u003e of type \u003ccode\u003emode\u003c/code\u003e\n updates the neuron with number \u003ccode\u003eindex\u003c/code\u003e in the layer with opposite type.\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateNeuron",
          "package": "hopfield",
          "signature": "Phase -\u003e Mode -\u003e Weights -\u003e Pattern -\u003e Int -\u003e m Int",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#updateNeuron",
          "type": "function"
        },
        "index": {
          "description": "updateNeuron mode ws pat index given vector pat of type mode updates the neuron with number index in the layer with opposite type",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateNeuron",
          "normalized": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003ea Int",
          "package": "hopfield",
          "partial": "Neuron",
          "signature": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:updateNeuron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateNeuron'",
          "package": "hopfield",
          "signature": "Double -\u003e Phase -\u003e Mode -\u003e Weights -\u003e Pattern -\u003e Int -\u003e Int",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#updateNeuron%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateNeuron'",
          "normalized": "Double-\u003ePhase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003eInt",
          "package": "hopfield",
          "partial": "Neuron'",
          "signature": "Double-\u003ePhase-\u003eMode-\u003eWeights-\u003ePattern-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:updateNeuron-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne step which updates the weights in the CD-n training process.\n The weights are changed according to one of the training patterns.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eRestricted_Boltzmann_machine#Training_algorithm\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateWeights",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e m Weights",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#updateWeights",
          "type": "function"
        },
        "index": {
          "description": "One step which updates the weights in the CD-n training process The weights are changed according to one of the training patterns http en.wikipedia.org wiki Restricted Boltzmann machine Training algorithm",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "updateWeights",
          "normalized": "Weights-\u003ePattern-\u003ea Weights",
          "package": "hopfield",
          "partial": "Weights",
          "signature": "Weights-\u003ePattern-\u003em Weights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:updateWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalidPattern mode weights pattern\u003c/code\u003e\n Returns an error string in a Just if the \u003ccode\u003epattern\u003c/code\u003e is not compatible\n with \u003ccode\u003eweights\u003c/code\u003e and Nothing otherwise. \u003ccode\u003emode\u003c/code\u003e gives the type of the pattern,\n which is checked (Visible or Hidden).\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "validPattern",
          "package": "hopfield",
          "signature": "Phase -\u003e Mode -\u003e Weights -\u003e Pattern -\u003e Maybe String",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#validPattern",
          "type": "function"
        },
        "index": {
          "description": "validPattern mode weights pattern Returns an error string in Just if the pattern is not compatible with weights and Nothing otherwise mode gives the type of the pattern which is checked Visible or Hidden",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "validPattern",
          "normalized": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eMaybe String",
          "package": "hopfield",
          "partial": "Pattern",
          "signature": "Phase-\u003eMode-\u003eWeights-\u003ePattern-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:validPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "validWeights",
          "package": "hopfield",
          "signature": "Weights -\u003e Maybe String",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#validWeights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "validWeights",
          "normalized": "Weights-\u003eMaybe String",
          "package": "hopfield",
          "partial": "Weights",
          "signature": "Weights-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:validWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe weights of the network\n\u003c/p\u003e",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "weightsB",
          "package": "hopfield",
          "signature": "Weights",
          "source": "src/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#BoltzmannData",
          "type": "function"
        },
        "index": {
          "description": "the weights of the network",
          "hierarchy": "Hopfield Boltzmann RestrictedBoltzmannMachine",
          "module": "Hopfield.Boltzmann.RestrictedBoltzmannMachine",
          "name": "weightsB",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Boltzmann-RestrictedBoltzmannMachine.html#v:weightsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "Clusters",
          "package": "hopfield",
          "source": "src/Hopfield-Clusters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "Clusters",
          "package": "hopfield",
          "partial": "Clusters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "avgBasinsGivenPats",
          "package": "hopfield",
          "signature": "LearningType -\u003e [Pattern] -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#avgBasinsGivenPats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "avgBasinsGivenPats",
          "normalized": "LearningType-\u003e[Pattern]-\u003ea Double",
          "package": "hopfield",
          "partial": "Basins Given Pats",
          "signature": "LearningType-\u003e[Pattern]-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:avgBasinsGivenPats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebasinsGivenProbabilityT1 learning networkSize clusterSize p\u003c/code\u003e\n Gets the average basin of attraction of a cluster of size \u003ccode\u003eclusterSize\u003c/code\u003e\n constructed using the T1 method given the flip probability \u003ccode\u003ep\u003c/code\u003e.\n A hopfield network is trained (the type of training (Hebbian or Storkey) is\n given by \u003ccode\u003elearning\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Hopfield.Clusters",
          "name": "basinsGivenProbabilityT1",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#basinsGivenProbabilityT1",
          "type": "function"
        },
        "index": {
          "description": "basinsGivenProbabilityT1 learning networkSize clusterSize Gets the average basin of attraction of cluster of size clusterSize constructed using the T1 method given the flip probability hopfield network is trained the type of training Hebbian or Storkey is given by learning",
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "basinsGivenProbabilityT1",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003ea Double",
          "package": "hopfield",
          "partial": "Given Probability",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:basinsGivenProbabilityT1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "basinsGivenProbabilityT1With2Clusters",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e m (Double, Double)",
          "source": "src/Hopfield-Clusters.html#basinsGivenProbabilityT1With2Clusters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "basinsGivenProbabilityT1With2Clusters",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003ea(Double,Double)",
          "package": "hopfield",
          "partial": "Given Probability With Clusters",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003em(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:basinsGivenProbabilityT1With2Clusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "basinsGivenStdT2",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#basinsGivenStdT2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "basinsGivenStdT2",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003ea Double",
          "package": "hopfield",
          "partial": "Given Std",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:basinsGivenStdT2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "basinsGivenStdT2With2Clusters",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e m (Double, Double)",
          "source": "src/Hopfield-Clusters.html#basinsGivenStdT2With2Clusters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "basinsGivenStdT2With2Clusters",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003ea(Double,Double)",
          "package": "hopfield",
          "partial": "Given Std With Clusters",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003em(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:basinsGivenStdT2With2Clusters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexperimentUsingT1 learning networkSize clusterSize\u003c/code\u003e\n Gets the average basin of attraction obtained by iterating trough various\n probabilities for flipping the bit when obtaining the cluster.\n\u003c/p\u003e",
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT1",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#experimentUsingT1",
          "type": "function"
        },
        "index": {
          "description": "experimentUsingT1 learning networkSize clusterSize Gets the average basin of attraction obtained by iterating trough various probabilities for flipping the bit when obtaining the cluster",
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT1",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003ea Double",
          "package": "hopfield",
          "partial": "Using",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:experimentUsingT1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT1NoAvg",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e m [(Double, Double)]",
          "source": "src/Hopfield-Clusters.html#experimentUsingT1NoAvg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT1NoAvg",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003ea[(Double,Double)]",
          "package": "hopfield",
          "partial": "Using No Avg",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003em[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:experimentUsingT1NoAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT2",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#experimentUsingT2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT2",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003ea Double",
          "package": "hopfield",
          "partial": "Using",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:experimentUsingT2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT2NoAvg",
          "package": "hopfield",
          "signature": "LearningType -\u003e Int -\u003e Int -\u003e m [(Double, Double)]",
          "source": "src/Hopfield-Clusters.html#experimentUsingT2NoAvg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "experimentUsingT2NoAvg",
          "normalized": "LearningType-\u003eInt-\u003eInt-\u003ea[(Double,Double)]",
          "package": "hopfield",
          "partial": "Using No Avg",
          "signature": "LearningType-\u003eInt-\u003eInt-\u003em[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:experimentUsingT2NoAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPatternInCluster pat p\u003c/code\u003e gets a pattern in a cluster given by \u003ccode\u003epat\u003c/code\u003e\n by flipping each bit in the pattern with probability p.\n\u003c/p\u003e",
          "module": "Hopfield.Clusters",
          "name": "getCluster",
          "package": "hopfield",
          "signature": "Method -\u003e Pattern -\u003e Int -\u003e Double -\u003e m [Pattern]",
          "source": "src/Hopfield-Clusters.html#getCluster",
          "type": "function"
        },
        "index": {
          "description": "getPatternInCluster pat gets pattern in cluster given by pat by flipping each bit in the pattern with probability",
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "getCluster",
          "normalized": "Method-\u003ePattern-\u003eInt-\u003eDouble-\u003ea[Pattern]",
          "package": "hopfield",
          "partial": "Cluster",
          "signature": "Method-\u003ePattern-\u003eInt-\u003eDouble-\u003em[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:getCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "getGaussianCluster",
          "package": "hopfield",
          "signature": "Method -\u003e Pattern -\u003e Int -\u003e Double -\u003e Double -\u003e m [Pattern]",
          "source": "src/Hopfield-Clusters.html#getGaussianCluster",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "getGaussianCluster",
          "normalized": "Method-\u003ePattern-\u003eInt-\u003eDouble-\u003eDouble-\u003ea[Pattern]",
          "package": "hopfield",
          "partial": "Gaussian Cluster",
          "signature": "Method-\u003ePattern-\u003eInt-\u003eDouble-\u003eDouble-\u003em[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:getGaussianCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPatternInCluster pat p\u003c/code\u003e gets a pattern in a cluster given by \u003ccode\u003epat\u003c/code\u003e\n by flipping each bit in the pattern with probability p.\n\u003c/p\u003e",
          "module": "Hopfield.Clusters",
          "name": "getPatternInCluster",
          "package": "hopfield",
          "signature": "Method -\u003e Pattern -\u003e Double -\u003e m Pattern",
          "source": "src/Hopfield-Clusters.html#getPatternInCluster",
          "type": "function"
        },
        "index": {
          "description": "getPatternInCluster pat gets pattern in cluster given by pat by flipping each bit in the pattern with probability",
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "getPatternInCluster",
          "normalized": "Method-\u003ePattern-\u003eDouble-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Pattern In Cluster",
          "signature": "Method-\u003ePattern-\u003eDouble-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:getPatternInCluster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Clusters",
          "name": "repeatExperiment",
          "package": "hopfield",
          "signature": "(LearningType -\u003e Int -\u003e Int -\u003e m Double) -\u003e LearningType -\u003e Int -\u003e Int -\u003e Int -\u003e m Double",
          "source": "src/Hopfield-Clusters.html#repeatExperiment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Clusters",
          "module": "Hopfield.Clusters",
          "name": "repeatExperiment",
          "normalized": "(LearningType-\u003eInt-\u003eInt-\u003ea Double)-\u003eLearningType-\u003eInt-\u003eInt-\u003eInt-\u003ea Double",
          "package": "hopfield",
          "partial": "Experiment",
          "signature": "(LearningType-\u003eInt-\u003eInt-\u003em Double)-\u003eLearningType-\u003eInt-\u003eInt-\u003eInt-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Clusters.html#v:repeatExperiment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Common",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Common",
          "package": "hopfield",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Bias",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Bias",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Bias",
          "package": "hopfield",
          "partial": "Bias",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#t:Bias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Method",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Method",
          "package": "hopfield",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Pattern",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Pattern",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Pattern",
          "package": "hopfield",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Showable",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Showable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Showable",
          "package": "hopfield",
          "partial": "Showable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#t:Showable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Weights",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Weights",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Weights",
          "package": "hopfield",
          "partial": "Weights",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#t:Weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Boltzmann",
          "package": "hopfield",
          "signature": "Boltzmann",
          "source": "src/Hopfield-Common.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Boltzmann",
          "package": "hopfield",
          "partial": "Boltzmann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:Boltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "CBoltzmann",
          "package": "hopfield",
          "signature": "CBoltzmann",
          "source": "src/Hopfield-Common.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "CBoltzmann",
          "package": "hopfield",
          "partial": "CBoltzmann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:CBoltzmann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "Hopfield",
          "package": "hopfield",
          "signature": "Hopfield",
          "source": "src/Hopfield-Common.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "Hopfield",
          "package": "hopfield",
          "partial": "Hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:Hopfield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "MkShowable",
          "package": "hopfield",
          "signature": "MkShowable a",
          "source": "src/Hopfield-Common.html#Showable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "MkShowable",
          "package": "hopfield",
          "partial": "Mk Showable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:MkShowable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "flipBit",
          "package": "hopfield",
          "signature": "Method -\u003e Int -\u003e Int",
          "source": "src/Hopfield-Common.html#flipBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "flipBit",
          "normalized": "Method-\u003eInt-\u003eInt",
          "package": "hopfield",
          "partial": "Bit",
          "signature": "Method-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:flipBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "pack",
          "package": "hopfield",
          "signature": "a -\u003e Showable",
          "source": "src/Hopfield-Common.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "pack",
          "normalized": "a-\u003eShowable",
          "package": "hopfield",
          "signature": "a-\u003eShowable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Common",
          "name": "packL",
          "package": "hopfield",
          "signature": "[a] -\u003e [Showable]",
          "source": "src/Hopfield-Common.html#packL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Common",
          "module": "Hopfield.Common",
          "name": "packL",
          "normalized": "[a]-\u003e[Showable]",
          "package": "hopfield",
          "signature": "[a]-\u003e[Showable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Common.html#v:packL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "ClusterExperiments",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "ClusterExperiments",
          "package": "hopfield",
          "partial": "Cluster Experiments",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "ExpType",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#ExpType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "ExpType",
          "package": "hopfield",
          "partial": "Exp Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#t:ExpType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "T1",
          "package": "hopfield",
          "signature": "T1",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#ExpType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "T1",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:T1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "T2",
          "package": "hopfield",
          "signature": "T2",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#ExpType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "T2",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "oneIteration1",
          "package": "hopfield",
          "signature": "ExpType -\u003e LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Int -\u003e [(Double, Double)]",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#oneIteration1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "oneIteration1",
          "normalized": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(Double,Double)]",
          "package": "hopfield",
          "partial": "Iteration",
          "signature": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:oneIteration1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "oneIteration2",
          "package": "hopfield",
          "signature": "ExpType -\u003e LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Int -\u003e [(Double, (Double, Double))]",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#oneIteration2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "oneIteration2",
          "normalized": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(Double,(Double,Double))]",
          "package": "hopfield",
          "partial": "Iteration",
          "signature": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e[(Double,(Double,Double))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:oneIteration2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "performAndPrint1",
          "package": "hopfield",
          "signature": "ExpType -\u003e LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Int -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#performAndPrint1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "performAndPrint1",
          "normalized": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eIO()",
          "package": "hopfield",
          "partial": "And Print",
          "signature": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:performAndPrint1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "performAndPrint2",
          "package": "hopfield",
          "signature": "ExpType -\u003e LearningType -\u003e Int -\u003e Int -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Int -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#performAndPrint2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "performAndPrint2",
          "normalized": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eIO()",
          "package": "hopfield",
          "partial": "And Print",
          "signature": "ExpType-\u003eLearningType-\u003eInt-\u003eInt-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:performAndPrint2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "run",
          "package": "hopfield",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ClusterExperiments.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ClusterExperiments",
          "module": "Hopfield.Experiments.ClusterExperiments",
          "name": "run",
          "normalized": "[String]-\u003eIO()",
          "package": "hopfield",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ClusterExperiments.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment",
          "name": "Experiment",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-Experiment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment",
          "module": "Hopfield.Experiments.Experiment",
          "name": "Experiment",
          "package": "hopfield",
          "partial": "Experiment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment",
          "name": "basinHeader",
          "package": "hopfield",
          "signature": "String",
          "source": "src/Hopfield-Experiments-Experiment.html#basinHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment",
          "module": "Hopfield.Experiments.Experiment",
          "name": "basinHeader",
          "package": "hopfield",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment.html#v:basinHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment",
          "name": "errorHeader",
          "package": "hopfield",
          "signature": "String",
          "source": "src/Hopfield-Experiments-Experiment.html#errorHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment",
          "module": "Hopfield.Experiments.Experiment",
          "name": "errorHeader",
          "package": "hopfield",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment.html#v:errorHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment",
          "name": "genIO",
          "package": "hopfield",
          "signature": "Gen a -\u003e IO a",
          "source": "src/Hopfield-Experiments-Experiment.html#genIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment",
          "module": "Hopfield.Experiments.Experiment",
          "name": "genIO",
          "normalized": "Gen a-\u003eIO a",
          "package": "hopfield",
          "partial": "IO",
          "signature": "Gen a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment.html#v:genIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment",
          "name": "main",
          "package": "hopfield",
          "signature": "IO ()",
          "source": "src/Hopfield-Experiments-Experiment.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment",
          "module": "Hopfield.Experiments.Experiment",
          "name": "main",
          "normalized": "IO()",
          "package": "hopfield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePerforms experiments with two super attractors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "Experiment2SuperAttractors",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-Experiment2SuperAttractors.html",
          "type": "module"
        },
        "index": {
          "description": "Performs experiments with two super attractors",
          "hierarchy": "Hopfield Experiments Experiment2SuperAttractors",
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "Experiment2SuperAttractors",
          "package": "hopfield",
          "partial": "Experiment Super Attractors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment2SuperAttractors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "basinHeader",
          "package": "hopfield",
          "signature": "String",
          "source": "src/Hopfield-Experiments-Experiment2SuperAttractors.html#basinHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment2SuperAttractors",
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "basinHeader",
          "package": "hopfield",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment2SuperAttractors.html#v:basinHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "genIO",
          "package": "hopfield",
          "signature": "Gen a -\u003e IO a",
          "source": "src/Hopfield-Experiments-Experiment2SuperAttractors.html#genIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment2SuperAttractors",
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "genIO",
          "normalized": "Gen a-\u003eIO a",
          "package": "hopfield",
          "partial": "IO",
          "signature": "Gen a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment2SuperAttractors.html#v:genIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "main",
          "package": "hopfield",
          "signature": "IO ()",
          "source": "src/Hopfield-Experiments-Experiment2SuperAttractors.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments Experiment2SuperAttractors",
          "module": "Hopfield.Experiments.Experiment2SuperAttractors",
          "name": "main",
          "normalized": "IO()",
          "package": "hopfield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-Experiment2SuperAttractors.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "ExperimentUtil",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-ExperimentUtil.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ExperimentUtil",
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "ExperimentUtil",
          "package": "hopfield",
          "partial": "Experiment Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ExperimentUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doCheckFixed",
          "package": "hopfield",
          "signature": "[(a, HopfieldData)] -\u003e Int -\u003e String -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ExperimentUtil.html#doCheckFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ExperimentUtil",
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doCheckFixed",
          "normalized": "[(a,HopfieldData)]-\u003eInt-\u003eString-\u003eIO()",
          "package": "hopfield",
          "partial": "Check Fixed",
          "signature": "[(a,HopfieldData)]-\u003eInt-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ExperimentUtil.html#v:doCheckFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doErrorProb",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e [Degree] -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ExperimentUtil.html#doErrorProb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ExperimentUtil",
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doErrorProb",
          "normalized": "Int-\u003eInt-\u003e[Degree]-\u003eIO()",
          "package": "hopfield",
          "partial": "Error Prob",
          "signature": "Int-\u003eInt-\u003e[Degree]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ExperimentUtil.html#v:doErrorProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doHamming",
          "package": "hopfield",
          "signature": "Pattern -\u003e [Pattern] -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/Hopfield-Experiments-ExperimentUtil.html#doHamming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments ExperimentUtil",
          "module": "Hopfield.Experiments.ExperimentUtil",
          "name": "doHamming",
          "normalized": "Pattern-\u003e[Pattern]-\u003eString-\u003eString-\u003eIO()",
          "package": "hopfield",
          "partial": "Hamming",
          "signature": "Pattern-\u003e[Pattern]-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-ExperimentUtil.html#v:doHamming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "SmallExperiments",
          "package": "hopfield",
          "source": "src/Hopfield-Experiments-SmallExperiments.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Experiments SmallExperiments",
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "SmallExperiments",
          "package": "hopfield",
          "partial": "Small Experiments",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-SmallExperiments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "_REPETITIONS",
          "package": "hopfield",
          "signature": "Int",
          "source": "src/Hopfield-Experiments-SmallExperiments.html#_REPETITIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments SmallExperiments",
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "_REPETITIONS",
          "package": "hopfield",
          "partial": "REPETITIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-SmallExperiments.html#v:_REPETITIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "main",
          "package": "hopfield",
          "signature": "IO ()",
          "source": "src/Hopfield-Experiments-SmallExperiments.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments SmallExperiments",
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "main",
          "normalized": "IO()",
          "package": "hopfield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-SmallExperiments.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "runs",
          "package": "hopfield",
          "signature": "[(LearningType, Int, Int, Double, Double)]",
          "source": "src/Hopfield-Experiments-SmallExperiments.html#runs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Experiments SmallExperiments",
          "module": "Hopfield.Experiments.SmallExperiments",
          "name": "runs",
          "normalized": "[(LearningType,Int,Int,Double,Double)]",
          "package": "hopfield",
          "signature": "[(LearningType,Int,Int,Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Experiments-SmallExperiments.html#v:runs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase Hopfield model, providing training and running.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Hopfield",
          "name": "Hopfield",
          "package": "hopfield",
          "source": "src/Hopfield-Hopfield.html",
          "type": "module"
        },
        "index": {
          "description": "Base Hopfield model providing training and running",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "Hopfield",
          "package": "hopfield",
          "partial": "Hopfield",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates the network weights together with the patterns that generate\n it with the patterns which generate it\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "HopfieldData",
          "package": "hopfield",
          "source": "src/Hopfield-Hopfield.html#HopfieldData",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates the network weights together with the patterns that generate it with the patterns which generate it",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "HopfieldData",
          "package": "hopfield",
          "partial": "Hopfield Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#t:HopfieldData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Hopfield",
          "name": "LearningType",
          "package": "hopfield",
          "source": "src/Hopfield-Hopfield.html#LearningType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "LearningType",
          "package": "hopfield",
          "partial": "Learning Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#t:LearningType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Hopfield",
          "name": "Pattern",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Pattern",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "Pattern",
          "package": "hopfield",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Hopfield",
          "name": "Weights",
          "package": "hopfield",
          "source": "src/Hopfield-Common.html#Weights",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "Weights",
          "package": "hopfield",
          "partial": "Weights",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#t:Weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Hopfield",
          "name": "Hebbian",
          "package": "hopfield",
          "signature": "Hebbian",
          "source": "src/Hopfield-Hopfield.html#LearningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "Hebbian",
          "package": "hopfield",
          "partial": "Hebbian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:Hebbian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Hopfield",
          "name": "Storkey",
          "package": "hopfield",
          "signature": "Storkey",
          "source": "src/Hopfield-Hopfield.html#LearningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "Storkey",
          "package": "hopfield",
          "partial": "Storkey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:Storkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores patterns in an already trained network. One has to ensure that this\n function is not over used, as this will decrease the capacity of the network.\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "addPatterns",
          "package": "hopfield",
          "signature": "LearningType -\u003e HopfieldData -\u003e [Pattern] -\u003e HopfieldData",
          "source": "src/Hopfield-Hopfield.html#addPatterns",
          "type": "function"
        },
        "index": {
          "description": "Stores patterns in an already trained network One has to ensure that this function is not over used as this will decrease the capacity of the network",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "addPatterns",
          "normalized": "LearningType-\u003eHopfieldData-\u003e[Pattern]-\u003eHopfieldData",
          "package": "hopfield",
          "partial": "Patterns",
          "signature": "LearningType-\u003eHopfieldData-\u003e[Pattern]-\u003eHopfieldData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:addPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildHopfieldData patterns\u003c/code\u003e: Takes a list of patterns and\n builds a Hopfield network (by training) in which these patterns are\n stable states. The result of this function can be used to run a pattern\n against the network, by using \u003ccode\u003e\u003ca\u003ematchPattern\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "buildHopfieldData",
          "package": "hopfield",
          "signature": "LearningType -\u003e [Pattern] -\u003e HopfieldData",
          "source": "src/Hopfield-Hopfield.html#buildHopfieldData",
          "type": "function"
        },
        "index": {
          "description": "buildHopfieldData patterns Takes list of patterns and builds Hopfield network by training in which these patterns are stable states The result of this function can be used to run pattern against the network by using matchPattern",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "buildHopfieldData",
          "normalized": "LearningType-\u003e[Pattern]-\u003eHopfieldData",
          "package": "hopfield",
          "partial": "Hopfield Data",
          "signature": "LearningType-\u003e[Pattern]-\u003eHopfieldData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:buildHopfieldData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the weighted sum of current neuron values, which will give us\n the value of the neuron (by taking the sign)\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "computeH",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e Int -\u003e Int",
          "source": "src/Hopfield-Hopfield.html#computeH",
          "type": "function"
        },
        "index": {
          "description": "Computes the weighted sum of current neuron values which will give us the value of the neuron by taking the sign",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "computeH",
          "normalized": "Weights-\u003ePattern-\u003eInt-\u003eInt",
          "package": "hopfield",
          "signature": "Weights-\u003ePattern-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:computeH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenergy weights pattern\u003c/code\u003e: Computes the energy of a pattern given a Hopfield\n network (represented by \u003ccode\u003eweights\u003c/code\u003e).\n Pre: \u003ccode\u003elength weights == length pattern\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "energy",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e Double",
          "source": "src/Hopfield-Hopfield.html#energy",
          "type": "function"
        },
        "index": {
          "description": "energy weights pattern Computes the energy of pattern given Hopfield network represented by weights Pre length weights length pattern",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "energy",
          "normalized": "Weights-\u003ePattern-\u003eDouble",
          "package": "hopfield",
          "signature": "Weights-\u003ePattern-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:energy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ematchPatterns hopfieldData pattern\u003c/code\u003e:\n Computes the stable state of a pattern given a Hopfield network(represented\n by \u003ccode\u003eweights\u003c/code\u003e) and tries to find a match in a list of patterns which are\n stored in \u003ccode\u003ehopfieldData\u003c/code\u003e.\n Returns:\n\u003c/p\u003e\u003cp\u003eThe index of the matching pattern in \u003ccode\u003epatterns\u003c/code\u003e, if a match exists\n    The converged pattern (the stable state), otherwise\n\u003c/p\u003e\u003cp\u003ePre: \u003ccode\u003elength weights == length pattern\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "matchPattern",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Pattern -\u003e m (Either Pattern Int)",
          "source": "src/Hopfield-Hopfield.html#matchPattern",
          "type": "function"
        },
        "index": {
          "description": "matchPatterns hopfieldData pattern Computes the stable state of pattern given Hopfield network represented by weights and tries to find match in list of patterns which are stored in hopfieldData Returns The index of the matching pattern in patterns if match exists The converged pattern the stable state otherwise Pre length weights length pattern",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "matchPattern",
          "normalized": "HopfieldData-\u003ePattern-\u003ea(Either Pattern Int)",
          "package": "hopfield",
          "partial": "Pattern",
          "signature": "HopfieldData-\u003ePattern-\u003em(Either Pattern Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:matchPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe patterns which were used to train it\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "patterns",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e [Pattern]",
          "source": "src/Hopfield-Hopfield.html#patterns",
          "type": "function"
        },
        "index": {
          "description": "the patterns which were used to train it",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "patterns",
          "normalized": "HopfieldData-\u003e[Pattern]",
          "package": "hopfield",
          "signature": "HopfieldData-\u003e[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:patterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepeatedUpdate weights pattern\u003c/code\u003e: Performs repeated updates on the given\n pattern until it reaches a stable state with respect to the Hopfield network\n (represented by \u003ccode\u003eweights\u003c/code\u003e).\n Pre: \u003ccode\u003elength weights == length pattern\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "repeatedUpdate",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e m Pattern",
          "source": "src/Hopfield-Hopfield.html#repeatedUpdate",
          "type": "function"
        },
        "index": {
          "description": "repeatedUpdate weights pattern Performs repeated updates on the given pattern until it reaches stable state with respect to the Hopfield network represented by weights Pre length weights length pattern",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "repeatedUpdate",
          "normalized": "Weights-\u003ePattern-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Update",
          "signature": "Weights-\u003ePattern-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:repeatedUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdate weights pattern\u003c/code\u003e: Applies the update rule on \u003ccode\u003epattern\u003c/code\u003e for the\n first updatable neuron given the Hopfield network (represented by \u003ccode\u003eweights\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003ePre: \u003ccode\u003elength weights == length pattern\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "update",
          "package": "hopfield",
          "signature": "Weights -\u003e Pattern -\u003e m (Maybe Pattern)",
          "source": "src/Hopfield-Hopfield.html#update",
          "type": "function"
        },
        "index": {
          "description": "update weights pattern Applies the update rule on pattern for the first updatable neuron given the Hopfield network represented by weights Pre length weights length pattern",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "update",
          "normalized": "Weights-\u003ePattern-\u003ea(Maybe Pattern)",
          "package": "hopfield",
          "signature": "Weights-\u003ePattern-\u003em(Maybe Pattern)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatedUpdate\u003c/a\u003e\u003c/code\u003e, but collecting all patterns until convergence.\n The last pattern in the list is the converged pattern.\n The argument pattern is NOT prepended to the result list.\n\u003c/p\u003e\u003cp\u003ePOST: The returned list is not empty.\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "updateChain",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Pattern -\u003e m [Pattern]",
          "source": "src/Hopfield-Hopfield.html#updateChain",
          "type": "function"
        },
        "index": {
          "description": "Like repeatedUpdate but collecting all patterns until convergence The last pattern in the list is the converged pattern The argument pattern is NOT prepended to the result list POST The returned list is not empty",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "updateChain",
          "normalized": "HopfieldData-\u003ePattern-\u003ea[Pattern]",
          "package": "hopfield",
          "partial": "Chain",
          "signature": "HopfieldData-\u003ePattern-\u003em[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:updateChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe weights of the network\n\u003c/p\u003e",
          "module": "Hopfield.Hopfield",
          "name": "weights",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Weights",
          "source": "src/Hopfield-Hopfield.html#weights",
          "type": "function"
        },
        "index": {
          "description": "the weights of the network",
          "hierarchy": "Hopfield Hopfield",
          "module": "Hopfield.Hopfield",
          "name": "weights",
          "normalized": "HopfieldData-\u003eWeights",
          "package": "hopfield",
          "signature": "HopfieldData-\u003eWeights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Hopfield.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "ConvertImage",
          "package": "hopfield",
          "source": "src/Hopfield-Images-ConvertImage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "ConvertImage",
          "package": "hopfield",
          "partial": "Convert Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "CBinaryPattern",
          "package": "hopfield",
          "source": "src/Hopfield-Images-ConvertImage.html#CBinaryPattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "CBinaryPattern",
          "package": "hopfield",
          "partial": "CBinary Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#t:CBinaryPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "CBinaryPattern",
          "package": "hopfield",
          "signature": "CBinaryPattern",
          "source": "src/Hopfield-Images-ConvertImage.html#CBinaryPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "CBinaryPattern",
          "package": "hopfield",
          "partial": "CBinary Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#v:CBinaryPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "cPattern",
          "package": "hopfield",
          "signature": "[Word32]",
          "source": "src/Hopfield-Images-ConvertImage.html#CBinaryPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "cPattern",
          "normalized": "[Word]",
          "package": "hopfield",
          "partial": "Pattern",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#v:cPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "cPatternSize",
          "package": "hopfield",
          "signature": "Word32",
          "source": "src/Hopfield-Images-ConvertImage.html#CBinaryPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "cPatternSize",
          "package": "hopfield",
          "partial": "Pattern Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#v:cPatternSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Images.ConvertImage",
          "name": "loadPicture",
          "package": "hopfield",
          "signature": "String -\u003e Int -\u003e Int -\u003e IO CBinaryPattern",
          "source": "src/Hopfield-Images-ConvertImage.html#loadPicture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Images ConvertImage",
          "module": "Hopfield.Images.ConvertImage",
          "name": "loadPicture",
          "normalized": "String-\u003eInt-\u003eInt-\u003eIO CBinaryPattern",
          "package": "hopfield",
          "partial": "Picture",
          "signature": "String-\u003eInt-\u003eInt-\u003eIO CBinaryPattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Images-ConvertImage.html#v:loadPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to measure various properties of a network\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Measurement",
          "name": "Measurement",
          "package": "hopfield",
          "source": "src/Hopfield-Measurement.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to measure various properties of network",
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "Measurement",
          "package": "hopfield",
          "partial": "Measurement",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "BasinMeasure",
          "package": "hopfield",
          "source": "src/Hopfield-Measurement.html#BasinMeasure",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "BasinMeasure",
          "package": "hopfield",
          "partial": "Basin Measure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#t:BasinMeasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "checkFixed",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Int -\u003e Bool",
          "source": "src/Hopfield-Measurement.html#checkFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "checkFixed",
          "normalized": "HopfieldData-\u003eInt-\u003eBool",
          "package": "hopfield",
          "partial": "Fixed",
          "signature": "HopfieldData-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:checkFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "hammingDistribution",
          "package": "hopfield",
          "signature": "Int -\u003e (Int, Int) -\u003e T Int",
          "source": "src/Hopfield-Measurement.html#hammingDistribution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "hammingDistribution",
          "normalized": "Int-\u003e(Int,Int)-\u003eT Int",
          "package": "hopfield",
          "partial": "Distribution",
          "signature": "Int-\u003e(Int,Int)-\u003eT Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:hammingDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emeasureError hopfield\u003c/code\u003e: Measures the percentage of patterns in the network\n which are NOT fixed points. That is, it measures the *actual* error\n\u003c/p\u003e",
          "module": "Hopfield.Measurement",
          "name": "measureError",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Double",
          "source": "src/Hopfield-Measurement.html#measureError",
          "type": "function"
        },
        "index": {
          "description": "measureError hopfield Measures the percentage of patterns in the network which are NOT fixed points That is it measures the actual error",
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "measureError",
          "normalized": "HopfieldData-\u003eDouble",
          "package": "hopfield",
          "partial": "Error",
          "signature": "HopfieldData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:measureError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "measurePatternBasin",
          "package": "hopfield",
          "signature": "BasinMeasure m Int",
          "source": "src/Hopfield-Measurement.html#measurePatternBasin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "measurePatternBasin",
          "package": "hopfield",
          "partial": "Pattern Basin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:measurePatternBasin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "sampleHammingDistance",
          "package": "hopfield",
          "signature": "Pattern -\u003e Int -\u003e Int -\u003e m [Pattern]",
          "source": "src/Hopfield-Measurement.html#sampleHammingDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "sampleHammingDistance",
          "normalized": "Pattern-\u003eInt-\u003eInt-\u003ea[Pattern]",
          "package": "hopfield",
          "partial": "Hamming Distance",
          "signature": "Pattern-\u003eInt-\u003eInt-\u003em[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:sampleHammingDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "sampleHammingRange",
          "package": "hopfield",
          "signature": "Pattern -\u003e T Int -\u003e m Pattern",
          "source": "src/Hopfield-Measurement.html#sampleHammingRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "sampleHammingRange",
          "normalized": "Pattern-\u003eT Int-\u003ea Pattern",
          "package": "hopfield",
          "partial": "Hamming Range",
          "signature": "Pattern-\u003eT Int-\u003em Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:sampleHammingRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "samplePatternBasin",
          "package": "hopfield",
          "signature": "BasinMeasure m [Double]",
          "source": "src/Hopfield-Measurement.html#samplePatternBasin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "samplePatternBasin",
          "normalized": "BasinMeasure a[Double]",
          "package": "hopfield",
          "partial": "Pattern Basin",
          "signature": "BasinMeasure m[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:samplePatternBasin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Measurement",
          "name": "samplePatternRing",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Pattern -\u003e Int -\u003e m Double",
          "source": "src/Hopfield-Measurement.html#samplePatternRing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Measurement",
          "module": "Hopfield.Measurement",
          "name": "samplePatternRing",
          "normalized": "HopfieldData-\u003ePattern-\u003eInt-\u003ea Double",
          "package": "hopfield",
          "partial": "Pattern Ring",
          "signature": "HopfieldData-\u003ePattern-\u003eInt-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Measurement.html#v:samplePatternRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "SuperAttractors",
          "package": "hopfield",
          "source": "src/Hopfield-SuperAttractors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "SuperAttractors",
          "package": "hopfield",
          "partial": "Super Attractors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "Degree",
          "package": "hopfield",
          "source": "src/Hopfield-SuperAttractors.html#Degree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "Degree",
          "package": "hopfield",
          "partial": "Degree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#t:Degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "PatternCombiner",
          "package": "hopfield",
          "source": "src/Hopfield-SuperAttractors.html#PatternCombiner",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "PatternCombiner",
          "package": "hopfield",
          "partial": "Pattern Combiner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#t:PatternCombiner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "aggregateCombiners",
          "package": "hopfield",
          "signature": "[PatternCombiner [Pattern]] -\u003e PatternCombiner [[Pattern]]",
          "source": "src/Hopfield-SuperAttractors.html#aggregateCombiners",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "aggregateCombiners",
          "normalized": "[PatternCombiner[Pattern]]-\u003ePatternCombiner[[Pattern]]",
          "package": "hopfield",
          "partial": "Combiners",
          "signature": "[PatternCombiner[Pattern]]-\u003ePatternCombiner[[Pattern]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:aggregateCombiners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "allSuperAttr",
          "package": "hopfield",
          "signature": "PatternCombiner [Pattern]",
          "source": "src/Hopfield-SuperAttractors.html#allSuperAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "allSuperAttr",
          "normalized": "PatternCombiner[Pattern]",
          "package": "hopfield",
          "partial": "Super Attr",
          "signature": "PatternCombiner[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:allSuperAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "allSuperNets",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#allSuperNets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "allSuperNets",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "Super Nets",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:allSuperNets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "buildMultiPhaseNetwork",
          "package": "hopfield",
          "signature": "LearningType -\u003e [PatternCombiner [Pattern]] -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#buildMultiPhaseNetwork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "buildMultiPhaseNetwork",
          "normalized": "LearningType-\u003e[PatternCombiner[Pattern]]-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "Multi Phase Network",
          "signature": "LearningType-\u003e[PatternCombiner[Pattern]]-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:buildMultiPhaseNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "buildNetworks",
          "package": "hopfield",
          "signature": "a -\u003e [Degree] -\u003e LearningType -\u003e PatternCombiner a -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#buildNetworks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "buildNetworks",
          "normalized": "a-\u003e[Degree]-\u003eLearningType-\u003ePatternCombiner a-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "Networks",
          "signature": "a-\u003e[Degree]-\u003eLearningType-\u003ePatternCombiner a-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:buildNetworks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "measureMultiBasins",
          "package": "hopfield",
          "signature": "BasinMeasure m a -\u003e [HopfieldData] -\u003e Pattern -\u003e [m a]",
          "source": "src/Hopfield-SuperAttractors.html#measureMultiBasins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "measureMultiBasins",
          "normalized": "BasinMeasure a b-\u003e[HopfieldData]-\u003ePattern-\u003e[a b]",
          "package": "hopfield",
          "partial": "Multi Basins",
          "signature": "BasinMeasure m a-\u003e[HopfieldData]-\u003ePattern-\u003e[m a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:measureMultiBasins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "oneSuperAttr",
          "package": "hopfield",
          "signature": "PatternCombiner [Pattern]",
          "source": "src/Hopfield-SuperAttractors.html#oneSuperAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "oneSuperAttr",
          "normalized": "PatternCombiner[Pattern]",
          "package": "hopfield",
          "partial": "Super Attr",
          "signature": "PatternCombiner[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:oneSuperAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "oneSuperNets",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#oneSuperNets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "oneSuperNets",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "Super Nets",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:oneSuperNets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "p1",
          "package": "hopfield",
          "signature": "Pattern",
          "source": "src/Hopfield-SuperAttractors.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "p1",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:p1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "p2",
          "package": "hopfield",
          "signature": "Pattern",
          "source": "src/Hopfield-SuperAttractors.html#p2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "p2",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:p2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "powersOfTwo",
          "package": "hopfield",
          "signature": "Degree -\u003e [Degree]",
          "source": "src/Hopfield-SuperAttractors.html#powersOfTwo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "powersOfTwo",
          "normalized": "Degree-\u003e[Degree]",
          "package": "hopfield",
          "partial": "Of Two",
          "signature": "Degree-\u003e[Degree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:powersOfTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "q1",
          "package": "hopfield",
          "signature": "Pattern",
          "source": "src/Hopfield-SuperAttractors.html#q1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "q1",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:q1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "retrainAllSuperWithNormal",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#retrainAllSuperWithNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "retrainAllSuperWithNormal",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "All Super With Normal",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:retrainAllSuperWithNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "retrainAllSuperWithOneSuper",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#retrainAllSuperWithOneSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "retrainAllSuperWithOneSuper",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "All Super With One Super",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:retrainAllSuperWithOneSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "retrainNormalWithOneSuper",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#retrainNormalWithOneSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "retrainNormalWithOneSuper",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "Normal With One Super",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:retrainNormalWithOneSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "retrainOneSuperWithNormal",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#retrainOneSuperWithNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "retrainOneSuperWithNormal",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "One Super With Normal",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:retrainOneSuperWithNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "retrainOneSuperWithOneSuper",
          "package": "hopfield",
          "signature": "LearningType -\u003e [HopfieldData]",
          "source": "src/Hopfield-SuperAttractors.html#retrainOneSuperWithOneSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "retrainOneSuperWithOneSuper",
          "normalized": "LearningType-\u003e[HopfieldData]",
          "package": "hopfield",
          "partial": "One Super With One Super",
          "signature": "LearningType-\u003e[HopfieldData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:retrainOneSuperWithOneSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.SuperAttractors",
          "name": "twoSuperAttrOneFixed",
          "package": "hopfield",
          "signature": "Degree -\u003e PatternCombiner [Pattern]",
          "source": "src/Hopfield-SuperAttractors.html#twoSuperAttrOneFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield SuperAttractors",
          "module": "Hopfield.SuperAttractors",
          "name": "twoSuperAttrOneFixed",
          "normalized": "Degree-\u003ePatternCombiner[Pattern]",
          "package": "hopfield",
          "partial": "Super Attr One Fixed",
          "signature": "Degree-\u003ePatternCombiner[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-SuperAttractors.html#v:twoSuperAttrOneFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "TestUtil",
          "package": "hopfield",
          "source": "src/Hopfield-TestUtil.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "TestUtil",
          "package": "hopfield",
          "partial": "Test Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "Type",
          "package": "hopfield",
          "source": "src/Hopfield-TestUtil.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "Type",
          "package": "hopfield",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "BM",
          "package": "hopfield",
          "signature": "BM",
          "source": "src/Hopfield-TestUtil.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "BM",
          "package": "hopfield",
          "partial": "BM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:BM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "H",
          "package": "hopfield",
          "signature": "H",
          "source": "src/Hopfield-TestUtil.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "H",
          "package": "hopfield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a matrix with 0's along the diagonal and 1's otherwise\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "allWeightsSame",
          "package": "hopfield",
          "signature": "Int -\u003e [[Double]]",
          "source": "src/Hopfield-TestUtil.html#allWeightsSame",
          "type": "function"
        },
        "index": {
          "description": "Produces matrix with along the diagonal and otherwise",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "allWeightsSame",
          "normalized": "Int-\u003e[[Double]]",
          "package": "hopfield",
          "partial": "Weights Same",
          "signature": "Int-\u003e[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:allWeightsSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "binaryCheck",
          "package": "hopfield",
          "signature": "(Int, Int) -\u003e Bool",
          "source": "src/Hopfield-TestUtil.html#binaryCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "binaryCheck",
          "normalized": "(Int,Int)-\u003eBool",
          "package": "hopfield",
          "partial": "Check",
          "signature": "(Int,Int)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:binaryCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "binaryGen",
          "package": "hopfield",
          "signature": "Gen Int",
          "source": "src/Hopfield-TestUtil.html#binaryGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "binaryGen",
          "package": "hopfield",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:binaryGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of patterns and the number of hidden layers\n used to train a Boltzmann machine, as well as a generic pattern to \n recognize on this machine.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "boltzmannAndPatGen",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Gen ([Pattern], Int, Pattern)",
          "source": "src/Hopfield-TestUtil.html#boltzmannAndPatGen",
          "type": "function"
        },
        "index": {
          "description": "Generates list of patterns and the number of hidden layers used to train Boltzmann machine as well as generic pattern to recognize on this machine",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "boltzmannAndPatGen",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eGen([Pattern],Int,Pattern)",
          "package": "hopfield",
          "partial": "And Pat Gen",
          "signature": "Int-\u003eInt-\u003eInt-\u003eGen([Pattern],Int,Pattern)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:boltzmannAndPatGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eboltzmannBuildGen maxPatSize maxPatListSize max_hidden\u003c/code\u003e \n Generates the structures required for creating a Boltzmann machine: \n a list of patterns together with the number of hidden layers,\n which has to be less than max_hidden.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "boltzmannBuildGen",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Gen ([Pattern], Int)",
          "source": "src/Hopfield-TestUtil.html#boltzmannBuildGen",
          "type": "function"
        },
        "index": {
          "description": "boltzmannBuildGen maxPatSize maxPatListSize max hidden Generates the structures required for creating Boltzmann machine list of patterns together with the number of hidden layers which has to be less than max hidden",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "boltzmannBuildGen",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eGen([Pattern],Int)",
          "package": "hopfield",
          "partial": "Build Gen",
          "signature": "Int-\u003eInt-\u003eInt-\u003eGen([Pattern],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:boltzmannBuildGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eboundedListGen g n\u003c/code\u003e: Generates lists (max length n) of the given Gen\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "boundedListGen",
          "package": "hopfield",
          "signature": "Gen a -\u003e Int -\u003e Gen [a]",
          "source": "src/Hopfield-TestUtil.html#boundedListGen",
          "type": "function"
        },
        "index": {
          "description": "boundedListGen Generates lists max length of the given Gen",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "boundedListGen",
          "normalized": "Gen a-\u003eInt-\u003eGen[a]",
          "package": "hopfield",
          "partial": "List Gen",
          "signature": "Gen a-\u003eInt-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:boundedListGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eboundedReplicateGen n g\u003c/code\u003e Generates lists containing \u003ccode\u003eg\u003c/code\u003e replicated.\n The list is bounded in size by n.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "boundedReplicateGen",
          "package": "hopfield",
          "signature": "Int -\u003e Gen a -\u003e Gen [a]",
          "source": "src/Hopfield-TestUtil.html#boundedReplicateGen",
          "type": "function"
        },
        "index": {
          "description": "boundedReplicateGen Generates lists containing replicated The list is bounded in size by",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "boundedReplicateGen",
          "normalized": "Int-\u003eGen a-\u003eGen[a]",
          "package": "hopfield",
          "partial": "Replicate Gen",
          "signature": "Int-\u003eGen a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:boundedReplicateGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "buildBoltzmannCheck",
          "package": "hopfield",
          "signature": "([Pattern], Int) -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#buildBoltzmannCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "buildBoltzmannCheck",
          "normalized": "([Pattern],Int)-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Boltzmann Check",
          "signature": "([Pattern],Int)-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:buildBoltzmannCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "buildIntTuple",
          "package": "hopfield",
          "signature": "Gen (Int, Int)",
          "source": "src/Hopfield-TestUtil.html#buildIntTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "buildIntTuple",
          "normalized": "Gen(Int,Int)",
          "package": "hopfield",
          "partial": "Int Tuple",
          "signature": "Gen(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:buildIntTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "crosstalk",
          "package": "hopfield",
          "signature": "HopfieldData -\u003e Int -\u003e Int -\u003e Int",
          "source": "src/Hopfield-TestUtil.html#crosstalk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "crosstalk",
          "normalized": "HopfieldData-\u003eInt-\u003eInt-\u003eInt",
          "package": "hopfield",
          "signature": "HopfieldData-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:crosstalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains a network using \u003ccode\u003etraining_pats\u003c/code\u003e and then updates each\n pattern in pats according to the weights of that network.\n The aim is to check that the energy decreases after each update.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "energyDecreasesAfterUpdate",
          "package": "hopfield",
          "signature": "LearningType -\u003e ([Pattern], [Pattern]) -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#energyDecreasesAfterUpdate",
          "type": "function"
        },
        "index": {
          "description": "Trains network using training pats and then updates each pattern in pats according to the weights of that network The aim is to check that the energy decreases after each update",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "energyDecreasesAfterUpdate",
          "normalized": "LearningType-\u003e([Pattern],[Pattern])-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Decreases After Update",
          "signature": "LearningType-\u003e([Pattern],[Pattern])-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:energyDecreasesAfterUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "evalRandGen",
          "package": "hopfield",
          "signature": "Rand StdGen a -\u003e Gen a",
          "source": "src/Hopfield-TestUtil.html#evalRandGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "evalRandGen",
          "normalized": "Rand StdGen a-\u003eGen a",
          "package": "hopfield",
          "partial": "Rand Gen",
          "signature": "Rand StdGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:evalRandGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "mapMonad",
          "package": "hopfield",
          "signature": "(a -\u003e b) -\u003e m [a] -\u003e m [b]",
          "source": "src/Hopfield-TestUtil.html#mapMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "mapMonad",
          "normalized": "(a-\u003eb)-\u003ec[a]-\u003ec[b]",
          "package": "hopfield",
          "partial": "Monad",
          "signature": "(a-\u003eb)-\u003em[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:mapMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "nonempty",
          "package": "hopfield",
          "signature": "forall a.  Gen [a] -\u003e Gen [a]",
          "source": "src/Hopfield-TestUtil.html#nonempty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "nonempty",
          "normalized": "a b Gen[c]-\u003eGen[c]",
          "package": "hopfield",
          "signature": "forall a. Gen[a]-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:nonempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epatListGen t maxPatSize maxPatListSize\u003c/code\u003e Generates a list of patterns.\n The size of each pattern is less than maxPatSize.\n The size odf the list is less than maxPatListSize.\n The type is required in order to create types specific for Boltzmann, \n Hopfield etc.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "patListGen",
          "package": "hopfield",
          "signature": "Type -\u003e Int -\u003e Int -\u003e Gen [Pattern]",
          "source": "src/Hopfield-TestUtil.html#patListGen",
          "type": "function"
        },
        "index": {
          "description": "patListGen maxPatSize maxPatListSize Generates list of patterns The size of each pattern is less than maxPatSize The size odf the list is less than maxPatListSize The type is required in order to create types specific for Boltzmann Hopfield etc",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "patListGen",
          "normalized": "Type-\u003eInt-\u003eInt-\u003eGen[Pattern]",
          "package": "hopfield",
          "partial": "List Gen",
          "signature": "Type-\u003eInt-\u003eInt-\u003eGen[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:patListGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epatternGen n\u003c/code\u003e: Generates patterns of size n\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "patternGen",
          "package": "hopfield",
          "signature": "Type -\u003e Int -\u003e Gen Pattern",
          "source": "src/Hopfield-TestUtil.html#patternGen",
          "type": "function"
        },
        "index": {
          "description": "patternGen Generates patterns of size",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "patternGen",
          "normalized": "Type-\u003eInt-\u003eGen Pattern",
          "package": "hopfield",
          "partial": "Gen",
          "signature": "Type-\u003eInt-\u003eGen Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:patternGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epatternRangeGen (min, max)\u003c/code\u003e Generates patterns of size ranging\n between min and max\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "patternRangeGen",
          "package": "hopfield",
          "signature": "Type -\u003e (Int, Int) -\u003e Gen Pattern",
          "source": "src/Hopfield-TestUtil.html#patternRangeGen",
          "type": "function"
        },
        "index": {
          "description": "patternRangeGen min max Generates patterns of size ranging between min and max",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "patternRangeGen",
          "normalized": "Type-\u003e(Int,Int)-\u003eGen Pattern",
          "package": "hopfield",
          "partial": "Range Gen",
          "signature": "Type-\u003e(Int,Int)-\u003eGen Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:patternRangeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epatternsTupleGen g m1 m2\u003c/code\u003eGenerates a tuple of lists, as follows:\n Uses patListGen to generate 1 list of patterns with length less than m2.\n The list itself has to have length less than m1.\n The second element of a tuple is a list of patterns which have the same size\n as the patterns of the first list.\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "patternsTupleGen",
          "package": "hopfield",
          "signature": "Type -\u003e Int -\u003e Int -\u003e Gen ([Pattern], [Pattern])",
          "source": "src/Hopfield-TestUtil.html#patternsTupleGen",
          "type": "function"
        },
        "index": {
          "description": "patternsTupleGen m1 m2 Generates tuple of lists as follows Uses patListGen to generate list of patterns with length less than m2 The list itself has to have length less than m1 The second element of tuple is list of patterns which have the same size as the patterns of the first list",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "patternsTupleGen",
          "normalized": "Type-\u003eInt-\u003eInt-\u003eGen([Pattern],[Pattern])",
          "package": "hopfield",
          "partial": "Tuple Gen",
          "signature": "Type-\u003eInt-\u003eInt-\u003eGen([Pattern],[Pattern])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:patternsTupleGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprobabilityCheck (pats, nr_h, pat)\u003c/code\u003e. Trains a Boltzmann machine\n using \u003ccode\u003epats\u003c/code\u003e and \u003ccode\u003enr_h\u003c/code\u003e and computes the activation probability for \n \u003ccode\u003epat\u003c/code\u003e using this machine, and check if it is indeed a probability,\n ie in [0,1]\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "probabilityCheck",
          "package": "hopfield",
          "signature": "([Pattern], Int, Pattern) -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#probabilityCheck",
          "type": "function"
        },
        "index": {
          "description": "probabilityCheck pats nr pat Trains Boltzmann machine using pats and nr and computes the activation probability for pat using this machine and check if it is indeed probability ie in",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "probabilityCheck",
          "normalized": "([Pattern],Int,Pattern)-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Check",
          "signature": "([Pattern],Int,Pattern)-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:probabilityCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "repeatedUpdateCheck",
          "package": "hopfield",
          "signature": "LearningType -\u003e ([Pattern], [Pattern]) -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#repeatedUpdateCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "repeatedUpdateCheck",
          "normalized": "LearningType-\u003e([Pattern],[Pattern])-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Update Check",
          "signature": "LearningType-\u003e([Pattern],[Pattern])-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:repeatedUpdateCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the nth element in the list with \u003ccode\u003er\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "replaceAtN",
          "package": "hopfield",
          "signature": "Int -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Hopfield-TestUtil.html#replaceAtN",
          "type": "function"
        },
        "index": {
          "description": "Replaces the nth element in the list with",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "replaceAtN",
          "normalized": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "package": "hopfield",
          "partial": "At",
          "signature": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:replaceAtN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "sameElemList",
          "package": "hopfield",
          "signature": "a -\u003e Gen [a]",
          "source": "src/Hopfield-TestUtil.html#sameElemList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "sameElemList",
          "normalized": "a-\u003eGen[a]",
          "package": "hopfield",
          "partial": "Elem List",
          "signature": "a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:sameElemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate vectors containing the same element replicated\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "sameElemVector",
          "package": "hopfield",
          "signature": "a -\u003e Gen (Vector a)",
          "source": "src/Hopfield-TestUtil.html#sameElemVector",
          "type": "function"
        },
        "index": {
          "description": "Generate vectors containing the same element replicated",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "sameElemVector",
          "normalized": "a-\u003eGen(Vector a)",
          "package": "hopfield",
          "partial": "Elem Vector",
          "signature": "a-\u003eGen(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:sameElemVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random sign (+/- 1)\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "signGen",
          "package": "hopfield",
          "signature": "Gen Int",
          "source": "src/Hopfield-TestUtil.html#signGen",
          "type": "function"
        },
        "index": {
          "description": "Generate random sign",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "signGen",
          "package": "hopfield",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:signGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list generator to a vector generator\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "toGenVector",
          "package": "hopfield",
          "signature": "Gen [a] -\u003e Gen (Vector a)",
          "source": "src/Hopfield-TestUtil.html#toGenVector",
          "type": "function"
        },
        "index": {
          "description": "Convert list generator to vector generator",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "toGenVector",
          "normalized": "Gen[a]-\u003eGen(Vector a)",
          "package": "hopfield",
          "partial": "Gen Vector",
          "signature": "Gen[a]-\u003eGen(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:toGenVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed as a property to check that patterns which\n are used to create the network are stable in respect to update\n\u003c/p\u003e",
          "module": "Hopfield.TestUtil",
          "name": "trainingPatsAreFixedPoints",
          "package": "hopfield",
          "signature": "LearningType -\u003e [Pattern] -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#trainingPatsAreFixedPoints",
          "type": "function"
        },
        "index": {
          "description": "Used as property to check that patterns which are used to create the network are stable in respect to update",
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "trainingPatsAreFixedPoints",
          "normalized": "LearningType-\u003e[Pattern]-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Pats Are Fixed Points",
          "signature": "LearningType-\u003e[Pattern]-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:trainingPatsAreFixedPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.TestUtil",
          "name": "updateNeuronCheck",
          "package": "hopfield",
          "signature": "Int -\u003e ([Pattern], Int, Pattern) -\u003e Gen Bool",
          "source": "src/Hopfield-TestUtil.html#updateNeuronCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield TestUtil",
          "module": "Hopfield.TestUtil",
          "name": "updateNeuronCheck",
          "normalized": "Int-\u003e([Pattern],Int,Pattern)-\u003eGen Bool",
          "package": "hopfield",
          "partial": "Neuron Check",
          "signature": "Int-\u003e([Pattern],Int,Pattern)-\u003eGen Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-TestUtil.html#v:updateNeuronCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses general purpose functions which are use trought the project.\n Should not contain any project defined data types. Needs to be kept\n as general as possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hopfield.Util",
          "name": "Util",
          "package": "hopfield",
          "source": "src/Hopfield-Util.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses general purpose functions which are use trought the project Should not contain any project defined data types Needs to be kept as general as possible",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "Util",
          "package": "hopfield",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "(*.)",
          "package": "hopfield",
          "signature": "a -\u003e a1 -\u003e a",
          "source": "src/Hopfield-Util.html#%2A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "(*.) *.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hopfield",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "(/.)",
          "package": "hopfield",
          "signature": "a -\u003e a2 -\u003e a",
          "source": "src/Hopfield-Util.html#%2F.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "(/.) /.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hopfield",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "(.*)",
          "package": "hopfield",
          "signature": "a1 -\u003e a -\u003e a",
          "source": "src/Hopfield-Util.html#.%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "(.*) .*",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hopfield",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "(./)",
          "package": "hopfield",
          "signature": "a1 -\u003e a -\u003e a",
          "source": "src/Hopfield-Util.html#.%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "(./) ./",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hopfield",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "(./.)",
          "package": "hopfield",
          "signature": "a1 -\u003e a2 -\u003e a",
          "source": "src/Hopfield-Util.html#.%2F.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "(./.) ./.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hopfield",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:.-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "attachLabel",
          "package": "hopfield",
          "signature": "[Showable] -\u003e String",
          "source": "src/Hopfield-Util.html#attachLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "attachLabel",
          "normalized": "[Showable]-\u003eString",
          "package": "hopfield",
          "partial": "Label",
          "signature": "[Showable]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:attachLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "attachLabels",
          "package": "hopfield",
          "signature": "String -\u003e [[Showable]] -\u003e String",
          "source": "src/Hopfield-Util.html#attachLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "attachLabels",
          "normalized": "String-\u003e[[Showable]]-\u003eString",
          "package": "hopfield",
          "partial": "Labels",
          "signature": "String-\u003e[[Showable]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:attachLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "average",
          "package": "hopfield",
          "signature": "[a] -\u003e b",
          "source": "src/Hopfield-Util.html#average",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "average",
          "normalized": "[a]-\u003eb",
          "package": "hopfield",
          "signature": "[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "columnVector",
          "package": "hopfield",
          "signature": "Vector (Vector a) -\u003e Int -\u003e Vector a",
          "source": "src/Hopfield-Util.html#columnVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "columnVector",
          "normalized": "Vector(Vector a)-\u003eInt-\u003eVector a",
          "package": "hopfield",
          "partial": "Vector",
          "signature": "Vector(Vector a)-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:columnVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "combine",
          "package": "hopfield",
          "signature": "(a -\u003e b -\u003e c) -\u003e [[a]] -\u003e [[b]] -\u003e [[c]]",
          "source": "src/Hopfield-Util.html#combine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "combine",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[[a]]-\u003e[[b]]-\u003e[[c]]",
          "package": "hopfield",
          "signature": "(a-\u003eb-\u003ec)-\u003e[[a]]-\u003e[[b]]-\u003e[[c]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "combineVectors",
          "package": "hopfield",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Hopfield-Util.html#combineVectors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "combineVectors",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "hopfield",
          "partial": "Vectors",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:combineVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "compareBy",
          "package": "hopfield",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e Ordering",
          "source": "src/Hopfield-Util.html#compareBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "compareBy",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eOrdering",
          "package": "hopfield",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:compareBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "dotProduct",
          "package": "hopfield",
          "signature": "Vector a -\u003e Vector a -\u003e a",
          "source": "src/Hopfield-Util.html#dotProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "dotProduct",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "hopfield",
          "partial": "Product",
          "signature": "Vector a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:dotProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "findInList",
          "package": "hopfield",
          "signature": "[a] -\u003e a -\u003e Either a Int",
          "source": "src/Hopfield-Util.html#findInList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "findInList",
          "normalized": "[a]-\u003ea-\u003eEither a Int",
          "package": "hopfield",
          "partial": "In List",
          "signature": "[a]-\u003ea-\u003eEither a Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:findInList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "fromDataVector",
          "package": "hopfield",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Hopfield-Util.html#fromDataVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "fromDataVector",
          "normalized": "Vector a-\u003eVector a",
          "package": "hopfield",
          "partial": "Data Vector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:fromDataVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "getBinaryIndices",
          "package": "hopfield",
          "signature": "[a] -\u003e [(a, [Int])]",
          "source": "src/Hopfield-Util.html#getBinaryIndices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "getBinaryIndices",
          "normalized": "[a]-\u003e[(a,[Int])]",
          "package": "hopfield",
          "partial": "Binary Indices",
          "signature": "[a]-\u003e[(a,[Int])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:getBinaryIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "getElemOccurrences",
          "package": "hopfield",
          "signature": "[a] -\u003e [(a, Int)]",
          "source": "src/Hopfield-Util.html#getElemOccurrences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "getElemOccurrences",
          "normalized": "[a]-\u003e[(a,Int)]",
          "package": "hopfield",
          "partial": "Elem Occurrences",
          "signature": "[a]-\u003e[(a,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:getElemOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egibbsSampling a\u003c/code\u003e Gives the binary value of a neuron (0 or 1) from the\n activation sum\n\u003c/p\u003e",
          "module": "Hopfield.Util",
          "name": "gibbsSampling",
          "package": "hopfield",
          "signature": "Double -\u003e m Int",
          "source": "src/Hopfield-Util.html#gibbsSampling",
          "type": "function"
        },
        "index": {
          "description": "gibbsSampling Gives the binary value of neuron or from the activation sum",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "gibbsSampling",
          "normalized": "Double-\u003ea Int",
          "package": "hopfield",
          "partial": "Sampling",
          "signature": "Double-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:gibbsSampling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "hammingDistance",
          "package": "hopfield",
          "signature": "Vector Int -\u003e Vector Int -\u003e Int",
          "source": "src/Hopfield-Util.html#hammingDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "hammingDistance",
          "normalized": "Vector Int-\u003eVector Int-\u003eInt",
          "package": "hopfield",
          "partial": "Distance",
          "signature": "Vector Int-\u003eVector Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:hammingDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a 2D vector into a list of lists\n\u003c/p\u003e",
          "module": "Hopfield.Util",
          "name": "list2D",
          "package": "hopfield",
          "signature": "Vector (Vector a) -\u003e [[a]]",
          "source": "src/Hopfield-Util.html#list2D",
          "type": "function"
        },
        "index": {
          "description": "Converts vector into list of lists",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "list2D",
          "normalized": "Vector(Vector a)-\u003e[[a]]",
          "package": "hopfield",
          "signature": "Vector(Vector a)-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:list2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "log2",
          "package": "hopfield",
          "signature": "Double -\u003e Double",
          "source": "src/Hopfield-Util.html#log2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "log2",
          "normalized": "Double-\u003eDouble",
          "package": "hopfield",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:log2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a number sampled from a random distribution, given the mean and\n standard deviation.\n\u003c/p\u003e",
          "module": "Hopfield.Util",
          "name": "normal",
          "package": "hopfield",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Hopfield-Util.html#normal",
          "type": "function"
        },
        "index": {
          "description": "Generates number sampled from random distribution given the mean and standard deviation",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "normal",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "hopfield",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "numDiffs",
          "package": "hopfield",
          "signature": "[a] -\u003e [a] -\u003e Int",
          "source": "src/Hopfield-Util.html#numDiffs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "numDiffs",
          "normalized": "[a]-\u003e[a]-\u003eInt",
          "package": "hopfield",
          "partial": "Diffs",
          "signature": "[a]-\u003e[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:numDiffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "patternToAsciiArt",
          "package": "hopfield",
          "signature": "Int -\u003e Pattern -\u003e String",
          "source": "src/Hopfield-Util.html#patternToAsciiArt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "patternToAsciiArt",
          "normalized": "Int-\u003ePattern-\u003eString",
          "package": "hopfield",
          "partial": "To Ascii Art",
          "signature": "Int-\u003ePattern-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:patternToAsciiArt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "prettyList",
          "package": "hopfield",
          "signature": "[a] -\u003e String",
          "source": "src/Hopfield-Util.html#prettyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "prettyList",
          "normalized": "[a]-\u003eString",
          "package": "hopfield",
          "partial": "List",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:prettyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "printMList",
          "package": "hopfield",
          "signature": "[IO a] -\u003e [a -\u003e String] -\u003e IO ()",
          "source": "src/Hopfield-Util.html#printMList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "printMList",
          "normalized": "[IO a]-\u003e[a-\u003eString]-\u003eIO()",
          "package": "hopfield",
          "partial": "MList",
          "signature": "[IO a]-\u003e[a-\u003eString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:printMList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "randomBinaryVector",
          "package": "hopfield",
          "signature": "Int -\u003e m (Vector Int)",
          "source": "src/Hopfield-Util.html#randomBinaryVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "randomBinaryVector",
          "normalized": "Int-\u003ea(Vector Int)",
          "package": "hopfield",
          "partial": "Binary Vector",
          "signature": "Int-\u003em(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:randomBinaryVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "randomElem",
          "package": "hopfield",
          "signature": "[a] -\u003e m a",
          "source": "src/Hopfield-Util.html#randomElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "randomElem",
          "normalized": "[a]-\u003eb a",
          "package": "hopfield",
          "partial": "Elem",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:randomElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "randomSignVector",
          "package": "hopfield",
          "signature": "Int -\u003e m (Vector Int)",
          "source": "src/Hopfield-Util.html#randomSignVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "randomSignVector",
          "normalized": "Int-\u003ea(Vector Int)",
          "package": "hopfield",
          "partial": "Sign Vector",
          "signature": "Int-\u003em(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:randomSignVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "repeatUntilEqual",
          "package": "hopfield",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Hopfield-Util.html#repeatUntilEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "repeatUntilEqual",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "hopfield",
          "partial": "Until Equal",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:repeatUntilEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "repeatUntilEqualOrLimitExceeded",
          "package": "hopfield",
          "signature": "Int -\u003e (a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Hopfield-Util.html#repeatUntilEqualOrLimitExceeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "repeatUntilEqualOrLimitExceeded",
          "normalized": "Int-\u003e(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "hopfield",
          "partial": "Until Equal Or Limit Exceeded",
          "signature": "Int-\u003e(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:repeatUntilEqualOrLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "repeatUntilNothing",
          "package": "hopfield",
          "signature": "(a -\u003e m (Maybe a)) -\u003e a -\u003e m a",
          "source": "src/Hopfield-Util.html#repeatUntilNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "repeatUntilNothing",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb a",
          "package": "hopfield",
          "partial": "Until Nothing",
          "signature": "(a-\u003em(Maybe a))-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:repeatUntilNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "runT",
          "package": "hopfield",
          "signature": "T a -\u003e m a",
          "source": "src/Hopfield-Util.html#runT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "runT",
          "normalized": "T a-\u003eb a",
          "package": "hopfield",
          "signature": "T a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:runT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "shuffle",
          "package": "hopfield",
          "signature": "Array Int a -\u003e m [a]",
          "source": "src/Hopfield-Util.html#shuffle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "shuffle",
          "normalized": "Array Int a-\u003eb[a]",
          "package": "hopfield",
          "signature": "Array Int a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "toArray",
          "package": "hopfield",
          "signature": "[a] -\u003e Array Int a",
          "source": "src/Hopfield-Util.html#toArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "toArray",
          "normalized": "[a]-\u003eArray Int a",
          "package": "hopfield",
          "partial": "Array",
          "signature": "[a]-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "toBinary",
          "package": "hopfield",
          "signature": "Int -\u003e Int -\u003e [Int]",
          "source": "src/Hopfield-Util.html#toBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "toBinary",
          "normalized": "Int-\u003eInt-\u003e[Int]",
          "package": "hopfield",
          "partial": "Binary",
          "signature": "Int-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:toBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "toDouble",
          "package": "hopfield",
          "signature": "Vector a -\u003e Vector b",
          "source": "src/Hopfield-Util.html#toDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "toDouble",
          "normalized": "Vector a-\u003eVector b",
          "package": "hopfield",
          "partial": "Double",
          "signature": "Vector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:toDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hopfield.Util",
          "name": "toPercents",
          "package": "hopfield",
          "signature": "[Double] -\u003e String",
          "source": "src/Hopfield-Util.html#toPercents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "toPercents",
          "normalized": "[Double]-\u003eString",
          "package": "hopfield",
          "partial": "Percents",
          "signature": "[Double]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:toPercents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the monadic action returning a maybe until \u003ccode\u003eNothing\u003c/code\u003e is returned,\n collecting the results in a list.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003eunfoldr\u003c/code\u003e, the initial value is not part of the result list.\n\u003c/p\u003e",
          "module": "Hopfield.Util",
          "name": "unfoldrSelfM",
          "package": "hopfield",
          "signature": "(a -\u003e m (Maybe a)) -\u003e a -\u003e m [a]",
          "source": "src/Hopfield-Util.html#unfoldrSelfM",
          "type": "function"
        },
        "index": {
          "description": "Executes the monadic action returning maybe until Nothing is returned collecting the results in list Like unfoldr the initial value is not part of the result list",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "unfoldrSelfM",
          "normalized": "(a-\u003eb(Maybe a))-\u003ea-\u003eb[a]",
          "package": "hopfield",
          "partial": "Self",
          "signature": "(a-\u003em(Maybe a))-\u003ea-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:unfoldrSelfM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of lists to a 2D vector\n\u003c/p\u003e",
          "module": "Hopfield.Util",
          "name": "vector2D",
          "package": "hopfield",
          "signature": "[[a]] -\u003e Vector (Vector a)",
          "source": "src/Hopfield-Util.html#vector2D",
          "type": "function"
        },
        "index": {
          "description": "Converts list of lists to vector",
          "hierarchy": "Hopfield Util",
          "module": "Hopfield.Util",
          "name": "vector2D",
          "normalized": "[[a]]-\u003eVector(Vector a)",
          "package": "hopfield",
          "signature": "[[a]]-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield/docs/Hopfield-Util.html#v:vector2D"
      }
    }
  ]
]