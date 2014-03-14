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
        "word": "ParsecTools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing of numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Numbers",
          "name": "Numbers",
          "package": "ParsecTools",
          "source": "src/Text-Parsec-Numbers.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing of numbers",
          "hierarchy": "Text Parsec Numbers",
          "module": "Text.Parsec.Numbers",
          "name": "Numbers",
          "package": "ParsecTools",
          "partial": "Numbers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ParsecTools/docs/Text-Parsec-Numbers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should capture floating point numbers beginning with a \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.Numbers",
          "name": "parseExtFloat",
          "package": "ParsecTools",
          "signature": "GenParser Char st Double",
          "source": "src/Text-Parsec-Numbers.html#parseExtFloat",
          "type": "function"
        },
        "index": {
          "description": "This parser should capture floating point numbers beginning with",
          "hierarchy": "Text Parsec Numbers",
          "module": "Text.Parsec.Numbers",
          "name": "parseExtFloat",
          "package": "ParsecTools",
          "partial": "Ext Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParsecTools/docs/Text-Parsec-Numbers.html#v:parseExtFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a double value. This is exactly the same code as in Real World\n Haskell, p. 400.\n\u003c/p\u003e\u003cp\u003eTODO There are some strange 'floating point numbers' running around in the\n wild that can not be parsed using this code. (eg.: +.5) or (+0.5)\n\u003c/p\u003e",
          "module": "Text.Parsec.Numbers",
          "name": "parseFloat",
          "package": "ParsecTools",
          "signature": "GenParser Char st Double",
          "source": "src/Text-Parsec-Numbers.html#parseFloat",
          "type": "function"
        },
        "index": {
          "description": "Parse double value This is exactly the same code as in Real World Haskell TODO There are some strange floating point numbers running around in the wild that can not be parsed using this code eg or",
          "hierarchy": "Text Parsec Numbers",
          "module": "Text.Parsec.Numbers",
          "name": "parseFloat",
          "package": "ParsecTools",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParsecTools/docs/Text-Parsec-Numbers.html#v:parseFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integral value.\n\u003c/p\u003e",
          "module": "Text.Parsec.Numbers",
          "name": "parseIntegral",
          "package": "ParsecTools",
          "signature": "GenParser Char st a",
          "source": "src/Text-Parsec-Numbers.html#parseIntegral",
          "type": "function"
        },
        "index": {
          "description": "Parse an integral value",
          "hierarchy": "Text Parsec Numbers",
          "module": "Text.Parsec.Numbers",
          "name": "parseIntegral",
          "package": "ParsecTools",
          "partial": "Integral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParsecTools/docs/Text-Parsec-Numbers.html#v:parseIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the potential +/- before a number, returning ' ' for a \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Parsec.Numbers",
          "name": "parseSignum",
          "package": "ParsecTools",
          "signature": "GenParser Char st Char",
          "source": "src/Text-Parsec-Numbers.html#parseSignum",
          "type": "function"
        },
        "index": {
          "description": "Parse the potential before number returning for",
          "hierarchy": "Text Parsec Numbers",
          "module": "Text.Parsec.Numbers",
          "name": "parseSignum",
          "package": "ParsecTools",
          "partial": "Signum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParsecTools/docs/Text-Parsec-Numbers.html#v:parseSignum"
      }
    }
  ]
]