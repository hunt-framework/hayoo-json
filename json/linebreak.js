[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple functions to break a String to fit a maximum text width, using\n Knuth-Liang hyphenation algorithm.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Text.Hyphenation\n import Text.LineBreak\n\n hyp = Just english_US\n bf = BreakFormat 25 '-' hyp\n cs = \"Using hyphenation with gruesomely non parsimonious wording.\"\n\n main = putStr $ breakString bf cs\n\u003c/pre\u003e\u003cp\u003ewill output:\n\u003c/p\u003e\u003cpre\u003e Using hyphenation with\n gruesomely non parsimo-\n nious wording.\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "module",
        "fct-source": "src/Text-LineBreak.html",
        "fct-type": "module",
        "title": "LineBreak"
      },
      "index": {
        "description": "Simple functions to break String to fit maximum text width using Knuth-Liang hyphenation algorithm Example import Text.Hyphenation import Text.LineBreak hyp Just english US bf BreakFormat hyp cs Using hyphenation with gruesomely non parsimonious wording main putStr breakString bf cs will output Using hyphenation with gruesomely non parsimo nious wording",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "LineBreak",
        "normalized": "",
        "package": "linebreak",
        "partial": "Line Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#t:BreakFormat",
      "description": {
        "fct-descr": "\u003cp\u003eHow to break the Strings: maximum width of the lines, symbol to use\n to hyphenate a word, Hypenator to use (language, exceptions, etc. Refer to\n \u003ca\u003eText.Hyphenation\u003c/a\u003e for more info). To break lines without hyphenating, put\n \u003ccode\u003eNothing\u003c/code\u003e in \u003ccode\u003ebfHyphenator\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "data",
        "fct-source": "src/Text-LineBreak.html#BreakFormat",
        "fct-type": "data",
        "title": "BreakFormat"
      },
      "index": {
        "description": "How to break the Strings maximum width of the lines symbol to use to hyphenate word Hypenator to use language exceptions etc Refer to Text.Hyphenation for more info To break lines without hyphenating put Nothing in bfHyphenator",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "BreakFormat",
        "normalized": "",
        "package": "linebreak",
        "partial": "Break Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:BreakFormat",
      "description": {
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "BreakFormat",
        "fct-source": "src/Text-LineBreak.html#BreakFormat",
        "fct-type": "function",
        "title": "BreakFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "BreakFormat",
        "normalized": "",
        "package": "linebreak",
        "partial": "Break Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfHyphenSymbol",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "Char",
        "fct-source": "src/Text-LineBreak.html#BreakFormat",
        "fct-type": "function",
        "title": "bfHyphenSymbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "bfHyphenSymbol",
        "normalized": "",
        "package": "linebreak",
        "partial": "Hyphen Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfHyphenator",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "Maybe Hyphenator",
        "fct-source": "src/Text-LineBreak.html#BreakFormat",
        "fct-type": "function",
        "title": "bfHyphenator"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "bfHyphenator",
        "normalized": "",
        "package": "linebreak",
        "partial": "Hyphenator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfMaxCol",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "Int",
        "fct-source": "src/Text-LineBreak.html#BreakFormat",
        "fct-type": "function",
        "title": "bfMaxCol"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "bfMaxCol",
        "normalized": "",
        "package": "linebreak",
        "partial": "Max Col",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:breakString",
      "description": {
        "fct-descr": "\u003cp\u003eBreaks a String to make it fit in a certain width. The output is a String,\n suitable for writing to screen or file.\n\u003c/p\u003e",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "BreakFormat -\u003e String -\u003e String",
        "fct-source": "src/Text-LineBreak.html#breakString",
        "fct-type": "function",
        "title": "breakString"
      },
      "index": {
        "description": "Breaks String to make it fit in certain width The output is String suitable for writing to screen or file",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "breakString",
        "normalized": "BreakFormat-\u003eString-\u003eString",
        "package": "linebreak",
        "partial": "String",
        "signature": "BreakFormat-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:breakStringLn",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience for \u003ccode\u003elines $ breakString bf cs\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.LineBreak",
        "fct-package": "linebreak",
        "fct-signature": "BreakFormat -\u003e String -\u003e [String]",
        "fct-source": "src/Text-LineBreak.html#breakStringLn",
        "fct-type": "function",
        "title": "breakStringLn"
      },
      "index": {
        "description": "Convenience for lines breakString bf cs",
        "hierarchy": "Text LineBreak",
        "module": "Text.LineBreak",
        "name": "breakStringLn",
        "normalized": "BreakFormat-\u003eString-\u003e[String]",
        "package": "linebreak",
        "partial": "String Ln",
        "signature": "BreakFormat-\u003eString-\u003e[String]"
      }
    }
  }
]