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
        "word": "comonad-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a comonadic interface to random values. In\n   some situations, this may be more natural than a monadic\n   approach.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Comonad.Random",
          "name": "Random",
          "package": "comonad-random",
          "source": "src/Control-Comonad-Random.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides comonadic interface to random values In some situations this may be more natural than monadic approach",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "Random",
          "package": "comonad-random",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoized supply of values\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "Rand",
          "package": "comonad-random",
          "source": "src/Control-Comonad-Random.html#Rand",
          "type": "data"
        },
        "index": {
          "description": "memoized supply of values",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "Rand",
          "package": "comonad-random",
          "partial": "Rand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#t:Rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an infinite list of values by applying a function\n   repeatedly.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "extracts",
          "package": "comonad-random",
          "signature": "(f a -\u003e f a) -\u003e f a -\u003e [a]",
          "source": "src/Control-Comonad-Random.html#extracts",
          "type": "function"
        },
        "index": {
          "description": "Generate an infinite list of values by applying function repeatedly",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "extracts",
          "normalized": "(a b-\u003ea b)-\u003ea b-\u003e[b]",
          "package": "comonad-random",
          "signature": "(f a-\u003ef a)-\u003ef a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:extracts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the generator, returning the new left one.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "left",
          "package": "comonad-random",
          "signature": "Rand a -\u003e Rand a",
          "source": "src/Control-Comonad-Random.html#left",
          "type": "function"
        },
        "index": {
          "description": "Split the generator returning the new left one",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "left",
          "normalized": "Rand a-\u003eRand a",
          "package": "comonad-random",
          "signature": "Rand a-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a comonadic generator from a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "mkRand",
          "package": "comonad-random",
          "signature": "g -\u003e Rand a",
          "source": "src/Control-Comonad-Random.html#mkRand",
          "type": "function"
        },
        "index": {
          "description": "Create comonadic generator from RandomGen",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "mkRand",
          "normalized": "a-\u003eRand b",
          "package": "comonad-random",
          "partial": "Rand",
          "signature": "g-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:mkRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a comonadic generator from a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e where the values\n   are limited to a given range.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "mkRandR",
          "package": "comonad-random",
          "signature": "(a, a) -\u003e g -\u003e Rand a",
          "source": "src/Control-Comonad-Random.html#mkRandR",
          "type": "function"
        },
        "index": {
          "description": "Create comonadic generator from RandomGen where the values are limited to given range",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "mkRandR",
          "normalized": "(a,a)-\u003eb-\u003eRand a",
          "package": "comonad-random",
          "partial": "Rand",
          "signature": "(a,a)-\u003eg-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:mkRandR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the generator for the next value.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "next",
          "package": "comonad-random",
          "signature": "Rand a -\u003e Rand a",
          "source": "src/Control-Comonad-Random.html#next",
          "type": "function"
        },
        "index": {
          "description": "Get the generator for the next value",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "next",
          "normalized": "Rand a-\u003eRand a",
          "package": "comonad-random",
          "signature": "Rand a-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the generator, returning the new right one.\n\u003c/p\u003e",
          "module": "Control.Comonad.Random",
          "name": "right",
          "package": "comonad-random",
          "signature": "Rand a -\u003e Rand a",
          "source": "src/Control-Comonad-Random.html#right",
          "type": "function"
        },
        "index": {
          "description": "Split the generator returning the new right one",
          "hierarchy": "Control Comonad Random",
          "module": "Control.Comonad.Random",
          "name": "right",
          "normalized": "Rand a-\u003eRand a",
          "package": "comonad-random",
          "signature": "Rand a-\u003eRand a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:right"
      }
    }
  ]
]