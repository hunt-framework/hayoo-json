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
        "word": "wl-pprint-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print module based on Daan Leijen's implementation of Philip Wadler's\n \"prettier printer\"\n\u003c/p\u003e\u003cpre\u003e\n      \"A prettier printer\"\n      Draft paper, April 1997, revised March 1998.\n      \u003ca\u003ehttp://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis is an implementation of the pretty printing combinators\n described by Philip Wadler (1997). In their bare essence, the\n combinators of Wadler are not expressive enough to describe some\n commonly occurring layouts. The PPrint library adds new primitives\n to describe these layouts and works well in practice.\n\u003c/p\u003e\u003cp\u003eThe library is based on a single way to concatenate documents,\n which is associative and has both a left and right unit.  This\n simple design leads to an efficient and short implementation. The\n simplicity is reflected in the predictable behaviour of the\n combinators which make them easy to use in practice.\n\u003c/p\u003e\u003cp\u003eA thorough description of the primitive combinators and their\n implementation can be found in Philip Wadler's paper\n (1997). Additions and the main differences with his original paper\n are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The nil document is called empty.\n\u003c/li\u003e\u003cli\u003e The operator \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is used\n for soft line breaks.\n\u003c/li\u003e\u003cli\u003e There are three new primitives: \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efillBreak\u003c/a\u003e\u003c/code\u003e. These are very useful in practice.\n\u003c/li\u003e\u003cli\u003e Lots of other useful combinators, like \u003ccode\u003e\u003ca\u003efillSep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e There are two renderers, \u003ccode\u003e\u003ca\u003erenderPretty\u003c/a\u003e\u003c/code\u003e for pretty printing and\n \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e for compact output. The pretty printing algorithm\n also uses a ribbon-width now for even prettier output.\n\u003c/li\u003e\u003cli\u003e There are two display routines, \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e for strings and \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e\n for file based output.\n\u003c/li\u003e\u003cli\u003e There is a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e The implementation uses optimised representations and strictness\n annotations.\n\u003c/li\u003e\u003cli\u003e A type argument has been added and embedded \u003ccode\u003eeffects\u003c/code\u003e can be seen in\n the SimpleDoc type.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Internal",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print module based on Daan Leijen implementation of Philip Wadler prettier printer prettier printer Draft paper April revised March http homepages.inf.ed.ac.uk wadler papers prettier prettier.pdf This is an implementation of the pretty printing combinators described by Philip Wadler In their bare essence the combinators of Wadler are not expressive enough to describe some commonly occurring layouts The PPrint library adds new primitives to describe these layouts and works well in practice The library is based on single way to concatenate documents which is associative and has both left and right unit This simple design leads to an efficient and short implementation The simplicity is reflected in the predictable behaviour of the combinators which make them easy to use in practice thorough description of the primitive combinators and their implementation can be found in Philip Wadler paper Additions and the main differences with his original paper are The nil document is called empty The operator is used for soft line breaks There are three new primitives align fill and fillBreak These are very useful in practice Lots of other useful combinators like fillSep and list There are two renderers renderPretty for pretty printing and renderCompact for compact output The pretty printing algorithm also uses ribbon-width now for even prettier output There are two display routines displayS for strings and displayIO for file based output There is Pretty class The implementation uses optimised representations and strictness annotations type argument has been added and embedded effects can be seen in the SimpleDoc type",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Internal",
          "package": "wl-pprint-extras",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" `above` text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n hello\n world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Doc",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello above text world Which would return the string hello nworld i.e hello world",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Doc",
          "package": "wl-pprint-extras",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Pretty",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Pretty",
          "package": "wl-pprint-extras",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n provides two default display functions \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing a\n function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SimpleDoc",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "data"
        },
        "index": {
          "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SimpleDoc",
          "package": "wl-pprint-extras",
          "partial": "Simple Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#t:SimpleDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "(\u003c+\u003e)",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2B%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--43--62-\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--43--62-\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n right next to each other or underneath each other. (infixr 5)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "(\u003c//\u003e)",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%2F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--47--62-\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--47--47--62-\"]"
        },
        "index": {
          "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "(\u003c//\u003e) \u003c//\u003e",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or underneath each\n other. (infixr 5)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "(\u003c/\u003e)",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#%3C%2F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--62-\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--47--62-\"]"
        },
        "index": {
          "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c\u003e c = a \u003c\u003e (b \u003c\u003e c)\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e we further require\n\u003c/p\u003e\u003cpre\u003e (\u003c\u003e) = mappend\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "(\u003c\u003e)",
          "package": "wl-pprint-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--62-\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:-60--62-\"]"
        },
        "index": {
          "description": "An associative operation If is also Monoid we further require mappend",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "wl-pprint-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Cat",
          "package": "wl-pprint-extras",
          "signature": "Cat (Doc e) (Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Cat",
          "package": "wl-pprint-extras",
          "partial": "Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Char",
          "package": "wl-pprint-extras",
          "signature": "Char !Char",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Char",
          "package": "wl-pprint-extras",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Column",
          "package": "wl-pprint-extras",
          "signature": "Column (Int -\u003e Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Column",
          "normalized": "Column(Int-\u003eDoc a)",
          "package": "wl-pprint-extras",
          "partial": "Column",
          "signature": "Column(Int-\u003eDoc e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Columns",
          "package": "wl-pprint-extras",
          "signature": "Columns (Int -\u003e Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Columns",
          "normalized": "Columns(Int-\u003eDoc a)",
          "package": "wl-pprint-extras",
          "partial": "Columns",
          "signature": "Columns(Int-\u003eDoc e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Effect",
          "package": "wl-pprint-extras",
          "signature": "Effect e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Effect",
          "package": "wl-pprint-extras",
          "partial": "Effect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Empty",
          "package": "wl-pprint-extras",
          "signature": "Empty",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Empty",
          "package": "wl-pprint-extras",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Fail",
          "package": "wl-pprint-extras",
          "signature": "Fail",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Fail",
          "package": "wl-pprint-extras",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "FlatAlt",
          "package": "wl-pprint-extras",
          "signature": "FlatAlt (Doc e) (Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "FlatAlt",
          "package": "wl-pprint-extras",
          "partial": "Flat Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:FlatAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Line",
          "package": "wl-pprint-extras",
          "signature": "Line",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Line",
          "package": "wl-pprint-extras",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Nest",
          "package": "wl-pprint-extras",
          "signature": "Nest !Int (Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Nest",
          "package": "wl-pprint-extras",
          "partial": "Nest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Nesting",
          "package": "wl-pprint-extras",
          "signature": "Nesting (Int -\u003e Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Nesting",
          "normalized": "Nesting(Int-\u003eDoc a)",
          "package": "wl-pprint-extras",
          "partial": "Nesting",
          "signature": "Nesting(Int-\u003eDoc e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Nesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Ribbon",
          "package": "wl-pprint-extras",
          "signature": "Ribbon (Int -\u003e Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Ribbon",
          "normalized": "Ribbon(Int-\u003eDoc a)",
          "package": "wl-pprint-extras",
          "partial": "Ribbon",
          "signature": "Ribbon(Int-\u003eDoc e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Ribbon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SChar",
          "package": "wl-pprint-extras",
          "signature": "SChar !Char (SimpleDoc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SChar\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SChar\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SChar",
          "package": "wl-pprint-extras",
          "partial": "SChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SEffect",
          "package": "wl-pprint-extras",
          "signature": "SEffect e (SimpleDoc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEffect\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SEffect\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SEffect",
          "package": "wl-pprint-extras",
          "partial": "SEffect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SEmpty",
          "package": "wl-pprint-extras",
          "signature": "SEmpty",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEmpty\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SEmpty\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SEmpty",
          "package": "wl-pprint-extras",
          "partial": "SEmpty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SFail",
          "package": "wl-pprint-extras",
          "signature": "SFail",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SFail\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SFail\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SFail",
          "package": "wl-pprint-extras",
          "partial": "SFail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SLine",
          "package": "wl-pprint-extras",
          "signature": "SLine !Int (SimpleDoc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SLine\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SLine\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SLine",
          "package": "wl-pprint-extras",
          "partial": "SLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "SText",
          "package": "wl-pprint-extras",
          "signature": "SText !Int String (SimpleDoc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SText\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:SText\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "SText",
          "package": "wl-pprint-extras",
          "partial": "SText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:SText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Text",
          "package": "wl-pprint-extras",
          "signature": "Text !Int String",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Text",
          "package": "wl-pprint-extras",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Union",
          "package": "wl-pprint-extras",
          "signature": "Union (Doc e) (Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "Union",
          "package": "wl-pprint-extras",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003eabove x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "above",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#above",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:above\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:above\"]"
        },
        "index": {
          "description": "The document above concatenates document and with line in between infixr",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "above",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003eaboveBreak x y\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003elinebreak\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "aboveBreak",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#aboveBreak",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:aboveBreak\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:aboveBreak\"]"
        },
        "index": {
          "description": "The document aboveBreak concatenates document and with linebreak in between infixr",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "aboveBreak",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "partial": "Break",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:aboveBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n level set to the current column. It is used for example to\n implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y  = align (above x y)\n\u003c/pre\u003e\u003cpre\u003e test    = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be layed out as:\n\u003c/p\u003e\u003cpre\u003e\n hi nice\n    world\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "align",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#align",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:align\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:align\"]"
        },
        "index": {
          "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align above test text hi text nice text world which will be layed out as hi nice world",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "align",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n \"\u003e\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "angles",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#angles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:angles\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:angles\"]"
        },
        "index": {
          "description": "Document angles encloses document in angles and",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "angles",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "backslash",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#backslash",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:backslash\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:backslash\"]"
        },
        "index": {
          "description": "The document backslash contains back slash",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "backslash",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:backslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n \"}\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "braces",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#braces",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:braces\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:braces\"]"
        },
        "index": {
          "description": "Document braces encloses document in braces and",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "braces",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n \"[\" and \"]\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "brackets",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#brackets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:brackets\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:brackets\"]"
        },
        "index": {
          "description": "Document brackets encloses document in square brackets and",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "brackets",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eaboveBreak\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs  = group (vcat xs)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "cat",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#cat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:cat\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:cat\"]"
        },
        "index": {
          "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with aboveBreak cat xs group vcat xs",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "cat",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n should be used for line breaks.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "char",
          "package": "wl-pprint-extras",
          "signature": "Char -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:char\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:char\"]"
        },
        "index": {
          "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "char",
          "normalized": "Char-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Char-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "colon",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#colon",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:colon\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:colon\"]"
        },
        "index": {
          "description": "The document colon contains colon",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "colon",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "column",
          "package": "wl-pprint-extras",
          "signature": "(Int -\u003e Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#column",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:column\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:column\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "column",
          "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "(Int-\u003eDoc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "columns",
          "package": "wl-pprint-extras",
          "signature": "(Int -\u003e Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#columns",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:columns\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:columns\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "columns",
          "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "(Int-\u003eDoc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "comma",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#comma",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:comma\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:comma\"]"
        },
        "index": {
          "description": "The document comma contains comma",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "comma",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc)\u003c/code\u003e writes \u003ccode\u003esimpleDoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hPutDoc handle doc  = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "displayIO",
          "package": "wl-pprint-extras",
          "signature": "Handle -\u003e SimpleDoc e -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Free-Internal.html#displayIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayIO\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:displayIO\"]"
        },
        "index": {
          "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "displayIO",
          "normalized": "Handle-\u003eSimpleDoc a-\u003eIO()",
          "package": "wl-pprint-extras",
          "partial": "IO",
          "signature": "Handle-\u003eSimpleDoc e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayS simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e type (for use in\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc -\u003e String\n showWidth w x   = displayS (renderPretty 0.4 w x) \"\"\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "displayS",
          "package": "wl-pprint-extras",
          "signature": "SimpleDoc e -\u003e ShowS",
          "source": "src/Text-PrettyPrint-Free-Internal.html#displayS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayS\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:displayS\"]"
        },
        "index": {
          "description": "displayS simpleDoc takes the output simpleDoc from rendering function and transforms it to ShowS type for use in the Show class showWidth Int Doc String showWidth displayS renderPretty",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "displayS",
          "normalized": "SimpleDoc a-\u003eShowS",
          "package": "wl-pprint-extras",
          "signature": "SimpleDoc e-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:displayS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "dot",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#dot",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dot\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dot\"]"
        },
        "index": {
          "description": "The document dot contains single dot",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "dot",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "dquote",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#dquote",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquote\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dquote\"]"
        },
        "index": {
          "description": "The document dquote contains double quote",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "dquote",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n '\"'.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "dquotes",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#dquotes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquotes\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:dquotes\"]"
        },
        "index": {
          "description": "Document dquotes encloses document with double quotes",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "dquotes",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:dquotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "empty",
          "package": "wl-pprint-extras",
          "signature": "forall a.  f a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:empty\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:empty\"]"
        },
        "index": {
          "description": "The identity of",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "empty",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x   = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "enclose",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#enclose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:enclose\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:enclose\"]"
        },
        "index": {
          "description": "The document enclose encloses document between documents and using enclose",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "enclose",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:enclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by \u003ccode\u003el\u003c/code\u003e\n and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits the\n page. Otherwise they are aligned vertically. All separators are put\n in front of the elements. For example, the combinator \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be\n defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test    = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n list [10, 200, 3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n list [ 10\n      , 200\n      , 3000 ]\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "encloseSep",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e -\u003e f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#encloseSep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:encloseSep\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:encloseSep\"]"
        },
        "index": {
          "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is layed out with page width of as list But when the page width is it is layed out as list",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "encloseSep",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eb(Doc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "partial": "Sep",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e-\u003ef(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:encloseSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "equals",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#equals",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:equals\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:equals\"]"
        },
        "index": {
          "description": "The document equals contains an equal sign",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "equals",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It then appends\n \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n already larger, nothing is appended. This combinator is quite\n useful in practice to output a list of bindings. The following\n example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types  = [(\"empty\",\"Doc e\")\n          ,(\"nest\",\"Int -\u003e Doc e -\u003e Doc e\")\n          ,(\"linebreak\",\"Doc e\")]\n\n ptype (name,tp)\n        = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test   = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak :: Doc e\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "fill",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#fill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fill\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fill\"]"
        },
        "index": {
          "description": "The document fill renders document It then appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is layed out as let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "fill",
          "normalized": "Int-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Int-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n then appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine \u003ccode\u003eptype\u003c/code\u003e\n in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a useful\n variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n        = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc e\n     nest   :: Int -\u003e Doc e -\u003e Doc e\n     linebreak\n            :: Doc e\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "fillBreak",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#fillBreak",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillBreak\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillBreak\"]"
        },
        "index": {
          "description": "The document fillBreak first renders document It then appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "fillBreak",
          "normalized": "Int-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "partial": "Break",
          "signature": "Int-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, then inserts\n a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs  = foldr (\u003c//\u003e) empty xs\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "fillCat",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#fillCat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillCat\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillCat\"]"
        },
        "index": {
          "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page then inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "fillCat",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "partial": "Cat",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, then\n inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs  = foldr (\u003c/\u003e) empty xs\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "fillSep",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#fillSep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillSep\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:fillSep\"]"
        },
        "index": {
          "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page then inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "fillSep",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "partial": "Sep",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:fillSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatAlt\u003c/code\u003e creates a document that changes when flattened; normally\n it is rendered as the first argument, but when flattened is rendered\n as the second.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "flatAlt",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#flatAlt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatAlt\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:flatAlt\"]"
        },
        "index": {
          "description": "flatAlt creates document that changes when flattened normally it is rendered as the first argument but when flattened is rendered as the second",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "flatAlt",
          "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "partial": "Alt",
          "signature": "Doc e-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "flatten",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#flatten",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatten\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:flatten\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "flatten",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered without\n any changes.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "group",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#group",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:group\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:group\"]"
        },
        "index": {
          "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "group",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(hPutDoc handle doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main = do{ handle \u003c- openFile \"MyFile\" WriteMode\n          ; hPutDoc handle (vcat (map text\n                            [\"vertical\",\"text\"]))\n          ; hClose handle\n          }\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "hPutDoc",
          "package": "wl-pprint-extras",
          "signature": "Handle -\u003e Doc e -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Free-Internal.html#hPutDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hPutDoc\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hPutDoc\"]"
        },
        "index": {
          "description": "hPutDoc handle doc pretty prints document doc to the file handle handle with page width of characters and ribbon width of characters main do handle openFile MyFile WriteMode hPutDoc handle vcat map text vertical text hClose handle",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "hPutDoc",
          "normalized": "Handle-\u003eDoc a-\u003eIO()",
          "package": "wl-pprint-extras",
          "partial": "Put Doc",
          "signature": "Handle-\u003eDoc e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hPutDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test  = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n the hang combinator\n     indents these\n     words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x  = align (nest i x)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "hang",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#hang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hang\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hang\"]"
        },
        "index": {
          "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "hang",
          "normalized": "Int-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Int-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA linebreak that can not be flattened; it is guaranteed to be\n rendered as a newline.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "hardline",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#hardline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hardline\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hardline\"]"
        },
        "index": {
          "description": "linebreak that can not be flattened it is guaranteed to be rendered as newline",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "hardline",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hardline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "hcat",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#hcat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hcat\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hcat\"]"
        },
        "index": {
          "description": "The document hcat xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "hcat",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "hsep",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#hsep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hsep\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:hsep\"]"
        },
        "index": {
          "description": "The document hsep xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "hsep",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test  = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n     the indent\n     combinator\n     indents these\n     words !\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "indent",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#indent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:indent\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:indent\"]"
        },
        "index": {
          "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "indent",
          "normalized": "Int-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Int-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "langle",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#langle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:langle\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:langle\"]"
        },
        "index": {
          "description": "The document langle contains left angle",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "langle",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:langle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "lbrace",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#lbrace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbrace\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lbrace\"]"
        },
        "index": {
          "description": "The document lbrace contains left brace",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "lbrace",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "lbracket",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#lbracket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbracket\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lbracket\"]"
        },
        "index": {
          "description": "The document lbracket contains left square bracket",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "lbracket",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n current nesting level. Document \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \" \")\u003c/code\u003e\n if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "line",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:line\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:line\"]"
        },
        "index": {
          "description": "The line document advances to the next line and indents to the current nesting level Document line behaves like text if the line break is undone by group",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "line",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "linebreak",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#linebreak",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:linebreak\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:linebreak\"]"
        },
        "index": {
          "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "linebreak",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:linebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in square brackets. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "list",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#list",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:list\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:list\"]"
        },
        "index": {
          "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "list",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "lparen",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#lparen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lparen\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:lparen\"]"
        },
        "index": {
          "description": "The document lparen contains left parenthesis",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "lparen",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n indentation level increased by i (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" `above` text \"world\") `above` text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n hello\n   world\n !\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "nest",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#nest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nest\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:nest\"]"
        },
        "index": {
          "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello above text world above text outputs as hello world",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "nest",
          "normalized": "Int-\u003eDoc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Int-\u003eDoc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "nesting",
          "package": "wl-pprint-extras",
          "signature": "(Int -\u003e Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#nesting",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nesting\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:nesting\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "nesting",
          "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "(Int-\u003eDoc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:nesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n and \")\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "parens",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#parens",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:parens\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:parens\"]"
        },
        "index": {
          "description": "Document parens encloses document in parenthesis and",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "parens",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "pretty",
          "package": "wl-pprint-extras",
          "signature": "a -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "pretty",
          "normalized": "a-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "a-\u003eDoc e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "prettyList",
          "package": "wl-pprint-extras",
          "signature": "[a] -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#prettyList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "prettyList",
          "normalized": "[a]-\u003eDoc b",
          "package": "wl-pprint-extras",
          "partial": "List",
          "signature": "[a]-\u003eDoc e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:prettyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test     = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is layed out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n (words,\n  in,\n  a,\n  tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "punctuate",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e f (Doc e) -\u003e f (Doc e)",
          "source": "src/Text-PrettyPrint-Free-Internal.html#punctuate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:punctuate\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:punctuate\"]"
        },
        "index": {
          "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is layed out on page width of as words in tuple But when the page width is it is layed out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "punctuate",
          "normalized": "Doc a-\u003eb(Doc a)-\u003eb(Doc a)",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003ef(Doc e)-\u003ef(Doc e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action \u003ccode\u003e(putDoc doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the\n standard output, with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = do{ putDoc (text \"hello\" \u003c+\u003e text \"world\") }\n\u003c/pre\u003e\u003cp\u003eWhich would output\n\u003c/p\u003e\u003cpre\u003e\n hello world\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "putDoc",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Free-Internal.html#putDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:putDoc\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:putDoc\"]"
        },
        "index": {
          "description": "The action putDoc doc pretty prints document doc to the standard output with page width of characters and ribbon width of characters main IO main do putDoc text hello text world Which would output hello world",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "putDoc",
          "normalized": "Doc a-\u003eIO()",
          "package": "wl-pprint-extras",
          "partial": "Doc",
          "signature": "Doc e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:putDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "rangle",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#rangle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rangle\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rangle\"]"
        },
        "index": {
          "description": "The document rangle contains right angle",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "rangle",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "rbrace",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#rbrace",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbrace\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rbrace\"]"
        },
        "index": {
          "description": "The document rbrace contains right brace",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "rbrace",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "rbracket",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#rbracket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbracket\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rbracket\"]"
        },
        "index": {
          "description": "The document rbracket contains right square bracket",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "rbracket",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(renderCompact x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n indentation. Since no 'pretty' printing is involved, this\n renderer is very fast. The resulting output contains fewer\n characters than a pretty printed version and can be used for output\n that is read by other programs.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "renderCompact",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e SimpleDoc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#renderCompact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderCompact\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderCompact\"]"
        },
        "index": {
          "description": "renderCompact renders document without adding any indentation Since no pretty printing is involved this renderer is very fast The resulting output contains fewer characters than pretty printed version and can be used for output that is read by other programs",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "renderCompact",
          "normalized": "Doc a-\u003eSimpleDoc a",
          "package": "wl-pprint-extras",
          "partial": "Compact",
          "signature": "Doc e-\u003eSimpleDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderCompact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputDoc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e renders\n document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon width of\n \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is the maximal\n amount of non-indentation characters on a line. The parameter\n \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it is lower or\n higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "renderPretty",
          "package": "wl-pprint-extras",
          "signature": "Float -\u003e Int -\u003e Doc e -\u003e SimpleDoc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#renderPretty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderPretty\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderPretty\"]"
        },
        "index": {
          "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "renderPretty",
          "normalized": "Float-\u003eInt-\u003eDoc a-\u003eSimpleDoc a",
          "package": "wl-pprint-extras",
          "partial": "Pretty",
          "signature": "Float-\u003eInt-\u003eDoc e-\u003eSimpleDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA slightly smarter rendering algorithm with more lookahead. It provides\n provide earlier breaking on deeply nested structures.\n For example, consider this python-ish pseudocode:\n \u003ccode\u003efun(fun(fun(fun(fun([abcdefg, abcdefg])))))\u003c/code\u003e\n If we put a softbreak (+ nesting 2) after each open parenthesis, and align\n the elements of the list to match the opening brackets, this will render with\n \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c as:\n \u003ccode\u003e\n fun(fun(fun(fun(fun([\n                     | abcdef,\n                     | abcdef,\n                     ]\n   )))))             |\n \u003c/code\u003e\n Where the 20c. boundary has been marked with |. Because \u003ccode\u003erenderPretty\u003c/code\u003e only\n uses one-line lookahead, it sees that the first line fits, and is stuck\n putting the second and third lines after the 20c mark. In contrast,\n \u003ccode\u003erenderSmart\u003c/code\u003e will continue to check the potential document up to the end of\n the indentation level. Thus, it will format the document as:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\n fun(                |\n   fun(              |\n     fun(            |\n       fun(          |\n         fun([       |\n               abcdef,\n               abcdef,\n             ]       |\n   )))))             |\n \u003c/code\u003e\n Which fits within the 20c. mark.\n In addition, \u003ccode\u003erenderSmart\u003c/code\u003e uses this lookahead to minimize the number of\n lines printed, leading to more compact and visually appealing output.\n Consider this example using the same syntax as above:\n \u003ccode\u003eaaaaaaaaaaa([abc, def, ghi])\u003c/code\u003e\n When rendered with \u003ccode\u003erenderPretty\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa([ abc\n             , def\n             , ghi ])\n \u003c/code\u003e\n Whereas when rendered with \u003ccode\u003erenderSmart\u003c/code\u003e and a page width of 20c, we get:\n \u003ccode\u003e\n aaaaaaaaaaa(\n   [abc, def, ghi])\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "renderSmart",
          "package": "wl-pprint-extras",
          "signature": "Int -\u003e Doc e -\u003e SimpleDoc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#renderSmart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderSmart\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:renderSmart\"]"
        },
        "index": {
          "description": "slightly smarter rendering algorithm with more lookahead It provides provide earlier breaking on deeply nested structures For example consider this python-ish pseudocode fun fun fun fun fun abcdefg abcdefg If we put softbreak nesting after each open parenthesis and align the elements of the list to match the opening brackets this will render with renderPretty and page width of as fun fun fun fun fun abcdef abcdef Where the boundary has been marked with Because renderPretty only uses one-line lookahead it sees that the first line fits and is stuck putting the second and third lines after the mark In contrast renderSmart will continue to check the potential document up to the end of the indentation level Thus it will format the document as fun fun fun fun fun abcdef abcdef Which fits within the mark In addition renderSmart uses this lookahead to minimize the number of lines printed leading to more compact and visually appealing output Consider this example using the same syntax as above aaaaaaaaaaa abc def ghi When rendered with renderPretty and page width of we get aaaaaaaaaaa abc def ghi Whereas when rendered with renderSmart and page width of we get aaaaaaaaaaa abc def ghi",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "renderSmart",
          "normalized": "Int-\u003eDoc a-\u003eSimpleDoc a",
          "package": "wl-pprint-extras",
          "partial": "Smart",
          "signature": "Int-\u003eDoc e-\u003eSimpleDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:renderSmart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "ribbon",
          "package": "wl-pprint-extras",
          "signature": "(Int -\u003e Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#ribbon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "ribbon",
          "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "(Int-\u003eDoc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:ribbon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "rparen",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#rparen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rparen\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:rparen\"]"
        },
        "index": {
          "description": "The document rparen contains right parenthesis",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "rparen",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "semi",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#semi",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semi\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:semi\"]"
        },
        "index": {
          "description": "The document semi contains semi colon",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "semi",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n semi colons and encloses them in braces. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All semi colons are put in front of the elements.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "semiBraces",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#semiBraces",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semiBraces\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:semiBraces\"]"
        },
        "index": {
          "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "semiBraces",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "partial": "Braces",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:semiBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003eabove\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs  = group (vsep xs)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "sep",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#sep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:sep\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:sep\"]"
        },
        "index": {
          "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with above sep xs group vsep xs",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "sep",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softbreak  = group linebreak\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "softbreak",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#softbreak",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softbreak\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:softbreak\"]"
        },
        "index": {
          "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line softbreak group linebreak",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "softbreak",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softbreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softline = group line\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "softline",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#softline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softline\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:softline\"]"
        },
        "index": {
          "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line softline group line",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "softline",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:softline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y   = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "space",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#space",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:space\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:space\"]"
        },
        "index": {
          "description": "The document space contains single space space",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "space",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "squote",
          "package": "wl-pprint-extras",
          "signature": "Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#squote",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squote\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:squote\"]"
        },
        "index": {
          "description": "The document squote contains single quote",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "squote",
          "package": "wl-pprint-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n \"'\".\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "squotes",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#squotes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squotes\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:squotes\"]"
        },
        "index": {
          "description": "Document squotes encloses document with single quotes",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "squotes",
          "normalized": "Doc a-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:squotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n string contains newline characters, the function \u003ccode\u003estring\u003c/code\u003e should be\n used.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "text",
          "package": "wl-pprint-extras",
          "signature": "String -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#text",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:text\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:text\"]"
        },
        "index": {
          "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "text",
          "normalized": "String-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "String-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in parenthesis. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "tupled",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#tupled",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:tupled\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:tupled\"]"
        },
        "index": {
          "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "tupled",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:tupled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eaboveBreak\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "vcat",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#vcat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vcat\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:vcat\"]"
        },
        "index": {
          "description": "The document vcat xs concatenates all documents xs vertically with aboveBreak If group undoes the line breaks inserted by vcat all documents are directly concatenated",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "vcat",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003eabove\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test     = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n to\n lay\n out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n their first element\n\u003c/p\u003e\u003cpre\u003e test = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n      to\n      lay\n      out\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "vsep",
          "package": "wl-pprint-extras",
          "signature": "f (Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#vsep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vsep\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:vsep\"]"
        },
        "index": {
          "description": "The document vsep xs concatenates all documents xs vertically with above If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is layed out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "vsep",
          "normalized": "a(Doc b)-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "f(Doc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Free.Internal\",\"Text.PrettyPrint.Free\"]",
          "name": "width",
          "package": "wl-pprint-extras",
          "signature": "Doc e -\u003e (Int -\u003e Doc e) -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#width",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:width\",\"http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:width\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free Internal",
          "module": "Text.PrettyPrint.Free.Internal",
          "name": "width",
          "normalized": "Doc a-\u003e(Int-\u003eDoc a)-\u003eDoc a",
          "package": "wl-pprint-extras",
          "signature": "Doc e-\u003e(Int-\u003eDoc e)-\u003eDoc e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free-Internal.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print module based on Daan Leijen's implementation of Philip Wadler's\n \"prettier printer\"\n\u003c/p\u003e\u003cpre\u003e\n      \"A prettier printer\"\n      Draft paper, April 1997, revised March 1998.\n      \u003ca\u003ehttp://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis is an implementation of the pretty printing combinators\n described by Philip Wadler (1997). In their bare essence, the\n combinators of Wadler are not expressive enough to describe some\n commonly occurring layouts. The PPrint library adds new primitives\n to describe these layouts and works well in practice.\n\u003c/p\u003e\u003cp\u003eThe library is based on a single way to concatenate documents,\n which is associative and has both a left and right unit.  This\n simple design leads to an efficient and short implementation. The\n simplicity is reflected in the predictable behaviour of the\n combinators which make them easy to use in practice.\n\u003c/p\u003e\u003cp\u003eA thorough description of the primitive combinators and their\n implementation can be found in Philip Wadler's paper\n (1997). Additions and the main differences with his original paper\n are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The nil document is called empty.\n\u003c/li\u003e\u003cli\u003e The operator \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is used\n for soft line breaks.\n\u003c/li\u003e\u003cli\u003e There are three new primitives: \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efillBreak\u003c/a\u003e\u003c/code\u003e. These are very useful in practice.\n\u003c/li\u003e\u003cli\u003e Lots of other useful combinators, like \u003ccode\u003e\u003ca\u003efillSep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e There are two renderers, \u003ccode\u003e\u003ca\u003erenderPretty\u003c/a\u003e\u003c/code\u003e for pretty printing and\n \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e for compact output. The pretty printing algorithm\n also uses a ribbon-width now for even prettier output.\n\u003c/li\u003e\u003cli\u003e There are two displayers, \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e for strings and \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e for\n file based output.\n\u003c/li\u003e\u003cli\u003e There is a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e The implementation uses optimised representations and strictness\n annotations.\n\u003c/li\u003e\u003cli\u003e A type argument has been added and embedded \u003ccode\u003eeffects\u003c/code\u003e can be seen in\n the SimpleDoc type.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Free",
          "name": "Free",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print module based on Daan Leijen implementation of Philip Wadler prettier printer prettier printer Draft paper April revised March http homepages.inf.ed.ac.uk wadler papers prettier prettier.pdf This is an implementation of the pretty printing combinators described by Philip Wadler In their bare essence the combinators of Wadler are not expressive enough to describe some commonly occurring layouts The PPrint library adds new primitives to describe these layouts and works well in practice The library is based on single way to concatenate documents which is associative and has both left and right unit This simple design leads to an efficient and short implementation The simplicity is reflected in the predictable behaviour of the combinators which make them easy to use in practice thorough description of the primitive combinators and their implementation can be found in Philip Wadler paper Additions and the main differences with his original paper are The nil document is called empty The operator is used for soft line breaks There are three new primitives align fill and fillBreak These are very useful in practice Lots of other useful combinators like fillSep and list There are two renderers renderPretty for pretty printing and renderCompact for compact output The pretty printing algorithm also uses ribbon-width now for even prettier output There are two displayers displayS for strings and displayIO for file based output There is Pretty class The implementation uses optimised representations and strictness annotations type argument has been added and embedded effects can be seen in the SimpleDoc type",
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "Free",
          "package": "wl-pprint-extras",
          "partial": "Free",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" `above` text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n hello\n world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Free",
          "name": "Doc",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello above text world Which would return the string hello nworld i.e hello world",
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "Doc",
          "package": "wl-pprint-extras",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Free",
          "name": "Pretty",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "Pretty",
          "package": "wl-pprint-extras",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n provides two default display functions \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing a\n function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Free",
          "name": "SimpleDoc",
          "package": "wl-pprint-extras",
          "source": "src/Text-PrettyPrint-Free-Internal.html#SimpleDoc",
          "type": "data"
        },
        "index": {
          "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "SimpleDoc",
          "package": "wl-pprint-extras",
          "partial": "Simple Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#t:SimpleDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free",
          "name": "pretty",
          "package": "wl-pprint-extras",
          "signature": "a -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "pretty",
          "normalized": "a-\u003eDoc b",
          "package": "wl-pprint-extras",
          "signature": "a-\u003eDoc e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Free",
          "name": "prettyList",
          "package": "wl-pprint-extras",
          "signature": "[a] -\u003e Doc e",
          "source": "src/Text-PrettyPrint-Free-Internal.html#prettyList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Free",
          "module": "Text.PrettyPrint.Free",
          "name": "prettyList",
          "normalized": "[a]-\u003eDoc b",
          "package": "wl-pprint-extras",
          "partial": "List",
          "signature": "[a]-\u003eDoc e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-extras/docs/Text-PrettyPrint-Free.html#v:prettyList"
      }
    }
  ]
]