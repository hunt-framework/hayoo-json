[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print module based on Daan Leijen's implementation of Philip Wadler's\n \"prettier printer\"\n\u003c/p\u003e\u003cpre\u003e\n      \"A prettier printer\"\n      Draft paper, April 1997, revised March 1998.\n      \u003ca\u003ehttp://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis is an implementation of the pretty printing combinators\n described by Philip Wadler (1997). In their bare essence, the\n combinators of Wadler are not expressive enough to describe some\n commonly occurring layouts. The PPrint library adds new primitives\n to describe these layouts and works well in practice.\n\u003c/p\u003e\u003cp\u003eThe library is based on a single way to concatenate documents,\n which is associative and has both a left and right unit.  This\n simple design leads to an efficient and short implementation. The\n simplicity is reflected in the predictable behaviour of the\n combinators which make them easy to use in practice.\n\u003c/p\u003e\u003cp\u003eA thorough description of the primitive combinators and their\n implementation can be found in Philip Wadler's paper\n (1997). Additions and the main differences with his original paper\n are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The nil document is called empty.\n\u003c/li\u003e\u003cli\u003e The operator \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is used\n for soft line breaks.\n\u003c/li\u003e\u003cli\u003e There are three new primitives: \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efillBreak\u003c/a\u003e\u003c/code\u003e. These are very useful in practice.\n\u003c/li\u003e\u003cli\u003e Lots of other useful combinators, like \u003ccode\u003e\u003ca\u003efillSep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e There are two renderers, \u003ccode\u003e\u003ca\u003erenderPretty\u003c/a\u003e\u003c/code\u003e for pretty printing and\n \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e for compact output. The pretty printing algorithm\n also uses a ribbon-width now for even prettier output.\n\u003c/li\u003e\u003cli\u003e There are two display routines, \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e for strings and \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e\n for file based output.\n\u003c/li\u003e\u003cli\u003e There is a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e The implementation uses optimised representations and strictness\n annotations.\n\u003c/li\u003e\u003cli\u003e A type argument has been added and embedded \u003ccode\u003eeffects\u003c/code\u003e can be seen in\n the SimpleDoc type.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Pretty print module based on Daan Leijen implementation of Philip Wadler prettier printer prettier printer Draft paper April revised March http homepages.inf.ed.ac.uk wadler papers prettier prettier.pdf This is an implementation of the pretty printing combinators described by Philip Wadler In their bare essence the combinators of Wadler are not expressive enough to describe some commonly occurring layouts The PPrint library adds new primitives to describe these layouts and works well in practice The library is based on single way to concatenate documents which is associative and has both left and right unit This simple design leads to an efficient and short implementation The simplicity is reflected in the predictable behaviour of the combinators which make them easy to use in practice thorough description of the primitive combinators and their implementation can be found in Philip Wadler paper Additions and the main differences with his original paper are The nil document is called empty The operator is used for soft line breaks There are three new primitives align fill and fillBreak These are very useful in practice Lots of other useful combinators like fillSep and list There are two renderers renderPretty for pretty printing and renderCompact for compact output The pretty printing algorithm also uses ribbon-width now for even prettier output There are two display routines displayS for strings and displayIO for file based output There is Pretty class The implementation uses optimised representations and strictness annotations type argument has been added and embedded effects can be seen in the SimpleDoc type",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" `above` text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n hello\n world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello above text world Which would return the string hello nworld i.e hello world",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Doc",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "class",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Pretty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:SimpleDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n provides two default display functions \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing a\n function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "data",
        "title": "SimpleDoc"
      },
      "index": {
        "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SimpleDoc",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Simple Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--43--62-",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n right next to each other or underneath each other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or underneath each\n other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c\u003e c = a \u003c\u003e (b \u003c\u003e c)\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e we further require\n\u003c/p\u003e\u003cpre\u003e (\u003c\u003e) = mappend\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An associative operation If is also Monoid we further require mappend",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Cat",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Cat (Doc e) (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Cat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Cat",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Cat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Char",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Char !Char",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Char"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Char",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Column",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Column (Int -\u003e Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Column",
        "normalized": "Column(Int-\u003eDoc a)",
        "package": "wl-pprint-extras",
        "partial": "Column",
        "signature": "Column(Int-\u003eDoc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Columns",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Columns (Int -\u003e Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Columns"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Columns",
        "normalized": "Columns(Int-\u003eDoc a)",
        "package": "wl-pprint-extras",
        "partial": "Columns",
        "signature": "Columns(Int-\u003eDoc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Effect",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Effect e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Effect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Effect",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Effect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Empty",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Empty",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Empty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Fail",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Fail",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Fail",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:FlatAlt",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "FlatAlt (Doc e) (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "FlatAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "FlatAlt",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Flat Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Line",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Line",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Line",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Nest",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Nest !Int (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Nest"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Nest",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Nest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Nesting",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Nesting (Int -\u003e Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Nesting"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Nesting",
        "normalized": "Nesting(Int-\u003eDoc a)",
        "package": "wl-pprint-extras",
        "partial": "Nesting",
        "signature": "Nesting(Int-\u003eDoc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Ribbon",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Ribbon (Int -\u003e Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Ribbon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Ribbon",
        "normalized": "Ribbon(Int-\u003eDoc a)",
        "package": "wl-pprint-extras",
        "partial": "Ribbon",
        "signature": "Ribbon(Int-\u003eDoc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SChar",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SChar !Char (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SChar",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEffect",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SEffect e (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SEffect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SEffect",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SEffect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEmpty",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SEmpty",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SEmpty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SEmpty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SFail",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SFail",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SFail",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SFail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SLine",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SLine !Int (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SLine",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SLine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SText",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SText !Int String (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "SText",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Text",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Text !Int String",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Text",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Union",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Union (Doc e) (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "Union",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:above",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eabove x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#above",
        "fct-type": "function",
        "title": "above"
      },
      "index": {
        "description": "The document above concatenates document and with line in between infixr",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "above",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:aboveBreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eaboveBreak x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003elinebreak\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#aboveBreak",
        "fct-type": "function",
        "title": "aboveBreak"
      },
      "index": {
        "description": "The document aboveBreak concatenates document and with linebreak in between infixr",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "aboveBreak",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Break",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n level set to the current column. It is used for example to\n implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y  = align (above x y)\n\u003c/pre\u003e\u003cpre\u003e test    = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be layed out as:\n\u003c/p\u003e\u003cpre\u003e\n hi nice\n    world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align above test text hi text nice text world which will be layed out as hi nice world",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "align",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:angles",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#angles",
        "fct-type": "function",
        "title": "angles"
      },
      "index": {
        "description": "Document angles encloses document in angles and",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "angles",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:backslash",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#backslash",
        "fct-type": "function",
        "title": "backslash"
      },
      "index": {
        "description": "The document backslash contains back slash",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "backslash",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Document braces encloses document in braces and",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "braces",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n \"[\" and \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Document brackets encloses document in square brackets and",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "brackets",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eaboveBreak\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs  = group (vcat xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with aboveBreak cat xs group vcat xs",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "cat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n should be used for line breaks.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Char -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "char",
        "normalized": "Char-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Char-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "The document colon contains colon",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "colon",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:column",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#column",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "column",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:columns",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#columns",
        "fct-type": "function",
        "title": "columns"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "columns",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "The document comma contains comma",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "comma",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc)\u003c/code\u003e writes \u003ccode\u003esimpleDoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hPutDoc handle doc  = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Handle -\u003e SimpleDoc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#displayIO",
        "fct-type": "function",
        "title": "displayIO"
      },
      "index": {
        "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "displayIO",
        "normalized": "Handle-\u003eSimpleDoc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "IO",
        "signature": "Handle-\u003eSimpleDoc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayS simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e type (for use in\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc -\u003e String\n showWidth w x   = displayS (renderPretty 0.4 w x) \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SimpleDoc e -\u003e ShowS",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#displayS",
        "fct-type": "function",
        "title": "displayS"
      },
      "index": {
        "description": "displayS simpleDoc takes the output simpleDoc from rendering function and transforms it to ShowS type for use in the Show class showWidth Int Doc String showWidth displayS renderPretty",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "displayS",
        "normalized": "SimpleDoc a-\u003eShowS",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "SimpleDoc e-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "The document dot contains single dot",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "dot",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dquote",
        "fct-type": "function",
        "title": "dquote"
      },
      "index": {
        "description": "The document dquote contains double quote",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "dquote",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dquotes",
        "fct-type": "function",
        "title": "dquotes"
      },
      "index": {
        "description": "Document dquotes encloses document with double quotes",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "dquotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "forall a.  f a",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The identity of",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "empty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:enclose",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x   = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#enclose",
        "fct-type": "function",
        "title": "enclose"
      },
      "index": {
        "description": "The document enclose encloses document between documents and using enclose",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "enclose",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:encloseSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by \u003ccode\u003el\u003c/code\u003e\n and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits the\n page. Otherwise they are aligned vertically. All separators are put\n in front of the elements. For example, the combinator \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be\n defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test    = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n list [10, 200, 3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n list [ 10\n      , 200\n      , 3000 ]\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#encloseSep",
        "fct-type": "function",
        "title": "encloseSep"
      },
      "index": {
        "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is layed out with page width of as list But when the page width is it is layed out as list",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "encloseSep",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eb(Doc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Sep",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003ef(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:equals",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#equals",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "The document equals contains an equal sign",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "equals",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It then appends\n \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n already larger, nothing is appended. This combinator is quite\n useful in practice to output a list of bindings. The following\n example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types  = [(\"empty\",\"Doc e\")\n          ,(\"nest\",\"Int -\u003e Doc e -\u003e Doc e\")\n          ,(\"linebreak\",\"Doc e\")]\n\n ptype (name,tp)\n        = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test   = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak :: Doc e\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "The document fill renders document It then appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is layed out as let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "fill",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillBreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n then appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine \u003ccode\u003eptype\u003c/code\u003e\n in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a useful\n variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n        = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak\n            :: Doc e\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillBreak",
        "fct-type": "function",
        "title": "fillBreak"
      },
      "index": {
        "description": "The document fillBreak first renders document It then appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "fillBreak",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Break",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillCat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, then inserts\n a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs  = foldr (\u003c//\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillCat",
        "fct-type": "function",
        "title": "fillCat"
      },
      "index": {
        "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page then inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "fillCat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Cat",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, then\n inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs  = foldr (\u003c/\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillSep",
        "fct-type": "function",
        "title": "fillSep"
      },
      "index": {
        "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page then inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "fillSep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Sep",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatAlt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eflatAlt\u003c/code\u003e creates a document that changes when flattened; normally\n it is rendered as the first argument, but when flattened is rendered\n as the second.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#flatAlt",
        "fct-type": "function",
        "title": "flatAlt"
      },
      "index": {
        "description": "flatAlt creates document that changes when flattened normally it is rendered as the first argument but when flattened is rendered as the second",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "flatAlt",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Alt",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatten",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "flatten",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered without\n any changes.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "group",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hPutDoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(hPutDoc handle doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main = do{ handle \u003c- openFile \"MyFile\" WriteMode\n          ; hPutDoc handle (vcat (map text\n                            [\"vertical\",\"text\"]))\n          ; hClose handle\n          }\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Handle -\u003e Doc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hPutDoc",
        "fct-type": "function",
        "title": "hPutDoc"
      },
      "index": {
        "description": "hPutDoc handle doc pretty prints document doc to the file handle handle with page width of characters and ribbon width of characters main do handle openFile MyFile WriteMode hPutDoc handle vcat map text vertical text hClose handle",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "hPutDoc",
        "normalized": "Handle-\u003eDoc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "Put Doc",
        "signature": "Handle-\u003eDoc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hang",
      "description": {
        "fct-descr": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test  = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n the hang combinator\n     indents these\n     words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x  = align (nest i x)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "hang",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hardline",
      "description": {
        "fct-descr": "\u003cp\u003eA linebreak that can not be flattened; it is guaranteed to be\n rendered as a newline.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hardline",
        "fct-type": "function",
        "title": "hardline"
      },
      "index": {
        "description": "linebreak that can not be flattened it is guaranteed to be rendered as newline",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "hardline",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "The document hcat xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "hcat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "The document hsep xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "hsep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:indent",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test  = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n     the indent\n     combinator\n     indents these\n     words !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#indent",
        "fct-type": "function",
        "title": "indent"
      },
      "index": {
        "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "indent",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:langle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#langle",
        "fct-type": "function",
        "title": "langle"
      },
      "index": {
        "description": "The document langle contains left angle",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "langle",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lbrace",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "The document lbrace contains left brace",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "lbrace",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lbracket",
        "fct-type": "function",
        "title": "lbracket"
      },
      "index": {
        "description": "The document lbracket contains left square bracket",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "lbracket",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n current nesting level. Document \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \" \")\u003c/code\u003e\n if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The line document advances to the next line and indents to the current nesting level Document line behaves like text if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "line",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:linebreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "linebreak",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in square brackets. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "list",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lparen",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "The document lparen contains left parenthesis",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "lparen",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n indentation level increased by i (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" `above` text \"world\") `above` text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n hello\n   world\n !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello above text world above text outputs as hello world",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "nest",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nesting",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#nesting",
        "fct-type": "function",
        "title": "nesting"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "nesting",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n and \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Document parens encloses document in parenthesis and",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "parens",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:pretty",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "a -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "pretty",
        "normalized": "a-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "a-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:prettyList",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "[a] -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#prettyList",
        "fct-type": "method",
        "title": "prettyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "prettyList",
        "normalized": "[a]-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "List",
        "signature": "[a]-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test     = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is layed out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n (words,\n  in,\n  a,\n  tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e f (Doc e) -\u003e f (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is layed out on page width of as words in tuple But when the page width is it is layed out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "punctuate",
        "normalized": "Doc a-\u003eb(Doc a)-\u003eb(Doc a)",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003ef(Doc e)-\u003ef(Doc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:putDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe action \u003ccode\u003e(putDoc doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the\n standard output, with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = do{ putDoc (text \"hello\" \u003c+\u003e text \"world\") }\n\u003c/pre\u003e\u003cp\u003eWhich would output\n\u003c/p\u003e\u003cpre\u003e\n hello world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#putDoc",
        "fct-type": "function",
        "title": "putDoc"
      },
      "index": {
        "description": "The action putDoc doc pretty prints document doc to the standard output with page width of characters and ribbon width of characters main IO main do putDoc text hello text world Which would output hello world",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "putDoc",
        "normalized": "Doc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "Doc",
        "signature": "Doc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rangle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rangle",
        "fct-type": "function",
        "title": "rangle"
      },
      "index": {
        "description": "The document rangle contains right angle",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "rangle",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rbrace",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "The document rbrace contains right brace",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "rbrace",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rbracket",
        "fct-type": "function",
        "title": "rbracket"
      },
      "index": {
        "description": "The document rbracket contains right square bracket",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "rbracket",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderCompact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(renderCompact x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n indentation. Since no 'pretty' printing is involved, this\n renderer is very fast. The resulting output contains fewer\n characters than a pretty printed version and can be used for output\n that is read by other programs.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderCompact",
        "fct-type": "function",
        "title": "renderCompact"
      },
      "index": {
        "description": "renderCompact renders document without adding any indentation Since no pretty printing is involved this renderer is very fast The resulting output contains fewer characters than pretty printed version and can be used for output that is read by other programs",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "renderCompact",
        "normalized": "Doc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Compact",
        "signature": "Doc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderPretty",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputDoc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e renders\n document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon width of\n \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is the maximal\n amount of non-indentation characters on a line. The parameter\n \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it is lower or\n higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Float -\u003e Int -\u003e Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderPretty",
        "fct-type": "function",
        "title": "renderPretty"
      },
      "index": {
        "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "renderPretty",
        "normalized": "Float-\u003eInt-\u003eDoc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Pretty",
        "signature": "Float-\u003eInt-\u003eDoc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderSmart",
      "description": {
        "fct-descr": "\u003cp\u003eA slightly smarter rendering algorithm with more lookahead. It provides\n provide earlier breaking on deeply nested structures.\n For example, consider this python-ish pseudocode:\n \u003ccode\u003efun(fun(fun(fun(fun([abcdefg, abcdefg])))))\u003c/code\u003e\n If we put a softbreak (+ nesting 2) after each open parenthesis, and align\n the elements of the list to match the opening brackets, this will render with\n \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c as:\n \u003ccode\u003e\n fun(fun(fun(fun(fun([\n                     | abcdef,\n                     | abcdef,\n                     ]\n   )))))             |\n \u003c/code\u003e\n Where the 20c. boundary has been marked with |. Because \u003ccode\u003erenderPretty\u003c/code\u003e only\n uses one-line lookahead, it sees that the first line fits, and is stuck\n putting the second and third lines after the 20c mark. In contrast,\n \u003ccode\u003erenderSmart\u003c/code\u003e will continue to check the potential document up to the end of\n the indentation level. Thus, it will format the document as:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\n fun(                |\n   fun(              |\n     fun(            |\n       fun(          |\n         fun([       |\n               abcdef,\n               abcdef,\n             ]       |\n   )))))             |\n \u003c/code\u003e\n Which fits within the 20c. mark.\n In addition, \u003ccode\u003erenderSmart\u003c/code\u003e uses this lookahead to minimize the number of\n lines printed, leading to more compact and visually appealing output.\n Consider this example using the same syntax as above:\n \u003ccode\u003eaaaaaaaaaaa([abc, def, ghi])\u003c/code\u003e\n When rendered with \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa([ abc\n             , def\n             , ghi ])\n \u003c/code\u003e\n Whereas when rendered with \u003ccode\u003erenderSmart\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa(\n   [abc, def, ghi])\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderSmart",
        "fct-type": "function",
        "title": "renderSmart"
      },
      "index": {
        "description": "slightly smarter rendering algorithm with more lookahead It provides provide earlier breaking on deeply nested structures For example consider this python-ish pseudocode fun fun fun fun fun abcdefg abcdefg If we put softbreak nesting after each open parenthesis and align the elements of the list to match the opening brackets this will render with renderPretty and page width of as fun fun fun fun fun abcdef abcdef Where the boundary has been marked with Because renderPretty only uses one-line lookahead it sees that the first line fits and is stuck putting the second and third lines after the mark In contrast renderSmart will continue to check the potential document up to the end of the indentation level Thus it will format the document as fun fun fun fun fun abcdef abcdef Which fits within the mark In addition renderSmart uses this lookahead to minimize the number of lines printed leading to more compact and visually appealing output Consider this example using the same syntax as above aaaaaaaaaaa abc def ghi When rendered with renderPretty and page width of we get aaaaaaaaaaa abc def ghi Whereas when rendered with renderSmart and page width of we get aaaaaaaaaaa abc def ghi",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "renderSmart",
        "normalized": "Int-\u003eDoc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Smart",
        "signature": "Int-\u003eDoc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:ribbon",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#ribbon",
        "fct-type": "function",
        "title": "ribbon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "ribbon",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rparen",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "The document rparen contains right parenthesis",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "rparen",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "The document semi contains semi colon",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "semi",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semiBraces",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n semi colons and encloses them in braces. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All semi colons are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#semiBraces",
        "fct-type": "function",
        "title": "semiBraces"
      },
      "index": {
        "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "semiBraces",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Braces",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eabove\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs  = group (vsep xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with above sep xs group vsep xs",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "sep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softbreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softbreak  = group linebreak\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#softbreak",
        "fct-type": "function",
        "title": "softbreak"
      },
      "index": {
        "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line softbreak group linebreak",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "softbreak",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softline",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softline = group line\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#softline",
        "fct-type": "function",
        "title": "softline"
      },
      "index": {
        "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line softline group line",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "softline",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y   = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "The document space contains single space space",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "space",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#squote",
        "fct-type": "function",
        "title": "squote"
      },
      "index": {
        "description": "The document squote contains single quote",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "squote",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#squotes",
        "fct-type": "function",
        "title": "squotes"
      },
      "index": {
        "description": "Document squotes encloses document with single quotes",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "squotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n string contains newline characters, the function \u003ccode\u003estring\u003c/code\u003e should be\n used.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "String -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "text",
        "normalized": "String-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "String-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:tupled",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in parenthesis. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#tupled",
        "fct-type": "function",
        "title": "tupled"
      },
      "index": {
        "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "tupled",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eaboveBreak\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "The document vcat xs concatenates all documents xs vertically with aboveBreak If group undoes the line breaks inserted by vcat all documents are directly concatenated",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "vcat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eabove\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test     = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n to\n lay\n out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n their first element\n\u003c/p\u003e\u003cpre\u003e test = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n      to\n      lay\n      out\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#vsep",
        "fct-type": "function",
        "title": "vsep"
      },
      "index": {
        "description": "The document vsep xs concatenates all documents xs vertically with above If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is layed out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "vsep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:width",
      "description": {
        "fct-module": "Text.PrettyPrint.Free.Internal",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e (Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free Internal",
        "module": "Text.PrettyPrint.Free.Internal",
        "name": "width",
        "normalized": "Doc a-\u003e(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003e(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print module based on Daan Leijen's implementation of Philip Wadler's\n \"prettier printer\"\n\u003c/p\u003e\u003cpre\u003e\n      \"A prettier printer\"\n      Draft paper, April 1997, revised March 1998.\n      \u003ca\u003ehttp://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis is an implementation of the pretty printing combinators\n described by Philip Wadler (1997). In their bare essence, the\n combinators of Wadler are not expressive enough to describe some\n commonly occurring layouts. The PPrint library adds new primitives\n to describe these layouts and works well in practice.\n\u003c/p\u003e\u003cp\u003eThe library is based on a single way to concatenate documents,\n which is associative and has both a left and right unit.  This\n simple design leads to an efficient and short implementation. The\n simplicity is reflected in the predictable behaviour of the\n combinators which make them easy to use in practice.\n\u003c/p\u003e\u003cp\u003eA thorough description of the primitive combinators and their\n implementation can be found in Philip Wadler's paper\n (1997). Additions and the main differences with his original paper\n are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The nil document is called empty.\n\u003c/li\u003e\u003cli\u003e The operator \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is used\n for soft line breaks.\n\u003c/li\u003e\u003cli\u003e There are three new primitives: \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efillBreak\u003c/a\u003e\u003c/code\u003e. These are very useful in practice.\n\u003c/li\u003e\u003cli\u003e Lots of other useful combinators, like \u003ccode\u003e\u003ca\u003efillSep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e There are two renderers, \u003ccode\u003e\u003ca\u003erenderPretty\u003c/a\u003e\u003c/code\u003e for pretty printing and\n \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e for compact output. The pretty printing algorithm\n also uses a ribbon-width now for even prettier output.\n\u003c/li\u003e\u003cli\u003e There are two displayers, \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e for strings and \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e for\n file based output.\n\u003c/li\u003e\u003cli\u003e There is a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e The implementation uses optimised representations and strictness\n annotations.\n\u003c/li\u003e\u003cli\u003e A type argument has been added and embedded \u003ccode\u003eeffects\u003c/code\u003e can be seen in\n the SimpleDoc type.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint-Free.html",
        "fct-type": "module",
        "title": "Free"
      },
      "index": {
        "description": "Pretty print module based on Daan Leijen implementation of Philip Wadler prettier printer prettier printer Draft paper April revised March http homepages.inf.ed.ac.uk wadler papers prettier prettier.pdf This is an implementation of the pretty printing combinators described by Philip Wadler In their bare essence the combinators of Wadler are not expressive enough to describe some commonly occurring layouts The PPrint library adds new primitives to describe these layouts and works well in practice The library is based on single way to concatenate documents which is associative and has both left and right unit This simple design leads to an efficient and short implementation The simplicity is reflected in the predictable behaviour of the combinators which make them easy to use in practice thorough description of the primitive combinators and their implementation can be found in Philip Wadler paper Additions and the main differences with his original paper are The nil document is called empty The operator is used for soft line breaks There are three new primitives align fill and fillBreak These are very useful in practice Lots of other useful combinators like fillSep and list There are two renderers renderPretty for pretty printing and renderCompact for compact output The pretty printing algorithm also uses ribbon-width now for even prettier output There are two displayers displayS for strings and displayIO for file based output There is Pretty class The implementation uses optimised representations and strictness annotations type argument has been added and embedded effects can be seen in the SimpleDoc type",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "Free",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" `above` text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n hello\n world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello above text world Which would return the string hello nworld i.e hello world",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "Doc",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "class",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "Pretty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:SimpleDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n provides two default display functions \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing a\n function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "data",
        "title": "SimpleDoc"
      },
      "index": {
        "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SimpleDoc",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "Simple Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--43--62-",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n right next to each other or underneath each other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or underneath each\n other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c\u003e c = a \u003c\u003e (b \u003c\u003e c)\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e we further require\n\u003c/p\u003e\u003cpre\u003e (\u003c\u003e) = mappend\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An associative operation If is also Monoid we further require mappend",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SChar",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SChar !Char (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SChar",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SEffect",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SEffect e (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SEffect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SEffect",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SEffect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SEmpty",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SEmpty",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SEmpty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SEmpty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SFail",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SFail",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SFail",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SFail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SLine",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SLine !Int (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SLine",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SLine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SText",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SText !Int String (SimpleDoc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
        "fct-type": "function",
        "title": "SText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "SText",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "SText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:above",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eabove x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#above",
        "fct-type": "function",
        "title": "above"
      },
      "index": {
        "description": "The document above concatenates document and with line in between infixr",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "above",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:aboveBreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eaboveBreak x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003elinebreak\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#aboveBreak",
        "fct-type": "function",
        "title": "aboveBreak"
      },
      "index": {
        "description": "The document aboveBreak concatenates document and with linebreak in between infixr",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "aboveBreak",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Break",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n level set to the current column. It is used for example to\n implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y  = align (above x y)\n\u003c/pre\u003e\u003cpre\u003e test    = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be layed out as:\n\u003c/p\u003e\u003cpre\u003e\n hi nice\n    world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align above test text hi text nice text world which will be layed out as hi nice world",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "align",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:angles",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#angles",
        "fct-type": "function",
        "title": "angles"
      },
      "index": {
        "description": "Document angles encloses document in angles and",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "angles",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:backslash",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#backslash",
        "fct-type": "function",
        "title": "backslash"
      },
      "index": {
        "description": "The document backslash contains back slash",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "backslash",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Document braces encloses document in braces and",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "braces",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n \"[\" and \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Document brackets encloses document in square brackets and",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "brackets",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eaboveBreak\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs  = group (vcat xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with aboveBreak cat xs group vcat xs",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "cat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n should be used for line breaks.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Char -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "char",
        "normalized": "Char-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Char-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "The document colon contains colon",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "colon",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:column",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#column",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "column",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:columns",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#columns",
        "fct-type": "function",
        "title": "columns"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "columns",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "The document comma contains comma",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "comma",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:displayIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc)\u003c/code\u003e writes \u003ccode\u003esimpleDoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hPutDoc handle doc  = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Handle -\u003e SimpleDoc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#displayIO",
        "fct-type": "function",
        "title": "displayIO"
      },
      "index": {
        "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "displayIO",
        "normalized": "Handle-\u003eSimpleDoc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "IO",
        "signature": "Handle-\u003eSimpleDoc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:displayS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayS simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e type (for use in\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc -\u003e String\n showWidth w x   = displayS (renderPretty 0.4 w x) \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "SimpleDoc e -\u003e ShowS",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#displayS",
        "fct-type": "function",
        "title": "displayS"
      },
      "index": {
        "description": "displayS simpleDoc takes the output simpleDoc from rendering function and transforms it to ShowS type for use in the Show class showWidth Int Doc String showWidth displayS renderPretty",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "displayS",
        "normalized": "SimpleDoc a-\u003eShowS",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "SimpleDoc e-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "The document dot contains single dot",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "dot",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dquote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dquote",
        "fct-type": "function",
        "title": "dquote"
      },
      "index": {
        "description": "The document dquote contains double quote",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "dquote",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dquotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#dquotes",
        "fct-type": "function",
        "title": "dquotes"
      },
      "index": {
        "description": "Document dquotes encloses document with double quotes",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "dquotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "forall a.  f a",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The identity of",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "empty",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:enclose",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x   = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#enclose",
        "fct-type": "function",
        "title": "enclose"
      },
      "index": {
        "description": "The document enclose encloses document between documents and using enclose",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "enclose",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:encloseSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by \u003ccode\u003el\u003c/code\u003e\n and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits the\n page. Otherwise they are aligned vertically. All separators are put\n in front of the elements. For example, the combinator \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be\n defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test    = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n list [10, 200, 3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n list [ 10\n      , 200\n      , 3000 ]\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#encloseSep",
        "fct-type": "function",
        "title": "encloseSep"
      },
      "index": {
        "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is layed out with page width of as list But when the page width is it is layed out as list",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "encloseSep",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eb(Doc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Sep",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003ef(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:equals",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#equals",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "The document equals contains an equal sign",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "equals",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It then appends\n \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n already larger, nothing is appended. This combinator is quite\n useful in practice to output a list of bindings. The following\n example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types  = [(\"empty\",\"Doc e\")\n          ,(\"nest\",\"Int -\u003e Doc e -\u003e Doc e\")\n          ,(\"linebreak\",\"Doc e\")]\n\n ptype (name,tp)\n        = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test   = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak :: Doc e\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "The document fill renders document It then appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is layed out as let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "fill",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillBreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n then appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine \u003ccode\u003eptype\u003c/code\u003e\n in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a useful\n variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n        = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak\n            :: Doc e\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillBreak",
        "fct-type": "function",
        "title": "fillBreak"
      },
      "index": {
        "description": "The document fillBreak first renders document It then appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "fillBreak",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Break",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillCat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, then inserts\n a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs  = foldr (\u003c//\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillCat",
        "fct-type": "function",
        "title": "fillCat"
      },
      "index": {
        "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page then inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "fillCat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Cat",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, then\n inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs  = foldr (\u003c/\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#fillSep",
        "fct-type": "function",
        "title": "fillSep"
      },
      "index": {
        "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page then inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "fillSep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Sep",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:flatAlt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eflatAlt\u003c/code\u003e creates a document that changes when flattened; normally\n it is rendered as the first argument, but when flattened is rendered\n as the second.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#flatAlt",
        "fct-type": "function",
        "title": "flatAlt"
      },
      "index": {
        "description": "flatAlt creates document that changes when flattened normally it is rendered as the first argument but when flattened is rendered as the second",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "flatAlt",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "Alt",
        "signature": "Doc e-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:flatten",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "flatten",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered without\n any changes.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "group",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hPutDoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(hPutDoc handle doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main = do{ handle \u003c- openFile \"MyFile\" WriteMode\n          ; hPutDoc handle (vcat (map text\n                            [\"vertical\",\"text\"]))\n          ; hClose handle\n          }\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Handle -\u003e Doc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hPutDoc",
        "fct-type": "function",
        "title": "hPutDoc"
      },
      "index": {
        "description": "hPutDoc handle doc pretty prints document doc to the file handle handle with page width of characters and ribbon width of characters main do handle openFile MyFile WriteMode hPutDoc handle vcat map text vertical text hClose handle",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "hPutDoc",
        "normalized": "Handle-\u003eDoc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "Put Doc",
        "signature": "Handle-\u003eDoc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hang",
      "description": {
        "fct-descr": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test  = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n the hang combinator\n     indents these\n     words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x  = align (nest i x)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "hang",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hardline",
      "description": {
        "fct-descr": "\u003cp\u003eA linebreak that can not be flattened; it is guaranteed to be\n rendered as a newline.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hardline",
        "fct-type": "function",
        "title": "hardline"
      },
      "index": {
        "description": "linebreak that can not be flattened it is guaranteed to be rendered as newline",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "hardline",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "The document hcat xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "hcat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "The document hsep xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "hsep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:indent",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test  = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n     the indent\n     combinator\n     indents these\n     words !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#indent",
        "fct-type": "function",
        "title": "indent"
      },
      "index": {
        "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "indent",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:langle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#langle",
        "fct-type": "function",
        "title": "langle"
      },
      "index": {
        "description": "The document langle contains left angle",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "langle",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lbrace",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "The document lbrace contains left brace",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "lbrace",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lbracket",
        "fct-type": "function",
        "title": "lbracket"
      },
      "index": {
        "description": "The document lbracket contains left square bracket",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "lbracket",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n current nesting level. Document \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \" \")\u003c/code\u003e\n if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The line document advances to the next line and indents to the current nesting level Document line behaves like text if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "line",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:linebreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "linebreak",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in square brackets. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "list",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#lparen",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "The document lparen contains left parenthesis",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "lparen",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n indentation level increased by i (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" `above` text \"world\") `above` text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n hello\n   world\n !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello above text world above text outputs as hello world",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "nest",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Int-\u003eDoc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:nesting",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "(Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#nesting",
        "fct-type": "function",
        "title": "nesting"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "nesting",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n and \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Document parens encloses document in parenthesis and",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "parens",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:pretty",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "a -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "pretty",
        "normalized": "a-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "a-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:prettyList",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "[a] -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#prettyList",
        "fct-type": "method",
        "title": "prettyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "prettyList",
        "normalized": "[a]-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "List",
        "signature": "[a]-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test     = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is layed out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n (words,\n  in,\n  a,\n  tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e f (Doc e) -\u003e f (Doc e)",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is layed out on page width of as words in tuple But when the page width is it is layed out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "punctuate",
        "normalized": "Doc a-\u003eb(Doc a)-\u003eb(Doc a)",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003ef(Doc e)-\u003ef(Doc e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:putDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe action \u003ccode\u003e(putDoc doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the\n standard output, with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = do{ putDoc (text \"hello\" \u003c+\u003e text \"world\") }\n\u003c/pre\u003e\u003cp\u003eWhich would output\n\u003c/p\u003e\u003cpre\u003e\n hello world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#putDoc",
        "fct-type": "function",
        "title": "putDoc"
      },
      "index": {
        "description": "The action putDoc doc pretty prints document doc to the standard output with page width of characters and ribbon width of characters main IO main do putDoc text hello text world Which would output hello world",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "putDoc",
        "normalized": "Doc a-\u003eIO()",
        "package": "wl-pprint-extras",
        "partial": "Doc",
        "signature": "Doc e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rangle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rangle",
        "fct-type": "function",
        "title": "rangle"
      },
      "index": {
        "description": "The document rangle contains right angle",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "rangle",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rbrace",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "The document rbrace contains right brace",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "rbrace",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rbracket",
        "fct-type": "function",
        "title": "rbracket"
      },
      "index": {
        "description": "The document rbracket contains right square bracket",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "rbracket",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderCompact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(renderCompact x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n indentation. Since no 'pretty' printing is involved, this\n renderer is very fast. The resulting output contains fewer\n characters than a pretty printed version and can be used for output\n that is read by other programs.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderCompact",
        "fct-type": "function",
        "title": "renderCompact"
      },
      "index": {
        "description": "renderCompact renders document without adding any indentation Since no pretty printing is involved this renderer is very fast The resulting output contains fewer characters than pretty printed version and can be used for output that is read by other programs",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "renderCompact",
        "normalized": "Doc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Compact",
        "signature": "Doc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderPretty",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputDoc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e renders\n document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon width of\n \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is the maximal\n amount of non-indentation characters on a line. The parameter\n \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it is lower or\n higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Float -\u003e Int -\u003e Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderPretty",
        "fct-type": "function",
        "title": "renderPretty"
      },
      "index": {
        "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "renderPretty",
        "normalized": "Float-\u003eInt-\u003eDoc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Pretty",
        "signature": "Float-\u003eInt-\u003eDoc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderSmart",
      "description": {
        "fct-descr": "\u003cp\u003eA slightly smarter rendering algorithm with more lookahead. It provides\n provide earlier breaking on deeply nested structures.\n For example, consider this python-ish pseudocode:\n \u003ccode\u003efun(fun(fun(fun(fun([abcdefg, abcdefg])))))\u003c/code\u003e\n If we put a softbreak (+ nesting 2) after each open parenthesis, and align\n the elements of the list to match the opening brackets, this will render with\n \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c as:\n \u003ccode\u003e\n fun(fun(fun(fun(fun([\n                     | abcdef,\n                     | abcdef,\n                     ]\n   )))))             |\n \u003c/code\u003e\n Where the 20c. boundary has been marked with |. Because \u003ccode\u003erenderPretty\u003c/code\u003e only\n uses one-line lookahead, it sees that the first line fits, and is stuck\n putting the second and third lines after the 20c mark. In contrast,\n \u003ccode\u003erenderSmart\u003c/code\u003e will continue to check the potential document up to the end of\n the indentation level. Thus, it will format the document as:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\n fun(                |\n   fun(              |\n     fun(            |\n       fun(          |\n         fun([       |\n               abcdef,\n               abcdef,\n             ]       |\n   )))))             |\n \u003c/code\u003e\n Which fits within the 20c. mark.\n In addition, \u003ccode\u003erenderSmart\u003c/code\u003e uses this lookahead to minimize the number of\n lines printed, leading to more compact and visually appealing output.\n Consider this example using the same syntax as above:\n \u003ccode\u003eaaaaaaaaaaa([abc, def, ghi])\u003c/code\u003e\n When rendered with \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa([ abc\n             , def\n             , ghi ])\n \u003c/code\u003e\n Whereas when rendered with \u003ccode\u003erenderSmart\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa(\n   [abc, def, ghi])\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Int -\u003e Doc e -\u003e SimpleDoc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#renderSmart",
        "fct-type": "function",
        "title": "renderSmart"
      },
      "index": {
        "description": "slightly smarter rendering algorithm with more lookahead It provides provide earlier breaking on deeply nested structures For example consider this python-ish pseudocode fun fun fun fun fun abcdefg abcdefg If we put softbreak nesting after each open parenthesis and align the elements of the list to match the opening brackets this will render with renderPretty and page width of as fun fun fun fun fun abcdef abcdef Where the boundary has been marked with Because renderPretty only uses one-line lookahead it sees that the first line fits and is stuck putting the second and third lines after the mark In contrast renderSmart will continue to check the potential document up to the end of the indentation level Thus it will format the document as fun fun fun fun fun abcdef abcdef Which fits within the mark In addition renderSmart uses this lookahead to minimize the number of lines printed leading to more compact and visually appealing output Consider this example using the same syntax as above aaaaaaaaaaa abc def ghi When rendered with renderPretty and page width of we get aaaaaaaaaaa abc def ghi Whereas when rendered with renderSmart and page width of we get aaaaaaaaaaa abc def ghi",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "renderSmart",
        "normalized": "Int-\u003eDoc a-\u003eSimpleDoc a",
        "package": "wl-pprint-extras",
        "partial": "Smart",
        "signature": "Int-\u003eDoc e-\u003eSimpleDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#rparen",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "The document rparen contains right parenthesis",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "rparen",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "The document semi contains semi colon",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "semi",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:semiBraces",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n semi colons and encloses them in braces. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All semi colons are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#semiBraces",
        "fct-type": "function",
        "title": "semiBraces"
      },
      "index": {
        "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "semiBraces",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "Braces",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eabove\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs  = group (vsep xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with above sep xs group vsep xs",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "sep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:softbreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softbreak  = group linebreak\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#softbreak",
        "fct-type": "function",
        "title": "softbreak"
      },
      "index": {
        "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line softbreak group linebreak",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "softbreak",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:softline",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softline = group line\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#softline",
        "fct-type": "function",
        "title": "softline"
      },
      "index": {
        "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line softline group line",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "softline",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y   = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "The document space contains single space space",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "space",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:squote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#squote",
        "fct-type": "function",
        "title": "squote"
      },
      "index": {
        "description": "The document squote contains single quote",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "squote",
        "normalized": "",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:squotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#squotes",
        "fct-type": "function",
        "title": "squotes"
      },
      "index": {
        "description": "Document squotes encloses document with single quotes",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "squotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n string contains newline characters, the function \u003ccode\u003estring\u003c/code\u003e should be\n used.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "String -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "text",
        "normalized": "String-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "String-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:tupled",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in parenthesis. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#tupled",
        "fct-type": "function",
        "title": "tupled"
      },
      "index": {
        "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "tupled",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eaboveBreak\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "The document vcat xs concatenates all documents xs vertically with aboveBreak If group undoes the line breaks inserted by vcat all documents are directly concatenated",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "vcat",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:vsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eabove\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test     = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n to\n lay\n out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n their first element\n\u003c/p\u003e\u003cpre\u003e test = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n      to\n      lay\n      out\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "f (Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#vsep",
        "fct-type": "function",
        "title": "vsep"
      },
      "index": {
        "description": "The document vsep xs concatenates all documents xs vertically with above If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is layed out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "vsep",
        "normalized": "a(Doc b)-\u003eDoc b",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "f(Doc e)-\u003eDoc e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:width",
      "description": {
        "fct-module": "Text.PrettyPrint.Free",
        "fct-package": "wl-pprint-extras",
        "fct-signature": "Doc e -\u003e (Int -\u003e Doc e) -\u003e Doc e",
        "fct-source": "src/Text-PrettyPrint-Free-Internal.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Free",
        "module": "Text.PrettyPrint.Free",
        "name": "width",
        "normalized": "Doc a-\u003e(Int-\u003eDoc a)-\u003eDoc a",
        "package": "wl-pprint-extras",
        "partial": "",
        "signature": "Doc e-\u003e(Int-\u003eDoc e)-\u003eDoc e"
      }
    }
  }
]