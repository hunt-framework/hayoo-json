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
        "word": "vector-strategies"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Strategies",
          "name": "Strategies",
          "package": "vector-strategies",
          "source": "src/Data-Vector-Strategies.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vector Strategies",
          "module": "Data.Vector.Strategies",
          "name": "Strategies",
          "package": "vector-strategies",
          "partial": "Strategies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Vector.Strategies",
          "name": "NFData",
          "package": "vector-strategies",
          "type": "class"
        },
        "index": {
          "description": "class of types that can be fully evaluated",
          "hierarchy": "Data Vector Strategies",
          "module": "Data.Vector.Strategies",
          "name": "NFData",
          "package": "vector-strategies",
          "partial": "NFData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#t:NFData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the elements of a boxed vector in parallel.\n\u003c/p\u003e\u003cp\u003eThe vector will be divided up into chunks of length less than or\n equal to the provided chunk size (first argument) and each chunk\n of elements will be sparked off for evaluation.\n\u003c/p\u003e\u003cp\u003eUse this along with the \u003ca\u003eparallel\u003c/a\u003e package's \u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n    vec `\u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e` (\u003ccode\u003e\u003ca\u003eparVector\u003c/a\u003e\u003c/code\u003e chunkSize)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eparVector\u003c/a\u003e\u003c/code\u003e can not provide any benefits (read: no parallelism) for unboxed vectors!\n\u003c/p\u003e",
          "module": "Data.Vector.Strategies",
          "name": "parVector",
          "package": "vector-strategies",
          "signature": "Int -\u003e Strategy (v a)",
          "source": "src/Data-Vector-Strategies.html#parVector",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the elements of boxed vector in parallel The vector will be divided up into chunks of length less than or equal to the provided chunk size first argument and each chunk of elements will be sparked off for evaluation Use this along with the parallel package using function vec using parVector chunkSize parVector can not provide any benefits read no parallelism for unboxed vectors",
          "hierarchy": "Data Vector Strategies",
          "module": "Data.Vector.Strategies",
          "name": "parVector",
          "normalized": "Int-\u003eStrategy(a b)",
          "package": "vector-strategies",
          "partial": "Vector",
          "signature": "Int-\u003eStrategy(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#v:parVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value using the given \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e x `using` s = runEval (s x)\n\u003c/pre\u003e",
          "module": "Data.Vector.Strategies",
          "name": "using",
          "package": "vector-strategies",
          "signature": "a -\u003e Strategy a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value using the given Strategy using runEval",
          "hierarchy": "Data Vector Strategies",
          "module": "Data.Vector.Strategies",
          "name": "using",
          "normalized": "a-\u003eStrategy a-\u003ea",
          "package": "vector-strategies",
          "signature": "a-\u003eStrategy a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#v:using"
      }
    }
  ]
]