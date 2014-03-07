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
        "word": "HLearn-algebra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains \"low-level higher order functions\" for manipulating algebraic homomorphisms.  You probably want to use the \u003ca\u003eHomTrainer\u003c/a\u003e type-class rather than using these functions directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "Functions",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains low-level higher order functions for manipulating algebraic homomorphisms You probably want to use the HomTrainer type-class rather than using these functions directly",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "Functions",
          "package": "HLearn-algebra",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery data type that implements this class has a corresponding function.  We can use this data type as type level parameters to other data types.  This gives us some of the benefit of dependently typed functions.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "Function",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Functions.html#Function",
          "type": "class"
        },
        "index": {
          "description": "Every data type that implements this class has corresponding function We can use this data type as type level parameters to other data types This gives us some of the benefit of dependently typed functions",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "Function",
          "package": "HLearn-algebra",
          "partial": "Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a singleton trainer into a batch trainer, which is also a semigroup homomorphism.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "batch",
          "package": "HLearn-algebra",
          "signature": "(datapoint -\u003e model)-\u003e container datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "Converts singleton trainer into batch trainer which is also semigroup homomorphism",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "batch",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "HLearn-algebra",
          "signature": "(datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:batch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Functions",
          "name": "batchCK",
          "package": "HLearn-algebra",
          "signature": "(datapoint -\u003e model)-\u003e container datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "batchCK",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "HLearn-algebra",
          "partial": "CK",
          "signature": "(datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:batchCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Functions",
          "name": "function",
          "package": "HLearn-algebra",
          "signature": "f -\u003e domain -\u003e range",
          "source": "src/HLearn-Algebra-Functions.html#function",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "function",
          "normalized": "a-\u003eb-\u003ec",
          "package": "HLearn-algebra",
          "signature": "f-\u003edomain-\u003erange",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eonline\u003c/a\u003e\u003c/code\u003e.  Converts an online trainer into a batch trainer.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "offline",
          "package": "HLearn-algebra",
          "signature": "(model -\u003e datapoint -\u003e model)-\u003e datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "The inverse of online Converts an online trainer into batch trainer",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "offline",
          "normalized": "(a-\u003eb-\u003ea)-\u003eb-\u003ea",
          "package": "HLearn-algebra",
          "signature": "(model-\u003edatapoint-\u003emodel)-\u003edatapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:offline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a batch trainer into an online trainer.  The input function should be a semigroup homomorphism.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "online",
          "package": "HLearn-algebra",
          "signature": "(datapoint -\u003e model)-\u003e model -\u003e datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "Converts batch trainer into an online trainer The input function should be semigroup homomorphism",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "online",
          "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003eb",
          "package": "HLearn-algebra",
          "signature": "(datapoint-\u003emodel)-\u003emodel-\u003edatapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:online"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallelizes any batch trainer to run over multiple processors on a single machine.  The function automatically detects the number of available processors and parallelizes the function accordingly.  This requires the use of unsafePerformIO, however, the result should still be safe.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "parallel",
          "package": "HLearn-algebra",
          "signature": "(container datapoint -\u003e model)-\u003e container datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "Parallelizes any batch trainer to run over multiple processors on single machine The function automatically detects the number of available processors and parallelizes the function accordingly This requires the use of unsafePerformIO however the result should still be safe",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "parallel",
          "normalized": "(a b-\u003ec)-\u003ea b-\u003ec",
          "package": "HLearn-algebra",
          "signature": "(container datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike fold, but (i) only for use on the semigroup operation (\u003c\u003e) and (ii) uses the fan-in reduction strategy which is more efficient when the semigroup operation takes nonconstant time depending on the size of the data structures being reduced.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "reduce",
          "package": "HLearn-algebra",
          "signature": "container sg -\u003e sg",
          "source": "src/HLearn-Algebra-Functions.html#reduce",
          "type": "function"
        },
        "index": {
          "description": "Like fold but only for use on the semigroup operation and ii uses the fan-in reduction strategy which is more efficient when the semigroup operation takes nonconstant time depending on the size of the data structures being reduced",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "reduce",
          "normalized": "a b-\u003eb",
          "package": "HLearn-algebra",
          "signature": "container sg-\u003esg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally we would define our semigroup operation explicitly.  However, it is possible to generate one from an online trainer and a pseudo inverse.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "semigroup",
          "package": "HLearn-algebra",
          "signature": "(model -\u003e datapoint -\u003e model)-\u003e (model -\u003e datapoint)-\u003e model -\u003e model -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "Normally we would define our semigroup operation explicitly However it is possible to generate one from an online trainer and pseudo inverse",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "semigroup",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea",
          "package": "HLearn-algebra",
          "signature": "(model-\u003edatapoint-\u003emodel)-\u003e(model-\u003edatapoint)-\u003emodel-\u003emodel-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:semigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003eunbatch\u003c/a\u003e\u003c/code\u003e.  Converts a semigroup homomorphism into a singleton trainer.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Functions",
          "name": "unbatch",
          "package": "HLearn-algebra",
          "signature": "([datapoint] -\u003e model)-\u003e datapoint -\u003e model",
          "type": "function"
        },
        "index": {
          "description": "Inverse of unbatch Converts semigroup homomorphism into singleton trainer",
          "hierarchy": "HLearn Algebra Functions",
          "module": "HLearn.Algebra.Functions",
          "name": "unbatch",
          "normalized": "([a]-\u003eb)-\u003ea-\u003eb",
          "package": "HLearn-algebra",
          "signature": "([datapoint]-\u003emodel)-\u003edatapoint-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:unbatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "CoHomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "CoHomTrainer",
          "package": "HLearn-algebra",
          "partial": "Co Hom Trainer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003eCoHomTrainer\u003c/a\u003e is a formal way of describing a generative model.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "CoHomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html#CoHomTrainer",
          "type": "class"
        },
        "index": {
          "description": "CoHomTrainer is formal way of describing generative model",
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "CoHomTrainer",
          "package": "HLearn-algebra",
          "partial": "Co Hom Trainer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#t:CoHomTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample without replacement a single datapoint\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "coadd1dp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Rand g (CoDatapoint model, model)",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html#coadd1dp",
          "type": "method"
        },
        "index": {
          "description": "sample without replacement single datapoint",
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "coadd1dp",
          "normalized": "a-\u003eRand b(CoDatapoint a,a)",
          "package": "HLearn-algebra",
          "signature": "model-\u003eRand g(CoDatapoint model,model)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:coadd1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample without replacement as many datapoints as possible\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "coaddBatch",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Rand g [(CoDatapoint model, model)]",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html#coaddBatch",
          "type": "method"
        },
        "index": {
          "description": "sample without replacement as many datapoints as possible",
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "coaddBatch",
          "normalized": "a-\u003eRand b[(CoDatapoint a,a)]",
          "package": "HLearn-algebra",
          "partial": "Batch",
          "signature": "model-\u003eRand g[(CoDatapoint model,model)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:coaddBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esamples infinitely many datapoints with replacement\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "cotrain",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Rand g [CoDatapoint model]",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html#cotrain",
          "type": "method"
        },
        "index": {
          "description": "samples infinitely many datapoints with replacement",
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "cotrain",
          "normalized": "a-\u003eRand b[CoDatapoint a]",
          "package": "HLearn-algebra",
          "signature": "model-\u003eRand g[CoDatapoint model]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:cotrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample with replacement a single datapoint\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "cotrain1dp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Rand g (CoDatapoint model)",
          "source": "src/HLearn-Algebra-Models-CoHomTrainer.html#cotrain1dp",
          "type": "method"
        },
        "index": {
          "description": "sample with replacement single datapoint",
          "hierarchy": "HLearn Algebra Models CoHomTrainer",
          "module": "HLearn.Algebra.Models.CoHomTrainer",
          "name": "cotrain1dp",
          "normalized": "a-\u003eRand b(CoDatapoint a)",
          "package": "HLearn-algebra",
          "signature": "model-\u003eRand g(CoDatapoint model)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:cotrain1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvery model in the HLearn library is an instance of the \u003ccode\u003e\u003ca\u003eHomTrainer\u003c/a\u003e\u003c/code\u003e type class.  This ensures that the batch trainer is a monoid homomorphism.  This is a restrictive condition that not all learning models satisfy; however, it is useful for two reasons.  First, this property lets us easily derive three important functions for machine learning algorithms: online trainers, parallel trainers, and fast cross-validation algorithms.  Second, many popular algorithms (or variants on them) satisfy the condition and are implemented in the library.\n\u003c/p\u003e\u003cp\u003eFor a full theoretical description of the \u003ccode\u003e\u003ca\u003eHomTrainer\u003c/a\u003e\u003c/code\u003e class, see the paper: \u003ca\u003eHERE\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUnfortunately, the class hierarchy here is slightly more complicated.  In the paper, we assume that all parameters for a model can be included in the model's type.  Currently, however, this is not possible in Haskell, so every model must also have a data type that describes it's parameters.  This is the purpose of the \u003ccode\u003eModelParams\u003c/code\u003e class.  Most models have either no parameters, or reasonable defaults, and so their parameters are instances of the \u003ccode\u003eDefaultParams\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "HomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html",
          "type": "module"
        },
        "index": {
          "description": "Every model in the HLearn library is an instance of the HomTrainer type class This ensures that the batch trainer is monoid homomorphism This is restrictive condition that not all learning models satisfy however it is useful for two reasons First this property lets us easily derive three important functions for machine learning algorithms online trainers parallel trainers and fast cross-validation algorithms Second many popular algorithms or variants on them satisfy the condition and are implemented in the library For full theoretical description of the HomTrainer class see the paper HERE Unfortunately the class hierarchy here is slightly more complicated In the paper we assume that all parameters for model can be included in the model type Currently however this is not possible in Haskell so every model must also have data type that describes it parameters This is the purpose of the ModelParams class Most models have either no parameters or reasonable defaults and so their parameters are instances of the DefaultParams class",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "HomTrainer",
          "package": "HLearn-algebra",
          "partial": "Hom Trainer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA minimal complete definition of the class is the singleton trainer 'train1dp\\''\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "HomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#HomTrainer",
          "type": "class"
        },
        "index": {
          "description": "minimal complete definition of the class is the singleton trainer train1dp",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "HomTrainer",
          "package": "HLearn-algebra",
          "partial": "Hom Trainer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:HomTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumdp returns the number of data points that the model has been trained on\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "NumDP",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#NumDP",
          "type": "class"
        },
        "index": {
          "description": "numdp returns the number of data points that the model has been trained on",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "NumDP",
          "package": "HLearn-algebra",
          "partial": "Num DP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:NumDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "WeightedHomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#WeightedHomTrainer",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "WeightedHomTrainer",
          "package": "HLearn-algebra",
          "partial": "Weighted Hom Trainer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:WeightedHomTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe online trainer\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "add1dp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Datapoint model -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#add1dp",
          "type": "method"
        },
        "index": {
          "description": "The online trainer",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "add1dp",
          "normalized": "a-\u003eDatapoint a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "model-\u003eDatapoint model-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:add1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "add1dpW",
          "package": "HLearn-algebra",
          "signature": "model -\u003e WeightedDatapoint model -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#add1dpW",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "add1dpW",
          "normalized": "a-\u003eWeightedDatapoint a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "model-\u003eWeightedDatapoint model-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:add1dpW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe batch online trainer; will be more efficient than simply calling \u003ccode\u003e\u003ca\u003eadd1dp\u003c/a\u003e\u003c/code\u003e for each element being added\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatch",
          "package": "HLearn-algebra",
          "signature": "model -\u003e container (Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatch",
          "type": "method"
        },
        "index": {
          "description": "The batch online trainer will be more efficient than simply calling add1dp for each element being added",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatch",
          "normalized": "a-\u003eb(Datapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "partial": "Batch",
          "signature": "model-\u003econtainer(Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatchCK",
          "package": "HLearn-algebra",
          "signature": "model -\u003e container (Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatchCK",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatchCK",
          "normalized": "a-\u003eb(Datapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "partial": "Batch CK",
          "signature": "model-\u003econtainer(Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatchCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatchW",
          "package": "HLearn-algebra",
          "signature": "model -\u003e container (WeightedDatapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatchW",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "addBatchW",
          "normalized": "a-\u003eb(WeightedDatapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "partial": "Batch",
          "signature": "model-\u003econtainer(WeightedDatapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatchW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "numdp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Ring model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#numdp",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "numdp",
          "normalized": "a-\u003eRing a",
          "package": "HLearn-algebra",
          "signature": "model-\u003eRing model",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:numdp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtracts a single data point from the model\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "sub1dp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e Datapoint model -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#sub1dp",
          "type": "function"
        },
        "index": {
          "description": "subtracts single data point from the model",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "sub1dp",
          "normalized": "a-\u003eDatapoint a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "model-\u003eDatapoint model-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:sub1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtracts a single weighted data point from the model\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "sub1dpW",
          "package": "HLearn-algebra",
          "signature": "model -\u003e WeightedDatapoint model -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#sub1dpW",
          "type": "function"
        },
        "index": {
          "description": "subtracts single weighted data point from the model",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "sub1dpW",
          "normalized": "a-\u003eWeightedDatapoint a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "model-\u003eWeightedDatapoint model-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:sub1dpW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtracts a multiple data point from the model\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "subBatch",
          "package": "HLearn-algebra",
          "signature": "model -\u003e container (Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#subBatch",
          "type": "function"
        },
        "index": {
          "description": "subtracts multiple data point from the model",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "subBatch",
          "normalized": "a-\u003eb(Datapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "partial": "Batch",
          "signature": "model-\u003econtainer(Datapoint model)-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:subBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtracts multiple weighted data points from the model\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "subBatchW",
          "package": "HLearn-algebra",
          "signature": "model -\u003e container (WeightedDatapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#subBatchW",
          "type": "function"
        },
        "index": {
          "description": "subtracts multiple weighted data points from the model",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "subBatchW",
          "normalized": "a-\u003eb(WeightedDatapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "partial": "Batch",
          "signature": "model-\u003econtainer(WeightedDatapoint model)-\u003emodel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:subBatchW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe batch trainer\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train",
          "package": "HLearn-algebra",
          "signature": "container (Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#train",
          "type": "method"
        },
        "index": {
          "description": "The batch trainer",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train",
          "normalized": "a(Datapoint b)-\u003eb",
          "package": "HLearn-algebra",
          "signature": "container(Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton trainer\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train1dp",
          "package": "HLearn-algebra",
          "signature": "Datapoint model -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#train1dp",
          "type": "method"
        },
        "index": {
          "description": "The singleton trainer",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train1dp",
          "normalized": "Datapoint a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "Datapoint model-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train1dpW",
          "package": "HLearn-algebra",
          "signature": "(Ring model, Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#train1dpW",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "train1dpW",
          "normalized": "(Ring a,Datapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "signature": "(Ring model,Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train1dpW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCK methods take advantage of the ContraintKinds extension to allow containers that require constraints.  In particular, they allow the use of Unboxed Vectors, which can improve performance.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "trainCK",
          "package": "HLearn-algebra",
          "signature": "container (Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#trainCK",
          "type": "method"
        },
        "index": {
          "description": "CK methods take advantage of the ContraintKinds extension to allow containers that require constraints In particular they allow the use of Unboxed Vectors which can improve performance",
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "trainCK",
          "normalized": "a(Datapoint b)-\u003eb",
          "package": "HLearn-algebra",
          "partial": "CK",
          "signature": "container(Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:trainCK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "trainW",
          "package": "HLearn-algebra",
          "signature": "container (Ring model, Datapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-HomTrainer.html#trainW",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models HomTrainer",
          "module": "HLearn.Algebra.Models.HomTrainer",
          "name": "trainW",
          "normalized": "a(Ring b,Datapoint b)-\u003eb",
          "package": "HLearn-algebra",
          "signature": "container(Ring model,Datapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:trainW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLame trainers are trainers that are crippled---They are not Monoids, and training their models is not a homomorphism.  This means we can't do any of the cool manipulations automatically that we can do with the HomTrainer class.  These classes are provided mostly for development and testing purposes.  It is not recommended that you use any of their instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "Lame",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-Lame.html",
          "type": "module"
        },
        "index": {
          "description": "Lame trainers are trainers that are crippled---They are not Monoids and training their models is not homomorphism This means we can do any of the cool manipulations automatically that we can do with the HomTrainer class These classes are provided mostly for development and testing purposes It is not recommended that you use any of their instances",
          "hierarchy": "HLearn Algebra Models Lame",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "Lame",
          "package": "HLearn-algebra",
          "partial": "Lame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a non-homomorphic batch trainer\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "LameTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-Lame.html#LameTrainer",
          "type": "class"
        },
        "index": {
          "description": "Provides non-homomorphic batch trainer",
          "hierarchy": "HLearn Algebra Models Lame",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "LameTrainer",
          "package": "HLearn-algebra",
          "partial": "Lame Trainer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#t:LameTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a non-homomorphic online trainer\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "LameTrainerOnline",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Models-Lame.html#LameTrainerOnline",
          "type": "class"
        },
        "index": {
          "description": "Provides non-homomorphic online trainer",
          "hierarchy": "HLearn Algebra Models Lame",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "LameTrainerOnline",
          "package": "HLearn-algebra",
          "partial": "Lame Trainer Online",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#t:LameTrainerOnline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.Lame",
          "name": "lame_add1dp",
          "package": "HLearn-algebra",
          "signature": "model -\u003e LameDatapointOnline model -\u003e model",
          "source": "src/HLearn-Algebra-Models-Lame.html#lame_add1dp",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models Lame",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "lame_add1dp",
          "normalized": "a-\u003eLameDatapointOnline a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "model-\u003eLameDatapointOnline model-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#v:lame_add1dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Models.Lame",
          "name": "lame_train",
          "package": "HLearn-algebra",
          "signature": "LameContainer model (LameDatapoint model) -\u003e model",
          "source": "src/HLearn-Algebra-Models-Lame.html#lame_train",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Models Lame",
          "module": "HLearn.Algebra.Models.Lame",
          "name": "lame_train",
          "normalized": "LameContainer a(LameDatapoint a)-\u003ea",
          "package": "HLearn-algebra",
          "signature": "LameContainer model(LameDatapoint model)-\u003emodel",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#v:lame_train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-Bagging.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free Bagging",
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging",
          "package": "HLearn-algebra",
          "partial": "Bagging",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-Bagging.html#Bagging",
          "type": "type"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free Bagging",
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging",
          "package": "HLearn-algebra",
          "partial": "Bagging",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#t:Bagging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging'",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-Bagging.html#Bagging%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free Bagging",
          "module": "HLearn.Algebra.Structures.Free.Bagging",
          "name": "Bagging'",
          "package": "HLearn-algebra",
          "partial": "Bagging'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#t:Bagging-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer",
          "package": "HLearn-algebra",
          "partial": "Free Hom Trainer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "AbelianGroup",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#AbelianGroup",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "AbelianGroup",
          "package": "HLearn-algebra",
          "partial": "Abelian Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:AbelianGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer",
          "package": "HLearn-algebra",
          "signature": "FreeHomTrainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer",
          "package": "HLearn-algebra",
          "partial": "Free Hom Trainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:FreeHomTrainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer'",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#FreeHomTrainer%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "FreeHomTrainer'",
          "package": "HLearn-algebra",
          "partial": "Free Hom Trainer'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:FreeHomTrainer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "NoFlatten",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#NoFlatten",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
          "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
          "name": "NoFlatten",
          "package": "HLearn-algebra",
          "partial": "No Flatten",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:NoFlatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeModule.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeModule",
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "partial": "Free Module",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeModule",
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "partial": "Free Module",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#t:FreeModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "signature": "FreeModule",
          "source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeModule",
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "FreeModule",
          "package": "HLearn-algebra",
          "partial": "Free Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:FreeModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "getMap",
          "package": "HLearn-algebra",
          "signature": "Map a r",
          "source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeModule",
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "getMap",
          "package": "HLearn-algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:getMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "list2module",
          "package": "HLearn-algebra",
          "signature": "[a] -\u003e FreeModule r a",
          "source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#list2module",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Free FreeModule",
          "module": "HLearn.Algebra.Structures.Free.FreeModule",
          "name": "list2module",
          "normalized": "[a]-\u003eFreeModule b a",
          "package": "HLearn-algebra",
          "signature": "[a]-\u003eFreeModule r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:list2module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese algebraic structures have sacrificed generality in favor of being easily used with the standard Haskell Prelude.  The fact that monoids are not guaranteed to be semigroups makes this difficult.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Groups",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Groups.html",
          "type": "module"
        },
        "index": {
          "description": "These algebraic structures have sacrificed generality in favor of being easily used with the standard Haskell Prelude The fact that monoids are not guaranteed to be semigroups makes this difficult",
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Groups",
          "package": "HLearn-algebra",
          "partial": "Groups",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Abelian",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Groups.html#Abelian",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Abelian",
          "package": "HLearn-algebra",
          "partial": "Abelian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Abelian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "FreeInverse",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "FreeInverse",
          "package": "HLearn-algebra",
          "partial": "Free Inverse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:FreeInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups are monoids that also have an inverse.  See \u003ca\u003ehttps://en.wikipedia.org/wiki/Regular_semigroup\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Group",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Groups.html#Group",
          "type": "class"
        },
        "index": {
          "description": "Groups are monoids that also have an inverse See https en.wikipedia.org wiki Regular semigroup",
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Group",
          "package": "HLearn-algebra",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Invertible",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Groups.html#Invertible",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Invertible",
          "package": "HLearn-algebra",
          "partial": "Invertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Invertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "FreeInverse",
          "package": "HLearn-algebra",
          "signature": "FreeInverse !a",
          "source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "FreeInverse",
          "package": "HLearn-algebra",
          "partial": "Free Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:FreeInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Negate",
          "package": "HLearn-algebra",
          "signature": "Negate !a",
          "source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "Negate",
          "package": "HLearn-algebra",
          "partial": "Negate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:Negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "inverse",
          "package": "HLearn-algebra",
          "signature": "g -\u003e g",
          "source": "src/HLearn-Algebra-Structures-Groups.html#inverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "inverse",
          "normalized": "a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "g-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "isInverse",
          "package": "HLearn-algebra",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/HLearn-Algebra-Structures-Groups.html#isInverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "isInverse",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "HLearn-algebra",
          "partial": "Inverse",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:isInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "mkinverse",
          "package": "HLearn-algebra",
          "signature": "a -\u003e a",
          "source": "src/HLearn-Algebra-Structures-Groups.html#mkinverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Groups",
          "module": "HLearn.Algebra.Structures.Groups",
          "name": "mkinverse",
          "normalized": "a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:mkinverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMetric spaces are mathematical structures that have a notion of distance between objects.  See wikipedia for more information: \u003ca\u003ehttps://en.wikipedia.org/wiki/Metric_space\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "MetricSpace",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-MetricSpace.html",
          "type": "module"
        },
        "index": {
          "description": "Metric spaces are mathematical structures that have notion of distance between objects See wikipedia for more information https en.wikipedia.org wiki Metric space",
          "hierarchy": "HLearn Algebra Structures MetricSpace",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "MetricSpace",
          "package": "HLearn-algebra",
          "partial": "Metric Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe assume that the MetricSpace on s is compatible with the ordering on s\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "MetricSpace",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-MetricSpace.html#MetricSpace",
          "type": "class"
        },
        "index": {
          "description": "We assume that the MetricSpace on is compatible with the ordering on",
          "hierarchy": "HLearn Algebra Structures MetricSpace",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "MetricSpace",
          "package": "HLearn-algebra",
          "partial": "Metric Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#t:MetricSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "Norm",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-MetricSpace.html#Norm",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures MetricSpace",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "Norm",
          "package": "HLearn-algebra",
          "partial": "Norm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#t:Norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "distance",
          "package": "HLearn-algebra",
          "signature": "s -\u003e s -\u003e Ring s",
          "source": "src/HLearn-Algebra-Structures-MetricSpace.html#distance",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures MetricSpace",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eRing a",
          "package": "HLearn-algebra",
          "signature": "s-\u003es-\u003eRing s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "magnitude",
          "package": "HLearn-algebra",
          "signature": "m -\u003e Ring m",
          "source": "src/HLearn-Algebra-Structures-MetricSpace.html#magnitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures MetricSpace",
          "module": "HLearn.Algebra.Structures.MetricSpace",
          "name": "magnitude",
          "normalized": "a-\u003eRing a",
          "package": "HLearn-algebra",
          "signature": "m-\u003eRing m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModules are a generalization of vector spaces\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "Modules",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Modules.html",
          "type": "module"
        },
        "index": {
          "description": "Modules are generalization of vector spaces",
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "Modules",
          "package": "HLearn-algebra",
          "partial": "Modules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "HasRing",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Modules.html#HasRing",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "HasRing",
          "package": "HLearn-algebra",
          "partial": "Has Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:HasRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBug: The module classes have the constraint that r be of type Num.  Technically, this should be a Ring.  But creating a Ring class would be awkward because it would conflict with the Num class and require importing a different Prelude.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "Module",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Modules.html#Module",
          "type": "class"
        },
        "index": {
          "description": "Bug The module classes have the constraint that be of type Num Technically this should be Ring But creating Ring class would be awkward because it would conflict with the Num class and require importing different Prelude",
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "Module",
          "package": "HLearn-algebra",
          "partial": "Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "VectorSpace",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Modules.html#VectorSpace",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "VectorSpace",
          "package": "HLearn-algebra",
          "partial": "Vector Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:VectorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(*.)",
          "package": "HLearn-algebra",
          "signature": "m -\u003e Ring m -\u003e m",
          "source": "src/HLearn-Algebra-Structures-Modules.html#%2A.",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(*.) *.",
          "normalized": "a-\u003eRing a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "m-\u003eRing m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(/.)",
          "package": "HLearn-algebra",
          "signature": "m -\u003e Ring m -\u003e m",
          "source": "src/HLearn-Algebra-Structures-Modules.html#%2F.",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(/.) /.",
          "normalized": "a-\u003eRing a-\u003ea",
          "package": "HLearn-algebra",
          "signature": "m-\u003eRing m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(.*)",
          "package": "HLearn-algebra",
          "signature": "Ring m -\u003e m -\u003e m",
          "source": "src/HLearn-Algebra-Structures-Modules.html#.%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Modules",
          "module": "HLearn.Algebra.Structures.Modules",
          "name": "(.*) .*",
          "normalized": "Ring a-\u003ea-\u003ea",
          "package": "HLearn-algebra",
          "signature": "Ring m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a generic interface to structures that offer both a left and right cons.  It's based on the Data.Sequence interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "Triangles",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Triangles.html",
          "type": "module"
        },
        "index": {
          "description": "Provides generic interface to structures that offer both left and right cons It based on the Data.Sequence interface",
          "hierarchy": "HLearn Algebra Structures Triangles",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "Triangles",
          "package": "HLearn-algebra",
          "partial": "Triangles",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods for left and right cons on a data type\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "Triangle",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Structures-Triangles.html#Triangle",
          "type": "class"
        },
        "index": {
          "description": "Methods for left and right cons on data type",
          "hierarchy": "HLearn Algebra Structures Triangles",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "Triangle",
          "package": "HLearn-algebra",
          "partial": "Triangle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#t:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "(|\u003e)",
          "package": "HLearn-algebra",
          "signature": "f -\u003e a -\u003e f",
          "source": "src/HLearn-Algebra-Structures-Triangles.html#%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Triangles",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "(|\u003e) |\u003e",
          "normalized": "a-\u003eb-\u003ea",
          "package": "HLearn-algebra",
          "signature": "f-\u003ea-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "(\u003c|)",
          "package": "HLearn-algebra",
          "signature": "a -\u003e f -\u003e f",
          "source": "src/HLearn-Algebra-Structures-Triangles.html#%3C%7C",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Structures Triangles",
          "module": "HLearn.Algebra.Structures.Triangles",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eb-\u003eb",
          "package": "HLearn-algebra",
          "signature": "a-\u003ef-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList",
          "package": "HLearn-algebra",
          "partial": "HList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "($)",
          "package": "HLearn-algebra",
          "signature": "($)",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "($) $",
          "normalized": "()",
          "package": "HLearn-algebra",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "(++)",
          "package": "HLearn-algebra",
          "signature": "(++)",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "(++) ++",
          "normalized": "()",
          "package": "HLearn-algebra",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": ":!",
          "package": "HLearn-algebra",
          "signature": ":!",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": ":!",
          "package": "HLearn-algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t::-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost generic box, can be used on any type.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "AnyBox",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#AnyBox",
          "type": "data"
        },
        "index": {
          "description": "Most generic box can be used on any type",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "AnyBox",
          "package": "HLearn-algebra",
          "partial": "Any Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:AnyBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Concat",
          "package": "HLearn-algebra",
          "signature": "Concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Concat",
          "package": "HLearn-algebra",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "ConstraintBox",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#ConstraintBox",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "ConstraintBox",
          "package": "HLearn-algebra",
          "partial": "Constraint Box",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ConstraintBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Distribute",
          "package": "HLearn-algebra",
          "signature": "Distribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Distribute",
          "package": "HLearn-algebra",
          "partial": "Distribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Downcast",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#Downcast",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Downcast",
          "package": "HLearn-algebra",
          "partial": "Downcast",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Downcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HLearn.Algebra.Types.HList\",\"HLearn.Algebra.Types.Nat1\"]",
          "name": "FromNat1",
          "package": "HLearn-algebra",
          "signature": "FromNat1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:FromNat1\",\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:FromNat1\"]"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "FromNat1",
          "package": "HLearn-algebra",
          "partial": "From Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:FromNat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "HAppend",
          "package": "HLearn-algebra",
          "signature": "HAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HAppend",
          "package": "HLearn-algebra",
          "partial": "HAppend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "HCons",
          "package": "HLearn-algebra",
          "signature": "HCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HCons",
          "package": "HLearn-algebra",
          "partial": "HCons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to prelude's \u003ca\u003edrop\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HDrop1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HDrop1",
          "type": "class"
        },
        "index": {
          "description": "Equivalent to prelude drop",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HDrop1",
          "package": "HLearn-algebra",
          "partial": "HDrop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HDrop1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed only for the HList class to determine its length\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HLength",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HLength",
          "type": "class"
        },
        "index": {
          "description": "Used only for the HList class to determine its length",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HLength",
          "package": "HLearn-algebra",
          "partial": "HLength",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe heterogenous list\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HList",
          "type": "data"
        },
        "index": {
          "description": "The heterogenous list",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList",
          "package": "HLearn-algebra",
          "partial": "HList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor converting into a list\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList2List",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HList2List",
          "type": "class"
        },
        "index": {
          "description": "For converting into list",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HList2List",
          "package": "HLearn-algebra",
          "partial": "HList List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HList2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to prelude's \u003ca\u003emap\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HMap",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HMap",
          "type": "class"
        },
        "index": {
          "description": "Equivalent to prelude map",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HMap",
          "package": "HLearn-algebra",
          "partial": "HMap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to prelude's \u003ca\u003etake\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HTake1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#HTake1",
          "type": "class"
        },
        "index": {
          "description": "Equivalent to prelude take",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HTake1",
          "package": "HLearn-algebra",
          "partial": "HTake",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HTake1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Length",
          "package": "HLearn-algebra",
          "signature": "Length",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Length",
          "package": "HLearn-algebra",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Length1",
          "package": "HLearn-algebra",
          "signature": "Length1",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Length1",
          "package": "HLearn-algebra",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Length1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor construction from lists\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "List2HList",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#List2HList",
          "type": "class"
        },
        "index": {
          "description": "For construction from lists",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "List2HList",
          "package": "HLearn-algebra",
          "partial": "List HList",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:List2HList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Map",
          "package": "HLearn-algebra",
          "signature": "Map",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Map",
          "package": "HLearn-algebra",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Nat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "partial": "Nat Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Nat1Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Replicate",
          "package": "HLearn-algebra",
          "signature": "Replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Replicate",
          "package": "HLearn-algebra",
          "partial": "Replicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "Reverse",
          "package": "HLearn-algebra",
          "signature": "Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Reverse",
          "package": "HLearn-algebra",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this box unless you know for certain that your types won't have a show instance.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.HList",
          "name": "ShowBox",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#ShowBox",
          "type": "data"
        },
        "index": {
          "description": "Use this box unless you know for certain that your types won have show instance",
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "ShowBox",
          "package": "HLearn-algebra",
          "partial": "Show Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ShowBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HLearn.Algebra.Types.HList\",\"HLearn.Algebra.Types.Nat1\"]",
          "name": "ToNat1",
          "package": "HLearn-algebra",
          "signature": "ToNat1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ToNat1\",\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:ToNat1\"]"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "ToNat1",
          "package": "HLearn-algebra",
          "partial": "To Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ToNat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "TypeList",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-HList.html#TypeList",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "TypeList",
          "package": "HLearn-algebra",
          "partial": "Type List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:TypeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "UnHList",
          "package": "HLearn-algebra",
          "signature": "UnHList",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "UnHList",
          "package": "HLearn-algebra",
          "partial": "Un HList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:UnHList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": ":::",
          "package": "HLearn-algebra",
          "signature": "t -\u003e HList ts -\u003e HList (t : ts)",
          "source": "src/HLearn-Algebra-Types-HList.html#HList",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": ":::",
          "normalized": "a-\u003eHList b-\u003eHList(a b)",
          "package": "HLearn-algebra",
          "signature": "t-\u003eHList ts-\u003eHList(t ts)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "AnyBox",
          "package": "HLearn-algebra",
          "signature": "forall a . AnyBox !a",
          "source": "src/HLearn-Algebra-Types-HList.html#AnyBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "AnyBox",
          "package": "HLearn-algebra",
          "partial": "Any Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:AnyBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "HNil",
          "package": "HLearn-algebra",
          "signature": "HList `[]`",
          "source": "src/HLearn-Algebra-Types-HList.html#HList",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "HNil",
          "normalized": "HList[]",
          "package": "HLearn-algebra",
          "partial": "HNil",
          "signature": "HList[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:HNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HLearn.Algebra.Types.HList\",\"HLearn.Algebra.Types.Nat1\"]",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "signature": "Nat1Box",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Nat1Box\",\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Nat1Box\"]"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "partial": "Nat Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Nat1Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "ShowBox",
          "package": "HLearn-algebra",
          "signature": "ShowBox !a",
          "source": "src/HLearn-Algebra-Types-HList.html#ShowBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "ShowBox",
          "package": "HLearn-algebra",
          "partial": "Show Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:ShowBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HLearn.Algebra.Types.HList\",\"HLearn.Algebra.Types.Nat1\"]",
          "name": "Succ",
          "package": "HLearn-algebra",
          "signature": "Succ Nat1",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Succ\",\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Succ\"]"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Succ",
          "package": "HLearn-algebra",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HLearn.Algebra.Types.HList\",\"HLearn.Algebra.Types.Nat1\"]",
          "name": "Zero",
          "package": "HLearn-algebra",
          "signature": "Zero",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Zero\",\"http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Zero\"]"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "Zero",
          "package": "HLearn-algebra",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "box",
          "package": "HLearn-algebra",
          "signature": "a -\u003e box",
          "source": "src/HLearn-Algebra-Types-HList.html#box",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "box",
          "normalized": "a-\u003eb",
          "package": "HLearn-algebra",
          "signature": "a-\u003ebox",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "downcast",
          "package": "HLearn-algebra",
          "signature": "h -\u003e [box]",
          "source": "src/HLearn-Algebra-Types-HList.html#downcast",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "downcast",
          "normalized": "a-\u003e[b]",
          "package": "HLearn-algebra",
          "signature": "h-\u003e[box]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:downcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "downcastAs",
          "package": "HLearn-algebra",
          "signature": "(a -\u003e box) -\u003e h -\u003e [box]",
          "source": "src/HLearn-Algebra-Types-HList.html#downcastAs",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "downcastAs",
          "normalized": "(a-\u003eb)-\u003ec-\u003e[b]",
          "package": "HLearn-algebra",
          "partial": "As",
          "signature": "(a-\u003ebox)-\u003eh-\u003e[box]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:downcastAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "hdrop1",
          "package": "HLearn-algebra",
          "signature": "n -\u003e xs1 -\u003e xs2",
          "source": "src/HLearn-Algebra-Types-HList.html#hdrop1",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "hdrop1",
          "normalized": "a-\u003eb-\u003eb",
          "package": "HLearn-algebra",
          "signature": "n-\u003exs-\u003exs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hdrop1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "hlength",
          "package": "HLearn-algebra",
          "signature": "xs -\u003e Int",
          "source": "src/HLearn-Algebra-Types-HList.html#hlength",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "hlength",
          "normalized": "a-\u003eInt",
          "package": "HLearn-algebra",
          "signature": "xs-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "hlist2list",
          "package": "HLearn-algebra",
          "signature": "xs -\u003e [a]",
          "source": "src/HLearn-Algebra-Types-HList.html#hlist2list",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "hlist2list",
          "normalized": "a-\u003e[b]",
          "package": "HLearn-algebra",
          "signature": "xs-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hlist2list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "hmap",
          "package": "HLearn-algebra",
          "signature": "f -\u003e xs1 -\u003e xs2",
          "source": "src/HLearn-Algebra-Types-HList.html#hmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "hmap",
          "normalized": "a-\u003eb-\u003eb",
          "package": "HLearn-algebra",
          "signature": "f-\u003exs-\u003exs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "htake1",
          "package": "HLearn-algebra",
          "signature": "n -\u003e xs1 -\u003e xs2",
          "source": "src/HLearn-Algebra-Types-HList.html#htake1",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "htake1",
          "normalized": "a-\u003eb-\u003eb",
          "package": "HLearn-algebra",
          "signature": "n-\u003exs-\u003exs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:htake1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "list2hlist",
          "package": "HLearn-algebra",
          "signature": "[x] -\u003e HList (x : xs)",
          "source": "src/HLearn-Algebra-Types-HList.html#list2hlist",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "list2hlist",
          "normalized": "[a]-\u003eHList(a b)",
          "package": "HLearn-algebra",
          "signature": "[x]-\u003eHList(x xs)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:list2hlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "typeList",
          "package": "HLearn-algebra",
          "signature": "t -\u003e [TypeRep]",
          "source": "src/HLearn-Algebra-Types-HList.html#typeList",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "typeList",
          "normalized": "a-\u003e[TypeRep]",
          "package": "HLearn-algebra",
          "partial": "List",
          "signature": "t-\u003e[TypeRep]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:typeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.HList",
          "name": "unsafeUnbox",
          "package": "HLearn-algebra",
          "signature": "box -\u003e a",
          "source": "src/HLearn-Algebra-Types-HList.html#unsafeUnbox",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types HList",
          "module": "HLearn.Algebra.Types.HList",
          "name": "unsafeUnbox",
          "normalized": "a-\u003eb",
          "package": "HLearn-algebra",
          "partial": "Unbox",
          "signature": "box-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:unsafeUnbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "Indexing",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "Indexing",
          "package": "HLearn-algebra",
          "partial": "Indexing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindex into a data type, but the result type depends on which record we're indexing\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "DepIndex",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#DepIndex",
          "type": "class"
        },
        "index": {
          "description": "index into data type but the result type depends on which record we re indexing",
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "DepIndex",
          "package": "HLearn-algebra",
          "partial": "Dep Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:DepIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefines a canonical ordering of all elments in the data type\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "HasDepIndex",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#HasDepIndex",
          "type": "class"
        },
        "index": {
          "description": "defines canonical ordering of all elments in the data type",
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "HasDepIndex",
          "package": "HLearn-algebra",
          "partial": "Has Dep Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:HasDepIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindex into a data type, all of whose members have the same type\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "Index",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#Index",
          "type": "class"
        },
        "index": {
          "description": "index into data type all of whose members have the same type",
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "Index",
          "package": "HLearn-algebra",
          "partial": "Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_0",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#TH_0",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_0",
          "package": "HLearn-algebra",
          "partial": "TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#TH_1",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_1",
          "package": "HLearn-algebra",
          "partial": "TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_2",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#TH_2",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_2",
          "package": "HLearn-algebra",
          "partial": "TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_3",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#TH_3",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "TH_3",
          "package": "HLearn-algebra",
          "partial": "TH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "ValueList",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Indexing.html#ValueList",
          "type": "type"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "ValueList",
          "package": "HLearn-algebra",
          "partial": "Value List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:ValueList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "(!)",
          "package": "HLearn-algebra",
          "signature": "datatype -\u003e IndexType datatype -\u003e IndexResult datatype",
          "source": "src/HLearn-Algebra-Types-Indexing.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "(!) !",
          "normalized": "a-\u003eIndexType a-\u003eIndexResult a",
          "package": "HLearn-algebra",
          "signature": "datatype-\u003eIndexType datatype-\u003eIndexResult datatype",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "(#)",
          "package": "HLearn-algebra",
          "signature": "datatype -\u003e index -\u003e datatype `DepIndexResult` index",
          "source": "src/HLearn-Algebra-Types-Indexing.html#%23",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "(#) #",
          "normalized": "a-\u003eb-\u003ea DepIndexResult b",
          "package": "HLearn-algebra",
          "signature": "datatype-\u003eindex-\u003edatatype DepIndexResult index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "datatype2valueList",
          "package": "HLearn-algebra",
          "signature": "datatype -\u003e HList (ValueList datatype)",
          "source": "src/HLearn-Algebra-Types-Indexing.html#datatype2valueList",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "datatype2valueList",
          "normalized": "a-\u003eHList(ValueList a)",
          "package": "HLearn-algebra",
          "partial": "List",
          "signature": "datatype-\u003eHList(ValueList datatype)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:datatype2valueList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "depIndexList",
          "package": "HLearn-algebra",
          "signature": "datatype -\u003e HList (DepIndexList datatype)",
          "source": "src/HLearn-Algebra-Types-Indexing.html#depIndexList",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "depIndexList",
          "normalized": "a-\u003eHList(DepIndexList a)",
          "package": "HLearn-algebra",
          "partial": "Index List",
          "signature": "datatype-\u003eHList(DepIndexList datatype)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:depIndexList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates data types and instances for indexing into a class.  Dependent indices are preficed with \"TH_\" and normal indices by \"I_\".  The dependent indices and \u003ca\u003eDepIndex\u003c/a\u003e instances are always created.  The normal index data types are always created, but the \u003ca\u003eIndex\u003c/a\u003e instance is created only if all records within the data type have the same type.\n\u003c/p\u003e",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "makeIndex",
          "package": "HLearn-algebra",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/HLearn-Algebra-Types-Indexing.html#makeIndex",
          "type": "function"
        },
        "index": {
          "description": "Creates data types and instances for indexing into class Dependent indices are preficed with TH and normal indices by The dependent indices and DepIndex instances are always created The normal index data types are always created but the Index instance is created only if all records within the data type have the same type",
          "hierarchy": "HLearn Algebra Types Indexing",
          "module": "HLearn.Algebra.Types.Indexing",
          "name": "makeIndex",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "HLearn-algebra",
          "partial": "Index",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:makeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module was automatically generated by Nat1Generator.hs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Nat1.html",
          "type": "module"
        },
        "index": {
          "description": "This module was automatically generated by Nat1Generator.hs",
          "hierarchy": "HLearn Algebra Types Nat1",
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "partial": "Nat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Nat1",
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1",
          "package": "HLearn-algebra",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:Nat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Algebra Types Nat1",
          "module": "HLearn.Algebra.Types.Nat1",
          "name": "Nat1Box",
          "package": "HLearn-algebra",
          "partial": "Nat Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:Nat1Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the base module for the HLearn library.  It exports all the functions / data structures needed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Algebra",
          "name": "Algebra",
          "package": "HLearn-algebra",
          "source": "src/HLearn-Algebra.html",
          "type": "module"
        },
        "index": {
          "description": "This is the base module for the HLearn library It exports all the functions data structures needed",
          "hierarchy": "HLearn Algebra",
          "module": "HLearn.Algebra",
          "name": "Algebra",
          "package": "HLearn-algebra",
          "partial": "Algebra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra.html#"
      }
    }
  ]
]