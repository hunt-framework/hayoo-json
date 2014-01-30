[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the additional data types, instance definitions and functions to run parsers in an interleaved way.\n   If all the interleaved parsers recognise a single connected piece of the input text this incorporates the permutation parsers.\n   For some examples see the module \u003ca\u003eText.ParserCombinators.UU.Demo.MergeAndPermute\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Interleaved.html",
        "fct-type": "module",
        "title": "Interleaved"
      },
      "index": {
        "description": "This module contains the additional data types instance definitions and functions to run parsers in an interleaved way If all the interleaved parsers recognise single connected piece of the input text this incorporates the permutation parsers For some examples see the module Text.ParserCombinators.UU.Demo.MergeAndPermute",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Interleaved",
        "normalized": "",
        "package": "uu-interleaved",
        "partial": "Interleaved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#t:Alt",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Interleaved.html#Alt",
        "fct-type": "data",
        "title": "Alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Alt",
        "normalized": "",
        "package": "uu-interleaved",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#t:Gram",
      "description": {
        "fct-descr": "\u003cp\u003eSince we want to get access to the individual parsers which recognise a consecutive \n   piece of the input text we define a new data type, which lifts the underlying parsers \n   to the grammatical level, so they can be transformed, manipulated, and run in a piecewise way.\n   \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e is defined in such a way that we can always access the first parsers to be ran from such a structure.\n   We require that all the \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003es do not recognise the empty string.\n   These should be covered by the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Interleaved.html#Gram",
        "fct-type": "data",
        "title": "Gram"
      },
      "index": {
        "description": "Since we want to get access to the individual parsers which recognise consecutive piece of the input text we define new data type which lifts the underlying parsers to the grammatical level so they can be transformed manipulated and run in piecewise way Gram is defined in such way that we can always access the first parsers to be ran from such structure We require that all the Alt do not recognise the empty string These should be covered by the Maybe in the Gram constructor",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Gram",
        "normalized": "",
        "package": "uu-interleaved",
        "partial": "Gram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#t:Splittable",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "class",
        "fct-source": "src/Control-Applicative-Interleaved.html#Splittable",
        "fct-type": "class",
        "title": "Splittable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Splittable",
        "normalized": "",
        "package": "uu-interleaved",
        "partial": "Splittable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e is the merging equivalent of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e. Instead of running its two arguments consecutively, \n   the input is split into parts which serve as input for the left operand and parts which are served to the right operand. \n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram f (a1 -\u003e a) -\u003e Gram f a1 -\u003e Gram f a",
        "fct-source": "src/Control-Applicative-Interleaved.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "The function is the merging equivalent of Instead of running its two arguments consecutively the input is split into parts which serve as input for the left operand and parts which are served to the right operand",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "Gram a(b-\u003eb)-\u003eGram a b-\u003eGram a b",
        "package": "uu-interleaved",
        "partial": "",
        "signature": "Gram f(a-\u003ea)-\u003eGram f a-\u003eGram f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:-60--60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003e\u003c\u003c||\u003e\u003c/a\u003e\u003c/code\u003e is a special version of \u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e, which only starts a new instance of its right operand when the left operand cannot proceed.\n   This is used in the function \u003ccode\u003epmMany\u003c/code\u003e, where we want to merge as many instances of its argument, but no more than that.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram f (b -\u003e a) -\u003e Gram f b -\u003e Gram f a",
        "fct-source": "src/Control-Applicative-Interleaved.html#%3C%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c||\u003e)"
      },
      "index": {
        "description": "The function is special version of which only starts new instance of its right operand when the left operand cannot proceed This is used in the function pmMany where we want to merge as many instances of its argument but no more than that",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "(\u003c\u003c||\u003e) \u003c\u003c||\u003e",
        "normalized": "Gram a(b-\u003ec)-\u003eGram a b-\u003eGram a c",
        "package": "uu-interleaved",
        "partial": "",
        "signature": "Gram f(b-\u003ea)-\u003eGram f b-\u003eGram f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:Bind",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "forall b . Bind (f b) (b -\u003e Gram f a)",
        "fct-source": "src/Control-Applicative-Interleaved.html#Alt",
        "fct-type": "function",
        "title": "Bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Bind",
        "normalized": "a b Bind(c b)(b-\u003eGram c d)",
        "package": "uu-interleaved",
        "partial": "Bind",
        "signature": "forall b Bind(f b)(b-\u003eGram f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:Gram",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram [Alt f a] (Maybe a)",
        "fct-source": "src/Control-Applicative-Interleaved.html#Gram",
        "fct-type": "function",
        "title": "Gram"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Gram",
        "normalized": "Gram[Alt a b](Maybe b)",
        "package": "uu-interleaved",
        "partial": "Gram",
        "signature": "Gram[Alt f a](Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:Seq",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "forall b . Seq (f (b -\u003e a)) (Gram f b)",
        "fct-source": "src/Control-Applicative-Interleaved.html#Alt",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "Seq",
        "normalized": "a b Seq(c(b-\u003ed))(Gram c b)",
        "package": "uu-interleaved",
        "partial": "Seq",
        "signature": "forall b Seq(f(b-\u003ea))(Gram f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:getNonPure",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "f a -\u003e Maybe (f a)",
        "fct-source": "src/Control-Applicative-Interleaved.html#getNonPure",
        "fct-type": "method",
        "title": "getNonPure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "getNonPure",
        "normalized": "a b-\u003eMaybe(a b)",
        "package": "uu-interleaved",
        "partial": "Non Pure",
        "signature": "f a-\u003eMaybe(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:getPure",
      "description": {
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "f a -\u003e Maybe a",
        "fct-source": "src/Control-Applicative-Interleaved.html#getPure",
        "fct-type": "method",
        "title": "getPure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "getPure",
        "normalized": "a b-\u003eMaybe b",
        "package": "uu-interleaved",
        "partial": "Pure",
        "signature": "f a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:gmList",
      "description": {
        "fct-descr": "\u003cp\u003eRun a sufficient number of  \u003ccode\u003ep\u003c/code\u003e's in a merged fashion, but no more than necessary!!\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram f a -\u003e Gram f [a]",
        "fct-source": "src/Control-Applicative-Interleaved.html#gmList",
        "fct-type": "function",
        "title": "gmList"
      },
      "index": {
        "description": "Run sufficient number of in merged fashion but no more than necessary",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "gmList",
        "normalized": "Gram a b-\u003eGram a[b]",
        "package": "uu-interleaved",
        "partial": "List",
        "signature": "Gram f a-\u003eGram f[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:mkG",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003emkGram\u003c/code\u003e splits a simple parser into the possibly empty part and the non-empty part.\n   The non-empty part recognises a consecutive part of the input.\n   Here we use the functions \u003ccode\u003egetOneP\u003c/code\u003e and \u003ccode\u003egetZeroP\u003c/code\u003e which are provided in the uu-parsinglib package,\n   but they could easily be provided by other packages too.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "f a -\u003e Gram f a",
        "fct-source": "src/Control-Applicative-Interleaved.html#mkG",
        "fct-type": "function",
        "title": "mkG"
      },
      "index": {
        "description": "The function mkGram splits simple parser into the possibly empty part and the non-empty part The non-empty part recognises consecutive part of the input Here we use the functions getOneP and getZeroP which are provided in the uu-parsinglib package but they could easily be provided by other packages too",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "mkG",
        "normalized": "a b-\u003eGram a b",
        "package": "uu-interleaved",
        "partial": "",
        "signature": "f a-\u003eGram f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:mkP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emkParser\u003c/code\u003e converts a \u003ccode\u003e\u003ca\u003eGram\u003c/a\u003e\u003c/code\u003emar back into a parser, which can subsequenly be run.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram f a -\u003e f a",
        "fct-source": "src/Control-Applicative-Interleaved.html#mkP",
        "fct-type": "function",
        "title": "mkP"
      },
      "index": {
        "description": "mkParser converts Gram mar back into parser which can subsequenly be run",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "mkP",
        "normalized": "Gram a b-\u003ea b",
        "package": "uu-interleaved",
        "partial": "",
        "signature": "Gram f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uu-interleaved/docs/Control-Applicative-Interleaved.html#v:sepBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esepBy\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emkP\u003c/a\u003e\u003c/code\u003e, with the additional feature that we require separators between the components. Probably only useful in the permuting case.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Interleaved",
        "fct-package": "uu-interleaved",
        "fct-signature": "Gram f a -\u003e f b -\u003e f a",
        "fct-source": "src/Control-Applicative-Interleaved.html#sepBy",
        "fct-type": "function",
        "title": "sepBy"
      },
      "index": {
        "description": "sepBy is like mkP with the additional feature that we require separators between the components Probably only useful in the permuting case",
        "hierarchy": "Control Applicative Interleaved",
        "module": "Control.Applicative.Interleaved",
        "name": "sepBy",
        "normalized": "Gram a b-\u003ea c-\u003ea b",
        "package": "uu-interleaved",
        "partial": "By",
        "signature": "Gram f a-\u003ef b-\u003ef a"
      }
    }
  }
]