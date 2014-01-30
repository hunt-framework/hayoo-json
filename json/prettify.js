[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library was based on \u003cem\u003eThe Design of a Pretty-printing Library\u003c/em\u003e by Jeuring and \n Meijer.\n\u003c/p\u003e\u003cp\u003eHeavily modified by Simon Peyton Jones (December 1996).\n\u003c/p\u003e\u003cp\u003eLightly modified by Hans Hoglund (October 2012).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "module",
        "fct-source": "src/Text-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "This library was based on The Design of Pretty-printing Library by Jeuring and Meijer Heavily modified by Simon Peyton Jones December Lightly modified by Hans Hoglund October",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "prettify",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eRendering mode.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "data",
        "fct-source": "src/Text-Pretty.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Rendering mode",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Mode",
        "normalized": "",
        "package": "prettify",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types that can be pretty-printed.                                                    \n\u003c/p\u003e\u003cp\u003eThe Pretty class is similar to \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, but converts values to \u003ccode\u003e\u003ca\u003ePrinter\u003c/a\u003e\u003c/code\u003es instead \n of \u003ccode\u003eStrings\u003c/code\u003e. A printer is essentially a string with some extra structural information\n such as length and indentation.\n\u003c/p\u003e\u003cp\u003eNote that the instances for primitive types, lists and tuples all satisfy\n\u003c/p\u003e\u003cpre\u003e (show . pretty) x == show x\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "class",
        "fct-source": "src/Text-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "Class of types that can be pretty-printed The Pretty class is similar to Show but converts values to Printer instead of Strings printer is essentially string with some extra structural information such as length and indentation Note that the instances for primitive types lists and tuples all satisfy show pretty show",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "prettify",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Printer",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of printers.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "data",
        "fct-source": "src/Text-Pretty.html#Printer",
        "fct-type": "data",
        "title": "Printer"
      },
      "index": {
        "description": "The abstract type of printers",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Printer",
        "normalized": "",
        "package": "prettify",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eA printing style.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "data",
        "fct-source": "src/Text-Pretty.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "printing style",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Style",
        "normalized": "",
        "package": "prettify",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside, separated by space, unless one of the arguments is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Beside separated by space unless one of the arguments is empty is associative with identity empty",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Printer-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBeside.\n \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "Beside is associative with identity empty",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "Printer-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, with no overlapping.\n \u003ccode\u003e\u003ca\u003e\u003c//\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#%3C%2F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "Above with no overlapping is associative with identity empty",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "Printer-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbove, except that if the last line of the first argument stops\n at least one position before the first line of the second begins,\n these two lines are overlapped.  For example:\n\u003c/p\u003e\u003cpre\u003e    string \"hi\" \u003c/\u003e nest 5 (string \"there\")\n\u003c/pre\u003e\u003cp\u003elays out as\n\u003c/p\u003e\u003cpre\u003e    hi   there\n\u003c/pre\u003e\u003cp\u003erather than\n\u003c/p\u003e\u003cpre\u003e    hi\n         there\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and also satisfies\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z = x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e (y \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e z)\u003c/code\u003e, if \u003ccode\u003ey\u003c/code\u003e non-empty.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "Above except that if the last line of the first argument stops at least one position before the first line of the second begins these two lines are overlapped For example string hi nest string there lays out as hi there rather than hi there is associative with identity empty and also satisfies if non-empty",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Printer-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:LeftMode",
      "description": {
        "fct-descr": "\u003cp\u003eNo indentation, infinitely long lines\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "LeftMode",
        "fct-source": "src/Text-Pretty.html#Mode",
        "fct-type": "function",
        "title": "LeftMode"
      },
      "index": {
        "description": "No indentation infinitely long lines",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "LeftMode",
        "normalized": "",
        "package": "prettify",
        "partial": "Left Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:OneLineMode",
      "description": {
        "fct-descr": "\u003cp\u003eAll on one line\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "OneLineMode",
        "fct-source": "src/Text-Pretty.html#Mode",
        "fct-type": "function",
        "title": "OneLineMode"
      },
      "index": {
        "description": "All on one line",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "OneLineMode",
        "normalized": "",
        "package": "prettify",
        "partial": "One Line Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:PageMode",
      "description": {
        "fct-descr": "\u003cp\u003eNormal\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "PageMode",
        "fct-source": "src/Text-Pretty.html#Mode",
        "fct-type": "function",
        "title": "PageMode"
      },
      "index": {
        "description": "Normal",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "PageMode",
        "normalized": "",
        "package": "prettify",
        "partial": "Page Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:Style",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Style",
        "fct-source": "src/Text-Pretty.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "Style",
        "normalized": "",
        "package": "prettify",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:ZigZagMode",
      "description": {
        "fct-descr": "\u003cp\u003eWith zig-zag cuts\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "ZigZagMode",
        "fct-source": "src/Text-Pretty.html#Mode",
        "fct-type": "function",
        "title": "ZigZagMode"
      },
      "index": {
        "description": "With zig-zag cuts",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "ZigZagMode",
        "normalized": "",
        "package": "prettify",
        "partial": "Zig Zag Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in \u003ccode\u003e{...}\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Wrap printer in",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "braces",
        "normalized": "Printer-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in \u003ccode\u003e[...]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Wrap printer in",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "brackets",
        "normalized": "Printer-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Either hcat or vcat",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "cat",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eA printer of height and width 1, containing a literal character.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Char -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "printer of height and width containing literal character",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "char",
        "normalized": "Char-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Char-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:double",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Double -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "double",
        "normalized": "Double-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Double-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:doubleQuotes",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in \u003ccode\u003e\"...\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#doubleQuotes",
        "fct-type": "function",
        "title": "doubleQuotes"
      },
      "index": {
        "description": "Wrap printer in",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "doubleQuotes",
        "normalized": "Printer-\u003ePrinter",
        "package": "prettify",
        "partial": "Quotes",
        "signature": "Printer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty printer, with no height and no width.\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c//\u003e\u003c/a\u003e\u003c/code\u003e, and anywhere\n in the argument list for \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efcat\u003c/a\u003e\u003c/code\u003e etc.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer",
        "fct-source": "src/Text-Pretty.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty printer with no height and no width empty is the identity for and and anywhere in the argument list for sep hcat hsep vcat fcat etc",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "empty",
        "normalized": "",
        "package": "prettify",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:fcat",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#fcat",
        "fct-type": "function",
        "title": "fcat"
      },
      "index": {
        "description": "Paragraph fill version of cat",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "fcat",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:float",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Float -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "float",
        "normalized": "Float-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Float-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:fsep",
      "description": {
        "fct-descr": "\u003cp\u003e\"Paragraph fill\" version of \u003ccode\u003e\u003ca\u003esep\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#fsep",
        "fct-type": "function",
        "title": "fsep"
      },
      "index": {
        "description": "Paragraph fill version of sep",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "fsep",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hang",
      "description": {
        "fct-descr": "\u003cpre\u003ehang d1 n d2 = sep [d1, nest n d2]\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Int -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "hang d1 d2 sep d1 nest d2",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "hang",
        "normalized": "Printer-\u003eInt-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003eInt-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "hcat",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "hsep",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:initBy",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with initiator.\n\u003c/p\u003e\u003cpre\u003e initBy q [x1,x2..xn] = q \u003c\u003e x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#initBy",
        "fct-type": "function",
        "title": "initBy"
      },
      "index": {
        "description": "Join with initiator initBy x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "initBy",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:initByS",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with initiator followed by space.\n\u003c/p\u003e\u003cpre\u003e initByS q [x1,x2..xn] = q \u003c+\u003e x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e .. xn.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#initByS",
        "fct-type": "function",
        "title": "initByS"
      },
      "index": {
        "description": "Join with initiator followed by space initByS x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "initByS",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:int",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Int -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "int",
        "normalized": "Int-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Int-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:integer",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Integer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "integer",
        "normalized": "Integer-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Integer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the printer is empty\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Bool",
        "fct-source": "src/Text-Pretty.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns True if the printer is empty",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "isEmpty",
        "normalized": "Printer-\u003eBool",
        "package": "prettify",
        "partial": "Empty",
        "signature": "Printer-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:lineLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength of line, in chars\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Int",
        "fct-source": "src/Text-Pretty.html#Style",
        "fct-type": "function",
        "title": "lineLength"
      },
      "index": {
        "description": "Length of line in chars",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "lineLength",
        "normalized": "",
        "package": "prettify",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe printing mode\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Mode",
        "fct-source": "src/Text-Pretty.html#Style",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "The printing mode",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "mode",
        "normalized": "",
        "package": "prettify",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eNest (or indent) a printer by a given number of positions\n (which may also be negative).  \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e satisfies the laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e 0 x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k' x) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (k+k') x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k z \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k (x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e y) = \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k x \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e k y = x \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is needed because\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is a left identity for \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Int -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "Nest or indent printer by given number of positions which may also be negative nest satisfies the laws nest nest nest nest nest nest nest nest nest nest nest empty empty nest if non-empty The side condition on the last law is needed because empty is left identity for",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "nest",
        "normalized": "Int-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Int-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in \u003ccode\u003e(...)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Wrap printer in",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "parens",
        "normalized": "Printer-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a printer for the given value.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "a -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "Return printer for the given value",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "pretty",
        "normalized": "a-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "a-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:prettyList",
      "description": {
        "fct-descr": "\u003cp\u003eThe method prettyList is provided to allow the programmer to give a\n   specialised way of printing lists of values. For example, this is used by\n   the predefined Pretty instance of the Char type, where values of type String\n   should be shown in double quotes, rather than between square brackets.    \n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[a] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#prettyList",
        "fct-type": "method",
        "title": "prettyList"
      },
      "index": {
        "description": "The method prettyList is provided to allow the programmer to give specialised way of printing lists of values For example this is used by the predefined Pretty instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "prettyList",
        "normalized": "[a]-\u003ePrinter",
        "package": "prettify",
        "partial": "List",
        "signature": "[a]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:quotes",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in \u003ccode\u003e'...'\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#quotes",
        "fct-type": "function",
        "title": "quotes"
      },
      "index": {
        "description": "Wrap printer in",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "quotes",
        "normalized": "Printer-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Printer-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:rational",
      "description": {
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Rational -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#rational",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "rational",
        "normalized": "Rational-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Rational-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:ribbonsPerLine",
      "description": {
        "fct-descr": "\u003cp\u003eRatio of ribbon length to line length\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Float",
        "fct-source": "src/Text-Pretty.html#Style",
        "fct-type": "function",
        "title": "ribbonsPerLine"
      },
      "index": {
        "description": "Ratio of ribbon length to line length",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "ribbonsPerLine",
        "normalized": "",
        "package": "prettify",
        "partial": "Per Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:runPrinter",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003ePrinter\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e String",
        "fct-source": "src/Text-Pretty.html#runPrinter",
        "fct-type": "function",
        "title": "runPrinter"
      },
      "index": {
        "description": "Render the Printer to String using the default Style",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "runPrinter",
        "normalized": "Printer-\u003eString",
        "package": "prettify",
        "partial": "Printer",
        "signature": "Printer-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:runPrinterStyle",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003ePrinter\u003c/code\u003e to a String using the given \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Style -\u003e Printer -\u003e String",
        "fct-source": "src/Text-Pretty.html#runPrinterStyle",
        "fct-type": "function",
        "title": "runPrinterStyle"
      },
      "index": {
        "description": "Render the Printer to String using the given Style",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "runPrinterStyle",
        "normalized": "Style-\u003ePrinter-\u003eString",
        "package": "prettify",
        "partial": "Printer Style",
        "signature": "Style-\u003ePrinter-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eEither \u003ccode\u003e\u003ca\u003ehsep\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003evcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "Either hsep or vcat",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "sep",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sepBy",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with separator.\n\u003c/p\u003e\u003cpre\u003e sepBy q [x1,x2..xn] = x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#sepBy",
        "fct-type": "function",
        "title": "sepBy"
      },
      "index": {
        "description": "Join with separator sepBy x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "sepBy",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sepByS",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with separator followed by space.\n\u003c/p\u003e\u003cpre\u003e sepByS q [x1,x2..xn] = x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e.. xn.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#sepByS",
        "fct-type": "function",
        "title": "sepByS"
      },
      "index": {
        "description": "Join with separator followed by space sepByS x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "sepByS",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:sizedText",
      "description": {
        "fct-descr": "\u003cp\u003eSome string with any width. (\u003ccode\u003estring s = sizedText (length s) s\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Int -\u003e String -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#sizedText",
        "fct-type": "function",
        "title": "sizedText"
      },
      "index": {
        "description": "Some string with any width string sizedText length",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "sizedText",
        "normalized": "Int-\u003eString-\u003ePrinter",
        "package": "prettify",
        "partial": "Text",
        "signature": "Int-\u003eString-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eA printer of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "String -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "printer of height containing literal string string satisfies the following laws string string string string if non-empty The side condition on the last law is necessary because string has height while empty has no height",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "string",
        "normalized": "String-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "String-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:style",
      "description": {
        "fct-descr": "\u003cp\u003eThe default style (\u003ccode\u003emode=PageMode, lineLength=100, ribbonsPerLine=1.5\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Style",
        "fct-source": "src/Text-Pretty.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "The default style mode PageMode lineLength ribbonsPerLine",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "style",
        "normalized": "",
        "package": "prettify",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:termBy",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with terminator.\n\u003c/p\u003e\u003cpre\u003e termBy q [x1,x2..xn] = x1 \u003c\u003e q \u003c\u003e x2 \u003c\u003e q .. xn \u003c\u003e q.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#termBy",
        "fct-type": "function",
        "title": "termBy"
      },
      "index": {
        "description": "Join with terminator termBy x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "termBy",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:termByS",
      "description": {
        "fct-descr": "\u003cp\u003eJoin with terminator followed by space.\n\u003c/p\u003e\u003cpre\u003e termByS q [x1,x2..xn] = x1 \u003c\u003e q \u003c+\u003e x2 \u003c\u003e q \u003c+\u003e .. xn \u003c\u003e q.\n\u003c/pre\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Printer -\u003e [Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#termByS",
        "fct-type": "function",
        "title": "termByS"
      },
      "index": {
        "description": "Join with terminator followed by space termByS x1 x2..xn x1 x2 xn",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "termByS",
        "normalized": "Printer-\u003e[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "By",
        "signature": "Printer-\u003e[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "[Printer] -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "List version of",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "vcat",
        "normalized": "[Printer]-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "[Printer]-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eWrap printer in the given characters.\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "Char -\u003e Char -\u003e Printer -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Wrap printer in the given characters",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "wrap",
        "normalized": "Char-\u003eChar-\u003ePrinter-\u003ePrinter",
        "package": "prettify",
        "partial": "",
        "signature": "Char-\u003eChar-\u003ePrinter-\u003ePrinter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prettify/docs/Text-Pretty.html#v:zeroWidthText",
      "description": {
        "fct-descr": "\u003cp\u003eSome string, but without any width. Use for non-printing string\n such as a HTML or Latex tags\n\u003c/p\u003e",
        "fct-module": "Text.Pretty",
        "fct-package": "prettify",
        "fct-signature": "String -\u003e Printer",
        "fct-source": "src/Text-Pretty.html#zeroWidthText",
        "fct-type": "function",
        "title": "zeroWidthText"
      },
      "index": {
        "description": "Some string but without any width Use for non-printing string such as HTML or Latex tags",
        "hierarchy": "Text Pretty",
        "module": "Text.Pretty",
        "name": "zeroWidthText",
        "normalized": "String-\u003ePrinter",
        "package": "prettify",
        "partial": "Width Text",
        "signature": "String-\u003ePrinter"
      }
    }
  }
]