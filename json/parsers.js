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
        "word": "parsers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers for character streams\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Char",
          "name": "Char",
          "package": "parsers",
          "source": "src/Text-Parser-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers for character streams",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "Char",
          "package": "parsers",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional functionality needed to parse character streams.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "CharParsing",
          "package": "parsers",
          "source": "src/Text-Parser-Char.html#CharParsing",
          "type": "class"
        },
        "index": {
          "description": "Additional functionality needed to parse character streams",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "CharParsing",
          "package": "parsers",
          "partial": "Char Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#t:CharParsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter or digit. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "alphaNum",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#alphaNum",
          "type": "function"
        },
        "index": {
          "description": "Parses letter or digit Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "alphaNum",
          "package": "parsers",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:alphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "anyChar",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#anyChar",
          "type": "method"
        },
        "index": {
          "description": "This parser succeeds for any character Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "anyChar",
          "package": "parsers",
          "partial": "Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character (i.e. \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ee.g.\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003esemiColon = \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e ';'\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "char",
          "package": "parsers",
          "signature": "Char -\u003e m Char",
          "source": "src/Text-Parser-Char.html#char",
          "type": "method"
        },
        "index": {
          "description": "char parses single character Returns the parsed character i.e e.g semiColon char",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "char",
          "normalized": "Char-\u003ea Char",
          "package": "parsers",
          "signature": "Char-\u003em Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a digit. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "digit",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parses digit Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "digit",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n 'f' or 'A' and 'F'). Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "hexDigit",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#hexDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "hexDigit",
          "package": "parsers",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:hexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter (an upper case or lower case character). Returns the\n parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "letter",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parses letter an upper case or lower case character Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "letter",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a lower case character. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "lower",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Parses lower case character Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "lower",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a newline character ('\\n'). Returns a newline character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "newline",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Parses newline character Returns newline character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "newline",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "noneOf",
          "package": "parsers",
          "signature": "[Char] -\u003e m Char",
          "source": "src/Text-Parser-Char.html#noneOf",
          "type": "function"
        },
        "index": {
          "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character consonant noneOf aeiou",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "noneOf",
          "normalized": "[Char]-\u003ea Char",
          "package": "parsers",
          "partial": "Of",
          "signature": "[Char]-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "noneOfSet",
          "package": "parsers",
          "signature": "CharSet -\u003e m Char",
          "source": "src/Text-Parser-Char.html#noneOfSet",
          "type": "function"
        },
        "index": {
          "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character consonant noneOf aeiou",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "noneOfSet",
          "normalized": "CharSet-\u003ea Char",
          "package": "parsers",
          "partial": "Of Set",
          "signature": "CharSet-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:noneOfSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotChar c\u003c/code\u003e parses any single character other than \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "notChar",
          "package": "parsers",
          "signature": "Char -\u003e m Char",
          "source": "src/Text-Parser-Char.html#notChar",
          "type": "method"
        },
        "index": {
          "description": "notChar parses any single character other than Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "notChar",
          "normalized": "Char-\u003ea Char",
          "package": "parsers",
          "partial": "Char",
          "signature": "Char-\u003em Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:notChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an octal digit (a character between '0' and '7'). Returns\n the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "octDigit",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#octDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses an octal digit character between and Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "octDigit",
          "package": "parsers",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:octDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied\n list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "oneOf",
          "package": "parsers",
          "signature": "[Char] -\u003e m Char",
          "source": "src/Text-Parser-Char.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "oneOf cs succeeds if the current character is in the supplied list of characters cs Returns the parsed character See also satisfy vowel oneOf aeiou",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "oneOf",
          "normalized": "[Char]-\u003ea Char",
          "package": "parsers",
          "partial": "Of",
          "signature": "[Char]-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOfSet cs\u003c/code\u003e succeeds if the current character is in the supplied\n set of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "oneOfSet",
          "package": "parsers",
          "signature": "CharSet -\u003e m Char",
          "source": "src/Text-Parser-Char.html#oneOfSet",
          "type": "function"
        },
        "index": {
          "description": "oneOfSet cs succeeds if the current character is in the supplied set of characters cs Returns the parsed character See also satisfy vowel oneOf aeiou",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "oneOfSet",
          "normalized": "CharSet-\u003ea Char",
          "package": "parsers",
          "partial": "Of Set",
          "signature": "CharSet-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:oneOfSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single character of the input, with UTF-8 decoding\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "satisfy",
          "package": "parsers",
          "signature": "(Char -\u003e Bool) -\u003e m Char",
          "source": "src/Text-Parser-Char.html#satisfy",
          "type": "method"
        },
        "index": {
          "description": "Parse single character of the input with UTF-8 decoding",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003ea Char",
          "package": "parsers",
          "signature": "(Char-\u003eBool)-\u003em Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Char",
          "name": "satisfyRange",
          "package": "parsers",
          "signature": "Char -\u003e Char -\u003e m Char",
          "source": "src/Text-Parser-Char.html#satisfyRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "satisfyRange",
          "normalized": "Char-\u003eChar-\u003ea Char",
          "package": "parsers",
          "partial": "Range",
          "signature": "Char-\u003eChar-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:satisfyRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "space",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "space",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips \u003cem\u003ezero\u003c/em\u003e or more white space characters. See also \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "spaces",
          "package": "parsers",
          "signature": "m ()",
          "source": "src/Text-Parser-Char.html#spaces",
          "type": "function"
        },
        "index": {
          "description": "Skips zero or more white space characters See also skipMany",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "spaces",
          "normalized": "a()",
          "package": "parsers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   string \"div\"\n              \u003c|\u003e string \"mod\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "string",
          "package": "parsers",
          "signature": "String -\u003e m String",
          "source": "src/Text-Parser-Char.html#string",
          "type": "method"
        },
        "index": {
          "description": "string parses sequence of characters given by Returns the parsed string i.e divOrMod string div string mod",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "string",
          "normalized": "String-\u003ea String",
          "package": "parsers",
          "signature": "String-\u003em String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a tab character ('\\t'). Returns a tab character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "tab",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#tab",
          "type": "function"
        },
        "index": {
          "description": "Parses tab character Returns tab character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "tab",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etext t\u003c/code\u003e parses a sequence of characters determined by the text \u003ccode\u003et\u003c/code\u003e Returns\n the parsed text fragment (i.e. \u003ccode\u003et\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eOverloadedStrings\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   text \"div\"\n              \u003c|\u003e text \"mod\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Char",
          "name": "text",
          "package": "parsers",
          "signature": "Text -\u003e m Text",
          "source": "src/Text-Parser-Char.html#text",
          "type": "method"
        },
        "index": {
          "description": "text parses sequence of characters determined by the text Returns the parsed text fragment i.e Using OverloadedStrings divOrMod text div text mod",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "text",
          "normalized": "Text-\u003ea Text",
          "package": "parsers",
          "signature": "Text-\u003em Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an upper case letter. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.Parser.Char",
          "name": "upper",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Char.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Parses an upper case letter Returns the parsed character",
          "hierarchy": "Text Parser Char",
          "module": "Text.Parser.Char",
          "name": "upper",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Char.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlternative parser combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Combinators",
          "name": "Combinators",
          "package": "parsers",
          "source": "src/Text-Parser-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Alternative parser combinators",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "Combinators",
          "package": "parsers",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional functionality needed to describe parsers independent of input type.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "Parsing",
          "package": "parsers",
          "source": "src/Text-Parser-Combinators.html#Parsing",
          "type": "class"
        },
        "index": {
          "description": "Additional functionality needed to describe parsers independent of input type",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "Parsing",
          "package": "parsers",
          "partial": "Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#t:Parsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a parser a name\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "(\u003c?\u003e)",
          "package": "parsers",
          "signature": "m a -\u003e String -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#%3C%3F%3E",
          "type": "method"
        },
        "index": {
          "description": "Give parser name",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "a b-\u003eString-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003eString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eclose\u003c/code\u003e.\n Returns the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  braces  = between (symbol \"{\") (symbol \"}\")\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "between",
          "package": "parsers",
          "signature": "m bra -\u003e m ket -\u003e m a -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#between",
          "type": "function"
        },
        "index": {
          "description": "between open close parses open followed by and close Returns the value returned by braces between symbol symbol",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "between",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "parsers",
          "signature": "m bra-\u003em ket-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e. Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are zero occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "chainl",
          "package": "parsers",
          "signature": "m a -\u003e m (a -\u003e a -\u003e a) -\u003e a -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "chainl op parser zero or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by If there are zero occurrences of the value is returned",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "chainl",
          "normalized": "a b-\u003ea(b-\u003eb-\u003eb)-\u003eb-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em(a-\u003ea-\u003ea)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. . This parser can for example be used to eliminate left\n recursion which typically occurs in expression grammars.\n\u003c/p\u003e\u003cpre\u003e  expr   = term   `chainl1` addop\n  term   = factor `chainl1` mulop\n  factor = parens expr \u003c|\u003e integer\n\n  mulop  = (*) \u003c$ symbol \"*\"\n       \u003c|\u003e div \u003c$ symbol \"/\"\n\n  addop  = (+) \u003c$ symbol \"+\"\n       \u003c|\u003e (-) \u003c$ symbol \"-\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "chainl1",
          "package": "parsers",
          "signature": "m a -\u003e m (a -\u003e a -\u003e a) -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#chainl1",
          "type": "function"
        },
        "index": {
          "description": "chainl1 op parser one or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by This parser can for example be used to eliminate left recursion which typically occurs in expression grammars expr term chainl1 addop term factor chainl1 mulop factor parens expr integer mulop symbol div symbol addop symbol symbol",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "chainl1",
          "normalized": "a b-\u003ea(b-\u003eb-\u003eb)-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em(a-\u003ea-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "chainr",
          "package": "parsers",
          "signature": "m a -\u003e m (a -\u003e a -\u003e a) -\u003e a -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "chainr op parser zero or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by If there are no occurrences of the value is returned",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "chainr",
          "normalized": "a b-\u003ea(b-\u003eb-\u003eb)-\u003eb-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em(a-\u003ea-\u003ea)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of |p|,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "chainr1",
          "package": "parsers",
          "signature": "m a -\u003e m (a -\u003e a -\u003e a) -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#chainr1",
          "type": "function"
        },
        "index": {
          "description": "chainr1 op parser one or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "chainr1",
          "normalized": "a b-\u003ea(b-\u003eb-\u003eb)-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em(a-\u003ea-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n parser.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "choice",
          "package": "parsers",
          "signature": "[m a] -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#choice",
          "type": "function"
        },
        "index": {
          "description": "choice ps tries to apply the parsers in the list ps in order until one of them succeeds Returns the value of the succeeding parser",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "choice",
          "normalized": "[a b]-\u003ea b",
          "package": "parsers",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003en\u003c/code\u003e is smaller or\n equal to zero, the parser equals to \u003ccode\u003ereturn []\u003c/code\u003e. Returns a list of\n \u003ccode\u003en\u003c/code\u003e values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "count",
          "package": "parsers",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#count",
          "type": "function"
        },
        "index": {
          "description": "count parses occurrences of If is smaller or equal to zero the parser equals to return Returns list of values returned by",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "count",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "parsers",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   cStatements  = cStatement `endBy` semi\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "endBy",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#endBy",
          "type": "function"
        },
        "index": {
          "description": "endBy sep parses zero or more occurrences of seperated and ended by sep Returns list of values returned by cStatements cStatement endBy semi",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "endBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "endBy1",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#endBy1",
          "type": "function"
        },
        "index": {
          "description": "endBy1 sep parses one or more occurrences of seperated and ended by sep Returns list of values returned by",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "endBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser only succeeds at the end of the input. This is not a\n primitive parser but it is defined using \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  eof  = notFollowedBy anyChar \u003c?\u003e \"end of input\"\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "eof",
          "package": "parsers",
          "signature": "m ()",
          "source": "src/Text-Parser-Combinators.html#eof",
          "type": "method"
        },
        "index": {
          "description": "This parser only succeeds at the end of the input This is not primitive parser but it is defined using notFollowedBy eof notFollowedBy anyChar end of input",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "eof",
          "normalized": "a()",
          "package": "parsers",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "many",
          "package": "parsers",
          "signature": "forall a.  f a -\u003e f [a]",
          "type": "function"
        },
        "index": {
          "description": "Zero or more",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "many",
          "normalized": "a b c d-\u003ec[d]",
          "package": "parsers",
          "signature": "forall a. f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n This parser can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = do{ string \"\u003c!--\"\n                      ; manyTill anyChar (try (string \"--\u003e\"))\n                      }\n\u003c/pre\u003e\u003cp\u003eNote the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"--\u003e\"\u003c/code\u003e, and\n    therefore the use of the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "manyTill",
          "package": "parsers",
          "signature": "m a -\u003e m end -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "manyTill end applies parser zero or more times until parser end succeeds Returns the list of values returned by This parser can be used to scan comments simpleComment do string manyTill anyChar try string Note the overlapping parsers anyChar and string and therefore the use of the try combinator",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "manyTill",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "Till",
          "signature": "m a-\u003em end-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e only succeeds when parser \u003ccode\u003ep\u003c/code\u003e fails. This parser\n does not consume any input. This parser can be used to implement the\n 'longest match' rule. For example, when recognizing keywords (for\n example \u003ccode\u003elet\u003c/code\u003e), we want to make sure that a keyword is not followed\n by a legal identifier character, in which case the keyword is\n actually an identifier (for example \u003ccode\u003elets\u003c/code\u003e). We can program this\n behaviour as follows:\n\u003c/p\u003e\u003cpre\u003e  keywordLet  = try $ string \"let\" \u003c* notFollowedBy alphaNum\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "notFollowedBy",
          "package": "parsers",
          "signature": "m a -\u003e m ()",
          "source": "src/Text-Parser-Combinators.html#notFollowedBy",
          "type": "method"
        },
        "index": {
          "description": "notFollowedBy only succeeds when parser fails This parser does not consume any input This parser can be used to implement the longest match rule For example when recognizing keywords for example let we want to make sure that keyword is not followed by legal identifier character in which case the keyword is actually an identifier for example lets We can program this behaviour as follows keywordLet try string let notFollowedBy alphaNum",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "notFollowedBy",
          "normalized": "a b-\u003ea()",
          "package": "parsers",
          "partial": "Followed By",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  priority = option 0 (digitToInt \u003c$\u003e digit)\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "option",
          "package": "parsers",
          "signature": "a -\u003e m a -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#option",
          "type": "function"
        },
        "index": {
          "description": "option tries to apply parser If fails without consuming input it returns the value otherwise the value returned by priority option digitToInt digit",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "option",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "parsers",
          "signature": "a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or none.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "optional",
          "package": "parsers",
          "signature": "f a -\u003e f (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "One or none",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "optional",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "parsers",
          "signature": "f a-\u003ef(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "sepBy",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep parses zero or more occurrences of separated by sep Returns list of values returned by commaSep sepBy symbol",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "sepBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "sepBy1",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "sepBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e, ie. haskell style\n statements. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  haskellStatements  = haskellStatement `sepEndBy` semi\n\u003c/pre\u003e",
          "module": "Text.Parser.Combinators",
          "name": "sepEndBy",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#sepEndBy",
          "type": "function"
        },
        "index": {
          "description": "sepEndBy sep parses zero or more occurrences of separated and optionally ended by sep ie haskell style statements Returns list of values returned by haskellStatements haskellStatement sepEndBy semi",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "sepEndBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "End By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "sepEndBy1",
          "package": "parsers",
          "signature": "m a -\u003e m sep -\u003e m [a]",
          "source": "src/Text-Parser-Combinators.html#sepEndBy1",
          "type": "function"
        },
        "index": {
          "description": "sepEndBy1 sep parses one or more occurrences of separated and optionally ended by sep Returns list of values returned by",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "sepEndBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "parsers",
          "partial": "End By",
          "signature": "m a-\u003em sep-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of many that discards its input. Specialized because it\n can often be implemented more cheaply.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "skipMany",
          "package": "parsers",
          "signature": "m a -\u003e m ()",
          "source": "src/Text-Parser-Combinators.html#skipMany",
          "type": "method"
        },
        "index": {
          "description": "version of many that discards its input Specialized because it can often be implemented more cheaply",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "skipMany",
          "normalized": "a b-\u003ea()",
          "package": "parsers",
          "partial": "Many",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipOptional p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  It will parse \u003ccode\u003ep\u003c/code\u003e or nothing.\n It only fails if \u003ccode\u003ep\u003c/code\u003e fails after consuming input. It discards the result\n of \u003ccode\u003ep\u003c/code\u003e. (Plays the role of parsec's optional, which conflicts with Applicative's optional)\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "skipOptional",
          "package": "parsers",
          "signature": "m a -\u003e m ()",
          "source": "src/Text-Parser-Combinators.html#skipOptional",
          "type": "function"
        },
        "index": {
          "description": "skipOptional tries to apply parser It will parse or nothing It only fails if fails after consuming input It discards the result of Plays the role of parsec optional which conflicts with Applicative optional",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "skipOptional",
          "normalized": "a b-\u003ea()",
          "package": "parsers",
          "partial": "Optional",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:skipOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipSome p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n its result. (aka skipMany1 in parsec)\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "skipSome",
          "package": "parsers",
          "signature": "m a -\u003e m ()",
          "source": "src/Text-Parser-Combinators.html#skipSome",
          "type": "method"
        },
        "index": {
          "description": "skipSome applies the parser one or more times skipping its result aka skipMany1 in parsec",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "skipSome",
          "normalized": "a b-\u003ea()",
          "package": "parsers",
          "partial": "Some",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:skipSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "some",
          "package": "parsers",
          "signature": "forall a.  f a -\u003e f [a]",
          "type": "function"
        },
        "index": {
          "description": "One or more",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "some",
          "normalized": "a b c d-\u003ec[d]",
          "package": "parsers",
          "signature": "forall a. f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a parser that may consume input, and on failure, go back to\n where we started and fail as if we didn't consume input.\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "try",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#try",
          "type": "method"
        },
        "index": {
          "description": "Take parser that may consume input and on failure go back to where we started and fail as if we didn consume input",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "try",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to emit an error on an unexpected token\n\u003c/p\u003e",
          "module": "Text.Parser.Combinators",
          "name": "unexpected",
          "package": "parsers",
          "signature": "String -\u003e m a",
          "source": "src/Text-Parser-Combinators.html#unexpected",
          "type": "method"
        },
        "index": {
          "description": "Used to emit an error on an unexpected token",
          "hierarchy": "Text Parser Combinators",
          "module": "Text.Parser.Combinators",
          "name": "unexpected",
          "normalized": "String-\u003ea b",
          "package": "parsers",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Combinators.html#v:unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse \"expressions\".\n Builds a parser given a table of operators and associativities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Expression",
          "name": "Expression",
          "package": "parsers",
          "source": "src/Text-Parser-Expression.html",
          "type": "module"
        },
        "index": {
          "description": "helper module to parse expressions Builds parser given table of operators and associativities",
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Expression",
          "package": "parsers",
          "partial": "Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
          "module": "Text.Parser.Expression",
          "name": "Assoc",
          "package": "parsers",
          "source": "src/Text-Parser-Expression.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Assoc",
          "package": "parsers",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies operators that work on values of type \u003ccode\u003ea\u003c/code\u003e.\n An operator is either binary infix or unary prefix or postfix. A\n binary operator has also an associated associativity.\n\u003c/p\u003e",
          "module": "Text.Parser.Expression",
          "name": "Operator",
          "package": "parsers",
          "source": "src/Text-Parser-Expression.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity",
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Operator",
          "package": "parsers",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eOperatorTable m a\u003c/code\u003e is a list of \u003ccode\u003eOperator m a\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
          "module": "Text.Parser.Expression",
          "name": "OperatorTable",
          "package": "parsers",
          "source": "src/Text-Parser-Expression.html#OperatorTable",
          "type": "type"
        },
        "index": {
          "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "OperatorTable",
          "package": "parsers",
          "partial": "Operator Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "AssocLeft",
          "package": "parsers",
          "signature": "AssocLeft",
          "source": "src/Text-Parser-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "AssocLeft",
          "package": "parsers",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "AssocNone",
          "package": "parsers",
          "signature": "AssocNone",
          "source": "src/Text-Parser-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "AssocNone",
          "package": "parsers",
          "partial": "Assoc None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:AssocNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "AssocRight",
          "package": "parsers",
          "signature": "AssocRight",
          "source": "src/Text-Parser-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "AssocRight",
          "package": "parsers",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "Infix",
          "package": "parsers",
          "signature": "Infix (m (a -\u003e a -\u003e a)) Assoc",
          "source": "src/Text-Parser-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Infix",
          "normalized": "Infix(a(b-\u003eb-\u003eb))Assoc",
          "package": "parsers",
          "partial": "Infix",
          "signature": "Infix(m(a-\u003ea-\u003ea))Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "Postfix",
          "package": "parsers",
          "signature": "Postfix (m (a -\u003e a))",
          "source": "src/Text-Parser-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Postfix",
          "normalized": "Postfix(a(b-\u003eb))",
          "package": "parsers",
          "partial": "Postfix",
          "signature": "Postfix(m(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:Postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Expression",
          "name": "Prefix",
          "package": "parsers",
          "signature": "Prefix (m (a -\u003e a))",
          "source": "src/Text-Parser-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "Prefix",
          "normalized": "Prefix(a(b-\u003eb))",
          "package": "parsers",
          "partial": "Prefix",
          "signature": "Prefix(m(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr\n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n\n  binary  name fun assoc = Infix (fun \u003c* reservedOp name) assoc\n  prefix  name fun       = Prefix (fun \u003c* reservedOp name)\n  postfix name fun       = Postfix (fun \u003c* reservedOp name)\n\u003c/pre\u003e",
          "module": "Text.Parser.Expression",
          "name": "buildExpressionParser",
          "package": "parsers",
          "signature": "OperatorTable m a -\u003e m a -\u003e m a",
          "source": "src/Text-Parser-Expression.html#buildExpressionParser",
          "type": "function"
        },
        "index": {
          "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix fun reservedOp name assoc prefix name fun Prefix fun reservedOp name postfix name fun Postfix fun reservedOp name",
          "hierarchy": "Text Parser Expression",
          "module": "Text.Parser.Expression",
          "name": "buildExpressionParser",
          "normalized": "OperatorTable a b-\u003ea b-\u003ea b",
          "package": "parsers",
          "partial": "Expression Parser",
          "signature": "OperatorTable m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Expression.html#v:buildExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers that can \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.LookAhead",
          "name": "LookAhead",
          "package": "parsers",
          "source": "src/Text-Parser-LookAhead.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers that can lookAhead",
          "hierarchy": "Text Parser LookAhead",
          "module": "Text.Parser.LookAhead",
          "name": "LookAhead",
          "package": "parsers",
          "partial": "Look Ahead",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-LookAhead.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional functionality needed to describe parsers independent of input type.\n\u003c/p\u003e",
          "module": "Text.Parser.LookAhead",
          "name": "LookAheadParsing",
          "package": "parsers",
          "source": "src/Text-Parser-LookAhead.html#LookAheadParsing",
          "type": "class"
        },
        "index": {
          "description": "Additional functionality needed to describe parsers independent of input type",
          "hierarchy": "Text Parser LookAhead",
          "module": "Text.Parser.LookAhead",
          "name": "LookAheadParsing",
          "package": "parsers",
          "partial": "Look Ahead Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-LookAhead.html#t:LookAheadParsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e",
          "module": "Text.Parser.LookAhead",
          "name": "lookAhead",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-LookAhead.html#lookAhead",
          "type": "method"
        },
        "index": {
          "description": "lookAhead parses without consuming any input",
          "hierarchy": "Text Parser LookAhead",
          "module": "Text.Parser.LookAhead",
          "name": "lookAhead",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "partial": "Ahead",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-LookAhead.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers. The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n Published as a functional pearl at the Haskell Workshop 2001.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Permutation",
          "name": "Permutation",
          "package": "parsers",
          "source": "src/Text-Parser-Permutation.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements permutation parsers The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra Published as functional pearl at the Haskell Workshop",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "Permutation",
          "package": "parsers",
          "partial": "Permutation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003ePermutation m a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses\n using the base parsing monad \u003ccode\u003em\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first build with special operators\n like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Permutation",
          "name": "Permutation",
          "package": "parsers",
          "source": "src/Text-Parser-Permutation.html#Permutation",
          "type": "data"
        },
        "index": {
          "description": "The type Permutation denotes permutation parser that when converted by the permute function parses using the base parsing monad and returns value of type on success Normally permutation parser is first build with special operators like and than transformed into normal parser using permute",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "Permutation",
          "package": "parsers",
          "partial": "Permutation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#t:Permutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c||\u003e)",
          "package": "parsers",
          "signature": "Permutation m (a -\u003e b) -\u003e m a -\u003e Permutation m b",
          "source": "src/Text-Parser-Permutation.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "Permutation a(b-\u003ec)-\u003ea b-\u003ePermutation a c",
          "package": "parsers",
          "signature": "Permutation m(a-\u003eb)-\u003em a-\u003ePermutation m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c|?\u003e)",
          "package": "parsers",
          "signature": "Permutation m (a -\u003e b) -\u003e (a, m a) -\u003e Permutation m b",
          "source": "src/Text-Parser-Permutation.html#%3C%7C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c|?\u003e) \u003c|?\u003e",
          "normalized": "Permutation a(b-\u003ec)-\u003e(b,a b)-\u003ePermutation a c",
          "package": "parsers",
          "signature": "Permutation m(a-\u003eb)-\u003e(a,m a)-\u003ePermutation m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#v:-60--124--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c$$\u003e)",
          "package": "parsers",
          "signature": "(a -\u003e b) -\u003e m a -\u003e Permutation m b",
          "source": "src/Text-Parser-Permutation.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ePermutation c b",
          "package": "parsers",
          "signature": "(a-\u003eb)-\u003em a-\u003ePermutation m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead.\n\u003c/p\u003e",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c$?\u003e)",
          "package": "parsers",
          "signature": "(a -\u003e b) -\u003e (a, m a) -\u003e Permutation m b",
          "source": "src/Text-Parser-Permutation.html#%3C%24%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "(\u003c$?\u003e) \u003c$?\u003e",
          "normalized": "(a-\u003eb)-\u003e(a,c a)-\u003ePermutation c b",
          "package": "parsers",
          "signature": "(a-\u003eb)-\u003e(a,m a)-\u003ePermutation m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#v:-60--36--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parser described\n by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a permutation of:\n an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and an optional \u003ccode\u003ec\u003c/code\u003e.\n This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",some (char 'a'))\n                         \u003c||\u003e char 'b'\n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
          "module": "Text.Parser.Permutation",
          "name": "permute",
          "package": "parsers",
          "signature": "Permutation m a -\u003e m a",
          "source": "src/Text-Parser-Permutation.html#permute",
          "type": "function"
        },
        "index": {
          "description": "The parser permute perm parses permutation of parser described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple some char char char where tuple",
          "hierarchy": "Text Parser Permutation",
          "module": "Text.Parser.Permutation",
          "name": "permute",
          "normalized": "Permutation a b-\u003ea b",
          "package": "parsers",
          "signature": "Permutation m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Permutation.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHighlighting isn't strictly a parsing concern, but it makes more sense\n to annotate a parser with highlighting information than to require\n someone to completely reimplement all of the combinators to add\n this functionality later when they need it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Token.Highlight",
          "name": "Highlight",
          "package": "parsers",
          "source": "src/Text-Parser-Token-Highlight.html",
          "type": "module"
        },
        "index": {
          "description": "Highlighting isn strictly parsing concern but it makes more sense to annotate parser with highlighting information than to require someone to completely reimplement all of the combinators to add this functionality later when they need it",
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Highlight",
          "package": "parsers",
          "partial": "Highlight",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags used by the \u003ccode\u003e\u003ca\u003eTokenParsing\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehighlight\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Highlight",
          "name": "Highlight",
          "package": "parsers",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "data"
        },
        "index": {
          "description": "Tags used by the TokenParsing highlight combinator",
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Highlight",
          "package": "parsers",
          "partial": "Highlight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#t:Highlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "BadInput",
          "package": "parsers",
          "signature": "BadInput",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "BadInput",
          "package": "parsers",
          "partial": "Bad Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:BadInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "CharLiteral",
          "package": "parsers",
          "signature": "CharLiteral",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "CharLiteral",
          "package": "parsers",
          "partial": "Char Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:CharLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Comment",
          "package": "parsers",
          "signature": "Comment",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Comment",
          "package": "parsers",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Constant",
          "package": "parsers",
          "signature": "Constant",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Constant",
          "package": "parsers",
          "partial": "Constant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Constructor",
          "package": "parsers",
          "signature": "Constructor",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Constructor",
          "package": "parsers",
          "partial": "Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "ConstructorOperator",
          "package": "parsers",
          "signature": "ConstructorOperator",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "ConstructorOperator",
          "package": "parsers",
          "partial": "Constructor Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:ConstructorOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "EscapeCode",
          "package": "parsers",
          "signature": "EscapeCode",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "EscapeCode",
          "package": "parsers",
          "partial": "Escape Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:EscapeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Identifier",
          "package": "parsers",
          "signature": "Identifier",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Identifier",
          "package": "parsers",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Layout",
          "package": "parsers",
          "signature": "Layout",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Layout",
          "package": "parsers",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "LiterateComment",
          "package": "parsers",
          "signature": "LiterateComment",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "LiterateComment",
          "package": "parsers",
          "partial": "Literate Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:LiterateComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "LiterateSyntax",
          "package": "parsers",
          "signature": "LiterateSyntax",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "LiterateSyntax",
          "package": "parsers",
          "partial": "Literate Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:LiterateSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "MatchedSymbols",
          "package": "parsers",
          "signature": "MatchedSymbols",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "MatchedSymbols",
          "package": "parsers",
          "partial": "Matched Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:MatchedSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Number",
          "package": "parsers",
          "signature": "Number",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Number",
          "package": "parsers",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Operator",
          "package": "parsers",
          "signature": "Operator",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Operator",
          "package": "parsers",
          "partial": "Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedConstructor",
          "package": "parsers",
          "signature": "ReservedConstructor",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedConstructor",
          "package": "parsers",
          "partial": "Reserved Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:ReservedConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedConstructorOperator",
          "package": "parsers",
          "signature": "ReservedConstructorOperator",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedConstructorOperator",
          "package": "parsers",
          "partial": "Reserved Constructor Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:ReservedConstructorOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedIdentifier",
          "package": "parsers",
          "signature": "ReservedIdentifier",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedIdentifier",
          "package": "parsers",
          "partial": "Reserved Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:ReservedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedOperator",
          "package": "parsers",
          "signature": "ReservedOperator",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "ReservedOperator",
          "package": "parsers",
          "partial": "Reserved Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:ReservedOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Special",
          "package": "parsers",
          "signature": "Special",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Special",
          "package": "parsers",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Statement",
          "package": "parsers",
          "signature": "Statement",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Statement",
          "package": "parsers",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "StringLiteral",
          "package": "parsers",
          "signature": "StringLiteral",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "StringLiteral",
          "package": "parsers",
          "partial": "String Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:StringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Symbol",
          "package": "parsers",
          "signature": "Symbol",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Symbol",
          "package": "parsers",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Highlight",
          "name": "Unbound",
          "package": "parsers",
          "signature": "Unbound",
          "source": "src/Text-Parser-Token-Highlight.html#Highlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Highlight",
          "module": "Text.Parser.Token.Highlight",
          "name": "Unbound",
          "package": "parsers",
          "partial": "Unbound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Highlight.html#v:Unbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA toolbox for specifying comment and identifier styles\n\u003c/p\u003e\u003cp\u003eThis must be imported directly as it is not re-exported elsewhere\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "Style",
          "package": "parsers",
          "source": "src/Text-Parser-Token-Style.html",
          "type": "module"
        },
        "index": {
          "description": "toolbox for specifying comment and identifier styles This must be imported directly as it is not re-exported elsewhere",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "Style",
          "package": "parsers",
          "partial": "Style",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to deal with comments.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "CommentStyle",
          "package": "parsers",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "data"
        },
        "index": {
          "description": "How to deal with comments",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "CommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#t:CommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token.Style",
          "name": "CommentStyle",
          "package": "parsers",
          "signature": "CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "CommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:CommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString that ends a multiline comment\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "_commentEnd",
          "package": "parsers",
          "signature": "String",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "function"
        },
        "index": {
          "description": "String that ends multiline comment",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "_commentEnd",
          "package": "parsers",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:_commentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString that starts a single line comment\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "_commentLine",
          "package": "parsers",
          "signature": "String",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "function"
        },
        "index": {
          "description": "String that starts single line comment",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "_commentLine",
          "package": "parsers",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:_commentLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan we nest multiline comments?\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "_commentNesting",
          "package": "parsers",
          "signature": "Bool",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "function"
        },
        "index": {
          "description": "Can we nest multiline comments",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "_commentNesting",
          "package": "parsers",
          "partial": "Nesting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:_commentNesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString that starts a multiline comment\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "_commentStart",
          "package": "parsers",
          "signature": "String",
          "source": "src/Text-Parser-Token-Style.html#CommentStyle",
          "type": "function"
        },
        "index": {
          "description": "String that starts multiline comment",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "_commentStart",
          "package": "parsers",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:_commentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to easily build the definition of whiteSpace for your MonadParser\n   given a comment style and an underlying someWhiteSpace parser\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "buildSomeSpaceParser",
          "package": "parsers",
          "signature": "m () -\u003e CommentStyle -\u003e m ()",
          "source": "src/Text-Parser-Token-Style.html#buildSomeSpaceParser",
          "type": "function"
        },
        "index": {
          "description": "Use this to easily build the definition of whiteSpace for your MonadParser given comment style and an underlying someWhiteSpace parser",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "buildSomeSpaceParser",
          "normalized": "a()-\u003eCommentStyle-\u003ea()",
          "package": "parsers",
          "partial": "Some Space Parser",
          "signature": "m()-\u003eCommentStyle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:buildSomeSpaceParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can edit the string that ends a multiline comment.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecommentEnd\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003e\u003ca\u003eCommentStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "commentEnd",
          "package": "parsers",
          "signature": "(String -\u003e f String) -\u003e CommentStyle -\u003e f CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#commentEnd",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can edit the string that ends multiline comment commentEnd Lens CommentStyle String",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "commentEnd",
          "normalized": "(String-\u003ea String)-\u003eCommentStyle-\u003ea CommentStyle",
          "package": "parsers",
          "partial": "End",
          "signature": "(String-\u003ef String)-\u003eCommentStyle-\u003ef CommentStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:commentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can edit the string that starts a single line comment.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecommentLine\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003e\u003ca\u003eCommentStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "commentLine",
          "package": "parsers",
          "signature": "(String -\u003e f String) -\u003e CommentStyle -\u003e f CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#commentLine",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can edit the string that starts single line comment commentLine Lens CommentStyle String",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "commentLine",
          "normalized": "(String-\u003ea String)-\u003eCommentStyle-\u003ea CommentStyle",
          "package": "parsers",
          "partial": "Line",
          "signature": "(String-\u003ef String)-\u003eCommentStyle-\u003ef CommentStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:commentLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can edit whether we can nest multiline comments.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecommentNesting\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003e\u003ca\u003eCommentStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "commentNesting",
          "package": "parsers",
          "signature": "(Bool -\u003e f Bool) -\u003e CommentStyle -\u003e f CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#commentNesting",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can edit whether we can nest multiline comments commentNesting Lens CommentStyle Bool",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "commentNesting",
          "normalized": "(Bool-\u003ea Bool)-\u003eCommentStyle-\u003ea CommentStyle",
          "package": "parsers",
          "partial": "Nesting",
          "signature": "(Bool-\u003ef Bool)-\u003eCommentStyle-\u003ef CommentStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:commentNesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can edit the string that starts a multiline comment.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecommentStart\u003c/a\u003e\u003c/code\u003e :: Lens' \u003ccode\u003e\u003ca\u003eCommentStyle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "commentStart",
          "package": "parsers",
          "signature": "(String -\u003e f String) -\u003e CommentStyle -\u003e f CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#commentStart",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can edit the string that starts multiline comment commentStart Lens CommentStyle String",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "commentStart",
          "normalized": "(String-\u003ea String)-\u003eCommentStyle-\u003ea CommentStyle",
          "package": "parsers",
          "partial": "Start",
          "signature": "(String-\u003ef String)-\u003eCommentStyle-\u003ef CommentStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:commentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo comments at all\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "emptyCommentStyle",
          "package": "parsers",
          "signature": "CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#emptyCommentStyle",
          "type": "function"
        },
        "index": {
          "description": "No comments at all",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "emptyCommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:emptyCommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple identifier style based on haskell with no reserve words\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "emptyIdents",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#emptyIdents",
          "type": "function"
        },
        "index": {
          "description": "simple identifier style based on haskell with no reserve words",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "emptyIdents",
          "package": "parsers",
          "partial": "Idents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:emptyIdents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple operator style based on haskell with no reserved operators\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "emptyOps",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#emptyOps",
          "type": "function"
        },
        "index": {
          "description": "simple operator style based on haskell with no reserved operators",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "emptyOps",
          "package": "parsers",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:emptyOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple identifier style based on haskell with only the reserved words from Haskell 98.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "haskell98Idents",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#haskell98Idents",
          "type": "function"
        },
        "index": {
          "description": "simple identifier style based on haskell with only the reserved words from Haskell",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "haskell98Idents",
          "package": "parsers",
          "partial": "Idents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:haskell98Idents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple operator style based on haskell with the operators from Haskell 98.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "haskell98Ops",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#haskell98Ops",
          "type": "function"
        },
        "index": {
          "description": "simple operator style based on haskell with the operators from Haskell",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "haskell98Ops",
          "package": "parsers",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:haskell98Ops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse haskell-style comments\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "haskellCommentStyle",
          "package": "parsers",
          "signature": "CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#haskellCommentStyle",
          "type": "function"
        },
        "index": {
          "description": "Use haskell-style comments",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "haskellCommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:haskellCommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple identifier style based on haskell with the reserved words from Haskell 98 and some common extensions.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "haskellIdents",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#haskellIdents",
          "type": "function"
        },
        "index": {
          "description": "simple identifier style based on haskell with the reserved words from Haskell and some common extensions",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "haskellIdents",
          "package": "parsers",
          "partial": "Idents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:haskellIdents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple operator style based on haskell with the operators from Haskell 98.\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "haskellOps",
          "package": "parsers",
          "signature": "IdentifierStyle m",
          "source": "src/Text-Parser-Token-Style.html#haskellOps",
          "type": "function"
        },
        "index": {
          "description": "simple operator style based on haskell with the operators from Haskell",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "haskellOps",
          "package": "parsers",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:haskellOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse java-style comments\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "javaCommentStyle",
          "package": "parsers",
          "signature": "CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#javaCommentStyle",
          "type": "function"
        },
        "index": {
          "description": "Use java-style comments",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "javaCommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:javaCommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse scala-style comments\n\u003c/p\u003e",
          "module": "Text.Parser.Token.Style",
          "name": "scalaCommentStyle",
          "package": "parsers",
          "signature": "CommentStyle",
          "source": "src/Text-Parser-Token-Style.html#scalaCommentStyle",
          "type": "function"
        },
        "index": {
          "description": "Use scala-style comments",
          "hierarchy": "Text Parser Token Style",
          "module": "Text.Parser.Token.Style",
          "name": "scalaCommentStyle",
          "package": "parsers",
          "partial": "Comment Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token-Style.html#v:scalaCommentStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers that comprehend whitespace and identifier styles\n\u003c/p\u003e\u003cpre\u003e idStyle    = haskellIdents { styleReserved = ... }\n identifier = ident idStyle\n reserved   = reserve idStyle\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Parser.Token",
          "name": "Token",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers that comprehend whitespace and identifier styles idStyle haskellIdents styleReserved identifier ident idStyle reserved reserve idStyle",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Token",
          "package": "parsers",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to describe an input style for constructors, values, operators, etc.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "IdentifierStyle",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "data"
        },
        "index": {
          "description": "Used to describe an input style for constructors values operators etc",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "IdentifierStyle",
          "package": "parsers",
          "partial": "Identifier Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#t:IdentifierStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional functionality that is needed to tokenize input while ignoring whitespace.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "TokenParsing",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html#TokenParsing",
          "type": "class"
        },
        "index": {
          "description": "Additional functionality that is needed to tokenize input while ignoring whitespace",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "TokenParsing",
          "package": "parsers",
          "partial": "Token Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#t:TokenParsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a parser transformer you can use to disable syntax highlighting\n over a range of text you are parsing.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "Unhighlighted",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html#Unhighlighted",
          "type": "newtype"
        },
        "index": {
          "description": "This is parser transformer you can use to disable syntax highlighting over range of text you are parsing",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unhighlighted",
          "package": "parsers",
          "partial": "Unhighlighted",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#t:Unhighlighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a parser transformer you can use to disable the automatic trailing\n newline (but not whitespace-in-general) consumption of a Token parser.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "Unlined",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html#Unlined",
          "type": "newtype"
        },
        "index": {
          "description": "This is parser transformer you can use to disable the automatic trailing newline but not whitespace-in-general consumption of Token parser",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unlined",
          "package": "parsers",
          "partial": "Unlined",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#t:Unlined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a parser transformer you can use to disable the automatic trailing\n space consumption of a Token parser.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "Unspaced",
          "package": "parsers",
          "source": "src/Text-Parser-Token.html#Unspaced",
          "type": "newtype"
        },
        "index": {
          "description": "This is parser transformer you can use to disable the automatic trailing space consumption of Token parser",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unspaced",
          "package": "parsers",
          "partial": "Unspaced",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#t:Unspaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "IdentifierStyle",
          "package": "parsers",
          "signature": "IdentifierStyle",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "IdentifierStyle",
          "package": "parsers",
          "partial": "Identifier Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:IdentifierStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "Unhighlighted",
          "package": "parsers",
          "signature": "Unhighlighted",
          "source": "src/Text-Parser-Token.html#Unhighlighted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unhighlighted",
          "package": "parsers",
          "partial": "Unhighlighted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:Unhighlighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "Unlined",
          "package": "parsers",
          "signature": "Unlined",
          "source": "src/Text-Parser-Token.html#Unlined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unlined",
          "package": "parsers",
          "partial": "Unlined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:Unlined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "Unspaced",
          "package": "parsers",
          "signature": "Unspaced",
          "source": "src/Text-Parser-Token.html#Unspaced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "Unspaced",
          "package": "parsers",
          "partial": "Unspaced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:Unspaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleHighlight",
          "package": "parsers",
          "signature": "Highlight",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleHighlight",
          "package": "parsers",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleLetter",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleLetter",
          "package": "parsers",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleName",
          "package": "parsers",
          "signature": "String",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleName",
          "package": "parsers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleReserved",
          "package": "parsers",
          "signature": "HashSet String",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleReserved",
          "package": "parsers",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleReserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleReservedHighlight",
          "package": "parsers",
          "signature": "Highlight",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleReservedHighlight",
          "package": "parsers",
          "partial": "Reserved Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleReservedHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "_styleStart",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#IdentifierStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "_styleStart",
          "package": "parsers",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:_styleStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003eangles p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in angle brackets ('\u003c'\n and '\u003e'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "angles",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#angles",
          "type": "function"
        },
        "index": {
          "description": "Token parser angles parses enclosed in angle brackets and returning the value of",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "angles",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ebraces p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in braces ('{' and\n '}'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "braces",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Token parser braces parses enclosed in braces and returning the value of",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "braces",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ebrackets p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in brackets ('['\n and ']'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "brackets",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Token parser brackets parses enclosed in brackets and returning the value of",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "brackets",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses a single literal character. Returns the\n literal character value. This parsers deals correctly with escape\n sequences. The literal character is parsed according to the grammar\n rules defined in the Haskell report (which matches most programming\n languages quite closely).\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "charLiteral",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#charLiteral",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses single literal character Returns the literal character value This parsers deals correctly with escape sequences The literal character is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "charLiteral",
          "package": "parsers",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses a character literal without the surrounding quotation marks.\n\u003c/p\u003e\u003cp\u003eThis parser does NOT swallow trailing whitespace\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "characterChar",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#characterChar",
          "type": "function"
        },
        "index": {
          "description": "This parser parses character literal without the surrounding quotation marks This parser does NOT swallow trailing whitespace",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "characterChar",
          "package": "parsers",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:characterChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ecolon\u003c/code\u003e parses the character ':' and skips any\n trailing white space. Returns the string \":\".\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "colon",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#colon",
          "type": "function"
        },
        "index": {
          "description": "Token parser colon parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "colon",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ecomma\u003c/code\u003e parses the character ',' and skips any\n trailing white space. Returns the string \",\".\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "comma",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#comma",
          "type": "function"
        },
        "index": {
          "description": "Token parser comma parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "comma",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ecommaSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "commaSep",
          "package": "parsers",
          "signature": "m a -\u003e m [a]",
          "source": "src/Text-Parser-Token.html#commaSep",
          "type": "function"
        },
        "index": {
          "description": "Token parser commaSep parses zero or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "commaSep",
          "normalized": "a b-\u003ea[b]",
          "package": "parsers",
          "partial": "Sep",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003ecommaSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "commaSep1",
          "package": "parsers",
          "signature": "m a -\u003e m [a]",
          "source": "src/Text-Parser-Token.html#commaSep1",
          "type": "function"
        },
        "index": {
          "description": "Token parser commaSep1 parses one or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "commaSep1",
          "normalized": "a b-\u003ea[b]",
          "package": "parsers",
          "partial": "Sep",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:commaSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the decimal system. Returns the\n value of the number.\n\u003c/p\u003e\u003cp\u003eThis parser does NOT swallow trailing whitespace\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "decimal",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the decimal system Returns the value of the number This parser does NOT swallow trailing whitespace",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "decimal",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003edot\u003c/code\u003e parses the character '.' and skips any\n trailing white space. Returns the string \".\".\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "dot",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#dot",
          "type": "function"
        },
        "index": {
          "description": "Token parser dot parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "dot",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses a floating point value. Returns the value\n of the number. The number is parsed according to the grammar rules\n defined in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "double",
          "package": "parsers",
          "signature": "m Double",
          "source": "src/Text-Parser-Token.html#double",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses floating point value Returns the value of the number The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "double",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the hexadecimal system. The number\n should be prefixed with \"x\" or \"X\". Returns the value of the\n number.\n\u003c/p\u003e\u003cp\u003eThis parser does NOT swallow trailing whitespace\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "hexadecimal",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the hexadecimal system The number should be prefixed with or Returns the value of the number This parser does NOT swallow trailing whitespace",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "hexadecimal",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag a region of parsed text with a bit of semantic information.\n Most parsers won't use this, but it is indispensible for highlighters.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "highlight",
          "package": "parsers",
          "signature": "Highlight -\u003e m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#highlight",
          "type": "method"
        },
        "index": {
          "description": "Tag region of parsed text with bit of semantic information Most parsers won use this but it is indispensible for highlighters",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "highlight",
          "normalized": "Highlight-\u003ea b-\u003ea b",
          "package": "parsers",
          "signature": "Highlight-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:highlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a non-reserved identifier or symbol\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "ident",
          "package": "parsers",
          "signature": "IdentifierStyle m -\u003e m s",
          "source": "src/Text-Parser-Token.html#ident",
          "type": "function"
        },
        "index": {
          "description": "Parse non-reserved identifier or symbol",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "ident",
          "normalized": "IdentifierStyle a-\u003ea b",
          "package": "parsers",
          "signature": "IdentifierStyle m-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses an integer (a whole number). This parser\n is like \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e except that it can be prefixed with\n sign (i.e. '-' or '+'). Returns the value of the number. The\n number can be specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according\n to the grammar rules in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "integer",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#integer",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses an integer whole number This parser is like natural except that it can be prefixed with sign i.e or Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "integer",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses an integer (a whole number). This parser\n is like \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e except that it can be prefixed with\n sign (i.e. '-' or '+'). Returns the value of the number. The\n number can be specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according\n to the grammar rules in the Haskell report.\n\u003c/p\u003e\u003cp\u003eThis parser does NOT swallow trailing whitespace.\n\u003c/p\u003e\u003cp\u003eAlso, unlike the \u003ccode\u003e\u003ca\u003einteger\u003c/a\u003e\u003c/code\u003e parser, this parser does not admit spaces\n between the sign and the number.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "integer'",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#integer%27",
          "type": "function"
        },
        "index": {
          "description": "This parser parses an integer whole number This parser is like natural except that it can be prefixed with sign i.e or Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report This parser does NOT swallow trailing whitespace Also unlike the integer parser this parser does not admit spaces between the sign and the number",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "integer'",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:integer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser is like \u003ccode\u003e\u003ca\u003enaturalOrDouble\u003c/a\u003e\u003c/code\u003e, but handles\n leading \u003ccode\u003e-\u003c/code\u003e or \u003ccode\u003e+\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "integerOrDouble",
          "package": "parsers",
          "signature": "m (Either Integer Double)",
          "source": "src/Text-Parser-Token.html#integerOrDouble",
          "type": "function"
        },
        "index": {
          "description": "This token parser is like naturalOrDouble but handles leading or",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "integerOrDouble",
          "package": "parsers",
          "partial": "Or Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:integerOrDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an identifier style into a monad transformer\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003eover\u003c/code\u003e from the \u003ccode\u003elens\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIdentifierStyle\u003c/a\u003e\u003c/code\u003e = over \u003ccode\u003e\u003ca\u003estyleChars\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "liftIdentifierStyle",
          "package": "parsers",
          "signature": "IdentifierStyle m -\u003e IdentifierStyle (t m)",
          "source": "src/Text-Parser-Token.html#liftIdentifierStyle",
          "type": "function"
        },
        "index": {
          "description": "Lift an identifier style into monad transformer Using over from the lens package liftIdentifierStyle over styleChars lift",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "liftIdentifierStyle",
          "normalized": "IdentifierStyle a-\u003eIdentifierStyle(b a)",
          "package": "parsers",
          "partial": "Identifier Style",
          "signature": "IdentifierStyle m-\u003eIdentifierStyle(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:liftIdentifierStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses a natural number (a positive whole\n number). Returns the value of the number. The number can be\n specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according to the grammar\n rules in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "natural",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#natural",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses natural number positive whole number Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "natural",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses either \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003efloat\u003c/code\u003e.\n Returns the value of the number. This parsers deals with\n any overlap in the grammar rules for naturals and floats. The number\n is parsed according to the grammar rules defined in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "naturalOrDouble",
          "package": "parsers",
          "signature": "m (Either Integer Double)",
          "source": "src/Text-Parser-Token.html#naturalOrDouble",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses either natural or float Returns the value of the number This parsers deals with any overlap in the grammar rules for naturals and floats The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "naturalOrDouble",
          "package": "parsers",
          "partial": "Or Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:naturalOrDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled when we enter a nested pair of symbols.\n Overloadable to enable disabling layout\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "nesting",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#nesting",
          "type": "method"
        },
        "index": {
          "description": "Called when we enter nested pair of symbols Overloadable to enable disabling layout",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "nesting",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:nesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the octal system. The number\n should be prefixed with \"o\" or \"O\". Returns the value of the\n number.\n\u003c/p\u003e\u003cp\u003eThis parser does NOT swallow trailing whitespace\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "octal",
          "package": "parsers",
          "signature": "m Integer",
          "source": "src/Text-Parser-Token.html#octal",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the octal system The number should be prefixed with or Returns the value of the number This parser does NOT swallow trailing whitespace",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "octal",
          "package": "parsers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:octal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003eparens p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in parenthesis,\n returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "parens",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Token parser parens parses enclosed in parenthesis returning the value of",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "parens",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a reserved operator or identifier using a given style\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "reserve",
          "package": "parsers",
          "signature": "IdentifierStyle m -\u003e String -\u003e m ()",
          "source": "src/Text-Parser-Token.html#reserve",
          "type": "function"
        },
        "index": {
          "description": "parse reserved operator or identifier using given style",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "reserve",
          "normalized": "IdentifierStyle a-\u003eString-\u003ea()",
          "package": "parsers",
          "signature": "IdentifierStyle m-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:reserve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a reserved operator or identifier using a given style given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "reserveText",
          "package": "parsers",
          "signature": "IdentifierStyle m -\u003e Text -\u003e m ()",
          "source": "src/Text-Parser-Token.html#reserveText",
          "type": "function"
        },
        "index": {
          "description": "parse reserved operator or identifier using given style given Text",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "reserveText",
          "normalized": "IdentifierStyle a-\u003eText-\u003ea()",
          "package": "parsers",
          "partial": "Text",
          "signature": "IdentifierStyle m-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:reserveText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "runUnhighlighted",
          "package": "parsers",
          "signature": "m a",
          "source": "src/Text-Parser-Token.html#Unhighlighted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "runUnhighlighted",
          "package": "parsers",
          "partial": "Unhighlighted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:runUnhighlighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "runUnlined",
          "package": "parsers",
          "signature": "m a",
          "source": "src/Text-Parser-Token.html#Unlined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "runUnlined",
          "package": "parsers",
          "partial": "Unlined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:runUnlined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parser.Token",
          "name": "runUnspaced",
          "package": "parsers",
          "signature": "m a",
          "source": "src/Text-Parser-Token.html#Unspaced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "runUnspaced",
          "package": "parsers",
          "partial": "Unspaced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:runUnspaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token parser |semi| parses the character ';' and skips\n any trailing white space. Returns the character ';'. Overloadable to\n permit automatic semicolon insertion or Haskell-style layout.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "semi",
          "package": "parsers",
          "signature": "m Char",
          "source": "src/Text-Parser-Token.html#semi",
          "type": "method"
        },
        "index": {
          "description": "The token parser semi parses the character and skips any trailing white space Returns the character Overloadable to permit automatic semicolon insertion or Haskell-style layout",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "semi",
          "package": "parsers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003esemiSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "semiSep",
          "package": "parsers",
          "signature": "m a -\u003e m [a]",
          "source": "src/Text-Parser-Token.html#semiSep",
          "type": "function"
        },
        "index": {
          "description": "Token parser semiSep parses zero or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "semiSep",
          "normalized": "a b-\u003ea[b]",
          "package": "parsers",
          "partial": "Sep",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:semiSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003esemiSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "semiSep1",
          "package": "parsers",
          "signature": "m a -\u003e m [a]",
          "source": "src/Text-Parser-Token.html#semiSep1",
          "type": "function"
        },
        "index": {
          "description": "Token parser semiSep1 parses one or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "semiSep1",
          "normalized": "a b-\u003ea[b]",
          "package": "parsers",
          "partial": "Sep",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:semiSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsually, someSpace consists of \u003cem\u003eone\u003c/em\u003e or more occurrences of a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e.\n Some parsers may choose to recognize line comments or block (multi line)\n comments as white space as well.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "someSpace",
          "package": "parsers",
          "signature": "m ()",
          "source": "src/Text-Parser-Token.html#someSpace",
          "type": "method"
        },
        "index": {
          "description": "Usually someSpace consists of one or more occurrences of space Some parsers may choose to recognize line comments or block multi line comments as white space as well",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "someSpace",
          "normalized": "a()",
          "package": "parsers",
          "partial": "Space",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:someSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser parses a literal string. Returns the literal\n string value. This parsers deals correctly with escape sequences and\n gaps. The literal string is parsed according to the grammar rules\n defined in the Haskell report (which matches most programming\n languages quite closely).\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "stringLiteral",
          "package": "parsers",
          "signature": "m s",
          "source": "src/Text-Parser-Token.html#stringLiteral",
          "type": "function"
        },
        "index": {
          "description": "This token parser parses literal string Returns the literal string value This parsers deals correctly with escape sequences and gaps The literal string is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "stringLiteral",
          "package": "parsers",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis token parser behaves as \u003ccode\u003e\u003ca\u003estringLiteral\u003c/a\u003e\u003c/code\u003e, but for single-quoted\n strings.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "stringLiteral'",
          "package": "parsers",
          "signature": "m s",
          "source": "src/Text-Parser-Token.html#stringLiteral%27",
          "type": "function"
        },
        "index": {
          "description": "This token parser behaves as stringLiteral but for single-quoted strings",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "stringLiteral'",
          "package": "parsers",
          "partial": "Literal'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:stringLiteral-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a traversal of both actions in contained in an \u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleChars\u003c/a\u003e\u003c/code\u003e :: Traversal (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e n) (m \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e) (n \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleChars",
          "package": "parsers",
          "signature": "(m Char -\u003e f (n Char)) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle n)",
          "source": "src/Text-Parser-Token.html#styleChars",
          "type": "function"
        },
        "index": {
          "description": "This is traversal of both actions in contained in an IdentifierStyle styleChars Traversal IdentifierStyle IdentifierStyle Char Char",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleChars",
          "normalized": "(a Char-\u003eb(c Char))-\u003eIdentifierStyle a-\u003eb(IdentifierStyle c)",
          "package": "parsers",
          "partial": "Chars",
          "signature": "(m Char-\u003ef(n Char))-\u003eIdentifierStyle m-\u003ef(IdentifierStyle n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can be used to modify the highlight used for this identifier set.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleHighlight\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) \u003ccode\u003e\u003ca\u003eHighlight\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleHighlight",
          "package": "parsers",
          "signature": "(Highlight -\u003e f Highlight) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleHighlight",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can be used to modify the highlight used for this identifier set styleHighlight Lens IdentifierStyle Highlight",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleHighlight",
          "normalized": "(Highlight-\u003ea Highlight)-\u003eIdentifierStyle b-\u003ea(IdentifierStyle b)",
          "package": "parsers",
          "partial": "Highlight",
          "signature": "(Highlight-\u003ef Highlight)-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a traversal that can be used to modify the highlights used for both non-reserved and reserved identifiers in this identifier set.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleHighlights\u003c/a\u003e\u003c/code\u003e :: Traversal' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) \u003ccode\u003e\u003ca\u003eHighlight\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleHighlights",
          "package": "parsers",
          "signature": "(Highlight -\u003e f Highlight) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleHighlights",
          "type": "function"
        },
        "index": {
          "description": "This is traversal that can be used to modify the highlights used for both non-reserved and reserved identifiers in this identifier set styleHighlights Traversal IdentifierStyle Highlight",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleHighlights",
          "normalized": "(Highlight-\u003ea Highlight)-\u003eIdentifierStyle b-\u003ea(IdentifierStyle b)",
          "package": "parsers",
          "partial": "Highlights",
          "signature": "(Highlight-\u003ef Highlight)-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleHighlights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lens can be used to update the action used to recognize subsequent letters in an identifier.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleLetter\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) (m \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleLetter",
          "package": "parsers",
          "signature": "(m Char -\u003e f (m Char)) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleLetter",
          "type": "function"
        },
        "index": {
          "description": "This lens can be used to update the action used to recognize subsequent letters in an identifier styleLetter Lens IdentifierStyle Char",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleLetter",
          "normalized": "(a Char-\u003eb(a Char))-\u003eIdentifierStyle a-\u003eb(IdentifierStyle a)",
          "package": "parsers",
          "partial": "Letter",
          "signature": "(m Char-\u003ef(m Char))-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lens can be used to update the name for this style of identifier.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleName\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleName",
          "package": "parsers",
          "signature": "(String -\u003e f String) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleName",
          "type": "function"
        },
        "index": {
          "description": "This lens can be used to update the name for this style of identifier styleName Lens IdentifierStyle String",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleName",
          "normalized": "(String-\u003ea String)-\u003eIdentifierStyle b-\u003ea(IdentifierStyle b)",
          "package": "parsers",
          "partial": "Name",
          "signature": "(String-\u003ef String)-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can be used to modify the reserved identifier set.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleReserved\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) (\u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleReserved",
          "package": "parsers",
          "signature": "(HashSet String -\u003e f (HashSet String)) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleReserved",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can be used to modify the reserved identifier set styleReserved Lens IdentifierStyle HashSet String",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleReserved",
          "normalized": "(HashSet String-\u003ea(HashSet String))-\u003eIdentifierStyle b-\u003ea(IdentifierStyle b)",
          "package": "parsers",
          "partial": "Reserved",
          "signature": "(HashSet String-\u003ef(HashSet String))-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleReserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a lens that can be used to modify the highlight used for reserved identifiers in this identifier set.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleReservedHighlight\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) \u003ccode\u003e\u003ca\u003eHighlight\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleReservedHighlight",
          "package": "parsers",
          "signature": "(Highlight -\u003e f Highlight) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleReservedHighlight",
          "type": "function"
        },
        "index": {
          "description": "This is lens that can be used to modify the highlight used for reserved identifiers in this identifier set styleReservedHighlight Lens IdentifierStyle Highlight",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleReservedHighlight",
          "normalized": "(Highlight-\u003ea Highlight)-\u003eIdentifierStyle b-\u003ea(IdentifierStyle b)",
          "package": "parsers",
          "partial": "Reserved Highlight",
          "signature": "(Highlight-\u003ef Highlight)-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleReservedHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lens can be used to update the action used to recognize the first letter in an identifier.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003estyleStart\u003c/a\u003e\u003c/code\u003e :: Lens' (\u003ccode\u003e\u003ca\u003eIdentifierStyle\u003c/a\u003e\u003c/code\u003e m) (m \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "styleStart",
          "package": "parsers",
          "signature": "(m Char -\u003e f (m Char)) -\u003e IdentifierStyle m -\u003e f (IdentifierStyle m)",
          "source": "src/Text-Parser-Token.html#styleStart",
          "type": "function"
        },
        "index": {
          "description": "This lens can be used to update the action used to recognize the first letter in an identifier styleStart Lens IdentifierStyle Char",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "styleStart",
          "normalized": "(a Char-\u003eb(a Char))-\u003eIdentifierStyle a-\u003eb(IdentifierStyle a)",
          "package": "parsers",
          "partial": "Start",
          "signature": "(m Char-\u003ef(m Char))-\u003eIdentifierStyle m-\u003ef(IdentifierStyle m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:styleStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003esymbol s\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "symbol",
          "package": "parsers",
          "signature": "String -\u003e m String",
          "source": "src/Text-Parser-Token.html#symbol",
          "type": "function"
        },
        "index": {
          "description": "Token parser symbol parses string and skips trailing white space",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "symbol",
          "normalized": "String-\u003ea String",
          "package": "parsers",
          "signature": "String-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003esymbolic s\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "symbolic",
          "package": "parsers",
          "signature": "Char -\u003e m Char",
          "source": "src/Text-Parser-Token.html#symbolic",
          "type": "function"
        },
        "index": {
          "description": "Token parser symbolic parses char and skips trailing white space",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "symbolic",
          "normalized": "Char-\u003ea Char",
          "package": "parsers",
          "signature": "Char-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:symbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken parser \u003ccode\u003etextSymbol t\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "textSymbol",
          "package": "parsers",
          "signature": "Text -\u003e m Text",
          "source": "src/Text-Parser-Token.html#textSymbol",
          "type": "function"
        },
        "index": {
          "description": "Token parser textSymbol parses text and skips trailing white space",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "textSymbol",
          "normalized": "Text-\u003ea Text",
          "package": "parsers",
          "partial": "Symbol",
          "signature": "Text-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:textSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoken p\u003c/code\u003e first applies parser \u003ccode\u003ep\u003c/code\u003e and then the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e\n parser, returning the value of \u003ccode\u003ep\u003c/code\u003e. Every lexical\n token (token) is defined using \u003ccode\u003etoken\u003c/code\u003e, this way every parse\n starts at a point without white space. Parsers that use \u003ccode\u003etoken\u003c/code\u003e are\n called \u003cem\u003etoken\u003c/em\u003e parsers in this document.\n\u003c/p\u003e\u003cp\u003eThe only point where the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e parser should be\n called explicitly is the start of the main parser in order to skip\n any leading white space.\n\u003c/p\u003e\u003cp\u003eAlternatively, one might define \u003ccode\u003e\u003ca\u003etoken\u003c/a\u003e\u003c/code\u003e as first parsing \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e\n and then parser \u003ccode\u003ep\u003c/code\u003e.  By parsing whiteSpace first, the parser is able\n to return before parsing additional whiteSpace, improving laziness.\n\u003c/p\u003e\u003cpre\u003e mainParser  = sum \u003c$ whiteSpace \u003c*\u003e many (token digit) \u003c* eof\n\u003c/pre\u003e",
          "module": "Text.Parser.Token",
          "name": "token",
          "package": "parsers",
          "signature": "m a -\u003e m a",
          "source": "src/Text-Parser-Token.html#token",
          "type": "method"
        },
        "index": {
          "description": "token first applies parser and then the whiteSpace parser returning the value of Every lexical token token is defined using token this way every parse starts at point without white space Parsers that use token are called token parsers in this document The only point where the whiteSpace parser should be called explicitly is the start of the main parser in order to skip any leading white space Alternatively one might define token as first parsing whiteSpace and then parser By parsing whiteSpace first the parser is able to return before parsing additional whiteSpace improving laziness mainParser sum whiteSpace many token digit eof",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "token",
          "normalized": "a b-\u003ea b",
          "package": "parsers",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip zero or more bytes worth of white space. More complex parsers are\n free to consider comments as white space.\n\u003c/p\u003e",
          "module": "Text.Parser.Token",
          "name": "whiteSpace",
          "package": "parsers",
          "signature": "m ()",
          "source": "src/Text-Parser-Token.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip zero or more bytes worth of white space More complex parsers are free to consider comments as white space",
          "hierarchy": "Text Parser Token",
          "module": "Text.Parser.Token",
          "name": "whiteSpace",
          "normalized": "a()",
          "package": "parsers",
          "partial": "Space",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsers/docs/Text-Parser-Token.html#v:whiteSpace"
      }
    }
  ]
]