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
        "word": "log2json"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogFormat is a Haskell module that makes it trivial to parse access\n     log records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.LogFormat",
          "name": "LogFormat",
          "package": "log2json",
          "source": "src/Text-LogFormat.html",
          "type": "module"
        },
        "index": {
          "description": "LogFormat is Haskell module that makes it trivial to parse access log records",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "LogFormat",
          "package": "log2json",
          "partial": "Log Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser a is a Parsec parser for Strings that parses an \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.LogFormat",
          "name": "Parser",
          "package": "log2json",
          "source": "src/Text-LogFormat.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Parser is Parsec parser for Strings that parses an",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "Parser",
          "package": "log2json",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA LogFormat string is made up of literal strings (which must match\n   exactly) and % directives that match a certain pattern and can have\n   an optional modifier string.\n\u003c/p\u003e",
          "module": "Text.LogFormat",
          "name": "Rule",
          "package": "log2json",
          "source": "src/Text-LogFormat.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "LogFormat string is made up of literal strings which must match exactly and directives that match certain pattern and can have an optional modifier string",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "Rule",
          "package": "log2json",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "Keyword",
          "package": "log2json",
          "signature": "Keyword Char (Maybe String)",
          "source": "src/Text-LogFormat.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "Keyword",
          "package": "log2json",
          "partial": "Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:Keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "Literal",
          "package": "log2json",
          "signature": "Literal String",
          "source": "src/Text-LogFormat.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "Literal",
          "package": "log2json",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "buildLogRecordParser",
          "package": "log2json",
          "signature": "[Rule] -\u003e Parser (Map String String)",
          "source": "src/Text-LogFormat.html#buildLogRecordParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "buildLogRecordParser",
          "normalized": "[Rule]-\u003eParser(Map String String)",
          "package": "log2json",
          "partial": "Log Record Parser",
          "signature": "[Rule]-\u003eParser(Map String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:buildLogRecordParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "combineLiterals",
          "package": "log2json",
          "signature": "[Rule] -\u003e [Rule]",
          "source": "src/Text-LogFormat.html#combineLiterals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "combineLiterals",
          "normalized": "[Rule]-\u003e[Rule]",
          "package": "log2json",
          "partial": "Literals",
          "signature": "[Rule]-\u003e[Rule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:combineLiterals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "concatParser",
          "package": "log2json",
          "signature": "String -\u003e Parser (String -\u003e String -\u003e String)",
          "source": "src/Text-LogFormat.html#concatParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "concatParser",
          "normalized": "String-\u003eParser(String-\u003eString-\u003eString)",
          "package": "log2json",
          "partial": "Parser",
          "signature": "String-\u003eParser(String-\u003eString-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:concatParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "digits",
          "package": "log2json",
          "signature": "ParsecT s u m [Char]",
          "source": "src/Text-LogFormat.html#digits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "digits",
          "normalized": "ParsecT a b c[Char]",
          "package": "log2json",
          "signature": "ParsecT s u m[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:digits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "headerParser",
          "package": "log2json",
          "signature": "Maybe [Char] -\u003e ParsecT s u m (Map [Char] [Char]) -\u003e ParsecT s u m (Map [Char] [Char])",
          "source": "src/Text-LogFormat.html#headerParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "headerParser",
          "normalized": "Maybe[Char]-\u003eParsecT a b c(Map[Char][Char])-\u003eParsecT a b c(Map[Char][Char])",
          "package": "log2json",
          "partial": "Parser",
          "signature": "Maybe[Char]-\u003eParsecT s u m(Map[Char][Char])-\u003eParsecT s u m(Map[Char][Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:headerParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for hostnames\n\u003c/p\u003e",
          "module": "Text.LogFormat",
          "name": "hostnameParser",
          "package": "log2json",
          "signature": "Parser String",
          "source": "src/Text-LogFormat.html#hostnameParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for hostnames",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "hostnameParser",
          "package": "log2json",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:hostnameParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "iRule",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#iRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "iRule",
          "package": "log2json",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:iRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for IP addresses\n\u003c/p\u003e",
          "module": "Text.LogFormat",
          "name": "ipParser",
          "package": "log2json",
          "signature": "Parser String",
          "source": "src/Text-LogFormat.html#ipParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for IP addresses",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "ipParser",
          "package": "log2json",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:ipParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a parser and convert it to parse a Map instead of just a value.\n\u003c/p\u003e",
          "module": "Text.LogFormat",
          "name": "keyValueParser",
          "package": "log2json",
          "signature": "a -\u003e Parser b -\u003e Parser (Map a b)",
          "source": "src/Text-LogFormat.html#keyValueParser",
          "type": "function"
        },
        "index": {
          "description": "Take parser and convert it to parse Map instead of just value",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "keyValueParser",
          "normalized": "a-\u003eParser b-\u003eParser(Map a b)",
          "package": "log2json",
          "partial": "Value Parser",
          "signature": "a-\u003eParser b-\u003eParser(Map a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:keyValueParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "literal",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "literal",
          "package": "log2json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "literalRule",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#literalRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "literalRule",
          "package": "log2json",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:literalRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "logFormatParser",
          "package": "log2json",
          "signature": "String -\u003e Either ParseError (Parser (Map String String))",
          "source": "src/Text-LogFormat.html#logFormatParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "logFormatParser",
          "normalized": "String-\u003eEither ParseError(Parser(Map String String))",
          "package": "log2json",
          "partial": "Format Parser",
          "signature": "String-\u003eEither ParseError(Parser(Map String String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:logFormatParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "logFormatSpecParser",
          "package": "log2json",
          "signature": "ParsecT s u m [Rule]",
          "source": "src/Text-LogFormat.html#logFormatSpecParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "logFormatSpecParser",
          "normalized": "ParsecT a b c[Rule]",
          "package": "log2json",
          "partial": "Format Spec Parser",
          "signature": "ParsecT s u m[Rule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:logFormatSpecParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a parser for a \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eKeyword\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cp\u003eTake a character that is used to define a field in the LogFormat\n   specification and return a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e that will parse out a key-value\n   for that field from the input. For example, %U in a LogFormat means\n   the URL path, so a URL path parser is available as\n\u003c/p\u003e\u003cpre\u003e\n       parserFor (Keyword 'U' Nothing)\n\u003c/pre\u003e",
          "module": "Text.LogFormat",
          "name": "parserFor",
          "package": "log2json",
          "signature": "Rule -\u003e Parser (Map String String)",
          "source": "src/Text-LogFormat.html#parserFor",
          "type": "function"
        },
        "index": {
          "description": "Build parser for Rule For Keyword Rule Take character that is used to define field in the LogFormat specification and return Parser that will parse out key-value for that field from the input For example in LogFormat means the URL path so URL path parser is available as parserFor Keyword Nothing",
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "parserFor",
          "normalized": "Rule-\u003eParser(Map String String)",
          "package": "log2json",
          "partial": "For",
          "signature": "Rule-\u003eParser(Map String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:parserFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "rule",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "rule",
          "package": "log2json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "sRule",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#sRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "sRule",
          "package": "log2json",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:sRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.LogFormat",
          "name": "simpleRule",
          "package": "log2json",
          "signature": "ParsecT s u m Rule",
          "source": "src/Text-LogFormat.html#simpleRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text LogFormat",
          "module": "Text.LogFormat",
          "name": "simpleRule",
          "package": "log2json",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log2json/docs/Text-LogFormat.html#v:simpleRule"
      }
    }
  ]
]