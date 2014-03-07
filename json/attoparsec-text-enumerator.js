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
        "word": "attoparsec-text-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an attoparsec-text parser into an iteratee.  This\n package is heavily based on attoparsec-enumerator for the\n original attoparsec on \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "Enumerator",
          "package": "attoparsec-text-enumerator",
          "source": "src/Data-Attoparsec-Text-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "Convert an attoparsec-text parser into an iteratee This package is heavily based on attoparsec-enumerator for the original attoparsec on ByteString",
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "Enumerator",
          "package": "attoparsec-text-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context and message from a \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-text-enumerator",
          "source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The context and message from Fail value",
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-text-enumerator",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-text-enumerator",
          "signature": "ParseError",
          "source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "ParseError",
          "package": "attoparsec-text-enumerator",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "errorContexts",
          "package": "attoparsec-text-enumerator",
          "signature": "[String]",
          "source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "errorContexts",
          "normalized": "[String]",
          "package": "attoparsec-text-enumerator",
          "partial": "Contexts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:errorContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "errorMessage",
          "package": "attoparsec-text-enumerator",
          "signature": "String",
          "source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "errorMessage",
          "package": "attoparsec-text-enumerator",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an Attoparsec \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. The parser will\n be streamed characters until it returns \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf parsing fails, the iteratee's error value will contain a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "iterParser",
          "package": "attoparsec-text-enumerator",
          "signature": "Parser a -\u003e Iteratee Text m a",
          "source": "src/Data-Attoparsec-Text-Enumerator.html#iterParser",
          "type": "function"
        },
        "index": {
          "description": "Convert an Attoparsec Parser into an Iteratee The parser will be streamed characters until it returns Done or Fail If parsing fails the iteratee error value will contain ParseError",
          "hierarchy": "Data Attoparsec Text Enumerator",
          "module": "Data.Attoparsec.Text.Enumerator",
          "name": "iterParser",
          "normalized": "Parser a-\u003eIteratee Text b a",
          "package": "attoparsec-text-enumerator",
          "partial": "Parser",
          "signature": "Parser a-\u003eIteratee Text m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:iterParser"
      }
    }
  ]
]