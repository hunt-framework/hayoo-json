[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides low-level integration with Attoparsec and is likely\n to be modified in backwards-incompatible ways in the future.\n\u003c/p\u003e\u003cp\u003eUse the stable API exported by the \u003ca\u003ePipes.Attoparsec\u003c/a\u003e module instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Attoparsec-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module provides low-level integration with Attoparsec and is likely to be modified in backwards-incompatible ways in the future Use the stable API exported by the Pipes.Attoparsec module instead",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#t:ParserInput",
      "description": {
        "fct-descr": "\u003cp\u003eA class for valid Attoparsec input types: strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and\n strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "class",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParserInput",
        "fct-type": "class",
        "title": "ParserInput"
      },
      "index": {
        "description": "class for valid Attoparsec input types strict Text and strict ByteString",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "ParserInput",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parser Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#t:ParsingError",
      "description": {
        "fct-descr": "\u003cp\u003eA parsing error report, as provided by Attoparsec's \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "data",
        "title": "ParsingError"
      },
      "index": {
        "description": "parsing error report as provided by Attoparsec Fail",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "ParsingError",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parsing Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#v:ParsingError",
      "description": {
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "ParsingError",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "ParsingError"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "ParsingError",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parsing Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#v:parseWithDraw",
      "description": {
        "fct-descr": "\u003cp\u003eRun a parser drawing input from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "Parser a b-\u003e StateT (Producer a m r) m (Either ParsingError (Int, b), Maybe a)",
        "fct-type": "function",
        "title": "parseWithDraw"
      },
      "index": {
        "description": "Run parser drawing input from the underlying Producer",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "parseWithDraw",
        "normalized": "Parser a b-\u003eStateT(Producer a c d)c(Either ParsingError(Int,b),Maybe a)",
        "package": "pipes-attoparsec",
        "partial": "With Draw",
        "signature": "Parser a b-\u003eStateT(Producer a m r)m(Either ParsingError(Int,b),Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#v:parseWithRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRun a parser drawing input from the given monadic action as needed.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "m a-\u003e Parser a r-\u003e m (Either ParsingError (Int, r), Maybe a)",
        "fct-type": "function",
        "title": "parseWithRaw"
      },
      "index": {
        "description": "Run parser drawing input from the given monadic action as needed",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "parseWithRaw",
        "normalized": "a b-\u003eParser b c-\u003ea(Either ParsingError(Int,c),Maybe b)",
        "package": "pipes-attoparsec",
        "partial": "With Raw",
        "signature": "m a-\u003eParser a r-\u003em(Either ParsingError(Int,r),Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#v:peContexts",
      "description": {
        "fct-descr": "\u003cp\u003eContexts where the parsing error occurred.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "[String]",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "peContexts"
      },
      "index": {
        "description": "Contexts where the parsing error occurred",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "peContexts",
        "normalized": "[String]",
        "package": "pipes-attoparsec",
        "partial": "Contexts",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec-Internal.html#v:peMessage",
      "description": {
        "fct-descr": "\u003cp\u003eParsing error description message.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec.Internal",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "String",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "peMessage"
      },
      "index": {
        "description": "Parsing error description message",
        "hierarchy": "Pipes Attoparsec Internal",
        "module": "Pipes.Attoparsec.Internal",
        "name": "peMessage",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe utilities in this module allow you to run Attoparsec parsers on input\n flowing downstream through pipes, possibly interleaving other stream effects\n while doing so.\n\u003c/p\u003e\u003cp\u003eThis module builds on top of the \u003ccode\u003eattoparsec\u003c/code\u003e, \u003ccode\u003epipes\u003c/code\u003e and \u003ccode\u003epipes-parse\u003c/code\u003e\n libraries and assumes you understand how to use those.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Attoparsec.html",
        "fct-type": "module",
        "title": "Attoparsec"
      },
      "index": {
        "description": "The utilities in this module allow you to run Attoparsec parsers on input flowing downstream through pipes possibly interleaving other stream effects while doing so This module builds on top of the attoparsec pipes and pipes-parse libraries and assumes you understand how to use those",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "Attoparsec",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Attoparsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#t:ParserInput",
      "description": {
        "fct-descr": "\u003cp\u003eA class for valid Attoparsec input types: strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and\n strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "class",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParserInput",
        "fct-type": "class",
        "title": "ParserInput"
      },
      "index": {
        "description": "class for valid Attoparsec input types strict Text and strict ByteString",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "ParserInput",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parser Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#t:ParsingError",
      "description": {
        "fct-descr": "\u003cp\u003eA parsing error report, as provided by Attoparsec's \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "data",
        "title": "ParsingError"
      },
      "index": {
        "description": "parsing error report as provided by Attoparsec Fail",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "ParsingError",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parsing Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:ParsingError",
      "description": {
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "ParsingError",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "ParsingError"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "ParsingError",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Parsing Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:isEndOfParserInput",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eisEndOfInput\u003c/a\u003e\u003c/code\u003e, except it also consumes and discards leading\n empty \u003ccode\u003e\u003ca\u003eParserInput\u003c/a\u003e\u003c/code\u003e chunks.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "StateT (Producer a m r) m Bool",
        "fct-source": "src/Pipes-Attoparsec.html#isEndOfParserInput",
        "fct-type": "function",
        "title": "isEndOfParserInput"
      },
      "index": {
        "description": "Like isEndOfInput except it also consumes and discards leading empty ParserInput chunks",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "isEndOfParserInput",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "End Of Parser Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eRun an Attoparsec \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e on input from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e,\n returning either a \u003ccode\u003e\u003ca\u003eParsingError\u003c/a\u003e\u003c/code\u003e on failure, or a pair with the parsed\n entity together with the length of input consumed in order to produce it.\n\u003c/p\u003e\u003cp\u003eUse this function only if \u003ccode\u003e\u003ca\u003eisEndOfParserInput\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, otherwise\n you'll get unexpected parsing errors.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "Parser a b-\u003e StateT (Producer a m r) m (Either ParsingError (Int, b))",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Run an Attoparsec Parser on input from the underlying Producer returning either ParsingError on failure or pair with the parsed entity together with the length of input consumed in order to produce it Use this function only if isEndOfParserInput returns False otherwise you ll get unexpected parsing errors",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "parse",
        "normalized": "Parser a b-\u003eStateT(Producer a c d)c(Either ParsingError(Int,b))",
        "package": "pipes-attoparsec",
        "partial": "",
        "signature": "Parser a b-\u003eStateT(Producer a m r)m(Either ParsingError(Int,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:parseMany",
      "description": {
        "fct-descr": "\u003cp\u003eContinuously run an Attoparsec \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e on input from the given \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e,\n sending downstream pairs of each successfully parsed entity together with the\n length of input consumed in order to produce it.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e runs until it either runs out of input or a parsing\n failure occurs, in which case it returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eParsingError\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e with any leftovers. You can use \u003ccode\u003e\u003ca\u003eerrorP\u003c/a\u003e\u003c/code\u003e to turn the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n return value into an \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "Parser a b-\u003e Producer a m r-\u003e Producer' (Int, b) m (Either (ParsingError, Producer a m r) r)",
        "fct-type": "function",
        "title": "parseMany"
      },
      "index": {
        "description": "Continuously run an Attoparsec Parser on input from the given Producer sending downstream pairs of each successfully parsed entity together with the length of input consumed in order to produce it This Producer runs until it either runs out of input or parsing failure occurs in which case it returns Left with ParsingError and Producer with any leftovers You can use errorP to turn the Either return value into an ErrorT monad transformer",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "parseMany",
        "normalized": "Parser a b-\u003eProducer a c d-\u003eProducer'(Int,b)c(Either(ParsingError,Producer a c d)d)",
        "package": "pipes-attoparsec",
        "partial": "Many",
        "signature": "Parser a b-\u003eProducer a m r-\u003eProducer'(Int,b)m(Either(ParsingError,Producer a m r)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:peContexts",
      "description": {
        "fct-descr": "\u003cp\u003eContexts where the parsing error occurred.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "[String]",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "peContexts"
      },
      "index": {
        "description": "Contexts where the parsing error occurred",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "peContexts",
        "normalized": "[String]",
        "package": "pipes-attoparsec",
        "partial": "Contexts",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-attoparsec/docs/Pipes-Attoparsec.html#v:peMessage",
      "description": {
        "fct-descr": "\u003cp\u003eParsing error description message.\n\u003c/p\u003e",
        "fct-module": "Pipes.Attoparsec",
        "fct-package": "pipes-attoparsec",
        "fct-signature": "String",
        "fct-source": "src/Pipes-Attoparsec-Internal.html#ParsingError",
        "fct-type": "function",
        "title": "peMessage"
      },
      "index": {
        "description": "Parsing error description message",
        "hierarchy": "Pipes Attoparsec",
        "module": "Pipes.Attoparsec",
        "name": "peMessage",
        "normalized": "",
        "package": "pipes-attoparsec",
        "partial": "Message",
        "signature": ""
      }
    }
  }
]