[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#",
      "description": {
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "module",
        "fct-source": "src/Data-SemanticEditors.html",
        "fct-type": "module",
        "title": "SemanticEditors"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "SemanticEditors",
        "normalized": "",
        "package": "sec",
        "partial": "Semantic Editors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:applicative",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator for applicatives\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-SemanticEditors.html#applicative",
        "fct-type": "function",
        "title": "applicative"
      },
      "index": {
        "description": "Semantic Editor Combinator for applicatives",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "applicative",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:argument",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator on argument of an unary function\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a' -\u003e a) -\u003e (a -\u003e b) -\u003e a' -\u003e b",
        "fct-source": "src/Data-SemanticEditors.html#argument",
        "fct-type": "function",
        "title": "argument"
      },
      "index": {
        "description": "Semantic Editor Combinator on argument of an unary function",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "argument",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
        "package": "sec",
        "partial": "",
        "signature": "(a'-\u003ea)-\u003e(a-\u003eb)-\u003ea'-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator for monadicaly transforming a monadic value\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Data-SemanticEditors.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "Semantic Editor Combinator for monadicaly transforming monadic value",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "bind",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:each",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator on each value of a list\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-SemanticEditors.html#each",
        "fct-type": "function",
        "title": "each"
      },
      "index": {
        "description": "Semantic Editor Combinator on each value of list",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "each",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:editIf",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator applying the given function only when the given predicate\n  yields true for an input value.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Data-SemanticEditors.html#editIf",
        "fct-type": "function",
        "title": "editIf"
      },
      "index": {
        "description": "Semantic Editor Combinator applying the given function only when the given predicate yields true for an input value",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "editIf",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "sec",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "forall b c d.  a b c -\u003e a (b, d) (c, d)",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "first",
        "normalized": "a b c d e b c-\u003ee(b,f)(c,f)",
        "package": "sec",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(b,d)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:ioref",
      "description": {
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e a) -\u003e IORef a -\u003e IO ()",
        "fct-source": "src/Data-SemanticEditors.html#ioref",
        "fct-type": "function",
        "title": "ioref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "ioref",
        "normalized": "(a-\u003ea)-\u003eIORef a-\u003eIO()",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eIORef a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:just",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator for Maybe\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e b) -\u003e Maybe a -\u003e Maybe b",
        "fct-source": "src/Data-SemanticEditors.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "Semantic Editor Combinator for Maybe",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "just",
        "normalized": "(a-\u003eb)-\u003eMaybe a-\u003eMaybe b",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMaybe a-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eFeed marked inputs through the argument arrow, passing the\n   rest through unchanged to the output.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "forall b c d.  a b c -\u003e a (Either b d) (Either c d)",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Feed marked inputs through the argument arrow passing the rest through unchanged to the output",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "left",
        "normalized": "a b c d e b c-\u003ee(Either b f)(Either c f)",
        "package": "sec",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(Either b d)(Either c d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "maybe",
        "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
        "package": "sec",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:mkConstrTests",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate Haskell function for automatically creating predicates testing the constructors of a \n  given data type.\n  for example:\n\u003c/p\u003e\u003cpre\u003e\n   data Color = Red | Green | Blue\n  $(mkConstrTests [''Color])\n\u003c/pre\u003e\u003cp\u003ewill generate the following functions:\n\u003c/p\u003e\u003cpre\u003e\n   isRed Red     = True\n   isRed _       = False\n   isGreen Green = True\n   isGreen _     = False\n   isBlue Blue   = True\n   isBlue _      = False\n\u003c/pre\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-SemanticEditors.html#mkConstrTests",
        "fct-type": "function",
        "title": "mkConstrTests"
      },
      "index": {
        "description": "Template Haskell function for automatically creating predicates testing the constructors of given data type for example data Color Red Green Blue mkConstrTests Color will generate the following functions isRed Red True isRed False isGreen Green True isGreen False isBlue Blue True isBlue False",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "mkConstrTests",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "sec",
        "partial": "Constr Tests",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:mkEditor",
      "description": {
        "fct-descr": "\u003cp\u003emkEditor creates Semantic Editor Combinators for each named field in a given data type by\n  appending the fields name (first letter is converted to uppercase) to the name \"edit\".\n  If a fields name starts with an underscore '_' no editor will be generated\n\u003c/p\u003e\u003cp\u003efor example:\n\u003c/p\u003e\u003cpre\u003e  data Person = Person { age :: Integer, name :: String, _sex :: String }\n\u003c/pre\u003e\u003cp\u003ewill generate the lifters  editAge and editName:\n\u003c/p\u003e\u003cpre\u003e\n    editAge  f p = p { age = f (age p) }\n    editName f p = p { name = f (name p) }\n\u003c/pre\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Data-SemanticEditors.html#mkEditor",
        "fct-type": "function",
        "title": "mkEditor"
      },
      "index": {
        "description": "mkEditor creates Semantic Editor Combinators for each named field in given data type by appending the fields name first letter is converted to uppercase to the name edit If fields name starts with an underscore no editor will be generated for example data Person Person age Integer name String sex String will generate the lifters editAge and editName editAge age age editName name name",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "mkEditor",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "sec",
        "partial": "Editor",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:mkEditors",
      "description": {
        "fct-descr": "\u003cp\u003emkEditors creates Semantic Editor Combinators for each data type given. \n  More information see mkEditor\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-SemanticEditors.html#mkEditors",
        "fct-type": "function",
        "title": "mkEditors"
      },
      "index": {
        "description": "mkEditors creates Semantic Editor Combinators for each data type given More information see mkEditor",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "mkEditors",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "sec",
        "partial": "Editors",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:monad",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator for monads\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/Data-SemanticEditors.html#monad",
        "fct-type": "function",
        "title": "monad"
      },
      "index": {
        "description": "Semantic Editor Combinator for monads",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "monad",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "sec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eSemantic Editor Combinator on the result of an unary function\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "(b -\u003e b') -\u003e (a -\u003e b) -\u003e a -\u003e b'",
        "fct-source": "src/Data-SemanticEditors.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Semantic Editor Combinator on the result of an unary function",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "result",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
        "package": "sec",
        "partial": "",
        "signature": "(b-\u003eb')-\u003e(a-\u003eb)-\u003ea-\u003eb'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003eleft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "forall b c d.  a b c -\u003e a (Either d b) (Either d c)",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "mirror image of left The default definition may be overridden with more efficient version if desired",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "right",
        "normalized": "a b c d e b c-\u003ee(Either f b)(Either f c)",
        "package": "sec",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(Either d b)(Either d c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "forall b c d.  a b c -\u003e a (d, b) (d, c)",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "second",
        "normalized": "a b c d e b c-\u003ee(f,b)(f,c)",
        "package": "sec",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(d,b)(d,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sec/docs/Data-SemanticEditors.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e one can set instead of modify a value using Semantic Editor Combinators\n  for example '(first.set) 1' will set the first value of a tuple to 1\n\u003c/p\u003e",
        "fct-module": "Data.SemanticEditors",
        "fct-package": "sec",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Data-SemanticEditors.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Using set one can set instead of modify value using Semantic Editor Combinators for example first.set will set the first value of tuple to",
        "hierarchy": "Data SemanticEditors",
        "module": "Data.SemanticEditors",
        "name": "set",
        "normalized": "a-\u003eb-\u003ea",
        "package": "sec",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  }
]