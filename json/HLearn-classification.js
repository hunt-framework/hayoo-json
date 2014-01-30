[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html",
        "fct-type": "module",
        "title": "CrossValidation"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "CrossValidation",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Cross Validation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#t:LossFunction",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "type",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#LossFunction",
        "fct-type": "type",
        "title": "LossFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "LossFunction",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Loss Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate",
        "fct-type": "function",
        "title": "crossValidate"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "crossValidate",
        "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
        "package": "HLearn-classification",
        "partial": "Validate",
        "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate_group",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate_group",
        "fct-type": "function",
        "title": "crossValidate_group"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "crossValidate_group",
        "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
        "package": "HLearn-classification",
        "partial": "Validate",
        "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate_monoid",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate_monoid",
        "fct-type": "function",
        "title": "crossValidate_monoid"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "crossValidate_monoid",
        "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
        "package": "HLearn-classification",
        "partial": "Validate",
        "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossvalidation",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the standard cross-validation technique for use with the HomTrainer type class.  It is asymptotically faster than standard k-fold cross-validation (implemented with lame_crossvalidation), yet is guaranteed to get the exact same answer.\n\u003c/p\u003e",
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "container (Datapoint model) -\u003e (model -\u003e container (Datapoint model) -\u003e ret) -\u003e Int -\u003e ret",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#crossvalidation",
        "fct-type": "function",
        "title": "crossvalidation"
      },
      "index": {
        "description": "This is the standard cross-validation technique for use with the HomTrainer type class It is asymptotically faster than standard k-fold cross-validation implemented with lame crossvalidation yet is guaranteed to get the exact same answer",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "crossvalidation",
        "normalized": "a(Datapoint b)-\u003e(b-\u003ea(Datapoint b)-\u003ec)-\u003eInt-\u003ec",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "container(Datapoint model)-\u003e(model-\u003econtainer(Datapoint model)-\u003eret)-\u003eInt-\u003eret"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:errorRate",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "LossFunction model",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#errorRate",
        "fct-type": "function",
        "title": "errorRate"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "errorRate",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:folds",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "Int -\u003e [dp] -\u003e [[dp]]",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#folds",
        "fct-type": "function",
        "title": "folds"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "folds",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "Int-\u003e[dp]-\u003e[[dp]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:genTestList",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[a] -\u003e [(a, a)]",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#genTestList",
        "fct-type": "function",
        "title": "genTestList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "genTestList",
        "normalized": "[a]-\u003e[(a,a)]",
        "package": "HLearn-classification",
        "partial": "Test List",
        "signature": "[a]-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:leaveOneOut",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[dp] -\u003e [[dp]]",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#leaveOneOut",
        "fct-type": "function",
        "title": "leaveOneOut"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "leaveOneOut",
        "normalized": "[a]-\u003e[[a]]",
        "package": "HLearn-classification",
        "partial": "One Out",
        "signature": "[dp]-\u003e[[dp]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:listAllBut",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#listAllBut",
        "fct-type": "function",
        "title": "listAllBut"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "listAllBut",
        "normalized": "[a]-\u003e[a]",
        "package": "HLearn-classification",
        "partial": "All But",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:listAllBut2",
      "description": {
        "fct-module": "HLearn.Evaluation.CrossValidation",
        "fct-package": "HLearn-classification",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/HLearn-Evaluation-CrossValidation.html#listAllBut2",
        "fct-type": "function",
        "title": "listAllBut2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation CrossValidation",
        "module": "HLearn.Evaluation.CrossValidation",
        "name": "listAllBut2",
        "normalized": "[a]-\u003e[a]",
        "package": "HLearn-classification",
        "partial": "All But",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-RSquared.html#",
      "description": {
        "fct-module": "HLearn.Evaluation.RSquared",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Evaluation-RSquared.html",
        "fct-type": "module",
        "title": "RSquared"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation RSquared",
        "module": "HLearn.Evaluation.RSquared",
        "name": "RSquared",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "RSquared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-RSquared.html#v:rsquared",
      "description": {
        "fct-module": "HLearn.Evaluation.RSquared",
        "fct-package": "HLearn-classification",
        "fct-signature": "model -\u003e [Datapoint model] -\u003e Ring model",
        "fct-source": "src/HLearn-Evaluation-RSquared.html#rsquared",
        "fct-type": "function",
        "title": "rsquared"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Evaluation RSquared",
        "module": "HLearn.Evaluation.RSquared",
        "name": "rsquared",
        "normalized": "a-\u003e[Datapoint a]-\u003eRing a",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "model-\u003e[Datapoint model]-\u003eRing model"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Bayes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBayesian classification is one of the standard algorithms in machine learning.  Typically, we make the naive bayes assumption of assuming that none of our attributes are correlated.  The Bayes data type, however, is capable of both naive and non-naive assumptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Classifiers.Bayes",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Bayes.html",
        "fct-type": "module",
        "title": "Bayes"
      },
      "index": {
        "description": "Bayesian classification is one of the standard algorithms in machine learning Typically we make the naive bayes assumption of assuming that none of our attributes are correlated The Bayes data type however is capable of both naive and non-naive assumptions",
        "hierarchy": "HLearn Models Classifiers Bayes",
        "module": "HLearn.Models.Classifiers.Bayes",
        "name": "Bayes",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Bayes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Bayes.html#t:Bayes",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Bayes",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Classifiers-Bayes.html#Bayes",
        "fct-type": "data",
        "title": "Bayes"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Bayes",
        "module": "HLearn.Models.Classifiers.Bayes",
        "name": "Bayes",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Bayes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Centroid",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Centroid.html",
        "fct-type": "module",
        "title": "Centroid"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Centroid",
        "module": "HLearn.Models.Classifiers.Centroid",
        "name": "Centroid",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Centroid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#t:Centroid",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Centroid",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
        "fct-type": "data",
        "title": "Centroid"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Centroid",
        "module": "HLearn.Models.Classifiers.Centroid",
        "name": "Centroid",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Centroid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:Centroid",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Centroid",
        "fct-package": "HLearn-classification",
        "fct-signature": "Centroid",
        "fct-source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
        "fct-type": "function",
        "title": "Centroid"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Centroid",
        "module": "HLearn.Models.Classifiers.Centroid",
        "name": "Centroid",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Centroid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:c_numdp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Centroid",
        "fct-package": "HLearn-classification",
        "fct-signature": "Ring vector",
        "fct-source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
        "fct-type": "function",
        "title": "c_numdp"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Centroid",
        "module": "HLearn.Models.Classifiers.Centroid",
        "name": "c_numdp",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:vector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Centroid",
        "fct-package": "HLearn-classification",
        "fct-signature": "vector",
        "fct-source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
        "fct-type": "function",
        "title": "vector"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Centroid",
        "module": "HLearn.Models.Classifiers.Centroid",
        "name": "vector",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "Common",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Classifier",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#Classifier",
        "fct-type": "class",
        "title": "Classifier"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "Classifier",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Labeled",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#Labeled",
        "fct-type": "class",
        "title": "Labeled"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "Labeled",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:MarginClassifier",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#MarginClassifier",
        "fct-type": "class",
        "title": "MarginClassifier"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "MarginClassifier",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Margin Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:ProbabilityClassifier",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#ProbabilityClassifier",
        "fct-type": "class",
        "title": "ProbabilityClassifier"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "ProbabilityClassifier",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Probability Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Regression",
      "description": {
        "fct-descr": "\u003cp\u003ethis is a default instance that any instance of Classifier should satisfy if it is also an instance of ProbabilityClassifier\n instance \n     ( Label (Datapoint model) ~ Datapoint (ResultDistribution model)\n     , Mean (ResultDistribution model)\n     , ProbabilityClassifier model\n     ) =\u003e Classifier model\n         where\n     classify model dp = mean $ probabilityClassify model dp\n\u003c/p\u003e\u003cp\u003eRegression is classification where the class labels are (isomorphic to) real numbers.  The constraints could probably be better specified, but they're close enough for now.\n\u003c/p\u003e",
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#Regression",
        "fct-type": "class",
        "title": "Regression"
      },
      "index": {
        "description": "this is default instance that any instance of Classifier should satisfy if it is also an instance of ProbabilityClassifier instance Label Datapoint model Datapoint ResultDistribution model Mean ResultDistribution model ProbabilityClassifier model Classifier model where classify model dp mean probabilityClassify model dp Regression is classification where the class labels are isomorphic to real numbers The constraints could probably be better specified but they re close enough for now",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "Regression",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Regression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:bool2num",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "Bool -\u003e a",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#bool2num",
        "fct-type": "function",
        "title": "bool2num"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "bool2num",
        "normalized": "Bool-\u003ea",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "Bool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:classify",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "model -\u003e Attributes (Datapoint model) -\u003e Label (Datapoint model)",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#classify",
        "fct-type": "method",
        "title": "classify"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "classify",
        "normalized": "a-\u003eAttributes(Datapoint a)-\u003eLabel(Datapoint a)",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "model-\u003eAttributes(Datapoint model)-\u003eLabel(Datapoint model)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:getAttributes",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "dp -\u003e Attributes dp",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#getAttributes",
        "fct-type": "method",
        "title": "getAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "getAttributes",
        "normalized": "a-\u003eAttributes a",
        "package": "HLearn-classification",
        "partial": "Attributes",
        "signature": "dp-\u003eAttributes dp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:getLabel",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "dp -\u003e Label dp",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#getLabel",
        "fct-type": "method",
        "title": "getLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "getLabel",
        "normalized": "a-\u003eLabel a",
        "package": "HLearn-classification",
        "partial": "Label",
        "signature": "dp-\u003eLabel dp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:indicator",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "Bool -\u003e a",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#indicator",
        "fct-type": "function",
        "title": "indicator"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "indicator",
        "normalized": "Bool-\u003ea",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "Bool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:margin",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "model -\u003e Attributes (Datapoint model) -\u003e (Ring model, Label (Datapoint model))",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#margin",
        "fct-type": "method",
        "title": "margin"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "margin",
        "normalized": "a-\u003eAttributes(Datapoint a)-\u003e(Ring a,Label(Datapoint a))",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "model-\u003eAttributes(Datapoint model)-\u003e(Ring model,Label(Datapoint model))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:num2bool",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#num2bool",
        "fct-type": "function",
        "title": "num2bool"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "num2bool",
        "normalized": "a-\u003eBool",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:probabilityClassify",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Common",
        "fct-package": "HLearn-classification",
        "fct-signature": "model -\u003e Attributes (Datapoint model) -\u003e ResultDistribution model",
        "fct-source": "src/HLearn-Models-Classifiers-Common.html#probabilityClassify",
        "fct-type": "method",
        "title": "probabilityClassify"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Common",
        "module": "HLearn.Models.Classifiers.Common",
        "name": "probabilityClassify",
        "normalized": "a-\u003eAttributes(Datapoint a)-\u003eResultDistribution a",
        "package": "HLearn-classification",
        "partial": "Classify",
        "signature": "model-\u003eAttributes(Datapoint model)-\u003eResultDistribution model"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html",
        "fct-type": "module",
        "title": "FiniteBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "FiniteBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Finite Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#t:FiniteBoost",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
        "fct-type": "newtype",
        "title": "FiniteBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "FiniteBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Finite Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#t:FiniteBoostParams",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "class",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoostParams",
        "fct-type": "class",
        "title": "FiniteBoostParams"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "FiniteBoostParams",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Finite Boost Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:FiniteBoost",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "FiniteBoost",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
        "fct-type": "function",
        "title": "FiniteBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "FiniteBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Finite Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:getModelL",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "p -\u003e [BaseModel p]",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#getModelL",
        "fct-type": "method",
        "title": "getModelL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "getModelL",
        "normalized": "a-\u003e[BaseModel a]",
        "package": "HLearn-classification",
        "partial": "Model",
        "signature": "p-\u003e[BaseModel p]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:numModels",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "p -\u003e Int",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#numModels",
        "fct-type": "method",
        "title": "numModels"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "numModels",
        "normalized": "a-\u003eInt",
        "package": "HLearn-classification",
        "partial": "Models",
        "signature": "p-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:weights",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Vector (Ring (BaseModel params))",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
        "fct-type": "function",
        "title": "weights"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
        "name": "weights",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html",
        "fct-type": "module",
        "title": "MonoidBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "MonoidBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Monoid Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#t:MonoidBoost",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "data",
        "title": "MonoidBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "MonoidBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Monoid Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:MonoidBoost",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "MonoidBoost",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "function",
        "title": "MonoidBoost"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "MonoidBoost",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Monoid Boost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:boost_numdp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Int",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "function",
        "title": "boost_numdp"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "boost_numdp",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:dataL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Seq (Datapoint basemodel)",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "function",
        "title": "dataL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "dataL",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:leave",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Int -\u003e Seq a -\u003e Seq a",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#leave",
        "fct-type": "function",
        "title": "leave"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "leave",
        "normalized": "Int-\u003eSeq a-\u003eSeq a",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "Int-\u003eSeq a-\u003eSeq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:modelL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Seq basemodel",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "function",
        "title": "modelL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "modelL",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:testassociativity",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "IO ()",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#testassociativity",
        "fct-type": "function",
        "title": "testassociativity"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "testassociativity",
        "normalized": "IO()",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:weightL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "fct-package": "HLearn-classification",
        "fct-signature": "Seq (Ring basemodel)",
        "fct-source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
        "fct-type": "function",
        "title": "weightL"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
        "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
        "name": "weightL",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.NearestNeighbor",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-NearestNeighbor.html",
        "fct-type": "module",
        "title": "NearestNeighbor"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers NearestNeighbor",
        "module": "HLearn.Models.Classifiers.NearestNeighbor",
        "name": "NearestNeighbor",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Nearest Neighbor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#t:NaiveNN",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.NearestNeighbor",
        "fct-package": "HLearn-classification",
        "fct-signature": "newtype",
        "fct-source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
        "fct-type": "newtype",
        "title": "NaiveNN"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers NearestNeighbor",
        "module": "HLearn.Models.Classifiers.NearestNeighbor",
        "name": "NaiveNN",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Naive NN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:NaiveNN",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.NearestNeighbor",
        "fct-package": "HLearn-classification",
        "fct-signature": "NaiveNN",
        "fct-source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
        "fct-type": "function",
        "title": "NaiveNN"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers NearestNeighbor",
        "module": "HLearn.Models.Classifiers.NearestNeighbor",
        "name": "NaiveNN",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Naive NN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:getcontainer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.NearestNeighbor",
        "fct-package": "HLearn-classification",
        "fct-signature": "container (label, dp)",
        "fct-source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
        "fct-type": "function",
        "title": "getcontainer"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers NearestNeighbor",
        "module": "HLearn.Models.Classifiers.NearestNeighbor",
        "name": "getcontainer",
        "normalized": "a(b,c)",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "container(label,dp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:neighborList",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.NearestNeighbor",
        "fct-package": "HLearn-classification",
        "fct-signature": "dp -\u003e NaiveNN container label dp -\u003e [(label, dp)]",
        "fct-source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#neighborList",
        "fct-type": "function",
        "title": "neighborList"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers NearestNeighbor",
        "module": "HLearn.Models.Classifiers.NearestNeighbor",
        "name": "neighborList",
        "normalized": "a-\u003eNaiveNN b c a-\u003e[(c,a)]",
        "package": "HLearn-classification",
        "partial": "List",
        "signature": "dp-\u003eNaiveNN container label dp-\u003e[(label,dp)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Perceptron",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers-Perceptron.html",
        "fct-type": "module",
        "title": "Perceptron"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Perceptron",
        "module": "HLearn.Models.Classifiers.Perceptron",
        "name": "Perceptron",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Perceptron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#t:Perceptron",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Perceptron",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
        "fct-type": "data",
        "title": "Perceptron"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Perceptron",
        "module": "HLearn.Models.Classifiers.Perceptron",
        "name": "Perceptron",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Perceptron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#v:Perceptron",
      "description": {
        "fct-module": "HLearn.Models.Classifiers.Perceptron",
        "fct-package": "HLearn-classification",
        "fct-signature": "Perceptron",
        "fct-source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
        "fct-type": "function",
        "title": "Perceptron"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Perceptron",
        "module": "HLearn.Models.Classifiers.Perceptron",
        "name": "Perceptron",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Perceptron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#v:centroids",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Classifiers.Perceptron",
        "fct-package": "HLearn-classification",
        "fct-signature": "Map label (Centroid dp)",
        "fct-source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
        "fct-type": "function",
        "title": "centroids"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Classifiers Perceptron",
        "module": "HLearn.Models.Classifiers.Perceptron",
        "name": "centroids",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file exports the most commonly used modules within HLearn-classifiers.  Most likely this is the only file you will have to import.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HLearn.Models.Classifiers",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Classifiers.html",
        "fct-type": "module",
        "title": "Classifiers"
      },
      "index": {
        "description": "This file exports the most commonly used modules within HLearn-classifiers Most likely this is the only file you will have to import",
        "hierarchy": "HLearn Models Classifiers",
        "module": "HLearn.Models.Classifiers",
        "name": "Classifiers",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Classifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "module",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html",
        "fct-type": "module",
        "title": "PowerLaw"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "PowerLaw",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Power Law",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#t:Coord",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
        "fct-type": "data",
        "title": "Coord"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "Coord",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Coord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#t:PowerLaw",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "data",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "data",
        "title": "PowerLaw"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "PowerLaw",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Power Law",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:Coord",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "Coord",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
        "fct-type": "function",
        "title": "Coord"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "Coord",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Coord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:PowerLaw",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "PowerLaw",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "PowerLaw"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "PowerLaw",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "Power Law",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:dataset1",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "[Coord Double]",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#dataset1",
        "fct-type": "function",
        "title": "dataset1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "dataset1",
        "normalized": "[Coord Double]",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "[Coord Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:dataset2",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "[Coord Double]",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#dataset2",
        "fct-type": "function",
        "title": "dataset2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "dataset2",
        "normalized": "[Coord Double]",
        "package": "HLearn-classification",
        "partial": "",
        "signature": "[Coord Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "!ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "lnx"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "lnx",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnx2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "!ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "lnx2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "lnx2",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnxlny",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "!ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "lnxlny"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "lnxlny",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lny",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "!ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "lny"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "lny",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:model1",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "PowerLaw Double",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#model1",
        "fct-type": "function",
        "title": "model1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "model1",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:model2",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "PowerLaw Double",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#model2",
        "fct-type": "function",
        "title": "model2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "model2",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:n",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "!ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
        "fct-type": "function",
        "title": "n"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "n",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:result1",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "Double",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#result1",
        "fct-type": "function",
        "title": "result1"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "result1",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:result2",
      "description": {
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "Double",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#result2",
        "fct-type": "function",
        "title": "result2"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "result2",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:x",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "x",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:y",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HLearn.Models.Regression.PowerLaw",
        "fct-package": "HLearn-classification",
        "fct-signature": "ring",
        "fct-source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
        "fct-type": "function",
        "title": "y"
      },
      "index": {
        "description": "",
        "hierarchy": "HLearn Models Regression PowerLaw",
        "module": "HLearn.Models.Regression.PowerLaw",
        "name": "y",
        "normalized": "",
        "package": "HLearn-classification",
        "partial": "",
        "signature": ""
      }
    }
  }
]