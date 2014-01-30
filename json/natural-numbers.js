[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for natural numbers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "module",
        "fct-source": "src/Data-Natural.html",
        "fct-type": "module",
        "title": "Natural"
      },
      "index": {
        "description": "Support for natural numbers",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "Natural",
        "normalized": "",
        "package": "natural-numbers",
        "partial": "Natural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#t:Natural",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of natural numbers.\n\u003c/p\u003e\u003cp\u003eNote that matching a natural number against a negative pattern might not work as you expect.\n        For example, evaluating the following expression results in a run-time error, instead of the\n        result \u003ccode\u003e\"plus five\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\ncase 5 :: Natural of\n    -5 -\u003e \"minus five\"\n     5 -\u003e \"plus five\"\n\u003c/pre\u003e\u003cp\u003eThe reason is that the \u003ccode\u003e==\u003c/code\u003e operator of \u003ccode\u003eNatural\u003c/code\u003e is used for checking if the patterns\n        match, making it necessary to convert \u003ccode\u003e-5\u003c/code\u003e to Natural.\n\u003c/p\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "data",
        "fct-source": "src/Data-Natural.html#Natural",
        "fct-type": "data",
        "title": "Natural"
      },
      "index": {
        "description": "The type of natural numbers Note that matching natural number against negative pattern might not work as you expect For example evaluating the following expression results in run-time error instead of the result plus five case Natural of minus five plus five The reason is that the operator of Natural is used for checking if the patterns match making it necessary to convert to Natural",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "Natural",
        "normalized": "",
        "package": "natural-numbers",
        "partial": "Natural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#t:View",
      "description": {
        "fct-descr": "\u003cp\u003eA data type for views of natural numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "data",
        "fct-source": "src/Data-Natural.html#View",
        "fct-type": "data",
        "title": "View"
      },
      "index": {
        "description": "data type for views of natural numbers",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "View",
        "normalized": "",
        "package": "natural-numbers",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:Succ",
      "description": {
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "Succ Natural",
        "fct-source": "src/Data-Natural.html#View",
        "fct-type": "function",
        "title": "Succ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "Succ",
        "normalized": "",
        "package": "natural-numbers",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:Zero",
      "description": {
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "Zero",
        "fct-source": "src/Data-Natural.html#View",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "Zero",
        "normalized": "",
        "package": "natural-numbers",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eFolding of natural numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "accu -\u003e (accu -\u003e accu) -\u003e Natural -\u003e accu",
        "fct-source": "src/Data-Natural.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Folding of natural numbers",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "fold",
        "normalized": "a-\u003e(a-\u003ea)-\u003eNatural-\u003ea",
        "package": "natural-numbers",
        "partial": "",
        "signature": "accu-\u003e(accu-\u003eaccu)-\u003eNatural-\u003eaccu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:monus",
      "description": {
        "fct-descr": "\u003cp\u003eYields the monus of two natural numbers, which is their difference if the first number is\n        greater than the second, and zero otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "Natural -\u003e Natural -\u003e Natural",
        "fct-source": "src/Data-Natural.html#monus",
        "fct-type": "function",
        "title": "monus"
      },
      "index": {
        "description": "Yields the monus of two natural numbers which is their difference if the first number is greater than the second and zero otherwise",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "monus",
        "normalized": "Natural-\u003eNatural-\u003eNatural",
        "package": "natural-numbers",
        "partial": "",
        "signature": "Natural-\u003eNatural-\u003eNatural"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/natural-numbers/docs/Data-Natural.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003eYields the view of a natural number.\n\u003c/p\u003e",
        "fct-module": "Data.Natural",
        "fct-package": "natural-numbers",
        "fct-signature": "Natural -\u003e View",
        "fct-source": "src/Data-Natural.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Yields the view of natural number",
        "hierarchy": "Data Natural",
        "module": "Data.Natural",
        "name": "view",
        "normalized": "Natural-\u003eView",
        "package": "natural-numbers",
        "partial": "",
        "signature": "Natural-\u003eView"
      }
    }
  }
]