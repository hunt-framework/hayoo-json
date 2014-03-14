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
        "word": "statistics-linreg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.LinearRegression",
          "name": "LinearRegression",
          "package": "statistics-linreg",
          "source": "src/Statistics-LinearRegression.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "LinearRegression",
          "package": "statistics-linreg",
          "partial": "Linear Regression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eErrorFunction\u003c/a\u003e\u003c/code\u003e is a function that computes the error of a given point from an estimate. This module provides two error functions correspoinding to the two \u003ccode\u003e\u003ca\u003eEstimator\u003c/a\u003e\u003c/code\u003e functions it defines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vertical distance squared via \u003ccode\u003e\u003ca\u003elinearRegressionError\u003c/a\u003e\u003c/code\u003e that should be used with \u003ccode\u003e\u003ca\u003elinearRegression\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Total distance squared vie \u003ccode\u003e\u003ca\u003elinearRegressionTLSError\u003c/a\u003e\u003c/code\u003e that should be used with \u003ccode\u003e\u003ca\u003elinearRegressionTLS\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Statistics.LinearRegression",
          "name": "ErrorFunction",
          "package": "statistics-linreg",
          "source": "src/Statistics-LinearRegression.html#ErrorFunction",
          "type": "type"
        },
        "index": {
          "description": "An ErrorFunction is function that computes the error of given point from an estimate This module provides two error functions correspoinding to the two Estimator functions it defines Vertical distance squared via linearRegressionError that should be used with linearRegression Total distance squared vie linearRegressionTLSError that should be used with linearRegressionTLS",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "ErrorFunction",
          "package": "statistics-linreg",
          "partial": "Error Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#t:ErrorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn estimated linear relation between 2 samples is (alpha,beta) such that Y = alpha + beta*X.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "EstimatedRelation",
          "package": "statistics-linreg",
          "source": "src/Statistics-LinearRegression.html#EstimatedRelation",
          "type": "type"
        },
        "index": {
          "description": "An estimated linear relation between samples is alpha beta such that alpha beta",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "EstimatedRelation",
          "package": "statistics-linreg",
          "partial": "Estimated Relation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#t:EstimatedRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe robust fit algorithm used has various parameters that can be specified using the \u003ccode\u003e\u003ca\u003eEstimationParameters\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "EstimationParameters",
          "package": "statistics-linreg",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "data"
        },
        "index": {
          "description": "The robust fit algorithm used has various parameters that can be specified using the EstimationParameters record",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "EstimationParameters",
          "package": "statistics-linreg",
          "partial": "Estimation Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#t:EstimationParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEstimator\u003c/a\u003e\u003c/code\u003e is a function that generates an estimated linear regression based on 2 samples. This module provides two estimator functions:\n \u003ccode\u003e\u003ca\u003elinearRegression\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elinearRegressionTLS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "Estimator",
          "package": "statistics-linreg",
          "source": "src/Statistics-LinearRegression.html#Estimator",
          "type": "type"
        },
        "index": {
          "description": "An Estimator is function that generates an estimated linear regression based on samples This module provides two estimator functions linearRegression and linearRegressionTLS",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "Estimator",
          "package": "statistics-linreg",
          "partial": "Estimator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#t:Estimator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.LinearRegression",
          "name": "EstimationParameters",
          "package": "statistics-linreg",
          "signature": "EstimationParameters",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "EstimationParameters",
          "package": "statistics-linreg",
          "partial": "Estimation Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:EstimationParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the optimal (local minimum) estimate based on an initial estimate.\n The local minimum may not be the global (a.k.a. best) estimate but starting from enough different initial estimates should yield the global optimum eventually.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "converge",
          "package": "statistics-linreg",
          "signature": "EstimationParameters -\u003e Sample -\u003e Sample -\u003e EstimatedRelation -\u003e EstimatedRelation",
          "source": "src/Statistics-LinearRegression.html#converge",
          "type": "function"
        },
        "index": {
          "description": "Calculate the optimal local minimum estimate based on an initial estimate The local minimum may not be the global a.k.a best estimate but starting from enough different initial estimates should yield the global optimum eventually",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "converge",
          "normalized": "EstimationParameters-\u003eSample-\u003eSample-\u003eEstimatedRelation-\u003eEstimatedRelation",
          "package": "statistics-linreg",
          "signature": "EstimationParameters-\u003eSample-\u003eSample-\u003eEstimatedRelation-\u003eEstimatedRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:converge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePearson's product-moment correlation coefficient\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "correl",
          "package": "statistics-linreg",
          "signature": "Sample -\u003e Sample -\u003e Double",
          "source": "src/Statistics-LinearRegression.html#correl",
          "type": "function"
        },
        "index": {
          "description": "Pearson product-moment correlation coefficient",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "correl",
          "normalized": "Sample-\u003eSample-\u003eDouble",
          "package": "statistics-linreg",
          "signature": "Sample-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:correl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCovariance of two samples\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "covar",
          "package": "statistics-linreg",
          "signature": "Sample -\u003e Sample -\u003e Double",
          "source": "src/Statistics-LinearRegression.html#covar",
          "type": "function"
        },
        "index": {
          "description": "Covariance of two samples",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "covar",
          "normalized": "Sample-\u003eSample-\u003eDouble",
          "package": "statistics-linreg",
          "signature": "Sample-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:covar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault set of parameters to use (see reference for details).\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "defaultEstimationParameters",
          "package": "statistics-linreg",
          "signature": "EstimationParameters",
          "source": "src/Statistics-LinearRegression.html#defaultEstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Default set of parameters to use see reference for details",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "defaultEstimationParameters",
          "package": "statistics-linreg",
          "partial": "Estimation Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:defaultEstimationParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrorFunction to use (default linearRegressionError)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "errorFunction",
          "package": "statistics-linreg",
          "signature": "ErrorFunction",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "ErrorFunction to use default linearRegressionError",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "errorFunction",
          "package": "statistics-linreg",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:errorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimator function to use (default linearRegression)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "estimator",
          "package": "statistics-linreg",
          "signature": "Estimator",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Estimator function to use default linearRegression",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "estimator",
          "package": "statistics-linreg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:estimator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the initial sample is large, and thus gets subdivided, this is the number of candidate-estimations to take from each subgroup, on which complete convergence will be executed (default 10)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "groupSubsets",
          "package": "statistics-linreg",
          "signature": "Int",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "If the initial sample is large and thus gets subdivided this is the number of candidate-estimations to take from each subgroup on which complete convergence will be executed default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "groupSubsets",
          "package": "statistics-linreg",
          "partial": "Subsets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:groupSubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal size of sample that does not require two-step sub-division (see reference article) (default 1500)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "largeSetSize",
          "package": "statistics-linreg",
          "signature": "Int",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Maximal size of sample that does not require two-step sub-division see reference article default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "largeSetSize",
          "package": "statistics-linreg",
          "partial": "Set Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:largeSetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple linear regression between 2 samples.\n   Takes two vectors Y={yi} and X={xi} and returns\n   (alpha, beta) such that Y = alpha + beta*X          \n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegression",
          "package": "statistics-linreg",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double)",
          "source": "src/Statistics-LinearRegression.html#linearRegression",
          "type": "function"
        },
        "index": {
          "description": "Simple linear regression between samples Takes two vectors yi and xi and returns alpha beta such that alpha beta",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegression",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double)",
          "package": "statistics-linreg",
          "partial": "Regression",
          "signature": "Sample-\u003eSample-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe estimated distributions of the regression parameters (alpha and beta) assuming normal, identical distributions of Y, the sampled data.\n These can serve to get confidence intervals for the regression parameters.\n Accepts the regression parameters (alpha,beta) and the sample vectors X and Y.\n The distributions are StudnetT distributions centered at the estimated (alpha,beta) respectively, with parameter numbers n-2 (where n is the initial sample size) and with standard deviations that are extracted from the sampled data based on its MSE. See chapter 2 of reference [3] for details.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionDistributions",
          "package": "statistics-linreg",
          "signature": "(Double, Double) -\u003e Sample -\u003e Sample -\u003e (LinearTransform StudentT, LinearTransform StudentT)",
          "source": "src/Statistics-LinearRegression.html#linearRegressionDistributions",
          "type": "function"
        },
        "index": {
          "description": "The estimated distributions of the regression parameters alpha and beta assuming normal identical distributions of the sampled data These can serve to get confidence intervals for the regression parameters Accepts the regression parameters alpha beta and the sample vectors and The distributions are StudnetT distributions centered at the estimated alpha beta respectively with parameter numbers n-2 where is the initial sample size and with standard deviations that are extracted from the sampled data based on its MSE See chapter of reference for details",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionDistributions",
          "normalized": "(Double,Double)-\u003eSample-\u003eSample-\u003e(LinearTransform StudentT,LinearTransform StudentT)",
          "package": "statistics-linreg",
          "partial": "Regression Distributions",
          "signature": "(Double,Double)-\u003eSample-\u003eSample-\u003e(LinearTransform StudentT,LinearTransform StudentT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionDistributions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinearRegression error function is the square of the \u003cem\u003evertical\u003c/em\u003e distance of a point from the line.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionError",
          "package": "statistics-linreg",
          "signature": "ErrorFunction",
          "source": "src/Statistics-LinearRegression.html#linearRegressionError",
          "type": "function"
        },
        "index": {
          "description": "linearRegression error function is the square of the vertical distance of point from the line",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionError",
          "package": "statistics-linreg",
          "partial": "Regression Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error (or residual) mean square of a sample w.r.t. an estimated regression line.\n   This serves as an estimate for the variance of the sampled data.\n   Accepts the regression parameters (alpha,beta) and the sample vectors X and Y.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionMSE",
          "package": "statistics-linreg",
          "signature": "(Double, Double) -\u003e Sample -\u003e Sample -\u003e Double",
          "source": "src/Statistics-LinearRegression.html#linearRegressionMSE",
          "type": "function"
        },
        "index": {
          "description": "The error or residual mean square of sample w.r.t an estimated regression line This serves as an estimate for the variance of the sampled data Accepts the regression parameters alpha beta and the sample vectors and",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionMSE",
          "normalized": "(Double,Double)-\u003eSample-\u003eSample-\u003eDouble",
          "package": "statistics-linreg",
          "partial": "Regression MSE",
          "signature": "(Double,Double)-\u003eSample-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple linear regression between 2 samples.\n   Takes two vectors Y={yi} and X={xi} and returns\n   (alpha, beta, r*r) such that Y = alpha + beta*X\n   and where r is the Pearson product-moment correlation\n   coefficient\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionRSqr",
          "package": "statistics-linreg",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double, Double)",
          "source": "src/Statistics-LinearRegression.html#linearRegressionRSqr",
          "type": "function"
        },
        "index": {
          "description": "Simple linear regression between samples Takes two vectors yi and xi and returns alpha beta such that alpha beta and where is the Pearson product-moment correlation coefficient",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionRSqr",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double,Double)",
          "package": "statistics-linreg",
          "partial": "Regression RSqr",
          "signature": "Sample-\u003eSample-\u003e(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionRSqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal Least Squares (TLS) linear regression.\n Assumes x-axis values (and not just y-axis values) are random variables and that both variables have similar distributions.\n interface is the same as \u003ccode\u003e\u003ca\u003elinearRegression\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionTLS",
          "package": "statistics-linreg",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double)",
          "source": "src/Statistics-LinearRegression.html#linearRegressionTLS",
          "type": "function"
        },
        "index": {
          "description": "Total Least Squares TLS linear regression Assumes x-axis values and not just y-axis values are random variables and that both variables have similar distributions interface is the same as linearRegression",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionTLS",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double)",
          "package": "statistics-linreg",
          "partial": "Regression TLS",
          "signature": "Sample-\u003eSample-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionTLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elinearRegressionTLS error function is the square of the \u003cem\u003etotal\u003c/em\u003e distance of a point from the line.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionTLSError",
          "package": "statistics-linreg",
          "signature": "ErrorFunction",
          "source": "src/Statistics-LinearRegression.html#linearRegressionTLSError",
          "type": "function"
        },
        "index": {
          "description": "linearRegressionTLS error function is the square of the total distance of point from the line",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "linearRegressionTLSError",
          "package": "statistics-linreg",
          "partial": "Regression TLSError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:linearRegressionTLSError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal number of sampled subsets (pairs of points) to use as starting points (default 500)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "maxSubsetsNum",
          "package": "statistics-linreg",
          "signature": "Int",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Maximal number of sampled subsets pairs of points to use as starting points default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "maxSubsetsNum",
          "package": "statistics-linreg",
          "partial": "Subsets Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:maxSubsetsNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal size of sample that can be analyzed without any sub-division (default 600)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "mediumSetSize",
          "package": "statistics-linreg",
          "signature": "Int",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Maximal size of sample that can be analyzed without any sub-division default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "mediumSetSize",
          "package": "statistics-linreg",
          "partial": "Set Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:mediumSetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper that executes \u003ccode\u003e\u003ca\u003erobustFit\u003c/a\u003e\u003c/code\u003e using a default random generator (meaning it is only pseudo-random)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "nonRandomRobustFit",
          "package": "statistics-linreg",
          "signature": "EstimationParameters -\u003e Sample -\u003e Sample -\u003e EstimatedRelation",
          "source": "src/Statistics-LinearRegression.html#nonRandomRobustFit",
          "type": "function"
        },
        "index": {
          "description": "wrapper that executes robustFit using default random generator meaning it is only pseudo-random",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "nonRandomRobustFit",
          "normalized": "EstimationParameters-\u003eSample-\u003eSample-\u003eEstimatedRelation",
          "package": "statistics-linreg",
          "partial": "Random Robust Fit",
          "signature": "EstimationParameters-\u003eSample-\u003eSample-\u003eEstimatedRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:nonRandomRobustFit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal fraction of outliers expected in the sample (default 0.25)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "outlierFraction",
          "package": "statistics-linreg",
          "signature": "Double",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Maximal fraction of outliers expected in the sample default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "outlierFraction",
          "package": "statistics-linreg",
          "partial": "Fraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:outlierFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding a robust fit linear estimate between two samples. The procedure requires randomization and is based on the procedure described in the reference.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "robustFit",
          "package": "statistics-linreg",
          "signature": "EstimationParameters -\u003e Sample -\u003e Sample -\u003e m EstimatedRelation",
          "source": "src/Statistics-LinearRegression.html#robustFit",
          "type": "function"
        },
        "index": {
          "description": "Finding robust fit linear estimate between two samples The procedure requires randomization and is based on the procedure described in the reference",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "robustFit",
          "normalized": "EstimationParameters-\u003eSample-\u003eSample-\u003ea EstimatedRelation",
          "package": "statistics-linreg",
          "partial": "Fit",
          "signature": "EstimationParameters-\u003eSample-\u003eSample-\u003em EstimatedRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:robustFit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRobust fit yielding also the R-square value of the \"clean\" dataset.\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "robustFitRSqr",
          "package": "statistics-linreg",
          "signature": "EstimationParameters -\u003e Sample -\u003e Sample -\u003e m (EstimatedRelation, Double)",
          "source": "src/Statistics-LinearRegression.html#robustFitRSqr",
          "type": "function"
        },
        "index": {
          "description": "Robust fit yielding also the R-square value of the clean dataset",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "robustFitRSqr",
          "normalized": "EstimationParameters-\u003eSample-\u003eSample-\u003ea(EstimatedRelation,Double)",
          "package": "statistics-linreg",
          "partial": "Fit RSqr",
          "signature": "EstimationParameters-\u003eSample-\u003eSample-\u003em(EstimatedRelation,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:robustFitRSqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of concentration steps to take for initial evaluation of a solution (default 3)\n\u003c/p\u003e",
          "module": "Statistics.LinearRegression",
          "name": "shortIterationSteps",
          "package": "statistics-linreg",
          "signature": "Int",
          "source": "src/Statistics-LinearRegression.html#EstimationParameters",
          "type": "function"
        },
        "index": {
          "description": "Number of concentration steps to take for initial evaluation of solution default",
          "hierarchy": "Statistics LinearRegression",
          "module": "Statistics.LinearRegression",
          "name": "shortIterationSteps",
          "package": "statistics-linreg",
          "partial": "Iteration Steps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics-linreg/docs/Statistics-LinearRegression.html#v:shortIterationSteps"
      }
    }
  ]
]