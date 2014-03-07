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
        "word": "linebreak"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple functions to break a String to fit a maximum text width, using\n Knuth-Liang hyphenation algorithm.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e import Text.Hyphenation\n import Text.LineBreak\n\n hyp = Just english_US\n bf = BreakFormat 25 '-' hyp\n cs = \"Using hyphenation with gruesomely non parsimonious wording.\"\n\n main = putStr $ breakString bf cs\n\u003c/pre\u003e\u003cp\u003ewill output:\n\u003c/p\u003e\u003cpre\u003e Using hyphenation with\n gruesomely non parsimo-\n nious wording.\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.LineBreak",
          "name": "LineBreak",
          "package": "linebreak",
          "source": "src/Text-LineBreak.html",
          "type": "module"
        },
        "index": {
          "description": "Simple functions to break String to fit maximum text width using Knuth-Liang hyphenation algorithm Example import Text.Hyphenation import Text.LineBreak hyp Just english US bf BreakFormat hyp cs Using hyphenation with gruesomely non parsimonious wording main putStr breakString bf cs will output Using hyphenation with gruesomely non parsimo nious wording",
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "LineBreak",
          "package": "linebreak",
          "partial": "Line Break",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to break the Strings: maximum width of the lines, symbol to use\n to hyphenate a word, Hypenator to use (language, exceptions, etc. Refer to\n \u003ca\u003eText.Hyphenation\u003c/a\u003e for more info). To break lines without hyphenating, put\n \u003ccode\u003eNothing\u003c/code\u003e in \u003ccode\u003ebfHyphenator\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LineBreak",
          "name": "BreakFormat",
          "package": "linebreak",
          "source": "src/Text-LineBreak.html#BreakFormat",
          "type": "data"
        },
        "index": {
          "description": "How to break the Strings maximum width of the lines symbol to use to hyphenate word Hypenator to use language exceptions etc Refer to Text.Hyphenation for more info To break lines without hyphenating put Nothing in bfHyphenator",
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "BreakFormat",
          "package": "linebreak",
          "partial": "Break Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#t:BreakFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LineBreak",
          "name": "BreakFormat",
          "package": "linebreak",
          "signature": "BreakFormat",
          "source": "src/Text-LineBreak.html#BreakFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "BreakFormat",
          "package": "linebreak",
          "partial": "Break Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:BreakFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LineBreak",
          "name": "bfHyphenSymbol",
          "package": "linebreak",
          "signature": "Char",
          "source": "src/Text-LineBreak.html#BreakFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "bfHyphenSymbol",
          "package": "linebreak",
          "partial": "Hyphen Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfHyphenSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LineBreak",
          "name": "bfHyphenator",
          "package": "linebreak",
          "signature": "Maybe Hyphenator",
          "source": "src/Text-LineBreak.html#BreakFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "bfHyphenator",
          "package": "linebreak",
          "partial": "Hyphenator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfHyphenator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LineBreak",
          "name": "bfMaxCol",
          "package": "linebreak",
          "signature": "Int",
          "source": "src/Text-LineBreak.html#BreakFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "bfMaxCol",
          "package": "linebreak",
          "partial": "Max Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:bfMaxCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks a String to make it fit in a certain width. The output is a String,\n suitable for writing to screen or file.\n\u003c/p\u003e",
          "module": "Text.LineBreak",
          "name": "breakString",
          "package": "linebreak",
          "signature": "BreakFormat -\u003e String -\u003e String",
          "source": "src/Text-LineBreak.html#breakString",
          "type": "function"
        },
        "index": {
          "description": "Breaks String to make it fit in certain width The output is String suitable for writing to screen or file",
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "breakString",
          "normalized": "BreakFormat-\u003eString-\u003eString",
          "package": "linebreak",
          "partial": "String",
          "signature": "BreakFormat-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:breakString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience for \u003ccode\u003elines $ breakString bf cs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.LineBreak",
          "name": "breakStringLn",
          "package": "linebreak",
          "signature": "BreakFormat -\u003e String -\u003e [String]",
          "source": "src/Text-LineBreak.html#breakStringLn",
          "type": "function"
        },
        "index": {
          "description": "Convenience for lines breakString bf cs",
          "hierarchy": "Text LineBreak",
          "module": "Text.LineBreak",
          "name": "breakStringLn",
          "normalized": "BreakFormat-\u003eString-\u003e[String]",
          "package": "linebreak",
          "partial": "String Ln",
          "signature": "BreakFormat-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linebreak/docs/Text-LineBreak.html#v:breakStringLn"
      }
    }
  ]
]