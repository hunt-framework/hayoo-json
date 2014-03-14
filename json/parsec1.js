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
        "word": "parsec1"
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
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used character parsers",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "Char",
          "package": "parsec1",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#CharParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "CharParser",
          "package": "parsec1",
          "partial": "Char Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#t:CharParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter or digit (a character between '0' and '9').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "alphaNum",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#alphaNum",
          "type": "function"
        },
        "index": {
          "description": "Parses letter or digit character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "alphaNum",
          "package": "parsec1",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:alphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "anyChar",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#anyChar",
          "type": "function"
        },
        "index": {
          "description": "This parser succeeds for any character Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "anyChar",
          "package": "parsec1",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed\n character (i.e. \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  semiColon  = char ';'\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "char",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "Char-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a digit. Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "digit",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parses digit Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "digit",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n 'f' or 'A' and 'F'). Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "hexDigit",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#hexDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "hexDigit",
          "package": "parsec1",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:hexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter (an upper case or lower case character). Returns the\n parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "letter",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parses letter an upper case or lower case character Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "letter",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a lower case character (a character between 'a' and 'z').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "lower",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Parses lower case character character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "lower",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a newline character ('\\n'). Returns a newline character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "newline",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Parses newline character Returns newline character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "newline",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n parsed character.\n\u003c/p\u003e\u003cpre\u003e  consonant = noneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "noneOf",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Of",
          "signature": "[Char]-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an octal digit (a character between '0' and '7'). Returns\n the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "octDigit",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#octDigit",
          "type": "function"
        },
        "index": {
          "description": "Parses an octal digit character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "octDigit",
          "package": "parsec1",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:octDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied\n list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character. See also\n \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   vowel  = oneOf \"aeiou\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "oneOf",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Of",
          "signature": "[Char]-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy f\u003c/code\u003e succeeds for any character for which the\n supplied function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n actually parsed.\n\u003c/p\u003e\u003cpre\u003e  digit     = satisfy isDigit\n  oneOf cs  = satisfy (\\c -\u003e c `elem` cs)\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "satisfy",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "(Char-\u003eBool)-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "space",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "space",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips \u003cem\u003ezero\u003c/em\u003e or more white space characters. See also \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "spaces",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "CharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  divOrMod    =   string \"div\"\n              \u003c|\u003e string \"mod\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "string",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "String-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a tab character ('\\t'). Returns a tab character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "tab",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#tab",
          "type": "function"
        },
        "index": {
          "description": "Parses tab character Returns tab character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "tab",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an upper case letter (a character between 'A' and 'Z').\n Returns the parsed character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "upper",
          "package": "parsec1",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Char.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Parses an upper case letter character between and Returns the parsed character",
          "hierarchy": "Text ParserCombinators Parsec Char",
          "module": "Text.ParserCombinators.Parsec.Char",
          "name": "upper",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Char.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used generic combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used generic combinators",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "Combinator",
          "package": "parsec1",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eanyToken\u003c/code\u003e accepts any kind of token. It is for example\n used to implement \u003ccode\u003e\u003ca\u003eeof\u003c/a\u003e\u003c/code\u003e. Returns the accepted token.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "anyToken",
          "package": "parsec1",
          "signature": "GenParser tok st tok",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#anyToken",
          "type": "function"
        },
        "index": {
          "description": "The parser anyToken accepts any kind of token It is for example used to implement eof Returns the accepted token",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "anyToken",
          "package": "parsec1",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eclose\u003c/code\u003e.\n Returns the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  braces  = between (symbol \"{\") (symbol \"}\")\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "between",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st open-\u003eGenParser tok st close-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e. Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are zero occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003ea-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eleft\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. . This parser can for example be used to eliminate left\n recursion which typically occurs in expression grammars.\n\u003c/p\u003e\u003cpre\u003e  expr    = term   `chainl1` addop\n  term    = factor `chainl1` mulop\n  factor  = parens expr \u003c|\u003e integer\n\n  mulop   =   do{ symbol \"*\"; return (*)   }\n          \u003c|\u003e do{ symbol \"/\"; return (div) }\n\n  addop   =   do{ symbol \"+\"; return (+) }\n          \u003c|\u003e do{ symbol \"-\"; return (-) }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainl1",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parser \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, the value \u003ccode\u003ex\u003c/code\u003e is\n returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003ea-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr1 p op x\u003c/code\u003e parser \u003cem\u003eone\u003c/em\u003e or more occurrences of |p|,\n separated by \u003ccode\u003eop\u003c/code\u003e Returns a value obtained by a \u003cem\u003eright\u003c/em\u003e associative\n application of all functions returned by \u003ccode\u003eop\u003c/code\u003e to the values returned\n by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "chainr1",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st(a-\u003ea-\u003ea)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "choice",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "[GenParser tok st a]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003en\u003c/code\u003e is smaller or\n equal to zero, the parser equals to \u003ccode\u003ereturn []\u003c/code\u003e. Returns a list of\n \u003ccode\u003en\u003c/code\u003e values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "count",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "Int-\u003eGenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e   cStatements  = cStatement `endBy` semi\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, seperated\n and ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "endBy1",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser only succeeds at the end of the input. This is not a\n primitive parser but it is defined using \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  eof  = notFollowedBy anyToken \u003c?\u003e \"end of input\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "eof",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e parses \u003ccode\u003ep\u003c/code\u003e without consuming any input.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Combinator\",\"Text.ParserCombinators.Parsec.Prim\"]",
          "name": "lookAhead",
          "package": "parsec1",
          "signature": "GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#lookAhead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:lookAhead\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:lookAhead\"]"
        },
        "index": {
          "description": "lookAhead parses without consuming any input",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "lookAhead",
          "normalized": "GenParser a b c-\u003eGenParser a b c",
          "package": "parsec1",
          "partial": "Ahead",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "many1",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n This parser can be used to scan comments:\n\u003c/p\u003e\u003cpre\u003e  simpleComment   = do{ string \"\u003c!--\"\n                      ; manyTill anyChar (try (string \"--\u003e\"))\n                      }\n\u003c/pre\u003e\u003cp\u003eNote the overlapping parsers \u003ccode\u003eanyChar\u003c/code\u003e and \u003ccode\u003estring \"\u003c!--\"\u003c/code\u003e, and\n    therefore the use of the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "manyTill",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Till",
          "signature": "GenParser tok st a-\u003eGenParser tok st end-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e only succeeds when parser \u003ccode\u003ep\u003c/code\u003e fails. This parser\n does not consume any input. This parser can be used to implement the\n 'longest match' rule. For example, when recognizing keywords (for\n example \u003ccode\u003elet\u003c/code\u003e), we want to make sure that a keyword is not followed\n by a legal identifier character, in which case the keyword is\n actually an identifier (for example \u003ccode\u003elets\u003c/code\u003e). We can program this\n behaviour as follows:\n\u003c/p\u003e\u003cpre\u003e  keywordLet  = try (do{ string \"let\"\n                       ; notFollowedBy alphaNum\n                       })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "notFollowedBy",
          "package": "parsec1",
          "signature": "GenParser tok st a -\u003e GenParser tok st ()",
          "source": "src/Text-ParserCombinators-Parsec-Combinator.html#notFollowedBy",
          "type": "function"
        },
        "index": {
          "description": "notFollowedBy only succeeds when parser fails This parser does not consume any input This parser can be used to implement the longest match rule For example when recognizing keywords for example let we want to make sure that keyword is not followed by legal identifier character in which case the keyword is actually an identifier for example lets We can program this behaviour as follows keywordLet try do string let notFollowedBy alphaNum",
          "hierarchy": "Text ParserCombinators Parsec Combinator",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "notFollowedBy",
          "normalized": "GenParser a b c-\u003eGenParser a b()",
          "package": "parsec1",
          "partial": "Followed By",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  priority  = option 0 (do{ d \u003c- digit\n                          ; return (digitToInt d)\n                          })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "option",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptionMaybe p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, otherwise it returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optionMaybe",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Maybe",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptional p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e.  It will parse \u003ccode\u003ep\u003c/code\u003e or nothing.\n It only fails if \u003ccode\u003ep\u003c/code\u003e fails after consuming input. It discards the result\n of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "optional",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepBy1",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy p sep\u003c/code\u003e parses \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e, ie. haskell style\n statements. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  haskellStatements  = haskellStatement `sepEndBy` semi\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "End By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepEndBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e,\n separated and optionally ended by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "sepEndBy1",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "End By",
          "signature": "GenParser tok st a-\u003eGenParser tok st sep-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany1 p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Combinator",
          "name": "skipMany1",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Many",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Combinator.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse errors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Parse errors",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Error",
          "package": "parsec1",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis abstract data type represents parse error messages. There are\n four kinds of messages:\n\u003c/p\u003e\u003cpre\u003e  data Message = SysUnExpect String\n               | UnExpect String\n               | Expect String\n               | Message String\n\u003c/pre\u003e\u003cp\u003eThe fine distinction between different kinds of parse errors allows\n the system to generate quite good error messages for the user. It\n also allows error messages that are formatted in different\n languages. Each kind of message is generated by different combinators:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eSysUnExpect\u003c/a\u003e\u003c/code\u003e message is automatically generated by the\n       \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e combinator. The argument is the\n       unexpected input.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eUnExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003eunexpected\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the\n       unexpected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eExpect\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument describes the expected item.\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e message is generated by the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n       combinator. The argument is some general parser message.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "data"
        },
        "index": {
          "description": "This abstract data type represents parse error messages There are four kinds of messages data Message SysUnExpect String UnExpect String Expect String Message String The fine distinction between different kinds of parse errors allows the system to generate quite good error messages for the user It also allows error messages that are formatted in different languages Each kind of message is generated by different combinators SysUnExpect message is automatically generated by the satisfy combinator The argument is the unexpected input UnExpect message is generated by the unexpected combinator The argument describes the unexpected item Expect message is generated by the combinator The argument describes the expected item Message message is generated by the fail combinator The argument is some general parser message",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec1",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "ParseError",
          "package": "parsec1",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Expect",
          "package": "parsec1",
          "signature": "Expect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Expect",
          "package": "parsec1",
          "partial": "Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:Expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec1",
          "signature": "Message !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "Message",
          "package": "parsec1",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "SysUnExpect",
          "package": "parsec1",
          "signature": "SysUnExpect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "SysUnExpect",
          "package": "parsec1",
          "partial": "Sys Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:SysUnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "UnExpect",
          "package": "parsec1",
          "signature": "UnExpect !String",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "UnExpect",
          "package": "parsec1",
          "partial": "Un Expect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:UnExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "addErrorMessage",
          "package": "parsec1",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#addErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "addErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec1",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:addErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorIsUnknown",
          "package": "parsec1",
          "signature": "ParseError -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#errorIsUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorIsUnknown",
          "normalized": "ParseError-\u003eBool",
          "package": "parsec1",
          "partial": "Is Unknown",
          "signature": "ParseError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:errorIsUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the list of error messages from the parse error\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorMessages",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Messages",
          "signature": "ParseError-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:errorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the source position from the parse error\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Error\",\"Text.ParserCombinators.Parsec\"]",
          "name": "errorPos",
          "package": "parsec1",
          "signature": "ParseError -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#errorPos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:errorPos\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:errorPos\"]"
        },
        "index": {
          "description": "Extracts the source position from the parse error",
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "errorPos",
          "normalized": "ParseError-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Pos",
          "signature": "ParseError-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:errorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "mergeError",
          "package": "parsec1",
          "signature": "ParseError -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#mergeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "mergeError",
          "normalized": "ParseError-\u003eParseError-\u003eParseError",
          "package": "parsec1",
          "partial": "Error",
          "signature": "ParseError-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:mergeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "package": "parsec1",
          "signature": "Message -\u003e Message -\u003e Ordering",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageCompare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageCompare",
          "normalized": "Message-\u003eMessage-\u003eOrdering",
          "package": "parsec1",
          "partial": "Compare",
          "signature": "Message-\u003eMessage-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:messageCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "package": "parsec1",
          "signature": "Message -\u003e Message -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#messageEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageEq",
          "normalized": "Message-\u003eMessage-\u003eBool",
          "package": "parsec1",
          "partial": "Eq",
          "signature": "Message-\u003eMessage-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:messageEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the message string from an error message\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "messageString",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "String",
          "signature": "Message-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:messageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorMessage",
          "package": "parsec1",
          "signature": "Message -\u003e SourcePos -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#newErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorMessage",
          "normalized": "Message-\u003eSourcePos-\u003eParseError",
          "package": "parsec1",
          "partial": "Error Message",
          "signature": "Message-\u003eSourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorUnknown",
          "package": "parsec1",
          "signature": "SourcePos -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#newErrorUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "newErrorUnknown",
          "normalized": "SourcePos-\u003eParseError",
          "package": "parsec1",
          "partial": "Error Unknown",
          "signature": "SourcePos-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:newErrorUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorMessage",
          "package": "parsec1",
          "signature": "Message -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#setErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorMessage",
          "normalized": "Message-\u003eParseError-\u003eParseError",
          "package": "parsec1",
          "partial": "Error Message",
          "signature": "Message-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorPos",
          "package": "parsec1",
          "signature": "SourcePos -\u003e ParseError -\u003e ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#setErrorPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Error",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "setErrorPos",
          "normalized": "SourcePos-\u003eParseError-\u003eParseError",
          "package": "parsec1",
          "partial": "Error Pos",
          "signature": "SourcePos-\u003eParseError-\u003eParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:setErrorPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage independent show function\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Error",
          "name": "showErrorMessages",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Error Messages",
          "signature": "String-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[Message]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Error.html#v:showErrorMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTextual source positions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html",
          "type": "module"
        },
        "index": {
          "description": "Textual source positions",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Pos",
          "package": "parsec1",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Column",
          "package": "parsec1",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "Line",
          "package": "parsec1",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourceName",
          "package": "parsec1",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "SourcePos",
          "package": "parsec1",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the column number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceColumn",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#incSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceColumn\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:incSourceColumn\"]"
        },
        "index": {
          "description": "Increments the column number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "incSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements the line number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "incSourceLine",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#incSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceLine\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:incSourceLine\"]"
        },
        "index": {
          "description": "Increments the line number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "incSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:incSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n and line number and column number set to 1, the upper left.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "initialPos",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Pos",
          "signature": "SourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:initialPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e with the given source name,\n line number and column number.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "newPos",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Pos",
          "signature": "SourceName-\u003eLine-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:newPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the column number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceColumn",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Column -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceColumn\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:setSourceColumn\"]"
        },
        "index": {
          "description": "Set the column number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceColumn",
          "normalized": "SourcePos-\u003eColumn-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Source Column",
          "signature": "SourcePos-\u003eColumn-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line number of a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceLine",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Line -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceLine\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:setSourceLine\"]"
        },
        "index": {
          "description": "Set the line number of source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceLine",
          "normalized": "SourcePos-\u003eLine-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Source Line",
          "signature": "SourcePos-\u003eLine-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the name of the source.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "setSourceName",
          "package": "parsec1",
          "signature": "SourcePos -\u003e SourceName -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#setSourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceName\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:setSourceName\"]"
        },
        "index": {
          "description": "Set the name of the source",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "setSourceName",
          "normalized": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Source Name",
          "signature": "SourcePos-\u003eSourceName-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:setSourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the column number from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceColumn",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Column",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceColumn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceColumn\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:sourceColumn\"]"
        },
        "index": {
          "description": "Extracts the column number from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceColumn",
          "normalized": "SourcePos-\u003eColumn",
          "package": "parsec1",
          "partial": "Column",
          "signature": "SourcePos-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the line number from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceLine",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Line",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceLine\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:sourceLine\"]"
        },
        "index": {
          "description": "Extracts the line number from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceLine",
          "normalized": "SourcePos-\u003eLine",
          "package": "parsec1",
          "partial": "Line",
          "signature": "SourcePos-\u003eLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the name of the source from a source position.\n\u003c/p\u003e",
          "module": "[\"Text.ParserCombinators.Parsec.Pos\",\"Text.ParserCombinators.Parsec\"]",
          "name": "sourceName",
          "package": "parsec1",
          "signature": "SourcePos -\u003e SourceName",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#sourceName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceName\",\"http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#v:sourceName\"]"
        },
        "index": {
          "description": "Extracts the name of the source from source position",
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "sourceName",
          "normalized": "SourcePos-\u003eSourceName",
          "package": "parsec1",
          "partial": "Name",
          "signature": "SourcePos-\u003eSourceName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:sourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosChar",
          "package": "parsec1",
          "signature": "SourcePos -\u003e Char -\u003e SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#updatePosChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Pos",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosChar",
          "normalized": "SourcePos-\u003eChar-\u003eSourcePos",
          "package": "parsec1",
          "partial": "Pos Char",
          "signature": "SourcePos-\u003eChar-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eupdatePosString pos s\u003c/code\u003e updates the source position\n \u003ccode\u003epos\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003eupdatePosChar\u003c/a\u003e\u003c/code\u003e on every character in \u003ccode\u003es\u003c/code\u003e, ie.\n \u003ccode\u003efoldl updatePosChar pos string\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Pos",
          "name": "updatePosString",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Pos String",
          "signature": "SourcePos-\u003eString-\u003eSourcePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Pos.html#v:updatePosString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primitive parser combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "The primitive parser combinators",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Prim",
          "package": "parsec1",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#GenParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "GenParser",
          "package": "parsec1",
          "partial": "Gen Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#t:GenParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "Parser",
          "package": "parsec1",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec1",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis combinator implements choice. The parser \u003ccode\u003ep \u003c|\u003e q\u003c/code\u003e first\n applies \u003ccode\u003ep\u003c/code\u003e. If it succeeds, the value of \u003ccode\u003ep\u003c/code\u003e is returned. If \u003ccode\u003ep\u003c/code\u003e\n fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, parser \u003ccode\u003eq\u003c/code\u003e is tried. This\n combinator is defined equal to the \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n class and the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) member of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parser is called \u003cem\u003epredictive\u003c/em\u003e since \u003ccode\u003eq\u003c/code\u003e is only tried when\n parser \u003ccode\u003ep\u003c/code\u003e didn't consume any input (i.e.. the look ahead is 1).\n This non-backtracking behaviour allows for both an efficient\n implementation of the parser combinators and the generation of good\n error messages.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c|\u003e)",
          "package": "parsec1",
          "signature": "GenParser tok st a -\u003e GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "This combinator implements choice The parser first applies If it succeeds the value of is returned If fails without consuming any input parser is tried This combinator is defined equal to the mplus member of the MonadPlus class and the member of Alternative The parser is called predictive since is only tried when parser didn consume any input i.e the look ahead is This non-backtracking behaviour allows for both an efficient implementation of the parser combinators and the generation of good error messages",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "GenParser a b c-\u003eGenParser a b c-\u003eGenParser a b c",
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003ep \u003ca\u003e?\u003c/a\u003e msg\u003c/code\u003e behaves as parser \u003ccode\u003ep\u003c/code\u003e, but whenever the\n parser \u003ccode\u003ep\u003c/code\u003e fails \u003cem\u003ewithout consuming any input\u003c/em\u003e, it replaces expect\n error messages with the expect error message \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is normally used at the end of a set alternatives where we want\n to return an error message in terms of a higher level construct\n rather than returning all possible characters. For example, if the\n \u003ccode\u003eexpr\u003c/code\u003e parser from the \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e example would fail, the error\n message is: '...: expecting expression'. Without the \u003ccode\u003e(\u003c?\u003e)\u003c/code\u003e\n combinator, the message would be like '...: expecting \"let\" or\n letter', which is less friendly.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "(\u003c?\u003e)",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eString-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec1",
          "signature": "State",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "State",
          "package": "parsec1",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current input\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getInput",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Input",
          "signature": "GenParser tok st[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the full parser state as a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getParserState",
          "package": "parsec1",
          "signature": "GenParser tok st (State tok st)",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getParserState",
          "type": "function"
        },
        "index": {
          "description": "Returns the full parser state as State record",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getParserState",
          "package": "parsec1",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:getParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current source position. See also \u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getPosition",
          "package": "parsec1",
          "signature": "GenParser tok st SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getPosition",
          "type": "function"
        },
        "index": {
          "description": "Returns the current source position See also SourcePos",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getPosition",
          "package": "parsec1",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:getPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current user state.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getState",
          "package": "parsec1",
          "signature": "GenParser tok st st",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Returns the current user state",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "getState",
          "package": "parsec1",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "label",
          "package": "parsec1",
          "signature": "GenParser tok st a -\u003e String -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "label",
          "normalized": "GenParser a b c-\u003eString-\u003eGenParser a b c",
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eString-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "labels",
          "package": "parsec1",
          "signature": "GenParser tok st a -\u003e [String] -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#labels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "labels",
          "normalized": "GenParser a b c-\u003e[String]-\u003eGenParser a b c",
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003e[String]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times. Returns a\n    list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  identifier  = do{ c  \u003c- letter\n                  ; cs \u003c- many (alphaNum \u003c|\u003e char '_')\n                  ; return (c:cs)\n                  }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "many",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparse p filePath input\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e without user\n state. The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the\n empty string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e)\n or a value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  main    = case (parse numbers \"\" \"11, 2, 43\") of\n             Left err  -\u003e print err\n             Right xs  -\u003e print (sum xs)\n\n  numbers = commaSep integer\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parse",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok()a-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseFromFile",
          "package": "parsec1",
          "signature": "Parser a -\u003e SourceName -\u003e IO (Either ParseError a)",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eSourceName-\u003eIO(Either ParseError a)",
          "package": "parsec1",
          "partial": "From File",
          "signature": "Parser a-\u003eSourceName-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003eparseTest p input\u003c/code\u003e applies a parser \u003ccode\u003ep\u003c/code\u003e against\n input \u003ccode\u003einput\u003c/code\u003e and prints the result to stdout. Used for testing\n parsers.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "parseTest",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Test",
          "signature": "GenParser tok()a-\u003e[tok]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec1",
          "signature": "GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#pzero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "pzero",
          "package": "parsec1",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:pzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a parser. \u003ccode\u003erunParser p state filePath\n input\u003c/code\u003e runs parser \u003ccode\u003ep\u003c/code\u003e on the input list of tokens \u003ccode\u003einput\u003c/code\u003e,\n obtained from source \u003ccode\u003efilePath\u003c/code\u003e with the initial user state \u003ccode\u003est\u003c/code\u003e.\n The \u003ccode\u003efilePath\u003c/code\u003e is only used in error messages and may be the empty\n string. Returns either a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e) or a\n value of type \u003ccode\u003ea\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e  parseFromFile p fname\n    = do{ input \u003c- readFile fname\n        ; return (runParser p () fname input)\n        }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "runParser",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Parser",
          "signature": "GenParser tok st a-\u003est-\u003eSourceName-\u003e[tok]-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetInput input\u003c/code\u003e continues parsing with \u003ccode\u003einput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setInput",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Input",
          "signature": "[tok]-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:setInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetParserState st\u003c/code\u003e set the full parser state to \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setParserState",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Parser State",
          "signature": "State tok st-\u003eGenParser tok st(State tok st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:setParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetPosition pos\u003c/code\u003e sets the current source position to \u003ccode\u003epos\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setPosition",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Position",
          "signature": "SourcePos-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:setPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetState st\u003c/code\u003e set the user state to \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "setState",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "State",
          "signature": "st-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times, skipping\n its result.\n\u003c/p\u003e\u003cpre\u003e  spaces  = skipMany space\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "skipMany",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Many",
          "signature": "GenParser tok st a-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateInput",
          "package": "parsec1",
          "signature": "[tok]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateInput",
          "normalized": "[a]",
          "package": "parsec1",
          "partial": "Input",
          "signature": "[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "statePos",
          "package": "parsec1",
          "signature": "SourcePos",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "statePos",
          "package": "parsec1",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:statePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateUser",
          "package": "parsec1",
          "signature": "st",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "stateUser",
          "package": "parsec1",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:stateUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok posFromTok testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n source position of the \u003ccode\u003et\u003c/code\u003e should be returned by \u003ccode\u003eposFromTok t\u003c/code\u003e and\n the token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis combinator is expressed in terms of \u003ccode\u003e\u003ca\u003etokenPrim\u003c/a\u003e\u003c/code\u003e.\n It is used to accept user defined token streams. For example,\n suppose that we have a stream of basic tokens tupled with source\n positions. We can than define a parser that accepts single tokens as:\n\u003c/p\u003e\u003cpre\u003e  mytoken x\n    = token showTok posFromTok testTok\n    where\n      showTok (pos,t)     = show t\n      posFromTok (pos,t)  = pos\n      testTok (pos,t)     = if x == t then Just t else Nothing\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "token",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "(tok-\u003eString)-\u003e(tok-\u003eSourcePos)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etoken showTok nextPos testTok\u003c/code\u003e accepts a token \u003ccode\u003et\u003c/code\u003e\n with result \u003ccode\u003ex\u003c/code\u003e when the function \u003ccode\u003etestTok t\u003c/code\u003e returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e. The\n token can be shown using \u003ccode\u003eshowTok t\u003c/code\u003e. The position of the \u003cem\u003enext\u003c/em\u003e\n token should be returned when \u003ccode\u003enextPos\u003c/code\u003e is called with the current\n source position \u003ccode\u003epos\u003c/code\u003e, the current token \u003ccode\u003et\u003c/code\u003e and the rest of the\n tokens \u003ccode\u003etoks\u003c/code\u003e, \u003ccode\u003enextPos pos t toks\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the most primitive combinator for accepting tokens. For\n example, the \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e parser could be implemented as:\n\u003c/p\u003e\u003cpre\u003e  char c\n    = tokenPrim showChar nextPos testChar\n    where\n      showChar x        = \"'\" ++ x ++ \"'\"\n      testChar x        = if x == c then Just x else Nothing\n      nextPos pos x xs  = updatePosChar pos x\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrim",
          "package": "parsec1",
          "signature": "(tok -\u003e String) -\u003e (SourcePos -\u003e tok -\u003e [tok] -\u003e SourcePos) -\u003e (tok -\u003e Maybe a) -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#tokenPrim",
          "type": "function"
        },
        "index": {
          "description": "The parser token showTok nextPos testTok accepts token with result when the function testTok returns Just The token can be shown using showTok The position of the next token should be returned when nextPos is called with the current source position pos the current token and the rest of the tokens toks nextPos pos toks This is the most primitive combinator for accepting tokens For example the char parser could be implemented as char tokenPrim showChar nextPos testChar where showChar testChar if then Just else Nothing nextPos pos xs updatePosChar pos",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrim",
          "normalized": "(a-\u003eString)-\u003e(SourcePos-\u003ea-\u003e[a]-\u003eSourcePos)-\u003e(a-\u003eMaybe b)-\u003eGenParser a c b",
          "package": "parsec1",
          "partial": "Prim",
          "signature": "(tok-\u003eString)-\u003e(SourcePos-\u003etok-\u003e[tok]-\u003eSourcePos)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive token recogniser. The expression \u003ccode\u003etokenPrimEx show nextpos mbnextstate test\u003c/code\u003e,\n recognises tokens when \u003ccode\u003etest\u003c/code\u003e returns \u003ccode\u003eJust x\u003c/code\u003e (and returns the value \u003ccode\u003ex\u003c/code\u003e). Tokens are shown in\n error messages using \u003ccode\u003eshow\u003c/code\u003e. The position is calculated using \u003ccode\u003enextpos\u003c/code\u003e, and finally, \u003ccode\u003embnextstate\u003c/code\u003e,\n can hold a function that updates the user state on every token recognised (nice to count tokens :-).\n The function is packed into a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type for performance reasons.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokenPrimEx",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "Prim Ex",
          "signature": "(tok-\u003eString)-\u003e(SourcePos-\u003etok-\u003e[tok]-\u003eSourcePos)-\u003eMaybe(SourcePos-\u003etok-\u003e[tok]-\u003est-\u003est)-\u003e(tok-\u003eMaybe a)-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokenPrimEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokens",
          "package": "parsec1",
          "signature": "([tok] -\u003e String) -\u003e (SourcePos -\u003e [tok] -\u003e SourcePos) -\u003e [tok] -\u003e GenParser tok st [tok]",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#tokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "tokens",
          "normalized": "([a]-\u003eString)-\u003e(SourcePos-\u003e[a]-\u003eSourcePos)-\u003e[a]-\u003eGenParser a b[a]",
          "package": "parsec1",
          "signature": "([tok]-\u003eString)-\u003e(SourcePos-\u003e[tok]-\u003eSourcePos)-\u003e[tok]-\u003eGenParser tok st[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003etry p\u003c/code\u003e behaves like parser \u003ccode\u003ep\u003c/code\u003e, except that it\n pretends that it hasn't consumed any input when an error occurs.\n\u003c/p\u003e\u003cp\u003eThis combinator is used whenever arbitrary look ahead is needed.\n Since it pretends that it hasn't consumed any input when \u003ccode\u003ep\u003c/code\u003e fails,\n the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator will try its second alternative even when the\n first parser failed while consuming input.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003etry\u003c/code\u003e combinator can for example be used to distinguish\n identifiers and reserved words. Both reserved words and identifiers\n are a sequence of letters. Whenever we expect a certain reserved\n word where we can also expect an identifier we have to use the \u003ccode\u003etry\u003c/code\u003e\n combinator. Suppose we write:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ string \"let\"; ... }\n  identifier  = many1 letter\n\u003c/pre\u003e\u003cp\u003eIf the user writes \"lexical\", the parser fails with: \u003ccode\u003eunexpected\n 'x', expecting 't' in \"let\"\u003c/code\u003e. Indeed, since the (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) combinator\n only tries alternatives when the first alternative hasn't consumed\n input, the \u003ccode\u003eidentifier\u003c/code\u003e parser is never tried (because the prefix\n \"le\" of the \u003ccode\u003estring \"let\"\u003c/code\u003e parser is already consumed). The\n right behaviour can be obtained by adding the \u003ccode\u003etry\u003c/code\u003e combinator:\n\u003c/p\u003e\u003cpre\u003e  expr        = letExpr \u003c|\u003e identifier \u003c?\u003e \"expression\"\n\n  letExpr     = do{ try (string \"let\"); ... }\n  identifier  = many1 letter\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "try",
          "package": "parsec1",
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
          "package": "parsec1",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eunexpected msg\u003c/code\u003e always fails with an unexpected error\n message \u003ccode\u003emsg\u003c/code\u003e without consuming any input.\n\u003c/p\u003e\u003cp\u003eThe parsers \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) and \u003ccode\u003eunexpected\u003c/code\u003e are the three parsers\n used to generate error messages. Of these, only (\u003ccode\u003e\u003ca\u003e\u003c?\u003e\u003c/a\u003e\u003c/code\u003e) is commonly\n used. For an example of the use of \u003ccode\u003eunexpected\u003c/code\u003e, see the definition\n of \u003ccode\u003e\u003ca\u003enotFollowedBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "unexpected",
          "package": "parsec1",
          "signature": "String -\u003e GenParser tok st a",
          "source": "src/Text-ParserCombinators-Parsec-Prim.html#unexpected",
          "type": "function"
        },
        "index": {
          "description": "The parser unexpected msg always fails with an unexpected error message msg without consuming any input The parsers fail and unexpected are the three parsers used to generate error messages Of these only is commonly used For an example of the use of unexpected see the definition of notFollowedBy",
          "hierarchy": "Text ParserCombinators Parsec Prim",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "unexpected",
          "normalized": "String-\u003eGenParser a b c",
          "package": "parsec1",
          "signature": "String-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupdateState f\u003c/code\u003e applies function \u003ccode\u003ef\u003c/code\u003e to the user state. Suppose\n that we want to count identifiers in a source, we could use the user\n state as:\n\u003c/p\u003e\u003cpre\u003e  expr  = do{ x \u003c- identifier\n            ; updateState (+1)\n            ; return (Id x)\n            }\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Prim",
          "name": "updateState",
          "package": "parsec1",
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
          "package": "parsec1",
          "partial": "State",
          "signature": "(st-\u003est)-\u003eGenParser tok st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec-Prim.html#v:updateState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsec, the Fast Monadic Parser combinator library, see\n \u003ca\u003ehttp://www.cs.uu.nl/people/daan/parsec.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInspired by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Graham Hutton and Erik Meijer:\n   Monadic Parser Combinators.\n   Technical report NOTTCS-TR-96-4. \n   Department of Computer Science, University of Nottingham, 1996. \n   \u003ca\u003ehttp://www.cs.nott.ac.uk/~gmh/monparsing.ps\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Andrew Partridge, David Wright: \n   Predictive parser combinators need four values to report errors.\n   Journal of Functional Programming 6(2): 355-364, 1996\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis helper module exports elements from the basic libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec the Fast Monadic Parser combinator library see http www.cs.uu.nl people daan parsec.html Inspired by Graham Hutton and Erik Meijer Monadic Parser Combinators Technical report NOTTCS-TR-96-4 Department of Computer Science University of Nottingham http www.cs.nott.ac.uk gmh monparsing.ps Andrew Partridge David Wright Predictive parser combinators need four values to report errors Journal of Functional Programming This helper module exports elements from the basic libraries",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Parsec",
          "package": "parsec1",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Column",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Column",
          "package": "parsec1",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "Line",
          "package": "parsec1",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eParseError\u003c/code\u003e represents parse errors. It\n provides the source position (\u003ccode\u003e\u003ca\u003eSourcePos\u003c/a\u003e\u003c/code\u003e) of the error\n and a list of error messages (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eParseError\u003c/code\u003e\n can be returned by the function \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eParseError\u003c/code\u003e is an\n instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Error.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ParseError represents parse errors It provides the source position SourcePos of the error and list of error messages Message ParseError can be returned by the function parse ParseError is an instance of the Show class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "ParseError",
          "package": "parsec1",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourceName",
          "package": "parsec1",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec1",
          "source": "src/Text-ParserCombinators-Parsec-Pos.html#SourcePos",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Text ParserCombinators Parsec",
          "module": "Text.ParserCombinators.Parsec",
          "name": "SourcePos",
          "package": "parsec1",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parsec1/docs/Text-ParserCombinators-Parsec.html#t:SourcePos"
      }
    }
  ]
]