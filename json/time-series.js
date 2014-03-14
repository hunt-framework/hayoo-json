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
        "word": "time-series"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for correlation analysis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Correlation",
          "name": "Correlation",
          "package": "time-series",
          "source": "src/TimeSeries-Correlation.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for correlation analysis",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "Correlation",
          "package": "time-series",
          "partial": "Correlation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "chunks",
          "package": "time-series",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/TimeSeries-Correlation.html#chunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "chunks",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "time-series",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect computation of correlation of two windows X and Y.\n Resulting value \u003cem\u003er\u003c/em\u003e is:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://bit.ly/15XPwC3\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient#Definition\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWhere: X&#772; is mean of X, Xi is i-th element of X.\n\u003c/p\u003e",
          "module": "TimeSeries.Correlation",
          "name": "direct",
          "package": "time-series",
          "signature": "Window -\u003e Window -\u003e Double",
          "source": "src/TimeSeries-Correlation.html#direct",
          "type": "function"
        },
        "index": {
          "description": "Direct computation of correlation of two windows and Resulting value is See http en.wikipedia.org wiki Pearson product-moment correlation coefficient Definition Where is mean of Xi is i-th element of",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "direct",
          "normalized": "Window-\u003eWindow-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eWindow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "dotp",
          "package": "time-series",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/TimeSeries-Correlation.html#dotp",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "dotp",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:dotp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "len",
          "package": "time-series",
          "signature": "[a] -\u003e b",
          "source": "src/TimeSeries-Correlation.html#len",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "len",
          "normalized": "[a]-\u003eb",
          "package": "time-series",
          "signature": "[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "mean",
          "package": "time-series",
          "signature": "[a] -\u003e a",
          "source": "src/TimeSeries-Correlation.html#mean",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "mean",
          "normalized": "[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector norm:\n\u003c/p\u003e\u003cpre\u003e norm as = sqrt $ sum [a^2|a \u003c- as]\n\u003c/pre\u003e",
          "module": "TimeSeries.Correlation",
          "name": "norm",
          "package": "time-series",
          "signature": "[a] -\u003e a",
          "source": "src/TimeSeries-Correlation.html#norm",
          "type": "function"
        },
        "index": {
          "description": "Vector norm norm as sqrt sum as",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "norm",
          "normalized": "[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch distance based correlation.\n\u003c/p\u003e",
          "module": "TimeSeries.Correlation",
          "name": "sketch",
          "package": "time-series",
          "signature": "Window-\u003e Window-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Sketch distance based correlation",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "sketch",
          "normalized": "Window-\u003eWindow-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eWindow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:sketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch distance.\n\u003c/p\u003e",
          "module": "TimeSeries.Correlation",
          "name": "sketch_distance",
          "package": "time-series",
          "signature": "Int-\u003e [Double]-\u003e [Double]-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Sketch distance",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "sketch_distance",
          "normalized": "Int-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "Int-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:sketch_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNaive correlation from sketch distance, using:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://bit.ly/1fWIkjp\"/\u003e\n\u003c/p\u003e\u003cp\u003esketch distance is computated without incremental update.\n\u003c/p\u003e",
          "module": "TimeSeries.Correlation",
          "name": "sketch_naive",
          "package": "time-series",
          "signature": "[Window]-\u003e Int-\u003e Window-\u003e Window-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Naive correlation from sketch distance using sketch distance is computated without incremental update",
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "sketch_naive",
          "normalized": "[Window]-\u003eInt-\u003eWindow-\u003eWindow-\u003eDouble",
          "package": "time-series",
          "signature": "[Window]-\u003eInt-\u003eWindow-\u003eWindow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:sketch_naive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "square",
          "package": "time-series",
          "signature": "a -\u003e a",
          "source": "src/TimeSeries-Correlation.html#square",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "square",
          "normalized": "a-\u003ea",
          "package": "time-series",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "stddev",
          "package": "time-series",
          "signature": "[Double] -\u003e Double",
          "source": "src/TimeSeries-Correlation.html#stddev",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "stddev",
          "normalized": "[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:stddev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Correlation",
          "name": "stddev'",
          "package": "time-series",
          "signature": "Window -\u003e Double",
          "source": "src/TimeSeries-Correlation.html#stddev%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Correlation",
          "module": "TimeSeries.Correlation",
          "name": "stddev'",
          "normalized": "Window-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Correlation.html#v:stddev-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing pseudorandom 64-bit words.\nWe use RC5 as a basis for our PRG.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "source": "src/TimeSeries-PRG64.html",
          "type": "module"
        },
        "index": {
          "description": "Computing pseudorandom bit words We use RC5 as basis for our PRG",
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "partial": "PRG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "source": "src/TimeSeries-PRG64.html#PRG64",
          "type": "data"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "partial": "PRG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#t:PRG64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "signature": "PRG64",
          "source": "src/TimeSeries-PRG64.html#PRG64",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "PRG64",
          "package": "time-series",
          "partial": "PRG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:PRG64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "generateRandomVectorsCSV",
          "package": "time-series",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e String",
          "source": "src/TimeSeries-PRG64.html#generateRandomVectorsCSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "generateRandomVectorsCSV",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003eString",
          "package": "time-series",
          "partial": "Random Vectors CSV",
          "signature": "Integer-\u003eInt-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:generateRandomVectorsCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "prg64A",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-PRG64.html#PRG64",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64A",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "prg64B",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-PRG64.html#PRG64",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64B",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "prg64Bits",
          "package": "time-series",
          "signature": "PRG64 -\u003e [[a]]",
          "source": "src/TimeSeries-PRG64.html#prg64Bits",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64Bits",
          "normalized": "PRG-\u003e[[a]]",
          "package": "time-series",
          "partial": "Bits",
          "signature": "PRG-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64Bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.PRG64",
          "name": "prg64Init",
          "package": "time-series",
          "signature": "Integer -\u003e PRG64",
          "source": "src/TimeSeries-PRG64.html#prg64Init",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64Init",
          "normalized": "Integer-\u003ePRG",
          "package": "time-series",
          "partial": "Init",
          "signature": "Integer-\u003ePRG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64Init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey pairs for rounds a-la RC5. We have to have at lest 6 rounds for\n avalanche effect.\n\u003c/p\u003e",
          "module": "TimeSeries.PRG64",
          "name": "prg64Keys",
          "package": "time-series",
          "signature": "[(Word64, Word64)]",
          "source": "src/TimeSeries-PRG64.html#prg64Keys",
          "type": "function"
        },
        "index": {
          "description": "Key pairs for rounds a-la RC5 We have to have at lest rounds for avalanche effect",
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64Keys",
          "normalized": "[(Word,Word)]",
          "package": "time-series",
          "partial": "Keys",
          "signature": "[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the next value.\n\u003c/p\u003e",
          "module": "TimeSeries.PRG64",
          "name": "prg64Next",
          "package": "time-series",
          "signature": "PRG64 -\u003e (PRG64, Word64)",
          "source": "src/TimeSeries-PRG64.html#prg64Next",
          "type": "function"
        },
        "index": {
          "description": "Compute the next value",
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "prg64Next",
          "normalized": "PRG-\u003e(PRG,Word)",
          "package": "time-series",
          "partial": "Next",
          "signature": "PRG-\u003e(PRG,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:prg64Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom unit vector and control vector, with specified size.\n\u003c/p\u003e\u003cp\u003eSame random sequence will returned with same seed, so that sketch\n distance could be calculated with same random sequence.\n\u003c/p\u003e",
          "module": "TimeSeries.PRG64",
          "name": "rnd",
          "package": "time-series",
          "signature": "Word64-\u003e Word64-\u003e Integer-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Random unit vector and control vector with specified size Same random sequence will returned with same seed so that sketch distance could be calculated with same random sequence",
          "hierarchy": "TimeSeries PRG64",
          "module": "TimeSeries.PRG64",
          "name": "rnd",
          "normalized": "Word-\u003eWord-\u003eInteger-\u003e([Double],[Double])",
          "package": "time-series",
          "signature": "Word-\u003eWord-\u003eInteger-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-PRG64.html#v:rnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat conversion for plotting data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Plot",
          "name": "Plot",
          "package": "time-series",
          "source": "src/TimeSeries-Plot.html",
          "type": "module"
        },
        "index": {
          "description": "Format conversion for plotting data",
          "hierarchy": "TimeSeries Plot",
          "module": "TimeSeries.Plot",
          "name": "Plot",
          "package": "time-series",
          "partial": "Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Plot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActual work for plotting.\n\u003c/p\u003e",
          "module": "TimeSeries.Plot",
          "name": "rho09",
          "package": "time-series",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/TimeSeries-Plot.html#rho09",
          "type": "function"
        },
        "index": {
          "description": "Actual work for plotting",
          "hierarchy": "TimeSeries Plot",
          "module": "TimeSeries.Plot",
          "name": "rho09",
          "normalized": "FilePath-\u003eIO()",
          "package": "time-series",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Plot.html#v:rho09"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erho09_100000\u003c/a\u003e\u003c/code\u003e, but using fewer input data.\n\u003c/p\u003e",
          "module": "TimeSeries.Plot",
          "name": "rho09_10000",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Plot.html#rho09_10000",
          "type": "function"
        },
        "index": {
          "description": "Like rho09 but using fewer input data",
          "hierarchy": "TimeSeries Plot",
          "module": "TimeSeries.Plot",
          "name": "rho09_10000",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Plot.html#v:rho09_10000"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead correlated data from sample csv file and convert to format\n fed to \"tplot\" from timeplot package.\n\u003c/p\u003e\u003cp\u003eE.g. Plot to \"out.png\":\n\u003c/p\u003e\u003cpre\u003e $ tplot -if rho09.tmp -o out.png -or 1920x1080 -tf '%s' -dk lines\n\u003c/pre\u003e",
          "module": "TimeSeries.Plot",
          "name": "rho09_100000",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Plot.html#rho09_100000",
          "type": "function"
        },
        "index": {
          "description": "Read correlated data from sample csv file and convert to format fed to tplot from timeplot package E.g Plot to out.png tplot if rho09.tmp out.png or x1080 tf dk lines",
          "hierarchy": "TimeSeries Plot",
          "module": "TimeSeries.Plot",
          "name": "rho09_100000",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Plot.html#v:rho09_100000"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData routing for time series analysis.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Routing",
          "name": "Routing",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html",
          "type": "module"
        },
        "index": {
          "description": "Data routing for time series analysis",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Routing",
          "package": "time-series",
          "partial": "Routing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary of basic window.\n\u003c/p\u003e\u003cp\u003eFrom \"3.5 The Issues in Implementation section\":\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e... We need to maintain\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Xbw&#8305;&#8901;R\n\u003c/li\u003e\u003cli\u003e sum(Xbw&#8305;)\n\u003c/li\u003e\u003cli\u003e sum((Xbw&#8305;)&#178;)\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003efor each basic window.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "BWSummary",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#BWSummary",
          "type": "data"
        },
        "index": {
          "description": "Summary of basic window From The Issues in Implementation section We need to maintain Xbw sum Xbw sum Xbw for each basic window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "BWSummary",
          "package": "time-series",
          "partial": "BWSummary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:BWSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresenting basic windows as \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eKey of outer \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e is ID for concurrent input stream, number of\n keys matches to number of concurrent input stream. Inner \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e\n is indexed basic window within sliding window, number of elements\n matches to \u003cem\u003enb\u003c/em\u003e, where `nb = sw \u003cem\u003e bw`, \u003c/em\u003esw/ is sliding window size\n and \u003cem\u003ebw\u003c/em\u003e is basic window size.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "BasicWindows",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#BasicWindows",
          "type": "type"
        },
        "index": {
          "description": "Representing basic windows as IntMap of Seq of Window Key of outer IntMap is ID for concurrent input stream number of keys matches to number of concurrent input stream Inner Seq is indexed basic window within sliding window number of elements matches to nb where nb sw bw sw is sliding window size and bw is basic window size",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "BasicWindows",
          "package": "time-series",
          "partial": "Basic Windows",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:BasicWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration values for detecting correlations from\n uncooperative time series data.\n\u003c/p\u003e\u003cp\u003eThis data type shall relate to bootstrapping in future, but at the\n moment, nothing related.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Config",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration values for detecting correlations from uncooperative time series data This data type shall relate to bootstrapping in future but at the moment nothing related",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Config",
          "package": "time-series",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of correlation analysis.\n\u003c/p\u003e\u003cp\u003eInspired from output found in \"statStream\". See:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://cs.nyu.edu/cs/faculty/shasha/papers/statstream/doc.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "TimeSeries.Routing",
          "name": "CorrResult",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "data"
        },
        "index": {
          "description": "Result of correlation analysis Inspired from output found in statStream See http cs.nyu.edu cs faculty shasha papers statstream doc.html",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "CorrResult",
          "package": "time-series",
          "partial": "Corr Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:CorrResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementations.\n\u003c/p\u003e\u003cp\u003eAs for a prototype, used to analyse and compre resulting values for\n different implementations.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Implementation",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#Implementation",
          "type": "data"
        },
        "index": {
          "description": "Implementations As for prototype used to analyse and compre resulting values for different implementations",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Implementation",
          "package": "time-series",
          "partial": "Implementation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:Implementation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop for analysing correlation of input data and updating\n analysis results and windowed data.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Loop",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#Loop",
          "type": "newtype"
        },
        "index": {
          "description": "Loop for analysing correlation of input data and updating analysis results and windowed data",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Loop",
          "package": "time-series",
          "partial": "Loop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary of sliding window.\n\u003c/p\u003e\u003cp\u003eWe don't need to maintain whole basic windows when sketch\n implementation is the only concern. To show correlation values with\n direct function, preserving the whole basic window contents. From\n \"3.5 The Issues in Implementation section\":\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e... We need to maintain\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e &#8721;i=0,nb-1(sum(Xbw&#8305;))\n\u003c/li\u003e\u003cli\u003e &#8721;i=0,nb-1(sum((Xbw&#8305;)&#178;))\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003efor a sliding window ...\u003c/em\u003e\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Summary",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "Summary of sliding window We don need to maintain whole basic windows when sketch implementation is the only concern To show correlation values with direct function preserving the whole basic window contents From The Issues in Implementation section We need to maintain nb-1 sum Xbw nb-1 sum Xbw for sliding window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Summary",
          "package": "time-series",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState stored in analysis system.\n\u003c/p\u003e\u003cp\u003eLater this shall relate to memory data in hardware implementation,\n but at the moment its 100% Haskell data type and values.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "SysState",
          "package": "time-series",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "data"
        },
        "index": {
          "description": "State stored in analysis system Later this shall relate to memory data in hardware implementation but at the moment its Haskell data type and values",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "SysState",
          "package": "time-series",
          "partial": "Sys State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#t:SysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "BWSummary",
          "package": "time-series",
          "signature": "BWSummary",
          "source": "src/TimeSeries-Routing.html#BWSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "BWSummary",
          "package": "time-series",
          "partial": "BWSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:BWSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "Config",
          "package": "time-series",
          "signature": "Config",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Config",
          "package": "time-series",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "CorrResult",
          "package": "time-series",
          "signature": "CorrResult",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "CorrResult",
          "package": "time-series",
          "partial": "Corr Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:CorrResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect correlation computation.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Direct",
          "package": "time-series",
          "signature": "Direct",
          "source": "src/TimeSeries-Routing.html#Implementation",
          "type": "function"
        },
        "index": {
          "description": "Direct correlation computation",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Direct",
          "package": "time-series",
          "partial": "Direct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:Direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "Loop",
          "package": "time-series",
          "signature": "Loop",
          "source": "src/TimeSeries-Routing.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Loop",
          "package": "time-series",
          "partial": "Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch based computation.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "Sketch",
          "package": "time-series",
          "signature": "Sketch",
          "source": "src/TimeSeries-Routing.html#Implementation",
          "type": "function"
        },
        "index": {
          "description": "Sketch based computation",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Sketch",
          "package": "time-series",
          "partial": "Sketch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:Sketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "Summary",
          "package": "time-series",
          "signature": "Summary",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "Summary",
          "package": "time-series",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "SysState",
          "package": "time-series",
          "signature": "SysState",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "SysState",
          "package": "time-series",
          "partial": "Sys State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:SysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of basic window.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "bwSize",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Size of basic window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "bwSize",
          "package": "time-series",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:bwSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch of basic window, currently not in use.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "bwSketch",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Routing.html#BWSummary",
          "type": "function"
        },
        "index": {
          "description": "Sketch of basic window currently not in use",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "bwSketch",
          "package": "time-series",
          "partial": "Sketch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:bwSketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of elements in basic window.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "bwsSum",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#BWSummary",
          "type": "function"
        },
        "index": {
          "description": "Sum of elements in basic window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "bwsSum",
          "package": "time-series",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:bwsSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of squared elements in basic window.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "bwsSumSq",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#BWSummary",
          "type": "function"
        },
        "index": {
          "description": "Sum of squared elements in basic window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "bwsSumSq",
          "package": "time-series",
          "partial": "Sum Sq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:bwsSumSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend first argument to second argument.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "consBW",
          "package": "time-series",
          "signature": "Seq Window-\u003e Seq Window-\u003e Seq Window",
          "type": "function"
        },
        "index": {
          "description": "Append first argument to second argument",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "consBW",
          "normalized": "Seq Window-\u003eSeq Window-\u003eSeq Window",
          "package": "time-series",
          "partial": "BW",
          "signature": "Seq Window-\u003eSeq Window-\u003eSeq Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:consBW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCutoff value between of correlation, between 0 to 1.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "corrCutoff",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Cutoff value between of correlation between to",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "corrCutoff",
          "package": "time-series",
          "partial": "Cutoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:corrCutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute correlations.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "corrPermute",
          "package": "time-series",
          "signature": "Word64-\u003e Word64-\u003e Word64-\u003e BasicWindows-\u003e IntMap Summary-\u003e [(CorrResult, CorrResult)]",
          "type": "function"
        },
        "index": {
          "description": "Compute correlations",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "corrPermute",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eBasicWindows-\u003eIntMap Summary-\u003e[(CorrResult,CorrResult)]",
          "package": "time-series",
          "partial": "Permute",
          "signature": "Word-\u003eWord-\u003eWord-\u003eBasicWindows-\u003eIntMap Summary-\u003e[(CorrResult,CorrResult)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:corrPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecrTimeStart\u003c/code\u003e + (size of base window)\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "crEndTime",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "description": "crTimeStart size of base window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "crEndTime",
          "package": "time-series",
          "partial": "End Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:crEndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of time series input A.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "crIndexA",
          "package": "time-series",
          "signature": "Int",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "description": "Index of time series input",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "crIndexA",
          "package": "time-series",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:crIndexA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of time series input B.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "crIndexB",
          "package": "time-series",
          "signature": "Int",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "description": "Index of time series input",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "crIndexB",
          "package": "time-series",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:crIndexB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart time of base window.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "crStartTime",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "description": "Start time of base window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "crStartTime",
          "package": "time-series",
          "partial": "Start Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:crStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value between -1 to 1.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "crValue",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#CorrResult",
          "type": "function"
        },
        "index": {
          "description": "value between to",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "crValue",
          "package": "time-series",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:crValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter results with implementation and cutoff value.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "filterImpl",
          "package": "time-series",
          "signature": "Implementation-\u003e Double-\u003e (CorrResult, CorrResult)-\u003e [CorrResult]",
          "type": "function"
        },
        "index": {
          "description": "Filter results with implementation and cutoff value",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "filterImpl",
          "normalized": "Implementation-\u003eDouble-\u003e(CorrResult,CorrResult)-\u003e[CorrResult]",
          "package": "time-series",
          "partial": "Impl",
          "signature": "Implementation-\u003eDouble-\u003e(CorrResult,CorrResult)-\u003e[CorrResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:filterImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "impls",
          "package": "time-series",
          "signature": "Implementation",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Implementation",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "impls",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:impls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial basic window summary data.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "initialBWSummary",
          "package": "time-series",
          "signature": "Size-\u003e BWSummary",
          "type": "function"
        },
        "index": {
          "description": "Initial basic window summary data",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "initialBWSummary",
          "normalized": "Size-\u003eBWSummary",
          "package": "time-series",
          "partial": "BWSummary",
          "signature": "Size-\u003eBWSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:initialBWSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "initialBasicWindows",
          "package": "time-series",
          "signature": "Size -\u003e Size -\u003e Int -\u003e BasicWindows",
          "source": "src/TimeSeries-Routing.html#initialBasicWindows",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "initialBasicWindows",
          "normalized": "Size-\u003eSize-\u003eInt-\u003eBasicWindows",
          "package": "time-series",
          "partial": "Basic Windows",
          "signature": "Size-\u003eSize-\u003eInt-\u003eBasicWindows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:initialBasicWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "initialSlidingWindows",
          "package": "time-series",
          "signature": "Size -\u003e Int -\u003e IntMap Window",
          "source": "src/TimeSeries-Routing.html#initialSlidingWindows",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "initialSlidingWindows",
          "normalized": "Size-\u003eInt-\u003eIntMap Window",
          "package": "time-series",
          "partial": "Sliding Windows",
          "signature": "Size-\u003eInt-\u003eIntMap Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:initialSlidingWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "initialSummaries",
          "package": "time-series",
          "signature": "Config-\u003e Int-\u003e IntMap Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "initialSummaries",
          "normalized": "Config-\u003eInt-\u003eIntMap Summary",
          "package": "time-series",
          "partial": "Summaries",
          "signature": "Config-\u003eInt-\u003eIntMap Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:initialSummaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial state.\n\u003c/p\u003e\u003cp\u003eOther than \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e, number of concurrent time series input data is\n passed.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "initialSysState",
          "package": "time-series",
          "signature": "Config -\u003e Int -\u003e SysState",
          "source": "src/TimeSeries-Routing.html#initialSysState",
          "type": "function"
        },
        "index": {
          "description": "Initial state Other than Config number of concurrent time series input data is passed",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "initialSysState",
          "normalized": "Config-\u003eInt-\u003eSysState",
          "package": "time-series",
          "partial": "Sys State",
          "signature": "Config-\u003eInt-\u003eSysState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:initialSysState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main loop of time series analysis.\n\u003c/p\u003e\u003cp\u003eSpecifying number of concurrent time series data in this function.\n In hardware implementation, this may relates to fixed value, which\n possibly been configured at the time of code generation.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "loop",
          "package": "time-series",
          "signature": "Handle-\u003e Config-\u003e [[Double]]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The main loop of time series analysis Specifying number of concurrent time series data in this function In hardware implementation this may relates to fixed value which possibly been configured at the time of code generation",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "loop",
          "normalized": "Handle-\u003eConfig-\u003e[[Double]]-\u003eIO()",
          "package": "time-series",
          "signature": "Handle-\u003eConfig-\u003e[[Double]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed for random vectors.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "randSeed",
          "package": "time-series",
          "signature": "Integer",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Seed for random vectors",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "randSeed",
          "package": "time-series",
          "partial": "Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:randSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial random vectors.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "randomVectors",
          "package": "time-series",
          "signature": "Integer-\u003e Size-\u003e Size-\u003e Int-\u003e IntMap RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Initial random vectors",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "randomVectors",
          "normalized": "Integer-\u003eSize-\u003eSize-\u003eInt-\u003eIntMap RandomVector",
          "package": "time-series",
          "partial": "Vectors",
          "signature": "Integer-\u003eSize-\u003eSize-\u003eInt-\u003eIntMap RandomVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:randomVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons given element to given \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e and remove last element in\n \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "rotateSeq",
          "package": "time-series",
          "signature": "a -\u003e Seq a -\u003e Seq a",
          "source": "src/TimeSeries-Routing.html#rotateSeq",
          "type": "function"
        },
        "index": {
          "description": "Cons given element to given Seq and remove last element in Seq",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "rotateSeq",
          "normalized": "a-\u003eSeq a-\u003eSeq a",
          "package": "time-series",
          "partial": "Seq",
          "signature": "a-\u003eSeq a-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:rotateSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap \u003ccode\u003e\u003ca\u003eLoop\u003c/a\u003e\u003c/code\u003e, run internal \u003ccode\u003eState\u003c/code\u003e and \u003ccode\u003eWriter\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "runLoop",
          "package": "time-series",
          "signature": "Loop a -\u003e SysState -\u003e ((a, SysState), [Either String CorrResult])",
          "source": "src/TimeSeries-Routing.html#runLoop",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Loop run internal State and Writer",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "runLoop",
          "normalized": "Loop a-\u003eSysState-\u003e((a,SysState),[Either String CorrResult])",
          "package": "time-series",
          "partial": "Loop",
          "signature": "Loop a-\u003eSysState-\u003e((a,SysState),[Either String CorrResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:runLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified string representation of \u003ccode\u003e\u003ca\u003eCorrResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esimpleCorrResult (CorrResult 1 2 10 20 0.5)\n\u003c/code\u003e\u003c/strong\u003e\"1, 2, 10, 20, 0.5\"\n\u003c/pre\u003e",
          "module": "TimeSeries.Routing",
          "name": "simpleCorrResult",
          "package": "time-series",
          "signature": "CorrResult -\u003e String",
          "source": "src/TimeSeries-Routing.html#simpleCorrResult",
          "type": "function"
        },
        "index": {
          "description": "Simplified string representation of CorrResult simpleCorrResult CorrResult",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "simpleCorrResult",
          "normalized": "CorrResult-\u003eString",
          "package": "time-series",
          "partial": "Corr Result",
          "signature": "CorrResult-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:simpleCorrResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of subsequences for grouping sketch.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "sketchGroups",
          "package": "time-series",
          "signature": "Word8",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Number of subsequences for grouping sketch",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sketchGroups",
          "package": "time-series",
          "partial": "Groups",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sketchGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of random elements in sketch.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "sketchSize",
          "package": "time-series",
          "signature": "Int",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Number of random elements in sketch",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sketchSize",
          "package": "time-series",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sketchSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStruct sliding windows from basic windows.\n\u003c/p\u003e\u003cp\u003eThis function is not needed in hardware implementation, should used\n for direct calculation only.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "slidingWindow",
          "package": "time-series",
          "signature": "Word64 -\u003e BasicWindows -\u003e IntMap Window",
          "source": "src/TimeSeries-Routing.html#slidingWindow",
          "type": "function"
        },
        "index": {
          "description": "Struct sliding windows from basic windows This function is not needed in hardware implementation should used for direct calculation only",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "slidingWindow",
          "normalized": "Word-\u003eBasicWindows-\u003eIntMap Window",
          "package": "time-series",
          "partial": "Window",
          "signature": "Word-\u003eBasicWindows-\u003eIntMap Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:slidingWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummaries for basic windows, length of \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e is \u003cem\u003enb\u003c/em\u003e, where\n \u003ccode\u003enb = sliding_window_size / basic_window_size\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "smrBasicWindows",
          "package": "time-series",
          "signature": "Seq BWSummary",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Summaries for basic windows length of Seq is nb where nb sliding window size basic window size",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "smrBasicWindows",
          "package": "time-series",
          "partial": "Basic Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:smrBasicWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePre-sketches. \"\u003cem\u003ePre\u003c/em\u003e\" means that those sketch values\n before applying dot product with control vector.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "smrPreSketches",
          "package": "time-series",
          "signature": "[Window]",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Pre-sketches Pre means that those sketch values before applying dot product with control vector",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "smrPreSketches",
          "normalized": "[Window]",
          "package": "time-series",
          "partial": "Pre Sketches",
          "signature": "[Window]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:smrPreSketches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch vector, size of this window matches to sketch size.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "smrSketch",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Sketch vector size of this window matches to sketch size",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "smrSketch",
          "package": "time-series",
          "partial": "Sketch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:smrSketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of elements in sliding window.\n In other words, \u003ccode\u003e&#8721;i=0,nb-1(sum(Xbw&#8305;))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "smrSum",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Sum of elements in sliding window In other words nb-1 sum Xbw",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "smrSum",
          "package": "time-series",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:smrSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of squared elements in sliding window.\n In other words, \u003ccode\u003e&#8721;i=0,nb-1(sum((Xbw&#8305;)&#178;)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "smrSumSq",
          "package": "time-series",
          "signature": "Double",
          "source": "src/TimeSeries-Routing.html#Summary",
          "type": "function"
        },
        "index": {
          "description": "Sum of squared elements in sliding window In other words nb-1 sum Xbw",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "smrSumSq",
          "package": "time-series",
          "partial": "Sum Sq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:smrSumSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle step to take with new input data.\n\u003c/p\u003e\u003cp\u003eHandle state management and if found any, report analysis result.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "step",
          "package": "time-series",
          "signature": "Config -\u003e [Double] -\u003e Loop ()",
          "source": "src/TimeSeries-Routing.html#step",
          "type": "function"
        },
        "index": {
          "description": "Single step to take with new input data Handle state management and if found any report analysis result",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "step",
          "normalized": "Config-\u003e[Double]-\u003eLoop()",
          "package": "time-series",
          "signature": "Config-\u003e[Double]-\u003eLoop()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of sliding window.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "swSize",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Size of sliding window",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "swSize",
          "package": "time-series",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:swSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysAppendCount",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysAppendCount",
          "package": "time-series",
          "partial": "Append Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysAppendCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysBasicWindows",
          "package": "time-series",
          "signature": "BasicWindows",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysBasicWindows",
          "package": "time-series",
          "partial": "Basic Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysBasicWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysConfig",
          "package": "time-series",
          "signature": "Config",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysConfig",
          "package": "time-series",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysCurrentTime",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysCurrentTime",
          "package": "time-series",
          "partial": "Current Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysIsReadyToTell",
          "package": "time-series",
          "signature": "Bool",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysIsReadyToTell",
          "package": "time-series",
          "partial": "Is Ready To Tell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysIsReadyToTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysNumberOfBasicWindows",
          "package": "time-series",
          "signature": "Word64",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysNumberOfBasicWindows",
          "package": "time-series",
          "partial": "Number Of Basic Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysNumberOfBasicWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysRandomVectors",
          "package": "time-series",
          "signature": "IntMap RandomVector",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysRandomVectors",
          "package": "time-series",
          "partial": "Random Vectors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysRandomVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "sysSummaries",
          "package": "time-series",
          "signature": "IntMap Summary",
          "source": "src/TimeSeries-Routing.html#SysState",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "sysSummaries",
          "package": "time-series",
          "partial": "Summaries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:sysSummaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Routing",
          "name": "unLoop",
          "package": "time-series",
          "signature": "StateT SysState (Writer [Either String CorrResult]) a",
          "source": "src/TimeSeries-Routing.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "unLoop",
          "normalized": "StateT SysState(Writer[Either String CorrResult])a",
          "package": "time-series",
          "partial": "Loop",
          "signature": "StateT SysState(Writer[Either String CorrResult])a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:unLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding new elements to windows, removing old elements.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "updateStates",
          "package": "time-series",
          "signature": "[Double] -\u003e Loop ()",
          "source": "src/TimeSeries-Routing.html#updateStates",
          "type": "function"
        },
        "index": {
          "description": "Adding new elements to windows removing old elements",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "updateStates",
          "normalized": "[Double]-\u003eLoop()",
          "package": "time-series",
          "partial": "States",
          "signature": "[Double]-\u003eLoop()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:updateStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate sum of elements in sliding window, and sum of squared\n elements in sliding window, and shift contents of basic windows.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "updateSummariesAndShift",
          "package": "time-series",
          "signature": "Loop ()",
          "source": "src/TimeSeries-Routing.html#updateSummariesAndShift",
          "type": "function"
        },
        "index": {
          "description": "Update sum of elements in sliding window and sum of squared elements in sliding window and shift contents of basic windows",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "updateSummariesAndShift",
          "normalized": "Loop()",
          "package": "time-series",
          "partial": "Summaries And Shift",
          "signature": "Loop()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:updateSummariesAndShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo show trace output or not.\n\u003c/p\u003e",
          "module": "TimeSeries.Routing",
          "name": "verbose",
          "package": "time-series",
          "signature": "Bool",
          "source": "src/TimeSeries-Routing.html#Config",
          "type": "function"
        },
        "index": {
          "description": "To show trace output or not",
          "hierarchy": "TimeSeries Routing",
          "module": "TimeSeries.Routing",
          "name": "verbose",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Routing.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScratches and notes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Scratch",
          "name": "Scratch",
          "package": "time-series",
          "source": "src/TimeSeries-Scratch.html",
          "type": "module"
        },
        "index": {
          "description": "Scratches and notes",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "Scratch",
          "package": "time-series",
          "partial": "Scratch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "CorrFunc",
          "package": "time-series",
          "source": "src/TimeSeries-Scratch.html#CorrFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "CorrFunc",
          "package": "time-series",
          "partial": "Corr Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#t:CorrFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "DistanceFunc",
          "package": "time-series",
          "source": "src/TimeSeries-Scratch.html#DistanceFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "DistanceFunc",
          "package": "time-series",
          "partial": "Distance Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#t:DistanceFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom vector used for structured sketches.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "RandomVector",
          "package": "time-series",
          "source": "src/TimeSeries-Scratch.html#RandomVector",
          "type": "data"
        },
        "index": {
          "description": "Random vector used for structured sketches",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "RandomVector",
          "package": "time-series",
          "partial": "Random Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#t:RandomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "RandomVector",
          "package": "time-series",
          "signature": "RandomVector",
          "source": "src/TimeSeries-Scratch.html#RandomVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "RandomVector",
          "package": "time-series",
          "partial": "Random Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:RandomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "bwins01",
          "package": "time-series",
          "signature": "BasicWindows",
          "source": "src/TimeSeries-Scratch.html#bwins01",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "bwins01",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:bwins01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "chunks",
          "package": "time-series",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/TimeSeries-Scratch.html#chunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "chunks",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "time-series",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelf descriptive function to show the comparison of naive and\n incremental \u003cem\u003eavg\u003c/em\u003e and \u003cem\u003evar\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "compare_naive_and_incremental_avg_and_var",
          "package": "time-series",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e [Double] -\u003e IO [Double]",
          "source": "src/TimeSeries-Scratch.html#compare_naive_and_incremental_avg_and_var",
          "type": "function"
        },
        "index": {
          "description": "Self descriptive function to show the comparison of naive and incremental avg and var",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "compare_naive_and_incremental_avg_and_var",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003eIO[Double]",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003eIO[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:compare_naive_and_incremental_avg_and_var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample comparison of avg and var, as shown in the function name.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "comparison_of_avg_and_var",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Scratch.html#comparison_of_avg_and_var",
          "type": "function"
        },
        "index": {
          "description": "Sample comparison of avg and var as shown in the function name",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "comparison_of_avg_and_var",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:comparison_of_avg_and_var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom above:\n\u003c/p\u003e\u003cpre\u003e                 D^2(x&#770;,y&#770;)\n corr(x,y) = 1 - &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;\n                    2\n\u003c/pre\u003e",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_direct_distance",
          "package": "time-series",
          "signature": "CorrFunc",
          "source": "src/TimeSeries-Scratch.html#corr_from_direct_distance",
          "type": "function"
        },
        "index": {
          "description": "From above corr",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_direct_distance",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:corr_from_direct_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing normalized input vector X and Y.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_distance",
          "package": "time-series",
          "signature": "DistanceFunc -\u003e CorrFunc",
          "source": "src/TimeSeries-Scratch.html#corr_from_distance",
          "type": "function"
        },
        "index": {
          "description": "Using normalized input vector and",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_distance",
          "normalized": "DistanceFunc-\u003eCorrFunc",
          "package": "time-series",
          "signature": "DistanceFunc-\u003eCorrFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:corr_from_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecorr_from_direct_distance\u003c/a\u003e\u003c/code\u003e, but using \u003ccode\u003e\u003ca\u003edist_sketch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_sketch_distance",
          "package": "time-series",
          "signature": "Int-\u003e CorrFunc",
          "type": "function"
        },
        "index": {
          "description": "Like corr from direct distance but using dist sketch",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "corr_from_sketch_distance",
          "normalized": "Int-\u003eCorrFunc",
          "package": "time-series",
          "signature": "Int-\u003eCorrFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:corr_from_sketch_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "correlation_direct_01",
          "package": "time-series",
          "signature": "[Double] -\u003e [Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#correlation_direct_01",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "correlation_direct_01",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:correlation_direct_01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "correlation_direct_02",
          "package": "time-series",
          "signature": "[Double] -\u003e [Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#correlation_direct_02",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "correlation_direct_02",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:correlation_direct_02"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "covariance_direct",
          "package": "time-series",
          "signature": "[Double] -\u003e [Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#covariance_direct",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "covariance_direct",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:covariance_direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "direct_diff_with_sketch_corr",
          "package": "time-series",
          "signature": "Integer -\u003e Int -\u003e (Double, Double)",
          "source": "src/TimeSeries-Scratch.html#direct_diff_with_sketch_corr",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "direct_diff_with_sketch_corr",
          "normalized": "Integer-\u003eInt-\u003e(Double,Double)",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:direct_diff_with_sketch_corr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ed / s, where d is direct distance and s is sketch distance.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "direct_div_by_sketch_distance",
          "package": "time-series",
          "signature": "Integer -\u003e Int -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#direct_div_by_sketch_distance",
          "type": "function"
        },
        "index": {
          "description": "where is direct distance and is sketch distance",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "direct_div_by_sketch_distance",
          "normalized": "Integer-\u003eInt-\u003eDouble",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:direct_div_by_sketch_distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect distance.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "dist_direct",
          "package": "time-series",
          "signature": "[Double] -\u003e [Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#dist_direct",
          "type": "function"
        },
        "index": {
          "description": "Direct distance",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "dist_direct",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:dist_direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSketch distance.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "dist_sketch",
          "package": "time-series",
          "signature": "Int-\u003e [Double]-\u003e [Double]-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Sketch distance",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "dist_sketch",
          "normalized": "Int-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "Int-\u003e[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:dist_sketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "dotp",
          "package": "time-series",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/TimeSeries-Scratch.html#dotp",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "dotp",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:dotp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate avg and var in a manner described in section 3.5.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "incremental_avg_and_var",
          "package": "time-series",
          "signature": "Integer-\u003e Int-\u003e Int-\u003e [Double]-\u003e [([Double], Double, Double)]",
          "type": "function"
        },
        "index": {
          "description": "Update avg and var in manner described in section",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "incremental_avg_and_var",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],Double,Double)]",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:incremental_avg_and_var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "len",
          "package": "time-series",
          "signature": "[a] -\u003e b",
          "source": "src/TimeSeries-Scratch.html#len",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "len",
          "normalized": "[a]-\u003eb",
          "package": "time-series",
          "signature": "[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "mean",
          "package": "time-series",
          "signature": "[a] -\u003e a",
          "source": "src/TimeSeries-Scratch.html#mean",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "mean",
          "normalized": "[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "norm",
          "package": "time-series",
          "signature": "[a] -\u003e a",
          "source": "src/TimeSeries-Scratch.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "norm",
          "normalized": "[a]-\u003ea",
          "package": "time-series",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate list of doubles between 0 to 1 with \u003ccode\u003e\u003ca\u003ePRG64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "prg64Doubles",
          "package": "time-series",
          "signature": "Integer -\u003e [Double]",
          "source": "src/TimeSeries-Scratch.html#prg64Doubles",
          "type": "function"
        },
        "index": {
          "description": "Generate list of doubles between to with PRG64",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "prg64Doubles",
          "normalized": "Integer-\u003e[Double]",
          "package": "time-series",
          "partial": "Doubles",
          "signature": "Integer-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:prg64Doubles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow ratio of correlation value computed with direct function and\n computed with standardized convolved sketch distance.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "print_comparisons_incr",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Scratch.html#print_comparisons_incr",
          "type": "function"
        },
        "index": {
          "description": "Show ratio of correlation value computed with direct function and computed with standardized convolved sketch distance",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "print_comparisons_incr",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:print_comparisons_incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint comparisions of single sketch.\n\u003c/p\u003e\u003cp\u003eShowing sliding window contents, sketch from structured vector,\n sketch from direct dot product, diff of the two, and ratio of the two.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "print_comparisons_of_single_sketch",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Scratch.html#print_comparisons_of_single_sketch",
          "type": "function"
        },
        "index": {
          "description": "Print comparisions of single sketch Showing sliding window contents sketch from structured vector sketch from direct dot product diff of the two and ratio of the two",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "print_comparisons_of_single_sketch",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:print_comparisons_of_single_sketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "print_convolved_sketches",
          "package": "time-series",
          "signature": "Int -\u003e IO ()",
          "source": "src/TimeSeries-Scratch.html#print_convolved_sketches",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "print_convolved_sketches",
          "normalized": "Int-\u003eIO()",
          "package": "time-series",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:print_convolved_sketches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "print_corr_diffs",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Scratch.html#print_corr_diffs",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "print_corr_diffs",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:print_corr_diffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint \u003ccode\u003edirect_div_by_sketch\u003c/code\u003e with different sketch sizes.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "print_dist_ratios",
          "package": "time-series",
          "signature": "IO ()",
          "source": "src/TimeSeries-Scratch.html#print_dist_ratios",
          "type": "function"
        },
        "index": {
          "description": "Print direct div by sketch with different sketch sizes",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "print_dist_ratios",
          "normalized": "IO()",
          "package": "time-series",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:print_dist_ratios"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the contents of first list to second list, returning list\n having same length as second list.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "push",
          "package": "time-series",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/TimeSeries-Scratch.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push the contents of first list to second list returning list having same length as second list",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "push",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "time-series",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom values treated as \u003cem\u003econtrolling vector\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "rvControl",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Random values treated as controlling vector",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "rvControl",
          "normalized": "[Double]",
          "package": "time-series",
          "partial": "Control",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:rvControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom values treated as \u003cem\u003eunit\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "rvUnit",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Random values treated as unit",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "rvUnit",
          "normalized": "[Double]",
          "package": "time-series",
          "partial": "Unit",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:rvUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "seq_one_sketch",
          "package": "time-series",
          "signature": "Integer -\u003e Int -\u003e Int -\u003e [Double] -\u003e [([Double], Double)]",
          "source": "src/TimeSeries-Scratch.html#seq_one_sketch",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "seq_one_sketch",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],Double)]",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:seq_one_sketch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScratch of:\n \u003cem\u003eFigure B.6: Structured convolution procedure every basic window\u003c/em\u003e.\n Still has \"Curse of Dimensionality\".\n\u003c/p\u003e\u003cp\u003eThis time, sketch size is controlled with given argument.\n\u003c/p\u003e\u003cp\u003eXXX: Normalization is improper.\n\u003c/p\u003e",
          "module": "TimeSeries.Scratch",
          "name": "sequence_of_sketches",
          "package": "time-series",
          "signature": "Integer-\u003e Int-\u003e Int-\u003e Int-\u003e [Double]-\u003e [([Double], [Double])]",
          "type": "function"
        },
        "index": {
          "description": "Scratch of Figure B.6 Structured convolution procedure every basic window Still has Curse of Dimensionality This time sketch size is controlled with given argument XXX Normalization is improper",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "sequence_of_sketches",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],[Double])]",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003eInt-\u003e[Double]-\u003e[([Double],[Double])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:sequence_of_sketches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize 2 sketch vector of t constructed from random vectors v1 and\n v2.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esketch_of_t\n\u003c/code\u003e\u003c/strong\u003e[0.30000000000000004,-4.58]\n\u003c/pre\u003e",
          "module": "TimeSeries.Scratch",
          "name": "sketch_of_t",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#sketch_of_t",
          "type": "function"
        },
        "index": {
          "description": "Size sketch vector of constructed from random vectors v1 and v2 sketch of",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "sketch_of_t",
          "normalized": "[Double]",
          "package": "time-series",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:sketch_of_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "sq",
          "package": "time-series",
          "signature": "a -\u003e a",
          "source": "src/TimeSeries-Scratch.html#sq",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "sq",
          "normalized": "a-\u003ea",
          "package": "time-series",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:sq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "standardize",
          "package": "time-series",
          "signature": "[Double] -\u003e [Double]",
          "source": "src/TimeSeries-Scratch.html#standardize",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "standardize",
          "normalized": "[Double]-\u003e[Double]",
          "package": "time-series",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:standardize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "stddev",
          "package": "time-series",
          "signature": "[Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#stddev",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "stddev",
          "normalized": "[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:stddev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "swins01",
          "package": "time-series",
          "signature": "IntMap Window",
          "source": "src/TimeSeries-Scratch.html#swins01",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "swins01",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:swins01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom vector rbw:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e rbw = (r&#8320;,r&#8321;,...,rbw-1\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand \u003cem\u003econtrol vector\u003c/em\u003e b:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e b = (b&#8320;,b&#8321;,...,bnb-1\u003c/li\u003e\u003c/ul\u003e",
          "module": "TimeSeries.Scratch",
          "name": "unit_random_vector_and_control_vector",
          "package": "time-series",
          "signature": "Integer-\u003e Int-\u003e Int-\u003e RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Random vector rbw rbw rbw-1 and control vector bnb-1",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "unit_random_vector_and_control_vector",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003eRandomVector",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003eRandomVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:unit_random_vector_and_control_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "variance_direct",
          "package": "time-series",
          "signature": "[Double] -\u003e Double",
          "source": "src/TimeSeries-Scratch.html#variance_direct",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "variance_direct",
          "normalized": "[Double]-\u003eDouble",
          "package": "time-series",
          "signature": "[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:variance_direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "vw",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#vw",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "vw",
          "normalized": "[Double]",
          "package": "time-series",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:vw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "vw'",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#vw%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "vw'",
          "normalized": "[Double]",
          "package": "time-series",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:vw-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "vx",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#vx",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "vx",
          "normalized": "[Double]",
          "package": "time-series",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:vx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "vx'",
          "package": "time-series",
          "signature": "[Double]",
          "source": "src/TimeSeries-Scratch.html#vx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "vx'",
          "normalized": "[Double]",
          "package": "time-series",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:vx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "w0",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Scratch.html#w0",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "w0",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:w0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "w1",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Scratch.html#w1",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "w1",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:w1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Scratch",
          "name": "w1_copied_from_w0",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Scratch.html#w1_copied_from_w0",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "w1_copied_from_w0",
          "package": "time-series",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:w1_copied_from_w0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom vector for sliding window, built from unit random vector\n and control vector:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e r = (rbw&#8901;b&#8320;,rbw&#8901;b&#8321;,...,rbw&#8901;bnb-1\u003c/li\u003e\u003c/ul\u003e",
          "module": "TimeSeries.Scratch",
          "name": "whole_random_vector",
          "package": "time-series",
          "signature": "Integer-\u003e Int-\u003e Int-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Random vector for sliding window built from unit random vector and control vector rbw rbw rbw bnb-1",
          "hierarchy": "TimeSeries Scratch",
          "module": "TimeSeries.Scratch",
          "name": "whole_random_vector",
          "normalized": "Integer-\u003eInt-\u003eInt-\u003e[Double]",
          "package": "time-series",
          "signature": "Integer-\u003eInt-\u003eInt-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Scratch.html#v:whole_random_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Utils",
          "name": "Utils",
          "package": "time-series",
          "source": "src/TimeSeries-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities",
          "hierarchy": "TimeSeries Utils",
          "module": "TimeSeries.Utils",
          "name": "Utils",
          "package": "time-series",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate given string by comma.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecomma \"foo,bar,buzz\"\n\u003c/code\u003e\u003c/strong\u003e[\"foo\",\"bar\",\"buzz\"]\n\u003c/pre\u003e",
          "module": "TimeSeries.Utils",
          "name": "comma",
          "package": "time-series",
          "signature": "String -\u003e [String]",
          "source": "src/TimeSeries-Utils.html#comma",
          "type": "function"
        },
        "index": {
          "description": "Separate given string by comma comma foo bar buzz foo bar buzz",
          "hierarchy": "TimeSeries Utils",
          "module": "TimeSeries.Utils",
          "name": "comma",
          "normalized": "String-\u003e[String]",
          "package": "time-series",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Utils.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat contents of CSV file.\n\u003c/p\u003e\u003cp\u003eSee \"data/correlated-walks_rho09_n100000_k5.csv\" for input sample.\n\u003c/p\u003e",
          "module": "TimeSeries.Utils",
          "name": "formatCSV",
          "package": "time-series",
          "signature": "String -\u003e [[Double]]",
          "source": "src/TimeSeries-Utils.html#formatCSV",
          "type": "function"
        },
        "index": {
          "description": "Format contents of CSV file See data correlated-walks rho09 n100000 k5.csv for input sample",
          "hierarchy": "TimeSeries Utils",
          "module": "TimeSeries.Utils",
          "name": "formatCSV",
          "normalized": "String-\u003e[[Double]]",
          "package": "time-series",
          "partial": "CSV",
          "signature": "String-\u003e[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Utils.html#v:formatCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWindow for time series analysis.\n\u003c/p\u003e\u003cp\u003eLater these shall relate to memory and FPGA internal registers in\nhardware...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "source": "src/TimeSeries-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Window for time series analysis Later these shall relate to memory and FPGA internal registers in hardware",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom vector.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "RandomVector",
          "package": "time-series",
          "source": "src/TimeSeries-Window.html#RandomVector",
          "type": "data"
        },
        "index": {
          "description": "Random vector",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "RandomVector",
          "package": "time-series",
          "partial": "Random Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#t:RandomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsidering to restrict window size to power of 2, at least for\n initial phase.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "Size",
          "package": "time-series",
          "source": "src/TimeSeries-Window.html#Size",
          "type": "type"
        },
        "index": {
          "description": "Considering to restrict window size to power of at least for initial phase",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "Size",
          "package": "time-series",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype for windowd data.\n\u003c/p\u003e\u003cp\u003eShall relate to memory contents in hardware.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "source": "src/TimeSeries-Window.html#Window",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype for windowd data Shall relate to memory contents in hardware",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "partial": "Window",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Window",
          "name": "RandomVector",
          "package": "time-series",
          "signature": "RandomVector",
          "source": "src/TimeSeries-Window.html#RandomVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "RandomVector",
          "package": "time-series",
          "partial": "Random Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:RandomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "signature": "Window (UArray Word64 Double)",
          "source": "src/TimeSeries-Window.html#Window",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "Window",
          "package": "time-series",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two windows, with shifting the contents of second window.\n Last \u003cem\u003en\u003c/em\u003e elements of second window is removed, where \u003cem\u003en\u003c/em\u003e is number\n of elements in first window.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "append",
          "package": "time-series",
          "signature": "Window -\u003e Window -\u003e Window",
          "source": "src/TimeSeries-Window.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two windows with shifting the contents of second window Last elements of second window is removed where is number of elements in first window",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "append",
          "normalized": "Window-\u003eWindow-\u003eWindow",
          "package": "time-series",
          "signature": "Window-\u003eWindow-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage of window contents.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "average",
          "package": "time-series",
          "signature": "Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#average",
          "type": "function"
        },
        "index": {
          "description": "Average of window contents",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "average",
          "normalized": "Window-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl random vector, mentioned as \u003cem\u003eb\u003c/em\u003e in the paper.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "controlRV",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Window.html#RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Control random vector mentioned as in the paper",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "controlRV",
          "package": "time-series",
          "partial": "RV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:controlRV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy contents of window to another.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "copyContents",
          "package": "time-series",
          "signature": "Window-\u003e Window-\u003e Window",
          "type": "function"
        },
        "index": {
          "description": "Copy contents of window to another",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "copyContents",
          "normalized": "Window-\u003eWindow-\u003eWindow",
          "package": "time-series",
          "partial": "Contents",
          "signature": "Window-\u003eWindow-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:copyContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product of given two windows.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "dotp",
          "package": "time-series",
          "signature": "Window -\u003e Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#dotp",
          "type": "function"
        },
        "index": {
          "description": "Dot product of given two windows",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "dotp",
          "normalized": "Window-\u003eWindow-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eWindow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:dotp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot produt of list of window.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "dotps",
          "package": "time-series",
          "signature": "[Window] -\u003e Window -\u003e Window",
          "source": "src/TimeSeries-Window.html#dotps",
          "type": "function"
        },
        "index": {
          "description": "Dot produt of list of window",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "dotps",
          "normalized": "[Window]-\u003eWindow-\u003eWindow",
          "package": "time-series",
          "signature": "[Window]-\u003eWindow-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:dotps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWindow of given size, filled with zeros.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "empty",
          "package": "time-series",
          "signature": "Size -\u003e Window",
          "source": "src/TimeSeries-Window.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Window of given size filled with zeros",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "empty",
          "normalized": "Size-\u003eWindow",
          "package": "time-series",
          "signature": "Size-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate window from assoc list.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "fromList",
          "package": "time-series",
          "signature": "[Double] -\u003e Window",
          "source": "src/TimeSeries-Window.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create window from assoc list",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "fromList",
          "normalized": "[Double]-\u003eWindow",
          "package": "time-series",
          "partial": "List",
          "signature": "[Double]-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of window.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "length",
          "package": "time-series",
          "signature": "Window -\u003e Int",
          "source": "src/TimeSeries-Window.html#length",
          "type": "function"
        },
        "index": {
          "description": "Length of window",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "length",
          "normalized": "Window-\u003eInt",
          "package": "time-series",
          "signature": "Window-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorm, by viewing window as vector.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = fromList [0,3,4]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet y = fromList [0,0,0]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edistance x y\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e",
          "module": "TimeSeries.Window",
          "name": "norm",
          "package": "time-series",
          "signature": "Window -\u003e Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#norm",
          "type": "function"
        },
        "index": {
          "description": "Norm by viewing window as vector let fromList let fromList distance",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "norm",
          "normalized": "Window-\u003eWindow-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eWindow-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow contents of window with \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "pretty",
          "package": "time-series",
          "signature": "Window -\u003e String",
          "source": "src/TimeSeries-Window.html#pretty",
          "type": "function"
        },
        "index": {
          "description": "Show contents of window with printf",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "pretty",
          "normalized": "Window-\u003eString",
          "package": "time-series",
          "signature": "Window-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut given \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e as first element, shifts all the other\n element except for the last one, which being removed.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "push",
          "package": "time-series",
          "signature": "Double -\u003e Window -\u003e Window",
          "source": "src/TimeSeries-Window.html#push",
          "type": "function"
        },
        "index": {
          "description": "Put given Double as first element shifts all the other element except for the last one which being removed",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "push",
          "normalized": "Double-\u003eWindow-\u003eWindow",
          "package": "time-series",
          "signature": "Double-\u003eWindow-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate window for random vectors.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "randomVector",
          "package": "time-series",
          "signature": "Integer-\u003e Size-\u003e Size-\u003e RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Create window for random vectors",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "randomVector",
          "normalized": "Integer-\u003eSize-\u003eSize-\u003eRandomVector",
          "package": "time-series",
          "partial": "Vector",
          "signature": "Integer-\u003eSize-\u003eSize-\u003eRandomVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:randomVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize 1 window containing given value.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "singleton",
          "package": "time-series",
          "signature": "Double -\u003e Window",
          "source": "src/TimeSeries-Window.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Size window containing given value",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "singleton",
          "normalized": "Double-\u003eWindow",
          "package": "time-series",
          "signature": "Double-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSums up square of window elements.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "sumSqWindow",
          "package": "time-series",
          "signature": "Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#sumSqWindow",
          "type": "function"
        },
        "index": {
          "description": "Sums up square of window elements",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "sumSqWindow",
          "normalized": "Window-\u003eDouble",
          "package": "time-series",
          "partial": "Sq Window",
          "signature": "Window-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:sumSqWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSums up window elements.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "sumWindow",
          "package": "time-series",
          "signature": "Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#sumWindow",
          "type": "function"
        },
        "index": {
          "description": "Sums up window elements",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "sumWindow",
          "normalized": "Window-\u003eDouble",
          "package": "time-series",
          "partial": "Window",
          "signature": "Window-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:sumWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TimeSeries.Window",
          "name": "toList",
          "package": "time-series",
          "signature": "Window -\u003e [Double]",
          "source": "src/TimeSeries-Window.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "toList",
          "normalized": "Window-\u003e[Double]",
          "package": "time-series",
          "partial": "List",
          "signature": "Window-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit random vector.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "unitRV",
          "package": "time-series",
          "signature": "Window",
          "source": "src/TimeSeries-Window.html#RandomVector",
          "type": "function"
        },
        "index": {
          "description": "Unit random vector",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "unitRV",
          "package": "time-series",
          "partial": "RV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:unitRV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariance of window contents.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "variance",
          "package": "time-series",
          "signature": "Window -\u003e Double",
          "source": "src/TimeSeries-Window.html#variance",
          "type": "function"
        },
        "index": {
          "description": "Variance of window contents",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "variance",
          "normalized": "Window-\u003eDouble",
          "package": "time-series",
          "signature": "Window-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate whole random vector from \u003ccode\u003e\u003ca\u003eRandomVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnit random vector and control vector in given \u003ccode\u003e\u003ca\u003eRandomVector\u003c/a\u003e\u003c/code\u003e is\n convolved.\n\u003c/p\u003e",
          "module": "TimeSeries.Window",
          "name": "wholeRandomVector",
          "package": "time-series",
          "signature": "RandomVector-\u003e Window",
          "type": "function"
        },
        "index": {
          "description": "Create whole random vector from RandomVector Unit random vector and control vector in given RandomVector is convolved",
          "hierarchy": "TimeSeries Window",
          "module": "TimeSeries.Window",
          "name": "wholeRandomVector",
          "normalized": "RandomVector-\u003eWindow",
          "package": "time-series",
          "partial": "Random Vector",
          "signature": "RandomVector-\u003eWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-series/docs/TimeSeries-Window.html#v:wholeRandomVector"
      }
    }
  ]
]