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
        "word": "pipes-attoparsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epipes\u003c/code\u003e utilities for incrementally running \u003ccode\u003eattoparsec\u003c/code\u003e-based parsers.\n\u003c/p\u003e\u003cp\u003eThis module assumes familiarity with \u003ccode\u003epipes-parse\u003c/code\u003e, you can learn about it in\n \u003ca\u003ePipes.Parse.Tutorial\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Attoparsec",
          "name": "Attoparsec",
          "package": "pipes-attoparsec",
          "source": "src/Pipes-Attoparsec.html",
          "type": "module"
        },
        "index": {
          "description": "pipes utilities for incrementally running attoparsec based parsers This module assumes familiarity with pipes-parse you can learn about it in Pipes.Parse.Tutorial",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "Attoparsec",
          "package": "pipes-attoparsec",
          "partial": "Attoparsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for valid \u003ccode\u003eattoparsec\u003c/code\u003e input types\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "ParserInput",
          "package": "pipes-attoparsec",
          "source": "src/Pipes-Attoparsec.html#ParserInput",
          "type": "class"
        },
        "index": {
          "description": "class for valid attoparsec input types",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "ParserInput",
          "package": "pipes-attoparsec",
          "partial": "Parser Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#t:ParserInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parsing error report, as provided by Attoparsec's \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "ParsingError",
          "package": "pipes-attoparsec",
          "source": "src/Pipes-Attoparsec.html#ParsingError",
          "type": "data"
        },
        "index": {
          "description": "parsing error report as provided by Attoparsec Fail",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "ParsingError",
          "package": "pipes-attoparsec",
          "partial": "Parsing Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#t:ParsingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Attoparsec",
          "name": "ParsingError",
          "package": "pipes-attoparsec",
          "signature": "ParsingError",
          "source": "src/Pipes-Attoparsec.html#ParsingError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "ParsingError",
          "package": "pipes-attoparsec",
          "partial": "Parsing Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:ParsingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eisEndOfInput\u003c/a\u003e\u003c/code\u003e, except that it also consumes and discards\n leading empty chunks.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "isEndOfParserInput",
          "package": "pipes-attoparsec",
          "signature": "Parser a m Bool",
          "source": "src/Pipes-Attoparsec.html#isEndOfParserInput",
          "type": "function"
        },
        "index": {
          "description": "Like isEndOfInput except that it also consumes and discards leading empty chunks",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "isEndOfParserInput",
          "package": "pipes-attoparsec",
          "partial": "End Of Parser Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:isEndOfParserInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003eattoparsec\u003c/code\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003epipes-parse\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e is compatible with the tools from \u003ca\u003ePipes.Parse\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "parse",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003e Parser a m (Either ParsingError b)",
          "type": "function"
        },
        "index": {
          "description": "Convert an attoparsec Parser to pipes-parse Parser This Parser is compatible with the tools from Pipes.Parse",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "parse",
          "normalized": "Parser a b-\u003eParser a c(Either ParsingError b)",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003eParser a m(Either ParsingError b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e, but also returns the length of input consumed to parse the\n value.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "parseL",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003e Parser a m (Either ParsingError (Int, b))",
          "type": "function"
        },
        "index": {
          "description": "Like parse but also returns the length of input consumed to parse the value",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "parseL",
          "normalized": "Parser a b-\u003eParser a c(Either ParsingError(Int,b))",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003eParser a m(Either ParsingError(Int,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parseL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a producer of \u003ccode\u003e\u003ca\u003eParserInput\u003c/a\u003e\u003c/code\u003e to a producer of parsed values.\n\u003c/p\u003e\u003cp\u003eThis producer returns \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e when end-of-input is reached sucessfully,\n otherwise it returns a \u003ccode\u003e\u003ca\u003eParsingError\u003c/a\u003e\u003c/code\u003e and the leftovers including\n the malformed input that couldn't be parsed. You can use \u003ccode\u003e\u003ca\u003eerrorP\u003c/a\u003e\u003c/code\u003e\n to promote the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e return value to an \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e\n monad transformer.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "parsed",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003e Producer a m r-\u003e Producer b m (Either (ParsingError, Producer a m r) r)",
          "type": "function"
        },
        "index": {
          "description": "Convert producer of ParserInput to producer of parsed values This producer returns Right when end-of-input is reached sucessfully otherwise it returns ParsingError and the leftovers including the malformed input that couldn be parsed You can use errorP to promote the Either return value to an ErrorT monad transformer",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "parsed",
          "normalized": "Parser a b-\u003eProducer a c d-\u003eProducer b c(Either(ParsingError,Producer a c d)d)",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003eProducer a m r-\u003eProducer b m(Either(ParsingError,Producer a m r)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eparsed\u003c/a\u003e\u003c/code\u003e, except this tags each parsed value with the length of input\n consumed to parse the value.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "parsedL",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003e Producer a m r-\u003e Producer (Int, b) m (Either (ParsingError, Producer a m r) r)",
          "type": "function"
        },
        "index": {
          "description": "Like parsed except this tags each parsed value with the length of input consumed to parse the value",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "parsedL",
          "normalized": "Parser a b-\u003eProducer a c d-\u003eProducer(Int,b)c(Either(ParsingError,Producer a c d)d)",
          "package": "pipes-attoparsec",
          "signature": "Parser a b-\u003eProducer a m r-\u003eProducer(Int,b)m(Either(ParsingError,Producer a m r)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parsedL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContexts where the parsing error occurred.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "peContexts",
          "package": "pipes-attoparsec",
          "signature": "[String]",
          "source": "src/Pipes-Attoparsec.html#ParsingError",
          "type": "function"
        },
        "index": {
          "description": "Contexts where the parsing error occurred",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "peContexts",
          "normalized": "[String]",
          "package": "pipes-attoparsec",
          "partial": "Contexts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:peContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing error description message.\n\u003c/p\u003e",
          "module": "Pipes.Attoparsec",
          "name": "peMessage",
          "package": "pipes-attoparsec",
          "signature": "String",
          "source": "src/Pipes-Attoparsec.html#ParsingError",
          "type": "function"
        },
        "index": {
          "description": "Parsing error description message",
          "hierarchy": "Pipes Attoparsec",
          "module": "Pipes.Attoparsec",
          "name": "peMessage",
          "package": "pipes-attoparsec",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:peMessage"
      }
    }
  ]
]