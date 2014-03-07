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
        "word": "attoparsec-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Enumerator",
          "name": "Enumerator",
          "package": "attoparsec-enumerator",
          "source": "src/Data-Attoparsec-Enumerator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "Enumerator",
          "package": "attoparsec-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types which may be consumed by an Attoparsec parser.\n\u003c/p\u003e\u003cp\u003eSince: 0.3\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Enumerator",
          "name": "AttoparsecInput",
          "package": "attoparsec-enumerator",
          "source": "src/Data-Attoparsec-Enumerator.html#AttoparsecInput",
          "type": "class"
        },
        "index": {
          "description": "class of types which may be consumed by an Attoparsec parser Since",
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "AttoparsecInput",
          "package": "attoparsec-enumerator",
          "partial": "Attoparsec Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#t:AttoparsecInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context and message from a \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-enumerator",
          "source": "src/Data-Attoparsec-Enumerator.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The context and message from Fail value",
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-enumerator",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-enumerator",
          "signature": "ParseError",
          "source": "src/Data-Attoparsec-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-enumerator",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Enumerator",
          "name": "errorContexts",
          "package": "attoparsec-enumerator",
          "signature": "[String]",
          "source": "src/Data-Attoparsec-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "errorContexts",
          "normalized": "[String]",
          "package": "attoparsec-enumerator",
          "partial": "Contexts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#v:errorContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Enumerator",
          "name": "errorMessage",
          "package": "attoparsec-enumerator",
          "signature": "String",
          "source": "src/Data-Attoparsec-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "errorMessage",
          "package": "attoparsec-enumerator",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an Attoparsec \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. The parser will\n be streamed bytes until it returns \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf parsing fails, a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e will be thrown with \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e. Use\n \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e to catch it.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Enumerator",
          "name": "iterParser",
          "package": "attoparsec-enumerator",
          "signature": "Parser a b -\u003e Iteratee a m b",
          "source": "src/Data-Attoparsec-Enumerator.html#iterParser",
          "type": "function"
        },
        "index": {
          "description": "Convert an Attoparsec Parser into an Iteratee The parser will be streamed bytes until it returns Done or Fail If parsing fails ParseError will be thrown with throwError Use catchError to catch it",
          "hierarchy": "Data Attoparsec Enumerator",
          "module": "Data.Attoparsec.Enumerator",
          "name": "iterParser",
          "normalized": "Parser a b-\u003eIteratee a c b",
          "package": "attoparsec-enumerator",
          "partial": "Parser",
          "signature": "Parser a b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-enumerator/docs/Data-Attoparsec-Enumerator.html#v:iterParser"
      }
    }
  ]
]