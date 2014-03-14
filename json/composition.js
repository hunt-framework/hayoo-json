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
        "word": "composition"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for convenience and demonstrative purposes\n more than it is for providing actual value.\n I do not recommend that you rely on this module\n for performance-sensitive code.\n Because this module is not based on Prelude's (.),\n some chances at optimization might be missed by your compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Composition",
          "name": "Composition",
          "package": "composition",
          "source": "src/Data-Composition.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for convenience and demonstrative purposes more than it is for providing actual value do not recommend that you rely on this module for performance-sensitive code Because this module is not based on Prelude some chances at optimization might be missed by your compiler",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "Composition",
          "package": "composition",
          "partial": "Composition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mathematical symbol for function composition.\n\u003c/p\u003e",
          "module": "Data.Composition",
          "name": "(∘)",
          "package": "composition",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Composition.html#%2218",
          "type": "function"
        },
        "index": {
          "description": "The mathematical symbol for function composition",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(∘) ∘",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "composition",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:-8728-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe pattern of appending asterisks is\n straightforward to extend to similar functions:\n (compose2 = .*, compose3 = .**, etc).\n However, \u003ccode\u003e.:\u003c/code\u003e has been commonly adopted amongst Haskellers,\n and the need for compose3 and beyond is rare in practice.\n\u003c/p\u003e",
          "module": "Data.Composition",
          "name": "(.*)",
          "package": "composition",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Composition.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to The pattern of appending asterisks is straightforward to extend to similar functions compose2 compose3 etc However has been commonly adopted amongst Haskellers and the need for compose3 and beyond is rare in practice",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.*) .*",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "composition",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.**)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.**) .**",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.***)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.***) .***",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.****)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.****) .****",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.*****)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.*****) .*****",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.******)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.******) .******",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.*******)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A%2A%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.*******) .*******",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42--42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.********)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%2A%2A%2A%2A%2A%2A%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.********) .********",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.-42--42--42--42--42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two functions. \u003ccode\u003ef .: g\u003c/code\u003e is similar to \u003ccode\u003ef . g\u003c/code\u003e\n except that \u003ccode\u003eg\u003c/code\u003e will be fed \u003cem\u003etwo\u003c/em\u003e arguments instead of one\n before handing its result to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is defined as\n\u003c/p\u003e\u003cpre\u003e (f .: g) x y = f (g x y)\n\u003c/pre\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e concatMap :: (a -\u003e b) -\u003e [a] -\u003e [b]\n concatMap = concat .: map\n\u003c/pre\u003e\u003cp\u003eNotice how \u003cem\u003etwo\u003c/em\u003e arguments\n (the function \u003cem\u003eand\u003c/em\u003e the list)\n will be given to \u003ccode\u003emap\u003c/code\u003e before the result\n is passed to \u003ccode\u003econcat\u003c/code\u003e. This is equivalent to:\n\u003c/p\u003e\u003cpre\u003e concatMap f xs = concat (map f xs)\n\u003c/pre\u003e",
          "module": "Data.Composition",
          "name": "(.:)",
          "package": "composition",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Composition.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Compose two functions is similar to except that will be fed two arguments instead of one before handing its result to This function is defined as Example usage concatMap concatMap concat map Notice how two arguments the function and the list will be given to map before the result is passed to concat This is equivalent to concatMap xs concat map xs",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.:) .:",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "composition",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne compact pattern for composition operators is to\n \u003ca\u003ecount the dots after the first one\u003c/a\u003e,\n which begins with the common \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e, and proceeds by first\n appending another \u003ccode\u003e.\u003c/code\u003e and then replacing it with \u003ccode\u003e:\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Composition",
          "name": "(.:.)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A.",
          "type": "function"
        },
        "index": {
          "description": "One compact pattern for composition operators is to count the dots after the first one which begins with the common and proceeds by first appending another and then replacing it with",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.:.) .:.",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.::)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.::) .::",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.::.)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.::.) .::.",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.:::)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.:::) .:::",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.:::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.:::.)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.:::.) .:::.",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.:::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.::::)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.::::) .::::",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "(.::::.)",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#.%3A%3A%3A%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "(.::::.) .::::.",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:.::::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecomposeN f g\u003c/code\u003e means give \u003ccode\u003eg\u003c/code\u003e \u003ccode\u003eN\u003c/code\u003e inputs\n and then pass its result to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Composition",
          "name": "compose1",
          "package": "composition",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Composition.html#compose1",
          "type": "function"
        },
        "index": {
          "description": "composeN means give inputs and then pass its result to",
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose1",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "composition",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose2",
          "package": "composition",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Composition.html#compose2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose2",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "composition",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose3",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose3",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose4",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose4",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose5",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose5",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose6",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose6",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose7",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose7",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose8",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose8",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Composition",
          "name": "compose9",
          "package": "composition",
          "signature": "(d -\u003e e) -\u003e (a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e a6 -\u003e b -\u003e c -\u003e e",
          "source": "src/Data-Composition.html#compose9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Composition",
          "module": "Data.Composition",
          "name": "compose9",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "composition",
          "signature": "(d-\u003ee)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ed)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/composition/docs/Data-Composition.html#v:compose9"
      }
    }
  ]
]