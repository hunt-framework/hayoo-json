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
        "word": "format"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Format",
          "name": "Format",
          "package": "format",
          "source": "src/Text-Format.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "Format",
          "package": "format",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a format string into a \u003ccode\u003eFormat\u003c/code\u003e object ready to be used in\n  \u003ccode\u003e\u003ca\u003erenderFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003escanFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe format string consists of raw tokens (ordinary characters), and\n  variables, marked '$varname' or '${varname}'. The dollar sign may be used as\n  a raw token by escaping it with another dollar sign, like so: \u003ccode\u003e$$\u003c/code\u003e. (If you\n  want a variable named $, use '${$}'.)\n\u003c/p\u003e\u003cp\u003eNot all syntactically valid parse strings are semantically valid. In\n  particular, two variables must not occur consecutively without interleaving\n  raw tokens. (If this were permitted, the resulting grammar would be\n  ambiguous.)\n\u003c/p\u003e\u003cp\u003eVariable names may be used twice; however, this will make the result of\n  \u003ccode\u003e\u003ca\u003escanFormat\u003c/a\u003e\u003c/code\u003e somewhat difficult to deal with.\n\u003c/p\u003e\u003cp\u003eThe functions \u003ccode\u003e\u003ca\u003erenderFormatString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003escanFormatString\u003c/a\u003e\u003c/code\u003e are provided as\n  conveniences to make doing this explicitly unnecessary.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "parseFormat",
          "package": "format",
          "signature": "String -\u003e Either String Format",
          "source": "src/Text-Format.html#parseFormat",
          "type": "function"
        },
        "index": {
          "description": "Parse format string into Format object ready to be used in renderFormat and scanFormat The format string consists of raw tokens ordinary characters and variables marked varname or varname The dollar sign may be used as raw token by escaping it with another dollar sign like so If you want variable named use Not all syntactically valid parse strings are semantically valid In particular two variables must not occur consecutively without interleaving raw tokens If this were permitted the resulting grammar would be ambiguous Variable names may be used twice however this will make the result of scanFormat somewhat difficult to deal with The functions renderFormatString and scanFormatString are provided as conveniences to make doing this explicitly unnecessary",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "parseFormat",
          "normalized": "String-\u003eEither String Format",
          "package": "format",
          "partial": "Format",
          "signature": "String-\u003eEither String Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#v:parseFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Format",
          "name": "renderFormat",
          "package": "format",
          "signature": "Format -\u003e (String -\u003e Maybe String) -\u003e Either String String",
          "source": "src/Text-Format.html#renderFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "renderFormat",
          "normalized": "Format-\u003e(String-\u003eMaybe String)-\u003eEither String String",
          "package": "format",
          "partial": "Format",
          "signature": "Format-\u003e(String-\u003eMaybe String)-\u003eEither String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#v:renderFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient alternative to using \u003ccode\u003e\u003ca\u003eparseFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erenderFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "renderFormatString",
          "package": "format",
          "signature": "String -\u003e (String -\u003e Maybe String) -\u003e Either String String",
          "source": "src/Text-Format.html#renderFormatString",
          "type": "function"
        },
        "index": {
          "description": "more convenient alternative to using parseFormat and renderFormat",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "renderFormatString",
          "normalized": "String-\u003e(String-\u003eMaybe String)-\u003eEither String String",
          "package": "format",
          "partial": "Format String",
          "signature": "String-\u003e(String-\u003eMaybe String)-\u003eEither String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#v:renderFormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string using the given format as a guide, generating a list of pairs\n  of variable names and values.\n\u003c/p\u003e\u003cp\u003eTo determine where a variable ends, the entire subsequent string of raw\n  tokens (until the next variable or the end of the string) is used as a\n  terminator. It must occur verbatim in the scanned string or the parse will\n  fail. The smallest match is used: if the format string is '${a}:' and the\n  input string is '1:2:', the parse will exit with an error, as only the first\n  character will be considered part of the variable\n  \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "scanFormat",
          "package": "format",
          "signature": "Format -\u003e String -\u003e Either String [(String, String)]",
          "source": "src/Text-Format.html#scanFormat",
          "type": "function"
        },
        "index": {
          "description": "Parses string using the given format as guide generating list of pairs of variable names and values To determine where variable ends the entire subsequent string of raw tokens until the next variable or the end of the string is used as terminator It must occur verbatim in the scanned string or the parse will fail The smallest match is used if the format string is and the input string is the parse will exit with an error as only the first character will be considered part of the variable",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "scanFormat",
          "normalized": "Format-\u003eString-\u003eEither String[(String,String)]",
          "package": "format",
          "partial": "Format",
          "signature": "Format-\u003eString-\u003eEither String[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#v:scanFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more convenient alternative to using \u003ccode\u003e\u003ca\u003eparseFormat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003escanFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Format",
          "name": "scanFormatString",
          "package": "format",
          "signature": "String -\u003e String -\u003e Either String [(String, String)]",
          "source": "src/Text-Format.html#scanFormatString",
          "type": "function"
        },
        "index": {
          "description": "more convenient alternative to using parseFormat and scanFormat",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "scanFormatString",
          "normalized": "String-\u003eString-\u003eEither String[(String,String)]",
          "package": "format",
          "partial": "Format String",
          "signature": "String-\u003eString-\u003eEither String[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/format/docs/Text-Format.html#v:scanFormatString"
      }
    }
  ]
]