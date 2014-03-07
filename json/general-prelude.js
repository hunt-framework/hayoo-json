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
        "word": "general-prelude"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrelude replacement, use the NoImplicitPrelude extension before importing\n   this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude.General",
          "name": "General",
          "package": "general-prelude",
          "source": "src/Prelude-General.html",
          "type": "module"
        },
        "index": {
          "description": "Prelude replacement use the NoImplicitPrelude extension before importing this",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "General",
          "package": "general-prelude",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "($!)",
          "package": "general-prelude",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Strict call-by-value application defined in terms of seq",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "general-prelude",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.General",
          "name": "(*)",
          "package": "general-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.General",
          "name": "(+)",
          "package": "general-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.General",
          "name": "(-)",
          "package": "general-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efractional division\n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "(/)",
          "package": "general-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "fractional division",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "error",
          "package": "general-prelude",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "general-prelude",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.General",
          "name": "filter",
          "package": "general-prelude",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e m a",
          "source": "src/Prelude-General.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003ec a",
          "package": "general-prelude",
          "signature": "(a-\u003eBool)-\u003et a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "fromIntegral",
          "package": "general-prelude",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "general-prelude",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn either/maybe equivalent for Bool, often known as if'\n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "if'",
          "package": "general-prelude",
          "signature": "a-\u003e a-\u003e Bool-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "An either maybe equivalent for Bool often known as if",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "if'",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:if-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
          "module": "Prelude.General",
          "name": "mod",
          "package": "general-prelude",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "integer modulus satisfying div mod",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "mod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "general-prelude",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "seq",
          "package": "general-prelude",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "general-prelude",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Prelude.General",
          "name": "undefined",
          "package": "general-prelude",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Prelude General",
          "module": "Prelude.General",
          "name": "undefined",
          "package": "general-prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/general-prelude/docs/Prelude-General.html#v:undefined"
      }
    }
  ]
]