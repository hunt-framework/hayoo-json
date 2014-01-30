[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#",
      "description": {
        "fct-module": "Data.Vector.Strategies",
        "fct-package": "vector-strategies",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Strategies.html",
        "fct-type": "module",
        "title": "Strategies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Strategies",
        "module": "Data.Vector.Strategies",
        "name": "Strategies",
        "normalized": "",
        "package": "vector-strategies",
        "partial": "Strategies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#t:NFData",
      "description": {
        "fct-descr": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Strategies",
        "fct-package": "vector-strategies",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "class of types that can be fully evaluated",
        "hierarchy": "Data Vector Strategies",
        "module": "Data.Vector.Strategies",
        "name": "NFData",
        "normalized": "",
        "package": "vector-strategies",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#v:parVector",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the elements of a boxed vector in parallel.\n\u003c/p\u003e\u003cp\u003eThe vector will be divided up into chunks of length less than or\n equal to the provided chunk size (first argument) and each chunk\n of elements will be sparked off for evaluation.\n\u003c/p\u003e\u003cp\u003eUse this along with the \u003ca\u003eparallel\u003c/a\u003e package's \u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n    vec `\u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e` (\u003ccode\u003e\u003ca\u003eparVector\u003c/a\u003e\u003c/code\u003e chunkSize)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eparVector\u003c/a\u003e\u003c/code\u003e can not provide any benefits (read: no parallelism) for unboxed vectors!\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Strategies",
        "fct-package": "vector-strategies",
        "fct-signature": "Int -\u003e Strategy (v a)",
        "fct-source": "src/Data-Vector-Strategies.html#parVector",
        "fct-type": "function",
        "title": "parVector"
      },
      "index": {
        "description": "Evaluate the elements of boxed vector in parallel The vector will be divided up into chunks of length less than or equal to the provided chunk size first argument and each chunk of elements will be sparked off for evaluation Use this along with the parallel package using function vec using parVector chunkSize parVector can not provide any benefits read no parallelism for unboxed vectors",
        "hierarchy": "Data Vector Strategies",
        "module": "Data.Vector.Strategies",
        "name": "parVector",
        "normalized": "Int-\u003eStrategy(a b)",
        "package": "vector-strategies",
        "partial": "Vector",
        "signature": "Int-\u003eStrategy(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-strategies/docs/Data-Vector-Strategies.html#v:using",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a value using the given \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e x `using` s = runEval (s x)\n\u003c/pre\u003e",
        "fct-module": "Data.Vector.Strategies",
        "fct-package": "vector-strategies",
        "fct-signature": "a -\u003e Strategy a -\u003e a",
        "fct-type": "function",
        "title": "using"
      },
      "index": {
        "description": "Evaluate value using the given Strategy using runEval",
        "hierarchy": "Data Vector Strategies",
        "module": "Data.Vector.Strategies",
        "name": "using",
        "normalized": "a-\u003eStrategy a-\u003ea",
        "package": "vector-strategies",
        "partial": "",
        "signature": "a-\u003eStrategy a-\u003ea"
      }
    }
  }
]