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
        "word": "bytestringparser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "ParseError",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#ParseError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "ParseError",
          "package": "bytestringparser",
          "partial": "Parse Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "Parser",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "Parser",
          "package": "bytestringparser",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Name the parser.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "\u003c?\u003e",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e String -\u003e Parser a",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#%3C%3F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:\u003c?\u003e\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:\u003c?\u003e\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:\u003c?\u003e\"]"
        },
        "index": {
          "description": "Name the parser",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "\u003c?\u003e",
          "normalized": "Parser a-\u003eString-\u003eParser a",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:\u003c?\u003e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "anyChar",
          "package": "bytestringparser",
          "signature": "Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#anyChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "anyChar",
          "package": "bytestringparser",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a specific character.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "char",
          "package": "bytestringparser",
          "signature": "Char -\u003e Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#char",
          "type": "function"
        },
        "index": {
          "description": "Satisfy specific character",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "char",
          "normalized": "Char-\u003eParser Char",
          "package": "bytestringparser",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Apply the given parser repeatedly, returning every parse result.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "count",
          "package": "bytestringparser",
          "signature": "Int -\u003e Parser a -\u003e Parser [a]",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#count",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:count\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:count\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:count\"]"
        },
        "index": {
          "description": "Apply the given parser repeatedly returning every parse result",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "count",
          "normalized": "Int-\u003eParser a-\u003eParser[a]",
          "package": "bytestringparser",
          "signature": "Int-\u003eParser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "digit",
          "package": "bytestringparser",
          "signature": "Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#digit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "digit",
          "package": "bytestringparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "eitherP",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser b -\u003e Parser (Either a b)",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#eitherP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:eitherP\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:eitherP\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:eitherP\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "eitherP",
          "normalized": "Parser a-\u003eParser b-\u003eParser(Either a b)",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eParser b-\u003eParser(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:eitherP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Detect 'end of file'.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "eof",
          "package": "bytestringparser",
          "signature": "Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#eof",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:eof\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:eof\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:eof\"]"
        },
        "index": {
          "description": "Detect end of file",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "eof",
          "normalized": "Parser()",
          "package": "bytestringparser",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get number of bytes consumed so far.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "getConsumed",
          "package": "bytestringparser",
          "signature": "Parser Int64",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#getConsumed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:getConsumed\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:getConsumed\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:getConsumed\"]"
        },
        "index": {
          "description": "Get number of bytes consumed so far",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "getConsumed",
          "package": "bytestringparser",
          "partial": "Consumed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:getConsumed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get remaining input.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "getInput",
          "package": "bytestringparser",
          "signature": "Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#getInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:getInput\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:getInput\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:getInput\"]"
        },
        "index": {
          "description": "Get remaining input",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "getInput",
          "package": "bytestringparser",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "inClass",
          "package": "bytestringparser",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#inClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "inClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "bytestringparser",
          "partial": "Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:inClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "letter",
          "package": "bytestringparser",
          "signature": "Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#letter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "letter",
          "package": "bytestringparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "lookAhead",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser a",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#lookAhead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:lookAhead\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:lookAhead\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:lookAhead\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "lookAhead",
          "normalized": "Parser a-\u003eParser a",
          "package": "bytestringparser",
          "partial": "Ahead",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "manyTill",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser b -\u003e Parser [a]",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#manyTill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:manyTill\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:manyTill\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:manyTill\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "manyTill",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "bytestringparser",
          "partial": "Till",
          "signature": "Parser a-\u003eParser b-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse some input with the given parser and return that input\n without copying it.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "match",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#match",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:match\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:match\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:match\"]"
        },
        "index": {
          "description": "Parse some input with the given parser and return that input without copying it",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "match",
          "normalized": "Parser a-\u003eParser ByteString",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a specific character.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "notChar",
          "package": "bytestringparser",
          "signature": "Char -\u003e Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#notChar",
          "type": "function"
        },
        "index": {
          "description": "Satisfy specific character",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "notChar",
          "normalized": "Char-\u003eParser Char",
          "package": "bytestringparser",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test that a parser returned a non-null ByteString.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "notEmpty",
          "package": "bytestringparser",
          "signature": "Parser ByteString -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#notEmpty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:notEmpty\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:notEmpty\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:notEmpty\"]"
        },
        "index": {
          "description": "Test that parser returned non-null ByteString",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "notEmpty",
          "normalized": "Parser ByteString-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "Empty",
          "signature": "Parser ByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:notEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "notInClass",
          "package": "bytestringparser",
          "signature": "String -\u003e Char -\u003e Bool",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#notInClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "notInClass",
          "normalized": "String-\u003eChar-\u003eBool",
          "package": "bytestringparser",
          "partial": "In Class",
          "signature": "String-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:notInClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run a parser.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "parse",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e ByteString -\u003e (ByteString, Either ParseError a)",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parse\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:parse\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:parse\"]"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "parse",
          "normalized": "Parser a-\u003eByteString-\u003e(ByteString,Either ParseError a)",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eByteString-\u003e(ByteString,Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "parseAt",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e ByteString -\u003e Int64 -\u003e (ByteString, Either ParseError (a, Int64))",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#parseAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parseAt\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:parseAt\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:parseAt\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "parseAt",
          "normalized": "Parser a-\u003eByteString-\u003eInt-\u003e(ByteString,Either ParseError(a,Int))",
          "package": "bytestringparser",
          "partial": "At",
          "signature": "Parser a-\u003eByteString-\u003eInt-\u003e(ByteString,Either ParseError(a,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parseAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "parseTest",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e ByteString -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#parseTest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parseTest\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:parseTest\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:parseTest\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "parseTest",
          "normalized": "Parser a-\u003eByteString-\u003eIO()",
          "package": "bytestringparser",
          "partial": "Test",
          "signature": "Parser a-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "peek",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser (Maybe a)",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#peek",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:peek\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:peek\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:peek\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "peek",
          "normalized": "Parser a-\u003eParser(Maybe a)",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Character parser.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "satisfy",
          "package": "bytestringparser",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Character parser",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "bytestringparser",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "sepBy",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser s -\u003e Parser [a]",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#sepBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:sepBy\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:sepBy\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:sepBy\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "sepBy",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "bytestringparser",
          "partial": "By",
          "signature": "Parser a-\u003eParser s-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "sepBy1",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser s -\u003e Parser [a]",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#sepBy1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:sepBy1\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:sepBy1\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:sepBy1\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "sepBy1",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "bytestringparser",
          "partial": "By",
          "signature": "Parser a-\u003eParser s-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/tt\u003e - skip zero or many instances of the parser\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "skipMany",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#skipMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipMany\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:skipMany\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:skipMany\"]"
        },
        "index": {
          "description": "skipMany skip zero or many instances of the parser",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipMany",
          "normalized": "Parser a-\u003eParser()",
          "package": "bytestringparser",
          "partial": "Many",
          "signature": "Parser a-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003ctt\u003e\u003ca\u003eskipMany1\u003c/a\u003e\u003c/tt\u003e - skip one or many instances of the parser       \n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "skipMany1",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#skipMany1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipMany1\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:skipMany1\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:skipMany1\"]"
        },
        "index": {
          "description": "skipMany1 skip one or many instances of the parser",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipMany1",
          "normalized": "Parser a-\u003eParser()",
          "package": "bytestringparser",
          "partial": "Many",
          "signature": "Parser a-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Skip over white space.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipSpace",
          "package": "bytestringparser",
          "signature": "Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#skipSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip over white space",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipSpace",
          "normalized": "Parser()",
          "package": "bytestringparser",
          "partial": "Space",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Skip over characters while the predicate is true.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipWhile",
          "package": "bytestringparser",
          "signature": "(Char -\u003e Bool) -\u003e Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#skipWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip over characters while the predicate is true",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "skipWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser()",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "space",
          "package": "bytestringparser",
          "signature": "Parser Char",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "space",
          "package": "bytestringparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a literal string.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "string",
          "package": "bytestringparser",
          "signature": "ByteString -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:string\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:string\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:string\"]"
        },
        "index": {
          "description": "Satisfy literal string",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "string",
          "normalized": "ByteString-\u003eParser ByteString",
          "package": "bytestringparser",
          "signature": "ByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a literal string, ignoring case.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "stringCI",
          "package": "bytestringparser",
          "signature": "ByteString -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#stringCI",
          "type": "function"
        },
        "index": {
          "description": "Satisfy literal string ignoring case",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "stringCI",
          "normalized": "ByteString-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "CI",
          "signature": "ByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:stringCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "takeAll",
          "package": "bytestringparser",
          "signature": "Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#takeAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:takeAll\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeAll\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:takeAll\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeAll",
          "package": "bytestringparser",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:takeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeTill",
          "package": "bytestringparser",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#takeTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeTill",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "Till",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Consume characters while the predicate is true.\n",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeWhile",
          "package": "bytestringparser",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume characters while the predicate is true",
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeWhile1",
          "package": "bytestringparser",
          "signature": "(Char -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Char8.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "takeWhile1",
          "normalized": "(Char-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Char8\",\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "try",
          "package": "bytestringparser",
          "signature": "Parser a -\u003e Parser a",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#try",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:try\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:try\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:try\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Char8",
          "module": "Data.ParserCombinators.Attoparsec.Char8",
          "name": "try",
          "normalized": "Parser a-\u003eParser a",
          "package": "bytestringparser",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Char8.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "FastSet",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-FastSet.html#FastSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec FastSet",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "FastSet",
          "package": "bytestringparser",
          "partial": "Fast Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-FastSet.html#t:FastSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "fromSet",
          "package": "bytestringparser",
          "signature": "FastSet -\u003e ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-FastSet.html#fromSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec FastSet",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "fromSet",
          "normalized": "FastSet-\u003eByteString",
          "package": "bytestringparser",
          "partial": "Set",
          "signature": "FastSet-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-FastSet.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Check the table for membership.\n",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "memberChar",
          "package": "bytestringparser",
          "signature": "Char -\u003e FastSet -\u003e Bool",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-FastSet.html#memberChar",
          "type": "function"
        },
        "index": {
          "description": "Check the table for membership",
          "hierarchy": "Data ParserCombinators Attoparsec FastSet",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "memberChar",
          "normalized": "Char-\u003eFastSet-\u003eBool",
          "package": "bytestringparser",
          "partial": "Char",
          "signature": "Char-\u003eFastSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-FastSet.html#v:memberChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Check the table for membership.\n",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "memberWord8",
          "package": "bytestringparser",
          "signature": "Word8 -\u003e FastSet -\u003e Bool",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-FastSet.html#memberWord8",
          "type": "function"
        },
        "index": {
          "description": "Check the table for membership",
          "hierarchy": "Data ParserCombinators Attoparsec FastSet",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "memberWord8",
          "normalized": "Word-\u003eFastSet-\u003eBool",
          "package": "bytestringparser",
          "partial": "Word",
          "signature": "Word-\u003eFastSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-FastSet.html#v:memberWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a character set.\n",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "set",
          "package": "bytestringparser",
          "signature": "ByteString -\u003e FastSet",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-FastSet.html#set",
          "type": "function"
        },
        "index": {
          "description": "Create character set",
          "hierarchy": "Data ParserCombinators Attoparsec FastSet",
          "module": "Data.ParserCombinators.Attoparsec.FastSet",
          "name": "set",
          "normalized": "ByteString-\u003eFastSet",
          "package": "bytestringparser",
          "signature": "ByteString-\u003eFastSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-FastSet.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "ParseError",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#ParseError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "ParseError",
          "package": "bytestringparser",
          "partial": "Parse Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "Parser",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "Parser",
          "package": "bytestringparser",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "anyWord8",
          "package": "bytestringparser",
          "signature": "Parser Word8",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#anyWord8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:anyWord8\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:anyWord8\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "anyWord8",
          "package": "bytestringparser",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:anyWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a specific character.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "notWord8",
          "package": "bytestringparser",
          "signature": "Word8 -\u003e Parser Word8",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#notWord8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:notWord8\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:notWord8\"]"
        },
        "index": {
          "description": "Satisfy specific character",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "notWord8",
          "normalized": "Word-\u003eParser Word",
          "package": "bytestringparser",
          "partial": "Word",
          "signature": "Word-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:notWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Character parser.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "satisfy",
          "package": "bytestringparser",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser Word8",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#satisfy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:satisfy\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:satisfy\"]"
        },
        "index": {
          "description": "Character parser",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "satisfy",
          "normalized": "(Word-\u003eBool)-\u003eParser Word",
          "package": "bytestringparser",
          "signature": "(Word-\u003eBool)-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Skip over characters while the predicate is true.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "skipWhile",
          "package": "bytestringparser",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ()",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#skipWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:skipWhile\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:skipWhile\"]"
        },
        "index": {
          "description": "Skip over characters while the predicate is true",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "skipWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser()",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a literal string, after applying a transformation to both\n it and the matching text.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "stringTransform",
          "package": "bytestringparser",
          "signature": "(ByteString -\u003e ByteString) -\u003e ByteString -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#stringTransform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:stringTransform\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:stringTransform\"]"
        },
        "index": {
          "description": "Satisfy literal string after applying transformation to both it and the matching text",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "stringTransform",
          "normalized": "(ByteString-\u003eByteString)-\u003eByteString-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "Transform",
          "signature": "(ByteString-\u003eByteString)-\u003eByteString-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:stringTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "takeTill",
          "package": "bytestringparser",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#takeTill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeTill\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:takeTill\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "takeTill",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "Till",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Consume characters while the predicate is true.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "takeWhile",
          "package": "bytestringparser",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#takeWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeWhile\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:takeWhile\"]"
        },
        "index": {
          "description": "Consume characters while the predicate is true",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "takeWhile1",
          "package": "bytestringparser",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#takeWhile1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeWhile1\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:takeWhile1\"]"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "takeWhile1",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "bytestringparser",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Satisfy a specific character.\n",
          "module": "[\"Data.ParserCombinators.Attoparsec.Internal\",\"Data.ParserCombinators.Attoparsec\"]",
          "name": "word8",
          "package": "bytestringparser",
          "signature": "Word8 -\u003e Parser Word8",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#word8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:word8\",\"http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#v:word8\"]"
        },
        "index": {
          "description": "Satisfy specific character",
          "hierarchy": "Data ParserCombinators Attoparsec Internal",
          "module": "Data.ParserCombinators.Attoparsec.Internal",
          "name": "word8",
          "normalized": "Word-\u003eParser Word",
          "package": "bytestringparser",
          "signature": "Word-\u003eParser Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec-Internal.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec",
          "name": "ParseError",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#ParseError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec",
          "module": "Data.ParserCombinators.Attoparsec",
          "name": "ParseError",
          "package": "bytestringparser",
          "partial": "Parse Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ParserCombinators.Attoparsec",
          "name": "Parser",
          "package": "bytestringparser",
          "source": "http://hackage.haskell.org/package/bytestringparser/docs/src/Data-ParserCombinators-Attoparsec-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ParserCombinators Attoparsec",
          "module": "Data.ParserCombinators.Attoparsec",
          "name": "Parser",
          "package": "bytestringparser",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestringparser/docs/Data-ParserCombinators-Attoparsec.html#t:Parser"
      }
    }
  ]
]