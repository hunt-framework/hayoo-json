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
        "word": "HLearn-classification"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "CrossValidation",
          "package": "HLearn-classification",
          "source": "src/HLearn-Evaluation-CrossValidation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "CrossValidation",
          "package": "HLearn-classification",
          "partial": "Cross Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "LossFunction",
          "package": "HLearn-classification",
          "source": "src/HLearn-Evaluation-CrossValidation.html#LossFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "LossFunction",
          "package": "HLearn-classification",
          "partial": "Loss Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#t:LossFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate",
          "package": "HLearn-classification",
          "signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
          "source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate",
          "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
          "package": "HLearn-classification",
          "partial": "Validate",
          "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate_group",
          "package": "HLearn-classification",
          "signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
          "source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate_group",
          "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
          "package": "HLearn-classification",
          "partial": "Validate",
          "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate_monoid",
          "package": "HLearn-classification",
          "signature": "[[Datapoint model]] -\u003e LossFunction model -\u003e Normal Double",
          "source": "src/HLearn-Evaluation-CrossValidation.html#crossValidate_monoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossValidate_monoid",
          "normalized": "[[Datapoint a]]-\u003eLossFunction a-\u003eNormal Double",
          "package": "HLearn-classification",
          "partial": "Validate",
          "signature": "[[Datapoint model]]-\u003eLossFunction model-\u003eNormal Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossValidate_monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the standard cross-validation technique for use with the HomTrainer type class.  It is asymptotically faster than standard k-fold cross-validation (implemented with lame_crossvalidation), yet is guaranteed to get the exact same answer.\n\u003c/p\u003e",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossvalidation",
          "package": "HLearn-classification",
          "signature": "container (Datapoint model) -\u003e (model -\u003e container (Datapoint model) -\u003e ret) -\u003e Int -\u003e ret",
          "source": "src/HLearn-Evaluation-CrossValidation.html#crossvalidation",
          "type": "function"
        },
        "index": {
          "description": "This is the standard cross-validation technique for use with the HomTrainer type class It is asymptotically faster than standard k-fold cross-validation implemented with lame crossvalidation yet is guaranteed to get the exact same answer",
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "crossvalidation",
          "normalized": "a(Datapoint b)-\u003e(b-\u003ea(Datapoint b)-\u003ec)-\u003eInt-\u003ec",
          "package": "HLearn-classification",
          "signature": "container(Datapoint model)-\u003e(model-\u003econtainer(Datapoint model)-\u003eret)-\u003eInt-\u003eret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:crossvalidation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "errorRate",
          "package": "HLearn-classification",
          "signature": "LossFunction model",
          "source": "src/HLearn-Evaluation-CrossValidation.html#errorRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "errorRate",
          "package": "HLearn-classification",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:errorRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "folds",
          "package": "HLearn-classification",
          "signature": "Int -\u003e [dp] -\u003e [[dp]]",
          "source": "src/HLearn-Evaluation-CrossValidation.html#folds",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "folds",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "HLearn-classification",
          "signature": "Int-\u003e[dp]-\u003e[[dp]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:folds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "genTestList",
          "package": "HLearn-classification",
          "signature": "[a] -\u003e [(a, a)]",
          "source": "src/HLearn-Evaluation-CrossValidation.html#genTestList",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "genTestList",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "HLearn-classification",
          "partial": "Test List",
          "signature": "[a]-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:genTestList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "leaveOneOut",
          "package": "HLearn-classification",
          "signature": "[dp] -\u003e [[dp]]",
          "source": "src/HLearn-Evaluation-CrossValidation.html#leaveOneOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "leaveOneOut",
          "normalized": "[a]-\u003e[[a]]",
          "package": "HLearn-classification",
          "partial": "One Out",
          "signature": "[dp]-\u003e[[dp]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:leaveOneOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "listAllBut",
          "package": "HLearn-classification",
          "signature": "[a] -\u003e [a]",
          "source": "src/HLearn-Evaluation-CrossValidation.html#listAllBut",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "listAllBut",
          "normalized": "[a]-\u003e[a]",
          "package": "HLearn-classification",
          "partial": "All But",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:listAllBut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "listAllBut2",
          "package": "HLearn-classification",
          "signature": "[a] -\u003e [a]",
          "source": "src/HLearn-Evaluation-CrossValidation.html#listAllBut2",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation CrossValidation",
          "module": "HLearn.Evaluation.CrossValidation",
          "name": "listAllBut2",
          "normalized": "[a]-\u003e[a]",
          "package": "HLearn-classification",
          "partial": "All But",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-CrossValidation.html#v:listAllBut2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.RSquared",
          "name": "RSquared",
          "package": "HLearn-classification",
          "source": "src/HLearn-Evaluation-RSquared.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Evaluation RSquared",
          "module": "HLearn.Evaluation.RSquared",
          "name": "RSquared",
          "package": "HLearn-classification",
          "partial": "RSquared",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-RSquared.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Evaluation.RSquared",
          "name": "rsquared",
          "package": "HLearn-classification",
          "signature": "model -\u003e [Datapoint model] -\u003e Ring model",
          "source": "src/HLearn-Evaluation-RSquared.html#rsquared",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Evaluation RSquared",
          "module": "HLearn.Evaluation.RSquared",
          "name": "rsquared",
          "normalized": "a-\u003e[Datapoint a]-\u003eRing a",
          "package": "HLearn-classification",
          "signature": "model-\u003e[Datapoint model]-\u003eRing model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Evaluation-RSquared.html#v:rsquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBayesian classification is one of the standard algorithms in machine learning.  Typically, we make the naive bayes assumption of assuming that none of our attributes are correlated.  The Bayes data type, however, is capable of both naive and non-naive assumptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Classifiers.Bayes",
          "name": "Bayes",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Bayes.html",
          "type": "module"
        },
        "index": {
          "description": "Bayesian classification is one of the standard algorithms in machine learning Typically we make the naive bayes assumption of assuming that none of our attributes are correlated The Bayes data type however is capable of both naive and non-naive assumptions",
          "hierarchy": "HLearn Models Classifiers Bayes",
          "module": "HLearn.Models.Classifiers.Bayes",
          "name": "Bayes",
          "package": "HLearn-classification",
          "partial": "Bayes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Bayes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Bayes",
          "name": "Bayes",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Bayes.html#Bayes",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Bayes",
          "module": "HLearn.Models.Classifiers.Bayes",
          "name": "Bayes",
          "package": "HLearn-classification",
          "partial": "Bayes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Bayes.html#t:Bayes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Centroid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Centroid",
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "partial": "Centroid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Centroid",
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "partial": "Centroid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#t:Centroid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "signature": "Centroid",
          "source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Centroid",
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "Centroid",
          "package": "HLearn-classification",
          "partial": "Centroid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:Centroid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "c_numdp",
          "package": "HLearn-classification",
          "signature": "Ring vector",
          "source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Centroid",
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "c_numdp",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:c_numdp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "vector",
          "package": "HLearn-classification",
          "signature": "vector",
          "source": "src/HLearn-Models-Classifiers-Centroid.html#Centroid",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Centroid",
          "module": "HLearn.Models.Classifiers.Centroid",
          "name": "vector",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Centroid.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Common",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Common",
          "package": "HLearn-classification",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Classifier",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html#Classifier",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Classifier",
          "package": "HLearn-classification",
          "partial": "Classifier",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Classifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Labeled",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html#Labeled",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Labeled",
          "package": "HLearn-classification",
          "partial": "Labeled",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Labeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "MarginClassifier",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html#MarginClassifier",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "MarginClassifier",
          "package": "HLearn-classification",
          "partial": "Margin Classifier",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:MarginClassifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "ProbabilityClassifier",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html#ProbabilityClassifier",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "ProbabilityClassifier",
          "package": "HLearn-classification",
          "partial": "Probability Classifier",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:ProbabilityClassifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is a default instance that any instance of Classifier should satisfy if it is also an instance of ProbabilityClassifier\n instance \n     ( Label (Datapoint model) ~ Datapoint (ResultDistribution model)\n     , Mean (ResultDistribution model)\n     , ProbabilityClassifier model\n     ) =\u003e Classifier model\n         where\n     classify model dp = mean $ probabilityClassify model dp\n\u003c/p\u003e\u003cp\u003eRegression is classification where the class labels are (isomorphic to) real numbers.  The constraints could probably be better specified, but they're close enough for now.\n\u003c/p\u003e",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Regression",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Common.html#Regression",
          "type": "class"
        },
        "index": {
          "description": "this is default instance that any instance of Classifier should satisfy if it is also an instance of ProbabilityClassifier instance Label Datapoint model Datapoint ResultDistribution model Mean ResultDistribution model ProbabilityClassifier model Classifier model where classify model dp mean probabilityClassify model dp Regression is classification where the class labels are isomorphic to real numbers The constraints could probably be better specified but they re close enough for now",
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "Regression",
          "package": "HLearn-classification",
          "partial": "Regression",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#t:Regression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "bool2num",
          "package": "HLearn-classification",
          "signature": "Bool -\u003e a",
          "source": "src/HLearn-Models-Classifiers-Common.html#bool2num",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "bool2num",
          "normalized": "Bool-\u003ea",
          "package": "HLearn-classification",
          "signature": "Bool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:bool2num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "classify",
          "package": "HLearn-classification",
          "signature": "model -\u003e Attributes (Datapoint model) -\u003e Label (Datapoint model)",
          "source": "src/HLearn-Models-Classifiers-Common.html#classify",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "classify",
          "normalized": "a-\u003eAttributes(Datapoint a)-\u003eLabel(Datapoint a)",
          "package": "HLearn-classification",
          "signature": "model-\u003eAttributes(Datapoint model)-\u003eLabel(Datapoint model)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "getAttributes",
          "package": "HLearn-classification",
          "signature": "dp -\u003e Attributes dp",
          "source": "src/HLearn-Models-Classifiers-Common.html#getAttributes",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "getAttributes",
          "normalized": "a-\u003eAttributes a",
          "package": "HLearn-classification",
          "partial": "Attributes",
          "signature": "dp-\u003eAttributes dp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:getAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "getLabel",
          "package": "HLearn-classification",
          "signature": "dp -\u003e Label dp",
          "source": "src/HLearn-Models-Classifiers-Common.html#getLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "getLabel",
          "normalized": "a-\u003eLabel a",
          "package": "HLearn-classification",
          "partial": "Label",
          "signature": "dp-\u003eLabel dp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "indicator",
          "package": "HLearn-classification",
          "signature": "Bool -\u003e a",
          "source": "src/HLearn-Models-Classifiers-Common.html#indicator",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "indicator",
          "normalized": "Bool-\u003ea",
          "package": "HLearn-classification",
          "signature": "Bool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:indicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "margin",
          "package": "HLearn-classification",
          "signature": "model -\u003e Attributes (Datapoint model) -\u003e (Ring model, Label (Datapoint model))",
          "source": "src/HLearn-Models-Classifiers-Common.html#margin",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "margin",
          "normalized": "a-\u003eAttributes(Datapoint a)-\u003e(Ring a,Label(Datapoint a))",
          "package": "HLearn-classification",
          "signature": "model-\u003eAttributes(Datapoint model)-\u003e(Ring model,Label(Datapoint model))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:margin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "num2bool",
          "package": "HLearn-classification",
          "signature": "a -\u003e Bool",
          "source": "src/HLearn-Models-Classifiers-Common.html#num2bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "num2bool",
          "normalized": "a-\u003eBool",
          "package": "HLearn-classification",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:num2bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Common",
          "name": "probabilityClassify",
          "package": "HLearn-classification",
          "signature": "model -\u003e Attributes (Datapoint model) -\u003e ResultDistribution model",
          "source": "src/HLearn-Models-Classifiers-Common.html#probabilityClassify",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Common",
          "module": "HLearn.Models.Classifiers.Common",
          "name": "probabilityClassify",
          "normalized": "a-\u003eAttributes(Datapoint a)-\u003eResultDistribution a",
          "package": "HLearn-classification",
          "partial": "Classify",
          "signature": "model-\u003eAttributes(Datapoint model)-\u003eResultDistribution model",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Common.html#v:probabilityClassify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "partial": "Finite Boost",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "partial": "Finite Boost",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#t:FiniteBoost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoostParams",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoostParams",
          "type": "class"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoostParams",
          "package": "HLearn-classification",
          "partial": "Finite Boost Params",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#t:FiniteBoostParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "signature": "FiniteBoost",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "FiniteBoost",
          "package": "HLearn-classification",
          "partial": "Finite Boost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:FiniteBoost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "getModelL",
          "package": "HLearn-classification",
          "signature": "p -\u003e [BaseModel p]",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#getModelL",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "getModelL",
          "normalized": "a-\u003e[BaseModel a]",
          "package": "HLearn-classification",
          "partial": "Model",
          "signature": "p-\u003e[BaseModel p]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:getModelL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "numModels",
          "package": "HLearn-classification",
          "signature": "p -\u003e Int",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#numModels",
          "type": "method"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "numModels",
          "normalized": "a-\u003eInt",
          "package": "HLearn-classification",
          "partial": "Models",
          "signature": "p-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:numModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "weights",
          "package": "HLearn-classification",
          "signature": "Vector (Ring (BaseModel params))",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#FiniteBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting FiniteBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.FiniteBoost",
          "name": "weights",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-FiniteBoost.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "partial": "Monoid Boost",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "partial": "Monoid Boost",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#t:MonoidBoost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "signature": "MonoidBoost",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "MonoidBoost",
          "package": "HLearn-classification",
          "partial": "Monoid Boost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:MonoidBoost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "boost_numdp",
          "package": "HLearn-classification",
          "signature": "Int",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "boost_numdp",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:boost_numdp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "dataL",
          "package": "HLearn-classification",
          "signature": "Seq (Datapoint basemodel)",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "dataL",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:dataL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "leave",
          "package": "HLearn-classification",
          "signature": "Int -\u003e Seq a -\u003e Seq a",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#leave",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "leave",
          "normalized": "Int-\u003eSeq a-\u003eSeq a",
          "package": "HLearn-classification",
          "signature": "Int-\u003eSeq a-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "modelL",
          "package": "HLearn-classification",
          "signature": "Seq basemodel",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "modelL",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:modelL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "testassociativity",
          "package": "HLearn-classification",
          "signature": "IO ()",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#testassociativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "testassociativity",
          "normalized": "IO()",
          "package": "HLearn-classification",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:testassociativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "weightL",
          "package": "HLearn-classification",
          "signature": "Seq (Ring basemodel)",
          "source": "src/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#MonoidBoost",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Experimental Boosting MonoidBoost",
          "module": "HLearn.Models.Classifiers.Experimental.Boosting.MonoidBoost",
          "name": "weightL",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Experimental-Boosting-MonoidBoost.html#v:weightL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NearestNeighbor",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-NearestNeighbor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers NearestNeighbor",
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NearestNeighbor",
          "package": "HLearn-classification",
          "partial": "Nearest Neighbor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NaiveNN",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers NearestNeighbor",
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NaiveNN",
          "package": "HLearn-classification",
          "partial": "Naive NN",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#t:NaiveNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NaiveNN",
          "package": "HLearn-classification",
          "signature": "NaiveNN",
          "source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers NearestNeighbor",
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "NaiveNN",
          "package": "HLearn-classification",
          "partial": "Naive NN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:NaiveNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "getcontainer",
          "package": "HLearn-classification",
          "signature": "container (label, dp)",
          "source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#NaiveNN",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers NearestNeighbor",
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "getcontainer",
          "normalized": "a(b,c)",
          "package": "HLearn-classification",
          "signature": "container(label,dp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:getcontainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "neighborList",
          "package": "HLearn-classification",
          "signature": "dp -\u003e NaiveNN container label dp -\u003e [(label, dp)]",
          "source": "src/HLearn-Models-Classifiers-NearestNeighbor.html#neighborList",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers NearestNeighbor",
          "module": "HLearn.Models.Classifiers.NearestNeighbor",
          "name": "neighborList",
          "normalized": "a-\u003eNaiveNN b c a-\u003e[(c,a)]",
          "package": "HLearn-classification",
          "partial": "List",
          "signature": "dp-\u003eNaiveNN container label dp-\u003e[(label,dp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-NearestNeighbor.html#v:neighborList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Perceptron.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Perceptron",
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "partial": "Perceptron",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Perceptron",
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "partial": "Perceptron",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#t:Perceptron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "signature": "Perceptron",
          "source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Perceptron",
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "Perceptron",
          "package": "HLearn-classification",
          "partial": "Perceptron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#v:Perceptron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "centroids",
          "package": "HLearn-classification",
          "signature": "Map label (Centroid dp)",
          "source": "src/HLearn-Models-Classifiers-Perceptron.html#Perceptron",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Classifiers Perceptron",
          "module": "HLearn.Models.Classifiers.Perceptron",
          "name": "centroids",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers-Perceptron.html#v:centroids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file exports the most commonly used modules within HLearn-classifiers.  Most likely this is the only file you will have to import.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HLearn.Models.Classifiers",
          "name": "Classifiers",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Classifiers.html",
          "type": "module"
        },
        "index": {
          "description": "This file exports the most commonly used modules within HLearn-classifiers Most likely this is the only file you will have to import",
          "hierarchy": "HLearn Models Classifiers",
          "module": "HLearn.Models.Classifiers",
          "name": "Classifiers",
          "package": "HLearn-classification",
          "partial": "Classifiers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Classifiers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Regression-PowerLaw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "partial": "Power Law",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "Coord",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "Coord",
          "package": "HLearn-classification",
          "partial": "Coord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#t:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "data"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "partial": "Power Law",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#t:PowerLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "Coord",
          "package": "HLearn-classification",
          "signature": "Coord",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "Coord",
          "package": "HLearn-classification",
          "partial": "Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "signature": "PowerLaw",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "PowerLaw",
          "package": "HLearn-classification",
          "partial": "Power Law",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:PowerLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "dataset1",
          "package": "HLearn-classification",
          "signature": "[Coord Double]",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#dataset1",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "dataset1",
          "normalized": "[Coord Double]",
          "package": "HLearn-classification",
          "signature": "[Coord Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:dataset1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "dataset2",
          "package": "HLearn-classification",
          "signature": "[Coord Double]",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#dataset2",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "dataset2",
          "normalized": "[Coord Double]",
          "package": "HLearn-classification",
          "signature": "[Coord Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:dataset2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnx",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnx",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnx2",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnx2",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnx2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnxlny",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lnxlny",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lnxlny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lny",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "lny",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:lny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "model1",
          "package": "HLearn-classification",
          "signature": "PowerLaw Double",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#model1",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "model1",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:model1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "model2",
          "package": "HLearn-classification",
          "signature": "PowerLaw Double",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#model2",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "model2",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:model2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "n",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#PowerLaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "n",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "result1",
          "package": "HLearn-classification",
          "signature": "Double",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#result1",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "result1",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:result1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "result2",
          "package": "HLearn-classification",
          "signature": "Double",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#result2",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "result2",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:result2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "x",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "x",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "y",
          "package": "HLearn-classification",
          "signature": "ring",
          "source": "src/HLearn-Models-Regression-PowerLaw.html#Coord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HLearn Models Regression PowerLaw",
          "module": "HLearn.Models.Regression.PowerLaw",
          "name": "y",
          "package": "HLearn-classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLearn-classification/docs/HLearn-Models-Regression-PowerLaw.html#v:y"
      }
    }
  ]
]