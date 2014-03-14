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
        "word": "microbench"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMicrobenchmarking can be used to compare the speed of different\n approaches to the same operation.  Since most code is very fast, to\n get accurate timing information you must run the operation many times\n and then divide to get the time per operation.\n\u003c/p\u003e\u003cp\u003eThis library manages the microbenchmarking process: it finds how many\n iterations of a function are needed to get a good timing estimate per\n iteration and prints out a human-readable \"Your code takes \u003cem\u003en\u003c/em\u003e\n nanoseconds to run, and can run \u003cem\u003en\u003c/em\u003e times per second\".\n\u003c/p\u003e\u003cp\u003eThe only function \u003ccode\u003e\u003ca\u003emicrobench\u003c/a\u003e\u003c/code\u003e takes a function that expects an\n integer parameter (which is the quantity you're trying to measure),\n and probes the function with increasing parameters until enough time\n has elapsed to get a good measurement.\n\u003c/p\u003e\u003cp\u003eThis may be better understood by some example code:\n\u003c/p\u003e\u003cpre\u003e sum1 n = sum [1..n]\n sum2 n = foldl (+) 0 [1..n]\n main = do\n   microbench \"Sum using sum\" sum1\n   microbench \"Sum using foldl\" sum2\n\u003c/pre\u003e\u003cp\u003eWhen run, \u003ccode\u003esum1\u003c/code\u003e and \u003ccode\u003esum2\u003c/code\u003e are called with varying values of \u003ccode\u003en\u003c/code\u003e.\n The output, then, is an estimate of how many integers these\n approaches could sum per second.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emicrobench\u003c/a\u003e\u003c/code\u003e also accepts a parameter of type \u003ccode\u003eIO ()\u003c/code\u003e for\n benchmarking.  It does the same probing process, but manages running\n the operation in a loop.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Microbench",
          "name": "Microbench",
          "package": "microbench",
          "source": "src/Microbench.html",
          "type": "module"
        },
        "index": {
          "description": "Microbenchmarking can be used to compare the speed of different approaches to the same operation Since most code is very fast to get accurate timing information you must run the operation many times and then divide to get the time per operation This library manages the microbenchmarking process it finds how many iterations of function are needed to get good timing estimate per iteration and prints out human-readable Your code takes nanoseconds to run and can run times per second The only function microbench takes function that expects an integer parameter which is the quantity you re trying to measure and probes the function with increasing parameters until enough time has elapsed to get good measurement This may be better understood by some example code sum1 sum sum2 foldl main do microbench Sum using sum sum1 microbench Sum using foldl sum2 When run sum1 and sum2 are called with varying values of The output then is an estimate of how many integers these approaches could sum per second microbench also accepts parameter of type IO for benchmarking It does the same probing process but manages running the operation in loop",
          "hierarchy": "Microbench",
          "module": "Microbench",
          "name": "Microbench",
          "package": "microbench",
          "partial": "Microbench",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/microbench/docs/Microbench.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMicrobenchmarkable computations.  Be very wary of adding your own\n instances of this class, as it's difficult to force GHC to\n re-evaluate code in a way that makes benchmarking easy.\n\u003c/p\u003e",
          "module": "Microbench",
          "name": "Microbenchable",
          "package": "microbench",
          "source": "src/Microbench.html#Microbenchable",
          "type": "class"
        },
        "index": {
          "description": "Microbenchmarkable computations Be very wary of adding your own instances of this class as it difficult to force GHC to re-evaluate code in way that makes benchmarking easy",
          "hierarchy": "Microbench",
          "module": "Microbench",
          "name": "Microbenchable",
          "package": "microbench",
          "partial": "Microbenchable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/microbench/docs/Microbench.html#t:Microbenchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emicrobench description target\u003c/code\u003e probes target with different parameters\n until it's ran enough iterations to have a good estimate at the rate per\n second of the operation.  \u003ccode\u003edescription\u003c/code\u003e is a textual description of the\n thing being benchmarked.  Outputs to stdout.\n\u003c/p\u003e",
          "module": "Microbench",
          "name": "microbench",
          "package": "microbench",
          "signature": "String -\u003e a -\u003e IO ()",
          "source": "src/Microbench.html#microbench",
          "type": "function"
        },
        "index": {
          "description": "microbench description target probes target with different parameters until it ran enough iterations to have good estimate at the rate per second of the operation description is textual description of the thing being benchmarked Outputs to stdout",
          "hierarchy": "Microbench",
          "module": "Microbench",
          "name": "microbench",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "microbench",
          "signature": "String-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/microbench/docs/Microbench.html#v:microbench"
      }
    }
  ]
]