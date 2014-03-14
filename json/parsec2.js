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
        "word": "parsec2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used character parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "Char",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used character parsers",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "Char",
          "package": "parsec2",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#CharParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec2",
          "partial": "Char Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#t:CharParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter or digit (a character between '0' and '9').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "alphaNum",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#alphaNum",
          "type": "function"
        },
        "index": {
          "description": "Parses letter or digit character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "alphaNum",
          "package": "parsec2",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:alphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "anyChar",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "This parser succeeds for any character Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "anyChar",
          "package": "parsec2",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character (i.e. \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  semiColon  = char ';'\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "char",
          "package": "parsec2",
          "signature": "Char -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#char",
          "type": "function"
        },
        "index": {
          "description": "char parses single character Returns the parsed character i.e semiColon char",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "char",
          "normalized": "Char-\u003eCharParser a Char",
          "package": "parsec2",
          "signature": "Char-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a digit. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "digit",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parses digit Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "digit",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n 'f' or 'A' and 'F'). Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "hexDigit",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#hexDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "hexDigit",
          "package": "parsec2",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:hexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter (an upper case or lower case character). Returns the\n parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "letter",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parses letter an upper case or lower case character Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "letter",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a lower case character (a character between 'a' and 'z').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "lower",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Parses lower case character character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "lower",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a newline character ('\\n'). Returns a newline character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "newline",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Parses newline character Returns newline character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "newline",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "noneOf",
          "package": "parsec2",
          "signature": "[Char] -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#noneOf",
          "type": "function"
        },
        "index": {
          "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character consonant noneOf aeiou",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "noneOf",
          "normalized": "[Char]-\u003eCharParser a Char",
          "package": "parsec2",
          "partial": "Of",
          "signature": "[Char]-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an octal digit (a character between '0' and '7'). Returns\n the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "octDigit",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#octDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses an octal digit character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "octDigit",
          "package": "parsec2",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:octDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied\n list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "oneOf",
          "package": "parsec2",
          "signature": "[Char] -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "oneOf cs succeeds if the current character is in the supplied list of characters cs Returns the parsed character See also satisfy vowel oneOf aeiou",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "oneOf",
          "normalized": "[Char]-\u003eCharParser a Char",
          "package": "parsec2",
          "partial": "Of",
          "signature": "[Char]-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy f\u003c/code\u003e succeeds for any character for which the\n supplied function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e\u003cpre\u003e  digit     = satisfy isDigit\n  oneOf cs  = satisfy (\\c -\u003e c `elem` cs)\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "satisfy",
          "package": "parsec2",
          "signature": "(Char -\u003e Bool) -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the supplied function returns True Returns the character that is actually parsed digit satisfy isDigit oneOf cs satisfy elem cs",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eCharParser a Char",
          "package": "parsec2",
          "signature": "(Char-\u003eBool)-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "space",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "space",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips \u003cem\u003ezero\u003c/em\u003e or more white space characters. See also \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "spaces",
          "package": "parsec2",
          "signature": "CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#spaces",
          "type": "function"
        },
        "index": {
          "description": "Skips zero or more white space characters See also skipMany",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "spaces",
          "normalized": "CharParser a()",
          "package": "parsec2",
          "signature": "CharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   string \"div\"\n              \u003c|\u003e string \"mod\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "string",
          "package": "parsec2",
          "signature": "String -\u003e CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#string",
          "type": "function"
        },
        "index": {
          "description": "string parses sequence of characters given by Returns the parsed string i.e divOrMod string div string mod",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "string",
          "normalized": "String-\u003eCharParser a String",
          "package": "parsec2",
          "signature": "String-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a tab character ('\\t'). Returns a tab character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "tab",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#tab",
          "type": "function"
        },
        "index": {
          "description": "Parses tab character Returns tab character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "tab",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an upper case letter (a character between 'A' and 'Z').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "upper",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Parses an upper case letter character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "upper",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Char.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used generic combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used generic combinators",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec2",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eanyToken\u003c/code\u003e accepts any kind of token. It is for example\n used to implement \u003ccode\u003e\u003ca\u003eeof\u003c/a\u003e\u003c/code\u003e. Returns the accepted token.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "anyToken",
          "package": "parsec2",
          "signature": "GenParser tok st tok",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#anyToken",
          "type": "function"
        },
        "index": {
          "description": "The parser anyToken accepts any kind of token It is for example used to implement eof Returns the accepted token",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "anyToken",
          "package": "parsec2",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eclose\u003c/code\u003e.\n Returns the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  braces  = between (symbol \"{\") (symbol \"}\")\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "between",
          "package": "parsec2",
          "signature": "GenParser tok st open -\u003e GenParser tok st close -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#between",
          "type": "function"
        },
        "index": {
          "description": "between open close parses open followed by and close Returns the value returned by braces between symbol symbol",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "between",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b e-\u003eGenParser a b e",
          "package": "parsec2",
          "signature": "GenParser tok st open-\u003eGenParser tok st close-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e. Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are zero occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st (a -\u003e a -\u003e a) -\u003e a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "chainl op parser zero or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by If there are zero occurrences of the value is returned",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl",
          "normalized": "GenParser a b c-\u003eGenParser a b(c-\u003ec-\u003ec)-\u003ec-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003ea-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. . This parser can for example be used to eliminate left\n recursion which typically occurs in expression grammars.\n\u003c/p\u003e\u003cpre\u003e  expr    = term   `chainl1` addop\n  term    = factor `chainl1` mulop\n  factor  = parens expr \u003c|\u003e integer\n\n  mulop   =   do{ symbol \"*\"; return (*)   }\n          \u003c|\u003e do{ symbol \"/\"; return (div) }\n\n  addop   =   do{ symbol \"+\"; return (+) }\n          \u003c|\u003e do{ symbol \"-\"; return (-) }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st (a -\u003e a -\u003e a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#chainl1",
          "type": "function"
        },
        "index": {
          "description": "chainl1 op parser one or more occurrences of separated by op Returns value obtained by left associative application of all functions returned by op to the values returned by This parser can for example be used to eliminate left recursion which typically occurs in expression grammars expr term chainl1 addop term factor chainl1 mulop factor parens expr integer mulop do symbol return do symbol return div addop do symbol return do symbol return",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl1",
          "normalized": "GenParser a b c-\u003eGenParser a b(c-\u003ec-\u003ec)-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st (a -\u003e a -\u003e a) -\u003e a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "chainr op parser zero or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by If there are no occurrences of the value is returned",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr",
          "normalized": "GenParser a b c-\u003eGenParser a b(c-\u003ec-\u003ec)-\u003ec-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003ea-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of |p|,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st (a -\u003e a -\u003e a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#chainr1",
          "type": "function"
        },
        "index": {
          "description": "chainr1 op parser one or more occurrences of separated by op Returns value obtained by right associative application of all functions returned by op to the values returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr1",
          "normalized": "GenParser a b c-\u003eGenParser a b(c-\u003ec-\u003ec)-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "choice",
          "package": "parsec2",
          "signature": "[GenParser tok st a] -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#choice",
          "type": "function"
        },
        "index": {
          "description": "choice ps tries to apply the parsers in the list ps in order until one of them succeeds Returns the value of the succeeding parser",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "choice",
          "normalized": "[GenParser a b c]-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "[GenParser tok st a]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003en\u003c/code\u003e is smaller or\n equal to zero, the parser equals to \u003ccode\u003ereturn []\u003c/code\u003e. Returns a list of\n \u003ccode\u003en\u003c/code\u003e values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "count",
          "package": "parsec2",
          "signature": "Int -\u003e GenParser tok st a -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#count",
          "type": "function"
        },
        "index": {
          "description": "count parses occurrences of If is smaller or equal to zero the parser equals to return Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "count",
          "normalized": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "package": "parsec2",
          "signature": "Int-\u003eGenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   cStatements  = cStatement `endBy` semi\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#endBy",
          "type": "function"
        },
        "index": {
          "description": "endBy sep parses zero or more occurrences of seperated and ended by sep Returns list of values returned by cStatements cStatement endBy semi",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#endBy1",
          "type": "function"
        },
        "index": {
          "description": "endBy1 sep parses one or more occurrences of seperated and ended by sep Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy1",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser only succeeds at the end of the input. This is not a\n primitive parser but it is defined using \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  eof  = notFollowedBy anyToken \u003c?\u003e \"end of input\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "eof",
          "package": "parsec2",
          "signature": "GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#eof",
          "type": "function"
        },
        "index": {
          "description": "This parser only succeeds at the end of the input This is not primitive parser but it is defined using notFollowedBy eof notFollowedBy anyToken end of input",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "eof",
          "normalized": "GenParser a b()",
          "package": "parsec2",
          "signature": "GenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "lookAhead",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "lookAhead parses without consuming any input",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "lookAhead",
          "normalized": "GenParser a b c-\u003eGenParser a b c",
          "package": "parsec2",
          "partial": "Ahead",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "many1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#many1",
          "type": "function"
        },
        "index": {
          "description": "many1 applies the parser one or more times Returns list of the returned values of word many1 letter",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "many1",
          "normalized": "GenParser a b c-\u003eGenParser a b[c]",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n This parser can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = do{ string \"\u003c!--\"\n                      ; manyTill anyChar (try (string \"--\u003e\"))\n                      }\n\u003c/pre\u003e\u003cp\u003eNote the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"\u003c!--\"\u003c/code\u003e, and\n    therefore the use of the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "manyTill",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st end -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "manyTill end applies parser zero or more times until parser end succeeds Returns the list of values returned by This parser can be used to scan comments simpleComment do string manyTill anyChar try string Note the overlapping parsers anyChar and string and therefore the use of the try combinator",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "manyTill",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "Till",
          "signature": "GenParser tok st a-\u003eGenParser tok st end-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e only succeeds when parser \u003ccode\u003ep\u003c/code\u003e fails. This parser\n does not consume any input. This parser can be used to implement the\n 'longest match' rule. For example, when recognizing keywords (for\n example \u003ccode\u003elet\u003c/code\u003e), we want to make sure that a keyword is not followed\n by a legal identifier character, in which case the keyword is\n actually an identifier (for example \u003ccode\u003elets\u003c/code\u003e). We can program this\n behaviour as follows:\n\u003c/p\u003e\u003cpre\u003e  keywordLet  = try (do{ string \"let\"\n                       ; notFollowedBy alphaNum\n                       })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "notFollowedBy",
          "package": "parsec2",
          "signature": "GenParser tok st tok -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#notFollowedBy",
          "type": "function"
        },
        "index": {
          "description": "notFollowedBy only succeeds when parser fails This parser does not consume any input This parser can be used to implement the longest match rule For example when recognizing keywords for example let we want to make sure that keyword is not followed by legal identifier character in which case the keyword is actually an identifier for example lets We can program this behaviour as follows keywordLet try do string let notFollowedBy alphaNum",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "notFollowedBy",
          "normalized": "GenParser a b a-\u003eGenParser a b()",
          "package": "parsec2",
          "partial": "Followed By",
          "signature": "GenParser tok st tok-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  priority  = option 0 (do{ d \u003c- digit\n                          ; return (digitToInt d)\n                          })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "option",
          "package": "parsec2",
          "signature": "a -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#option",
          "type": "function"
        },
        "index": {
          "description": "option tries to apply parser If fails without consuming input it returns the value otherwise the value returned by priority option do digit return digitToInt",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "option",
          "normalized": "a-\u003eGenParser b c a-\u003eGenParser b c a",
          "package": "parsec2",
          "signature": "a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptionMaybe p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, otherwise it returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optionMaybe",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st (Maybe a)",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#optionMaybe",
          "type": "function"
        },
        "index": {
          "description": "optionMaybe tries to apply parser If fails without consuming input it return Nothing otherwise it returns Just the value returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optionMaybe",
          "normalized": "GenParser a b c-\u003eGenParser a b(Maybe c)",
          "package": "parsec2",
          "partial": "Maybe",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptional p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  It will parse \u003ccode\u003ep\u003c/code\u003e or nothing.\n It only fails if \u003ccode\u003ep\u003c/code\u003e fails after consuming input. It discards the result\n of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optional",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#optional",
          "type": "function"
        },
        "index": {
          "description": "optional tries to apply parser It will parse or nothing It only fails if fails after consuming input It discards the result of",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optional",
          "normalized": "GenParser a b c-\u003eGenParser a b()",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep parses zero or more occurrences of separated by sep Returns list of values returned by commaSep sepBy symbol",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy1",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e, ie. haskell style\n statements. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  haskellStatements  = haskellStatement `sepEndBy` semi\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#sepEndBy",
          "type": "function"
        },
        "index": {
          "description": "sepEndBy sep parses zero or more occurrences of separated and optionally ended by sep ie haskell style statements Returns list of values returned by haskellStatements haskellStatement sepEndBy semi",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "End By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st sep -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#sepEndBy1",
          "type": "function"
        },
        "index": {
          "description": "sepEndBy1 sep parses one or more occurrences of separated and optionally ended by sep Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy1",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "parsec2",
          "partial": "End By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "skipMany1",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#skipMany1",
          "type": "function"
        },
        "index": {
          "description": "skipMany1 applies the parser one or more times skipping its result",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "skipMany1",
          "normalized": "GenParser a b c-\u003eGenParser a b()",
          "package": "parsec2",
          "partial": "Many",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Combinator.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse errors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Parse errors",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec2",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis abstract data type represents parse error messages. There are\n four kinds of messages:\n\u003c/p\u003e\u003cpre\u003e  data Message = SysUnExpect String\n               | UnExpect String\n               | Expect String\n               | Message String\n\u003c/pre\u003e\u003cp\u003eThe fine distinction between different kinds of parse errors allows\n the system to generate quite good error messages for the user. It\n also allows error messages that are formatted in different\n languages. Each kind of message is generated by different combinators:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eSysUnExpect\u003c/a\u003e\u003c/code\u003e message is automatically generated by the\n       \u003ccode\u003eText.Parsec.Combinator.satisfy\u003c/code\u003e combinator. The argument is the\n       unexpected input.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eUnExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003eText.Parsec.Prim.unexpected\u003c/code\u003e\n       combinator. The argument describes the\n       unexpected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003eText.Parsec.Prim.\u003c?\u003e\u003c/code\u003e\n       combinator. The argument describes the expected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument is some general parser message.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "data"
        },
        "index": {
          "description": "This abstract data type represents parse error messages There are four kinds of messages data Message SysUnExpect String UnExpect String Expect String Message String The fine distinction between different kinds of parse errors allows the system to generate quite good error messages for the user It also allows error messages that are formatted in different languages Each kind of message is generated by different combinators SysUnExpect message is automatically generated by the Text.Parsec.Combinator.satisfy combinator The argument is the unexpected input UnExpect message is generated by the Text.Parsec.Prim.unexpected combinator The argument describes the unexpected item Expect message is generated by the Text.Parsec.Prim combinator The argument describes the expected item Message message is generated by the fail combinator The argument is some general parser message",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec2",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003eText.Parsec.Prim.parse\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function Text.Parsec.Prim.parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec2",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Expect",
          "package": "parsec2",
          "signature": "Expect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Expect",
          "package": "parsec2",
          "partial": "Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:Expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec2",
          "signature": "Message !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec2",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "SysUnExpect",
          "package": "parsec2",
          "signature": "SysUnExpect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "SysUnExpect",
          "package": "parsec2",
          "partial": "Sys Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:SysUnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "UnExpect",
          "package": "parsec2",
          "signature": "UnExpect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "UnExpect",
          "package": "parsec2",
          "partial": "Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:UnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "addErrorMessage",
          "package": "parsec2",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#addErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "addErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec2",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:addErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorIsUnknown",
          "package": "parsec2",
          "signature": "ParseError -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#errorIsUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorIsUnknown",
          "normalized": "ParseError-\u003eBool",
          "package": "parsec2",
          "partial": "Is Unknown",
          "signature": "ParseError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:errorIsUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the list of error messages from the parse error\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorMessages",
          "package": "parsec2",
          "signature": "ParseError -\u003e [Message]",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#errorMessages",
          "type": "function"
        },
        "index": {
          "description": "Extracts the list of error messages from the parse error",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorMessages",
          "normalized": "ParseError-\u003e[Message]",
          "package": "parsec2",
          "partial": "Messages",
          "signature": "ParseError-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:errorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the source position from the parse error\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Error\",\"Text.ParserCombinators.Parsec\"]",
          "name": "errorPos",
          "package": "parsec2",
          "signature": "ParseError -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#errorPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:errorPos\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:errorPos\"]"
        },
        "index": {
          "description": "Extracts the source position from the parse error",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorPos",
          "normalized": "ParseError-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Pos",
          "signature": "ParseError-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:errorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "mergeError",
          "package": "parsec2",
          "signature": "ParseError -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#mergeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "mergeError",
          "normalized": "ParseError-\u003eParseError-\u003eParseError",
          "package": "parsec2",
          "partial": "Error",
          "signature": "ParseError-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:mergeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "package": "parsec2",
          "signature": "Message -\u003e Message -\u003e Ordering",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageCompare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "normalized": "Message-\u003eMessage-\u003eOrdering",
          "package": "parsec2",
          "partial": "Compare",
          "signature": "Message-\u003eMessage-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:messageCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "package": "parsec2",
          "signature": "Message -\u003e Message -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "normalized": "Message-\u003eMessage-\u003eBool",
          "package": "parsec2",
          "partial": "Eq",
          "signature": "Message-\u003eMessage-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:messageEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the message string from an error message\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageString",
          "package": "parsec2",
          "signature": "Message -\u003e String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageString",
          "type": "function"
        },
        "index": {
          "description": "Extract the message string from an error message",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageString",
          "normalized": "Message-\u003eString",
          "package": "parsec2",
          "partial": "String",
          "signature": "Message-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:messageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorMessage",
          "package": "parsec2",
          "signature": "Message -\u003e SourcePos -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#newErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorMessage",
          "normalized": "Message-\u003eSourcePos-\u003eParseError",
          "package": "parsec2",
          "partial": "Error Message",
          "signature": "Message-\u003eSourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorUnknown",
          "package": "parsec2",
          "signature": "SourcePos -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#newErrorUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorUnknown",
          "normalized": "SourcePos-\u003eParseError",
          "package": "parsec2",
          "partial": "Error Unknown",
          "signature": "SourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorMessage",
          "package": "parsec2",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#setErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec2",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorPos",
          "package": "parsec2",
          "signature": "SourcePos -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#setErrorPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorPos",
          "normalized": "SourcePos-\u003eParseError-\u003eParseError",
          "package": "parsec2",
          "partial": "Error Pos",
          "signature": "SourcePos-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage independent show function\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "showErrorMessages",
          "package": "parsec2",
          "signature": "String -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [Message] -\u003e String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#showErrorMessages",
          "type": "function"
        },
        "index": {
          "description": "Language independent show function",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "showErrorMessages",
          "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
          "package": "parsec2",
          "partial": "Error Messages",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Error.html#v:showErrorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse \"expressions\".\n Builds a parser given a table of operators and associativities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Expr",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html",
          "type": "module"
        },
        "index": {
          "description": "helper module to parse expressions Builds parser given table of operators and associativities",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Expr",
          "package": "parsec2",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Assoc",
          "package": "parsec2",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies operators that work on values of type \u003ccode\u003ea\u003c/code\u003e.\n An operator is either binary infix or unary prefix or postfix. A\n binary operator has also an associated associativity.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Operator",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Operator",
          "package": "parsec2",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eOperatorTable s u m a\u003c/code\u003e is a list of \u003ccode\u003eOperator s u m a\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#OperatorTable",
          "type": "type"
        },
        "index": {
          "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "OperatorTable",
          "package": "parsec2",
          "partial": "Operator Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocLeft",
          "package": "parsec2",
          "signature": "AssocLeft",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocLeft",
          "package": "parsec2",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocNone",
          "package": "parsec2",
          "signature": "AssocNone",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocNone",
          "package": "parsec2",
          "partial": "Assoc None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocRight",
          "package": "parsec2",
          "signature": "AssocRight",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "AssocRight",
          "package": "parsec2",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Infix",
          "package": "parsec2",
          "signature": "Infix (GenParser t st (a -\u003e a -\u003e a)) Assoc",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Infix",
          "normalized": "Infix(GenParser a b(c-\u003ec-\u003ec))Assoc",
          "package": "parsec2",
          "partial": "Infix",
          "signature": "Infix(GenParser t st(a-\u003ea-\u003ea))Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Postfix",
          "package": "parsec2",
          "signature": "Postfix (GenParser t st (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Postfix",
          "normalized": "Postfix(GenParser a b(c-\u003ec))",
          "package": "parsec2",
          "partial": "Postfix",
          "signature": "Postfix(GenParser t st(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:Postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Prefix",
          "package": "parsec2",
          "signature": "Prefix (GenParser t st (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "Prefix",
          "normalized": "Prefix(GenParser a b(c-\u003ec))",
          "package": "parsec2",
          "partial": "Prefix",
          "signature": "Prefix(GenParser t st(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr\n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n\n  binary  name fun assoc = Infix (do{ reservedOp name; return fun }) assoc\n  prefix  name fun       = Prefix (do{ reservedOp name; return fun })\n  postfix name fun       = Postfix (do{ reservedOp name; return fun })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "buildExpressionParser",
          "package": "parsec2",
          "signature": "OperatorTable tok st a -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Expr.html#buildExpressionParser",
          "type": "function"
        },
        "index": {
          "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix do reservedOp name return fun assoc prefix name fun Prefix do reservedOp name return fun postfix name fun Postfix do reservedOp name return fun",
          "hierarchy": "Text ParserCombinators Parsec Expr",
          "module": "Text.ParserCombinators.Parsec.Expr",
          "name": "buildExpressionParser",
          "normalized": "OperatorTable a b c-\u003eGenParser a b c-\u003eGenParser a b c",
          "package": "parsec2",
          "partial": "Expression Parser",
          "signature": "OperatorTable tok st a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Expr.html#v:buildExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module that defines some language definitions that can be used\n to instantiate a token parser (see \u003ca\u003eText.ParserCombinators.Parsec.Token\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "Language",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Language.html",
          "type": "module"
        },
        "index": {
          "description": "helper module that defines some language definitions that can be used to instantiate token parser see Text.ParserCombinators.Parsec.Token",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "Language",
          "package": "parsec2",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ccode\u003eText.ParserCombinators.Parsec.Token\u003c/code\u003e module. The module\n \u003ccode\u003eText.ParserCombinators.Parsec.Language\u003c/code\u003e contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The LanguageDef type is record that contains all parameterizable features of the Text.ParserCombinators.Parsec.Token module The module Text.ParserCombinators.Parsec.Language contains some default definitions",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec2",
          "partial": "Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "LanguageDef",
          "package": "parsec2",
          "signature": "LanguageDef",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:LanguageDef\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:LanguageDef\"]"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "LanguageDef",
          "package": "parsec2",
          "partial": "Language Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language is case sensitive.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "caseSensitive",
          "package": "parsec2",
          "signature": "Bool",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:caseSensitive\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:caseSensitive\"]"
        },
        "index": {
          "description": "Set to True if the language is case sensitive",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "caseSensitive",
          "package": "parsec2",
          "partial": "Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:caseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the end of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"*/\".\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentEnd",
          "package": "parsec2",
          "signature": "String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentEnd\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:commentEnd\"]"
        },
        "index": {
          "description": "Describes the end of block comment Use the empty string if the language doesn support block comments For example",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "commentEnd",
          "package": "parsec2",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the start of a line comment. Use the empty string if the\n language doesn't support line comments. For example \"//\".\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentLine",
          "package": "parsec2",
          "signature": "String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentLine\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:commentLine\"]"
        },
        "index": {
          "description": "Describes the start of line comment Use the empty string if the language doesn support line comments For example",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "commentLine",
          "package": "parsec2",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the start of a block comment. Use the empty string if the\n language doesn't support block comments. For example \"/*\".\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "commentStart",
          "package": "parsec2",
          "signature": "String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentStart\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:commentStart\"]"
        },
        "index": {
          "description": "Describes the start of block comment Use the empty string if the language doesn support block comments For example",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "commentStart",
          "package": "parsec2",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:commentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "emptyDef",
          "package": "parsec2",
          "signature": "LanguageDef st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#emptyDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "emptyDef",
          "package": "parsec2",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:emptyDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lexer for the haskell language.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskell",
          "package": "parsec2",
          "signature": "TokenParser st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#haskell",
          "type": "function"
        },
        "index": {
          "description": "lexer for the haskell language",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskell",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:haskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language definition for the Haskell language.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskellDef",
          "package": "parsec2",
          "signature": "LanguageDef st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#haskellDef",
          "type": "function"
        },
        "index": {
          "description": "The language definition for the Haskell language",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskellDef",
          "package": "parsec2",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:haskellDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a minimal token definition for Haskell style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskellStyle",
          "package": "parsec2",
          "signature": "LanguageDef st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#haskellStyle",
          "type": "function"
        },
        "index": {
          "description": "This is minimal token definition for Haskell style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "haskellStyle",
          "package": "parsec2",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:haskellStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any legal tail characters of identifiers.\n For example \u003ccode\u003ealphaNum \u003c|\u003e char \"_\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "identLetter",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:identLetter\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:identLetter\"]"
        },
        "index": {
          "description": "This parser should accept any legal tail characters of identifiers For example alphaNum char",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "identLetter",
          "package": "parsec2",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:identLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any start characters of identifiers. For\n example \u003ccode\u003eletter \u003c|\u003e char \"_\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "identStart",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:identStart\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:identStart\"]"
        },
        "index": {
          "description": "This parser should accept any start characters of identifiers For example letter char",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "identStart",
          "package": "parsec2",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:identStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a minimal token definition for Java style languages. It\n defines the style of comments, valid identifiers and case\n sensitivity. It does not define any reserved words or operators.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "javaStyle",
          "package": "parsec2",
          "signature": "LanguageDef st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#javaStyle",
          "type": "function"
        },
        "index": {
          "description": "This is minimal token definition for Java style languages It defines the style of comments valid identifiers and case sensitivity It does not define any reserved words or operators",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "javaStyle",
          "package": "parsec2",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:javaStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lexer for the mondrian language.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "mondrian",
          "package": "parsec2",
          "signature": "TokenParser st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#mondrian",
          "type": "function"
        },
        "index": {
          "description": "lexer for the mondrian language",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "mondrian",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:mondrian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language definition for the language Mondrian.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "mondrianDef",
          "package": "parsec2",
          "signature": "LanguageDef st",
          "source": "src/Text-ParserCombinators-Parsec-Language.html#mondrianDef",
          "type": "function"
        },
        "index": {
          "description": "The language definition for the language Mondrian",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "mondrianDef",
          "package": "parsec2",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:mondrianDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the language supports nested block comments.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "nestedComments",
          "package": "parsec2",
          "signature": "Bool",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:nestedComments\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:nestedComments\"]"
        },
        "index": {
          "description": "Set to True if the language supports nested block comments",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "nestedComments",
          "package": "parsec2",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:nestedComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any legal tail characters of operators.\n Note that this parser should even be defined if the language doesn't\n support user-defined operators, or otherwise the \u003ccode\u003e\u003ca\u003ereservedOp\u003c/a\u003e\u003c/code\u003e\n parser won't work correctly.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "opLetter",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:opLetter\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:opLetter\"]"
        },
        "index": {
          "description": "This parser should accept any legal tail characters of operators Note that this parser should even be defined if the language doesn support user-defined operators or otherwise the reservedOp parser won work correctly",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "opLetter",
          "package": "parsec2",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:opLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser should accept any start characters of operators. For\n example \u003ccode\u003eoneOf \":!#$%&*+./\u003c=\u003e?@\\\\^|-~\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "opStart",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:opStart\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:opStart\"]"
        },
        "index": {
          "description": "This parser should accept any start characters of operators For example oneOf",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "opStart",
          "package": "parsec2",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:opStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of reserved identifiers.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reservedNames",
          "package": "parsec2",
          "signature": "[String]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedNames\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedNames\"]"
        },
        "index": {
          "description": "The list of reserved identifiers",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "reservedNames",
          "normalized": "[String]",
          "package": "parsec2",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of reserved operators.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Language\",\"Text.ParserCombinators.Parsec.Token\"]",
          "name": "reservedOpNames",
          "package": "parsec2",
          "signature": "[String]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedOpNames\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedOpNames\"]"
        },
        "index": {
          "description": "The list of reserved operators",
          "hierarchy": "Text ParserCombinators Parsec Language",
          "module": "Text.ParserCombinators.Parsec.Language",
          "name": "reservedOpNames",
          "normalized": "[String]",
          "package": "parsec2",
          "partial": "Op Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Language.html#v:reservedOpNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers. The algorithm used\n is fairly complex since we push the type system to its limits :-)\n The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n Published as a functional pearl at the Haskell Workshop 2001.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "Perm",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements permutation parsers The algorithm used is fairly complex since we push the type system to its limits The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra Published as functional pearl at the Haskell Workshop",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "Perm",
          "package": "parsec2",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003ePermParser tok st a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses\n \u003ccode\u003etok\u003c/code\u003e tokens with user state \u003ccode\u003est\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first build with special operators\n like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#PermParser",
          "type": "data"
        },
        "index": {
          "description": "The type PermParser tok st denotes permutation parser that when converted by the permute function parses tok tokens with user state st and returns value of type on success Normally permutation parser is first build with special operators like and than transformed into normal parser using permute",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "PermParser",
          "package": "parsec2",
          "partial": "Perm Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#t:PermParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c||\u003e)",
          "package": "parsec2",
          "signature": "PermParser tok st (a -\u003e b) -\u003e GenParser tok st a -\u003e PermParser tok st b",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "PermParser a b(c-\u003ed)-\u003eGenParser a b c-\u003ePermParser a b d",
          "package": "parsec2",
          "signature": "PermParser tok st(a-\u003eb)-\u003eGenParser tok st a-\u003ePermParser tok st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c|?\u003e)",
          "package": "parsec2",
          "signature": "PermParser tok st (a -\u003e b) -\u003e (a, GenParser tok st a) -\u003e PermParser tok st b",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#%3C%7C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c|?\u003e) \u003c|?\u003e",
          "normalized": "PermParser a b(c-\u003ed)-\u003e(c,GenParser a b c)-\u003ePermParser a b d",
          "package": "parsec2",
          "signature": "PermParser tok st(a-\u003eb)-\u003e(a,GenParser tok st a)-\u003ePermParser tok st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--124--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c$$\u003e)",
          "package": "parsec2",
          "signature": "(a -\u003e b) -\u003e GenParser tok st a -\u003e PermParser tok st b",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(a-\u003eb)-\u003eGenParser c d a-\u003ePermParser c d b",
          "package": "parsec2",
          "signature": "(a-\u003eb)-\u003eGenParser tok st a-\u003ePermParser tok st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c$?\u003e)",
          "package": "parsec2",
          "signature": "(a -\u003e b) -\u003e (a, GenParser tok st a) -\u003e PermParser tok st b",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#%3C%24%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "(\u003c$?\u003e) \u003c$?\u003e",
          "normalized": "(a-\u003eb)-\u003e(a,GenParser c d a)-\u003ePermParser c d b",
          "package": "parsec2",
          "signature": "(a-\u003eb)-\u003e(a,GenParser tok st a)-\u003ePermParser tok st b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#v:-60--36--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parser described\n by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a permutation of:\n an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and an optional \u003ccode\u003ec\u003c/code\u003e.\n This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",many1 (char 'a'))\n                         \u003c||\u003e char 'b'\n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "permute",
          "package": "parsec2",
          "signature": "PermParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Perm.html#permute",
          "type": "function"
        },
        "index": {
          "description": "The parser permute perm parses permutation of parser described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple many1 char char char where tuple",
          "hierarchy": "Text ParserCombinators Parsec Perm",
          "module": "Text.ParserCombinators.Parsec.Perm",
          "name": "permute",
          "normalized": "PermParser a b c-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "PermParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Perm.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTextual source positions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html",
          "type": "module"
        },
        "index": {
          "description": "Textual source positions",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec2",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec2",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec2",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec2",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec2",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the column number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceColumn",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#incSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceColumn\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:incSourceColumn\"]"
        },
        "index": {
          "description": "Increments the column number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "incSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the line number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceLine",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#incSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceLine\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:incSourceLine\"]"
        },
        "index": {
          "description": "Increments the line number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "incSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n and line number and column number set to 1, the upper left.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "initialPos",
          "package": "parsec2",
          "signature": "SourceName -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#initialPos",
          "type": "function"
        },
        "index": {
          "description": "Create new SourcePos with the given source name and line number and column number set to the upper left",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "initialPos",
          "normalized": "SourceName-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Pos",
          "signature": "SourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:initialPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n line number and column number.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "newPos",
          "package": "parsec2",
          "signature": "SourceName -\u003e Line -\u003e Column -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#newPos",
          "type": "function"
        },
        "index": {
          "description": "Create new SourcePos with the given source name line number and column number",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "newPos",
          "normalized": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Pos",
          "signature": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:newPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the column number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceColumn",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceColumn\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:setSourceColumn\"]"
        },
        "index": {
          "description": "Set the column number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceLine",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceLine\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:setSourceLine\"]"
        },
        "index": {
          "description": "Set the line number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the name of the source.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceName",
          "package": "parsec2",
          "signature": "SourcePos -\u003e SourceName -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceName\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:setSourceName\"]"
        },
        "index": {
          "description": "Set the name of the source",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceName",
          "normalized": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Source Name",
          "signature": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the column number from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceColumn",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Column",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceColumn\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:sourceColumn\"]"
        },
        "index": {
          "description": "Extracts the column number from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceColumn",
          "normalized": "SourcePos-\u003eColumn",
          "package": "parsec2",
          "partial": "Column",
          "signature": "SourcePos-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the line number from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceLine",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Line",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceLine\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:sourceLine\"]"
        },
        "index": {
          "description": "Extracts the line number from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceLine",
          "normalized": "SourcePos-\u003eLine",
          "package": "parsec2",
          "partial": "Line",
          "signature": "SourcePos-\u003eLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the name of the source from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceName",
          "package": "parsec2",
          "signature": "SourcePos -\u003e SourceName",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceName\",\"http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#v:sourceName\"]"
        },
        "index": {
          "description": "Extracts the name of the source from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceName",
          "normalized": "SourcePos-\u003eSourceName",
          "package": "parsec2",
          "partial": "Name",
          "signature": "SourcePos-\u003eSourceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosChar",
          "package": "parsec2",
          "signature": "SourcePos -\u003e Char -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#updatePosChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosChar",
          "normalized": "SourcePos-\u003eChar-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Pos Char",
          "signature": "SourcePos-\u003eChar-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eupdatePosString pos s\u003c/code\u003e updates the source position\n \u003ccode\u003epos\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003eupdatePosChar\u003c/a\u003e\u003c/code\u003e on every character in \u003ccode\u003es\u003c/code\u003e, ie.\n \u003ccode\u003efoldl updatePosChar pos string\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosString",
          "package": "parsec2",
          "signature": "SourcePos -\u003e String -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#updatePosString",
          "type": "function"
        },
        "index": {
          "description": "The expression updatePosString pos updates the source position pos by calling updatePosChar on every character in ie foldl updatePosChar pos string",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosString",
          "normalized": "SourcePos-\u003eString-\u003eSourcePos",
          "package": "parsec2",
          "partial": "Pos String",
          "signature": "SourcePos-\u003eString-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primitive parser combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "The primitive parser combinators",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec2",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#GenParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec2",
          "partial": "Gen Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec2",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec2",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis combinator implements choice. The parser \u003ccode\u003ep \u003c|\u003e q\u003c/code\u003e first\n applies \u003ccode\u003ep\u003c/code\u003e. If it succeeds, the value of \u003ccode\u003ep\u003c/code\u003e is returned. If \u003ccode\u003ep\u003c/code\u003e\n fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, parser \u003ccode\u003eq\u003c/code\u003e is tried. This\n combinator is defined equal to the \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n class and the (\u003ccode\u003eControl.Applicative.\u003c|\u003e\u003c/code\u003e) member of \u003ccode\u003eControl.Applicative.Alternative\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser is called \u003cem\u003epredictive\u003c/em\u003e since \u003ccode\u003eq\u003c/code\u003e is only tried when\n parser \u003ccode\u003ep\u003c/code\u003e didn't consume any input (i.e.. the look ahead is 1).\n This non-backtracking behaviour allows for both an efficient\n implementation of the parser combinators and the generation of good\n error messages.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c|\u003e)",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "This combinator implements choice The parser first applies If it succeeds the value of is returned If fails without consuming any input parser is tried This combinator is defined equal to the mplus member of the MonadPlus class and the Control.Applicative member of Control.Applicative.Alternative The parser is called predictive since is only tried when parser didn consume any input i.e the look ahead is This non-backtracking behaviour allows for both an efficient implementation of the parser combinators and the generation of good error messages",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "GenParser a b c-\u003eGenParser a b c-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003ep \u003ca\u003e?\u003c/a\u003e msg\u003c/code\u003e behaves as parser \u003ccode\u003ep\u003c/code\u003e, but whenever the\n parser \u003ccode\u003ep\u003c/code\u003e fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, it replaces expect\n error messages with the expect error message \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is normally used at the end of a set alternatives where we want\n to return an error message in terms of a higher level construct\n rather than returning all possible characters. For example, if the\n \u003ccode\u003eexpr\u003c/code\u003e parser from the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e example would fail, the error\n message is: '...: expecting expression'. Without the \u003ccode\u003e(\u003c?\u003e)\u003c/code\u003e\n combinator, the message would be like '...: expecting \"let\" or\n letter', which is less friendly.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c?\u003e)",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e String -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "The parser msg behaves as parser but whenever the parser fails without consuming any input it replaces expect error messages with the expect error message msg This is normally used at the end of set alternatives where we want to return an error message in terms of higher level construct rather than returning all possible characters For example if the expr parser from the try example would fail the error message is expecting expression Without the combinator the message would be like expecting let or letter which is less friendly",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "GenParser a b c-\u003eString-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eString-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec2",
          "signature": "State",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec2",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current input\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getInput",
          "package": "parsec2",
          "signature": "GenParser tok st [tok]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getInput",
          "type": "function"
        },
        "index": {
          "description": "Returns the current input",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getInput",
          "normalized": "GenParser a b[a]",
          "package": "parsec2",
          "partial": "Input",
          "signature": "GenParser tok st[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full parser state as a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getParserState",
          "package": "parsec2",
          "signature": "GenParser tok st (State tok st)",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getParserState",
          "type": "function"
        },
        "index": {
          "description": "Returns the full parser state as State record",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getParserState",
          "package": "parsec2",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:getParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current source position. See also \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getPosition",
          "package": "parsec2",
          "signature": "GenParser tok st SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getPosition",
          "type": "function"
        },
        "index": {
          "description": "Returns the current source position See also SourcePos",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getPosition",
          "package": "parsec2",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:getPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user state.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getState",
          "package": "parsec2",
          "signature": "GenParser tok st st",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Returns the current user state",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getState",
          "package": "parsec2",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "label",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e String -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "label",
          "normalized": "GenParser a b c-\u003eString-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eString-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "labels",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e [String] -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#labels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "labels",
          "normalized": "GenParser a b c-\u003e[String]-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003e[String]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times. Returns a\n    list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  identifier  = do{ c  \u003c- letter\n                  ; cs \u003c- many (alphaNum \u003c|\u003e char '_')\n                  ; return (c:cs)\n                  }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "many",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#many",
          "type": "function"
        },
        "index": {
          "description": "many applies the parser zero or more times Returns list of the returned values of identifier do letter cs many alphaNum char return cs",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "many",
          "normalized": "GenParser a b c-\u003eGenParser a b[c]",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparse p filePath input\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e without user\n state. The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the\n empty string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e)\n or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = case (parse numbers \"\" \"11, 2, 43\") of\n             Left err  -\u003e print err\n             Right xs  -\u003e print (sum xs)\n\n  numbers = commaSep integer\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parse",
          "package": "parsec2",
          "signature": "GenParser tok () a -\u003e SourceName -\u003e [tok] -\u003e Either ParseError a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#parse",
          "type": "function"
        },
        "index": {
          "description": "parse filePath input runs parser without user state The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right main case parse numbers of Left err print err Right xs print sum xs numbers commaSep integer",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parse",
          "normalized": "GenParser a()b-\u003eSourceName-\u003e[a]-\u003eEither ParseError b",
          "package": "parsec2",
          "signature": "GenParser tok()a-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseFromFile",
          "package": "parsec2",
          "signature": "Parser a -\u003e SourceName -\u003e IO (Either ParseError a)",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eSourceName-\u003eIO(Either ParseError a)",
          "package": "parsec2",
          "partial": "From File",
          "signature": "Parser a-\u003eSourceName-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eparseTest p input\u003c/code\u003e applies a parser \u003ccode\u003ep\u003c/code\u003e against\n input \u003ccode\u003einput\u003c/code\u003e and prints the result to stdout. Used for testing\n parsers.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseTest",
          "package": "parsec2",
          "signature": "GenParser tok () a -\u003e [tok] -\u003e IO ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#parseTest",
          "type": "function"
        },
        "index": {
          "description": "The expression parseTest input applies parser against input input and prints the result to stdout Used for testing parsers",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseTest",
          "normalized": "GenParser a()b-\u003e[a]-\u003eIO()",
          "package": "parsec2",
          "partial": "Test",
          "signature": "GenParser tok()a-\u003e[tok]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec2",
          "signature": "GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#pzero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:pzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a parser. \u003ccode\u003erunParser p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  parseFromFile p fname\n    = do{ input \u003c- readFile fname\n        ; return (runParser p () fname input)\n        }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "runParser",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e st -\u003e SourceName -\u003e [tok] -\u003e Either ParseError a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#runParser",
          "type": "function"
        },
        "index": {
          "description": "The most general way to run parser runParser state filePath input runs parser on the input list of tokens input obtained from source filePath with the initial user state st The filePath is only used in error messages and may be the empty string Returns either ParseError Left or value of type Right parseFromFile fname do input readFile fname return runParser fname input",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "runParser",
          "normalized": "GenParser a b c-\u003eb-\u003eSourceName-\u003e[a]-\u003eEither ParseError c",
          "package": "parsec2",
          "partial": "Parser",
          "signature": "GenParser tok st a-\u003est-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetInput input\u003c/code\u003e continues parsing with \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setInput",
          "package": "parsec2",
          "signature": "[tok] -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#setInput",
          "type": "function"
        },
        "index": {
          "description": "setInput input continues parsing with input",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setInput",
          "normalized": "[a]-\u003eGenParser a b()",
          "package": "parsec2",
          "partial": "Input",
          "signature": "[tok]-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:setInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetParserState st\u003c/code\u003e set the full parser state to \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setParserState",
          "package": "parsec2",
          "signature": "State tok st -\u003e GenParser tok st (State tok st)",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#setParserState",
          "type": "function"
        },
        "index": {
          "description": "setParserState st set the full parser state to st",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setParserState",
          "normalized": "State a b-\u003eGenParser a b(State a b)",
          "package": "parsec2",
          "partial": "Parser State",
          "signature": "State tok st-\u003eGenParser tok st(State tok st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:setParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetPosition pos\u003c/code\u003e sets the current source position to \u003ccode\u003epos\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setPosition",
          "package": "parsec2",
          "signature": "SourcePos -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#setPosition",
          "type": "function"
        },
        "index": {
          "description": "setPosition pos sets the current source position to pos",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setPosition",
          "normalized": "SourcePos-\u003eGenParser a b()",
          "package": "parsec2",
          "partial": "Position",
          "signature": "SourcePos-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:setPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetState st\u003c/code\u003e set the user state to \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setState",
          "package": "parsec2",
          "signature": "st -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#setState",
          "type": "function"
        },
        "index": {
          "description": "setState st set the user state to st",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setState",
          "normalized": "a-\u003eGenParser b a()",
          "package": "parsec2",
          "partial": "State",
          "signature": "st-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e\u003cpre\u003e  spaces  = skipMany space\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "skipMany",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#skipMany",
          "type": "function"
        },
        "index": {
          "description": "skipMany applies the parser zero or more times skipping its result spaces skipMany space",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "skipMany",
          "normalized": "GenParser a b c-\u003eGenParser a b()",
          "package": "parsec2",
          "partial": "Many",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateInput",
          "package": "parsec2",
          "signature": "[tok]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateInput",
          "normalized": "[a]",
          "package": "parsec2",
          "partial": "Input",
          "signature": "[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "statePos",
          "package": "parsec2",
          "signature": "SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "statePos",
          "package": "parsec2",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:statePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateUser",
          "package": "parsec2",
          "signature": "st",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateUser",
          "package": "parsec2",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok posFromTok testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n source position of the \u003ccode\u003et\u003c/code\u003e should be returned by \u003ccode\u003eposFromTok t\u003c/code\u003e and\n the token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis combinator is expressed in terms of \u003ccode\u003e\u003ca\u003etokenPrim\u003c/a\u003e\u003c/code\u003e.\n It is used to accept user defined token streams. For example,\n suppose that we have a stream of basic tokens tupled with source\n positions. We can than define a parser that accepts single tokens as:\n\u003c/p\u003e\u003cpre\u003e  mytoken x\n    = token showTok posFromTok testTok\n    where\n      showTok (pos,t)     = show t\n      posFromTok (pos,t)  = pos\n      testTok (pos,t)     = if x == t then Just t else Nothing\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "token",
          "package": "parsec2",
          "signature": "(tok -\u003e String) -\u003e (tok -\u003e SourcePos) -\u003e (tok -\u003e Maybe a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#token",
          "type": "function"
        },
        "index": {
          "description": "The parser token showTok posFromTok testTok accepts token with result when the function testTok returns Just The source position of the should be returned by posFromTok and the token can be shown using showTok This combinator is expressed in terms of tokenPrim It is used to accept user defined token streams For example suppose that we have stream of basic tokens tupled with source positions We can than define parser that accepts single tokens as mytoken token showTok posFromTok testTok where showTok pos show posFromTok pos pos testTok pos if then Just else Nothing",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "token",
          "normalized": "(a-\u003eString)-\u003e(a-\u003eSourcePos)-\u003e(a-\u003eMaybe b)-\u003eGenParser a c b",
          "package": "parsec2",
          "signature": "(tok-\u003eString)-\u003e(tok-\u003eSourcePos)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok nextPos testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e. The position of the \u003cem\u003enext\u003c/em\u003e\n token should be returned when \u003ccode\u003enextPos\u003c/code\u003e is called with the current\n source position \u003ccode\u003epos\u003c/code\u003e, the current token \u003ccode\u003et\u003c/code\u003e and the rest of the\n tokens \u003ccode\u003etoks\u003c/code\u003e, \u003ccode\u003enextPos pos t toks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the most primitive combinator for accepting tokens. For\n example, the \u003ccode\u003eText.Parsec.Char.char\u003c/code\u003e parser could be implemented as:\n\u003c/p\u003e\u003cpre\u003e  char c\n    = tokenPrim showChar nextPos testChar\n    where\n      showChar x        = \"'\" ++ x ++ \"'\"\n      testChar x        = if x == c then Just x else Nothing\n      nextPos pos x xs  = updatePosChar pos x\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrim",
          "package": "parsec2",
          "signature": "(tok -\u003e String) -\u003e (SourcePos -\u003e tok -\u003e [tok] -\u003e SourcePos) -\u003e (tok -\u003e Maybe a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#tokenPrim",
          "type": "function"
        },
        "index": {
          "description": "The parser token showTok nextPos testTok accepts token with result when the function testTok returns Just The token can be shown using showTok The position of the next token should be returned when nextPos is called with the current source position pos the current token and the rest of the tokens toks nextPos pos toks This is the most primitive combinator for accepting tokens For example the Text.Parsec.Char.char parser could be implemented as char tokenPrim showChar nextPos testChar where showChar testChar if then Just else Nothing nextPos pos xs updatePosChar pos",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrim",
          "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003e[a]-\u003eSourcePos)-\u003e(a-\u003eMaybe b)-\u003eGenParser a c b",
          "package": "parsec2",
          "partial": "Prim",
          "signature": "(tok-\u003eString)-\u003e(SourcePos-\u003etok-\u003e[tok]-\u003eSourcePos)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive token recogniser. The expression \u003ccode\u003etokenPrimEx show nextpos mbnextstate test\u003c/code\u003e,\n recognises tokens when \u003ccode\u003etest\u003c/code\u003e returns \u003ccode\u003eJust x\u003c/code\u003e (and returns the value \u003ccode\u003ex\u003c/code\u003e). Tokens are shown in\n error messages using \u003ccode\u003eshow\u003c/code\u003e. The position is calculated using \u003ccode\u003enextpos\u003c/code\u003e, and finally, \u003ccode\u003embnextstate\u003c/code\u003e,\n can hold a function that updates the user state on every token recognised (nice to count tokens :-).\n The function is packed into a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type for performance reasons.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrimEx",
          "package": "parsec2",
          "signature": "(tok -\u003e String) -\u003e (SourcePos -\u003e tok -\u003e [tok] -\u003e SourcePos) -\u003e Maybe (SourcePos -\u003e tok -\u003e [tok] -\u003e st -\u003e st) -\u003e (tok -\u003e Maybe a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#tokenPrimEx",
          "type": "function"
        },
        "index": {
          "description": "The most primitive token recogniser The expression tokenPrimEx show nextpos mbnextstate test recognises tokens when test returns Just and returns the value Tokens are shown in error messages using show The position is calculated using nextpos and finally mbnextstate can hold function that updates the user state on every token recognised nice to count tokens The function is packed into Maybe type for performance reasons",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrimEx",
          "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003e[a]-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003ea-\u003e[a]-\u003eb-\u003eb)-\u003e(a-\u003eMaybe c)-\u003eGenParser a b c",
          "package": "parsec2",
          "partial": "Prim Ex",
          "signature": "(tok-\u003eString)-\u003e(SourcePos-\u003etok-\u003e[tok]-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003etok-\u003e[tok]-\u003est-\u003est)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrimEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokens",
          "package": "parsec2",
          "signature": "([tok] -\u003e String) -\u003e (SourcePos -\u003e [tok] -\u003e SourcePos) -\u003e [tok] -\u003e GenParser tok st [tok]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#tokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokens",
          "normalized": "([a]-\u003eString)-\u003e(SourcePos-\u003e[a]-\u003eSourcePos)-\u003e[a]-\u003eGenParser a b[a]",
          "package": "parsec2",
          "signature": "([tok]-\u003eString)-\u003e(SourcePos-\u003e[tok]-\u003eSourcePos)-\u003e[tok]-\u003eGenParser tok st[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etry p\u003c/code\u003e behaves like parser \u003ccode\u003ep\u003c/code\u003e, except that it\n pretends that it hasn't consumed any input when an error occurs.\n\u003c/p\u003e\u003cp\u003eThis combinator is used whenever arbitrary look ahead is needed.\n Since it pretends that it hasn't consumed any input when \u003ccode\u003ep\u003c/code\u003e fails,\n the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator will try its second alternative even when the\n first parser failed while consuming input.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003etry\u003c/code\u003e combinator can for example be used to distinguish\n identifiers and reserved words. Both reserved words and identifiers\n are a sequence of letters. Whenever we expect a certain reserved\n word where we can also expect an identifier we have to use the \u003ccode\u003etry\u003c/code\u003e\n combinator. Suppose we write:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ string \"let\"; ... }\n  identifier  = many1 letter\n\u003c/pre\u003e\u003cp\u003eIf the user writes \"lexical\", the parser fails with: \u003ccode\u003eunexpected\n 'x', expecting 't' in \"let\"\u003c/code\u003e. Indeed, since the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator\n only tries alternatives when the first alternative hasn't consumed\n input, the \u003ccode\u003eidentifier\u003c/code\u003e parser is never tried (because the prefix\n \"le\" of the \u003ccode\u003estring \"let\"\u003c/code\u003e parser is already consumed). The\n right behaviour can be obtained by adding the \u003ccode\u003etry\u003c/code\u003e combinator:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ try (string \"let\"); ... }\n  identifier  = many1 letter\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "try",
          "package": "parsec2",
          "signature": "GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#try",
          "type": "function"
        },
        "index": {
          "description": "The parser try behaves like parser except that it pretends that it hasn consumed any input when an error occurs This combinator is used whenever arbitrary look ahead is needed Since it pretends that it hasn consumed any input when fails the combinator will try its second alternative even when the first parser failed while consuming input The try combinator can for example be used to distinguish identifiers and reserved words Both reserved words and identifiers are sequence of letters Whenever we expect certain reserved word where we can also expect an identifier we have to use the try combinator Suppose we write expr letExpr identifier expression letExpr do string let identifier many1 letter If the user writes lexical the parser fails with unexpected expecting in let Indeed since the combinator only tries alternatives when the first alternative hasn consumed input the identifier parser is never tried because the prefix le of the string let parser is already consumed The right behaviour can be obtained by adding the try combinator expr letExpr identifier expression letExpr do try string let identifier many1 letter",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "try",
          "normalized": "GenParser a b c-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eunexpected msg\u003c/code\u003e always fails with an unexpected error\n message \u003ccode\u003emsg\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eThe parsers \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) and \u003ccode\u003eunexpected\u003c/code\u003e are the three parsers\n used to generate error messages. Of these, only (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) is commonly\n used. For an example of the use of \u003ccode\u003eunexpected\u003c/code\u003e, see the definition\n of \u003ccode\u003eText.Parsec.Combinator.notFollowedBy\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "unexpected",
          "package": "parsec2",
          "signature": "String -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#unexpected",
          "type": "function"
        },
        "index": {
          "description": "The parser unexpected msg always fails with an unexpected error message msg without consuming any input The parsers fail and unexpected are the three parsers used to generate error messages Of these only is commonly used For an example of the use of unexpected see the definition of Text.Parsec.Combinator.notFollowedBy",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "unexpected",
          "normalized": "String-\u003eGenParser a b c",
          "package": "parsec2",
          "signature": "String-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the user state. Suppose\n that we want to count identifiers in a source, we could use the user\n state as:\n\u003c/p\u003e\u003cpre\u003e  expr  = do{ x \u003c- identifier\n            ; updateState (+1)\n            ; return (Id x)\n            }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "updateState",
          "package": "parsec2",
          "signature": "(st -\u003e st) -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#updateState",
          "type": "function"
        },
        "index": {
          "description": "updateState applies function to the user state Suppose that we want to count identifiers in source we could use the user state as expr do identifier updateState return Id",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "updateState",
          "normalized": "(a-\u003ea)-\u003eGenParser b a()",
          "package": "parsec2",
          "partial": "State",
          "signature": "(st-\u003est)-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Prim.html#v:updateState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module to parse lexical elements (tokens).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "Token",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Token.html",
          "type": "module"
        },
        "index": {
          "description": "helper module to parse lexical elements tokens",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "Token",
          "package": "parsec2",
          "partial": "Token",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLanguageDef\u003c/code\u003e type is a record that contains all parameterizable\n features of the \u003ccode\u003eText.ParserCombinators.Parsec.Token\u003c/code\u003e module. The module\n \u003ccode\u003eText.ParserCombinators.Parsec.Language\u003c/code\u003e contains some default definitions.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#LanguageDef",
          "type": "data"
        },
        "index": {
          "description": "The LanguageDef type is record that contains all parameterizable features of the Text.ParserCombinators.Parsec.Token module The module Text.ParserCombinators.Parsec.Language contains some default definitions",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "LanguageDef",
          "package": "parsec2",
          "partial": "Language Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#t:LanguageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the record that holds lexical parsers.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "data"
        },
        "index": {
          "description": "The type of the record that holds lexical parsers",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec2",
          "partial": "Token Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#t:TokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec2",
          "signature": "TokenParser",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "TokenParser",
          "package": "parsec2",
          "partial": "Token Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:TokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003eangles p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in angle brackets ('\u003c'\n and '\u003e'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "angles",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser angles parses enclosed in angle brackets and returning the value of",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "angles",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ebraces p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in braces ('{' and\n '}'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "braces",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser braces parses enclosed in braces and returning the value of",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "braces",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ebrackets p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in brackets ('['\n and ']'), returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "brackets",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser brackets parses enclosed in brackets and returning the value of",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "brackets",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a single literal character. Returns the\n literal character value. This parsers deals correctly with escape\n sequences. The literal character is parsed according to the grammar\n rules defined in the Haskell report (which matches most programming\n languages quite closely).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "charLiteral",
          "package": "parsec2",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses single literal character Returns the literal character value This parsers deals correctly with escape sequences The literal character is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "charLiteral",
          "package": "parsec2",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecolon\u003c/code\u003e parses the character ':' and skips any\n trailing white space. Returns the string \":\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "colon",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser colon parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "colon",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecomma\u003c/code\u003e parses the character ',' and skips any\n trailing white space. Returns the string \",\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "comma",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser comma parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "comma",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "commaSep",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser commaSep parses zero or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "commaSep",
          "normalized": "a b CharParser c d-\u003eCharParser c[d]",
          "package": "parsec2",
          "partial": "Sep",
          "signature": "forall a. CharParser st a-\u003eCharParser st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003ecommaSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of\n \u003ccode\u003ep\u003c/code\u003e separated by \u003ccode\u003e\u003ca\u003ecomma\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "commaSep1",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser commaSep1 parses one or more occurrences of separated by comma Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "commaSep1",
          "normalized": "a b CharParser c d-\u003eCharParser c[d]",
          "package": "parsec2",
          "partial": "Sep",
          "signature": "forall a. CharParser st a-\u003eCharParser st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:commaSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the decimal system. Returns the\n value of the number.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "decimal",
          "package": "parsec2",
          "signature": "CharParser st Integer",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the decimal system Returns the value of the number",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "decimal",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003edot\u003c/code\u003e parses the character '.' and skips any\n trailing white space. Returns the string \".\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "dot",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser dot parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "dot",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a floating point value. Returns the value\n of the number. The number is parsed according to the grammar rules\n defined in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "float",
          "package": "parsec2",
          "signature": "CharParser st Double",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses floating point value Returns the value of the number The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "float",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the hexadecimal system. The number\n should be prefixed with \"0x\" or \"0X\". Returns the value of the\n number.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "hexadecimal",
          "package": "parsec2",
          "signature": "CharParser st Integer",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the hexadecimal system The number should be prefixed with or Returns the value of the number",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "hexadecimal",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a legal identifier. Returns the identifier\n string. This parser will fail on identifiers that are reserved\n words. Legal identifier (start) characters and reserved words are\n defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eidentifier\u003c/code\u003e is treated as\n a single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "identifier",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses legal identifier Returns the identifier string This parser will fail on identifiers that are reserved words Legal identifier start characters and reserved words are defined in the LanguageDef that is passed to makeTokenParser An identifier is treated as single token using try",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "identifier",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses an integer (a whole number). This parser\n is like \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e except that it can be prefixed with\n sign (i.e. '-' or '+'). Returns the value of the number. The\n number can be specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according\n to the grammar rules in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "integer",
          "package": "parsec2",
          "signature": "CharParser st Integer",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses an integer whole number This parser is like natural except that it can be prefixed with sign i.e or Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "integer",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elexeme p\u003c/code\u003e first applies parser \u003ccode\u003ep\u003c/code\u003e and than the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e\n parser, returning the value of \u003ccode\u003ep\u003c/code\u003e. Every lexical\n token (lexeme) is defined using \u003ccode\u003elexeme\u003c/code\u003e, this way every parse\n starts at a point without white space. Parsers that use \u003ccode\u003elexeme\u003c/code\u003e are\n called \u003cem\u003elexeme\u003c/em\u003e parsers in this document.\n\u003c/p\u003e\u003cp\u003eThe only point where the \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e parser should be\n called explicitly is the start of the main parser in order to skip\n any leading white space.\n\u003c/p\u003e\u003cpre\u003e    mainParser  = do{ whiteSpace\n                     ; ds \u003c- many (lexeme digit)\n                     ; eof\n                     ; return (sum ds)\n                     }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "lexeme",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "lexeme first applies parser and than the whiteSpace parser returning the value of Every lexical token lexeme is defined using lexeme this way every parse starts at point without white space Parsers that use lexeme are called lexeme parsers in this document The only point where the whiteSpace parser should be called explicitly is the start of the main parser in order to skip any leading white space mainParser do whiteSpace ds many lexeme digit eof return sum ds",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "lexeme",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003emakeTokenParser language\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eTokenParser\u003c/a\u003e\u003c/code\u003e\n record that contains lexical parsers that are\n defined using the definitions in the \u003ccode\u003elanguage\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eThe use of this function is quite stylized - one imports the\n appropiate language definition and selects the lexical parsers that\n are needed from the resulting \u003ccode\u003e\u003ca\u003eTokenParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  module Main where\n\n  import Text.ParserCombinators.Parsec\n  import qualified Text.ParserCombinators.Parsec.Token as P\n  import Text.ParserCombinators.Parsec.Language (haskellDef)\n\n  -- The parser\n  ...\n\n  expr  =   parens expr\n        \u003c|\u003e identifier\n        \u003c|\u003e ...\n\n\n  -- The lexer\n  lexer       = P.makeTokenParser haskellDef\n\n  parens      = P.parens lexer\n  braces      = P.braces lexer\n  identifier  = P.identifier lexer\n  reserved    = P.reserved lexer\n  ...\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "makeTokenParser",
          "package": "parsec2",
          "signature": "LanguageDef st -\u003e TokenParser st",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#makeTokenParser",
          "type": "function"
        },
        "index": {
          "description": "The expression makeTokenParser language creates TokenParser record that contains lexical parsers that are defined using the definitions in the language record The use of this function is quite stylized one imports the appropiate language definition and selects the lexical parsers that are needed from the resulting TokenParser module Main where import Text.ParserCombinators.Parsec import qualified Text.ParserCombinators.Parsec.Token as import Text.ParserCombinators.Parsec.Language haskellDef The parser expr parens expr identifier The lexer lexer P.makeTokenParser haskellDef parens P.parens lexer braces P.braces lexer identifier P.identifier lexer reserved P.reserved lexer",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "makeTokenParser",
          "normalized": "LanguageDef a-\u003eTokenParser a",
          "package": "parsec2",
          "partial": "Token Parser",
          "signature": "LanguageDef st-\u003eTokenParser st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:makeTokenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a natural number (a positive whole\n number). Returns the value of the number. The number can be\n specified in \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eoctal\u003c/a\u003e\u003c/code\u003e. The number is parsed according to the grammar\n rules in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "natural",
          "package": "parsec2",
          "signature": "CharParser st Integer",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses natural number positive whole number Returns the value of the number The number can be specified in decimal hexadecimal or octal The number is parsed according to the grammar rules in the Haskell report",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "natural",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses either \u003ccode\u003e\u003ca\u003enatural\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003efloat\u003c/a\u003e\u003c/code\u003e.\n Returns the value of the number. This parsers deals with\n any overlap in the grammar rules for naturals and floats. The number\n is parsed according to the grammar rules defined in the Haskell report.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "naturalOrFloat",
          "package": "parsec2",
          "signature": "CharParser st (Either Integer Double)",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses either natural or float Returns the value of the number This parsers deals with any overlap in the grammar rules for naturals and floats The number is parsed according to the grammar rules defined in the Haskell report",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "naturalOrFloat",
          "package": "parsec2",
          "partial": "Or Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:naturalOrFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a positive whole number in the octal system. The number\n should be prefixed with \"0o\" or \"0O\". Returns the value of the\n number.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "octal",
          "package": "parsec2",
          "signature": "CharParser st Integer",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Parses positive whole number in the octal system The number should be prefixed with or Returns the value of the number",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "octal",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:octal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a legal operator. Returns the name of the\n operator. This parser will fail on any operators that are reserved\n operators. Legal operator (start) characters and reserved operators\n are defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e that is passed to\n \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003eoperator\u003c/code\u003e is treated as a\n single token using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "operator",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses legal operator Returns the name of the operator This parser will fail on any operators that are reserved operators Legal operator start characters and reserved operators are defined in the LanguageDef that is passed to makeTokenParser An operator is treated as single token using try",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "operator",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003eparens p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e enclosed in parenthesis,\n returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "parens",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser parens parses enclosed in parenthesis returning the value of",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "parens",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereserved name\u003c/code\u003e parses \u003ccode\u003esymbol\n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid identifier. A \u003ccode\u003ereserved\u003c/code\u003e word is treated as a single token\n using \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "reserved",
          "package": "parsec2",
          "signature": "String -\u003e CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "The lexeme parser reserved name parses symbol name but it also checks that the name is not prefix of valid identifier reserved word is treated as single token using try",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "reserved",
          "normalized": "String-\u003eCharParser a()",
          "package": "parsec2",
          "signature": "String-\u003eCharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lexeme parser \u003ccode\u003ereservedOp name\u003c/code\u003e parses \u003ccode\u003esymbol\n name\u003c/code\u003e, but it also checks that the \u003ccode\u003ename\u003c/code\u003e is not a prefix of a\n valid operator. A \u003ccode\u003ereservedOp\u003c/code\u003e is treated as a single token using\n \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "reservedOp",
          "package": "parsec2",
          "signature": "String -\u003e CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "The lexeme parser reservedOp name parses symbol name but it also checks that the name is not prefix of valid operator reservedOp is treated as single token using try",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "reservedOp",
          "normalized": "String-\u003eCharParser a()",
          "package": "parsec2",
          "partial": "Op",
          "signature": "String-\u003eCharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:reservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser |semi| parses the character ';' and skips any\n trailing white space. Returns the string \";\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semi",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser semi parses the character and skips any trailing white space Returns the string",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semi",
          "package": "parsec2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep p\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by\n \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semiSep",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser semiSep parses zero or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semiSep",
          "normalized": "a b CharParser c d-\u003eCharParser c[d]",
          "package": "parsec2",
          "partial": "Sep",
          "signature": "forall a. CharParser st a-\u003eCharParser st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:semiSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esemiSep1 p\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e\n separated by \u003ccode\u003e\u003ca\u003esemi\u003c/a\u003e\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semiSep1",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st [a]",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser semiSep1 parses one or more occurrences of separated by semi Returns list of values returned by",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "semiSep1",
          "normalized": "a b CharParser c d-\u003eCharParser c[d]",
          "package": "parsec2",
          "partial": "Sep",
          "signature": "forall a. CharParser st a-\u003eCharParser st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:semiSep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003ebrackets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "squares",
          "package": "parsec2",
          "signature": "forall a.  CharParser st a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "DEPRECATED Use brackets",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "squares",
          "normalized": "a b CharParser c d-\u003eCharParser c d",
          "package": "parsec2",
          "signature": "forall a. CharParser st a-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:squares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lexeme parser parses a literal string. Returns the literal\n string value. This parsers deals correctly with escape sequences and\n gaps. The literal string is parsed according to the grammar rules\n defined in the Haskell report (which matches most programming\n languages quite closely).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "stringLiteral",
          "package": "parsec2",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "This lexeme parser parses literal string Returns the literal string value This parsers deals correctly with escape sequences and gaps The literal string is parsed according to the grammar rules defined in the Haskell report which matches most programming languages quite closely",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "stringLiteral",
          "package": "parsec2",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexeme parser \u003ccode\u003esymbol s\u003c/code\u003e parses \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e and skips\n trailing white space.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "symbol",
          "package": "parsec2",
          "signature": "String -\u003e CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Lexeme parser symbol parses string and skips trailing white space",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "symbol",
          "normalized": "String-\u003eCharParser a String",
          "package": "parsec2",
          "signature": "String-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any white space. White space consists of \u003cem\u003ezero\u003c/em\u003e or more\n occurrences of a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e, a line comment or a block (multi\n line) comment. Block comments may be nested. How comments are\n started and ended is defined in the \u003ccode\u003e\u003ca\u003eLanguageDef\u003c/a\u003e\u003c/code\u003e\n that is passed to \u003ccode\u003e\u003ca\u003emakeTokenParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "whiteSpace",
          "package": "parsec2",
          "signature": "CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Token.html#TokenParser",
          "type": "function"
        },
        "index": {
          "description": "Parses any white space White space consists of zero or more occurrences of space line comment or block multi line comment Block comments may be nested How comments are started and ended is defined in the LanguageDef that is passed to makeTokenParser",
          "hierarchy": "Text ParserCombinators Parsec Token",
          "module": "Text.ParserCombinators.Parsec.Token",
          "name": "whiteSpace",
          "normalized": "CharParser a()",
          "package": "parsec2",
          "partial": "Space",
          "signature": "CharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec-Token.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec, the Fast Monadic Parser combinator library, see\n \u003ca\u003ehttp://www.cs.uu.nl/people/daan/parsec.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInspired by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Graham Hutton and Erik Meijer:\n   Monadic Parser Combinators.\n   Technical report NOTTCS-TR-96-4. \n   Department of Computer Science, University of Nottingham, 1996. \n   \u003ca\u003ehttp://www.cs.nott.ac.uk/~gmh/monparsing.ps\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Andrew Partridge, David Wright: \n   Predictive parser combinators need four values to report errors.\n   Journal of Functional Programming 6(2): 355-364, 1996\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis helper module exports elements from the basic libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec the Fast Monadic Parser combinator library see http www.cs.uu.nl people daan parsec.html Inspired by Graham Hutton and Erik Meijer Monadic Parser Combinators Technical report NOTTCS-TR-96-4 Department of Computer Science University of Nottingham http www.cs.nott.ac.uk gmh monparsing.ps Andrew Partridge David Wright Predictive parser combinators need four values to report errors Journal of Functional Programming This helper module exports elements from the basic libraries",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec2",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec2",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec2",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003eText.Parsec.Prim.parse\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function Text.Parsec.Prim.parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec2",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec2",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec2",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec2",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec2/docs/Text-ParserCombinators-Parsec.html#t:SourcePos"
      }
    }
  ]
]