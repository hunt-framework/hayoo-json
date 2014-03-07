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
        "word": "parsec-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Extra",
          "name": "Extra",
          "package": "parsec-extra",
          "source": "src/Text-Parsec-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "Extra",
          "package": "parsec-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given character, or the same character in another case\n (upper or lower).\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "caseInsensitiveChar",
          "package": "parsec-extra",
          "signature": "Char -\u003e GenParser Char state Char",
          "source": "src/Text-Parsec-Extra.html#caseInsensitiveChar",
          "type": "function"
        },
        "index": {
          "description": "Parse the given character or the same character in another case upper or lower",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "caseInsensitiveChar",
          "normalized": "Char-\u003eGenParser Char a Char",
          "package": "parsec-extra",
          "partial": "Insensitive Char",
          "signature": "Char-\u003eGenParser Char state Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:caseInsensitiveChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string, but with any combination of upper and lower case\n characters.\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "caseInsensitiveString",
          "package": "parsec-extra",
          "signature": "String -\u003e GenParser Char state String",
          "source": "src/Text-Parsec-Extra.html#caseInsensitiveString",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string but with any combination of upper and lower case characters",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "caseInsensitiveString",
          "normalized": "String-\u003eGenParser Char a String",
          "package": "parsec-extra",
          "partial": "Insensitive String",
          "signature": "String-\u003eGenParser Char state String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:caseInsensitiveString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decimal digit.\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "digit",
          "package": "parsec-extra",
          "signature": "GenParser Char state a",
          "source": "src/Text-Parsec-Extra.html#digit",
          "type": "function"
        },
        "index": {
          "description": "decimal digit",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "digit",
          "package": "parsec-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \"end of line\": one of \"\\n\", \"\\r\\n\", or \"\\r\".\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "eol",
          "package": "parsec-extra",
          "signature": "GenParser Char state ()",
          "source": "src/Text-Parsec-Extra.html#eol",
          "type": "function"
        },
        "index": {
          "description": "Parse end of line one of or",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "eol",
          "normalized": "GenParser Char a()",
          "package": "parsec-extra",
          "signature": "GenParser Char state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:eol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer number, in decimal notation (possibly prefixed with \"-\").\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "integer",
          "package": "parsec-extra",
          "signature": "GenParser Char state a",
          "source": "src/Text-Parsec-Extra.html#integer",
          "type": "function"
        },
        "index": {
          "description": "An integer number in decimal notation possibly prefixed with",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "integer",
          "package": "parsec-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA natural (i.e. non-negative integer) number, in decimal notation.\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "natural",
          "package": "parsec-extra",
          "signature": "GenParser Char state a",
          "source": "src/Text-Parsec-Extra.html#natural",
          "type": "function"
        },
        "index": {
          "description": "natural i.e non-negative integer number in decimal notation",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "natural",
          "package": "parsec-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing function. Uses the \u003ccode\u003e\u003ca\u003eMonadError\u003c/a\u003e\u003c/code\u003e class to throw a monadic error\n when parsing fails. (Useful in a stack of monad transformers from the\n transformers package \u003ca\u003ehttp://hackage.haskell.org/package/transformers\u003c/a\u003e.)\n\u003c/p\u003e",
          "module": "Text.Parsec.Extra",
          "name": "parseM",
          "package": "parsec-extra",
          "signature": "GenParser t () a -\u003e String -\u003e [t] -\u003e m a",
          "source": "src/Text-Parsec-Extra.html#parseM",
          "type": "function"
        },
        "index": {
          "description": "Parsing function Uses the MonadError class to throw monadic error when parsing fails Useful in stack of monad transformers from the transformers package http hackage.haskell.org package transformers",
          "hierarchy": "Text Parsec Extra",
          "module": "Text.Parsec.Extra",
          "name": "parseM",
          "normalized": "GenParser a()b-\u003eString-\u003e[a]-\u003ec b",
          "package": "parsec-extra",
          "signature": "GenParser t()a-\u003eString-\u003e[t]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-extra/docs/Text-Parsec-Extra.html#v:parseM"
      }
    }
  ]
]