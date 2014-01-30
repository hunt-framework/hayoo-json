[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogFormat is a Haskell module that makes it trivial to parse access\n     log records.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "module",
        "fct-source": "src/Text-LogFormat.html",
        "fct-type": "module",
        "title": "LogFormat"
      },
      "index": {
        "description": "LogFormat is Haskell module that makes it trivial to parse access log records",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "LogFormat",
        "normalized": "",
        "package": "log2json",
        "partial": "Log Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eParser a is a Parsec parser for Strings that parses an \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "type",
        "fct-source": "src/Text-LogFormat.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "Parser is Parsec parser for Strings that parses an",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "Parser",
        "normalized": "",
        "package": "log2json",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#t:Rule",
      "description": {
        "fct-descr": "\u003cp\u003eA LogFormat string is made up of literal strings (which must match\n   exactly) and % directives that match a certain pattern and can have\n   an optional modifier string.\n\u003c/p\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "data",
        "fct-source": "src/Text-LogFormat.html#Rule",
        "fct-type": "data",
        "title": "Rule"
      },
      "index": {
        "description": "LogFormat string is made up of literal strings which must match exactly and directives that match certain pattern and can have an optional modifier string",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "Rule",
        "normalized": "",
        "package": "log2json",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:Keyword",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Keyword Char (Maybe String)",
        "fct-source": "src/Text-LogFormat.html#Rule",
        "fct-type": "function",
        "title": "Keyword"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "Keyword",
        "normalized": "",
        "package": "log2json",
        "partial": "Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:Literal",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Literal String",
        "fct-source": "src/Text-LogFormat.html#Rule",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "Literal",
        "normalized": "",
        "package": "log2json",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:buildLogRecordParser",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "[Rule] -\u003e Parser (Map String String)",
        "fct-source": "src/Text-LogFormat.html#buildLogRecordParser",
        "fct-type": "function",
        "title": "buildLogRecordParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "buildLogRecordParser",
        "normalized": "[Rule]-\u003eParser(Map String String)",
        "package": "log2json",
        "partial": "Log Record Parser",
        "signature": "[Rule]-\u003eParser(Map String String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:combineLiterals",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "[Rule] -\u003e [Rule]",
        "fct-source": "src/Text-LogFormat.html#combineLiterals",
        "fct-type": "function",
        "title": "combineLiterals"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "combineLiterals",
        "normalized": "[Rule]-\u003e[Rule]",
        "package": "log2json",
        "partial": "Literals",
        "signature": "[Rule]-\u003e[Rule]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:concatParser",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "String -\u003e Parser (String -\u003e String -\u003e String)",
        "fct-source": "src/Text-LogFormat.html#concatParser",
        "fct-type": "function",
        "title": "concatParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "concatParser",
        "normalized": "String-\u003eParser(String-\u003eString-\u003eString)",
        "package": "log2json",
        "partial": "Parser",
        "signature": "String-\u003eParser(String-\u003eString-\u003eString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:digits",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m [Char]",
        "fct-source": "src/Text-LogFormat.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "digits",
        "normalized": "ParsecT a b c[Char]",
        "package": "log2json",
        "partial": "",
        "signature": "ParsecT s u m[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:headerParser",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Maybe [Char] -\u003e ParsecT s u m (Map [Char] [Char]) -\u003e ParsecT s u m (Map [Char] [Char])",
        "fct-source": "src/Text-LogFormat.html#headerParser",
        "fct-type": "function",
        "title": "headerParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "headerParser",
        "normalized": "Maybe[Char]-\u003eParsecT a b c(Map[Char][Char])-\u003eParsecT a b c(Map[Char][Char])",
        "package": "log2json",
        "partial": "Parser",
        "signature": "Maybe[Char]-\u003eParsecT s u m(Map[Char][Char])-\u003eParsecT s u m(Map[Char][Char])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:hostnameParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser for hostnames\n\u003c/p\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Parser String",
        "fct-source": "src/Text-LogFormat.html#hostnameParser",
        "fct-type": "function",
        "title": "hostnameParser"
      },
      "index": {
        "description": "Parser for hostnames",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "hostnameParser",
        "normalized": "",
        "package": "log2json",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:iRule",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#iRule",
        "fct-type": "function",
        "title": "iRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "iRule",
        "normalized": "",
        "package": "log2json",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:ipParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser for IP addresses\n\u003c/p\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Parser String",
        "fct-source": "src/Text-LogFormat.html#ipParser",
        "fct-type": "function",
        "title": "ipParser"
      },
      "index": {
        "description": "Parser for IP addresses",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "ipParser",
        "normalized": "",
        "package": "log2json",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:keyValueParser",
      "description": {
        "fct-descr": "\u003cp\u003eTake a parser and convert it to parse a Map instead of just a value.\n\u003c/p\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "a -\u003e Parser b -\u003e Parser (Map a b)",
        "fct-source": "src/Text-LogFormat.html#keyValueParser",
        "fct-type": "function",
        "title": "keyValueParser"
      },
      "index": {
        "description": "Take parser and convert it to parse Map instead of just value",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "keyValueParser",
        "normalized": "a-\u003eParser b-\u003eParser(Map a b)",
        "package": "log2json",
        "partial": "Value Parser",
        "signature": "a-\u003eParser b-\u003eParser(Map a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:literal",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#literal",
        "fct-type": "function",
        "title": "literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "literal",
        "normalized": "",
        "package": "log2json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:literalRule",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#literalRule",
        "fct-type": "function",
        "title": "literalRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "literalRule",
        "normalized": "",
        "package": "log2json",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:logFormatParser",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "String -\u003e Either ParseError (Parser (Map String String))",
        "fct-source": "src/Text-LogFormat.html#logFormatParser",
        "fct-type": "function",
        "title": "logFormatParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "logFormatParser",
        "normalized": "String-\u003eEither ParseError(Parser(Map String String))",
        "package": "log2json",
        "partial": "Format Parser",
        "signature": "String-\u003eEither ParseError(Parser(Map String String))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:logFormatSpecParser",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m [Rule]",
        "fct-source": "src/Text-LogFormat.html#logFormatSpecParser",
        "fct-type": "function",
        "title": "logFormatSpecParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "logFormatSpecParser",
        "normalized": "ParsecT a b c[Rule]",
        "package": "log2json",
        "partial": "Format Spec Parser",
        "signature": "ParsecT s u m[Rule]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:parserFor",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a parser for a \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eKeyword\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cp\u003eTake a character that is used to define a field in the LogFormat\n   specification and return a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e that will parse out a key-value\n   for that field from the input. For example, %U in a LogFormat means\n   the URL path, so a URL path parser is available as\n\u003c/p\u003e\u003cpre\u003e\n       parserFor (Keyword 'U' Nothing)\n\u003c/pre\u003e",
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "Rule -\u003e Parser (Map String String)",
        "fct-source": "src/Text-LogFormat.html#parserFor",
        "fct-type": "function",
        "title": "parserFor"
      },
      "index": {
        "description": "Build parser for Rule For Keyword Rule Take character that is used to define field in the LogFormat specification and return Parser that will parse out key-value for that field from the input For example in LogFormat means the URL path so URL path parser is available as parserFor Keyword Nothing",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "parserFor",
        "normalized": "Rule-\u003eParser(Map String String)",
        "package": "log2json",
        "partial": "For",
        "signature": "Rule-\u003eParser(Map String String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:rule",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#rule",
        "fct-type": "function",
        "title": "rule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "rule",
        "normalized": "",
        "package": "log2json",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:sRule",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#sRule",
        "fct-type": "function",
        "title": "sRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "sRule",
        "normalized": "",
        "package": "log2json",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:simpleRule",
      "description": {
        "fct-module": "Text.LogFormat",
        "fct-package": "log2json",
        "fct-signature": "ParsecT s u m Rule",
        "fct-source": "src/Text-LogFormat.html#simpleRule",
        "fct-type": "function",
        "title": "simpleRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Text LogFormat",
        "module": "Text.LogFormat",
        "name": "simpleRule",
        "normalized": "",
        "package": "log2json",
        "partial": "Rule",
        "signature": ""
      }
    }
  }
]