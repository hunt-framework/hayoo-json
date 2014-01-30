[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to benchmark how long it takes to fully evaluate\n   a value. Can be useful to identify the slow part of an\n   algorithm, since Haskell's lazy evaluation can make it hard\n   to see where the bottleneck lies.\n\u003c/p\u003e\u003cp\u003eFull evalution of a value is achieved by the \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e function,\n   which requires that the data type of the value being tested\n   is an instance of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e. Making a data type an instance\n   of \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e is trivially done by applying \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e to all of\n   its fields and \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e-ing those together.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  data Tree3 a = Leaf a | Branch (Tree3 a) (Tree3 a) (Tree3 a)\n  \n  instance NFData a =\u003e NFData (Tree3 a) where\n      rnf (Leaf x) = rnf x\n      rnf (Branch l c r) = rnf l `seq` rnf c `seq` rnf r\n      \n  main = bench . take 13 $ iterate (\\x -\u003e Branch x x x) (Leaf 'a')\n\n  Output:\n  765.625 ms\n\u003c/pre\u003e\u003cp\u003eIf a data constructor has no fields you can suffice with (),\n  e.g.:\n\u003c/p\u003e\u003cpre\u003e  data Answer = Yes | No\n\n  instance NFData Answer where\n      rnf Yes = ()\n      rnf No  = ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "module",
        "fct-source": "src/Test-StrictBench.html",
        "fct-type": "module",
        "title": "StrictBench"
      },
      "index": {
        "description": "library to benchmark how long it takes to fully evaluate value Can be useful to identify the slow part of an algorithm since Haskell lazy evaluation can make it hard to see where the bottleneck lies Full evalution of value is achieved by the rnf function which requires that the data type of the value being tested is an instance of NFData Making data type an instance of NFData is trivially done by applying rnf to all of its fields and seq ing those together Example data Tree3 Leaf Branch Tree3 Tree3 Tree3 instance NFData NFData Tree3 where rnf Leaf rnf rnf Branch rnf seq rnf seq rnf main bench take iterate Branch Leaf Output ms If data constructor has no fields you can suffice with e.g data Answer Yes No instance NFData Answer where rnf Yes rnf No",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "StrictBench",
        "normalized": "",
        "package": "StrictBench",
        "partial": "Strict Bench",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#t:NFData",
      "description": {
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "NFData",
        "normalized": "",
        "package": "StrictBench",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#v:bench",
      "description": {
        "fct-descr": "\u003cp\u003ePrint how long it takes to strictly evaluate the given\n   value.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  main = bench [1..10000000 :: Integer]\n\n  Output:\n  515.625 ms\n\u003c/pre\u003e",
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Test-StrictBench.html#bench",
        "fct-type": "function",
        "title": "bench"
      },
      "index": {
        "description": "Print how long it takes to strictly evaluate the given value Example main bench Integer Output ms",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "bench",
        "normalized": "a-\u003eIO()",
        "package": "StrictBench",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#v:benchDesc",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebench\u003c/a\u003e\u003c/code\u003e, benchDesc prints the time needed to fully\n   evaluate the given value. Additionally, it prefixes the time\n   taken with the provided string, which can be useful to\n   distinguish between different benchmarks.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  main = benchDesc \"Long string\" $ replicate 10000000 'a'\n\n  Output:\n  Long string: 375.0 ms\n\u003c/pre\u003e",
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "String -\u003e a -\u003e IO ()",
        "fct-source": "src/Test-StrictBench.html#benchDesc",
        "fct-type": "function",
        "title": "benchDesc"
      },
      "index": {
        "description": "Like bench benchDesc prints the time needed to fully evaluate the given value Additionally it prefixes the time taken with the provided string which can be useful to distinguish between different benchmarks Example main benchDesc Long string replicate Output Long string ms",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "benchDesc",
        "normalized": "String-\u003ea-\u003eIO()",
        "package": "StrictBench",
        "partial": "Desc",
        "signature": "String-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#v:rnf",
      "description": {
        "fct-descr": "\u003cp\u003ernf should reduce its argument to normal form (that is, fully\n evaluate all sub-components), and then return '()'.\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is \n\u003c/p\u003e\u003cpre\u003e rnf a = a `seq` ()\n\u003c/pre\u003e\u003cp\u003ewhich may be convenient when defining instances for data types with\n no unevaluated fields (e.g. enumerations).\n\u003c/p\u003e",
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "a -\u003e ()",
        "fct-type": "function",
        "title": "rnf"
      },
      "index": {
        "description": "rnf should reduce its argument to normal form that is fully evaluate all sub-components and then return The default implementation of rnf is rnf seq which may be convenient when defining instances for data types with no unevaluated fields e.g enumerations",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "rnf",
        "normalized": "a-\u003e()",
        "package": "StrictBench",
        "partial": "",
        "signature": "a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/StrictBench/docs/Test-StrictBench.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eThe function used by bench and benchpress to determine how\n   long (in milliseconds) the value takes to calculate. You can\n   use this function for instance if you wish to sum the time\n   of several different values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e  main = do t1 \u003c- time $ filter (\u003c 10) $ take 1000000 $ repeat (9 :: Int)\n            t2 \u003c- time $ reverse $ take 1000000 $ cycle \"StrictBench\"\n            print $ t1 + t2\n  \n  Output:\n  562.5\n\u003c/pre\u003e",
        "fct-module": "Test.StrictBench",
        "fct-package": "StrictBench",
        "fct-signature": "a -\u003e IO Double",
        "fct-source": "src/Test-StrictBench.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "The function used by bench and benchpress to determine how long in milliseconds the value takes to calculate You can use this function for instance if you wish to sum the time of several different values Example main do t1 time filter take repeat Int t2 time reverse take cycle StrictBench print t1 t2 Output",
        "hierarchy": "Test StrictBench",
        "module": "Test.StrictBench",
        "name": "time",
        "normalized": "a-\u003eIO Double",
        "package": "StrictBench",
        "partial": "",
        "signature": "a-\u003eIO Double"
      }
    }
  }
]