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
        "word": "ltl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsing linear temporal logic (LTL) to verify embedded software and hardware.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.LTL",
          "name": "LTL",
          "package": "ltl",
          "source": "src/Language-LTL.html",
          "type": "module"
        },
        "index": {
          "description": "Using linear temporal logic LTL to verify embedded software and hardware",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "LTL",
          "package": "ltl",
          "partial": "LTL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.LTL",
          "name": "B",
          "package": "ltl",
          "source": "src/Language-LTL.html#B",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "B",
          "package": "ltl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerification directives.\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "Directive",
          "package": "ltl",
          "source": "src/Language-LTL.html#Directive",
          "type": "data"
        },
        "index": {
          "description": "Verification directives",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "Directive",
          "package": "ltl",
          "partial": "Directive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:Directive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLTL (and other) expressions.\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "E",
          "package": "ltl",
          "source": "src/Language-LTL.html#E",
          "type": "data"
        },
        "index": {
          "description": "LTL and other expressions",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "E",
          "package": "ltl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.LTL",
          "name": "F",
          "package": "ltl",
          "source": "src/Language-LTL.html#F",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "F",
          "package": "ltl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.LTL",
          "name": "N",
          "package": "ltl",
          "source": "src/Language-LTL.html#N",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "N",
          "package": "ltl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.LTL",
          "name": "R",
          "package": "ltl",
          "source": "src/Language-LTL.html#R",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "R",
          "package": "ltl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty must be true.\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "Assert",
          "package": "ltl",
          "signature": "Assert String (E F)",
          "source": "src/Language-LTL.html#Directive",
          "type": "function"
        },
        "index": {
          "description": "Property must be true",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "Assert",
          "package": "ltl",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#v:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty is assumed to be true.  Becomes an assertion in simulation.\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "Assume",
          "package": "ltl",
          "signature": "Assume String (E F)",
          "source": "src/Language-LTL.html#Directive",
          "type": "function"
        },
        "index": {
          "description": "Property is assumed to be true Becomes an assertion in simulation",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "Assume",
          "package": "ltl",
          "partial": "Assume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#v:Assume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence must be excited.\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "Cover",
          "package": "ltl",
          "signature": "Cover String (E R)",
          "source": "src/Language-LTL.html#Directive",
          "type": "function"
        },
        "index": {
          "description": "Sequence must be excited",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "Cover",
          "package": "ltl",
          "partial": "Cover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#v:Cover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck VCD data against a set of verification directives.  Returns a list of violations with time of failure (Just: safety violation, Nothing: liveness violation).\n\u003c/p\u003e",
          "module": "Language.LTL",
          "name": "checkVCD",
          "package": "ltl",
          "signature": "String -\u003e Int -\u003e [Directive] -\u003e [(Directive, Maybe Int)]",
          "source": "src/Language-LTL.html#checkVCD",
          "type": "function"
        },
        "index": {
          "description": "Check VCD data against set of verification directives Returns list of violations with time of failure Just safety violation Nothing liveness violation",
          "hierarchy": "Language LTL",
          "module": "Language.LTL",
          "name": "checkVCD",
          "normalized": "String-\u003eInt-\u003e[Directive]-\u003e[(Directive,Maybe Int)]",
          "package": "ltl",
          "partial": "VCD",
          "signature": "String-\u003eInt-\u003e[Directive]-\u003e[(Directive,Maybe Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltl/docs/Language-LTL.html#v:checkVCD"
      }
    }
  ]
]