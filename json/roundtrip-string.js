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
        "word": "roundtrip-string"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "Parser",
          "package": "roundtrip-string",
          "source": "src/Text-Roundtrip-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "Parser",
          "package": "roundtrip-string",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "PParser",
          "package": "roundtrip-string",
          "source": "src/Text-Roundtrip-Parser.html#PParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "PParser",
          "package": "roundtrip-string",
          "partial": "PParser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#t:PParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n and line number and column number set to 1, the upper left.\n\u003c/p\u003e",
          "module": "Text.Roundtrip.Parser",
          "name": "initialPos",
          "package": "roundtrip-string",
          "signature": "SourceName -\u003e SourcePos",
          "type": "function"
        },
        "index": {
          "description": "Create new SourcePos with the given source name and line number and column number set to the upper left",
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "initialPos",
          "normalized": "SourceName-\u003eSourcePos",
          "package": "roundtrip-string",
          "partial": "Pos",
          "signature": "SourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:initialPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "mkParseError",
          "package": "roundtrip-string",
          "signature": "SourcePos -\u003e String -\u003e ParseError",
          "source": "src/Text-Roundtrip-Parser.html#mkParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "mkParseError",
          "normalized": "SourcePos-\u003eString-\u003eParseError",
          "package": "roundtrip-string",
          "partial": "Parse Error",
          "signature": "SourcePos-\u003eString-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:mkParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n line number and column number.\n\u003c/p\u003e",
          "module": "Text.Roundtrip.Parser",
          "name": "newPos",
          "package": "roundtrip-string",
          "signature": "SourceName -\u003e Line -\u003e Column -\u003e SourcePos",
          "type": "function"
        },
        "index": {
          "description": "Create new SourcePos with the given source name line number and column number",
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "newPos",
          "normalized": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "package": "roundtrip-string",
          "partial": "Pos",
          "signature": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:newPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecAlternative1Lookahead",
          "package": "roundtrip-string",
          "signature": "PParser s u m a -\u003e PParser s u m a -\u003e PParser s u m a",
          "source": "src/Text-Roundtrip-Parser.html#parsecAlternative1Lookahead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecAlternative1Lookahead",
          "normalized": "PParser a b c d-\u003ePParser a b c d-\u003ePParser a b c d",
          "package": "roundtrip-string",
          "partial": "Alternative Lookahead",
          "signature": "PParser s u m a-\u003ePParser s u m a-\u003ePParser s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecAlternative1Lookahead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecAlternativeInfLookahead",
          "package": "roundtrip-string",
          "signature": "PParser s u m a -\u003e PParser s u m a -\u003e PParser s u m a",
          "source": "src/Text-Roundtrip-Parser.html#parsecAlternativeInfLookahead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecAlternativeInfLookahead",
          "normalized": "PParser a b c d-\u003ePParser a b c d-\u003ePParser a b c d",
          "package": "roundtrip-string",
          "partial": "Alternative Inf Lookahead",
          "signature": "PParser s u m a-\u003ePParser s u m a-\u003ePParser s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecAlternativeInfLookahead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecApply",
          "package": "roundtrip-string",
          "signature": "Iso a b -\u003e PParser s u m a -\u003e PParser s u m b",
          "source": "src/Text-Roundtrip-Parser.html#parsecApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecApply",
          "normalized": "Iso a b-\u003ePParser c d e a-\u003ePParser c d e b",
          "package": "roundtrip-string",
          "partial": "Apply",
          "signature": "Iso a b-\u003ePParser s u m a-\u003ePParser s u m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecConcat",
          "package": "roundtrip-string",
          "signature": "PParser s u m a -\u003e PParser s u m b -\u003e PParser s u m (a, b)",
          "source": "src/Text-Roundtrip-Parser.html#parsecConcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecConcat",
          "normalized": "PParser a b c d-\u003ePParser a b c e-\u003ePParser a b c(d,e)",
          "package": "roundtrip-string",
          "partial": "Concat",
          "signature": "PParser s u m a-\u003ePParser s u m b-\u003ePParser s u m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecEmpty",
          "package": "roundtrip-string",
          "signature": "PParser s u m a",
          "source": "src/Text-Roundtrip-Parser.html#parsecEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecEmpty",
          "package": "roundtrip-string",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "parsecPure",
          "package": "roundtrip-string",
          "signature": "a -\u003e PParser s u m a",
          "source": "src/Text-Roundtrip-Parser.html#parsecPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "parsecPure",
          "normalized": "a-\u003ePParser b c d a",
          "package": "roundtrip-string",
          "partial": "Pure",
          "signature": "a-\u003ePParser s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:parsecPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a parser over the Identity monad. \u003ccode\u003erunParser p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  parseFromFile p fname\n    = do{ input \u003c- readFile fname\n        ; return (runParser p () fname input)\n        }\n\u003c/pre\u003e",
          "module": "Text.Roundtrip.Parser",
          "name": "runParser",
          "package": "roundtrip-string",
          "signature": "Parsec s u a -\u003e u -\u003e SourceName -\u003e s -\u003e Either ParseError a",
          "type": "function"
        },
        "index": {
          "description": "The most general way to run parser over the Identity monad runParser state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right parseFromFile fname do input readFile fname return runParser fname input",
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "runParser",
          "normalized": "Parsec a b c-\u003eb-\u003eSourceName-\u003ea-\u003eEither ParseError c",
          "package": "roundtrip-string",
          "partial": "Parser",
          "signature": "Parsec s u a-\u003eu-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Parser",
          "name": "runStringParser",
          "package": "roundtrip-string",
          "signature": "PParser s () Identity a -\u003e SourceName -\u003e s -\u003e Either ParseError a",
          "source": "src/Text-Roundtrip-Parser.html#runStringParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Parser",
          "module": "Text.Roundtrip.Parser",
          "name": "runStringParser",
          "normalized": "PParser a()Identity b-\u003eSourceName-\u003ea-\u003eEither ParseError b",
          "package": "roundtrip-string",
          "partial": "String Parser",
          "signature": "PParser s()Identity a-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Parser.html#v:runStringParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "source": "src/Text-Roundtrip-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "source": "src/Text-Roundtrip-Printer.html#Printer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "partial": "Printer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#t:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "signature": "Printer",
          "source": "src/Text-Roundtrip-Printer.html#Printer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "Printer",
          "package": "roundtrip-string",
          "partial": "Printer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "printerAlternative",
          "package": "roundtrip-string",
          "signature": "Printer m r a -\u003e Printer m r a -\u003e Printer m r a",
          "source": "src/Text-Roundtrip-Printer.html#printerAlternative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "printerAlternative",
          "normalized": "Printer a b c-\u003ePrinter a b c-\u003ePrinter a b c",
          "package": "roundtrip-string",
          "partial": "Alternative",
          "signature": "Printer m r a-\u003ePrinter m r a-\u003ePrinter m r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:printerAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "printerApply",
          "package": "roundtrip-string",
          "signature": "Iso a b -\u003e Printer m r a -\u003e Printer m r b",
          "source": "src/Text-Roundtrip-Printer.html#printerApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "printerApply",
          "normalized": "Iso a b-\u003ePrinter c d a-\u003ePrinter c d b",
          "package": "roundtrip-string",
          "partial": "Apply",
          "signature": "Iso a b-\u003ePrinter m r a-\u003ePrinter m r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:printerApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "printerConcat",
          "package": "roundtrip-string",
          "signature": "Printer m r a -\u003e Printer m r b -\u003e Printer m r (a, b)",
          "source": "src/Text-Roundtrip-Printer.html#printerConcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "printerConcat",
          "normalized": "Printer a b c-\u003ePrinter a b d-\u003ePrinter a b(c,d)",
          "package": "roundtrip-string",
          "partial": "Concat",
          "signature": "Printer m r a-\u003ePrinter m r b-\u003ePrinter m r(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:printerConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "printerEmpty",
          "package": "roundtrip-string",
          "signature": "Printer m r a",
          "source": "src/Text-Roundtrip-Printer.html#printerEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "printerEmpty",
          "package": "roundtrip-string",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:printerEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "printerPure",
          "package": "roundtrip-string",
          "signature": "a -\u003e Printer m r a",
          "source": "src/Text-Roundtrip-Printer.html#printerPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "printerPure",
          "normalized": "a-\u003ePrinter b c a",
          "package": "roundtrip-string",
          "partial": "Pure",
          "signature": "a-\u003ePrinter m r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:printerPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "runPrinter",
          "package": "roundtrip-string",
          "signature": "Printer Identity r a -\u003e a -\u003e Maybe r",
          "source": "src/Text-Roundtrip-Printer.html#runPrinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "runPrinter",
          "normalized": "Printer Identity a b-\u003eb-\u003eMaybe a",
          "package": "roundtrip-string",
          "partial": "Printer",
          "signature": "Printer Identity r a-\u003ea-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:runPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "runStringPrinter",
          "package": "roundtrip-string",
          "signature": "Printer Identity String a -\u003e a -\u003e Maybe String",
          "source": "src/Text-Roundtrip-Printer.html#runStringPrinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "runStringPrinter",
          "normalized": "Printer Identity String a-\u003ea-\u003eMaybe String",
          "package": "roundtrip-string",
          "partial": "String Printer",
          "signature": "Printer Identity String a-\u003ea-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:runStringPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Roundtrip.Printer",
          "name": "unPrinter",
          "package": "roundtrip-string",
          "signature": "a -\u003e m (Maybe r)",
          "source": "src/Text-Roundtrip-Printer.html#Printer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Roundtrip Printer",
          "module": "Text.Roundtrip.Printer",
          "name": "unPrinter",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "roundtrip-string",
          "partial": "Printer",
          "signature": "a-\u003em(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roundtrip-string/docs/Text-Roundtrip-Printer.html#v:unPrinter"
      }
    }
  ]
]