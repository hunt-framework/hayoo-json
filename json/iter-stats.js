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
        "word": "iter-stats"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Compat",
          "name": "Compat",
          "package": "iter-stats",
          "source": "src/Statistics-Iteratee-Compat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Compat",
          "module": "Statistics.Iteratee.Compat",
          "name": "Compat",
          "package": "iter-stats",
          "partial": "Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Compat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Compat",
          "name": "ListLikey",
          "package": "iter-stats",
          "source": "src/Statistics-Iteratee-Compat.html#ListLikey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Compat",
          "module": "Statistics.Iteratee.Compat",
          "name": "ListLikey",
          "package": "iter-stats",
          "partial": "List Likey",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Compat.html#t:ListLikey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Sample",
          "name": "Sample",
          "package": "iter-stats",
          "source": "src/Statistics-Iteratee-Sample.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "Sample",
          "package": "iter-stats",
          "partial": "Sample",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Harmonic mean.\n\u003c/p\u003e",
          "module": "Statistics.Iteratee.Sample",
          "name": "harmonicMean",
          "package": "iter-stats",
          "signature": "Iteratee s m el",
          "source": "src/Statistics-Iteratee-Sample.html#harmonicMean",
          "type": "function"
        },
        "index": {
          "description": "Harmonic mean",
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "harmonicMean",
          "package": "iter-stats",
          "partial": "Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:harmonicMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Arithmetic mean.  Uses Welford's algorithm.\n\u003c/p\u003e",
          "module": "Statistics.Iteratee.Sample",
          "name": "mean",
          "package": "iter-stats",
          "signature": "Iteratee s m el",
          "source": "src/Statistics-Iteratee-Sample.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic mean Uses Welford algorithm",
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "mean",
          "package": "iter-stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Sample",
          "name": "minMaxNBy",
          "package": "iter-stats",
          "signature": "Int -\u003e (el -\u003e prio) -\u003e Iteratee s m ([(prio, el)], [(prio, el)])",
          "source": "src/Statistics-Iteratee-Sample.html#minMaxNBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "minMaxNBy",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eIteratee c d([(b,a)],[(b,a)])",
          "package": "iter-stats",
          "partial": "Max NBy",
          "signature": "Int-\u003e(el-\u003eprio)-\u003eIteratee s m([(prio,el)],[(prio,el)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:minMaxNBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Range. The difference between the largest and smallest elements of\n a stream.\n\u003c/p\u003e",
          "module": "Statistics.Iteratee.Sample",
          "name": "range",
          "package": "iter-stats",
          "signature": "Iteratee s m el",
          "source": "src/Statistics-Iteratee-Sample.html#range",
          "type": "function"
        },
        "index": {
          "description": "Range The difference between the largest and smallest elements of stream",
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "range",
          "package": "iter-stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e/O(n) Standard deviation, using Knuth's algorithm.\n\u003c/p\u003e",
          "module": "Statistics.Iteratee.Sample",
          "name": "stdDev",
          "package": "iter-stats",
          "signature": "Iteratee s m b",
          "source": "src/Statistics-Iteratee-Sample.html#stdDev",
          "type": "function"
        },
        "index": {
          "description": "Standard deviation using Knuth algorithm",
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "stdDev",
          "package": "iter-stats",
          "partial": "Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Maximum likelihood estimate of a sample's variance, using Knuth's\n   algorithm.\n\u003c/p\u003e",
          "module": "Statistics.Iteratee.Sample",
          "name": "variance",
          "package": "iter-stats",
          "signature": "Iteratee s m b",
          "source": "src/Statistics-Iteratee-Sample.html#variance",
          "type": "function"
        },
        "index": {
          "description": "Maximum likelihood estimate of sample variance using Knuth algorithm",
          "hierarchy": "Statistics Iteratee Sample",
          "module": "Statistics.Iteratee.Sample",
          "name": "variance",
          "package": "iter-stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Sample.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esome functions for working with uniformly-sampled data\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Statistics.Iteratee.Uniform",
          "name": "Uniform",
          "package": "iter-stats",
          "source": "src/Statistics-Iteratee-Uniform.html",
          "type": "module"
        },
        "index": {
          "description": "some functions for working with uniformly-sampled data",
          "hierarchy": "Statistics Iteratee Uniform",
          "module": "Statistics.Iteratee.Uniform",
          "name": "Uniform",
          "package": "iter-stats",
          "partial": "Uniform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Uniform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Uniform",
          "name": "movingAverage",
          "package": "iter-stats",
          "signature": "Int -\u003e Enumeratee s [el] m a",
          "source": "src/Statistics-Iteratee-Uniform.html#movingAverage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Uniform",
          "module": "Statistics.Iteratee.Uniform",
          "name": "movingAverage",
          "normalized": "Int-\u003eEnumeratee a[b]c d",
          "package": "iter-stats",
          "partial": "Average",
          "signature": "Int-\u003eEnumeratee s[el]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Uniform.html#v:movingAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee.Uniform",
          "name": "someRollingFunction",
          "package": "iter-stats",
          "signature": "Int -\u003e (s -\u003e summary) -\u003e Enumeratee s [summary] m a",
          "source": "src/Statistics-Iteratee-Uniform.html#someRollingFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Statistics Iteratee Uniform",
          "module": "Statistics.Iteratee.Uniform",
          "name": "someRollingFunction",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eEnumeratee a[b]c d",
          "package": "iter-stats",
          "partial": "Rolling Function",
          "signature": "Int-\u003e(s-\u003esummary)-\u003eEnumeratee s[summary]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee-Uniform.html#v:someRollingFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Statistics.Iteratee",
          "name": "Iteratee",
          "package": "iter-stats",
          "source": "src/Statistics-Iteratee.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Statistics Iteratee",
          "module": "Statistics.Iteratee",
          "name": "Iteratee",
          "package": "iter-stats",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iter-stats/docs/Statistics-Iteratee.html#"
      }
    }
  ]
]