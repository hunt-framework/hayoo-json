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
        "word": "hmatrix-tests"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome tests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "Tests",
          "package": "hmatrix-tests",
          "source": "src/Numeric-LinearAlgebra-Tests.html",
          "type": "module"
        },
        "index": {
          "description": "Some tests",
          "hierarchy": "Numeric LinearAlgebra Tests",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "Tests",
          "package": "hmatrix-tests",
          "partial": "Tests",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-tests/docs/Numeric-LinearAlgebra-Tests.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerformance measurements.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "runBenchmarks",
          "package": "hmatrix-tests",
          "signature": "IO ()",
          "source": "src/Numeric-LinearAlgebra-Tests.html#runBenchmarks",
          "type": "function"
        },
        "index": {
          "description": "Performance measurements",
          "hierarchy": "Numeric LinearAlgebra Tests",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "runBenchmarks",
          "normalized": "IO()",
          "package": "hmatrix-tests",
          "partial": "Benchmarks",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-tests/docs/Numeric-LinearAlgebra-Tests.html#v:runBenchmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll tests must pass with a maximum dimension of about 20\n  (some tests may fail with bigger sizes due to precision loss).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "runTests",
          "package": "hmatrix-tests",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "All tests must pass with maximum dimension of about some tests may fail with bigger sizes due to precision loss",
          "hierarchy": "Numeric LinearAlgebra Tests",
          "module": "Numeric.LinearAlgebra.Tests",
          "name": "runTests",
          "normalized": "Int-\u003eIO()",
          "package": "hmatrix-tests",
          "partial": "Tests",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-tests/docs/Numeric-LinearAlgebra-Tests.html#v:runTests"
      }
    }
  ]
]