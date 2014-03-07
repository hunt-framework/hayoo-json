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
        "word": "statistics"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for computing autocovariance and autocorrelation of a\n sample.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Autocorrelation",
          "name": "Autocorrelation",
          "package": "statistics",
          "source": "src/Statistics-Autocorrelation.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for computing autocovariance and autocorrelation of sample",
          "hierarchy": "Statistics Autocorrelation",
          "module": "Statistics.Autocorrelation",
          "name": "Autocorrelation",
          "package": "statistics",
          "partial": "Autocorrelation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Autocorrelation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the autocorrelation function of a sample, and the upper\n and lower bounds of confidence intervals for each element.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The calculation of the 95% confidence interval assumes a\n stationary Gaussian process.\n\u003c/p\u003e",
          "module": "Statistics.Autocorrelation",
          "name": "autocorrelation",
          "package": "statistics",
          "signature": "v Double -\u003e (v Double, v Double, v Double)",
          "source": "src/Statistics-Autocorrelation.html#autocorrelation",
          "type": "function"
        },
        "index": {
          "description": "Compute the autocorrelation function of sample and the upper and lower bounds of confidence intervals for each element Note The calculation of the confidence interval assumes stationary Gaussian process",
          "hierarchy": "Statistics Autocorrelation",
          "module": "Statistics.Autocorrelation",
          "name": "autocorrelation",
          "normalized": "a Double-\u003e(a Double,a Double,a Double)",
          "package": "statistics",
          "signature": "v Double-\u003e(v Double,v Double,v Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Autocorrelation.html#v:autocorrelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the autocovariance of a sample, i.e. the covariance of\n the sample against a shifted version of itself.\n\u003c/p\u003e",
          "module": "Statistics.Autocorrelation",
          "name": "autocovariance",
          "package": "statistics",
          "signature": "v Double -\u003e v Double",
          "source": "src/Statistics-Autocorrelation.html#autocovariance",
          "type": "function"
        },
        "index": {
          "description": "Compute the autocovariance of sample i.e the covariance of the sample against shifted version of itself",
          "hierarchy": "Statistics Autocorrelation",
          "module": "Statistics.Autocorrelation",
          "name": "autocovariance",
          "normalized": "a Double-\u003ea Double",
          "package": "statistics",
          "signature": "v Double-\u003ev Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Autocorrelation.html#v:autocovariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use module Numeric.MathFunctions.Constants from math-functions\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eConstant values common to much statistics code.\n\u003c/p\u003e\u003cp\u003eDEPRECATED: use module \u003ccode\u003e\u003ca\u003eConstants\u003c/a\u003e\u003c/code\u003e from\n math-functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Constants",
          "name": "Constants",
          "package": "statistics",
          "source": "src/Statistics-Constants.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated use module Numeric.MathFunctions.Constants from math-functions Constant values common to much statistics code DEPRECATED use module Constants from math-functions",
          "hierarchy": "Statistics Constants",
          "module": "Statistics.Constants",
          "name": "Constants",
          "package": "statistics",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Beta",
          "name": "Beta",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Beta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "Beta",
          "package": "statistics",
          "partial": "Beta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe beta distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Beta",
          "name": "BetaDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Beta.html#BetaDistribution",
          "type": "data"
        },
        "index": {
          "description": "The beta distribution",
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "BetaDistribution",
          "package": "statistics",
          "partial": "Beta Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#t:BetaDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha shape parameter\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Beta",
          "name": "bdAlpha",
          "package": "statistics",
          "signature": "BetaDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Beta.html#bdAlpha",
          "type": "function"
        },
        "index": {
          "description": "Alpha shape parameter",
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "bdAlpha",
          "normalized": "BetaDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Alpha",
          "signature": "BetaDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#v:bdAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeta shape parameter\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Beta",
          "name": "bdBeta",
          "package": "statistics",
          "signature": "BetaDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Beta.html#bdBeta",
          "type": "function"
        },
        "index": {
          "description": "Beta shape parameter",
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "bdBeta",
          "normalized": "BetaDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Beta",
          "signature": "BetaDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#v:bdBeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate beta distribution. Both shape parameters must be positive.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Beta",
          "name": "betaDistr",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e BetaDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create beta distribution Both shape parameters must be positive",
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "betaDistr",
          "normalized": "Double-\u003eDouble-\u003eBetaDistribution",
          "package": "statistics",
          "partial": "Distr",
          "signature": "Double-\u003eDouble-\u003eBetaDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#v:betaDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate beta distribution. This construtor doesn't check parameters.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Beta",
          "name": "improperBetaDistr",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e BetaDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create beta distribution This construtor doesn check parameters",
          "hierarchy": "Statistics Distribution Beta",
          "module": "Statistics.Distribution.Beta",
          "name": "improperBetaDistr",
          "normalized": "Double-\u003eDouble-\u003eBetaDistribution",
          "package": "statistics",
          "partial": "Beta Distr",
          "signature": "Double-\u003eDouble-\u003eBetaDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Beta.html#v:improperBetaDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe binomial distribution.  This is the discrete probability\n distribution of the number of successes in a sequence of \u003cem\u003en\u003c/em\u003e\n independent yes/no experiments, each of which yields success with\n probability \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Binomial",
          "name": "Binomial",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Binomial.html",
          "type": "module"
        },
        "index": {
          "description": "The binomial distribution This is the discrete probability distribution of the number of successes in sequence of independent yes no experiments each of which yields success with probability",
          "hierarchy": "Statistics Distribution Binomial",
          "module": "Statistics.Distribution.Binomial",
          "name": "Binomial",
          "package": "statistics",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe binomial distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Binomial",
          "name": "BinomialDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Binomial.html#BinomialDistribution",
          "type": "data"
        },
        "index": {
          "description": "The binomial distribution",
          "hierarchy": "Statistics Distribution Binomial",
          "module": "Statistics.Distribution.Binomial",
          "name": "BinomialDistribution",
          "package": "statistics",
          "partial": "Binomial Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Binomial.html#t:BinomialDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Binomial",
          "name": "bdProbability",
          "package": "statistics",
          "signature": "BinomialDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Binomial.html#bdProbability",
          "type": "function"
        },
        "index": {
          "description": "Probability",
          "hierarchy": "Statistics Distribution Binomial",
          "module": "Statistics.Distribution.Binomial",
          "name": "bdProbability",
          "normalized": "BinomialDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Probability",
          "signature": "BinomialDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Binomial.html#v:bdProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of trials.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Binomial",
          "name": "bdTrials",
          "package": "statistics",
          "signature": "BinomialDistribution -\u003e Int",
          "source": "src/Statistics-Distribution-Binomial.html#bdTrials",
          "type": "function"
        },
        "index": {
          "description": "Number of trials",
          "hierarchy": "Statistics Distribution Binomial",
          "module": "Statistics.Distribution.Binomial",
          "name": "bdTrials",
          "normalized": "BinomialDistribution-\u003eInt",
          "package": "statistics",
          "partial": "Trials",
          "signature": "BinomialDistribution-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Binomial.html#v:bdTrials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct binomial distribution. Number of trials must be\n   non-negative and probability must be in [0,1] range\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Binomial",
          "name": "binomial",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e BinomialDistribution",
          "type": "function"
        },
        "index": {
          "description": "Construct binomial distribution Number of trials must be non-negative and probability must be in range",
          "hierarchy": "Statistics Distribution Binomial",
          "module": "Statistics.Distribution.Binomial",
          "name": "binomial",
          "normalized": "Int-\u003eDouble-\u003eBinomialDistribution",
          "package": "statistics",
          "signature": "Int-\u003eDouble-\u003eBinomialDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Binomial.html#v:binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Cauchy-Lorentz distribution. It's also known as Lorentz\n distribution or Breit&#8211;Wigner distribution.\n\u003c/p\u003e\u003cp\u003eIt doesn't have mean and variance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "CauchyLorentz",
          "package": "statistics",
          "source": "src/Statistics-Distribution-CauchyLorentz.html",
          "type": "module"
        },
        "index": {
          "description": "The Cauchy-Lorentz distribution It also known as Lorentz distribution or Breit Wigner distribution It doesn have mean and variance",
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "CauchyLorentz",
          "package": "statistics",
          "partial": "Cauchy Lorentz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauchy-Lorentz distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "CauchyDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-CauchyLorentz.html#CauchyDistribution",
          "type": "data"
        },
        "index": {
          "description": "Cauchy-Lorentz distribution",
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "CauchyDistribution",
          "package": "statistics",
          "partial": "Cauchy Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#t:CauchyDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentral value of Cauchy-Lorentz distribution which is its\n   mode and median. Distribution doesn't have mean so function\n   is named after median.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribMedian",
          "package": "statistics",
          "signature": "CauchyDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-CauchyLorentz.html#cauchyDistribMedian",
          "type": "function"
        },
        "index": {
          "description": "Central value of Cauchy-Lorentz distribution which is its mode and median Distribution doesn have mean so function is named after median",
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribMedian",
          "normalized": "CauchyDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Distrib Median",
          "signature": "CauchyDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#v:cauchyDistribMedian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale parameter of Cauchy-Lorentz distribution. It's\n   different from variance and specify half width at half\n   maximum (HWHM).\n\u003c/p\u003e",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribScale",
          "package": "statistics",
          "signature": "CauchyDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-CauchyLorentz.html#cauchyDistribScale",
          "type": "function"
        },
        "index": {
          "description": "Scale parameter of Cauchy-Lorentz distribution It different from variance and specify half width at half maximum HWHM",
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribScale",
          "normalized": "CauchyDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Distrib Scale",
          "signature": "CauchyDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#v:cauchyDistribScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauchy distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribution",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e CauchyDistribution",
          "type": "function"
        },
        "index": {
          "description": "Cauchy distribution",
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "cauchyDistribution",
          "normalized": "Double-\u003eDouble-\u003eCauchyDistribution",
          "package": "statistics",
          "partial": "Distribution",
          "signature": "Double-\u003eDouble-\u003eCauchyDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#v:cauchyDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "standardCauchy",
          "package": "statistics",
          "signature": "CauchyDistribution",
          "source": "src/Statistics-Distribution-CauchyLorentz.html#standardCauchy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution CauchyLorentz",
          "module": "Statistics.Distribution.CauchyLorentz",
          "name": "standardCauchy",
          "package": "statistics",
          "partial": "Cauchy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-CauchyLorentz.html#v:standardCauchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe chi-squared distribution. This is a continuous probability\n distribution of sum of squares of k independent standard normal\n distributions. It's commonly used in statistical tests\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "source": "src/Statistics-Distribution-ChiSquared.html",
          "type": "module"
        },
        "index": {
          "description": "The chi-squared distribution This is continuous probability distribution of sum of squares of independent standard normal distributions It commonly used in statistical tests",
          "hierarchy": "Statistics Distribution ChiSquared",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "partial": "Chi Squared",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-ChiSquared.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChi-squared distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "source": "src/Statistics-Distribution-ChiSquared.html#ChiSquared",
          "type": "data"
        },
        "index": {
          "description": "Chi-squared distribution",
          "hierarchy": "Statistics Distribution ChiSquared",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "partial": "Chi Squared",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-ChiSquared.html#t:ChiSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct chi-squared distribution. Number of degrees of freedom\n   must be positive.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "chiSquared",
          "package": "statistics",
          "signature": "Int -\u003e ChiSquared",
          "source": "src/Statistics-Distribution-ChiSquared.html#chiSquared",
          "type": "function"
        },
        "index": {
          "description": "Construct chi-squared distribution Number of degrees of freedom must be positive",
          "hierarchy": "Statistics Distribution ChiSquared",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "chiSquared",
          "normalized": "Int-\u003eChiSquared",
          "package": "statistics",
          "partial": "Squared",
          "signature": "Int-\u003eChiSquared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-ChiSquared.html#v:chiSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet number of degrees of freedom\n\u003c/p\u003e",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "chiSquaredNDF",
          "package": "statistics",
          "signature": "ChiSquared -\u003e Int",
          "source": "src/Statistics-Distribution-ChiSquared.html#chiSquaredNDF",
          "type": "function"
        },
        "index": {
          "description": "Get number of degrees of freedom",
          "hierarchy": "Statistics Distribution ChiSquared",
          "module": "Statistics.Distribution.ChiSquared",
          "name": "chiSquaredNDF",
          "normalized": "ChiSquared-\u003eInt",
          "package": "statistics",
          "partial": "Squared NDF",
          "signature": "ChiSquared-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-ChiSquared.html#v:chiSquaredNDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe exponential distribution.  This is the continunous probability\n distribution of the times between events in a poisson process, in\n which events occur continuously and independently at a constant\n average rate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Exponential",
          "name": "Exponential",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Exponential.html",
          "type": "module"
        },
        "index": {
          "description": "The exponential distribution This is the continunous probability distribution of the times between events in poisson process in which events occur continuously and independently at constant average rate",
          "hierarchy": "Statistics Distribution Exponential",
          "module": "Statistics.Distribution.Exponential",
          "name": "Exponential",
          "package": "statistics",
          "partial": "Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Exponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Exponential",
          "name": "ExponentialDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Exponential.html#ExponentialDistribution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Distribution Exponential",
          "module": "Statistics.Distribution.Exponential",
          "name": "ExponentialDistribution",
          "package": "statistics",
          "partial": "Exponential Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Exponential.html#t:ExponentialDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Exponential",
          "name": "edLambda",
          "package": "statistics",
          "signature": "ExponentialDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Exponential.html#edLambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Exponential",
          "module": "Statistics.Distribution.Exponential",
          "name": "edLambda",
          "normalized": "ExponentialDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Lambda",
          "signature": "ExponentialDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Exponential.html#v:edLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an exponential distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Exponential",
          "name": "exponential",
          "package": "statistics",
          "signature": "Double-\u003e ExponentialDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create an exponential distribution",
          "hierarchy": "Statistics Distribution Exponential",
          "module": "Statistics.Distribution.Exponential",
          "name": "exponential",
          "normalized": "Double-\u003eExponentialDistribution",
          "package": "statistics",
          "signature": "Double-\u003eExponentialDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Exponential.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate exponential distribution from sample. No tests are made to\n check whether it truly is exponential.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Exponential",
          "name": "exponentialFromSample",
          "package": "statistics",
          "signature": "Sample -\u003e ExponentialDistribution",
          "source": "src/Statistics-Distribution-Exponential.html#exponentialFromSample",
          "type": "function"
        },
        "index": {
          "description": "Create exponential distribution from sample No tests are made to check whether it truly is exponential",
          "hierarchy": "Statistics Distribution Exponential",
          "module": "Statistics.Distribution.Exponential",
          "name": "exponentialFromSample",
          "normalized": "Sample-\u003eExponentialDistribution",
          "package": "statistics",
          "partial": "From Sample",
          "signature": "Sample-\u003eExponentialDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Exponential.html#v:exponentialFromSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFisher F distribution\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.FDistribution",
          "name": "FDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-FDistribution.html",
          "type": "module"
        },
        "index": {
          "description": "Fisher distribution",
          "hierarchy": "Statistics Distribution FDistribution",
          "module": "Statistics.Distribution.FDistribution",
          "name": "FDistribution",
          "package": "statistics",
          "partial": "FDistribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-FDistribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eF distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.FDistribution",
          "name": "FDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-FDistribution.html#FDistribution",
          "type": "data"
        },
        "index": {
          "description": "distribution",
          "hierarchy": "Statistics Distribution FDistribution",
          "module": "Statistics.Distribution.FDistribution",
          "name": "FDistribution",
          "package": "statistics",
          "partial": "FDistribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-FDistribution.html#t:FDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistribution",
          "package": "statistics",
          "signature": "Int -\u003e Int -\u003e FDistribution",
          "source": "src/Statistics-Distribution-FDistribution.html#fDistribution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution FDistribution",
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistribution",
          "normalized": "Int-\u003eInt-\u003eFDistribution",
          "package": "statistics",
          "partial": "Distribution",
          "signature": "Int-\u003eInt-\u003eFDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-FDistribution.html#v:fDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistributionNDF1",
          "package": "statistics",
          "signature": "FDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-FDistribution.html#fDistributionNDF1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution FDistribution",
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistributionNDF1",
          "normalized": "FDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Distribution NDF",
          "signature": "FDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-FDistribution.html#v:fDistributionNDF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistributionNDF2",
          "package": "statistics",
          "signature": "FDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-FDistribution.html#fDistributionNDF2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution FDistribution",
          "module": "Statistics.Distribution.FDistribution",
          "name": "fDistributionNDF2",
          "normalized": "FDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Distribution NDF",
          "signature": "FDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-FDistribution.html#v:fDistributionNDF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe gamma distribution.  This is a continuous probability\n distribution with two parameters, \u003cem\u003ek\u003c/em\u003e and &#977;. If \u003cem\u003ek\u003c/em\u003e is\n integral, the distribution represents the sum of \u003cem\u003ek\u003c/em\u003e independent\n exponentially distributed random variables, each of which has a\n mean of &#977;.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "Gamma",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Gamma.html",
          "type": "module"
        },
        "index": {
          "description": "The gamma distribution This is continuous probability distribution with two parameters and If is integral the distribution represents the sum of independent exponentially distributed random variables each of which has mean of",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "Gamma",
          "package": "statistics",
          "partial": "Gamma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe gamma distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "GammaDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Gamma.html#GammaDistribution",
          "type": "data"
        },
        "index": {
          "description": "The gamma distribution",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "GammaDistribution",
          "package": "statistics",
          "partial": "Gamma Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#t:GammaDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate gamma distribution. Both shape and scale parameters must\n be positive.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "gammaDistr",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e GammaDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create gamma distribution Both shape and scale parameters must be positive",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "gammaDistr",
          "normalized": "Double-\u003eDouble-\u003eGammaDistribution",
          "package": "statistics",
          "partial": "Distr",
          "signature": "Double-\u003eDouble-\u003eGammaDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#v:gammaDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale parameter, &#977;.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "gdScale",
          "package": "statistics",
          "signature": "GammaDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Gamma.html#gdScale",
          "type": "function"
        },
        "index": {
          "description": "Scale parameter",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "gdScale",
          "normalized": "GammaDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Scale",
          "signature": "GammaDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#v:gdScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape parameter, \u003cem\u003ek\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "gdShape",
          "package": "statistics",
          "signature": "GammaDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Gamma.html#gdShape",
          "type": "function"
        },
        "index": {
          "description": "Shape parameter",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "gdShape",
          "normalized": "GammaDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Shape",
          "signature": "GammaDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#v:gdShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate gamma distribution. This constructor do not check whether\n   parameters are valid\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Gamma",
          "name": "improperGammaDistr",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e GammaDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create gamma distribution This constructor do not check whether parameters are valid",
          "hierarchy": "Statistics Distribution Gamma",
          "module": "Statistics.Distribution.Gamma",
          "name": "improperGammaDistr",
          "normalized": "Double-\u003eDouble-\u003eGammaDistribution",
          "package": "statistics",
          "partial": "Gamma Distr",
          "signature": "Double-\u003eDouble-\u003eGammaDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Gamma.html#v:improperGammaDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Geometric distribution. There are two variants of\n distribution. First is the probability distribution of the number\n of Bernoulli trials needed to get one success, supported on the set\n [1,2..] (\u003ccode\u003e\u003ca\u003eGeometricDistribution\u003c/a\u003e\u003c/code\u003e). Sometimes it's referred to as\n the \u003cem\u003eshifted\u003c/em\u003e geometric distribution to distinguish from another\n one.\n\u003c/p\u003e\u003cp\u003eSecond variant is probability distribution of the number of\n failures before first success, defined over the set [0,1..]\n (\u003ccode\u003e\u003ca\u003eGeometricDistribution0\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Geometric",
          "name": "Geometric",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Geometric.html",
          "type": "module"
        },
        "index": {
          "description": "The Geometric distribution There are two variants of distribution First is the probability distribution of the number of Bernoulli trials needed to get one success supported on the set GeometricDistribution Sometimes it referred to as the shifted geometric distribution to distinguish from another one Second variant is probability distribution of the number of failures before first success defined over the set GeometricDistribution0",
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "Geometric",
          "package": "statistics",
          "partial": "Geometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Geometric",
          "name": "GeometricDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Geometric.html#GeometricDistribution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "GeometricDistribution",
          "package": "statistics",
          "partial": "Geometric Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#t:GeometricDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Geometric",
          "name": "GeometricDistribution0",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Geometric.html#GeometricDistribution0",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "GeometricDistribution0",
          "package": "statistics",
          "partial": "Geometric Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#t:GeometricDistribution0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Geometric",
          "name": "gdSuccess",
          "package": "statistics",
          "signature": "GeometricDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Geometric.html#gdSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "gdSuccess",
          "normalized": "GeometricDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Success",
          "signature": "GeometricDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#v:gdSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Geometric",
          "name": "gdSuccess0",
          "package": "statistics",
          "signature": "GeometricDistribution0 -\u003e Double",
          "source": "src/Statistics-Distribution-Geometric.html#gdSuccess0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "gdSuccess0",
          "normalized": "GeometricDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Success",
          "signature": "GeometricDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#v:gdSuccess0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate geometric distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Geometric",
          "name": "geometric",
          "package": "statistics",
          "signature": "Double-\u003e GeometricDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create geometric distribution",
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "geometric",
          "normalized": "Double-\u003eGeometricDistribution",
          "package": "statistics",
          "signature": "Double-\u003eGeometricDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#v:geometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate geometric distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Geometric",
          "name": "geometric0",
          "package": "statistics",
          "signature": "Double-\u003e GeometricDistribution0",
          "type": "function"
        },
        "index": {
          "description": "Create geometric distribution",
          "hierarchy": "Statistics Distribution Geometric",
          "module": "Statistics.Distribution.Geometric",
          "name": "geometric0",
          "normalized": "Double-\u003eGeometricDistribution",
          "package": "statistics",
          "signature": "Double-\u003eGeometricDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Geometric.html#v:geometric0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Hypergeometric distribution.  This is the discrete probability\n distribution that measures the probability of \u003cem\u003ek\u003c/em\u003e successes in \u003cem\u003el\u003c/em\u003e\n trials, without replacement, from a finite population.\n\u003c/p\u003e\u003cp\u003eThe parameters of the distribution describe \u003cem\u003ek\u003c/em\u003e elements chosen\n from a population of \u003cem\u003el\u003c/em\u003e, with \u003cem\u003em\u003c/em\u003e elements of one type, and\n \u003cem\u003el\u003c/em\u003e-\u003cem\u003em\u003c/em\u003e of the other (all are positive integers).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "Hypergeometric",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Hypergeometric.html",
          "type": "module"
        },
        "index": {
          "description": "The Hypergeometric distribution This is the discrete probability distribution that measures the probability of successes in trials without replacement from finite population The parameters of the distribution describe elements chosen from population of with elements of one type and of the other all are positive integers",
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "Hypergeometric",
          "package": "statistics",
          "partial": "Hypergeometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "HypergeometricDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Hypergeometric.html#HypergeometricDistribution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "HypergeometricDistribution",
          "package": "statistics",
          "partial": "Hypergeometric Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#t:HypergeometricDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdK",
          "package": "statistics",
          "signature": "HypergeometricDistribution -\u003e Int",
          "source": "src/Statistics-Distribution-Hypergeometric.html#hdK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdK",
          "normalized": "HypergeometricDistribution-\u003eInt",
          "package": "statistics",
          "signature": "HypergeometricDistribution-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#v:hdK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdL",
          "package": "statistics",
          "signature": "HypergeometricDistribution -\u003e Int",
          "source": "src/Statistics-Distribution-Hypergeometric.html#hdL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdL",
          "normalized": "HypergeometricDistribution-\u003eInt",
          "package": "statistics",
          "signature": "HypergeometricDistribution-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#v:hdL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdM",
          "package": "statistics",
          "signature": "HypergeometricDistribution -\u003e Int",
          "source": "src/Statistics-Distribution-Hypergeometric.html#hdM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hdM",
          "normalized": "HypergeometricDistribution-\u003eInt",
          "package": "statistics",
          "signature": "HypergeometricDistribution-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#v:hdM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hypergeometric",
          "package": "statistics",
          "signature": "Int-\u003e Int-\u003e Int-\u003e HypergeometricDistribution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Hypergeometric",
          "module": "Statistics.Distribution.Hypergeometric",
          "name": "hypergeometric",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eHypergeometricDistribution",
          "package": "statistics",
          "signature": "Int-\u003eInt-\u003eInt-\u003eHypergeometricDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Hypergeometric.html#v:hypergeometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe normal distribution.  This is a continuous probability\n distribution that describes data that cluster around a mean.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Normal",
          "name": "Normal",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Normal.html",
          "type": "module"
        },
        "index": {
          "description": "The normal distribution This is continuous probability distribution that describes data that cluster around mean",
          "hierarchy": "Statistics Distribution Normal",
          "module": "Statistics.Distribution.Normal",
          "name": "Normal",
          "package": "statistics",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe normal distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Normal",
          "name": "NormalDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Normal.html#NormalDistribution",
          "type": "data"
        },
        "index": {
          "description": "The normal distribution",
          "hierarchy": "Statistics Distribution Normal",
          "module": "Statistics.Distribution.Normal",
          "name": "NormalDistribution",
          "package": "statistics",
          "partial": "Normal Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Normal.html#t:NormalDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate normal distribution from parameters.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: prior to 0.10 release second parameter was variance not\n standard deviation.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Normal",
          "name": "normalDistr",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e NormalDistribution",
          "type": "function"
        },
        "index": {
          "description": "Create normal distribution from parameters IMPORTANT prior to release second parameter was variance not standard deviation",
          "hierarchy": "Statistics Distribution Normal",
          "module": "Statistics.Distribution.Normal",
          "name": "normalDistr",
          "normalized": "Double-\u003eDouble-\u003eNormalDistribution",
          "package": "statistics",
          "partial": "Distr",
          "signature": "Double-\u003eDouble-\u003eNormalDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Normal.html#v:normalDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate distribution using parameters estimated from\n   sample. Variance is estimated using maximum likelihood method\n   (biased estimation).\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Normal",
          "name": "normalFromSample",
          "package": "statistics",
          "signature": "Sample -\u003e NormalDistribution",
          "source": "src/Statistics-Distribution-Normal.html#normalFromSample",
          "type": "function"
        },
        "index": {
          "description": "Create distribution using parameters estimated from sample Variance is estimated using maximum likelihood method biased estimation",
          "hierarchy": "Statistics Distribution Normal",
          "module": "Statistics.Distribution.Normal",
          "name": "normalFromSample",
          "normalized": "Sample-\u003eNormalDistribution",
          "package": "statistics",
          "partial": "From Sample",
          "signature": "Sample-\u003eNormalDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Normal.html#v:normalFromSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard normal distribution with mean equal to 0 and variance equal to 1\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Normal",
          "name": "standard",
          "package": "statistics",
          "signature": "NormalDistribution",
          "source": "src/Statistics-Distribution-Normal.html#standard",
          "type": "function"
        },
        "index": {
          "description": "Standard normal distribution with mean equal to and variance equal to",
          "hierarchy": "Statistics Distribution Normal",
          "module": "Statistics.Distribution.Normal",
          "name": "standard",
          "package": "statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Normal.html#v:standard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Poisson distribution.  This is the discrete probability\n distribution of a number of events occurring in a fixed interval if\n these events occur with a known average rate, and occur\n independently from each other within that interval.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Poisson",
          "name": "Poisson",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Poisson.html",
          "type": "module"
        },
        "index": {
          "description": "The Poisson distribution This is the discrete probability distribution of number of events occurring in fixed interval if these events occur with known average rate and occur independently from each other within that interval",
          "hierarchy": "Statistics Distribution Poisson",
          "module": "Statistics.Distribution.Poisson",
          "name": "Poisson",
          "package": "statistics",
          "partial": "Poisson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Poisson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Poisson",
          "name": "PoissonDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Poisson.html#PoissonDistribution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Distribution Poisson",
          "module": "Statistics.Distribution.Poisson",
          "name": "PoissonDistribution",
          "package": "statistics",
          "partial": "Poisson Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Poisson.html#t:PoissonDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate Poisson distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Poisson",
          "name": "poisson",
          "package": "statistics",
          "signature": "Double -\u003e PoissonDistribution",
          "source": "src/Statistics-Distribution-Poisson.html#poisson",
          "type": "function"
        },
        "index": {
          "description": "Create Poisson distribution",
          "hierarchy": "Statistics Distribution Poisson",
          "module": "Statistics.Distribution.Poisson",
          "name": "poisson",
          "normalized": "Double-\u003ePoissonDistribution",
          "package": "statistics",
          "signature": "Double-\u003ePoissonDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Poisson.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Poisson",
          "name": "poissonLambda",
          "package": "statistics",
          "signature": "PoissonDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Poisson.html#poissonLambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Poisson",
          "module": "Statistics.Distribution.Poisson",
          "name": "poissonLambda",
          "normalized": "PoissonDistribution-\u003eDouble",
          "package": "statistics",
          "partial": "Lambda",
          "signature": "PoissonDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Poisson.html#v:poissonLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStudent-T distribution\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.StudentT",
          "name": "StudentT",
          "package": "statistics",
          "source": "src/Statistics-Distribution-StudentT.html",
          "type": "module"
        },
        "index": {
          "description": "Student-T distribution",
          "hierarchy": "Statistics Distribution StudentT",
          "module": "Statistics.Distribution.StudentT",
          "name": "StudentT",
          "package": "statistics",
          "partial": "Student",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-StudentT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStudent-T distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.StudentT",
          "name": "StudentT",
          "package": "statistics",
          "source": "src/Statistics-Distribution-StudentT.html#StudentT",
          "type": "data"
        },
        "index": {
          "description": "Student-T distribution",
          "hierarchy": "Statistics Distribution StudentT",
          "module": "Statistics.Distribution.StudentT",
          "name": "StudentT",
          "package": "statistics",
          "partial": "Student",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-StudentT.html#t:StudentT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate Student-T distribution. Number of parameters must be positive.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.StudentT",
          "name": "studentT",
          "package": "statistics",
          "signature": "Double -\u003e StudentT",
          "source": "src/Statistics-Distribution-StudentT.html#studentT",
          "type": "function"
        },
        "index": {
          "description": "Create Student-T distribution Number of parameters must be positive",
          "hierarchy": "Statistics Distribution StudentT",
          "module": "Statistics.Distribution.StudentT",
          "name": "studentT",
          "normalized": "Double-\u003eStudentT",
          "package": "statistics",
          "signature": "Double-\u003eStudentT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-StudentT.html#v:studentT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unstandardized Student-t distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.StudentT",
          "name": "studentTUnstandardized",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e Double-\u003e LinearTransform StudentT",
          "type": "function"
        },
        "index": {
          "description": "Create an unstandardized Student-t distribution",
          "hierarchy": "Statistics Distribution StudentT",
          "module": "Statistics.Distribution.StudentT",
          "name": "studentTUnstandardized",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eLinearTransform StudentT",
          "package": "statistics",
          "partial": "TUnstandardized",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eLinearTransform StudentT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-StudentT.html#v:studentTUnstandardized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.StudentT",
          "name": "studentTndf",
          "package": "statistics",
          "signature": "StudentT -\u003e Double",
          "source": "src/Statistics-Distribution-StudentT.html#studentTndf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution StudentT",
          "module": "Statistics.Distribution.StudentT",
          "name": "studentTndf",
          "normalized": "StudentT-\u003eDouble",
          "package": "statistics",
          "partial": "Tndf",
          "signature": "StudentT-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-StudentT.html#v:studentTndf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransformations over distributions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "Transform",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Transformations over distributions",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "Transform",
          "package": "statistics",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear transformation applied to distribution.\n\u003c/p\u003e\u003cpre\u003e LinearTransform &#956; &#963; _ x' = &#956; + &#963;&#183;\u003c/pre\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "LinearTransform",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Transform.html#LinearTransform",
          "type": "data"
        },
        "index": {
          "description": "Linear transformation applied to distribution LinearTransform",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "LinearTransform",
          "package": "statistics",
          "partial": "Linear Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#t:LinearTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution.Transform",
          "name": "LinearTransform",
          "package": "statistics",
          "signature": "LinearTransform",
          "source": "src/Statistics-Distribution-Transform.html#LinearTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "LinearTransform",
          "package": "statistics",
          "partial": "Linear Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:LinearTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribution being transformed.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransDistr",
          "package": "statistics",
          "signature": "d",
          "source": "src/Statistics-Distribution-Transform.html#LinearTransform",
          "type": "function"
        },
        "index": {
          "description": "Distribution being transformed",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransDistr",
          "package": "statistics",
          "partial": "Trans Distr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:linTransDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet fixed point of linear transformation\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransFixedPoint",
          "package": "statistics",
          "signature": "LinearTransform d -\u003e Double",
          "source": "src/Statistics-Distribution-Transform.html#linTransFixedPoint",
          "type": "function"
        },
        "index": {
          "description": "Get fixed point of linear transformation",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransFixedPoint",
          "normalized": "LinearTransform a-\u003eDouble",
          "package": "statistics",
          "partial": "Trans Fixed Point",
          "signature": "LinearTransform d-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:linTransFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation parameter.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransLocation",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Distribution-Transform.html#LinearTransform",
          "type": "function"
        },
        "index": {
          "description": "Location parameter",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransLocation",
          "package": "statistics",
          "partial": "Trans Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:linTransLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale parameter.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransScale",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Distribution-Transform.html#LinearTransform",
          "type": "function"
        },
        "index": {
          "description": "Scale parameter",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "linTransScale",
          "package": "statistics",
          "partial": "Trans Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:linTransScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply linear transformation to distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Transform",
          "name": "scaleAround",
          "package": "statistics",
          "signature": "Double-\u003e Double-\u003e d-\u003e LinearTransform d",
          "type": "function"
        },
        "index": {
          "description": "Apply linear transformation to distribution",
          "hierarchy": "Statistics Distribution Transform",
          "module": "Statistics.Distribution.Transform",
          "name": "scaleAround",
          "normalized": "Double-\u003eDouble-\u003ea-\u003eLinearTransform a",
          "package": "statistics",
          "partial": "Around",
          "signature": "Double-\u003eDouble-\u003ed-\u003eLinearTransform d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Transform.html#v:scaleAround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariate distributed uniformly in the interval.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution.Uniform",
          "name": "Uniform",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Uniform.html",
          "type": "module"
        },
        "index": {
          "description": "Variate distributed uniformly in the interval",
          "hierarchy": "Statistics Distribution Uniform",
          "module": "Statistics.Distribution.Uniform",
          "name": "Uniform",
          "package": "statistics",
          "partial": "Uniform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Uniform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform distribution from A to B\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Uniform",
          "name": "UniformDistribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution-Uniform.html#UniformDistribution",
          "type": "data"
        },
        "index": {
          "description": "Uniform distribution from to",
          "hierarchy": "Statistics Distribution Uniform",
          "module": "Statistics.Distribution.Uniform",
          "name": "UniformDistribution",
          "package": "statistics",
          "partial": "Uniform Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Uniform.html#t:UniformDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow boundary of distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformA",
          "package": "statistics",
          "signature": "UniformDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Uniform.html#uniformA",
          "type": "function"
        },
        "index": {
          "description": "Low boundary of distribution",
          "hierarchy": "Statistics Distribution Uniform",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformA",
          "normalized": "UniformDistribution-\u003eDouble",
          "package": "statistics",
          "signature": "UniformDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Uniform.html#v:uniformA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper boundary of distribution\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformB",
          "package": "statistics",
          "signature": "UniformDistribution -\u003e Double",
          "source": "src/Statistics-Distribution-Uniform.html#uniformB",
          "type": "function"
        },
        "index": {
          "description": "Upper boundary of distribution",
          "hierarchy": "Statistics Distribution Uniform",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformB",
          "normalized": "UniformDistribution-\u003eDouble",
          "package": "statistics",
          "signature": "UniformDistribution-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Uniform.html#v:uniformB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate uniform distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformDistr",
          "package": "statistics",
          "signature": "Double -\u003e Double -\u003e UniformDistribution",
          "source": "src/Statistics-Distribution-Uniform.html#uniformDistr",
          "type": "function"
        },
        "index": {
          "description": "Create uniform distribution",
          "hierarchy": "Statistics Distribution Uniform",
          "module": "Statistics.Distribution.Uniform",
          "name": "uniformDistr",
          "normalized": "Double-\u003eDouble-\u003eUniformDistribution",
          "package": "statistics",
          "partial": "Distr",
          "signature": "Double-\u003eDouble-\u003eUniformDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution-Uniform.html#v:uniformDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes classes for probability distrubutions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Distribution",
          "name": "Distribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html",
          "type": "module"
        },
        "index": {
          "description": "Types classes for probability distrubutions",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "Distribution",
          "package": "statistics",
          "partial": "Distribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuous probability distributuion.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition is \u003ccode\u003e\u003ca\u003equantile\u003c/a\u003e\u003c/code\u003e and either \u003ccode\u003e\u003ca\u003edensity\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003elogDensity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "ContDistr",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#ContDistr",
          "type": "class"
        },
        "index": {
          "description": "Continuous probability distributuion Minimal complete definition is quantile and either density or logDensity",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "ContDistr",
          "package": "statistics",
          "partial": "Cont Distr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:ContDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate discrete random variates which have given\n   distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "ContGen",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#ContGen",
          "type": "class"
        },
        "index": {
          "description": "Generate discrete random variates which have given distribution",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "ContGen",
          "package": "statistics",
          "partial": "Cont Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:ContGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete probability distribution.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "DiscreteDistr",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#DiscreteDistr",
          "type": "class"
        },
        "index": {
          "description": "Discrete probability distribution",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "DiscreteDistr",
          "package": "statistics",
          "partial": "Discrete Distr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:DiscreteDistr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate discrete random variates which have given\n   distribution. \u003ccode\u003e\u003ca\u003eContGen\u003c/a\u003e\u003c/code\u003e is superclass because it's always possible\n   to generate real-valued variates from integer values\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "DiscreteGen",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#DiscreteGen",
          "type": "class"
        },
        "index": {
          "description": "Generate discrete random variates which have given distribution ContGen is superclass because it always possible to generate real-valued variates from integer values",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "DiscreteGen",
          "package": "statistics",
          "partial": "Discrete Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:DiscreteGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class common to all distributions. Only c.d.f. could be\n defined for both discrete and continous distributions.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "Distribution",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#Distribution",
          "type": "class"
        },
        "index": {
          "description": "Type class common to all distributions Only c.d.f could be defined for both discrete and continous distributions",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "Distribution",
          "package": "statistics",
          "partial": "Distribution",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with entropy, meaning Shannon\n   entropy in the case of a discrete distribution, or differential\n   entropy in the case of a continuous one.  If the distribution has\n   well-defined entropy for all valid parameter values then it\n   should be an instance of this type class.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "Entropy",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#Entropy",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with entropy meaning Shannon entropy in the case of discrete distribution or differential entropy in the case of continuous one If the distribution has well-defined entropy for all valid parameter values then it should be an instance of this type class",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "Entropy",
          "package": "statistics",
          "partial": "Entropy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:Entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with entropy, meaning Shannon entropy\n   in the case of a discrete distribution, or differential entropy in the\n   case of a continuous one.  \u003ccode\u003e\u003ca\u003emaybeEntropy\u003c/a\u003e\u003c/code\u003e should return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n   entropy is undefined for the chosen parameter values.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "MaybeEntropy",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#MaybeEntropy",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with entropy meaning Shannon entropy in the case of discrete distribution or differential entropy in the case of continuous one maybeEntropy should return Nothing if entropy is undefined for the chosen parameter values",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "MaybeEntropy",
          "package": "statistics",
          "partial": "Maybe Entropy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:MaybeEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with mean. \u003ccode\u003e\u003ca\u003emaybeMean\u003c/a\u003e\u003c/code\u003e should return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it's undefined for current value of data\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "MaybeMean",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#MaybeMean",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with mean maybeMean should return Nothing if it undefined for current value of data",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "MaybeMean",
          "package": "statistics",
          "partial": "Maybe Mean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:MaybeMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with variance. If variance is\n   undefined for some parameter values both \u003ccode\u003e\u003ca\u003emaybeVariance\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003emaybeStdDev\u003c/a\u003e\u003c/code\u003e should return Nothing.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition is \u003ccode\u003e\u003ca\u003emaybeVariance\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emaybeStdDev\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "MaybeVariance",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#MaybeVariance",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with variance If variance is undefined for some parameter values both maybeVariance and maybeStdDev should return Nothing Minimal complete definition is maybeVariance or maybeStdDev",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "MaybeVariance",
          "package": "statistics",
          "partial": "Maybe Variance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:MaybeVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with mean. If distribution have\n   finite mean for all valid values of parameters it should be\n   instance of this type class.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "Mean",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#Mean",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with mean If distribution have finite mean for all valid values of parameters it should be instance of this type class",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "Mean",
          "package": "statistics",
          "partial": "Mean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:Mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for distributions with variance. If distibution have\n   finite variance for all valid parameter values it should be\n   instance of this type class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition is \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estdDev\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "Variance",
          "package": "statistics",
          "source": "src/Statistics-Distribution.html#Variance",
          "type": "class"
        },
        "index": {
          "description": "Type class for distributions with variance If distibution have finite variance for all valid parameter values it should be instance of this type class Minimal complete definition is variance or stdDev",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "Variance",
          "package": "statistics",
          "partial": "Variance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#t:Variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne's complement of cumulative distibution:\n\u003c/p\u003e\u003cpre\u003e complCumulative d x = 1 - cumulative d x\n\u003c/pre\u003e\u003cp\u003eIt's useful when one is interested in P(\u003cem\u003eX\u003c/em\u003e\u003c\u003cem\u003ex\u003c/em\u003e) and\n expression on the right side begin to lose precision. This\n function have default implementation but implementors are\n encouraged to provide more precise implementation.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "complCumulative",
          "package": "statistics",
          "signature": "d -\u003e Double -\u003e Double",
          "source": "src/Statistics-Distribution.html#complCumulative",
          "type": "method"
        },
        "index": {
          "description": "One complement of cumulative distibution complCumulative cumulative It useful when one is interested in and expression on the right side begin to lose precision This function have default implementation but implementors are encouraged to provide more precise implementation",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "complCumulative",
          "normalized": "a-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "partial": "Cumulative",
          "signature": "d-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:complCumulative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCumulative distribution function.  The probability that a\n random variable \u003cem\u003eX\u003c/em\u003e is less or equal than \u003cem\u003ex\u003c/em\u003e,\n i.e. P(\u003cem\u003eX\u003c/em\u003e&#8804;\u003cem\u003ex\u003c/em\u003e). Cumulative should be defined for\n infinities as well:\n\u003c/p\u003e\u003cpre\u003e cumulative d +&#8734; = 1\n cumulative d -&#8734; = 0\n\u003c/pre\u003e",
          "module": "Statistics.Distribution",
          "name": "cumulative",
          "package": "statistics",
          "signature": "d -\u003e Double -\u003e Double",
          "source": "src/Statistics-Distribution.html#cumulative",
          "type": "method"
        },
        "index": {
          "description": "Cumulative distribution function The probability that random variable is less or equal than i.e Cumulative should be defined for infinities as well cumulative cumulative",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "cumulative",
          "normalized": "a-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:cumulative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability density function. Probability that random\n variable \u003cem\u003eX\u003c/em\u003e lies in the infinitesimal interval\n [\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ex+\u003c/em\u003e&#948;\u003cem\u003ex\u003c/em\u003e) equal to \u003cem\u003edensity(x)\u003c/em\u003e&#8901;&#948;\u003cem\u003ex\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "density",
          "package": "statistics",
          "signature": "d -\u003e Double -\u003e Double",
          "source": "src/Statistics-Distribution.html#density",
          "type": "method"
        },
        "index": {
          "description": "Probability density function Probability that random variable lies in the infinitesimal interval equal to density",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "density",
          "normalized": "a-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:density"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the entropy of a distribution, in nats.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "entropy",
          "package": "statistics",
          "signature": "d -\u003e Double",
          "source": "src/Statistics-Distribution.html#entropy",
          "type": "method"
        },
        "index": {
          "description": "Returns the entropy of distribution in nats",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "entropy",
          "normalized": "a-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate the value of \u003cem\u003eX\u003c/em\u003e for which P(\u003cem\u003ex\u003c/em\u003e\u003e\u003cem\u003eX\u003c/em\u003e)=\u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis method uses a combination of Newton-Raphson iteration and\n bisection with the given guess as a starting point.  The upper and\n lower bounds specify the interval in which the probability\n distribution reaches the value \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "findRoot",
          "package": "statistics",
          "signature": "d-\u003e Double-\u003e Double-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Approximate the value of for which This method uses combination of Newton-Raphson iteration and bisection with the given guess as starting point The upper and lower bounds specify the interval in which the probability distribution reaches the value",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "findRoot",
          "normalized": "a-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "partial": "Root",
          "signature": "d-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:findRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "genContVar",
          "package": "statistics",
          "signature": "d -\u003e Gen (PrimState m) -\u003e m Double",
          "source": "src/Statistics-Distribution.html#genContVar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "genContVar",
          "normalized": "a-\u003eGen(PrimState b)-\u003eb Double",
          "package": "statistics",
          "partial": "Cont Var",
          "signature": "d-\u003eGen(PrimState m)-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:genContVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate variates from continous distribution using inverse\n   transform rule.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "genContinous",
          "package": "statistics",
          "signature": "d -\u003e Gen (PrimState m) -\u003e m Double",
          "source": "src/Statistics-Distribution.html#genContinous",
          "type": "function"
        },
        "index": {
          "description": "Generate variates from continous distribution using inverse transform rule",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "genContinous",
          "normalized": "a-\u003eGen(PrimState b)-\u003eb Double",
          "package": "statistics",
          "partial": "Continous",
          "signature": "d-\u003eGen(PrimState m)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:genContinous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "genDiscreteVar",
          "package": "statistics",
          "signature": "d -\u003e Gen (PrimState m) -\u003e m Int",
          "source": "src/Statistics-Distribution.html#genDiscreteVar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "genDiscreteVar",
          "normalized": "a-\u003eGen(PrimState b)-\u003eb Int",
          "package": "statistics",
          "partial": "Discrete Var",
          "signature": "d-\u003eGen(PrimState m)-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:genDiscreteVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithm of density.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "logDensity",
          "package": "statistics",
          "signature": "d -\u003e Double -\u003e Double",
          "source": "src/Statistics-Distribution.html#logDensity",
          "type": "method"
        },
        "index": {
          "description": "Natural logarithm of density",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "logDensity",
          "normalized": "a-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "partial": "Density",
          "signature": "d-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:logDensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogarithm of probability of n-th outcome\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "logProbability",
          "package": "statistics",
          "signature": "d -\u003e Int -\u003e Double",
          "source": "src/Statistics-Distribution.html#logProbability",
          "type": "method"
        },
        "index": {
          "description": "Logarithm of probability of n-th outcome",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "logProbability",
          "normalized": "a-\u003eInt-\u003eDouble",
          "package": "statistics",
          "partial": "Probability",
          "signature": "d-\u003eInt-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:logProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the entropy of a distribution, in nats, if such is defined.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "maybeEntropy",
          "package": "statistics",
          "signature": "d -\u003e Maybe Double",
          "source": "src/Statistics-Distribution.html#maybeEntropy",
          "type": "method"
        },
        "index": {
          "description": "Returns the entropy of distribution in nats if such is defined",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "maybeEntropy",
          "normalized": "a-\u003eMaybe Double",
          "package": "statistics",
          "partial": "Entropy",
          "signature": "d-\u003eMaybe Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:maybeEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "maybeMean",
          "package": "statistics",
          "signature": "d -\u003e Maybe Double",
          "source": "src/Statistics-Distribution.html#maybeMean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "maybeMean",
          "normalized": "a-\u003eMaybe Double",
          "package": "statistics",
          "partial": "Mean",
          "signature": "d-\u003eMaybe Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:maybeMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "maybeStdDev",
          "package": "statistics",
          "signature": "d -\u003e Maybe Double",
          "source": "src/Statistics-Distribution.html#maybeStdDev",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "maybeStdDev",
          "normalized": "a-\u003eMaybe Double",
          "package": "statistics",
          "partial": "Std Dev",
          "signature": "d-\u003eMaybe Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:maybeStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "maybeVariance",
          "package": "statistics",
          "signature": "d -\u003e Maybe Double",
          "source": "src/Statistics-Distribution.html#maybeVariance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "maybeVariance",
          "normalized": "a-\u003eMaybe Double",
          "package": "statistics",
          "partial": "Variance",
          "signature": "d-\u003eMaybe Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:maybeVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "mean",
          "package": "statistics",
          "signature": "d -\u003e Double",
          "source": "src/Statistics-Distribution.html#mean",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "mean",
          "normalized": "a-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability of n-th outcome.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "probability",
          "package": "statistics",
          "signature": "d -\u003e Int -\u003e Double",
          "source": "src/Statistics-Distribution.html#probability",
          "type": "method"
        },
        "index": {
          "description": "Probability of n-th outcome",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "probability",
          "normalized": "a-\u003eInt-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eInt-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of the cumulative distribution function. The value\n \u003cem\u003ex\u003c/em\u003e for which P(\u003cem\u003eX\u003c/em\u003e&#8804;\u003cem\u003ex\u003c/em\u003e) = \u003cem\u003ep\u003c/em\u003e. If probability is outside\n of [0,1] range function should call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "quantile",
          "package": "statistics",
          "signature": "d -\u003e Double -\u003e Double",
          "source": "src/Statistics-Distribution.html#quantile",
          "type": "method"
        },
        "index": {
          "description": "Inverse of the cumulative distribution function The value for which If probability is outside of range function should call error",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "quantile",
          "normalized": "a-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:quantile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "stdDev",
          "package": "statistics",
          "signature": "d -\u003e Double",
          "source": "src/Statistics-Distribution.html#stdDev",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "stdDev",
          "normalized": "a-\u003eDouble",
          "package": "statistics",
          "partial": "Dev",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum probabilities in inclusive interval.\n\u003c/p\u003e",
          "module": "Statistics.Distribution",
          "name": "sumProbabilities",
          "package": "statistics",
          "signature": "d -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/Statistics-Distribution.html#sumProbabilities",
          "type": "function"
        },
        "index": {
          "description": "Sum probabilities in inclusive interval",
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "sumProbabilities",
          "normalized": "a-\u003eInt-\u003eInt-\u003eDouble",
          "package": "statistics",
          "partial": "Probabilities",
          "signature": "d-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:sumProbabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Distribution",
          "name": "variance",
          "package": "statistics",
          "signature": "d -\u003e Double",
          "source": "src/Statistics-Distribution.html#variance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Statistics Distribution",
          "module": "Statistics.Distribution",
          "name": "variance",
          "normalized": "a-\u003eDouble",
          "package": "statistics",
          "signature": "d-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Distribution.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Function",
          "name": "Function",
          "package": "statistics",
          "source": "src/Statistics-Function.html",
          "type": "module"
        },
        "index": {
          "description": "Useful functions",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "Function",
          "package": "statistics",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a vector with its indices.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "indexed",
          "package": "statistics",
          "signature": "v e -\u003e v (Int, e)",
          "source": "src/Statistics-Function.html#indexed",
          "type": "function"
        },
        "index": {
          "description": "Zip vector with its indices",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "indexed",
          "normalized": "a b-\u003ea(Int,b)",
          "package": "statistics",
          "signature": "v e-\u003ev(Int,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the indices of a vector.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "indices",
          "package": "statistics",
          "signature": "v a -\u003e v Int",
          "source": "src/Statistics-Function.html#indices",
          "type": "function"
        },
        "index": {
          "description": "Return the indices of vector",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "indices",
          "normalized": "a b-\u003ea Int",
          "package": "statistics",
          "signature": "v a-\u003ev Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the minimum and maximum of a vector in one pass.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "minMax",
          "package": "statistics",
          "signature": "v Double -\u003e (Double, Double)",
          "source": "src/Statistics-Function.html#minMax",
          "type": "function"
        },
        "index": {
          "description": "Compute the minimum and maximum of vector in one pass",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "minMax",
          "normalized": "a Double-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Max",
          "signature": "v Double-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:minMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the next highest power of two for a\n non-negative integer.  If the given value is already a power of\n two, it is returned unchanged.  If negative, zero is returned.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "nextHighestPowerOfTwo",
          "package": "statistics",
          "signature": "Int -\u003e Int",
          "source": "src/Statistics-Function.html#nextHighestPowerOfTwo",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the next highest power of two for non-negative integer If the given value is already power of two it is returned unchanged If negative zero is returned",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "nextHighestPowerOfTwo",
          "normalized": "Int-\u003eInt",
          "package": "statistics",
          "partial": "Highest Power Of Two",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:nextHighestPowerOfTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartially sort a vector, such that the least \u003cem\u003ek\u003c/em\u003e elements will be\n at the front.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "partialSort",
          "package": "statistics",
          "signature": "Int-\u003e v e-\u003e v e",
          "type": "function"
        },
        "index": {
          "description": "Partially sort vector such that the least elements will be at the front",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "partialSort",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "statistics",
          "partial": "Sort",
          "signature": "Int-\u003ev e-\u003ev e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:partialSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a vector.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "sort",
          "package": "statistics",
          "signature": "v e -\u003e v e",
          "source": "src/Statistics-Function.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sort vector",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "sort",
          "normalized": "a b-\u003ea b",
          "package": "statistics",
          "signature": "v e-\u003ev e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a vector using a custom ordering.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "sortBy",
          "package": "statistics",
          "signature": "Comparison e -\u003e v e -\u003e v e",
          "source": "src/Statistics-Function.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "Sort vector using custom ordering",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "sortBy",
          "normalized": "Comparison a-\u003eb a-\u003eb a",
          "package": "statistics",
          "partial": "By",
          "signature": "Comparison e-\u003ev e-\u003ev e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e values for approximate equality, using\n Dawson's method.\n\u003c/p\u003e\u003cp\u003eThe required accuracy is specified in ULPs (units of least\n precision).  If the two numbers differ by the given number of ULPs\n or less, this function returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Function",
          "name": "within",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two Double values for approximate equality using Dawson method The required accuracy is specified in ULPs units of least precision If the two numbers differ by the given number of ULPs or less this function returns True",
          "hierarchy": "Statistics Function",
          "module": "Statistics.Function",
          "name": "within",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eBool",
          "package": "statistics",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Function.html#v:within"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell functions for finding the roots of mathematical functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "RootFinding",
          "package": "statistics",
          "source": "src/Statistics-Math-RootFinding.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell functions for finding the roots of mathematical functions",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "RootFinding",
          "package": "statistics",
          "partial": "Root Finding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of searching for a root of a mathematical function.\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "Root",
          "package": "statistics",
          "source": "src/Statistics-Math-RootFinding.html#Root",
          "type": "data"
        },
        "index": {
          "description": "The result of searching for root of mathematical function",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "Root",
          "package": "statistics",
          "partial": "Root",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#t:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function does not have opposite signs when\n evaluated at the lower and upper bounds of the search.\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "NotBracketed",
          "package": "statistics",
          "signature": "NotBracketed",
          "source": "src/Statistics-Math-RootFinding.html#Root",
          "type": "function"
        },
        "index": {
          "description": "The function does not have opposite signs when evaluated at the lower and upper bounds of the search",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "NotBracketed",
          "package": "statistics",
          "partial": "Not Bracketed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#v:NotBracketed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA root was successfully found.\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "Root",
          "package": "statistics",
          "signature": "Root a",
          "source": "src/Statistics-Math-RootFinding.html#Root",
          "type": "function"
        },
        "index": {
          "description": "root was successfully found",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "Root",
          "package": "statistics",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#v:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe search failed to converge to within the given\n error tolerance after the given number of iterations.\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "SearchFailed",
          "package": "statistics",
          "signature": "SearchFailed",
          "source": "src/Statistics-Math-RootFinding.html#Root",
          "type": "function"
        },
        "index": {
          "description": "The search failed to converge to within the given error tolerance after the given number of iterations",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "SearchFailed",
          "package": "statistics",
          "partial": "Search Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#v:SearchFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns either the result of a search for a root, or the default\n value if the search failed.\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "fromRoot",
          "package": "statistics",
          "signature": "a-\u003e Root a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Returns either the result of search for root or the default value if the search failed",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "fromRoot",
          "normalized": "a-\u003eRoot a-\u003ea",
          "package": "statistics",
          "partial": "Root",
          "signature": "a-\u003eRoot a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#v:fromRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the method of Ridders to compute a root of a function.\n\u003c/p\u003e\u003cp\u003eThe function must have opposite signs when evaluated at the lower\n and upper bounds of the search (i.e. the root must be bracketed).\n\u003c/p\u003e",
          "module": "Statistics.Math.RootFinding",
          "name": "ridders",
          "package": "statistics",
          "signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e Root Double",
          "type": "function"
        },
        "index": {
          "description": "Use the method of Ridders to compute root of function The function must have opposite signs when evaluated at the lower and upper bounds of the search i.e the root must be bracketed",
          "hierarchy": "Statistics Math RootFinding",
          "module": "Statistics.Math.RootFinding",
          "name": "ridders",
          "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "package": "statistics",
          "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math-RootFinding.html#v:ridders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use package math-function\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eMathematical functions for statistics.\n\u003c/p\u003e\u003cp\u003eDEPRECATED. Use package math-functions instead. This module is just\n reexports functions from \u003ccode\u003e\u003ca\u003eSpecFunctions\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eExtra\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChebyshev\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Math",
          "name": "Math",
          "package": "statistics",
          "source": "src/Statistics-Math.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use package math-function Mathematical functions for statistics DEPRECATED Use package math-functions instead This module is just reexports functions from SpecFunctions Extra and Chebyshev",
          "hierarchy": "Statistics Math",
          "module": "Statistics.Math",
          "name": "Math",
          "package": "statistics",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for approximating quantiles, i.e. points taken at regular\n intervals from the cumulative distribution function of a random\n variable.\n\u003c/p\u003e\u003cp\u003eThe number of quantiles is described below by the variable \u003cem\u003eq\u003c/em\u003e, so\n with \u003cem\u003eq\u003c/em\u003e=4, a 4-quantile (also known as a \u003cem\u003equartile\u003c/em\u003e) has 4\n intervals, and contains 5 points.  The parameter \u003cem\u003ek\u003c/em\u003e describes the\n desired point, where 0 &#8804; \u003cem\u003ek\u003c/em\u003e &#8804; \u003cem\u003eq\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Quantile",
          "name": "Quantile",
          "package": "statistics",
          "source": "src/Statistics-Quantile.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for approximating quantiles i.e points taken at regular intervals from the cumulative distribution function of random variable The number of quantiles is described below by the variable so with quantile also known as quartile has intervals and contains points The parameter describes the desired point where",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "Quantile",
          "package": "statistics",
          "partial": "Quantile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e to the \u003ccode\u003e\u003ca\u003econtinuousBy\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "ContParam",
          "package": "statistics",
          "source": "src/Statistics-Quantile.html#ContParam",
          "type": "data"
        },
        "index": {
          "description": "Parameters and to the continuousBy function",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "ContParam",
          "package": "statistics",
          "partial": "Cont Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#t:ContParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Quantile",
          "name": "ContParam",
          "package": "statistics",
          "signature": "ContParam !Double !Double",
          "source": "src/Statistics-Quantile.html#ContParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "ContParam",
          "package": "statistics",
          "partial": "Cont Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:ContParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalifornia Department of Public Works definition, \u003cem\u003ea\u003c/em\u003e=0, \u003cem\u003eb\u003c/em\u003e=1.\n Gives a linear interpolation of the empirical CDF.  This\n corresponds to method 4 in R and Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "cadpw",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#cadpw",
          "type": "function"
        },
        "index": {
          "description": "California Department of Public Works definition Gives linear interpolation of the empirical CDF This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "cadpw",
          "package": "statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:cadpw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(\u003cem\u003en\u003c/em\u003e log \u003cem\u003en\u003c/em\u003e). Estimate the \u003cem\u003ek\u003c/em\u003eth \u003cem\u003eq\u003c/em\u003e-quantile of a sample \u003cem\u003ex\u003c/em\u003e,\n using the continuous sample method with the given parameters.  This\n is the method used by most statistical software, such as R,\n Mathematica, SPSS, and S.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "continuousBy",
          "package": "statistics",
          "signature": "ContParam-\u003e Int-\u003e Int-\u003e v Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "log Estimate the th quantile of sample using the continuous sample method with the given parameters This is the method used by most statistical software such as Mathematica SPSS and",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "continuousBy",
          "normalized": "ContParam-\u003eInt-\u003eInt-\u003ea Double-\u003eDouble",
          "package": "statistics",
          "partial": "By",
          "signature": "ContParam-\u003eInt-\u003eInt-\u003ev Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:continuousBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHazen's definition, \u003cem\u003ea\u003c/em\u003e=0.5, \u003cem\u003eb\u003c/em\u003e=0.5.  This is claimed to be\n popular among hydrologists.  This corresponds to method 5 in R and\n Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "hazen",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#hazen",
          "type": "function"
        },
        "index": {
          "description": "Hazen definition This is claimed to be popular among hydrologists This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "hazen",
          "package": "statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:hazen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedian unbiased definition, \u003cem\u003ea\u003c/em\u003e=1/3, \u003cem\u003eb\u003c/em\u003e=1/3. The resulting\n quantile estimates are approximately median unbiased regardless of\n the distribution of \u003cem\u003ex\u003c/em\u003e.  This corresponds to method 8 in R and\n Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "medianUnbiased",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#medianUnbiased",
          "type": "function"
        },
        "index": {
          "description": "Median unbiased definition The resulting quantile estimates are approximately median unbiased regardless of the distribution of This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "medianUnbiased",
          "package": "statistics",
          "partial": "Unbiased",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:medianUnbiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(\u003cem\u003en\u003c/em\u003e log \u003cem\u003en\u003c/em\u003e). Estimate the range between \u003cem\u003eq\u003c/em\u003e-quantiles 1 and\n \u003cem\u003eq\u003c/em\u003e-1 of a sample \u003cem\u003ex\u003c/em\u003e, using the continuous sample method with the\n given parameters.\n\u003c/p\u003e\u003cp\u003eFor instance, the interquartile range (IQR) can be estimated as\n follows:\n\u003c/p\u003e\u003cpre\u003e midspread medianUnbiased 4 (U.fromList [1,1,2,2,3])\n ==\u003e 1.333333\n\u003c/pre\u003e",
          "module": "Statistics.Quantile",
          "name": "midspread",
          "package": "statistics",
          "signature": "ContParam-\u003e Int-\u003e v Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "log Estimate the range between quantiles and of sample using the continuous sample method with the given parameters For instance the interquartile range IQR can be estimated as follows midspread medianUnbiased U.fromList",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "midspread",
          "normalized": "ContParam-\u003eInt-\u003ea Double-\u003eDouble",
          "package": "statistics",
          "signature": "ContParam-\u003eInt-\u003ev Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:midspread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal unbiased definition, \u003cem\u003ea\u003c/em\u003e=3/8, \u003cem\u003eb\u003c/em\u003e=3/8.  An approximately\n unbiased estimate if the empirical distribution approximates the\n normal distribution.  This corresponds to method 9 in R and\n Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "normalUnbiased",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#normalUnbiased",
          "type": "function"
        },
        "index": {
          "description": "Normal unbiased definition An approximately unbiased estimate if the empirical distribution approximates the normal distribution This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "normalUnbiased",
          "package": "statistics",
          "partial": "Unbiased",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:normalUnbiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition used by the S statistics application, with \u003cem\u003ea\u003c/em\u003e=1,\n \u003cem\u003eb\u003c/em\u003e=1.  The interpolation points divide the sample range into \u003ccode\u003en-1\u003c/code\u003e\n intervals.  This corresponds to method 7 in R and Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "s",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#s",
          "type": "function"
        },
        "index": {
          "description": "Definition used by the statistics application with The interpolation points divide the sample range into n-1 intervals This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "s",
          "package": "statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition used by the SPSS statistics application, with \u003cem\u003ea\u003c/em\u003e=0,\n \u003cem\u003eb\u003c/em\u003e=0 (also known as Weibull's definition).  This corresponds to\n method 6 in R and Mathematica.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "spss",
          "package": "statistics",
          "signature": "ContParam",
          "source": "src/Statistics-Quantile.html#spss",
          "type": "function"
        },
        "index": {
          "description": "Definition used by the SPSS statistics application with also known as Weibull definition This corresponds to method in and Mathematica",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "spss",
          "package": "statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:spss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(\u003cem\u003en\u003c/em\u003e log \u003cem\u003en\u003c/em\u003e). Estimate the \u003cem\u003ek\u003c/em\u003eth \u003cem\u003eq\u003c/em\u003e-quantile of a sample,\n using the weighted average method.\n\u003c/p\u003e",
          "module": "Statistics.Quantile",
          "name": "weightedAvg",
          "package": "statistics",
          "signature": "Int-\u003e Int-\u003e v Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "log Estimate the th quantile of sample using the weighted average method",
          "hierarchy": "Statistics Quantile",
          "module": "Statistics.Quantile",
          "name": "weightedAvg",
          "normalized": "Int-\u003eInt-\u003ea Double-\u003eDouble",
          "package": "statistics",
          "partial": "Avg",
          "signature": "Int-\u003eInt-\u003ev Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Quantile.html#v:weightedAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe bootstrap method for statistical inference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Bootstrap",
          "package": "statistics",
          "source": "src/Statistics-Resampling-Bootstrap.html",
          "type": "module"
        },
        "index": {
          "description": "The bootstrap method for statistical inference",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Bootstrap",
          "package": "statistics",
          "partial": "Bootstrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point and interval estimate computed via an \u003ccode\u003e\u003ca\u003eEstimator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Estimate",
          "package": "statistics",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "data"
        },
        "index": {
          "description": "point and interval estimate computed via an Estimator",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Estimate",
          "package": "statistics",
          "partial": "Estimate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#t:Estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Estimate",
          "package": "statistics",
          "signature": "Estimate",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "Estimate",
          "package": "statistics",
          "partial": "Estimate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:Estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBias-corrected accelerated (BCA) bootstrap. This adjusts for both\n bias and skewness in the resampled distribution.\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "bootstrapBCA",
          "package": "statistics",
          "signature": "Double-\u003e Sample-\u003e [Estimator]-\u003e [Resample]-\u003e [Estimate]",
          "type": "function"
        },
        "index": {
          "description": "Bias-corrected accelerated BCA bootstrap This adjusts for both bias and skewness in the resampled distribution",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "bootstrapBCA",
          "normalized": "Double-\u003eSample-\u003e[Estimator]-\u003e[Resample]-\u003e[Estimate]",
          "package": "statistics",
          "partial": "BCA",
          "signature": "Double-\u003eSample-\u003e[Estimator]-\u003e[Resample]-\u003e[Estimate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:bootstrapBCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfidence level of the confidence intervals.\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estConfidenceLevel",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "function"
        },
        "index": {
          "description": "Confidence level of the confidence intervals",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estConfidenceLevel",
          "package": "statistics",
          "partial": "Confidence Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:estConfidenceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower bound of the estimate interval (i.e. the lower bound of\n the confidence interval).\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estLowerBound",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "function"
        },
        "index": {
          "description": "Lower bound of the estimate interval i.e the lower bound of the confidence interval",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estLowerBound",
          "package": "statistics",
          "partial": "Lower Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:estLowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint estimate.\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estPoint",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "function"
        },
        "index": {
          "description": "Point estimate",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estPoint",
          "package": "statistics",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:estPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper bound of the estimate interval (i.e. the upper bound of\n the confidence interval).\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estUpperBound",
          "package": "statistics",
          "signature": "Double",
          "source": "src/Statistics-Resampling-Bootstrap.html#Estimate",
          "type": "function"
        },
        "index": {
          "description": "Upper bound of the estimate interval i.e the upper bound of the confidence interval",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "estUpperBound",
          "package": "statistics",
          "partial": "Upper Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:estUpperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply the point, lower bound, and upper bound in an \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\n by the given value.\n\u003c/p\u003e",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "scale",
          "package": "statistics",
          "signature": "Double-\u003e Estimate-\u003e Estimate",
          "type": "function"
        },
        "index": {
          "description": "Multiply the point lower bound and upper bound in an Estimate by the given value",
          "hierarchy": "Statistics Resampling Bootstrap",
          "module": "Statistics.Resampling.Bootstrap",
          "name": "scale",
          "normalized": "Double-\u003eEstimate-\u003eEstimate",
          "package": "statistics",
          "signature": "Double-\u003eEstimate-\u003eEstimate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling-Bootstrap.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eResampling statistics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Resampling",
          "name": "Resampling",
          "package": "statistics",
          "source": "src/Statistics-Resampling.html",
          "type": "module"
        },
        "index": {
          "description": "Resampling statistics",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "Resampling",
          "package": "statistics",
          "partial": "Resampling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA resample drawn randomly, with replacement, from a set of data\n points.  Distinct from a normal array to make it harder for your\n humble author's brain to go wrong.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "Resample",
          "package": "statistics",
          "source": "src/Statistics-Resampling.html#Resample",
          "type": "newtype"
        },
        "index": {
          "description": "resample drawn randomly with replacement from set of data points Distinct from normal array to make it harder for your humble author brain to go wrong",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "Resample",
          "package": "statistics",
          "partial": "Resample",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#t:Resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Resampling",
          "name": "Resample",
          "package": "statistics",
          "signature": "Resample",
          "source": "src/Statistics-Resampling.html#Resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "Resample",
          "package": "statistics",
          "partial": "Resample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:Resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eEstimator\u003c/a\u003e\u003c/code\u003e over a sample.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "estimate",
          "package": "statistics",
          "signature": "Estimator -\u003e Sample -\u003e Double",
          "source": "src/Statistics-Resampling.html#estimate",
          "type": "function"
        },
        "index": {
          "description": "Run an Estimator over sample",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "estimate",
          "normalized": "Estimator-\u003eSample-\u003eDouble",
          "package": "statistics",
          "signature": "Estimator-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Resampling",
          "name": "fromResample",
          "package": "statistics",
          "signature": "Vector Double",
          "source": "src/Statistics-Resampling.html#Resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "fromResample",
          "package": "statistics",
          "partial": "Resample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:fromResample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n) or O(n^2)\u003c/em\u003e Compute a statistical estimate repeatedly over a\n sample, each time omitting a successive element.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "jackknife",
          "package": "statistics",
          "signature": "Estimator -\u003e Sample -\u003e Vector Double",
          "source": "src/Statistics-Resampling.html#jackknife",
          "type": "function"
        },
        "index": {
          "description": "or Compute statistical estimate repeatedly over sample each time omitting successive element",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "jackknife",
          "normalized": "Estimator-\u003eSample-\u003eVector Double",
          "package": "statistics",
          "signature": "Estimator-\u003eSample-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:jackknife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the jackknife mean of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "jackknifeMean",
          "package": "statistics",
          "signature": "Sample -\u003e Vector Double",
          "source": "src/Statistics-Resampling.html#jackknifeMean",
          "type": "function"
        },
        "index": {
          "description": "Compute the jackknife mean of sample",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "jackknifeMean",
          "normalized": "Sample-\u003eVector Double",
          "package": "statistics",
          "partial": "Mean",
          "signature": "Sample-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:jackknifeMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the jackknife standard deviation of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "jackknifeStdDev",
          "package": "statistics",
          "signature": "Sample -\u003e Vector Double",
          "source": "src/Statistics-Resampling.html#jackknifeStdDev",
          "type": "function"
        },
        "index": {
          "description": "Compute the jackknife standard deviation of sample",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "jackknifeStdDev",
          "normalized": "Sample-\u003eVector Double",
          "package": "statistics",
          "partial": "Std Dev",
          "signature": "Sample-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:jackknifeStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the jackknife variance of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "jackknifeVariance",
          "package": "statistics",
          "signature": "Sample -\u003e Vector Double",
          "source": "src/Statistics-Resampling.html#jackknifeVariance",
          "type": "function"
        },
        "index": {
          "description": "Compute the jackknife variance of sample",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "jackknifeVariance",
          "normalized": "Sample-\u003eVector Double",
          "package": "statistics",
          "partial": "Variance",
          "signature": "Sample-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:jackknifeVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the unbiased jackknife variance of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "jackknifeVarianceUnb",
          "package": "statistics",
          "signature": "Sample -\u003e Vector Double",
          "source": "src/Statistics-Resampling.html#jackknifeVarianceUnb",
          "type": "function"
        },
        "index": {
          "description": "Compute the unbiased jackknife variance of sample",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "jackknifeVarianceUnb",
          "normalized": "Sample-\u003eVector Double",
          "package": "statistics",
          "partial": "Variance Unb",
          "signature": "Sample-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:jackknifeVarianceUnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(e*r*s)\u003c/em\u003e Resample a data set repeatedly, with replacement,\n computing each estimate over the resampled data.\n\u003c/p\u003e\u003cp\u003eThis function is expensive; it has to do work proportional to\n \u003cem\u003ee*r*s\u003c/em\u003e, where \u003cem\u003ee\u003c/em\u003e is the number of estimation functions, \u003cem\u003er\u003c/em\u003e is\n the number of resamples to compute, and \u003cem\u003es\u003c/em\u003e is the number of\n original samples.\n\u003c/p\u003e\u003cp\u003eTo improve performance, this function will make use of all\n available CPUs.  At least with GHC 7.0, parallel performance seems\n best if the parallel garbage collector is disabled (RTS option\n \u003ccode\u003e-qg\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Statistics.Resampling",
          "name": "resample",
          "package": "statistics",
          "signature": "Gen (PrimState IO)-\u003e [Estimator]-\u003e Int-\u003e Sample-\u003e IO [Resample]",
          "type": "function"
        },
        "index": {
          "description": "Resample data set repeatedly with replacement computing each estimate over the resampled data This function is expensive it has to do work proportional to where is the number of estimation functions is the number of resamples to compute and is the number of original samples To improve performance this function will make use of all available CPUs At least with GHC parallel performance seems best if the parallel garbage collector is disabled RTS option qg",
          "hierarchy": "Statistics Resampling",
          "module": "Statistics.Resampling",
          "name": "resample",
          "normalized": "Gen(PrimState IO)-\u003e[Estimator]-\u003eInt-\u003eSample-\u003eIO[Resample]",
          "package": "statistics",
          "signature": "Gen(PrimState IO)-\u003e[Estimator]-\u003eInt-\u003eSample-\u003eIO[Resample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Resampling.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for computing histograms of sample data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Sample.Histogram",
          "name": "Histogram",
          "package": "statistics",
          "source": "src/Statistics-Sample-Histogram.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for computing histograms of sample data",
          "hierarchy": "Statistics Sample Histogram",
          "module": "Statistics.Sample.Histogram",
          "name": "Histogram",
          "package": "statistics",
          "partial": "Histogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Histogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute a histogram over a data set.\n\u003c/p\u003e\u003cp\u003eThe result consists of a pair of vectors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The lower bound of each interval.\n\u003c/li\u003e\u003cli\u003e The number of samples within the interval.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eInterval (bin) sizes are uniform, and the upper and lower bounds\n are chosen automatically using the \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e function.  To specify\n these parameters directly, use the \u003ccode\u003e\u003ca\u003ehistogram_\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Histogram",
          "name": "histogram",
          "package": "statistics",
          "signature": "Int-\u003e v0 Double-\u003e (v1 Double, v1 b)",
          "type": "function"
        },
        "index": {
          "description": "Compute histogram over data set The result consists of pair of vectors The lower bound of each interval The number of samples within the interval Interval bin sizes are uniform and the upper and lower bounds are chosen automatically using the range function To specify these parameters directly use the histogram function",
          "hierarchy": "Statistics Sample Histogram",
          "module": "Statistics.Sample.Histogram",
          "name": "histogram",
          "normalized": "Int-\u003ea Double-\u003e(a Double,a b)",
          "package": "statistics",
          "signature": "Int-\u003ev Double-\u003e(v Double,v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Histogram.html#v:histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute a histogram over a data set.\n\u003c/p\u003e\u003cp\u003eInterval (bin) sizes are uniform, based on the supplied upper\n and lower bounds.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Histogram",
          "name": "histogram_",
          "package": "statistics",
          "signature": "Int-\u003e a-\u003e a-\u003e v0 a-\u003e v1 b",
          "type": "function"
        },
        "index": {
          "description": "Compute histogram over data set Interval bin sizes are uniform based on the supplied upper and lower bounds",
          "hierarchy": "Statistics Sample Histogram",
          "module": "Statistics.Sample.Histogram",
          "name": "histogram_",
          "normalized": "Int-\u003ea-\u003ea-\u003eb a-\u003eb c",
          "package": "statistics",
          "signature": "Int-\u003ea-\u003ea-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Histogram.html#v:histogram_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute decent defaults for the lower and upper bounds of\n a histogram, based on the desired number of bins and the range of\n the sample data.\n\u003c/p\u003e\u003cp\u003eThe upper and lower bounds used are \u003ccode\u003e(lo-d, hi+d)\u003c/code\u003e, where\n\u003c/p\u003e\u003cpre\u003ed = (maximum sample - minimum sample) / ((bins - 1) * 2)\u003c/pre\u003e\u003cp\u003eIf all elements in the sample are the same and equal to \u003ccode\u003ex\u003c/code\u003e range\n is set to \u003ccode\u003e(x - |x|\u003cem\u003e10, x + |x|\u003c/em\u003e10)\u003c/code\u003e. And if \u003ccode\u003ex\u003c/code\u003e is equal to 0 range\n is set to \u003ccode\u003e(-1,1)\u003c/code\u003e. This is needed to avoid creating histogram with\n zero bin size.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Histogram",
          "name": "range",
          "package": "statistics",
          "signature": "Int-\u003e v Double-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Compute decent defaults for the lower and upper bounds of histogram based on the desired number of bins and the range of the sample data The upper and lower bounds used are lo-d hi where maximum sample minimum sample bins If all elements in the sample are the same and equal to range is set to And if is equal to range is set to This is needed to avoid creating histogram with zero bin size",
          "hierarchy": "Statistics Sample Histogram",
          "module": "Statistics.Sample.Histogram",
          "name": "range",
          "normalized": "Int-\u003ea Double-\u003e(Double,Double)",
          "package": "statistics",
          "signature": "Int-\u003ev Double-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Histogram.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Statistics.Sample.KernelDensity instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eKernel density estimation code, providing non-parametric ways to\n estimate the probability density function of a sample.\n\u003c/p\u003e\u003cp\u003eThe techniques used by functions in this module are relatively\n fast, but they generally give inferior results to the KDE function\n in the main \u003ccode\u003e\u003ca\u003eKernelDensity\u003c/a\u003e\u003c/code\u003e module (due to the\n oversmoothing documented for \u003ccode\u003e\u003ca\u003ebandwidth\u003c/a\u003e\u003c/code\u003e below).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Simple",
          "package": "statistics",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Statistics.Sample.KernelDensity instead Kernel density estimation code providing non-parametric ways to estimate the probability density function of sample The techniques used by functions in this module are relatively fast but they generally give inferior results to the KDE function in the main KernelDensity module due to the oversmoothing documented for bandwidth below",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Simple",
          "package": "statistics",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe width of the convolution kernel used.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Bandwidth",
          "package": "statistics",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#Bandwidth",
          "type": "type"
        },
        "index": {
          "description": "The width of the convolution kernel used",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Bandwidth",
          "package": "statistics",
          "partial": "Bandwidth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#t:Bandwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe convolution kernel.  Its parameters are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Scaling factor, 1/\u003cem\u003enh\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e Bandwidth, \u003cem\u003eh\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e A point at which to sample the input, \u003cem\u003ep\u003c/em\u003e\n\u003c/li\u003e\u003cli\u003e One sample value, \u003cem\u003ev\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Kernel",
          "package": "statistics",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#Kernel",
          "type": "type"
        },
        "index": {
          "description": "The convolution kernel Its parameters are as follows Scaling factor nh Bandwidth point at which to sample the input One sample value",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Kernel",
          "package": "statistics",
          "partial": "Kernel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoints from the range of a \u003ccode\u003eSample\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Points",
          "package": "statistics",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#Points",
          "type": "newtype"
        },
        "index": {
          "description": "Points from the range of Sample",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Points",
          "package": "statistics",
          "partial": "Points",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#t:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Points",
          "package": "statistics",
          "signature": "Points",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#Points",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "Points",
          "package": "statistics",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the optimal bandwidth from the observed data for the\n given kernel.\n\u003c/p\u003e\u003cp\u003eThis function uses an estimate based on the standard deviation of a\n sample (due to Deheuvels), which performs reasonably well for\n unimodal distributions but leads to oversmoothing for more complex\n ones.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "bandwidth",
          "package": "statistics",
          "signature": "(Double -\u003e Bandwidth) -\u003e v Double -\u003e Bandwidth",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#bandwidth",
          "type": "function"
        },
        "index": {
          "description": "Compute the optimal bandwidth from the observed data for the given kernel This function uses an estimate based on the standard deviation of sample due to Deheuvels which performs reasonably well for unimodal distributions but leads to oversmoothing for more complex ones",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "bandwidth",
          "normalized": "(Double-\u003eBandwidth)-\u003ea Double-\u003eBandwidth",
          "package": "statistics",
          "signature": "(Double-\u003eBandwidth)-\u003ev Double-\u003eBandwidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:bandwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a uniform range of points at which to estimate a sample's\n probability density function.\n\u003c/p\u003e\u003cp\u003eIf you are using a Gaussian kernel, multiply the sample's bandwidth\n by 3 before passing it to this function.\n\u003c/p\u003e\u003cp\u003eIf this function is passed an empty vector, it returns values of\n positive and negative infinity.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "choosePoints",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e v Double-\u003e Points",
          "type": "function"
        },
        "index": {
          "description": "Choose uniform range of points at which to estimate sample probability density function If you are using Gaussian kernel multiply the sample bandwidth by before passing it to this function If this function is passed an empty vector it returns values of positive and negative infinity",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "choosePoints",
          "normalized": "Int-\u003eDouble-\u003ea Double-\u003ePoints",
          "package": "statistics",
          "partial": "Points",
          "signature": "Int-\u003eDouble-\u003ev Double-\u003ePoints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:choosePoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBandwidth estimator for an Epanechnikov kernel.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovBW",
          "package": "statistics",
          "signature": "Double -\u003e Bandwidth",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#epanechnikovBW",
          "type": "function"
        },
        "index": {
          "description": "Bandwidth estimator for an Epanechnikov kernel",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovBW",
          "normalized": "Double-\u003eBandwidth",
          "package": "statistics",
          "partial": "BW",
          "signature": "Double-\u003eBandwidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:epanechnikovBW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEpanechnikov kernel for probability density function estimation.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovKernel",
          "package": "statistics",
          "signature": "Kernel",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#epanechnikovKernel",
          "type": "function"
        },
        "index": {
          "description": "Epanechnikov kernel for probability density function estimation",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovKernel",
          "package": "statistics",
          "partial": "Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:epanechnikovKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple Epanechnikov kernel density estimator.  Returns the\n uniformly spaced points from the sample range at which the density\n function was estimated, and the estimates at those points.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovPDF",
          "package": "statistics",
          "signature": "Int-\u003e v Double-\u003e (Points, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Simple Epanechnikov kernel density estimator Returns the uniformly spaced points from the sample range at which the density function was estimated and the estimates at those points",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "epanechnikovPDF",
          "normalized": "Int-\u003ea Double-\u003e(Points,Vector Double)",
          "package": "statistics",
          "partial": "PDF",
          "signature": "Int-\u003ev Double-\u003e(Points,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:epanechnikovPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKernel density estimator, providing a non-parametric way of\n estimating the PDF of a random variable.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "estimatePDF",
          "package": "statistics",
          "signature": "Kernel-\u003e Bandwidth-\u003e v Double-\u003e Points-\u003e Vector Double",
          "type": "function"
        },
        "index": {
          "description": "Kernel density estimator providing non-parametric way of estimating the PDF of random variable",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "estimatePDF",
          "normalized": "Kernel-\u003eBandwidth-\u003ea Double-\u003ePoints-\u003eVector Double",
          "package": "statistics",
          "partial": "PDF",
          "signature": "Kernel-\u003eBandwidth-\u003ev Double-\u003ePoints-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:estimatePDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "fromPoints",
          "package": "statistics",
          "signature": "Vector Double",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#Points",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "fromPoints",
          "package": "statistics",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:fromPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBandwidth estimator for a Gaussian kernel.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianBW",
          "package": "statistics",
          "signature": "Double -\u003e Bandwidth",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#gaussianBW",
          "type": "function"
        },
        "index": {
          "description": "Bandwidth estimator for Gaussian kernel",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianBW",
          "normalized": "Double-\u003eBandwidth",
          "package": "statistics",
          "partial": "BW",
          "signature": "Double-\u003eBandwidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:gaussianBW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaussian kernel for probability density function estimation.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianKernel",
          "package": "statistics",
          "signature": "Kernel",
          "source": "src/Statistics-Sample-KernelDensity-Simple.html#gaussianKernel",
          "type": "function"
        },
        "index": {
          "description": "Gaussian kernel for probability density function estimation",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianKernel",
          "package": "statistics",
          "partial": "Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:gaussianKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple Gaussian kernel density estimator.  Returns the uniformly\n spaced points from the sample range at which the density function\n was estimated, and the estimates at those points.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianPDF",
          "package": "statistics",
          "signature": "Int-\u003e v Double-\u003e (Points, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Simple Gaussian kernel density estimator Returns the uniformly spaced points from the sample range at which the density function was estimated and the estimates at those points",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "gaussianPDF",
          "normalized": "Int-\u003ea Double-\u003e(Points,Vector Double)",
          "package": "statistics",
          "partial": "PDF",
          "signature": "Int-\u003ev Double-\u003e(Points,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:gaussianPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper for creating a simple kernel density estimation function\n with automatically chosen bandwidth and estimation points.\n\u003c/p\u003e",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "simplePDF",
          "package": "statistics",
          "signature": "(Double -\u003e Double)-\u003e Kernel-\u003e Double-\u003e Int-\u003e v Double-\u003e (Points, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "helper for creating simple kernel density estimation function with automatically chosen bandwidth and estimation points",
          "hierarchy": "Statistics Sample KernelDensity Simple",
          "module": "Statistics.Sample.KernelDensity.Simple",
          "name": "simplePDF",
          "normalized": "(Double-\u003eDouble)-\u003eKernel-\u003eDouble-\u003eInt-\u003ea Double-\u003e(Points,Vector Double)",
          "package": "statistics",
          "partial": "PDF",
          "signature": "(Double-\u003eDouble)-\u003eKernel-\u003eDouble-\u003eInt-\u003ev Double-\u003e(Points,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity-Simple.html#v:simplePDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKernel density estimation.  This module provides a fast, robust,\n non-parametric way to estimate the probability density function of\n a sample.\n\u003c/p\u003e\u003cp\u003eThis estimator does not use the commonly employed \"Gaussian rule\n of thumb\".  As a result, it outperforms many plug-in methods on\n multimodal samples with widely separated modes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Sample.KernelDensity",
          "name": "KernelDensity",
          "package": "statistics",
          "source": "src/Statistics-Sample-KernelDensity.html",
          "type": "module"
        },
        "index": {
          "description": "Kernel density estimation This module provides fast robust non-parametric way to estimate the probability density function of sample This estimator does not use the commonly employed Gaussian rule of thumb As result it outperforms many plug-in methods on multimodal samples with widely separated modes",
          "hierarchy": "Statistics Sample KernelDensity",
          "module": "Statistics.Sample.KernelDensity",
          "name": "KernelDensity",
          "package": "statistics",
          "partial": "Kernel Density",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaussian kernel density estimator for one-dimensional data, using\n the method of Botev et al.\n\u003c/p\u003e\u003cp\u003eThe result is a pair of vectors, containing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The coordinates of each mesh point.  The mesh interval is chosen\n   to be 20% larger than the range of the sample.  (To specify the\n   mesh interval, use \u003ccode\u003e\u003ca\u003ekde_\u003c/a\u003e\u003c/code\u003e.)\n\u003c/li\u003e\u003cli\u003e Density estimates at each mesh point.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Statistics.Sample.KernelDensity",
          "name": "kde",
          "package": "statistics",
          "signature": "Int-\u003e Vector Double-\u003e (Vector Double, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Gaussian kernel density estimator for one-dimensional data using the method of Botev et al The result is pair of vectors containing The coordinates of each mesh point The mesh interval is chosen to be larger than the range of the sample To specify the mesh interval use kde Density estimates at each mesh point",
          "hierarchy": "Statistics Sample KernelDensity",
          "module": "Statistics.Sample.KernelDensity",
          "name": "kde",
          "normalized": "Int-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "package": "statistics",
          "signature": "Int-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity.html#v:kde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaussian kernel density estimator for one-dimensional data, using\n the method of Botev et al.\n\u003c/p\u003e\u003cp\u003eThe result is a pair of vectors, containing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The coordinates of each mesh point.\n\u003c/li\u003e\u003cli\u003e Density estimates at each mesh point.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Statistics.Sample.KernelDensity",
          "name": "kde_",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Vector Double-\u003e (Vector Double, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Gaussian kernel density estimator for one-dimensional data using the method of Botev et al The result is pair of vectors containing The coordinates of each mesh point Density estimates at each mesh point",
          "hierarchy": "Statistics Sample KernelDensity",
          "module": "Statistics.Sample.KernelDensity",
          "name": "kde_",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "package": "statistics",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-KernelDensity.html#v:kde_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery fast statistics over simple powers of a sample.  These can all\n be computed efficiently in just a single pass over a sample, with\n that pass subject to stream fusion.\n\u003c/p\u003e\u003cp\u003eThe tradeoff is that some of these functions are less numerically\n robust than their counterparts in the \u003ccode\u003e\u003ca\u003eSample\u003c/a\u003e\u003c/code\u003e module.\n Where this is the case, the alternatives are noted.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "Powers",
          "package": "statistics",
          "source": "src/Statistics-Sample-Powers.html",
          "type": "module"
        },
        "index": {
          "description": "Very fast statistics over simple powers of sample These can all be computed efficiently in just single pass over sample with that pass subject to stream fusion The tradeoff is that some of these functions are less numerically robust than their counterparts in the Sample module Where this is the case the alternatives are noted",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "Powers",
          "package": "statistics",
          "partial": "Powers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Sample.Powers",
          "name": "Powers",
          "package": "statistics",
          "source": "src/Statistics-Sample-Powers.html#Powers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "Powers",
          "package": "statistics",
          "partial": "Powers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#t:Powers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \u003cem\u003ek\u003c/em\u003eth central moment of a sample.  The central\n moment is also known as the moment about the mean.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "centralMoment",
          "package": "statistics",
          "signature": "Int -\u003e Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#centralMoment",
          "type": "function"
        },
        "index": {
          "description": "Compute the th central moment of sample The central moment is also known as the moment about the mean",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "centralMoment",
          "normalized": "Int-\u003ePowers-\u003eDouble",
          "package": "statistics",
          "partial": "Moment",
          "signature": "Int-\u003ePowers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:centralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of elements in the original \u003ccode\u003eSample\u003c/code\u003e.  This is the\n sample's zeroth simple power.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "count",
          "package": "statistics",
          "signature": "Powers -\u003e Int",
          "source": "src/Statistics-Sample-Powers.html#count",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the original Sample This is the sample zeroth simple power",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "count",
          "normalized": "Powers-\u003eInt",
          "package": "statistics",
          "signature": "Powers-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the excess kurtosis of a sample.  This is a measure of\n the \"peakedness\" of its distribution.  A high kurtosis indicates\n that the sample's variance is due more to infrequent severe\n deviations than to frequent modest deviations.\n\u003c/p\u003e\u003cp\u003eA sample's excess kurtosis is not defined if its \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e is\n zero.\n\u003c/p\u003e\u003cp\u003eRequires \u003ccode\u003e\u003ca\u003ePowers\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e at least 4.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "kurtosis",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#kurtosis",
          "type": "function"
        },
        "index": {
          "description": "Compute the excess kurtosis of sample This is measure of the peakedness of its distribution high kurtosis indicates that the sample variance is due more to infrequent severe deviations than to frequent modest deviations sample excess kurtosis is not defined if its variance is zero Requires Powers with order at least",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "kurtosis",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:kurtosis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arithmetic mean of elements in the original \u003ccode\u003eSample\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is less numerically robust than the mean function in the\n \u003ccode\u003e\u003ca\u003eSample\u003c/a\u003e\u003c/code\u003e module, but the number is essentially free to\n compute if you have already collected a sample's simple powers.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "mean",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#mean",
          "type": "function"
        },
        "index": {
          "description": "The arithmetic mean of elements in the original Sample This is less numerically robust than the mean function in the Sample module but the number is essentially free to compute if you have already collected sample simple powers",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "mean",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe order (number) of simple powers collected from a \u003ccode\u003esample\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "order",
          "package": "statistics",
          "signature": "Powers -\u003e Int",
          "source": "src/Statistics-Sample-Powers.html#order",
          "type": "function"
        },
        "index": {
          "description": "The order number of simple powers collected from sample",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "order",
          "normalized": "Powers-\u003eInt",
          "package": "statistics",
          "signature": "Powers-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(\u003cem\u003en\u003c/em\u003e) Collect the \u003cem\u003en\u003c/em\u003e simple powers of a sample.\n\u003c/p\u003e\u003cp\u003eFunctions computed over a sample's simple powers require at least a\n certain number (or \u003cem\u003eorder\u003c/em\u003e) of powers to be collected.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e To compute the \u003cem\u003ek\u003c/em\u003eth \u003ccode\u003e\u003ca\u003ecentralMoment\u003c/a\u003e\u003c/code\u003e, at least \u003cem\u003ek\u003c/em\u003e simple powers\n   must be collected.\n\u003c/li\u003e\u003cli\u003e For the \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e, at least 2 simple powers are needed.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eskewness\u003c/a\u003e\u003c/code\u003e, we need at least 3 simple powers.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003ekurtosis\u003c/a\u003e\u003c/code\u003e, at least 4 simple powers are required.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function is subject to stream fusion.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "powers",
          "package": "statistics",
          "signature": "Int-\u003e v Double-\u003e Powers",
          "type": "function"
        },
        "index": {
          "description": "Collect the simple powers of sample Functions computed over sample simple powers require at least certain number or order of powers to be collected To compute the th centralMoment at least simple powers must be collected For the variance at least simple powers are needed For skewness we need at least simple powers For kurtosis at least simple powers are required This function is subject to stream fusion",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "powers",
          "normalized": "Int-\u003ea Double-\u003ePowers",
          "package": "statistics",
          "signature": "Int-\u003ev Double-\u003ePowers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:powers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the skewness of a sample. This is a measure of the\n asymmetry of its distribution.\n\u003c/p\u003e\u003cp\u003eA sample with negative skew is said to be \u003cem\u003eleft-skewed\u003c/em\u003e.  Most of\n its mass is on the right of the distribution, with the tail on the\n left.\n\u003c/p\u003e\u003cpre\u003e skewness . powers 3 $ U.to [1,100,101,102,103]\n ==\u003e -1.497681449918257\n\u003c/pre\u003e\u003cp\u003eA sample with positive skew is said to be \u003cem\u003eright-skewed\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e skewness . powers 3 $ U.to [1,2,3,4,100]\n ==\u003e 1.4975367033335198\n\u003c/pre\u003e\u003cp\u003eA sample's skewness is not defined if its \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e is zero.\n\u003c/p\u003e\u003cp\u003eRequires \u003ccode\u003e\u003ca\u003ePowers\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e at least 3.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "skewness",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#skewness",
          "type": "function"
        },
        "index": {
          "description": "Compute the skewness of sample This is measure of the asymmetry of its distribution sample with negative skew is said to be left-skewed Most of its mass is on the right of the distribution with the tail on the left skewness powers U.to sample with positive skew is said to be right-skewed skewness powers U.to sample skewness is not defined if its variance is zero Requires Powers with order at least",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "skewness",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:skewness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard deviation.  This is simply the square root of the\n maximum likelihood estimate of the variance.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "stdDev",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#stdDev",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation This is simply the square root of the maximum likelihood estimate of the variance",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "stdDev",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "partial": "Dev",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of elements in the original \u003ccode\u003eSample\u003c/code\u003e.  This is the\n sample's first simple power.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "sum",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#sum",
          "type": "function"
        },
        "index": {
          "description": "The sum of elements in the original Sample This is the sample first simple power",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "sum",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum likelihood estimate of a sample's variance.  Also known\n as the population variance, where the denominator is \u003cem\u003en\u003c/em\u003e.  This is\n the second central moment of the sample.\n\u003c/p\u003e\u003cp\u003eThis is less numerically robust than the variance function in the\n \u003ccode\u003e\u003ca\u003eSample\u003c/a\u003e\u003c/code\u003e module, but the number is essentially free to\n compute if you have already collected a sample's simple powers.\n\u003c/p\u003e\u003cp\u003eRequires \u003ccode\u003e\u003ca\u003ePowers\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e at least 2.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "variance",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#variance",
          "type": "function"
        },
        "index": {
          "description": "Maximum likelihood estimate of sample variance Also known as the population variance where the denominator is This is the second central moment of the sample This is less numerically robust than the variance function in the Sample module but the number is essentially free to compute if you have already collected sample simple powers Requires Powers with order at least",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "variance",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbiased estimate of a sample's variance.  Also known as the\n sample variance, where the denominator is \u003cem\u003en\u003c/em\u003e-1.\n\u003c/p\u003e\u003cp\u003eRequires \u003ccode\u003e\u003ca\u003ePowers\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e at least 2.\n\u003c/p\u003e",
          "module": "Statistics.Sample.Powers",
          "name": "varianceUnbiased",
          "package": "statistics",
          "signature": "Powers -\u003e Double",
          "source": "src/Statistics-Sample-Powers.html#varianceUnbiased",
          "type": "function"
        },
        "index": {
          "description": "Unbiased estimate of sample variance Also known as the sample variance where the denominator is Requires Powers with order at least",
          "hierarchy": "Statistics Sample Powers",
          "module": "Statistics.Sample.Powers",
          "name": "varianceUnbiased",
          "normalized": "Powers-\u003eDouble",
          "package": "statistics",
          "partial": "Unbiased",
          "signature": "Powers-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample-Powers.html#v:varianceUnbiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used sample statistics, also known as descriptive\n statistics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Sample",
          "name": "Sample",
          "package": "statistics",
          "source": "src/Statistics-Sample.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used sample statistics also known as descriptive statistics",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "Sample",
          "package": "statistics",
          "partial": "Sample",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample data.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "Sample",
          "package": "statistics",
          "source": "src/Statistics-Types.html#Sample",
          "type": "type"
        },
        "index": {
          "description": "Sample data",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "Sample",
          "package": "statistics",
          "partial": "Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample with weights. First element of sample is data, second is weight\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "WeightedSample",
          "package": "statistics",
          "source": "src/Statistics-Types.html#WeightedSample",
          "type": "type"
        },
        "index": {
          "description": "Sample with weights First element of sample is data second is weight",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "WeightedSample",
          "package": "statistics",
          "partial": "Weighted Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#t:WeightedSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \u003cem\u003ek\u003c/em\u003eth central moment of a sample.  The central moment\n is also known as the moment about the mean.\n\u003c/p\u003e\u003cp\u003eThis function performs two passes over the sample, so is not subject\n to stream fusion.\n\u003c/p\u003e\u003cp\u003eFor samples containing many values very close to the mean, this\n function is subject to inaccuracy due to catastrophic cancellation.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "centralMoment",
          "package": "statistics",
          "signature": "Int -\u003e v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#centralMoment",
          "type": "function"
        },
        "index": {
          "description": "Compute the th central moment of sample The central moment is also known as the moment about the mean This function performs two passes over the sample so is not subject to stream fusion For samples containing many values very close to the mean this function is subject to inaccuracy due to catastrophic cancellation",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "centralMoment",
          "normalized": "Int-\u003ea Double-\u003eDouble",
          "package": "statistics",
          "partial": "Moment",
          "signature": "Int-\u003ev Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:centralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \u003cem\u003ek\u003c/em\u003eth and \u003cem\u003ej\u003c/em\u003eth central moments of a sample.\n\u003c/p\u003e\u003cp\u003eThis function performs two passes over the sample, so is not subject\n to stream fusion.\n\u003c/p\u003e\u003cp\u003eFor samples containing many values very close to the mean, this\n function is subject to inaccuracy due to catastrophic cancellation.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "centralMoments",
          "package": "statistics",
          "signature": "Int -\u003e Int -\u003e v Double -\u003e (Double, Double)",
          "source": "src/Statistics-Sample.html#centralMoments",
          "type": "function"
        },
        "index": {
          "description": "Compute the th and th central moments of sample This function performs two passes over the sample so is not subject to stream fusion For samples containing many values very close to the mean this function is subject to inaccuracy due to catastrophic cancellation",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "centralMoments",
          "normalized": "Int-\u003eInt-\u003ea Double-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Moments",
          "signature": "Int-\u003eInt-\u003ev Double-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:centralMoments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard deviation.  This is simply the square root of the\n maximum likelihood estimate of the variance.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "fastStdDev",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#fastStdDev",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation This is simply the square root of the maximum likelihood estimate of the variance",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "fastStdDev",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Std Dev",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:fastStdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum likelihood estimate of a sample's variance.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "fastVariance",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#fastVariance",
          "type": "function"
        },
        "index": {
          "description": "Maximum likelihood estimate of sample variance",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "fastVariance",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Variance",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:fastVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbiased estimate of a sample's variance.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "fastVarianceUnbiased",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#fastVarianceUnbiased",
          "type": "function"
        },
        "index": {
          "description": "Unbiased estimate of sample variance",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "fastVarianceUnbiased",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Variance Unbiased",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:fastVarianceUnbiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Geometric mean of a sample containing no negative values.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "geometricMean",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#geometricMean",
          "type": "function"
        },
        "index": {
          "description": "Geometric mean of sample containing no negative values",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "geometricMean",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Mean",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:geometricMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Harmonic mean.  This algorithm performs a single pass over\n the sample.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "harmonicMean",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#harmonicMean",
          "type": "function"
        },
        "index": {
          "description": "Harmonic mean This algorithm performs single pass over the sample",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "harmonicMean",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Mean",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:harmonicMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the excess kurtosis of a sample.  This is a measure of\n the \"peakedness\" of its distribution.  A high kurtosis indicates\n that more of the sample's variance is due to infrequent severe\n deviations, rather than more frequent modest deviations.\n\u003c/p\u003e\u003cp\u003eA sample's excess kurtosis is not defined if its \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e is\n zero.\n\u003c/p\u003e\u003cp\u003eThis function performs two passes over the sample, so is not subject\n to stream fusion.\n\u003c/p\u003e\u003cp\u003eFor samples containing many values very close to the mean, this\n function is subject to inaccuracy due to catastrophic cancellation.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "kurtosis",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#kurtosis",
          "type": "function"
        },
        "index": {
          "description": "Compute the excess kurtosis of sample This is measure of the peakedness of its distribution high kurtosis indicates that more of the sample variance is due to infrequent severe deviations rather than more frequent modest deviations sample excess kurtosis is not defined if its variance is zero This function performs two passes over the sample so is not subject to stream fusion For samples containing many values very close to the mean this function is subject to inaccuracy due to catastrophic cancellation",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "kurtosis",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:kurtosis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Arithmetic mean.  This uses Kahan-Babu&#353;ka-Neumaier\n summation, so is more accurate than \u003ccode\u003e\u003ca\u003ewelfordMean\u003c/a\u003e\u003c/code\u003e unless the input\n values are very large.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "mean",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic mean This uses Kahan-Babu ka-Neumaier summation so is more accurate than welfordMean unless the input values are very large",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "mean",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate mean and maximum likelihood estimate of variance. This\n function should be used if both mean and variance are required\n since it will calculate mean only once.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "meanVariance",
          "package": "statistics",
          "signature": "v Double -\u003e (Double, Double)",
          "source": "src/Statistics-Sample.html#meanVariance",
          "type": "function"
        },
        "index": {
          "description": "Calculate mean and maximum likelihood estimate of variance This function should be used if both mean and variance are required since it will calculate mean only once",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "meanVariance",
          "normalized": "a Double-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Variance",
          "signature": "v Double-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:meanVariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate mean and unbiased estimate of variance. This\n function should be used if both mean and variance are required\n since it will calculate mean only once.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "meanVarianceUnb",
          "package": "statistics",
          "signature": "v Double -\u003e (Double, Double)",
          "source": "src/Statistics-Sample.html#meanVarianceUnb",
          "type": "function"
        },
        "index": {
          "description": "Calculate mean and unbiased estimate of variance This function should be used if both mean and variance are required since it will calculate mean only once",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "meanVarianceUnb",
          "normalized": "a Double-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Variance Unb",
          "signature": "v Double-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:meanVarianceUnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Arithmetic mean for weighted sample. It uses a single-pass\n algorithm analogous to the one used by \u003ccode\u003e\u003ca\u003ewelfordMean\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "meanWeighted",
          "package": "statistics",
          "signature": "v (Double, Double) -\u003e Double",
          "source": "src/Statistics-Sample.html#meanWeighted",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic mean for weighted sample It uses single-pass algorithm analogous to the one used by welfordMean",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "meanWeighted",
          "normalized": "a(Double,Double)-\u003eDouble",
          "package": "statistics",
          "partial": "Weighted",
          "signature": "v(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:meanWeighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Range. The difference between the largest and smallest\n elements of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "range",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#range",
          "type": "function"
        },
        "index": {
          "description": "Range The difference between the largest and smallest elements of sample",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "range",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the skewness of a sample. This is a measure of the\n asymmetry of its distribution.\n\u003c/p\u003e\u003cp\u003eA sample with negative skew is said to be \u003cem\u003eleft-skewed\u003c/em\u003e.  Most of\n its mass is on the right of the distribution, with the tail on the\n left.\n\u003c/p\u003e\u003cpre\u003e skewness $ U.to [1,100,101,102,103]\n ==\u003e -1.497681449918257\n\u003c/pre\u003e\u003cp\u003eA sample with positive skew is said to be \u003cem\u003eright-skewed\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e skewness $ U.to [1,2,3,4,100]\n ==\u003e 1.4975367033335198\n\u003c/pre\u003e\u003cp\u003eA sample's skewness is not defined if its \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e is zero.\n\u003c/p\u003e\u003cp\u003eThis function performs two passes over the sample, so is not subject\n to stream fusion.\n\u003c/p\u003e\u003cp\u003eFor samples containing many values very close to the mean, this\n function is subject to inaccuracy due to catastrophic cancellation.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "skewness",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#skewness",
          "type": "function"
        },
        "index": {
          "description": "Compute the skewness of sample This is measure of the asymmetry of its distribution sample with negative skew is said to be left-skewed Most of its mass is on the right of the distribution with the tail on the left skewness U.to sample with positive skew is said to be right-skewed skewness U.to sample skewness is not defined if its variance is zero This function performs two passes over the sample so is not subject to stream fusion For samples containing many values very close to the mean this function is subject to inaccuracy due to catastrophic cancellation",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "skewness",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:skewness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard deviation.  This is simply the square root of the\n unbiased estimate of the variance.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "stdDev",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#stdDev",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation This is simply the square root of the unbiased estimate of the variance",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "stdDev",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Dev",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum likelihood estimate of a sample's variance.  Also known\n as the population variance, where the denominator is \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "variance",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#variance",
          "type": "function"
        },
        "index": {
          "description": "Maximum likelihood estimate of sample variance Also known as the population variance where the denominator is",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "variance",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbiased estimate of a sample's variance.  Also known as the\n sample variance, where the denominator is \u003cem\u003en\u003c/em\u003e-1.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "varianceUnbiased",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#varianceUnbiased",
          "type": "function"
        },
        "index": {
          "description": "Unbiased estimate of sample variance Also known as the sample variance where the denominator is",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "varianceUnbiased",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Unbiased",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:varianceUnbiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeighted variance. This is biased estimation.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "varianceWeighted",
          "package": "statistics",
          "signature": "v (Double, Double) -\u003e Double",
          "source": "src/Statistics-Sample.html#varianceWeighted",
          "type": "function"
        },
        "index": {
          "description": "Weighted variance This is biased estimation",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "varianceWeighted",
          "normalized": "a(Double,Double)-\u003eDouble",
          "package": "statistics",
          "partial": "Weighted",
          "signature": "v(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:varianceWeighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Arithmetic mean.  This uses Welford's algorithm to provide\n numerical stability, using a single pass over the sample data.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e, this loses a surprising amount of precision\n unless the inputs are very large.\n\u003c/p\u003e",
          "module": "Statistics.Sample",
          "name": "welfordMean",
          "package": "statistics",
          "signature": "v Double -\u003e Double",
          "source": "src/Statistics-Sample.html#welfordMean",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic mean This uses Welford algorithm to provide numerical stability using single pass over the sample data Compared to mean this loses surprising amount of precision unless the inputs are very large",
          "hierarchy": "Statistics Sample",
          "module": "Statistics.Sample",
          "name": "welfordMean",
          "normalized": "a Double-\u003eDouble",
          "package": "statistics",
          "partial": "Mean",
          "signature": "v Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Sample.html#v:welfordMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePearson's chi squared test.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Test.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "source": "src/Statistics-Test-ChiSquared.html",
          "type": "module"
        },
        "index": {
          "description": "Pearson chi squared test",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "ChiSquared",
          "package": "statistics",
          "partial": "Chi Squared",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of hypothesis testing\n\u003c/p\u003e",
          "module": "Statistics.Test.ChiSquared",
          "name": "TestResult",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Result of hypothesis testing",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "TestResult",
          "package": "statistics",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest type. Exact meaning depends on a specific test. But\n generally it's tested whether some statistics is too big (small)\n for \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e or whether it too big or too small for \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Test.ChiSquared",
          "name": "TestType",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "data"
        },
        "index": {
          "description": "Test type Exact meaning depends on specific test But generally it tested whether some statistics is too big small for OneTailed or whether it too big or too small for TwoTailed",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "TestType",
          "package": "statistics",
          "partial": "Test Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#t:TestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData is compatible with hypothesis\n\u003c/p\u003e",
          "module": "[\"Statistics.Test.ChiSquared\",\"Statistics.Test.KolmogorovSmirnov\",\"Statistics.Test.MannWhitneyU\",\"Statistics.Test.Types\",\"Statistics.Test.WilcoxonT\"]",
          "name": "NotSignificant",
          "package": "statistics",
          "signature": "NotSignificant",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:NotSignificant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:NotSignificant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:NotSignificant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#v:NotSignificant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:NotSignificant\"]"
        },
        "index": {
          "description": "Data is compatible with hypothesis",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "NotSignificant",
          "package": "statistics",
          "partial": "Not Significant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:NotSignificant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Statistics.Test.ChiSquared\",\"Statistics.Test.KolmogorovSmirnov\",\"Statistics.Test.MannWhitneyU\",\"Statistics.Test.Types\",\"Statistics.Test.WilcoxonT\"]",
          "name": "OneTailed",
          "package": "statistics",
          "signature": "OneTailed",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:OneTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:OneTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:OneTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#v:OneTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:OneTailed\"]"
        },
        "index": {
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "OneTailed",
          "package": "statistics",
          "partial": "One Tailed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:OneTailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNull hypothesis should be rejected\n\u003c/p\u003e",
          "module": "[\"Statistics.Test.ChiSquared\",\"Statistics.Test.KolmogorovSmirnov\",\"Statistics.Test.MannWhitneyU\",\"Statistics.Test.Types\",\"Statistics.Test.WilcoxonT\"]",
          "name": "Significant",
          "package": "statistics",
          "signature": "Significant",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:Significant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:Significant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:Significant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#v:Significant\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:Significant\"]"
        },
        "index": {
          "description": "Null hypothesis should be rejected",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "Significant",
          "package": "statistics",
          "partial": "Significant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:Significant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Statistics.Test.ChiSquared\",\"Statistics.Test.KolmogorovSmirnov\",\"Statistics.Test.MannWhitneyU\",\"Statistics.Test.Types\",\"Statistics.Test.WilcoxonT\"]",
          "name": "TwoTailed",
          "package": "statistics",
          "signature": "TwoTailed",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:TwoTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:TwoTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:TwoTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#v:TwoTailed\",\"http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:TwoTailed\"]"
        },
        "index": {
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "TwoTailed",
          "package": "statistics",
          "partial": "Two Tailed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:TwoTailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric form of Pearson chi squared tests for binned data. Data\n   sample is supplied in form of tuples (observed quantity,\n   expected number of events). Both must be positive.\n\u003c/p\u003e",
          "module": "Statistics.Test.ChiSquared",
          "name": "chi2test",
          "package": "statistics",
          "signature": "Double-\u003e Int-\u003e v (Int, Double)-\u003e TestResult",
          "type": "function"
        },
        "index": {
          "description": "Generic form of Pearson chi squared tests for binned data Data sample is supplied in form of tuples observed quantity expected number of events Both must be positive",
          "hierarchy": "Statistics Test ChiSquared",
          "module": "Statistics.Test.ChiSquared",
          "name": "chi2test",
          "normalized": "Double-\u003eInt-\u003ea(Int,Double)-\u003eTestResult",
          "package": "statistics",
          "signature": "Double-\u003eInt-\u003ev(Int,Double)-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-ChiSquared.html#v:chi2test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKolmogov-Smirnov tests are non-parametric tests for assesing\n whether given sample could be described by distribution or whether\n two samples have the same distribution. It's only applicable to\n continous distributions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "KolmogorovSmirnov",
          "package": "statistics",
          "source": "src/Statistics-Test-KolmogorovSmirnov.html",
          "type": "module"
        },
        "index": {
          "description": "Kolmogov-Smirnov tests are non-parametric tests for assesing whether given sample could be described by distribution or whether two samples have the same distribution It only applicable to continous distributions",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "KolmogorovSmirnov",
          "package": "statistics",
          "partial": "Kolmogorov Smirnov",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of hypothesis testing\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "TestResult",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Result of hypothesis testing",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "TestResult",
          "package": "statistics",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest type. Exact meaning depends on a specific test. But\n generally it's tested whether some statistics is too big (small)\n for \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e or whether it too big or too small for \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "TestType",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "data"
        },
        "index": {
          "description": "Test type Exact meaning depends on specific test But generally it tested whether some statistics is too big small for OneTailed or whether it too big or too small for TwoTailed",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "TestType",
          "package": "statistics",
          "partial": "Test Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#t:TestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate Kolmogorov's statistic \u003cem\u003eD\u003c/em\u003e for two data samples. If\n   either of samples is empty returns 0.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnov2D",
          "package": "statistics",
          "signature": "Sample-\u003e Sample-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Calculate Kolmogorov statistic for two data samples If either of samples is empty returns",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnov2D",
          "normalized": "Sample-\u003eSample-\u003eDouble",
          "package": "statistics",
          "partial": "Smirnov",
          "signature": "Sample-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnov2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate Kolmogorov's statistic \u003cem\u003eD\u003c/em\u003e for given cumulative\n   distribution function (CDF) and data sample. If sample is empty\n   returns 0.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovCdfD",
          "package": "statistics",
          "signature": "(Double -\u003e Double)-\u003e Sample-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Calculate Kolmogorov statistic for given cumulative distribution function CDF and data sample If sample is empty returns",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovCdfD",
          "normalized": "(Double-\u003eDouble)-\u003eSample-\u003eDouble",
          "package": "statistics",
          "partial": "Smirnov Cdf",
          "signature": "(Double-\u003eDouble)-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovCdfD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate Kolmogorov's statistic \u003cem\u003eD\u003c/em\u003e for given cumulative\n   distribution function (CDF) and data sample. If sample is empty\n   returns 0.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovD",
          "package": "statistics",
          "signature": "d-\u003e Sample-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Calculate Kolmogorov statistic for given cumulative distribution function CDF and data sample If sample is empty returns",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovD",
          "normalized": "a-\u003eSample-\u003eDouble",
          "package": "statistics",
          "partial": "Smirnov",
          "signature": "d-\u003eSample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate cumulative probability function for Kolmogorov's\n   distribution with \u003cem\u003en\u003c/em\u003e parameters or probability of getting value\n   smaller than \u003cem\u003ed\u003c/em\u003e with n-elements sample.\n\u003c/p\u003e\u003cp\u003eIt uses algorithm by Marsgalia et. al. and provide at least\n   7-digit accuracy.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovProbability",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Calculate cumulative probability function for Kolmogorov distribution with parameters or probability of getting value smaller than with n-elements sample It uses algorithm by Marsgalia et al and provide at least digit accuracy",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovProbability",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "partial": "Smirnov Probability",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that sample could be described by\n   distribution. \u003ccode\u003e\u003ca\u003eSignificant\u003c/a\u003e\u003c/code\u003e means distribution is not compatible\n   with data for given p-value.\n\u003c/p\u003e\u003cp\u003eThis test uses Marsaglia-Tsang-Wang exact alogorithm for\n   calculation of p-value.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTest",
          "package": "statistics",
          "signature": "d-\u003e Double-\u003e Sample-\u003e TestResult",
          "type": "function"
        },
        "index": {
          "description": "Check that sample could be described by distribution Significant means distribution is not compatible with data for given p-value This test uses Marsaglia-Tsang-Wang exact alogorithm for calculation of p-value",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTest",
          "normalized": "a-\u003eDouble-\u003eSample-\u003eTestResult",
          "package": "statistics",
          "partial": "Smirnov Test",
          "signature": "d-\u003eDouble-\u003eSample-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo sample Kolmogorov-Smirnov test. It tests whether two data\n   samples could be described by the same distribution without\n   making any assumptions about it.\n\u003c/p\u003e\u003cp\u003eThis test uses approxmate formula for computing p-value.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTest2",
          "package": "statistics",
          "signature": "Double-\u003e Sample-\u003e Sample-\u003e TestResult",
          "type": "function"
        },
        "index": {
          "description": "Two sample Kolmogorov-Smirnov test It tests whether two data samples could be described by the same distribution without making any assumptions about it This test uses approxmate formula for computing p-value",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTest2",
          "normalized": "Double-\u003eSample-\u003eSample-\u003eTestResult",
          "package": "statistics",
          "partial": "Smirnov Test",
          "signature": "Double-\u003eSample-\u003eSample-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovTest2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ekolmogorovSmirnovTest\u003c/a\u003e\u003c/code\u003e which uses CFD in form of\n   function.\n\u003c/p\u003e",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTestCdf",
          "package": "statistics",
          "signature": "(Double -\u003e Double)-\u003e Double-\u003e Sample-\u003e TestResult",
          "type": "function"
        },
        "index": {
          "description": "Variant of kolmogorovSmirnovTest which uses CFD in form of function",
          "hierarchy": "Statistics Test KolmogorovSmirnov",
          "module": "Statistics.Test.KolmogorovSmirnov",
          "name": "kolmogorovSmirnovTestCdf",
          "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eSample-\u003eTestResult",
          "package": "statistics",
          "partial": "Smirnov Test Cdf",
          "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eSample-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-KolmogorovSmirnov.html#v:kolmogorovSmirnovTestCdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMann-Whitney U test (also know as Mann-Whitney-Wilcoxon and\n Wilcoxon rank sum test) is a non-parametric test for assesing\n whether two samples of independent observations have different\n mean.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "MannWhitneyU",
          "package": "statistics",
          "source": "src/Statistics-Test-MannWhitneyU.html",
          "type": "module"
        },
        "index": {
          "description": "Mann-Whitney test also know as Mann-Whitney-Wilcoxon and Wilcoxon rank sum test is non-parametric test for assesing whether two samples of independent observations have different mean",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "MannWhitneyU",
          "package": "statistics",
          "partial": "Mann Whitney",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of hypothesis testing\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "TestResult",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Result of hypothesis testing",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "TestResult",
          "package": "statistics",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest type. Exact meaning depends on a specific test. But\n generally it's tested whether some statistics is too big (small)\n for \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e or whether it too big or too small for \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "TestType",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "data"
        },
        "index": {
          "description": "Test type Exact meaning depends on specific test But generally it tested whether some statistics is too big small for OneTailed or whether it too big or too small for TwoTailed",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "TestType",
          "package": "statistics",
          "partial": "Test Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#t:TestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Mann-Whitney U Test.\n\u003c/p\u003e\u003cp\u003eThis is sometimes known as the Mann-Whitney-Wilcoxon U test, and\n confusingly many sources state that the Mann-Whitney U test is the same as\n the Wilcoxon's rank sum test (which is provided as \u003ccode\u003e\u003ca\u003ewilcoxonRankSums\u003c/a\u003e\u003c/code\u003e).\n The Mann-Whitney U is a simple transform of Wilcoxon's rank sum test.\n\u003c/p\u003e\u003cp\u003eAgain confusingly, different sources state reversed definitions for U&#8321;\n and U&#8322;, so it is worth being explicit about what this function returns.\n Given two samples, the first, xs&#8321;, of size n&#8321; and the second, xs&#8322;,\n of size n&#8322;, this function returns (U&#8321;, U&#8322;)\n where U&#8321; = W&#8321; - (n&#8321;(n&#8321;+1))/2\n and U&#8322; = W&#8322; - (n&#8322;(n&#8322;+1))/2,\n where (W&#8321;, W&#8322;) is the return value of \u003ccode\u003ewilcoxonRankSums xs1 xs2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome sources instead state that U&#8321; and U&#8322; should be the other way round, often\n expressing this using U&#8321;' = n&#8321;n&#8322; - U&#8321; (since U&#8321; + U&#8322; = n&#8321;n&#8322;).\n\u003c/p\u003e\u003cp\u003eAll of which you probably don't care about if you just feed this into \u003ccode\u003e\u003ca\u003emannWhitneyUSignificant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyU",
          "package": "statistics",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double)",
          "source": "src/Statistics-Test-MannWhitneyU.html#mannWhitneyU",
          "type": "function"
        },
        "index": {
          "description": "The Mann-Whitney Test This is sometimes known as the Mann-Whitney-Wilcoxon test and confusingly many sources state that the Mann-Whitney test is the same as the Wilcoxon rank sum test which is provided as wilcoxonRankSums The Mann-Whitney is simple transform of Wilcoxon rank sum test Again confusingly different sources state reversed definitions for and so it is worth being explicit about what this function returns Given two samples the first xs of size and the second xs of size this function returns where and where is the return value of wilcoxonRankSums xs1 xs2 Some sources instead state that and should be the other way round often expressing this using since All of which you probably don care about if you just feed this into mannWhitneyUSignificant",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyU",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Whitney",
          "signature": "Sample-\u003eSample-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:mannWhitneyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the critical value of Mann-Whitney U for the given sample\n sizes and significance level.\n\u003c/p\u003e\u003cp\u003eThis function returns the exact calculated value of U for all sample sizes;\n it does not use the normal approximation at all.  Above sample size 20 it is\n generally recommended to use the normal approximation instead, but this function\n will calculate the higher critical values if you need them.\n\u003c/p\u003e\u003cp\u003eThe algorithm to generate these values is a faster, memoised version of the\n simple unoptimised generating function given in section 2 of \"The Mann Whitney\n Wilcoxon Distribution Using Linked Lists\"\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUCriticalValue",
          "package": "statistics",
          "signature": "(Int, Int)-\u003e Double-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "Calculates the critical value of Mann-Whitney for the given sample sizes and significance level This function returns the exact calculated value of for all sample sizes it does not use the normal approximation at all Above sample size it is generally recommended to use the normal approximation instead but this function will calculate the higher critical values if you need them The algorithm to generate these values is faster memoised version of the simple unoptimised generating function given in section of The Mann Whitney Wilcoxon Distribution Using Linked Lists",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUCriticalValue",
          "normalized": "(Int,Int)-\u003eDouble-\u003eMaybe Int",
          "package": "statistics",
          "partial": "Whitney UCritical Value",
          "signature": "(Int,Int)-\u003eDouble-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:mannWhitneyUCriticalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates whether the Mann Whitney U test is significant.\n\u003c/p\u003e\u003cp\u003eIf both sample sizes are less than or equal to 20, the exact U critical value\n (as calculated by \u003ccode\u003e\u003ca\u003emannWhitneyUCriticalValue\u003c/a\u003e\u003c/code\u003e) is used.  If either sample is\n larger than 20, the normal approximation is used instead.\n\u003c/p\u003e\u003cp\u003eIf you use a one-tailed test, the test indicates whether the first sample is\n significantly larger than the second.  If you want the opposite, simply reverse\n the order in both the sample size and the (U&#8321;, U&#8322;) pairs.\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUSignificant",
          "package": "statistics",
          "signature": "TestType-\u003e (Int, Int)-\u003e Double-\u003e (Double, Double)-\u003e Maybe TestResult",
          "type": "function"
        },
        "index": {
          "description": "Calculates whether the Mann Whitney test is significant If both sample sizes are less than or equal to the exact critical value as calculated by mannWhitneyUCriticalValue is used If either sample is larger than the normal approximation is used instead If you use one-tailed test the test indicates whether the first sample is significantly larger than the second If you want the opposite simply reverse the order in both the sample size and the pairs",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUSignificant",
          "normalized": "TestType-\u003e(Int,Int)-\u003eDouble-\u003e(Double,Double)-\u003eMaybe TestResult",
          "package": "statistics",
          "partial": "Whitney USignificant",
          "signature": "TestType-\u003e(Int,Int)-\u003eDouble-\u003e(Double,Double)-\u003eMaybe TestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:mannWhitneyUSignificant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Mann-Whitney U Test for two samples and required\n significance. For additional information check documentation of\n \u003ccode\u003e\u003ca\u003emannWhitneyU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emannWhitneyUSignificant\u003c/a\u003e\u003c/code\u003e. This is just a helper\n function.\n\u003c/p\u003e\u003cp\u003eOne-tailed test checks whether first sample is significantly larger\n than second. Two-tailed whether they are significantly different.\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUtest",
          "package": "statistics",
          "signature": "TestType-\u003e Double-\u003e Sample-\u003e Sample-\u003e Maybe TestResult",
          "type": "function"
        },
        "index": {
          "description": "Perform Mann-Whitney Test for two samples and required significance For additional information check documentation of mannWhitneyU and mannWhitneyUSignificant This is just helper function One-tailed test checks whether first sample is significantly larger than second Two-tailed whether they are significantly different",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "mannWhitneyUtest",
          "normalized": "TestType-\u003eDouble-\u003eSample-\u003eSample-\u003eMaybe TestResult",
          "package": "statistics",
          "partial": "Whitney Utest",
          "signature": "TestType-\u003eDouble-\u003eSample-\u003eSample-\u003eMaybe TestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:mannWhitneyUtest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Wilcoxon Rank Sums Test.\n\u003c/p\u003e\u003cp\u003eThis test calculates the sum of ranks for the given two samples.  The samples\n are ordered, and assigned ranks (ties are given their average rank), then these\n ranks are summed for each sample.\n\u003c/p\u003e\u003cp\u003eThe return value is (W&#8321;, W&#8322;) where W&#8321; is the sum of ranks of the first sample\n and W&#8322; is the sum of ranks of the second sample.  This test is trivially transformed\n into the Mann-Whitney U test.  You will probably want to use \u003ccode\u003e\u003ca\u003emannWhitneyU\u003c/a\u003e\u003c/code\u003e\n and the related functions for testing significance, but this function is exposed\n for completeness.\n\u003c/p\u003e",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "wilcoxonRankSums",
          "package": "statistics",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double)",
          "source": "src/Statistics-Test-MannWhitneyU.html#wilcoxonRankSums",
          "type": "function"
        },
        "index": {
          "description": "The Wilcoxon Rank Sums Test This test calculates the sum of ranks for the given two samples The samples are ordered and assigned ranks ties are given their average rank then these ranks are summed for each sample The return value is where is the sum of ranks of the first sample and is the sum of ranks of the second sample This test is trivially transformed into the Mann-Whitney test You will probably want to use mannWhitneyU and the related functions for testing significance but this function is exposed for completeness",
          "hierarchy": "Statistics Test MannWhitneyU",
          "module": "Statistics.Test.MannWhitneyU",
          "name": "wilcoxonRankSums",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Rank Sums",
          "signature": "Sample-\u003eSample-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-MannWhitneyU.html#v:wilcoxonRankSums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use S.Test.MannWhitneyU and S.Test.WilcoxonT instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFunctions for performing non-parametric tests (i.e. tests without an assumption\n of underlying distribution).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Test.NonParametric",
          "name": "NonParametric",
          "package": "statistics",
          "source": "src/Statistics-Test-NonParametric.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use S.Test.MannWhitneyU and S.Test.WilcoxonT instead Functions for performing non-parametric tests i.e tests without an assumption of underlying distribution",
          "hierarchy": "Statistics Test NonParametric",
          "module": "Statistics.Test.NonParametric",
          "name": "NonParametric",
          "package": "statistics",
          "partial": "Non Parametric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-NonParametric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Test.Types",
          "name": "Types",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics Test Types",
          "module": "Statistics.Test.Types",
          "name": "Types",
          "package": "statistics",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of hypothesis testing\n\u003c/p\u003e",
          "module": "Statistics.Test.Types",
          "name": "TestResult",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Result of hypothesis testing",
          "hierarchy": "Statistics Test Types",
          "module": "Statistics.Test.Types",
          "name": "TestResult",
          "package": "statistics",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest type. Exact meaning depends on a specific test. But\n generally it's tested whether some statistics is too big (small)\n for \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e or whether it too big or too small for \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Test.Types",
          "name": "TestType",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "data"
        },
        "index": {
          "description": "Test type Exact meaning depends on specific test But generally it tested whether some statistics is too big small for OneTailed or whether it too big or too small for TwoTailed",
          "hierarchy": "Statistics Test Types",
          "module": "Statistics.Test.Types",
          "name": "TestType",
          "package": "statistics",
          "partial": "Test Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#t:TestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignificant if parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, not significant otherwiser\n\u003c/p\u003e",
          "module": "Statistics.Test.Types",
          "name": "significant",
          "package": "statistics",
          "signature": "Bool -\u003e TestResult",
          "source": "src/Statistics-Test-Types.html#significant",
          "type": "function"
        },
        "index": {
          "description": "Significant if parameter is True not significant otherwiser",
          "hierarchy": "Statistics Test Types",
          "module": "Statistics.Test.Types",
          "name": "significant",
          "normalized": "Bool-\u003eTestResult",
          "package": "statistics",
          "signature": "Bool-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-Types.html#v:significant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Wilcoxon matched-pairs signed-rank test is non-parametric test\n which could be used to whether two related samples have different\n means.\n\u003c/p\u003e\u003cp\u003eWARNING: current implementation contain critical bugs\n \u003ca\u003ehttps://github.com/bos/statistics/issues/18\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "WilcoxonT",
          "package": "statistics",
          "source": "src/Statistics-Test-WilcoxonT.html",
          "type": "module"
        },
        "index": {
          "description": "The Wilcoxon matched-pairs signed-rank test is non-parametric test which could be used to whether two related samples have different means WARNING current implementation contain critical bugs https github.com bos statistics issues",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "WilcoxonT",
          "package": "statistics",
          "partial": "Wilcoxon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of hypothesis testing\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "TestResult",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Result of hypothesis testing",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "TestResult",
          "package": "statistics",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest type. Exact meaning depends on a specific test. But\n generally it's tested whether some statistics is too big (small)\n for \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e or whether it too big or too small for \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "TestType",
          "package": "statistics",
          "source": "src/Statistics-Test-Types.html#TestType",
          "type": "data"
        },
        "index": {
          "description": "Test type Exact meaning depends on specific test But generally it tested whether some statistics is too big small for OneTailed or whether it too big or too small for TwoTailed",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "TestType",
          "package": "statistics",
          "partial": "Test Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#t:TestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains the critical value of T to compare against, given a sample size\n and a p-value (significance level).  Your T value must be less than or\n equal to the return of this function in order for the test to work out\n significant.  If there is a Nothing return, the sample size is too small to\n make a decision.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewilcoxonSignificant\u003c/code\u003e tests the return value of \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignedRank\u003c/a\u003e\u003c/code\u003e\n for you, so you should use \u003ccode\u003ewilcoxonSignificant\u003c/code\u003e for determining test results.\n  However, this function is useful, for example, for generating lookup tables\n for Wilcoxon signed rank critical values.\n\u003c/p\u003e\u003cp\u003eThe return values of this function are generated using the method detailed in\n the paper \"Critical Values for the Wilcoxon Signed Rank Statistic\", Peter\n Mitic, The Mathematica Journal, volume 6, issue 3, 1996, which can be found\n here: \u003ca\u003ehttp://www.mathematica-journal.com/issue/v6i3/article/mitic/contents/63mitic.pdf\u003c/a\u003e.\n According to that paper, the results may differ from other published lookup tables, but\n (Mitic claims) the values obtained by this function will be the correct ones.\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairCriticalValue",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "Obtains the critical value of to compare against given sample size and p-value significance level Your value must be less than or equal to the return of this function in order for the test to work out significant If there is Nothing return the sample size is too small to make decision wilcoxonSignificant tests the return value of wilcoxonMatchedPairSignedRank for you so you should use wilcoxonSignificant for determining test results However this function is useful for example for generating lookup tables for Wilcoxon signed rank critical values The return values of this function are generated using the method detailed in the paper Critical Values for the Wilcoxon Signed Rank Statistic Peter Mitic The Mathematica Journal volume issue which can be found here http www.mathematica-journal.com issue v6i3 article mitic contents mitic.pdf According to that paper the results may differ from other published lookup tables but Mitic claims the values obtained by this function will be the correct ones",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairCriticalValue",
          "normalized": "Int-\u003eDouble-\u003eMaybe Int",
          "package": "statistics",
          "partial": "Matched Pair Critical Value",
          "signature": "Int-\u003eDouble-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:wilcoxonMatchedPairCriticalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignedRank",
          "package": "statistics",
          "signature": "Sample -\u003e Sample -\u003e (Double, Double)",
          "source": "src/Statistics-Test-WilcoxonT.html#wilcoxonMatchedPairSignedRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignedRank",
          "normalized": "Sample-\u003eSample-\u003e(Double,Double)",
          "package": "statistics",
          "partial": "Matched Pair Signed Rank",
          "signature": "Sample-\u003eSample-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:wilcoxonMatchedPairSignedRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks out the significance level (p-value) of a T value, given a sample\n size and a T value from the Wilcoxon signed-rank matched-pairs test.\n\u003c/p\u003e\u003cp\u003eSee the notes on \u003ccode\u003ewilcoxonCriticalValue\u003c/code\u003e for how this is calculated.\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignificance",
          "package": "statistics",
          "signature": "Int-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Works out the significance level p-value of value given sample size and value from the Wilcoxon signed-rank matched-pairs test See the notes on wilcoxonCriticalValue for how this is calculated",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignificance",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "statistics",
          "partial": "Matched Pair Significance",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:wilcoxonMatchedPairSignificance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether a given result from a Wilcoxon signed-rank matched-pairs test\n is significant at the given level.\n\u003c/p\u003e\u003cp\u003eThis function can perform a one-tailed or two-tailed test.  If the first\n parameter to this function is \u003ccode\u003e\u003ca\u003eTwoTailed\u003c/a\u003e\u003c/code\u003e, the test is performed two-tailed to\n check if the two samples differ significantly.  If the first parameter is\n \u003ccode\u003e\u003ca\u003eOneTailed\u003c/a\u003e\u003c/code\u003e, the check is performed one-tailed to decide whether the first sample\n (i.e. the first sample you passed to \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignedRank\u003c/a\u003e\u003c/code\u003e) is\n greater than the second sample (i.e. the second sample you passed to\n \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignedRank\u003c/a\u003e\u003c/code\u003e).  If you wish to perform a one-tailed test\n in the opposite direction, you can either pass the parameters in a different\n order to \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignedRank\u003c/a\u003e\u003c/code\u003e, or simply swap the values in the resulting\n pair before passing them to this function.\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignificant",
          "package": "statistics",
          "signature": "TestType-\u003e Int-\u003e Double-\u003e (Double, Double)-\u003e Maybe TestResult",
          "type": "function"
        },
        "index": {
          "description": "Tests whether given result from Wilcoxon signed-rank matched-pairs test is significant at the given level This function can perform one-tailed or two-tailed test If the first parameter to this function is TwoTailed the test is performed two-tailed to check if the two samples differ significantly If the first parameter is OneTailed the check is performed one-tailed to decide whether the first sample i.e the first sample you passed to wilcoxonMatchedPairSignedRank is greater than the second sample i.e the second sample you passed to wilcoxonMatchedPairSignedRank If you wish to perform one-tailed test in the opposite direction you can either pass the parameters in different order to wilcoxonMatchedPairSignedRank or simply swap the values in the resulting pair before passing them to this function",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairSignificant",
          "normalized": "TestType-\u003eInt-\u003eDouble-\u003e(Double,Double)-\u003eMaybe TestResult",
          "package": "statistics",
          "partial": "Matched Pair Significant",
          "signature": "TestType-\u003eInt-\u003eDouble-\u003e(Double,Double)-\u003eMaybe TestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:wilcoxonMatchedPairSignificant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Wilcoxon matched-pairs signed-rank test. The samples are\n zipped together: if one is longer than the other, both are\n truncated to the the length of the shorter sample.\n\u003c/p\u003e\u003cp\u003eFor one-tailed test it tests whether first sample is significantly\n greater than the second. For two-tailed it checks whether they\n significantly differ\n\u003c/p\u003e\u003cp\u003eCheck \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignedRank\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ewilcoxonMatchedPairSignificant\u003c/a\u003e\u003c/code\u003e for additional information.\n\u003c/p\u003e",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairTest",
          "package": "statistics",
          "signature": "TestType-\u003e Double-\u003e Sample-\u003e Sample-\u003e Maybe TestResult",
          "type": "function"
        },
        "index": {
          "description": "The Wilcoxon matched-pairs signed-rank test The samples are zipped together if one is longer than the other both are truncated to the the length of the shorter sample For one-tailed test it tests whether first sample is significantly greater than the second For two-tailed it checks whether they significantly differ Check wilcoxonMatchedPairSignedRank and wilcoxonMatchedPairSignificant for additional information",
          "hierarchy": "Statistics Test WilcoxonT",
          "module": "Statistics.Test.WilcoxonT",
          "name": "wilcoxonMatchedPairTest",
          "normalized": "TestType-\u003eDouble-\u003eSample-\u003eSample-\u003eMaybe TestResult",
          "package": "statistics",
          "partial": "Matched Pair Test",
          "signature": "TestType-\u003eDouble-\u003eSample-\u003eSample-\u003eMaybe TestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Test-WilcoxonT.html#v:wilcoxonMatchedPairTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFourier-related transformations of mathematical functions.\n\u003c/p\u003e\u003cp\u003eThese functions are written for simplicity and correctness, not\n speed.  If you need a fast FFT implementation for your application,\n you should strongly consider using a library of FFTW bindings\n instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Transform",
          "name": "Transform",
          "package": "statistics",
          "source": "src/Statistics-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Fourier-related transformations of mathematical functions These functions are written for simplicity and correctness not speed If you need fast FFT implementation for your application you should strongly consider using library of FFTW bindings instead",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "Transform",
          "package": "statistics",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Transform",
          "name": "CD",
          "package": "statistics",
          "source": "src/Statistics-Transform.html#CD",
          "type": "type"
        },
        "index": {
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "CD",
          "package": "statistics",
          "partial": "CD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#t:CD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete cosine transform (DCT-II).\n\u003c/p\u003e",
          "module": "Statistics.Transform",
          "name": "dct",
          "package": "statistics",
          "signature": "Vector Double -\u003e Vector Double",
          "source": "src/Statistics-Transform.html#dct",
          "type": "function"
        },
        "index": {
          "description": "Discrete cosine transform DCT-II",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "dct",
          "normalized": "Vector Double-\u003eVector Double",
          "package": "statistics",
          "signature": "Vector Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:dct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete cosine transform (DCT-II). Only real part of vector is\n   transformed, imaginary part is ignored.\n\u003c/p\u003e",
          "module": "Statistics.Transform",
          "name": "dct_",
          "package": "statistics",
          "signature": "Vector CD -\u003e Vector Double",
          "source": "src/Statistics-Transform.html#dct_",
          "type": "function"
        },
        "index": {
          "description": "Discrete cosine transform DCT-II Only real part of vector is transformed imaginary part is ignored",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "dct_",
          "normalized": "Vector CD-\u003eVector Double",
          "package": "statistics",
          "signature": "Vector CD-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:dct_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-2 decimation-in-time fast Fourier transform.\n\u003c/p\u003e",
          "module": "Statistics.Transform",
          "name": "fft",
          "package": "statistics",
          "signature": "Vector CD -\u003e Vector CD",
          "source": "src/Statistics-Transform.html#fft",
          "type": "function"
        },
        "index": {
          "description": "Radix-2 decimation-in-time fast Fourier transform",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "fft",
          "normalized": "Vector CD-\u003eVector CD",
          "package": "statistics",
          "signature": "Vector CD-\u003eVector CD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse discrete cosine transform (DCT-III). It's inverse of\n \u003ccode\u003e\u003ca\u003edct\u003c/a\u003e\u003c/code\u003e only up to scale parameter:\n\u003c/p\u003e\u003cpre\u003e (idct . dct) x = (* length x)\n\u003c/pre\u003e",
          "module": "Statistics.Transform",
          "name": "idct",
          "package": "statistics",
          "signature": "Vector Double -\u003e Vector Double",
          "source": "src/Statistics-Transform.html#idct",
          "type": "function"
        },
        "index": {
          "description": "Inverse discrete cosine transform DCT-III It inverse of dct only up to scale parameter idct dct length",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "idct",
          "normalized": "Vector Double-\u003eVector Double",
          "package": "statistics",
          "signature": "Vector Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:idct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse discrete cosine transform (DCT-III). Only real part of vector is\n   transformed, imaginary part is ignored.\n\u003c/p\u003e",
          "module": "Statistics.Transform",
          "name": "idct_",
          "package": "statistics",
          "signature": "Vector CD -\u003e Vector Double",
          "source": "src/Statistics-Transform.html#idct_",
          "type": "function"
        },
        "index": {
          "description": "Inverse discrete cosine transform DCT-III Only real part of vector is transformed imaginary part is ignored",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "idct_",
          "normalized": "Vector CD-\u003eVector Double",
          "package": "statistics",
          "signature": "Vector CD-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:idct_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse fast Fourier transform.\n\u003c/p\u003e",
          "module": "Statistics.Transform",
          "name": "ifft",
          "package": "statistics",
          "signature": "Vector CD -\u003e Vector CD",
          "source": "src/Statistics-Transform.html#ifft",
          "type": "function"
        },
        "index": {
          "description": "Inverse fast Fourier transform",
          "hierarchy": "Statistics Transform",
          "module": "Statistics.Transform",
          "name": "ifft",
          "normalized": "Vector CD-\u003eVector CD",
          "package": "statistics",
          "signature": "Vector CD-\u003eVector CD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Transform.html#v:ifft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with statistics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Types",
          "name": "Types",
          "package": "statistics",
          "source": "src/Statistics-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with statistics",
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Types",
          "package": "statistics",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn estimator of a property of a sample, such as its \u003ccode\u003emean\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe use of an algebraic data type here allows functions such as\n \u003ccode\u003ejackknife\u003c/code\u003e and \u003ccode\u003ebootstrapBCA\u003c/code\u003e to use more efficient algorithms\n when possible.\n\u003c/p\u003e",
          "module": "Statistics.Types",
          "name": "Estimator",
          "package": "statistics",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "data"
        },
        "index": {
          "description": "An estimator of property of sample such as its mean The use of an algebraic data type here allows functions such as jackknife and bootstrapBCA to use more efficient algorithms when possible",
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Estimator",
          "package": "statistics",
          "partial": "Estimator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#t:Estimator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample data.\n\u003c/p\u003e",
          "module": "Statistics.Types",
          "name": "Sample",
          "package": "statistics",
          "source": "src/Statistics-Types.html#Sample",
          "type": "type"
        },
        "index": {
          "description": "Sample data",
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Sample",
          "package": "statistics",
          "partial": "Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample with weights. First element of sample is data, second is weight\n\u003c/p\u003e",
          "module": "Statistics.Types",
          "name": "WeightedSample",
          "package": "statistics",
          "source": "src/Statistics-Types.html#WeightedSample",
          "type": "type"
        },
        "index": {
          "description": "Sample with weights First element of sample is data second is weight",
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "WeightedSample",
          "package": "statistics",
          "partial": "Weighted Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#t:WeightedSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeights for affecting the importance of elements of a sample.\n\u003c/p\u003e",
          "module": "Statistics.Types",
          "name": "Weights",
          "package": "statistics",
          "source": "src/Statistics-Types.html#Weights",
          "type": "type"
        },
        "index": {
          "description": "Weights for affecting the importance of elements of sample",
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Weights",
          "package": "statistics",
          "partial": "Weights",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#t:Weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Types",
          "name": "Function",
          "package": "statistics",
          "signature": "Function (Sample -\u003e Double)",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Function",
          "normalized": "Function(Sample-\u003eDouble)",
          "package": "statistics",
          "partial": "Function",
          "signature": "Function(Sample-\u003eDouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Types",
          "name": "Mean",
          "package": "statistics",
          "signature": "Mean",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Mean",
          "package": "statistics",
          "partial": "Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#v:Mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Types",
          "name": "StdDev",
          "package": "statistics",
          "signature": "StdDev",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "StdDev",
          "package": "statistics",
          "partial": "Std Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#v:StdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Types",
          "name": "Variance",
          "package": "statistics",
          "signature": "Variance",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "Variance",
          "package": "statistics",
          "partial": "Variance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#v:Variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Types",
          "name": "VarianceUnbiased",
          "package": "statistics",
          "signature": "VarianceUnbiased",
          "source": "src/Statistics-Types.html#Estimator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Types",
          "module": "Statistics.Types",
          "name": "VarianceUnbiased",
          "package": "statistics",
          "partial": "Variance Unbiased",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statistics/docs/Statistics-Types.html#v:VarianceUnbiased"
      }
    }
  ]
]