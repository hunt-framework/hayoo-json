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
        "word": "isevaluated"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eisEvaluated\u003c/a\u003e\u003c/code\u003e allows checking for expressions that have already been\n reduced to weak heaf normal form. This can be useful for racing\n computations against one another; if one computation can be shown to\n terminate instantly, there's no need to set up any threads for the race.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IsEvaluated",
          "name": "IsEvaluated",
          "package": "isevaluated",
          "source": "src/Data-IsEvaluated.html",
          "type": "module"
        },
        "index": {
          "description": "isEvaluated allows checking for expressions that have already been reduced to weak heaf normal form This can be useful for racing computations against one another if one computation can be shown to terminate instantly there no need to set up any threads for the race",
          "hierarchy": "Data IsEvaluated",
          "module": "Data.IsEvaluated",
          "name": "IsEvaluated",
          "package": "isevaluated",
          "partial": "Is Evaluated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/isevaluated/docs/Data-IsEvaluated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eisEvaluated a\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the given value is in whnf.\n\u003c/p\u003e\u003cp\u003eIt may produce false negatives.\n\u003c/p\u003e",
          "module": "Data.IsEvaluated",
          "name": "isEvaluated",
          "package": "isevaluated",
          "signature": "a -\u003e IO Bool",
          "source": "src/Data-IsEvaluated.html#isEvaluated",
          "type": "function"
        },
        "index": {
          "description": "If isEvaluated returns True the given value is in whnf It may produce false negatives",
          "hierarchy": "Data IsEvaluated",
          "module": "Data.IsEvaluated",
          "name": "isEvaluated",
          "normalized": "a-\u003eIO Bool",
          "package": "isevaluated",
          "partial": "Evaluated",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/isevaluated/docs/Data-IsEvaluated.html#v:isEvaluated"
      }
    }
  ]
]