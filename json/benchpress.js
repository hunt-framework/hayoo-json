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
        "word": "benchpress"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBenchmarks actions and produces statistics such as min, mean,\n median, standard deviation, and max execution time.  Also computes\n execution time percentiles.  Comes with functions to pretty-print\n the results.\n\u003c/p\u003e\u003cp\u003eHere's an example showing a benchmark of copying a file:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString as B\n import System.IO\n import Test.BenchPress\n\n inpath, outpath :: String\n inpath = \"/tmp/infile\"\n outpath = \"/tmp/outfile\"\n\n blockSize :: Int\n blockSize = 4 * 1024\n\n copyUsingByteString :: Handle -\u003e Handle -\u003e IO ()\n copyUsingByteString inf outf = go\n     where\n       go = do\n         bs \u003c- B.hGet inf blockSize\n         let numRead = B.length bs\n         if numRead \u003e 0\n            then B.hPut outf bs \u003e\u003e go\n            else return ()\n\n main :: IO ()\n main = bench 100 $ do\n          inf \u003c- openBinaryFile inpath ReadMode\n          outf \u003c- openBinaryFile outpath WriteMode\n          copyUsingByteString inf outf\n          hClose outf\n          hClose inf\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.BenchPress",
          "name": "BenchPress",
          "package": "benchpress",
          "source": "src/Test-BenchPress.html",
          "type": "module"
        },
        "index": {
          "description": "Benchmarks actions and produces statistics such as min mean median standard deviation and max execution time Also computes execution time percentiles Comes with functions to pretty-print the results Here an example showing benchmark of copying file import qualified Data.ByteString as import System.IO import Test.BenchPress inpath outpath String inpath tmp infile outpath tmp outfile blockSize Int blockSize copyUsingByteString Handle Handle IO copyUsingByteString inf outf go where go do bs B.hGet inf blockSize let numRead B.length bs if numRead then B.hPut outf bs go else return main IO main bench do inf openBinaryFile inpath ReadMode outf openBinaryFile outpath WriteMode copyUsingByteString inf outf hClose outf hClose inf",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "BenchPress",
          "package": "benchpress",
          "partial": "Bench Press",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecution time statistics for a benchmark.  All measured times\n are given in milliseconds.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "Stats",
          "package": "benchpress",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "data"
        },
        "index": {
          "description": "Execution time statistics for benchmark All measured times are given in milliseconds",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "Stats",
          "package": "benchpress",
          "partial": "Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#t:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.BenchPress",
          "name": "Stats",
          "package": "benchpress",
          "signature": "Stats",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "Stats",
          "package": "benchpress",
          "partial": "Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that runs a benchmark using \u003ccode\u003e\u003ca\u003ebenchmark\u003c/a\u003e\u003c/code\u003e and\n prints timing statistics using \u003ccode\u003e\u003ca\u003eprintDetailedStats\u003c/a\u003e\u003c/code\u003e.  The\n statistics are computed from the measured CPU times.  Writes output\n to standard output.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "bench",
          "package": "benchpress",
          "signature": "Int -\u003e IO a -\u003e IO ()",
          "source": "src/Test-BenchPress.html#bench",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that runs benchmark using benchmark and prints timing statistics using printDetailedStats The statistics are computed from the measured CPU times Writes output to standard output",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "bench",
          "normalized": "Int-\u003eIO a-\u003eIO()",
          "package": "benchpress",
          "signature": "Int-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:bench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that runs several benchmarks using\n \u003ccode\u003e\u003ca\u003ebenchmark\u003c/a\u003e\u003c/code\u003e and prints a timing statistics summary using\n \u003ccode\u003e\u003ca\u003eprintStatsSummaries\u003c/a\u003e\u003c/code\u003e.  The statistics are computed from the\n measured CPU times.  Each benchmark has an associated label that is\n used to identify the benchmark in the printed results.  Writes\n output to standard output.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "benchMany",
          "package": "benchpress",
          "signature": "Int -\u003e [(String, IO a)] -\u003e IO ()",
          "source": "src/Test-BenchPress.html#benchMany",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that runs several benchmarks using benchmark and prints timing statistics summary using printStatsSummaries The statistics are computed from the measured CPU times Each benchmark has an associated label that is used to identify the benchmark in the printed results Writes output to standard output",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "benchMany",
          "normalized": "Int-\u003e[(String,IO a)]-\u003eIO()",
          "package": "benchpress",
          "partial": "Many",
          "signature": "Int-\u003e[(String,IO a)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:benchMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebenchmark iters setup teardown action\u003c/code\u003e runs \u003ccode\u003eaction\u003c/code\u003e \u003ccode\u003eiters\u003c/code\u003e\n times measuring the execution time of each run.  \u003ccode\u003esetup\u003c/code\u003e and\n \u003ccode\u003eteardown\u003c/code\u003e are run before and after each run respectively.\n \u003ccode\u003eteardown\u003c/code\u003e is run even if \u003ccode\u003eaction\u003c/code\u003e raises an exception.  Returns\n statistics for both the measured CPU times and wall clock times, in\n that order.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "benchmark",
          "package": "benchpress",
          "signature": "Int -\u003e IO a -\u003e (a -\u003e IO b) -\u003e (a -\u003e IO c) -\u003e IO (Stats, Stats)",
          "source": "src/Test-BenchPress.html#benchmark",
          "type": "function"
        },
        "index": {
          "description": "benchmark iters setup teardown action runs action iters times measuring the execution time of each run setup and teardown are run before and after each run respectively teardown is run even if action raises an exception Returns statistics for both the measured CPU times and wall clock times in that order",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "benchmark",
          "normalized": "Int-\u003eIO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO(Stats,Stats)",
          "package": "benchpress",
          "signature": "Int-\u003eIO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO(Stats,Stats)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:benchmark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLongest execution time.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "max",
          "package": "benchpress",
          "signature": "Double",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Longest execution time",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "max",
          "package": "benchpress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMean execution time.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "mean",
          "package": "benchpress",
          "signature": "Double",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Mean execution time",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "mean",
          "package": "benchpress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedian execution time.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "median",
          "package": "benchpress",
          "signature": "Double",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Median execution time",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "median",
          "package": "benchpress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest execution time.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "min",
          "package": "benchpress",
          "signature": "Double",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Shortest execution time",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "min",
          "package": "benchpress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecution time divided into percentiles.  The first component\n of the pair is the percentile given as an integer between 0 and\n 100, inclusive.  The second component is the execution time of\n the slowest iteration within the percentile.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "percentiles",
          "package": "benchpress",
          "signature": "[(Int, Double)]",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Execution time divided into percentiles The first component of the pair is the percentile given as an integer between and inclusive The second component is the execution time of the slowest iteration within the percentile",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "percentiles",
          "normalized": "[(Int,Double)]",
          "package": "benchpress",
          "signature": "[(Int,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:percentiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints detailed statistics.  Printed statistics include min,\n mean, standard deviation, median, and max execution time.  Also\n prints execution time percentiles.  Writes output to standard\n output.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "printDetailedStats",
          "package": "benchpress",
          "signature": "Stats -\u003e IO ()",
          "source": "src/Test-BenchPress.html#printDetailedStats",
          "type": "function"
        },
        "index": {
          "description": "Prints detailed statistics Printed statistics include min mean standard deviation median and max execution time Also prints execution time percentiles Writes output to standard output",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "printDetailedStats",
          "normalized": "Stats-\u003eIO()",
          "package": "benchpress",
          "partial": "Detailed Stats",
          "signature": "Stats-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:printDetailedStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a summary row for each benchmark with an associated label.\n The summary contains the same statistics as in \u003ccode\u003e\u003ca\u003eprintDetailedStats\u003c/a\u003e\u003c/code\u003e\n except for the execution time percentiles.  Writes output to\n standard output.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "printStatsSummaries",
          "package": "benchpress",
          "signature": "[(String, Stats)] -\u003e IO ()",
          "source": "src/Test-BenchPress.html#printStatsSummaries",
          "type": "function"
        },
        "index": {
          "description": "Prints summary row for each benchmark with an associated label The summary contains the same statistics as in printDetailedStats except for the execution time percentiles Writes output to standard output",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "printStatsSummaries",
          "normalized": "[(String,Stats)]-\u003eIO()",
          "package": "benchpress",
          "partial": "Stats Summaries",
          "signature": "[(String,Stats)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:printStatsSummaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecution time standard deviation.\n\u003c/p\u003e",
          "module": "Test.BenchPress",
          "name": "stddev",
          "package": "benchpress",
          "signature": "Double",
          "source": "src/Test-BenchPress.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "Execution time standard deviation",
          "hierarchy": "Test BenchPress",
          "module": "Test.BenchPress",
          "name": "stddev",
          "package": "benchpress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/benchpress/docs/Test-BenchPress.html#v:stddev"
      }
    }
  ]
]