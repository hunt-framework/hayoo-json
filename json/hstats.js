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
        "word": "hstats"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics",
          "name": "Statistics",
          "package": "hstats",
          "source": "src/Math-Statistics.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "Statistics",
          "package": "hstats",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "average",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#average",
          "type": "function"
        },
        "index": {
          "description": "Same as mean",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "average",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage deviation\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "avgdev",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#avgdev",
          "type": "function"
        },
        "index": {
          "description": "Average deviation",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "avgdev",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:avgdev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentral moments\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "centralMoment",
          "package": "hstats",
          "signature": "[b] -\u003e t -\u003e b",
          "source": "src/Math-Statistics.html#centralMoment",
          "type": "function"
        },
        "index": {
          "description": "Central moments",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "centralMoment",
          "normalized": "[a]-\u003eb-\u003ea",
          "package": "hstats",
          "partial": "Moment",
          "signature": "[b]-\u003et-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:centralMoment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epearson\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "correl",
          "package": "hstats",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Math-Statistics.html#correl",
          "type": "function"
        },
        "index": {
          "description": "Same as pearson",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "correl",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:correl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCovariance matrix\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "covMatrix",
          "package": "hstats",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Math-Statistics.html#covMatrix",
          "type": "function"
        },
        "index": {
          "description": "Covariance matrix",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "covMatrix",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "hstats",
          "partial": "Matrix",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:covMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample Covariance\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "covar",
          "package": "hstats",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Math-Statistics.html#covar",
          "type": "function"
        },
        "index": {
          "description": "Sample Covariance",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "covar",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:covar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the sum of square deviations from their sample mean.\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "devsq",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#devsq",
          "type": "function"
        },
        "index": {
          "description": "Returns the sum of square deviations from their sample mean",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "devsq",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:devsq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeometric mean\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "geomean",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#geomean",
          "type": "function"
        },
        "index": {
          "description": "Geometric mean",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "geomean",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:geomean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHarmonic mean\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "harmean",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#harmean",
          "type": "function"
        },
        "index": {
          "description": "Harmonic mean",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "harmean",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:harmean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeast-squares linear regression of \u003cem\u003ey\u003c/em\u003e against \u003cem\u003ex\u003c/em\u003e for a\n |collection of (\u003cem\u003ex\u003c/em\u003e, \u003cem\u003ey\u003c/em\u003e) data, in the form of (\u003cem\u003eb0\u003c/em\u003e, \u003cem\u003eb1\u003c/em\u003e, \u003cem\u003er\u003c/em\u003e)\n |where the regression is \u003cem\u003ey\u003c/em\u003e = \u003cem\u003eb0\u003c/em\u003e + \u003cem\u003eb1\u003c/em\u003e * \u003cem\u003ex\u003c/em\u003e with Pearson\n |coefficient \u003cem\u003er\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "linreg",
          "package": "hstats",
          "signature": "[(b, b)] -\u003e (b, b, b)",
          "source": "src/Math-Statistics.html#linreg",
          "type": "function"
        },
        "index": {
          "description": "Least-squares linear regression of against for collection of data in the form of b0 b1 where the regression is b0 b1 with Pearson coefficient",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "linreg",
          "normalized": "[(a,a)]-\u003e(a,a,a)",
          "package": "hstats",
          "signature": "[(b,b)]-\u003e(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:linreg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumerically stable mean\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "mean",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Numerically stable mean",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "mean",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedian\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "median",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#median",
          "type": "function"
        },
        "index": {
          "description": "Median",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "median",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMode returns the mode of the list, otherwise Nothing\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "mode",
          "package": "hstats",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Math-Statistics.html#mode",
          "type": "function"
        },
        "index": {
          "description": "Mode returns the mode of the list otherwise Nothing",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "mode",
          "normalized": "[a]-\u003eMaybe a",
          "package": "hstats",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModes returns a sorted list of modes in descending order\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "modes",
          "package": "hstats",
          "signature": "[a] -\u003e [(Int, a)]",
          "source": "src/Math-Statistics.html#modes",
          "type": "function"
        },
        "index": {
          "description": "Modes returns sorted list of modes in descending order",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "modes",
          "normalized": "[a]-\u003e[(Int,a)]",
          "package": "hstats",
          "signature": "[a]-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:modes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePearson's product-moment correlation coefficient\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "pearson",
          "package": "hstats",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Math-Statistics.html#pearson",
          "type": "function"
        },
        "index": {
          "description": "Pearson product-moment correlation coefficient",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "pearson",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:pearson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates pearson skew\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "pearsonSkew1",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#pearsonSkew1",
          "type": "function"
        },
        "index": {
          "description": "Calculates pearson skew",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "pearsonSkew1",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "partial": "Skew",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:pearsonSkew1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics",
          "name": "pearsonSkew2",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#pearsonSkew2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "pearsonSkew2",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "partial": "Skew",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:pearsonSkew2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePopulation variance\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "pvar",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#pvar",
          "type": "function"
        },
        "index": {
          "description": "Population variance",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "pvar",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:pvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample variance\n\u003c/p\u003e\u003cp\u003eInterquartile range\n\u003c/p\u003e\u003cp\u003eArbitrary quantile q of an unsorted list.  The quantile \u003cem\u003eq\u003c/em\u003e of \u003cem\u003eN\u003c/em\u003e\n |data points is the point whose (zero-based) index in the sorted\n |data set is closest to \u003cem\u003eq(N-1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "quantile",
          "package": "hstats",
          "signature": "Double -\u003e [b] -\u003e b",
          "source": "src/Math-Statistics.html#quantile",
          "type": "function"
        },
        "index": {
          "description": "Sample variance Interquartile range Arbitrary quantile of an unsorted list The quantile of data points is the point whose zero-based index in the sorted data set is closest to N-1",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "quantile",
          "normalized": "Double-\u003e[a]-\u003ea",
          "package": "hstats",
          "signature": "Double-\u003e[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:quantile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003equantile\u003c/a\u003e\u003c/code\u003e specialized for sorted data\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "quantileAsc",
          "package": "hstats",
          "signature": "Double -\u003e [b] -\u003e b",
          "source": "src/Math-Statistics.html#quantileAsc",
          "type": "function"
        },
        "index": {
          "description": "As quantile specialized for sorted data",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "quantileAsc",
          "normalized": "Double-\u003e[a]-\u003ea",
          "package": "hstats",
          "partial": "Asc",
          "signature": "Double-\u003e[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:quantileAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "range",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#range",
          "type": "function"
        },
        "index": {
          "description": "Range",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "range",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate skew\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "skew",
          "package": "hstats",
          "signature": "[b] -\u003e b",
          "source": "src/Math-Statistics.html#skew",
          "type": "function"
        },
        "index": {
          "description": "Calculate skew",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "skew",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:skew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard deviation of sample\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "stddev",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#stddev",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation of sample",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "stddev",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:stddev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard deviation of population\n\u003c/p\u003e",
          "module": "Math.Statistics",
          "name": "stddevp",
          "package": "hstats",
          "signature": "[a] -\u003e a",
          "source": "src/Math-Statistics.html#stddevp",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation of population",
          "hierarchy": "Math Statistics",
          "module": "Math.Statistics",
          "name": "stddevp",
          "normalized": "[a]-\u003ea",
          "package": "hstats",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstats/docs/Math-Statistics.html#v:stddevp"
      }
    }
  ]
]