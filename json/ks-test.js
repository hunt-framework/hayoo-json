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
        "word": "ks-test"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCDF of Kolmogorov's D-statistic, parameterized by sample size\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "Kolmogorov",
          "package": "ks-test",
          "source": "src/Data-Random-Distribution-Kolmogorov.html",
          "type": "module"
        },
        "index": {
          "description": "CDF of Kolmogorov D-statistic parameterized by sample size",
          "hierarchy": "Data Random Distribution Kolmogorov",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "Kolmogorov",
          "package": "ks-test",
          "partial": "Kolmogorov",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Data-Random-Distribution-Kolmogorov.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "D",
          "package": "ks-test",
          "source": "src/Data-Random-Distribution-Kolmogorov.html#D",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Kolmogorov",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "D",
          "package": "ks-test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Data-Random-Distribution-Kolmogorov.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "D",
          "package": "ks-test",
          "signature": "D Int",
          "source": "src/Data-Random-Distribution-Kolmogorov.html#D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Kolmogorov",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "D",
          "package": "ks-test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Data-Random-Distribution-Kolmogorov.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "kCdf",
          "package": "ks-test",
          "signature": "b -\u003e a -\u003e a",
          "source": "src/Data-Random-Distribution-Kolmogorov.html#kCdf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Kolmogorov",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "kCdf",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ks-test",
          "partial": "Cdf",
          "signature": "b-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Data-Random-Distribution-Kolmogorov.html#v:kCdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ekCdf\u003c/a\u003e\u003c/code\u003e with Marsaglia's long-computation shortcut approximation.\n Accurate to about 7 decimal places in the right tail of the distribution.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "kCdfQuick",
          "package": "ks-test",
          "signature": "b -\u003e a -\u003e a",
          "source": "src/Data-Random-Distribution-Kolmogorov.html#kCdfQuick",
          "type": "function"
        },
        "index": {
          "description": "kCdf with Marsaglia long-computation shortcut approximation Accurate to about decimal places in the right tail of the distribution",
          "hierarchy": "Data Random Distribution Kolmogorov",
          "module": "Data.Random.Distribution.Kolmogorov",
          "name": "kCdfQuick",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ks-test",
          "partial": "Cdf Quick",
          "signature": "b-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Data-Random-Distribution-Kolmogorov.html#v:kCdfQuick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.KSTest",
          "name": "KSTest",
          "package": "ks-test",
          "source": "src/Math-Statistics-KSTest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Statistics KSTest",
          "module": "Math.Statistics.KSTest",
          "name": "KSTest",
          "package": "ks-test",
          "partial": "KSTest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Math-Statistics-KSTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eKS\u003c/a\u003e\u003c/code\u003e distribution: not really a standard mathematical concept, but still\n a nice conceptual shift.  \u003ccode\u003eKS n d\u003c/code\u003e is the distribution of a random\n variable constructed as a list of \u003ccode\u003en\u003c/code\u003e independent random variables of\n distribution \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe corresponding \u003ccode\u003e\u003ca\u003eCDF\u003c/a\u003e\u003c/code\u003e instance implements the K-S test for such lists.\n For example, if \u003ccode\u003exs\u003c/code\u003e is a list of length 100 believed to contain Beta(2,5)\n variates, then \u003ccode\u003ecdf (KS 100 (Beta 2 5))\u003c/code\u003e is the K-S test for that distribution.\n (Note that if \u003ccode\u003elength xs\u003c/code\u003e is not 100, then the result will be 0 because\n such lists cannot arise from that \u003ccode\u003e\u003ca\u003eKS\u003c/a\u003e\u003c/code\u003e distribution.  Somewhat arbitrarily,\n all lists of \"impossible\" length are grouped at the bottom of the ordering\n encoded by the \u003ccode\u003e\u003ca\u003eCDF\u003c/a\u003e\u003c/code\u003e instance.)\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKS\u003c/a\u003e\u003c/code\u003e test can easily be applied recursively.\n For example, if \u003ccode\u003ed\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e of interest and you have 100 trials\n each with 100 data points, you can test it by calling \u003ccode\u003ecdf (KS 100 (KS 100 d))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Statistics.KSTest",
          "name": "KS",
          "package": "ks-test",
          "source": "src/Math-Statistics-KSTest.html#KS",
          "type": "data"
        },
        "index": {
          "description": "KS distribution not really standard mathematical concept but still nice conceptual shift KS is the distribution of random variable constructed as list of independent random variables of distribution The corresponding CDF instance implements the K-S test for such lists For example if xs is list of length believed to contain Beta variates then cdf KS Beta is the K-S test for that distribution Note that if length xs is not then the result will be because such lists cannot arise from that KS distribution Somewhat arbitrarily all lists of impossible length are grouped at the bottom of the ordering encoded by the CDF instance The KS test can easily be applied recursively For example if is Distribution of interest and you have trials each with data points you can test it by calling cdf KS KS",
          "hierarchy": "Math Statistics KSTest",
          "module": "Math.Statistics.KSTest",
          "name": "KS",
          "package": "ks-test",
          "partial": "KS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Math-Statistics-KSTest.html#t:KS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Statistics.KSTest",
          "name": "KS",
          "package": "ks-test",
          "signature": "Int -\u003e !(d a) -\u003e KS d [a]",
          "source": "src/Math-Statistics-KSTest.html#KS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Statistics KSTest",
          "module": "Math.Statistics.KSTest",
          "name": "KS",
          "normalized": "Int-\u003e(a b)-\u003eKS a[b]",
          "package": "ks-test",
          "partial": "KS",
          "signature": "Int-\u003e(d a)-\u003eKS d[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Math-Statistics-KSTest.html#v:KS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKolmogorov-Smirnov statistic for a set of data relative to a (continuous)\n distribution with the given CDF.  Returns 3 common forms of the statistic:\n (K+, K-, D), where K+ and K- are Smirnov's one-sided forms as presented in\n Knuth's Semi-Numerical Algorithms (TAOCP, vol. 2)  and D is Kolmogorov's\n undirected version.\n\u003c/p\u003e\u003cp\u003eIn particular,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e   K+ = sup(x -\u003e F_n(x) - F(x))\n *   K- = sup(x -\u003e F(x) - F_n(x))\n *   D  = sup(x -\u003e abs(F_n(x) - F(x)))\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Math.Statistics.KSTest",
          "name": "ks",
          "package": "ks-test",
          "signature": "(a -\u003e t) -\u003e a1 -\u003e [a] -\u003e (t, t, t)",
          "source": "src/Math-Statistics-KSTest.html#ks",
          "type": "function"
        },
        "index": {
          "description": "Kolmogorov-Smirnov statistic for set of data relative to continuous distribution with the given CDF Returns common forms of the statistic where and are Smirnov one-sided forms as presented in Knuth Semi-Numerical Algorithms TAOCP vol and is Kolmogorov undirected version In particular sup sup sup abs",
          "hierarchy": "Math Statistics KSTest",
          "module": "Math.Statistics.KSTest",
          "name": "ks",
          "normalized": "(a-\u003eb)-\u003ea-\u003e[a]-\u003e(b,b,b)",
          "package": "ks-test",
          "signature": "(a-\u003et)-\u003ea-\u003e[a]-\u003e(t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Math-Statistics-KSTest.html#v:ks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eksTest cdf xs\u003c/code\u003e \n Computes the probability of a random data set (of the same size as xs)\n drawn from a continuous distribution with the given CDF having the same\n Kolmogorov statistic as xs.\n\u003c/p\u003e\u003cp\u003eThe statistic is the greatest absolute deviation of the empirical CDF of\n XS from the assumed CDF \u003ccode\u003ecdf\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the data were, in fact, drawn from a distribution with the given CDF,\n then the resulting p-value should be uniformly distributed over (0,1].\n\u003c/p\u003e",
          "module": "Math.Statistics.KSTest",
          "name": "ksTest",
          "package": "ks-test",
          "signature": "(a -\u003e a1) -\u003e [a] -\u003e a1",
          "source": "src/Math-Statistics-KSTest.html#ksTest",
          "type": "function"
        },
        "index": {
          "description": "ksTest cdf xs Computes the probability of random data set of the same size as xs drawn from continuous distribution with the given CDF having the same Kolmogorov statistic as xs The statistic is the greatest absolute deviation of the empirical CDF of XS from the assumed CDF cdf If the data were in fact drawn from distribution with the given CDF then the resulting p-value should be uniformly distributed over",
          "hierarchy": "Math Statistics KSTest",
          "module": "Math.Statistics.KSTest",
          "name": "ksTest",
          "normalized": "(a-\u003ea)-\u003e[a]-\u003ea",
          "package": "ks-test",
          "partial": "Test",
          "signature": "(a-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ks-test/docs/Math-Statistics-KSTest.html#v:ksTest"
      }
    }
  ]
]