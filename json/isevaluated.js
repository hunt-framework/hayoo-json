[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/isevaluated/docs/Data-IsEvaluated.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eisEvaluated\u003c/a\u003e\u003c/code\u003e allows checking for expressions that have already been\n reduced to weak heaf normal form. This can be useful for racing\n computations against one another; if one computation can be shown to\n terminate instantly, there's no need to set up any threads for the race.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IsEvaluated",
        "fct-package": "isevaluated",
        "fct-signature": "module",
        "fct-source": "src/Data-IsEvaluated.html",
        "fct-type": "module",
        "title": "IsEvaluated"
      },
      "index": {
        "description": "isEvaluated allows checking for expressions that have already been reduced to weak heaf normal form This can be useful for racing computations against one another if one computation can be shown to terminate instantly there no need to set up any threads for the race",
        "hierarchy": "Data IsEvaluated",
        "module": "Data.IsEvaluated",
        "name": "IsEvaluated",
        "normalized": "",
        "package": "isevaluated",
        "partial": "Is Evaluated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/isevaluated/docs/Data-IsEvaluated.html#v:isEvaluated",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eisEvaluated a\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the given value is in whnf.\n\u003c/p\u003e\u003cp\u003eIt may produce false negatives.\n\u003c/p\u003e",
        "fct-module": "Data.IsEvaluated",
        "fct-package": "isevaluated",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/Data-IsEvaluated.html#isEvaluated",
        "fct-type": "function",
        "title": "isEvaluated"
      },
      "index": {
        "description": "If isEvaluated returns True the given value is in whnf It may produce false negatives",
        "hierarchy": "Data IsEvaluated",
        "module": "Data.IsEvaluated",
        "name": "isEvaluated",
        "normalized": "a-\u003eIO Bool",
        "package": "isevaluated",
        "partial": "Evaluated",
        "signature": "a-\u003eIO Bool"
      }
    }
  }
]