[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a comonadic interface to random values. In\n   some situations, this may be more natural than a monadic\n   approach.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "module",
        "fct-source": "src/Control-Comonad-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "This module provides comonadic interface to random values In some situations this may be more natural than monadic approach",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "Random",
        "normalized": "",
        "package": "comonad-random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#t:Rand",
      "description": {
        "fct-descr": "\u003cp\u003eA memoized supply of values\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "data",
        "fct-source": "src/Control-Comonad-Random.html#Rand",
        "fct-type": "data",
        "title": "Rand"
      },
      "index": {
        "description": "memoized supply of values",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "Rand",
        "normalized": "",
        "package": "comonad-random",
        "partial": "Rand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:extracts",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an infinite list of values by applying a function\n   repeatedly.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "(f a -\u003e f a) -\u003e f a -\u003e [a]",
        "fct-source": "src/Control-Comonad-Random.html#extracts",
        "fct-type": "function",
        "title": "extracts"
      },
      "index": {
        "description": "Generate an infinite list of values by applying function repeatedly",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "extracts",
        "normalized": "(a b-\u003ea b)-\u003ea b-\u003e[b]",
        "package": "comonad-random",
        "partial": "",
        "signature": "(f a-\u003ef a)-\u003ef a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the generator, returning the new left one.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "Rand a -\u003e Rand a",
        "fct-source": "src/Control-Comonad-Random.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Split the generator returning the new left one",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "left",
        "normalized": "Rand a-\u003eRand a",
        "package": "comonad-random",
        "partial": "",
        "signature": "Rand a-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:mkRand",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a comonadic generator from a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "g -\u003e Rand a",
        "fct-source": "src/Control-Comonad-Random.html#mkRand",
        "fct-type": "function",
        "title": "mkRand"
      },
      "index": {
        "description": "Create comonadic generator from RandomGen",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "mkRand",
        "normalized": "a-\u003eRand b",
        "package": "comonad-random",
        "partial": "Rand",
        "signature": "g-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:mkRandR",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a comonadic generator from a \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e where the values\n   are limited to a given range.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "(a, a) -\u003e g -\u003e Rand a",
        "fct-source": "src/Control-Comonad-Random.html#mkRandR",
        "fct-type": "function",
        "title": "mkRandR"
      },
      "index": {
        "description": "Create comonadic generator from RandomGen where the values are limited to given range",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "mkRandR",
        "normalized": "(a,a)-\u003eb-\u003eRand a",
        "package": "comonad-random",
        "partial": "Rand",
        "signature": "(a,a)-\u003eg-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eGet the generator for the next value.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "Rand a -\u003e Rand a",
        "fct-source": "src/Control-Comonad-Random.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Get the generator for the next value",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "next",
        "normalized": "Rand a-\u003eRand a",
        "package": "comonad-random",
        "partial": "",
        "signature": "Rand a-\u003eRand a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/comonad-random/docs/Control-Comonad-Random.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the generator, returning the new right one.\n\u003c/p\u003e",
        "fct-module": "Control.Comonad.Random",
        "fct-package": "comonad-random",
        "fct-signature": "Rand a -\u003e Rand a",
        "fct-source": "src/Control-Comonad-Random.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Split the generator returning the new right one",
        "hierarchy": "Control Comonad Random",
        "module": "Control.Comonad.Random",
        "name": "right",
        "normalized": "Rand a-\u003eRand a",
        "package": "comonad-random",
        "partial": "",
        "signature": "Rand a-\u003eRand a"
      }
    }
  }
]