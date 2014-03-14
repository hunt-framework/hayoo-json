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
        "word": "wl-pprint-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a version of\n \u003ca\u003eText.PrettyPrint.Leijen.Text\u003c/a\u003e where the combinators have been\n lifted into a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.  The main usage for this is for state-based\n pretty-printing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Monadic",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides version of Text.PrettyPrint.Leijen.Text where the combinators have been lifted into Monad The main usage for this is for state-based pretty-printing",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Monadic",
          "package": "wl-pprint-text",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n   prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n   ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" \u003c$\u003e text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n   hello\n   world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Doc",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello text world Which would return the string hello nworld i.e hello world",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Doc",
          "package": "wl-pprint-text",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance\n   Pretty a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the\n   \u003ccode\u003epretty\u003c/code\u003e function is used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Pretty",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "Pretty",
          "package": "wl-pprint-text",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n   used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n   in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n   provides two default display functions \u003ccode\u003edisplayS\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing\n   a function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SimpleDoc",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "data"
        },
        "index": {
          "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SimpleDoc",
          "package": "wl-pprint-text",
          "partial": "Simple Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#t:SimpleDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003elinebreak\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c$$\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with linebreak in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c$\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with line in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c++\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003espacebreak\u003c/a\u003e\u003c/code\u003e in between.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c++\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with spacebreak in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c+\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e in between.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c+\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with space in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   either right next to each other or underneath each other. (infixr\n   5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c//\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%2F%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c//\u003e) \u003c//\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   either next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or\n   underneath each other. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c/\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and document\n   \u003ccode\u003ey\u003c/code\u003e. It is an associative operation having \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e as a left and\n   right unit.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c\u003e)",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and document It is an associative operation having empty as left and right unit infixr",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "SChar",
          "package": "wl-pprint-text",
          "signature": "SChar Char SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SChar\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:SChar\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SChar",
          "package": "wl-pprint-text",
          "partial": "SChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "SEmpty",
          "package": "wl-pprint-text",
          "signature": "SEmpty",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SEmpty\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:SEmpty\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SEmpty",
          "package": "wl-pprint-text",
          "partial": "SEmpty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "SLine",
          "package": "wl-pprint-text",
          "signature": "SLine !Int64 SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SLine\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:SLine\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SLine",
          "package": "wl-pprint-text",
          "partial": "SLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "SText",
          "package": "wl-pprint-text",
          "signature": "SText !Int64 Builder SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SText\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:SText\"]"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "SText",
          "package": "wl-pprint-text",
          "partial": "SText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:SText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n   level set to the current column. It is used for example to\n   implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n   regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y = align (x \u003c$\u003e y)\n\u003c/pre\u003e\u003cpre\u003e test = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   hi nice\n      world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "align",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#align",
          "type": "function"
        },
        "index": {
          "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align test text hi text nice text world which will be laid out as hi nice world",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "align",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n   \"\u003e\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "angles",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#angles",
          "type": "function"
        },
        "index": {
          "description": "Document angles encloses document in angles and",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "angles",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "backslash",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#backslash",
          "type": "function"
        },
        "index": {
          "description": "The document backslash contains back slash",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "backslash",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:backslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(bool b)\u003c/code\u003e shows the literal boolean \u003ccode\u003eb\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "bool",
          "package": "wl-pprint-text",
          "signature": "Bool -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#bool",
          "type": "function"
        },
        "index": {
          "description": "The document bool shows the literal boolean using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "bool",
          "normalized": "Bool-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Bool-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n   \"}\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "braces",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Document braces encloses document in braces and",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "braces",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n   \"[\" and \"]\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "brackets",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Document brackets encloses document in square brackets and",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "brackets",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically\n   with \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs = group (vcat xs)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "cat",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#cat",
          "type": "function"
        },
        "index": {
          "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with cat xs group vcat xs",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "cat",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n   character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n   should be used for line breaks.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "char",
          "package": "wl-pprint-text",
          "signature": "Char -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#char",
          "type": "function"
        },
        "index": {
          "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "char",
          "normalized": "Char-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Char-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "colon",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#colon",
          "type": "function"
        },
        "index": {
          "description": "The document colon contains colon",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "colon",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to create the document based upon which column it is in.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "column",
          "package": "wl-pprint-text",
          "signature": "m (Int -\u003e Doc) -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#column",
          "type": "function"
        },
        "index": {
          "description": "Specifies how to create the document based upon which column it is in",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "column",
          "normalized": "a(Int-\u003eDoc)-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m(Int-\u003eDoc)-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "comma",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#comma",
          "type": "function"
        },
        "index": {
          "description": "The document comma contains comma",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "comma",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayB simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n   rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e type (for\n   further manipulation before converting to a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "displayB",
          "package": "wl-pprint-text",
          "signature": "SimpleDoc -\u003e Builder",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#displayB",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayB\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:displayB\"]"
        },
        "index": {
          "description": "displayB simpleDoc takes the output simpleDoc from rendering function and transforms it to Builder type for further manipulation before converting to lazy Text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "displayB",
          "normalized": "SimpleDoc-\u003eBuilder",
          "package": "wl-pprint-text",
          "signature": "SimpleDoc-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc)\u003c/code\u003e writes \u003ccode\u003esimpleDoc\u003c/code\u003e to the\n   file handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by\n   \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e hPutDoc handle doc = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "displayIO",
          "package": "wl-pprint-text",
          "signature": "Handle -\u003e SimpleDoc -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#displayIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayIO\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:displayIO\"]"
        },
        "index": {
          "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "displayIO",
          "normalized": "Handle-\u003eSimpleDoc-\u003eIO()",
          "package": "wl-pprint-text",
          "partial": "IO",
          "signature": "Handle-\u003eSimpleDoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(displayT simpleDoc)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc\u003c/code\u003e from a\n   rendering function and transforms it to a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc -\u003e Text\n showWidth w x = displayT (renderPretty 0.4 w x)\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "displayT",
          "package": "wl-pprint-text",
          "signature": "SimpleDoc -\u003e Text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#displayT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayT\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:displayT\"]"
        },
        "index": {
          "description": "displayT simpleDoc takes the output simpleDoc from rendering function and transforms it to lazy Text value showWidth Int Doc Text showWidth displayT renderPretty",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "displayT",
          "normalized": "SimpleDoc-\u003eText",
          "package": "wl-pprint-text",
          "signature": "SimpleDoc-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:displayT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dot",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#dot",
          "type": "function"
        },
        "index": {
          "description": "The document dot contains single dot",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dot",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(double d)\u003c/code\u003e shows the literal double \u003ccode\u003ed\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "double",
          "package": "wl-pprint-text",
          "signature": "Double -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#double",
          "type": "function"
        },
        "index": {
          "description": "The document double shows the literal double using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "double",
          "normalized": "Double-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Double-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dquote",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#dquote",
          "type": "function"
        },
        "index": {
          "description": "The document dquote contains double quote",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dquote",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:dquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n   '\"'.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dquotes",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#dquotes",
          "type": "function"
        },
        "index": {
          "description": "Document dquotes encloses document with double quotes",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "dquotes",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:dquotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty document is, indeed, empty. Although \u003ccode\u003eempty\u003c/code\u003e has no\n   content, it does have a 'height' of 1 and behaves exactly like\n   \u003ccode\u003e(text \"\")\u003c/code\u003e (and is therefore not a unit of \u003ccode\u003e\u003c$\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "empty",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty document is indeed empty Although empty has no content it does have height of and behaves exactly like text and is therefore not unit of",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "empty",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n   documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "enclose",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#enclose",
          "type": "function"
        },
        "index": {
          "description": "The document enclose encloses document between documents and using enclose",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "enclose",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:enclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n   \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by\n   \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits\n   the page. Otherwise they are aligned vertically. All separators\n   are put in front of the elements. For example, the combinator\n   \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is laid out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n   list [10,200,3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   list [10\n        ,200\n        ,3000]\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "encloseSep",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc -\u003e m Doc -\u003e m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#encloseSep",
          "type": "function"
        },
        "index": {
          "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is laid out with page width of as list But when the page width is it is laid out as list",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "encloseSep",
          "normalized": "a Doc-\u003ea Doc-\u003ea Doc-\u003ea[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "partial": "Sep",
          "signature": "m Doc-\u003em Doc-\u003em Doc-\u003em[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:encloseSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "equals",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#equals",
          "type": "function"
        },
        "index": {
          "description": "The document equals contains an equal sign",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "equals",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It then appends\n   \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n   already larger, nothing is appended. This combinator is quite\n   useful in practice to output a list of bindings. The following\n   example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types = [(\"empty\",\"Doc\")\n          ,(\"nest\",\"Int -\u003e Doc -\u003e Doc\")\n          ,(\"linebreak\",\"Doc\")]\n\n ptype (name,tp)\n = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   let empty  :: Doc\n       nest   :: Int -\u003e Doc -\u003e Doc\n       linebreak :: Doc\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fill",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#fill",
          "type": "function"
        },
        "index": {
          "description": "The document fill renders document It then appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is laid out as let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fill",
          "normalized": "Int-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n   then appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n   width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n   increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine\n   \u003ccode\u003eptype\u003c/code\u003e in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a\n   useful variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n   let empty  :: Doc\n       nest   :: Int -\u003e Doc -\u003e Doc\n       linebreak\n              :: Doc\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillBreak",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#fillBreak",
          "type": "function"
        },
        "index": {
          "description": "The document fillBreak first renders document It then appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillBreak",
          "normalized": "Int-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "partial": "Break",
          "signature": "Int-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:fillBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, then\n   inserts a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents\n   in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs = foldr (\u003c//\u003e) empty xs\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillCat",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#fillCat",
          "type": "function"
        },
        "index": {
          "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page then inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillCat",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "partial": "Cat",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:fillCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, then\n   inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n   \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs = foldr (\u003c/\u003e) empty xs\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillSep",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#fillSep",
          "type": "function"
        },
        "index": {
          "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page then inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "fillSep",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "partial": "Sep",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:fillSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(float f)\u003c/code\u003e shows the literal float \u003ccode\u003ef\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "float",
          "package": "wl-pprint-text",
          "signature": "Float -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#float",
          "type": "function"
        },
        "index": {
          "description": "The document float shows the literal float using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "float",
          "normalized": "Float-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Float-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n   layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n   document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n   that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered\n   without any changes.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "group",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "group",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(hPutDoc handle doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the file\n   handle \u003ccode\u003ehandle\u003c/code\u003e with a page width of 100 characters and a ribbon\n   width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main = do handle \u003c- 'openFile' \"MyFile\" 'WriteMode'\n           'hPutDoc' handle ('vcat' ('map' 'text'\n                           ['T.pack' \"vertical\", 'T.pack' \"text\"]))\n           'hClose' handle\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "hPutDoc",
          "package": "wl-pprint-text",
          "signature": "Handle -\u003e Doc -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#hPutDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:hPutDoc\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:hPutDoc\"]"
        },
        "index": {
          "description": "hPutDoc handle doc pretty prints document doc to the file handle handle with page width of characters and ribbon width of characters main do handle openFile MyFile WriteMode hPutDoc handle vcat map text T.pack vertical T.pack text hClose handle",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hPutDoc",
          "normalized": "Handle-\u003eDoc-\u003eIO()",
          "package": "wl-pprint-text",
          "partial": "Put Doc",
          "signature": "Handle-\u003eDoc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:hPutDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n   \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n   current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n   indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n   the hang combinator\n       indents these\n       words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x = align (nest i x)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hang",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#hang",
          "type": "function"
        },
        "index": {
          "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hang",
          "normalized": "Int-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hcat",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "The document hcat xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hcat",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hsep",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#hsep",
          "type": "function"
        },
        "index": {
          "description": "The document hsep xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "hsep",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n       the indent\n       combinator\n       indents these\n       words !\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "indent",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#indent",
          "type": "function"
        },
        "index": {
          "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "indent",
          "normalized": "Int-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(int i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "int",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#int",
          "type": "function"
        },
        "index": {
          "description": "The document int shows the literal integer using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "int",
          "normalized": "Int-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(integer i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "integer",
          "package": "wl-pprint-text",
          "signature": "Integer -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#integer",
          "type": "function"
        },
        "index": {
          "description": "The document integer shows the literal integer using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "integer",
          "normalized": "Integer-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Integer-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "langle",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#langle",
          "type": "function"
        },
        "index": {
          "description": "The document langle contains left angle",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "langle",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:langle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lbrace",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#lbrace",
          "type": "function"
        },
        "index": {
          "description": "The document lbrace contains left brace",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lbrace",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lbracket",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#lbracket",
          "type": "function"
        },
        "index": {
          "description": "The document lbracket contains left square bracket",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lbracket",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:lbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n   current nesting level. Document \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \"\n   \")\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e or if rendered with\n   \u003ccode\u003e\u003ca\u003erenderOneLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "line",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#line",
          "type": "function"
        },
        "index": {
          "description": "The line document advances to the next line and indents to the current nesting level Document line behaves like text if the line break is undone by group or if rendered with renderOneLine",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "line",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n   the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "linebreak",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#linebreak",
          "type": "function"
        },
        "index": {
          "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "linebreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:linebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n   encloses them in square brackets. The documents are rendered\n   horizontally if that fits the page. Otherwise they are aligned\n   vertically. All comma separators are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "list",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#list",
          "type": "function"
        },
        "index": {
          "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "list",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lparen",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#lparen",
          "type": "function"
        },
        "index": {
          "description": "The document lparen contains left parenthesis",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "lparen",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n   indentation level increased by \u003ccode\u003ei\u003c/code\u003e (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" \u003c$\u003e text \"world\") \u003c$\u003e text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n   hello\n     world\n   !\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "nest",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#nest",
          "type": "function"
        },
        "index": {
          "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello text world text outputs as hello world",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "nest",
          "normalized": "Int-\u003ea Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003em Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to nest the document based upon which column it is\n   being nested in.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "nesting",
          "package": "wl-pprint-text",
          "signature": "m (Int -\u003e Doc) -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#nesting",
          "type": "function"
        },
        "index": {
          "description": "Specifies how to nest the document based upon which column it is being nested in",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "nesting",
          "normalized": "a(Int-\u003eDoc)-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m(Int-\u003eDoc)-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:nesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n   and \")\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "parens",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Document parens encloses document in parenthesis and",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "parens",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "pretty",
          "package": "wl-pprint-text",
          "signature": "a -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "prettyList",
          "package": "wl-pprint-text",
          "signature": "[a] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#prettyList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "prettyList",
          "normalized": "[a]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "List",
          "signature": "[a]-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:prettyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003epretty\u003c/a\u003e\u003c/code\u003e; this is to allow you to use the\n   \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class without having to create extra instances.\n   Alternatively, you may wish to make a variant of \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e using\n   the actual \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e to be used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "prettyM",
          "package": "wl-pprint-text",
          "signature": "a -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#prettyM",
          "type": "function"
        },
        "index": {
          "description": "monadic version of pretty this is to allow you to use the Pretty class without having to create extra instances Alternatively you may wish to make variant of Pretty using the actual Monad to be used",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "prettyM",
          "normalized": "a-\u003eb Doc",
          "package": "wl-pprint-text",
          "signature": "a-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:prettyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n   document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is laid out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n   (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   (words,\n    in,\n    a,\n    tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n   at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "punctuate",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m [Doc] -\u003e m [Doc]",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#punctuate",
          "type": "function"
        },
        "index": {
          "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is laid out on page width of as words in tuple But when the page width is it is laid out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "punctuate",
          "normalized": "a Doc-\u003ea[Doc]-\u003ea[Doc]",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em[Doc]-\u003em[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action \u003ccode\u003e(putDoc doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the\n standard output, with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = do{ putDoc (text \"hello\" \u003c+\u003e text \"world\") }\n\u003c/pre\u003e\u003cp\u003eWhich would output\n\u003c/p\u003e\u003cpre\u003e\n hello world\n\u003c/pre\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "putDoc",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#putDoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:putDoc\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:putDoc\"]"
        },
        "index": {
          "description": "The action putDoc doc pretty prints document doc to the standard output with page width of characters and ribbon width of characters main IO main do putDoc text hello text world Which would output hello world",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "putDoc",
          "normalized": "Doc-\u003eIO()",
          "package": "wl-pprint-text",
          "partial": "Doc",
          "signature": "Doc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:putDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rangle",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#rangle",
          "type": "function"
        },
        "index": {
          "description": "The document rangle contains right angle",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rangle",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(rational r)\u003c/code\u003e shows the literal rational \u003ccode\u003er\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rational",
          "package": "wl-pprint-text",
          "signature": "Rational -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#rational",
          "type": "function"
        },
        "index": {
          "description": "The document rational shows the literal rational using text",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rational",
          "normalized": "Rational-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Rational-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rbrace",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#rbrace",
          "type": "function"
        },
        "index": {
          "description": "The document rbrace contains right brace",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rbrace",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rbracket",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#rbracket",
          "type": "function"
        },
        "index": {
          "description": "The document rbracket contains right square bracket",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rbracket",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:rbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(renderCompact x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n   indentation. Since no 'pretty' printing is involved, this\n   renderer is very fast. The resulting output contains fewer\n   characters than a pretty printed version and can be used for\n   output that is read by other programs.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "renderCompact",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#renderCompact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderCompact\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:renderCompact\"]"
        },
        "index": {
          "description": "renderCompact renders document without adding any indentation Since no pretty printing is involved this renderer is very fast The resulting output contains fewer characters than pretty printed version and can be used for output that is read by other programs",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "renderCompact",
          "normalized": "Doc-\u003eSimpleDoc",
          "package": "wl-pprint-text",
          "partial": "Compact",
          "signature": "Doc-\u003eSimpleDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderCompact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(renderOneLine x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n   indentation or newlines.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "renderOneLine",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#renderOneLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderOneLine\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:renderOneLine\"]"
        },
        "index": {
          "description": "renderOneLine renders document without adding any indentation or newlines",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "renderOneLine",
          "normalized": "Doc-\u003eSimpleDoc",
          "package": "wl-pprint-text",
          "partial": "One Line",
          "signature": "Doc-\u003eSimpleDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderOneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eputDoc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e\n   renders document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon\n   width of \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is\n   the maximal amount of non-indentation characters on a line. The\n   parameter \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it\n   is lower or higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e\n   respectively.\n\u003c/p\u003e",
          "module": "[\"Text.PrettyPrint.Leijen.Text.Monadic\",\"Text.PrettyPrint.Leijen.Text\"]",
          "name": "renderPretty",
          "package": "wl-pprint-text",
          "signature": "Float -\u003e Int -\u003e Doc -\u003e SimpleDoc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#renderPretty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderPretty\",\"http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:renderPretty\"]"
        },
        "index": {
          "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "renderPretty",
          "normalized": "Float-\u003eInt-\u003eDoc-\u003eSimpleDoc",
          "package": "wl-pprint-text",
          "partial": "Pretty",
          "signature": "Float-\u003eInt-\u003eDoc-\u003eSimpleDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:renderPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rparen",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#rparen",
          "type": "function"
        },
        "index": {
          "description": "The document rparen contains right parenthesis",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "rparen",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "semi",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#semi",
          "type": "function"
        },
        "index": {
          "description": "The document semi contains semi colon",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "semi",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n   semi colons and encloses them in braces. The documents are\n   rendered horizontally if that fits the page. Otherwise they are\n   aligned vertically. All semi colons are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "semiBraces",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#semiBraces",
          "type": "function"
        },
        "index": {
          "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "semiBraces",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "partial": "Braces",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:semiBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically\n   with \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs = group (vsep xs)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "sep",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#sep",
          "type": "function"
        },
        "index": {
          "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with sep xs group vsep xs",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "sep",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n   output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "softbreak",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#softbreak",
          "type": "function"
        },
        "index": {
          "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "softbreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:softbreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n   output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "softline",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#softline",
          "type": "function"
        },
        "index": {
          "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "softline",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:softline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "space",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#space",
          "type": "function"
        },
        "index": {
          "description": "The document space contains single space space",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "space",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003espacebreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e when rendered normally\n but like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e when using \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderOneLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "spacebreak",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#spacebreak",
          "type": "function"
        },
        "index": {
          "description": "The document spacebreak behaves like space when rendered normally but like empty when using renderCompact or renderOneLine",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "spacebreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:spacebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "squote",
          "package": "wl-pprint-text",
          "signature": "m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#squote",
          "type": "function"
        },
        "index": {
          "description": "The document squote contains single quote",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "squote",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:squote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n   \"'\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "squotes",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#squotes",
          "type": "function"
        },
        "index": {
          "description": "Document squotes encloses document with single quotes",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "squotes",
          "normalized": "a Doc-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:squotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(string s)\u003c/code\u003e concatenates all characters in \u003ccode\u003es\u003c/code\u003e\n   using \u003ccode\u003eline\u003c/code\u003e for newline characters and \u003ccode\u003echar\u003c/code\u003e for all other\n   characters. It is used instead of \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e whenever the text\n   contains newline characters.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "string",
          "package": "wl-pprint-text",
          "signature": "Text -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#string",
          "type": "function"
        },
        "index": {
          "description": "The document string concatenates all characters in using line for newline characters and char for all other characters It is used instead of text whenever the text contains newline characters",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "string",
          "normalized": "Text-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Text-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n   string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n   string contains newline characters, the function \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e should\n   be used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "text",
          "package": "wl-pprint-text",
          "signature": "Text -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#text",
          "type": "function"
        },
        "index": {
          "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "text",
          "normalized": "Text-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "Text-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n   encloses them in parenthesis. The documents are rendered\n   horizontally if that fits the page. Otherwise they are aligned\n   vertically. All comma separators are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "tupled",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#tupled",
          "type": "function"
        },
        "index": {
          "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "tupled",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:tupled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   vertically with \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n   inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "vcat",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "The document vcat xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vcat all documents are directly concatenated",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "vcat",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   vertically with \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n   inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   some text\n   to\n   lay\n   out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n   their first element\n\u003c/p\u003e\u003cpre\u003e test = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n   some text\n        to\n        lay\n        out\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "vsep",
          "package": "wl-pprint-text",
          "signature": "m [Doc] -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#vsep",
          "type": "function"
        },
        "index": {
          "description": "The document vsep xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is laid out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "vsep",
          "normalized": "a[Doc]-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m[Doc]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "width",
          "package": "wl-pprint-text",
          "signature": "m Doc -\u003e m (Int -\u003e Doc) -\u003e m Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text-Monadic.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text Monadic",
          "module": "Text.PrettyPrint.Leijen.Text.Monadic",
          "name": "width",
          "normalized": "a Doc-\u003ea(Int-\u003eDoc)-\u003ea Doc",
          "package": "wl-pprint-text",
          "signature": "m Doc-\u003em(Int-\u003eDoc)-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text-Monadic.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library is a port of the \u003cem\u003ewl-pprint\u003c/em\u003e package to use \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values rather than \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003ePretty print module based on Philip Wadler's \"prettier printer\"\n\u003c/p\u003e\u003cpre\u003e\n      \"A prettier printer\"\n      Draft paper, April 1997, revised March 1998.\n      \u003ca\u003ehttp://cm.bell-labs.com/cm/cs/who/wadler/papers/prettier/prettier.ps\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003ePPrint is an implementation of the pretty printing combinators\n described by Philip Wadler (1997). In their bare essence, the\n combinators of Wadler are not expressive enough to describe some\n commonly occurring layouts. The PPrint library adds new primitives\n to describe these layouts and works well in practice.\n\u003c/p\u003e\u003cp\u003eThe library is based on a single way to concatenate documents,\n which is associative and has both a left and right unit.  This\n simple design leads to an efficient and short implementation. The\n simplicity is reflected in the predictable behaviour of the\n combinators which make them easy to use in practice.\n\u003c/p\u003e\u003cp\u003eA thorough description of the primitive combinators and their\n implementation can be found in Philip Wadler's paper\n (1997). Additions and the main differences with his original paper\n are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The nil document is called empty.\n\u003c/li\u003e\u003cli\u003e The above combinator is called \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e. The operator \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is used\n   for soft line breaks.\n\u003c/li\u003e\u003cli\u003e There are three new primitives: \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003efillBreak\u003c/a\u003e\u003c/code\u003e. These are very useful in practice.\n\u003c/li\u003e\u003cli\u003e Lots of other useful combinators, like \u003ccode\u003e\u003ca\u003efillSep\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e There are two renderers, \u003ccode\u003e\u003ca\u003erenderPretty\u003c/a\u003e\u003c/code\u003e for pretty printing and\n   \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e for compact output. The pretty printing algorithm\n   also uses a ribbon-width now for even prettier output.\n\u003c/li\u003e\u003cli\u003e There are two displayers, \u003ccode\u003e\u003ca\u003edisplayT\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values and \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e\n   for file based output.\n\u003c/li\u003e\u003cli\u003e There is a \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e class.\n\u003c/li\u003e\u003cli\u003e The implementation uses optimised representations and strictness\n   annotations.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWays that this library differs from \u003cem\u003ewl-pprint\u003c/em\u003e (apart from using\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Smarter treatment of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e sub-documents (partially copied over\n   from the \u003cem\u003epretty\u003c/em\u003e library).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Text",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This library is port of the wl-pprint package to use Text values rather than String Pretty print module based on Philip Wadler prettier printer prettier printer Draft paper April revised March http cm.bell-labs.com cm cs who wadler papers prettier prettier.ps PPrint is an implementation of the pretty printing combinators described by Philip Wadler In their bare essence the combinators of Wadler are not expressive enough to describe some commonly occurring layouts The PPrint library adds new primitives to describe these layouts and works well in practice The library is based on single way to concatenate documents which is associative and has both left and right unit This simple design leads to an efficient and short implementation The simplicity is reflected in the predictable behaviour of the combinators which make them easy to use in practice thorough description of the primitive combinators and their implementation can be found in Philip Wadler paper Additions and the main differences with his original paper are The nil document is called empty The above combinator is called The operator is used for soft line breaks There are three new primitives align fill and fillBreak These are very useful in practice Lots of other useful combinators like fillSep and list There are two renderers renderPretty for pretty printing and renderCompact for compact output The pretty printing algorithm also uses ribbon-width now for even prettier output There are two displayers displayT for Text values and displayIO for file based output There is Pretty class The implementation uses optimised representations and strictness annotations Ways that this library differs from wl-pprint apart from using Text rather than String Smarter treatment of empty sub-documents partially copied over from the pretty library",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Text",
          "package": "wl-pprint-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n   prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n   ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" \u003c$\u003e text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n   hello\n   world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Doc",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello text world Which would return the string hello nworld i.e hello world",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Doc",
          "package": "wl-pprint-text",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance\n   Pretty a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the\n   \u003ccode\u003epretty\u003c/code\u003e function is used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Pretty",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "Pretty",
          "package": "wl-pprint-text",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc\u003c/code\u003e represents rendered documents and is\n   used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n   in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n   provides two default display functions \u003ccode\u003edisplayS\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing\n   a function from a \u003ccode\u003eSimpleDoc\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "SimpleDoc",
          "package": "wl-pprint-text",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#SimpleDoc",
          "type": "data"
        },
        "index": {
          "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "SimpleDoc",
          "package": "wl-pprint-text",
          "partial": "Simple Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#t:SimpleDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003elinebreak\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c$$\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with linebreak in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c$\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with line in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c++\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003espacebreak\u003c/a\u003e\u003c/code\u003e in between.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c++\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with spacebreak in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c+\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n   a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e in between.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c+\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with space in between infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   either right next to each other or underneath each other. (infixr\n   5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c//\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%2F%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c//\u003e) \u003c//\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   with a \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e\n   either next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or\n   underneath each other. (infixr 5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c/\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and document\n   \u003ccode\u003ey\u003c/code\u003e. It is an associative operation having \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e as a left and\n   right unit.  (infixr 6)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c\u003e)",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "The document concatenates document and document It is an associative operation having empty as left and right unit infixr",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Doc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n   level set to the current column. It is used for example to\n   implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n   regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y = align (x \u003c$\u003e y)\n\u003c/pre\u003e\u003cpre\u003e test = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   hi nice\n      world\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "align",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#align",
          "type": "function"
        },
        "index": {
          "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align test text hi text nice text world which will be laid out as hi nice world",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "align",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n   \"\u003e\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "angles",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#angles",
          "type": "function"
        },
        "index": {
          "description": "Document angles encloses document in angles and",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "angles",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "backslash",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#backslash",
          "type": "function"
        },
        "index": {
          "description": "The document backslash contains back slash",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "backslash",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:backslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(bool b)\u003c/code\u003e shows the literal boolean \u003ccode\u003eb\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "bool",
          "package": "wl-pprint-text",
          "signature": "Bool -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#bool",
          "type": "function"
        },
        "index": {
          "description": "The document bool shows the literal boolean using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "bool",
          "normalized": "Bool-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Bool-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n   \"}\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "braces",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Document braces encloses document in braces and",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "braces",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n   \"[\" and \"]\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "brackets",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Document brackets encloses document in square brackets and",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "brackets",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically\n   with \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs = group (vcat xs)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "cat",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#cat",
          "type": "function"
        },
        "index": {
          "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with cat xs group vcat xs",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "cat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n   character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n   should be used for line breaks.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "char",
          "package": "wl-pprint-text",
          "signature": "Char -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#char",
          "type": "function"
        },
        "index": {
          "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "char",
          "normalized": "Char-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Char-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "colon",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#colon",
          "type": "function"
        },
        "index": {
          "description": "The document colon contains colon",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "colon",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to create the document based upon which column it is in.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "column",
          "package": "wl-pprint-text",
          "signature": "(Int -\u003e Doc) -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#column",
          "type": "function"
        },
        "index": {
          "description": "Specifies how to create the document based upon which column it is in",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "column",
          "normalized": "(Int-\u003eDoc)-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "(Int-\u003eDoc)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "comma",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#comma",
          "type": "function"
        },
        "index": {
          "description": "The document comma contains comma",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "comma",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dot",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#dot",
          "type": "function"
        },
        "index": {
          "description": "The document dot contains single dot",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dot",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(double d)\u003c/code\u003e shows the literal double \u003ccode\u003ed\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "double",
          "package": "wl-pprint-text",
          "signature": "Double -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#double",
          "type": "function"
        },
        "index": {
          "description": "The document double shows the literal double using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "double",
          "normalized": "Double-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Double-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dquote",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#dquote",
          "type": "function"
        },
        "index": {
          "description": "The document dquote contains double quote",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dquote",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:dquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n   '\"'.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dquotes",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#dquotes",
          "type": "function"
        },
        "index": {
          "description": "Document dquotes encloses document with double quotes",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "dquotes",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:dquotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty document is, indeed, empty. Although \u003ccode\u003eempty\u003c/code\u003e has no\n   content, it does have a 'height' of 1 and behaves exactly like\n   \u003ccode\u003e(text \"\")\u003c/code\u003e (and is therefore not a unit of \u003ccode\u003e\u003c$\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "empty",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty document is indeed empty Although empty has no content it does have height of and behaves exactly like text and is therefore not unit of",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "empty",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n   documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "enclose",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#enclose",
          "type": "function"
        },
        "index": {
          "description": "The document enclose encloses document between documents and using enclose",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "enclose",
          "normalized": "Doc-\u003eDoc-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:enclose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n   \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by\n   \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits\n   the page. Otherwise they are aligned vertically. All separators\n   are put in front of the elements. For example, the combinator\n   \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is laid out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n   list [10,200,3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   list [10\n        ,200\n        ,3000]\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "encloseSep",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc -\u003e Doc -\u003e [Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#encloseSep",
          "type": "function"
        },
        "index": {
          "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is laid out with page width of as list But when the page width is it is laid out as list",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "encloseSep",
          "normalized": "Doc-\u003eDoc-\u003eDoc-\u003e[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "Sep",
          "signature": "Doc-\u003eDoc-\u003eDoc-\u003e[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:encloseSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "equals",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#equals",
          "type": "function"
        },
        "index": {
          "description": "The document equals contains an equal sign",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "equals",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It then appends\n   \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n   already larger, nothing is appended. This combinator is quite\n   useful in practice to output a list of bindings. The following\n   example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types = [(\"empty\",\"Doc\")\n          ,(\"nest\",\"Int -\u003e Doc -\u003e Doc\")\n          ,(\"linebreak\",\"Doc\")]\n\n ptype (name,tp)\n = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   let empty  :: Doc\n       nest   :: Int -\u003e Doc -\u003e Doc\n       linebreak :: Doc\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fill",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#fill",
          "type": "function"
        },
        "index": {
          "description": "The document fill renders document It then appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is laid out as let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fill",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n   then appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n   width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n   increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine\n   \u003ccode\u003eptype\u003c/code\u003e in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a\n   useful variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n   let empty  :: Doc\n       nest   :: Int -\u003e Doc -\u003e Doc\n       linebreak\n              :: Doc\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillBreak",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#fillBreak",
          "type": "function"
        },
        "index": {
          "description": "The document fillBreak first renders document It then appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillBreak",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "Break",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:fillBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, then\n   inserts a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents\n   in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs = foldr (\u003c//\u003e) empty xs\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillCat",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#fillCat",
          "type": "function"
        },
        "index": {
          "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page then inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillCat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "Cat",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:fillCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, then\n   inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n   \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs = foldr (\u003c/\u003e) empty xs\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillSep",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#fillSep",
          "type": "function"
        },
        "index": {
          "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page then inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "fillSep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "Sep",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:fillSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(float f)\u003c/code\u003e shows the literal float \u003ccode\u003ef\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "float",
          "package": "wl-pprint-text",
          "signature": "Float -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#float",
          "type": "function"
        },
        "index": {
          "description": "The document float shows the literal float using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "float",
          "normalized": "Float-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Float-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n   layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n   document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n   that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered\n   without any changes.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "group",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "group",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n   \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n   current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n   indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n   the hang combinator\n       indents these\n       words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x = align (nest i x)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hang",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#hang",
          "type": "function"
        },
        "index": {
          "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hang",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hcat",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "The document hcat xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hsep",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#hsep",
          "type": "function"
        },
        "index": {
          "description": "The document hsep xs concatenates all documents xs horizontally with",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "hsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n       the indent\n       combinator\n       indents these\n       words !\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "indent",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#indent",
          "type": "function"
        },
        "index": {
          "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "indent",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(int i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "int",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#int",
          "type": "function"
        },
        "index": {
          "description": "The document int shows the literal integer using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "int",
          "normalized": "Int-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(integer i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "integer",
          "package": "wl-pprint-text",
          "signature": "Integer -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#integer",
          "type": "function"
        },
        "index": {
          "description": "The document integer shows the literal integer using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "integer",
          "normalized": "Integer-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Integer-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "langle",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#langle",
          "type": "function"
        },
        "index": {
          "description": "The document langle contains left angle",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "langle",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:langle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lbrace",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#lbrace",
          "type": "function"
        },
        "index": {
          "description": "The document lbrace contains left brace",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lbrace",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lbracket",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#lbracket",
          "type": "function"
        },
        "index": {
          "description": "The document lbracket contains left square bracket",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lbracket",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:lbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n   current nesting level. Document \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \"\n   \")\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e or if rendered with\n   \u003ccode\u003e\u003ca\u003erenderOneLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "line",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#line",
          "type": "function"
        },
        "index": {
          "description": "The line document advances to the next line and indents to the current nesting level Document line behaves like text if the line break is undone by group or if rendered with renderOneLine",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "line",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n   the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "linebreak",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#linebreak",
          "type": "function"
        },
        "index": {
          "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "linebreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:linebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n   encloses them in square brackets. The documents are rendered\n   horizontally if that fits the page. Otherwise they are aligned\n   vertically. All comma separators are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "list",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#list",
          "type": "function"
        },
        "index": {
          "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "list",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lparen",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#lparen",
          "type": "function"
        },
        "index": {
          "description": "The document lparen contains left parenthesis",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "lparen",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n   indentation level increased by \u003ccode\u003ei\u003c/code\u003e (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" \u003c$\u003e text \"world\") \u003c$\u003e text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n   hello\n     world\n   !\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "nest",
          "package": "wl-pprint-text",
          "signature": "Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#nest",
          "type": "function"
        },
        "index": {
          "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello text world text outputs as hello world",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "nest",
          "normalized": "Int-\u003eDoc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Int-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to nest the document based upon which column it is\n   being nested in.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "nesting",
          "package": "wl-pprint-text",
          "signature": "(Int -\u003e Doc) -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#nesting",
          "type": "function"
        },
        "index": {
          "description": "Specifies how to nest the document based upon which column it is being nested in",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "nesting",
          "normalized": "(Int-\u003eDoc)-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "(Int-\u003eDoc)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:nesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n   and \")\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "parens",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Document parens encloses document in parenthesis and",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "parens",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "pretty",
          "package": "wl-pprint-text",
          "signature": "a -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#pretty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "prettyList",
          "package": "wl-pprint-text",
          "signature": "[a] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#prettyList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "prettyList",
          "normalized": "[a]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "List",
          "signature": "[a]-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:prettyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n   document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is laid out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n   (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   (words,\n    in,\n    a,\n    tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n   at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "punctuate",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e [Doc] -\u003e [Doc]",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#punctuate",
          "type": "function"
        },
        "index": {
          "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is laid out on page width of as words in tuple But when the page width is it is laid out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "punctuate",
          "normalized": "Doc-\u003e[Doc]-\u003e[Doc]",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003e[Doc]-\u003e[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rangle",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#rangle",
          "type": "function"
        },
        "index": {
          "description": "The document rangle contains right angle",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rangle",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(rational r)\u003c/code\u003e shows the literal rational \u003ccode\u003er\u003c/code\u003e using\n   \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rational",
          "package": "wl-pprint-text",
          "signature": "Rational -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#rational",
          "type": "function"
        },
        "index": {
          "description": "The document rational shows the literal rational using text",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rational",
          "normalized": "Rational-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Rational-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rbrace",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#rbrace",
          "type": "function"
        },
        "index": {
          "description": "The document rbrace contains right brace",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rbrace",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rbracket",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#rbracket",
          "type": "function"
        },
        "index": {
          "description": "The document rbracket contains right square bracket",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rbracket",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:rbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rparen",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#rparen",
          "type": "function"
        },
        "index": {
          "description": "The document rparen contains right parenthesis",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "rparen",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "semi",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#semi",
          "type": "function"
        },
        "index": {
          "description": "The document semi contains semi colon",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "semi",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n   semi colons and encloses them in braces. The documents are\n   rendered horizontally if that fits the page. Otherwise they are\n   aligned vertically. All semi colons are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "semiBraces",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#semiBraces",
          "type": "function"
        },
        "index": {
          "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "semiBraces",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "partial": "Braces",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:semiBraces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n   horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically\n   with \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs = group (vsep xs)\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "sep",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#sep",
          "type": "function"
        },
        "index": {
          "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with sep xs group vsep xs",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "sep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n   output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softbreak = group linebreak\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "softbreak",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#softbreak",
          "type": "function"
        },
        "index": {
          "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line softbreak group linebreak",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "softbreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:softbreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n   output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softline = group line\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "softline",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#softline",
          "type": "function"
        },
        "index": {
          "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line softline group line",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "softline",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:softline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "space",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#space",
          "type": "function"
        },
        "index": {
          "description": "The document space contains single space space",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "space",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003espacebreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e when rendered normally\n but like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e when using \u003ccode\u003e\u003ca\u003erenderCompact\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderOneLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "spacebreak",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#spacebreak",
          "type": "function"
        },
        "index": {
          "description": "The document spacebreak behaves like space when rendered normally but like empty when using renderCompact or renderOneLine",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "spacebreak",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:spacebreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "squote",
          "package": "wl-pprint-text",
          "signature": "Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#squote",
          "type": "function"
        },
        "index": {
          "description": "The document squote contains single quote",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "squote",
          "package": "wl-pprint-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:squote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n   \"'\".\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "squotes",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#squotes",
          "type": "function"
        },
        "index": {
          "description": "Document squotes encloses document with single quotes",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "squotes",
          "normalized": "Doc-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:squotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(string s)\u003c/code\u003e concatenates all characters in \u003ccode\u003es\u003c/code\u003e\n   using \u003ccode\u003eline\u003c/code\u003e for newline characters and \u003ccode\u003echar\u003c/code\u003e for all other\n   characters. It is used instead of \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e whenever the text\n   contains newline characters.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "string",
          "package": "wl-pprint-text",
          "signature": "Text -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#string",
          "type": "function"
        },
        "index": {
          "description": "The document string concatenates all characters in using line for newline characters and char for all other characters It is used instead of text whenever the text contains newline characters",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "string",
          "normalized": "Text-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Text-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n   string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n   string contains newline characters, the function \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e should\n   be used.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "text",
          "package": "wl-pprint-text",
          "signature": "Text -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#text",
          "type": "function"
        },
        "index": {
          "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "text",
          "normalized": "Text-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Text-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n   encloses them in parenthesis. The documents are rendered\n   horizontally if that fits the page. Otherwise they are aligned\n   vertically. All comma separators are put in front of the\n   elements.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "tupled",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#tupled",
          "type": "function"
        },
        "index": {
          "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "tupled",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:tupled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   vertically with \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n   inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "vcat",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "The document vcat xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vcat all documents are directly concatenated",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "vcat",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n   vertically with \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n   inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is laid out as:\n\u003c/p\u003e\u003cpre\u003e\n   some text\n   to\n   lay\n   out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n   their first element\n\u003c/p\u003e\u003cpre\u003e test = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n   some text\n        to\n        lay\n        out\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "vsep",
          "package": "wl-pprint-text",
          "signature": "[Doc] -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#vsep",
          "type": "function"
        },
        "index": {
          "description": "The document vsep xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is laid out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "vsep",
          "normalized": "[Doc]-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "[Doc]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "width",
          "package": "wl-pprint-text",
          "signature": "Doc -\u003e (Int -\u003e Doc) -\u003e Doc",
          "source": "src/Text-PrettyPrint-Leijen-Text.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Leijen Text",
          "module": "Text.PrettyPrint.Leijen.Text",
          "name": "width",
          "normalized": "Doc-\u003e(Int-\u003eDoc)-\u003eDoc",
          "package": "wl-pprint-text",
          "signature": "Doc-\u003e(Int-\u003eDoc)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wl-pprint-text/docs/Text-PrettyPrint-Leijen-Text.html#v:width"
      }
    }
  ]
]