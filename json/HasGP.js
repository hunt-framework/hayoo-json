[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClassificationEP is a module in the HasGP Gaussian Process\n   library. It implements basic Gaussian Process Classification for two \n   classes using the EP approximation. Targets should be +1/-1. \n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html",
        "fct-type": "module",
        "title": "ClassificationEP"
      },
      "index": {
        "description": "ClassificationEP is module in the HasGP Gaussian Process library It implements basic Gaussian Process Classification for two classes using the EP approximation Targets should be Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "ClassificationEP",
        "normalized": "",
        "package": "HasGP",
        "partial": "Classification EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#t:EPConvergenceTest",
      "description": {
        "fct-descr": "\u003cp\u003eBy passing a function with this type we can specify arbitrary \n   convergence tests.   \n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#EPConvergenceTest",
        "fct-type": "type",
        "title": "EPConvergenceTest"
      },
      "index": {
        "description": "By passing function with this type we can specify arbitrary convergence tests",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "EPConvergenceTest",
        "normalized": "",
        "package": "HasGP",
        "partial": "EPConvergence Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#t:EPSiteState",
      "description": {
        "fct-descr": "\u003cp\u003eWhen updating a single site at a time you keep track of var, \n   tauTilde, mu, nuTilde, TauMinus, and MuMinus.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#EPSiteState",
        "fct-type": "data",
        "title": "EPSiteState"
      },
      "index": {
        "description": "When updating single site at time you keep track of var tauTilde mu nuTilde TauMinus and MuMinus",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "EPSiteState",
        "normalized": "",
        "package": "HasGP",
        "partial": "EPSite State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#t:EPState",
      "description": {
        "fct-descr": "\u003cp\u003eWe hide the state used in performing EP using the state monad. \n   We need to include a random number generator and the number of \n   iterations.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#EPState",
        "fct-type": "type",
        "title": "EPState"
      },
      "index": {
        "description": "We hide the state used in performing EP using the state monad We need to include random number generator and the number of iterations",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "EPState",
        "normalized": "",
        "package": "HasGP",
        "partial": "EPState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#t:EPValue",
      "description": {
        "fct-descr": "\u003cp\u003eA convergence test for EP usually depends on the evidence and \n   the number of iterations so far. This allows us to specify \n   completely arbitrary convergence tests.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#EPValue",
        "fct-type": "data",
        "title": "EPValue"
      },
      "index": {
        "description": "convergence test for EP usually depends on the evidence and the number of iterations so far This allows us to specify completely arbitrary convergence tests",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "EPValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "EPValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#t:SiteOrder",
      "description": {
        "fct-descr": "\u003cp\u003eIf we're updating sites in a random order then we need access to \n   the random number generator. \n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#SiteOrder",
        "fct-type": "type",
        "title": "SiteOrder"
      },
      "index": {
        "description": "If we re updating sites in random order then we need access to the random number generator",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "SiteOrder",
        "normalized": "",
        "package": "HasGP",
        "partial": "Site Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:generateFixedSiteOrder",
      "description": {
        "fct-descr": "\u003cp\u003eFor completeness: just in case you want to update sites in a \n   non-random manner, this state transformer does exactly that.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "SiteOrder",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#generateFixedSiteOrder",
        "fct-type": "function",
        "title": "generateFixedSiteOrder"
      },
      "index": {
        "description": "For completeness just in case you want to update sites in non-random manner this state transformer does exactly that",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "generateFixedSiteOrder",
        "normalized": "",
        "package": "HasGP",
        "partial": "Fixed Site Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:generateRandomSiteOrder",
      "description": {
        "fct-descr": "\u003cp\u003eWe're often going to want to update sites in a random order. \n   So we need a state transformer that takes the current state (which \n   includes a random number generator) and produces a random permutation.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "SiteOrder",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#generateRandomSiteOrder",
        "fct-type": "function",
        "title": "generateRandomSiteOrder"
      },
      "index": {
        "description": "We re often going to want to update sites in random order So we need state transformer that takes the current state which includes random number generator and produces random permutation",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "generateRandomSiteOrder",
        "normalized": "",
        "package": "HasGP",
        "partial": "Random Site Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the approximation to the log marginal likelihood.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "CovarianceMatrix-\u003e Targets-\u003e DMatrix-\u003e EPSiteState-\u003e Double",
        "fct-type": "function",
        "title": "gpClassifierEPEvidence"
      },
      "index": {
        "description": "Compute the approximation to the log marginal likelihood",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPEvidence",
        "normalized": "CovarianceMatrix-\u003eTargets-\u003eDMatrix-\u003eEPSiteState-\u003eDouble",
        "package": "HasGP",
        "partial": "Classifier EPEvidence",
        "signature": "CovarianceMatrix-\u003eTargets-\u003eDMatrix-\u003eEPSiteState-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPLearn",
      "description": {
        "fct-descr": "\u003cp\u003eThe learning algorithm. Takes an arbitrary function for convergence \n   testing.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "CovarianceMatrix -\u003e Targets -\u003e SiteOrder -\u003e EPConvergenceTest -\u003e (EPValue, EPState)",
        "fct-source": "src/HasGP-Classification-EP-ClassificationEP.html#gpClassifierEPLearn",
        "fct-type": "function",
        "title": "gpClassifierEPLearn"
      },
      "index": {
        "description": "The learning algorithm Takes an arbitrary function for convergence testing",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPLearn",
        "normalized": "CovarianceMatrix-\u003eTargets-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e(EPValue,EPState)",
        "package": "HasGP",
        "partial": "Classifier EPLearn",
        "signature": "CovarianceMatrix-\u003eTargets-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e(EPValue,EPState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPLogEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the log evidence and its first derivative for the EP approximation \n   for GP classification. Targets should be +1/-1. Outputs the -log \n   marginal likelihood and a vector of its derivatives.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "c-\u003e Inputs-\u003e Targets-\u003e SiteOrder-\u003e EPConvergenceTest-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpClassifierEPLogEvidence"
      },
      "index": {
        "description": "Compute the log evidence and its first derivative for the EP approximation for GP classification Targets should be Outputs the log marginal likelihood and vector of its derivatives",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPLogEvidence",
        "normalized": "a-\u003eInputs-\u003eTargets-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "Classifier EPLog Evidence",
        "signature": "c-\u003eInputs-\u003eTargets-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPLogEvidenceList",
      "description": {
        "fct-descr": "\u003cp\u003eEssentially the same as gpClassifierEPLogEvidence, but makes a \n   covariance function using the hyperparameters supplied in a list \n   and passes it on. \n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e Targets-\u003e c-\u003e SiteOrder-\u003e EPConvergenceTest-\u003e [Double]-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpClassifierEPLogEvidenceList"
      },
      "index": {
        "description": "Essentially the same as gpClassifierEPLogEvidence but makes covariance function using the hyperparameters supplied in list and passes it on",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPLogEvidenceList",
        "normalized": "Inputs-\u003eTargets-\u003ea-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e[Double]-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "Classifier EPLog Evidence List",
        "signature": "Inputs-\u003eTargets-\u003ec-\u003eSiteOrder-\u003eEPConvergenceTest-\u003e[Double]-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPLogEvidenceVec",
      "description": {
        "fct-descr": "\u003cp\u003eEssentially the same as gpClassifierEPLogEvidence, but makes a \n   covariance function using the hyperparameters supplied in a vector \n   and passes it on. \n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e Targets-\u003e c-\u003e SiteOrder-\u003e EPConvergenceTest-\u003e DVector-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpClassifierEPLogEvidenceVec"
      },
      "index": {
        "description": "Essentially the same as gpClassifierEPLogEvidence but makes covariance function using the hyperparameters supplied in vector and passes it on",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPLogEvidenceVec",
        "normalized": "Inputs-\u003eTargets-\u003ea-\u003eSiteOrder-\u003eEPConvergenceTest-\u003eDVector-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "Classifier EPLog Evidence Vec",
        "signature": "Inputs-\u003eTargets-\u003ec-\u003eSiteOrder-\u003eEPConvergenceTest-\u003eDVector-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-EP-ClassificationEP.html#v:gpClassifierEPPredict",
      "description": {
        "fct-descr": "\u003cp\u003ePrediction with GP classifiers based on EP learning.\n   Takes a matrix in which each row is an example to be \n   classified.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.EP.ClassificationEP",
        "fct-package": "HasGP",
        "fct-signature": "EPSiteState-\u003e Inputs-\u003e Targets-\u003e CovarianceMatrix-\u003e c-\u003e Inputs-\u003e DVector",
        "fct-type": "function",
        "title": "gpClassifierEPPredict"
      },
      "index": {
        "description": "Prediction with GP classifiers based on EP learning Takes matrix in which each row is an example to be classified",
        "hierarchy": "HasGP Classification EP ClassificationEP",
        "module": "HasGP.Classification.EP.ClassificationEP",
        "name": "gpClassifierEPPredict",
        "normalized": "EPSiteState-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ea-\u003eInputs-\u003eDVector",
        "package": "HasGP",
        "partial": "Classifier EPPredict",
        "signature": "EPSiteState-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ec-\u003eInputs-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClassificationLaplace is a module in the HasGP Gaussian Process\n   library. It implements basic Gaussian Process Classification for two \n   classes using the Laplace approximation. For details see \n   www.gaussianprocesses.org.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html",
        "fct-type": "module",
        "title": "ClassificationLaplace"
      },
      "index": {
        "description": "ClassificationLaplace is module in the HasGP Gaussian Process library It implements basic Gaussian Process Classification for two classes using the Laplace approximation For details see www.gaussianprocesses.org Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "ClassificationLaplace",
        "normalized": "",
        "package": "HasGP",
        "partial": "Classification Laplace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#t:LaplaceConvergenceTest",
      "description": {
        "fct-descr": "\u003cp\u003eA convergence test is a function that takes two consecutive values \n   during iteration and works out whether you've converged or not.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceConvergenceTest",
        "fct-type": "type",
        "title": "LaplaceConvergenceTest"
      },
      "index": {
        "description": "convergence test is function that takes two consecutive values during iteration and works out whether you ve converged or not",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "LaplaceConvergenceTest",
        "normalized": "",
        "package": "HasGP",
        "partial": "Laplace Convergence Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#t:LaplaceValue",
      "description": {
        "fct-descr": "\u003cp\u003eComputing the Laplace approximation requires us to deal with \n   quite a lot of information. To keep things straightforward we \n   wrap this up in a type.\n\u003c/p\u003e\u003cp\u003eThe value associated with a state includes f, evidence, objective, \n   derivative of the objective, the vector a needed to compute the \n   derivative of the evidence, and the number of iterations.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "data",
        "title": "LaplaceValue"
      },
      "index": {
        "description": "Computing the Laplace approximation requires us to deal with quite lot of information To keep things straightforward we wrap this up in type The value associated with state includes evidence objective derivative of the objective the vector needed to compute the derivative of the evidence and the number of iterations",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "LaplaceValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Laplace Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:LaplaceValue",
      "description": {
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "LaplaceValue",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "LaplaceValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "LaplaceValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Laplace Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:aValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "DVector",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "aValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "aValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:convertToP_CG",
      "description": {
        "fct-descr": "\u003cp\u003eConverts pairs of fStar and V produced by the prediction functions \n   to actual probabilities, assuming the cumulative Gaussian likelihood \n   was used.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "(Double, Double) -\u003e Double",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#convertToP_CG",
        "fct-type": "function",
        "title": "convertToP_CG"
      },
      "index": {
        "description": "Converts pairs of fStar and produced by the prediction functions to actual probabilities assuming the cumulative Gaussian likelihood was used",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "convertToP_CG",
        "normalized": "(Double,Double)-\u003eDouble",
        "package": "HasGP",
        "partial": "To CG",
        "signature": "(Double,Double)-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:count",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Int",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "count",
        "normalized": "",
        "package": "HasGP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:dPsiValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "DVector",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "dPsiValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "dPsiValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Psi Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:eValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Double",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "eValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "eValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:fValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "DVector",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "fValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "fValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplaceLearn",
      "description": {
        "fct-descr": "\u003cp\u003eIteration to convergence is much nicer if the state is hidden using \n   the State monad.\n\u003c/p\u003e\u003cp\u003eThis uses a general function from HasGP.Support.Iterate to implement \n   the learning algorithm. Convergence testing is done using a user \n   supplied function.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "CovarianceMatrix-\u003e Targets-\u003e l-\u003e LaplaceConvergenceTest-\u003e LaplaceValue",
        "fct-type": "function",
        "title": "gpCLaplaceLearn"
      },
      "index": {
        "description": "Iteration to convergence is much nicer if the state is hidden using the State monad This uses general function from HasGP.Support.Iterate to implement the learning algorithm Convergence testing is done using user supplied function",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplaceLearn",
        "normalized": "CovarianceMatrix-\u003eTargets-\u003ea-\u003eLaplaceConvergenceTest-\u003eLaplaceValue",
        "package": "HasGP",
        "partial": "CLaplace Learn",
        "signature": "CovarianceMatrix-\u003eTargets-\u003el-\u003eLaplaceConvergenceTest-\u003eLaplaceValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplaceLogEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the log marginal likelihood and its first derivative for the \n   Laplace approximation for GP classification.\n\u003c/p\u003e\u003cp\u003eThe convergence test input tests for convergence when \n   using gpClassificationLaplaceLearn. Note that a covariance function \n   contains its own parameters and can compute its own derivative so \n   theta does not need to be passed seperately.\n\u003c/p\u003e\u003cp\u003eOutputs the NEGATIVE log marginal likelihood and a vector of its \n   derivatives. The derivatives are with respect to the actual, NOT log \n   parameters.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e Targets-\u003e cF-\u003e l-\u003e LaplaceConvergenceTest-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpCLaplaceLogEvidence"
      },
      "index": {
        "description": "Compute the log marginal likelihood and its first derivative for the Laplace approximation for GP classification The convergence test input tests for convergence when using gpClassificationLaplaceLearn Note that covariance function contains its own parameters and can compute its own derivative so theta does not need to be passed seperately Outputs the NEGATIVE log marginal likelihood and vector of its derivatives The derivatives are with respect to the actual NOT log parameters",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplaceLogEvidence",
        "normalized": "Inputs-\u003eTargets-\u003ea-\u003eb-\u003eLaplaceConvergenceTest-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "CLaplace Log Evidence",
        "signature": "Inputs-\u003eTargets-\u003ecF-\u003el-\u003eLaplaceConvergenceTest-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplaceLogEvidenceList",
      "description": {
        "fct-descr": "\u003cp\u003eA version of gpClassificationLaplaceEvidence that's usable by the\n   conjugate gradient function included in the hmatrix library. Computes \n   the log evidence and its first derivative for the Laplace approximation \n   for GP classification. The issue is that while it makes sense for a \n   covariance function to be implemented as a class so that any can easily \n   be used, we need to supply evidence and its derivatives directly as \n   functions of the hyperparameters, and these have to be supplied as \n   vectors of Doubles. The solution is to include a function in the \n   CovarianceFunction class that takes a list and returns a new covariance \n   function of the required type having the specified hyperparameters.\n\u003c/p\u003e\u003cp\u003eParameters: The same parameters as gpClassifierLaplaceEvidence, plus \n   the list of hyperparameters. Outputs: negative log marginal likelihood \n   and a vector of its first derivatives. \n\u003c/p\u003e\u003cp\u003eIn addition to the above, this assumes that we want derivatives with \n   respect to log parameters and so converts using df/d log p = \n   p df/dp.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e Targets-\u003e cF-\u003e l-\u003e LaplaceConvergenceTest-\u003e [Double]-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpCLaplaceLogEvidenceList"
      },
      "index": {
        "description": "version of gpClassificationLaplaceEvidence that usable by the conjugate gradient function included in the hmatrix library Computes the log evidence and its first derivative for the Laplace approximation for GP classification The issue is that while it makes sense for covariance function to be implemented as class so that any can easily be used we need to supply evidence and its derivatives directly as functions of the hyperparameters and these have to be supplied as vectors of Doubles The solution is to include function in the CovarianceFunction class that takes list and returns new covariance function of the required type having the specified hyperparameters Parameters The same parameters as gpClassifierLaplaceEvidence plus the list of hyperparameters Outputs negative log marginal likelihood and vector of its first derivatives In addition to the above this assumes that we want derivatives with respect to log parameters and so converts using df log df dp",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplaceLogEvidenceList",
        "normalized": "Inputs-\u003eTargets-\u003ea-\u003eb-\u003eLaplaceConvergenceTest-\u003e[Double]-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "CLaplace Log Evidence List",
        "signature": "Inputs-\u003eTargets-\u003ecF-\u003el-\u003eLaplaceConvergenceTest-\u003e[Double]-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplaceLogEvidenceVec",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the same as gpCLaplaceLogEvidenceList but takes a vector \n   instead of a list.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Inputs -\u003e Targets -\u003e cF -\u003e l -\u003e LaplaceConvergenceTest -\u003e DVector -\u003e (Double, DVector)",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#gpCLaplaceLogEvidenceVec",
        "fct-type": "function",
        "title": "gpCLaplaceLogEvidenceVec"
      },
      "index": {
        "description": "This is the same as gpCLaplaceLogEvidenceList but takes vector instead of list",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplaceLogEvidenceVec",
        "normalized": "Inputs-\u003eTargets-\u003ea-\u003eb-\u003eLaplaceConvergenceTest-\u003eDVector-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "CLaplace Log Evidence Vec",
        "signature": "Inputs-\u003eTargets-\u003ecF-\u003el-\u003eLaplaceConvergenceTest-\u003eDVector-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplacePredict",
      "description": {
        "fct-descr": "\u003cp\u003ePredict using a GP classifier based on the Laplace approximation.\n\u003c/p\u003e\u003cp\u003eProduces fStar and V rather than the actual probability as \n   further approximations are then required to compute this.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "DVector-\u003e Inputs-\u003e Targets-\u003e CovarianceMatrix-\u003e cF-\u003e l-\u003e Input-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "gpCLaplacePredict"
      },
      "index": {
        "description": "Predict using GP classifier based on the Laplace approximation Produces fStar and rather than the actual probability as further approximations are then required to compute this",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplacePredict",
        "normalized": "DVector-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ea-\u003eb-\u003eInput-\u003e(Double,Double)",
        "package": "HasGP",
        "partial": "CLaplace Predict",
        "signature": "DVector-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ecF-\u003el-\u003eInput-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:gpCLaplacePredict-39-",
      "description": {
        "fct-descr": "\u003cp\u003ePredict using a GP classifier based on the Laplace approximation.\n\u003c/p\u003e\u003cp\u003eThe same as gpLaplacePredict but applies to a collection of new \n   inputs supplied as the rows of a matrix.\n\u003c/p\u003e\u003cp\u003eProduces a list of pairs of fStar and V rather than the actual \n   probabilities as further approximations are then required to compute \n   these.\n\u003c/p\u003e",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "DVector-\u003e Inputs-\u003e Targets-\u003e CovarianceMatrix-\u003e cF-\u003e l-\u003e Inputs-\u003e [(Double, Double)]",
        "fct-type": "function",
        "title": "gpCLaplacePredict'"
      },
      "index": {
        "description": "Predict using GP classifier based on the Laplace approximation The same as gpLaplacePredict but applies to collection of new inputs supplied as the rows of matrix Produces list of pairs of fStar and rather than the actual probabilities as further approximations are then required to compute these",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "gpCLaplacePredict'",
        "normalized": "DVector-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ea-\u003eb-\u003eInputs-\u003e[(Double,Double)]",
        "package": "HasGP",
        "partial": "CLaplace Predict'",
        "signature": "DVector-\u003eInputs-\u003eTargets-\u003eCovarianceMatrix-\u003ecF-\u003el-\u003eInputs-\u003e[(Double,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Classification-Laplace-ClassificationLaplace.html#v:psiValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "fct-package": "HasGP",
        "fct-signature": "Double",
        "fct-source": "src/HasGP-Classification-Laplace-ClassificationLaplace.html#LaplaceValue",
        "fct-type": "function",
        "title": "psiValue"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Classification Laplace ClassificationLaplace",
        "module": "HasGP.Classification.Laplace.ClassificationLaplace",
        "name": "psiValue",
        "normalized": "",
        "package": "HasGP",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGaussian Process Library. This module contains assorted functions that \n   support the computation of covariance, constructing covariance matrices \n   etc.\n\u003c/p\u003e\u003cp\u003eCovariance functions store log parameters. Functions are needed to return \n   the covariance and its derivative. Derivatives are with respect to the \n   actual parameters, NOT their logs.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Covariance-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "Gaussian Process Library This module contains assorted functions that support the computation of covariance constructing covariance matrices etc Covariance functions store log parameters Functions are needed to return the covariance and its derivative Derivatives are with respect to the actual parameters NOT their logs Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "HasGP",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#t:CovarianceFunction",
      "description": {
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "class",
        "fct-source": "src/HasGP-Covariance-Basic.html#CovarianceFunction",
        "fct-type": "class",
        "title": "CovarianceFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "CovarianceFunction",
        "normalized": "",
        "package": "HasGP",
        "partial": "Covariance Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:covariance",
      "description": {
        "fct-descr": "\u003cp\u003eDerivative of covariance with respect to parameters \n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e DVector -\u003e DVector -\u003e Double",
        "fct-source": "src/HasGP-Covariance-Basic.html#covariance",
        "fct-type": "method",
        "title": "covariance"
      },
      "index": {
        "description": "Derivative of covariance with respect to parameters",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "covariance",
        "normalized": "a-\u003eDVector-\u003eDVector-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "a-\u003eDVector-\u003eDVector-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:covarianceMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a matrix of covariances from a covariance and a design matrix. \n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "c -\u003e Inputs -\u003e CovarianceMatrix",
        "fct-source": "src/HasGP-Covariance-Basic.html#covarianceMatrix",
        "fct-type": "function",
        "title": "covarianceMatrix"
      },
      "index": {
        "description": "Construct matrix of covariances from covariance and design matrix",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "covarianceMatrix",
        "normalized": "a-\u003eInputs-\u003eCovarianceMatrix",
        "package": "HasGP",
        "partial": "Matrix",
        "signature": "c-\u003eInputs-\u003eCovarianceMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:covarianceWithPoint",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the column vector required when a new input is included. \n   Constructed as a matrix to avoid further work elsewhere. \n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "c -\u003e Inputs -\u003e Input -\u003e DVector",
        "fct-source": "src/HasGP-Covariance-Basic.html#covarianceWithPoint",
        "fct-type": "function",
        "title": "covarianceWithPoint"
      },
      "index": {
        "description": "Constructs the column vector required when new input is included Constructed as matrix to avoid further work elsewhere",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "covarianceWithPoint",
        "normalized": "a-\u003eInputs-\u003eInput-\u003eDVector",
        "package": "HasGP",
        "partial": "With Point",
        "signature": "c-\u003eInputs-\u003eInput-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:covarianceWithPoints",
      "description": {
        "fct-descr": "\u003cp\u003ecovarianceWithPoint applied to a list of points to produce \n   a list of vectors.\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "c -\u003e Inputs -\u003e [Input] -\u003e [DVector]",
        "fct-source": "src/HasGP-Covariance-Basic.html#covarianceWithPoints",
        "fct-type": "function",
        "title": "covarianceWithPoints"
      },
      "index": {
        "description": "covarianceWithPoint applied to list of points to produce list of vectors",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "covarianceWithPoints",
        "normalized": "a-\u003eInputs-\u003e[Input]-\u003e[DVector]",
        "package": "HasGP",
        "partial": "With Points",
        "signature": "c-\u003eInputs-\u003e[Input]-\u003e[DVector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:dCovarianceDParameters",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct using log parameters.\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e DVector -\u003e DVector -\u003e DVector",
        "fct-source": "src/HasGP-Covariance-Basic.html#dCovarianceDParameters",
        "fct-type": "method",
        "title": "dCovarianceDParameters"
      },
      "index": {
        "description": "Construct using log parameters",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "dCovarianceDParameters",
        "normalized": "a-\u003eDVector-\u003eDVector-\u003eDVector",
        "package": "HasGP",
        "partial": "Covariance DParameters",
        "signature": "a-\u003eDVector-\u003eDVector-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:makeCovarianceFromList",
      "description": {
        "fct-descr": "\u003cp\u003eGet log parameters.\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e [Double] -\u003e a",
        "fct-source": "src/HasGP-Covariance-Basic.html#makeCovarianceFromList",
        "fct-type": "method",
        "title": "makeCovarianceFromList"
      },
      "index": {
        "description": "Get log parameters",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "makeCovarianceFromList",
        "normalized": "a-\u003e[Double]-\u003ea",
        "package": "HasGP",
        "partial": "Covariance From List",
        "signature": "a-\u003e[Double]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:makeListFromCovariance",
      "description": {
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e [Double]",
        "fct-source": "src/HasGP-Covariance-Basic.html#makeListFromCovariance",
        "fct-type": "method",
        "title": "makeListFromCovariance"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "makeListFromCovariance",
        "normalized": "a-\u003e[Double]",
        "package": "HasGP",
        "partial": "List From Covariance",
        "signature": "a-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-Basic.html#v:trueHyper",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual hyperparameter values.\n\u003c/p\u003e\u003cp\u003eThe covariance\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.Basic",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e DVector",
        "fct-source": "src/HasGP-Covariance-Basic.html#trueHyper",
        "fct-type": "method",
        "title": "trueHyper"
      },
      "index": {
        "description": "The actual hyperparameter values The covariance",
        "hierarchy": "HasGP Covariance Basic",
        "module": "HasGP.Covariance.Basic",
        "name": "trueHyper",
        "normalized": "a-\u003eDVector",
        "package": "HasGP",
        "partial": "Hyper",
        "signature": "a-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGaussian Process Library. This module contains the definition \n     of the standard squared exponential covariance function.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2008-11 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Covariance.SquaredExp",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Covariance-SquaredExp.html",
        "fct-type": "module",
        "title": "SquaredExp"
      },
      "index": {
        "description": "Gaussian Process Library This module contains the definition of the standard squared exponential covariance function Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Covariance SquaredExp",
        "module": "HasGP.Covariance.SquaredExp",
        "name": "SquaredExp",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExp.html#t:SquaredExponential",
      "description": {
        "fct-module": "HasGP.Covariance.SquaredExp",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Covariance-SquaredExp.html#SquaredExponential",
        "fct-type": "data",
        "title": "SquaredExponential"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExp",
        "module": "HasGP.Covariance.SquaredExp",
        "name": "SquaredExponential",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exponential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExp.html#v:SquaredExponential",
      "description": {
        "fct-module": "HasGP.Covariance.SquaredExp",
        "fct-package": "HasGP",
        "fct-signature": "SquaredExponential",
        "fct-source": "src/HasGP-Covariance-SquaredExp.html#SquaredExponential",
        "fct-type": "function",
        "title": "SquaredExponential"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExp",
        "module": "HasGP.Covariance.SquaredExp",
        "name": "SquaredExponential",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exponential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExp.html#v:f",
      "description": {
        "fct-descr": "\u003cp\u003elog sigma_f^2\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.SquaredExp",
        "fct-package": "HasGP",
        "fct-signature": "Double",
        "fct-source": "src/HasGP-Covariance-SquaredExp.html#SquaredExponential",
        "fct-type": "function",
        "title": "f"
      },
      "index": {
        "description": "log sigma",
        "hierarchy": "HasGP Covariance SquaredExp",
        "module": "HasGP.Covariance.SquaredExp",
        "name": "f",
        "normalized": "",
        "package": "HasGP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExp.html#v:l",
      "description": {
        "fct-descr": "\u003cp\u003elog l\n\u003c/p\u003e",
        "fct-module": "HasGP.Covariance.SquaredExp",
        "fct-package": "HasGP",
        "fct-signature": "Double",
        "fct-source": "src/HasGP-Covariance-SquaredExp.html#SquaredExponential",
        "fct-type": "function",
        "title": "l"
      },
      "index": {
        "description": "log",
        "hierarchy": "HasGP Covariance SquaredExp",
        "module": "HasGP.Covariance.SquaredExp",
        "name": "l",
        "normalized": "",
        "package": "HasGP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExpARD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGaussian Process Library. This module contains the definition \n   of the standard squared exponential covariance function, extended \n   for use with Automatic Relevance Determination.\n\u003c/p\u003e\u003cp\u003es_f^2 exp (-1/2 (x_1 - x_2)^T M (x_1 - x_2)) \n\u003c/p\u003e\u003cp\u003eParameters: s_f^2 and vector containing the diagonal of M. \n   M is diag (1/l_1^2,...,1/l_?^2)\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Covariance.SquaredExpARD",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Covariance-SquaredExpARD.html",
        "fct-type": "module",
        "title": "SquaredExpARD"
      },
      "index": {
        "description": "Gaussian Process Library This module contains the definition of the standard squared exponential covariance function extended for use with Automatic Relevance Determination exp Parameters and vector containing the diagonal of is diag Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Covariance SquaredExpARD",
        "module": "HasGP.Covariance.SquaredExpARD",
        "name": "SquaredExpARD",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exp ARD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExpARD.html#t:SquaredExponentialARD",
      "description": {
        "fct-module": "HasGP.Covariance.SquaredExpARD",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Covariance-SquaredExpARD.html#SquaredExponentialARD",
        "fct-type": "data",
        "title": "SquaredExponentialARD"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExpARD",
        "module": "HasGP.Covariance.SquaredExpARD",
        "name": "SquaredExponentialARD",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exponential ARD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExpARD.html#v:SquaredExponentialARD",
      "description": {
        "fct-module": "HasGP.Covariance.SquaredExpARD",
        "fct-package": "HasGP",
        "fct-signature": "SquaredExponentialARD",
        "fct-source": "src/HasGP-Covariance-SquaredExpARD.html#SquaredExponentialARD",
        "fct-type": "function",
        "title": "SquaredExponentialARD"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExpARD",
        "module": "HasGP.Covariance.SquaredExpARD",
        "name": "SquaredExponentialARD",
        "normalized": "",
        "package": "HasGP",
        "partial": "Squared Exponential ARD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExpARD.html#v:fARD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Covariance.SquaredExpARD",
        "fct-package": "HasGP",
        "fct-signature": "Double",
        "fct-source": "src/HasGP-Covariance-SquaredExpARD.html#SquaredExponentialARD",
        "fct-type": "function",
        "title": "fARD"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExpARD",
        "module": "HasGP.Covariance.SquaredExpARD",
        "name": "fARD",
        "normalized": "",
        "package": "HasGP",
        "partial": "ARD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Covariance-SquaredExpARD.html#v:m",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HasGP.Covariance.SquaredExpARD",
        "fct-package": "HasGP",
        "fct-signature": "DVector",
        "fct-source": "src/HasGP-Covariance-SquaredExpARD.html#SquaredExponentialARD",
        "fct-type": "function",
        "title": "m"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Covariance SquaredExpARD",
        "module": "HasGP.Covariance.SquaredExpARD",
        "name": "m",
        "normalized": "",
        "package": "HasGP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-BishopData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBishopData is a module in the HasGP Gaussian Process library. \n     It contains functions to generate toy data as used in \u003ca\u003eNeural \n     Networks for Pattern Recognition,\u003c/a\u003e by Chris Bishop.\n\u003c/p\u003e\u003cp\u003eThere is one difference between this data and that in the book. \n     Namely: this data is adjusted to have zero mean, making it easier \n     to use in the demonstrations.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Data.BishopData",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Data-BishopData.html",
        "fct-type": "module",
        "title": "BishopData"
      },
      "index": {
        "description": "BishopData is module in the HasGP Gaussian Process library It contains functions to generate toy data as used in Neural Networks for Pattern Recognition by Chris Bishop There is one difference between this data and that in the book Namely this data is adjusted to have zero mean making it easier to use in the demonstrations Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Data BishopData",
        "module": "HasGP.Data.BishopData",
        "name": "BishopData",
        "normalized": "",
        "package": "HasGP",
        "partial": "Bishop Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-BishopData.html#v:bishopData",
      "description": {
        "fct-module": "HasGP.Data.BishopData",
        "fct-package": "HasGP",
        "fct-signature": "(Inputs, Targets)",
        "fct-source": "src/HasGP-Data-BishopData.html#bishopData",
        "fct-type": "function",
        "title": "bishopData"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Data BishopData",
        "module": "HasGP.Data.BishopData",
        "name": "bishopData",
        "normalized": "(Inputs,Targets)",
        "package": "HasGP",
        "partial": "Data",
        "signature": "(Inputs,Targets)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-BishopData.html#v:h",
      "description": {
        "fct-module": "HasGP.Data.BishopData",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Data-BishopData.html#h",
        "fct-type": "function",
        "title": "h"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Data BishopData",
        "module": "HasGP.Data.BishopData",
        "name": "h",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNormalise is a module in the HasGP Gaussian process library. \n     It contains functions for performing basic normalisation \n     tasks on training examples, and for computing assorted \n     standard statistics.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Data-Normalise.html",
        "fct-type": "module",
        "title": "Normalise"
      },
      "index": {
        "description": "Normalise is module in the HasGP Gaussian process library It contains functions for performing basic normalisation tasks on training examples and for computing assorted standard statistics Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "Normalise",
        "normalized": "",
        "package": "HasGP",
        "partial": "Normalise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:confusionMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the numbers for the confusion matrix.\n   It is assumed that classes are +1 (positive) and -1 (negative).\n   Result is (a,b,c,d):\n   a - correct negatives\n   b - predict positive when correct is negative\n   c - predict negative when correct is positive\n   d - correct positives\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Targets -\u003e Outputs -\u003e (Double, Double, Double, Double)",
        "fct-source": "src/HasGP-Data-Normalise.html#confusionMatrix",
        "fct-type": "function",
        "title": "confusionMatrix"
      },
      "index": {
        "description": "Compute the numbers for the confusion matrix It is assumed that classes are positive and negative Result is correct negatives predict positive when correct is negative predict negative when correct is positive correct positives",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "confusionMatrix",
        "normalized": "Targets-\u003eOutputs-\u003e(Double,Double,Double,Double)",
        "package": "HasGP",
        "partial": "Matrix",
        "signature": "Targets-\u003eOutputs-\u003e(Double,Double,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:countLabels",
      "description": {
        "fct-descr": "\u003cp\u003eAssuming the labels are +1 or -1, count how many there are of each.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Targets -\u003e IO ()",
        "fct-source": "src/HasGP-Data-Normalise.html#countLabels",
        "fct-type": "function",
        "title": "countLabels"
      },
      "index": {
        "description": "Assuming the labels are or count how many there are of each",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "countLabels",
        "normalized": "Targets-\u003eIO()",
        "package": "HasGP",
        "partial": "Labels",
        "signature": "Targets-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:exampleMean",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the mean for each attribute in a set of examples. \n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e DVector",
        "fct-type": "function",
        "title": "exampleMean"
      },
      "index": {
        "description": "Compute the mean for each attribute in set of examples",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "exampleMean",
        "normalized": "Inputs-\u003eDVector",
        "package": "HasGP",
        "partial": "Mean",
        "signature": "Inputs-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:exampleMeanVariance",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the mean and variance for each attribute in a set of examples.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e (DVector, DVector)",
        "fct-type": "function",
        "title": "exampleMeanVariance"
      },
      "index": {
        "description": "Compute the mean and variance for each attribute in set of examples",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "exampleMeanVariance",
        "normalized": "Inputs-\u003e(DVector,DVector)",
        "package": "HasGP",
        "partial": "Mean Variance",
        "signature": "Inputs-\u003e(DVector,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:exampleVariance",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the variance for each attribute in a set of examples.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e DVector",
        "fct-type": "function",
        "title": "exampleVariance"
      },
      "index": {
        "description": "Compute the variance for each attribute in set of examples",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "exampleVariance",
        "normalized": "Inputs-\u003eDVector",
        "package": "HasGP",
        "partial": "Variance",
        "signature": "Inputs-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:findRedundantAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eFind the columns of a matrix in which all values are equal.      \n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e [Bool]",
        "fct-type": "function",
        "title": "findRedundantAttributes"
      },
      "index": {
        "description": "Find the columns of matrix in which all values are equal",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "findRedundantAttributes",
        "normalized": "Inputs-\u003e[Bool]",
        "package": "HasGP",
        "partial": "Redundant Attributes",
        "signature": "Inputs-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:listRedundantAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eList column numbers for redundant attributes.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e [Int]",
        "fct-type": "function",
        "title": "listRedundantAttributes"
      },
      "index": {
        "description": "List column numbers for redundant attributes",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "listRedundantAttributes",
        "normalized": "Inputs-\u003e[Int]",
        "package": "HasGP",
        "partial": "Redundant Attributes",
        "signature": "Inputs-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:normaliseBetweenLimits",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise a set of examples to have specified maximum and minimum.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Double-\u003e Double-\u003e Inputs-\u003e Inputs",
        "fct-type": "function",
        "title": "normaliseBetweenLimits"
      },
      "index": {
        "description": "Normalise set of examples to have specified maximum and minimum",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "normaliseBetweenLimits",
        "normalized": "Double-\u003eDouble-\u003eInputs-\u003eInputs",
        "package": "HasGP",
        "partial": "Between Limits",
        "signature": "Double-\u003eDouble-\u003eInputs-\u003eInputs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:normaliseMeanVariance",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise a set of examples to have specified mean and variance.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "DVector-\u003e DVector-\u003e Inputs-\u003e Inputs",
        "fct-type": "function",
        "title": "normaliseMeanVariance"
      },
      "index": {
        "description": "Normalise set of examples to have specified mean and variance",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "normaliseMeanVariance",
        "normalized": "DVector-\u003eDVector-\u003eInputs-\u003eInputs",
        "package": "HasGP",
        "partial": "Mean Variance",
        "signature": "DVector-\u003eDVector-\u003eInputs-\u003eInputs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:normaliseMeanVarianceSimple",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as normaliseMeanVariance but every column (attribute) is \n   normalised in the same way.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Double-\u003e Double-\u003e Inputs-\u003e Inputs",
        "fct-type": "function",
        "title": "normaliseMeanVarianceSimple"
      },
      "index": {
        "description": "The same as normaliseMeanVariance but every column attribute is normalised in the same way",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "normaliseMeanVarianceSimple",
        "normalized": "Double-\u003eDouble-\u003eInputs-\u003eInputs",
        "package": "HasGP",
        "partial": "Mean Variance Simple",
        "signature": "Double-\u003eDouble-\u003eInputs-\u003eInputs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:printConfusionMatrix",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the confusion matrix and some other statistics\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Targets-\u003e Outputs-\u003e IO ()",
        "fct-type": "function",
        "title": "printConfusionMatrix"
      },
      "index": {
        "description": "Print the confusion matrix and some other statistics",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "printConfusionMatrix",
        "normalized": "Targets-\u003eOutputs-\u003eIO()",
        "package": "HasGP",
        "partial": "Confusion Matrix",
        "signature": "Targets-\u003eOutputs-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:removeRedundantAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eRemove any redundant columns from a matrix.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "Inputs-\u003e Inputs",
        "fct-type": "function",
        "title": "removeRedundantAttributes"
      },
      "index": {
        "description": "Remove any redundant columns from matrix",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "removeRedundantAttributes",
        "normalized": "Inputs-\u003eInputs",
        "package": "HasGP",
        "partial": "Redundant Attributes",
        "signature": "Inputs-\u003eInputs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-Normalise.html#v:retainAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a list of columns (matrix numbered from 1).\n   Produce a matrix with ONLY those columns in the \n   order specified in the list.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.Normalise",
        "fct-package": "HasGP",
        "fct-signature": "[Int]-\u003e Inputs-\u003e Inputs",
        "fct-type": "function",
        "title": "retainAttributes"
      },
      "index": {
        "description": "Specify list of columns matrix numbered from Produce matrix with ONLY those columns in the order specified in the list",
        "hierarchy": "HasGP Data Normalise",
        "module": "HasGP.Data.Normalise",
        "name": "retainAttributes",
        "normalized": "[Int]-\u003eInputs-\u003eInputs",
        "package": "HasGP",
        "partial": "Attributes",
        "signature": "[Int]-\u003eInputs-\u003eInputs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-RWData1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGaussian Process Library - functions for producing data sets\n     From Rasmussen and Williams, \u003ca\u003eGaussian Processes for Machine Learning.\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Data.RWData1",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Data-RWData1.html",
        "fct-type": "module",
        "title": "RWData1"
      },
      "index": {
        "description": "Gaussian Process Library functions for producing data sets From Rasmussen and Williams Gaussian Processes for Machine Learning Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Data RWData1",
        "module": "HasGP.Data.RWData1",
        "name": "RWData1",
        "normalized": "",
        "package": "HasGP",
        "partial": "RWData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Data-RWData1.html#v:simpleClassificationData",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate training data for a simple classification problem as in \n   Rasmussen/Williams, page 62.\n\u003c/p\u003e",
        "fct-module": "HasGP.Data.RWData1",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e (DMatrix, DVector)",
        "fct-type": "function",
        "title": "simpleClassificationData"
      },
      "index": {
        "description": "Generate training data for simple classification problem as in Rasmussen Williams page",
        "hierarchy": "HasGP Data RWData1",
        "module": "HasGP.Data.RWData1",
        "name": "simpleClassificationData",
        "normalized": "Int-\u003e(DMatrix,DVector)",
        "package": "HasGP",
        "partial": "Classification Data",
        "signature": "Int-\u003e(DMatrix,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-ClassificationDemo1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstration of Gaussian process classification using the  \n     1-dimensional problem from Rasmussen and Williams' book.\n\u003c/p\u003e\u003cp\u003eThis demo compares the Laplace and EP approximation approaches.\n\u003c/p\u003e\u003cp\u003eFor details of the algorithms involved see www.gaussianprocesses.org.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Demos.ClassificationDemo1",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Demos-ClassificationDemo1.html",
        "fct-type": "module",
        "title": "ClassificationDemo1"
      },
      "index": {
        "description": "Demonstration of Gaussian process classification using the dimensional problem from Rasmussen and Williams book This demo compares the Laplace and EP approximation approaches For details of the algorithms involved see www.gaussianprocesses.org Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Demos ClassificationDemo1",
        "module": "HasGP.Demos.ClassificationDemo1",
        "name": "ClassificationDemo1",
        "normalized": "",
        "package": "HasGP",
        "partial": "Classification Demo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-ClassificationDemo1.html#v:stopEP",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines when iteration stops for the EP version.\n\u003c/p\u003e",
        "fct-module": "HasGP.Demos.ClassificationDemo1",
        "fct-package": "HasGP",
        "fct-signature": "EPConvergenceTest",
        "fct-source": "src/HasGP-Demos-ClassificationDemo1.html#stopEP",
        "fct-type": "function",
        "title": "stopEP"
      },
      "index": {
        "description": "This function defines when iteration stops for the EP version",
        "hierarchy": "HasGP Demos ClassificationDemo1",
        "module": "HasGP.Demos.ClassificationDemo1",
        "name": "stopEP",
        "normalized": "",
        "package": "HasGP",
        "partial": "EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-ClassificationDemo1.html#v:stopLaplace",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines when iteration stops for the Laplace version.\n\u003c/p\u003e",
        "fct-module": "HasGP.Demos.ClassificationDemo1",
        "fct-package": "HasGP",
        "fct-signature": "LaplaceConvergenceTest",
        "fct-source": "src/HasGP-Demos-ClassificationDemo1.html#stopLaplace",
        "fct-type": "function",
        "title": "stopLaplace"
      },
      "index": {
        "description": "This function defines when iteration stops for the Laplace version",
        "hierarchy": "HasGP Demos ClassificationDemo1",
        "module": "HasGP.Demos.ClassificationDemo1",
        "name": "stopLaplace",
        "normalized": "",
        "package": "HasGP",
        "partial": "Laplace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-ClassificationDemo2.html#",
      "description": {
        "fct-module": "HasGP.Demos.ClassificationDemo2",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Demos-ClassificationDemo2.html",
        "fct-type": "module",
        "title": "ClassificationDemo2"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Demos ClassificationDemo2",
        "module": "HasGP.Demos.ClassificationDemo2",
        "name": "ClassificationDemo2",
        "normalized": "",
        "package": "HasGP",
        "partial": "Classification Demo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-ClassificationDemo2.html#v:stopEP",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines when iteration stops.\n\u003c/p\u003e",
        "fct-module": "HasGP.Demos.ClassificationDemo2",
        "fct-package": "HasGP",
        "fct-signature": "EPConvergenceTest",
        "fct-source": "src/HasGP-Demos-ClassificationDemo2.html#stopEP",
        "fct-type": "function",
        "title": "stopEP"
      },
      "index": {
        "description": "This function defines when iteration stops",
        "hierarchy": "HasGP Demos ClassificationDemo2",
        "module": "HasGP.Demos.ClassificationDemo2",
        "name": "stopEP",
        "normalized": "",
        "package": "HasGP",
        "partial": "EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Demos-RegressionDemo1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstration of Gaussian process regression using the simple\n     data from \u003ca\u003eNeural Networks for Pattern Recognition,\u003c/a\u003e by Chris\n     Bishop. This version estimates the hyperparameters using the\n     optimization algorithm from HMatrix.\n\u003c/p\u003e\u003cp\u003eFor details of the algorithms involved see www.gaussianprocesses.org.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Demos.RegressionDemo1",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Demos-RegressionDemo1.html",
        "fct-type": "module",
        "title": "RegressionDemo1"
      },
      "index": {
        "description": "Demonstration of Gaussian process regression using the simple data from Neural Networks for Pattern Recognition by Chris Bishop This version estimates the hyperparameters using the optimization algorithm from HMatrix For details of the algorithms involved see www.gaussianprocesses.org Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Demos RegressionDemo1",
        "module": "HasGP.Demos.RegressionDemo1",
        "name": "RegressionDemo1",
        "normalized": "",
        "package": "HasGP",
        "partial": "Regression Demo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains the class definition \n     for log likelihoods.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Likelihood-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains the class definition for log likelihoods Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "HasGP",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#t:LogLikelihood",
      "description": {
        "fct-descr": "\u003cp\u003eThe following allows arbitrary likelihoods with or without parameters \n     to be wrapped up with their derivatives (with respect to f) and passed \n     to a function.\n\u003c/p\u003e",
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "class",
        "fct-source": "src/HasGP-Likelihood-Basic.html#LogLikelihood",
        "fct-type": "class",
        "title": "LogLikelihood"
      },
      "index": {
        "description": "The following allows arbitrary likelihoods with or without parameters to be wrapped up with their derivatives with respect to and passed to function",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "LogLikelihood",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Likelihood",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#v:dLikelihood",
      "description": {
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "b -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/HasGP-Likelihood-Basic.html#dLikelihood",
        "fct-type": "method",
        "title": "dLikelihood"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "dLikelihood",
        "normalized": "a-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "HasGP",
        "partial": "Likelihood",
        "signature": "b-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#v:ddLikelihood",
      "description": {
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "b -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/HasGP-Likelihood-Basic.html#ddLikelihood",
        "fct-type": "method",
        "title": "ddLikelihood"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "ddLikelihood",
        "normalized": "a-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "HasGP",
        "partial": "Likelihood",
        "signature": "b-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#v:dddLikelihood",
      "description": {
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "b -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/HasGP-Likelihood-Basic.html#dddLikelihood",
        "fct-type": "method",
        "title": "dddLikelihood"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "dddLikelihood",
        "normalized": "a-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "HasGP",
        "partial": "Likelihood",
        "signature": "b-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-Basic.html#v:likelihood",
      "description": {
        "fct-module": "HasGP.Likelihood.Basic",
        "fct-package": "HasGP",
        "fct-signature": "b -\u003e Double -\u003e Double -\u003e Double",
        "fct-source": "src/HasGP-Likelihood-Basic.html#likelihood",
        "fct-type": "method",
        "title": "likelihood"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood Basic",
        "module": "HasGP.Likelihood.Basic",
        "name": "likelihood",
        "normalized": "a-\u003eDouble-\u003eDouble-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "b-\u003eDouble-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogLogistic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains the definition \n     for the standard log logistic likelihood function.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Likelihood.LogLogistic",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Likelihood-LogLogistic.html",
        "fct-type": "module",
        "title": "LogLogistic"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains the definition for the standard log logistic likelihood function Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Likelihood LogLogistic",
        "module": "HasGP.Likelihood.LogLogistic",
        "name": "LogLogistic",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Logistic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogLogistic.html#t:LogLogistic",
      "description": {
        "fct-descr": "\u003cp\u003eValue and first three derivatives of log sigmoid with respect to its \n     parameter f. log p(y|f) = log sigmoid (yf) where y is +1 or -1.\n\u003c/p\u003e",
        "fct-module": "HasGP.Likelihood.LogLogistic",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Likelihood-LogLogistic.html#LogLogistic",
        "fct-type": "data",
        "title": "LogLogistic"
      },
      "index": {
        "description": "Value and first three derivatives of log sigmoid with respect to its parameter log log sigmoid yf where is or",
        "hierarchy": "HasGP Likelihood LogLogistic",
        "module": "HasGP.Likelihood.LogLogistic",
        "name": "LogLogistic",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Logistic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogLogistic.html#v:LogLogistic",
      "description": {
        "fct-module": "HasGP.Likelihood.LogLogistic",
        "fct-package": "HasGP",
        "fct-signature": "LogLogistic",
        "fct-source": "src/HasGP-Likelihood-LogLogistic.html#LogLogistic",
        "fct-type": "function",
        "title": "LogLogistic"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood LogLogistic",
        "module": "HasGP.Likelihood.LogLogistic",
        "name": "LogLogistic",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Logistic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogPhi.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains the definition \n     for the standard log Phi likelihood.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Likelihood.LogPhi",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Likelihood-LogPhi.html",
        "fct-type": "module",
        "title": "LogPhi"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains the definition for the standard log Phi likelihood Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Likelihood LogPhi",
        "module": "HasGP.Likelihood.LogPhi",
        "name": "LogPhi",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Phi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogPhi.html#t:LogPhi",
      "description": {
        "fct-descr": "\u003cp\u003eValue and first three derivatives of log Phi with respect to its\n     parameter f.  log p(y|f) = log Phi (yf) where y is +1 or -1.  \n\u003c/p\u003e",
        "fct-module": "HasGP.Likelihood.LogPhi",
        "fct-package": "HasGP",
        "fct-signature": "data",
        "fct-source": "src/HasGP-Likelihood-LogPhi.html#LogPhi",
        "fct-type": "data",
        "title": "LogPhi"
      },
      "index": {
        "description": "Value and first three derivatives of log Phi with respect to its parameter log log Phi yf where is or",
        "hierarchy": "HasGP Likelihood LogPhi",
        "module": "HasGP.Likelihood.LogPhi",
        "name": "LogPhi",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Phi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Likelihood-LogPhi.html#v:LogPhi",
      "description": {
        "fct-module": "HasGP.Likelihood.LogPhi",
        "fct-package": "HasGP",
        "fct-signature": "LogPhi",
        "fct-source": "src/HasGP-Likelihood-LogPhi.html#LogPhi",
        "fct-type": "function",
        "title": "LogPhi"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Likelihood LogPhi",
        "module": "HasGP.Likelihood.LogPhi",
        "name": "LogPhi",
        "normalized": "",
        "package": "HasGP",
        "partial": "Log Phi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Parsers-SvmLight.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser implemented using the Parsec library for reading from files in the \n     format used by SVMLight.\n\u003c/p\u003e\u003cp\u003eCurrently assumes your file is a text file in Unix format. The extra \n     characters in Windows text files confuse it.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Parsers.SvmLight",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Parsers-SvmLight.html",
        "fct-type": "module",
        "title": "SvmLight"
      },
      "index": {
        "description": "Parser implemented using the Parsec library for reading from files in the format used by SVMLight Currently assumes your file is text file in Unix format The extra characters in Windows text files confuse it Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Parsers SvmLight",
        "module": "HasGP.Parsers.SvmLight",
        "name": "SvmLight",
        "normalized": "",
        "package": "HasGP",
        "partial": "Svm Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Parsers-SvmLight.html#v:analyse",
      "description": {
        "fct-descr": "\u003cp\u003eParse a file in SvmLight format and print some information about it.   \n\u003c/p\u003e",
        "fct-module": "HasGP.Parsers.SvmLight",
        "fct-package": "HasGP",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/HasGP-Parsers-SvmLight.html#analyse",
        "fct-type": "function",
        "title": "analyse"
      },
      "index": {
        "description": "Parse file in SvmLight format and print some information about it",
        "hierarchy": "HasGP Parsers SvmLight",
        "module": "HasGP.Parsers.SvmLight",
        "name": "analyse",
        "normalized": "String-\u003eIO()",
        "package": "HasGP",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Parsers-SvmLight.html#v:getMatrixExamplesFromFileC",
      "description": {
        "fct-descr": "\u003cp\u003eRead examples from a file in SvmLight format and produce a corresponding \n   matrix and vector, for a classification problem. Includes checks \n   that all examples have the same number of attributes, and that the file \n   does in fact correspond to a classification problem.\n\u003c/p\u003e",
        "fct-module": "HasGP.Parsers.SvmLight",
        "fct-package": "HasGP",
        "fct-signature": "String -\u003e IO (Matrix Double, Vector Double)",
        "fct-source": "src/HasGP-Parsers-SvmLight.html#getMatrixExamplesFromFileC",
        "fct-type": "function",
        "title": "getMatrixExamplesFromFileC"
      },
      "index": {
        "description": "Read examples from file in SvmLight format and produce corresponding matrix and vector for classification problem Includes checks that all examples have the same number of attributes and that the file does in fact correspond to classification problem",
        "hierarchy": "HasGP Parsers SvmLight",
        "module": "HasGP.Parsers.SvmLight",
        "name": "getMatrixExamplesFromFileC",
        "normalized": "String-\u003eIO(Matrix Double,Vector Double)",
        "package": "HasGP",
        "partial": "Matrix Examples From File",
        "signature": "String-\u003eIO(Matrix Double,Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegression is a module in the HasGP Gaussian process\n   library. It implements basic Gaussian process regression.\n   For the technical details see www.gaussianprocesses.org.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Regression-Regression.html",
        "fct-type": "module",
        "title": "Regression"
      },
      "index": {
        "description": "Regression is module in the HasGP Gaussian process library It implements basic Gaussian process regression For the technical details see www.gaussianprocesses.org Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "Regression",
        "normalized": "",
        "package": "HasGP",
        "partial": "Regression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRGradLogEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient of the log marginal likelihood.\n   Output contains derivative with respect to noise variance \n   followed by the derivatives with respect to the hyperparameters \n   in the covariance function.\n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "cF-\u003e Double-\u003e DMatrix-\u003e DVector-\u003e Inputs-\u003e DVector",
        "fct-type": "function",
        "title": "gpRGradLogEvidence"
      },
      "index": {
        "description": "Compute the gradient of the log marginal likelihood Output contains derivative with respect to noise variance followed by the derivatives with respect to the hyperparameters in the covariance function",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRGradLogEvidence",
        "normalized": "a-\u003eDouble-\u003eDMatrix-\u003eDVector-\u003eInputs-\u003eDVector",
        "package": "HasGP",
        "partial": "RGrad Log Evidence",
        "signature": "cF-\u003eDouble-\u003eDMatrix-\u003eDVector-\u003eInputs-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRLogEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the log of the marginal likelihood.\n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix-\u003e DVector-\u003e Targets-\u003e Double",
        "fct-type": "function",
        "title": "gpRLogEvidence"
      },
      "index": {
        "description": "Compute the log of the marginal likelihood",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRLogEvidence",
        "normalized": "DMatrix-\u003eDVector-\u003eTargets-\u003eDouble",
        "package": "HasGP",
        "partial": "RLog Evidence",
        "signature": "DMatrix-\u003eDVector-\u003eTargets-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRLogHyperToEvidence",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the log parameters and other necessary inputs, compute \n   the NEGATIVE of the log marginal likelihood and its derivatives with \n   respect to the LOG hyperparameters.\n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "cF-\u003e Inputs-\u003e Targets-\u003e DVector-\u003e (Double, DVector)",
        "fct-type": "function",
        "title": "gpRLogHyperToEvidence"
      },
      "index": {
        "description": "Given the log parameters and other necessary inputs compute the NEGATIVE of the log marginal likelihood and its derivatives with respect to the LOG hyperparameters",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRLogHyperToEvidence",
        "normalized": "a-\u003eInputs-\u003eTargets-\u003eDVector-\u003e(Double,DVector)",
        "package": "HasGP",
        "partial": "RLog Hyper To Evidence",
        "signature": "cF-\u003eInputs-\u003eTargets-\u003eDVector-\u003e(Double,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRMain",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the main quantities required to do regression, specifically:\n    the Cholesky decomposition L of the covariance matrix, and the parameters \n    alpha such that L L^t y = alpha.\n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "cF-\u003e Double-\u003e Inputs-\u003e Targets-\u003e (DMatrix, DVector)",
        "fct-type": "function",
        "title": "gpRMain"
      },
      "index": {
        "description": "Compute the main quantities required to do regression specifically the Cholesky decomposition of the covariance matrix and the parameters alpha such that alpha",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRMain",
        "normalized": "a-\u003eDouble-\u003eInputs-\u003eTargets-\u003e(DMatrix,DVector)",
        "package": "HasGP",
        "partial": "RMain",
        "signature": "cF-\u003eDouble-\u003eInputs-\u003eTargets-\u003e(DMatrix,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRPredict",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the expected value and variance for a collection of \n   new points supplied as the rows of a matrix. Differs from \n   gpRPredict' as l and alpha need to be computed in advance.\n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "cF-\u003e DMatrix-\u003e DVector-\u003e Inputs-\u003e Targets-\u003e Inputs-\u003e (DVector, DVector)",
        "fct-type": "function",
        "title": "gpRPredict"
      },
      "index": {
        "description": "Compute the expected value and variance for collection of new points supplied as the rows of matrix Differs from gpRPredict as and alpha need to be computed in advance",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRPredict",
        "normalized": "a-\u003eDMatrix-\u003eDVector-\u003eInputs-\u003eTargets-\u003eInputs-\u003e(DVector,DVector)",
        "package": "HasGP",
        "partial": "RPredict",
        "signature": "cF-\u003eDMatrix-\u003eDVector-\u003eInputs-\u003eTargets-\u003eInputs-\u003e(DVector,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Regression-Regression.html#v:gpRPredict-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the expected value and variance for a collection of \n   new points supplied as the rows of a matrix.       \n\u003c/p\u003e",
        "fct-module": "HasGP.Regression.Regression",
        "fct-package": "HasGP",
        "fct-signature": "cF-\u003e Double-\u003e Inputs-\u003e Targets-\u003e Inputs-\u003e (DVector, DVector)",
        "fct-type": "function",
        "title": "gpRPredict'"
      },
      "index": {
        "description": "Compute the expected value and variance for collection of new points supplied as the rows of matrix",
        "hierarchy": "HasGP Regression Regression",
        "module": "HasGP.Regression.Regression",
        "name": "gpRPredict'",
        "normalized": "a-\u003eDouble-\u003eInputs-\u003eTargets-\u003eInputs-\u003e(DVector,DVector)",
        "package": "HasGP",
        "partial": "RPredict'",
        "signature": "cF-\u003eDouble-\u003eInputs-\u003eTargets-\u003eInputs-\u003e(DVector,DVector)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains assorted functions \n     that support GP calculations but are more general-purpose than \n     GP-specific.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains assorted functions that support GP calculations but are more general-purpose than GP-specific Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "HasGP",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:delta",
      "description": {
        "fct-descr": "\u003cp\u003eStandard delta function - 0/1 valued.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e a -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#delta",
        "fct-type": "function",
        "title": "delta"
      },
      "index": {
        "description": "Standard delta function valued",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "delta",
        "normalized": "a-\u003ea-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "a-\u003ea-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:deltaBool",
      "description": {
        "fct-descr": "\u003cp\u003eStandard delta function - boolean valued.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/HasGP-Support-Functions.html#deltaBool",
        "fct-type": "function",
        "title": "deltaBool"
      },
      "index": {
        "description": "Standard delta function boolean valued",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "deltaBool",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "HasGP",
        "partial": "Bool",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:generalSigmoid",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral sigmoid function with variable slope.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#generalSigmoid",
        "fct-type": "function",
        "title": "generalSigmoid"
      },
      "index": {
        "description": "General sigmoid function with variable slope",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "generalSigmoid",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "HasGP",
        "partial": "Sigmoid",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:logPhi",
      "description": {
        "fct-descr": "\u003cp\u003eDANGER! See nOverPhi - you have to compute this carefully as \n   well.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#logPhi",
        "fct-type": "function",
        "title": "logPhi"
      },
      "index": {
        "description": "DANGER See nOverPhi you have to compute this carefully as well",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "logPhi",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "Phi",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:n",
      "description": {
        "fct-descr": "\u003cp\u003eValue of Gaussian density function for mean 0 and \n   variance 1.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#n",
        "fct-type": "function",
        "title": "n"
      },
      "index": {
        "description": "Value of Gaussian density function for mean and variance",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "n",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:nOverPhi",
      "description": {
        "fct-descr": "\u003cp\u003eDANGER! You can't compute the ratio (n x) / (phiIntegral x) directly, \n   as although it has sensible values for negative x the denominator gets \n   small so fast that you quickly get Infinity turning up. GSL has the \n   inverse Mill's function/hazard function for the Gaussian distribution, \n   and the ratio is equal to hazard(-x).\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#nOverPhi",
        "fct-type": "function",
        "title": "nOverPhi"
      },
      "index": {
        "description": "DANGER You can compute the ratio phiIntegral directly as although it has sensible values for negative the denominator gets small so fast that you quickly get Infinity turning up GSL has the inverse Mill function hazard function for the Gaussian distribution and the ratio is equal to hazard",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "nOverPhi",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "Over Phi",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:phiIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral of Gaussian density of mean 0 and variance 1 \n   from -infinity to x\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#phiIntegral",
        "fct-type": "function",
        "title": "phiIntegral"
      },
      "index": {
        "description": "Integral of Gaussian density of mean and variance from infinity to",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "phiIntegral",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "Integral",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:sigmoid",
      "description": {
        "fct-descr": "\u003cp\u003eStandard sigmoid function.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#sigmoid",
        "fct-type": "function",
        "title": "sigmoid"
      },
      "index": {
        "description": "Standard sigmoid function",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "sigmoid",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:square",
      "description": {
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#square",
        "fct-type": "function",
        "title": "square"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "square",
        "normalized": "Double-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Functions.html#v:trace",
      "description": {
        "fct-module": "HasGP.Support.Functions",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e Double",
        "fct-source": "src/HasGP-Support-Functions.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Support Functions",
        "module": "HasGP.Support.Functions",
        "name": "trace",
        "normalized": "DMatrix-\u003eDouble",
        "package": "HasGP",
        "partial": "",
        "signature": "DMatrix-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Iterate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe often need to iterate some update equation until convergence is \n   detected. This module uses the State monad to provide a very general way of \n   expressing computations of this kind.\n\u003c/p\u003e\u003cp\u003eCopyright (C) Sean Holden 2011. sbh11@cl.cam.ac.uk\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.Iterate",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-Iterate.html",
        "fct-type": "module",
        "title": "Iterate"
      },
      "index": {
        "description": "We often need to iterate some update equation until convergence is detected This module uses the State monad to provide very general way of expressing computations of this kind Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support Iterate",
        "module": "HasGP.Support.Iterate",
        "name": "Iterate",
        "normalized": "",
        "package": "HasGP",
        "partial": "Iterate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Iterate.html#v:iterateOnce",
      "description": {
        "fct-descr": "\u003cp\u003eiterateOnce takes a function to update a state and another \n     to compute a value associated with a given state.\n\u003c/p\u003e\u003cp\u003eIt returns a state transformer performing the corresponding \n     update - that is, one iteration.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Iterate",
        "fct-package": "HasGP",
        "fct-signature": "(s -\u003e s) -\u003e (s -\u003e a) -\u003e State s a",
        "fct-source": "src/HasGP-Support-Iterate.html#iterateOnce",
        "fct-type": "function",
        "title": "iterateOnce"
      },
      "index": {
        "description": "iterateOnce takes function to update state and another to compute value associated with given state It returns state transformer performing the corresponding update that is one iteration",
        "hierarchy": "HasGP Support Iterate",
        "module": "HasGP.Support.Iterate",
        "name": "iterateOnce",
        "normalized": "(a-\u003ea)-\u003e(a-\u003eb)-\u003eState a b",
        "package": "HasGP",
        "partial": "Once",
        "signature": "(s-\u003es)-\u003e(s-\u003ea)-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Iterate.html#v:iterateToConvergence",
      "description": {
        "fct-descr": "\u003cp\u003eiterateToConvergence takes a state transformer typically generated \n     using iterateOnce, a convergence test that compares two values \n     associated with the current and next states returning True if \n     we've converged, and an initial value.\n\u003c/p\u003e\u003cp\u003eIt returns a state transformer that performs iteration until \n     convergence. When run from an initial state it returns the state \n     at convergence and the corresponding value.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Iterate",
        "fct-package": "HasGP",
        "fct-signature": "State s a -\u003e (a -\u003e a -\u003e Bool) -\u003e a -\u003e State s a",
        "fct-source": "src/HasGP-Support-Iterate.html#iterateToConvergence",
        "fct-type": "function",
        "title": "iterateToConvergence"
      },
      "index": {
        "description": "iterateToConvergence takes state transformer typically generated using iterateOnce convergence test that compares two values associated with the current and next states returning True if we ve converged and an initial value It returns state transformer that performs iteration until convergence When run from an initial state it returns the state at convergence and the corresponding value",
        "hierarchy": "HasGP Support Iterate",
        "module": "HasGP.Support.Iterate",
        "name": "iterateToConvergence",
        "normalized": "State a b-\u003e(b-\u003eb-\u003eBool)-\u003eb-\u003eState a b",
        "package": "HasGP",
        "partial": "To Convergence",
        "signature": "State s a-\u003e(a-\u003ea-\u003eBool)-\u003ea-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Iterate.html#v:iterateToConvergence-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as iterateToConvergence, but takes the state update and \n     state value functions directly, so the resulting state transformer \n     only requires a start state to be run.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Iterate",
        "fct-package": "HasGP",
        "fct-signature": "(s -\u003e s) -\u003e (s -\u003e a) -\u003e (a -\u003e a -\u003e Bool) -\u003e State s a",
        "fct-source": "src/HasGP-Support-Iterate.html#iterateToConvergence%27",
        "fct-type": "function",
        "title": "iterateToConvergence'"
      },
      "index": {
        "description": "The same as iterateToConvergence but takes the state update and state value functions directly so the resulting state transformer only requires start state to be run",
        "hierarchy": "HasGP Support Iterate",
        "module": "HasGP.Support.Iterate",
        "name": "iterateToConvergence'",
        "normalized": "(a-\u003ea)-\u003e(a-\u003eb)-\u003e(b-\u003eb-\u003eBool)-\u003eState a b",
        "package": "HasGP",
        "partial": "To Convergence'",
        "signature": "(s-\u003es)-\u003e(s-\u003ea)-\u003e(a-\u003ea-\u003eBool)-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Iterate.html#v:iterateToConvergence-39--39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as iterateToConvergence, but does one update to obtain an \n     initial value and continues from there. Consequently, no initial \n     value is required, but you do one extra update.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Iterate",
        "fct-package": "HasGP",
        "fct-signature": "State s a -\u003e (a -\u003e a -\u003e Bool) -\u003e State s a",
        "fct-source": "src/HasGP-Support-Iterate.html#iterateToConvergence%27%27",
        "fct-type": "function",
        "title": "iterateToConvergence''"
      },
      "index": {
        "description": "The same as iterateToConvergence but does one update to obtain an initial value and continues from there Consequently no initial value is required but you do one extra update",
        "hierarchy": "HasGP Support Iterate",
        "module": "HasGP.Support.Iterate",
        "name": "iterateToConvergence''",
        "normalized": "State a b-\u003e(b-\u003eb-\u003eBool)-\u003eState a b",
        "package": "HasGP",
        "partial": "To Convergence''",
        "signature": "State s a-\u003e(a-\u003ea-\u003eBool)-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains assorted\n     functions that support GP calculations and are specifically\n     related to linear algebra.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-Linear.html",
        "fct-type": "module",
        "title": "Linear"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains assorted functions that support GP calculations and are specifically related to linear algebra Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "Linear",
        "normalized": "",
        "package": "HasGP",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:abDiagOnly",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the diagonal only of the product of two square matrices\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e DMatrix -\u003e DVector",
        "fct-source": "src/HasGP-Support-Linear.html#abDiagOnly",
        "fct-type": "function",
        "title": "abDiagOnly"
      },
      "index": {
        "description": "Compute the diagonal only of the product of two square matrices",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "abDiagOnly",
        "normalized": "DMatrix-\u003eDMatrix-\u003eDVector",
        "package": "HasGP",
        "partial": "Diag Only",
        "signature": "DMatrix-\u003eDMatrix-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:abaDiagDiag",
      "description": {
        "fct-descr": "\u003cp\u003eCompute ABA where A is diagonal. The first argument is the diagonal of A.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e DMatrix -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-Linear.html#abaDiagDiag",
        "fct-type": "function",
        "title": "abaDiagDiag"
      },
      "index": {
        "description": "Compute ABA where is diagonal The first argument is the diagonal of",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "abaDiagDiag",
        "normalized": "DVector-\u003eDMatrix-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Diag Diag",
        "signature": "DVector-\u003eDMatrix-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:abaVV",
      "description": {
        "fct-descr": "\u003cp\u003eCompute aBa where a is a vector and B is a matrix\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e DMatrix -\u003e Double",
        "fct-source": "src/HasGP-Support-Linear.html#abaVV",
        "fct-type": "function",
        "title": "abaVV"
      },
      "index": {
        "description": "Compute aBa where is vector and is matrix",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "abaVV",
        "normalized": "DVector-\u003eDMatrix-\u003eDouble",
        "package": "HasGP",
        "partial": "VV",
        "signature": "DVector-\u003eDMatrix-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:lengthV",
      "description": {
        "fct-descr": "\u003cp\u003eLength of a vector.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "a b -\u003e RealOf b",
        "fct-source": "src/HasGP-Support-Linear.html#lengthV",
        "fct-type": "function",
        "title": "lengthV"
      },
      "index": {
        "description": "Length of vector",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "lengthV",
        "normalized": "a b-\u003eRealOf b",
        "package": "HasGP",
        "partial": "",
        "signature": "a b-\u003eRealOf b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:postMultiply",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently post multiply by a diagonal matrix (passed as a vector)\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e DVector -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-Linear.html#postMultiply",
        "fct-type": "function",
        "title": "postMultiply"
      },
      "index": {
        "description": "Efficiently post multiply by diagonal matrix passed as vector",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "postMultiply",
        "normalized": "DMatrix-\u003eDVector-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Multiply",
        "signature": "DMatrix-\u003eDVector-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:preMultiply",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently pre multiply by a diagonal matrix (passed as a vector)\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e DMatrix -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-Linear.html#preMultiply",
        "fct-type": "function",
        "title": "preMultiply"
      },
      "index": {
        "description": "Efficiently pre multiply by diagonal matrix passed as vector",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "preMultiply",
        "normalized": "DVector-\u003eDMatrix-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Multiply",
        "signature": "DVector-\u003eDMatrix-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:replaceInVector",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the element at a specified position in a vector.\n   NOTE: hmatrix numbers from 0, which is odd. This numbers from 1.\n   The result is returned by overwriting v. This is implemented \n   via runSTVector because the increase in efficiency is HUGE.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e Int -\u003e Double -\u003e DVector",
        "fct-source": "src/HasGP-Support-Linear.html#replaceInVector",
        "fct-type": "function",
        "title": "replaceInVector"
      },
      "index": {
        "description": "Replace the element at specified position in vector NOTE hmatrix numbers from which is odd This numbers from The result is returned by overwriting This is implemented via runSTVector because the increase in efficiency is HUGE",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "replaceInVector",
        "normalized": "DVector-\u003eInt-\u003eDouble-\u003eDVector",
        "package": "HasGP",
        "partial": "In Vector",
        "signature": "DVector-\u003eInt-\u003eDouble-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:sumVector",
      "description": {
        "fct-descr": "\u003cp\u003eSum the elements in a vector.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e Double",
        "fct-source": "src/HasGP-Support-Linear.html#sumVector",
        "fct-type": "function",
        "title": "sumVector"
      },
      "index": {
        "description": "Sum the elements in vector",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "sumVector",
        "normalized": "DVector-\u003eDouble",
        "package": "HasGP",
        "partial": "Vector",
        "signature": "DVector-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:sumVectorDiv",
      "description": {
        "fct-descr": "\u003cp\u003eSum of elements in a vector, divided by an Int.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "Int -\u003e DVector -\u003e Double",
        "fct-source": "src/HasGP-Support-Linear.html#sumVectorDiv",
        "fct-type": "function",
        "title": "sumVectorDiv"
      },
      "index": {
        "description": "Sum of elements in vector divided by an Int",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "sumVectorDiv",
        "normalized": "Int-\u003eDVector-\u003eDouble",
        "package": "HasGP",
        "partial": "Vector Div",
        "signature": "Int-\u003eDVector-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a vector equal to the first column of a matrix.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "Matrix Double -\u003e Vector Double",
        "fct-source": "src/HasGP-Support-Linear.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Generate vector equal to the first column of matrix",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "toVector",
        "normalized": "Matrix Double-\u003eVector Double",
        "package": "HasGP",
        "partial": "Vector",
        "signature": "Matrix Double-\u003eVector Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Linear.html#v:xAxDiag",
      "description": {
        "fct-descr": "\u003cp\u003eCompute x^T A x when A is diagonal. The second argument is the \n   diagonal of A.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Linear",
        "fct-package": "HasGP",
        "fct-signature": "DVector -\u003e DVector -\u003e Double",
        "fct-source": "src/HasGP-Support-Linear.html#xAxDiag",
        "fct-type": "function",
        "title": "xAxDiag"
      },
      "index": {
        "description": "Compute when is diagonal The second argument is the diagonal of",
        "hierarchy": "HasGP Support Linear",
        "module": "HasGP.Support.Linear",
        "name": "xAxDiag",
        "normalized": "DVector-\u003eDVector-\u003eDouble",
        "package": "HasGP",
        "partial": "Ax Diag",
        "signature": "DVector-\u003eDVector-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-MatrixFunction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains assorted\n     functions that support the construction of matrices from\n     functions.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.MatrixFunction",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-MatrixFunction.html",
        "fct-type": "module",
        "title": "MatrixFunction"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains assorted functions that support the construction of matrices from functions Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support MatrixFunction",
        "module": "HasGP.Support.MatrixFunction",
        "name": "MatrixFunction",
        "normalized": "",
        "package": "HasGP",
        "partial": "Matrix Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-MatrixFunction.html#v:makeMatricesFromPairs",
      "description": {
        "fct-descr": "\u003cp\u003eSame as makeMatrixFromPairs but the function returns a vector. In this \n case the output is a list of matrices, one for each element of the \n function value.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.MatrixFunction",
        "fct-package": "HasGP",
        "fct-signature": "(DVector -\u003e DVector -\u003e DVector) -\u003e DMatrix -\u003e [DMatrix]",
        "fct-source": "src/HasGP-Support-MatrixFunction.html#makeMatricesFromPairs",
        "fct-type": "function",
        "title": "makeMatricesFromPairs"
      },
      "index": {
        "description": "Same as makeMatrixFromPairs but the function returns vector In this case the output is list of matrices one for each element of the function value",
        "hierarchy": "HasGP Support MatrixFunction",
        "module": "HasGP.Support.MatrixFunction",
        "name": "makeMatricesFromPairs",
        "normalized": "(DVector-\u003eDVector-\u003eDVector)-\u003eDMatrix-\u003e[DMatrix]",
        "package": "HasGP",
        "partial": "Matrices From Pairs",
        "signature": "(DVector-\u003eDVector-\u003eDVector)-\u003eDMatrix-\u003e[DMatrix]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-MatrixFunction.html#v:makeMatrixFromFunction2",
      "description": {
        "fct-descr": "\u003cp\u003eTake two vectors and a function. The vectors contain inputs 1 and 2. \n   The function maps a pair of inputs to a value. Produce a matrix \n   containing the values of the function at the relevant points.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.MatrixFunction",
        "fct-package": "HasGP",
        "fct-signature": "(DVector -\u003e Double) -\u003e DVector -\u003e DVector -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-MatrixFunction.html#makeMatrixFromFunction2",
        "fct-type": "function",
        "title": "makeMatrixFromFunction2"
      },
      "index": {
        "description": "Take two vectors and function The vectors contain inputs and The function maps pair of inputs to value Produce matrix containing the values of the function at the relevant points",
        "hierarchy": "HasGP Support MatrixFunction",
        "module": "HasGP.Support.MatrixFunction",
        "name": "makeMatrixFromFunction2",
        "normalized": "(DVector-\u003eDouble)-\u003eDVector-\u003eDVector-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Matrix From Function",
        "signature": "(DVector-\u003eDouble)-\u003eDVector-\u003eDVector-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-MatrixFunction.html#v:makeMatrixFromPairs2",
      "description": {
        "fct-descr": "\u003cp\u003eTake a function and a matrix of instance vectors. Apply the function to \n   each possible pair of instance vectors and return the result as a matrix.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.MatrixFunction",
        "fct-package": "HasGP",
        "fct-signature": "(DVector -\u003e DVector -\u003e Double) -\u003e DMatrix -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-MatrixFunction.html#makeMatrixFromPairs2",
        "fct-type": "function",
        "title": "makeMatrixFromPairs2"
      },
      "index": {
        "description": "Take function and matrix of instance vectors Apply the function to each possible pair of instance vectors and return the result as matrix",
        "hierarchy": "HasGP Support MatrixFunction",
        "module": "HasGP.Support.MatrixFunction",
        "name": "makeMatrixFromPairs2",
        "normalized": "(DVector-\u003eDVector-\u003eDouble)-\u003eDMatrix-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Matrix From Pairs",
        "signature": "(DVector-\u003eDVector-\u003eDouble)-\u003eDMatrix-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGaussian Process Library. This module contains assorted functions\n     that support random number generation and the construction of basic\n     standard training sets.\n\u003c/p\u003e\u003cp\u003eNote: these are mostly calls to functions now (but not originally)\n     supplied by HMatrix. Originally different random sources were used, \n     hence the current format.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Gaussian Process Library This module contains assorted functions that support random number generation and the construction of basic standard training sets Note these are mostly calls to functions now but not originally supplied by HMatrix Originally different random sources were used hence the current format Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "Random",
        "normalized": "",
        "package": "HasGP",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#v:normalList",
      "description": {
        "fct-descr": "\u003cp\u003eProduce lists with normally distributed independent elements of\n   zero mean and specified variance.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e Double-\u003e Int-\u003e [Double]",
        "fct-type": "function",
        "title": "normalList"
      },
      "index": {
        "description": "Produce lists with normally distributed independent elements of zero mean and specified variance",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "normalList",
        "normalized": "Int-\u003eDouble-\u003eInt-\u003e[Double]",
        "package": "HasGP",
        "partial": "List",
        "signature": "Int-\u003eDouble-\u003eInt-\u003e[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#v:normalMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eMake a matrix with normally distributed, independent elements of \n   zero mean and specified variance.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e Double-\u003e Int-\u003e Int-\u003e DMatrix",
        "fct-type": "function",
        "title": "normalMatrix"
      },
      "index": {
        "description": "Make matrix with normally distributed independent elements of zero mean and specified variance",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "normalMatrix",
        "normalized": "Int-\u003eDouble-\u003eInt-\u003eInt-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Matrix",
        "signature": "Int-\u003eDouble-\u003eInt-\u003eInt-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#v:normalVector",
      "description": {
        "fct-descr": "\u003cp\u003eProduce normally distributed vectors with mean and covariance\n   specified.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e DVector-\u003e DMatrix-\u003e DVector",
        "fct-type": "function",
        "title": "normalVector"
      },
      "index": {
        "description": "Produce normally distributed vectors with mean and covariance specified",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "normalVector",
        "normalized": "Int-\u003eDVector-\u003eDMatrix-\u003eDVector",
        "package": "HasGP",
        "partial": "Vector",
        "signature": "Int-\u003eDVector-\u003eDMatrix-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#v:normalVectorSimple",
      "description": {
        "fct-descr": "\u003cp\u003eProduce vectors with normally distributed, independent elements of\n   zero mean and specified variance.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e Double-\u003e Int-\u003e DVector",
        "fct-type": "function",
        "title": "normalVectorSimple"
      },
      "index": {
        "description": "Produce vectors with normally distributed independent elements of zero mean and specified variance",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "normalVectorSimple",
        "normalized": "Int-\u003eDouble-\u003eInt-\u003eDVector",
        "package": "HasGP",
        "partial": "Vector Simple",
        "signature": "Int-\u003eDouble-\u003eInt-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Random.html#v:uniformMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eMake a random matrix. Elements are uniformly distributed between \n   specified bounds. Returns the matrix and a new generator.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Random",
        "fct-package": "HasGP",
        "fct-signature": "Int-\u003e (Double, Double)-\u003e Int-\u003e Int-\u003e DMatrix",
        "fct-type": "function",
        "title": "uniformMatrix"
      },
      "index": {
        "description": "Make random matrix Elements are uniformly distributed between specified bounds Returns the matrix and new generator",
        "hierarchy": "HasGP Support Random",
        "module": "HasGP.Support.Random",
        "name": "uniformMatrix",
        "normalized": "Int-\u003e(Double,Double)-\u003eInt-\u003eInt-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Matrix",
        "signature": "Int-\u003e(Double,Double)-\u003eInt-\u003eInt-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHasGP Gaussian Process Library. This module contains assorted functions \n     that support the efficient solution of sets of linear equations\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Support-Solve.html",
        "fct-type": "module",
        "title": "Solve"
      },
      "index": {
        "description": "HasGP Gaussian Process Library This module contains assorted functions that support the efficient solution of sets of linear equations Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "Solve",
        "normalized": "",
        "package": "HasGP",
        "partial": "Solve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#v:cholSolve",
      "description": {
        "fct-descr": "\u003cp\u003eFind the inverse of a matrix from its Cholesky decomposition\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-Solve.html#cholSolve",
        "fct-type": "function",
        "title": "cholSolve"
      },
      "index": {
        "description": "Find the inverse of matrix from its Cholesky decomposition",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "cholSolve",
        "normalized": "DMatrix-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Solve",
        "signature": "DMatrix-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#v:computeNthElement",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by lowerSolve.\n\u003c/p\u003e\u003cp\u003eUsed by upperSolve.\n\u003c/p\u003e\u003cp\u003eCompute the value of x_n when solving a lower triangular \n   set of equations Mx=y. It is assumed that all values x_i where \n   i \u003c n are already in the vector x and that the rest of the \n   elements of x are 0.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "DVector-\u003e Double-\u003e Int-\u003e DVector-\u003e DVector",
        "fct-type": "function",
        "title": "computeNthElement"
      },
      "index": {
        "description": "Used by lowerSolve Used by upperSolve Compute the value of when solving lower triangular set of equations Mx It is assumed that all values where are already in the vector and that the rest of the elements of are",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "computeNthElement",
        "normalized": "DVector-\u003eDouble-\u003eInt-\u003eDVector-\u003eDVector",
        "package": "HasGP",
        "partial": "Nth Element",
        "signature": "DVector-\u003eDouble-\u003eInt-\u003eDVector-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#v:generalSolve",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral solver for linear equations of the relevant kind. \n\u003c/p\u003e\u003cp\u003eFirst parameter is either upperSolve or lowerSolve. Next two parameters \n   are the upper/lower triangular matrix from the Cholesky decomposition, \n   then another matrix. Returns the solution as a matrix.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "(DMatrix -\u003e DVector -\u003e DVector) -\u003e DMatrix -\u003e DMatrix -\u003e DMatrix",
        "fct-source": "src/HasGP-Support-Solve.html#generalSolve",
        "fct-type": "function",
        "title": "generalSolve"
      },
      "index": {
        "description": "General solver for linear equations of the relevant kind First parameter is either upperSolve or lowerSolve Next two parameters are the upper lower triangular matrix from the Cholesky decomposition then another matrix Returns the solution as matrix",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "generalSolve",
        "normalized": "(DMatrix-\u003eDVector-\u003eDVector)-\u003eDMatrix-\u003eDMatrix-\u003eDMatrix",
        "package": "HasGP",
        "partial": "Solve",
        "signature": "(DMatrix-\u003eDVector-\u003eDVector)-\u003eDMatrix-\u003eDMatrix-\u003eDMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#v:lowerSolve",
      "description": {
        "fct-descr": "\u003cp\u003eSolve a lower triangular system.\n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e DVector -\u003e DVector",
        "fct-source": "src/HasGP-Support-Solve.html#lowerSolve",
        "fct-type": "function",
        "title": "lowerSolve"
      },
      "index": {
        "description": "Solve lower triangular system",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "lowerSolve",
        "normalized": "DMatrix-\u003eDVector-\u003eDVector",
        "package": "HasGP",
        "partial": "Solve",
        "signature": "DMatrix-\u003eDVector-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Support-Solve.html#v:upperSolve",
      "description": {
        "fct-descr": "\u003cp\u003eIt's not clear whether the use of linearSolve from HMatrix will induce\n     a performance hit when the matrix is upper or lower triangular. Pro: \n     it's a call to something presumably from LaPack. Con: we've got some \n     structure that should allow us to make it O(n^2) instead of O(n^3).\n\u003c/p\u003e\u003cp\u003eTo do: try some timed runs to see if these are needed.\n\u003c/p\u003e\u003cp\u003eSolve an upper triangular system. \n\u003c/p\u003e",
        "fct-module": "HasGP.Support.Solve",
        "fct-package": "HasGP",
        "fct-signature": "DMatrix -\u003e DVector -\u003e DVector",
        "fct-source": "src/HasGP-Support-Solve.html#upperSolve",
        "fct-type": "function",
        "title": "upperSolve"
      },
      "index": {
        "description": "It not clear whether the use of linearSolve from HMatrix will induce performance hit when the matrix is upper or lower triangular Pro it call to something presumably from LaPack Con we ve got some structure that should allow us to make it instead of To do try some timed runs to see if these are needed Solve an upper triangular system",
        "hierarchy": "HasGP Support Solve",
        "module": "HasGP.Support.Solve",
        "name": "upperSolve",
        "normalized": "DMatrix-\u003eDVector-\u003eDVector",
        "package": "HasGP",
        "partial": "Solve",
        "signature": "DMatrix-\u003eDVector-\u003eDVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMainTypes is a module in the HasGP Gaussian process library. It implements \n     basic types for the entire library. \n\u003c/p\u003e\u003cp\u003eNote: some more specific classes and types are defined elsewhere, \n     in particular in HasGP.Likelihood and HasGP.Covariance.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 Sean Holden. sbh11@cl.cam.ac.uk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "module",
        "fct-source": "src/HasGP-Types-MainTypes.html",
        "fct-type": "module",
        "title": "MainTypes"
      },
      "index": {
        "description": "MainTypes is module in the HasGP Gaussian process library It implements basic types for the entire library Note some more specific classes and types are defined elsewhere in particular in HasGP.Likelihood and HasGP.Covariance Copyright Sean Holden sbh11@cl.cam.ac.uk",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "MainTypes",
        "normalized": "",
        "package": "HasGP",
        "partial": "Main Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:CovarianceMatrix",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#CovarianceMatrix",
        "fct-type": "type",
        "title": "CovarianceMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "CovarianceMatrix",
        "normalized": "",
        "package": "HasGP",
        "partial": "Covariance Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:DMatrix",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#DMatrix",
        "fct-type": "type",
        "title": "DMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "DMatrix",
        "normalized": "",
        "package": "HasGP",
        "partial": "DMatrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:DVector",
      "description": {
        "fct-descr": "\u003cp\u003eThese are defined to make functions more readable.\n\u003c/p\u003e",
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#DVector",
        "fct-type": "type",
        "title": "DVector"
      },
      "index": {
        "description": "These are defined to make functions more readable",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "DVector",
        "normalized": "",
        "package": "HasGP",
        "partial": "DVector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:Input",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#Input",
        "fct-type": "type",
        "title": "Input"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "Input",
        "normalized": "",
        "package": "HasGP",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:Inputs",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#Inputs",
        "fct-type": "type",
        "title": "Inputs"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "Inputs",
        "normalized": "",
        "package": "HasGP",
        "partial": "Inputs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:Outputs",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#Outputs",
        "fct-type": "type",
        "title": "Outputs"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "Outputs",
        "normalized": "",
        "package": "HasGP",
        "partial": "Outputs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HasGP/docs/HasGP-Types-MainTypes.html#t:Targets",
      "description": {
        "fct-module": "HasGP.Types.MainTypes",
        "fct-package": "HasGP",
        "fct-signature": "type",
        "fct-source": "src/HasGP-Types-MainTypes.html#Targets",
        "fct-type": "type",
        "title": "Targets"
      },
      "index": {
        "description": "",
        "hierarchy": "HasGP Types MainTypes",
        "module": "HasGP.Types.MainTypes",
        "name": "Targets",
        "normalized": "",
        "package": "HasGP",
        "partial": "Targets",
        "signature": ""
      }
    }
  }
]