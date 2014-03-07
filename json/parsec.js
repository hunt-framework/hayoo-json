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
        "word": "parsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake lazy ByteStrings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "Lazy",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Make lazy ByteStrings an instance of Stream with Char token type",
          "hierarchy": "Text Parsec ByteString Lazy",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "Lazy",
          "package": "parsec",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString-Lazy.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec ByteString Lazy",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString-Lazy.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString-Lazy.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec ByteString Lazy",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString-Lazy.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a lazy bytestring parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "parseFromFile",
          "package": "parsec",
          "signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
          "source": "src/Text-Parsec-ByteString-Lazy.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "description": "parseFromFile filePath runs lazy bytestring parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
          "hierarchy": "Text Parsec ByteString Lazy",
          "module": "Text.Parsec.ByteString.Lazy",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "package": "parsec",
          "partial": "From File",
          "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString-Lazy.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake strict ByteStrings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.ByteString",
          "name": "ByteString",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Make strict ByteStrings an instance of Stream with Char token type",
          "hierarchy": "Text Parsec ByteString",
          "module": "Text.Parsec.ByteString",
          "name": "ByteString",
          "package": "parsec",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.ByteString",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec ByteString",
          "module": "Text.Parsec.ByteString",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.ByteString",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-ByteString.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec ByteString",
          "module": "Text.Parsec.ByteString",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a strict bytestring parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
          "module": "Text.Parsec.ByteString",
          "name": "parseFromFile",
          "package": "parsec",
          "signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
          "source": "src/Text-Parsec-ByteString.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "description": "parseFromFile filePath runs strict bytestring parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
          "hierarchy": "Text Parsec ByteString",
          "module": "Text.Parsec.ByteString",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "package": "parsec",
          "partial": "From File",
          "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-ByteString.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used character parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Char",
          "name": "Char",
          "package": "parsec",
          "source": "src/Text-Parsec-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used character parsers",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "Char",
          "package": "parsec",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter or digit (a character between '0' and '9').\n Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "alphaNum",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#alphaNum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:alphaNum\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:alphaNum\"]"
        },
        "index": {
          "description": "Parses letter or digit character between and Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "alphaNum",
          "package": "parsec",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:alphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "anyChar",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#anyChar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:anyChar\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:anyChar\"]"
        },
        "index": {
          "description": "This parser succeeds for any character Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "anyChar",
          "package": "parsec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character (i.e. \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  semiColon  = char ';'\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "char",
          "package": "parsec",
          "signature": "Char -\u003e ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:char\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:char\"]"
        },
        "index": {
          "description": "char parses single character Returns the parsed character i.e semiColon char",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "char",
          "normalized": "Char-\u003eParsecT a b c Char",
          "package": "parsec",
          "signature": "Char-\u003eParsecT s u m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a digit. Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "digit",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#digit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:digit\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:digit\"]"
        },
        "index": {
          "description": "Parses digit Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "digit",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n 'f' or 'A' and 'F'). Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "hexDigit",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#hexDigit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:hexDigit\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:hexDigit\"]"
        },
        "index": {
          "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "hexDigit",
          "package": "parsec",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:hexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter (an upper case or lower case character). Returns the\n parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "letter",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#letter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:letter\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:letter\"]"
        },
        "index": {
          "description": "Parses letter an upper case or lower case character Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "letter",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a lower case character (a character between 'a' and 'z').\n Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "lower",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#lower",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:lower\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:lower\"]"
        },
        "index": {
          "description": "Parses lower case character character between and Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "lower",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a newline character ('\\n'). Returns a newline character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "newline",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#newline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:newline\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:newline\"]"
        },
        "index": {
          "description": "Parses newline character Returns newline character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "newline",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "noneOf",
          "package": "parsec",
          "signature": "[Char] -\u003e ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#noneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:noneOf\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:noneOf\"]"
        },
        "index": {
          "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character consonant noneOf aeiou",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "noneOf",
          "normalized": "[Char]-\u003eParsecT a b c Char",
          "package": "parsec",
          "partial": "Of",
          "signature": "[Char]-\u003eParsecT s u m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an octal digit (a character between '0' and '7'). Returns\n the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "octDigit",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#octDigit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:octDigit\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:octDigit\"]"
        },
        "index": {
          "description": "Parses an octal digit character between and Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "octDigit",
          "package": "parsec",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:octDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied\n list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "oneOf",
          "package": "parsec",
          "signature": "[Char] -\u003e ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#oneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:oneOf\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:oneOf\"]"
        },
        "index": {
          "description": "oneOf cs succeeds if the current character is in the supplied list of characters cs Returns the parsed character See also satisfy vowel oneOf aeiou",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "oneOf",
          "normalized": "[Char]-\u003eParsecT a b c Char",
          "package": "parsec",
          "partial": "Of",
          "signature": "[Char]-\u003eParsecT s u m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy f\u003c/code\u003e succeeds for any character for which the\n supplied function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "satisfy",
          "package": "parsec",
          "signature": "(Char -\u003e Bool) -\u003e ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#satisfy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:satisfy\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:satisfy\"]"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the supplied function returns True Returns the character that is actually parsed",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParsecT a b c Char",
          "package": "parsec",
          "signature": "(Char-\u003eBool)-\u003eParsecT s u m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "space",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#space",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:space\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:space\"]"
        },
        "index": {
          "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "space",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips \u003cem\u003ezero\u003c/em\u003e or more white space characters. See also \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "spaces",
          "package": "parsec",
          "signature": "ParsecT s u m ()",
          "source": "src/Text-Parsec-Char.html#spaces",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:spaces\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:spaces\"]"
        },
        "index": {
          "description": "Skips zero or more white space characters See also skipMany",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "spaces",
          "normalized": "ParsecT a b c()",
          "package": "parsec",
          "signature": "ParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   string \"div\" \n              \u003c|\u003e string \"mod\"\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "string",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m String",
          "source": "src/Text-Parsec-Char.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:string\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:string\"]"
        },
        "index": {
          "description": "string parses sequence of characters given by Returns the parsed string i.e divOrMod string div string mod",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "string",
          "normalized": "String-\u003eParsecT a b c String",
          "package": "parsec",
          "signature": "String-\u003eParsecT s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a tab character ('\\t'). Returns a tab character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "tab",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#tab",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:tab\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:tab\"]"
        },
        "index": {
          "description": "Parses tab character Returns tab character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "tab",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an upper case letter (a character between 'A' and 'Z').\n Returns the parsed character. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Char\",\"Text.ParserCombinators.Parsec.Char\"]",
          "name": "upper",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Char.html#upper",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:upper\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#v:upper\"]"
        },
        "index": {
          "description": "Parses an upper case letter character between and Returns the parsed character",
          "hierarchy": "Text Parsec Char",
          "module": "Text.Parsec.Char",
          "name": "upper",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Char.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used generic combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec",
          "source": "src/Text-Parsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used generic combinators",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eanyToken\u003c/code\u003e accepts any kind of token. It is for example\n used to implement \u003ccode\u003e\u003ca\u003eeof\u003c/a\u003e\u003c/code\u003e. Returns the accepted token. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "anyToken",
          "package": "parsec",
          "signature": "ParsecT s u m t",
          "source": "src/Text-Parsec-Combinator.html#anyToken",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:anyToken\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:anyToken\"]"
        },
        "index": {
          "description": "The parser anyToken accepts any kind of token It is for example used to implement eof Returns the accepted token",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "anyToken",
          "package": "parsec",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eclose\u003c/code\u003e.\n Returns the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  braces  = between (symbol \"{\") (symbol \"}\")\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "between",
          "package": "parsec",
          "signature": "ParsecT s u m open -\u003e ParsecT s u m close -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#between",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:between\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:between\"]"
        },
        "index": {
          "description": "between open close parses open followed by and close Returns the value returned by braces between symbol symbol",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "between",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c f-\u003eParsecT a b c f",
          "package": "parsec",
          "signature": "ParsecT s u m open-\u003eParsecT s u m close-\u003eParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e. Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are zero occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "chainl",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#chainl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainl\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl\"]"
        },
        "index": {
          "description": "chainl op parser zero or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by If there are zero occurrences of the value is returned",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "chainl",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003ed-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003ea-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. . This parser can for example be used to eliminate left\n recursion which typically occurs in expression grammars.\n\u003c/p\u003e\u003cpre\u003e  expr    = term   `chainl1` addop\n  term    = factor `chainl1` mulop\n  factor  = parens expr \u003c|\u003e integer\n\n  mulop   =   do{ symbol \"*\"; return (*)   }\n          \u003c|\u003e do{ symbol \"/\"; return (div) }\n\n  addop   =   do{ symbol \"+\"; return (+) }\n          \u003c|\u003e do{ symbol \"-\"; return (-) }\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "chainl1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#chainl1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainl1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl1\"]"
        },
        "index": {
          "description": "chainl1 op parser one or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by This parser can for example be used to eliminate left recursion which typically occurs in expression grammars expr term chainl1 addop term factor chainl1 mulop factor parens expr integer mulop do symbol return do symbol return div addop do symbol return do symbol return",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "chainl1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "chainr",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#chainr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainr\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr\"]"
        },
        "index": {
          "description": "chainr op parser zero or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by If there are no occurrences of the value is returned",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "chainr",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003ed-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003ea-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of |p|,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "chainr1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#chainr1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainr1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr1\"]"
        },
        "index": {
          "description": "chainr1 op parser one or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "chainr1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n parser.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "choice",
          "package": "parsec",
          "signature": "[ParsecT s u m a] -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#choice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:choice\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:choice\"]"
        },
        "index": {
          "description": "choice ps tries to apply the parsers in the list ps in order until one of them succeeds Returns the value of the succeeding parser",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "choice",
          "normalized": "[ParsecT a b c d]-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "[ParsecT s u m a]-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003en\u003c/code\u003e is smaller or\n equal to zero, the parser equals to \u003ccode\u003ereturn []\u003c/code\u003e. Returns a list of\n \u003ccode\u003en\u003c/code\u003e values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "count",
          "package": "parsec",
          "signature": "Int -\u003e ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#count",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:count\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:count\"]"
        },
        "index": {
          "description": "count parses occurrences of If is smaller or equal to zero the parser equals to return Returns list of values returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "count",
          "normalized": "Int-\u003eParsecT a b c d-\u003eParsecT a b c[d]",
          "package": "parsec",
          "signature": "Int-\u003eParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   cStatements  = cStatement `endBy` semi\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "endBy",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#endBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:endBy\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy\"]"
        },
        "index": {
          "description": "endBy sep parses zero or more occurrences of seperated and ended by sep Returns list of values returned by cStatements cStatement endBy semi",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "endBy",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "endBy1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#endBy1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:endBy1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy1\"]"
        },
        "index": {
          "description": "endBy1 sep parses one or more occurrences of seperated and ended by sep Returns list of values returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "endBy1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser only succeeds at the end of the input. This is not a\n primitive parser but it is defined using \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  eof  = notFollowedBy anyToken \u003c?\u003e \"end of input\"\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "eof",
          "package": "parsec",
          "signature": "ParsecT s u m ()",
          "source": "src/Text-Parsec-Combinator.html#eof",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:eof\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:eof\"]"
        },
        "index": {
          "description": "This parser only succeeds at the end of the input This is not primitive parser but it is defined using notFollowedBy eof notFollowedBy anyToken end of input",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "eof",
          "normalized": "ParsecT a b c()",
          "package": "parsec",
          "signature": "ParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e fails and consumes some input, so does \u003ccode\u003elookAhead\u003c/code\u003e. Combine with \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n if this is undesirable.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "lookAhead",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#lookAhead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:lookAhead\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:lookAhead\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:lookAhead\"]"
        },
        "index": {
          "description": "lookAhead parses without consuming any input If fails and consumes some input so does lookAhead Combine with try if this is undesirable",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "lookAhead",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c d",
          "package": "parsec",
          "partial": "Ahead",
          "signature": "ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "many1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#many1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:many1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:many1\"]"
        },
        "index": {
          "description": "many1 applies the parser one or more times Returns list of the returned values of word many1 letter",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "many1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c[d]",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n This parser can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = do{ string \"\u003c!--\"\n                      ; manyTill anyChar (try (string \"--\u003e\"))\n                      }\n\u003c/pre\u003e\u003cp\u003eNote the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"--\u003e\"\u003c/code\u003e, and\n    therefore the use of the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "manyTill",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m end -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#manyTill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:manyTill\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:manyTill\"]"
        },
        "index": {
          "description": "manyTill end applies parser zero or more times until parser end succeeds Returns the list of values returned by This parser can be used to scan comments simpleComment do string manyTill anyChar try string Note the overlapping parsers anyChar and string and therefore the use of the try combinator",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "manyTill",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "Till",
          "signature": "ParsecT s u m a-\u003eParsecT s u m end-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e only succeeds when parser \u003ccode\u003ep\u003c/code\u003e fails. This parser\n does not consume any input. This parser can be used to implement the\n 'longest match' rule. For example, when recognizing keywords (for\n example \u003ccode\u003elet\u003c/code\u003e), we want to make sure that a keyword is not followed\n by a legal identifier character, in which case the keyword is\n actually an identifier (for example \u003ccode\u003elets\u003c/code\u003e). We can program this\n behaviour as follows:\n\u003c/p\u003e\u003cpre\u003e  keywordLet  = try (do{ string \"let\"\n                       ; notFollowedBy alphaNum\n                       })\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "notFollowedBy",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Combinator.html#notFollowedBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:notFollowedBy\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:notFollowedBy\"]"
        },
        "index": {
          "description": "notFollowedBy only succeeds when parser fails This parser does not consume any input This parser can be used to implement the longest match rule For example when recognizing keywords for example let we want to make sure that keyword is not followed by legal identifier character in which case the keyword is actually an identifier for example lets We can program this behaviour as follows keywordLet try do string let notFollowedBy alphaNum",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "notFollowedBy",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Followed By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  priority  = option 0 (do{ d \u003c- digit\n                          ; return (digitToInt d) \n                          })\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "option",
          "package": "parsec",
          "signature": "a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Combinator.html#option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:option\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:option\"]"
        },
        "index": {
          "description": "option tries to apply parser If fails without consuming input it returns the value otherwise the value returned by priority option do digit return digitToInt",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "option",
          "normalized": "a-\u003eParsecT b c d a-\u003eParsecT b c d a",
          "package": "parsec",
          "signature": "a-\u003eParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptionMaybe p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, otherwise it returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "optionMaybe",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m (Maybe a)",
          "source": "src/Text-Parsec-Combinator.html#optionMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:optionMaybe\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optionMaybe\"]"
        },
        "index": {
          "description": "optionMaybe tries to apply parser If fails without consuming input it return Nothing otherwise it returns Just the value returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "optionMaybe",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c(Maybe d)",
          "package": "parsec",
          "partial": "Maybe",
          "signature": "ParsecT s u m a-\u003eParsecT s u m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:optionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptional p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  It will parse \u003ccode\u003ep\u003c/code\u003e or nothing.\n It only fails if \u003ccode\u003ep\u003c/code\u003e fails after consuming input. It discards the result\n of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "optional",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Combinator.html#optional",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:optional\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optional\"]"
        },
        "index": {
          "description": "optional tries to apply parser It will parse or nothing It only fails if fails after consuming input It discards the result of",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "optional",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "sepBy",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#sepBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepBy\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy\"]"
        },
        "index": {
          "description": "sepBy sep parses zero or more occurrences of separated by sep Returns list of values returned by commaSep sepBy symbol",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "sepBy",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "sepBy1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#sepBy1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepBy1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy1\"]"
        },
        "index": {
          "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "sepBy1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e, ie. haskell style\n statements. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  haskellStatements  = haskellStatement `sepEndBy` semi\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "sepEndBy",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#sepEndBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepEndBy\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy\"]"
        },
        "index": {
          "description": "sepEndBy sep parses zero or more occurrences of separated and optionally ended by sep ie haskell style statements Returns list of values returned by haskellStatements haskellStatement sepEndBy semi",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "sepEndBy",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "End By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values\n returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "sepEndBy1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Combinator.html#sepEndBy1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepEndBy1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy1\"]"
        },
        "index": {
          "description": "sepEndBy1 sep parses one or more occurrences of separated and optionally ended by sep Returns list of values returned by",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "sepEndBy1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
          "package": "parsec",
          "partial": "End By",
          "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n its result. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Combinator\"]",
          "name": "skipMany1",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Combinator.html#skipMany1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:skipMany1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#v:skipMany1\"]"
        },
        "index": {
          "description": "skipMany1 applies the parser one or more times skipping its result",
          "hierarchy": "Text Parsec Combinator",
          "module": "Text.Parsec.Combinator",
          "name": "skipMany1",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Many",
          "signature": "ParsecT s u m a-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Combinator.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse errors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Error",
          "name": "Error",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Parse errors",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "Error",
          "package": "parsec",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis abstract data type represents parse error messages. There are\n four kinds of messages:\n\u003c/p\u003e\u003cpre\u003e  data Message = SysUnExpect String\n               | UnExpect String\n               | Expect String\n               | Message String\n\u003c/pre\u003e\u003cp\u003eThe fine distinction between different kinds of parse errors allows\n the system to generate quite good error messages for the user. It\n also allows error messages that are formatted in different\n languages. Each kind of message is generated by different combinators:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eSysUnExpect\u003c/a\u003e\u003c/code\u003e message is automatically generated by the\n       \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e combinator. The argument is the\n       unexpected input.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eUnExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003eunexpected\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the\n       unexpected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the expected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument is some general parser message. \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Parsec.Error",
          "name": "Message",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "data"
        },
        "index": {
          "description": "This abstract data type represents parse error messages There are four kinds of messages data Message SysUnExpect String UnExpect String Expect String Message String The fine distinction between different kinds of parse errors allows the system to generate quite good error messages for the user It also allows error messages that are formatted in different languages Each kind of message is generated by different combinators SysUnExpect message is automatically generated by the satisfy combinator The argument is the unexpected input UnExpect message is generated by the unexpected combinator The argument describes the unexpected item Expect message is generated by the combinator The argument describes the expected item Message message is generated by the fail combinator The argument is some general parser message",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "Message",
          "package": "parsec",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.Parsec.Error",
          "name": "ParseError",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "ParseError",
          "package": "parsec",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "Expect",
          "package": "parsec",
          "signature": "Expect !String",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:Expect\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:Expect\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "Expect",
          "package": "parsec",
          "partial": "Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:Expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "Message",
          "package": "parsec",
          "signature": "Message !String",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:Message\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:Message\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "Message",
          "package": "parsec",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "SysUnExpect",
          "package": "parsec",
          "signature": "SysUnExpect !String",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:SysUnExpect\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:SysUnExpect\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "SysUnExpect",
          "package": "parsec",
          "partial": "Sys Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:SysUnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "UnExpect",
          "package": "parsec",
          "signature": "UnExpect !String",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:UnExpect\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:UnExpect\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "UnExpect",
          "package": "parsec",
          "partial": "Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:UnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "addErrorMessage",
          "package": "parsec",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#addErrorMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:addErrorMessage\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:addErrorMessage\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "addErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:addErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "errorIsUnknown",
          "package": "parsec",
          "signature": "ParseError -\u003e Bool",
          "source": "src/Text-Parsec-Error.html#errorIsUnknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorIsUnknown\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:errorIsUnknown\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "errorIsUnknown",
          "normalized": "ParseError-\u003eBool",
          "package": "parsec",
          "partial": "Is Unknown",
          "signature": "ParseError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorIsUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the list of error messages from the parse error\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "errorMessages",
          "package": "parsec",
          "signature": "ParseError -\u003e [Message]",
          "source": "src/Text-Parsec-Error.html#errorMessages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorMessages\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:errorMessages\"]"
        },
        "index": {
          "description": "Extracts the list of error messages from the parse error",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "errorMessages",
          "normalized": "ParseError-\u003e[Message]",
          "package": "parsec",
          "partial": "Messages",
          "signature": "ParseError-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the source position from the parse error\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Error\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Error\",\"Text.ParserCombinators.Parsec\"]",
          "name": "errorPos",
          "package": "parsec",
          "signature": "ParseError -\u003e SourcePos",
          "source": "src/Text-Parsec-Error.html#errorPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:errorPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:errorPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:errorPos\"]"
        },
        "index": {
          "description": "Extracts the source position from the parse error",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "errorPos",
          "normalized": "ParseError-\u003eSourcePos",
          "package": "parsec",
          "partial": "Pos",
          "signature": "ParseError-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:errorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "mergeError",
          "package": "parsec",
          "signature": "ParseError -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#mergeError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:mergeError\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:mergeError\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "mergeError",
          "normalized": "ParseError-\u003eParseError-\u003eParseError",
          "package": "parsec",
          "partial": "Error",
          "signature": "ParseError-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:mergeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the message string from an error message \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "messageString",
          "package": "parsec",
          "signature": "Message -\u003e String",
          "source": "src/Text-Parsec-Error.html#messageString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:messageString\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:messageString\"]"
        },
        "index": {
          "description": "Extract the message string from an error message",
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "messageString",
          "normalized": "Message-\u003eString",
          "package": "parsec",
          "partial": "String",
          "signature": "Message-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:messageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "newErrorMessage",
          "package": "parsec",
          "signature": "Message -\u003e SourcePos -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#newErrorMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:newErrorMessage\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorMessage\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "newErrorMessage",
          "normalized": "Message-\u003eSourcePos-\u003eParseError",
          "package": "parsec",
          "partial": "Error Message",
          "signature": "Message-\u003eSourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:newErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "newErrorUnknown",
          "package": "parsec",
          "signature": "SourcePos -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#newErrorUnknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:newErrorUnknown\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorUnknown\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "newErrorUnknown",
          "normalized": "SourcePos-\u003eParseError",
          "package": "parsec",
          "partial": "Error Unknown",
          "signature": "SourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:newErrorUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "setErrorMessage",
          "package": "parsec",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#setErrorMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:setErrorMessage\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorMessage\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "setErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:setErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "setErrorPos",
          "package": "parsec",
          "signature": "SourcePos -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-Parsec-Error.html#setErrorPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:setErrorPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorPos\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "setErrorPos",
          "normalized": "SourcePos-\u003eParseError-\u003eParseError",
          "package": "parsec",
          "partial": "Error Pos",
          "signature": "SourcePos-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:setErrorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Error\",\"Text.ParserCombinators.Parsec.Error\"]",
          "name": "showErrorMessages",
          "package": "parsec",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [Message] -\u003e String",
          "source": "src/Text-Parsec-Error.html#showErrorMessages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:showErrorMessages\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:showErrorMessages\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Error",
          "module": "Text.Parsec.Error",
          "name": "showErrorMessages",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
          "package": "parsec",
          "partial": "Error Messages",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Error.html#v:showErrorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse \"expressions\".\n Builds a parser given a table of operators and associativities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Expr",
          "name": "Expr",
          "package": "parsec",
          "source": "src/Text-Parsec-Expr.html",
          "type": "module"
        },
        "index": {
          "description": "helper module to parse expressions Builds parser given table of operators and associativities",
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Expr",
          "package": "parsec",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
          "module": "Text.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec",
          "source": "src/Text-Parsec-Expr.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies operators that work on values of type \u003ccode\u003ea\u003c/code\u003e.\n An operator is either binary infix or unary prefix or postfix. A\n binary operator has also an associated associativity.\n\u003c/p\u003e",
          "module": "Text.Parsec.Expr",
          "name": "Operator",
          "package": "parsec",
          "source": "src/Text-Parsec-Expr.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity",
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Operator",
          "package": "parsec",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eOperatorTable s u m a\u003c/code\u003e is a list of \u003ccode\u003eOperator s u m a\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
          "module": "Text.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec",
          "source": "src/Text-Parsec-Expr.html#OperatorTable",
          "type": "type"
        },
        "index": {
          "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec",
          "partial": "Operator Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Expr\",\"Text.ParserCombinators.Parsec.Expr\"]",
          "name": "AssocLeft",
          "package": "parsec",
          "signature": "AssocLeft",
          "source": "src/Text-Parsec-Expr.html#Assoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocLeft\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocLeft\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "AssocLeft",
          "package": "parsec",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Expr\",\"Text.ParserCombinators.Parsec.Expr\"]",
          "name": "AssocNone",
          "package": "parsec",
          "signature": "AssocNone",
          "source": "src/Text-Parsec-Expr.html#Assoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocNone\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocNone\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "AssocNone",
          "package": "parsec",
          "partial": "Assoc None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Expr\",\"Text.ParserCombinators.Parsec.Expr\"]",
          "name": "AssocRight",
          "package": "parsec",
          "signature": "AssocRight",
          "source": "src/Text-Parsec-Expr.html#Assoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocRight\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocRight\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "AssocRight",
          "package": "parsec",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Expr",
          "name": "Infix",
          "package": "parsec",
          "signature": "Infix (ParsecT s u m (a -\u003e a -\u003e a)) Assoc",
          "source": "src/Text-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Infix",
          "normalized": "Infix(ParsecT a b c(d-\u003ed-\u003ed))Assoc",
          "package": "parsec",
          "partial": "Infix",
          "signature": "Infix(ParsecT s u m(a-\u003ea-\u003ea))Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Expr",
          "name": "Postfix",
          "package": "parsec",
          "signature": "Postfix (ParsecT s u m (a -\u003e a))",
          "source": "src/Text-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Postfix",
          "normalized": "Postfix(ParsecT a b c(d-\u003ed))",
          "package": "parsec",
          "partial": "Postfix",
          "signature": "Postfix(ParsecT s u m(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:Postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Expr",
          "name": "Prefix",
          "package": "parsec",
          "signature": "Prefix (ParsecT s u m (a -\u003e a))",
          "source": "src/Text-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "Prefix",
          "normalized": "Prefix(ParsecT a b c(d-\u003ed))",
          "package": "parsec",
          "partial": "Prefix",
          "signature": "Prefix(ParsecT s u m(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr \n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n          \n  binary  name fun assoc = Infix (do{ reservedOp name; return fun }) assoc\n  prefix  name fun       = Prefix (do{ reservedOp name; return fun })\n  postfix name fun       = Postfix (do{ reservedOp name; return fun })\n\u003c/pre\u003e",
          "module": "Text.Parsec.Expr",
          "name": "buildExpressionParser",
          "package": "parsec",
          "signature": "OperatorTable s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Expr.html#buildExpressionParser",
          "type": "function"
        },
        "index": {
          "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix do reservedOp name return fun assoc prefix name fun Prefix do reservedOp name return fun postfix name fun Postfix do reservedOp name return fun",
          "hierarchy": "Text Parsec Expr",
          "module": "Text.Parsec.Expr",
          "name": "buildExpressionParser",
          "normalized": "OperatorTable a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
          "package": "parsec",
          "partial": "Expression Parser",
          "signature": "OperatorTable s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Expr.html#v:buildExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module that defines some language definitions that can be used\n to instantiate a token parser (see \u003ca\u003eText.Parsec.Token\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Language",
          "name": "Language",
          "package": "parsec",
          "source": "src/Text-Parsec-Language.html",
          "type": "module"
        },
        "index": {
          "description": "helper module that defines some language definitions that can be used to instantiate token parser see Text.Parsec.Token",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "Language",
          "package": "parsec",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ca\u003eText.Parsec.Token\u003c/a\u003e module. The module \u003ca\u003eText.Parsec.Language\u003c/a\u003e\n contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.Parsec.Language",
          "name": "GenLanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The GenLanguageDef type is record that contains all parameterizable features of the Text.Parsec.Token module The module Text.Parsec.Language contains some default definitions",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "GenLanguageDef",
          "package": "parsec",
          "partial": "Gen Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#t:GenLanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#LanguageDef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec",
          "partial": "Language Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "emptyDef",
          "package": "parsec",
          "signature": "LanguageDef st",
          "source": "src/Text-Parsec-Language.html#emptyDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:emptyDef\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:emptyDef\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "emptyDef",
          "package": "parsec",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:emptyDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lexer for the haskell language.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "haskell",
          "package": "parsec",
          "signature": "TokenParser st",
          "source": "src/Text-Parsec-Language.html#haskell",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskell\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:haskell\"]"
        },
        "index": {
          "description": "lexer for the haskell language",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "haskell",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language definition for the Haskell language.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "haskellDef",
          "package": "parsec",
          "signature": "LanguageDef st",
          "source": "src/Text-Parsec-Language.html#haskellDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskellDef\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:haskellDef\"]"
        },
        "index": {
          "description": "The language definition for the Haskell language",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "haskellDef",
          "package": "parsec",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskellDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a minimal token definition for Haskell style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "haskellStyle",
          "package": "parsec",
          "signature": "LanguageDef st",
          "source": "src/Text-Parsec-Language.html#haskellStyle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskellStyle\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:haskellStyle\"]"
        },
        "index": {
          "description": "This is minimal token definition for Haskell style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "haskellStyle",
          "package": "parsec",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:haskellStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a minimal token definition for Java style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "javaStyle",
          "package": "parsec",
          "signature": "LanguageDef st",
          "source": "src/Text-Parsec-Language.html#javaStyle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:javaStyle\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:javaStyle\"]"
        },
        "index": {
          "description": "This is minimal token definition for Java style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "javaStyle",
          "package": "parsec",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:javaStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lexer for the mondrian language.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "mondrian",
          "package": "parsec",
          "signature": "TokenParser st",
          "source": "src/Text-Parsec-Language.html#mondrian",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:mondrian\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:mondrian\"]"
        },
        "index": {
          "description": "lexer for the mondrian language",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "mondrian",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:mondrian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language definition for the language Mondrian.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Language\",\"Text.ParserCombinators.Parsec.Language\"]",
          "name": "mondrianDef",
          "package": "parsec",
          "signature": "LanguageDef st",
          "source": "src/Text-Parsec-Language.html#mondrianDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:mondrianDef\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:mondrianDef\"]"
        },
        "index": {
          "description": "The language definition for the language Mondrian",
          "hierarchy": "Text Parsec Language",
          "module": "Text.Parsec.Language",
          "name": "mondrianDef",
          "package": "parsec",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Language.html#v:mondrianDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers. The algorithm used\n is fairly complex since we push the type system to its limits :-)\n The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n Published as a functional pearl at the Haskell Workshop 2001.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Perm",
          "name": "Perm",
          "package": "parsec",
          "source": "src/Text-Parsec-Perm.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements permutation parsers The algorithm used is fairly complex since we push the type system to its limits The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra Published as functional pearl at the Haskell Workshop",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "Perm",
          "package": "parsec",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvided for backwards compatibility.  The tok type is ignored.\n\u003c/p\u003e",
          "module": "Text.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Perm.html#PermParser",
          "type": "type"
        },
        "index": {
          "description": "Provided for backwards compatibility The tok type is ignored",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec",
          "partial": "Perm Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#t:PermParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eStreamPermParser s st a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses \n \u003ccode\u003es\u003c/code\u003e streams with user state \u003ccode\u003est\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first build with special operators\n like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.Perm",
          "name": "StreamPermParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Perm.html#StreamPermParser",
          "type": "data"
        },
        "index": {
          "description": "The type StreamPermParser st denotes permutation parser that when converted by the permute function parses streams with user state st and returns value of type on success Normally permutation parser is first build with special operators like and than transformed into normal parser using permute",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "StreamPermParser",
          "package": "parsec",
          "partial": "Stream Perm Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#t:StreamPermParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Perm\",\"Text.ParserCombinators.Parsec.Perm\"]",
          "name": "(\u003c||\u003e)",
          "package": "parsec",
          "signature": "StreamPermParser s st (a -\u003e b) -\u003e Parsec s st a -\u003e StreamPermParser s st b",
          "source": "src/Text-Parsec-Perm.html#%3C%7C%7C%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--124--124--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--124--124--62-\"]"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "StreamPermParser a b(c-\u003ed)-\u003eParsec a b c-\u003eStreamPermParser a b d",
          "package": "parsec",
          "signature": "StreamPermParser s st(a-\u003eb)-\u003eParsec s st a-\u003eStreamPermParser s st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Perm\",\"Text.ParserCombinators.Parsec.Perm\"]",
          "name": "(\u003c|?\u003e)",
          "package": "parsec",
          "signature": "StreamPermParser s st (a -\u003e b) -\u003e (a, Parsec s st a) -\u003e StreamPermParser s st b",
          "source": "src/Text-Parsec-Perm.html#%3C%7C%3F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--124--63--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--124--63--62-\"]"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "(\u003c|?\u003e) \u003c|?\u003e",
          "normalized": "StreamPermParser a b(c-\u003ed)-\u003e(c,Parsec a b c)-\u003eStreamPermParser a b d",
          "package": "parsec",
          "signature": "StreamPermParser s st(a-\u003eb)-\u003e(a,Parsec s st a)-\u003eStreamPermParser s st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--124--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Perm\",\"Text.ParserCombinators.Parsec.Perm\"]",
          "name": "(\u003c$$\u003e)",
          "package": "parsec",
          "signature": "(a -\u003e b) -\u003e Parsec s st a -\u003e StreamPermParser s st b",
          "source": "src/Text-Parsec-Perm.html#%3C%24%24%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--36--36--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--36--36--62-\"]"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(a-\u003eb)-\u003eParsec c d a-\u003eStreamPermParser c d b",
          "package": "parsec",
          "signature": "(a-\u003eb)-\u003eParsec s st a-\u003eStreamPermParser s st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Perm\",\"Text.ParserCombinators.Parsec.Perm\"]",
          "name": "(\u003c$?\u003e)",
          "package": "parsec",
          "signature": "(a -\u003e b) -\u003e (a, Parsec s st a) -\u003e StreamPermParser s st b",
          "source": "src/Text-Parsec-Perm.html#%3C%24%3F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--36--63--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--36--63--62-\"]"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "(\u003c$?\u003e) \u003c$?\u003e",
          "normalized": "(a-\u003eb)-\u003e(a,Parsec c d a)-\u003eStreamPermParser c d b",
          "package": "parsec",
          "signature": "(a-\u003eb)-\u003e(a,Parsec s st a)-\u003eStreamPermParser s st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:-60--36--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parser described\n by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a permutation of:\n an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and an optional \u003ccode\u003ec\u003c/code\u003e.\n This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",many1 (char 'a'))\n                         \u003c||\u003e char 'b' \n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Perm\",\"Text.ParserCombinators.Parsec.Perm\"]",
          "name": "permute",
          "package": "parsec",
          "signature": "StreamPermParser s st a -\u003e Parsec s st a",
          "source": "src/Text-Parsec-Perm.html#permute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:permute\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#v:permute\"]"
        },
        "index": {
          "description": "The parser permute perm parses permutation of parser described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple many1 char char char where tuple",
          "hierarchy": "Text Parsec Perm",
          "module": "Text.Parsec.Perm",
          "name": "permute",
          "normalized": "StreamPermParser a b c-\u003eParsec a b c",
          "package": "parsec",
          "signature": "StreamPermParser s st a-\u003eParsec s st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Perm.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTextual source positions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Pos",
          "name": "Pos",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html",
          "type": "module"
        },
        "index": {
          "description": "Textual source positions",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "Pos",
          "package": "parsec",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Pos",
          "name": "Column",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "Column",
          "package": "parsec",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Pos",
          "name": "Line",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "Line",
          "package": "parsec",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the column number of a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceColumn",
          "package": "parsec",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#incSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:incSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:incSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:incSourceColumn\"]"
        },
        "index": {
          "description": "Increments the column number of source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "incSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:incSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the line number of a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceLine",
          "package": "parsec",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#incSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:incSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:incSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:incSourceLine\"]"
        },
        "index": {
          "description": "Increments the line number of source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "incSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:incSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n and line number and column number set to 1, the upper left.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.ParserCombinators.Parsec.Pos\"]",
          "name": "initialPos",
          "package": "parsec",
          "signature": "SourceName -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#initialPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:initialPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:initialPos\"]"
        },
        "index": {
          "description": "Create new SourcePos with the given source name and line number and column number set to the upper left",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "initialPos",
          "normalized": "SourceName-\u003eSourcePos",
          "package": "parsec",
          "partial": "Pos",
          "signature": "SourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:initialPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n line number and column number.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.ParserCombinators.Parsec.Pos\"]",
          "name": "newPos",
          "package": "parsec",
          "signature": "SourceName -\u003e Line -\u003e Column -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#newPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:newPos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:newPos\"]"
        },
        "index": {
          "description": "Create new SourcePos with the given source name line number and column number",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "newPos",
          "normalized": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "package": "parsec",
          "partial": "Pos",
          "signature": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:newPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the column number of a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceColumn",
          "package": "parsec",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#setSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:setSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:setSourceColumn\"]"
        },
        "index": {
          "description": "Set the column number of source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "setSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line number of a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceLine",
          "package": "parsec",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#setSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:setSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:setSourceLine\"]"
        },
        "index": {
          "description": "Set the line number of source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "setSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the name of the source.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceName",
          "package": "parsec",
          "signature": "SourcePos -\u003e SourceName -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#setSourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:setSourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:setSourceName\"]"
        },
        "index": {
          "description": "Set the name of the source",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "setSourceName",
          "normalized": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "package": "parsec",
          "partial": "Source Name",
          "signature": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:setSourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the column number from a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceColumn",
          "package": "parsec",
          "signature": "SourcePos -\u003e Column",
          "source": "src/Text-Parsec-Pos.html#sourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:sourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceColumn\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:sourceColumn\"]"
        },
        "index": {
          "description": "Extracts the column number from source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "sourceColumn",
          "normalized": "SourcePos-\u003eColumn",
          "package": "parsec",
          "partial": "Column",
          "signature": "SourcePos-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the line number from a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceLine",
          "package": "parsec",
          "signature": "SourcePos -\u003e Line",
          "source": "src/Text-Parsec-Pos.html#sourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:sourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:sourceLine\"]"
        },
        "index": {
          "description": "Extracts the line number from source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "sourceLine",
          "normalized": "SourcePos-\u003eLine",
          "package": "parsec",
          "partial": "Line",
          "signature": "SourcePos-\u003eLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the name of the source from a source position. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.Parsec\",\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceName",
          "package": "parsec",
          "signature": "SourcePos -\u003e SourceName",
          "source": "src/Text-Parsec-Pos.html#sourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#v:sourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceName\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#v:sourceName\"]"
        },
        "index": {
          "description": "Extracts the name of the source from source position",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "sourceName",
          "normalized": "SourcePos-\u003eSourceName",
          "package": "parsec",
          "partial": "Name",
          "signature": "SourcePos-\u003eSourceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:sourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a source position given a character. If the character is a\n newline ('\\n') or carriage return ('\\r') the line number is\n incremented by 1. If the character is a tab ('t') the column\n number is incremented to the nearest 8'th column, ie. \u003ccode\u003ecolumn + 8 -\n ((column-1) `mod` 8)\u003c/code\u003e. In all other cases, the column is\n incremented by 1. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.ParserCombinators.Parsec.Pos\"]",
          "name": "updatePosChar",
          "package": "parsec",
          "signature": "SourcePos -\u003e Char -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#updatePosChar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:updatePosChar\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosChar\"]"
        },
        "index": {
          "description": "Update source position given character If the character is newline or carriage return the line number is incremented by If the character is tab the column number is incremented to the nearest th column ie column column-1 mod In all other cases the column is incremented by",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "updatePosChar",
          "normalized": "SourcePos-\u003eChar-\u003eSourcePos",
          "package": "parsec",
          "partial": "Pos Char",
          "signature": "SourcePos-\u003eChar-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:updatePosChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eupdatePosString pos s\u003c/code\u003e updates the source position\n \u003ccode\u003epos\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003eupdatePosChar\u003c/a\u003e\u003c/code\u003e on every character in \u003ccode\u003es\u003c/code\u003e, ie.\n \u003ccode\u003efoldl updatePosChar pos string\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Pos\",\"Text.ParserCombinators.Parsec.Pos\"]",
          "name": "updatePosString",
          "package": "parsec",
          "signature": "SourcePos -\u003e String -\u003e SourcePos",
          "source": "src/Text-Parsec-Pos.html#updatePosString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:updatePosString\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosString\"]"
        },
        "index": {
          "description": "The expression updatePosString pos updates the source position pos by calling updatePosChar on every character in ie foldl updatePosChar pos string",
          "hierarchy": "Text Parsec Pos",
          "module": "Text.Parsec.Pos",
          "name": "updatePosString",
          "normalized": "SourcePos-\u003eString-\u003eSourcePos",
          "package": "parsec",
          "partial": "Pos String",
          "signature": "SourcePos-\u003eString-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Pos.html#v:updatePosString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primitive parser combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Prim",
          "name": "Prim",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "The primitive parser combinators",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Prim",
          "package": "parsec",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Consumed",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#Consumed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Consumed",
          "package": "parsec",
          "partial": "Consumed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:Consumed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Parsec",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#Parsec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Parsec",
          "package": "parsec",
          "partial": "Parsec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:Parsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParserT monad transformer and Parser type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eParsecT s u m a\u003c/code\u003e is a parser with stream type \u003ccode\u003es\u003c/code\u003e, user state type \u003ccode\u003eu\u003c/code\u003e,\n underlying monad \u003ccode\u003em\u003c/code\u003e and return type \u003ccode\u003ea\u003c/code\u003e.  Parsec is strict in the user state.\n If this is undesirable, simply used a data type like \u003ccode\u003edata Box a = Box a\u003c/code\u003e and\n the state type \u003ccode\u003eBox YourStateType\u003c/code\u003e to add a level of indirection.\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "ParsecT",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#ParsecT",
          "type": "data"
        },
        "index": {
          "description": "ParserT monad transformer and Parser type ParsecT is parser with stream type user state type underlying monad and return type Parsec is strict in the user state If this is undesirable simply used data type like data Box Box and the state type Box YourStateType to add level of indirection",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "ParsecT",
          "package": "parsec",
          "partial": "Parsec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:ParsecT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Reply",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#Reply",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Reply",
          "package": "parsec",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "State",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "State",
          "package": "parsec",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003eStream\u003c/code\u003e has stream type \u003ccode\u003es\u003c/code\u003e, underlying monad \u003ccode\u003em\u003c/code\u003e and token type \u003ccode\u003et\u003c/code\u003e determined by the stream\n\u003c/p\u003e\u003cp\u003eSome rough guidelines for a \"correct\" instance of Stream:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e unfoldM uncons gives the [t] corresponding to the stream\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003eStream\u003c/code\u003e instance is responsible for maintaining the \"position within the stream\" in the stream state \u003ccode\u003es\u003c/code\u003e.  This is trivial unless you are using the monad in a non-trivial way.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Parsec.Prim",
          "name": "Stream",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#Stream",
          "type": "class"
        },
        "index": {
          "description": "An instance of Stream has stream type underlying monad and token type determined by the stream Some rough guidelines for correct instance of Stream unfoldM uncons gives the corresponding to the stream Stream instance is responsible for maintaining the position within the stream in the stream state This is trivial unless you are using the monad in non-trivial way",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Stream",
          "package": "parsec",
          "partial": "Stream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis combinator implements choice. The parser \u003ccode\u003ep \u003c|\u003e q\u003c/code\u003e first\n applies \u003ccode\u003ep\u003c/code\u003e. If it succeeds, the value of \u003ccode\u003ep\u003c/code\u003e is returned. If \u003ccode\u003ep\u003c/code\u003e\n fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, parser \u003ccode\u003eq\u003c/code\u003e is tried. This\n combinator is defined equal to the \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n class and the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) member of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser is called \u003cem\u003epredictive\u003c/em\u003e since \u003ccode\u003eq\u003c/code\u003e is only tried when\n parser \u003ccode\u003ep\u003c/code\u003e didn't consume any input (i.e.. the look ahead is 1).\n This non-backtracking behaviour allows for both an efficient\n implementation of the parser combinators and the generation of good\n error messages.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "(\u003c|\u003e)",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#%3C%7C%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:-60--124--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--124--62-\"]"
        },
        "index": {
          "description": "This combinator implements choice The parser first applies If it succeeds the value of is returned If fails without consuming any input parser is tried This combinator is defined equal to the mplus member of the MonadPlus class and the member of Alternative The parser is called predictive since is only tried when parser didn consume any input i.e the look ahead is This non-backtracking behaviour allows for both an efficient implementation of the parser combinators and the generation of good error messages",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003ep \u003ca\u003e?\u003c/a\u003e msg\u003c/code\u003e behaves as parser \u003ccode\u003ep\u003c/code\u003e, but whenever the\n parser \u003ccode\u003ep\u003c/code\u003e fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, it replaces expect\n error messages with the expect error message \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is normally used at the end of a set alternatives where we want\n to return an error message in terms of a higher level construct\n rather than returning all possible characters. For example, if the\n \u003ccode\u003eexpr\u003c/code\u003e parser from the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e example would fail, the error\n message is: '...: expecting expression'. Without the \u003ccode\u003e(\u003c?\u003e)\u003c/code\u003e\n combinator, the message would be like '...: expecting \"let\" or\n letter', which is less friendly.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "(\u003c?\u003e)",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e String -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#%3C%3F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:-60--63--62-\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--63--62-\"]"
        },
        "index": {
          "description": "The parser msg behaves as parser but whenever the parser fails without consuming any input it replaces expect error messages with the expect error message msg This is normally used at the end of set alternatives where we want to return an error message in terms of higher level construct rather than returning all possible characters For example if the expr parser from the try example would fail the error message is expecting expression Without the combinator the message would be like expecting let or letter which is less friendly",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "ParsecT a b c d-\u003eString-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eString-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Consumed",
          "package": "parsec",
          "signature": "Consumed a",
          "source": "src/Text-Parsec-Prim.html#Consumed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Consumed",
          "package": "parsec",
          "partial": "Consumed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:Consumed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Empty",
          "package": "parsec",
          "signature": "Empty !a",
          "source": "src/Text-Parsec-Prim.html#Consumed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Empty",
          "package": "parsec",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Error",
          "package": "parsec",
          "signature": "Error ParseError",
          "source": "src/Text-Parsec-Prim.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Error",
          "package": "parsec",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "Ok",
          "package": "parsec",
          "signature": "Ok a !(State s u) ParseError",
          "source": "src/Text-Parsec-Prim.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "Ok",
          "package": "parsec",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "State",
          "package": "parsec",
          "signature": "State",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:State\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:State\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "State",
          "package": "parsec",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current input \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "getInput",
          "package": "parsec",
          "signature": "ParsecT s u m s",
          "source": "src/Text-Parsec-Prim.html#getInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getInput\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:getInput\"]"
        },
        "index": {
          "description": "Returns the current input",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "getInput",
          "package": "parsec",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full parser state as a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "getParserState",
          "package": "parsec",
          "signature": "ParsecT s u m (State s u)",
          "source": "src/Text-Parsec-Prim.html#getParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getParserState\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:getParserState\"]"
        },
        "index": {
          "description": "Returns the full parser state as State record",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "getParserState",
          "package": "parsec",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current source position. See also \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "getPosition",
          "package": "parsec",
          "signature": "ParsecT s u m SourcePos",
          "source": "src/Text-Parsec-Prim.html#getPosition",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getPosition\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:getPosition\"]"
        },
        "index": {
          "description": "Returns the current source position See also SourcePos",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "getPosition",
          "package": "parsec",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user state. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "getState",
          "package": "parsec",
          "signature": "ParsecT s u m u",
          "source": "src/Text-Parsec-Prim.html#getState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getState\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:getState\"]"
        },
        "index": {
          "description": "Returns the current user state",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "getState",
          "package": "parsec",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "label",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e String -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#label",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:label\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:label\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "label",
          "normalized": "ParsecT a b c d-\u003eString-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eString-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "labels",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e [String] -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#labels",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:labels\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:labels\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "labels",
          "normalized": "ParsecT a b c d-\u003e[String]-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003e[String]-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times. Returns a\n    list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  identifier  = do{ c  \u003c- letter\n                  ; cs \u003c- many (alphaNum \u003c|\u003e char '_')\n                  ; return (c:cs)\n                  }\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "many",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Prim.html#many",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:many\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:many\"]"
        },
        "index": {
          "description": "many applies the parser zero or more times Returns list of the returned values of identifier do letter cs many alphaNum char return cs",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "many",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c[d]",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "manyAccum",
          "package": "parsec",
          "signature": "(a -\u003e [a] -\u003e [a]) -\u003e ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Prim.html#manyAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "manyAccum",
          "normalized": "(a-\u003e[a]-\u003e[a])-\u003eParsecT b c d a-\u003eParsecT b c d[a]",
          "package": "parsec",
          "partial": "Accum",
          "signature": "(a-\u003e[a]-\u003e[a])-\u003eParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:manyAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "mergeErrorReply",
          "package": "parsec",
          "signature": "ParseError -\u003e Reply s u a -\u003e Reply s u a",
          "source": "src/Text-Parsec-Prim.html#mergeErrorReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "mergeErrorReply",
          "normalized": "ParseError-\u003eReply a b c-\u003eReply a b c",
          "package": "parsec",
          "partial": "Error Reply",
          "signature": "ParseError-\u003eReply s u a-\u003eReply s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:mergeErrorReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level creation of the ParsecT type. You really shouldn't have to do this.\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "mkPT",
          "package": "parsec",
          "signature": "(State s u -\u003e m (Consumed (m (Reply s u a)))) -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#mkPT",
          "type": "function"
        },
        "index": {
          "description": "Low-level creation of the ParsecT type You really shouldn have to do this",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "mkPT",
          "normalized": "(State a b-\u003ec(Consumed(c(Reply a b d))))-\u003eParsecT a b c d",
          "package": "parsec",
          "partial": "PT",
          "signature": "(State s u-\u003em(Consumed(m(Reply s u a))))-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:mkPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the user state. Suppose\n that we want to count identifiers in a source, we could use the user\n state as:\n\u003c/p\u003e\u003cpre\u003e  expr  = do{ x \u003c- identifier\n            ; updateState (+1)\n            ; return (Id x)\n            }\n\u003c/pre\u003e",
          "module": "Text.Parsec.Prim",
          "name": "modifyState",
          "package": "parsec",
          "signature": "(u -\u003e u) -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#modifyState",
          "type": "function"
        },
        "index": {
          "description": "updateState applies function to the user state Suppose that we want to count identifiers in source we could use the user state as expr do identifier updateState return Id",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "modifyState",
          "normalized": "(a-\u003ea)-\u003eParsecT b a c()",
          "package": "parsec",
          "partial": "State",
          "signature": "(u-\u003eu)-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:modifyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparse p filePath input\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e over Identity without user\n state. The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the\n empty string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e)\n or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = case (parse numbers \"\" \"11, 2, 43\") of\n             Left err  -\u003e print err\n             Right xs  -\u003e print (sum xs)\n\n  numbers = commaSep integer\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "parse",
          "package": "parsec",
          "signature": "Parsec s () a -\u003e SourceName -\u003e s -\u003e Either ParseError a",
          "source": "src/Text-Parsec-Prim.html#parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parse\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:parse\"]"
        },
        "index": {
          "description": "parse filePath input runs parser over Identity without user state The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right main case parse numbers of Left err print err Right xs print sum xs numbers commaSep integer",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parse",
          "normalized": "Parsec a()b-\u003eSourceName-\u003ea-\u003eEither ParseError b",
          "package": "parsec",
          "signature": "Parsec s()a-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eparseTest p input\u003c/code\u003e applies a parser \u003ccode\u003ep\u003c/code\u003e against\n input \u003ccode\u003einput\u003c/code\u003e and prints the result to stdout. Used for testing\n parsers.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "parseTest",
          "package": "parsec",
          "signature": "Parsec s () a -\u003e s -\u003e IO ()",
          "source": "src/Text-Parsec-Prim.html#parseTest",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parseTest\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseTest\"]"
        },
        "index": {
          "description": "The expression parseTest input applies parser against input input and prints the result to stdout Used for testing parsers",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parseTest",
          "normalized": "Parsec a()b-\u003ea-\u003eIO()",
          "package": "parsec",
          "partial": "Test",
          "signature": "Parsec s()a-\u003es-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "parsecMap",
          "package": "parsec",
          "signature": "(a -\u003e b) -\u003e ParsecT s u m a -\u003e ParsecT s u m b",
          "source": "src/Text-Parsec-Prim.html#parsecMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parsecMap",
          "normalized": "(a-\u003eb)-\u003eParsecT c d e a-\u003eParsecT c d e b",
          "package": "parsec",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003eParsecT s u m a-\u003eParsecT s u m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parsecMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "parserBind",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e (a -\u003e ParsecT s u m b) -\u003e ParsecT s u m b",
          "source": "src/Text-Parsec-Prim.html#parserBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parserBind",
          "normalized": "ParsecT a b c d-\u003e(d-\u003eParsecT a b c e)-\u003eParsecT a b c e",
          "package": "parsec",
          "partial": "Bind",
          "signature": "ParsecT s u m a-\u003e(a-\u003eParsecT s u m b)-\u003eParsecT s u m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parserBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "parserFail",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#parserFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parserFail",
          "normalized": "String-\u003eParsecT a b c d",
          "package": "parsec",
          "partial": "Fail",
          "signature": "String-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parserFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "parserPlus",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#parserPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parserPlus",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
          "package": "parsec",
          "partial": "Plus",
          "signature": "ParsecT s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parserPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "parserReturn",
          "package": "parsec",
          "signature": "a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#parserReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parserReturn",
          "normalized": "a-\u003eParsecT b c d a",
          "package": "parsec",
          "partial": "Return",
          "signature": "a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parserReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparserZero\u003c/code\u003e always fails without consuming any input. \u003ccode\u003eparserZero\u003c/code\u003e is defined\n equal to the \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e class and to the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e member \n of the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "parserZero",
          "package": "parsec",
          "signature": "ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#parserZero",
          "type": "function"
        },
        "index": {
          "description": "parserZero always fails without consuming any input parserZero is defined equal to the mzero member of the MonadPlus class and to the empty member of the Applicative class",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "parserZero",
          "package": "parsec",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:parserZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eputState st\u003c/code\u003e set the user state to \u003ccode\u003est\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "putState",
          "package": "parsec",
          "signature": "u -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#putState",
          "type": "function"
        },
        "index": {
          "description": "putState st set the user state to st",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "putState",
          "normalized": "a-\u003eParsecT b a c()",
          "package": "parsec",
          "partial": "State",
          "signature": "u-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:putState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "runP",
          "package": "parsec",
          "signature": "Parsec s u a -\u003e u -\u003e SourceName -\u003e s -\u003e Either ParseError a",
          "source": "src/Text-Parsec-Prim.html#runP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "runP",
          "normalized": "Parsec a b c-\u003eb-\u003eSourceName-\u003ea-\u003eEither ParseError c",
          "package": "parsec",
          "signature": "Parsec s u a-\u003eu-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:runP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "runPT",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e u -\u003e SourceName -\u003e s -\u003e m (Either ParseError a)",
          "source": "src/Text-Parsec-Prim.html#runPT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "runPT",
          "normalized": "ParsecT a b c d-\u003eb-\u003eSourceName-\u003ea-\u003ec(Either ParseError d)",
          "package": "parsec",
          "partial": "PT",
          "signature": "ParsecT s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:runPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level unpacking of the ParsecT type. To run your parser, please look to\n runPT, runP, runParserT, runParser and other such functions.\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "runParsecT",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e State s u -\u003e m (Consumed (m (Reply s u a)))",
          "source": "src/Text-Parsec-Prim.html#runParsecT",
          "type": "function"
        },
        "index": {
          "description": "Low-level unpacking of the ParsecT type To run your parser please look to runPT runP runParserT runParser and other such functions",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "runParsecT",
          "normalized": "ParsecT a b c d-\u003eState a b-\u003ec(Consumed(c(Reply a b d)))",
          "package": "parsec",
          "partial": "Parsec",
          "signature": "ParsecT s u m a-\u003eState s u-\u003em(Consumed(m(Reply s u a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:runParsecT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a parser over the Identity monad. \u003ccode\u003erunParser p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  parseFromFile p fname\n    = do{ input \u003c- readFile fname\n        ; return (runParser p () fname input)\n        }\n\u003c/pre\u003e",
          "module": "Text.Parsec.Prim",
          "name": "runParser",
          "package": "parsec",
          "signature": "Parsec s u a -\u003e u -\u003e SourceName -\u003e s -\u003e Either ParseError a",
          "source": "src/Text-Parsec-Prim.html#runParser",
          "type": "function"
        },
        "index": {
          "description": "The most general way to run parser over the Identity monad runParser state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right parseFromFile fname do input readFile fname return runParser fname input",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "runParser",
          "normalized": "Parsec a b c-\u003eb-\u003eSourceName-\u003ea-\u003eEither ParseError c",
          "package": "parsec",
          "partial": "Parser",
          "signature": "Parsec s u a-\u003eu-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a parser. \u003ccode\u003erunParserT p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns a computation in the underlying monad \u003ccode\u003em\u003c/code\u003e that return either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "runParserT",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e u -\u003e SourceName -\u003e s -\u003e m (Either ParseError a)",
          "source": "src/Text-Parsec-Prim.html#runParserT",
          "type": "function"
        },
        "index": {
          "description": "The most general way to run parser runParserT state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns computation in the underlying monad that return either ParseError Left or value of type Right",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "runParserT",
          "normalized": "ParsecT a b c d-\u003eb-\u003eSourceName-\u003ea-\u003ec(Either ParseError d)",
          "package": "parsec",
          "partial": "Parser",
          "signature": "ParsecT s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:runParserT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetInput input\u003c/code\u003e continues parsing with \u003ccode\u003einput\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003esetInput\u003c/code\u003e functions can for example be used to deal with #include\n files. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "setInput",
          "package": "parsec",
          "signature": "s -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#setInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setInput\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:setInput\"]"
        },
        "index": {
          "description": "setInput input continues parsing with input The getInput and setInput functions can for example be used to deal with include files",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "setInput",
          "normalized": "a-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Input",
          "signature": "s-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetParserState st\u003c/code\u003e set the full parser state to \u003ccode\u003est\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "setParserState",
          "package": "parsec",
          "signature": "State s u -\u003e ParsecT s u m (State s u)",
          "source": "src/Text-Parsec-Prim.html#setParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setParserState\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:setParserState\"]"
        },
        "index": {
          "description": "setParserState st set the full parser state to st",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "setParserState",
          "normalized": "State a b-\u003eParsecT a b c(State a b)",
          "package": "parsec",
          "partial": "Parser State",
          "signature": "State s u-\u003eParsecT s u m(State s u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetPosition pos\u003c/code\u003e sets the current source position to \u003ccode\u003epos\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "setPosition",
          "package": "parsec",
          "signature": "SourcePos -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#setPosition",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setPosition\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:setPosition\"]"
        },
        "index": {
          "description": "setPosition pos sets the current source position to pos",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "setPosition",
          "normalized": "SourcePos-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Position",
          "signature": "SourcePos-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for putState for backwards compatibility.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "setState",
          "package": "parsec",
          "signature": "u -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#setState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setState\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:setState\"]"
        },
        "index": {
          "description": "An alias for putState for backwards compatibility",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "setState",
          "normalized": "a-\u003eParsecT b a c()",
          "package": "parsec",
          "partial": "State",
          "signature": "u-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e\u003cpre\u003e  spaces  = skipMany space\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "skipMany",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#skipMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:skipMany\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:skipMany\"]"
        },
        "index": {
          "description": "skipMany applies the parser zero or more times skipping its result spaces skipMany space",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "skipMany",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Many",
          "signature": "ParsecT s u m a-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "stateInput",
          "package": "parsec",
          "signature": "s",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:stateInput\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateInput\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "stateInput",
          "package": "parsec",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:stateInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "statePos",
          "package": "parsec",
          "signature": "SourcePos",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:statePos\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:statePos\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "statePos",
          "package": "parsec",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:statePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "stateUser",
          "package": "parsec",
          "signature": "u",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:stateUser\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateUser\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "stateUser",
          "package": "parsec",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:stateUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "sysUnExpectError",
          "package": "parsec",
          "signature": "String -\u003e SourcePos -\u003e Reply s u a",
          "source": "src/Text-Parsec-Prim.html#sysUnExpectError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "sysUnExpectError",
          "normalized": "String-\u003eSourcePos-\u003eReply a b c",
          "package": "parsec",
          "partial": "Un Expect Error",
          "signature": "String-\u003eSourcePos-\u003eReply s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:sysUnExpectError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok posFromTok testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n source position of the \u003ccode\u003et\u003c/code\u003e should be returned by \u003ccode\u003eposFromTok t\u003c/code\u003e and\n the token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis combinator is expressed in terms of \u003ccode\u003e\u003ca\u003etokenPrim\u003c/a\u003e\u003c/code\u003e.\n It is used to accept user defined token streams. For example,\n suppose that we have a stream of basic tokens tupled with source\n positions. We can than define a parser that accepts single tokens as:\n\u003c/p\u003e\u003cpre\u003e  mytoken x\n    = token showTok posFromTok testTok\n    where\n      showTok (pos,t)     = show t\n      posFromTok (pos,t)  = pos\n      testTok (pos,t)     = if x == t then Just t else Nothing\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "token",
          "package": "parsec",
          "signature": "(t -\u003e String)-\u003e (t -\u003e SourcePos)-\u003e (t -\u003e Maybe a)-\u003e Parsec s u a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:token\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:token\"]"
        },
        "index": {
          "description": "The parser token showTok posFromTok testTok accepts token with result when the function testTok returns Just The source position of the should be returned by posFromTok and the token can be shown using showTok This combinator is expressed in terms of tokenPrim It is used to accept user defined token streams For example suppose that we have stream of basic tokens tupled with source positions We can than define parser that accepts single tokens as mytoken token showTok posFromTok testTok where showTok pos show posFromTok pos pos testTok pos if then Just else Nothing",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "token",
          "normalized": "(a-\u003eString)-\u003e(a-\u003eSourcePos)-\u003e(a-\u003eMaybe b)-\u003eParsec c d b",
          "package": "parsec",
          "signature": "(t-\u003eString)-\u003e(t-\u003eSourcePos)-\u003e(t-\u003eMaybe a)-\u003eParsec s u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etokenPrim showTok nextPos testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e. The position of the \u003cem\u003enext\u003c/em\u003e\n token should be returned when \u003ccode\u003enextPos\u003c/code\u003e is called with the current\n source position \u003ccode\u003epos\u003c/code\u003e, the current token \u003ccode\u003et\u003c/code\u003e and the rest of the\n tokens \u003ccode\u003etoks\u003c/code\u003e, \u003ccode\u003enextPos pos t toks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the most primitive combinator for accepting tokens. For\n example, the \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e parser could be implemented as:\n\u003c/p\u003e\u003cpre\u003e  char c\n    = tokenPrim showChar nextPos testChar\n    where\n      showChar x        = \"'\" ++ x ++ \"'\"\n      testChar x        = if x == c then Just x else Nothing\n      nextPos pos x xs  = updatePosChar pos x\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "tokenPrim",
          "package": "parsec",
          "signature": "(t -\u003e String)-\u003e (SourcePos -\u003e t -\u003e s -\u003e SourcePos)-\u003e (t -\u003e Maybe a)-\u003e ParsecT s u m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokenPrim\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrim\"]"
        },
        "index": {
          "description": "The parser tokenPrim showTok nextPos testTok accepts token with result when the function testTok returns Just The token can be shown using showTok The position of the next token should be returned when nextPos is called with the current source position pos the current token and the rest of the tokens toks nextPos pos toks This is the most primitive combinator for accepting tokens For example the char parser could be implemented as char tokenPrim showChar nextPos testChar where showChar testChar if then Just else Nothing nextPos pos xs updatePosChar pos",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "tokenPrim",
          "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003eb-\u003eSourcePos)-\u003e(a-\u003eMaybe c)-\u003eParsecT b d e c",
          "package": "parsec",
          "partial": "Prim",
          "signature": "(t-\u003eString)-\u003e(SourcePos-\u003et-\u003es-\u003eSourcePos)-\u003e(t-\u003eMaybe a)-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokenPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "tokenPrimEx",
          "package": "parsec",
          "signature": "(t -\u003e String) -\u003e (SourcePos -\u003e t -\u003e s -\u003e SourcePos) -\u003e Maybe (SourcePos -\u003e t -\u003e s -\u003e u -\u003e u) -\u003e (t -\u003e Maybe a) -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#tokenPrimEx",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokenPrimEx\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrimEx\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "tokenPrimEx",
          "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003eb-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003ea-\u003eb-\u003ec-\u003ec)-\u003e(a-\u003eMaybe d)-\u003eParsecT b c e d",
          "package": "parsec",
          "partial": "Prim Ex",
          "signature": "(t-\u003eString)-\u003e(SourcePos-\u003et-\u003es-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003et-\u003es-\u003eu-\u003eu)-\u003e(t-\u003eMaybe a)-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokenPrimEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "tokens",
          "package": "parsec",
          "signature": "([t] -\u003e String) -\u003e (SourcePos -\u003e [t] -\u003e SourcePos) -\u003e [t] -\u003e ParsecT s u m [t]",
          "source": "src/Text-Parsec-Prim.html#tokens",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokens\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokens\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "tokens",
          "normalized": "([a]-\u003eString)-\u003e(SourcePos-\u003e[a]-\u003eSourcePos)-\u003e[a]-\u003eParsecT b c d[a]",
          "package": "parsec",
          "signature": "([t]-\u003eString)-\u003e(SourcePos-\u003e[t]-\u003eSourcePos)-\u003e[t]-\u003eParsecT s u m[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etry p\u003c/code\u003e behaves like parser \u003ccode\u003ep\u003c/code\u003e, except that it\n pretends that it hasn't consumed any input when an error occurs.\n\u003c/p\u003e\u003cp\u003eThis combinator is used whenever arbitrary look ahead is needed.\n Since it pretends that it hasn't consumed any input when \u003ccode\u003ep\u003c/code\u003e fails,\n the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator will try its second alternative even when the\n first parser failed while consuming input.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003etry\u003c/code\u003e combinator can for example be used to distinguish\n identifiers and reserved words. Both reserved words and identifiers\n are a sequence of letters. Whenever we expect a certain reserved\n word where we can also expect an identifier we have to use the \u003ccode\u003etry\u003c/code\u003e\n combinator. Suppose we write:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ string \"let\"; ... }\n  identifier  = many1 letter\n\u003c/pre\u003e\u003cp\u003eIf the user writes \"lexical\", the parser fails with: \u003ccode\u003eunexpected\n 'x', expecting 't' in \"let\"\u003c/code\u003e. Indeed, since the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator\n only tries alternatives when the first alternative hasn't consumed\n input, the \u003ccode\u003eidentifier\u003c/code\u003e parser is never tried (because the prefix\n \"le\" of the \u003ccode\u003estring \"let\"\u003c/code\u003e parser is already consumed). The\n right behaviour can be obtained by adding the \u003ccode\u003etry\u003c/code\u003e combinator:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ try (string \"let\"); ... }\n  identifier  = many1 letter\n\u003c/pre\u003e",
          "module": "Text.Parsec.Prim",
          "name": "try",
          "package": "parsec",
          "signature": "ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#try",
          "type": "function"
        },
        "index": {
          "description": "The parser try behaves like parser except that it pretends that it hasn consumed any input when an error occurs This combinator is used whenever arbitrary look ahead is needed Since it pretends that it hasn consumed any input when fails the combinator will try its second alternative even when the first parser failed while consuming input The try combinator can for example be used to distinguish identifiers and reserved words Both reserved words and identifiers are sequence of letters Whenever we expect certain reserved word where we can also expect an identifier we have to use the try combinator Suppose we write expr letExpr identifier expression letExpr do string let identifier many1 letter If the user writes lexical the parser fails with unexpected expecting in let Indeed since the combinator only tries alternatives when the first alternative hasn consumed input the identifier parser is never tried because the prefix le of the string let parser is already consumed The right behaviour can be obtained by adding the try combinator expr letExpr identifier expression letExpr do try string let identifier many1 letter",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "try",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "uncons",
          "package": "parsec",
          "signature": "s -\u003e m (Maybe (t, s))",
          "source": "src/Text-Parsec-Prim.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "uncons",
          "normalized": "a-\u003eb(Maybe(c,a))",
          "package": "parsec",
          "signature": "s-\u003em(Maybe(t,s))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eunexpected msg\u003c/code\u003e always fails with an unexpected error\n message \u003ccode\u003emsg\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eThe parsers \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) and \u003ccode\u003eunexpected\u003c/code\u003e are the three parsers\n used to generate error messages. Of these, only (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) is commonly\n used. For an example of the use of \u003ccode\u003eunexpected\u003c/code\u003e, see the definition\n of \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "unexpected",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Prim.html#unexpected",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:unexpected\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:unexpected\"]"
        },
        "index": {
          "description": "The parser unexpected msg always fails with an unexpected error message msg without consuming any input The parsers fail and unexpected are the three parsers used to generate error messages Of these only is commonly used For an example of the use of unexpected see the definition of notFollowedBy",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "unexpected",
          "normalized": "String-\u003eParsecT a b c d",
          "package": "parsec",
          "signature": "String-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Prim",
          "name": "unknownError",
          "package": "parsec",
          "signature": "State s u -\u003e ParseError",
          "source": "src/Text-Parsec-Prim.html#unknownError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "unknownError",
          "normalized": "State a b-\u003eParseError",
          "package": "parsec",
          "partial": "Error",
          "signature": "State s u-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:unknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateParserState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the parser state.\n\u003c/p\u003e",
          "module": "Text.Parsec.Prim",
          "name": "updateParserState",
          "package": "parsec",
          "signature": "(State s u -\u003e State s u) -\u003e ParsecT s u m (State s u)",
          "source": "src/Text-Parsec-Prim.html#updateParserState",
          "type": "function"
        },
        "index": {
          "description": "updateParserState applies function to the parser state",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "updateParserState",
          "normalized": "(State a b-\u003eState a b)-\u003eParsecT a b c(State a b)",
          "package": "parsec",
          "partial": "Parser State",
          "signature": "(State s u-\u003eState s u)-\u003eParsecT s u m(State s u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:updateParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for modifyState for backwards compatibility.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Prim\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "updateState",
          "package": "parsec",
          "signature": "(u -\u003e u) -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Prim.html#updateState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:updateState\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:updateState\"]"
        },
        "index": {
          "description": "An alias for modifyState for backwards compatibility",
          "hierarchy": "Text Parsec Prim",
          "module": "Text.Parsec.Prim",
          "name": "updateState",
          "normalized": "(a-\u003ea)-\u003eParsecT b a c()",
          "package": "parsec",
          "partial": "State",
          "signature": "(u-\u003eu)-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Prim.html#v:updateState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Strings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.String",
          "name": "String",
          "package": "parsec",
          "source": "src/Text-Parsec-String.html",
          "type": "module"
        },
        "index": {
          "description": "Make Strings an instance of Stream with Char token type",
          "hierarchy": "Text Parsec String",
          "module": "Text.Parsec.String",
          "name": "String",
          "package": "parsec",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.String",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-String.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec String",
          "module": "Text.Parsec.String",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-String.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.String",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-String.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec String",
          "module": "Text.Parsec.String",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-String.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a string parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.String\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "parseFromFile",
          "package": "parsec",
          "signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
          "source": "src/Text-Parsec-String.html#parseFromFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-String.html#v:parseFromFile\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseFromFile\"]"
        },
        "index": {
          "description": "parseFromFile filePath runs string parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
          "hierarchy": "Text Parsec String",
          "module": "Text.Parsec.String",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "package": "parsec",
          "partial": "From File",
          "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-String.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Text an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Text.Lazy",
          "name": "Lazy",
          "package": "parsec",
          "source": "src/Text-Parsec-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Make Text an instance of Stream with Char token type",
          "hierarchy": "Text Parsec Text Lazy",
          "module": "Text.Parsec.Text.Lazy",
          "name": "Lazy",
          "package": "parsec",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Text.Lazy",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Text-Lazy.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Text Lazy",
          "module": "Text.Parsec.Text.Lazy",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text-Lazy.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Text.Lazy",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-Text-Lazy.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Text Lazy",
          "module": "Text.Parsec.Text.Lazy",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text-Lazy.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Text an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Text",
          "name": "Text",
          "package": "parsec",
          "source": "src/Text-Parsec-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Make Text an instance of Stream with Char token type",
          "hierarchy": "Text Parsec Text",
          "module": "Text.Parsec.Text",
          "name": "Text",
          "package": "parsec",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Text",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Text.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Text",
          "module": "Text.Parsec.Text",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Text",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-Text.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Text",
          "module": "Text.Parsec.Text",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Text.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse lexical elements (tokens). See \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e\n for a description of how to use it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Token",
          "name": "Token",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html",
          "type": "module"
        },
        "index": {
          "description": "helper module to parse lexical elements tokens See makeTokenParser for description of how to use it",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "Token",
          "package": "parsec",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ca\u003eText.Parsec.Token\u003c/a\u003e module. The module \u003ca\u003eText.Parsec.Language\u003c/a\u003e\n contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.Parsec.Token",
          "name": "GenLanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The GenLanguageDef type is record that contains all parameterizable features of the Text.Parsec.Token module The module Text.Parsec.Language contains some default definitions",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "GenLanguageDef",
          "package": "parsec",
          "partial": "Gen Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#t:GenLanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the record that holds lexical parsers that work on\n \u003ccode\u003es\u003c/code\u003e streams with state \u003ccode\u003eu\u003c/code\u003e over a monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parsec.Token",
          "name": "GenTokenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "data"
        },
        "index": {
          "description": "The type of the record that holds lexical parsers that work on streams with state over monad",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "GenTokenParser",
          "package": "parsec",
          "partial": "Gen Token Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#t:GenTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#LanguageDef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec",
          "partial": "Language Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#TokenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec",
          "partial": "Token Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#t:TokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "LanguageDef",
          "package": "parsec",
          "signature": "LanguageDef",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:LanguageDef\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:LanguageDef\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:LanguageDef\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec",
          "partial": "Language Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "TokenParser",
          "package": "parsec",
          "signature": "TokenParser",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:TokenParser\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:TokenParser\"]"
        },
        "index": {
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec",
          "partial": "Token Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:TokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003eangles p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in angle brackets ('\u003c'\n and '\u003e'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "angles",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:angles\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:angles\"]"
        },
        "index": {
          "description": "Lexeme parser angles parses enclosed in angle brackets and returning the value of",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "angles",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ebraces p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in braces ('{' and\n '}'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "braces",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:braces\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:braces\"]"
        },
        "index": {
          "description": "Lexeme parser braces parses enclosed in braces and returning the value of",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "braces",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ebrackets p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in brackets ('['\n and ']'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "brackets",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:brackets\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:brackets\"]"
        },
        "index": {
          "description": "Lexeme parser brackets parses enclosed in brackets and returning the value of",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "brackets",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language is case sensitive. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "caseSensitive",
          "package": "parsec",
          "signature": "Bool",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:caseSensitive\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:caseSensitive\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:caseSensitive\"]"
        },
        "index": {
          "description": "Set to True if the language is case sensitive",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "caseSensitive",
          "package": "parsec",
          "partial": "Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:caseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a single literal character. Returns the\n literal character value. This parsers deals correctly with escape\n sequences. The literal character is parsed according to the grammar\n rules defined in the Haskell report (which matches most programming\n languages quite closely). \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "charLiteral",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:charLiteral\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:charLiteral\"]"
        },
        "index": {
          "description": "This lexeme parser parses single literal character Returns the literal character value This parsers deals correctly with escape sequences The literal character is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "charLiteral",
          "package": "parsec",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecolon\u003c/code\u003e parses the character ':' and skips any\n trailing white space. Returns the string \":\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "colon",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:colon\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:colon\"]"
        },
        "index": {
          "description": "Lexeme parser colon parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "colon",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecomma\u003c/code\u003e parses the character ',' and skips any\n trailing white space. Returns the string \",\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "comma",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:comma\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:comma\"]"
        },
        "index": {
          "description": "Lexeme parser comma parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "comma",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commaSep",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commaSep\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:commaSep\"]"
        },
        "index": {
          "description": "Lexeme parser commaSep parses zero or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "commaSep",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
          "package": "parsec",
          "partial": "Sep",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commaSep1",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commaSep1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:commaSep1\"]"
        },
        "index": {
          "description": "Lexeme parser commaSep1 parses one or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "commaSep1",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
          "package": "parsec",
          "partial": "Sep",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commaSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the end of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"*/\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentEnd",
          "package": "parsec",
          "signature": "String",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentEnd\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:commentEnd\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:commentEnd\"]"
        },
        "index": {
          "description": "Describes the end of block comment Use the empty string if the language doesn support block comments For example",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "commentEnd",
          "package": "parsec",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the start of a line comment. Use the empty string if the\n language doesn't support line comments. For example \"//\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentLine",
          "package": "parsec",
          "signature": "String",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:commentLine\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:commentLine\"]"
        },
        "index": {
          "description": "Describes the start of line comment Use the empty string if the language doesn support line comments For example",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "commentLine",
          "package": "parsec",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the start of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"/*\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentStart",
          "package": "parsec",
          "signature": "String",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:commentStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:commentStart\"]"
        },
        "index": {
          "description": "Describes the start of block comment Use the empty string if the language doesn support block comments For example",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "commentStart",
          "package": "parsec",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:commentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the decimal system. Returns the\n value of the number. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "decimal",
          "package": "parsec",
          "signature": "ParsecT s u m Integer",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:decimal\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:decimal\"]"
        },
        "index": {
          "description": "Parses positive whole number in the decimal system Returns the value of the number",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "decimal",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003edot\u003c/code\u003e parses the character '.' and skips any\n trailing white space. Returns the string \".\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "dot",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:dot\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:dot\"]"
        },
        "index": {
          "description": "Lexeme parser dot parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "dot",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a floating point value. Returns the value\n of the number. The number is parsed according to the grammar rules\n defined in the Haskell report. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "float",
          "package": "parsec",
          "signature": "ParsecT s u m Double",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:float\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:float\"]"
        },
        "index": {
          "description": "This lexeme parser parses floating point value Returns the value of the number The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "float",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the hexadecimal system. The number\n should be prefixed with \"0x\" or \"0X\". Returns the value of the\n number. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "hexadecimal",
          "package": "parsec",
          "signature": "ParsecT s u m Integer",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:hexadecimal\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:hexadecimal\"]"
        },
        "index": {
          "description": "Parses positive whole number in the hexadecimal system The number should be prefixed with or Returns the value of the number",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "hexadecimal",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any legal tail characters of identifiers.\n For example \u003ccode\u003ealphaNum \u003c|\u003e char \"_\"\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "identLetter",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identLetter\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:identLetter\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:identLetter\"]"
        },
        "index": {
          "description": "This parser should accept any legal tail characters of identifiers For example alphaNum char",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "identLetter",
          "package": "parsec",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any start characters of identifiers. For\n example \u003ccode\u003eletter \u003c|\u003e char \"_\"\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "identStart",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:identStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:identStart\"]"
        },
        "index": {
          "description": "This parser should accept any start characters of identifiers For example letter char",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "identStart",
          "package": "parsec",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a legal identifier. Returns the identifier\n string. This parser will fail on identifiers that are reserved\n words. Legal identifier (start) characters and reserved words are\n defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eidentifier\u003c/code\u003e is treated as\n a single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "identifier",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identifier\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:identifier\"]"
        },
        "index": {
          "description": "This lexeme parser parses legal identifier Returns the identifier string This parser will fail on identifiers that are reserved words Legal identifier start characters and reserved words are defined in the LanguageDef that is passed to makeTokenParser An identifier is treated as single token using try",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "identifier",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses an integer (a whole number). This parser\n is like \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e except that it can be prefixed with\n sign (i.e. '-' or '+'). Returns the value of the number. The\n number can be specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according\n to the grammar rules in the Haskell report. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "integer",
          "package": "parsec",
          "signature": "ParsecT s u m Integer",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:integer\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:integer\"]"
        },
        "index": {
          "description": "This lexeme parser parses an integer whole number This parser is like natural except that it can be prefixed with sign i.e or Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "integer",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elexeme p\u003c/code\u003e first applies parser \u003ccode\u003ep\u003c/code\u003e and than the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e\n parser, returning the value of \u003ccode\u003ep\u003c/code\u003e. Every lexical\n token (lexeme) is defined using \u003ccode\u003elexeme\u003c/code\u003e, this way every parse\n starts at a point without white space. Parsers that use \u003ccode\u003elexeme\u003c/code\u003e are\n called \u003cem\u003elexeme\u003c/em\u003e parsers in this document.\n\u003c/p\u003e\u003cp\u003eThe only point where the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e parser should be\n called explicitly is the start of the main parser in order to skip\n any leading white space.\n\u003c/p\u003e\u003cpre\u003e    mainParser  = do{ whiteSpace\n                     ; ds \u003c- many (lexeme digit)\n                     ; eof\n                     ; return (sum ds)\n                     }\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "lexeme",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:lexeme\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:lexeme\"]"
        },
        "index": {
          "description": "lexeme first applies parser and than the whiteSpace parser returning the value of Every lexical token lexeme is defined using lexeme this way every parse starts at point without white space Parsers that use lexeme are called lexeme parsers in this document The only point where the whiteSpace parser should be called explicitly is the start of the main parser in order to skip any leading white space mainParser do whiteSpace ds many lexeme digit eof return sum ds",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "lexeme",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003emakeTokenParser language\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eGenTokenParser\u003c/a\u003e\u003c/code\u003e\n record that contains lexical parsers that are\n defined using the definitions in the \u003ccode\u003elanguage\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eThe use of this function is quite stylized - one imports the\n appropiate language definition and selects the lexical parsers that\n are needed from the resulting \u003ccode\u003e\u003ca\u003eGenTokenParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  module Main where\n\n  import Text.Parsec\n  import qualified Text.Parsec.Token as P\n  import Text.Parsec.Language (haskellDef)\n\n  -- The parser\n  ...\n\n  expr  =   parens expr\n        \u003c|\u003e identifier\n        \u003c|\u003e ...\n       \n\n  -- The lexer\n  lexer       = P.makeTokenParser haskellDef    \n      \n  parens      = P.parens lexer\n  braces      = P.braces lexer\n  identifier  = P.identifier lexer\n  reserved    = P.reserved lexer\n  ...\n\u003c/pre\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "makeTokenParser",
          "package": "parsec",
          "signature": "GenLanguageDef s u m -\u003e GenTokenParser s u m",
          "source": "src/Text-Parsec-Token.html#makeTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:makeTokenParser\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:makeTokenParser\"]"
        },
        "index": {
          "description": "The expression makeTokenParser language creates GenTokenParser record that contains lexical parsers that are defined using the definitions in the language record The use of this function is quite stylized one imports the appropiate language definition and selects the lexical parsers that are needed from the resulting GenTokenParser module Main where import Text.Parsec import qualified Text.Parsec.Token as import Text.Parsec.Language haskellDef The parser expr parens expr identifier The lexer lexer P.makeTokenParser haskellDef parens P.parens lexer braces P.braces lexer identifier P.identifier lexer reserved P.reserved lexer",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "makeTokenParser",
          "normalized": "GenLanguageDef a b c-\u003eGenTokenParser a b c",
          "package": "parsec",
          "partial": "Token Parser",
          "signature": "GenLanguageDef s u m-\u003eGenTokenParser s u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:makeTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a natural number (a positive whole\n number). Returns the value of the number. The number can be\n specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according to the grammar\n rules in the Haskell report. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "natural",
          "package": "parsec",
          "signature": "ParsecT s u m Integer",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:natural\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:natural\"]"
        },
        "index": {
          "description": "This lexeme parser parses natural number positive whole number Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "natural",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses either \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003efloat\u003c/a\u003e\u003c/code\u003e.\n Returns the value of the number. This parsers deals with\n any overlap in the grammar rules for naturals and floats. The number\n is parsed according to the grammar rules defined in the Haskell report. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "naturalOrFloat",
          "package": "parsec",
          "signature": "ParsecT s u m (Either Integer Double)",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:naturalOrFloat\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:naturalOrFloat\"]"
        },
        "index": {
          "description": "This lexeme parser parses either natural or float Returns the value of the number This parsers deals with any overlap in the grammar rules for naturals and floats The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "naturalOrFloat",
          "package": "parsec",
          "partial": "Or Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:naturalOrFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language supports nested block comments. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "nestedComments",
          "package": "parsec",
          "signature": "Bool",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:nestedComments\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:nestedComments\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:nestedComments\"]"
        },
        "index": {
          "description": "Set to True if the language supports nested block comments",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "nestedComments",
          "package": "parsec",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:nestedComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the octal system. The number\n should be prefixed with \"0o\" or \"0O\". Returns the value of the\n number. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "octal",
          "package": "parsec",
          "signature": "ParsecT s u m Integer",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:octal\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:octal\"]"
        },
        "index": {
          "description": "Parses positive whole number in the octal system The number should be prefixed with or Returns the value of the number",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "octal",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:octal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any legal tail characters of operators.\n Note that this parser should even be defined if the language doesn't\n support user-defined operators, or otherwise the \u003ccode\u003e\u003ca\u003ereservedOp\u003c/a\u003e\u003c/code\u003e\n parser won't work correctly. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "opLetter",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:opLetter\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:opLetter\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:opLetter\"]"
        },
        "index": {
          "description": "This parser should accept any legal tail characters of operators Note that this parser should even be defined if the language doesn support user-defined operators or otherwise the reservedOp parser won work correctly",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "opLetter",
          "package": "parsec",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:opLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any start characters of operators. For\n example \u003ccode\u003eoneOf \":!#$%&*+./\u003c=\u003e?@\\\\^|-~\"\u003c/code\u003e \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "opStart",
          "package": "parsec",
          "signature": "ParsecT s u m Char",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:opStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:opStart\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:opStart\"]"
        },
        "index": {
          "description": "This parser should accept any start characters of operators For example oneOf",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "opStart",
          "package": "parsec",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:opStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a legal operator. Returns the name of the\n operator. This parser will fail on any operators that are reserved\n operators. Legal operator (start) characters and reserved operators\n are defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eoperator\u003c/code\u003e is treated as a\n single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "operator",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:operator\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:operator\"]"
        },
        "index": {
          "description": "This lexeme parser parses legal operator Returns the name of the operator This parser will fail on any operators that are reserved operators Legal operator start characters and reserved operators are defined in the LanguageDef that is passed to makeTokenParser An operator is treated as single token using try",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "operator",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003eparens p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in parenthesis,\n returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "parens",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:parens\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:parens\"]"
        },
        "index": {
          "description": "Lexeme parser parens parses enclosed in parenthesis returning the value of",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "parens",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereserved name\u003c/code\u003e parses \u003ccode\u003esymbol \n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid identifier. A \u003ccode\u003ereserved\u003c/code\u003e word is treated as a single token\n using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reserved",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reserved\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:reserved\"]"
        },
        "index": {
          "description": "The lexeme parser reserved name parses symbol name but it also checks that the name is not prefix of valid identifier reserved word is treated as single token using try",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "reserved",
          "normalized": "String-\u003eParsecT a b c()",
          "package": "parsec",
          "signature": "String-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of reserved identifiers. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reservedNames",
          "package": "parsec",
          "signature": "[String]",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedNames\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedNames\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedNames\"]"
        },
        "index": {
          "description": "The list of reserved identifiers",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "reservedNames",
          "normalized": "[String]",
          "package": "parsec",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereservedOp name\u003c/code\u003e parses \u003ccode\u003esymbol\n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid operator. A \u003ccode\u003ereservedOp\u003c/code\u003e is treated as a single token using\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reservedOp",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m ()",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedOp\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedOp\"]"
        },
        "index": {
          "description": "The lexeme parser reservedOp name parses symbol name but it also checks that the name is not prefix of valid operator reservedOp is treated as single token using try",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "reservedOp",
          "normalized": "String-\u003eParsecT a b c()",
          "package": "parsec",
          "partial": "Op",
          "signature": "String-\u003eParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of reserved operators. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reservedOpNames",
          "package": "parsec",
          "signature": "[String]",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedOpNames\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedOpNames\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedOpNames\"]"
        },
        "index": {
          "description": "The list of reserved operators",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "reservedOpNames",
          "normalized": "[String]",
          "package": "parsec",
          "partial": "Op Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:reservedOpNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser |semi| parses the character ';' and skips any\n trailing white space. Returns the string \";\". \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "semi",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semi\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:semi\"]"
        },
        "index": {
          "description": "Lexeme parser semi parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "semi",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by\n \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "semiSep",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semiSep\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:semiSep\"]"
        },
        "index": {
          "description": "Lexeme parser semiSep parses zero or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "semiSep",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
          "package": "parsec",
          "partial": "Sep",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semiSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "semiSep1",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semiSep1\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:semiSep1\"]"
        },
        "index": {
          "description": "Lexeme parser semiSep1 parses one or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "semiSep1",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
          "package": "parsec",
          "partial": "Sep",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:semiSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "squares",
          "package": "parsec",
          "signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:squares\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:squares\"]"
        },
        "index": {
          "description": "DEPRECATED Use brackets",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "squares",
          "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
          "package": "parsec",
          "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:squares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a literal string. Returns the literal\n string value. This parsers deals correctly with escape sequences and\n gaps. The literal string is parsed according to the grammar rules\n defined in the Haskell report (which matches most programming\n languages quite closely). \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "stringLiteral",
          "package": "parsec",
          "signature": "ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:stringLiteral\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:stringLiteral\"]"
        },
        "index": {
          "description": "This lexeme parser parses literal string Returns the literal string value This parsers deals correctly with escape sequences and gaps The literal string is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "stringLiteral",
          "package": "parsec",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esymbol s\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "symbol",
          "package": "parsec",
          "signature": "String -\u003e ParsecT s u m String",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:symbol\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:symbol\"]"
        },
        "index": {
          "description": "Lexeme parser symbol parses string and skips trailing white space",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "symbol",
          "normalized": "String-\u003eParsecT a b c String",
          "package": "parsec",
          "signature": "String-\u003eParsecT s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any white space. White space consists of \u003cem\u003ezero\u003c/em\u003e or more\n occurrences of a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e, a line comment or a block (multi\n line) comment. Block comments may be nested. How comments are\n started and ended is defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e\n that is passed to \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Token\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "whiteSpace",
          "package": "parsec",
          "signature": "ParsecT s u m ()",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:whiteSpace\",\"http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#v:whiteSpace\"]"
        },
        "index": {
          "description": "Parses any white space White space consists of zero or more occurrences of space line comment or block multi line comment Block comments may be nested How comments are started and ended is defined in the LanguageDef that is passed to makeTokenParser",
          "hierarchy": "Text Parsec Token",
          "module": "Text.Parsec.Token",
          "name": "whiteSpace",
          "normalized": "ParsecT a b c()",
          "package": "parsec",
          "partial": "Space",
          "signature": "ParsecT s u m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec-Token.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec",
          "name": "Parsec",
          "package": "parsec",
          "source": "src/Text-Parsec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "Parsec",
          "package": "parsec",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec",
          "name": "Column",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "Column",
          "package": "parsec",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec",
          "name": "Line",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "Line",
          "package": "parsec",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.Parsec",
          "name": "ParseError",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "ParseError",
          "package": "parsec",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec",
          "name": "SourceName",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "SourceName",
          "package": "parsec",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.Parsec",
          "name": "SourcePos",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text Parsec",
          "module": "Text.Parsec",
          "name": "SourcePos",
          "package": "parsec",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-Parsec.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "Char",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "Char",
          "package": "parsec",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#CharParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec",
          "partial": "Char Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Char.html#t:CharParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis abstract data type represents parse error messages. There are\n four kinds of messages:\n\u003c/p\u003e\u003cpre\u003e  data Message = SysUnExpect String\n               | UnExpect String\n               | Expect String\n               | Message String\n\u003c/pre\u003e\u003cp\u003eThe fine distinction between different kinds of parse errors allows\n the system to generate quite good error messages for the user. It\n also allows error messages that are formatted in different\n languages. Each kind of message is generated by different combinators:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eSysUnExpect\u003c/a\u003e\u003c/code\u003e message is automatically generated by the\n       \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e combinator. The argument is the\n       unexpected input.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eUnExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003eunexpected\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the\n       unexpected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the expected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument is some general parser message. \n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#Message",
          "type": "data"
        },
        "index": {
          "description": "This abstract data type represents parse error messages There are four kinds of messages data Message SysUnExpect String UnExpect String Expect String Message String The fine distinction between different kinds of parse errors allows the system to generate quite good error messages for the user It also allows error messages that are formatted in different languages Each kind of message is generated by different combinators SysUnExpect message is automatically generated by the satisfy combinator The argument is the unexpected input UnExpect message is generated by the unexpected combinator The argument describes the unexpected item Expect message is generated by the combinator The argument describes the expected item Message message is generated by the fail combinator The argument is some general parser message",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "package": "parsec",
          "signature": "Message -\u003e Message -\u003e Ordering",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageCompare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "normalized": "Message-\u003eMessage-\u003eOrdering",
          "package": "parsec",
          "partial": "Compare",
          "signature": "Message-\u003eMessage-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:messageCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "package": "parsec",
          "signature": "Message -\u003e Message -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "normalized": "Message-\u003eMessage-\u003eBool",
          "package": "parsec",
          "partial": "Eq",
          "signature": "Message-\u003eMessage-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Error.html#v:messageEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Expr",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Expr",
          "package": "parsec",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec",
          "source": "src/Text-Parsec-Expr.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Operator",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Operator",
          "package": "parsec",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#OperatorTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec",
          "partial": "Operator Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Infix",
          "package": "parsec",
          "signature": "Infix (GenParser tok st (a -\u003e a -\u003e a)) Assoc",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Infix",
          "normalized": "Infix(GenParser a b(c-\u003ec-\u003ec))Assoc",
          "package": "parsec",
          "partial": "Infix",
          "signature": "Infix(GenParser tok st(a-\u003ea-\u003ea))Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Postfix",
          "package": "parsec",
          "signature": "Postfix (GenParser tok st (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Postfix",
          "normalized": "Postfix(GenParser a b(c-\u003ec))",
          "package": "parsec",
          "partial": "Postfix",
          "signature": "Postfix(GenParser tok st(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:Postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Prefix",
          "package": "parsec",
          "signature": "Prefix (GenParser tok st (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Prefix",
          "normalized": "Prefix(GenParser a b(c-\u003ec))",
          "package": "parsec",
          "partial": "Prefix",
          "signature": "Prefix(GenParser tok st(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "buildExpressionParser",
          "package": "parsec",
          "signature": "OperatorTable tok st a -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#buildExpressionParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "buildExpressionParser",
          "normalized": "OperatorTable a b c-\u003eGenParser a b c-\u003eGenParser a b c",
          "package": "parsec",
          "partial": "Expression Parser",
          "signature": "OperatorTable tok st a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Expr.html#v:buildExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "Language",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Language.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "Language",
          "package": "parsec",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ca\u003eText.Parsec.Token\u003c/a\u003e module. The module \u003ca\u003eText.Parsec.Language\u003c/a\u003e\n contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "GenLanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The GenLanguageDef type is record that contains all parameterizable features of the Text.Parsec.Token module The module Text.Parsec.Language contains some default definitions",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "GenLanguageDef",
          "package": "parsec",
          "partial": "Gen Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#t:GenLanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#LanguageDef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec",
          "partial": "Language Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Language.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "Perm",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "Perm",
          "package": "parsec",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvided for backwards compatibility.  The tok type is ignored.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Perm.html#PermParser",
          "type": "type"
        },
        "index": {
          "description": "Provided for backwards compatibility The tok type is ignored",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec",
          "partial": "Perm Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Perm.html#t:PermParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-String.html#GenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec",
          "partial": "Gen Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec",
          "source": "src/Text-Parsec-String.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec",
          "source": "src/Text-Parsec-Prim.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec",
          "signature": "GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#pzero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:pzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "runParser",
          "package": "parsec",
          "signature": "GenParser tok st a -\u003e st -\u003e SourceName -\u003e [tok] -\u003e Either ParseError a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#runParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "runParser",
          "normalized": "GenParser a b c-\u003eb-\u003eSourceName-\u003e[a]-\u003eEither ParseError c",
          "package": "parsec",
          "partial": "Parser",
          "signature": "GenParser tok st a-\u003est-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "try",
          "package": "parsec",
          "signature": "GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "try",
          "normalized": "GenParser a b c-\u003eGenParser a b c",
          "package": "parsec",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Prim.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "Token",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec-Token.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "Token",
          "package": "parsec",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ca\u003eText.Parsec.Token\u003c/a\u003e module. The module \u003ca\u003eText.Parsec.Language\u003c/a\u003e\n contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "GenLanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenLanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The GenLanguageDef type is record that contains all parameterizable features of the Text.Parsec.Token module The module Text.Parsec.Language contains some default definitions",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "GenLanguageDef",
          "package": "parsec",
          "partial": "Gen Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#t:GenLanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the record that holds lexical parsers that work on\n \u003ccode\u003es\u003c/code\u003e streams with state \u003ccode\u003eu\u003c/code\u003e over a monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "GenTokenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#GenTokenParser",
          "type": "data"
        },
        "index": {
          "description": "The type of the record that holds lexical parsers that work on streams with state over monad",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "GenTokenParser",
          "package": "parsec",
          "partial": "Gen Token Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#t:GenTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#LanguageDef",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec",
          "partial": "Language Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec",
          "source": "src/Text-Parsec-Token.html#TokenParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec",
          "partial": "Token Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec-Token.html#t:TokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec compatibility module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec",
          "source": "src/Text-ParserCombinators-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec compatibility module",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec",
          "source": "src/Text-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec",
          "source": "src/Text-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec/docs/Text-ParserCombinators-Parsec.html#t:SourcePos"
      }
    }
  ]
]