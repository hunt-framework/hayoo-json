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
        "word": "acme-omitted"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA universal definition of \"omitted content\", an alternative to\n\u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e, and methods for observing whether a definition is\nmerely \"omitted\" or truly \"undefined\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Omitted",
          "name": "Omitted",
          "package": "acme-omitted",
          "source": "src/Acme-Omitted.html",
          "type": "module"
        },
        "index": {
          "description": "universal definition of omitted content an alternative to undefined and methods for observing whether definition is merely omitted or truly undefined",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "Omitted",
          "package": "acme-omitted",
          "partial": "Omitted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative syntax for \u003ccode\u003e\u003ca\u003eomitted\u003c/a\u003e\u003c/code\u003e that has been carefully\n optimised for programmer convenience and visual presentation\n (e.g., for use in printed documents).\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e definition = (...)\n\u003c/pre\u003e",
          "module": "Acme.Omitted",
          "name": "(...)",
          "package": "acme-omitted",
          "signature": "a",
          "source": "src/Acme-Omitted.html#...",
          "type": "function"
        },
        "index": {
          "description": "Alternative syntax for omitted that has been carefully optimised for programmer convenience and visual presentation e.g for use in printed documents Example usage definition",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "(...) ...",
          "package": "acme-omitted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer the age-old question \"was this definition omitted?\"\n\u003c/p\u003e\u003cpre\u003e\n isOmitted 0           = return False\n isOmitted \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e = return False\n isOmitted \u003ccode\u003e\u003ca\u003eomitted\u003c/a\u003e\u003c/code\u003e   = return True\n\u003c/pre\u003e",
          "module": "Acme.Omitted",
          "name": "isOmitted",
          "package": "acme-omitted",
          "signature": "a -\u003e IO Bool",
          "source": "src/Acme-Omitted.html#isOmitted",
          "type": "function"
        },
        "index": {
          "description": "Answer the age-old question was this definition omitted isOmitted return False isOmitted undefined return False isOmitted omitted return True",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "isOmitted",
          "normalized": "a-\u003eIO Bool",
          "package": "acme-omitted",
          "partial": "Omitted",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:isOmitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eisUndefined\u003c/a\u003e\u003c/code\u003e for \"Prelude.undefined\".\n\u003c/p\u003e",
          "module": "Acme.Omitted",
          "name": "isPreludeUndefined",
          "package": "acme-omitted",
          "signature": "a -\u003e IO Bool",
          "source": "src/Acme-Omitted.html#isPreludeUndefined",
          "type": "function"
        },
        "index": {
          "description": "version of isUndefined for Prelude.undefined",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "isPreludeUndefined",
          "normalized": "a-\u003eIO Bool",
          "package": "acme-omitted",
          "partial": "Prelude Undefined",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:isPreludeUndefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... or is it really \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e\u003cpre\u003e\n isUndefined 0           = return False\n isUndefined \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e = return True\n isUndefined \u003ccode\u003e\u003ca\u003eomitted\u003c/a\u003e\u003c/code\u003e   = return False\n\u003c/pre\u003e",
          "module": "Acme.Omitted",
          "name": "isUndefined",
          "package": "acme-omitted",
          "signature": "a -\u003e IO Bool",
          "source": "src/Acme-Omitted.html#isUndefined",
          "type": "function"
        },
        "index": {
          "description": "or is it really undefined isUndefined return False isUndefined undefined return True isUndefined omitted return False",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "isUndefined",
          "normalized": "a-\u003eIO Bool",
          "package": "acme-omitted",
          "partial": "Undefined",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:isUndefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe universal omitted content operator.\n\u003c/p\u003e\u003cp\u003eThis is sufficient to express _all_ types of omitted content\n\u003c/p\u003e",
          "module": "Acme.Omitted",
          "name": "omitted",
          "package": "acme-omitted",
          "signature": "a",
          "source": "src/Acme-Omitted.html#omitted",
          "type": "function"
        },
        "index": {
          "description": "The universal omitted content operator This is sufficient to express all types of omitted content",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "omitted",
          "package": "acme-omitted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:omitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes all values that are, fundamentally, undefinable.\n\u003c/p\u003e\u003cp\u003eThe implicit (as in not statically enforcable) contract of \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n is that it will never be used for merely omitted definitions.\n For that, see \u003ccode\u003e\u003ca\u003eomitted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Acme.Omitted",
          "name": "undefined",
          "package": "acme-omitted",
          "signature": "a",
          "source": "src/Acme-Omitted.html#undefined",
          "type": "function"
        },
        "index": {
          "description": "Denotes all values that are fundamentally undefinable The implicit as in not statically enforcable contract of undefined is that it will never be used for merely omitted definitions For that see omitted",
          "hierarchy": "Acme Omitted",
          "module": "Acme.Omitted",
          "name": "undefined",
          "package": "acme-omitted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-omitted/docs/Acme-Omitted.html#v:undefined"
      }
    }
  ]
]