[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#",
      "description": {
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "functors",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative syntax for \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e that fits better with the one-letter \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e from this module.\n\u003c/p\u003e\u003cpre\u003einfixl 4 &\u003c/pre\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Syntax.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Alternative syntax for that fits better with the one-letter from this module infixl",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "(&) &",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "functors",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:.",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralised version of \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e that is equivalent to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but with the fixity of standard \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003einfixr 9 .\u003c/pre\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Syntax.html#.",
        "fct-type": "function",
        "title": "(.)"
      },
      "index": {
        "description": "Generalised version of that is equivalent to fmap but with the fixity of standard infixr",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "(.) .",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eNested \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es inside Functors (two levels).\n\u003c/p\u003e\u003cpre\u003einfixr 9 .:\u003c/pre\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f (g a) -\u003e f (g b)",
        "fct-source": "src/Data-Functor-Syntax.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Nested fmap for Functor inside Functors two levels infixr",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "(.:) .:",
        "normalized": "(a-\u003eb)-\u003ec(d a)-\u003ec(d b)",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef(g a)-\u003ef(g b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:.::",
      "description": {
        "fct-descr": "\u003cp\u003eNested \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es inside Functors inside Functors (three levels).\n\u003c/p\u003e\u003cpre\u003einfixr 9 .::\u003c/pre\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f (g (h a)) -\u003e f (g (h b))",
        "fct-source": "src/Data-Functor-Syntax.html#.%3A%3A",
        "fct-type": "function",
        "title": "(.::)"
      },
      "index": {
        "description": "Nested fmap for Functor inside Functors inside Functors three levels infixr",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "(.::) .::",
        "normalized": "(a-\u003eb)-\u003ec(d(e a))-\u003ec(d(e b))",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef(g(h a))-\u003ef(g(h b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:binary",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f (g a) -\u003e f (g b)",
        "fct-source": "src/Data-Functor-Syntax.html#binary",
        "fct-type": "function",
        "title": "binary"
      },
      "index": {
        "description": "Alias for",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "binary",
        "normalized": "(a-\u003eb)-\u003ec(d a)-\u003ec(d b)",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef(g a)-\u003ef(g b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:flip",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralised version of \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "f (a -\u003e b) -\u003e a -\u003e f b",
        "fct-source": "src/Data-Functor-Syntax.html#flip",
        "fct-type": "function",
        "title": "flip"
      },
      "index": {
        "description": "Generalised version of flip",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "flip",
        "normalized": "a(b-\u003ec)-\u003eb-\u003ea c",
        "package": "functors",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ea-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:trinary",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003e.::\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f (g (h a)) -\u003e f (g (h b))",
        "fct-source": "src/Data-Functor-Syntax.html#trinary",
        "fct-type": "function",
        "title": "trinary"
      },
      "index": {
        "description": "Alias for",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "trinary",
        "normalized": "(a-\u003eb)-\u003ec(d(e a))-\u003ec(d(e b))",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef(g(h a))-\u003ef(g(h b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/functors/docs/Data-Functor-Syntax.html#v:unary",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Syntax",
        "fct-package": "functors",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Syntax.html#unary",
        "fct-type": "function",
        "title": "unary"
      },
      "index": {
        "description": "Alias for fmap",
        "hierarchy": "Data Functor Syntax",
        "module": "Data.Functor.Syntax",
        "name": "unary",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "functors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  }
]