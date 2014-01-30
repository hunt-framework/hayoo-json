[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an attoparsec-text parser into an iteratee.  This\n package is heavily based on attoparsec-enumerator for the\n original attoparsec on \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "Convert an attoparsec-text parser into an iteratee This package is heavily based on attoparsec-enumerator for the original attoparsec on ByteString",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "attoparsec-text-enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#t:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003eThe context and message from a \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "data",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "The context and message from Fail value",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "ParseError",
        "normalized": "",
        "package": "attoparsec-text-enumerator",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:ParseError",
      "description": {
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "ParseError",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
        "fct-type": "function",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "ParseError",
        "normalized": "",
        "package": "attoparsec-text-enumerator",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:errorContexts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "[String]",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
        "fct-type": "function",
        "title": "errorContexts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "errorContexts",
        "normalized": "[String]",
        "package": "attoparsec-text-enumerator",
        "partial": "Contexts",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:errorMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "String",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html#ParseError",
        "fct-type": "function",
        "title": "errorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "errorMessage",
        "normalized": "",
        "package": "attoparsec-text-enumerator",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/attoparsec-text-enumerator/docs/Data-Attoparsec-Text-Enumerator.html#v:iterParser",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an Attoparsec \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. The parser will\n be streamed characters until it returns \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf parsing fails, the iteratee's error value will contain a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Attoparsec.Text.Enumerator",
        "fct-package": "attoparsec-text-enumerator",
        "fct-signature": "Parser a -\u003e Iteratee Text m a",
        "fct-source": "src/Data-Attoparsec-Text-Enumerator.html#iterParser",
        "fct-type": "function",
        "title": "iterParser"
      },
      "index": {
        "description": "Convert an Attoparsec Parser into an Iteratee The parser will be streamed characters until it returns Done or Fail If parsing fails the iteratee error value will contain ParseError",
        "hierarchy": "Data Attoparsec Text Enumerator",
        "module": "Data.Attoparsec.Text.Enumerator",
        "name": "iterParser",
        "normalized": "Parser a-\u003eIteratee Text b a",
        "package": "attoparsec-text-enumerator",
        "partial": "Parser",
        "signature": "Parser a-\u003eIteratee Text m a"
      }
    }
  }
]