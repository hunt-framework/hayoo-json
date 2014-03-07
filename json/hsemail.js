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
        "word": "hsemail"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2234, \"Augmented BNF for Syntax Specifications:\n   ABNF\", \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2234.html\u003c/a\u003e. The\n   terminal called \u003ccode\u003echar\u003c/code\u003e in the RFC is called \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e\n   here to avoid conflicts with Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "Rfc2234",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parsers for the grammar defined in RFC2234 Augmented BNF for Syntax Specifications ABNF http www.faqs.org rfcs rfc2234.html The terminal called char in the RFC is called character here to avoid conflicts with Parsec char function",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "Rfc2234",
          "package": "hsemail",
          "partial": "Rfc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character of the alphabet.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "alpha",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#alpha",
          "type": "function"
        },
        "index": {
          "description": "Match any character of the alphabet",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "alpha",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \"1\" or \"0\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "bit",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#bit",
          "type": "function"
        },
        "index": {
          "description": "Match either or",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "bit",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003echar\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "caseChar",
          "package": "hsemail",
          "signature": "Char -\u003e CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#caseChar",
          "type": "function"
        },
        "index": {
          "description": "Case-insensitive variant of Parsec char function",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "caseChar",
          "normalized": "Char-\u003eCharParser a Char",
          "package": "hsemail",
          "partial": "Char",
          "signature": "Char-\u003eCharParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:caseChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-insensitive variant of Parsec's \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "caseString",
          "package": "hsemail",
          "signature": "String -\u003e CharParser st ()",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#caseString",
          "type": "function"
        },
        "index": {
          "description": "Case-insensitive variant of Parsec string function",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "caseString",
          "normalized": "String-\u003eCharParser a()",
          "package": "hsemail",
          "partial": "String",
          "signature": "String-\u003eCharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:caseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any 7-bit US-ASCII character except for NUL (ASCII value 0, that is).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "character",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#character",
          "type": "function"
        },
        "index": {
          "description": "Match any bit US-ASCII character except for NUL ASCII value that is",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "character",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the carriage return character \u003ccode\u003e\\r\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "cr",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#cr",
          "type": "function"
        },
        "index": {
          "description": "Match the carriage return character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "cr",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the Internet newline \u003ccode\u003e\\r\\n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "crlf",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#crlf",
          "type": "function"
        },
        "index": {
          "description": "Match the Internet newline",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "crlf",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:crlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII control character. That is\n any character with a decimal value in the range of [0..31,127].\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "ctl",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#ctl",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII control character That is any character with decimal value in the range of",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "ctl",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:ctl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the double quote character \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "dquote",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#dquote",
          "type": "function"
        },
        "index": {
          "description": "Match the double quote character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "dquote",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:dquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any character that is valid in a hexadecimal number;\n ['0'..'9'] and ['A'..'F','a'..'f'] that is.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "hexdig",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#hexdig",
          "type": "function"
        },
        "index": {
          "description": "Match any character that is valid in hexadecimal number and that is",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "hexdig",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:hexdig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the tab (\"\u003ccode\u003e\\t\u003c/code\u003e\") character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "htab",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#htab",
          "type": "function"
        },
        "index": {
          "description": "Match the tab character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "htab",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:htab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch returns the linefeed character \u003ccode\u003e\\n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "lf",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#lf",
          "type": "function"
        },
        "index": {
          "description": "Match returns the linefeed character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "lf",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:lf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \"linear white-space\". That is any number of consecutive\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e, optionally followed by a \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e and (at least) one more\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "lwsp",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#lwsp",
          "type": "function"
        },
        "index": {
          "description": "Match linear white-space That is any number of consecutive wsp optionally followed by crlf and at least one more wsp",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "lwsp",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:lwsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "manyN",
          "package": "hsemail",
          "signature": "Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#manyN",
          "type": "function"
        },
        "index": {
          "description": "Match parser at least times",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "manyN",
          "normalized": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "package": "hsemail",
          "signature": "Int-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:manyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a parser at least \u003ccode\u003en\u003c/code\u003e times, but no more than \u003ccode\u003em\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "manyNtoM",
          "package": "hsemail",
          "signature": "Int -\u003e Int -\u003e GenParser a b c -\u003e GenParser a b [c]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#manyNtoM",
          "type": "function"
        },
        "index": {
          "description": "Match parser at least times but no more than times",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "manyNtoM",
          "normalized": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "package": "hsemail",
          "partial": "Nto",
          "signature": "Int-\u003eInt-\u003eGenParser a b c-\u003eGenParser a b[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:manyNtoM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003cem\u003eany\u003c/em\u003e character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "octet",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#octet",
          "type": "function"
        },
        "index": {
          "description": "Match any character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "octet",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:octet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to generate \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e-based instances for\n the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "parsec2read",
          "package": "hsemail",
          "signature": "Parser a -\u003e String -\u003e [(a, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#parsec2read",
          "type": "function"
        },
        "index": {
          "description": "Helper function to generate Parser based instances for the Read class",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "parsec2read",
          "normalized": "Parser a-\u003eString-\u003e[(a,String)]",
          "package": "hsemail",
          "signature": "Parser a-\u003eString-\u003e[(a,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:parsec2read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"quoted pair\". Any characters (excluding CR and\n LF) may be quoted.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "quoted_pair",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#quoted_pair",
          "type": "function"
        },
        "index": {
          "description": "Match quoted pair Any characters excluding CR and LF may be quoted",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "quoted_pair",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:quoted_pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a quoted string. The specials \"\u003ccode\u003e\\\u003c/code\u003e\" and\n \"\u003ccode\u003e\"\u003c/code\u003e\" must be escaped inside a quoted string; CR and\n LF are not allowed at all.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "quoted_string",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#quoted_string",
          "type": "function"
        },
        "index": {
          "description": "Match quoted string The specials and must be escaped inside quoted string CR and LF are not allowed at all",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "quoted_string",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:quoted_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the space.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "sp",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#sp",
          "type": "function"
        },
        "index": {
          "description": "Match the space",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "sp",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any printable ASCII character. (The \"v\" stands for\n \"visible\".) That is any character in the decimal range of\n [33..126].\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "vchar",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#vchar",
          "type": "function"
        },
        "index": {
          "description": "Match any printable ASCII character The stands for visible That is any character in the decimal range of",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "vchar",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:vchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003esp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehtab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "wsp",
          "package": "hsemail",
          "signature": "CharParser st Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2234.html#wsp",
          "type": "function"
        },
        "index": {
          "description": "Match either sp or htab",
          "hierarchy": "Text ParserCombinators Parsec Rfc2234",
          "module": "Text.ParserCombinators.Parsec.Rfc2234",
          "name": "wsp",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2234.html#v:wsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports parser combinators for the grammar\n   described in RFC2821, \"Simple Mail Transfer Protocol\",\n   \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2821.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Rfc2821",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports parser combinators for the grammar described in RFC2821 Simple Mail Transfer Protocol http www.faqs.org rfcs rfc2821.html",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Rfc2821",
          "package": "hsemail",
          "partial": "Rfc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Category",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Category",
          "package": "hsemail",
          "partial": "Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Event",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Event",
          "package": "hsemail",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general e-mail address has the form:\n \u003ccode\u003e\u003c[@route,...:]user@domain\u003e\u003c/code\u003e. This type, too,\n supports \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e. Note that a \"shown\" address\n is \u003cem\u003ealways\u003c/em\u003e enclosed in angular brackets. When comparing\n two mailboxes for equality, the hostname is case-insensitive.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Mailbox",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Mailbox",
          "type": "data"
        },
        "index": {
          "description": "The most general e-mail address has the form route user@domain This type too supports show and read Note that shown address is always enclosed in angular brackets When comparing two mailboxes for equality the hostname is case-insensitive",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Mailbox",
          "package": "hsemail",
          "partial": "Mailbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:Mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SessionState",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SessionState",
          "package": "hsemail",
          "partial": "Session State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esmtpCmd\u003c/a\u003e\u003c/code\u003e parser will create this data type from a\n string. Note that \u003cem\u003eall\u003c/em\u003e command parsers expect their\n input to be terminated with \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpCmd",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "data"
        },
        "index": {
          "description": "The smtpCmd parser will create this data type from string Note that all command parsers expect their input to be terminated with crlf",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpCmd",
          "package": "hsemail",
          "partial": "Smtp Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SmtpCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpCode",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpCode",
          "package": "hsemail",
          "partial": "Smtp Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SmtpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SMTP parsers defined here correspond to the commands\n specified in RFC2821, so I won't document them\n individually.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpParser",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpParser",
          "type": "type"
        },
        "index": {
          "description": "The SMTP parsers defined here correspond to the commands specified in RFC2821 so won document them individually",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpParser",
          "package": "hsemail",
          "partial": "Smtp Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SmtpParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SMTP reply is a three-digit return code plus some waste of\n bandwidth called \"comments\". This is what the list of strings is\n for; one string per line in the reply. \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e will append an\n \"\u003ccode\u003e\\r\\n\u003c/code\u003e\" end-of-line marker to each entry in that list, so that\n the resulting string is ready to be sent back to the peer. For\n example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) [\"worked\", \"like\", \"a charm\" ]\n\u003c/code\u003e\u003c/strong\u003e\"250-worked\\r\\n250-like\\r\\n250 a charm\\r\\n\"\n\u003c/pre\u003e\u003cp\u003eIf the message is an empty list \u003ccode\u003e[]\u003c/code\u003e, a default text will be constructed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) []\n\u003c/code\u003e\u003c/strong\u003e\"250 Success in category MailSystem\\r\\n\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpReply",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpReply",
          "type": "data"
        },
        "index": {
          "description": "An SMTP reply is three-digit return code plus some waste of bandwidth called comments This is what the list of strings is for one string per line in the reply show will append an end-of-line marker to each entry in that list so that the resulting string is ready to be sent back to the peer For example show Reply Code Success MailSystem worked like charm worked n250-like n250 charm If the message is an empty list default text will be constructed show Reply Code Success MailSystem Success in category MailSystem",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpReply",
          "package": "hsemail",
          "partial": "Smtp Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SmtpReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpdFSM",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpdFSM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SmtpdFSM",
          "package": "hsemail",
          "partial": "Smtpd FSM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SmtpdFSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SuccessCode",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SuccessCode",
          "package": "hsemail",
          "partial": "Success Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#t:SuccessCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "AddRcptTo",
          "package": "hsemail",
          "signature": "AddRcptTo Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "AddRcptTo",
          "package": "hsemail",
          "partial": "Add Rcpt To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:AddRcptTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Code",
          "package": "hsemail",
          "signature": "Code SuccessCode Category Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Code",
          "package": "hsemail",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Connection",
          "package": "hsemail",
          "signature": "Connection",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Connection",
          "package": "hsemail",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Data",
          "package": "hsemail",
          "signature": "Data",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Data",
          "package": "hsemail",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for the user\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Deliver",
          "package": "hsemail",
          "signature": "Deliver",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "description": "reserved for the user",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Deliver",
          "package": "hsemail",
          "partial": "Deliver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Deliver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Ehlo",
          "package": "hsemail",
          "signature": "Ehlo String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Ehlo",
          "package": "hsemail",
          "partial": "Ehlo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Ehlo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Expn",
          "package": "hsemail",
          "signature": "Expn String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Expn",
          "package": "hsemail",
          "partial": "Expn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Expn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for the user\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Greeting",
          "package": "hsemail",
          "signature": "Greeting",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "description": "reserved for the user",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Greeting",
          "package": "hsemail",
          "partial": "Greeting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Greeting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveData",
          "package": "hsemail",
          "signature": "HaveData",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveData",
          "package": "hsemail",
          "partial": "Have Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:HaveData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveHelo",
          "package": "hsemail",
          "signature": "HaveHelo",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveHelo",
          "package": "hsemail",
          "partial": "Have Helo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:HaveHelo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveMailFrom",
          "package": "hsemail",
          "signature": "HaveMailFrom",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveMailFrom",
          "package": "hsemail",
          "partial": "Have Mail From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:HaveMailFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveQuit",
          "package": "hsemail",
          "signature": "HaveQuit",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveQuit",
          "package": "hsemail",
          "partial": "Have Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:HaveQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveRcptTo",
          "package": "hsemail",
          "signature": "HaveRcptTo",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "HaveRcptTo",
          "package": "hsemail",
          "partial": "Have Rcpt To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:HaveRcptTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Helo",
          "package": "hsemail",
          "signature": "Helo String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Helo",
          "package": "hsemail",
          "partial": "Helo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Helo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMight be \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Help",
          "package": "hsemail",
          "signature": "Help String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "Might be",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Help",
          "package": "hsemail",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Information",
          "package": "hsemail",
          "signature": "Information",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Information",
          "package": "hsemail",
          "partial": "Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Information"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "IntermediateSuccess",
          "package": "hsemail",
          "signature": "IntermediateSuccess",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "IntermediateSuccess",
          "package": "hsemail",
          "partial": "Intermediate Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:IntermediateSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMight be \u003ccode\u003e\u003ca\u003enullPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "MailFrom",
          "package": "hsemail",
          "signature": "MailFrom Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "Might be nullPath",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "MailFrom",
          "package": "hsemail",
          "partial": "Mail From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:MailFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "MailSystem",
          "package": "hsemail",
          "signature": "MailSystem",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "MailSystem",
          "package": "hsemail",
          "partial": "Mail System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:MailSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Mailbox",
          "package": "hsemail",
          "signature": "Mailbox [String] String String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Mailbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Mailbox",
          "normalized": "Mailbox[String]String String",
          "package": "hsemail",
          "partial": "Mailbox",
          "signature": "Mailbox[String]String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedHeloFirst",
          "package": "hsemail",
          "signature": "NeedHeloFirst",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedHeloFirst",
          "package": "hsemail",
          "partial": "Need Helo First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:NeedHeloFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedMailFromFirst",
          "package": "hsemail",
          "signature": "NeedMailFromFirst",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedMailFromFirst",
          "package": "hsemail",
          "partial": "Need Mail From First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:NeedMailFromFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedRcptToFirst",
          "package": "hsemail",
          "signature": "NeedRcptToFirst",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NeedRcptToFirst",
          "package": "hsemail",
          "partial": "Need Rcpt To First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:NeedRcptToFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional argument ignored.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Noop",
          "package": "hsemail",
          "signature": "Noop",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "Optional argument ignored",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Noop",
          "package": "hsemail",
          "partial": "Noop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTurn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSoml\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSaml\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVrfy\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eExpn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NotImplemened",
          "package": "hsemail",
          "signature": "NotImplemened",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Turn Send Soml Saml Vrfy and Expn",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "NotImplemened",
          "package": "hsemail",
          "partial": "Not Implemened",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:NotImplemened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "PermanentFailure",
          "package": "hsemail",
          "signature": "PermanentFailure",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "PermanentFailure",
          "package": "hsemail",
          "partial": "Permanent Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:PermanentFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "PreliminarySuccess",
          "package": "hsemail",
          "signature": "PreliminarySuccess",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "PreliminarySuccess",
          "package": "hsemail",
          "partial": "Preliminary Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:PreliminarySuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Quit",
          "package": "hsemail",
          "signature": "Quit",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Quit",
          "package": "hsemail",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMight be \u003ccode\u003e\u003ca\u003epostmaster\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "RcptTo",
          "package": "hsemail",
          "signature": "RcptTo Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "Might be postmaster",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "RcptTo",
          "package": "hsemail",
          "partial": "Rcpt To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:RcptTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Reply",
          "package": "hsemail",
          "signature": "Reply SmtpCode [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Reply",
          "normalized": "Reply SmtpCode[String]",
          "package": "hsemail",
          "partial": "Reply",
          "signature": "Reply SmtpCode[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ResetState",
          "package": "hsemail",
          "signature": "ResetState",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ResetState",
          "package": "hsemail",
          "partial": "Reset State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:ResetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Rset",
          "package": "hsemail",
          "signature": "Rset",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Rset",
          "package": "hsemail",
          "partial": "Rset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Rset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Saml",
          "package": "hsemail",
          "signature": "Saml Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Saml",
          "package": "hsemail",
          "partial": "Saml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Saml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayEhlo",
          "package": "hsemail",
          "signature": "SayEhlo String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayEhlo",
          "package": "hsemail",
          "partial": "Say Ehlo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SayEhlo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayEhloAgain",
          "package": "hsemail",
          "signature": "SayEhloAgain String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayEhloAgain",
          "package": "hsemail",
          "partial": "Say Ehlo Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SayEhloAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayHelo",
          "package": "hsemail",
          "signature": "SayHelo String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayHelo",
          "package": "hsemail",
          "partial": "Say Helo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SayHelo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayHeloAgain",
          "package": "hsemail",
          "signature": "SayHeloAgain String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayHeloAgain",
          "package": "hsemail",
          "partial": "Say Helo Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SayHeloAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggered in case of \u003ccode\u003e\u003ca\u003eNoop\u003c/a\u003e\u003c/code\u003e or when \u003ccode\u003e\u003ca\u003eRset\u003c/a\u003e\u003c/code\u003e is\n used before we even have a state.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayOK",
          "package": "hsemail",
          "signature": "SayOK",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Triggered in case of Noop or when Rset is used before we even have state",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SayOK",
          "package": "hsemail",
          "partial": "Say OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SayOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter may be \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SeeksHelp",
          "package": "hsemail",
          "signature": "SeeksHelp String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The parameter may be",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SeeksHelp",
          "package": "hsemail",
          "partial": "Seeks Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SeeksHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Send",
          "package": "hsemail",
          "signature": "Send Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Send",
          "package": "hsemail",
          "partial": "Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SetMailFrom",
          "package": "hsemail",
          "signature": "SetMailFrom Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SetMailFrom",
          "package": "hsemail",
          "partial": "Set Mail From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SetMailFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Shutdown",
          "package": "hsemail",
          "signature": "Shutdown",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Shutdown",
          "package": "hsemail",
          "partial": "Shutdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Soml",
          "package": "hsemail",
          "signature": "Soml Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Soml",
          "package": "hsemail",
          "partial": "Soml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Soml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "StartData",
          "package": "hsemail",
          "signature": "StartData",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "StartData",
          "package": "hsemail",
          "partial": "Start Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:StartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Success",
          "package": "hsemail",
          "signature": "Success",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Success",
          "package": "hsemail",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Syntax",
          "package": "hsemail",
          "signature": "Syntax",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Syntax",
          "package": "hsemail",
          "partial": "Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SyntaxErrorIn",
          "package": "hsemail",
          "signature": "SyntaxErrorIn String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "SyntaxErrorIn",
          "package": "hsemail",
          "partial": "Syntax Error In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:SyntaxErrorIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "TransientFailure",
          "package": "hsemail",
          "signature": "TransientFailure",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "TransientFailure",
          "package": "hsemail",
          "partial": "Transient Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:TransientFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Turn",
          "package": "hsemail",
          "signature": "Turn",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Turn",
          "package": "hsemail",
          "partial": "Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Turn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unknown",
          "package": "hsemail",
          "signature": "Unknown",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unknown",
          "package": "hsemail",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unrecognized",
          "package": "hsemail",
          "signature": "Unrecognized String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unrecognized",
          "package": "hsemail",
          "partial": "Unrecognized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Unrecognized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unspecified3",
          "package": "hsemail",
          "signature": "Unspecified3",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unspecified3",
          "package": "hsemail",
          "partial": "Unspecified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Unspecified3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unspecified4",
          "package": "hsemail",
          "signature": "Unspecified4",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unspecified4",
          "package": "hsemail",
          "partial": "Unspecified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Unspecified4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unused0",
          "package": "hsemail",
          "signature": "Unused0",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SuccessCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Unused0",
          "package": "hsemail",
          "partial": "Unused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Unused0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Vrfy",
          "package": "hsemail",
          "signature": "Vrfy String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "Vrfy",
          "package": "hsemail",
          "partial": "Vrfy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:Vrfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a valid command has been recognized, but the\n argument parser fails, then this type will be\n returned. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e contains the name of the\n command (in all upper-case) and the \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e\n is, obviously, the error description.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "WrongArg",
          "package": "hsemail",
          "signature": "WrongArg String ParseError",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#SmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "When valid command has been recognized but the argument parser fails then this type will be returned The String contains the name of the command in all upper-case and the ParseError is obviously the error description",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "WrongArg",
          "package": "hsemail",
          "partial": "Wrong Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:WrongArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "a_d_l",
          "package": "hsemail",
          "signature": "CharParser st [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#a_d_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "a_d_l",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser st[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:a_d_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eTODO\u003c/em\u003e: Add IPv6 address and general literals\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "address_literal",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#address_literal",
          "type": "function"
        },
        "index": {
          "description": "TODO Add IPv6 address and general literals",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "address_literal",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:address_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "at_domain",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#at_domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "at_domain",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:at_domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "atom",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "atom",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "domain",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#domain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "domain",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "dot_string",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#dot_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "dot_string",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:dot_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ehlo",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#ehlo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ehlo",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:ehlo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "expn",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#expn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "expn",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:expn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the string \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e terminated no matter what.\n '\u003ccode\u003e\\n\u003c/code\u003e' is expanded, otherwise \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e is appended. Note\n that if the string was terminated incorrectly before, it\n still is. This function is useful when reading input with\n \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e which removes the end-of-line\n delimiter.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "fixCRLF",
          "package": "hsemail",
          "signature": "String -\u003e String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#fixCRLF",
          "type": "function"
        },
        "index": {
          "description": "Make the string crlf terminated no matter what is expanded otherwise crlf is appended Note that if the string was terminated incorrectly before it still is This function is useful when reading input with hGetLine which removes the end-of-line delimiter",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "fixCRLF",
          "normalized": "String-\u003eString",
          "package": "hsemail",
          "partial": "CRLF",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:fixCRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "from_path",
          "package": "hsemail",
          "signature": "CharParser st Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#from_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "from_path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:from_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor those who want to parse the \u003ccode\u003e\u003ca\u003eSmtpCmd\u003c/a\u003e\u003c/code\u003e themselves.\n Calling this function in \u003ccode\u003e\u003ca\u003eHaveQuit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eHaveData\u003c/a\u003e\u003c/code\u003e will\n fail an assertion. If \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e is disabled, it will\n return respectively \u003ccode\u003e\u003ca\u003eShutdown\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStartData\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "handleSmtpCmd",
          "package": "hsemail",
          "signature": "SmtpCmd -\u003e SmtpdFSM",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#handleSmtpCmd",
          "type": "function"
        },
        "index": {
          "description": "For those who want to parse the SmtpCmd themselves Calling this function in HaveQuit or HaveData will fail an assertion If assert is disabled it will return respectively Shutdown and StartData again",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "handleSmtpCmd",
          "normalized": "SmtpCmd-\u003eSmtpdFSM",
          "package": "hsemail",
          "partial": "Smtp Cmd",
          "signature": "SmtpCmd-\u003eSmtpdFSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:handleSmtpCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "helo",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#helo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "helo",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:helo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "help",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#help",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "help",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ipv4_literal",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#ipv4_literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ipv4_literal",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:ipv4_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ipv4addr",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#ipv4addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "ipv4addr",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:ipv4addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reply constitutes \"failure\" if the status code is\n either \u003ccode\u003e\u003ca\u003ePermanentFailure\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTransientFailure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isFailure",
          "package": "hsemail",
          "signature": "SmtpReply -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#isFailure",
          "type": "function"
        },
        "index": {
          "description": "reply constitutes failure if the status code is either PermanentFailure or TransientFailure",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isFailure",
          "normalized": "SmtpReply-\u003eBool",
          "package": "hsemail",
          "partial": "Failure",
          "signature": "SmtpReply-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:isFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replies \u003ccode\u003e221\u003c/code\u003e and \u003ccode\u003e421\u003c/code\u003e signify \u003ccode\u003e\u003ca\u003eShutdown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isShutdown",
          "package": "hsemail",
          "signature": "SmtpReply -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#isShutdown",
          "type": "function"
        },
        "index": {
          "description": "The replies and signify Shutdown",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isShutdown",
          "normalized": "SmtpReply-\u003eBool",
          "package": "hsemail",
          "partial": "Shutdown",
          "signature": "SmtpReply-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:isShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reply constitutes \"success\" if the status code is\n any of \u003ccode\u003e\u003ca\u003ePreliminarySuccess\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eIntermediateSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isSuccess",
          "package": "hsemail",
          "signature": "SmtpReply -\u003e Bool",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#isSuccess",
          "type": "function"
        },
        "index": {
          "description": "reply constitutes success if the status code is any of PreliminarySuccess Success or IntermediateSuccess",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "isSuccess",
          "normalized": "SmtpReply-\u003eBool",
          "package": "hsemail",
          "partial": "Success",
          "signature": "SmtpReply-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:isSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "local_part",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#local_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "local_part",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:local_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mail",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#mail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mail",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:mail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mailbox",
          "package": "hsemail",
          "signature": "CharParser st Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#mailbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mailbox",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a parser for a command without arguments.\n Expects \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mkCmd0",
          "package": "hsemail",
          "signature": "String -\u003e a -\u003e CharParser st a",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#mkCmd0",
          "type": "function"
        },
        "index": {
          "description": "Construct parser for command without arguments Expects crlf",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mkCmd0",
          "normalized": "String-\u003ea-\u003eCharParser b a",
          "package": "hsemail",
          "partial": "Cmd",
          "signature": "String-\u003ea-\u003eCharParser st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:mkCmd0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a parser for a command with an argument, which\n the given parser will handle. The result of the argument\n parser will be applied to the type constructor before it\n is returned. Expects \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mkCmd1",
          "package": "hsemail",
          "signature": "String -\u003e (a -\u003e SmtpCmd) -\u003e CharParser st a -\u003e CharParser st SmtpCmd",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#mkCmd1",
          "type": "function"
        },
        "index": {
          "description": "Construct parser for command with an argument which the given parser will handle The result of the argument parser will be applied to the type constructor before it is returned Expects crlf",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "mkCmd1",
          "normalized": "String-\u003e(a-\u003eSmtpCmd)-\u003eCharParser b a-\u003eCharParser b SmtpCmd",
          "package": "hsemail",
          "partial": "Cmd",
          "signature": "String-\u003e(a-\u003eSmtpCmd)-\u003eCharParser st a-\u003eCharParser st SmtpCmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:mkCmd1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMay have an optional \u003ccode\u003e\u003ca\u003eword\u003c/a\u003e\u003c/code\u003e argument, but it is ignored.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "noop",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#noop",
          "type": "function"
        },
        "index": {
          "description": "May have an optional word argument but it is ignored",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "noop",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enullPath\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e [] \"\" \"\" = \"\u003c\u003e\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "nullPath",
          "package": "hsemail",
          "signature": "Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#nullPath",
          "type": "function"
        },
        "index": {
          "description": "nullPath Mailbox",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "nullPath",
          "package": "hsemail",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:nullPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "number",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "number",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "path",
          "package": "hsemail",
          "signature": "CharParser st Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epostmaster\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e [] \"postmaster\" \"\" = \"\u003cpostmaster\u003e\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "postmaster",
          "package": "hsemail",
          "signature": "Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#postmaster",
          "type": "function"
        },
        "index": {
          "description": "postmaster Mailbox postmaster postmaster",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "postmaster",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:postmaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "quit",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "quit",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "rcpt",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#rcpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "rcpt",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:rcpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e. Fails \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e if invalid numbers\n are given.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "reply",
          "package": "hsemail",
          "signature": "Int -\u003e Int -\u003e Int -\u003e [String] -\u003e SmtpReply",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#reply",
          "type": "function"
        },
        "index": {
          "description": "Construct Reply Fails assert if invalid numbers are given",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "reply",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e[String]-\u003eSmtpReply",
          "package": "hsemail",
          "signature": "Int-\u003eInt-\u003eInt-\u003e[String]-\u003eSmtpReply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "rset",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#rset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "rset",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:rset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "saml",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#saml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "saml",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:saml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "send",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "send",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser recognizes any of the SMTP commands defined\n below. Note that \u003cem\u003eall\u003c/em\u003e command parsers expect their input\n to be terminated with \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpCmd",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#smtpCmd",
          "type": "function"
        },
        "index": {
          "description": "This parser recognizes any of the SMTP commands defined below Note that all command parsers expect their input to be terminated with crlf",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpCmd",
          "package": "hsemail",
          "partial": "Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:smtpCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser name \"data\" was taken.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpData",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#smtpData",
          "type": "function"
        },
        "index": {
          "description": "The parser name data was taken",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpData",
          "package": "hsemail",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:smtpData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a line of SMTP dialogue and run \u003ccode\u003e\u003ca\u003ehandleSmtpCmd\u003c/a\u003e\u003c/code\u003e to\n determine the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e. In case of syntax errors,\n \u003ccode\u003e\u003ca\u003eSyntaxErrorIn\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eUnrecognized\u003c/a\u003e\u003c/code\u003e will be returned.\n Inputs must be terminated with \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003efixCRLF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpdFSM",
          "package": "hsemail",
          "signature": "String -\u003e SmtpdFSM",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#smtpdFSM",
          "type": "function"
        },
        "index": {
          "description": "Parse line of SMTP dialogue and run handleSmtpCmd to determine the Event In case of syntax errors SyntaxErrorIn or Unrecognized will be returned Inputs must be terminated with crlf See fixCRLF",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "smtpdFSM",
          "normalized": "String-\u003eSmtpdFSM",
          "package": "hsemail",
          "partial": "FSM",
          "signature": "String-\u003eSmtpdFSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:smtpdFSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "snum",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#snum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "snum",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:snum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "soml",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#soml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "soml",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:soml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "subdomain",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#subdomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "subdomain",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:subdomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "to_path",
          "package": "hsemail",
          "signature": "CharParser st Mailbox",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#to_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "to_path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:to_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "tokenList",
          "package": "hsemail",
          "signature": "CharParser st String -\u003e Char -\u003e CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#tokenList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "tokenList",
          "normalized": "CharParser a String-\u003eChar-\u003eCharParser a String",
          "package": "hsemail",
          "partial": "List",
          "signature": "CharParser st String-\u003eChar-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:tokenList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "turn",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#turn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "turn",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:turn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "vrfy",
          "package": "hsemail",
          "signature": "SmtpParser st",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#vrfy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "vrfy",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:vrfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a useful addition: The parser accepts an \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e\n or a \u003ccode\u003e\u003ca\u003equoted_string\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "word",
          "package": "hsemail",
          "signature": "CharParser st String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2821.html#word",
          "type": "function"
        },
        "index": {
          "description": "This is useful addition The parser accepts an atom or quoted string",
          "hierarchy": "Text ParserCombinators Parsec Rfc2821",
          "module": "Text.ParserCombinators.Parsec.Rfc2821",
          "name": "word",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2821.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for the grammar defined in\n   RFC2822, \"Internet Message Format\",\n   \u003ca\u003ehttp://www.faqs.org/rfcs/rfc2822.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Rfc2822",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parsers for the grammar defined in RFC2822 Internet Message Format http www.faqs.org rfcs rfc2822.html",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Rfc2822",
          "package": "hsemail",
          "partial": "Rfc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Field",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "data"
        },
        "index": {
          "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Field",
          "package": "hsemail",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "GenericMessage",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#GenericMessage",
          "type": "data"
        },
        "index": {
          "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "GenericMessage",
          "package": "hsemail",
          "partial": "Generic Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#t:GenericMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Message",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Message",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Message",
          "package": "hsemail",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "NameAddr",
          "package": "hsemail",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#NameAddr",
          "type": "data"
        },
        "index": {
          "description": "NameAddr is composed of an optional realname mandatory e-mail address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "NameAddr",
          "package": "hsemail",
          "partial": "Name Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#t:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Bcc",
          "package": "hsemail",
          "signature": "Bcc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Bcc",
          "normalized": "Bcc[NameAddr]",
          "package": "hsemail",
          "partial": "Bcc",
          "signature": "Bcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Cc",
          "package": "hsemail",
          "signature": "Cc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Cc",
          "normalized": "Cc[NameAddr]",
          "package": "hsemail",
          "partial": "Cc",
          "signature": "Cc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Comments",
          "package": "hsemail",
          "signature": "Comments String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Comments",
          "package": "hsemail",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Date",
          "package": "hsemail",
          "signature": "Date CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Date",
          "package": "hsemail",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "From",
          "package": "hsemail",
          "signature": "From [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "From",
          "normalized": "From[NameAddr]",
          "package": "hsemail",
          "partial": "From",
          "signature": "From[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "InReplyTo",
          "package": "hsemail",
          "signature": "InReplyTo [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "InReplyTo",
          "normalized": "InReplyTo[String]",
          "package": "hsemail",
          "partial": "In Reply To",
          "signature": "InReplyTo[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:InReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Keywords",
          "package": "hsemail",
          "signature": "Keywords [[String]]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Keywords",
          "normalized": "Keywords[[String]]",
          "package": "hsemail",
          "partial": "Keywords",
          "signature": "Keywords[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Message",
          "package": "hsemail",
          "signature": "Message [Field] a",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#GenericMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Message",
          "normalized": "Message[Field]a",
          "package": "hsemail",
          "partial": "Message",
          "signature": "Message[Field]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "MessageID",
          "package": "hsemail",
          "signature": "MessageID String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "MessageID",
          "package": "hsemail",
          "partial": "Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:MessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "NameAddr",
          "package": "hsemail",
          "signature": "NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "NameAddr",
          "package": "hsemail",
          "partial": "Name Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ObsReceived",
          "package": "hsemail",
          "signature": "ObsReceived [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ObsReceived",
          "normalized": "ObsReceived[(String,String)]",
          "package": "hsemail",
          "partial": "Obs Received",
          "signature": "ObsReceived[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ObsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "OptionalField",
          "package": "hsemail",
          "signature": "OptionalField String String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "OptionalField",
          "package": "hsemail",
          "partial": "Optional Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:OptionalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Received",
          "package": "hsemail",
          "signature": "Received ([(String, String)], CalendarTime)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Received",
          "normalized": "Received([(String,String)],CalendarTime)",
          "package": "hsemail",
          "partial": "Received",
          "signature": "Received([(String,String)],CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "References",
          "package": "hsemail",
          "signature": "References [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "References",
          "normalized": "References[String]",
          "package": "hsemail",
          "partial": "References",
          "signature": "References[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:References"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ReplyTo",
          "package": "hsemail",
          "signature": "ReplyTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ReplyTo",
          "normalized": "ReplyTo[NameAddr]",
          "package": "hsemail",
          "partial": "Reply To",
          "signature": "ReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentBcc",
          "package": "hsemail",
          "signature": "ResentBcc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentBcc",
          "normalized": "ResentBcc[NameAddr]",
          "package": "hsemail",
          "partial": "Resent Bcc",
          "signature": "ResentBcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentCc",
          "package": "hsemail",
          "signature": "ResentCc [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentCc",
          "normalized": "ResentCc[NameAddr]",
          "package": "hsemail",
          "partial": "Resent Cc",
          "signature": "ResentCc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentDate",
          "package": "hsemail",
          "signature": "ResentDate CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentDate",
          "package": "hsemail",
          "partial": "Resent Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentFrom",
          "package": "hsemail",
          "signature": "ResentFrom [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentFrom",
          "normalized": "ResentFrom[NameAddr]",
          "package": "hsemail",
          "partial": "Resent From",
          "signature": "ResentFrom[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentMessageID",
          "package": "hsemail",
          "signature": "ResentMessageID String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentMessageID",
          "package": "hsemail",
          "partial": "Resent Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentMessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentReplyTo",
          "package": "hsemail",
          "signature": "ResentReplyTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentReplyTo",
          "normalized": "ResentReplyTo[NameAddr]",
          "package": "hsemail",
          "partial": "Resent Reply To",
          "signature": "ResentReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentSender",
          "package": "hsemail",
          "signature": "ResentSender NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentSender",
          "package": "hsemail",
          "partial": "Resent Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentTo",
          "package": "hsemail",
          "signature": "ResentTo [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ResentTo",
          "normalized": "ResentTo[NameAddr]",
          "package": "hsemail",
          "partial": "Resent To",
          "signature": "ResentTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ResentTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ReturnPath",
          "package": "hsemail",
          "signature": "ReturnPath String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ReturnPath",
          "package": "hsemail",
          "partial": "Return Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ReturnPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Sender",
          "package": "hsemail",
          "signature": "Sender NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Sender",
          "package": "hsemail",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Subject",
          "package": "hsemail",
          "signature": "Subject String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "Subject",
          "package": "hsemail",
          "partial": "Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:Subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "To",
          "package": "hsemail",
          "signature": "To [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "To",
          "normalized": "To[NameAddr]",
          "package": "hsemail",
          "partial": "To",
          "signature": "To[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \"address specification\". That is a \u003ccode\u003e\u003ca\u003elocal_part\u003c/a\u003e\u003c/code\u003e, followed\n by an \"\u003ccode\u003e@\u003c/code\u003e\" character, followed by a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e. Return the complete\n address as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, ignoring any whitespace or any comments.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "addr_spec",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#addr_spec",
          "type": "function"
        },
        "index": {
          "description": "Parse an address specification That is local part followed by an character followed by domain Return the complete address as String ignoring any whitespace or any comments",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "addr_spec",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:addr_spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e or an address \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e and return the\n address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "address",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#address",
          "type": "function"
        },
        "index": {
          "description": "Parse single mailbox or an address group and return the address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "address",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "address_list",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#address_list",
          "type": "function"
        },
        "index": {
          "description": "Parse list of address addresses every two addresses being separated by comma and return the list of found address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "address_list",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:address_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eangle_addr\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eobs_angle_addr\u003c/a\u003e\u003c/code\u003e and return the address.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "angle_addr",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#angle_addr",
          "type": "function"
        },
        "index": {
          "description": "Parse an angle addr or an obs angle addr and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "angle_addr",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:angle_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII character except for control characters,\n \u003ccode\u003e\u003ca\u003especials\u003c/a\u003e\u003c/code\u003e, or space. \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edot_atom\u003c/a\u003e\u003c/code\u003e are made up of this.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "atext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#atext",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII character except for control characters specials or space atom and dot atom are made up of this",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "atext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:atext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch one or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003e characters and skip any preceeding or\n trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "atom",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Match one or more atext characters and skip any preceeding or trailing cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "atom",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eBcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "bcc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#bcc",
          "type": "function"
        },
        "index": {
          "description": "Parse Bcc header line and return the address list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "bcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message body is just an unstructured sequence of characters.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "body",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#body",
          "type": "function"
        },
        "index": {
          "description": "message body is just an unstructured sequence of characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "body",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eCc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "cc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#cc",
          "type": "function"
        },
        "index": {
          "description": "Parse Cc header line and return the address list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "cc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any combination of \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "cfws",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#cfws",
          "type": "function"
        },
        "index": {
          "description": "Match any combination of fws and comments",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "cfws",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:cfws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"comments\". That is any combination of \u003ccode\u003e\u003ca\u003ectext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003es, and \u003ccode\u003e\u003ca\u003efws\u003c/a\u003e\u003c/code\u003e between brackets. Comments may nest.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "comment",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Match comments That is any combination of ctext quoted pair and fws between brackets Comments may nest",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "comment",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eComments:\u003c/code\u003e\" header line and return its contents verbatim.\n Please note that all whitespace and/or comments are preserved, i.e.\n the result of parsing \u003ccode\u003e\"Comments: foo\"\u003c/code\u003e is \u003ccode\u003e\" foo\"\u003c/code\u003e, not \u003ccode\u003e\"foo\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "comments",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#comments",
          "type": "function"
        },
        "index": {
          "description": "Parse Comments header line and return its contents verbatim Please note that all whitespace and or comments are preserved i.e the result of parsing Comments foo is foo not foo",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "comments",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control character except for \"\u003ccode\u003e(\u003c/code\u003e\",\n \"\u003ccode\u003e)\u003c/code\u003e\", and \"\u003ccode\u003e\\\u003c/code\u003e\". This is used to describe the legal content of\n \u003ccode\u003e\u003ca\u003ecomment\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This parser accepts 8-bit characters, even though this is\n not legal according to the RFC. Unfortunately, 8-bit content in\n comments has become fairly common in the real world, so we'll just\n accept the fact.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ctext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#ctext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control character except for and This is used to describe the legal content of comment Note This parser accepts bit characters even though this is not legal according to the RFC Unfortunately bit content in comments has become fairly common in the real world so we ll just accept the fact",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ctext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ctext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a date of the form \"\u003ccode\u003edd:mm:yyyy\u003c/code\u003e\" and return\n a tripple of the form (Int,Month,Int) - corresponding to\n (year,month,day).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "date",
          "package": "hsemail",
          "signature": "CharParser a (Int, Month, Int)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#date",
          "type": "function"
        },
        "index": {
          "description": "This parser will match date of the form dd mm yyyy and return tripple of the form Int Month Int corresponding to year month day",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "date",
          "normalized": "CharParser a(Int,Month,Int)",
          "package": "hsemail",
          "signature": "CharParser a(Int,Month,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date and time specification of the form\n\u003c/p\u003e\u003cpre\u003e   Thu, 19 Dec 2002 20:35:46 +0200\n\u003c/pre\u003e\u003cp\u003ewhere the weekday specification \"\u003ccode\u003eThu,\u003c/code\u003e\" is optional. The parser\n returns a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e, which is set to the appropriate values.\n Note, though, that not all fields of \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will\n necessarily be set correctly! Obviously, when no weekday has been\n provided, the parser will set this field to \u003ccode\u003e\u003ca\u003eMonday\u003c/a\u003e\u003c/code\u003e - regardless\n of whether the day actually is a monday or not. Similarly, the day\n of the year will always be returned as \u003ccode\u003e0\u003c/code\u003e. The timezone name will\n always be empty: \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNor will the \u003ccode\u003e\u003ca\u003edate_time\u003c/a\u003e\u003c/code\u003e parser perform \u003cem\u003eany\u003c/em\u003e consistency checking.\n It will accept\n\u003c/p\u003e\u003cpre\u003e    40 Apr 2002 13:12 +0100\n\u003c/pre\u003e\u003cp\u003eas a perfectly valid date.\n\u003c/p\u003e\u003cp\u003eIn order to get all fields set to meaningful values, and in order\n to verify the date's consistency, you will have to feed it into any\n of the conversion routines provided in \u003ca\u003eSystem.Time\u003c/a\u003e, such as\n \u003ccode\u003e\u003ca\u003etoClockTime\u003c/a\u003e\u003c/code\u003e. (When doing this, keep in mind that most functions\n return \u003cem\u003elocal time\u003c/em\u003e. This will not necessarily be the time you're\n expecting.)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "date_time",
          "package": "hsemail",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#date_time",
          "type": "function"
        },
        "index": {
          "description": "Parse date and time specification of the form Thu Dec where the weekday specification Thu is optional The parser returns CalendarTime which is set to the appropriate values Note though that not all fields of CalendarTime will necessarily be set correctly Obviously when no weekday has been provided the parser will set this field to Monday regardless of whether the day actually is monday or not Similarly the day of the year will always be returned as The timezone name will always be empty Nor will the date time parser perform any consistency checking It will accept Apr as perfectly valid date In order to get all fields set to meaningful values and in order to verify the date consistency you will have to feed it into any of the conversion routines provided in System.Time such as toClockTime When doing this keep in mind that most functions return local time This will not necessarily be the time you re expecting",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "date_time",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:date_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a 1 or 2-digit number (day of month), recognizing both\n standard and obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#day",
          "type": "function"
        },
        "index": {
          "description": "Match or digit number day of month recognizing both standard and obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will the abbreviated weekday names (\"\u003ccode\u003eMon\u003c/code\u003e\", \"\u003ccode\u003eTue\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_name",
          "package": "hsemail",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#day_name",
          "type": "function"
        },
        "index": {
          "description": "This parser will the abbreviated weekday names Mon Tue and return the appropriate Day value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_name",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:day_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_of_month",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#day_of_month",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_of_month",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:day_of_month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser matches a \u003ccode\u003e\u003ca\u003eday_name\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eobs_day_of_week\u003c/a\u003e\u003c/code\u003e (optionally\n wrapped in folding whitespace) and return its \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_of_week",
          "package": "hsemail",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#day_of_week",
          "type": "function"
        },
        "index": {
          "description": "This parser matches day name or an obs day of week optionally wrapped in folding whitespace and return its Day value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "day_of_week",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:day_of_week"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return any characters that are legal in a\n \u003ccode\u003e\u003ca\u003edomain_literal\u003c/a\u003e\u003c/code\u003e. That is \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dcontent",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#dcontent",
          "type": "function"
        },
        "index": {
          "description": "Parse and return any characters that are legal in domain literal That is dtext or quoted pair",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dcontent",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:dcontent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "display_name",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#display_name",
          "type": "function"
        },
        "index": {
          "description": "Parse and return phrase",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "display_name",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:display_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \"domain part\" of an \u003ccode\u003e\u003ca\u003eaddr_spec\u003c/a\u003e\u003c/code\u003e. That is either\n a \u003ccode\u003e\u003ca\u003edot_atom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003edomain_literal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "domain",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Parse and return domain part of an addr spec That is either dot atom or domain literal",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "domain",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"domain literal\". That is a \"\u003ccode\u003e[\u003c/code\u003e\" character, followed by\n any amount of \u003ccode\u003e\u003ca\u003edcontent\u003c/a\u003e\u003c/code\u003e, followed by a terminating \"\u003ccode\u003e]\u003c/code\u003e\"\n character. The complete string is returned verbatim.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "domain_literal",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#domain_literal",
          "type": "function"
        },
        "index": {
          "description": "Parse domain literal That is character followed by any amount of dcontent followed by terminating character The complete string is returned verbatim",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "domain_literal",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:domain_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003edot_atom_text\u003c/a\u003e\u003c/code\u003e and skip any preceeding or trailing \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dot_atom",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#dot_atom",
          "type": "function"
        },
        "index": {
          "description": "Match dot atom text and skip any preceeding or trailing cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dot_atom",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:dot_atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch two or more \u003ccode\u003e\u003ca\u003eatext\u003c/a\u003e\u003c/code\u003es interspersed by dots.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dot_atom_text",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#dot_atom_text",
          "type": "function"
        },
        "index": {
          "description": "Match two or more atext interspersed by dots",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dot_atom_text",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:dot_atom_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return any ASCII characters except \"\u003ccode\u003e[\u003c/code\u003e\", \"\u003ccode\u003e]\u003c/code\u003e\", and\n \"\u003ccode\u003e\\\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dtext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#dtext",
          "type": "function"
        },
        "index": {
          "description": "Parse and return any ASCII characters except and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "dtext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:dtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return an arbitrary header field name. That is one or\n more \u003ccode\u003e\u003ca\u003eftext\u003c/a\u003e\u003c/code\u003e characters.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "field_name",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#field_name",
          "type": "function"
        },
        "index": {
          "description": "Parse and return an arbitrary header field name That is one or more ftext characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "field_name",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:field_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will parse an arbitrary number of header fields as\n defined in this RFC. For each field, an appropriate \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e value\n is created, all of them making up the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e list that this parser\n returns.\n\u003c/p\u003e\u003cp\u003eIf you look at the implementation of this parser, you will find\n that it uses Parsec's \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e modifier around \u003cem\u003eall\u003c/em\u003e of the fields.\n The idea behind this is that fields, which contain syntax errors,\n fall back to the catch-all \u003ccode\u003e\u003ca\u003eoptional_field\u003c/a\u003e\u003c/code\u003e. Thus, this parser will\n hardly ever return a syntax error -- what conforms with the idea\n that any message that can possibly be accepted \u003cem\u003eshould\u003c/em\u003e be.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "fields",
          "package": "hsemail",
          "signature": "CharParser a [Field]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#fields",
          "type": "function"
        },
        "index": {
          "description": "This parser will parse an arbitrary number of header fields as defined in this RFC For each field an appropriate Field value is created all of them making up the Field list that this parser returns If you look at the implementation of this parser you will find that it uses Parsec try modifier around all of the fields The idea behind this is that fields which contain syntax errors fall back to the catch-all optional field Thus this parser will hardly ever return syntax error what conforms with the idea that any message that can possibly be accepted should be",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "fields",
          "normalized": "CharParser a[Field]",
          "package": "hsemail",
          "signature": "CharParser a[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eFrom:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "from",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#from",
          "type": "function"
        },
        "index": {
          "description": "Parse From header line and return the mailbox list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "from",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return any ASCII character except for control\n characters, whitespace, and \"\u003ccode\u003e:\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ftext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#ftext",
          "type": "function"
        },
        "index": {
          "description": "Match and return any ASCII character except for control characters whitespace and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "ftext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:ftext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \"folding whitespace\". That is any combination of \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "fws",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#fws",
          "type": "function"
        },
        "index": {
          "description": "Match folding whitespace That is any combination of wsp and crlf followed by wsp",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "fws",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:fws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"group\" of addresses. That is a \u003ccode\u003e\u003ca\u003edisplay_name\u003c/a\u003e\u003c/code\u003e, followed\n by a colon, optionally followed by a \u003ccode\u003e\u003ca\u003emailbox_list\u003c/a\u003e\u003c/code\u003e, followed by a\n semicolon. The found address(es) are returned - what may be none.\n Here is an example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparse group \"\" \"my group: user1@example.org, user2@example.org;\"\n\u003c/code\u003e\u003c/strong\u003eRight [NameAddr {nameAddr_name = Nothing, nameAddr_addr = \"user1@example.org\"},NameAddr {nameAddr_name = Nothing, nameAddr_addr = \"user2@example.org\"}]\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "group",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#group",
          "type": "function"
        },
        "index": {
          "description": "Parse group of addresses That is display name followed by colon optionally followed by mailbox list followed by semicolon The found address es are returned what may be none Here is an example parse group my group user1@example.org user2@example.org Right NameAddr nameAddr name Nothing nameAddr addr user1@example.org NameAddr nameAddr name Nothing nameAddr addr user2@example.org",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "group",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a parser for a message header line from the\n header's name and a parser for the body.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "header",
          "package": "hsemail",
          "signature": "String -\u003e CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#header",
          "type": "function"
        },
        "index": {
          "description": "Construct parser for message header line from the header name and parser for the body",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "header",
          "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
          "package": "hsemail",
          "signature": "String-\u003eCharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return its integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "hour",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#hour",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return its integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "hour",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"left ID\" part of a \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e. This is almost identical to\n the \u003ccode\u003e\u003ca\u003elocal_part\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules\n about folding and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "id_left",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#id_left",
          "type": "function"
        },
        "index": {
          "description": "Parse left ID part of msg id This is almost identical to the local part of an e-mail address but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "id_left",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:id_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"right ID\" part of a \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e. This is almost identical to\n the \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e of an e-mail address, but with stricter rules about\n folding and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "id_right",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#id_right",
          "type": "function"
        },
        "index": {
          "description": "Parse right ID part of msg id This is almost identical to the domain of an e-mail address but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "id_right",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:id_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eIn-Reply-To:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003es contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "in_reply_to",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#in_reply_to",
          "type": "function"
        },
        "index": {
          "description": "Parse In-Reply-To header line and return the list of msg id contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "in_reply_to",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:in_reply_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "item_name",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#item_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "item_name",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:item_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "item_value",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#item_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "item_value",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:item_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eKeywords:\u003c/code\u003e\" header line and return the list of \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003es\n found. Please not that each phrase is again a list of \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003es, as\n returned by the \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "keywords",
          "package": "hsemail",
          "signature": "CharParser a [[String]]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#keywords",
          "type": "function"
        },
        "index": {
          "description": "Parse Keywords header line and return the list of phrase found Please not that each phrase is again list of atom as returned by the phrase parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "keywords",
          "normalized": "CharParser a[[String]]",
          "package": "hsemail",
          "signature": "CharParser a[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return a \"local part\" of an \u003ccode\u003e\u003ca\u003eaddr_spec\u003c/a\u003e\u003c/code\u003e. That is either\n a \u003ccode\u003e\u003ca\u003edot_atom\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003equoted_string\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "local_part",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#local_part",
          "type": "function"
        },
        "index": {
          "description": "Parse and return local part of an addr spec That is either dot atom or quoted string",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "local_part",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:local_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ename_addr\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eaddr_spec\u003c/a\u003e\u003c/code\u003e and return the\n address.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "mailbox",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#mailbox",
          "type": "function"
        },
        "index": {
          "description": "Parse name addr or an addr spec and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "mailbox",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e addresses, every two addresses being\n separated by a comma, and return the list of found address(es).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "mailbox_list",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#mailbox_list",
          "type": "function"
        },
        "index": {
          "description": "Parse list of mailbox addresses every two addresses being separated by comma and return the list of found address es",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "mailbox_list",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:mailbox_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003eNothing\u003c/code\u003e if the given parser doesn't match. This\n combinator is included in the latest parsec distribution as\n \u003ccode\u003eoptionMaybe\u003c/code\u003e, but ghc-6.6.1 apparently doesn't have it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "maybeOption",
          "package": "hsemail",
          "signature": "GenParser tok st a -\u003e GenParser tok st (Maybe a)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#maybeOption",
          "type": "function"
        },
        "index": {
          "description": "Return Nothing if the given parser doesn match This combinator is included in the latest parsec distribution as optionMaybe but ghc-6.6.1 apparently doesn have it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "maybeOption",
          "normalized": "GenParser a b c-\u003eGenParser a b(Maybe c)",
          "package": "hsemail",
          "partial": "Option",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:maybeOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a complete message as defined by this RFC and it broken down\n into the separate header fields and the message body. Header lines,\n which contain syntax errors, will not cause the parser to abort.\n Rather, these headers will appear as \u003ccode\u003e\u003ca\u003eOptionalField\u003c/a\u003e\u003c/code\u003es (which are\n unparsed) in the resulting \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e. A message must be really,\n really badly broken for this parser to fail.\n\u003c/p\u003e\u003cp\u003eThis behaviour was chosen because it is impossible to predict what\n the user of this module considers to be a fatal error;\n traditionally, parsers are very forgiving when it comes to Internet\n messages.\n\u003c/p\u003e\u003cp\u003eIf you want to implement a really strict parser, you'll have to put\n the appropriate parser together yourself. You'll find that this is\n rather easy to do. Refer to the \u003ccode\u003e\u003ca\u003efields\u003c/a\u003e\u003c/code\u003e parser for further details.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "message",
          "package": "hsemail",
          "signature": "CharParser a Message",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#message",
          "type": "function"
        },
        "index": {
          "description": "Parse complete message as defined by this RFC and it broken down into the separate header fields and the message body Header lines which contain syntax errors will not cause the parser to abort Rather these headers will appear as OptionalField which are unparsed in the resulting Message message must be really really badly broken for this parser to fail This behaviour was chosen because it is impossible to predict what the user of this module considers to be fatal error traditionally parsers are very forgiving when it comes to Internet messages If you want to implement really strict parser you ll have to put the appropriate parser together yourself You ll find that this is rather easy to do Refer to the fields parser for further details",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "message",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eMessage-Id:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e\n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "message_id",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#message_id",
          "type": "function"
        },
        "index": {
          "description": "Parse Message-Id header line and return the msg id contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "message_id",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:message_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return its integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "minute",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#minute",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return its integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "minute",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003emonth_name\u003c/a\u003e\u003c/code\u003e, optionally wrapped in\n folding whitespace, or an \u003ccode\u003e\u003ca\u003eobs_month\u003c/a\u003e\u003c/code\u003e and return its \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "month",
          "package": "hsemail",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#month",
          "type": "function"
        },
        "index": {
          "description": "This parser will match month name optionally wrapped in folding whitespace or an obs month and return its Month value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "month",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will the abbreviated month names (\"\u003ccode\u003eJan\u003c/code\u003e\", \"\u003ccode\u003eFeb\u003c/code\u003e\", ...)\n and return the appropriate \u003ccode\u003e\u003ca\u003eMonth\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "month_name",
          "package": "hsemail",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#month_name",
          "type": "function"
        },
        "index": {
          "description": "This parser will the abbreviated month names Jan Feb and return the appropriate Month value",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "month_name",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:month_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003emessage ID:\u003c/code\u003e\" and return it. A message ID is almost\n identical to an \u003ccode\u003e\u003ca\u003eangle_addr\u003c/a\u003e\u003c/code\u003e, but with stricter rules about folding\n and whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "msg_id",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#msg_id",
          "type": "function"
        },
        "index": {
          "description": "Parse message ID and return it message ID is almost identical to an angle addr but with stricter rules about folding and whitespace",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "msg_id",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:msg_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "nameAddr_addr",
          "package": "hsemail",
          "signature": "String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "nameAddr_addr",
          "package": "hsemail",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:nameAddr_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "nameAddr_name",
          "package": "hsemail",
          "signature": "Maybe String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#NameAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "nameAddr_name",
          "package": "hsemail",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:nameAddr_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eangle_addr\u003c/a\u003e\u003c/code\u003e, optionally prefaced with a \u003ccode\u003e\u003ca\u003edisplay_name\u003c/a\u003e\u003c/code\u003e,\n and return the address.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_addr",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#name_addr",
          "type": "function"
        },
        "index": {
          "description": "Parse an angle addr optionally prefaced with display name and return the address",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_addr",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:name_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_val_list",
          "package": "hsemail",
          "signature": "CharParser a [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#name_val_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_val_list",
          "normalized": "CharParser a[(String,String)]",
          "package": "hsemail",
          "signature": "CharParser a[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:name_val_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_val_pair",
          "package": "hsemail",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#name_val_pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "name_val_pair",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:name_val_pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003edtext\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003e and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eid_right\u003c/a\u003e\u003c/code\u003e of a\n \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_fold_literal",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#no_fold_literal",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more occurences of dtext or quoted pair and return the concatenated string This makes up the id right of msg id",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_fold_literal",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:no_fold_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more occurences of \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003e and\n return the concatenated string. This makes up the \u003ccode\u003e\u003ca\u003eid_left\u003c/a\u003e\u003c/code\u003e of a\n \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_fold_quote",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#no_fold_quote",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more occurences of qtext or quoted pair and return the concatenated string This makes up the id left of msg id",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_fold_quote",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:no_fold_quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII non-whitespace control character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_ws_ctl",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#no_ws_ctl",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII non-whitespace control character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "no_ws_ctl",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:no_ws_ctl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eobs_mbox_list\u003c/a\u003e\u003c/code\u003e but parses a list of\n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003ees rather than \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees. The main difference is that an\n \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e may contain \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003es. Please note that as of now, the\n parser will return a simple list of addresses; the grouping\n information is lost.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_addr_list",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_addr_list",
          "type": "function"
        },
        "index": {
          "description": "This parser is identical to obs mbox list but parses list of address es rather than mailbox es The main difference is that an address may contain group Please note that as of now the parser will return simple list of addresses the grouping information is lost",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_addr_list",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_addr_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser matches the \"obsolete angle address\" syntax, a construct that\n used to be called \"route address\" in earlier RFCs. It differs from a\n standard \u003ccode\u003e\u003ca\u003eangle_addr\u003c/a\u003e\u003c/code\u003e in two ways: (1) it allows far more\n liberal insertion of folding whitespace and comments and (2) the address may\n contain a \"route\" (which this parser ignores):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparse obs_angle_addr \"\" \"\u003c@example1.org,@example2.org:joe@example.org\u003e\"\n\u003c/code\u003e\u003c/strong\u003eRight \"\u003cjoe@example.org\u003e\"\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_angle_addr",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_angle_addr",
          "type": "function"
        },
        "index": {
          "description": "This parser matches the obsolete angle address syntax construct that used to be called route address in earlier RFCs It differs from standard angle addr in two ways it allows far more liberal insertion of folding whitespace and comments and the address may contain route which this parser ignores parse obs angle addr example1.org example2.org joe@example.org Right joe@example.org",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_angle_addr",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_angle_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ebcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_bcc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_bcc",
          "type": "function"
        },
        "index": {
          "description": "Parse bcc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_bcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_cc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_cc",
          "type": "function"
        },
        "index": {
          "description": "Parse cc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_cc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return the obsolete \"char\" syntax, which - unlike\n \u003ccode\u003e\u003ca\u003echaracter\u003c/a\u003e\u003c/code\u003e - did not allow \"carriage return\" and \"linefeed\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_char",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_char",
          "type": "function"
        },
        "index": {
          "description": "Match and return the obsolete char syntax which unlike character did not allow carriage return and linefeed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_char",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ecomments\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_comments",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_comments",
          "type": "function"
        },
        "index": {
          "description": "Parse comments header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_comments",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eday\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_day",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_day",
          "type": "function"
        },
        "index": {
          "description": "Parse day but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_day",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eday_name\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_day_of_week",
          "package": "hsemail",
          "signature": "CharParser a Day",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_day_of_week",
          "type": "function"
        },
        "index": {
          "description": "Parse day name but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_day_of_week",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_day_of_week"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e, which allowed for more\n liberal insertion of folding whitespace and comments. The actual\n string is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_domain",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_domain",
          "type": "function"
        },
        "index": {
          "description": "Parse the obsolete syntax of domain which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_domain",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses a list of domain names, each of them prefaced\n with an \"at\". Multiple names are separated by a comma. The list of\n \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003es is returned - and may be empty.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_domain_list",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_domain_list",
          "type": "function"
        },
        "index": {
          "description": "This parser parses list of domain names each of them prefaced with an at Multiple names are separated by comma The list of domain is returned and may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_domain_list",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_domain_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_fields",
          "package": "hsemail",
          "signature": "GenParser Char a [Field]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_fields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_fields",
          "normalized": "GenParser Char a[Field]",
          "package": "hsemail",
          "signature": "GenParser Char a[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003efrom\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_from",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_from",
          "type": "function"
        },
        "index": {
          "description": "Parse from header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_from",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and return an \"obsolete fws\" token. That is at least one\n \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character, followed by an arbitrary number (including zero)\n of \u003ccode\u003e\u003ca\u003ecrlf\u003c/a\u003e\u003c/code\u003e followed by at least one more \u003ccode\u003e\u003ca\u003ewsp\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_fws",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_fws",
          "type": "function"
        },
        "index": {
          "description": "Parse and return an obsolete fws token That is at least one wsp character followed by an arbitrary number including zero of crlf followed by at least one more wsp character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_fws",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_fws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eheader\u003c/a\u003e\u003c/code\u003e, but allows the obsolete white-space rules.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_header",
          "package": "hsemail",
          "signature": "String -\u003e CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_header",
          "type": "function"
        },
        "index": {
          "description": "Like header but allows the obsolete white-space rules",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_header",
          "normalized": "String-\u003eCharParser a b-\u003eCharParser a b",
          "package": "hsemail",
          "signature": "String-\u003eCharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ehour\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_hour",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_hour",
          "type": "function"
        },
        "index": {
          "description": "Parse hour but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_hour",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the \"left part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003elocal_part\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_id_left",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_id_left",
          "type": "function"
        },
        "index": {
          "description": "Parses the left part of message ID but allows the obsolete syntax which is identical to local part",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_id_left",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_id_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the \"right part\" of a message ID, but allows the obsolete\n syntax, which is identical to a \u003ccode\u003e\u003ca\u003edomain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_id_right",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_id_right",
          "type": "function"
        },
        "index": {
          "description": "Parses the right part of message ID but allows the obsolete syntax which is identical to domain",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_id_right",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_id_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003ein_reply_to\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_in_reply_to",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_in_reply_to",
          "type": "function"
        },
        "index": {
          "description": "Parse an in reply to header line but allow for the obsolete folding and the obsolete phrase syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_in_reply_to",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_in_reply_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ekeywords\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax. Also, this parser accepts \u003ccode\u003e\u003ca\u003eobs_phrase_list\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_keywords",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_keywords",
          "type": "function"
        },
        "index": {
          "description": "Parse keywords header line but allow for the obsolete folding syntax Also this parser accepts obs phrase list",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_keywords",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the obsolete syntax of a \u003ccode\u003e\u003ca\u003elocal_part\u003c/a\u003e\u003c/code\u003e, which allowed for\n more liberal insertion of folding whitespace and comments. The\n actual string is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_local_part",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_local_part",
          "type": "function"
        },
        "index": {
          "description": "Parse the obsolete syntax of local part which allowed for more liberal insertion of folding whitespace and comments The actual string is returned",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_local_part",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_local_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match the obsolete syntax for a \u003ccode\u003e\u003ca\u003emailbox_list\u003c/a\u003e\u003c/code\u003e.\n This one is quite weird: An \u003ccode\u003e\u003ca\u003eobs_mbox_list\u003c/a\u003e\u003c/code\u003e contains an arbitrary\n number of \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003ees - including none -, which are separated by\n commas. But you may have multiple consecutive commas without giving\n a \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e. You may also have a valid \u003ccode\u003e\u003ca\u003eobs_mbox_list\u003c/a\u003e\u003c/code\u003e that\n contains \u003cem\u003eno\u003c/em\u003e \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e at all. On the other hand, you \u003cem\u003emust\u003c/em\u003e have\n at least one comma. The following example is valid:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparse obs_mbox_list \"\" \",\"\n\u003c/code\u003e\u003c/strong\u003eRight []\n\u003c/pre\u003e\u003cp\u003eBut this one is not:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparse obs_mbox_list \"\" \"joe@example.org\"\n\u003c/code\u003e\u003c/strong\u003eLeft (line 1, column 16):\nunexpected end of input\nexpecting obsolete syntax for a list of mailboxes\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_mbox_list",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_mbox_list",
          "type": "function"
        },
        "index": {
          "description": "This parser will match the obsolete syntax for mailbox list This one is quite weird An obs mbox list contains an arbitrary number of mailbox es including none which are separated by commas But you may have multiple consecutive commas without giving mailbox You may also have valid obs mbox list that contains no mailbox at all On the other hand you must have at least one comma The following example is valid parse obs mbox list Right But this one is not parse obs mbox list joe@example.org Left line column unexpected end of input expecting obsolete syntax for list of mailboxes",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_mbox_list",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_mbox_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emessage_id\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_message_id",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_message_id",
          "type": "function"
        },
        "index": {
          "description": "Parse message id header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_message_id",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_message_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eminute\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_minute",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_minute",
          "type": "function"
        },
        "index": {
          "description": "Parse minute but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_minute",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003emonth_name\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_month",
          "package": "hsemail",
          "signature": "CharParser a Month",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_month",
          "type": "function"
        },
        "index": {
          "description": "Parse month name but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_month",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser is identical to \u003ccode\u003e\u003ca\u003eoptional_field\u003c/a\u003e\u003c/code\u003e but allows the more\n liberal line-folding syntax between the \"field_name\" and the \"field\n text\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_optional",
          "package": "hsemail",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_optional",
          "type": "function"
        },
        "index": {
          "description": "This parser is identical to optional field but allows the more liberal line-folding syntax between the field name and the field text",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_optional",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_orig_date",
          "package": "hsemail",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_orig_date",
          "type": "function"
        },
        "index": {
          "description": "Parse date header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_orig_date",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_orig_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch \u003ccode\u003e\u003ca\u003eobs_angle_addr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_path",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_path",
          "type": "function"
        },
        "index": {
          "description": "Match obs angle addr",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"phrase\" syntax, which - unlike \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e -\n allows dots between tokens.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_phrase",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_phrase",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete phrase syntax which unlike phrase allows dots between tokens",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_phrase",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a  \"phrase list\" syntax and return the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n that make up the phrase. In contrast to a \u003ccode\u003e\u003ca\u003ephrase\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e\u003ca\u003eobs_phrase_list\u003c/a\u003e\u003c/code\u003e separates the individual words by commas. This\n syntax is - as you will have guessed - obsolete.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_phrase_list",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_phrase_list",
          "type": "function"
        },
        "index": {
          "description": "Match phrase list syntax and return the list of String that make up the phrase In contrast to phrase the obs phrase list separates the individual words by commas This syntax is as you will have guessed obsolete",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_phrase_list",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_phrase_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"quoted pair\" syntax, which - unlike\n \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003e - allowed \u003cem\u003eany\u003c/em\u003e ASCII character to be specified when\n quoted. The parser will return both, the backslash and the actual\n character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_qp",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_qp",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete quoted pair syntax which unlike quoted pair allowed any ASCII character to be specified when quoted The parser will return both the backslash and the actual character",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_qp",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_qp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_received",
          "package": "hsemail",
          "signature": "CharParser a [(String, String)]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_received",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_received",
          "normalized": "CharParser a[(String,String)]",
          "package": "hsemail",
          "signature": "CharParser a[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereferences\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding and the obsolete phrase syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_references",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_references",
          "type": "function"
        },
        "index": {
          "description": "Parse references header line but allow for the obsolete folding and the obsolete phrase syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_references",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_references"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003ereply_to\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_reply_to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_reply_to",
          "type": "function"
        },
        "index": {
          "description": "Parse reply to header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_reply_to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_reply_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_bcc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_bcc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_bcc",
          "type": "function"
        },
        "index": {
          "description": "Parse resent bcc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_bcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_cc\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_cc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_cc",
          "type": "function"
        },
        "index": {
          "description": "Parse resent cc header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_cc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_date\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_date",
          "package": "hsemail",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_date",
          "type": "function"
        },
        "index": {
          "description": "Parse resent date header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_date",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_from\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_from",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_from",
          "type": "function"
        },
        "index": {
          "description": "Parse resent from header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_from",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_msg_id\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_mid",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_mid",
          "type": "function"
        },
        "index": {
          "description": "Parse resent msg id header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_mid",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_mid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003eResent-Reply-To\u003c/code\u003e header line but allow for the\n obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_reply",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_reply",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Reply-To header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_reply",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_sender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_send",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_send",
          "type": "function"
        },
        "index": {
          "description": "Parse resent sender header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_send",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eresent_to\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_resent_to",
          "type": "function"
        },
        "index": {
          "description": "Parse resent to header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_resent_to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_resent_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_return",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_return",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser parses the \"route\" part of \u003ccode\u003e\u003ca\u003eobs_angle_addr\u003c/a\u003e\u003c/code\u003e and\n returns the list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es that make up this route. Relies on\n \u003ccode\u003e\u003ca\u003eobs_domain_list\u003c/a\u003e\u003c/code\u003e for the actual parsing.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_route",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_route",
          "type": "function"
        },
        "index": {
          "description": "This parser parses the route part of obs angle addr and returns the list of String that make up this route Relies on obs domain list for the actual parsing",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_route",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e but allow for the obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_second",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_second",
          "type": "function"
        },
        "index": {
          "description": "Parse second but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_second",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esender\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_sender",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_sender",
          "type": "function"
        },
        "index": {
          "description": "Parse sender header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_sender",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_subject",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_subject",
          "type": "function"
        },
        "index": {
          "description": "Parse subject header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_subject",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete \"text\" syntax, which - unlike \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e - allowed\n \"carriage returns\" and \"linefeeds\". This is really weird; you\n better consult the RFC for details. The parser will return the\n complete string, including those special characters.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_text",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_text",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete text syntax which unlike text allowed carriage returns and linefeeds This is really weird you better consult the RFC for details The parser will return the complete string including those special characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_text",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e header line but allow for the obsolete\n folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_to",
          "type": "function"
        },
        "index": {
          "description": "Parse to header line but allow for the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch and return the obsolete \"utext\" syntax, which is identical\n to \u003ccode\u003e\u003ca\u003eobs_text\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_utext",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_utext",
          "type": "function"
        },
        "index": {
          "description": "Match and return the obsolete utext syntax which is identical to obs text",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_utext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_utext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eyear\u003c/a\u003e\u003c/code\u003e but allow for a two-digit number (obsolete) and the\n obsolete folding syntax.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_year",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_year",
          "type": "function"
        },
        "index": {
          "description": "Parse year but allow for two-digit number obsolete and the obsolete folding syntax",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_year",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the obsolete zone names and return the appropriate offset.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_zone",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#obs_zone",
          "type": "function"
        },
        "index": {
          "description": "Match the obsolete zone names and return the appropriate offset",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "obs_zone",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:obs_zone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an arbitrary header field and return a tuple containing the\n \u003ccode\u003e\u003ca\u003efield_name\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunstructured\u003c/a\u003e\u003c/code\u003e text of the header. The name will\n \u003cem\u003enot\u003c/em\u003e contain the terminating colon.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "optional_field",
          "package": "hsemail",
          "signature": "CharParser a (String, String)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#optional_field",
          "type": "function"
        },
        "index": {
          "description": "Parse an arbitrary header field and return tuple containing the field name and unstructured text of the header The name will not contain the terminating colon",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "optional_field",
          "normalized": "CharParser a(String,String)",
          "package": "hsemail",
          "signature": "CharParser a(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:optional_field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eDate:\u003c/code\u003e\" header line and return the date it contains a\n \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "orig_date",
          "package": "hsemail",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#orig_date",
          "type": "function"
        },
        "index": {
          "description": "Parse Date header line and return the date it contains CalendarTime",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "orig_date",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:orig_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "path",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either one or more \u003ccode\u003e\u003ca\u003eword\u003c/a\u003e\u003c/code\u003es or an \u003ccode\u003e\u003ca\u003eobs_phrase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "phrase",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#phrase",
          "type": "function"
        },
        "index": {
          "description": "Match either one or more word or an obs phrase",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "phrase",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eqtext\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equoted_pair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "qcontent",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#qcontent",
          "type": "function"
        },
        "index": {
          "description": "Match either qtext or quoted pair",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "qcontent",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:qcontent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "qtext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#qtext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control US-ASCII character except for and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "qtext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:qtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a \"quoted pair\". All characters matched by \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e may be\n quoted. Note that the parsers returns \u003cem\u003eboth\u003c/em\u003e characters, the\n backslash and the actual content.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "quoted_pair",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#quoted_pair",
          "type": "function"
        },
        "index": {
          "description": "Match quoted pair All characters matched by text may be quoted Note that the parsers returns both characters the backslash and the actual content",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "quoted_pair",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:quoted_pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eqcontent\u003c/a\u003e\u003c/code\u003e between double quotes. Any \u003ccode\u003e\u003ca\u003ecfws\u003c/a\u003e\u003c/code\u003e\n preceeding or following the \"atom\" is skipped automatically.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "quoted_string",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#quoted_string",
          "type": "function"
        },
        "index": {
          "description": "Match any number of qcontent between double quotes Any cfws preceeding or following the atom is skipped automatically",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "quoted_string",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:quoted_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "received",
          "package": "hsemail",
          "signature": "CharParser a ([(String, String)], CalendarTime)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#received",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "received",
          "normalized": "CharParser a([(String,String)],CalendarTime)",
          "package": "hsemail",
          "signature": "CharParser a([(String,String)],CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eReferences:\u003c/code\u003e\" header line and return the list of\n \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003es contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "references",
          "package": "hsemail",
          "signature": "CharParser a [String]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#references",
          "type": "function"
        },
        "index": {
          "description": "Parse References header line and return the list of msg id contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "references",
          "normalized": "CharParser a[String]",
          "package": "hsemail",
          "signature": "CharParser a[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:references"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eReply-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "reply_to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#reply_to",
          "type": "function"
        },
        "index": {
          "description": "Parse Reply-To header line and return the address list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "reply_to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:reply_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Bcc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it. (This list may be empty.)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_bcc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_bcc",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Bcc header line and return the address list address es contained in it This list may be empty",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_bcc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Cc:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_cc",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_cc",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Cc header line and return the address list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_cc",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Date:\u003c/code\u003e\" header line and return the date it\n contains as \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_date",
          "package": "hsemail",
          "signature": "CharParser a CalendarTime",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_date",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Date header line and return the date it contains as CalendarTime",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_date",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-From:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_from",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_from",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-From header line and return the mailbox list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_from",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Message-ID:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emsg_id\u003c/a\u003e\u003c/code\u003e\n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_msg_id",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_msg_id",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Message-ID header line and return the msg id contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_msg_id",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_msg_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-Sender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_sender",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_sender",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-Sender header line and return the mailbox list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_sender",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eResent-To:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e\n address contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#resent_to",
          "type": "function"
        },
        "index": {
          "description": "Parse Resent-To header line and return the mailbox address contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "resent_to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:resent_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "return_path",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#return_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "return_path",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:return_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a two-digit number and return its integer\n value. No range checking takes place.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "second",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#second",
          "type": "function"
        },
        "index": {
          "description": "This parser will match two-digit number and return its integer value No range checking takes place",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "second",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eSender:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003emailbox\u003c/a\u003e\u003c/code\u003e address\n contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "sender",
          "package": "hsemail",
          "signature": "CharParser a NameAddr",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#sender",
          "type": "function"
        },
        "index": {
          "description": "Parse Sender header line and return the mailbox address contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "sender",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any of the RFC's \"special\" characters: \u003ccode\u003e()\u003c\u003e[]:;@,.\\\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "specials",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#specials",
          "type": "function"
        },
        "index": {
          "description": "Match any of the RFC special characters",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "specials",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:specials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eSubject:\u003c/code\u003e\" header line and return its contents verbatim.\n Please note that all whitespace and/or comments are preserved, i.e.\n the result of parsing \u003ccode\u003e\"Subject: foo\"\u003c/code\u003e is \u003ccode\u003e\" foo\"\u003c/code\u003e, not \u003ccode\u003e\"foo\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "subject",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#subject",
          "type": "function"
        },
        "index": {
          "description": "Parse Subject header line and return its contents verbatim Please note that all whitespace and or comments are preserved i.e the result of parsing Subject foo is foo not foo",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "subject",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any US-ASCII character except for \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "text",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#text",
          "type": "function"
        },
        "index": {
          "description": "Match any US-ASCII character except for",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "text",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a \u003ccode\u003e\u003ca\u003etime_of_day\u003c/a\u003e\u003c/code\u003e specification followed by a\n \u003ccode\u003e\u003ca\u003ezone\u003c/a\u003e\u003c/code\u003e. It returns the tuple (TimeDiff,Int) corresponding to the\n return values of either parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "time",
          "package": "hsemail",
          "signature": "CharParser a (TimeDiff, Int)",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#time",
          "type": "function"
        },
        "index": {
          "description": "This parser will match time of day specification followed by zone It returns the tuple TimeDiff Int corresponding to the return values of either parser",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "time",
          "normalized": "CharParser a(TimeDiff,Int)",
          "package": "hsemail",
          "signature": "CharParser a(TimeDiff,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a time-of-day specification of \"\u003ccode\u003ehh:mm\u003c/code\u003e\" or\n \"\u003ccode\u003ehh:mm:ss\u003c/code\u003e\" and return the corrsponding time as a \u003ccode\u003e\u003ca\u003eTimeDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "time_of_day",
          "package": "hsemail",
          "signature": "CharParser a TimeDiff",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#time_of_day",
          "type": "function"
        },
        "index": {
          "description": "This parser will match time-of-day specification of hh mm or hh mm ss and return the corrsponding time as TimeDiff",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "time_of_day",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:time_of_day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"\u003ccode\u003eTo:\u003c/code\u003e\" header line and return the \u003ccode\u003e\u003ca\u003eaddress_list\u003c/a\u003e\u003c/code\u003e\n address(es) contained in it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "to",
          "package": "hsemail",
          "signature": "CharParser a [NameAddr]",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#to",
          "type": "function"
        },
        "index": {
          "description": "Parse To header line and return the address list address es contained in it",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "to",
          "normalized": "CharParser a[NameAddr]",
          "package": "hsemail",
          "signature": "CharParser a[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunfold\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003ebetween (optional cfws) (optional cfws)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "unfold",
          "package": "hsemail",
          "signature": "CharParser a b -\u003e CharParser a b",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold between optional cfws optional cfws",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "unfold",
          "normalized": "CharParser a b-\u003eCharParser a b",
          "package": "hsemail",
          "signature": "CharParser a b-\u003eCharParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any number of \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e tokens.\n\u003c/p\u003e\u003cp\u003e\"Unstructured text\" is used in free text fields such as \u003ccode\u003e\u003ca\u003esubject\u003c/a\u003e\u003c/code\u003e.\n Please note that any comments or whitespace that prefaces or\n follows the actual \u003ccode\u003e\u003ca\u003eutext\u003c/a\u003e\u003c/code\u003e is \u003cem\u003eincluded\u003c/em\u003e in the returned string.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "unstructured",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#unstructured",
          "type": "function"
        },
        "index": {
          "description": "Match any number of utext tokens Unstructured text is used in free text fields such as subject Please note that any comments or whitespace that prefaces or follows the actual utext is included in the returned string",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "unstructured",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:unstructured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch any non-whitespace, non-control US-ASCII character except\n for \"\u003ccode\u003e\\\u003c/code\u003e\" and \"\u003ccode\u003e\"\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "utext",
          "package": "hsemail",
          "signature": "CharParser a Char",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#utext",
          "type": "function"
        },
        "index": {
          "description": "Match any non-whitespace non-control US-ASCII character except for and",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "utext",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:utext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equoted_string\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "word",
          "package": "hsemail",
          "signature": "CharParser a String",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#word",
          "type": "function"
        },
        "index": {
          "description": "Match either atom or quoted string",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "word",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a four digit number and return its integer\n value. No range checking is performed.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "year",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#year",
          "type": "function"
        },
        "index": {
          "description": "This parser will match four digit number and return its integer value No range checking is performed",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "year",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser will match a timezone specification of the form\n \"\u003ccode\u003e+hhmm\u003c/code\u003e\" or \"\u003ccode\u003e-hhmm\u003c/code\u003e\" and return the zone's offset to UTC in\n seconds as an integer. \u003ccode\u003e\u003ca\u003eobs_zone\u003c/a\u003e\u003c/code\u003e is matched as well.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "zone",
          "package": "hsemail",
          "signature": "CharParser a Int",
          "source": "src/Text-ParserCombinators-Parsec-Rfc2822.html#zone",
          "type": "function"
        },
        "index": {
          "description": "This parser will match timezone specification of the form hhmm or hhmm and return the zone offset to UTC in seconds as an integer obs zone is matched as well",
          "hierarchy": "Text ParserCombinators Parsec Rfc2822",
          "module": "Text.ParserCombinators.Parsec.Rfc2822",
          "name": "zone",
          "package": "hsemail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsemail/docs/Text-ParserCombinators-Parsec-Rfc2822.html#v:zone"
      }
    }
  ]
]