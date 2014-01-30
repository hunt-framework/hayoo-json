[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains \"low-level higher order functions\" for manipulating algebraic homomorphisms.  You probably want to use the \u003ca\u003eHomTrainer\u003c/a\u003e type-class rather than using these functions directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "This module contains low-level higher order functions for manipulating algebraic homomorphisms You probably want to use the HomTrainer type-class rather than using these functions directly",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eEvery data type that implements this class has a corresponding function.  We can use this data type as type level parameters to other data types.  This gives us some of the benefit of dependently typed functions.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Functions.html#Function",
        "fct-type": "class",
        "title": "Function"
      },
      "index": {
        "description": "Every data type that implements this class has corresponding function We can use this data type as type level parameters to other data types This gives us some of the benefit of dependently typed functions",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "Function",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:batch",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a singleton trainer into a batch trainer, which is also a semigroup homomorphism.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(datapoint -\u003e model)-\u003e container datapoint -\u003e model",
        "fct-type": "function",
        "title": "batch"
      },
      "index": {
        "description": "Converts singleton trainer into batch trainer which is also semigroup homomorphism",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "batch",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:batchCK",
      "description": {
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(datapoint -\u003e model)-\u003e container datapoint -\u003e model",
        "fct-type": "function",
        "title": "batchCK"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "batchCK",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "HLearn-algebra",
        "partial": "CK",
        "signature": "(datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:function",
      "description": {
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "f -\u003e domain -\u003e range",
        "fct-source": "src/HLearn-Algebra-Functions.html#function",
        "fct-type": "method",
        "title": "function"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "function",
        "normalized": "a-\u003eb-\u003ec",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "f-\u003edomain-\u003erange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:offline",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eonline\u003c/a\u003e\u003c/code\u003e.  Converts an online trainer into a batch trainer.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(model -\u003e datapoint -\u003e model)-\u003e datapoint -\u003e model",
        "fct-type": "function",
        "title": "offline"
      },
      "index": {
        "description": "The inverse of online Converts an online trainer into batch trainer",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "offline",
        "normalized": "(a-\u003eb-\u003ea)-\u003eb-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(model-\u003edatapoint-\u003emodel)-\u003edatapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:online",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a batch trainer into an online trainer.  The input function should be a semigroup homomorphism.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(datapoint -\u003e model)-\u003e model -\u003e datapoint -\u003e model",
        "fct-type": "function",
        "title": "online"
      },
      "index": {
        "description": "Converts batch trainer into an online trainer The input function should be semigroup homomorphism",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "online",
        "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(datapoint-\u003emodel)-\u003emodel-\u003edatapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:parallel",
      "description": {
        "fct-descr": "\u003cp\u003eParallelizes any batch trainer to run over multiple processors on a single machine.  The function automatically detects the number of available processors and parallelizes the function accordingly.  This requires the use of unsafePerformIO, however, the result should still be safe.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(container datapoint -\u003e model)-\u003e container datapoint -\u003e model",
        "fct-type": "function",
        "title": "parallel"
      },
      "index": {
        "description": "Parallelizes any batch trainer to run over multiple processors on single machine The function automatically detects the number of available processors and parallelizes the function accordingly This requires the use of unsafePerformIO however the result should still be safe",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "parallel",
        "normalized": "(a b-\u003ec)-\u003ea b-\u003ec",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(container datapoint-\u003emodel)-\u003econtainer datapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:reduce",
      "description": {
        "fct-descr": "\u003cp\u003eLike fold, but (i) only for use on the semigroup operation (\u003c\u003e) and (ii) uses the fan-in reduction strategy which is more efficient when the semigroup operation takes nonconstant time depending on the size of the data structures being reduced.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "container sg -\u003e sg",
        "fct-source": "src/HLearn-Algebra-Functions.html#reduce",
        "fct-type": "function",
        "title": "reduce"
      },
      "index": {
        "description": "Like fold but only for use on the semigroup operation and ii uses the fan-in reduction strategy which is more efficient when the semigroup operation takes nonconstant time depending on the size of the data structures being reduced",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "reduce",
        "normalized": "a b-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "container sg-\u003esg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:semigroup",
      "description": {
        "fct-descr": "\u003cp\u003eNormally we would define our semigroup operation explicitly.  However, it is possible to generate one from an online trainer and a pseudo inverse.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(model -\u003e datapoint -\u003e model)-\u003e (model -\u003e datapoint)-\u003e model -\u003e model -\u003e model",
        "fct-type": "function",
        "title": "semigroup"
      },
      "index": {
        "description": "Normally we would define our semigroup operation explicitly However it is possible to generate one from an online trainer and pseudo inverse",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "semigroup",
        "normalized": "(a-\u003eb-\u003ea)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(model-\u003edatapoint-\u003emodel)-\u003e(model-\u003edatapoint)-\u003emodel-\u003emodel-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Functions.html#v:unbatch",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003eunbatch\u003c/a\u003e\u003c/code\u003e.  Converts a semigroup homomorphism into a singleton trainer.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Functions",
        "fct-package": "HLearn-algebra",
        "fct-signature": "([datapoint] -\u003e model)-\u003e datapoint -\u003e model",
        "fct-type": "function",
        "title": "unbatch"
      },
      "index": {
        "description": "Inverse of unbatch Converts semigroup homomorphism into singleton trainer",
        "hierarchy": "HLearn Algebra Functions",
        "module": "HLearn.Algebra.Functions",
        "name": "unbatch",
        "normalized": "([a]-\u003eb)-\u003ea-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "([datapoint]-\u003emodel)-\u003edatapoint-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html",
        "fct-type": "module",
        "title": "CoHomTrainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "CoHomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Co Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#t:CoHomTrainer",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003eCoHomTrainer\u003c/a\u003e is a formal way of describing a generative model.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html#CoHomTrainer",
        "fct-type": "class",
        "title": "CoHomTrainer"
      },
      "index": {
        "description": "CoHomTrainer is formal way of describing generative model",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "CoHomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Co Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:coadd1dp",
      "description": {
        "fct-descr": "\u003cp\u003esample without replacement a single datapoint\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Rand g (CoDatapoint model, model)",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html#coadd1dp",
        "fct-type": "method",
        "title": "coadd1dp"
      },
      "index": {
        "description": "sample without replacement single datapoint",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "coadd1dp",
        "normalized": "a-\u003eRand b(CoDatapoint a,a)",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eRand g(CoDatapoint model,model)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:coaddBatch",
      "description": {
        "fct-descr": "\u003cp\u003esample without replacement as many datapoints as possible\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Rand g [(CoDatapoint model, model)]",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html#coaddBatch",
        "fct-type": "method",
        "title": "coaddBatch"
      },
      "index": {
        "description": "sample without replacement as many datapoints as possible",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "coaddBatch",
        "normalized": "a-\u003eRand b[(CoDatapoint a,a)]",
        "package": "HLearn-algebra",
        "partial": "Batch",
        "signature": "model-\u003eRand g[(CoDatapoint model,model)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:cotrain",
      "description": {
        "fct-descr": "\u003cp\u003esamples infinitely many datapoints with replacement\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Rand g [CoDatapoint model]",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html#cotrain",
        "fct-type": "method",
        "title": "cotrain"
      },
      "index": {
        "description": "samples infinitely many datapoints with replacement",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "cotrain",
        "normalized": "a-\u003eRand b[CoDatapoint a]",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eRand g[CoDatapoint model]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-CoHomTrainer.html#v:cotrain1dp",
      "description": {
        "fct-descr": "\u003cp\u003esample with replacement a single datapoint\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.CoHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Rand g (CoDatapoint model)",
        "fct-source": "src/HLearn-Algebra-Models-CoHomTrainer.html#cotrain1dp",
        "fct-type": "method",
        "title": "cotrain1dp"
      },
      "index": {
        "description": "sample with replacement single datapoint",
        "hierarchy": "HLearn Algebra Models CoHomTrainer",
        "module": "HLearn.Algebra.Models.CoHomTrainer",
        "name": "cotrain1dp",
        "normalized": "a-\u003eRand b(CoDatapoint a)",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eRand g(CoDatapoint model)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvery model in the HLearn library is an instance of the \u003ccode\u003e\u003ca\u003eHomTrainer\u003c/a\u003e\u003c/code\u003e type class.  This ensures that the batch trainer is a monoid homomorphism.  This is a restrictive condition that not all learning models satisfy; however, it is useful for two reasons.  First, this property lets us easily derive three important functions for machine learning algorithms: online trainers, parallel trainers, and fast cross-validation algorithms.  Second, many popular algorithms (or variants on them) satisfy the condition and are implemented in the library.\n\u003c/p\u003e\u003cp\u003eFor a full theoretical description of the \u003ccode\u003e\u003ca\u003eHomTrainer\u003c/a\u003e\u003c/code\u003e class, see the paper: \u003ca\u003eHERE\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUnfortunately, the class hierarchy here is slightly more complicated.  In the paper, we assume that all parameters for a model can be included in the model's type.  Currently, however, this is not possible in Haskell, so every model must also have a data type that describes it's parameters.  This is the purpose of the \u003ccode\u003eModelParams\u003c/code\u003e class.  Most models have either no parameters, or reasonable defaults, and so their parameters are instances of the \u003ccode\u003eDefaultParams\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html",
        "fct-type": "module",
        "title": "HomTrainer"
      },
      "index": {
        "description": "Every model in the HLearn library is an instance of the HomTrainer type class This ensures that the batch trainer is monoid homomorphism This is restrictive condition that not all learning models satisfy however it is useful for two reasons First this property lets us easily derive three important functions for machine learning algorithms online trainers parallel trainers and fast cross-validation algorithms Second many popular algorithms or variants on them satisfy the condition and are implemented in the library For full theoretical description of the HomTrainer class see the paper HERE Unfortunately the class hierarchy here is slightly more complicated In the paper we assume that all parameters for model can be included in the model type Currently however this is not possible in Haskell so every model must also have data type that describes it parameters This is the purpose of the ModelParams class Most models have either no parameters or reasonable defaults and so their parameters are instances of the DefaultParams class",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "HomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:HomTrainer",
      "description": {
        "fct-descr": "\u003cp\u003eA minimal complete definition of the class is the singleton trainer 'train1dp\\''\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#HomTrainer",
        "fct-type": "class",
        "title": "HomTrainer"
      },
      "index": {
        "description": "minimal complete definition of the class is the singleton trainer train1dp",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "HomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:NumDP",
      "description": {
        "fct-descr": "\u003cp\u003enumdp returns the number of data points that the model has been trained on\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#NumDP",
        "fct-type": "class",
        "title": "NumDP"
      },
      "index": {
        "description": "numdp returns the number of data points that the model has been trained on",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "NumDP",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Num DP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#t:WeightedHomTrainer",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#WeightedHomTrainer",
        "fct-type": "class",
        "title": "WeightedHomTrainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "WeightedHomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Weighted Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:add1dp",
      "description": {
        "fct-descr": "\u003cp\u003eThe online trainer\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Datapoint model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#add1dp",
        "fct-type": "method",
        "title": "add1dp"
      },
      "index": {
        "description": "The online trainer",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "add1dp",
        "normalized": "a-\u003eDatapoint a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eDatapoint model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:add1dpW",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e WeightedDatapoint model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#add1dpW",
        "fct-type": "method",
        "title": "add1dpW"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "add1dpW",
        "normalized": "a-\u003eWeightedDatapoint a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eWeightedDatapoint model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatch",
      "description": {
        "fct-descr": "\u003cp\u003eThe batch online trainer; will be more efficient than simply calling \u003ccode\u003e\u003ca\u003eadd1dp\u003c/a\u003e\u003c/code\u003e for each element being added\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e container (Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatch",
        "fct-type": "method",
        "title": "addBatch"
      },
      "index": {
        "description": "The batch online trainer will be more efficient than simply calling add1dp for each element being added",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "addBatch",
        "normalized": "a-\u003eb(Datapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "Batch",
        "signature": "model-\u003econtainer(Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatchCK",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e container (Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatchCK",
        "fct-type": "method",
        "title": "addBatchCK"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "addBatchCK",
        "normalized": "a-\u003eb(Datapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "Batch CK",
        "signature": "model-\u003econtainer(Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:addBatchW",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e container (WeightedDatapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#addBatchW",
        "fct-type": "method",
        "title": "addBatchW"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "addBatchW",
        "normalized": "a-\u003eb(WeightedDatapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "Batch",
        "signature": "model-\u003econtainer(WeightedDatapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:numdp",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Ring model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#numdp",
        "fct-type": "method",
        "title": "numdp"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "numdp",
        "normalized": "a-\u003eRing a",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eRing model"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:sub1dp",
      "description": {
        "fct-descr": "\u003cp\u003esubtracts a single data point from the model\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e Datapoint model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#sub1dp",
        "fct-type": "function",
        "title": "sub1dp"
      },
      "index": {
        "description": "subtracts single data point from the model",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "sub1dp",
        "normalized": "a-\u003eDatapoint a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eDatapoint model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:sub1dpW",
      "description": {
        "fct-descr": "\u003cp\u003esubtracts a single weighted data point from the model\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e WeightedDatapoint model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#sub1dpW",
        "fct-type": "function",
        "title": "sub1dpW"
      },
      "index": {
        "description": "subtracts single weighted data point from the model",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "sub1dpW",
        "normalized": "a-\u003eWeightedDatapoint a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eWeightedDatapoint model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:subBatch",
      "description": {
        "fct-descr": "\u003cp\u003esubtracts a multiple data point from the model\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e container (Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#subBatch",
        "fct-type": "function",
        "title": "subBatch"
      },
      "index": {
        "description": "subtracts multiple data point from the model",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "subBatch",
        "normalized": "a-\u003eb(Datapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "Batch",
        "signature": "model-\u003econtainer(Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:subBatchW",
      "description": {
        "fct-descr": "\u003cp\u003esubtracts multiple weighted data points from the model\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e container (WeightedDatapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#subBatchW",
        "fct-type": "function",
        "title": "subBatchW"
      },
      "index": {
        "description": "subtracts multiple weighted data points from the model",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "subBatchW",
        "normalized": "a-\u003eb(WeightedDatapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "Batch",
        "signature": "model-\u003econtainer(WeightedDatapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train",
      "description": {
        "fct-descr": "\u003cp\u003eThe batch trainer\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "container (Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#train",
        "fct-type": "method",
        "title": "train"
      },
      "index": {
        "description": "The batch trainer",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "train",
        "normalized": "a(Datapoint b)-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "container(Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train1dp",
      "description": {
        "fct-descr": "\u003cp\u003eThe singleton trainer\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Datapoint model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#train1dp",
        "fct-type": "method",
        "title": "train1dp"
      },
      "index": {
        "description": "The singleton trainer",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "train1dp",
        "normalized": "Datapoint a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "Datapoint model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:train1dpW",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(Ring model, Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#train1dpW",
        "fct-type": "method",
        "title": "train1dpW"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "train1dpW",
        "normalized": "(Ring a,Datapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "(Ring model,Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:trainCK",
      "description": {
        "fct-descr": "\u003cp\u003eCK methods take advantage of the ContraintKinds extension to allow containers that require constraints.  In particular, they allow the use of Unboxed Vectors, which can improve performance.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "container (Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#trainCK",
        "fct-type": "method",
        "title": "trainCK"
      },
      "index": {
        "description": "CK methods take advantage of the ContraintKinds extension to allow containers that require constraints In particular they allow the use of Unboxed Vectors which can improve performance",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "trainCK",
        "normalized": "a(Datapoint b)-\u003eb",
        "package": "HLearn-algebra",
        "partial": "CK",
        "signature": "container(Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-HomTrainer.html#v:trainW",
      "description": {
        "fct-module": "HLearn.Algebra.Models.HomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "container (Ring model, Datapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-HomTrainer.html#trainW",
        "fct-type": "method",
        "title": "trainW"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models HomTrainer",
        "module": "HLearn.Algebra.Models.HomTrainer",
        "name": "trainW",
        "normalized": "a(Ring b,Datapoint b)-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "container(Ring model,Datapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLame trainers are trainers that are crippled---They are not Monoids, and training their models is not a homomorphism.  This means we can't do any of the cool manipulations automatically that we can do with the HomTrainer class.  These classes are provided mostly for development and testing purposes.  It is not recommended that you use any of their instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Models.Lame",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Models-Lame.html",
        "fct-type": "module",
        "title": "Lame"
      },
      "index": {
        "description": "Lame trainers are trainers that are crippled---They are not Monoids and training their models is not homomorphism This means we can do any of the cool manipulations automatically that we can do with the HomTrainer class These classes are provided mostly for development and testing purposes It is not recommended that you use any of their instances",
        "hierarchy": "HLearn Algebra Models Lame",
        "module": "HLearn.Algebra.Models.Lame",
        "name": "Lame",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Lame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#t:LameTrainer",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a non-homomorphic batch trainer\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.Lame",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-Lame.html#LameTrainer",
        "fct-type": "class",
        "title": "LameTrainer"
      },
      "index": {
        "description": "Provides non-homomorphic batch trainer",
        "hierarchy": "HLearn Algebra Models Lame",
        "module": "HLearn.Algebra.Models.Lame",
        "name": "LameTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Lame Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#t:LameTrainerOnline",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a non-homomorphic online trainer\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Models.Lame",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Models-Lame.html#LameTrainerOnline",
        "fct-type": "class",
        "title": "LameTrainerOnline"
      },
      "index": {
        "description": "Provides non-homomorphic online trainer",
        "hierarchy": "HLearn Algebra Models Lame",
        "module": "HLearn.Algebra.Models.Lame",
        "name": "LameTrainerOnline",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Lame Trainer Online",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#v:lame_add1dp",
      "description": {
        "fct-module": "HLearn.Algebra.Models.Lame",
        "fct-package": "HLearn-algebra",
        "fct-signature": "model -\u003e LameDatapointOnline model -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-Lame.html#lame_add1dp",
        "fct-type": "method",
        "title": "lame_add1dp"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models Lame",
        "module": "HLearn.Algebra.Models.Lame",
        "name": "lame_add1dp",
        "normalized": "a-\u003eLameDatapointOnline a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "model-\u003eLameDatapointOnline model-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Models-Lame.html#v:lame_train",
      "description": {
        "fct-module": "HLearn.Algebra.Models.Lame",
        "fct-package": "HLearn-algebra",
        "fct-signature": "LameContainer model (LameDatapoint model) -\u003e model",
        "fct-source": "src/HLearn-Algebra-Models-Lame.html#lame_train",
        "fct-type": "method",
        "title": "lame_train"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Models Lame",
        "module": "HLearn.Algebra.Models.Lame",
        "name": "lame_train",
        "normalized": "LameContainer a(LameDatapoint a)-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "LameContainer model(LameDatapoint model)-\u003emodel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.Bagging",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Free-Bagging.html",
        "fct-type": "module",
        "title": "Bagging"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free Bagging",
        "module": "HLearn.Algebra.Structures.Free.Bagging",
        "name": "Bagging",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Bagging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#t:Bagging",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.Bagging",
        "fct-package": "HLearn-algebra",
        "fct-signature": "type",
        "fct-source": "src/HLearn-Algebra-Structures-Free-Bagging.html#Bagging",
        "fct-type": "type",
        "title": "Bagging"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free Bagging",
        "module": "HLearn.Algebra.Structures.Free.Bagging",
        "name": "Bagging",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Bagging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-Bagging.html#t:Bagging-39-",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.Bagging",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Structures-Free-Bagging.html#Bagging%27",
        "fct-type": "data",
        "title": "Bagging'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free Bagging",
        "module": "HLearn.Algebra.Structures.Free.Bagging",
        "name": "Bagging'",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Bagging'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html",
        "fct-type": "module",
        "title": "FreeHomTrainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
        "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "name": "FreeHomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:AbelianGroup",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#AbelianGroup",
        "fct-type": "data",
        "title": "AbelianGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
        "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "name": "AbelianGroup",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Abelian Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:FreeHomTrainer",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "FreeHomTrainer",
        "fct-type": "function",
        "title": "FreeHomTrainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
        "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "name": "FreeHomTrainer",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Hom Trainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:FreeHomTrainer-39-",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#FreeHomTrainer%27",
        "fct-type": "data",
        "title": "FreeHomTrainer'"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
        "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "name": "FreeHomTrainer'",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Hom Trainer'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#t:NoFlatten",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeHomTrainer.html#NoFlatten",
        "fct-type": "data",
        "title": "NoFlatten"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeHomTrainer",
        "module": "HLearn.Algebra.Structures.Free.FreeHomTrainer",
        "name": "NoFlatten",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "No Flatten",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeModule",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeModule.html",
        "fct-type": "module",
        "title": "FreeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeModule",
        "module": "HLearn.Algebra.Structures.Free.FreeModule",
        "name": "FreeModule",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#t:FreeModule",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeModule",
        "fct-package": "HLearn-algebra",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
        "fct-type": "newtype",
        "title": "FreeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeModule",
        "module": "HLearn.Algebra.Structures.Free.FreeModule",
        "name": "FreeModule",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:FreeModule",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeModule",
        "fct-package": "HLearn-algebra",
        "fct-signature": "FreeModule",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
        "fct-type": "function",
        "title": "FreeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeModule",
        "module": "HLearn.Algebra.Structures.Free.FreeModule",
        "name": "FreeModule",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:getMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Algebra.Structures.Free.FreeModule",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Map a r",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#FreeModule",
        "fct-type": "function",
        "title": "getMap"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeModule",
        "module": "HLearn.Algebra.Structures.Free.FreeModule",
        "name": "getMap",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Free-FreeModule.html#v:list2module",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Free.FreeModule",
        "fct-package": "HLearn-algebra",
        "fct-signature": "[a] -\u003e FreeModule r a",
        "fct-source": "src/HLearn-Algebra-Structures-Free-FreeModule.html#list2module",
        "fct-type": "function",
        "title": "list2module"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Free FreeModule",
        "module": "HLearn.Algebra.Structures.Free.FreeModule",
        "name": "list2module",
        "normalized": "[a]-\u003eFreeModule b a",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "[a]-\u003eFreeModule r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese algebraic structures have sacrificed generality in favor of being easily used with the standard Haskell Prelude.  The fact that monoids are not guaranteed to be semigroups makes this difficult.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html",
        "fct-type": "module",
        "title": "Groups"
      },
      "index": {
        "description": "These algebraic structures have sacrificed generality in favor of being easily used with the standard Haskell Prelude The fact that monoids are not guaranteed to be semigroups makes this difficult",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "Groups",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Abelian",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#Abelian",
        "fct-type": "class",
        "title": "Abelian"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "Abelian",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Abelian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:FreeInverse",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
        "fct-type": "data",
        "title": "FreeInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "FreeInverse",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Inverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Group",
      "description": {
        "fct-descr": "\u003cp\u003eGroups are monoids that also have an inverse.  See \u003ca\u003ehttps://en.wikipedia.org/wiki/Regular_semigroup\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#Group",
        "fct-type": "class",
        "title": "Group"
      },
      "index": {
        "description": "Groups are monoids that also have an inverse See https en.wikipedia.org wiki Regular semigroup",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "Group",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#t:Invertible",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#Invertible",
        "fct-type": "class",
        "title": "Invertible"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "Invertible",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Invertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:FreeInverse",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "FreeInverse !a",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
        "fct-type": "function",
        "title": "FreeInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "FreeInverse",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Free Inverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:Negate",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Negate !a",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#FreeInverse",
        "fct-type": "function",
        "title": "Negate"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "Negate",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Negate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:inverse",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "g -\u003e g",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#inverse",
        "fct-type": "method",
        "title": "inverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "inverse",
        "normalized": "a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "g-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:isInverse",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#isInverse",
        "fct-type": "method",
        "title": "isInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "isInverse",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "HLearn-algebra",
        "partial": "Inverse",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Groups.html#v:mkinverse",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Groups",
        "fct-package": "HLearn-algebra",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/HLearn-Algebra-Structures-Groups.html#mkinverse",
        "fct-type": "method",
        "title": "mkinverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Groups",
        "module": "HLearn.Algebra.Structures.Groups",
        "name": "mkinverse",
        "normalized": "a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMetric spaces are mathematical structures that have a notion of distance between objects.  See wikipedia for more information: \u003ca\u003ehttps://en.wikipedia.org/wiki/Metric_space\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Structures.MetricSpace",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-MetricSpace.html",
        "fct-type": "module",
        "title": "MetricSpace"
      },
      "index": {
        "description": "Metric spaces are mathematical structures that have notion of distance between objects See wikipedia for more information https en.wikipedia.org wiki Metric space",
        "hierarchy": "HLearn Algebra Structures MetricSpace",
        "module": "HLearn.Algebra.Structures.MetricSpace",
        "name": "MetricSpace",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Metric Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#t:MetricSpace",
      "description": {
        "fct-descr": "\u003cp\u003eWe assume that the MetricSpace on s is compatible with the ordering on s\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Structures.MetricSpace",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-MetricSpace.html#MetricSpace",
        "fct-type": "class",
        "title": "MetricSpace"
      },
      "index": {
        "description": "We assume that the MetricSpace on is compatible with the ordering on",
        "hierarchy": "HLearn Algebra Structures MetricSpace",
        "module": "HLearn.Algebra.Structures.MetricSpace",
        "name": "MetricSpace",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Metric Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#t:Norm",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.MetricSpace",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-MetricSpace.html#Norm",
        "fct-type": "class",
        "title": "Norm"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures MetricSpace",
        "module": "HLearn.Algebra.Structures.MetricSpace",
        "name": "Norm",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Norm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#v:distance",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.MetricSpace",
        "fct-package": "HLearn-algebra",
        "fct-signature": "s -\u003e s -\u003e Ring s",
        "fct-source": "src/HLearn-Algebra-Structures-MetricSpace.html#distance",
        "fct-type": "method",
        "title": "distance"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures MetricSpace",
        "module": "HLearn.Algebra.Structures.MetricSpace",
        "name": "distance",
        "normalized": "a-\u003ea-\u003eRing a",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "s-\u003es-\u003eRing s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-MetricSpace.html#v:magnitude",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.MetricSpace",
        "fct-package": "HLearn-algebra",
        "fct-signature": "m -\u003e Ring m",
        "fct-source": "src/HLearn-Algebra-Structures-MetricSpace.html#magnitude",
        "fct-type": "method",
        "title": "magnitude"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures MetricSpace",
        "module": "HLearn.Algebra.Structures.MetricSpace",
        "name": "magnitude",
        "normalized": "a-\u003eRing a",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "m-\u003eRing m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModules are a generalization of vector spaces\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html",
        "fct-type": "module",
        "title": "Modules"
      },
      "index": {
        "description": "Modules are generalization of vector spaces",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "Modules",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Modules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:HasRing",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#HasRing",
        "fct-type": "class",
        "title": "HasRing"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "HasRing",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Has Ring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:Module",
      "description": {
        "fct-descr": "\u003cp\u003eBug: The module classes have the constraint that r be of type Num.  Technically, this should be a Ring.  But creating a Ring class would be awkward because it would conflict with the Num class and require importing a different Prelude.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#Module",
        "fct-type": "class",
        "title": "Module"
      },
      "index": {
        "description": "Bug The module classes have the constraint that be of type Num Technically this should be Ring But creating Ring class would be awkward because it would conflict with the Num class and require importing different Prelude",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "Module",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#t:VectorSpace",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#VectorSpace",
        "fct-type": "class",
        "title": "VectorSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "VectorSpace",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Vector Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:-42-.",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "m -\u003e Ring m -\u003e m",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#%2A.",
        "fct-type": "method",
        "title": "(*.)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "(*.) *.",
        "normalized": "a-\u003eRing a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "m-\u003eRing m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:-47-.",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "m -\u003e Ring m -\u003e m",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#%2F.",
        "fct-type": "method",
        "title": "(/.)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "(/.) /.",
        "normalized": "a-\u003eRing a-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "m-\u003eRing m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Modules.html#v:.-42-",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Modules",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Ring m -\u003e m -\u003e m",
        "fct-source": "src/HLearn-Algebra-Structures-Modules.html#.%2A",
        "fct-type": "method",
        "title": "(.*)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Modules",
        "module": "HLearn.Algebra.Structures.Modules",
        "name": "(.*) .*",
        "normalized": "Ring a-\u003ea-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "Ring m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a generic interface to structures that offer both a left and right cons.  It's based on the Data.Sequence interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Structures.Triangles",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Structures-Triangles.html",
        "fct-type": "module",
        "title": "Triangles"
      },
      "index": {
        "description": "Provides generic interface to structures that offer both left and right cons It based on the Data.Sequence interface",
        "hierarchy": "HLearn Algebra Structures Triangles",
        "module": "HLearn.Algebra.Structures.Triangles",
        "name": "Triangles",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Triangles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#t:Triangle",
      "description": {
        "fct-descr": "\u003cp\u003eMethods for left and right cons on a data type\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Structures.Triangles",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Structures-Triangles.html#Triangle",
        "fct-type": "class",
        "title": "Triangle"
      },
      "index": {
        "description": "Methods for left and right cons on data type",
        "hierarchy": "HLearn Algebra Structures Triangles",
        "module": "HLearn.Algebra.Structures.Triangles",
        "name": "Triangle",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#v:-124--62-",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Triangles",
        "fct-package": "HLearn-algebra",
        "fct-signature": "f -\u003e a -\u003e f",
        "fct-source": "src/HLearn-Algebra-Structures-Triangles.html#%7C%3E",
        "fct-type": "method",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Triangles",
        "module": "HLearn.Algebra.Structures.Triangles",
        "name": "(|\u003e) |\u003e",
        "normalized": "a-\u003eb-\u003ea",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "f-\u003ea-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Structures-Triangles.html#v:-60--124-",
      "description": {
        "fct-module": "HLearn.Algebra.Structures.Triangles",
        "fct-package": "HLearn-algebra",
        "fct-signature": "a -\u003e f -\u003e f",
        "fct-source": "src/HLearn-Algebra-Structures-Triangles.html#%3C%7C",
        "fct-type": "method",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Structures Triangles",
        "module": "HLearn.Algebra.Structures.Triangles",
        "name": "(\u003c|) \u003c|",
        "normalized": "a-\u003eb-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "a-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Types-HList.html",
        "fct-type": "module",
        "title": "HList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:-36-",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "($)",
        "fct-type": "function",
        "title": "($)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "($) $",
        "normalized": "()",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:-43--43-",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(++)",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "(++) ++",
        "normalized": "()",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t::-33-",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": ":!",
        "fct-type": "function",
        "title": ":!"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": ":!",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:AnyBox",
      "description": {
        "fct-descr": "\u003cp\u003eMost generic box, can be used on any type.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#AnyBox",
        "fct-type": "data",
        "title": "AnyBox"
      },
      "index": {
        "description": "Most generic box can be used on any type",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "AnyBox",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Any Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Concat",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Concat",
        "fct-type": "function",
        "title": "Concat"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Concat",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ConstraintBox",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#ConstraintBox",
        "fct-type": "class",
        "title": "ConstraintBox"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "ConstraintBox",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Constraint Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Distribute",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Distribute",
        "fct-type": "function",
        "title": "Distribute"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Distribute",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Distribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Downcast",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#Downcast",
        "fct-type": "class",
        "title": "Downcast"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Downcast",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Downcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:FromNat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "FromNat1",
        "fct-type": "function",
        "title": "FromNat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "FromNat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "From Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HAppend",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "HAppend",
        "fct-type": "function",
        "title": "HAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HAppend",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HAppend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HCons",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "HCons",
        "fct-type": "function",
        "title": "HCons"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HCons",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HCons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HDrop1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to prelude's \u003ca\u003edrop\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HDrop1",
        "fct-type": "class",
        "title": "HDrop1"
      },
      "index": {
        "description": "Equivalent to prelude drop",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HDrop1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HDrop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HLength",
      "description": {
        "fct-descr": "\u003cp\u003eUsed only for the HList class to determine its length\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HLength",
        "fct-type": "class",
        "title": "HLength"
      },
      "index": {
        "description": "Used only for the HList class to determine its length",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HLength",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HLength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HList",
      "description": {
        "fct-descr": "\u003cp\u003eThe heterogenous list\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HList",
        "fct-type": "data",
        "title": "HList"
      },
      "index": {
        "description": "The heterogenous list",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HList2List",
      "description": {
        "fct-descr": "\u003cp\u003eFor converting into a list\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HList2List",
        "fct-type": "class",
        "title": "HList2List"
      },
      "index": {
        "description": "For converting into list",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HList2List",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HList List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HMap",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to prelude's \u003ca\u003emap\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HMap",
        "fct-type": "class",
        "title": "HMap"
      },
      "index": {
        "description": "Equivalent to prelude map",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HMap",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:HTake1",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to prelude's \u003ca\u003etake\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HTake1",
        "fct-type": "class",
        "title": "HTake1"
      },
      "index": {
        "description": "Equivalent to prelude take",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HTake1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "HTake",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Length",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Length",
        "fct-type": "function",
        "title": "Length"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Length",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Length1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Length1",
        "fct-type": "function",
        "title": "Length1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Length1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:List2HList",
      "description": {
        "fct-descr": "\u003cp\u003eFor construction from lists\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#List2HList",
        "fct-type": "class",
        "title": "List2HList"
      },
      "index": {
        "description": "For construction from lists",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "List2HList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "List HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Map",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Map",
        "fct-type": "function",
        "title": "Map"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Map",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Nat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "data",
        "title": "Nat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Nat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Nat1Box",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
        "fct-type": "data",
        "title": "Nat1Box"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Nat1Box",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Replicate",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Replicate",
        "fct-type": "function",
        "title": "Replicate"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Replicate",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:Reverse",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Reverse",
        "fct-type": "function",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Reverse",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ShowBox",
      "description": {
        "fct-descr": "\u003cp\u003eUse this box unless you know for certain that your types won't have a show instance.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#ShowBox",
        "fct-type": "data",
        "title": "ShowBox"
      },
      "index": {
        "description": "Use this box unless you know for certain that your types won have show instance",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "ShowBox",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Show Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:ToNat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "ToNat1",
        "fct-type": "function",
        "title": "ToNat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "ToNat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "To Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:TypeList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#TypeList",
        "fct-type": "class",
        "title": "TypeList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "TypeList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Type List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#t:UnHList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "UnHList",
        "fct-type": "function",
        "title": "UnHList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "UnHList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Un HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v::::",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "t -\u003e HList ts -\u003e HList (t : ts)",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HList",
        "fct-type": "function",
        "title": ":::"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": ":::",
        "normalized": "a-\u003eHList b-\u003eHList(a b)",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "t-\u003eHList ts-\u003eHList(t ts)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:AnyBox",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "forall a . AnyBox !a",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#AnyBox",
        "fct-type": "function",
        "title": "AnyBox"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "AnyBox",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Any Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:HNil",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "HList `[]`",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#HList",
        "fct-type": "function",
        "title": "HNil"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "HNil",
        "normalized": "HList[]",
        "package": "HLearn-algebra",
        "partial": "HNil",
        "signature": "HList[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Nat1Box",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Nat1Box",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
        "fct-type": "function",
        "title": "Nat1Box"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Nat1Box",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:ShowBox",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "ShowBox !a",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#ShowBox",
        "fct-type": "function",
        "title": "ShowBox"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "ShowBox",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Show Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Succ",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Succ Nat1",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "function",
        "title": "Succ"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Succ",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:Zero",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Zero",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "Zero",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:box",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "a -\u003e box",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#box",
        "fct-type": "method",
        "title": "box"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "box",
        "normalized": "a-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "a-\u003ebox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:downcast",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "h -\u003e [box]",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#downcast",
        "fct-type": "method",
        "title": "downcast"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "downcast",
        "normalized": "a-\u003e[b]",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "h-\u003e[box]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:downcastAs",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "(a -\u003e box) -\u003e h -\u003e [box]",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#downcastAs",
        "fct-type": "method",
        "title": "downcastAs"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "downcastAs",
        "normalized": "(a-\u003eb)-\u003ec-\u003e[b]",
        "package": "HLearn-algebra",
        "partial": "As",
        "signature": "(a-\u003ebox)-\u003eh-\u003e[box]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hdrop1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "n -\u003e xs1 -\u003e xs2",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#hdrop1",
        "fct-type": "method",
        "title": "hdrop1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "hdrop1",
        "normalized": "a-\u003eb-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "n-\u003exs-\u003exs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hlength",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "xs -\u003e Int",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#hlength",
        "fct-type": "method",
        "title": "hlength"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "hlength",
        "normalized": "a-\u003eInt",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "xs-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hlist2list",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "xs -\u003e [a]",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#hlist2list",
        "fct-type": "method",
        "title": "hlist2list"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "hlist2list",
        "normalized": "a-\u003e[b]",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "xs-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:hmap",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "f -\u003e xs1 -\u003e xs2",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#hmap",
        "fct-type": "method",
        "title": "hmap"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "hmap",
        "normalized": "a-\u003eb-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "f-\u003exs-\u003exs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:htake1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "n -\u003e xs1 -\u003e xs2",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#htake1",
        "fct-type": "method",
        "title": "htake1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "htake1",
        "normalized": "a-\u003eb-\u003eb",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "n-\u003exs-\u003exs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:list2hlist",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "[x] -\u003e HList (x : xs)",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#list2hlist",
        "fct-type": "method",
        "title": "list2hlist"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "list2hlist",
        "normalized": "[a]-\u003eHList(a b)",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "[x]-\u003eHList(x xs)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:typeList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "t -\u003e [TypeRep]",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#typeList",
        "fct-type": "method",
        "title": "typeList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "typeList",
        "normalized": "a-\u003e[TypeRep]",
        "package": "HLearn-algebra",
        "partial": "List",
        "signature": "t-\u003e[TypeRep]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-HList.html#v:unsafeUnbox",
      "description": {
        "fct-module": "HLearn.Algebra.Types.HList",
        "fct-package": "HLearn-algebra",
        "fct-signature": "box -\u003e a",
        "fct-source": "src/HLearn-Algebra-Types-HList.html#unsafeUnbox",
        "fct-type": "method",
        "title": "unsafeUnbox"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types HList",
        "module": "HLearn.Algebra.Types.HList",
        "name": "unsafeUnbox",
        "normalized": "a-\u003eb",
        "package": "HLearn-algebra",
        "partial": "Unbox",
        "signature": "box-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html",
        "fct-type": "module",
        "title": "Indexing"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "Indexing",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Indexing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:DepIndex",
      "description": {
        "fct-descr": "\u003cp\u003eindex into a data type, but the result type depends on which record we're indexing\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#DepIndex",
        "fct-type": "class",
        "title": "DepIndex"
      },
      "index": {
        "description": "index into data type but the result type depends on which record we re indexing",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "DepIndex",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Dep Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:HasDepIndex",
      "description": {
        "fct-descr": "\u003cp\u003edefines a canonical ordering of all elments in the data type\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#HasDepIndex",
        "fct-type": "class",
        "title": "HasDepIndex"
      },
      "index": {
        "description": "defines canonical ordering of all elments in the data type",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "HasDepIndex",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Has Dep Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:Index",
      "description": {
        "fct-descr": "\u003cp\u003eindex into a data type, all of whose members have the same type\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#Index",
        "fct-type": "class",
        "title": "Index"
      },
      "index": {
        "description": "index into data type all of whose members have the same type",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "Index",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_0",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#TH_0",
        "fct-type": "data",
        "title": "TH_0"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "TH_0",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#TH_1",
        "fct-type": "data",
        "title": "TH_1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "TH_1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_2",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#TH_2",
        "fct-type": "data",
        "title": "TH_2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "TH_2",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:TH_3",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#TH_3",
        "fct-type": "data",
        "title": "TH_3"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "TH_3",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#t:ValueList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "type",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#ValueList",
        "fct-type": "type",
        "title": "ValueList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "ValueList",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Value List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:-33-",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "datatype -\u003e IndexType datatype -\u003e IndexResult datatype",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "(!) !",
        "normalized": "a-\u003eIndexType a-\u003eIndexResult a",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "datatype-\u003eIndexType datatype-\u003eIndexResult datatype"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:-35-",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "datatype -\u003e index -\u003e datatype `DepIndexResult` index",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#%23",
        "fct-type": "method",
        "title": "(#)"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "(#) #",
        "normalized": "a-\u003eb-\u003ea DepIndexResult b",
        "package": "HLearn-algebra",
        "partial": "",
        "signature": "datatype-\u003eindex-\u003edatatype DepIndexResult index"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:datatype2valueList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "datatype -\u003e HList (ValueList datatype)",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#datatype2valueList",
        "fct-type": "method",
        "title": "datatype2valueList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "datatype2valueList",
        "normalized": "a-\u003eHList(ValueList a)",
        "package": "HLearn-algebra",
        "partial": "List",
        "signature": "datatype-\u003eHList(ValueList datatype)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:depIndexList",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "datatype -\u003e HList (DepIndexList datatype)",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#depIndexList",
        "fct-type": "method",
        "title": "depIndexList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "depIndexList",
        "normalized": "a-\u003eHList(DepIndexList a)",
        "package": "HLearn-algebra",
        "partial": "Index List",
        "signature": "datatype-\u003eHList(DepIndexList datatype)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Indexing.html#v:makeIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCreates data types and instances for indexing into a class.  Dependent indices are preficed with \"TH_\" and normal indices by \"I_\".  The dependent indices and \u003ca\u003eDepIndex\u003c/a\u003e instances are always created.  The normal index data types are always created, but the \u003ca\u003eIndex\u003c/a\u003e instance is created only if all records within the data type have the same type.\n\u003c/p\u003e",
        "fct-module": "HLearn.Algebra.Types.Indexing",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/HLearn-Algebra-Types-Indexing.html#makeIndex",
        "fct-type": "function",
        "title": "makeIndex"
      },
      "index": {
        "description": "Creates data types and instances for indexing into class Dependent indices are preficed with TH and normal indices by The dependent indices and DepIndex instances are always created The normal index data types are always created but the Index instance is created only if all records within the data type have the same type",
        "hierarchy": "HLearn Algebra Types Indexing",
        "module": "HLearn.Algebra.Types.Indexing",
        "name": "makeIndex",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "HLearn-algebra",
        "partial": "Index",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module was automatically generated by Nat1Generator.hs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html",
        "fct-type": "module",
        "title": "Nat1"
      },
      "index": {
        "description": "This module was automatically generated by Nat1Generator.hs",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Nat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:FromNat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "FromNat1",
        "fct-type": "function",
        "title": "FromNat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "FromNat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "From Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:Nat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "data",
        "title": "Nat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Nat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:Nat1Box",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
        "fct-type": "data",
        "title": "Nat1Box"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Nat1Box",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#t:ToNat1",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "ToNat1",
        "fct-type": "function",
        "title": "ToNat1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "ToNat1",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "To Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Nat1Box",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Nat1Box",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1Box",
        "fct-type": "function",
        "title": "Nat1Box"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Nat1Box",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Nat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Succ",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Succ Nat1",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "function",
        "title": "Succ"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Succ",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra-Types-Nat1.html#v:Zero",
      "description": {
        "fct-module": "HLearn.Algebra.Types.Nat1",
        "fct-package": "HLearn-algebra",
        "fct-signature": "Zero",
        "fct-source": "src/HLearn-Algebra-Types-Nat1.html#Nat1",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Algebra Types Nat1",
        "module": "HLearn.Algebra.Types.Nat1",
        "name": "Zero",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-algebra/docs/HLearn-Algebra.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the base module for the HLearn library.  It exports all the functions / data structures needed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Algebra",
        "fct-package": "HLearn-algebra",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Algebra.html",
        "fct-type": "module",
        "title": "Algebra"
      },
      "index": {
        "description": "This is the base module for the HLearn library It exports all the functions data structures needed",
        "hierarchy": "HLearn Algebra",
        "module": "HLearn.Algebra",
        "name": "Algebra",
        "normalized": "",
        "package": "HLearn-algebra",
        "partial": "Algebra",
        "signature": ""
      }
    }
  }
]