[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/Data-PerfectHash.html#",
      "description": {
        "fct-module": "Data.PerfectHash",
        "fct-package": "PerfectHash",
        "fct-signature": "module",
        "fct-source": "src/Data-PerfectHash.html",
        "fct-type": "module",
        "title": "PerfectHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PerfectHash",
        "module": "Data.PerfectHash",
        "name": "PerfectHash",
        "normalized": "",
        "package": "PerfectHash",
        "partial": "Perfect Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/Data-PerfectHash.html#t:PerfectHash",
      "description": {
        "fct-module": "Data.PerfectHash",
        "fct-package": "PerfectHash",
        "fct-signature": "data",
        "fct-source": "src/Data-PerfectHash.html#PerfectHash",
        "fct-type": "data",
        "title": "PerfectHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PerfectHash",
        "module": "Data.PerfectHash",
        "name": "PerfectHash",
        "normalized": "",
        "package": "PerfectHash",
        "partial": "Perfect Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/Data-PerfectHash.html#v:fromList",
      "description": {
        "fct-module": "Data.PerfectHash",
        "fct-package": "PerfectHash",
        "fct-signature": "[(ByteString, a)] -\u003e PerfectHash a",
        "fct-source": "src/Data-PerfectHash.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PerfectHash",
        "module": "Data.PerfectHash",
        "name": "fromList",
        "normalized": "[(ByteString,a)]-\u003ePerfectHash a",
        "package": "PerfectHash",
        "partial": "List",
        "signature": "[(ByteString,a)]-\u003ePerfectHash a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/Data-PerfectHash.html#v:lookup",
      "description": {
        "fct-module": "Data.PerfectHash",
        "fct-package": "PerfectHash",
        "fct-signature": "PerfectHash a -\u003e ByteString -\u003e Maybe a",
        "fct-source": "src/Data-PerfectHash.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PerfectHash",
        "module": "Data.PerfectHash",
        "name": "lookup",
        "normalized": "PerfectHash a-\u003eByteString-\u003eMaybe a",
        "package": "PerfectHash",
        "partial": "",
        "signature": "PerfectHash a-\u003eByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/Data-PerfectHash.html#v:lookupByIndex",
      "description": {
        "fct-module": "Data.PerfectHash",
        "fct-package": "PerfectHash",
        "fct-signature": "PerfectHash a -\u003e Word32 -\u003e Maybe ByteString",
        "fct-source": "src/Data-PerfectHash.html#lookupByIndex",
        "fct-type": "function",
        "title": "lookupByIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PerfectHash",
        "module": "Data.PerfectHash",
        "name": "lookupByIndex",
        "normalized": "PerfectHash a-\u003eWord-\u003eMaybe ByteString",
        "package": "PerfectHash",
        "partial": "By Index",
        "signature": "PerfectHash a-\u003eWord-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/HackedMicrobench.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMicrobenchmarking can be used to compare the speed of different\n approaches to the same operation.  Since most code is very fast, to\n get accurate timing information you must run the operation many times\n and then divide to get the time per operation.\n\u003c/p\u003e\u003cp\u003eThis library manages the microbenchmarking process: it finds how many\n iterations of a function are needed to get a good timing estimate per\n iteration and prints out a human-readable \"Your code takes \u003cem\u003en\u003c/em\u003e\n nanoseconds to run, and can run \u003cem\u003en\u003c/em\u003e times per second\".\n\u003c/p\u003e\u003cp\u003eThe only function \u003ccode\u003e\u003ca\u003emicrobench\u003c/a\u003e\u003c/code\u003e takes a function that expects an\n integer parameter (which is the quantity you're trying to measure),\n and probes the function with increasing parameters until enough time\n has elapsed to get a good measurement.\n\u003c/p\u003e\u003cp\u003eThis may be better understood by some example code:\n\u003c/p\u003e\u003cpre\u003e sum1 n = sum [1..n]\n sum2 n = foldl (+) 0 [1..n]\n main = do\n   microbench \"Sum using sum\" sum1\n   microbench \"Sum using foldl\" sum2\n\u003c/pre\u003e\u003cp\u003eWhen run, \u003ccode\u003esum1\u003c/code\u003e and \u003ccode\u003esum2\u003c/code\u003e are called with varying values of \u003ccode\u003en\u003c/code\u003e.\n The output, then, is an estimate of how many integers these\n approaches could sum per second.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emicrobench\u003c/a\u003e\u003c/code\u003e also accepts a parameter of type \u003ccode\u003eIO ()\u003c/code\u003e for\n benchmarking.  It does the same probing process, but manages running\n the operation in a loop.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HackedMicrobench",
        "fct-package": "PerfectHash",
        "fct-signature": "module",
        "fct-source": "src/HackedMicrobench.html",
        "fct-type": "module",
        "title": "HackedMicrobench"
      },
      "index": {
        "description": "Microbenchmarking can be used to compare the speed of different approaches to the same operation Since most code is very fast to get accurate timing information you must run the operation many times and then divide to get the time per operation This library manages the microbenchmarking process it finds how many iterations of function are needed to get good timing estimate per iteration and prints out human-readable Your code takes nanoseconds to run and can run times per second The only function microbench takes function that expects an integer parameter which is the quantity you re trying to measure and probes the function with increasing parameters until enough time has elapsed to get good measurement This may be better understood by some example code sum1 sum sum2 foldl main do microbench Sum using sum sum1 microbench Sum using foldl sum2 When run sum1 and sum2 are called with varying values of The output then is an estimate of how many integers these approaches could sum per second microbench also accepts parameter of type IO for benchmarking It does the same probing process but manages running the operation in loop",
        "hierarchy": "HackedMicrobench",
        "module": "HackedMicrobench",
        "name": "HackedMicrobench",
        "normalized": "",
        "package": "PerfectHash",
        "partial": "Hacked Microbench",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/HackedMicrobench.html#t:Microbenchable",
      "description": {
        "fct-descr": "\u003cp\u003eMicrobenchmarkable computations.  Be very wary of adding your own\n instances of this class, as it's difficult to force GHC to\n re-evaluate code in a way that makes benchmarking easy.\n\u003c/p\u003e",
        "fct-module": "HackedMicrobench",
        "fct-package": "PerfectHash",
        "fct-signature": "class",
        "fct-source": "src/HackedMicrobench.html#Microbenchable",
        "fct-type": "class",
        "title": "Microbenchable"
      },
      "index": {
        "description": "Microbenchmarkable computations Be very wary of adding your own instances of this class as it difficult to force GHC to re-evaluate code in way that makes benchmarking easy",
        "hierarchy": "HackedMicrobench",
        "module": "HackedMicrobench",
        "name": "Microbenchable",
        "normalized": "",
        "package": "PerfectHash",
        "partial": "Microbenchable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PerfectHash/docs/HackedMicrobench.html#v:microbench",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emicrobench description target\u003c/code\u003e probes target with different parameters\n until it's ran enough iterations to have a good estimate at the rate per\n second of the operation.  \u003ccode\u003edescription\u003c/code\u003e is a textual description of the\n thing being benchmarked.  Outputs to stdout.\n\u003c/p\u003e",
        "fct-module": "HackedMicrobench",
        "fct-package": "PerfectHash",
        "fct-signature": "String -\u003e a -\u003e IO ()",
        "fct-source": "src/HackedMicrobench.html#microbench",
        "fct-type": "function",
        "title": "microbench"
      },
      "index": {
        "description": "microbench description target probes target with different parameters until it ran enough iterations to have good estimate at the rate per second of the operation description is textual description of the thing being benchmarked Outputs to stdout",
        "hierarchy": "HackedMicrobench",
        "module": "HackedMicrobench",
        "name": "microbench",
        "normalized": "String-\u003ea-\u003eIO()",
        "package": "PerfectHash",
        "partial": "",
        "signature": "String-\u003ea-\u003eIO()"
      }
    }
  }
]