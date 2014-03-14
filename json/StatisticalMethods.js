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
        "word": "StatisticalMethods"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn general, it is not easy to define the whole confusion matrix\n generically without knowing anything about the source data. For certain\n elements however, it is possible. These instances are all defined on\n newtypes in order to not create instances on generic data types like lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "Instances",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "In general it is not easy to define the whole confusion matrix generically without knowing anything about the source data For certain elements however it is possible These instances are all defined on newtypes in order to not create instances on generic data types like lists",
          "hierarchy": "Statistics ConfusionMatrix Instances",
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "Instances",
          "package": "StatisticalMethods",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ctor expects the total number of possibilities first, then a list of\n true positive elements, followed by a list of predicted elements.\n\u003c/p\u003e",
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "ListSimilar",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix-Instances.html#ListSimilar",
          "type": "newtype"
        },
        "index": {
          "description": "The ctor expects the total number of possibilities first then list of true positive elements followed by list of predicted elements",
          "hierarchy": "Statistics ConfusionMatrix Instances",
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "ListSimilar",
          "package": "StatisticalMethods",
          "partial": "List Similar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix-Instances.html#t:ListSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "ListSimilar",
          "package": "StatisticalMethods",
          "signature": "ListSimilar (Int, [a], [a])",
          "source": "src/Statistics-ConfusionMatrix-Instances.html#ListSimilar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix Instances",
          "module": "Statistics.ConfusionMatrix.Instances",
          "name": "ListSimilar",
          "normalized": "ListSimilar(Int,[a],[a])",
          "package": "StatisticalMethods",
          "partial": "List Similar",
          "signature": "ListSimilar(Int,[a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix-Instances.html#v:ListSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe confusion matrix contains four data points: the true and false\n positives and the true and false negatives. From these four data points,\n other statistics can be extracted.\n\u003c/p\u003e\u003cp\u003eFawcett, ROC Graphs: Notes and Practical Considerations for Researchers,\n 2004, Kluwer Academic Publishers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix.html",
          "type": "module"
        },
        "index": {
          "description": "The confusion matrix contains four data points the true and false positives and the true and false negatives From these four data points other statistics can be extracted Fawcett ROC Graphs Notes and Practical Considerations for Researchers Kluwer Academic Publishers",
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "partial": "Confusion Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe confusion matrix.\n\u003c/p\u003e",
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "data"
        },
        "index": {
          "description": "The confusion matrix",
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "partial": "Confusion Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#t:ConfusionMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a certain data-set, create a confusion matrix.\n\u003c/p\u003e",
          "module": "Statistics.ConfusionMatrix",
          "name": "MkConfusionMatrix",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix.html#MkConfusionMatrix",
          "type": "class"
        },
        "index": {
          "description": "Given certain data-set create confusion matrix",
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "MkConfusionMatrix",
          "package": "StatisticalMethods",
          "partial": "Mk Confusion Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#t:MkConfusionMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "WrappedDouble",
          "package": "StatisticalMethods",
          "source": "src/Statistics-ConfusionMatrix.html#WrappedDouble",
          "type": "type"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "WrappedDouble",
          "package": "StatisticalMethods",
          "partial": "Wrapped Double",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#t:WrappedDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "ConfusionMatrix",
          "package": "StatisticalMethods",
          "partial": "Confusion Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:ConfusionMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "fn",
          "package": "StatisticalMethods",
          "signature": "WrappedDouble",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "fn",
          "package": "StatisticalMethods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "fp",
          "package": "StatisticalMethods",
          "signature": "WrappedDouble",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "fp",
          "package": "StatisticalMethods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "mkConfusionMatrix",
          "package": "StatisticalMethods",
          "signature": "a -\u003e ConfusionMatrix",
          "source": "src/Statistics-ConfusionMatrix.html#mkConfusionMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "mkConfusionMatrix",
          "normalized": "a-\u003eConfusionMatrix",
          "package": "StatisticalMethods",
          "partial": "Confusion Matrix",
          "signature": "a-\u003eConfusionMatrix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:mkConfusionMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "tn",
          "package": "StatisticalMethods",
          "signature": "WrappedDouble",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "tn",
          "package": "StatisticalMethods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:tn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.ConfusionMatrix",
          "name": "tp",
          "package": "StatisticalMethods",
          "signature": "WrappedDouble",
          "source": "src/Statistics-ConfusionMatrix.html#ConfusionMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics ConfusionMatrix",
          "module": "Statistics.ConfusionMatrix",
          "name": "tp",
          "package": "StatisticalMethods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-ConfusionMatrix.html#v:tp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEM for a mixture of k one-dimensional Gaussians. This procedure tends to\n produce \u003ca\u003eNaN\u003c/a\u003es whenever more Gaussians are being selected than are called\n for. This is rather convenient. ;-)\n\u003c/p\u003e\u003cp\u003eTODO cite paper\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.EM.GMM",
          "name": "GMM",
          "package": "StatisticalMethods",
          "source": "src/Statistics-EM-GMM.html",
          "type": "module"
        },
        "index": {
          "description": "EM for mixture of one-dimensional Gaussians This procedure tends to produce NaN whenever more Gaussians are being selected than are called for This is rather convenient TODO cite paper",
          "hierarchy": "Statistics EM GMM",
          "module": "Statistics.EM.GMM",
          "name": "GMM",
          "package": "StatisticalMethods",
          "partial": "GMM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-GMM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an optimal set of parameters \u003ccode\u003eTheta\u003c/code\u003e. The additional \u003ca\u003etakeWhile (not\n . isnan . fst)\u003c/a\u003e makes sure that in cases of overfitting, \u003ccode\u003e\u003ca\u003eemFix\u003c/a\u003e\u003c/code\u003e does\n terminate. Due to the way we check and take, in case of NaNs, the returned\n values will be NaNs (checking fst, returning snd).\n\u003c/p\u003e",
          "module": "Statistics.EM.GMM",
          "name": "emFix",
          "package": "StatisticalMethods",
          "signature": "Data -\u003e Theta -\u003e Theta",
          "source": "src/Statistics-EM-GMM.html#emFix",
          "type": "function"
        },
        "index": {
          "description": "Find an optimal set of parameters Theta The additional takeWhile not isnan fst makes sure that in cases of overfitting emFix does terminate Due to the way we check and take in case of NaNs the returned values will be NaNs checking fst returning snd",
          "hierarchy": "Statistics EM GMM",
          "module": "Statistics.EM.GMM",
          "name": "emFix",
          "normalized": "Data-\u003eTheta-\u003eTheta",
          "package": "StatisticalMethods",
          "partial": "Fix",
          "signature": "Data-\u003eTheta-\u003eTheta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-GMM.html#v:emFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of \u003ccode\u003eData\u003c/code\u003e and a number \u003ccode\u003ek\u003c/code\u003e of Gaussian peaks, try to find the\n optimal GMM. This is done by trying each data point as mu for each Gaussian.\n Note that this will be rather slow for larger \u003ccode\u003ek\u003c/code\u003e (larger than, say 2 or 3).\n In that case, a random-drawing method should be chosen.\n\u003c/p\u003e\u003cp\u003eTODO xs' -\u003e xs sorting makes me cry!\n\u003c/p\u003e",
          "module": "Statistics.EM.GMM",
          "name": "emStarts",
          "package": "StatisticalMethods",
          "signature": "Int -\u003e Data -\u003e Theta",
          "source": "src/Statistics-EM-GMM.html#emStarts",
          "type": "function"
        },
        "index": {
          "description": "Given set of Data and number of Gaussian peaks try to find the optimal GMM This is done by trying each data point as mu for each Gaussian Note that this will be rather slow for larger larger than say or In that case random-drawing method should be chosen TODO xs xs sorting makes me cry",
          "hierarchy": "Statistics EM GMM",
          "module": "Statistics.EM.GMM",
          "name": "emStarts",
          "normalized": "Int-\u003eData-\u003eTheta",
          "package": "StatisticalMethods",
          "partial": "Starts",
          "signature": "Int-\u003eData-\u003eTheta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-GMM.html#v:emStarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a simplified version of the Expectation-Maximization algorithm for\n a two-component Gaussian mixture model. Cf. Hastie et al, The Elements of\n Statistical Learning, Springer. Chapter 8.5.1.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.EM.TwoGaussian",
          "name": "TwoGaussian",
          "package": "StatisticalMethods",
          "source": "src/Statistics-EM-TwoGaussian.html",
          "type": "module"
        },
        "index": {
          "description": "This is simplified version of the Expectation-Maximization algorithm for two-component Gaussian mixture model Cf Hastie et al The Elements of Statistical Learning Springer Chapter",
          "hierarchy": "Statistics EM TwoGaussian",
          "module": "Statistics.EM.TwoGaussian",
          "name": "TwoGaussian",
          "package": "StatisticalMethods",
          "partial": "Two Gaussian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-TwoGaussian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the fix-points of the EM step iterations.\n\u003c/p\u003e",
          "module": "Statistics.EM.TwoGaussian",
          "name": "emFix",
          "package": "StatisticalMethods",
          "signature": "Vector Double -\u003e (Weight, Normal, Normal) -\u003e (Weight, Normal, Normal)",
          "source": "src/Statistics-EM-TwoGaussian.html#emFix",
          "type": "function"
        },
        "index": {
          "description": "Finds the fix-points of the EM step iterations",
          "hierarchy": "Statistics EM TwoGaussian",
          "module": "Statistics.EM.TwoGaussian",
          "name": "emFix",
          "normalized": "Vector Double-\u003e(Weight,Normal,Normal)-\u003e(Weight,Normal,Normal)",
          "package": "StatisticalMethods",
          "partial": "Fix",
          "signature": "Vector Double-\u003e(Weight,Normal,Normal)-\u003e(Weight,Normal,Normal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-TwoGaussian.html#v:emFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the best fix-point with all elements \u003ccode\u003exs\u003c/code\u003e as starting points for the\n means. It holds that mu_1 \u003c mu_2.\n\u003c/p\u003e",
          "module": "Statistics.EM.TwoGaussian",
          "name": "emStarts",
          "package": "StatisticalMethods",
          "signature": "Vector Double -\u003e (Weight, Normal, Normal)",
          "source": "src/Statistics-EM-TwoGaussian.html#emStarts",
          "type": "function"
        },
        "index": {
          "description": "Finds the best fix-point with all elements xs as starting points for the means It holds that mu mu",
          "hierarchy": "Statistics EM TwoGaussian",
          "module": "Statistics.EM.TwoGaussian",
          "name": "emStarts",
          "normalized": "Vector Double-\u003e(Weight,Normal,Normal)",
          "package": "StatisticalMethods",
          "partial": "Starts",
          "signature": "Vector Double-\u003e(Weight,Normal,Normal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-EM-TwoGaussian.html#v:emStarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon performance metrics which can be calculated using the confusion\n matrix.\n\u003c/p\u003e\u003cp\u003eFawcett, ROC Graphs: Notes and Practical Considerations for Researchers,\n 2004, Kluwer Academic Publishers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "PerformanceMetrics",
          "package": "StatisticalMethods",
          "source": "src/Statistics-PerformanceMetrics.html",
          "type": "module"
        },
        "index": {
          "description": "Common performance metrics which can be calculated using the confusion matrix Fawcett ROC Graphs Notes and Practical Considerations for Researchers Kluwer Academic Publishers",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "PerformanceMetrics",
          "package": "StatisticalMethods",
          "partial": "Performance Metrics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF-measure\n\u003c/p\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "fmeasure",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix -\u003e WrappedDouble",
          "source": "src/Statistics-PerformanceMetrics.html#fmeasure",
          "type": "function"
        },
        "index": {
          "description": "F-measure",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "fmeasure",
          "normalized": "ConfusionMatrix-\u003eWrappedDouble",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix-\u003eWrappedDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#v:fmeasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emathews correlation coefficient\n\u003c/p\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "mcc",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix -\u003e WrappedDouble",
          "source": "src/Statistics-PerformanceMetrics.html#mcc",
          "type": "function"
        },
        "index": {
          "description": "mathews correlation coefficient",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "mcc",
          "normalized": "ConfusionMatrix-\u003eWrappedDouble",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix-\u003eWrappedDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#v:mcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epositive predictive value\n\u003c/p\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "ppv",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix -\u003e WrappedDouble",
          "source": "src/Statistics-PerformanceMetrics.html#ppv",
          "type": "function"
        },
        "index": {
          "description": "positive predictive value",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "ppv",
          "normalized": "ConfusionMatrix-\u003eWrappedDouble",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix-\u003eWrappedDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#v:ppv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esensitivity\n\u003c/p\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "sensitivity",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix -\u003e WrappedDouble",
          "source": "src/Statistics-PerformanceMetrics.html#sensitivity",
          "type": "function"
        },
        "index": {
          "description": "sensitivity",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "sensitivity",
          "normalized": "ConfusionMatrix-\u003eWrappedDouble",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix-\u003eWrappedDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#v:sensitivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especificity\n\u003c/p\u003e",
          "module": "Statistics.PerformanceMetrics",
          "name": "specificity",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix -\u003e WrappedDouble",
          "source": "src/Statistics-PerformanceMetrics.html#specificity",
          "type": "function"
        },
        "index": {
          "description": "specificity",
          "hierarchy": "Statistics PerformanceMetrics",
          "module": "Statistics.PerformanceMetrics",
          "name": "specificity",
          "normalized": "ConfusionMatrix-\u003eWrappedDouble",
          "package": "StatisticalMethods",
          "signature": "ConfusionMatrix-\u003eWrappedDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/Statistics-PerformanceMetrics.html#v:specificity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains test data taken from \u003ca\u003eElements of Statistical\n Learning\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTODO correct citation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TestData.Elements",
          "name": "Elements",
          "package": "StatisticalMethods",
          "source": "src/TestData-Elements.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains test data taken from Elements of Statistical Learning TODO correct citation",
          "hierarchy": "TestData Elements",
          "module": "TestData.Elements",
          "name": "Elements",
          "package": "StatisticalMethods",
          "partial": "Elements",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/TestData-Elements.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TestData.Elements",
          "name": "table_8_1",
          "package": "StatisticalMethods",
          "signature": "Vector Double",
          "source": "src/TestData-Elements.html#table_8_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "TestData Elements",
          "module": "TestData.Elements",
          "name": "table_8_1",
          "package": "StatisticalMethods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/StatisticalMethods/docs/TestData-Elements.html#v:table_8_1"
      }
    }
  ]
]