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
        "word": "natural-numbers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "natural-numbers",
          "source": "src/Data-Natural.html",
          "type": "module"
        },
        "index": {
          "description": "Support for natural numbers",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "natural-numbers",
          "partial": "Natural",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of natural numbers.\n\u003c/p\u003e\u003cp\u003eNote that matching a natural number against a negative pattern might not work as you expect.\n        For example, evaluating the following expression results in a run-time error, instead of the\n        result \u003ccode\u003e\"plus five\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\ncase 5 :: Natural of\n    -5 -\u003e \"minus five\"\n     5 -\u003e \"plus five\"\n\u003c/pre\u003e\u003cp\u003eThe reason is that the \u003ccode\u003e==\u003c/code\u003e operator of \u003ccode\u003eNatural\u003c/code\u003e is used for checking if the patterns\n        match, making it necessary to convert \u003ccode\u003e-5\u003c/code\u003e to Natural.\n\u003c/p\u003e",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "natural-numbers",
          "source": "src/Data-Natural.html#Natural",
          "type": "data"
        },
        "index": {
          "description": "The type of natural numbers Note that matching natural number against negative pattern might not work as you expect For example evaluating the following expression results in run-time error instead of the result plus five case Natural of minus five plus five The reason is that the operator of Natural is used for checking if the patterns match making it necessary to convert to Natural",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Natural",
          "package": "natural-numbers",
          "partial": "Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#t:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type for views of natural numbers.\n\u003c/p\u003e",
          "module": "Data.Natural",
          "name": "View",
          "package": "natural-numbers",
          "source": "src/Data-Natural.html#View",
          "type": "data"
        },
        "index": {
          "description": "data type for views of natural numbers",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "View",
          "package": "natural-numbers",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Natural",
          "name": "Succ",
          "package": "natural-numbers",
          "signature": "Succ Natural",
          "source": "src/Data-Natural.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Succ",
          "package": "natural-numbers",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Natural",
          "name": "Zero",
          "package": "natural-numbers",
          "signature": "Zero",
          "source": "src/Data-Natural.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "Zero",
          "package": "natural-numbers",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding of natural numbers.\n\u003c/p\u003e",
          "module": "Data.Natural",
          "name": "fold",
          "package": "natural-numbers",
          "signature": "accu -\u003e (accu -\u003e accu) -\u003e Natural -\u003e accu",
          "source": "src/Data-Natural.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Folding of natural numbers",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "fold",
          "normalized": "a-\u003e(a-\u003ea)-\u003eNatural-\u003ea",
          "package": "natural-numbers",
          "signature": "accu-\u003e(accu-\u003eaccu)-\u003eNatural-\u003eaccu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the monus of two natural numbers, which is their difference if the first number is\n        greater than the second, and zero otherwise.\n\u003c/p\u003e",
          "module": "Data.Natural",
          "name": "monus",
          "package": "natural-numbers",
          "signature": "Natural -\u003e Natural -\u003e Natural",
          "source": "src/Data-Natural.html#monus",
          "type": "function"
        },
        "index": {
          "description": "Yields the monus of two natural numbers which is their difference if the first number is greater than the second and zero otherwise",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "monus",
          "normalized": "Natural-\u003eNatural-\u003eNatural",
          "package": "natural-numbers",
          "signature": "Natural-\u003eNatural-\u003eNatural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:monus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the view of a natural number.\n\u003c/p\u003e",
          "module": "Data.Natural",
          "name": "view",
          "package": "natural-numbers",
          "signature": "Natural -\u003e View",
          "source": "src/Data-Natural.html#view",
          "type": "function"
        },
        "index": {
          "description": "Yields the view of natural number",
          "hierarchy": "Data Natural",
          "module": "Data.Natural",
          "name": "view",
          "normalized": "Natural-\u003eView",
          "package": "natural-numbers",
          "signature": "Natural-\u003eView",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:view"
      }
    }
  ]
]