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
        "word": "prettify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library was based on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e by Jeuring and \n Meijer.\n\u003c/p\u003e\u003cp\u003eHeavily modified by Simon Peyton Jones (December 1996).\n\u003c/p\u003e\u003cp\u003eLightly modified by Hans Hoglund (October 2012).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pretty",
          "name": "Pretty",
          "package": "prettify",
          "source": "src/Text-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "This library was based on The Design of Pretty-printing Library by Jeuring and Meijer Heavily modified by Simon Peyton Jones December Lightly modified by Hans Hoglund October",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Pretty",
          "package": "prettify",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "Mode",
          "package": "prettify",
          "source": "src/Text-Pretty.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Rendering mode",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Mode",
          "package": "prettify",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that can be pretty-printed.                                                    \n\u003c/p\u003e\u003cp\u003eThe Pretty class is similar to \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, but converts values to \u003ccode\u003e\u003ca\u003ePrinter\u003c/a\u003e\u003c/code\u003es instead \n of \u003ccode\u003eStrings\u003c/code\u003e. A printer is essentially a string with some extra structural information\n such as length and indentation.\n\u003c/p\u003e\u003cp\u003eNote that the instances for primitive types, lists and tuples all satisfy\n\u003c/p\u003e\u003cpre\u003e (show . pretty) x == show x\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "Pretty",
          "package": "prettify",
          "source": "src/Text-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Class of types that can be pretty-printed The Pretty class is similar to Show but converts values to Printer instead of Strings printer is essentially string with some extra structural information such as length and indentation Note that the instances for primitive types lists and tuples all satisfy show pretty show",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Pretty",
          "package": "prettify",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract type of printers.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "Printer",
          "package": "prettify",
          "source": "src/Text-Pretty.html#Printer",
          "type": "data"
        },
        "index": {
          "description": "The abstract type of printers",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Printer",
          "package": "prettify",
          "partial": "Printer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA printing style.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "Style",
          "package": "prettify",
          "source": "src/Text-Pretty.html#Style",
          "type": "data"
        },
        "index": {
          "description": "printing style",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Style",
          "package": "prettify",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "(\u003c+\u003e)",
          "package": "prettify",
          "signature": "Printer -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Printer-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "(\u003c-\u003e)",
          "package": "prettify",
          "signature": "Printer -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Beside is associative with identity empty",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Printer-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e\u003c//\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "(\u003c//\u003e)",
          "package": "prettify",
          "signature": "Printer -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#%3C%2F%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Above with no overlapping is associative with identity empty",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "(\u003c//\u003e) \u003c//\u003e",
          "normalized": "Printer-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    string \"hi\" \u003c/\u003e nest 5 (string \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Pretty",
          "name": "(\u003c/\u003e)",
          "package": "prettify",
          "signature": "Printer -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example string hi nest string there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Printer-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "LeftMode",
          "package": "prettify",
          "signature": "LeftMode",
          "source": "src/Text-Pretty.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "No indentation infinitely long lines",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "LeftMode",
          "package": "prettify",
          "partial": "Left Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:LeftMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "OneLineMode",
          "package": "prettify",
          "signature": "OneLineMode",
          "source": "src/Text-Pretty.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "All on one line",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "OneLineMode",
          "package": "prettify",
          "partial": "One Line Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:OneLineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "PageMode",
          "package": "prettify",
          "signature": "PageMode",
          "source": "src/Text-Pretty.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Normal",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "PageMode",
          "package": "prettify",
          "partial": "Page Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:PageMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "Style",
          "package": "prettify",
          "signature": "Style",
          "source": "src/Text-Pretty.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "Style",
          "package": "prettify",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "ZigZagMode",
          "package": "prettify",
          "signature": "ZigZagMode",
          "source": "src/Text-Pretty.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "With zig-zag cuts",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "ZigZagMode",
          "package": "prettify",
          "partial": "Zig Zag Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:ZigZagMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in \u003ccode\u003e{...}\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "braces",
          "package": "prettify",
          "signature": "Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "braces",
          "normalized": "Printer-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in \u003ccode\u003e[...]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "brackets",
          "package": "prettify",
          "signature": "Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "brackets",
          "normalized": "Printer-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "cat",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#cat",
          "type": "function"
        },
        "index": {
          "description": "Either hcat or vcat",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "cat",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA printer of height and width 1, containing a literal character.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "char",
          "package": "prettify",
          "signature": "Char -\u003e Printer",
          "source": "src/Text-Pretty.html#char",
          "type": "function"
        },
        "index": {
          "description": "printer of height and width containing literal character",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "char",
          "normalized": "Char-\u003ePrinter",
          "package": "prettify",
          "signature": "Char-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "double",
          "package": "prettify",
          "signature": "Double -\u003e Printer",
          "source": "src/Text-Pretty.html#double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "double",
          "normalized": "Double-\u003ePrinter",
          "package": "prettify",
          "signature": "Double-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in \u003ccode\u003e\"...\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "doubleQuotes",
          "package": "prettify",
          "signature": "Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#doubleQuotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "doubleQuotes",
          "normalized": "Printer-\u003ePrinter",
          "package": "prettify",
          "partial": "Quotes",
          "signature": "Printer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:doubleQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty printer, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c//\u003e\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "empty",
          "package": "prettify",
          "signature": "Printer",
          "source": "src/Text-Pretty.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty printer with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "empty",
          "package": "prettify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "fcat",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#fcat",
          "type": "function"
        },
        "index": {
          "description": "Paragraph fill version of cat",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "fcat",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:fcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "float",
          "package": "prettify",
          "signature": "Float -\u003e Printer",
          "source": "src/Text-Pretty.html#float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "float",
          "normalized": "Float-\u003ePrinter",
          "package": "prettify",
          "signature": "Float-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "fsep",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#fsep",
          "type": "function"
        },
        "index": {
          "description": "Paragraph fill version of sep",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "fsep",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:fsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "hang",
          "package": "prettify",
          "signature": "Printer -\u003e Int -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#hang",
          "type": "function"
        },
        "index": {
          "description": "hang d1 d2 sep d1 nest d2",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "hang",
          "normalized": "Printer-\u003eInt-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003eInt-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "hcat",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "hcat",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "hsep",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#hsep",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "hsep",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with initiator.\n\u003c/p\u003e\u003cpre\u003e initBy q [x1,x2..xn] = q \u003c\u003e x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "initBy",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#initBy",
          "type": "function"
        },
        "index": {
          "description": "Join with initiator initBy x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "initBy",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:initBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with initiator followed by space.\n\u003c/p\u003e\u003cpre\u003e initByS q [x1,x2..xn] = q \u003c+\u003e x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e .. xn.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "initByS",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#initByS",
          "type": "function"
        },
        "index": {
          "description": "Join with initiator followed by space initByS x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "initByS",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:initByS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "int",
          "package": "prettify",
          "signature": "Int -\u003e Printer",
          "source": "src/Text-Pretty.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "int",
          "normalized": "Int-\u003ePrinter",
          "package": "prettify",
          "signature": "Int-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "integer",
          "package": "prettify",
          "signature": "Integer -\u003e Printer",
          "source": "src/Text-Pretty.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "integer",
          "normalized": "Integer-\u003ePrinter",
          "package": "prettify",
          "signature": "Integer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the printer is empty\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "isEmpty",
          "package": "prettify",
          "signature": "Printer -\u003e Bool",
          "source": "src/Text-Pretty.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the printer is empty",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "isEmpty",
          "normalized": "Printer-\u003eBool",
          "package": "prettify",
          "partial": "Empty",
          "signature": "Printer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "lineLength",
          "package": "prettify",
          "signature": "Int",
          "source": "src/Text-Pretty.html#Style",
          "type": "function"
        },
        "index": {
          "description": "Length of line in chars",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "lineLength",
          "package": "prettify",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:lineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe printing mode\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "mode",
          "package": "prettify",
          "signature": "Mode",
          "source": "src/Text-Pretty.html#Style",
          "type": "function"
        },
        "index": {
          "description": "The printing mode",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "mode",
          "package": "prettify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNest (or indent) a printer by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "nest",
          "package": "prettify",
          "signature": "Int -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#nest",
          "type": "function"
        },
        "index": {
          "description": "Nest or indent printer by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "nest",
          "normalized": "Int-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Int-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in \u003ccode\u003e(...)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "parens",
          "package": "prettify",
          "signature": "Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "parens",
          "normalized": "Printer-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a printer for the given value.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "pretty",
          "package": "prettify",
          "signature": "a -\u003e Printer",
          "source": "src/Text-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "description": "Return printer for the given value",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "pretty",
          "normalized": "a-\u003ePrinter",
          "package": "prettify",
          "signature": "a-\u003ePrinter",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method prettyList is provided to allow the programmer to give a\n   specialised way of printing lists of values. For example, this is used by\n   the predefined Pretty instance of the Char type, where values of type String\n   should be shown in double quotes, rather than between square brackets.    \n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "prettyList",
          "package": "prettify",
          "signature": "[a] -\u003e Printer",
          "source": "src/Text-Pretty.html#prettyList",
          "type": "method"
        },
        "index": {
          "description": "The method prettyList is provided to allow the programmer to give specialised way of printing lists of values For example this is used by the predefined Pretty instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "prettyList",
          "normalized": "[a]-\u003ePrinter",
          "package": "prettify",
          "partial": "List",
          "signature": "[a]-\u003ePrinter",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:prettyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in \u003ccode\u003e'...'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "quotes",
          "package": "prettify",
          "signature": "Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#quotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "quotes",
          "normalized": "Printer-\u003ePrinter",
          "package": "prettify",
          "signature": "Printer-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:quotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pretty",
          "name": "rational",
          "package": "prettify",
          "signature": "Rational -\u003e Printer",
          "source": "src/Text-Pretty.html#rational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "rational",
          "normalized": "Rational-\u003ePrinter",
          "package": "prettify",
          "signature": "Rational-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "ribbonsPerLine",
          "package": "prettify",
          "signature": "Float",
          "source": "src/Text-Pretty.html#Style",
          "type": "function"
        },
        "index": {
          "description": "Ratio of ribbon length to line length",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "ribbonsPerLine",
          "package": "prettify",
          "partial": "Per Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:ribbonsPerLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the \u003ccode\u003ePrinter\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "runPrinter",
          "package": "prettify",
          "signature": "Printer -\u003e String",
          "source": "src/Text-Pretty.html#runPrinter",
          "type": "function"
        },
        "index": {
          "description": "Render the Printer to String using the default Style",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "runPrinter",
          "normalized": "Printer-\u003eString",
          "package": "prettify",
          "partial": "Printer",
          "signature": "Printer-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:runPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the \u003ccode\u003ePrinter\u003c/code\u003e to a String using the given \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "runPrinterStyle",
          "package": "prettify",
          "signature": "Style -\u003e Printer -\u003e String",
          "source": "src/Text-Pretty.html#runPrinterStyle",
          "type": "function"
        },
        "index": {
          "description": "Render the Printer to String using the given Style",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "runPrinterStyle",
          "normalized": "Style-\u003ePrinter-\u003eString",
          "package": "prettify",
          "partial": "Printer Style",
          "signature": "Style-\u003ePrinter-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:runPrinterStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "sep",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#sep",
          "type": "function"
        },
        "index": {
          "description": "Either hsep or vcat",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "sep",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with separator.\n\u003c/p\u003e\u003cpre\u003e sepBy q [x1,x2..xn] = x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "sepBy",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "Join with separator sepBy x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "sepBy",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with separator followed by space.\n\u003c/p\u003e\u003cpre\u003e sepByS q [x1,x2..xn] = x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e.. xn.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "sepByS",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#sepByS",
          "type": "function"
        },
        "index": {
          "description": "Join with separator followed by space sepByS x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "sepByS",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sepByS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome string with any width. (\u003ccode\u003estring s = sizedText (length s) s\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "sizedText",
          "package": "prettify",
          "signature": "Int -\u003e String -\u003e Printer",
          "source": "src/Text-Pretty.html#sizedText",
          "type": "function"
        },
        "index": {
          "description": "Some string with any width string sizedText length",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "sizedText",
          "normalized": "Int-\u003eString-\u003ePrinter",
          "package": "prettify",
          "partial": "Text",
          "signature": "Int-\u003eString-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sizedText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA printer of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "string",
          "package": "prettify",
          "signature": "String -\u003e Printer",
          "source": "src/Text-Pretty.html#string",
          "type": "function"
        },
        "index": {
          "description": "printer of height containing literal string string satisfies the following laws string string string string if non-empty The side condition on the last law is necessary because string has height while empty has no height",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "string",
          "normalized": "String-\u003ePrinter",
          "package": "prettify",
          "signature": "String-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "style",
          "package": "prettify",
          "signature": "Style",
          "source": "src/Text-Pretty.html#style",
          "type": "function"
        },
        "index": {
          "description": "The default style mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "style",
          "package": "prettify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with terminator.\n\u003c/p\u003e\u003cpre\u003e termBy q [x1,x2..xn] = x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn \u003c\u003e q.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "termBy",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#termBy",
          "type": "function"
        },
        "index": {
          "description": "Join with terminator termBy x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "termBy",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:termBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with terminator followed by space.\n\u003c/p\u003e\u003cpre\u003e termByS q [x1,x2..xn] = x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e .. xn \u003c\u003e q.\n\u003c/pre\u003e",
          "module": "Text.Pretty",
          "name": "termByS",
          "package": "prettify",
          "signature": "Printer -\u003e [Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#termByS",
          "type": "function"
        },
        "index": {
          "description": "Join with terminator followed by space termByS x1 x2..xn x1 x2 xn",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "termByS",
          "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
          "package": "prettify",
          "partial": "By",
          "signature": "Printer-\u003e[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:termByS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "vcat",
          "package": "prettify",
          "signature": "[Printer] -\u003e Printer",
          "source": "src/Text-Pretty.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "List version of",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "vcat",
          "normalized": "[Printer]-\u003ePrinter",
          "package": "prettify",
          "signature": "[Printer]-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap printer in the given characters.\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "wrap",
          "package": "prettify",
          "signature": "Char -\u003e Char -\u003e Printer -\u003e Printer",
          "source": "src/Text-Pretty.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Wrap printer in the given characters",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "wrap",
          "normalized": "Char-\u003eChar-\u003ePrinter-\u003ePrinter",
          "package": "prettify",
          "signature": "Char-\u003eChar-\u003ePrinter-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome string, but without any width. Use for non-printing string\n such as a HTML or Latex tags\n\u003c/p\u003e",
          "module": "Text.Pretty",
          "name": "zeroWidthText",
          "package": "prettify",
          "signature": "String -\u003e Printer",
          "source": "src/Text-Pretty.html#zeroWidthText",
          "type": "function"
        },
        "index": {
          "description": "Some string but without any width Use for non-printing string such as HTML or Latex tags",
          "hierarchy": "Text Pretty",
          "module": "Text.Pretty",
          "name": "zeroWidthText",
          "normalized": "String-\u003ePrinter",
          "package": "prettify",
          "partial": "Width Text",
          "signature": "String-\u003ePrinter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:zeroWidthText"
      }
    }
  ]
]