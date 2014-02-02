[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake lazy ByteStrings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.ByteString.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-ByteString-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Make lazy ByteStrings an instance of Stream with Char token type",
        "hierarchy": "Text Parsec ByteString Lazy",
        "module": "Text.Parsec.ByteString.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "parsec3",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString-Lazy.html#t:GenParser",
      "description": {
        "fct-module": "Text.Parsec.ByteString.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-ByteString-Lazy.html#GenParser",
        "fct-type": "type",
        "title": "GenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec ByteString Lazy",
        "module": "Text.Parsec.ByteString.Lazy",
        "name": "GenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString-Lazy.html#t:Parser",
      "description": {
        "fct-module": "Text.Parsec.ByteString.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-ByteString-Lazy.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec ByteString Lazy",
        "module": "Text.Parsec.ByteString.Lazy",
        "name": "Parser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString-Lazy.html#v:parseFromFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a lazy bytestring parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.ByteString.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
        "fct-source": "src/Text-Parsec-ByteString-Lazy.html#parseFromFile",
        "fct-type": "function",
        "title": "parseFromFile"
      },
      "index": {
        "description": "parseFromFile filePath runs lazy bytestring parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
        "hierarchy": "Text Parsec ByteString Lazy",
        "module": "Text.Parsec.ByteString.Lazy",
        "name": "parseFromFile",
        "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
        "package": "parsec3",
        "partial": "From File",
        "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake strict ByteStrings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.ByteString",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Make strict ByteStrings an instance of Stream with Char token type",
        "hierarchy": "Text Parsec ByteString",
        "module": "Text.Parsec.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "parsec3",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString.html#t:GenParser",
      "description": {
        "fct-module": "Text.Parsec.ByteString",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-ByteString.html#GenParser",
        "fct-type": "type",
        "title": "GenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec ByteString",
        "module": "Text.Parsec.ByteString",
        "name": "GenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString.html#t:Parser",
      "description": {
        "fct-module": "Text.Parsec.ByteString",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-ByteString.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec ByteString",
        "module": "Text.Parsec.ByteString",
        "name": "Parser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-ByteString.html#v:parseFromFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a strict bytestring parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.ByteString",
        "fct-package": "parsec3",
        "fct-signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
        "fct-source": "src/Text-Parsec-ByteString.html#parseFromFile",
        "fct-type": "function",
        "title": "parseFromFile"
      },
      "index": {
        "description": "parseFromFile filePath runs strict bytestring parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
        "hierarchy": "Text Parsec ByteString",
        "module": "Text.Parsec.ByteString",
        "name": "parseFromFile",
        "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
        "package": "parsec3",
        "partial": "From File",
        "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used character parsers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Char.html",
        "fct-type": "module",
        "title": "Char"
      },
      "index": {
        "description": "Commonly used character parsers",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "Char",
        "normalized": "",
        "package": "parsec3",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:alphaNum",
      "description": {
        "fct-descr": "\u003cp\u003eParses a letter or digit (a character between '0' and '9').\n Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#alphaNum",
        "fct-type": "function",
        "title": "alphaNum"
      },
      "index": {
        "description": "Parses letter or digit character between and Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "alphaNum",
        "normalized": "",
        "package": "parsec3",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:anyChar",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#anyChar",
        "fct-type": "function",
        "title": "anyChar"
      },
      "index": {
        "description": "This parser succeeds for any character Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "anyChar",
        "normalized": "",
        "package": "parsec3",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character (i.e. \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  semiColon  = char ';'\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "Char -\u003e ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "char parses single character Returns the parsed character i.e semiColon char",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "char",
        "normalized": "Char-\u003eParsecT a b c Char",
        "package": "parsec3",
        "partial": "",
        "signature": "Char-\u003eParsecT s u m Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:digit",
      "description": {
        "fct-descr": "\u003cp\u003eParses a digit. Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#digit",
        "fct-type": "function",
        "title": "digit"
      },
      "index": {
        "description": "Parses digit Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "digit",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:hexDigit",
      "description": {
        "fct-descr": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n 'f' or 'A' and 'F'). Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#hexDigit",
        "fct-type": "function",
        "title": "hexDigit"
      },
      "index": {
        "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "hexDigit",
        "normalized": "",
        "package": "parsec3",
        "partial": "Digit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:letter",
      "description": {
        "fct-descr": "\u003cp\u003eParses a letter (an upper case or lower case character). Returns the\n parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#letter",
        "fct-type": "function",
        "title": "letter"
      },
      "index": {
        "description": "Parses letter an upper case or lower case character Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "letter",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:lower",
      "description": {
        "fct-descr": "\u003cp\u003eParses a lower case character (a character between 'a' and 'z').\n Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#lower",
        "fct-type": "function",
        "title": "lower"
      },
      "index": {
        "description": "Parses lower case character character between and Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "lower",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:newline",
      "description": {
        "fct-descr": "\u003cp\u003eParses a newline character ('\\n'). Returns a newline character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#newline",
        "fct-type": "function",
        "title": "newline"
      },
      "index": {
        "description": "Parses newline character Returns newline character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "newline",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:noneOf",
      "description": {
        "fct-descr": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "[Char] -\u003e ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#noneOf",
        "fct-type": "function",
        "title": "noneOf"
      },
      "index": {
        "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character consonant noneOf aeiou",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "noneOf",
        "normalized": "[Char]-\u003eParsecT a b c Char",
        "package": "parsec3",
        "partial": "Of",
        "signature": "[Char]-\u003eParsecT s u m Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:octDigit",
      "description": {
        "fct-descr": "\u003cp\u003eParses an octal digit (a character between '0' and '7'). Returns\n the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#octDigit",
        "fct-type": "function",
        "title": "octDigit"
      },
      "index": {
        "description": "Parses an octal digit character between and Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "octDigit",
        "normalized": "",
        "package": "parsec3",
        "partial": "Digit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:oneOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied\n list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "[Char] -\u003e ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#oneOf",
        "fct-type": "function",
        "title": "oneOf"
      },
      "index": {
        "description": "oneOf cs succeeds if the current character is in the supplied list of characters cs Returns the parsed character See also satisfy vowel oneOf aeiou",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "oneOf",
        "normalized": "[Char]-\u003eParsecT a b c Char",
        "package": "parsec3",
        "partial": "Of",
        "signature": "[Char]-\u003eParsecT s u m Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:satisfy",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003esatisfy f\u003c/code\u003e succeeds for any character for which the\n supplied function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "(Char -\u003e Bool) -\u003e ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#satisfy",
        "fct-type": "function",
        "title": "satisfy"
      },
      "index": {
        "description": "The parser satisfy succeeds for any character for which the supplied function returns True Returns the character that is actually parsed",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "satisfy",
        "normalized": "(Char-\u003eBool)-\u003eParsecT a b c Char",
        "package": "parsec3",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eParsecT s u m Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "space",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:spaces",
      "description": {
        "fct-descr": "\u003cp\u003eSkips \u003cem\u003ezero\u003c/em\u003e or more white space characters. See also \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Char.html#spaces",
        "fct-type": "function",
        "title": "spaces"
      },
      "index": {
        "description": "Skips zero or more white space characters See also skipMany",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "spaces",
        "normalized": "ParsecT a b c()",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   string \"div\" \n              \u003c|\u003e string \"mod\"\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Char.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "string parses sequence of characters given by Returns the parsed string i.e divOrMod string div string mod",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "string",
        "normalized": "String-\u003eParsecT a b c String",
        "package": "parsec3",
        "partial": "",
        "signature": "String-\u003eParsecT s u m String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:tab",
      "description": {
        "fct-descr": "\u003cp\u003eParses a tab character ('\\t'). Returns a tab character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#tab",
        "fct-type": "function",
        "title": "tab"
      },
      "index": {
        "description": "Parses tab character Returns tab character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "tab",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Char.html#v:upper",
      "description": {
        "fct-descr": "\u003cp\u003eParses an upper case letter (a character between 'A' and 'Z').\n Returns the parsed character. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Char",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Char.html#upper",
        "fct-type": "function",
        "title": "upper"
      },
      "index": {
        "description": "Parses an upper case letter character between and Returns the parsed character",
        "hierarchy": "Text Parsec Char",
        "module": "Text.Parsec.Char",
        "name": "upper",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used generic combinators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Combinator.html",
        "fct-type": "module",
        "title": "Combinator"
      },
      "index": {
        "description": "Commonly used generic combinators",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "Combinator",
        "normalized": "",
        "package": "parsec3",
        "partial": "Combinator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:anyToken",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003eanyToken\u003c/code\u003e accepts any kind of token. It is for example\n used to implement \u003ccode\u003e\u003ca\u003eeof\u003c/a\u003e\u003c/code\u003e. Returns the accepted token. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m t",
        "fct-source": "src/Text-Parsec-Combinator.html#anyToken",
        "fct-type": "function",
        "title": "anyToken"
      },
      "index": {
        "description": "The parser anyToken accepts any kind of token It is for example used to implement eof Returns the accepted token",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "anyToken",
        "normalized": "",
        "package": "parsec3",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eclose\u003c/code\u003e.\n Returns the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  braces  = between (symbol \"{\") (symbol \"}\")\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m open -\u003e ParsecT s u m close -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#between",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "between open close parses open followed by and close Returns the value returned by braces between symbol symbol",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "between",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c f-\u003eParsecT a b c f",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m open-\u003eParsecT s u m close-\u003eParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:chainl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e. Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are zero occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#chainl",
        "fct-type": "function",
        "title": "chainl"
      },
      "index": {
        "description": "chainl op parser zero or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by If there are zero occurrences of the value is returned",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "chainl",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003ed-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003ea-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:chainl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainl1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. . This parser can for example be used to eliminate left\n recursion which typically occurs in expression grammars.\n\u003c/p\u003e\u003cpre\u003e  expr    = term   `chainl1` addop\n  term    = factor `chainl1` mulop\n  factor  = parens expr \u003c|\u003e integer\n\n  mulop   =   do{ symbol \"*\"; return (*)   }\n          \u003c|\u003e do{ symbol \"/\"; return (div) }\n\n  addop   =   do{ symbol \"+\"; return (+) }\n          \u003c|\u003e do{ symbol \"-\"; return (-) }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#chainl1",
        "fct-type": "function",
        "title": "chainl1"
      },
      "index": {
        "description": "chainl1 op parser one or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by This parser can for example be used to eliminate left recursion which typically occurs in expression grammars expr term chainl1 addop term factor chainl1 mulop factor parens expr integer mulop do symbol return do symbol return div addop do symbol return do symbol return",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "chainl1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:chainr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#chainr",
        "fct-type": "function",
        "title": "chainr"
      },
      "index": {
        "description": "chainr op parser zero or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by If there are no occurrences of the value is returned",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "chainr",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003ed-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003ea-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:chainr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echainr1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of |p|,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m (a -\u003e a -\u003e a) -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#chainr1",
        "fct-type": "function",
        "title": "chainr1"
      },
      "index": {
        "description": "chainr1 op parser one or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "chainr1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c(d-\u003ed-\u003ed)-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m(a-\u003ea-\u003ea)-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:choice",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n parser.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "[ParsecT s u m a] -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#choice",
        "fct-type": "function",
        "title": "choice"
      },
      "index": {
        "description": "choice ps tries to apply the parsers in the list ps in order until one of them succeeds Returns the value of the succeeding parser",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "choice",
        "normalized": "[ParsecT a b c d]-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "[ParsecT s u m a]-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003en\u003c/code\u003e is smaller or\n equal to zero, the parser equals to \u003ccode\u003ereturn []\u003c/code\u003e. Returns a list of\n \u003ccode\u003en\u003c/code\u003e values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "Int -\u003e ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "count parses occurrences of If is smaller or equal to zero the parser equals to return Returns list of values returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "count",
        "normalized": "Int-\u003eParsecT a b c d-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "",
        "signature": "Int-\u003eParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:endBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   cStatements  = cStatement `endBy` semi\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#endBy",
        "fct-type": "function",
        "title": "endBy"
      },
      "index": {
        "description": "endBy sep parses zero or more occurrences of seperated and ended by sep Returns list of values returned by cStatements cStatement endBy semi",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "endBy",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:endBy1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eendBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#endBy1",
        "fct-type": "function",
        "title": "endBy1"
      },
      "index": {
        "description": "endBy1 sep parses one or more occurrences of seperated and ended by sep Returns list of values returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "endBy1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:eof",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser only succeeds at the end of the input. This is not a\n primitive parser but it is defined using \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  eof  = notFollowedBy anyToken \u003c?\u003e \"end of input\"\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Combinator.html#eof",
        "fct-type": "function",
        "title": "eof"
      },
      "index": {
        "description": "This parser only succeeds at the end of the input This is not primitive parser but it is defined using notFollowedBy eof notFollowedBy anyToken end of input",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "eof",
        "normalized": "ParsecT a b c()",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e fails and consumes some input, so does \u003ccode\u003elookAhead\u003c/code\u003e. Combine with \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n if this is undesirable.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "lookAhead parses without consuming any input If fails and consumes some input so does lookAhead Combine with try if this is undesirable",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "lookAhead",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "Ahead",
        "signature": "ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:many1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#many1",
        "fct-type": "function",
        "title": "many1"
      },
      "index": {
        "description": "many1 applies the parser one or more times Returns list of the returned values of word many1 letter",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "many1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:manyTill",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n This parser can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = do{ string \"\u003c!--\"\n                      ; manyTill anyChar (try (string \"--\u003e\"))\n                      }\n\u003c/pre\u003e\u003cp\u003eNote the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"--\u003e\"\u003c/code\u003e, and\n    therefore the use of the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m end -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#manyTill",
        "fct-type": "function",
        "title": "manyTill"
      },
      "index": {
        "description": "manyTill end applies parser zero or more times until parser end succeeds Returns the list of values returned by This parser can be used to scan comments simpleComment do string manyTill anyChar try string Note the overlapping parsers anyChar and string and therefore the use of the try combinator",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "manyTill",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "Till",
        "signature": "ParsecT s u m a-\u003eParsecT s u m end-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:notFollowedBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e only succeeds when parser \u003ccode\u003ep\u003c/code\u003e fails. This parser\n does not consume any input. This parser can be used to implement the\n 'longest match' rule. For example, when recognizing keywords (for\n example \u003ccode\u003elet\u003c/code\u003e), we want to make sure that a keyword is not followed\n by a legal identifier character, in which case the keyword is\n actually an identifier (for example \u003ccode\u003elets\u003c/code\u003e). We can program this\n behaviour as follows:\n\u003c/p\u003e\u003cpre\u003e  keywordLet  = try (do{ string \"let\"\n                       ; notFollowedBy alphaNum\n                       })\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Combinator.html#notFollowedBy",
        "fct-type": "function",
        "title": "notFollowedBy"
      },
      "index": {
        "description": "notFollowedBy only succeeds when parser fails This parser does not consume any input This parser can be used to implement the longest match rule For example when recognizing keywords for example let we want to make sure that keyword is not followed by legal identifier character in which case the keyword is actually an identifier for example lets We can program this behaviour as follows keywordLet try do string let notFollowedBy alphaNum",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "notFollowedBy",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Followed By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:option",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  priority  = option 0 (do{ d \u003c- digit\n                          ; return (digitToInt d) \n                          })\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Combinator.html#option",
        "fct-type": "function",
        "title": "option"
      },
      "index": {
        "description": "option tries to apply parser If fails without consuming input it returns the value otherwise the value returned by priority option do digit return digitToInt",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "option",
        "normalized": "a-\u003eParsecT b c d a-\u003eParsecT b c d a",
        "package": "parsec3",
        "partial": "",
        "signature": "a-\u003eParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:optionMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eoptionMaybe p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, otherwise it returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m (Maybe a)",
        "fct-source": "src/Text-Parsec-Combinator.html#optionMaybe",
        "fct-type": "function",
        "title": "optionMaybe"
      },
      "index": {
        "description": "optionMaybe tries to apply parser If fails without consuming input it return Nothing otherwise it returns Just the value returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "optionMaybe",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c(Maybe d)",
        "package": "parsec3",
        "partial": "Maybe",
        "signature": "ParsecT s u m a-\u003eParsecT s u m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:optional",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eoptional p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  It will parse \u003ccode\u003ep\u003c/code\u003e or nothing.\n It only fails if \u003ccode\u003ep\u003c/code\u003e fails after consuming input. It discards the result\n of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Combinator.html#optional",
        "fct-type": "function",
        "title": "optional"
      },
      "index": {
        "description": "optional tries to apply parser It will parse or nothing It only fails if fails after consuming input It discards the result of",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "optional",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:sepBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#sepBy",
        "fct-type": "function",
        "title": "sepBy"
      },
      "index": {
        "description": "sepBy sep parses zero or more occurrences of separated by sep Returns list of values returned by commaSep sepBy symbol",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "sepBy",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:sepBy1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#sepBy1",
        "fct-type": "function",
        "title": "sepBy1"
      },
      "index": {
        "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "sepBy1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:sepEndBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esepEndBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e, ie. haskell style\n statements. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  haskellStatements  = haskellStatement `sepEndBy` semi\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#sepEndBy",
        "fct-type": "function",
        "title": "sepEndBy"
      },
      "index": {
        "description": "sepEndBy sep parses zero or more occurrences of separated and optionally ended by sep ie haskell style statements Returns list of values returned by haskellStatements haskellStatement sepEndBy semi",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "sepEndBy",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "End By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:sepEndBy1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esepEndBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values\n returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m sep -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Combinator.html#sepEndBy1",
        "fct-type": "function",
        "title": "sepEndBy1"
      },
      "index": {
        "description": "sepEndBy1 sep parses one or more occurrences of separated and optionally ended by sep Returns list of values returned by",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "sepEndBy1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "End By",
        "signature": "ParsecT s u m a-\u003eParsecT s u m sep-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Combinator.html#v:skipMany1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eskipMany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n its result. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Combinator",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Combinator.html#skipMany1",
        "fct-type": "function",
        "title": "skipMany1"
      },
      "index": {
        "description": "skipMany1 applies the parser one or more times skipping its result",
        "hierarchy": "Text Parsec Combinator",
        "module": "Text.Parsec.Combinator",
        "name": "skipMany1",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Many",
        "signature": "ParsecT s u m a-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse errors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Parse errors",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "Error",
        "normalized": "",
        "package": "parsec3",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eThis abstract data type represents parse error messages. There are\n four kinds of messages:\n\u003c/p\u003e\u003cpre\u003e  data Message = SysUnExpect String\n               | UnExpect String\n               | Expect String\n               | Message String\n\u003c/pre\u003e\u003cp\u003eThe fine distinction between different kinds of parse errors allows\n the system to generate quite good error messages for the user. It\n also allows error messages that are formatted in different\n languages. Each kind of message is generated by different combinators:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eSysUnExpect\u003c/a\u003e\u003c/code\u003e message is automatically generated by the\n       \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e combinator. The argument is the\n       unexpected input.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eUnExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003eunexpected\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the\n       unexpected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the expected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument is some general parser message. \n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Error.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "This abstract data type represents parse error messages There are four kinds of messages data Message SysUnExpect String UnExpect String Expect String Message String The fine distinction between different kinds of parse errors allows the system to generate quite good error messages for the user It also allows error messages that are formatted in different languages Each kind of message is generated by different combinators SysUnExpect message is automatically generated by the satisfy combinator The argument is the unexpected input UnExpect message is generated by the unexpected combinator The argument describes the unexpected item Expect message is generated by the combinator The argument describes the expected item Message message is generated by the fail combinator The argument is some general parser message",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "Message",
        "normalized": "",
        "package": "parsec3",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#t:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Error.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "ParseError",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:Expect",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Expect !String",
        "fct-source": "src/Text-Parsec-Error.html#Message",
        "fct-type": "function",
        "title": "Expect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "Expect",
        "normalized": "",
        "package": "parsec3",
        "partial": "Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:Message",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Message !String",
        "fct-source": "src/Text-Parsec-Error.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "Message",
        "normalized": "",
        "package": "parsec3",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:SysUnExpect",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "SysUnExpect !String",
        "fct-source": "src/Text-Parsec-Error.html#Message",
        "fct-type": "function",
        "title": "SysUnExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "SysUnExpect",
        "normalized": "",
        "package": "parsec3",
        "partial": "Sys Un Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:UnExpect",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "UnExpect !String",
        "fct-source": "src/Text-Parsec-Error.html#Message",
        "fct-type": "function",
        "title": "UnExpect"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "UnExpect",
        "normalized": "",
        "package": "parsec3",
        "partial": "Un Expect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:addErrorMessage",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Message -\u003e ParseError -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#addErrorMessage",
        "fct-type": "function",
        "title": "addErrorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "addErrorMessage",
        "normalized": "Message-\u003eParseError-\u003eParseError",
        "package": "parsec3",
        "partial": "Error Message",
        "signature": "Message-\u003eParseError-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:errorIsUnknown",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e Bool",
        "fct-source": "src/Text-Parsec-Error.html#errorIsUnknown",
        "fct-type": "function",
        "title": "errorIsUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "errorIsUnknown",
        "normalized": "ParseError-\u003eBool",
        "package": "parsec3",
        "partial": "Is Unknown",
        "signature": "ParseError-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:errorMessages",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the list of error messages from the parse error\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e [Message]",
        "fct-source": "src/Text-Parsec-Error.html#errorMessages",
        "fct-type": "function",
        "title": "errorMessages"
      },
      "index": {
        "description": "Extracts the list of error messages from the parse error",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "errorMessages",
        "normalized": "ParseError-\u003e[Message]",
        "package": "parsec3",
        "partial": "Messages",
        "signature": "ParseError-\u003e[Message]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:errorPos",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the source position from the parse error\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Error.html#errorPos",
        "fct-type": "function",
        "title": "errorPos"
      },
      "index": {
        "description": "Extracts the source position from the parse error",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "errorPos",
        "normalized": "ParseError-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos",
        "signature": "ParseError-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:mergeError",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e ParseError -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#mergeError",
        "fct-type": "function",
        "title": "mergeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "mergeError",
        "normalized": "ParseError-\u003eParseError-\u003eParseError",
        "package": "parsec3",
        "partial": "Error",
        "signature": "ParseError-\u003eParseError-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:messageString",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the message string from an error message \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Message -\u003e String",
        "fct-source": "src/Text-Parsec-Error.html#messageString",
        "fct-type": "function",
        "title": "messageString"
      },
      "index": {
        "description": "Extract the message string from an error message",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "messageString",
        "normalized": "Message-\u003eString",
        "package": "parsec3",
        "partial": "String",
        "signature": "Message-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:newErrorMessage",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Message -\u003e SourcePos -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#newErrorMessage",
        "fct-type": "function",
        "title": "newErrorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "newErrorMessage",
        "normalized": "Message-\u003eSourcePos-\u003eParseError",
        "package": "parsec3",
        "partial": "Error Message",
        "signature": "Message-\u003eSourcePos-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:newErrorUnknown",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#newErrorUnknown",
        "fct-type": "function",
        "title": "newErrorUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "newErrorUnknown",
        "normalized": "SourcePos-\u003eParseError",
        "package": "parsec3",
        "partial": "Error Unknown",
        "signature": "SourcePos-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:setErrorMessage",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "Message -\u003e ParseError -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#setErrorMessage",
        "fct-type": "function",
        "title": "setErrorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "setErrorMessage",
        "normalized": "Message-\u003eParseError-\u003eParseError",
        "package": "parsec3",
        "partial": "Error Message",
        "signature": "Message-\u003eParseError-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:setErrorPos",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e ParseError -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Error.html#setErrorPos",
        "fct-type": "function",
        "title": "setErrorPos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "setErrorPos",
        "normalized": "SourcePos-\u003eParseError-\u003eParseError",
        "package": "parsec3",
        "partial": "Error Pos",
        "signature": "SourcePos-\u003eParseError-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Error.html#v:showErrorMessages",
      "description": {
        "fct-module": "Text.Parsec.Error",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [Message] -\u003e String",
        "fct-source": "src/Text-Parsec-Error.html#showErrorMessages",
        "fct-type": "function",
        "title": "showErrorMessages"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Error",
        "module": "Text.Parsec.Error",
        "name": "showErrorMessages",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
        "package": "parsec3",
        "partial": "Error Messages",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse \"expressions\".\n Builds a parser given a table of operators and associativities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Expr.html",
        "fct-type": "module",
        "title": "Expr"
      },
      "index": {
        "description": "helper module to parse expressions Builds parser given table of operators and associativities",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Expr",
        "normalized": "",
        "package": "parsec3",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#t:Assoc",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Expr.html#Assoc",
        "fct-type": "data",
        "title": "Assoc"
      },
      "index": {
        "description": "This data type specifies the associativity of operators left right or none",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Assoc",
        "normalized": "",
        "package": "parsec3",
        "partial": "Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#t:Operator",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type specifies operators that work on values of type \u003ccode\u003ea\u003c/code\u003e.\n An operator is either binary infix or unary prefix or postfix. A\n binary operator has also an associated associativity.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Expr.html#Operator",
        "fct-type": "data",
        "title": "Operator"
      },
      "index": {
        "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Operator",
        "normalized": "",
        "package": "parsec3",
        "partial": "Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#t:OperatorTable",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eOperatorTable s u m a\u003c/code\u003e is a list of \u003ccode\u003eOperator s u m a\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Expr.html#OperatorTable",
        "fct-type": "type",
        "title": "OperatorTable"
      },
      "index": {
        "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "OperatorTable",
        "normalized": "",
        "package": "parsec3",
        "partial": "Operator Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:AssocLeft",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "AssocLeft",
        "fct-source": "src/Text-Parsec-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "AssocLeft",
        "normalized": "",
        "package": "parsec3",
        "partial": "Assoc Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:AssocNone",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "AssocNone",
        "fct-source": "src/Text-Parsec-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "AssocNone",
        "normalized": "",
        "package": "parsec3",
        "partial": "Assoc None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:AssocRight",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "AssocRight",
        "fct-source": "src/Text-Parsec-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "AssocRight",
        "normalized": "",
        "package": "parsec3",
        "partial": "Assoc Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:Infix",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "Infix (ParsecT s u m (a -\u003e a -\u003e a)) Assoc",
        "fct-source": "src/Text-Parsec-Expr.html#Operator",
        "fct-type": "function",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Infix",
        "normalized": "Infix(ParsecT a b c(d-\u003ed-\u003ed))Assoc",
        "package": "parsec3",
        "partial": "Infix",
        "signature": "Infix(ParsecT s u m(a-\u003ea-\u003ea))Assoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:Postfix",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "Postfix (ParsecT s u m (a -\u003e a))",
        "fct-source": "src/Text-Parsec-Expr.html#Operator",
        "fct-type": "function",
        "title": "Postfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Postfix",
        "normalized": "Postfix(ParsecT a b c(d-\u003ed))",
        "package": "parsec3",
        "partial": "Postfix",
        "signature": "Postfix(ParsecT s u m(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:Prefix",
      "description": {
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "Prefix (ParsecT s u m (a -\u003e a))",
        "fct-source": "src/Text-Parsec-Expr.html#Operator",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "Prefix",
        "normalized": "Prefix(ParsecT a b c(d-\u003ed))",
        "package": "parsec3",
        "partial": "Prefix",
        "signature": "Prefix(ParsecT s u m(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Expr.html#v:buildExpressionParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr \n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n          \n  binary  name fun assoc = Infix (do{ reservedOp name; return fun }) assoc\n  prefix  name fun       = Prefix (do{ reservedOp name; return fun })\n  postfix name fun       = Postfix (do{ reservedOp name; return fun })\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Expr",
        "fct-package": "parsec3",
        "fct-signature": "OperatorTable s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Expr.html#buildExpressionParser",
        "fct-type": "function",
        "title": "buildExpressionParser"
      },
      "index": {
        "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix do reservedOp name return fun assoc prefix name fun Prefix do reservedOp name return fun postfix name fun Postfix do reservedOp name return fun",
        "hierarchy": "Text Parsec Expr",
        "module": "Text.Parsec.Expr",
        "name": "buildExpressionParser",
        "normalized": "OperatorTable a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "Expression Parser",
        "signature": "OperatorTable s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module that defines some language definitions that can be used\n to instantiate a token parser (see \u003ca\u003eText.Parsec.Token\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Language.html",
        "fct-type": "module",
        "title": "Language"
      },
      "index": {
        "description": "helper module that defines some language definitions that can be used to instantiate token parser see Text.Parsec.Token",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "Language",
        "normalized": "",
        "package": "parsec3",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#t:GenLanguageDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e module. The module \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e\n contains some default definitions.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "data",
        "title": "GenLanguageDef"
      },
      "index": {
        "description": "The GenLanguageDef type is record that contains all parameterizable features of the Token module The module Language contains some default definitions",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "GenLanguageDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Language Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#t:LanguageDef",
      "description": {
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Token.html#LanguageDef",
        "fct-type": "type",
        "title": "LanguageDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "LanguageDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Language Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:emptyDef",
      "description": {
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Text-Parsec-Language.html#emptyDef",
        "fct-type": "function",
        "title": "emptyDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "emptyDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:haskell",
      "description": {
        "fct-descr": "\u003cp\u003eA lexer for the haskell language.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "TokenParser st",
        "fct-source": "src/Text-Parsec-Language.html#haskell",
        "fct-type": "function",
        "title": "haskell"
      },
      "index": {
        "description": "lexer for the haskell language",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "haskell",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:haskellDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe language definition for the Haskell language.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Text-Parsec-Language.html#haskellDef",
        "fct-type": "function",
        "title": "haskellDef"
      },
      "index": {
        "description": "The language definition for the Haskell language",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "haskellDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:haskellStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a minimal token definition for Haskell style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Text-Parsec-Language.html#haskellStyle",
        "fct-type": "function",
        "title": "haskellStyle"
      },
      "index": {
        "description": "This is minimal token definition for Haskell style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "haskellStyle",
        "normalized": "",
        "package": "parsec3",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:javaStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a minimal token definition for Java style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Text-Parsec-Language.html#javaStyle",
        "fct-type": "function",
        "title": "javaStyle"
      },
      "index": {
        "description": "This is minimal token definition for Java style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "javaStyle",
        "normalized": "",
        "package": "parsec3",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:mondrian",
      "description": {
        "fct-descr": "\u003cp\u003eA lexer for the mondrian language.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "TokenParser st",
        "fct-source": "src/Text-Parsec-Language.html#mondrian",
        "fct-type": "function",
        "title": "mondrian"
      },
      "index": {
        "description": "lexer for the mondrian language",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "mondrian",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Language.html#v:mondrianDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe language definition for the language Mondrian.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Language",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Text-Parsec-Language.html#mondrianDef",
        "fct-type": "function",
        "title": "mondrianDef"
      },
      "index": {
        "description": "The language definition for the language Mondrian",
        "hierarchy": "Text Parsec Language",
        "module": "Text.Parsec.Language",
        "name": "mondrianDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers. The algorithm used\n is fairly complex since we push the type system to its limits :-)\n The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n Published as a functional pearl at the Haskell Workshop 2001.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Perm.html",
        "fct-type": "module",
        "title": "Perm"
      },
      "index": {
        "description": "This module implements permutation parsers The algorithm used is fairly complex since we push the type system to its limits The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra Published as functional pearl at the Haskell Workshop",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "parsec3",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#t:PermParser",
      "description": {
        "fct-descr": "\u003cp\u003eProvided for backwards compatibility.  The tok type is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Perm.html#PermParser",
        "fct-type": "type",
        "title": "PermParser"
      },
      "index": {
        "description": "Provided for backwards compatibility The tok type is ignored",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "PermParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Perm Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#t:StreamPermParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003eStreamPermParser s st a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses \n \u003ccode\u003es\u003c/code\u003e streams with user state \u003ccode\u003est\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first build with special operators\n like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Perm.html#StreamPermParser",
        "fct-type": "data",
        "title": "StreamPermParser"
      },
      "index": {
        "description": "The type StreamPermParser st denotes permutation parser that when converted by the permute function parses streams with user state st and returns value of type on success Normally permutation parser is first build with special operators like and than transformed into normal parser using permute",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "StreamPermParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Stream Perm Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "StreamPermParser s st (a -\u003e b) -\u003e Parsec s st a -\u003e StreamPermParser s st b",
        "fct-source": "src/Text-Parsec-Perm.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "StreamPermParser a b(c-\u003ed)-\u003eParsec a b c-\u003eStreamPermParser a b d",
        "package": "parsec3",
        "partial": "",
        "signature": "StreamPermParser s st(a-\u003eb)-\u003eParsec s st a-\u003eStreamPermParser s st b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#v:-60--124--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "StreamPermParser s st (a -\u003e b) -\u003e (a, Parsec s st a) -\u003e StreamPermParser s st b",
        "fct-source": "src/Text-Parsec-Perm.html#%3C%7C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c|?\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "(\u003c|?\u003e) \u003c|?\u003e",
        "normalized": "StreamPermParser a b(c-\u003ed)-\u003e(c,Parsec a b c)-\u003eStreamPermParser a b d",
        "package": "parsec3",
        "partial": "",
        "signature": "StreamPermParser s st(a-\u003eb)-\u003e(a,Parsec s st a)-\u003eStreamPermParser s st b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "(a -\u003e b) -\u003e Parsec s st a -\u003e StreamPermParser s st b",
        "fct-source": "src/Text-Parsec-Perm.html#%3C%24%24%3E",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "(a-\u003eb)-\u003eParsec c d a-\u003eStreamPermParser c d b",
        "package": "parsec3",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eParsec s st a-\u003eStreamPermParser s st b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#v:-60--36--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "(a -\u003e b) -\u003e (a, Parsec s st a) -\u003e StreamPermParser s st b",
        "fct-source": "src/Text-Parsec-Perm.html#%3C%24%3F%3E",
        "fct-type": "function",
        "title": "(\u003c$?\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "(\u003c$?\u003e) \u003c$?\u003e",
        "normalized": "(a-\u003eb)-\u003e(a,Parsec c d a)-\u003eStreamPermParser c d b",
        "package": "parsec3",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a,Parsec s st a)-\u003eStreamPermParser s st b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Perm.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parser described\n by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a permutation of:\n an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and an optional \u003ccode\u003ec\u003c/code\u003e.\n This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",many1 (char 'a'))\n                         \u003c||\u003e char 'b' \n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Perm",
        "fct-package": "parsec3",
        "fct-signature": "StreamPermParser s st a -\u003e Parsec s st a",
        "fct-source": "src/Text-Parsec-Perm.html#permute",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "The parser permute perm parses permutation of parser described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple many1 char char char where tuple",
        "hierarchy": "Text Parsec Perm",
        "module": "Text.Parsec.Perm",
        "name": "permute",
        "normalized": "StreamPermParser a b c-\u003eParsec a b c",
        "package": "parsec3",
        "partial": "",
        "signature": "StreamPermParser s st a-\u003eParsec s st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTextual source positions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Pos.html",
        "fct-type": "module",
        "title": "Pos"
      },
      "index": {
        "description": "Textual source positions",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "Pos",
        "normalized": "",
        "package": "parsec3",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#t:Column",
      "description": {
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#Column",
        "fct-type": "type",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "Column",
        "normalized": "",
        "package": "parsec3",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#t:Line",
      "description": {
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#Line",
        "fct-type": "type",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "Line",
        "normalized": "",
        "package": "parsec3",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#t:SourceName",
      "description": {
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#SourceName",
        "fct-type": "type",
        "title": "SourceName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "SourceName",
        "normalized": "",
        "package": "parsec3",
        "partial": "Source Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#t:SourcePos",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Pos.html#SourcePos",
        "fct-type": "data",
        "title": "SourcePos"
      },
      "index": {
        "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "SourcePos",
        "normalized": "",
        "package": "parsec3",
        "partial": "Source Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:incSourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the column number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#incSourceColumn",
        "fct-type": "function",
        "title": "incSourceColumn"
      },
      "index": {
        "description": "Increments the column number of source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "incSourceColumn",
        "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Column",
        "signature": "SourcePos-\u003eColumn-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:incSourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the line number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#incSourceLine",
        "fct-type": "function",
        "title": "incSourceLine"
      },
      "index": {
        "description": "Increments the line number of source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "incSourceLine",
        "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Line",
        "signature": "SourcePos-\u003eLine-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:initialPos",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n and line number and column number set to 1, the upper left.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourceName -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#initialPos",
        "fct-type": "function",
        "title": "initialPos"
      },
      "index": {
        "description": "Create new SourcePos with the given source name and line number and column number set to the upper left",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "initialPos",
        "normalized": "SourceName-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos",
        "signature": "SourceName-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:newPos",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n line number and column number.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourceName -\u003e Line -\u003e Column -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#newPos",
        "fct-type": "function",
        "title": "newPos"
      },
      "index": {
        "description": "Create new SourcePos with the given source name line number and column number",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "newPos",
        "normalized": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos",
        "signature": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:setSourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eSet the column number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceColumn",
        "fct-type": "function",
        "title": "setSourceColumn"
      },
      "index": {
        "description": "Set the column number of source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "setSourceColumn",
        "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Column",
        "signature": "SourcePos-\u003eColumn-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:setSourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceLine",
        "fct-type": "function",
        "title": "setSourceLine"
      },
      "index": {
        "description": "Set the line number of source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "setSourceLine",
        "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Line",
        "signature": "SourcePos-\u003eLine-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:setSourceName",
      "description": {
        "fct-descr": "\u003cp\u003eSet the name of the source.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e SourceName -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceName",
        "fct-type": "function",
        "title": "setSourceName"
      },
      "index": {
        "description": "Set the name of the source",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "setSourceName",
        "normalized": "SourcePos-\u003eSourceName-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Name",
        "signature": "SourcePos-\u003eSourceName-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:sourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the column number from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column",
        "fct-source": "src/Text-Parsec-Pos.html#sourceColumn",
        "fct-type": "function",
        "title": "sourceColumn"
      },
      "index": {
        "description": "Extracts the column number from source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "sourceColumn",
        "normalized": "SourcePos-\u003eColumn",
        "package": "parsec3",
        "partial": "Column",
        "signature": "SourcePos-\u003eColumn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:sourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the line number from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line",
        "fct-source": "src/Text-Parsec-Pos.html#sourceLine",
        "fct-type": "function",
        "title": "sourceLine"
      },
      "index": {
        "description": "Extracts the line number from source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "sourceLine",
        "normalized": "SourcePos-\u003eLine",
        "package": "parsec3",
        "partial": "Line",
        "signature": "SourcePos-\u003eLine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:sourceName",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the name of the source from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e SourceName",
        "fct-source": "src/Text-Parsec-Pos.html#sourceName",
        "fct-type": "function",
        "title": "sourceName"
      },
      "index": {
        "description": "Extracts the name of the source from source position",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "sourceName",
        "normalized": "SourcePos-\u003eSourceName",
        "package": "parsec3",
        "partial": "Name",
        "signature": "SourcePos-\u003eSourceName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:updatePosChar",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a source position given a character. If the character is a\n newline ('\\n') or carriage return ('\\r') the line number is\n incremented by 1. If the character is a tab ('t') the column\n number is incremented to the nearest 8'th column, ie. \u003ccode\u003ecolumn + 8 -\n ((column-1) `mod` 8)\u003c/code\u003e. In all other cases, the column is\n incremented by 1.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Char -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#updatePosChar",
        "fct-type": "function",
        "title": "updatePosChar"
      },
      "index": {
        "description": "Update source position given character If the character is newline or carriage return the line number is incremented by If the character is tab the column number is incremented to the nearest th column ie column column-1 mod In all other cases the column is incremented by",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "updatePosChar",
        "normalized": "SourcePos-\u003eChar-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos Char",
        "signature": "SourcePos-\u003eChar-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Pos.html#v:updatePosString",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eupdatePosString pos s\u003c/code\u003e updates the source position\n \u003ccode\u003epos\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003eupdatePosChar\u003c/a\u003e\u003c/code\u003e on every character in \u003ccode\u003es\u003c/code\u003e, ie.\n \u003ccode\u003efoldl updatePosChar pos string\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Pos",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e String -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#updatePosString",
        "fct-type": "function",
        "title": "updatePosString"
      },
      "index": {
        "description": "The expression updatePosString pos updates the source position pos by calling updatePosChar on every character in ie foldl updatePosChar pos string",
        "hierarchy": "Text Parsec Pos",
        "module": "Text.Parsec.Pos",
        "name": "updatePosString",
        "normalized": "SourcePos-\u003eString-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos String",
        "signature": "SourcePos-\u003eString-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primitive parser combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "The primitive parser combinators",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "parsec3",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:Consumed",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Prim.html#Consumed",
        "fct-type": "data",
        "title": "Consumed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Consumed",
        "normalized": "",
        "package": "parsec3",
        "partial": "Consumed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:Parsec",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Prim.html#Parsec",
        "fct-type": "type",
        "title": "Parsec"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Parsec",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:ParsecT",
      "description": {
        "fct-descr": "\u003cp\u003eParserT monad transformer and Parser type\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eParsecT s u m a\u003c/code\u003e is a parser with stream type \u003ccode\u003es\u003c/code\u003e, user state type \u003ccode\u003eu\u003c/code\u003e,\n underlying monad \u003ccode\u003em\u003c/code\u003e and return type \u003ccode\u003ea\u003c/code\u003e.  Parsec is strict in the user state.\n If this is undesirable, simply used a data type like \u003ccode\u003edata Box a = Box a\u003c/code\u003e and\n the state type \u003ccode\u003eBox YourStateType\u003c/code\u003e to add a level of indirection.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Prim.html#ParsecT",
        "fct-type": "data",
        "title": "ParsecT"
      },
      "index": {
        "description": "ParserT monad transformer and Parser type ParsecT is parser with stream type user state type underlying monad and return type Parsec is strict in the user state If this is undesirable simply used data type like data Box Box and the state type Box YourStateType to add level of indirection",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "ParsecT",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:Reply",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Prim.html#Reply",
        "fct-type": "data",
        "title": "Reply"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Reply",
        "normalized": "",
        "package": "parsec3",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:State",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Prim.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "State",
        "normalized": "",
        "package": "parsec3",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance of \u003ccode\u003eStream\u003c/code\u003e has stream type \u003ccode\u003es\u003c/code\u003e, underlying monad \u003ccode\u003em\u003c/code\u003e and token type \u003ccode\u003et\u003c/code\u003e determined by the stream\n\u003c/p\u003e\u003cp\u003eSome rough guidelines for a \"correct\" instance of Stream:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e unfoldM uncons gives the [t] corresponding to the stream\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003eStream\u003c/code\u003e instance is responsible for maintaining the \"position within the stream\" in the stream state \u003ccode\u003es\u003c/code\u003e.  This is trivial unless you are using the monad in a non-trivial way.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "class",
        "fct-source": "src/Text-Parsec-Prim.html#Stream",
        "fct-type": "class",
        "title": "Stream"
      },
      "index": {
        "description": "An instance of Stream has stream type underlying monad and token type determined by the stream Some rough guidelines for correct instance of Stream unfoldM uncons gives the corresponding to the stream Stream instance is responsible for maintaining the position within the stream in the stream state This is trivial unless you are using the monad in non-trivial way",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Stream",
        "normalized": "",
        "package": "parsec3",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:-60--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThis combinator implements choice. The parser \u003ccode\u003ep \u003c|\u003e q\u003c/code\u003e first\n applies \u003ccode\u003ep\u003c/code\u003e. If it succeeds, the value of \u003ccode\u003ep\u003c/code\u003e is returned. If \u003ccode\u003ep\u003c/code\u003e\n fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, parser \u003ccode\u003eq\u003c/code\u003e is tried. This\n combinator is defined equal to the \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n class and the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) member of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser is called \u003cem\u003epredictive\u003c/em\u003e since \u003ccode\u003eq\u003c/code\u003e is only tried when\n parser \u003ccode\u003ep\u003c/code\u003e didn't consume any input (i.e.. the look ahead is 1).\n This non-backtracking behaviour allows for both an efficient\n implementation of the parser combinators and the generation of good\n error messages.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#%3C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c|\u003e)"
      },
      "index": {
        "description": "This combinator implements choice The parser first applies If it succeeds the value of is returned If fails without consuming any input parser is tried This combinator is defined equal to the mplus member of the MonadPlus class and the member of Alternative The parser is called predictive since is only tried when parser didn consume any input i.e the look ahead is This non-backtracking behaviour allows for both an efficient implementation of the parser combinators and the generation of good error messages",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "(\u003c|\u003e) \u003c|\u003e",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003ep \u003ca\u003e?\u003c/a\u003e msg\u003c/code\u003e behaves as parser \u003ccode\u003ep\u003c/code\u003e, but whenever the\n parser \u003ccode\u003ep\u003c/code\u003e fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, it replaces expect\n error messages with the expect error message \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is normally used at the end of a set alternatives where we want\n to return an error message in terms of a higher level construct\n rather than returning all possible characters. For example, if the\n \u003ccode\u003eexpr\u003c/code\u003e parser from the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e example would fail, the error\n message is: '...: expecting expression'. Without the \u003ccode\u003e(\u003c?\u003e)\u003c/code\u003e\n combinator, the message would be like '...: expecting \"let\" or\n letter', which is less friendly.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e String -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#%3C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "The parser msg behaves as parser but whenever the parser fails without consuming any input it replaces expect error messages with the expect error message msg This is normally used at the end of set alternatives where we want to return an error message in terms of higher level construct rather than returning all possible characters For example if the expr parser from the try example would fail the error message is expecting expression Without the combinator the message would be like expecting let or letter which is less friendly",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "ParsecT a b c d-\u003eString-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eString-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:Consumed",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Consumed a",
        "fct-source": "src/Text-Parsec-Prim.html#Consumed",
        "fct-type": "function",
        "title": "Consumed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Consumed",
        "normalized": "",
        "package": "parsec3",
        "partial": "Consumed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:Empty",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Empty !a",
        "fct-source": "src/Text-Parsec-Prim.html#Consumed",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Empty",
        "normalized": "",
        "package": "parsec3",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:Error",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Error ParseError",
        "fct-source": "src/Text-Parsec-Prim.html#Reply",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Error",
        "normalized": "",
        "package": "parsec3",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:Ok",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Ok a !(State s u) ParseError",
        "fct-source": "src/Text-Parsec-Prim.html#Reply",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "Ok",
        "normalized": "",
        "package": "parsec3",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:State",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "State",
        "fct-source": "src/Text-Parsec-Prim.html#State",
        "fct-type": "function",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "State",
        "normalized": "",
        "package": "parsec3",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:getInput",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current input \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m s",
        "fct-source": "src/Text-Parsec-Prim.html#getInput",
        "fct-type": "function",
        "title": "getInput"
      },
      "index": {
        "description": "Returns the current input",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "getInput",
        "normalized": "",
        "package": "parsec3",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:getParserState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the full parser state as a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m (State s u)",
        "fct-source": "src/Text-Parsec-Prim.html#getParserState",
        "fct-type": "function",
        "title": "getParserState"
      },
      "index": {
        "description": "Returns the full parser state as State record",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "getParserState",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:getPosition",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current source position. See also \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m SourcePos",
        "fct-source": "src/Text-Parsec-Prim.html#getPosition",
        "fct-type": "function",
        "title": "getPosition"
      },
      "index": {
        "description": "Returns the current source position See also SourcePos",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "getPosition",
        "normalized": "",
        "package": "parsec3",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:getState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current user state. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m u",
        "fct-source": "src/Text-Parsec-Prim.html#getState",
        "fct-type": "function",
        "title": "getState"
      },
      "index": {
        "description": "Returns the current user state",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "getState",
        "normalized": "",
        "package": "parsec3",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:label",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e String -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "label",
        "normalized": "ParsecT a b c d-\u003eString-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eString-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:labels",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e [String] -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#labels",
        "fct-type": "function",
        "title": "labels"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "labels",
        "normalized": "ParsecT a b c d-\u003e[String]-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003e[String]-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e fails and consumes some input, so does \u003ccode\u003elookAhead\u003c/code\u003e. Combine with \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n if this is undesirable.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "lookAhead parses without consuming any input If fails and consumes some input so does lookAhead Combine with try if this is undesirable",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "lookAhead",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "Ahead",
        "signature": "ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:many",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times. Returns a\n    list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  identifier  = do{ c  \u003c- letter\n                  ; cs \u003c- many (alphaNum \u003c|\u003e char '_')\n                  ; return (c:cs)\n                  }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Prim.html#many",
        "fct-type": "function",
        "title": "many"
      },
      "index": {
        "description": "many applies the parser zero or more times Returns list of the returned values of identifier do letter cs many alphaNum char return cs",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "many",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c[d]",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:manyAccum",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(a -\u003e [a] -\u003e [a]) -\u003e ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Prim.html#manyAccum",
        "fct-type": "function",
        "title": "manyAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "manyAccum",
        "normalized": "(a-\u003e[a]-\u003e[a])-\u003eParsecT b c d a-\u003eParsecT b c d[a]",
        "package": "parsec3",
        "partial": "Accum",
        "signature": "(a-\u003e[a]-\u003e[a])-\u003eParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:mergeErrorReply",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e Reply s u a -\u003e Reply s u a",
        "fct-source": "src/Text-Parsec-Prim.html#mergeErrorReply",
        "fct-type": "function",
        "title": "mergeErrorReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "mergeErrorReply",
        "normalized": "ParseError-\u003eReply a b c-\u003eReply a b c",
        "package": "parsec3",
        "partial": "Error Reply",
        "signature": "ParseError-\u003eReply s u a-\u003eReply s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:mkPT",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level creation of the ParsecT type. You really shouldn't have to do this.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(State s u -\u003e m (Consumed (m (Reply s u a)))) -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#mkPT",
        "fct-type": "function",
        "title": "mkPT"
      },
      "index": {
        "description": "Low-level creation of the ParsecT type You really shouldn have to do this",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "mkPT",
        "normalized": "(State a b-\u003ec(Consumed(c(Reply a b d))))-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "PT",
        "signature": "(State s u-\u003em(Consumed(m(Reply s u a))))-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:modifyState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eupdateState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the user state. Suppose\n that we want to count identifiers in a source, we could use the user\n state as:\n\u003c/p\u003e\u003cpre\u003e  expr  = do{ x \u003c- identifier\n            ; updateState (+1)\n            ; return (Id x)\n            }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(u -\u003e u) -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#modifyState",
        "fct-type": "function",
        "title": "modifyState"
      },
      "index": {
        "description": "updateState applies function to the user state Suppose that we want to count identifiers in source we could use the user state as expr do identifier updateState return Id",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "modifyState",
        "normalized": "(a-\u003ea)-\u003eParsecT b a c()",
        "package": "parsec3",
        "partial": "State",
        "signature": "(u-\u003eu)-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparse p filePath input\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e over Identity without user\n state. The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the\n empty string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e)\n or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = case (parse numbers \"\" \"11, 2, 43\") of\n             Left err  -\u003e print err\n             Right xs  -\u003e print (sum xs)\n\n  numbers = commaSep integer\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Parsec s () a -\u003e SourceName -\u003e s -\u003e Either ParseError a",
        "fct-source": "src/Text-Parsec-Prim.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "parse filePath input runs parser over Identity without user state The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right main case parse numbers of Left err print err Right xs print sum xs numbers commaSep integer",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parse",
        "normalized": "Parsec a()b-\u003eSourceName-\u003ea-\u003eEither ParseError b",
        "package": "parsec3",
        "partial": "",
        "signature": "Parsec s()a-\u003eSourceName-\u003es-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parseTest",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eparseTest p input\u003c/code\u003e applies a parser \u003ccode\u003ep\u003c/code\u003e against\n input \u003ccode\u003einput\u003c/code\u003e and prints the result to stdout. Used for testing\n parsers.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Parsec s () a -\u003e s -\u003e IO ()",
        "fct-source": "src/Text-Parsec-Prim.html#parseTest",
        "fct-type": "function",
        "title": "parseTest"
      },
      "index": {
        "description": "The expression parseTest input applies parser against input input and prints the result to stdout Used for testing parsers",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parseTest",
        "normalized": "Parsec a()b-\u003ea-\u003eIO()",
        "package": "parsec3",
        "partial": "Test",
        "signature": "Parsec s()a-\u003es-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parsecMap",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(a -\u003e b) -\u003e ParsecT s u m a -\u003e ParsecT s u m b",
        "fct-source": "src/Text-Parsec-Prim.html#parsecMap",
        "fct-type": "function",
        "title": "parsecMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parsecMap",
        "normalized": "(a-\u003eb)-\u003eParsecT c d e a-\u003eParsecT c d e b",
        "package": "parsec3",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eParsecT s u m a-\u003eParsecT s u m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parserBind",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e (a -\u003e ParsecT s u m b) -\u003e ParsecT s u m b",
        "fct-source": "src/Text-Parsec-Prim.html#parserBind",
        "fct-type": "function",
        "title": "parserBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parserBind",
        "normalized": "ParsecT a b c d-\u003e(d-\u003eParsecT a b c e)-\u003eParsecT a b c e",
        "package": "parsec3",
        "partial": "Bind",
        "signature": "ParsecT s u m a-\u003e(a-\u003eParsecT s u m b)-\u003eParsecT s u m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parserFail",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#parserFail",
        "fct-type": "function",
        "title": "parserFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parserFail",
        "normalized": "String-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "Fail",
        "signature": "String-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parserPlus",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#parserPlus",
        "fct-type": "function",
        "title": "parserPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parserPlus",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "Plus",
        "signature": "ParsecT s u m a-\u003eParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parserReturn",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#parserReturn",
        "fct-type": "function",
        "title": "parserReturn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parserReturn",
        "normalized": "a-\u003eParsecT b c d a",
        "package": "parsec3",
        "partial": "Return",
        "signature": "a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:parserZero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparserZero\u003c/code\u003e always fails without consuming any input. \u003ccode\u003eparserZero\u003c/code\u003e is defined\n equal to the \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e class and to the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e member \n of the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#parserZero",
        "fct-type": "function",
        "title": "parserZero"
      },
      "index": {
        "description": "parserZero always fails without consuming any input parserZero is defined equal to the mzero member of the MonadPlus class and to the empty member of the Applicative class",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "parserZero",
        "normalized": "",
        "package": "parsec3",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:putState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eputState st\u003c/code\u003e set the user state to \u003ccode\u003est\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "u -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#putState",
        "fct-type": "function",
        "title": "putState"
      },
      "index": {
        "description": "putState st set the user state to st",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "putState",
        "normalized": "a-\u003eParsecT b a c()",
        "package": "parsec3",
        "partial": "State",
        "signature": "u-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:runP",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Parsec s u a -\u003e u -\u003e SourceName -\u003e s -\u003e Either ParseError a",
        "fct-source": "src/Text-Parsec-Prim.html#runP",
        "fct-type": "function",
        "title": "runP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "runP",
        "normalized": "Parsec a b c-\u003eb-\u003eSourceName-\u003ea-\u003eEither ParseError c",
        "package": "parsec3",
        "partial": "",
        "signature": "Parsec s u a-\u003eu-\u003eSourceName-\u003es-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:runPT",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e u -\u003e SourceName -\u003e s -\u003e m (Either ParseError a)",
        "fct-source": "src/Text-Parsec-Prim.html#runPT",
        "fct-type": "function",
        "title": "runPT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "runPT",
        "normalized": "ParsecT a b c d-\u003eb-\u003eSourceName-\u003ea-\u003ec(Either ParseError d)",
        "package": "parsec3",
        "partial": "PT",
        "signature": "ParsecT s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:runParsecT",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level unpacking of the ParsecT type. To run your parser, please look to\n runPT, runP, runParserT, runParser and other such functions.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e State s u -\u003e m (Consumed (m (Reply s u a)))",
        "fct-source": "src/Text-Parsec-Prim.html#runParsecT",
        "fct-type": "function",
        "title": "runParsecT"
      },
      "index": {
        "description": "Low-level unpacking of the ParsecT type To run your parser please look to runPT runP runParserT runParser and other such functions",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "runParsecT",
        "normalized": "ParsecT a b c d-\u003eState a b-\u003ec(Consumed(c(Reply a b d)))",
        "package": "parsec3",
        "partial": "Parsec",
        "signature": "ParsecT s u m a-\u003eState s u-\u003em(Consumed(m(Reply s u a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:runParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general way to run a parser over the Identity monad. \u003ccode\u003erunParser p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  parseFromFile p fname\n    = do{ input \u003c- readFile fname\n        ; return (runParser p () fname input)\n        }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "Parsec s u a -\u003e u -\u003e SourceName -\u003e s -\u003e Either ParseError a",
        "fct-source": "src/Text-Parsec-Prim.html#runParser",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "The most general way to run parser over the Identity monad runParser state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right parseFromFile fname do input readFile fname return runParser fname input",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "runParser",
        "normalized": "Parsec a b c-\u003eb-\u003eSourceName-\u003ea-\u003eEither ParseError c",
        "package": "parsec3",
        "partial": "Parser",
        "signature": "Parsec s u a-\u003eu-\u003eSourceName-\u003es-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:runParserT",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general way to run a parser. \u003ccode\u003erunParserT p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns a computation in the underlying monad \u003ccode\u003em\u003c/code\u003e that return either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e u -\u003e SourceName -\u003e s -\u003e m (Either ParseError a)",
        "fct-source": "src/Text-Parsec-Prim.html#runParserT",
        "fct-type": "function",
        "title": "runParserT"
      },
      "index": {
        "description": "The most general way to run parser runParserT state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns computation in the underlying monad that return either ParseError Left or value of type Right",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "runParserT",
        "normalized": "ParsecT a b c d-\u003eb-\u003eSourceName-\u003ea-\u003ec(Either ParseError d)",
        "package": "parsec3",
        "partial": "Parser",
        "signature": "ParsecT s u m a-\u003eu-\u003eSourceName-\u003es-\u003em(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:setInput",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetInput input\u003c/code\u003e continues parsing with \u003ccode\u003einput\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003esetInput\u003c/code\u003e functions can for example be used to deal with #include\n files. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "s -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#setInput",
        "fct-type": "function",
        "title": "setInput"
      },
      "index": {
        "description": "setInput input continues parsing with input The getInput and setInput functions can for example be used to deal with include files",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "setInput",
        "normalized": "a-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Input",
        "signature": "s-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:setParserState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetParserState st\u003c/code\u003e set the full parser state to \u003ccode\u003est\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "State s u -\u003e ParsecT s u m (State s u)",
        "fct-source": "src/Text-Parsec-Prim.html#setParserState",
        "fct-type": "function",
        "title": "setParserState"
      },
      "index": {
        "description": "setParserState st set the full parser state to st",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "setParserState",
        "normalized": "State a b-\u003eParsecT a b c(State a b)",
        "package": "parsec3",
        "partial": "Parser State",
        "signature": "State s u-\u003eParsecT s u m(State s u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:setPosition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetPosition pos\u003c/code\u003e sets the current source position to \u003ccode\u003epos\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#setPosition",
        "fct-type": "function",
        "title": "setPosition"
      },
      "index": {
        "description": "setPosition pos sets the current source position to pos",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "setPosition",
        "normalized": "SourcePos-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Position",
        "signature": "SourcePos-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:setState",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for putState for backwards compatibility.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "u -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "An alias for putState for backwards compatibility",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "setState",
        "normalized": "a-\u003eParsecT b a c()",
        "package": "parsec3",
        "partial": "State",
        "signature": "u-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:skipMany",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eskipMany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e\u003cpre\u003e  spaces  = skipMany space\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#skipMany",
        "fct-type": "function",
        "title": "skipMany"
      },
      "index": {
        "description": "skipMany applies the parser zero or more times skipping its result spaces skipMany space",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "skipMany",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Many",
        "signature": "ParsecT s u m a-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:stateInput",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "s",
        "fct-source": "src/Text-Parsec-Prim.html#State",
        "fct-type": "function",
        "title": "stateInput"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "stateInput",
        "normalized": "",
        "package": "parsec3",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:statePos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "!SourcePos",
        "fct-source": "src/Text-Parsec-Prim.html#State",
        "fct-type": "function",
        "title": "statePos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "statePos",
        "normalized": "",
        "package": "parsec3",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:stateUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "!u",
        "fct-source": "src/Text-Parsec-Prim.html#State",
        "fct-type": "function",
        "title": "stateUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "stateUser",
        "normalized": "",
        "package": "parsec3",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:sysUnExpectError",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e SourcePos -\u003e Reply s u a",
        "fct-source": "src/Text-Parsec-Prim.html#sysUnExpectError",
        "fct-type": "function",
        "title": "sysUnExpectError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "sysUnExpectError",
        "normalized": "String-\u003eSourcePos-\u003eReply a b c",
        "package": "parsec3",
        "partial": "Un Expect Error",
        "signature": "String-\u003eSourcePos-\u003eReply s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:token",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok posFromTok testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n source position of the \u003ccode\u003et\u003c/code\u003e should be returned by \u003ccode\u003eposFromTok t\u003c/code\u003e and\n the token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis combinator is expressed in terms of \u003ccode\u003e\u003ca\u003etokenPrim\u003c/a\u003e\u003c/code\u003e.\n It is used to accept user defined token streams. For example,\n suppose that we have a stream of basic tokens tupled with source\n positions. We can than define a parser that accepts single tokens as:\n\u003c/p\u003e\u003cpre\u003e  mytoken x\n    = token showTok posFromTok testTok\n    where\n      showTok (pos,t)     = show t\n      posFromTok (pos,t)  = pos\n      testTok (pos,t)     = if x == t then Just t else Nothing\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(t -\u003e String)-\u003e (t -\u003e SourcePos)-\u003e (t -\u003e Maybe a)-\u003e Parsec s u a",
        "fct-type": "function",
        "title": "token"
      },
      "index": {
        "description": "The parser token showTok posFromTok testTok accepts token with result when the function testTok returns Just The source position of the should be returned by posFromTok and the token can be shown using showTok This combinator is expressed in terms of tokenPrim It is used to accept user defined token streams For example suppose that we have stream of basic tokens tupled with source positions We can than define parser that accepts single tokens as mytoken token showTok posFromTok testTok where showTok pos show posFromTok pos pos testTok pos if then Just else Nothing",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "token",
        "normalized": "(a-\u003eString)-\u003e(a-\u003eSourcePos)-\u003e(a-\u003eMaybe b)-\u003eParsec c d b",
        "package": "parsec3",
        "partial": "",
        "signature": "(t-\u003eString)-\u003e(t-\u003eSourcePos)-\u003e(t-\u003eMaybe a)-\u003eParsec s u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:tokenPrim",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003etokenPrim showTok nextPos testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e. The position of the \u003cem\u003enext\u003c/em\u003e\n token should be returned when \u003ccode\u003enextPos\u003c/code\u003e is called with the current\n source position \u003ccode\u003epos\u003c/code\u003e, the current token \u003ccode\u003et\u003c/code\u003e and the rest of the\n tokens \u003ccode\u003etoks\u003c/code\u003e, \u003ccode\u003enextPos pos t toks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the most primitive combinator for accepting tokens. For\n example, the \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e parser could be implemented as:\n\u003c/p\u003e\u003cpre\u003e  char c\n    = tokenPrim showChar nextPos testChar\n    where\n      showChar x        = \"'\" ++ x ++ \"'\"\n      testChar x        = if x == c then Just x else Nothing\n      nextPos pos x xs  = updatePosChar pos x\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(t -\u003e String)-\u003e (SourcePos -\u003e t -\u003e s -\u003e SourcePos)-\u003e (t -\u003e Maybe a)-\u003e ParsecT s u m a",
        "fct-type": "function",
        "title": "tokenPrim"
      },
      "index": {
        "description": "The parser tokenPrim showTok nextPos testTok accepts token with result when the function testTok returns Just The token can be shown using showTok The position of the next token should be returned when nextPos is called with the current source position pos the current token and the rest of the tokens toks nextPos pos toks This is the most primitive combinator for accepting tokens For example the char parser could be implemented as char tokenPrim showChar nextPos testChar where showChar testChar if then Just else Nothing nextPos pos xs updatePosChar pos",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "tokenPrim",
        "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003eb-\u003eSourcePos)-\u003e(a-\u003eMaybe c)-\u003eParsecT b d e c",
        "package": "parsec3",
        "partial": "Prim",
        "signature": "(t-\u003eString)-\u003e(SourcePos-\u003et-\u003es-\u003eSourcePos)-\u003e(t-\u003eMaybe a)-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:tokenPrimEx",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(t -\u003e String) -\u003e (SourcePos -\u003e t -\u003e s -\u003e SourcePos) -\u003e Maybe (SourcePos -\u003e t -\u003e s -\u003e u -\u003e u) -\u003e (t -\u003e Maybe a) -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#tokenPrimEx",
        "fct-type": "function",
        "title": "tokenPrimEx"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "tokenPrimEx",
        "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003eb-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003ea-\u003eb-\u003ec-\u003ec)-\u003e(a-\u003eMaybe d)-\u003eParsecT b c e d",
        "package": "parsec3",
        "partial": "Prim Ex",
        "signature": "(t-\u003eString)-\u003e(SourcePos-\u003et-\u003es-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003et-\u003es-\u003eu-\u003eu)-\u003e(t-\u003eMaybe a)-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:tokens",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "([t] -\u003e String) -\u003e (SourcePos -\u003e [t] -\u003e SourcePos) -\u003e [t] -\u003e ParsecT s u m [t]",
        "fct-source": "src/Text-Parsec-Prim.html#tokens",
        "fct-type": "function",
        "title": "tokens"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "tokens",
        "normalized": "([a]-\u003eString)-\u003e(SourcePos-\u003e[a]-\u003eSourcePos)-\u003e[a]-\u003eParsecT b c d[a]",
        "package": "parsec3",
        "partial": "",
        "signature": "([t]-\u003eString)-\u003e(SourcePos-\u003e[t]-\u003eSourcePos)-\u003e[t]-\u003eParsecT s u m[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003etry p\u003c/code\u003e behaves like parser \u003ccode\u003ep\u003c/code\u003e, except that it\n pretends that it hasn't consumed any input when an error occurs.\n\u003c/p\u003e\u003cp\u003eThis combinator is used whenever arbitrary look ahead is needed.\n Since it pretends that it hasn't consumed any input when \u003ccode\u003ep\u003c/code\u003e fails,\n the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator will try its second alternative even when the\n first parser failed while consuming input.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003etry\u003c/code\u003e combinator can for example be used to distinguish\n identifiers and reserved words. Both reserved words and identifiers\n are a sequence of letters. Whenever we expect a certain reserved\n word where we can also expect an identifier we have to use the \u003ccode\u003etry\u003c/code\u003e\n combinator. Suppose we write:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ string \"let\"; ... }\n  identifier  = many1 letter\n\u003c/pre\u003e\u003cp\u003eIf the user writes \"lexical\", the parser fails with: \u003ccode\u003eunexpected\n 'x', expecting 't' in \"let\"\u003c/code\u003e. Indeed, since the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator\n only tries alternatives when the first alternative hasn't consumed\n input, the \u003ccode\u003eidentifier\u003c/code\u003e parser is never tried (because the prefix\n \"le\" of the \u003ccode\u003estring \"let\"\u003c/code\u003e parser is already consumed). The\n right behaviour can be obtained by adding the \u003ccode\u003etry\u003c/code\u003e combinator:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ try (string \"let\"); ... }\n  identifier  = many1 letter\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "The parser try behaves like parser except that it pretends that it hasn consumed any input when an error occurs This combinator is used whenever arbitrary look ahead is needed Since it pretends that it hasn consumed any input when fails the combinator will try its second alternative even when the first parser failed while consuming input The try combinator can for example be used to distinguish identifiers and reserved words Both reserved words and identifiers are sequence of letters Whenever we expect certain reserved word where we can also expect an identifier we have to use the try combinator Suppose we write expr letExpr identifier expression letExpr do string let identifier many1 letter If the user writes lexical the parser fails with unexpected expecting in let Indeed since the combinator only tries alternatives when the first alternative hasn consumed input the identifier parser is never tried because the prefix le of the string let parser is already consumed The right behaviour can be obtained by adding the try combinator expr letExpr identifier expression letExpr do try string let identifier many1 letter",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "try",
        "normalized": "ParsecT a b c d-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:uncons",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "s -\u003e m (Maybe (t, s))",
        "fct-source": "src/Text-Parsec-Prim.html#uncons",
        "fct-type": "method",
        "title": "uncons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "uncons",
        "normalized": "a-\u003eb(Maybe(c,a))",
        "package": "parsec3",
        "partial": "",
        "signature": "s-\u003em(Maybe(t,s))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:unexpected",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003eunexpected msg\u003c/code\u003e always fails with an unexpected error\n message \u003ccode\u003emsg\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eThe parsers \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) and \u003ccode\u003eunexpected\u003c/code\u003e are the three parsers\n used to generate error messages. Of these, only (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) is commonly\n used. For an example of the use of \u003ccode\u003eunexpected\u003c/code\u003e, see the definition\n of \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Prim.html#unexpected",
        "fct-type": "function",
        "title": "unexpected"
      },
      "index": {
        "description": "The parser unexpected msg always fails with an unexpected error message msg without consuming any input The parsers fail and unexpected are the three parsers used to generate error messages Of these only is commonly used For an example of the use of unexpected see the definition of notFollowedBy",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "unexpected",
        "normalized": "String-\u003eParsecT a b c d",
        "package": "parsec3",
        "partial": "",
        "signature": "String-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:unknownError",
      "description": {
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "State s u -\u003e ParseError",
        "fct-source": "src/Text-Parsec-Prim.html#unknownError",
        "fct-type": "function",
        "title": "unknownError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "unknownError",
        "normalized": "State a b-\u003eParseError",
        "package": "parsec3",
        "partial": "Error",
        "signature": "State s u-\u003eParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:updateParserState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eupdateParserState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the parser state.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(State s u -\u003e State s u) -\u003e ParsecT s u m (State s u)",
        "fct-source": "src/Text-Parsec-Prim.html#updateParserState",
        "fct-type": "function",
        "title": "updateParserState"
      },
      "index": {
        "description": "updateParserState applies function to the parser state",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "updateParserState",
        "normalized": "(State a b-\u003eState a b)-\u003eParsecT a b c(State a b)",
        "package": "parsec3",
        "partial": "Parser State",
        "signature": "(State s u-\u003eState s u)-\u003eParsecT s u m(State s u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Prim.html#v:updateState",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for modifyState for backwards compatibility.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Prim",
        "fct-package": "parsec3",
        "fct-signature": "(u -\u003e u) -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Prim.html#updateState",
        "fct-type": "function",
        "title": "updateState"
      },
      "index": {
        "description": "An alias for modifyState for backwards compatibility",
        "hierarchy": "Text Parsec Prim",
        "module": "Text.Parsec.Prim",
        "name": "updateState",
        "normalized": "(a-\u003ea)-\u003eParsecT b a c()",
        "package": "parsec3",
        "partial": "State",
        "signature": "(u-\u003eu)-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Strings an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.String",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "Make Strings an instance of Stream with Char token type",
        "hierarchy": "Text Parsec String",
        "module": "Text.Parsec.String",
        "name": "String",
        "normalized": "",
        "package": "parsec3",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-String.html#t:GenParser",
      "description": {
        "fct-module": "Text.Parsec.String",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-String.html#GenParser",
        "fct-type": "type",
        "title": "GenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec String",
        "module": "Text.Parsec.String",
        "name": "GenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-String.html#t:Parser",
      "description": {
        "fct-module": "Text.Parsec.String",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-String.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec String",
        "module": "Text.Parsec.String",
        "name": "Parser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-String.html#v:parseFromFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a string parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = do{ result \u003c- parseFromFile numbers \"digits.txt\"\n              ; case result of\n                  Left err  -\u003e print err\n                  Right xs  -\u003e print (sum xs)\n              }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.String",
        "fct-package": "parsec3",
        "fct-signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
        "fct-source": "src/Text-Parsec-String.html#parseFromFile",
        "fct-type": "function",
        "title": "parseFromFile"
      },
      "index": {
        "description": "parseFromFile filePath runs string parser on the input read from filePath using readFile Returns either ParseError Left or value of type Right main do result parseFromFile numbers digits.txt case result of Left err print err Right xs print sum xs",
        "hierarchy": "Text Parsec String",
        "module": "Text.Parsec.String",
        "name": "parseFromFile",
        "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
        "package": "parsec3",
        "partial": "From File",
        "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Text an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Text.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Text-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Make Text an instance of Stream with Char token type",
        "hierarchy": "Text Parsec Text Lazy",
        "module": "Text.Parsec.Text.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "parsec3",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text-Lazy.html#t:GenParser",
      "description": {
        "fct-module": "Text.Parsec.Text.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Text-Lazy.html#GenParser",
        "fct-type": "type",
        "title": "GenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Text Lazy",
        "module": "Text.Parsec.Text.Lazy",
        "name": "GenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text-Lazy.html#t:Parser",
      "description": {
        "fct-module": "Text.Parsec.Text.Lazy",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Text-Lazy.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Text Lazy",
        "module": "Text.Parsec.Text.Lazy",
        "name": "Parser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake Text an instance of \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e token type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Text",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Make Text an instance of Stream with Char token type",
        "hierarchy": "Text Parsec Text",
        "module": "Text.Parsec.Text",
        "name": "Text",
        "normalized": "",
        "package": "parsec3",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text.html#t:GenParser",
      "description": {
        "fct-module": "Text.Parsec.Text",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Text.html#GenParser",
        "fct-type": "type",
        "title": "GenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Text",
        "module": "Text.Parsec.Text",
        "name": "GenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Text.html#t:Parser",
      "description": {
        "fct-module": "Text.Parsec.Text",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Text.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Text",
        "module": "Text.Parsec.Text",
        "name": "Parser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse lexical elements (tokens). See \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e\n for a description of how to use it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Token.html",
        "fct-type": "module",
        "title": "Token"
      },
      "index": {
        "description": "helper module to parse lexical elements tokens See makeTokenParser for description of how to use it",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "Token",
        "normalized": "",
        "package": "parsec3",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#t:GenLanguageDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eGenLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e module. The module \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e\n contains some default definitions.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "data",
        "title": "GenLanguageDef"
      },
      "index": {
        "description": "The GenLanguageDef type is record that contains all parameterizable features of the Token module The module Language contains some default definitions",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "GenLanguageDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Language Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#t:GenTokenParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the record that holds lexical parsers that work on\n \u003ccode\u003es\u003c/code\u003e streams with state \u003ccode\u003eu\u003c/code\u003e over a monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "data",
        "title": "GenTokenParser"
      },
      "index": {
        "description": "The type of the record that holds lexical parsers that work on streams with state over monad",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "GenTokenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Gen Token Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#t:LanguageDef",
      "description": {
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Token.html#LanguageDef",
        "fct-type": "type",
        "title": "LanguageDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "LanguageDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Language Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#t:TokenParser",
      "description": {
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Token.html#TokenParser",
        "fct-type": "type",
        "title": "TokenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "TokenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Token Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:LanguageDef",
      "description": {
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "LanguageDef",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "LanguageDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "LanguageDef",
        "normalized": "",
        "package": "parsec3",
        "partial": "Language Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:TokenParser",
      "description": {
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "TokenParser",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "TokenParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "TokenParser",
        "normalized": "",
        "package": "parsec3",
        "partial": "Token Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:angles",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003eangles p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in angle brackets ('\u003c'\n and '\u003e'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "angles"
      },
      "index": {
        "description": "Lexeme parser angles parses enclosed in angle brackets and returning the value of",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "angles",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ebraces p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in braces ('{' and\n '}'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Lexeme parser braces parses enclosed in braces and returning the value of",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "braces",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ebrackets p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in brackets ('['\n and ']'), returning the value of \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Lexeme parser brackets parses enclosed in brackets and returning the value of",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "brackets",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:caseSensitive",
      "description": {
        "fct-descr": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language is case sensitive. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "caseSensitive"
      },
      "index": {
        "description": "Set to True if the language is case sensitive",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "caseSensitive",
        "normalized": "",
        "package": "parsec3",
        "partial": "Sensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:charLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a single literal character. Returns the\n literal character value. This parsers deals correctly with escape\n sequences. The literal character is parsed according to the grammar\n rules defined in the Haskell report (which matches most programming\n languages quite closely). \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "charLiteral"
      },
      "index": {
        "description": "This lexeme parser parses single literal character Returns the literal character value This parsers deals correctly with escape sequences The literal character is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "charLiteral",
        "normalized": "",
        "package": "parsec3",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ecolon\u003c/code\u003e parses the character ':' and skips any\n trailing white space. Returns the string \":\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "Lexeme parser colon parses the character and skips any trailing white space Returns the string",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "colon",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ecomma\u003c/code\u003e parses the character ',' and skips any\n trailing white space. Returns the string \",\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "Lexeme parser comma parses the character and skips any trailing white space Returns the string",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "comma",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:commaSep",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "commaSep"
      },
      "index": {
        "description": "Lexeme parser commaSep parses zero or more occurrences of separated by comma Returns list of values returned by",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "commaSep",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
        "package": "parsec3",
        "partial": "Sep",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:commaSep1",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "commaSep1"
      },
      "index": {
        "description": "Lexeme parser commaSep1 parses one or more occurrences of separated by comma Returns list of values returned by",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "commaSep1",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
        "package": "parsec3",
        "partial": "Sep",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:commentEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes the end of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"*/\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "commentEnd"
      },
      "index": {
        "description": "Describes the end of block comment Use the empty string if the language doesn support block comments For example",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "commentEnd",
        "normalized": "",
        "package": "parsec3",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:commentLine",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes the start of a line comment. Use the empty string if the\n language doesn't support line comments. For example \"//\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "commentLine"
      },
      "index": {
        "description": "Describes the start of line comment Use the empty string if the language doesn support line comments For example",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "commentLine",
        "normalized": "",
        "package": "parsec3",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:commentStart",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes the start of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"/*\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "commentStart"
      },
      "index": {
        "description": "Describes the start of block comment Use the empty string if the language doesn support block comments For example",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "commentStart",
        "normalized": "",
        "package": "parsec3",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eParses a positive whole number in the decimal system. Returns the\n value of the number. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Integer",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "Parses positive whole number in the decimal system Returns the value of the number",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "decimal",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003edot\u003c/code\u003e parses the character '.' and skips any\n trailing white space. Returns the string \".\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "Lexeme parser dot parses the character and skips any trailing white space Returns the string",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "dot",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a floating point value. Returns the value\n of the number. The number is parsed according to the grammar rules\n defined in the Haskell report. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Double",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "This lexeme parser parses floating point value Returns the value of the number The number is parsed according to the grammar rules defined in the Haskell report",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "float",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:hexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eParses a positive whole number in the hexadecimal system. The number\n should be prefixed with \"0x\" or \"0X\". Returns the value of the\n number. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Integer",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "Parses positive whole number in the hexadecimal system The number should be prefixed with or Returns the value of the number",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "hexadecimal",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:identLetter",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser should accept any legal tail characters of identifiers.\n For example \u003ccode\u003ealphaNum \u003c|\u003e char \"_\"\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "identLetter"
      },
      "index": {
        "description": "This parser should accept any legal tail characters of identifiers For example alphaNum char",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "identLetter",
        "normalized": "",
        "package": "parsec3",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:identStart",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser should accept any start characters of identifiers. For\n example \u003ccode\u003eletter \u003c|\u003e char \"_\"\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "identStart"
      },
      "index": {
        "description": "This parser should accept any start characters of identifiers For example letter char",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "identStart",
        "normalized": "",
        "package": "parsec3",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:identifier",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a legal identifier. Returns the identifier\n string. This parser will fail on identifiers that are reserved\n words. Legal identifier (start) characters and reserved words are\n defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eidentifier\u003c/code\u003e is treated as\n a single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "This lexeme parser parses legal identifier Returns the identifier string This parser will fail on identifiers that are reserved words Legal identifier start characters and reserved words are defined in the LanguageDef that is passed to makeTokenParser An identifier is treated as single token using try",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "identifier",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses an integer (a whole number). This parser\n is like \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e except that it can be prefixed with\n sign (i.e. '-' or '+'). Returns the value of the number. The\n number can be specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according\n to the grammar rules in the Haskell report. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Integer",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "This lexeme parser parses an integer whole number This parser is like natural except that it can be prefixed with sign i.e or Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "integer",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:lexeme",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elexeme p\u003c/code\u003e first applies parser \u003ccode\u003ep\u003c/code\u003e and than the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e\n parser, returning the value of \u003ccode\u003ep\u003c/code\u003e. Every lexical\n token (lexeme) is defined using \u003ccode\u003elexeme\u003c/code\u003e, this way every parse\n starts at a point without white space. Parsers that use \u003ccode\u003elexeme\u003c/code\u003e are\n called \u003cem\u003elexeme\u003c/em\u003e parsers in this document.\n\u003c/p\u003e\u003cp\u003eThe only point where the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e parser should be\n called explicitly is the start of the main parser in order to skip\n any leading white space.\n\u003c/p\u003e\u003cpre\u003e    mainParser  = do{ whiteSpace\n                     ; ds \u003c- many (lexeme digit)\n                     ; eof\n                     ; return (sum ds)\n                     }\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "lexeme"
      },
      "index": {
        "description": "lexeme first applies parser and than the whiteSpace parser returning the value of Every lexical token lexeme is defined using lexeme this way every parse starts at point without white space Parsers that use lexeme are called lexeme parsers in this document The only point where the whiteSpace parser should be called explicitly is the start of the main parser in order to skip any leading white space mainParser do whiteSpace ds many lexeme digit eof return sum ds",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "lexeme",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:makeTokenParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003emakeTokenParser language\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eGenTokenParser\u003c/a\u003e\u003c/code\u003e\n record that contains lexical parsers that are\n defined using the definitions in the \u003ccode\u003elanguage\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eThe use of this function is quite stylized - one imports the\n appropiate language definition and selects the lexical parsers that\n are needed from the resulting \u003ccode\u003e\u003ca\u003eGenTokenParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  module Main where\n\n  import Text.Parsec\n  import qualified Text.Parsec.Token as P\n  import Text.Parsec.Language (haskellDef)\n\n  -- The parser\n  ...\n\n  expr  =   parens expr\n        \u003c|\u003e identifier\n        \u003c|\u003e ...\n       \n\n  -- The lexer\n  lexer       = P.makeTokenParser haskellDef    \n      \n  parens      = P.parens lexer\n  braces      = P.braces lexer\n  identifier  = P.identifier lexer\n  reserved    = P.reserved lexer\n  ...\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "GenLanguageDef s u m -\u003e GenTokenParser s u m",
        "fct-source": "src/Text-Parsec-Token.html#makeTokenParser",
        "fct-type": "function",
        "title": "makeTokenParser"
      },
      "index": {
        "description": "The expression makeTokenParser language creates GenTokenParser record that contains lexical parsers that are defined using the definitions in the language record The use of this function is quite stylized one imports the appropiate language definition and selects the lexical parsers that are needed from the resulting GenTokenParser module Main where import Text.Parsec import qualified Text.Parsec.Token as import Text.Parsec.Language haskellDef The parser expr parens expr identifier The lexer lexer P.makeTokenParser haskellDef parens P.parens lexer braces P.braces lexer identifier P.identifier lexer reserved P.reserved lexer",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "makeTokenParser",
        "normalized": "GenLanguageDef a b c-\u003eGenTokenParser a b c",
        "package": "parsec3",
        "partial": "Token Parser",
        "signature": "GenLanguageDef s u m-\u003eGenTokenParser s u m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:natural",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a natural number (a positive whole\n number). Returns the value of the number. The number can be\n specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according to the grammar\n rules in the Haskell report. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Integer",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "natural"
      },
      "index": {
        "description": "This lexeme parser parses natural number positive whole number Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "natural",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:naturalOrFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses either \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003efloat\u003c/a\u003e\u003c/code\u003e.\n Returns the value of the number. This parsers deals with\n any overlap in the grammar rules for naturals and floats. The number\n is parsed according to the grammar rules defined in the Haskell report. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m (Either Integer Double)",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "naturalOrFloat"
      },
      "index": {
        "description": "This lexeme parser parses either natural or float Returns the value of the number This parsers deals with any overlap in the grammar rules for naturals and floats The number is parsed according to the grammar rules defined in the Haskell report",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "naturalOrFloat",
        "normalized": "",
        "package": "parsec3",
        "partial": "Or Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:nestedComments",
      "description": {
        "fct-descr": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language supports nested block comments. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "nestedComments"
      },
      "index": {
        "description": "Set to True if the language supports nested block comments",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "nestedComments",
        "normalized": "",
        "package": "parsec3",
        "partial": "Comments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:octal",
      "description": {
        "fct-descr": "\u003cp\u003eParses a positive whole number in the octal system. The number\n should be prefixed with \"0o\" or \"0O\". Returns the value of the\n number. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Integer",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "octal"
      },
      "index": {
        "description": "Parses positive whole number in the octal system The number should be prefixed with or Returns the value of the number",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "octal",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:opLetter",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser should accept any legal tail characters of operators.\n Note that this parser should even be defined if the language doesn't\n support user-defined operators, or otherwise the \u003ccode\u003e\u003ca\u003ereservedOp\u003c/a\u003e\u003c/code\u003e\n parser won't work correctly. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "opLetter"
      },
      "index": {
        "description": "This parser should accept any legal tail characters of operators Note that this parser should even be defined if the language doesn support user-defined operators or otherwise the reservedOp parser won work correctly",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "opLetter",
        "normalized": "",
        "package": "parsec3",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:opStart",
      "description": {
        "fct-descr": "\u003cp\u003eThis parser should accept any start characters of operators. For\n example \u003ccode\u003eoneOf \":!#$%&*+./\u003c=\u003e?@\\\\^|-~\"\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m Char",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "opStart"
      },
      "index": {
        "description": "This parser should accept any start characters of operators For example oneOf",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "opStart",
        "normalized": "",
        "package": "parsec3",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:operator",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a legal operator. Returns the name of the\n operator. This parser will fail on any operators that are reserved\n operators. Legal operator (start) characters and reserved operators\n are defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eoperator\u003c/code\u003e is treated as a\n single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "operator"
      },
      "index": {
        "description": "This lexeme parser parses legal operator Returns the name of the operator This parser will fail on any operators that are reserved operators Legal operator start characters and reserved operators are defined in the LanguageDef that is passed to makeTokenParser An operator is treated as single token using try",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "operator",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003eparens p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in parenthesis,\n returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Lexeme parser parens parses enclosed in parenthesis returning the value of",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "parens",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:reserved",
      "description": {
        "fct-descr": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereserved name\u003c/code\u003e parses \u003ccode\u003esymbol \n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid identifier. A \u003ccode\u003ereserved\u003c/code\u003e word is treated as a single token\n using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "reserved"
      },
      "index": {
        "description": "The lexeme parser reserved name parses symbol name but it also checks that the name is not prefix of valid identifier reserved word is treated as single token using try",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "reserved",
        "normalized": "String-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "",
        "signature": "String-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:reservedNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of reserved identifiers. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "reservedNames"
      },
      "index": {
        "description": "The list of reserved identifiers",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "reservedNames",
        "normalized": "[String]",
        "package": "parsec3",
        "partial": "Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:reservedOp",
      "description": {
        "fct-descr": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereservedOp name\u003c/code\u003e parses \u003ccode\u003esymbol\n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid operator. A \u003ccode\u003ereservedOp\u003c/code\u003e is treated as a single token using\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "reservedOp"
      },
      "index": {
        "description": "The lexeme parser reservedOp name parses symbol name but it also checks that the name is not prefix of valid operator reservedOp is treated as single token using try",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "reservedOp",
        "normalized": "String-\u003eParsecT a b c()",
        "package": "parsec3",
        "partial": "Op",
        "signature": "String-\u003eParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:reservedOpNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of reserved operators. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Parsec-Token.html#GenLanguageDef",
        "fct-type": "function",
        "title": "reservedOpNames"
      },
      "index": {
        "description": "The list of reserved operators",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "reservedOpNames",
        "normalized": "[String]",
        "package": "parsec3",
        "partial": "Op Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser |semi| parses the character ';' and skips any\n trailing white space. Returns the string \";\". \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "Lexeme parser semi parses the character and skips any trailing white space Returns the string",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "semi",
        "normalized": "",
        "package": "parsec3",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:semiSep",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by\n \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "semiSep"
      },
      "index": {
        "description": "Lexeme parser semiSep parses zero or more occurrences of separated by semi Returns list of values returned by",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "semiSep",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
        "package": "parsec3",
        "partial": "Sep",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:semiSep1",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m [a]",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "semiSep1"
      },
      "index": {
        "description": "Lexeme parser semiSep1 parses one or more occurrences of separated by semi Returns list of values returned by",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "semiSep1",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e[f]",
        "package": "parsec3",
        "partial": "Sep",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:squares",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "forall a.  ParsecT s u m a -\u003e ParsecT s u m a",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "squares"
      },
      "index": {
        "description": "DEPRECATED Use brackets",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "squares",
        "normalized": "a b ParsecT c d e f-\u003eParsecT c d e f",
        "package": "parsec3",
        "partial": "",
        "signature": "forall a. ParsecT s u m a-\u003eParsecT s u m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:stringLiteral",
      "description": {
        "fct-descr": "\u003cp\u003eThis lexeme parser parses a literal string. Returns the literal\n string value. This parsers deals correctly with escape sequences and\n gaps. The literal string is parsed according to the grammar rules\n defined in the Haskell report (which matches most programming\n languages quite closely). \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "stringLiteral"
      },
      "index": {
        "description": "This lexeme parser parses literal string Returns the literal string value This parsers deals correctly with escape sequences and gaps The literal string is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "stringLiteral",
        "normalized": "",
        "package": "parsec3",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:symbol",
      "description": {
        "fct-descr": "\u003cp\u003eLexeme parser \u003ccode\u003esymbol s\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "String -\u003e ParsecT s u m String",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "Lexeme parser symbol parses string and skips trailing white space",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "symbol",
        "normalized": "String-\u003eParsecT a b c String",
        "package": "parsec3",
        "partial": "",
        "signature": "String-\u003eParsecT s u m String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec-Token.html#v:whiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003eParses any white space. White space consists of \u003cem\u003ezero\u003c/em\u003e or more\n occurrences of a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e, a line comment or a block (multi\n line) comment. Block comments may be nested. How comments are\n started and ended is defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e\n that is passed to \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Token",
        "fct-package": "parsec3",
        "fct-signature": "ParsecT s u m ()",
        "fct-source": "src/Text-Parsec-Token.html#GenTokenParser",
        "fct-type": "function",
        "title": "whiteSpace"
      },
      "index": {
        "description": "Parses any white space White space consists of zero or more occurrences of space line comment or block multi line comment Block comments may be nested How comments are started and ended is defined in the LanguageDef that is passed to makeTokenParser",
        "hierarchy": "Text Parsec Token",
        "module": "Text.Parsec.Token",
        "name": "whiteSpace",
        "normalized": "ParsecT a b c()",
        "package": "parsec3",
        "partial": "Space",
        "signature": "ParsecT s u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#",
      "description": {
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec.html",
        "fct-type": "module",
        "title": "Parsec"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "Parsec",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parsec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#t:Column",
      "description": {
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#Column",
        "fct-type": "type",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "Column",
        "normalized": "",
        "package": "parsec3",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#t:Line",
      "description": {
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#Line",
        "fct-type": "type",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "Line",
        "normalized": "",
        "package": "parsec3",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#t:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Error.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "ParseError",
        "normalized": "",
        "package": "parsec3",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#t:SourceName",
      "description": {
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "type",
        "fct-source": "src/Text-Parsec-Pos.html#SourceName",
        "fct-type": "type",
        "title": "SourceName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "SourceName",
        "normalized": "",
        "package": "parsec3",
        "partial": "Source Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#t:SourcePos",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Pos.html#SourcePos",
        "fct-type": "data",
        "title": "SourcePos"
      },
      "index": {
        "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "SourcePos",
        "normalized": "",
        "package": "parsec3",
        "partial": "Source Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:errorPos",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the source position from the parse error\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "ParseError -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Error.html#errorPos",
        "fct-type": "function",
        "title": "errorPos"
      },
      "index": {
        "description": "Extracts the source position from the parse error",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "errorPos",
        "normalized": "ParseError-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Pos",
        "signature": "ParseError-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:incSourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the column number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#incSourceColumn",
        "fct-type": "function",
        "title": "incSourceColumn"
      },
      "index": {
        "description": "Increments the column number of source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "incSourceColumn",
        "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Column",
        "signature": "SourcePos-\u003eColumn-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:incSourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements the line number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#incSourceLine",
        "fct-type": "function",
        "title": "incSourceLine"
      },
      "index": {
        "description": "Increments the line number of source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "incSourceLine",
        "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Line",
        "signature": "SourcePos-\u003eLine-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:setSourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eSet the column number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceColumn",
        "fct-type": "function",
        "title": "setSourceColumn"
      },
      "index": {
        "description": "Set the column number of source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "setSourceColumn",
        "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Column",
        "signature": "SourcePos-\u003eColumn-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:setSourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line number of a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceLine",
        "fct-type": "function",
        "title": "setSourceLine"
      },
      "index": {
        "description": "Set the line number of source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "setSourceLine",
        "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Line",
        "signature": "SourcePos-\u003eLine-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:setSourceName",
      "description": {
        "fct-descr": "\u003cp\u003eSet the name of the source.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e SourceName -\u003e SourcePos",
        "fct-source": "src/Text-Parsec-Pos.html#setSourceName",
        "fct-type": "function",
        "title": "setSourceName"
      },
      "index": {
        "description": "Set the name of the source",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "setSourceName",
        "normalized": "SourcePos-\u003eSourceName-\u003eSourcePos",
        "package": "parsec3",
        "partial": "Source Name",
        "signature": "SourcePos-\u003eSourceName-\u003eSourcePos"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:sourceColumn",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the column number from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Column",
        "fct-source": "src/Text-Parsec-Pos.html#sourceColumn",
        "fct-type": "function",
        "title": "sourceColumn"
      },
      "index": {
        "description": "Extracts the column number from source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "sourceColumn",
        "normalized": "SourcePos-\u003eColumn",
        "package": "parsec3",
        "partial": "Column",
        "signature": "SourcePos-\u003eColumn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:sourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the line number from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e Line",
        "fct-source": "src/Text-Parsec-Pos.html#sourceLine",
        "fct-type": "function",
        "title": "sourceLine"
      },
      "index": {
        "description": "Extracts the line number from source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "sourceLine",
        "normalized": "SourcePos-\u003eLine",
        "package": "parsec3",
        "partial": "Line",
        "signature": "SourcePos-\u003eLine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec3/docs/Text-Parsec.html#v:sourceName",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the name of the source from a source position.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec",
        "fct-package": "parsec3",
        "fct-signature": "SourcePos -\u003e SourceName",
        "fct-source": "src/Text-Parsec-Pos.html#sourceName",
        "fct-type": "function",
        "title": "sourceName"
      },
      "index": {
        "description": "Extracts the name of the source from source position",
        "hierarchy": "Text Parsec",
        "module": "Text.Parsec",
        "name": "sourceName",
        "normalized": "SourcePos-\u003eSourceName",
        "package": "parsec3",
        "partial": "Name",
        "signature": "SourcePos-\u003eSourceName"
      }
    }
  }
]